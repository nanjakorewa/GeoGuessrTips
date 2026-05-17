/**
 * Process GADM v2.8 Indonesia ADM2 (kabupaten/kota) GeoJSON into the data file
 * consumed by /quiz/states/asia/indonesia-kabupaten/*.
 *
 * Source GeoJSON (one-time download):
 *   curl -k -o temp/idn_adm2.json \
 *     https://raw.githubusercontent.com/rifani/geojson-political-indonesia/master/IDN_adm_2_kabkota.json
 * Output: src/data/quiz-indonesia-kabupaten.json
 *
 * GADM 2.8 predates several post-2010 kabupaten splits and the 2022 Papua /
 * Papua Barat re-organisations. We re-assign GADM kabupaten to the current
 * 38-province structure where the splits are known, and accept that some
 * post-2010 kabupaten splits remain merged into their parent.
 */
const fs = require('fs');
const path = require('path');

const SRC = process.argv[2] || path.join(__dirname, '..', 'temp', 'idn_adm2.json');
const OUT = path.join(__dirname, '..', 'src', 'data', 'quiz-indonesia-kabupaten.json');

const data = JSON.parse(fs.readFileSync(SRC, 'utf8'));

// 7 island groups the kabupaten quiz is organised by. Each modern province is
// assigned to one island group via PROVINCES.island.
const ISLANDS = [
  { slug: "sumatera",   ja: "スマトラ島",             nameId: "Sumatera" },
  { slug: "jawa",       ja: "ジャワ島",               nameId: "Jawa" },
  { slug: "nusa-tenggara", ja: "バリ・ヌサ・トゥンガラ諸島", nameId: "Bali & Nusa Tenggara" },
  { slug: "kalimantan", ja: "カリマンタン島",         nameId: "Kalimantan (Borneo)" },
  { slug: "sulawesi",   ja: "スラウェシ島",           nameId: "Sulawesi" },
  { slug: "maluku",     ja: "マルク諸島",             nameId: "Maluku" },
  { slug: "papua",      ja: "パプア（ニューギニア島西部）", nameId: "Papua (Western New Guinea)" },
];

