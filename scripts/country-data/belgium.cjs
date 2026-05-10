// Belgium: 10 provinces + Brussels Capital Region (NE has 11)
module.exports = {
  pageDir: "europe/belgium",
  source: { type: "natural-earth", iso_a2: "BE" },
  title: { ja: "ベルギーの州", en: "Provinces of Belgium" },
  defaultType: "province",
  tolerance: 0.005,
  minOuterArea: 1e-5,
  typeOverrides: { "BE-BRU": "federal_district" },
  names: {
    "BE-BRU": { ja: "ブリュッセル首都圏", en: "Brussels", note: "首都" },
    "BE-VAN": { ja: "アントワープ州",   en: "Antwerp" },
    "BE-WBR": { ja: "ワロン・ブラバン州", en: "Walloon Brabant" },
    "BE-VBR": { ja: "フラームス・ブラバン州", en: "Flemish Brabant" },
    "BE-WHT": { ja: "エノー州",        en: "Hainaut" },
    "BE-WLG": { ja: "リエージュ州",    en: "Liège" },
    "BE-VLI": { ja: "リンブルフ州",    en: "Limburg" },
    "BE-WLX": { ja: "リュクサンブール州", en: "Luxembourg" },
    "BE-WNA": { ja: "ナミュール州",    en: "Namur" },
    "BE-VOV": { ja: "東フランデレン州",en: "East Flanders" },
    "BE-VWV": { ja: "西フランデレン州",en: "West Flanders" },
  },
};
