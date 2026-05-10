// New Zealand: 16 regions. NE includes a few outlying islands (X06~ etc.)
// which we filter out via featureFilter.
module.exports = {
  pageDir: "oceania/new-zealand",
  source: { type: "natural-earth", iso_a2: "NZ" },
  title: { ja: "ニュージーランドの地方", en: "Regions of New Zealand" },
  defaultType: "region",
  tolerance: 0.02,
  minOuterArea: 1e-3,
  // Drop placeholder outlying-island features (they have null type / X##~ codes)
  featureFilter: (f) => f.properties.type !== null && !/X\d/.test(String(f.properties.iso_3166_2 || "")),
  names: {
    "NZ-AUK": { ja: "オークランド地方",      en: "Auckland", note: "最大都市" },
    "NZ-BOP": { ja: "ベイ・オブ・プレンティ地方", en: "Bay of Plenty" },
    "NZ-CAN": { ja: "カンタベリー地方",      en: "Canterbury" },
    "NZ-GIS": { ja: "ギズボーン地方",        en: "Gisborne" },
    "NZ-HKB": { ja: "ホークス・ベイ地方",    en: "Hawke's Bay" },
    "NZ-MWT": { ja: "マナワツ・ワンガヌイ地方", en: "Manawatu-Whanganui" },
    "NZ-MBH": { ja: "マールボロ地方",        en: "Marlborough" },
    "NZ-NSN": { ja: "ネルソン地方",          en: "Nelson" },
    "NZ-NTL": { ja: "ノースランド地方",      en: "Northland" },
    "NZ-OTA": { ja: "オタゴ地方",            en: "Otago" },
    "NZ-STL": { ja: "サウスランド地方",      en: "Southland" },
    "NZ-TKI": { ja: "タラナキ地方",          en: "Taranaki" },
    "NZ-TAS": { ja: "タスマン地方",          en: "Tasman" },
    "NZ-WKO": { ja: "ワイカト地方",          en: "Waikato" },
    "NZ-WGN": { ja: "ウェリントン地方",      en: "Wellington", note: "首都" },
    "NZ-WTC": { ja: "ウェスト・コースト地方",en: "West Coast" },
  },
};
