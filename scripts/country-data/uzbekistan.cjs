// Uzbekistan: 12 regions + Tashkent + Karakalpakstan
module.exports = {
  pageDir: "asia/uzbekistan",
  source: { type: "natural-earth", iso_a2: "UZ" },
  title: { ja: "ウズベキスタンの州", en: "Regions of Uzbekistan" },
  defaultType: "region",
  tolerance: 0.02,
  minOuterArea: 1e-3,
  names: {
    "UZ-TK": { ja: "タシュケント市", en: "Tashkent (City)", note: "首都" },
  },
};
