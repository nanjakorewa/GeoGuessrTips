// Panama: 10 provinces + 3 indigenous comarcas. Natural Earth uses PA-XX codes.
module.exports = {
  pageDir: "n_america/panama",
  source: { type: "natural-earth", iso_a2: "PA" },
  title: { ja: "パナマの州・特別区", en: "Provinces and Comarcas of Panama" },
  defaultType: "province",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  names: {
    "PA-1":  { ja: "ボカス・デル・トロ州", en: "Bocas del Toro" },
    "PA-4":  { ja: "チリキ州",            en: "Chiriquí" },
    "PA-2":  { ja: "コクレ州",            en: "Coclé" },
    "PA-3":  { ja: "コロン州",            en: "Colón" },
    "PA-5":  { ja: "ダリエン州",          en: "Darién" },
    "PA-6":  { ja: "エレラ州",            en: "Herrera" },
    "PA-7":  { ja: "ロス・サントス州",    en: "Los Santos" },
    "PA-8":  { ja: "パナマ州",            en: "Panamá", note: "首都所在地" },
    "PA-10": { ja: "パナマ・オエステ州",  en: "Panamá Oeste" },
    "PA-9":  { ja: "ベラグアス州",        en: "Veraguas" },
    "PA-EM": { ja: "エンベラ＝ウォウナーン特別区", en: "Emberá-Wounaan" },
    "PA-KY": { ja: "クナ・ヤラ特別区",    en: "Guna Yala" },
    "PA-NB": { ja: "ンゴベ＝ブグレ特別区",en: "Ngöbe-Buglé" },
  },
};
