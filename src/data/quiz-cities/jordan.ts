/** Top ~30 Jordanian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const JORDAN_CITIES: CityEntry[] = [
  { id: "amman",        nameJa: "アンマン",           nameEn: "Amman",        lat: 31.9539, lng: 35.9106, pop: 4000 },
  { id: "zarqa",        nameJa: "ザルカ",             nameEn: "Zarqa",        lat: 32.0728, lng: 36.0876, pop: 635 },
  { id: "irbid",        nameJa: "イルビド",           nameEn: "Irbid",        lat: 32.5556, lng: 35.8500, pop: 570 },
  { id: "russeifa",     nameJa: "ルサイファ",         nameEn: "Russeifa",     lat: 32.0175, lng: 36.0464, pop: 481 },
  { id: "wadi-as-sir",  nameJa: "ワディ・アッ＝シール", nameEn: "Wadi as-Sir",  lat: 31.9500, lng: 35.8167, pop: 220 },
  { id: "sahab",        nameJa: "サハブ",             nameEn: "Sahab",        lat: 31.8700, lng: 36.0078, pop: 170 },
  { id: "aqaba",        nameJa: "アカバ",             nameEn: "Aqaba",        lat: 29.5267, lng: 35.0078, pop: 148 },
  { id: "salt",         nameJa: "サルト",             nameEn: "Salt",         lat: 32.0392, lng: 35.7269, pop: 110 },
  { id: "madaba",       nameJa: "マダバ",             nameEn: "Madaba",       lat: 31.7167, lng: 35.7956, pop: 105 },
  { id: "marka",        nameJa: "マルカ",             nameEn: "Marka",        lat: 32.0000, lng: 35.9700, pop: 100 },
  { id: "mafraq",       nameJa: "マフラク",           nameEn: "Mafraq",       lat: 32.3406, lng: 36.2081, pop: 100 },
  { id: "ramtha",       nameJa: "ラムサ",             nameEn: "Ramtha",       lat: 32.5614, lng: 36.0067, pop: 90 },
  { id: "jerash",       nameJa: "ジャラシュ",         nameEn: "Jerash",       lat: 32.2722, lng: 35.8908, pop: 50 },
  { id: "maan",         nameJa: "マアーン",           nameEn: "Ma'an",        lat: 30.1925, lng: 35.7344, pop: 50 },
  { id: "karak",        nameJa: "カラク",             nameEn: "Karak",        lat: 31.1853, lng: 35.7047, pop: 32 },
  { id: "tafilah",      nameJa: "タフィーラ",         nameEn: "Tafilah",      lat: 30.8372, lng: 35.6044, pop: 30 },
  { id: "naur",         nameJa: "ナウル",             nameEn: "Na'ur",        lat: 31.8767, lng: 35.8408, pop: 30 },
  { id: "kufranja",     nameJa: "クフランジャ",       nameEn: "Kufranja",     lat: 32.2997, lng: 35.7050, pop: 30 },
  { id: "ajloun",       nameJa: "アジュルーン",       nameEn: "Ajloun",       lat: 32.3325, lng: 35.7517, pop: 25 },
  { id: "huson",        nameJa: "フスン",             nameEn: "Huson",        lat: 32.4833, lng: 35.8833, pop: 24 },
  { id: "north-shouneh", nameJa: "シューナ北部",      nameEn: "Shuneh al-Shamaliyya", lat: 32.6167, lng: 35.6167, pop: 20 },
  { id: "fuhais",       nameJa: "フハイス",           nameEn: "Fuhais",       lat: 32.0233, lng: 35.7592, pop: 19 },
  { id: "deir-alla",    nameJa: "デイル・アッラー",   nameEn: "Deir Alla",    lat: 32.1981, lng: 35.6225, pop: 18 },
  { id: "petra",        nameJa: "ワディ・ムーサ",     nameEn: "Wadi Musa",    lat: 30.3214, lng: 35.4828, pop: 17 },
  { id: "south-shouneh", nameJa: "シューナ南部",      nameEn: "Shuneh al-Janubiyya", lat: 31.9000, lng: 35.6000, pop: 15 },
  { id: "azraq",        nameJa: "アズラック",         nameEn: "Azraq",        lat: 31.8333, lng: 36.8167, pop: 15 },
  { id: "al-jiza",      nameJa: "ジーザ",             nameEn: "Al-Jiza",      lat: 31.6936, lng: 35.9536, pop: 15 },
  { id: "as-safi",      nameJa: "アッ＝サーフィー",   nameEn: "As-Safi",      lat: 31.0431, lng: 35.4944, pop: 12 },
  { id: "ar-ruwaished", nameJa: "ルワイシド",         nameEn: "Ar-Ruwaished", lat: 32.5044, lng: 38.2050, pop: 5 },
];

export const JORDAN_PROJECTION: CityProjection = {
  minLon: 34.949385,
  minLat: 29.189951,
  maxLon: 39.291999,
  maxLat: 33.371685,
  cosLat: 0.854633,
  scale: 146.577787,
  offX: 8,
  offY: 13.525343,
};

export const JORDAN_META: CityCountryMeta = {
  slug: "jordan",
  continent: "middle_east",
  svgPath: "/maps/countries/jordan.svg",
  countryJa: "ヨルダン",
  countryEn: "Jordan",
};
