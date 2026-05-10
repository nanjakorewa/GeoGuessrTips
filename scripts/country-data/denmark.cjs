// Denmark: 5 administrative regions
module.exports = {
  pageDir: "europe/denmark",
  source: { type: "natural-earth", iso_a2: "DK" },
  title: { ja: "デンマークの地域", en: "Regions of Denmark" },
  defaultType: "region",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  names: {
    "DK-84": { ja: "首都地域",         en: "Capital Region", note: "首都コペンハーゲン" },
    "DK-82": { ja: "中央ユラン地域",   en: "Central Denmark" },
    "DK-81": { ja: "北ユラン地域",     en: "North Denmark" },
    "DK-85": { ja: "シェラン地域",     en: "Zealand" },
    "DK-83": { ja: "南デンマーク地域", en: "Southern Denmark" },
  },
};
