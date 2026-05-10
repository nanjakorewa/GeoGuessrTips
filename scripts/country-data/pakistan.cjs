// Pakistan: 4 provinces + 4 territories (NE has 8)
module.exports = {
  pageDir: "asia/pakistan",
  source: { type: "natural-earth", iso_a2: "PK" },
  title: { ja: "パキスタンの州", en: "Provinces of Pakistan" },
  defaultType: "province",
  tolerance: 0.03,
  minOuterArea: 1e-3,
  names: {
    "PK-PB": { ja: "パンジャブ州",       en: "Punjab" },
    "PK-SD": { ja: "シンド州",           en: "Sindh" },
    "PK-KP": { ja: "ハイバル・パフトゥンクワ州", en: "Khyber Pakhtunkhwa" },
    "PK-BA": { ja: "バルチスタン州",     en: "Balochistan" },
    "PK-IS": { ja: "イスラマバード首都圏", en: "Islamabad Capital Territory", note: "首都" },
    "PK-TA": { ja: "連邦直轄部族地域",   en: "FATA" },
    "PK-GB": { ja: "ギルギット・バルティスタン", en: "Gilgit-Baltistan" },
    "PK-JK": { ja: "アザド・カシミール",  en: "Azad Kashmir" },
  },
};