// Modern 38-province directory. `parentGadm` is the GADM v2.8 NAME_1 a kabupaten
// belonged to before 2012/2022 splits — used to pull features for new provinces.
// `island` is the slug from ISLANDS.
const PROVINCES = [
  { slug: "aceh",                code: "ID-AC", ja: "アチェ州",                   nameId: "Aceh",                parentGadm: "Aceh",                island: "sumatera" },
  { slug: "sumatera-utara",      code: "ID-SU", ja: "北スマトラ州",               nameId: "Sumatera Utara",      parentGadm: "Sumatera Utara",      island: "sumatera" },
  { slug: "sumatera-barat",      code: "ID-SB", ja: "西スマトラ州",               nameId: "Sumatera Barat",      parentGadm: "Sumatera Barat",      island: "sumatera" },
  { slug: "riau",                code: "ID-RI", ja: "リアウ州",                   nameId: "Riau",                parentGadm: "Riau",                island: "sumatera" },
  { slug: "kepulauan-riau",      code: "ID-KR", ja: "リアウ諸島州",               nameId: "Kepulauan Riau",      parentGadm: "Kepulauan Riau",      island: "sumatera" },
  { slug: "jambi",               code: "ID-JA", ja: "ジャンビ州",                 nameId: "Jambi",               parentGadm: "Jambi",               island: "sumatera" },
  { slug: "sumatera-selatan",    code: "ID-SS", ja: "南スマトラ州",               nameId: "Sumatera Selatan",    parentGadm: "Sumatera Selatan",    island: "sumatera" },
  { slug: "bangka-belitung",     code: "ID-BB", ja: "バンカ・ブリトゥン諸島州",   nameId: "Kep. Bangka Belitung",parentGadm: "Bangka-Belitung",     island: "sumatera" },
  { slug: "bengkulu",            code: "ID-BE", ja: "ブンクル州",                 nameId: "Bengkulu",            parentGadm: "Bengkulu",            island: "sumatera" },
  { slug: "lampung",             code: "ID-LA", ja: "ランプン州",                 nameId: "Lampung",             parentGadm: "Lampung",             island: "sumatera" },
  { slug: "jakarta",             code: "ID-JK", ja: "ジャカルタ首都特別州",       nameId: "DKI Jakarta",         parentGadm: "Jakarta Raya",        island: "jawa" },
  { slug: "banten",              code: "ID-BT", ja: "バンテン州",                 nameId: "Banten",              parentGadm: "Banten",              island: "jawa" },
  { slug: "jawa-barat",          code: "ID-JB", ja: "西ジャワ州",                 nameId: "Jawa Barat",          parentGadm: "Jawa Barat",          island: "jawa" },
  { slug: "jawa-tengah",         code: "ID-JT", ja: "中部ジャワ州",               nameId: "Jawa Tengah",         parentGadm: "Jawa Tengah",         island: "jawa" },
  { slug: "yogyakarta",          code: "ID-YO", ja: "ジョグジャカルタ特別州",     nameId: "DI Yogyakarta",       parentGadm: "Yogyakarta",          island: "jawa" },
  { slug: "jawa-timur",          code: "ID-JI", ja: "東ジャワ州",                 nameId: "Jawa Timur",          parentGadm: "Jawa Timur",          island: "jawa" },
  { slug: "bali",                code: "ID-BA", ja: "バリ州",                     nameId: "Bali",                parentGadm: "Bali",                island: "nusa-tenggara" },
  { slug: "nusa-tenggara-barat", code: "ID-NB", ja: "西ヌサ・トゥンガラ州",       nameId: "Nusa Tenggara Barat", parentGadm: "Nusa Tenggara Barat", island: "nusa-tenggara" },
  { slug: "nusa-tenggara-timur", code: "ID-NT", ja: "東ヌサ・トゥンガラ州",       nameId: "Nusa Tenggara Timur", parentGadm: "Nusa Tenggara Timur", island: "nusa-tenggara" },
  { slug: "kalimantan-barat",    code: "ID-KB", ja: "西カリマンタン州",           nameId: "Kalimantan Barat",    parentGadm: "Kalimantan Barat",    island: "kalimantan" },
  { slug: "kalimantan-tengah",   code: "ID-KT", ja: "中部カリマンタン州",         nameId: "Kalimantan Tengah",   parentGadm: "Kalimantan Tengah",   island: "kalimantan" },
  { slug: "kalimantan-selatan",  code: "ID-KS", ja: "南カリマンタン州",           nameId: "Kalimantan Selatan",  parentGadm: "Kalimantan Selatan",  island: "kalimantan" },
  { slug: "kalimantan-timur",    code: "ID-KI", ja: "東カリマンタン州",           nameId: "Kalimantan Timur",    parentGadm: "Kalimantan Timur",    island: "kalimantan" },
  { slug: "kalimantan-utara",    code: "ID-KU", ja: "北カリマンタン州",           nameId: "Kalimantan Utara",    parentGadm: "Kalimantan Timur",    island: "kalimantan" },
  { slug: "sulawesi-utara",      code: "ID-SA", ja: "北スラウェシ州",             nameId: "Sulawesi Utara",      parentGadm: "Sulawesi Utara",      island: "sulawesi" },
  { slug: "gorontalo",           code: "ID-GO", ja: "ゴロンタロ州",               nameId: "Gorontalo",           parentGadm: "Gorontalo",           island: "sulawesi" },
  { slug: "sulawesi-tengah",     code: "ID-ST", ja: "中部スラウェシ州",           nameId: "Sulawesi Tengah",     parentGadm: "Sulawesi Tengah",     island: "sulawesi" },
  { slug: "sulawesi-barat",      code: "ID-SR", ja: "西スラウェシ州",             nameId: "Sulawesi Barat",      parentGadm: "Sulawesi Barat",      island: "sulawesi" },
  { slug: "sulawesi-selatan",    code: "ID-SN", ja: "南スラウェシ州",             nameId: "Sulawesi Selatan",    parentGadm: "Sulawesi Selatan",    island: "sulawesi" },
  { slug: "sulawesi-tenggara",   code: "ID-SG", ja: "東南スラウェシ州",           nameId: "Sulawesi Tenggara",   parentGadm: "Sulawesi Tenggara",   island: "sulawesi" },
  { slug: "maluku",              code: "ID-MA", ja: "マルク州",                   nameId: "Maluku",              parentGadm: "Maluku",              island: "maluku" },
  { slug: "maluku-utara",        code: "ID-MU", ja: "北マルク州",                 nameId: "Maluku Utara",        parentGadm: "Maluku Utara",        island: "maluku" },
  { slug: "papua-barat",         code: "ID-PB", ja: "西パプア州",                 nameId: "Papua Barat",         parentGadm: "Irian Jaya Barat",    island: "papua" },
  { slug: "papua-barat-daya",    code: "ID-PD", ja: "南西パプア州",               nameId: "Papua Barat Daya",    parentGadm: "Irian Jaya Barat",    island: "papua" },
  { slug: "papua",               code: "ID-PA", ja: "パプア州",                   nameId: "Papua",               parentGadm: "Papua",               island: "papua" },
  { slug: "papua-selatan",       code: "ID-PS", ja: "南パプア州",                 nameId: "Papua Selatan",       parentGadm: "Papua",               island: "papua" },
  { slug: "papua-tengah",        code: "ID-PT", ja: "中部パプア州",               nameId: "Papua Tengah",        parentGadm: "Papua",               island: "papua" },
  { slug: "papua-pegunungan",    code: "ID-PP", ja: "パプア山岳州",               nameId: "Papua Pegunungan",    parentGadm: "Papua",               island: "papua" },
];

