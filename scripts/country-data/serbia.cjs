// Serbia: ~25 districts + Belgrade. NE has 25.
module.exports = {
  pageDir: "europe/serbia",
  source: { type: "natural-earth", iso_a2: "RS" },
  title: { ja: "セルビアの郡", en: "Districts of Serbia" },
  defaultType: "department",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  // Name fallback to NE source. Capital and a few major districts curated.
  names: {
    "RS-00": { ja: "ベオグラード市",    en: "Belgrade", note: "首都" },
    "RS-07": { ja: "南バナト郡",       en: "South Banat" },
    "RS-09": { ja: "北バナト郡",       en: "North Banat" },
    "RS-10": { ja: "西バチカ郡",       en: "West Bačka" },
    "RS-11": { ja: "南バチカ郡",       en: "South Bačka" },
    "RS-12": { ja: "北バチカ郡",       en: "North Bačka" },
    "RS-13": { ja: "スレム郡",         en: "Srem" },
    "RS-15": { ja: "マチュヴァ郡",     en: "Mačva" },
  },
};
