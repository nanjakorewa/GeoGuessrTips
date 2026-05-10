// South Africa: 9 provinces
module.exports = {
  pageDir: "africa/south-africa",
  source: { type: "natural-earth", iso_a2: "ZA" },
  title: { ja: "南アフリカの州", en: "Provinces of South Africa" },
  defaultType: "province",
  tolerance: 0.02,
  minOuterArea: 1e-3,
  names: {
    "ZA-EC": { ja: "東ケープ州",     en: "Eastern Cape" },
    "ZA-FS": { ja: "フリーステート州", en: "Free State" },
    "ZA-GT": { ja: "ハウテン州",     en: "Gauteng", note: "首都プレトリア・最大都市ヨハネスブルグ" },
    "ZA-NL": { ja: "クワズール・ナタール州", en: "KwaZulu-Natal" },
    "ZA-LP": { ja: "リンポポ州",     en: "Limpopo" },
    "ZA-MP": { ja: "ムプマランガ州", en: "Mpumalanga" },
    "ZA-NW": { ja: "北西州",         en: "North West" },
    "ZA-NC": { ja: "北ケープ州",     en: "Northern Cape" },
    "ZA-WC": { ja: "西ケープ州",     en: "Western Cape" },
  },
};
