/**
 * One-off script to seed `prefInfo` and base `references` into each Japanese
 * prefecture's _index.ja.md frontmatter.
 *
 * - Skips files that already have a `prefInfo:` block (e.g. gifu).
 * - Inserts the new YAML keys before the closing `---` of the frontmatter.
 * - Population/area figures are based on widely-published 2024 estimates
 *   (総務省統計局 人口推計, 国土地理院 全国都道府県市区町村別面積調).
 *   Numbers are rounded; the linked references point to the upstream tables
 *   so figures can be verified.
 *
 * Usage:  node scripts/add_pref_info.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const RULE_BASE = path.join(REPO_ROOT, "src", "content", "rule", "asia", "japan");

// Regional folder → prefecture folders (Japanese name + key facts)
// pop:    population in 万人 (rounded)
// popR:   population rank (1=largest)
// area:   area in km² (with comma)
// areaR:  area rank (1=largest)
// capital:    capital city name
// capitalNote: short note (city population) — optional
const PREFS = [
  // 北海道
  { dir: "tohoku/hokkaido", name: "北海道",   pop: "約 510 万人",  popR: 8,  area: "78,421 km²", areaR: 1,  capital: "札幌市",   capitalNote: "人口 約 195 万人" },
  // 東北
  { dir: "tohoku/aomori",   name: "青森県",   pop: "約 121 万人",  popR: 31, area: "9,646 km²",  areaR: 8,  capital: "青森市",   capitalNote: "人口 約 27 万人" },
  { dir: "tohoku/iwate",    name: "岩手県",   pop: "約 119 万人",  popR: 32, area: "15,275 km²", areaR: 2,  capital: "盛岡市",   capitalNote: "人口 約 28 万人" },
  { dir: "tohoku/miyagi",   name: "宮城県",   pop: "約 228 万人",  popR: 14, area: "7,282 km²",  areaR: 16, capital: "仙台市",   capitalNote: "人口 約 109 万人" },
  { dir: "tohoku/akita",    name: "秋田県",   pop: "約 93 万人",   popR: 38, area: "11,638 km²", areaR: 6,  capital: "秋田市",   capitalNote: "人口 約 30 万人" },
  { dir: "tohoku/yamagata", name: "山形県",   pop: "約 105 万人",  popR: 35, area: "9,323 km²",  areaR: 9,  capital: "山形市",   capitalNote: "人口 約 24 万人" },
  { dir: "tohoku/fukushima",name: "福島県",   pop: "約 179 万人",  popR: 21, area: "13,784 km²", areaR: 3,  capital: "福島市",   capitalNote: "人口 約 28 万人" },
  // 関東
  { dir: "kanto/ibaraki",   name: "茨城県",   pop: "約 285 万人",  popR: 11, area: "6,098 km²",  areaR: 24, capital: "水戸市",   capitalNote: "人口 約 27 万人" },
  { dir: "kanto/tochigi",   name: "栃木県",   pop: "約 192 万人",  popR: 19, area: "6,408 km²",  areaR: 20, capital: "宇都宮市", capitalNote: "人口 約 51 万人" },
  { dir: "kanto/gunma",     name: "群馬県",   pop: "約 192 万人",  popR: 18, area: "6,362 km²",  areaR: 21, capital: "前橋市",   capitalNote: "人口 約 33 万人" },
  { dir: "kanto/saitama",   name: "埼玉県",   pop: "約 734 万人",  popR: 5,  area: "3,798 km²",  areaR: 39, capital: "さいたま市", capitalNote: "人口 約 134 万人" },
  { dir: "kanto/chiba",     name: "千葉県",   pop: "約 627 万人",  popR: 6,  area: "5,158 km²",  areaR: 28, capital: "千葉市",   capitalNote: "人口 約 98 万人" },
  { dir: "kanto/tokyo",     name: "東京都",   pop: "約 1,406 万人", popR: 1,  area: "2,200 km²",  areaR: 45, capital: "新宿区(都庁)", capitalNote: "人口（都全域）約 1,406 万人" },
  { dir: "kanto/kanagawa",  name: "神奈川県", pop: "約 921 万人",  popR: 2,  area: "2,416 km²",  areaR: 43, capital: "横浜市",   capitalNote: "人口 約 377 万人" },
  // 中部
  { dir: "chubu/niigata",   name: "新潟県",   pop: "約 213 万人",  popR: 15, area: "12,584 km²", areaR: 5,  capital: "新潟市",   capitalNote: "人口 約 78 万人" },
  { dir: "chubu/toyama",    name: "富山県",   pop: "約 102 万人",  popR: 37, area: "4,248 km²",  areaR: 33, capital: "富山市",   capitalNote: "人口 約 41 万人" },
  { dir: "chubu/ishikawa",  name: "石川県",   pop: "約 111 万人",  popR: 33, area: "4,186 km²",  areaR: 35, capital: "金沢市",   capitalNote: "人口 約 45 万人" },
  { dir: "chubu/fukui",     name: "福井県",   pop: "約 75 万人",   popR: 43, area: "4,191 km²",  areaR: 34, capital: "福井市",   capitalNote: "人口 約 26 万人" },
  { dir: "chubu/yamanashi", name: "山梨県",   pop: "約 80 万人",   popR: 41, area: "4,465 km²",  areaR: 32, capital: "甲府市",   capitalNote: "人口 約 19 万人" },
  { dir: "chubu/nagano",    name: "長野県",   pop: "約 202 万人",  popR: 16, area: "13,562 km²", areaR: 4,  capital: "長野市",   capitalNote: "人口 約 37 万人" },
  // gifu — already populated, skip
  { dir: "chubu/shizuoka",  name: "静岡県",   pop: "約 357 万人",  popR: 10, area: "7,777 km²",  areaR: 13, capital: "静岡市",   capitalNote: "人口 約 68 万人" },
  { dir: "chubu/aichi",     name: "愛知県",   pop: "約 750 万人",  popR: 4,  area: "5,173 km²",  areaR: 27, capital: "名古屋市", capitalNote: "人口 約 232 万人" },
  // 近畿
  { dir: "kinki/mie",       name: "三重県",   pop: "約 174 万人",  popR: 22, area: "5,774 km²",  areaR: 25, capital: "津市",     capitalNote: "人口 約 27 万人" },
  { dir: "kinki/shiga",     name: "滋賀県",   pop: "約 141 万人",  popR: 26, area: "4,017 km²",  areaR: 38, capital: "大津市",   capitalNote: "人口 約 34 万人" },
  { dir: "kinki/kyoto",     name: "京都府",   pop: "約 254 万人",  popR: 13, area: "4,612 km²",  areaR: 31, capital: "京都市",   capitalNote: "人口 約 144 万人" },
  { dir: "kinki/osaka",     name: "大阪府",   pop: "約 877 万人",  popR: 3,  area: "1,905 km²",  areaR: 46, capital: "大阪市",   capitalNote: "人口 約 277 万人" },
  { dir: "kinki/hyogo",     name: "兵庫県",   pop: "約 540 万人",  popR: 7,  area: "8,401 km²",  areaR: 12, capital: "神戸市",   capitalNote: "人口 約 150 万人" },
  { dir: "kinki/nara",      name: "奈良県",   pop: "約 130 万人",  popR: 29, area: "3,691 km²",  areaR: 40, capital: "奈良市",   capitalNote: "人口 約 35 万人" },
  { dir: "kinki/wakayama",  name: "和歌山県", pop: "約 90 万人",   popR: 39, area: "4,725 km²",  areaR: 30, capital: "和歌山市", capitalNote: "人口 約 35 万人" },
  // 中国
  { dir: "chugoku/tottori", name: "鳥取県",   pop: "約 54 万人",   popR: 47, area: "3,507 km²",  areaR: 41, capital: "鳥取市",   capitalNote: "人口 約 18 万人" },
  { dir: "chugoku/shimane", name: "島根県",   pop: "約 65 万人",   popR: 46, area: "6,708 km²",  areaR: 19, capital: "松江市",   capitalNote: "人口 約 19 万人" },
  { dir: "chugoku/okayama", name: "岡山県",   pop: "約 186 万人",  popR: 20, area: "7,114 km²",  areaR: 17, capital: "岡山市",   capitalNote: "人口 約 71 万人" },
  { dir: "chugoku/hiroshima",name: "広島県",  pop: "約 276 万人",  popR: 12, area: "8,479 km²",  areaR: 11, capital: "広島市",   capitalNote: "人口 約 119 万人" },
  { dir: "chugoku/yamaguchi",name: "山口県",  pop: "約 131 万人",  popR: 27, area: "6,113 km²",  areaR: 23, capital: "山口市",   capitalNote: "人口 約 19 万人" },
  // 四国
  { dir: "shikoku/tokushima",name: "徳島県",  pop: "約 70 万人",   popR: 44, area: "4,147 km²",  areaR: 36, capital: "徳島市",   capitalNote: "人口 約 25 万人" },
  { dir: "shikoku/kagawa",  name: "香川県",   pop: "約 93 万人",   popR: 40, area: "1,877 km²",  areaR: 47, capital: "高松市",   capitalNote: "人口 約 41 万人" },
  { dir: "shikoku/ehime",   name: "愛媛県",   pop: "約 130 万人",  popR: 28, area: "5,676 km²",  areaR: 26, capital: "松山市",   capitalNote: "人口 約 50 万人" },
  { dir: "shikoku/kochi",   name: "高知県",   pop: "約 67 万人",   popR: 45, area: "7,103 km²",  areaR: 18, capital: "高知市",   capitalNote: "人口 約 32 万人" },
  // 九州
  { dir: "kyusyu/fukuoka",  name: "福岡県",   pop: "約 511 万人",  popR: 9,  area: "4,987 km²",  areaR: 29, capital: "福岡市",   capitalNote: "人口 約 164 万人" },
  { dir: "kyusyu/saga",     name: "佐賀県",   pop: "約 80 万人",   popR: 41, area: "2,441 km²",  areaR: 42, capital: "佐賀市",   capitalNote: "人口 約 23 万人" },
  { dir: "kyusyu/nagasaki", name: "長崎県",   pop: "約 128 万人",  popR: 30, area: "4,131 km²",  areaR: 37, capital: "長崎市",   capitalNote: "人口 約 40 万人" },
  { dir: "kyusyu/kumamoto", name: "熊本県",   pop: "約 171 万人",  popR: 23, area: "7,409 km²",  areaR: 15, capital: "熊本市",   capitalNote: "人口 約 73 万人" },
  { dir: "kyusyu/oita",     name: "大分県",   pop: "約 110 万人",  popR: 34, area: "6,341 km²",  areaR: 22, capital: "大分市",   capitalNote: "人口 約 47 万人" },
  { dir: "kyusyu/miyazaki", name: "宮崎県",   pop: "約 105 万人",  popR: 36, area: "7,734 km²",  areaR: 14, capital: "宮崎市",   capitalNote: "人口 約 40 万人" },
  { dir: "kyusyu/kagoshima",name: "鹿児島県", pop: "約 156 万人",  popR: 24, area: "9,186 km²",  areaR: 10, capital: "鹿児島市", capitalNote: "人口 約 59 万人" },
  { dir: "kyusyu/okinawa",  name: "沖縄県",   pop: "約 146 万人",  popR: 25, area: "2,283 km²",  areaR: 44, capital: "那覇市",   capitalNote: "人口 約 32 万人" },
];

const STAT_REF = `  - key: stat_jinsui_2024
    text: 総務省統計局「人口推計」 https://www.stat.go.jp/data/jinsui/`;
const GSI_REF = `  - key: gsi_mencho_2024
    text: 国土地理院「全国都道府県市区町村別面積調」 https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html`;

function buildPrefInfoYaml(p) {
  return `prefInfo:
  population: "${p.pop}"
  populationRank: "全国 ${p.popR} 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "${p.area}"
  areaRank: "全国 ${p.areaR} 位"
  areaCite: "gsi_mencho_2024"
  capital: "${p.capital}"
  capitalNote: "${p.capitalNote || ""}"`;
}

function buildReferencesYaml() {
  return `references:
${STAT_REF}
${GSI_REF}`;
}

let added = 0, skipped = 0, missing = 0;

for (const p of PREFS) {
  const filePath = path.join(RULE_BASE, p.dir, "_index.ja.md");
  if (!fs.existsSync(filePath)) {
    console.warn(`MISSING: ${filePath}`);
    missing++;
    continue;
  }
  const content = fs.readFileSync(filePath, "utf-8");
  const fmMatch = content.match(/^(---\r?\n)([\s\S]*?)(\r?\n---)/);
  if (!fmMatch) {
    console.warn(`NO FRONTMATTER: ${filePath}`);
    missing++;
    continue;
  }
  const fmBody = fmMatch[2];
  if (/^prefInfo:/m.test(fmBody)) {
    console.log(`SKIP (already has prefInfo): ${p.dir}`);
    skipped++;
    continue;
  }

  // Preserve the file's own line-ending style.
  const eol = fmMatch[1].includes("\r\n") ? "\r\n" : "\n";
  const additions = [
    buildPrefInfoYaml(p),
    /^references:/m.test(fmBody) ? "" : buildReferencesYaml(),
  ].filter(Boolean).join("\n").replace(/\n/g, eol);

  const newFmBody = fmBody.trimEnd() + eol + additions;
  const newContent =
    fmMatch[1] + newFmBody + fmMatch[3] + content.slice(fmMatch[0].length);
  fs.writeFileSync(filePath, newContent, "utf-8");
  console.log(`OK: ${p.dir}`);
  added++;
}

console.log(`\nDone — added: ${added}, skipped: ${skipped}, missing: ${missing}`);
