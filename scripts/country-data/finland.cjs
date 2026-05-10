// Finland: 19 regions. NE labels them as "Province"; we'll call them region.
module.exports = {
  pageDir: "europe/finland",
  source: { type: "natural-earth", iso_a2: "FI" },
  title: { ja: "フィンランドの地方", en: "Regions of Finland" },
  defaultType: "region",
  tolerance: 0.02,
  minOuterArea: 1e-3,
};
