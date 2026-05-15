// Paraguay: 17 departments + capital district (Asunción). NE has 18 features.
// Config primarily used to generate the country outline SVG for the city quiz.
module.exports = {
  pageDir: "cs_america/paraguay",
  source: { type: "natural-earth", iso_a2: "PY" },
  title: { ja: "パラグアイの県", en: "Departments of Paraguay" },
  defaultType: "department",
  tolerance: 0.01,
  minOuterArea: 1e-4,
};
