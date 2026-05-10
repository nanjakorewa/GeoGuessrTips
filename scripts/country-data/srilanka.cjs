// Sri Lanka: 25 districts (or 9 provinces; NE uses district-level)
module.exports = {
  pageDir: "asia/srilanka",
  source: { type: "natural-earth", iso_a2: "LK" },
  title: { ja: "スリランカの県", en: "Districts of Sri Lanka" },
  defaultType: "department",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  names: {
    "LK-11": { ja: "コロンボ県", en: "Colombo", note: "首都" },
  },
};
