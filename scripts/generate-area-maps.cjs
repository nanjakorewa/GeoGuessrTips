#!/usr/bin/env node
/**
 * 局所エリア（湾岸コンビナート等）のヒーロー地図 SVG を、N03 由来の
 * 市区町村 GeoJSON キャッシュ（c:/tmp/jp_muni/{prefCode}/）から生成する。
 *
 * 都道府県全図（tolerance 0.004）では湾岸の数kmスケールが潰れてしまうため、
 * 生データを小さい tolerance で簡略化し、指定 bbox の viewBox で切り出す。
 *
 * Output:
 *   public/maps/areas/{slug}.svg
 *   src/data/area-projections.json  （StaticGeoMap 用の投影パラメータ）
 *
 * Usage: node scripts/generate-area-maps.cjs [--muni-base <dir>]
 */

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");

function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
}

const MUNI_BASE = arg(
  "muni-base",
  process.platform === "win32" ? "c:/tmp/jp_muni" : "/tmp/jp_muni"
);
const SVG_OUT_DIR = path.join(PROJECT_ROOT, "public/maps/areas");
const PROJ_OUT = path.join(PROJECT_ROOT, "src/data/area-projections.json");

const WIDTH = 560;

/**
 * エリア定義。bbox は [minLon, minLat, maxLon, maxLat]。
 * prefs は読み込む都道府県 JIS コード（bbox に接する県を全部入れる）。
 */
const AREAS = [
  {
    slug: "kashima",
    label: "鹿島臨海工業地帯",
    bbox: [140.5, 35.79, 140.79, 36.05],
    prefs: ["08", "12"],
    tolerance: 0.0004,
  },
  {
    slug: "keiyo",
    label: "京葉工業地域",
    bbox: [139.72, 35.42, 140.2, 35.78],
    prefs: ["12", "13", "14"],
    tolerance: 0.0004,
  },
  {
    slug: "mizushima",
    label: "水島コンビナート",
    bbox: [133.58, 34.36, 133.94, 34.64],
    prefs: ["33", "34", "37"],
    tolerance: 0.0004,
  },
  {
    slug: "setouchi",
    label: "瀬戸内工業地域",
    bbox: [130.7, 33.4, 135.1, 34.95],
    prefs: ["28", "33", "34", "35", "36", "37", "38", "39", "40", "44"],
    tolerance: 0.0018,
  },
];

// ---------- geometry（generate-prefecture-municipality-svg.cjs と同一） ----------
function perpendicularDistance(p, a, b) {
  const dx = b[0] - a[0];
  const dy = b[1] - a[1];
  if (dx === 0 && dy === 0) {
    const ddx = p[0] - a[0];
    const ddy = p[1] - a[1];
    return Math.sqrt(ddx * ddx + ddy * ddy);
  }
  const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy);
  const ct = Math.max(0, Math.min(1, t));
  const projx = a[0] + ct * dx;
  const projy = a[1] + ct * dy;
  const ddx = p[0] - projx;
  const ddy = p[1] - projy;
  return Math.sqrt(ddx * ddx + ddy * ddy);
}

function douglasPeucker(points, eps) {
  const n = points.length;
  if (n < 3) return points.slice();
  const keep = new Uint8Array(n);
  keep[0] = 1;
  keep[n - 1] = 1;
  const stack = [[0, n - 1]];
  while (stack.length) {
    const [lo, hi] = stack.pop();
    if (hi - lo < 2) continue;
    const a = points[lo];
    const b = points[hi];
    let maxD = 0;
    let idx = -1;
    for (let i = lo + 1; i < hi; i++) {
      const d = perpendicularDistance(points[i], a, b);
      if (d > maxD) {
        maxD = d;
        idx = i;
      }
    }
    if (maxD > eps && idx >= 0) {
      keep[idx] = 1;
      stack.push([lo, idx]);
      stack.push([idx, hi]);
    }
  }
  const out = [];
  for (let i = 0; i < n; i++) if (keep[i]) out.push(points[i]);
  return out;
}

function ringArea(ring) {
  let s = 0;
  for (let i = 0, n = ring.length; i < n; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % n];
    s += x1 * y2 - x2 * y1;
  }
  return Math.abs(s) / 2;
}

