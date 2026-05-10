// Kyrgyzstan: 7 regions + Bishkek + Osh
module.exports = {
  pageDir: "asia/kyrgyzstan",
  source: { type: "natural-earth", iso_a2: "KG" },
  title: { ja: "キルギスの州", en: "Regions of Kyrgyzstan" },
  defaultType: "region",
  tolerance: 0.02,
  minOuterArea: 1e-3,
  names: {
    "KG-GB": { ja: "ビシュケク市", en: "Bishkek", note: "首都" },
  },
};
