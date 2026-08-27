#!/usr/bin/env node
/**
 * 都道府県ヒーロー地図のピン位置検証。
 *
 * 各県の _index.ja.md の mapPins を pref-projections.json で SVG 座標へ投影し、
 * public/maps/prefectures/{pref}.svg のどの自治体ポリゴンに入るかを
 * レイキャスティングで判定する。type: "capital" のピンが frontmatter の
 * capital（県庁所在地）自治体に入っていれば OK。
 *
 * Usage: node scripts/verify-pref-pins.cjs
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const projections = require(path.join(ROOT, "src/data/pref-projections.json"));

const REGIONS = ["tohoku", "kanto", "chubu", "kinki", "chugoku", "shikoku", "kyusyu"];

function parsePins(md) {
  const pins = [];
  const re = /\{\s*lat:\s*(-?[\d.]+),\s*lng:\s*(-?[\d.]+),\s*label:\s*"([^"]*)"(?:,\s*type:\s*"([^"]*)")?/g;
  let m;
  while ((m = re.exec(md))) {
    pins.push({ lat: +m[1], lng: +m[2], label: m[3], type: m[4] || "" });
  }
  return pins;
}

function parseSvgPolys(svgText) {
  const polys = [];
  const re = /<path data-code="([^"]*)" data-name="([^"]*)" d="([^"]*)"/g;
  let m;
  while ((m = re.exec(svgText))) {
    const rings = m[3]
      .split("Z")
      .filter(Boolean)
      .map((seg) =>
        [...seg.matchAll(/[ML](-?[\d.]+),(-?[\d.]+)/g)].map((p) => [+p[1], +p[2]])
      )
      .filter((r) => r.length >= 3);
    polys.push({ code: m[1], name: m[2], rings });
  }
  return polys;
}

function inRing(pt, ring) {
  let inside = false;
  const [x, y] = pt;
  for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
    const [xi, yi] = ring[i];
    const [xj, yj] = ring[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
      inside = !inside;
    }
  }
  return inside;
}

function containing(polys, pt) {
  for (const p of polys) {
    for (const r of p.rings) if (inRing(pt, r)) return p;
  }
  return null;
}

let checked = 0, capOk = 0, capNg = 0, outCount = 0;
for (const region of REGIONS) {
  const regionDir = path.join(ROOT, "src/content/rule/asia/japan", region);
  if (!fs.existsSync(regionDir)) continue;
  for (const prefDir of fs.readdirSync(regionDir)) {
    const proj = projections[prefDir];
    const mdPath = path.join(regionDir, prefDir, "_index.ja.md");
    const svgPath = path.join(ROOT, "public/maps/prefectures", `${prefDir}.svg`);
    if (!proj || !fs.existsSync(mdPath) || !fs.existsSync(svgPath)) continue;
    const md = fs.readFileSync(mdPath, "utf8");
    if (!/is_pref:\s*true/.test(md)) continue;
    const capitalM = md.match(/^\s*capital:\s*"([^"]+)"/m);
    const capital = capitalM ? capitalM[1] : null;
    const pins = parsePins(md);
    const polys = parseSvgPolys(fs.readFileSync(svgPath, "utf8"));
    for (const pin of pins) {
      const x = proj.offX + (pin.lng - proj.minLon) * proj.cosLat * proj.scale;
      const y = proj.offY + (proj.maxLat - pin.lat) * proj.scale;
      const hit = containing(polys, [x, y]);
      checked++;
      if (!hit) {
        outCount++;
        console.log(`[out ] ${prefDir}: "${pin.label}" (${pin.lat},${pin.lng}) → 陸地ポリゴン外`);
        continue;
      }
      if (pin.type === "capital" && capital) {
        if (hit.name === capital) capOk++;
        else {
          capNg++;
          console.log(`[cap?] ${prefDir}: capital pin "${pin.label}" → ${hit.name}（期待: ${capital}）`);
        }
      }
    }
  }
}
console.log(`\nchecked=${checked} pins, capital OK=${capOk}, capital NG=${capNg}, outside=${outCount}`);
process.exit(capNg > 0 ? 1 : 0);
