// Greece: 13 administrative regions + Mount Athos (autonomous)
module.exports = {
  pageDir: "europe/greece",
  source: { type: "natural-earth", iso_a2: "GR" },
  title: { ja: "ギリシャの地方", en: "Regions of Greece" },
  defaultType: "region",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  names: {
    "GR-A":  { ja: "東マケドニア・トラキア地方", en: "East Macedonia and Thrace" },
    "GR-B":  { ja: "中央マケドニア地方",   en: "Central Macedonia" },
    "GR-C":  { ja: "西マケドニア地方",     en: "West Macedonia" },
    "GR-D":  { ja: "イピロス地方",         en: "Epirus" },
    "GR-E":  { ja: "テッサリア地方",       en: "Thessaly" },
    "GR-F":  { ja: "イオニア諸島地方",     en: "Ionian Islands" },
    "GR-G":  { ja: "西ギリシャ地方",       en: "West Greece" },
    "GR-H":  { ja: "中央ギリシャ地方",     en: "Central Greece" },
    "GR-I":  { ja: "アッティカ地方",       en: "Attica", note: "首都アテネ" },
    "GR-J":  { ja: "ペロポネソス地方",     en: "Peloponnese" },
    "GR-K":  { ja: "北エーゲ地方",         en: "North Aegean" },
    "GR-L":  { ja: "南エーゲ地方",         en: "South Aegean" },
    "GR-M":  { ja: "クレタ地方",           en: "Crete" },
  },
};
