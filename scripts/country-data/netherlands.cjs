// Netherlands: 12 provinces (NE has 15, includes overseas)
module.exports = {
  pageDir: "europe/netherlands",
  source: { type: "natural-earth", iso_a2: "NL" },
  title: { ja: "オランダの州", en: "Provinces of the Netherlands" },
  defaultType: "province",
  tolerance: 0.005,
  minOuterArea: 1e-4,
  // Drop Caribbean Netherlands (Bonaire/Saba/Sint Eustatius) so the map
  // stays focused on the European mainland.
  excludeCodes: ["NL-BQ1", "NL-BQ2", "NL-BQ3"],
  names: {
    "NL-DR": { ja: "ドレンテ州",         en: "Drenthe" },
    "NL-FL": { ja: "フレヴォラント州",   en: "Flevoland" },
    "NL-FR": { ja: "フリースラント州",   en: "Friesland" },
    "NL-GE": { ja: "ヘルダーラント州",   en: "Gelderland" },
    "NL-GR": { ja: "フローニンゲン州",   en: "Groningen" },
    "NL-LI": { ja: "リンブルフ州",       en: "Limburg" },
    "NL-NB": { ja: "北ブラバント州",     en: "North Brabant" },
    "NL-NH": { ja: "北ホラント州",       en: "North Holland" },
    "NL-OV": { ja: "オーファーアイセル州", en: "Overijssel" },
    "NL-UT": { ja: "ユトレヒト州",       en: "Utrecht" },
    "NL-ZE": { ja: "ゼーラント州",       en: "Zeeland" },
    "NL-ZH": { ja: "南ホラント州",       en: "South Holland", note: "首都ハーグ・最大都市アムステルダムは隣州" },
  },
};
