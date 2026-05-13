/** 日本の主要な平野（代表点）。 */
import type { JapanFeature, JapanFeatureCategoryMeta } from "./_types";

export const PLAINS: JapanFeature[] = [
  { id: "ishikari",  nameJa: "石狩平野",     nameKana: "いしかりへいや",     nameEn: "Ishikari Plain",     type: "point", lat: 43.1500, lng: 141.5500 },
  { id: "tokachi",   nameJa: "十勝平野",     nameKana: "とかちへいや",       nameEn: "Tokachi Plain",      type: "point", lat: 42.9000, lng: 143.2000 },
  { id: "konsen",    nameJa: "根釧台地",     nameKana: "こんせんだいち",     nameEn: "Konsen Plateau",     type: "point", lat: 43.3500, lng: 144.5000 },
  { id: "kitakami-pl", nameJa: "北上盆地",   nameKana: "きたかみぼんち",     nameEn: "Kitakami Basin",     type: "point", lat: 39.7000, lng: 141.1500 },
  { id: "sendai",    nameJa: "仙台平野",     nameKana: "せんだいへいや",     nameEn: "Sendai Plain",       type: "point", lat: 38.2000, lng: 140.9500 },
  { id: "shonai",    nameJa: "庄内平野",     nameKana: "しょうないへいや",   nameEn: "Shōnai Plain",       type: "point", lat: 38.8800, lng: 139.8500 },
  { id: "akita",     nameJa: "秋田平野",     nameKana: "あきたへいや",       nameEn: "Akita Plain",        type: "point", lat: 39.7200, lng: 140.0900 },
  { id: "tsugaru",   nameJa: "津軽平野",     nameKana: "つがるへいや",       nameEn: "Tsugaru Plain",      type: "point", lat: 40.7500, lng: 140.4500 },
  { id: "echigo",    nameJa: "越後平野",     nameKana: "えちごへいや",       nameEn: "Echigo Plain",       type: "point", lat: 37.7500, lng: 138.9500 },
  { id: "kanto",     nameJa: "関東平野",     nameKana: "かんとうへいや",     nameEn: "Kantō Plain",        type: "point", lat: 35.9000, lng: 139.7500 },
  { id: "kofu",      nameJa: "甲府盆地",     nameKana: "こうふぼんち",       nameEn: "Kōfu Basin",         type: "point", lat: 35.6800, lng: 138.5500 },
  { id: "matsumoto", nameJa: "松本盆地",     nameKana: "まつもとぼんち",     nameEn: "Matsumoto Basin",    type: "point", lat: 36.2300, lng: 137.9700 },
  { id: "nagano",    nameJa: "長野盆地",     nameKana: "ながのぼんち",       nameEn: "Nagano Basin",       type: "point", lat: 36.6500, lng: 138.2000 },
  { id: "niigata-pl", nameJa: "高田平野",    nameKana: "たかだへいや",       nameEn: "Takada Plain",       type: "point", lat: 37.1300, lng: 138.2700 },
  { id: "toyama",    nameJa: "富山平野",     nameKana: "とやまへいや",       nameEn: "Toyama Plain",       type: "point", lat: 36.7000, lng: 137.1500 },
  { id: "kaga",      nameJa: "加賀平野",     nameKana: "かがへいや",         nameEn: "Kaga Plain",         type: "point", lat: 36.5700, lng: 136.5800 },
  { id: "fukui",     nameJa: "福井平野",     nameKana: "ふくいへいや",       nameEn: "Fukui Plain",        type: "point", lat: 36.0700, lng: 136.2200 },
  { id: "nobi",      nameJa: "濃尾平野",     nameKana: "のうびへいや",       nameEn: "Nōbi Plain",         type: "point", lat: 35.2300, lng: 136.7500 },
  { id: "ise",       nameJa: "伊勢平野",     nameKana: "いせへいや",         nameEn: "Ise Plain",          type: "point", lat: 34.7600, lng: 136.5500 },
  { id: "osaka",     nameJa: "大阪平野",     nameKana: "おおさかへいや",     nameEn: "Osaka Plain",        type: "point", lat: 34.6900, lng: 135.5500 },
  { id: "kyoto",     nameJa: "京都盆地",     nameKana: "きょうとぼんち",     nameEn: "Kyoto Basin",        type: "point", lat: 35.0100, lng: 135.7500 },
  { id: "nara",      nameJa: "奈良盆地",     nameKana: "ならぼんち",         nameEn: "Nara Basin",         type: "point", lat: 34.6300, lng: 135.8300 },
  { id: "harima",    nameJa: "播磨平野",     nameKana: "はりまへいや",       nameEn: "Harima Plain",       type: "point", lat: 34.8000, lng: 134.6800 },
  { id: "okayama",   nameJa: "岡山平野",     nameKana: "おかやまへいや",     nameEn: "Okayama Plain",      type: "point", lat: 34.6500, lng: 133.9200 },
  { id: "hiroshima", nameJa: "広島平野",     nameKana: "ひろしまへいや",     nameEn: "Hiroshima Plain",    type: "point", lat: 34.4000, lng: 132.4500 },
  { id: "izumo",     nameJa: "出雲平野",     nameKana: "いずもへいや",       nameEn: "Izumo Plain",        type: "point", lat: 35.3700, lng: 132.7500 },
  { id: "tokushima", nameJa: "徳島平野",     nameKana: "とくしまへいや",     nameEn: "Tokushima Plain",    type: "point", lat: 34.0700, lng: 134.5500 },
  { id: "kochi",     nameJa: "高知平野",     nameKana: "こうちへいや",       nameEn: "Kōchi Plain",        type: "point", lat: 33.5500, lng: 133.5500 },
  { id: "tsukushi",  nameJa: "筑紫平野",     nameKana: "つくしへいや",       nameEn: "Tsukushi Plain",     type: "point", lat: 33.3100, lng: 130.5500 },
  { id: "kumamoto",  nameJa: "熊本平野",     nameKana: "くまもとへいや",     nameEn: "Kumamoto Plain",     type: "point", lat: 32.8500, lng: 130.7000 },
  { id: "miyazaki",  nameJa: "宮崎平野",     nameKana: "みやざきへいや",     nameEn: "Miyazaki Plain",     type: "point", lat: 31.9000, lng: 131.4200 },
];

export const PLAINS_META: JapanFeatureCategoryMeta = {
  slug: "plains",
  categoryJa: "平野",
  categoryEn: "Plains",
  color: "#4a9e5c",
  leadJa: "オレンジ色のピンで示された平野・盆地の名前を当てます。日本の主要な平野・盆地を出題。",
};
