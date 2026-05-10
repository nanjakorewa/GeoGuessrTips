// Austria: 9 federal states
module.exports = {
  pageDir: "europe/austria",
  source: { type: "natural-earth", iso_a2: "AT" },
  title: { ja: "オーストリアの州", en: "States of Austria" },
  defaultType: "state",
  tolerance: 0.005,
  minOuterArea: 1e-4,
  names: {
    "AT-1": { ja: "ブルゲンラント州",       en: "Burgenland" },
    "AT-2": { ja: "ケルンテン州",           en: "Carinthia" },
    "AT-3": { ja: "ニーダーエスターライヒ州", en: "Lower Austria" },
    "AT-4": { ja: "オーバーエスターライヒ州", en: "Upper Austria" },
    "AT-5": { ja: "ザルツブルク州",         en: "Salzburg" },
    "AT-6": { ja: "シュタイアーマルク州",   en: "Styria" },
    "AT-7": { ja: "チロル州",               en: "Tyrol" },
    "AT-8": { ja: "フォアアールベルク州",   en: "Vorarlberg" },
    "AT-9": { ja: "ウィーン",               en: "Vienna", note: "首都" },
  },
};
