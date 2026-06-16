// Georgia: 9 regions (mkhare) + Tbilisi (city) + 2 autonomous republics
module.exports = {
  pageDir: "asia/georgia",
  source: { type: "natural-earth", iso_a2: "GE" },
  title: { ja: "ジョージアの行政区分", en: "Regions of Georgia" },
  defaultType: "region",
  tolerance: 0.01,
  minOuterArea: 1e-3,
  codeOrder: [
    "GE-TB", "GE-AB", "GE-AJ",
    "GE-GU", "GE-IM", "GE-KA", "GE-KK", "GE-MM",
    "GE-RL", "GE-SJ", "GE-SK", "GE-SZ",
  ],
  names: {
    "GE-TB": {
      ja: "トビリシ", en: "Tbilisi", es: "Tiflis",
      note: "首都・最大都市",
      noteI18n: { en: "Capital and largest city", es: "Capital y ciudad más grande", id: "Ibu kota dan kota terbesar" },
    },
    "GE-AB": {
      ja: "アブハジア", en: "Abkhazia", es: "Abjasia",
      note: "自治共和国",
      noteI18n: { en: "Autonomous republic", es: "República autónoma", id: "Republik otonom" },
    },
    "GE-AJ": {
      ja: "アジャリア", en: "Adjara", es: "Ayaria",
      note: "自治共和国・黒海沿岸",
      noteI18n: { en: "Autonomous republic on the Black Sea", es: "República autónoma en el mar Negro", id: "Republik otonom di Laut Hitam" },
    },
    "GE-GU": { ja: "グリア", en: "Guria", es: "Guria" },
    "GE-IM": { ja: "イメレティ", en: "Imereti", es: "Imereti" },
    "GE-KA": { ja: "カヘティ", en: "Kakheti", es: "Kajetia" },
    "GE-KK": { ja: "クヴェモ・カルトリ", en: "Kvemo Kartli", es: "Kvemo Kartli" },
    "GE-MM": { ja: "ムツヘタ＝ムティアネティ", en: "Mtskheta-Mtianeti", es: "Mtsjeta-Mtianeti" },
    "GE-RL": { ja: "ラチャ＝レチフミおよびクヴェモ・スヴァネティ", en: "Racha-Lechkhumi and Kvemo Svaneti", es: "Racha-Lechjumi y Kvemo Svaneti" },
    "GE-SJ": { ja: "サムツヘ＝ジャヴァヘティ", en: "Samtskhe-Javakheti", es: "Samtsje-Yavajeti" },
    "GE-SK": { ja: "シダ・カルトリ", en: "Shida Kartli", es: "Shida Kartli" },
    "GE-SZ": { ja: "サメグレロ＝ゼモ・スヴァネティ", en: "Samegrelo-Zemo Svaneti", es: "Samegrelo-Zemo Svaneti" },
  },
};
