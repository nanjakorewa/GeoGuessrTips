// Australia: 6 states + 2 territories + a few external territories
module.exports = {
  pageDir: "oceania/australia",
  source: { type: "natural-earth", iso_a2: "AU" },
  title: { ja: "オーストラリアの州・準州", en: "States and Territories of Australia" },
  defaultType: "state",
  tolerance: 0.05,
  minOuterArea: 5e-3,
  typeOverrides: { "AU-ACT": "territory", "AU-NT": "territory" },
  names: {
    "AU-NSW": { ja: "ニューサウスウェールズ州",   en: "New South Wales" },
    "AU-VIC": { ja: "ビクトリア州",                en: "Victoria" },
    "AU-QLD": { ja: "クイーンズランド州",          en: "Queensland" },
    "AU-WA":  { ja: "西オーストラリア州",          en: "Western Australia" },
    "AU-SA":  { ja: "南オーストラリア州",          en: "South Australia" },
    "AU-TAS": { ja: "タスマニア州",                en: "Tasmania" },
    "AU-NT":  { ja: "ノーザンテリトリー",          en: "Northern Territory" },
    "AU-ACT": { ja: "オーストラリア首都特別地域",  en: "Australian Capital Territory", note: "首都キャンベラ" },
  },
};