function ringBBox(ring) {
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const [x, y] of ring) {
    if (x < x0) x0 = x;
    if (y < y0) y0 = y;
    if (x > x1) x1 = x;
    if (y > y1) y1 = y;
  }
  return [x0, y0, x1, y1];
}

function bboxIntersects(a, b) {
  return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1];
}

// ---------- build one area ----------
function buildArea(area) {
  const [minLon, minLat, maxLon, maxLat] = area.bbox;
  const midLat = (minLat + maxLat) / 2;
  const cosLat = Math.cos((midLat * Math.PI) / 180);
  const lonRange = (maxLon - minLon) * cosLat;
  const latRange = maxLat - minLat;
  const scale = WIDTH / lonRange;
  const height = latRange * scale;

  const project = ([lon, lat]) => [
    (lon - minLon) * cosLat * scale,
    (maxLat - lat) * scale,
  ];

  // エリアの外側マージン。viewBox 外へ少しはみ出して描くことで、
  // bbox 縁で境界線が不自然に切れて見えるのを防ぐ。
  const pad = 0.25; // degrees-ish margin for inclusion test
  const inclBox = [minLon - pad, minLat - pad, maxLon + pad, maxLat + pad];
  // 面積の小さすぎるリング（人工物ノイズ）は除外。tolerance に応じて調整。
  const minArea = Math.pow(area.tolerance * 6, 2);

  const paths = [];
  for (const pref of area.prefs) {
    const dir = path.join(MUNI_BASE, pref);
    if (!fs.existsSync(dir)) {
      console.warn(`  [warn] no data dir for pref ${pref}`);
      continue;
    }
    const files = fs.readdirSync(dir).filter((f) => f.endsWith(".json"));
    for (const f of files) {
      let gj;
      try {
        gj = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
      } catch {
        continue;
      }
      let name = "";
      const rings = [];
      for (const feat of gj.features) {
        const props = feat.properties || {};
        name = props.N03_004 || name;
        const g = feat.geometry;
        if (!g) continue;
        const polyList = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
        for (const poly of polyList) for (const ring of poly) rings.push(ring);
      }
      let d = "";
      for (const ring of rings) {
        if (ringArea(ring) < minArea) continue;
        if (!bboxIntersects(ringBBox(ring), inclBox)) continue;
        const dp = douglasPeucker(ring, area.tolerance);
        const simplified = dp.length >= 4 ? dp : ring;
        let seg = "";
        for (let i = 0; i < simplified.length; i++) {
          const [x, y] = project(simplified[i]);
          seg += `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
        }
        d += seg + "Z";
      }
      if (!d) continue;
      const safeName = name.replace(/"/g, "&quot;");
      const code = f.replace(/\.json$/, "");
      paths.push(
        `<path data-code="${code}" data-name="${safeName}" d="${d}"><title>${safeName}</title></path>`
      );
    }
  }

  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${height.toFixed(2)}" class="pref-muni-svg" role="img" aria-label="${area.label}">
  <g class="pref-muni-svg__paths" fill="#eaf2fb" stroke="#5b7fa8" stroke-width="0.6" stroke-linejoin="round">
${paths.join("\n")}
  </g>
</svg>
`;

  fs.mkdirSync(SVG_OUT_DIR, { recursive: true });
  const outFile = path.join(SVG_OUT_DIR, `${area.slug}.svg`);
  fs.writeFileSync(outFile, svg);
  const sizeKB = (fs.statSync(outFile).size / 1024).toFixed(1);
  console.log(`[${area.slug}] wrote ${outFile} (${sizeKB} KB, ${paths.length} municipalities)`);

  return {
    svgPath: `/maps/areas/${area.slug}.svg`,
    label: area.label,
    projection: {
      minLon,
      minLat,
      maxLon,
      maxLat,
      cosLat,
      scale,
      offX: 0,
      offY: 0,
    },
  };
}

const out = {};
for (const area of AREAS) {
  out[area.slug] = buildArea(area);
}
fs.writeFileSync(PROJ_OUT, JSON.stringify(out, null, 2) + "\n");
console.log(`Wrote ${PROJ_OUT}`);
