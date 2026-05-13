/** 日本の主要な山脈・山地（線で表示）。
 *  各山脈は概略の稜線を表す [lng, lat] の点列。実際の稜線を正確にトレースして
 *  いるわけではなく、視覚的に位置がわかる程度の代表ライン。 */
import type { JapanFeature, JapanFeatureCategoryMeta } from "./_types";

export const MOUNTAIN_RANGES: JapanFeature[] = [
  {
    id: "ou",
    nameJa: "奥羽山脈",
    nameKana: "おううさんみゃく",
    nameEn: "Ōu Mountains",
    type: "polyline",
    points: [
      [141.2517, 40.6500], // 八甲田
      [140.9886, 39.9500],
      [140.9000, 39.4500],
      [140.7892, 39.0331], // 岩手山
      [140.5500, 38.3500],
      [140.4453, 37.6486], // 安達太良山
      [140.0903, 37.1922], // 那須岳
    ],
  },
  {
    id: "kitakami",
    nameJa: "北上山地",
    nameKana: "きたかみさんち",
    nameEn: "Kitakami Highlands",
    type: "polyline",
    points: [
      [141.7889, 40.4300],
      [141.7500, 39.9000],
      [141.7825, 39.4181], // 早池峰山
      [141.6900, 39.0000],
      [141.5639, 38.5667],
    ],
  },
  {
    id: "dewa",
    nameJa: "出羽山地",
    nameKana: "でわさんち",
    nameEn: "Dewa Mountains",
    type: "polyline",
    points: [
      [140.0195, 40.5044], // 白神岳
      [140.0500, 40.0000],
      [139.9500, 39.5000],
      [139.9000, 39.1000],
      [140.0490, 39.0993], // 鳥海山
      [139.8567, 38.1075],
    ],
  },
  {
    id: "echigo",
    nameJa: "越後山脈",
    nameKana: "えちごさんみゃく",
    nameEn: "Echigo Mountains",
    type: "polyline",
    points: [
      [139.5803, 37.7958], // 飯豊山
      [139.3481, 36.9983], // 会津駒ヶ岳
      [139.2853, 36.9550], // 燧ヶ岳
      [139.1761, 36.8367], // 至仏山
      [139.0950, 36.5392], // 谷川岳
    ],
  },
  {
    id: "japan-alps-north",
    nameJa: "飛騨山脈",
    nameKana: "ひださんみゃく",
    nameEn: "Hida Mountains (Northern Alps)",
    type: "polyline",
    points: [
      [137.7656, 36.7600], // 朝日岳
      [137.6422, 36.5781], // 立山
      [137.6478, 36.3417], // 槍ヶ岳
      [137.6478, 36.2900], // 奥穂高岳
      [137.6094, 36.1442], // 乗鞍岳
    ],
  },
  {
    id: "japan-alps-central",
    nameJa: "木曽山脈",
    nameKana: "きそさんみゃく",
    nameEn: "Kiso Mountains (Central Alps)",
    type: "polyline",
    points: [
      [137.8086, 35.7889], // 経ヶ岳
      [137.8333, 35.6794], // 木曽駒ヶ岳
      [137.9028, 35.5119], // 空木岳
      [138.0067, 35.3194], // 恵那山
    ],
  },
  {
    id: "japan-alps-south",
    nameJa: "赤石山脈",
    nameKana: "あかいしさんみゃく",
    nameEn: "Akaishi Mountains (Southern Alps)",
    type: "polyline",
    points: [
      [138.2389, 35.6731], // 甲斐駒ヶ岳
      [138.1556, 35.5708], // 北岳
      [138.1383, 35.4750], // 間ノ岳
      [138.1683, 35.3514], // 塩見岳
      [138.0083, 35.1633], // 赤石岳
      [138.0883, 35.0608], // 聖岳
    ],
  },
  {
    id: "kanto",
    nameJa: "関東山地",
    nameKana: "かんとうさんち",
    nameEn: "Kantō Mountains",
    type: "polyline",
    points: [
      [138.7283, 35.7333], // 大菩薩嶺
      [138.6250, 35.8917], // 金峰山
      [138.7242, 35.9133], // 甲武信ヶ岳
      [138.8847, 35.9272], // 三国山
      [138.9442, 35.8550], // 雲取山
      [139.0050, 35.7858], // 御前山
    ],
  },
  {
    id: "kii",
    nameJa: "紀伊山地",
    nameKana: "きいさんち",
    nameEn: "Kii Mountains",
    type: "polyline",
    points: [
      [135.9000, 34.4500],
      [135.9900, 34.3600], // 山上ヶ岳
      [135.9081, 34.1742], // 八経ヶ岳
      [136.1014, 34.1786], // 大台ヶ原山
      [135.8300, 33.9100],
      [135.7847, 33.7100],
    ],
  },
  {
    id: "chugoku",
    nameJa: "中国山地",
    nameKana: "ちゅうごくさんち",
    nameEn: "Chūgoku Mountains",
    type: "polyline",
    points: [
      [134.5239, 35.3711], // 氷ノ山
      [133.8569, 35.1622], // 蒜山
      [133.5547, 35.3722], // 大山
      [132.6919, 34.8011], // 三瓶山近辺
      [132.0286, 34.6889],
      [131.4694, 34.5589], // 寂地山
    ],
  },
  {
    id: "shikoku",
    nameJa: "四国山地",
    nameKana: "しこくさんち",
    nameEn: "Shikoku Mountains",
    type: "polyline",
    points: [
      [132.6900, 33.7000],
      [133.1133, 33.7592], // 石鎚山
      [133.4858, 33.8514], // 笹ヶ峰
      [133.9994, 33.9314],
      [134.0928, 33.8717], // 剣山
      [134.2917, 33.7889],
    ],
  },
  {
    id: "kyushu",
    nameJa: "九州山地",
    nameKana: "きゅうしゅうさんち",
    nameEn: "Kyūshū Mountains",
    type: "polyline",
    points: [
      [131.3469, 32.8347], // 祖母山
      [131.2200, 32.6533], // 傾山
      [131.1633, 32.5400], // 大崩山
      [131.0042, 32.5092], // 市房山
      [130.9531, 32.2528], // 市房山南
      [130.8542, 32.0500],
    ],
  },
  {
    id: "akaishi-yatsugatake",
    nameJa: "八ヶ岳連峰",
    nameKana: "やつがたけれんぽう",
    nameEn: "Yatsugatake",
    type: "polyline",
    points: [
      [138.3650, 36.1014],
      [138.3717, 36.0086], // 赤岳
      [138.3617, 35.9711], // 阿弥陀岳
      [138.3261, 35.8917], // 編笠山
    ],
  },
  {
    id: "hidaka",
    nameJa: "日高山脈",
    nameKana: "ひだかさんみゃく",
    nameEn: "Hidaka Mountains",
    type: "polyline",
    points: [
      [142.8889, 43.2700], // ペテガリ岳
      [142.9700, 43.0589], // 幌尻岳
      [143.0294, 42.7350], // 札内岳
      [143.0833, 42.4361], // ピリカヌプリ
      [143.1467, 42.0900], // 楽古岳
    ],
  },
  {
    id: "tokachi",
    nameJa: "大雪山系",
    nameKana: "だいせつざんけい",
    nameEn: "Daisetsuzan",
    type: "polyline",
    points: [
      [142.8541, 43.6636], // 旭岳
      [142.8488, 43.5271], // トムラウシ山
      [142.6861, 43.4178], // 十勝岳
    ],
  },
];

export const MOUNTAIN_RANGES_META: JapanFeatureCategoryMeta = {
  slug: "mountain-ranges",
  categoryJa: "山脈",
  categoryEn: "Mountain Ranges",
  color: "#8b5a2b",
  leadJa: "オレンジ色のラインで示された山脈・山地の名前を当てます。線は稜線の概略を表しています。",
};
