/** Top 20 Italian cities (>= ~100k). Population in thousands. */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const ITALY_CITIES: CityEntry[] = [
  { id: "rome",     nameJa: "ローマ",       nameEn: "Roma",     lat: 41.9028, lng: 12.4964, pop: 2750 },
  { id: "milan",    nameJa: "ミラノ",       nameEn: "Milano",   lat: 45.4642, lng:  9.1900, pop: 1370 },
  { id: "naples",   nameJa: "ナポリ",       nameEn: "Napoli",   lat: 40.8518, lng: 14.2681, pop: 910 },
  { id: "turin",    nameJa: "トリノ",       nameEn: "Torino",   lat: 45.0703, lng:  7.6869, pop: 845 },
  { id: "palermo",  nameJa: "パレルモ",     nameEn: "Palermo",  lat: 38.1157, lng: 13.3613, pop: 630 },
  { id: "genoa",    nameJa: "ジェノヴァ",   nameEn: "Genova",   lat: 44.4056, lng:  8.9463, pop: 560 },
  { id: "bologna",  nameJa: "ボローニャ",   nameEn: "Bologna",  lat: 44.4949, lng: 11.3426, pop: 395 },
  { id: "florence", nameJa: "フィレンツェ", nameEn: "Firenze",  lat: 43.7696, lng: 11.2558, pop: 365 },
  { id: "bari",     nameJa: "バーリ",       nameEn: "Bari",     lat: 41.1171, lng: 16.8719, pop: 315 },
  { id: "catania",  nameJa: "カターニア",   nameEn: "Catania",  lat: 37.5079, lng: 15.0830, pop: 295 },
  { id: "venice",   nameJa: "ヴェネツィア", nameEn: "Venezia",  lat: 45.4408, lng: 12.3155, pop: 250 },
  { id: "verona",   nameJa: "ヴェローナ",   nameEn: "Verona",   lat: 45.4384, lng: 10.9916, pop: 255 },
  { id: "messina",  nameJa: "メッシーナ",   nameEn: "Messina",  lat: 38.1938, lng: 15.5540, pop: 220 },
  { id: "padua",    nameJa: "パドヴァ",     nameEn: "Padova",   lat: 45.4064, lng: 11.8768, pop: 210 },
  { id: "trieste",  nameJa: "トリエステ",   nameEn: "Trieste",  lat: 45.6495, lng: 13.7768, pop: 200 },
  { id: "brescia",  nameJa: "ブレシア",     nameEn: "Brescia",  lat: 45.5416, lng: 10.2118, pop: 200 },
  { id: "taranto",  nameJa: "ターラント",   nameEn: "Taranto",  lat: 40.4661, lng: 17.2400, pop: 195 },
  { id: "prato",    nameJa: "プラート",     nameEn: "Prato",    lat: 43.8801, lng: 11.0966, pop: 200 },
  { id: "parma",    nameJa: "パルマ",       nameEn: "Parma",    lat: 44.8015, lng: 10.3279, pop: 200 },
  { id: "modena",   nameJa: "モデナ",       nameEn: "Modena",   lat: 44.6471, lng: 10.9252, pop: 185 },
];

export const ITALY_PROJECTION: CityProjection = {
  minLon: 6.626621,
  minLat: 35.493692,
  maxLon: 18.520382,
  maxLat: 47.091784,
  cosLat: 0.751348,
  scale: 53.801954,
  offX: 39.603445,
  offY: 8,
};

export const ITALY_META: CityCountryMeta = {
  slug: "italy",
  continent: "europe",
  svgPath: "/maps/countries/italy.svg",
  countryJa: "イタリア",
  countryEn: "Italy",
};
