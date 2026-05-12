// North Macedonia: 8 statistical regions (NE may have older 70+ municipalities).
module.exports = {
  pageDir: "europe/macedonia",
  source: { type: "natural-earth", iso_a2: "MK" },
  title: { ja: "北マケドニアの行政区分", en: "Administrative Divisions of North Macedonia" },
  defaultType: "region",
  tolerance: 0.01,
  minOuterArea: 1e-4,
};
