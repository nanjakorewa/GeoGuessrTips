// France: 13 metropolitan régions (excludes overseas)
module.exports = {
  pageDir: "europe/france",
  source: {
    type: "url",
    url: "https://raw.githubusercontent.com/gregoiredavid/france-geojson/master/regions.geojson",
  },
  title: { ja: "フランスの地域圏", en: "Regions of France" },
  defaultType: "region",
  tolerance: 0.015,
  codeOf: (f) => f.properties.code,
  nameOf: (f) => f.properties.nom,
  names: {
    "11": { ja: "イル・ド・フランス地域圏",        en: "Île-de-France", note: "首都パリ" },
    "24": { ja: "サントル・ヴァル・ド・ロワール地域圏", en: "Centre-Val de Loire" },
    "27": { ja: "ブルゴーニュ・フランシュ・コンテ地域圏", en: "Bourgogne-Franche-Comté" },
    "28": { ja: "ノルマンディー地域圏",            en: "Normandie" },
    "32": { ja: "オー・ド・フランス地域圏",        en: "Hauts-de-France" },
    "44": { ja: "グラン・テスト地域圏",            en: "Grand Est" },
    "52": { ja: "ペイ・ド・ラ・ロワール地域圏",    en: "Pays de la Loire" },
    "53": { ja: "ブルターニュ地域圏",              en: "Bretagne" },
    "75": { ja: "ヌーヴェル・アキテーヌ地域圏",    en: "Nouvelle-Aquitaine" },
    "76": { ja: "オクシタニー地域圏",              en: "Occitanie" },
    "84": { ja: "オーヴェルニュ・ローヌ・アルプ地域圏", en: "Auvergne-Rhône-Alpes" },
    "93": { ja: "プロヴァンス・アルプ・コート・ダジュール地域圏", en: "Provence-Alpes-Côte d'Azur" },
    "94": { ja: "コルス地域圏",                    en: "Corse" },
  },
};
