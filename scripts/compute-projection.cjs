#!/usr/bin/env node
/**
 * Compute the SVG projection params used by build-country-maps.cjs for a
 * given country config. Outputs a JS object that can be pasted into
 * src/data/quiz-cities/{country}.ts so pin markers line up with the SVG.
 *
 * Usage:
 *   node scripts/compute-projection.cjs <country-slug>
 *   node scripts/compute-projection.cjs usa
 *
 * Reads the config from scripts/country-data/{slug}.cjs and reuses cached
 * Natural Earth / URL-source GeoJSON at c:/tmp/country_maps/.
 */
const fs = require("fs");
const path = require("path");

const CONFIG_DIR = path.join(__dirname, "country-data");
const TMP_BASE = process.platform === "win32" ? "c:/tmp/country_maps" : "/tmp/country_maps";
const NE_CACHE = path.join(TMP_BASE, "ne_admin1.geojson");
const W = 560, H = 640, PAD = 8;

function ringArea(ring) {
  let s = 0;
  for (let i = 0, n = ring.length; i < n; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % n];
    s += x1 * y2 - x2 * y1;
  }
  return Math.abs(s) / 2;
}

const slug = process.argv[2];
if (!slug) {
  console.error("Usage: node scripts/compute-projection.cjs <country-slug>");
  process.exit(1);
}

const cfgPath = path.join(CONFIG_DIR, slug + ".cjs");
if (!fs.existsSync(cfgPath)) {
  console.error("No config:", cfgPath);
  process.exit(1);
}
const cfg = require(cfgPath);

// Load features matching the SVG generator pipeline.
let features;
if (cfg.source.type === "natural-earth") {
  const gj = JSON.parse(fs.readFileSync(NE_CACHE, "utf8"));
  features = gj.features.filter((f) => f.properties.iso_a2 === cfg.source.iso_a2);
} else if (cfg.source.type === "url") {
  const cached = path.join(TMP_BASE, slug + ".geojson");
  if (!fs.existsSync(cached)) {
    console.error("Need cached file at:", cached);
    process.exit(1);
  }
  features = JSON.parse(fs.readFileSync(cached, "utf8")).features;
}

if (cfg.featureFilter) features = features.filter(cfg.featureFilter);
const codeOf = cfg.codeOf || ((f) =>
  f.properties.iso_3166_2 || f.properties.code_hasc || f.properties.adm1_code);
const excludeSet = new Set([
  ...(cfg.excludeCodes || []),
  ...(cfg.svgExcludeCodes || []),
]);
features = features.filter((f) => !excludeSet.has(String(codeOf(f))));

const MIN_OUTER_AREA = cfg.minOuterArea ?? 1e-3;
let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
for (const f of features) {
  const g = f.geometry;
  if (!g) continue;
  const polyList = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
  for (const poly of polyList) {
    for (const ring of poly) {
      if (ringArea(ring) < MIN_OUTER_AREA) continue;
      for (const [x, y] of ring) {
        if (x < minLon) minLon = x;
        if (y < minLat) minLat = y;
        if (x > maxLon) maxLon = x;
        if (y > maxLat) maxLat = y;
      }
    }
  }
}

const midLat = (minLat + maxLat) / 2;
const cosLat = Math.cos((midLat * Math.PI) / 180);
const lonR = (maxLon - minLon) * cosLat;
const latR = maxLat - minLat;
const innerW = W - PAD * 2;
const innerH = H - PAD * 2;
const scale = Math.min(innerW / lonR, innerH / latR);
const offX = PAD + (innerW - lonR * scale) / 2;
const offY = PAD + (innerH - latR * scale) / 2;

// Round to 6 decimal places. Map projection accuracy is well below 1 pixel
// at this precision, and shorter literals avoid spurious 13+ digit runs
// that the repo's PII pre-commit hook flags as potential credit cards.
const r = (n) => Number(n.toFixed(6));
console.log(`// projection params for ${slug}`);
console.log(`{`);
console.log(`  minLon: ${r(minLon)},`);
console.log(`  minLat: ${r(minLat)},`);
console.log(`  maxLon: ${r(maxLon)},`);
console.log(`  maxLat: ${r(maxLat)},`);
console.log(`  cosLat: ${r(cosLat)},`);
console.log(`  scale: ${r(scale)},`);
console.log(`  offX: ${r(offX)},`);
console.log(`  offY: ${r(offY)},`);
console.log(`}`);
