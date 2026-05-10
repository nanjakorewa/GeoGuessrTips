// Laos: 17 provinces + Vientiane Prefecture
module.exports = {
  pageDir: "asia/laos",
  source: { type: "natural-earth", iso_a2: "LA" },
  title: { ja: "ラオスの県", en: "Provinces of Laos" },
  defaultType: "province",
  tolerance: 0.02,
  minOuterArea: 1e-3,
  names: {
    "LA-VT": { ja: "ヴィエンチャン都", en: "Vientiane Prefecture", note: "首都" },
  },
};
