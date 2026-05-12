// Latvia: 5 statistical/planning regions. NE has ~26-119 municipalities.
module.exports = {
  pageDir: "europe/baltic-state/latvia",
  source: { type: "natural-earth", iso_a2: "LV" },
  title: { ja: "ラトビアの自治体", en: "Municipalities of Latvia" },
  defaultType: "municipality",
  tolerance: 0.01,
  minOuterArea: 1e-4,
};
