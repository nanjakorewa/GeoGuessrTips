// Kazakhstan: 14 regions + 3 cities of republican significance
module.exports = {
  pageDir: "asia/kazakhstan",
  source: { type: "natural-earth", iso_a2: "KZ" },
  title: { ja: "カザフスタンの州", en: "Regions of Kazakhstan" },
  defaultType: "region",
  tolerance: 0.05,
  minOuterArea: 5e-3,
  names: {
    "KZ-AST": { ja: "アスタナ",       en: "Astana", note: "首都" },
    "KZ-ALA": { ja: "アルマトイ",     en: "Almaty (City)" },
    "KZ-AKM": { ja: "アクモラ州",     en: "Akmola" },
    "KZ-AKT": { ja: "アクトベ州",     en: "Aktobe" },
    "KZ-ALM": { ja: "アルマトイ州",   en: "Almaty" },
    "KZ-ATY": { ja: "アティラウ州",   en: "Atyrau" },
    "KZ-VOS": { ja: "東カザフスタン州", en: "East Kazakhstan" },
    "KZ-MAN": { ja: "マンギスタウ州", en: "Mangystau" },
    "KZ-YUZ": { ja: "南カザフスタン州", en: "South Kazakhstan" },
    "KZ-ZAP": { ja: "西カザフスタン州", en: "West Kazakhstan" },
  },
};
