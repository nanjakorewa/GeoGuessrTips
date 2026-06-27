#!/usr/bin/env node
/**
 * Build src/data/areacode-quiz.json for the 市外局番クイズ (/quiz/areacode/).
 *
 * Input
 *   - src/data/areacodes.json          番号区画名 -> [市外局番, ...]
 *   - src/data/municipalities.json     自治体名 -> [都道府県名]
 *   - public/maps/prefectures/<slug>.svg   data-name 付き自治体ポリゴン
 *
 * Output
 *   src/data/areacode-quiz.json
 *     {
 *       prefectures: { "JP-13": { slug: "tokyo", ja: "東京都" }, ... },
 *       questions:  [ { code: "052", ma: ["名古屋"], answers: [ { muni, slug, prefJa, jp } ] }, ... ]
 *     }
 *
 * Each question maps a 市外局番 to one or more clickable municipality polygons
 * (the principal city of every 番号区画 that shares the code). The quiz accepts
 * any of those municipalities as correct.
 *
 * Run:  node scripts/build-areacode-quiz.cjs
 */
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const ac = require(path.join(ROOT, "src/data/areacodes.json"));
const muniPref = require(path.join(ROOT, "src/data/municipalities.json"));
const PREF_DIR = path.join(ROOT, "public/maps/prefectures");

// Standard prefecture order (ISO 3166-2:JP, JP-01 .. JP-47). slug == svg filename.
const PREF = [
  ["hokkaido", "北海道"], ["aomori", "青森県"], ["iwate", "岩手県"], ["miyagi", "宮城県"],
  ["akita", "秋田県"], ["yamagata", "山形県"], ["fukushima", "福島県"], ["ibaraki", "茨城県"],
  ["tochigi", "栃木県"], ["gunma", "群馬県"], ["saitama", "埼玉県"], ["chiba", "千葉県"],
  ["tokyo", "東京都"], ["kanagawa", "神奈川県"], ["niigata", "新潟県"], ["toyama", "富山県"],
  ["ishikawa", "石川県"], ["fukui", "福井県"], ["yamanashi", "山梨県"], ["nagano", "長野県"],
  ["gifu", "岐阜県"], ["shizuoka", "静岡県"], ["aichi", "愛知県"], ["mie", "三重県"],
  ["shiga", "滋賀県"], ["kyoto", "京都府"], ["osaka", "大阪府"], ["hyogo", "兵庫県"],
  ["nara", "奈良県"], ["wakayama", "和歌山県"], ["tottori", "鳥取県"], ["shimane", "島根県"],
  ["okayama", "岡山県"], ["hiroshima", "広島県"], ["yamaguchi", "山口県"], ["tokushima", "徳島県"],
  ["kagawa", "香川県"], ["ehime", "愛媛県"], ["kochi", "高知県"], ["fukuoka", "福岡県"],
  ["saga", "佐賀県"], ["nagasaki", "長崎県"], ["kumamoto", "熊本県"], ["oita", "大分県"],
  ["miyazaki", "宮崎県"], ["kagoshima", "鹿児島県"], ["okinawa", "沖縄県"],
];
const slugToJa = Object.fromEntries(PREF.map(([s, j]) => [s, j]));
const jaToSlug = Object.fromEntries(PREF.map(([s, j]) => [j, s]));
const slugToJp = Object.fromEntries(PREF.map(([s], i) => [s, "JP-" + String(i + 1).padStart(2, "0")]));
const prefectures = Object.fromEntries(
  PREF.map(([s, j], i) => ["JP-" + String(i + 1).padStart(2, "0"), { slug: s, ja: j }])
);

// Collect every clickable municipality polygon name + which prefecture(s) it appears in.
const svgNames = new Set();
const nameToSlug = {};
for (const file of fs.readdirSync(PREF_DIR)) {
  if (!file.endsWith(".svg")) continue;
  const slug = file.replace(/\.svg$/, "");
  const text = fs.readFileSync(path.join(PREF_DIR, file), "utf8");
  const re = /data-name="([^"]+)"/g;
  let m;
  while ((m = re.exec(text))) {
    svgNames.add(m[1]);
    (nameToSlug[m[1]] = nameToSlug[m[1]] || new Set()).add(slug);
  }
}

// Auto-resolve a 番号区画名 to a clickable municipality polygon by exact / +suffix match.
const SUFFIX = ["市", "町", "村", "区"];
function autoResolve(ma) {
  if (svgNames.has(ma)) return ma;
  for (const s of SUFFIX) if (svgNames.has(ma + s)) return ma + s;
  return null;
}

