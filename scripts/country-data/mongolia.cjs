// Mongolia: 21 provinces (aimag) + Ulaanbaatar
module.exports = {
  pageDir: "asia/mongolia",
  source: { type: "natural-earth", iso_a2: "MN" },
  title: { ja: "モンゴルの県", en: "Provinces of Mongolia" },
  defaultType: "province",
  tolerance: 0.03,
  minOuterArea: 1e-3,
  names: {
    "MN-1": { ja: "ウランバートル", en: "Ulaanbaatar", note: "首都" },
  },
};
