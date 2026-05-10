// Saudi Arabia: 13 administrative regions (mintaqah)
module.exports = {
  pageDir: "middle_east/saudiarabia",
  source: { type: "natural-earth", iso_a2: "SA" },
  title: { ja: "サウジアラビアの州", en: "Regions of Saudi Arabia" },
  defaultType: "region",
  tolerance: 0.03,
  minOuterArea: 1e-3,
  names: {
    "SA-01": { ja: "リヤド州",         en: "Riyadh", note: "首都" },
    "SA-02": { ja: "マッカ州",         en: "Makkah" },
    "SA-03": { ja: "マディーナ州",     en: "Madinah" },
    "SA-04": { ja: "東部州",           en: "Eastern Province" },
    "SA-05": { ja: "アル・カシム州",   en: "Al-Qassim" },
    "SA-06": { ja: "ハーイル州",       en: "Ha'il" },
    "SA-07": { ja: "タブーク州",       en: "Tabuk" },
    "SA-08": { ja: "北部国境州",       en: "Northern Borders" },
    "SA-09": { ja: "ジャウフ州",       en: "Al-Jawf" },
    "SA-10": { ja: "ジャザーン州",     en: "Jazan" },
    "SA-11": { ja: "ナジュラーン州",   en: "Najran" },
    "SA-12": { ja: "アル・バーハ州",   en: "Al Bahah" },
    "SA-14": { ja: "アル・アシール州", en: "'Asir" },
  },
};
