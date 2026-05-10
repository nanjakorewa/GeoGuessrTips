// Bangladesh: 8 divisions (NE has 7 — older division layout)
module.exports = {
  pageDir: "asia/bangladesh",
  source: { type: "natural-earth", iso_a2: "BD" },
  title: { ja: "バングラデシュの管区", en: "Divisions of Bangladesh" },
  defaultType: "region",
  tolerance: 0.015,
  minOuterArea: 1e-4,
  names: {
    "BD-A": { ja: "バリサル管区",    en: "Barisal" },
    "BD-B": { ja: "チッタゴン管区",  en: "Chittagong" },
    "BD-C": { ja: "ダッカ管区",      en: "Dhaka", note: "首都" },
    "BD-D": { ja: "クルナ管区",      en: "Khulna" },
    "BD-E": { ja: "ラジシャヒ管区",  en: "Rajshahi" },
    "BD-F": { ja: "ラングプール管区",en: "Rangpur" },
    "BD-G": { ja: "シレット管区",    en: "Sylhet" },
  },
};