// Reassign specific kabupaten short names from the GADM parent province to a
// new province created by post-2012 splits. Keyed by canonical short name.
const REASSIGN = {
  // Kalimantan Utara (created 2012 from Kalimantan Timur, 5 kab/kota)
  "Bulungan":            "kalimantan-utara",
  "Malinau":             "kalimantan-utara",
  "Nunukan":             "kalimantan-utara",
  "Tarakan":             "kalimantan-utara", // Kota
  // Tana Tidung not in GADM (split from Bulungan 2007)
  // Papua Selatan (created 2022 from Papua, 4 kab)
  "Asmat":               "papua-selatan",
  "Boven Digoel":        "papua-selatan",
  "Mappi":               "papua-selatan",
  "Merauke":             "papua-selatan",
  // Papua Tengah (created 2022 from Papua, 8 kab — only 4 in GADM)
  "Mimika":              "papua-tengah",
  "Nabire":              "papua-tengah",
  "Paniai":              "papua-tengah",
  "Puncak Jaya":         "papua-tengah",
  // Papua Pegunungan (created 2022 from Papua, 8 kab — only 4 in GADM)
  "Jayawijaya":          "papua-pegunungan",
  "Pegunungan Bintang":  "papua-pegunungan",
  "Tolikara":            "papua-pegunungan",
  "Yahukimo":            "papua-pegunungan",
  // Papua Barat Daya (created 2022 from Papua Barat, 6 kab/kota — partial in GADM)
  "Raja Ampat":          "papua-barat-daya",
  "Sorong":              "papua-barat-daya", // Kota Sorong
};

const NAME_OVERRIDES = {
  "Jakarta Pusat":  { kind: "kota-admin" },
  "Jakarta Utara":  { kind: "kota-admin" },
  "Jakarta Barat":  { kind: "kota-admin" },
  "Jakarta Selatan":{ kind: "kota-admin" },
  "Jakarta Timur":  { kind: "kota-admin" },
};

// GADM v2.8 contains a handful of mislabeled features: NAME_2 from one
// province paired with a polygon in another. Drop them by their stable ID_2.
const BAD_FEATURE_IDS = new Set([
  15559, // Maluku Utara polygon mislabeled as "Lampung Barat" (HASC ID.LA.LB)
  15490, // Kalimantan Barat polygon mislabeled as "Kepulauan Riau" (HASC ID.KR.KR)
]);

// Canonical Indonesian spellings (id.wikipedia.org). GADM 2.8 uses older
// forms — patch the obvious ones.
const SPELLING_FIX = {
  "Bulongan":              "Bulungan",
  "Karang Asem":           "Karangasem",
  "Fak-Fak":               "Fakfak",
  "Yapen Waropen":         "Kepulauan Yapen",
  "Pasir":                 "Paser",
  "Gunung Kidul":          "Gunungkidul",
  "Admin. Kepulauan Seribu": "Kepulauan Seribu",
};

function canonicalShort(rawName) {
  return SPELLING_FIX[rawName] ?? rawName;
}

function officialName(rawName, type) {
  const name = canonicalShort(rawName);
  const ov = NAME_OVERRIDES[rawName];
  if (ov && ov.kind === "kota-admin") return `Kota Administrasi ${name}`;
  if (name === "Kepulauan Seribu") return "Kabupaten Administrasi Kepulauan Seribu";
  // GADM's NAME_2 sometimes already includes the "Kota " / "Kabupaten "
  // prefix (e.g., "Kota Semarang", "Kota Bandung"). Guard against producing
  // "Kota Kota Semarang" by skipping the prefix when it's already there.
  const alreadyPrefixed = /^(Kota|Kabupaten)\s/i.test(name);
  if (alreadyPrefixed) return name;
  if (type === "Kabupaten") return `Kabupaten ${name}`;
  if (type === "Kotamadya") return `Kota ${name}`;
  if (name === "Sabang") return "Kota Sabang";
  if (name === "Banda Aceh") return "Kota Banda Aceh";
  return name;
}

