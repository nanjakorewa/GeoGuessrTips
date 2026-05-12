// Bolivia: 9 departments.
module.exports = {
  pageDir: "cs_america/bolivia",
  source: { type: "natural-earth", iso_a2: "BO" },
  title: { ja: "ボリビアの県", en: "Departments of Bolivia" },
  defaultType: "department",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  names: {
    "BO-B": { ja: "ベニ県",          en: "Beni" },
    "BO-C": { ja: "コチャバンバ県",  en: "Cochabamba" },
    "BO-H": { ja: "チュキサカ県",    en: "Chuquisaca" },
    "BO-L": { ja: "ラパス県",        en: "La Paz", note: "首都所在地" },
    "BO-N": { ja: "パンド県",        en: "Pando" },
    "BO-O": { ja: "オルロ県",        en: "Oruro" },
    "BO-P": { ja: "ポトシ県",        en: "Potosí" },
    "BO-S": { ja: "サンタクルス県",  en: "Santa Cruz" },
    "BO-T": { ja: "タリハ県",        en: "Tarija" },
  },
};
