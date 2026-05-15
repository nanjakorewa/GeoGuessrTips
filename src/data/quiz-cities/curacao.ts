/** Top ~10 Curaçao settlements ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const CURACAO_CITIES: CityEntry[] = [
  { id: "willemstad",       nameJa: "ウィレムスタッド",     nameEn: "Willemstad",       lat: 12.1224, lng: -68.8824, pop: 145 },
  { id: "barber",           nameJa: "バルバー",             nameEn: "Barber",           lat: 12.3000, lng: -69.1167, pop: 6 },
  { id: "santa-rosa",       nameJa: "サンタ・ロサ",         nameEn: "Santa Rosa",       lat: 12.1167, lng: -68.8833, pop: 6 },
  { id: "punda",            nameJa: "プンダ",               nameEn: "Punda",            lat: 12.1086, lng: -68.9336, pop: 5 },
  { id: "otrobanda",        nameJa: "オトロバンダ",         nameEn: "Otrobanda",        lat: 12.1083, lng: -68.9367, pop: 5 },
  { id: "sint-michiel",     nameJa: "シント・ミヒール",     nameEn: "Sint Michiel",     lat: 12.1500, lng: -68.9667, pop: 4 },
  { id: "soto",             nameJa: "ソト",                 nameEn: "Soto",             lat: 12.2833, lng: -69.0833, pop: 4 },
  { id: "jan-thiel",        nameJa: "ヤン・ティール",       nameEn: "Jan Thiel",        lat: 12.0833, lng: -68.8500, pop: 4 },
  { id: "tera-kora",        nameJa: "テラ・コラ",           nameEn: "Tera Kora",        lat: 12.2167, lng: -69.0500, pop: 3 },
  { id: "scharloo",         nameJa: "スカルロー",           nameEn: "Scharloo",         lat: 12.1100, lng: -68.9300, pop: 3 },
  { id: "westpunt",         nameJa: "ウェストプント",       nameEn: "Westpunt",         lat: 12.3667, lng: -69.1500, pop: 2 },
  { id: "boca-sami",        nameJa: "ボカ・サミ",           nameEn: "Boca Sami",        lat: 12.1500, lng: -68.9833, pop: 2 },
  { id: "dorp-sint-willibrordus", nameJa: "ドルプ・シント・ウィリブロルドゥス", nameEn: "Dorp Sint Willibrordus", lat: 12.2000, lng: -69.0167, pop: 2 },
  { id: "lagun",            nameJa: "ラグン",               nameEn: "Lagun",            lat: 12.3000, lng: -69.1333, pop: 1 },
];

export const CURACAO_PROJECTION: CityProjection = {
  minLon: -69.171742,
  minLat: 12.041327,
  maxLon: -68.739735,
  maxLat: 12.391506,
  cosLat: 0.977355,
  scale: 1288.414611,
  offX: 8,
  offY: 94.41213,
};

export const CURACAO_META: CityCountryMeta = {
  slug: "curacao",
  continent: "cs_america",
  svgPath: "/maps/countries/curacao.svg",
  countryJa: "キュラソー",
  countryEn: "Curaçao",
};
