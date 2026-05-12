/** Top ~30 Kazakh cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const KAZAKHSTAN_CITIES: CityEntry[] = [
  { id: "almaty",        nameJa: "アルマトイ",         nameEn: "Almaty",          lat: 43.2220, lng: 76.8512, pop: 2039 },
  { id: "astana",        nameJa: "アスタナ",           nameEn: "Astana",          lat: 51.1605, lng: 71.4704, pop: 1300 },
  { id: "shymkent",      nameJa: "シムケント",         nameEn: "Shymkent",        lat: 42.3417, lng: 69.5901, pop: 1100 },
  { id: "karagandy",     nameJa: "カラガンダ",         nameEn: "Karagandy",       lat: 49.8047, lng: 73.1094, pop: 502 },
  { id: "aktobe",        nameJa: "アクトベ",           nameEn: "Aktobe",          lat: 50.2839, lng: 57.1670, pop: 540 },
  { id: "taraz",         nameJa: "タラズ",             nameEn: "Taraz",           lat: 42.9000, lng: 71.3667, pop: 358 },
  { id: "pavlodar",      nameJa: "パブロダル",         nameEn: "Pavlodar",        lat: 52.2873, lng: 76.9674, pop: 357 },
  { id: "oskemen",       nameJa: "ウスチカメノゴルスク", nameEn: "Oskemen",       lat: 49.9714, lng: 82.6058, pop: 333 },
  { id: "semey",         nameJa: "セメイ",             nameEn: "Semey",           lat: 50.4111, lng: 80.2275, pop: 323 },
  { id: "atyrau",        nameJa: "アティラウ",         nameEn: "Atyrau",          lat: 47.0945, lng: 51.9238, pop: 290 },
  { id: "kostanay",      nameJa: "コスタナイ",         nameEn: "Kostanay",        lat: 53.2198, lng: 63.6354, pop: 250 },
  { id: "kyzylorda",     nameJa: "クズロルダ",         nameEn: "Kyzylorda",       lat: 44.8488, lng: 65.4823, pop: 245 },
  { id: "uralsk",        nameJa: "ウラリスク",         nameEn: "Oral",            lat: 51.2333, lng: 51.3667, pop: 235 },
  { id: "petropavl",     nameJa: "ペトロパヴロフスク", nameEn: "Petropavl",       lat: 54.8721, lng: 69.1497, pop: 218 },
  { id: "aktau",         nameJa: "アクタウ",           nameEn: "Aktau",           lat: 43.6481, lng: 51.1722, pop: 195 },
  { id: "temirtau",      nameJa: "テミルタウ",         nameEn: "Temirtau",        lat: 50.0500, lng: 72.9667, pop: 169 },
  { id: "kokshetau",     nameJa: "コクシェタウ",       nameEn: "Kokshetau",       lat: 53.2833, lng: 69.3833, pop: 153 },
  { id: "rudny",         nameJa: "ルードヌィ",         nameEn: "Rudny",           lat: 52.9647, lng: 63.1158, pop: 116 },
  { id: "ekibastuz",     nameJa: "エキバストゥズ",     nameEn: "Ekibastuz",       lat: 51.7244, lng: 75.3225, pop: 144 },
  { id: "turkistan",     nameJa: "トルキスタン",       nameEn: "Turkistan",       lat: 43.2972, lng: 68.2483, pop: 187 },
  { id: "zhanaozen",     nameJa: "ジャナオゼン",       nameEn: "Zhanaozen",       lat: 43.3406, lng: 52.8617, pop: 168 },
  { id: "taldykorgan",   nameJa: "タルドィコルガン",   nameEn: "Taldykorgan",     lat: 45.0167, lng: 78.3833, pop: 144 },
  { id: "ridder",        nameJa: "リッデル",           nameEn: "Ridder",          lat: 50.3500, lng: 83.5167, pop: 49 },
  { id: "kentau",        nameJa: "ケンタウ",           nameEn: "Kentau",          lat: 43.5147, lng: 68.5078, pop: 55 },
  { id: "balkhash",      nameJa: "バルハシ",           nameEn: "Balkhash",        lat: 46.8439, lng: 74.9989, pop: 65 },
  { id: "ushtobe",       nameJa: "ウシトベ",           nameEn: "Ushtobe",         lat: 45.2622, lng: 77.9819, pop: 27 },
  { id: "satpaev",       nameJa: "サトパエフ",         nameEn: "Satpaev",         lat: 47.9036, lng: 67.5378, pop: 67 },
  { id: "shu",           nameJa: "シュ",               nameEn: "Shu",             lat: 43.6000, lng: 73.7500, pop: 35 },
  { id: "kaskelen",      nameJa: "カスケレン",         nameEn: "Kaskelen",        lat: 43.2000, lng: 76.6167, pop: 64 },
  { id: "tekeli",        nameJa: "テケリ",             nameEn: "Tekeli",          lat: 44.8333, lng: 78.7833, pop: 32 },
];

export const KAZAKHSTAN_PROJECTION: CityProjection = {
  minLon: 46.478279,
  minLat: 40.584656,
  maxLon: 87.323796,
  maxLat: 55.43455,
  cosLat: 0.669006,
  scale: 19.907855,
  offX: 8,
  offY: 172.185234,
};

export const KAZAKHSTAN_META: CityCountryMeta = {
  slug: "kazakhstan",
  continent: "asia",
  svgPath: "/maps/countries/kazakhstan.svg",
  countryJa: "カザフスタン",
  countryEn: "Kazakhstan",
};
