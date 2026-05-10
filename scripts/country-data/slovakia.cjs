// Slovakia: 8 regions (kraje)
module.exports = {
  pageDir: "europe/slovakia",
  source: { type: "natural-earth", iso_a2: "SK" },
  title: { ja: "スロバキアの州", en: "Regions of Slovakia" },
  defaultType: "region",
  tolerance: 0.005,
  minOuterArea: 1e-4,
  names: {
    "SK-BC": { ja: "バンスカー・ビストリツァ州", en: "Banská Bystrica" },
    "SK-BL": { ja: "ブラチスラバ州",         en: "Bratislava", note: "首都" },
    "SK-KI": { ja: "コシツェ州",             en: "Košice" },
    "SK-NI": { ja: "ニトラ州",               en: "Nitra" },
    "SK-PV": { ja: "プレショフ州",           en: "Prešov" },
    "SK-TC": { ja: "トレンチーン州",         en: "Trenčín" },
    "SK-TA": { ja: "トルナヴァ州",           en: "Trnava" },
    "SK-ZI": { ja: "ジリナ州",               en: "Žilina" },
  },
};
