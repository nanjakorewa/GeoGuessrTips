// Moldova: 32 districts + 3 special (Chisinau, Balti, Gagauzia, Transnistria)
// NE has 40 entries (district-level + transnistria + autonomous units).
module.exports = {
  pageDir: "europe/moldova",
  source: { type: "natural-earth", iso_a2: "MD" },
  title: { ja: "モルドバの地区", en: "Districts of Moldova" },
  defaultType: "department",
  tolerance: 0.01,
  minOuterArea: 1e-4,
  names: {
    "MD-CU": { ja: "キシナウ", en: "Chișinău", note: "首都" },
    "MD-BA": { ja: "バルツィ", en: "Bălți" },
    "MD-GA": { ja: "ガガウズ自治区", en: "Gagauzia" },
  },
};
