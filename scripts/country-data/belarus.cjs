// Belarus: 6 regions (voblast) + Minsk city
module.exports = {
  pageDir: "europe/belarus",
  source: { type: "natural-earth", iso_a2: "BY" },
  title: { ja: "ベラルーシの州", en: "Regions of Belarus" },
  defaultType: "region",
  tolerance: 0.02,
  minOuterArea: 1e-3,
  typeOverrides: { "BY-HM": "metropolitan_city" },
  names: {
    "BY-BR": { ja: "ブレスト州",     en: "Brest" },
    "BY-HO": { ja: "ホメリ州",       en: "Gomel" },
    "BY-HR": { ja: "フロドナ州",     en: "Grodno" },
    "BY-MA": { ja: "マヒリョウ州",   en: "Mogilev" },
    "BY-MI": { ja: "ミンスク州",     en: "Minsk (Region)" },
    "BY-VI": { ja: "ヴィーツェプスク州", en: "Vitebsk" },
    "BY-HM": { ja: "ミンスク市",     en: "Minsk (City)", note: "首都" },
  },
};
