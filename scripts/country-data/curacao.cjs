// Curaçao: single polygon in NE. We just need the island outline.
module.exports = {
  pageDir: "cs_america/curacao",
  source: { type: "natural-earth", iso_a2: "CW" },
  title: { ja: "キュラソー", en: "Curaçao" },
  defaultType: "territory",
  tolerance: 0.003,
  minOuterArea: 1e-6,
};
