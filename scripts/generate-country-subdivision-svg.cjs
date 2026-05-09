#!/usr/bin/env node
/**
 * Generate a country-subdivision SVG from a single multi-feature GeoJSON
 * (one feature per province/state). Mirrors the geometry pipeline of
 * generate-prefecture-municipality-svg.cjs but adapted for the common
 * "all-in-one-file" data layout shipped by most country shape datasets.
 *
 * Usage:
 *   node scripts/generate-country-subdivision-svg.cjs \
 *     --input c:/tmp/korea_provinces.geojson \
 *     --out public/maps/countries/korea.svg \
 *     --name-prop name_eng \
 *     --code-prop code \
 *     --tolerance 0.01
 */
const fs = require("fs");
const path = require("path");

function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
}
const INPUT = arg("input", "");
const OUT = arg("out", "");
const NAME_PROP = arg("name-prop", "name");
const CODE_PROP = arg("code-prop", "code");
const TOLERANCE = parseFloat(arg("tolerance", "0.01"));
const WIDTH = parseInt(arg("width", "560"), 10);
const HEIGHT = parseInt(arg("height", "640"), 10);
const PADDING = 8;
const MIN_OUTER_AREA = 1e-4; // ~ 1km × 1km — drops tiny offshore artifacts

if (!INPUT || !OUT) {
  console.error("Required: --input <geojson> --out <svg>");
  process.exit(1);
}

// ---------- DP simplification ----------
function perpDist(p, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  if (dx === 0 && dy === 0) {
    const ddx = p[0] - a[0], ddy = p[1] - a[1];
    return Math.sqrt(ddx * ddx + ddy * ddy);
  }
  const t = ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / (dx * dx + dy * dy);
  const ct = Math.max(0, Math.min(1, t));
  const px = a[0] + ct * dx, py = a[1] + ct * dy;
  const ddx = p[0] - px, ddy = p[1] - py;
  return Math.sqrt(ddx * ddx + ddy * ddy);
}
function douglasPeucker(points, eps) {
  const n = points.length;
  if (n < 3) return points.slice();
  const keep = new Uint8Array(n);
  keep[0] = 1; keep[n - 1] = 1;
  const stack = [[0, n - 1]];
  while (stack.length) {
    const [lo, hi] = stack.pop();
    if (hi - lo < 2) continue;
    const a = points[lo], b = points[hi];
    let maxD = 0, idx = -1;
    for (let i = lo + 1; i < hi; i++) {
      const d = perpDist(points[i], a, b);
      if (d > maxD) { maxD = d; idx = i; }
    }
    if (maxD > eps && idx >= 0) {
      keep[idx] = 1;
      stack.push([lo, idx]); stack.push([idx, hi]);
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

// ---------- load ----------
const gj = JSON.parse(fs.readFileSync(INPUT, "utf8"));
if (!Array.isArray(gj.features)) {
  console.error("Input is not a FeatureCollection");
  process.exit(1);
}

const subs = []; // {code, name, polygons (each = single-ring), bbox}
let bbox = [Infinity, Infinity, -Infinity, -Infinity];

for (const feat of gj.features) {
  const props = feat.properties || {};
  const code = String(props[CODE_PROP] ?? "");
  const name = String(props[NAME_PROP] ?? "");
  const g = feat.geometry;
  if (!g || !name) continue;

  const polyList = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
  const flatRings = [];
  for (const poly of polyList) for (const ring of poly) flatRings.push(ring);

  const polygons = [];
  for (const ring of flatRings) {
    if (ringArea(ring) < MIN_OUTER_AREA) continue;
    const dp = douglasPeucker(ring, TOLERANCE);
    // Drop rings that DP collapses below a triangle — those are tiny features
    // not worth showing at this scale (and keeping the raw ring would defeat
    // the simplification).
    if (dp.length < 4) continue;
    const simplified = dp;
    for (const [x, y] of simplified) {
      if (x < bbox[0]) bbox[0] = x;
      if (y < bbox[1]) bbox[1] = y;
      if (x > bbox[2]) bbox[2] = x;
      if (y > bbox[3]) bbox[3] = y;
    }
    polygons.push(simplified);
  }
  if (polygons.length === 0) {
    console.warn(`  skip ${name}: no rings survived filtering`);
    continue;
  }
  subs.push({ code, name, polygons });
}

// ---------- projection ----------
const [minLon, minLat, maxLon, maxLat] = bbox;
const midLat = (minLat + maxLat) / 2;
const cosLat = Math.cos((midLat * Math.PI) / 180);
const lonRange = (maxLon - minLon) * cosLat;
const latRange = maxLat - minLat;
const innerW = WIDTH - PADDING * 2;
const innerH = HEIGHT - PADDING * 2;
const scale = Math.min(innerW / lonRange, innerH / latRange);
const offX = PADDING + (innerW - lonRange * scale) / 2;
const offY = PADDING + (innerH - latRange * scale) / 2;

function project([lon, lat]) {
  const x = offX + (lon - minLon) * cosLat * scale;
  const y = offY + (maxLat - lat) * scale;
  return [x, y];
}

function ringToPath(ring) {
  let d = "";
  for (let i = 0; i < ring.length; i++) {
    const [x, y] = project(ring[i]);
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
  }
  return d + "Z";
}

// ---------- emit SVG ----------
const paths = subs
  .map((s) => {
    const d = s.polygons.map(ringToPath).join("");
    const safeName = s.name.replace(/"/g, "&quot;");
    const safeCode = s.code.replace(/"/g, "&quot;");
    return `<path data-code="${safeCode}" data-name="${safeName}" d="${d}"><title>${safeName}</title></path>`;
  })
  .join("\n");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" class="pref-muni-svg" role="img" aria-label="行政区分">
  <g class="pref-muni-svg__paths" fill="#eaf2fb" stroke="#5b7fa8" stroke-width="0.6" stroke-linejoin="round">
${paths}
  </g>
</svg>
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, svg);
console.log(`Wrote ${OUT} (${(fs.statSync(OUT).size / 1024).toFixed(1)} KB, ${subs.length} subdivisions)`);
console.log(subs.map((s) => `  ${s.code} ${s.name}`).join("\n"));
