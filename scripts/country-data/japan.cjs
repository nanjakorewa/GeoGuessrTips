// Japan: 47 prefectures. Used for the country-wide map at
// public/maps/countries/japan.svg (different from per-prefecture maps).
module.exports = {
  pageDir: "asia/japan",
  source: { type: "natural-earth", iso_a2: "JP" },
  title: { ja: "日本の都道府県", en: "Prefectures of Japan" },
  defaultType: "prefecture",
  tolerance: 0.01,
  minOuterArea: 1e-4,
};
