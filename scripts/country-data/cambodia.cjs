// Cambodia: 24 provinces + Phnom Penh (NE has 24)
module.exports = {
  pageDir: "asia/cambodia",
  source: { type: "natural-earth", iso_a2: "KH" },
  title: { ja: "カンボジアの州", en: "Provinces of Cambodia" },
  defaultType: "province",
  tolerance: 0.015,
  minOuterArea: 1e-4,
  names: {
    "KH-12": { ja: "プノンペン", en: "Phnom Penh", note: "首都" },
  },
};
