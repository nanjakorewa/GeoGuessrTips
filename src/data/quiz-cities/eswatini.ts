/** Top ~15 Eswatini cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const ESWATINI_CITIES: CityEntry[] = [
  { id: "mbabane",       nameJa: "ムババーネ",         nameEn: "Mbabane",       lat: -26.3054, lng:  31.1367, pop: 95 },
  { id: "manzini",       nameJa: "マンジニ",           nameEn: "Manzini",       lat: -26.4936, lng:  31.3653, pop: 80 },
  { id: "matsapha",      nameJa: "マツァパ",           nameEn: "Matsapha",      lat: -26.5083, lng:  31.3000, pop: 14 },
  { id: "lobamba",       nameJa: "ロバンバ",           nameEn: "Lobamba",       lat: -26.4467, lng:  31.2058, pop: 11 },
  { id: "big-bend",      nameJa: "ビッグ・ベンド",     nameEn: "Big Bend",      lat: -26.8167, lng:  31.9333, pop: 10 },
  { id: "malkerns",      nameJa: "マルカーンズ",       nameEn: "Malkerns",      lat: -26.5500, lng:  31.1833, pop: 9 },
  { id: "nhlangano",     nameJa: "ンランガノ",         nameEn: "Nhlangano",     lat: -27.1167, lng:  31.2000, pop: 9 },
  { id: "mhlume",        nameJa: "ムフルメ",           nameEn: "Mhlume",        lat: -26.0333, lng:  31.8333, pop: 8 },
  { id: "hluti",         nameJa: "フルティ",           nameEn: "Hluti",         lat: -27.2167, lng:  31.6167, pop: 7 },
  { id: "siteki",        nameJa: "シテキ",             nameEn: "Siteki",        lat: -26.4500, lng:  31.9500, pop: 7 },
  { id: "piggs-peak",    nameJa: "ピッグス・ピーク",   nameEn: "Piggs Peak",    lat: -25.9667, lng:  31.2500, pop: 7 },
  { id: "kwaluseni",     nameJa: "クワルセニ",         nameEn: "Kwaluseni",     lat: -26.4667, lng:  31.2667, pop: 7 },
  { id: "ezulwini",      nameJa: "エズルウィニ",       nameEn: "Ezulwini",      lat: -26.3833, lng:  31.1500, pop: 6 },
  { id: "siphofaneni",   nameJa: "シポファネニ",       nameEn: "Siphofaneni",   lat: -26.6333, lng:  31.6667, pop: 5 },
  { id: "lavumisa",      nameJa: "ラヴミサ",           nameEn: "Lavumisa",      lat: -27.3167, lng:  31.8833, pop: 4 },
];

export const ESWATINI_PROJECTION: CityProjection = {
  minLon: 30.782906,
  minLat: -27.316264,
  maxLon: 32.117398,
  maxLat: -25.735999,
  cosLat: 0.894731,
  scale: 394.870481,
  offX: 44.260141,
  offY: 8,
};

export const ESWATINI_META: CityCountryMeta = {
  slug: "eswatini",
  continent: "africa",
  svgPath: "/maps/countries/eswatini.svg",
  countryJa: "エスワティニ",
  countryEn: "Eswatini",
};
