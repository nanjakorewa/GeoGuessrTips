/** Top ~20 Kyrgyz cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const KYRGYZSTAN_CITIES: CityEntry[] = [
  { id: "bishkek",       nameJa: "ビシュケク",         nameEn: "Bishkek",         lat: 42.8746, lng: 74.5698, pop: 1074 },
  { id: "osh",           nameJa: "オシュ",             nameEn: "Osh",             lat: 40.5286, lng: 72.7858, pop: 322 },
  { id: "jalal-abad",    nameJa: "ジャラル・アバド",   nameEn: "Jalal-Abad",      lat: 40.9333, lng: 73.0000, pop: 123 },
  { id: "karakol",       nameJa: "カラコル",           nameEn: "Karakol",         lat: 42.4900, lng: 78.4000, pop: 84 },
  { id: "tokmok",        nameJa: "トクモク",           nameEn: "Tokmok",          lat: 42.8419, lng: 75.2986, pop: 75 },
  { id: "uzgen",         nameJa: "ウズゲン",           nameEn: "Uzgen",           lat: 40.7686, lng: 73.3014, pop: 58 },
  { id: "kara-balta",    nameJa: "カラ・バルタ",       nameEn: "Kara-Balta",      lat: 42.8121, lng: 73.8483, pop: 46 },
  { id: "balykchy",      nameJa: "バリクチ",           nameEn: "Balykchy",        lat: 42.4592, lng: 76.1781, pop: 49 },
  { id: "naryn",         nameJa: "ナリン",             nameEn: "Naryn",           lat: 41.4283, lng: 75.9911, pop: 41 },
  { id: "talas",         nameJa: "タラス",             nameEn: "Talas",           lat: 42.5125, lng: 72.2425, pop: 41 },
  { id: "kyzyl-kiya",    nameJa: "クズル・キヤ",       nameEn: "Kyzyl-Kiya",      lat: 40.2531, lng: 72.1306, pop: 47 },
  { id: "kant",          nameJa: "カント",             nameEn: "Kant",            lat: 42.8911, lng: 74.8506, pop: 28 },
  { id: "kara-suu",      nameJa: "カラ・スー",         nameEn: "Kara-Suu",        lat: 40.7042, lng: 72.8689, pop: 24 },
  { id: "tash-kumyr",    nameJa: "タシュ・クムィル",   nameEn: "Tash-Kumyr",      lat: 41.3447, lng: 72.2125, pop: 22 },
  { id: "isfana",        nameJa: "イスファナ",         nameEn: "Isfana",          lat: 39.8417, lng: 69.5181, pop: 22 },
  { id: "cholpon-ata",   nameJa: "チョルポン・アタ",   nameEn: "Cholpon-Ata",     lat: 42.6471, lng: 77.0844, pop: 16 },
  { id: "shopokov",      nameJa: "ショポコフ",         nameEn: "Shopokov",        lat: 42.8089, lng: 74.3697, pop: 19 },
  { id: "kerben",        nameJa: "ケルベン",           nameEn: "Kerben",          lat: 41.4900, lng: 71.7569, pop: 14 },
  { id: "kemin",         nameJa: "ケミン",             nameEn: "Kemin",           lat: 42.7796, lng: 75.6986, pop: 13 },
  { id: "kara-kol",      nameJa: "ノオケン",           nameEn: "Nooken",          lat: 41.1944, lng: 72.5708, pop: 18 },
  { id: "at-bashy",      nameJa: "アト・バシ",         nameEn: "At-Bashy",        lat: 41.1664, lng: 75.8056, pop: 12 },
];

export const KYRGYZSTAN_PROJECTION: CityProjection = {
  minLon: 69.226296,
  minLat: 39.189237,
  maxLon: 80.257561,
  maxLat: 43.261702,
  cosLat: 0.752122,
  scale: 65.566994,
  offX: 8,
  offY: 186.490356,
};

export const KYRGYZSTAN_META: CityCountryMeta = {
  slug: "kyrgyzstan",
  continent: "asia",
  svgPath: "/maps/countries/kyrgyzstan.svg",
  countryJa: "キルギス",
  countryEn: "Kyrgyzstan",
};
