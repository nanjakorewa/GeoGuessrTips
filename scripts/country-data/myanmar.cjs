// Myanmar: 7 regions + 7 states + 1 union territory (NE has 14)
module.exports = {
  pageDir: "asia/myanmar",
  source: { type: "natural-earth", iso_a2: "MM" },
  title: { ja: "ミャンマーの州・管区", en: "States and Regions of Myanmar" },
  defaultType: "state",
  tolerance: 0.02,
  minOuterArea: 1e-3,
  names: {
    "MM-06": { ja: "ヤンゴン管区", en: "Yangon" },
    "MM-15": { ja: "マンダレー管区", en: "Mandalay" },
    "MM-18": { ja: "ネピドー連邦領", en: "Naypyidaw", note: "首都" },
  },
};
