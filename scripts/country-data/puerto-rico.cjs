// Puerto Rico: NE only carries 1 polygon ("Puerto Rico"). 78 municipios exist
// in reality, but the country outline is enough as a background for the city
// quiz.
module.exports = {
  pageDir: "n_america/puerto-rico",
  source: { type: "natural-earth", iso_a2: "PR" },
  title: { ja: "プエルトリコ", en: "Puerto Rico" },
  defaultType: "territory",
  tolerance: 0.005,
  minOuterArea: 1e-5,
};
