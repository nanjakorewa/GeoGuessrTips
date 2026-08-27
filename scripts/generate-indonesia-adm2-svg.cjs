#!/usr/bin/env node
/**
 * インドネシア全土の ADM2（kabupaten/kota）境界 SVG を GADM v2.8 GeoJSON
 * （temp/idn_adm2.json — process-indonesia-kabupaten.cjs と同じソース）から生成。
 *
 * kabupaten ピンクイズ（PinQuizPage）の背景地図として使う。以前は
 * Leaflet + CARTO タイルだったが、外部タイルサービスを全廃したため、
 * この静的 SVG を <img> として敷き、ピンは投影パラメータで重ねる。
 *
 * Output:
 *   public/maps/indonesia-adm2.svg
 *   src/data/indonesia-adm2-projection.json
 *
 * Usage: node scripts/generate-indonesia-adm2-svg.cjs
 */

const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const SRC = process.argv[2] || path.join(PROJECT_ROOT, "temp", "idn_adm2.json");
const OUT_SVG = path.join(PROJECT_ROOT, "public/maps/indonesia-adm2.svg");
const OUT_PROJ = path.join(PROJECT_ROOT, "src/data/indonesia-adm2-projection.json");

const WIDTH = 2400;
const TOLERANCE = 0.01; // degrees（~1.1km）
const MIN_RING_AREA = 3e-4; // 小さすぎる離島ノイズを除外

// ---------- geometry ----------
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

// ---------- load ----------
const gj = JSON.parse(fs.readFileSync(SRC, "utf8"));

// bbox（インドネシア全域）
let minLon = Infinity, minLat = Infinity, maxLon = -Infinity, maxLat = -Infinity;
const items = [];
for (const feat of gj.features) {
  const g = feat.geometry;
  if (!g) continue;
  const polyList = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
  const rings = [];
  for (const poly of polyList) {
    const outer = poly[0];
    if (!outer || ringArea(outer) < MIN_RING_AREA) continue;
    const dp = douglasPeucker(outer, TOLERANCE);
    const simplified = dp.length >= 4 ? dp : outer;
    rings.push(simplified);
    for (const [x, y] of simplified) {
      if (x < minLon) minLon = x;
      if (y < minLat) minLat = y;
      if (x > maxLon) maxLon = x;
      if (y > maxLat) maxLat = y;
    }
  }
  if (!rings.length) continue;
  items.push({
    name: `${feat.properties.NAME_2 || ""}`,
    type: feat.properties.TYPE_2 || "",
    rings,
  });
}

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

const paths = items
  .map((it) => {
    let d = "";
    for (const ring of it.rings) {
      let seg = "";
      for (let i = 0; i < ring.length; i++) {
        const [x, y] = project(ring[i]);
        seg += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
      }
      d += seg + "Z";
    }
    const safeName = it.name.replace(/"/g, "&quot;").replace(/</g, "&lt;");
    return `<path data-name="${safeName}" d="${d}"/>`;
  })
  .join("\n");

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${WIDTH} ${height.toFixed(1)}" role="img" aria-label="Indonesia kabupaten/kota">
  <rect x="0" y="0" width="${WIDTH}" height="${height.toFixed(1)}" fill="#dbe7f3"/>
  <g fill="#f6f4ea" stroke="#9fb3c8" stroke-width="0.7" stroke-linejoin="round">
${paths}
  </g>
</svg>
`;

fs.writeFileSync(OUT_SVG, svg);
const proj = { minLon, minLat, maxLon, maxLat, cosLat, scale, offX: 0, offY: 0, width: WIDTH, height: Number(height.toFixed(1)) };
fs.writeFileSync(OUT_PROJ, JSON.stringify(proj, null, 2) + "\n");

console.log(`Wrote ${OUT_SVG} (${(fs.statSync(OUT_SVG).size / 1024).toFixed(1)} KB, ${items.length} regions)`);
console.log(`Wrote ${OUT_PROJ}`, proj);