// Historical / merged 番号区画名 with no direct polygon -> current municipality.
const HAND = {
  "中之島": "十島村", "中湧別": "湧別町", "中甑": "薩摩川内市", "久万": "久万高原町",
  "今市": "日光市", "今津": "高島市", "伊予三島": "四国中央市", "伊豆大島": "大島町",
  "佐原": "香取市", "八丈島": "八丈町", "八日市": "東近江市", "水口": "甲賀市",
  "利尻礼文": "礼文町", "北見枝幸": "枝幸町", "原町": "南相馬市", "厳原": "対馬市",
  "対馬佐賀": "対馬市", "郷ノ浦": "壱岐市", "古川": "大崎市", "因島": "尾道市",
  "大曲": "大仙市", "角館": "仙北市", "大瀬戸": "西海市", "有川": "新上五島町",
  "福江": "五島市", "天竜": "浜松市", "小笠原": "小笠原村", "尾張横須賀": "東海市",
  "徳山": "周南市", "新井": "妙高市", "新津": "新潟市", "早来": "安平町",
  "鵡川": "むかわ町", "木曾福島": "木曽町", "本荘": "由利本荘市", "東城": "庄原市",
  "松橋": "宇城市", "榛原": "牧之原市", "武生": "越前市", "武蔵野三鷹": "武蔵野市",
  "水海道": "常総市", "竜ケ崎": "龍ケ崎市", "瀬高": "みやま市", "焼尻": "羽幌町",
  "熊石": "八雲町", "甘木": "朝倉市", "田万川": "萩市", "硫黄島": "三島村",
  "磐城富岡": "富岡町", "神岡": "飛騨市", "福野": "南砺市", "築館": "栗原市",
  "脇町": "美馬市", "阿波池田": "三好市", "鴨島": "吉野川市", "荘川": "高山市",
  "蟹田": "外ヶ浜町", "迫": "登米市", "門別富川": "日高町", "高富": "山県市",
};

// Corrections where a same-named municipality sits in the WRONG prefecture for the
// code's actual region (verified against the 市外局番). [municipality, slug].
const FORCE = {
  "上野": ["伊賀市", "mie"],
  "川内": ["薩摩川内市", "kagoshima"],
  "瀬戸内": ["瀬戸内町", "kagoshima"],
  "千代田": ["北広島町", "hiroshima"],
  "西郷": ["隠岐の島町", "shimane"],
  "大口": ["伊佐市", "kagoshima"],
  "吉田": ["富士吉田市", "yamanashi"],
};

function slugForMuni(muni) {
  const pj = muniPref[muni];
  if (pj && pj[0] && jaToSlug[pj[0]]) return jaToSlug[pj[0]];
  const sl = nameToSlug[muni];
  if (sl) return [...sl][0];
  return null;
}

// 番号区画名 -> { muni, slug }
const maToMuni = {};
const forcedSlug = {};
for (const ma of Object.keys(ac)) {
  if (FORCE[ma]) {
    maToMuni[ma] = FORCE[ma][0];
    forcedSlug[ma] = FORCE[ma][1];
  } else {
    maToMuni[ma] = autoResolve(ma) || HAND[ma] || null;
  }
}

// Code -> { municipality -> slug } and code -> Set(番号区画名)
const TOKYO23 = [...svgNames].filter((n) => /区$/.test(n) && (nameToSlug[n] || new Set()).has("tokyo"));
const codeToMunis = {};
const codeToMA = {};
for (const [ma, codes] of Object.entries(ac)) {
  for (const c of codes) {
    (codeToMA[c] = codeToMA[c] || new Set()).add(ma);
    codeToMunis[c] = codeToMunis[c] || {};
    const mu = maToMuni[ma];
    if (mu && svgNames.has(mu)) {
      const sl = forcedSlug[ma] || slugForMuni(mu);
      if (sl) codeToMunis[c][mu] = sl;
    }
  }
}
// 03 (東京) covers all 23 special wards.
if (codeToMunis["03"]) for (const w of TOKYO23) codeToMunis["03"][w] = "tokyo";

const questions = [];
const dropped = [];
for (const code of Object.keys(codeToMunis)) {
  const answers = Object.entries(codeToMunis[code]).map(([muni, slug]) => ({
    muni, slug, prefJa: slugToJa[slug], jp: slugToJp[slug],
  }));
  if (!answers.length) { dropped.push(code); continue; }
  questions.push({ code, ma: [...codeToMA[code]], answers });
}
questions.sort((a, b) => a.code.localeCompare(b.code));

const out = { prefectures, questions };
const outPath = path.join(ROOT, "src/data/areacode-quiz.json");
fs.writeFileSync(outPath, JSON.stringify(out, null, 1));

// Integrity check.
let bad = 0;
for (const q of questions)
  for (const a of q.answers)
    if (!svgNames.has(a.muni) || !slugToJa[a.slug]) bad++;

console.log(`[areacode-quiz] wrote ${questions.length} questions, dropped ${dropped.length} (${dropped.join(",") || "-"}), invalid answers: ${bad}`);
