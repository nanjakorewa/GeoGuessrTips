// Ecuador: 24 provinces.
module.exports = {
  pageDir: "cs_america/ecuador",
  source: { type: "natural-earth", iso_a2: "EC" },
  title: { ja: "エクアドルの州", en: "Provinces of Ecuador" },
  defaultType: "province",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  // Galápagos is in the dataset; without exclusion the bbox stretches west.
  excludeCodes: ["EC-W"],
};
