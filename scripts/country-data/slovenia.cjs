// Slovenia: 12 statistical regions / 212 municipalities. NE has ~12.
module.exports = {
  pageDir: "europe/slovenia",
  source: { type: "natural-earth", iso_a2: "SI" },
  title: { ja: "スロベニアの統計地域", en: "Statistical Regions of Slovenia" },
  defaultType: "region",
  tolerance: 0.01,
  minOuterArea: 1e-4,
};
