#!/usr/bin/env node
/**
 * Generate a prefecture municipality SVG from MLIT N03-derived GeoJSON files.
 *
 * Input:   one GeoJSON per municipality (niiyz/JapanCityGeoJson layout, e.g.
 *          c:/tmp/akita_muni/05201.json, 05202.json, ...).
 *          Properties expected: { N03_004: name, N03_007: 5-digit JIS code }.
 * Output:  a single SVG with one <path> per municipality + a centroid marker.
 *
 * Geometry pipeline:
 *   1. Douglas-Peucker simplification (in lon/lat degrees)
 *   2. Equirectangular projection scaled by cos(midLat) to compensate aspect
 *   3. Fit-to-bbox into a fixed viewBox
 *
 * For a PoC this is intentionally dependency-free.
 *
 * Usage:
 *   node scripts/generate-prefecture-municipality-svg.cjs \
 *     --input c:/tmp/akita_muni \
 *     --out public/maps/prefectures/akita.svg \
 *     --tolerance 0.0008
 */

const fs = require("fs");
const path = require("path");

// ---------- args ----------
function arg(name, def) {
  const i = process.argv.indexOf(`--${name}`);
  return i >= 0 ? process.argv[i + 1] : def;
}
const INPUT_DIR = arg("input", "c:/tmp/akita_muni");
const OUT_PATH = arg("out", "public/maps/prefectures/akita.svg");
const TOLERANCE = parseFloat(arg("tolerance", "0.0015")); // ~165m at lat=40°
const WIDTH = parseInt(arg("width", "560"), 10);
const HEIGHT = parseInt(arg("height", "640"), 10);
const PADDING = 8;
// Filter out artifact micro-rings (the N03 source contains ~2000 spurious
// 10-m² rings for some municipalities). MIN_OUTER_AREA also drops tiny
// outlying islands that wouldn't be readable at the target SVG size.
const MIN_RING_AREA = 1e-5; // ~ 100m × 100m at this latitude
const MIN_OUTER_AREA = 5e-5; // ~ 220m × 220m

// ---------- Douglas-Peucker ----------
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
  // Iterative DP — recursion blows the JS stack on rings with ~100k vertices
  // (e.g. 由利本荘市). We mark indices to keep, then collect them.
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

// ---------- ring helpers ----------
function ringArea(ring) {
  let s = 0;
  for (let i = 0, n = ring.length; i < n; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % n];
    s += x1 * y2 - x2 * y1;
  }
  return Math.abs(s) / 2;
}
function ringCentroid(ring) {
  // Polygon centroid via shoelace
  let cx = 0, cy = 0, a = 0;
  for (let i = 0, n = ring.length; i < n; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[(i + 1) % n];
    const cross = x1 * y2 - x2 * y1;
    a += cross;
    cx += (x1 + x2) * cross;
    cy += (y1 + y2) * cross;
  }
  a *= 0.5;
  if (a === 0) {
    // Degenerate; return arithmetic mean
    let mx = 0, my = 0;
    for (const [x, y] of ring) { mx += x; my += y; }
    return [mx / ring.length, my / ring.length];
  }
  return [cx / (6 * a), cy / (6 * a)];
}

// ---------- load & process ----------
const files = fs
  .readdirSync(INPUT_DIR)
  .filter((f) => f.endsWith(".json"))
  .sort();

if (files.length === 0) {
  console.error(`No .json files in ${INPUT_DIR}`);
  process.exit(1);
}

// Each item: { code, name, polygons: [ring[]], bbox }
const munis = [];
let bbox = [Infinity, Infinity, -Infinity, -Infinity];

