// Lithuania: 10 counties (apskritis)
module.exports = {
  pageDir: "europe/baltic-state/lithuania",
  source: { type: "natural-earth", iso_a2: "LT" },
  title: { ja: "リトアニアの県", en: "Counties of Lithuania" },
  defaultType: "county",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  names: {
    "LT-AL": { ja: "アリートゥス県",   en: "Alytus" },
    "LT-KU": { ja: "カウナス県",       en: "Kaunas" },
    "LT-KL": { ja: "クライペダ県",     en: "Klaipėda" },
    "LT-MR": { ja: "マリヤンポレ県",   en: "Marijampolė" },
    "LT-PN": { ja: "パネヴェジース県", en: "Panevėžys" },
    "LT-SA": { ja: "シャウレイ県",     en: "Šiauliai" },
    "LT-TA": { ja: "タウラゲ県",       en: "Tauragė" },
    "LT-TE": { ja: "テルシェイ県",     en: "Telšiai" },
    "LT-UT": { ja: "ウテナ県",         en: "Utena" },
    "LT-VL": { ja: "ヴィリニュス県",   en: "Vilnius", note: "首都" },
  },
};
