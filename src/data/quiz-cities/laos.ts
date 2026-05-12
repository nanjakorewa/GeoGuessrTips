/** Top ~20 Lao cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const LAOS_CITIES: CityEntry[] = [
  { id: "vientiane",     nameJa: "ヴィエンチャン",     nameEn: "Vientiane",       lat: 17.9757, lng: 102.6331, pop: 948 },
  { id: "savannakhet",   nameJa: "サワンナケート",     nameEn: "Savannakhet",     lat: 16.5572, lng: 104.7530, pop: 124 },
  { id: "pakse",         nameJa: "パークセー",         nameEn: "Pakse",           lat: 15.1202, lng: 105.7976, pop: 88 },
  { id: "luang-prabang", nameJa: "ルアンパバーン",     nameEn: "Luang Prabang",   lat: 19.8845, lng: 102.1348, pop: 50 },
  { id: "thakhek",       nameJa: "ターケーク",         nameEn: "Thakhek",         lat: 17.4078, lng: 104.8210, pop: 70 },
  { id: "xam-nuea",      nameJa: "サム・ヌア",         nameEn: "Xam Neua",        lat: 20.4172, lng: 104.0428, pop: 39 },
  { id: "phonsavan",     nameJa: "ポンサヴァン",       nameEn: "Phonsavan",       lat: 19.4500, lng: 103.2167, pop: 60 },
  { id: "luang-namtha",  nameJa: "ルアンナムター",     nameEn: "Luang Namtha",    lat: 20.9508, lng: 101.4014, pop: 36 },
  { id: "muang-xay",     nameJa: "ウドムサイ",         nameEn: "Oudomxay",        lat: 20.6839, lng: 101.9886, pop: 25 },
  { id: "phongsali",     nameJa: "ポンサーリー",       nameEn: "Phongsali",       lat: 21.6814, lng: 102.1042, pop: 25 },
  { id: "vang-vieng",    nameJa: "バンビエン",         nameEn: "Vang Vieng",      lat: 18.9264, lng: 102.4467, pop: 50 },
  { id: "sayaboury",     nameJa: "サイニャブーリー",   nameEn: "Sayaboury",       lat: 19.2581, lng: 101.7028, pop: 53 },
  { id: "salavan",       nameJa: "サラワン",           nameEn: "Salavan",         lat: 15.7167, lng: 106.4167, pop: 40 },
  { id: "attapeu",       nameJa: "アッタプー",         nameEn: "Attapeu",         lat: 14.8083, lng: 106.8333, pop: 21 },
  { id: "sekong",        nameJa: "セコン",             nameEn: "Sekong",          lat: 15.3450, lng: 106.7833, pop: 13 },
  { id: "champasak",     nameJa: "チャンパーサック",   nameEn: "Champasak",       lat: 14.8889, lng: 105.8694, pop: 28 },
  { id: "muang-khong",   nameJa: "コーン島",           nameEn: "Khong",           lat: 14.1167, lng: 105.8500, pop: 8 },
  { id: "muong-phieng",  nameJa: "ムオン・フィエン",   nameEn: "Muong Phieng",    lat: 19.1500, lng: 101.2500, pop: 15 },
  { id: "ban-houayxay",  nameJa: "フエサイ",           nameEn: "Huay Xai",        lat: 20.2725, lng: 100.4178, pop: 21 },
];

export const LAOS_PROJECTION: CityProjection = {
  minLon: 100.097073,
  minLat: 13.915457,
  maxLon: 107.664363,
  maxLat: 22.496044,
  cosLat: 0.949941,
  scale: 72.722297,
  offX: 18.618728,
  offY: 8,
};

export const LAOS_META: CityCountryMeta = {
  slug: "laos",
  continent: "asia",
  svgPath: "/maps/countries/laos.svg",
  countryJa: "ラオス",
  countryEn: "Laos",
};
