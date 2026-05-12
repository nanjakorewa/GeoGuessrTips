/** Top ~25 Kenyan cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const KENYA_CITIES: CityEntry[] = [
  { id: "nairobi",       nameJa: "ナイロビ",           nameEn: "Nairobi",         lat:  -1.2921, lng: 36.8219, pop: 4397 },
  { id: "mombasa",       nameJa: "モンバサ",           nameEn: "Mombasa",         lat:  -4.0435, lng: 39.6682, pop: 1208 },
  { id: "kisumu",        nameJa: "キスム",             nameEn: "Kisumu",          lat:  -0.0917, lng: 34.7679, pop: 397 },
  { id: "nakuru",        nameJa: "ナクル",             nameEn: "Nakuru",          lat:  -0.3031, lng: 36.0800, pop: 570 },
  { id: "eldoret",       nameJa: "エルドレット",       nameEn: "Eldoret",         lat:   0.5143, lng: 35.2698, pop: 475 },
  { id: "ruiru",         nameJa: "ルイル",             nameEn: "Ruiru",           lat:  -1.1453, lng: 36.9614, pop: 490 },
  { id: "kikuyu",        nameJa: "キクユ",             nameEn: "Kikuyu",          lat:  -1.2447, lng: 36.6628, pop: 323 },
  { id: "kangundo",      nameJa: "カングンド",         nameEn: "Kangundo",        lat:  -1.3000, lng: 37.3500, pop: 247 },
  { id: "malindi",       nameJa: "マリンディ",         nameEn: "Malindi",         lat:  -3.2175, lng: 40.1191, pop: 119 },
  { id: "naivasha",      nameJa: "ナイバシャ",         nameEn: "Naivasha",        lat:  -0.7173, lng: 36.4308, pop: 198 },
  { id: "machakos",      nameJa: "マチャコス",         nameEn: "Machakos",        lat:  -1.5167, lng: 37.2667, pop: 156 },
  { id: "kitale",        nameJa: "キタレ",             nameEn: "Kitale",          lat:   1.0167, lng: 35.0000, pop: 162 },
  { id: "thika",         nameJa: "ティカ",             nameEn: "Thika",           lat:  -1.0333, lng: 37.0833, pop: 152 },
  { id: "kakamega",      nameJa: "カカメガ",           nameEn: "Kakamega",        lat:   0.2842, lng: 34.7520, pop: 99 },
  { id: "nyeri",         nameJa: "ニェリ",             nameEn: "Nyeri",           lat:  -0.4167, lng: 36.9500, pop: 119 },
  { id: "kericho",       nameJa: "ケリチョ",           nameEn: "Kericho",         lat:  -0.3667, lng: 35.2833, pop: 150 },
  { id: "garissa",       nameJa: "ガリッサ",           nameEn: "Garissa",         lat:  -0.4569, lng: 39.6583, pop: 116 },
  { id: "kilifi",        nameJa: "キリフィ",           nameEn: "Kilifi",          lat:  -3.6333, lng: 39.8500, pop: 122 },
  { id: "embu",          nameJa: "エンブ",             nameEn: "Embu",            lat:  -0.5333, lng: 37.4500, pop: 60 },
  { id: "meru",          nameJa: "メル",               nameEn: "Meru",            lat:   0.0500, lng: 37.6500, pop: 78 },
  { id: "lamu",          nameJa: "ラム",               nameEn: "Lamu",            lat:  -2.2706, lng: 40.9020, pop: 25 },
  { id: "bungoma",       nameJa: "ブンゴマ",           nameEn: "Bungoma",         lat:   0.5635, lng: 34.5606, pop: 71 },
  { id: "kisii",         nameJa: "キシイ",             nameEn: "Kisii",           lat:  -0.6815, lng: 34.7796, pop: 84 },
  { id: "moyale",        nameJa: "モヤレ",             nameEn: "Moyale",          lat:   3.5333, lng: 39.0500, pop: 33 },
  { id: "narok",         nameJa: "ナロク",             nameEn: "Narok",           lat:  -1.0833, lng: 35.8667, pop: 56 },
];

export const KENYA_PROJECTION: CityProjection = {
  minLon: 33.890468,
  minLat: -4.677504,
  maxLon: 41.885019,
  maxLat: 5.030376,
  cosLat: 0.999995,
  scale: 64.27768,
  offX: 23.065624,
  offY: 8,
};

export const KENYA_META: CityCountryMeta = {
  slug: "kenya",
  continent: "africa",
  svgPath: "/maps/countries/kenya.svg",
  countryJa: "ケニア",
  countryEn: "Kenya",
};
