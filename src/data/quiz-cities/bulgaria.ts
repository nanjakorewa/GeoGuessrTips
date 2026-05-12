/** Top ~30 Bulgarian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const BULGARIA_CITIES: CityEntry[] = [
  { id: "sofia",         nameJa: "ソフィア",           nameEn: "Sofia",           lat: 42.6977, lng: 23.3219, pop: 1241 },
  { id: "plovdiv",       nameJa: "プロヴディフ",       nameEn: "Plovdiv",         lat: 42.1354, lng: 24.7453, pop: 343 },
  { id: "varna",         nameJa: "ヴァルナ",           nameEn: "Varna",           lat: 43.2141, lng: 27.9147, pop: 335 },
  { id: "burgas",        nameJa: "ブルガス",           nameEn: "Burgas",          lat: 42.5048, lng: 27.4626, pop: 202 },
  { id: "ruse",          nameJa: "ルセ",               nameEn: "Ruse",            lat: 43.8564, lng: 25.9707, pop: 142 },
  { id: "stara-zagora",  nameJa: "スタラ・ザゴラ",     nameEn: "Stara Zagora",    lat: 42.4258, lng: 25.6356, pop: 134 },
  { id: "pleven",        nameJa: "プレヴェン",         nameEn: "Pleven",          lat: 43.4170, lng: 24.6166, pop: 99 },
  { id: "sliven",        nameJa: "スリヴェン",         nameEn: "Sliven",          lat: 42.6824, lng: 26.3294, pop: 84 },
  { id: "dobrich",       nameJa: "ドブリチ",           nameEn: "Dobrich",         lat: 43.5667, lng: 27.8333, pop: 75 },
  { id: "shumen",        nameJa: "シュメン",           nameEn: "Shumen",          lat: 43.2706, lng: 26.9229, pop: 74 },
  { id: "pernik",        nameJa: "ペルニク",           nameEn: "Pernik",          lat: 42.6051, lng: 23.0376, pop: 72 },
  { id: "haskovo",       nameJa: "ハスコヴォ",         nameEn: "Haskovo",         lat: 41.9333, lng: 25.5500, pop: 70 },
  { id: "yambol",        nameJa: "ヤンボル",           nameEn: "Yambol",          lat: 42.4838, lng: 26.5036, pop: 65 },
  { id: "pazardzhik",    nameJa: "パザルジク",         nameEn: "Pazardzhik",      lat: 42.1934, lng: 24.3372, pop: 68 },
  { id: "blagoevgrad",   nameJa: "ブラゴエヴグラト",   nameEn: "Blagoevgrad",     lat: 42.0117, lng: 23.0851, pop: 68 },
  { id: "veliko-tarnovo", nameJa: "ヴェリコ・タルノヴォ", nameEn: "Veliko Tarnovo", lat: 43.0757, lng: 25.6172, pop: 68 },
  { id: "vratsa",        nameJa: "ヴラツァ",           nameEn: "Vratsa",          lat: 43.2103, lng: 23.5611, pop: 53 },
  { id: "gabrovo",       nameJa: "ガブロヴォ",         nameEn: "Gabrovo",         lat: 42.8742, lng: 25.3219, pop: 54 },
  { id: "asenovgrad",    nameJa: "アセノヴグラト",     nameEn: "Asenovgrad",      lat: 42.0114, lng: 24.8769, pop: 48 },
  { id: "vidin",         nameJa: "ヴィディン",         nameEn: "Vidin",           lat: 43.9899, lng: 22.8728, pop: 41 },
  { id: "kazanlak",      nameJa: "カザンラク",         nameEn: "Kazanlak",        lat: 42.6167, lng: 25.4000, pop: 44 },
  { id: "kyustendil",    nameJa: "キュステンディル",   nameEn: "Kyustendil",      lat: 42.2839, lng: 22.6913, pop: 42 },
  { id: "kardzhali",     nameJa: "カルジャリ",         nameEn: "Kardzhali",       lat: 41.6500, lng: 25.3667, pop: 46 },
  { id: "montana",       nameJa: "モンタナ",           nameEn: "Montana",         lat: 43.4116, lng: 23.2256, pop: 39 },
  { id: "dimitrovgrad",  nameJa: "ディミトロフグラト", nameEn: "Dimitrovgrad",    lat: 42.0500, lng: 25.6000, pop: 36 },
  { id: "lovech",        nameJa: "ロヴェチ",           nameEn: "Lovech",          lat: 43.1372, lng: 24.7164, pop: 37 },
  { id: "silistra",      nameJa: "シリストラ",         nameEn: "Silistra",        lat: 44.1167, lng: 27.2667, pop: 33 },
  { id: "razgrad",       nameJa: "ラズグラト",         nameEn: "Razgrad",         lat: 43.5333, lng: 26.5167, pop: 32 },
  { id: "targovishte",   nameJa: "タルゴヴィシュテ",   nameEn: "Targovishte",     lat: 43.2500, lng: 26.5667, pop: 35 },
  { id: "smolyan",       nameJa: "スモリャン",         nameEn: "Smolyan",         lat: 41.5772, lng: 24.7106, pop: 29 },
];

export const BULGARIA_PROJECTION: CityProjection = {
  minLon: 22.345023,
  minLat: 41.238104,
  maxLon: 28.603526,
  maxLat: 44.228435,
  cosLat: 0.734521,
  scale: 118.338048,
  offX: 8,
  offY: 143.065033,
};

export const BULGARIA_META: CityCountryMeta = {
  slug: "bulgaria",
  continent: "europe",
  svgPath: "/maps/countries/bulgaria.svg",
  countryJa: "ブルガリア",
  countryEn: "Bulgaria",
};
