#!/usr/bin/env node
/**
 * Recover the SVG projection params for every prefecture SVG in
 * public/maps/prefectures/ so lat/lng pins can be placed on them
 * without any map-tile service.
 *
 * Replicates the exact geometry pipeline of
 * generate-prefecture-municipality-svg.cjs (same DP simplification,
 * same area filter, same fit-to-viewBox math) against the same cached
 * inputs (c:/tmp/jp_muni/{code}_filtered), then verifies the derived
 * params against the actual coordinate extents of the shipped SVG.
 *
 * Output: src/data/pref-projections.json
 *   { [prefDir]: { minLon, minLat, maxLon, maxLat, cosLat, scale, offX, offY } }
 *
 * Usage: node scripts/compute-pref-projections.cjs [--muni-base <dir>]
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
const OUT_PATH = path.join(PROJECT_ROOT, "src/data/pref-projections.json");
const SVG_DIR = path.join(PROJECT_ROOT, "public/maps/prefectures");

// Must match generate-prefecture-municipality-svg.cjs (and the --tolerance
// used by build-all-prefecture-maps.cjs).
const TOLERANCE = 0.004;
const WIDTH = 560;
const HEIGHT = 640;
const PADDING = 8;
const MIN_OUTER_AREA = 5e-5;

// Same list as build-all-prefecture-maps.cjs
const PREFS = [
  { code: "01", dir: "hokkaido" }, { code: "02", dir: "aomori" },
  { code: "03", dir: "iwate" }, { code: "04", dir: "miyagi" },
  { code: "05", dir: "akita" }, { code: "06", dir: "yamagata" },
  { code: "07", dir: "fukushima" }, { code: "08", dir: "ibaraki" },
  { code: "09", dir: "tochigi" }, { code: "10", dir: "gunma" },
  { code: "11", dir: "saitama" }, { code: "12", dir: "chiba" },
  { code: "13", dir: "tokyo" }, { code: "14", dir: "kanagawa" },
  { code: "15", dir: "niigata" }, { code: "16", dir: "toyama" },
  { code: "17", dir: "ishikawa" }, { code: "18", dir: "fukui" },
  { code: "19", dir: "yamanashi" }, { code: "20", dir: "nagano" },
  { code: "21", dir: "gifu" }, { code: "22", dir: "shizuoka" },
  { code: "23", dir: "aichi" }, { code: "24", dir: "mie" },
  { code: "25", dir: "shiga" }, { code: "26", dir: "kyoto" },
  { code: "27", dir: "osaka" }, { code: "28", dir: "hyogo" },
  { code: "29", dir: "nara" }, { code: "30", dir: "wakayama" },
  { code: "31", dir: "tottori" }, { code: "32", dir: "shimane" },
  { code: "33", dir: "okayama" }, { code: "34", dir: "hiroshima" },
  { code: "35", dir: "yamaguchi" }, { code: "36", dir: "tokushima" },
  { code: "37", dir: "kagawa" }, { code: "38", dir: "ehime" },
  { code: "39", dir: "kochi" }, { code: "40", dir: "fukuoka" },
  { code: "41", dir: "saga" }, { code: "42", dir: "nagasaki" },
  { code: "43", dir: "kumamoto" }, { code: "44", dir: "oita" },
  { code: "45", dir: "miyazaki" }, { code: "46", dir: "kagoshima" },
  { code: "47", dir: "okinawa" },
];

// ---------- geometry (verbatim from the SVG generator) ----------
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

// ---------- per-prefecture bbox → projection ----------
function computeForPref(pref) {
  const dirFiltered = path.join(MUNI_BASE, `${pref.code}_filtered`);
  const dirPlain = path.join(MUNI_BASE, pref.code);
  const inputDir = fs.existsSync(dirFiltered) ? dirFiltered : dirPlain;
  if (!fs.existsSync(inputDir)) return null;
  const files = fs
    .readdirSync(inputDir)
    .filter((f) => f.endsWith(".json"))
    .sort();
  if (!files.length) return null;

  const bbox = [Infinity, Infinity, -Infinity, -Infinity];
  for (const f of files) {
    const gj = JSON.parse(fs.readFileSync(path.join(inputDir, f), "utf8"));
    for (const feat of gj.features) {
      const g = feat.geometry;
      if (!g) continue;
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
      }
    }
  }
  const [minLon, minLat, maxLon, maxLat] = bbox;
  if (!isFinite(minLon)) return null;
  const midLat = (minLat + maxLat) / 2;
  const cosLat = Math.cos((midLat * Math.PI) / 180);
  const lonRange = (maxLon - minLon) * cosLat;
  const latRange = maxLat - minLat;
  const innerW = WIDTH - PADDING * 2;
  const innerH = HEIGHT - PADDING * 2;
  const scale = Math.min(innerW / lonRange, innerH / latRange);
  const offX = PADDING + (innerW - lonRange * scale) / 2;
  const offY = PADDING + (innerH - latRange * scale) / 2;
  return { minLon, minLat, maxLon, maxLat, cosLat, scale, offX, offY };
}

// 出力は 6 桁精度へ丸める（quiz-cities の投影データと同じ流儀）。
// 丸め誤差は最大でも 0.01px 未満。また、浮動小数の生の桁列（16桁前後）が
// pre-commit の PII チェッカー（クレジットカード/マイナンバー検出）に
// 誤ヒットするのを防ぐ意味もある。
function round6(v) {
  return Math.round(v * 1e6) / 1e6;
}
function roundProj(p) {
  const out = {};
  for (const [k, v] of Object.entries(p)) out[k] = round6(v);
  return out;
}

// ---------- verification against the shipped SVG ----------
function svgExtents(svgPath) {
  const txt = fs.readFileSync(svgPath, "utf8");
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  const re = /[ML](-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g;
  let m;
  while ((m = re.exec(txt))) {
    const x = parseFloat(m[1]);
    const y = parseFloat(m[2]);
    if (x < minX) minX = x;
    if (y < minY) minY = y;
    if (x > maxX) maxX = x;
    if (y > maxY) maxY = y;
  }
  return { minX, minY, maxX, maxY };
}

const out = {};
let failed = 0;
for (const pref of PREFS) {
  const proj = computeForPref(pref);
  if (!proj) {
    console.error(`[${pref.code}] ${pref.dir}: no input data — SKIPPED`);
    failed++;
    continue;
  }
  // Expected drawing extents from the params
  const expW = (proj.maxLon - proj.minLon) * proj.cosLat * proj.scale;
  const expH = (proj.maxLat - proj.minLat) * proj.scale;
  const svgFile = path.join(SVG_DIR, `${pref.dir}.svg`);
  let note = "no svg to verify";
  if (fs.existsSync(svgFile)) {
    const ext = svgExtents(svgFile);
    const dx0 = Math.abs(ext.minX - proj.offX);
    const dy0 = Math.abs(ext.minY - proj.offY);
    const dx1 = Math.abs(ext.maxX - (proj.offX + expW));
    const dy1 = Math.abs(ext.maxY - (proj.offY + expH));
    const maxErr = Math.max(dx0, dy0, dx1, dy1);
    note = `verify maxErr=${maxErr.toFixed(2)}px`;
    if (maxErr > 2) {
      console.error(`[${pref.code}] ${pref.dir}: MISMATCH ${note}`);
      failed++;
      continue;
    }
  }
  out[pref.dir] = roundProj(proj);
  console.log(`[${pref.code}] ${pref.dir}: ok (${note})`);
}

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, JSON.stringify(out, null, 2) + "\n");
console.log(`\nWrote ${OUT_PATH} (${Object.keys(out).length}/47 prefectures, ${failed} failed)`);
process.exit(failed ? 1 : 0);
