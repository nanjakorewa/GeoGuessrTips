// Ghana: NE has 10 historical regions (predates the 2018 split to 16).
module.exports = {
  pageDir: "africa/ghana",
  source: { type: "natural-earth", iso_a2: "GH" },
  title: { ja: "ガーナの州", en: "Regions of Ghana" },
  defaultType: "region",
  tolerance: 0.01,
  minOuterArea: 1e-4,
};
