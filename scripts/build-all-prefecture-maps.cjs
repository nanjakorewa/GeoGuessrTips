#!/usr/bin/env node
/**
 * Build SVG + municipalities metadata for every Japanese prefecture.
 *
 * For each of 47 prefectures:
 *   1. Fetch the list of municipality GeoJSON files from niiyz/JapanCityGeoJson
 *   2. Download each file in parallel
 *   3. Run the existing SVG generator
 *   4. Emit a YAML snippet with the municipalities list (code/name/type/note)
 *      to scripts/.generated/{dir}.muni.yaml
 *
 * Idempotent: existing downloaded files are reused; existing generated YAML
 * snippets are overwritten on each run.
 */

const fs = require("fs");
const path = require("path");
const https = require("https");
const { spawn, execFileSync } = require("child_process");

const PROJECT_ROOT = path.join(__dirname, "..");
const TMP_BASE = process.platform === "win32"
  ? "c:/tmp/jp_muni"
  : "/tmp/jp_muni";
const SVG_OUT_DIR = path.join(PROJECT_ROOT, "public/maps/prefectures");
const YAML_OUT_DIR = path.join(__dirname, ".generated");
const SVG_GENERATOR = path.join(__dirname, "generate-prefecture-municipality-svg.cjs");

// All 47 prefectures: { code, dir, name, region }
// dir names match src/content/rule/asia/japan/{region}/{dir}/
const PREFS = [
  // Note: hokkaido lives under tohoku/ in this repo even though geographically separate.
  { code: "01", dir: "hokkaido",  name: "北海道", region: "tohoku" },
  { code: "02", dir: "aomori",    name: "青森",   region: "tohoku" },
  { code: "03", dir: "iwate",     name: "岩手",   region: "tohoku" },
  { code: "04", dir: "miyagi",    name: "宮城",   region: "tohoku" },
  { code: "05", dir: "akita",     name: "秋田",   region: "tohoku" },
  { code: "06", dir: "yamagata",  name: "山形",   region: "tohoku" },
  { code: "07", dir: "fukushima", name: "福島",   region: "tohoku" },
  { code: "08", dir: "ibaraki",   name: "茨城",   region: "kanto" },
  { code: "09", dir: "tochigi",   name: "栃木",   region: "kanto" },
  { code: "10", dir: "gunma",     name: "群馬",   region: "kanto" },
  { code: "11", dir: "saitama",   name: "埼玉",   region: "kanto" },
  { code: "12", dir: "chiba",     name: "千葉",   region: "kanto" },
  { code: "13", dir: "tokyo",     name: "東京",   region: "kanto" },
  { code: "14", dir: "kanagawa",  name: "神奈川", region: "kanto" },
  { code: "15", dir: "niigata",   name: "新潟",   region: "chubu" },
  { code: "16", dir: "toyama",    name: "富山",   region: "chubu" },
  { code: "17", dir: "ishikawa",  name: "石川",   region: "chubu" },
  { code: "18", dir: "fukui",     name: "福井",   region: "chubu" },
  { code: "19", dir: "yamanashi", name: "山梨",   region: "chubu" },
  { code: "20", dir: "nagano",    name: "長野",   region: "chubu" },
  { code: "21", dir: "gifu",      name: "岐阜",   region: "chubu" },
  { code: "22", dir: "shizuoka",  name: "静岡",   region: "chubu" },
  { code: "23", dir: "aichi",     name: "愛知",   region: "chubu" },
  { code: "24", dir: "mie",       name: "三重",   region: "kinki" },
  { code: "25", dir: "shiga",     name: "滋賀",   region: "kinki" },
  { code: "26", dir: "kyoto",     name: "京都",   region: "kinki" },
  { code: "27", dir: "osaka",     name: "大阪",   region: "kinki" },
  { code: "28", dir: "hyogo",     name: "兵庫",   region: "kinki" },
  { code: "29", dir: "nara",      name: "奈良",   region: "kinki" },
  { code: "30", dir: "wakayama",  name: "和歌山", region: "kinki" },
  { code: "31", dir: "tottori",   name: "鳥取",   region: "chugoku" },
  { code: "32", dir: "shimane",   name: "島根",   region: "chugoku" },
  { code: "33", dir: "okayama",   name: "岡山",   region: "chugoku" },
  { code: "34", dir: "hiroshima", name: "広島",   region: "chugoku" },
  { code: "35", dir: "yamaguchi", name: "山口",   region: "chugoku" },
  { code: "36", dir: "tokushima", name: "徳島",   region: "shikoku" },
  { code: "37", dir: "kagawa",    name: "香川",   region: "shikoku" },
  { code: "38", dir: "ehime",     name: "愛媛",   region: "shikoku" },
  { code: "39", dir: "kochi",     name: "高知",   region: "shikoku" },
  { code: "40", dir: "fukuoka",   name: "福岡",   region: "kyusyu" },
  { code: "41", dir: "saga",      name: "佐賀",   region: "kyusyu" },
  { code: "42", dir: "nagasaki",  name: "長崎",   region: "kyusyu" },
  { code: "43", dir: "kumamoto",  name: "熊本",   region: "kyusyu" },
  { code: "44", dir: "oita",      name: "大分",   region: "kyusyu" },
  { code: "45", dir: "miyazaki",  name: "宮崎",   region: "kyusyu" },
  { code: "46", dir: "kagoshima", name: "鹿児島", region: "kyusyu" },
  { code: "47", dir: "okinawa",   name: "沖縄",   region: "kyusyu" },
];

