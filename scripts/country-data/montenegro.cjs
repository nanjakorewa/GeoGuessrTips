// Montenegro: 21 municipalities (used as first-level in NE)
module.exports = {
  pageDir: "europe/montenegro",
  source: { type: "natural-earth", iso_a2: "ME" },
  title: { ja: "モンテネグロの自治体", en: "Municipalities of Montenegro" },
  defaultType: "county",
  tolerance: 0.005,
  minOuterArea: 1e-5,
  names: {
    "ME-15": { ja: "ポドゴリツァ", en: "Podgorica", note: "首都" },
  },
};