for (const f of files) {
  const gj = JSON.parse(fs.readFileSync(path.join(INPUT_DIR, f), "utf8"));
  const polygons = []; // array of polygons, each = [outerRing, holes...]
  let name = "";
  let code = "";
  let parent = ""; // N03_003: parent city for designated-city wards
  for (const feat of gj.features) {
    const props = feat.properties || {};
    name = props.N03_004 || name;
    code = props.N03_007 || code;
    parent = props.N03_003 || parent;
    const g = feat.geometry;
    if (!g) continue;
    // The N03-derived data here doesn't follow the GeoJSON spec faithfully:
    // many municipalities (e.g. 男鹿市) put 2000+ rings inside a single
    // "Polygon" entry where ring[0] is a tiny artifact, not the actual
    // outer boundary. We can't rely on ring order or polygon nesting, so
    // we flatten everything to a flat list of rings and treat each ring
    // (above MIN_OUTER_AREA) as its own outer polygon. This drops any
    // hole-rings, but at this rendering scale that's invisible.
    const polyList = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
    const allRings = [];
    for (const poly of polyList) for (const ring of poly) allRings.push(ring);
    for (const ring of allRings) {
      if (ringArea(ring) < MIN_OUTER_AREA) continue;
      const dp = douglasPeucker(ring, TOLERANCE);
      const simplified = dp.length >= 4 ? dp : ring;
      for (const [x, y] of simplified) {
        if (x < bbox[0]) bbox[0] = x;
        if (y < bbox[1]) bbox[1] = y;
        if (x > bbox[2]) bbox[2] = x;
        if (y > bbox[3]) bbox[3] = y;
      }
      polygons.push([simplified]); // each ring becomes a 1-ring polygon
    }
  }
  if (polygons.length === 0) {
    console.warn(`Skipping ${f}: no polygons survived filtering`);
    continue;
  }
  // Use the largest outer-ring polygon for the centroid (avoid tiny islands).
  let largest = polygons[0];
  let largestArea = -1;
  for (const p of polygons) {
    const a = ringArea(p[0]);
    if (a > largestArea) { largestArea = a; largest = p; }
  }
  const centroid = ringCentroid(largest[0]);
  // Designated-city wards (e.g. 横浜市鶴見区) share N03_003 = parent city
  // name (ending in 市). Tokyo's 23 special wards have empty N03_003 and
  // are kept as-is. For designated-city wards we override code/name to the
  // parent so all wards share data-code and behave as one city in hover.
  let outCode = code;
  let outName = name;
  if (parent && /[市]$/.test(parent)) {
    outName = parent;
    outCode = code.length >= 4 ? code.slice(0, 4) + "0" : code;
  }
  munis.push({ code: outCode, name: outName, polygons, centroid });
}

// ---------- projection ----------
const [minLon, minLat, maxLon, maxLat] = bbox;
const midLat = (minLat + maxLat) / 2;
const cosLat = Math.cos((midLat * Math.PI) / 180);
// Width in degrees of longitude is compressed by cos(lat)
const lonRange = (maxLon - minLon) * cosLat;
const latRange = maxLat - minLat;
const innerW = WIDTH - PADDING * 2;
const innerH = HEIGHT - PADDING * 2;
const scale = Math.min(innerW / lonRange, innerH / latRange);
const offX = PADDING + (innerW - lonRange * scale) / 2;
const offY = PADDING + (innerH - latRange * scale) / 2;

function project([lon, lat]) {
  const x = offX + (lon - minLon) * cosLat * scale;
  const y = offY + (maxLat - lat) * scale; // flip y
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
const codeOrder = munis
  .slice()
  .sort((a, b) => a.code.localeCompare(b.code))
  .map((m) => m.code);

const paths = munis
  .map((m) => {
    const d = m.polygons.map((p) => p.map(ringToPath).join("")).join("");
    const safeName = m.name.replace(/"/g, "&quot;");
    return `<path data-code="${m.code}" data-name="${safeName}" d="${d}"><title>${safeName}</title></path>`;
  })
  .join("\n");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${HEIGHT}" class="pref-muni-svg" role="img" aria-label="自治体境界図">
  <g class="pref-muni-svg__paths" fill="#eaf2fb" stroke="#5b7fa8" stroke-width="0.6" stroke-linejoin="round">
${paths}
  </g>
</svg>
`;

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, svg);

const sizeKB = (fs.statSync(OUT_PATH).size / 1024).toFixed(1);
console.log(`Wrote ${OUT_PATH} (${sizeKB} KB, ${munis.length} municipalities)`);
console.log("Order:", codeOrder.join(","));
