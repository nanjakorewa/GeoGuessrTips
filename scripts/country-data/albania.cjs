// Albania: 12 counties
module.exports = {
  pageDir: "europe/albania",
  source: { type: "natural-earth", iso_a2: "AL" },
  title: { ja: "アルバニアの県", en: "Counties of Albania" },
  defaultType: "county",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  names: {
    "AL-09": { ja: "ディブラ県",     en: "Dibër" },
    "AL-10": { ja: "ドゥラス県",     en: "Durrës" },
    "AL-11": { ja: "エルバサン県",   en: "Elbasan" },
    "AL-12": { ja: "フィエル県",     en: "Fier" },
    "AL-08": { ja: "コルチャ県",     en: "Korçë" },
    "AL-07": { ja: "クケス県",       en: "Kukës" },
    "AL-03": { ja: "レジャ県",       en: "Lezhë" },
    "AL-01": { ja: "ベラト県",       en: "Berat" },
    "AL-04": { ja: "ティラナ県",     en: "Tirana", note: "首都" },
    "AL-02": { ja: "シュコドラ県",   en: "Shkodër" },
    "AL-05": { ja: "ジロカストラ県", en: "Gjirokastër" },
    "AL-06": { ja: "ヴロラ県",       en: "Vlorë" },
  },
};
