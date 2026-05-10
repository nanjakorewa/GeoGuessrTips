// Nepal: 14 zones (older administrative layout used by NE). Current is 7 provinces.
module.exports = {
  pageDir: "asia/nepal",
  source: { type: "natural-earth", iso_a2: "NP" },
  title: { ja: "ネパールの地方", en: "Zones of Nepal" },
  defaultType: "region",
  tolerance: 0.02,
  minOuterArea: 1e-4,
  names: {
    "NP-BA": { ja: "バグマティ", en: "Bagmati", note: "首都カトマンズ" },
  },
};