// Per-prefecture overrides. excludeCodes removes outlying islands so the
// mainland renders at a useful scale (Tokyo's Izu/Ogasawara islands).
const OVERRIDES = {
  "13": {
    excludeCodes: [
      "13361", "13362", "13363", "13364", // 大島町, 利島村, 新島村, 神津島村
      "13381", "13382",                   // 三宅村, 御蔵島村
      "13401", "13402",                   // 八丈町, 青ヶ島村
      "13421",                            // 小笠原村
    ],
  },
};

// ---------- helpers ----------

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { rejectUnauthorized: false, headers: { "User-Agent": "build-script" } }, (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${url}`));
          res.resume();
          return;
        }
        const chunks = [];
        res.on("data", (c) => chunks.push(c));
        res.on("end", () => {
          try {
            resolve(JSON.parse(Buffer.concat(chunks).toString("utf8")));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on("error", reject);
  });
}

function downloadOne(url, dest) {
  return new Promise((resolve, reject) => {
    if (fs.existsSync(dest) && fs.statSync(dest).size > 100) {
      resolve();
      return;
    }
    const proc = spawn("curl", ["-sSLk", "--retry", "2", "-o", dest, url]);
    proc.on("exit", (code) =>
      code === 0 ? resolve() : reject(new Error(`curl exit ${code} for ${url}`))
    );
    proc.on("error", reject);
  });
}

async function downloadAll(items, conc = 8) {
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      const { url, dest } = items[idx];
      try {
        await downloadOne(url, dest);
      } catch (e) {
        console.warn(`  [warn] download failed: ${e.message}`);
      }
    }
  }
  await Promise.all(Array.from({ length: conc }, worker));
}

function detectType(name) {
  if (name.endsWith("区")) return "ward";
  if (name.endsWith("市")) return "city";
  if (name.endsWith("町")) return "town";
  if (name.endsWith("村")) return "village";
  return undefined;
}

/**
 * Read frontmatter prefInfo.capital from an existing _index.ja.md if present.
 * Used to flag the prefectural capital with note: "県庁所在地".
 */
function readCapital(prefDir, region) {
  const md = path.join(
    PROJECT_ROOT,
    "src/content/rule/asia/japan",
    region,
    prefDir,
    "_index.ja.md"
  );
  if (!fs.existsSync(md)) return null;
  const txt = fs.readFileSync(md, "utf8");
  const m = txt.match(/^\s*capital:\s*"([^"]+)"/m);
  return m ? m[1] : null;
}

function escapeYamlString(s) {
  return s.replace(/"/g, '\\"');
}

function emitYaml(prefDir, munis) {
  const lines = [];
  lines.push("municipalities:");
  lines.push(`  svg: "/maps/prefectures/${prefDir}.svg"`);
  lines.push(`  list:`);
  for (const m of munis) {
    const parts = [`code: "${m.code}"`, `name: "${escapeYamlString(m.name)}"`];
    if (m.type) parts.push(`type: "${m.type}"`);
    if (m.note) parts.push(`note: "${escapeYamlString(m.note)}"`);
    lines.push(`    - { ${parts.join(", ")} }`);
  }
  return lines.join("\n") + "\n";
}

// ---------- main ----------

async function buildPrefecture(pref) {
  console.log(`\n[${pref.code}] ${pref.name} (${pref.dir})`);

  const prefTmp = path.join(TMP_BASE, pref.code);
  fs.mkdirSync(prefTmp, { recursive: true });

  // 1. Get list of files for this prefecture. Try the GitHub API first;
  //    if it fails (403 rate limit, etc.), fall back to local cache.
  let files = [];
  try {
    const listing = await fetchJson(
      `https://api.github.com/repos/niiyz/JapanCityGeoJson/contents/geojson/${pref.code}`
    );
    files = listing
      .filter((f) => f.name.endsWith(".json") && f.download_url)
      .map((f) => ({ name: f.name, url: f.download_url }));
  } catch (e) {
    if (fs.existsSync(prefTmp)) {
      const cached = fs
        .readdirSync(prefTmp)
        .filter((f) => f.endsWith(".json"));
      if (cached.length > 0) {
        files = cached.map((name) => ({
          name,
          url: `https://raw.githubusercontent.com/niiyz/JapanCityGeoJson/master/geojson/${pref.code}/${name}`,
        }));
        console.log(`  [info] API listing failed (${e.message}); using ${cached.length} cached files`);
      }
    }
    if (files.length === 0) {
      console.error(`  [error] failed to list dir and no cache: ${e.message}`);
      return null;
    }
  }

  if (!files.length) {
    console.warn(`  [warn] no files for ${pref.code}`);
    return null;
  }
  console.log(`  ${files.length} files to download`);

  // 2. Download all files in parallel (8 conn)
  await downloadAll(
    files.map((f) => ({ url: f.url, dest: path.join(prefTmp, f.name) })),
    8
  );

  // 3. Apply per-prefecture exclusions: move excluded files out so the SVG
  //    generator doesn't include them.
  const override = OVERRIDES[pref.code] || {};
  const excludeSet = new Set(override.excludeCodes || []);
  const stagedTmp = path.join(TMP_BASE, `${pref.code}_filtered`);
  if (fs.existsSync(stagedTmp)) {
    fs.rmSync(stagedTmp, { recursive: true, force: true });
  }
  fs.mkdirSync(stagedTmp, { recursive: true });
  for (const f of files) {
    const code = f.name.replace(/\.json$/, "");
    if (excludeSet.has(code)) continue;
    const src = path.join(prefTmp, f.name);
    if (!fs.existsSync(src)) continue;
    fs.copyFileSync(src, path.join(stagedTmp, f.name));
  }

  // 4. Generate SVG
  const svgOut = path.join(SVG_OUT_DIR, `${pref.dir}.svg`);
  fs.mkdirSync(path.dirname(svgOut), { recursive: true });
  try {
    execFileSync(
      "node",
      [
        SVG_GENERATOR,
        "--input",
        stagedTmp,
        "--out",
        svgOut,
        "--tolerance",
        "0.004",
      ],
      { stdio: "pipe" }
    );
  } catch (e) {
    console.error(`  [error] SVG generation failed: ${e.message}`);
    return null;
  }
  const svgSize = (fs.statSync(svgOut).size / 1024).toFixed(1);
  console.log(`  ${pref.dir}.svg: ${svgSize} KB`);

  // 5. Build municipality metadata from the GeoJSONs.
  //    Designated-city wards (N03_003 ending in 市) collapse into one entry
  //    per parent city; Tokyo's 23 special wards (N03_003 empty) stay as-is.
  const capital = readCapital(pref.dir, pref.region);
  const munis = [];
  const seenDesignatedCity = new Set();
  for (const f of files.sort((a, b) => a.name.localeCompare(b.name))) {
    const code = f.name.replace(/\.json$/, "");
    if (excludeSet.has(code)) continue;
    const fp = path.join(prefTmp, f.name);
    if (!fs.existsSync(fp)) continue;
    let gj;
    try {
      gj = JSON.parse(fs.readFileSync(fp, "utf8"));
    } catch {
      continue;
    }
    const props = (gj.features && gj.features[0] && gj.features[0].properties) || {};
    const name = props.N03_004;
    const parent = (props.N03_003 || "").trim();
    if (!name) continue;

    if (parent && /[市]$/.test(parent)) {
      // Designated-city ward → roll up to parent city.
      if (seenDesignatedCity.has(parent)) continue;
      seenDesignatedCity.add(parent);
      const synthCode = code.length >= 4 ? code.slice(0, 4) + "0" : code;
      const note =
        capital && parent === capital ? "県庁所在地" : "政令指定都市";
      munis.push({ code: synthCode, name: parent, type: "city", note });
      continue;
    }

    const type = detectType(name);
    let note;
    if (capital && name === capital) {
      note = "県庁所在地";
    } else if (parent && (type === "town" || type === "village")) {
      note = parent;
    }
    munis.push({ code, name, type, note });
  }

  // 6. Emit YAML
  fs.mkdirSync(YAML_OUT_DIR, { recursive: true });
  const yamlPath = path.join(YAML_OUT_DIR, `${pref.dir}.muni.yaml`);
  fs.writeFileSync(yamlPath, emitYaml(pref.dir, munis));
  console.log(`  ${munis.length} municipalities → ${path.relative(PROJECT_ROOT, yamlPath)}`);

  return { pref, count: munis.length, svgSize: Number(svgSize) };
}

async function main() {
  fs.mkdirSync(TMP_BASE, { recursive: true });
  const onlyArg = process.argv.indexOf("--only");
  const only = onlyArg >= 0 ? process.argv[onlyArg + 1].split(",") : null;
  const targets = only ? PREFS.filter((p) => only.includes(p.dir) || only.includes(p.code)) : PREFS;

  const summary = [];
  for (const pref of targets) {
    const r = await buildPrefecture(pref);
    if (r) summary.push(r);
  }

  console.log("\n=== Summary ===");
  for (const r of summary) {
    console.log(
      `  ${r.pref.code} ${r.pref.dir.padEnd(12)} ${String(r.count).padStart(3)} muni  ${r.svgSize.toFixed(1)} KB`
    );
  }
  console.log(`Done: ${summary.length}/${targets.length}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
