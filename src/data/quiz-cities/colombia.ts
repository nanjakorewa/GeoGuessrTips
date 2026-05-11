/** Top ~35 Colombian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const COLOMBIA_CITIES: CityEntry[] = [
  { id: "bogota",        nameJa: "ボゴタ",             nameEn: "Bogotá",          lat:   4.7110, lng: -74.0721, pop: 7900 },
  { id: "medellin",      nameJa: "メデジン",           nameEn: "Medellín",        lat:   6.2476, lng: -75.5658, pop: 2570 },
  { id: "cali",          nameJa: "カリ",               nameEn: "Cali",            lat:   3.4516, lng: -76.5320, pop: 2230 },
  { id: "barranquilla",  nameJa: "バランキージャ",     nameEn: "Barranquilla",    lat:  10.9685, lng: -74.7813, pop: 1280 },
  { id: "cartagena",     nameJa: "カルタヘナ",         nameEn: "Cartagena",       lat:  10.3910, lng: -75.4794, pop: 1029 },
  { id: "cucuta",        nameJa: "ククタ",             nameEn: "Cúcuta",          lat:   7.8939, lng: -72.5078, pop: 711 },
  { id: "soledad",       nameJa: "ソレダ",             nameEn: "Soledad",         lat:  10.9173, lng: -74.7811, pop: 717 },
  { id: "ibague",        nameJa: "イバゲ",             nameEn: "Ibagué",          lat:   4.4389, lng: -75.2322, pop: 543 },
  { id: "bucaramanga",   nameJa: "ブカラマンガ",       nameEn: "Bucaramanga",     lat:   7.1193, lng: -73.1227, pop: 528 },
  { id: "soacha",        nameJa: "ソアチャ",           nameEn: "Soacha",          lat:   4.5793, lng: -74.2168, pop: 783 },
  { id: "santa-marta",   nameJa: "サンタ・マルタ",     nameEn: "Santa Marta",     lat:  11.2408, lng: -74.1990, pop: 526 },
  { id: "villavicencio", nameJa: "ビジャビセンシオ",   nameEn: "Villavicencio",   lat:   4.1420, lng: -73.6266, pop: 528 },
  { id: "pereira",       nameJa: "ペレイラ",           nameEn: "Pereira",         lat:   4.8133, lng: -75.6961, pop: 477 },
  { id: "manizales",     nameJa: "マニサレス",         nameEn: "Manizales",       lat:   5.0689, lng: -75.5174, pop: 434 },
  { id: "monteria",      nameJa: "モンテリア",         nameEn: "Montería",        lat:   8.7479, lng: -75.8814, pop: 458 },
  { id: "neiva",         nameJa: "ネイバ",             nameEn: "Neiva",           lat:   2.9273, lng: -75.2819, pop: 348 },
  { id: "valledupar",    nameJa: "バジェドゥパル",     nameEn: "Valledupar",      lat:  10.4631, lng: -73.2532, pop: 545 },
  { id: "armenia",       nameJa: "アルメニア",         nameEn: "Armenia",         lat:   4.5339, lng: -75.6811, pop: 300 },
  { id: "popayan",       nameJa: "ポパヤン",           nameEn: "Popayán",         lat:   2.4448, lng: -76.6147, pop: 297 },
  { id: "sincelejo",     nameJa: "シンセレホ",         nameEn: "Sincelejo",       lat:   9.3047, lng: -75.3978, pop: 305 },
  { id: "palmira",       nameJa: "パルミラ",           nameEn: "Palmira",         lat:   3.5394, lng: -76.3036, pop: 350 },
  { id: "buenaventura",  nameJa: "ブエナベントゥラ",   nameEn: "Buenaventura",    lat:   3.8801, lng: -77.0312, pop: 423 },
  { id: "tunja",         nameJa: "トゥンハ",           nameEn: "Tunja",           lat:   5.5354, lng: -73.3678, pop: 195 },
  { id: "florencia",     nameJa: "フロレンシア",       nameEn: "Florencia",       lat:   1.6175, lng: -75.6062, pop: 178 },
  { id: "riohacha",      nameJa: "リオアチャ",         nameEn: "Riohacha",        lat:  11.5444, lng: -72.9072, pop: 218 },
  { id: "barrancabermeja", nameJa: "バランカベルメハ", nameEn: "Barrancabermeja", lat:   7.0653, lng: -73.8547, pop: 213 },
  { id: "yopal",         nameJa: "ヨパル",             nameEn: "Yopal",           lat:   5.3378, lng: -72.3959, pop: 168 },
  { id: "ipiales",       nameJa: "イピアレス",         nameEn: "Ipiales",         lat:   0.8290, lng: -77.6457, pop: 145 },
  { id: "pasto",         nameJa: "パスト",             nameEn: "Pasto",           lat:   1.2136, lng: -77.2811, pop: 393 },
  { id: "girardot",      nameJa: "ヒラルド",           nameEn: "Girardot",        lat:   4.2987, lng: -74.8101, pop: 108 },
  { id: "quibdo",        nameJa: "キブド",             nameEn: "Quibdó",          lat:   5.6919, lng: -76.6582, pop: 122 },
  { id: "leticia",       nameJa: "レティシア",         nameEn: "Leticia",         lat:  -4.2153, lng: -69.9406, pop: 42 },
  { id: "san-andres",    nameJa: "サン・アンドレス",   nameEn: "San Andrés",      lat:  12.5847, lng: -81.7006, pop: 56 },
  { id: "mocoa",         nameJa: "モコア",             nameEn: "Mocoa",           lat:   1.1531, lng: -76.6464, pop: 53 },
  { id: "arauca",        nameJa: "アラウカ",           nameEn: "Arauca",          lat:   7.0903, lng: -70.7591, pop: 75 },
];

export const COLOMBIA_PROJECTION: CityProjection = {
  minLon: -81.723704,
  minLat: -4.236484,
  maxLon: -66.875061,
  maxLat: 13.373969,
  cosLat: 0.996822,
  scale: 35.433501,
  offX: 17.766207,
  offY: 8,
};

export const COLOMBIA_META: CityCountryMeta = {
  slug: "colombia",
  continent: "cs_america",
  svgPath: "/maps/countries/colombia.svg",
  countryJa: "コロンビア",
  countryEn: "Colombia",
};
