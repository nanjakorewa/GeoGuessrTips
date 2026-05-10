#!/usr/bin/env node
/**
 * Build subdivision SVG + YAML for a country.
 *
 * Inputs:
 *   - A per-country config from scripts/country-data/{slug}.cjs
 *   - A GeoJSON source (Natural Earth global admin_1, or custom URL)
 *
 * Outputs:
 *   - public/maps/countries/{slug}.svg
 *   - scripts/.generated/countries/{slug}.muni.yaml
 *
 * Usage:
 *   node scripts/build-country-maps.cjs --only usa,germany
 *   node scripts/build-country-maps.cjs   # build all configured countries
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const { spawn } = require("child_process");

const PROJECT_ROOT = path.join(__dirname, "..");
const TMP_BASE = process.platform === "win32" ? "c:/tmp/country_maps" : "/tmp/country_maps";
const SVG_OUT_DIR = path.join(PROJECT_ROOT, "public/maps/countries");
const YAML_OUT_DIR = path.join(__dirname, ".generated/countries");
const COUNTRY_CONFIGS_DIR = path.join(__dirname, "country-data");
const NE_ADMIN1_URL =
  "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson";
const NE_ADMIN1_CACHE = path.join(TMP_BASE, "ne_admin1.geojson");

// ---------- HTTP ----------
function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
      resolve();
      return;
    }
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    const proc = spawn("curl", ["-sSLk", "--retry", "2", "-o", dest, url]);
    proc.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`curl exit ${code} for ${url}`))
    );
    proc.on("error", reject);
  });
}

// ---------- DP ----------
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

// ---------- SVG generation ----------
function generateSvg(features, opts) {
  const {
    tolerance = 0.05,
    width = 560,
    height = 640,
    padding = 8,
    minOuterArea = 1e-3,
    codeOf,
    nameOf,
  } = opts;

  const subs = [];
  let bbox = [Infinity, Infinity, -Infinity, -Infinity];

  for (const feat of features) {
    const code = String(codeOf(feat));
    const name = String(nameOf(feat));
    const g = feat.geometry;
    if (!g || !name) continue;

    const polyList = g.type === "Polygon" ? [g.coordinates] : g.coordinates;
    const flat = [];
    for (const poly of polyList) for (const ring of poly) flat.push(ring);

    const polygons = [];
    for (const ring of flat) {
      if (ringArea(ring) < minOuterArea) continue;
      const dp = douglasPeucker(ring, tolerance);
      if (dp.length < 4) continue;
      for (const [x, y] of dp) {
        if (x < bbox[0]) bbox[0] = x;
        if (y < bbox[1]) bbox[1] = y;
        if (x > bbox[2]) bbox[2] = x;
        if (y > bbox[3]) bbox[3] = y;
      }
      polygons.push(dp);
    }
    if (polygons.length === 0) continue;
    subs.push({ code, name, polygons });
  }

  const [minLon, minLat, maxLon, maxLat] = bbox;
  const midLat = (minLat + maxLat) / 2;
  const cosLat = Math.cos((midLat * Math.PI) / 180);
  const lonRange = (maxLon - minLon) * cosLat;
  const latRange = maxLat - minLat;
  const innerW = width - padding * 2;
  const innerH = height - padding * 2;
  const scale = Math.min(innerW / lonRange, innerH / latRange);
  const offX = padding + (innerW - lonRange * scale) / 2;
  const offY = padding + (innerH - latRange * scale) / 2;

  function project([lon, lat]) {
    return [
      offX + (lon - minLon) * cosLat * scale,
      offY + (maxLat - lat) * scale,
    ];
  }
  function ringPath(ring) {
    let d = "";
    for (let i = 0; i < ring.length; i++) {
      const [x, y] = project(ring[i]);
      d += `${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`;
    }
    return d + "Z";
  }

  const paths = subs
    .map((s) => {
      const d = s.polygons.map(ringPath).join("");
      const safeName = s.name.replace(/"/g, "&quot;");
      const safeCode = s.code.replace(/"/g, "&quot;");
      return `<path data-code="${safeCode}" data-name="${safeName}" d="${d}"><title>${safeName}</title></path>`;
    })
    .join("\n");

  return {
    svg: `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}" class="pref-muni-svg" role="img" aria-label="行政区分">
  <g class="pref-muni-svg__paths" fill="#eaf2fb" stroke="#5b7fa8" stroke-width="0.6" stroke-linejoin="round">
${paths}
  </g>
</svg>
`,
    count: subs.length,
    codes: subs.map((s) => s.code),
  };
}

// ---------- YAML emitter ----------
function escY(s) {
  return String(s).replace(/"/g, '\\"');
}
function emitYaml(slug, cfg, rows) {
  const lines = [];
  lines.push("municipalities:");
  lines.push(`  svg: "/maps/countries/${slug}.svg"`);
  if (cfg.title) {
    if (typeof cfg.title === "string") {
      lines.push(`  title: "${escY(cfg.title)}"`);
    } else {
      lines.push(`  title:`);
      for (const [lang, val] of Object.entries(cfg.title)) {
        lines.push(`    ${lang}: "${escY(val)}"`);
      }
    }
  }
  lines.push(`  list:`);
  for (const r of rows) {
    const hasI18n = r.nameI18n || r.noteI18n;
    if (!hasI18n) {
      // Flow style is compact and matches existing prefecture YAMLs
      const parts = [`code: "${escY(r.code)}"`, `name: "${escY(r.name)}"`];
      if (r.type) parts.push(`type: "${r.type}"`);
      if (r.note) parts.push(`note: "${escY(r.note)}"`);
      lines.push(`    - { ${parts.join(", ")} }`);
    } else {
      // Block style — flow can't host nested mappings
      lines.push(`    - code: "${escY(r.code)}"`);
      lines.push(`      name: "${escY(r.name)}"`);
      if (r.type) lines.push(`      type: "${r.type}"`);
      if (r.note) lines.push(`      note: "${escY(r.note)}"`);
      if (r.nameI18n) {
        lines.push(`      nameI18n:`);
        for (const [lang, val] of Object.entries(r.nameI18n)) {
          lines.push(`        ${lang}: "${escY(val)}"`);
        }
      }
      if (r.noteI18n) {
        lines.push(`      noteI18n:`);
        for (const [lang, val] of Object.entries(r.noteI18n)) {
          lines.push(`        ${lang}: "${escY(val)}"`);
        }
      }
    }
  }
  return lines.join("\n") + "\n";
}

// ---------- Main per-country build ----------
async function loadFeaturesForCountry(slug, cfg) {
  if (cfg.source.type === "natural-earth") {
    await downloadFile(NE_ADMIN1_URL, NE_ADMIN1_CACHE);
    const all = JSON.parse(fs.readFileSync(NE_ADMIN1_CACHE, "utf8"));
    return all.features.filter((f) => f.properties.iso_a2 === cfg.source.iso_a2);
  }
  if (cfg.source.type === "url") {
    const dest = path.join(TMP_BASE, slug + ".geojson");
    await downloadFile(cfg.source.url, dest);
    const gj = JSON.parse(fs.readFileSync(dest, "utf8"));
    return gj.features;
  }
  throw new Error(`Unknown source type: ${cfg.source.type}`);
}

async function buildCountry(slug, cfg) {
  console.log(`\n[${slug}] ${cfg.title?.ja || cfg.title || slug}`);
  let features = await loadFeaturesForCountry(slug, cfg);

  // Apply per-feature filters
  if (cfg.featureFilter) features = features.filter(cfg.featureFilter);

  // Build code & name resolvers
  const codeOf = cfg.codeOf || ((f) => f.properties.iso_3166_2 || f.properties.code_hasc || f.properties.adm1_code);
  const nameOf = cfg.nameOf || ((f) => f.properties.name);
  const excludeSet = new Set(cfg.excludeCodes || []);
  const filtered = features.filter((f) => !excludeSet.has(String(codeOf(f))));

  console.log(`  ${filtered.length} features (after filtering ${features.length - filtered.length})`);

  // Generate SVG (excluded codes are not included in the SVG, even though
  // they may still show up in the YAML list — this lets you hide outlying
  // territories on the map while listing them).
  const svgFeatures = cfg.svgExcludeCodes
    ? filtered.filter((f) => !new Set(cfg.svgExcludeCodes).has(String(codeOf(f))))
    : filtered;
  const { svg, count, codes } = generateSvg(svgFeatures, {
    tolerance: cfg.tolerance ?? 0.05,
    width: cfg.width ?? 560,
    height: cfg.height ?? 640,
    minOuterArea: cfg.minOuterArea ?? 1e-3,
    codeOf,
    nameOf,
  });

  fs.mkdirSync(SVG_OUT_DIR, { recursive: true });
  const svgPath = path.join(SVG_OUT_DIR, `${slug}.svg`);
  fs.writeFileSync(svgPath, svg);
  const sizeKB = (fs.statSync(svgPath).size / 1024).toFixed(1);
  console.log(`  ${slug}.svg: ${sizeKB} KB, ${count} paths`);

  // Build the YAML list. Use names from cfg.names (if curated) else fallback
  // to the GeoJSON name properties.
  const rows = [];
  const orderedFeatures = filtered.slice();
  if (cfg.codeOrder) {
    const indexBy = new Map(cfg.codeOrder.map((c, i) => [c, i]));
    orderedFeatures.sort((a, b) => {
      const ca = String(codeOf(a)), cb = String(codeOf(b));
      const ia = indexBy.has(ca) ? indexBy.get(ca) : 9999;
      const ib = indexBy.has(cb) ? indexBy.get(cb) : 9999;
      return ia - ib || ca.localeCompare(cb);
    });
  }
  for (const f of orderedFeatures) {
    const code = String(codeOf(f));
    const curated = (cfg.names || {})[code];
    const englishFromData = String(nameOf(f));
    const row = {
      code,
      name: curated?.ja || curated?.name || englishFromData,
      type: curated?.type || cfg.typeOverrides?.[code] || cfg.defaultType,
    };
    if (curated?.note) row.note = curated.note;
    // Build nameI18n: include English from source data + any curated extras
    const nameI18n = {};
    if (curated?.en) nameI18n.en = curated.en;
    else if (englishFromData && englishFromData !== row.name) nameI18n.en = englishFromData;
    if (curated?.es) nameI18n.es = curated.es;
    if (curated?.id) nameI18n.id = curated.id;
    if (curated?.pt) nameI18n.pt = curated.pt;
    if (Object.keys(nameI18n).length > 0) row.nameI18n = nameI18n;
    if (curated?.noteI18n) row.noteI18n = curated.noteI18n;
    rows.push(row);
  }

  fs.mkdirSync(YAML_OUT_DIR, { recursive: true });
  const yamlPath = path.join(YAML_OUT_DIR, `${slug}.muni.yaml`);
  fs.writeFileSync(yamlPath, emitYaml(slug, cfg, rows));
  console.log(`  ${rows.length} rows → ${path.relative(PROJECT_ROOT, yamlPath)}`);
  return { slug, count: rows.length, sizeKB: Number(sizeKB) };
}

// ---------- Main ----------
async function main() {
  const onlyArg = process.argv.indexOf("--only");
  const only = onlyArg >= 0 ? process.argv[onlyArg + 1].split(",") : null;

  // Discover configs
  if (!fs.existsSync(COUNTRY_CONFIGS_DIR)) {
    console.error(`No configs dir: ${COUNTRY_CONFIGS_DIR}`);
    process.exit(1);
  }
  const configs = fs
    .readdirSync(COUNTRY_CONFIGS_DIR)
    .filter((f) => f.endsWith(".cjs"))
    .map((f) => ({ slug: f.replace(/\.cjs$/, ""), path: path.join(COUNTRY_CONFIGS_DIR, f) }))
    .filter((c) => !only || only.includes(c.slug));

  if (configs.length === 0) {
    console.error("No matching configs.");
    process.exit(1);
  }

  fs.mkdirSync(TMP_BASE, { recursive: true });
  const results = [];
  for (const c of configs) {
    try {
      const cfg = require(c.path);
      const r = await buildCountry(c.slug, cfg);
      results.push(r);
    } catch (e) {
      console.error(`[${c.slug}] FAILED: ${e.message}`);
      console.error(e.stack);
    }
  }
  console.log("\n=== Summary ===");
  for (const r of results) {
    console.log(`  ${r.slug.padEnd(20)} ${String(r.count).padStart(3)} rows  ${r.sizeKB.toFixed(1)} KB`);
  }
  console.log(`Done: ${results.length}/${configs.length}`);
}

main().catch((e) => { console.error(e); process.exit(1); });
