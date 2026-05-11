/** Top ~30 Portuguese cities (urban areas) ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const PORTUGAL_CITIES: CityEntry[] = [
  { id: "lisbon",        nameJa: "リスボン",           nameEn: "Lisboa",          lat: 38.7223, lng:  -9.1393, pop: 545 },
  { id: "porto",         nameJa: "ポルト",             nameEn: "Porto",           lat: 41.1579, lng:  -8.6291, pop: 238 },
  { id: "vila-nova-gaia", nameJa: "ヴィラ・ノヴァ・デ・ガイア", nameEn: "Vila Nova de Gaia", lat: 41.1235, lng: -8.6118, pop: 303 },
  { id: "amadora",       nameJa: "アマドーラ",         nameEn: "Amadora",         lat: 38.7536, lng:  -9.2305, pop: 175 },
  { id: "braga",         nameJa: "ブラガ",             nameEn: "Braga",           lat: 41.5454, lng:  -8.4265, pop: 193 },
  { id: "almada",        nameJa: "アルマダ",           nameEn: "Almada",          lat: 38.6791, lng:  -9.1569, pop: 174 },
  { id: "funchal",       nameJa: "フンシャル",         nameEn: "Funchal",         lat: 32.6669, lng: -16.9241, pop: 105 },
  { id: "coimbra",       nameJa: "コインブラ",         nameEn: "Coimbra",         lat: 40.2033, lng:  -8.4103, pop: 143 },
  { id: "setubal",       nameJa: "セトゥーバル",       nameEn: "Setúbal",         lat: 38.5244, lng:  -8.8882, pop: 124 },
  { id: "agualva",       nameJa: "アグアルヴァ・カセン", nameEn: "Agualva-Cacém", lat: 38.7619, lng:  -9.2989, pop: 81 },
  { id: "queluz",        nameJa: "ケルース",           nameEn: "Queluz",          lat: 38.7556, lng:  -9.2566, pop: 78 },
  { id: "rio-tinto",     nameJa: "リオ・ティント",     nameEn: "Rio Tinto",       lat: 41.1814, lng:  -8.5544, pop: 47 },
  { id: "viseu",         nameJa: "ヴィゼウ",           nameEn: "Viseu",           lat: 40.6566, lng:  -7.9122, pop: 100 },
  { id: "ponta-delgada", nameJa: "ポンタ・デルガダ",   nameEn: "Ponta Delgada",   lat: 37.7412, lng: -25.6756, pop: 68 },
  { id: "barreiro",      nameJa: "バレイロ",           nameEn: "Barreiro",        lat: 38.6634, lng:  -9.0729, pop: 75 },
  { id: "loures",        nameJa: "ロウレス",           nameEn: "Loures",          lat: 38.8295, lng:  -9.1683, pop: 200 },
  { id: "evora",         nameJa: "エヴォラ",           nameEn: "Évora",           lat: 38.5713, lng:  -7.9135, pop: 56 },
  { id: "faro",          nameJa: "ファロ",             nameEn: "Faro",            lat: 37.0194, lng:  -7.9304, pop: 65 },
  { id: "leiria",        nameJa: "レイリア",           nameEn: "Leiria",          lat: 39.7437, lng:  -8.8071, pop: 64 },
  { id: "matosinhos",    nameJa: "マトジニョシュ",     nameEn: "Matosinhos",      lat: 41.1791, lng:  -8.6885, pop: 175 },
  { id: "guimaraes",     nameJa: "ギマランイス",       nameEn: "Guimarães",       lat: 41.4425, lng:  -8.2918, pop: 158 },
  { id: "aveiro",        nameJa: "アヴェイロ",         nameEn: "Aveiro",          lat: 40.6443, lng:  -8.6455, pop: 80 },
  { id: "viana-do-castelo", nameJa: "ヴィアナ・ド・カステロ", nameEn: "Viana do Castelo", lat: 41.6932, lng: -8.8327, pop: 88 },
  { id: "vila-real",     nameJa: "ヴィラ・レアル",     nameEn: "Vila Real",       lat: 41.3000, lng:  -7.7500, pop: 51 },
  { id: "santarem",      nameJa: "サンタレン",         nameEn: "Santarém",        lat: 39.2333, lng:  -8.6852, pop: 62 },
  { id: "portimao",      nameJa: "ポルティマン",       nameEn: "Portimão",        lat: 37.1382, lng:  -8.5380, pop: 56 },
  { id: "covilha",       nameJa: "コヴィリャン",       nameEn: "Covilhã",         lat: 40.2806, lng:  -7.5034, pop: 50 },
  { id: "torres-vedras", nameJa: "トレス・ヴェドラス", nameEn: "Torres Vedras",   lat: 39.0918, lng:  -9.2588, pop: 80 },
  { id: "beja",          nameJa: "ベジャ",             nameEn: "Beja",            lat: 38.0143, lng:  -7.8633, pop: 35 },
  { id: "olhao",         nameJa: "オリャン",           nameEn: "Olhão",           lat: 37.0289, lng:  -7.8412, pop: 45 },
  { id: "felgueiras",    nameJa: "フェルゲイラス",     nameEn: "Felgueiras",      lat: 41.3636, lng:  -8.1969, pop: 58 },
  { id: "bragança",      nameJa: "ブラガンサ",         nameEn: "Bragança",        lat: 41.8061, lng:  -6.7567, pop: 35 },
];

export const PORTUGAL_PROJECTION: CityProjection = {
  minLon: -31.284901,
  minLat: 30.133287,
  maxLon: -6.205947,
  maxLat: 42.15363,
  cosLat: 0.807543,
  scale: 26.86111,
  offX: 8,
  offY: 158.560121,
};

export const PORTUGAL_META: CityCountryMeta = {
  slug: "portugal",
  continent: "europe",
  svgPath: "/maps/countries/portugal.svg",
  countryJa: "ポルトガル",
  countryEn: "Portugal",
};
