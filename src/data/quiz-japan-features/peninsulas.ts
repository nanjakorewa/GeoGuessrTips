/** 日本の主要な半島（半島先端付近の代表点）。 */
import type { JapanFeature, JapanFeatureCategoryMeta } from "./_types";

export const PENINSULAS: JapanFeature[] = [
  { id: "shiretoko",    nameJa: "知床半島",     nameKana: "しれとこはんとう",     nameEn: "Shiretoko Peninsula",   type: "point", lat: 44.3300, lng: 145.3500 },
  { id: "nemuro",       nameJa: "根室半島",     nameKana: "ねむろはんとう",       nameEn: "Nemuro Peninsula",      type: "point", lat: 43.3300, lng: 145.7600 },
  { id: "shakotan",     nameJa: "積丹半島",     nameKana: "しゃこたんはんとう",   nameEn: "Shakotan Peninsula",    type: "point", lat: 43.3300, lng: 140.4500 },
  { id: "matsumae",     nameJa: "松前半島",     nameKana: "まつまえはんとう",     nameEn: "Matsumae Peninsula",    type: "point", lat: 41.4500, lng: 140.1100 },
  { id: "oshamambe",    nameJa: "渡島半島",     nameKana: "おしまはんとう",       nameEn: "Oshima Peninsula",      type: "point", lat: 41.8000, lng: 140.3500 },
  { id: "shimokita",    nameJa: "下北半島",     nameKana: "しもきたはんとう",     nameEn: "Shimokita Peninsula",   type: "point", lat: 41.3000, lng: 141.1500 },
  { id: "tsugaru",      nameJa: "津軽半島",     nameKana: "つがるはんとう",       nameEn: "Tsugaru Peninsula",     type: "point", lat: 41.2300, lng: 140.3200 },
  { id: "oga",          nameJa: "男鹿半島",     nameKana: "おがはんとう",         nameEn: "Oga Peninsula",         type: "point", lat: 39.9500, lng: 139.7700 },
  { id: "noto",         nameJa: "能登半島",     nameKana: "のとはんとう",         nameEn: "Noto Peninsula",        type: "point", lat: 37.4500, lng: 137.2500 },
  { id: "izu",          nameJa: "伊豆半島",     nameKana: "いずはんとう",         nameEn: "Izu Peninsula",         type: "point", lat: 34.8500, lng: 138.9500 },
  { id: "boso",         nameJa: "房総半島",     nameKana: "ぼうそうはんとう",     nameEn: "Bōsō Peninsula",        type: "point", lat: 35.1500, lng: 140.1000 },
  { id: "miura",        nameJa: "三浦半島",     nameKana: "みうらはんとう",       nameEn: "Miura Peninsula",       type: "point", lat: 35.2200, lng: 139.6500 },
  { id: "atsumi",       nameJa: "渥美半島",     nameKana: "あつみはんとう",       nameEn: "Atsumi Peninsula",      type: "point", lat: 34.6500, lng: 137.1500 },
  { id: "chita",        nameJa: "知多半島",     nameKana: "ちたはんとう",         nameEn: "Chita Peninsula",       type: "point", lat: 34.7300, lng: 136.9500 },
  { id: "shima",        nameJa: "志摩半島",     nameKana: "しまはんとう",         nameEn: "Shima Peninsula",       type: "point", lat: 34.3000, lng: 136.8500 },
  { id: "kii",          nameJa: "紀伊半島",     nameKana: "きいはんとう",         nameEn: "Kii Peninsula",         type: "point", lat: 33.7500, lng: 135.6800 },
  { id: "shimabara",    nameJa: "島原半島",     nameKana: "しまばらはんとう",     nameEn: "Shimabara Peninsula",   type: "point", lat: 32.7500, lng: 130.3000 },
  { id: "nagasaki",     nameJa: "長崎半島",     nameKana: "ながさきはんとう",     nameEn: "Nagasaki Peninsula",    type: "point", lat: 32.6000, lng: 129.7700 },
  { id: "kunisaki",     nameJa: "国東半島",     nameKana: "くにさきはんとう",     nameEn: "Kunisaki Peninsula",    type: "point", lat: 33.5500, lng: 131.6500 },
  { id: "satsuma",      nameJa: "薩摩半島",     nameKana: "さつまはんとう",       nameEn: "Satsuma Peninsula",     type: "point", lat: 31.1500, lng: 130.4500 },
  { id: "osumi",        nameJa: "大隅半島",     nameKana: "おおすみはんとう",     nameEn: "Ōsumi Peninsula",       type: "point", lat: 31.0500, lng: 130.8500 },
  { id: "kunashiri",    nameJa: "国頭半島",     nameKana: "くにがみはんとう",     nameEn: "Kunigami Peninsula",    type: "point", lat: 26.7500, lng: 128.2200 },
  { id: "motobu",       nameJa: "本部半島",     nameKana: "もとぶはんとう",       nameEn: "Motobu Peninsula",      type: "point", lat: 26.6700, lng: 127.8800 },
  { id: "sasebo",       nameJa: "西彼杵半島",   nameKana: "にしそのぎはんとう",   nameEn: "Nishisonogi Peninsula", type: "point", lat: 32.9500, lng: 129.8500 },
  { id: "kunisaki-2",   nameJa: "野間半島",     nameKana: "のまはんとう",         nameEn: "Noma Peninsula",        type: "point", lat: 31.4300, lng: 130.1500 },
  { id: "tango",        nameJa: "丹後半島",     nameKana: "たんごはんとう",       nameEn: "Tango Peninsula",       type: "point", lat: 35.7500, lng: 135.1500 },
];

export const PENINSULAS_META: JapanFeatureCategoryMeta = {
  slug: "peninsulas",
  categoryJa: "半島",
  categoryEn: "Peninsulas",
  color: "#17a2b8",
  leadJa: "オレンジ色のピンで示された半島の名前を当てます。日本の主要な半島を出題。",
};
