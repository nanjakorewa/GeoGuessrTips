/** Top ~25 Myanmar cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const MYANMAR_CITIES: CityEntry[] = [
  { id: "yangon",        nameJa: "ヤンゴン",           nameEn: "Yangon",          lat: 16.8409, lng: 96.1735, pop: 5160 },
  { id: "mandalay",      nameJa: "マンダレー",         nameEn: "Mandalay",        lat: 21.9747, lng: 96.0836, pop: 1726 },
  { id: "naypyidaw",     nameJa: "ネピドー",           nameEn: "Naypyidaw",       lat: 19.7633, lng: 96.0785, pop: 925 },
  { id: "mawlamyine",    nameJa: "モーラミャイン",     nameEn: "Mawlamyine",      lat: 16.4906, lng: 97.6283, pop: 290 },
  { id: "bago",          nameJa: "バゴー",             nameEn: "Bago",            lat: 17.3357, lng: 96.4815, pop: 280 },
  { id: "pathein",       nameJa: "パテイン",           nameEn: "Pathein",         lat: 16.7790, lng: 94.7320, pop: 287 },
  { id: "monywa",        nameJa: "モンユワ",           nameEn: "Monywa",          lat: 22.1131, lng: 95.1358, pop: 200 },
  { id: "meiktila",      nameJa: "メイッティーラ",     nameEn: "Meiktila",        lat: 20.8783, lng: 95.8589, pop: 178 },
  { id: "sittwe",        nameJa: "シットウェ",         nameEn: "Sittwe",          lat: 20.1485, lng: 92.8950, pop: 181 },
  { id: "myingyan",      nameJa: "ミンヂャン",         nameEn: "Myingyan",        lat: 21.4644, lng: 95.3897, pop: 120 },
  { id: "taunggyi",      nameJa: "タウンヂー",         nameEn: "Taunggyi",        lat: 20.7833, lng: 97.0333, pop: 153 },
  { id: "lashio",        nameJa: "ラショー",           nameEn: "Lashio",          lat: 22.9333, lng: 97.7500, pop: 130 },
  { id: "magway",        nameJa: "マグウェ",           nameEn: "Magway",          lat: 20.1500, lng: 94.9333, pop: 81 },
  { id: "myitkyina",     nameJa: "ミッチーナー",       nameEn: "Myitkyina",       lat: 25.3833, lng: 97.4000, pop: 144 },
  { id: "pyay",          nameJa: "ピイ",               nameEn: "Pyay",            lat: 18.8167, lng: 95.2167, pop: 135 },
  { id: "hpa-an",        nameJa: "パアン",             nameEn: "Hpa-An",          lat: 16.8917, lng: 97.6336, pop: 100 },
  { id: "dawei",         nameJa: "ダウェイ",           nameEn: "Dawei",           lat: 14.0833, lng: 98.2000, pop: 140 },
  { id: "myeik",         nameJa: "ミェイ",             nameEn: "Myeik",           lat: 12.4319, lng: 98.5994, pop: 215 },
  { id: "kawthaung",     nameJa: "コータウン",         nameEn: "Kawthaung",       lat:  9.9833, lng: 98.5500, pop: 45 },
  { id: "thaton",        nameJa: "ターン",             nameEn: "Thaton",          lat: 16.9167, lng: 97.3667, pop: 150 },
  { id: "loikaw",        nameJa: "ロイコー",           nameEn: "Loikaw",          lat: 19.6789, lng: 97.2114, pop: 50 },
  { id: "hakha",         nameJa: "ハカ",               nameEn: "Hakha",           lat: 22.6464, lng: 93.6233, pop: 49 },
  { id: "bhamo",         nameJa: "バモー",             nameEn: "Bhamo",           lat: 24.2667, lng: 97.2333, pop: 51 },
  { id: "katha",         nameJa: "カター",             nameEn: "Katha",           lat: 24.1789, lng: 96.3358, pop: 32 },
  { id: "kalay",         nameJa: "カレー",             nameEn: "Kalay",           lat: 23.1833, lng: 94.0667, pop: 152 },
];

export const MYANMAR_PROJECTION: CityProjection = {
  minLon: 92.174973,
  minLat: 9.790717,
  maxLon: 101.173855,
  maxLat: 28.538466,
  cosLat: 0.944579,
  scale: 33.283996,
  offX: 138.540375,
  offY: 8,
};

export const MYANMAR_META: CityCountryMeta = {
  slug: "myanmar",
  continent: "asia",
  svgPath: "/maps/countries/myanmar.svg",
  countryJa: "ミャンマー",
  countryEn: "Myanmar",
};
