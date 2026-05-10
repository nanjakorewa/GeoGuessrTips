// Norway: 11 counties (post-2024 reform). NE has 21 (older boundaries).
// We use NE as-is since the data file is consistent.
module.exports = {
  pageDir: "europe/norway",
  source: { type: "natural-earth", iso_a2: "NO" },
  title: { ja: "ノルウェーの県", en: "Counties of Norway" },
  defaultType: "county",
  tolerance: 0.02,
  minOuterArea: 1e-3,
  // NE has 21 older fylker; new (2024) has 11. Listed names match NE order.
  // Where modern county is renamed/merged, note hints at the change.
};
