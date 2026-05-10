// Canada: 10 provinces + 3 territories
module.exports = {
  pageDir: "n_america/canada",
  source: { type: "natural-earth", iso_a2: "CA" },
  title: { ja: "カナダの州・準州", en: "Provinces and Territories of Canada" },
  defaultType: "province",
  tolerance: 0.1,
  minOuterArea: 5e-3,
  typeOverrides: {
    "CA-NT": "territory",
    "CA-YT": "territory",
    "CA-NU": "territory",
  },
  names: {
    "CA-AB": { ja: "アルバータ州",         en: "Alberta" },
    "CA-BC": { ja: "ブリティッシュコロンビア州", en: "British Columbia" },
    "CA-MB": { ja: "マニトバ州",           en: "Manitoba" },
    "CA-NB": { ja: "ニューブランズウィック州", en: "New Brunswick" },
    "CA-NL": { ja: "ニューファンドランド・ラブラドール州", en: "Newfoundland and Labrador" },
    "CA-NS": { ja: "ノバスコシア州",       en: "Nova Scotia" },
    "CA-ON": { ja: "オンタリオ州",         en: "Ontario", note: "首都オタワ" },
    "CA-PE": { ja: "プリンスエドワードアイランド州", en: "Prince Edward Island" },
    "CA-QC": { ja: "ケベック州",           en: "Quebec" },
    "CA-SK": { ja: "サスカチュワン州",     en: "Saskatchewan" },
    "CA-NT": { ja: "ノースウエスト準州",   en: "Northwest Territories" },
    "CA-YT": { ja: "ユーコン準州",         en: "Yukon" },
    "CA-NU": { ja: "ヌナブト準州",         en: "Nunavut" },
  },
};
