/** Top ~30 Ghanaian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const GHANA_CITIES: CityEntry[] = [
  { id: "accra",           nameJa: "アクラ",             nameEn: "Accra",           lat:  5.6037, lng:  -0.1870, pop: 2390 },
  { id: "kumasi",          nameJa: "クマシ",             nameEn: "Kumasi",          lat:  6.6885, lng:  -1.6244, pop: 2070 },
  { id: "tamale",          nameJa: "タマレ",             nameEn: "Tamale",          lat:  9.4035, lng:  -0.8423, pop: 670 },
  { id: "sekondi-takoradi", nameJa: "セコンディ・タコラディ", nameEn: "Sekondi-Takoradi", lat:  4.9344, lng: -1.7133, pop: 450 },
  { id: "ashaiman",        nameJa: "アシャイマン",       nameEn: "Ashaiman",        lat:  5.7000, lng:   0.0333, pop: 300 },
  { id: "sunyani",         nameJa: "スニャニ",           nameEn: "Sunyani",         lat:  7.3349, lng:  -2.3123, pop: 250 },
  { id: "cape-coast",      nameJa: "ケープコースト",     nameEn: "Cape Coast",      lat:  5.1315, lng:  -1.2795, pop: 190 },
  { id: "obuasi",          nameJa: "オブアシ",           nameEn: "Obuasi",          lat:  6.2027, lng:  -1.6678, pop: 175 },
  { id: "teshie",          nameJa: "テシエ",             nameEn: "Teshie",          lat:  5.5833, lng:  -0.1000, pop: 170 },
  { id: "tema",            nameJa: "テマ",               nameEn: "Tema",            lat:  5.6698, lng:   0.0166, pop: 161 },
  { id: "madina",          nameJa: "マディナ",           nameEn: "Madina",          lat:  5.6833, lng:  -0.1667, pop: 138 },
  { id: "koforidua",       nameJa: "コフォリドゥア",     nameEn: "Koforidua",       lat:  6.0833, lng:  -0.2500, pop: 130 },
  { id: "wa",              nameJa: "ワ",                 nameEn: "Wa",              lat: 10.0606, lng:  -2.5057, pop: 125 },
  { id: "techiman",        nameJa: "テチマン",           nameEn: "Techiman",        lat:  7.5912, lng:  -1.9358, pop: 105 },
  { id: "ho",              nameJa: "ホ",                 nameEn: "Ho",              lat:  6.6000, lng:   0.4667, pop: 105 },
  { id: "lashibi",         nameJa: "ラシビ",             nameEn: "Lashibi",         lat:  5.6667, lng:  -0.0500, pop: 90 },
  { id: "nungua",          nameJa: "ヌンガ",             nameEn: "Nungua",          lat:  5.5950, lng:  -0.0789, pop: 75 },
  { id: "bolgatanga",      nameJa: "ボルガタンガ",       nameEn: "Bolgatanga",      lat: 10.7860, lng:  -0.8516, pop: 75 },
  { id: "winneba",         nameJa: "ウィネバ",           nameEn: "Winneba",         lat:  5.3500, lng:  -0.6333, pop: 68 },
  { id: "berekum",         nameJa: "ベレクム",           nameEn: "Berekum",         lat:  7.4537, lng:  -2.5847, pop: 65 },
  { id: "tafo",            nameJa: "タフォ",             nameEn: "Tafo",            lat:  6.7333, lng:  -1.6000, pop: 65 },
  { id: "nkawkaw",         nameJa: "ンカウカウ",         nameEn: "Nkawkaw",         lat:  6.5500, lng:  -0.7833, pop: 62 },
  { id: "ejura",           nameJa: "エジュラ",           nameEn: "Ejura",           lat:  7.3833, lng:  -1.3667, pop: 60 },
  { id: "yendi",           nameJa: "イェンディ",         nameEn: "Yendi",           lat:  9.4423, lng:  -0.0094, pop: 53 },
  { id: "swedru",          nameJa: "スウェドゥル",       nameEn: "Swedru",          lat:  5.5333, lng:  -0.7000, pop: 50 },
  { id: "tarkwa",          nameJa: "タルクワ",           nameEn: "Tarkwa",          lat:  5.3000, lng:  -1.9833, pop: 50 },
  { id: "konongo",         nameJa: "コノンゴ",           nameEn: "Konongo",         lat:  6.6167, lng:  -1.2167, pop: 42 },
  { id: "agogo",           nameJa: "アゴゴ",             nameEn: "Agogo",           lat:  6.7833, lng:  -1.0833, pop: 35 },
  { id: "elmina",          nameJa: "エルミナ",           nameEn: "Elmina",          lat:  5.0833, lng:  -1.3500, pop: 33 },
  { id: "keta",            nameJa: "ケタ",               nameEn: "Keta",            lat:  5.9167, lng:   0.9833, pop: 28 },
];

export const GHANA_PROJECTION: CityProjection = {
  minLon: -3.262509,
  minLat: 4.737128,
  maxLon: 1.187968,
  maxLat: 11.162937,
  cosLat: 0.990389,
  scale: 97.108395,
  offX: 65.987481,
  offY: 8,
};

export const GHANA_META: CityCountryMeta = {
  slug: "ghana",
  continent: "africa",
  svgPath: "/maps/countries/ghana.svg",
  countryJa: "ガーナ",
  countryEn: "Ghana",
};