function centroidOfFeature(geom) {
  if (!geom) return null;
  let polygons;
  if (geom.type === 'Polygon') polygons = [geom.coordinates];
  else if (geom.type === 'MultiPolygon') polygons = geom.coordinates;
  else return null;
  let best = null;
  let bestArea = -1;
  for (const poly of polygons) {
    const outer = poly[0];
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const pt of outer) {
      if (pt[0] < minX) minX = pt[0];
      if (pt[0] > maxX) maxX = pt[0];
      if (pt[1] < minY) minY = pt[1];
      if (pt[1] > maxY) maxY = pt[1];
    }
    const area = (maxX - minX) * (maxY - minY);
    if (area > bestArea) {
      bestArea = area;
      best = { bbox: [minX, minY, maxX, maxY] };
    }
  }
  if (!best) return null;
  return [
    Number(((best.bbox[0] + best.bbox[2]) / 2).toFixed(4)),
    Number(((best.bbox[1] + best.bbox[3]) / 2).toFixed(4)),
  ];
}

function bboxOfFeature(geom) {
  let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
  if (!geom) return null;
  const polys = geom.type === 'Polygon' ? [geom.coordinates] : geom.coordinates;
  for (const poly of polys) {
    for (const pt of poly[0]) {
      if (pt[0] < minX) minX = pt[0];
      if (pt[0] > maxX) maxX = pt[0];
      if (pt[1] < minY) minY = pt[1];
      if (pt[1] > maxY) maxY = pt[1];
    }
  }
  return [minX, minY, maxX, maxY];
}

const PROV_BY_SLUG = Object.fromEntries(PROVINCES.map((p) => [p.slug, p]));

// First pass: classify every GADM feature into a modern province (REASSIGN
// overrides or parent fallback). Aggregate kabupaten + bbox by island.
const kabsByIsland = new Map();
const bboxByIsland = new Map();

for (const f of data.features) {
  const p = f.properties;
  if (!p) continue;
  if (BAD_FEATURE_IDS.has(p.ID_2)) continue;
  if (/^n\.a\.?/i.test(p.NAME_2)) continue;
  const centroid = centroidOfFeature(f.geometry);
  if (!centroid) continue;
  const short = canonicalShort(p.NAME_2);
  const name = officialName(p.NAME_2, p.TYPE_2);
  const provSlug = REASSIGN[short]
    ?? (PROVINCES.find((pp) => pp.parentGadm === p.NAME_1)?.slug)
    ?? null;
  if (!provSlug) {
    console.warn("Could not assign:", p.NAME_2, "from", p.NAME_1);
    continue;
  }
  const provMeta = PROV_BY_SLUG[provSlug];
  const islandSlug = provMeta.island;
  if (!kabsByIsland.has(islandSlug)) kabsByIsland.set(islandSlug, []);
  kabsByIsland.get(islandSlug).push({
    name,
    shortName: short,
    province: provMeta.ja,
    provinceId: provMeta.nameId,
    provinceSlug: provMeta.slug,
    lng: centroid[0],
    lat: centroid[1],
  });
  // bbox per island (drives initial map view)
  const fb = bboxOfFeature(f.geometry);
  if (fb) {
    const cur = bboxByIsland.get(islandSlug) || [Infinity, Infinity, -Infinity, -Infinity];
    if (fb[0] < cur[0]) cur[0] = fb[0];
    if (fb[1] < cur[1]) cur[1] = fb[1];
    if (fb[2] > cur[2]) cur[2] = fb[2];
    if (fb[3] > cur[3]) cur[3] = fb[3];
    bboxByIsland.set(islandSlug, cur);
  }
}

const out = [];
for (const meta of ISLANDS) {
  const kabs = (kabsByIsland.get(meta.slug) || []).sort((a, b) => a.name.localeCompare(b.name));
  const bbox = bboxByIsland.get(meta.slug);
  // List of province names included in this island, sorted by appearance order
  const provincesIncluded = PROVINCES.filter((p) => p.island === meta.slug).map((p) => ({
    slug: p.slug,
    nameJa: p.ja,
    nameId: p.nameId,
  }));
  out.push({
    slug: meta.slug,
    nameId: meta.nameId,
    nameJa: meta.ja,
    bbox: bbox
      ? [Number(bbox[0].toFixed(4)), Number(bbox[1].toFixed(4)), Number(bbox[2].toFixed(4)), Number(bbox[3].toFixed(4))]
      : null,
    provinces: provincesIncluded,
    kabs,
  });
}

fs.writeFileSync(OUT, JSON.stringify(out, null, 2));
console.log('Islands:', out.length);
let total = 0;
for (const p of out) {
  console.log(`  ${p.slug.padEnd(15)} ${p.nameId.padEnd(34)} ${p.nameJa.padEnd(28)} — ${p.kabs.length} kab/kota (${p.provinces.length} 州)`);
  total += p.kabs.length;
}
console.log('Total kabupaten/kota:', total);
