/** Top ~20 Senegalese cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const SENEGAL_CITIES: CityEntry[] = [
  { id: "dakar",         nameJa: "ダカール",           nameEn: "Dakar",           lat: 14.7167, lng: -17.4677, pop: 1146 },
  { id: "pikine",        nameJa: "ピキン",             nameEn: "Pikine",          lat: 14.7547, lng: -17.3961, pop: 1170 },
  { id: "touba",         nameJa: "トゥーバ",           nameEn: "Touba",           lat: 14.8500, lng: -15.8833, pop: 754 },
  { id: "thies",         nameJa: "ティエス",           nameEn: "Thiès",           lat: 14.7886, lng: -16.9260, pop: 320 },
  { id: "guediawaye",    nameJa: "ゲディアワイェ",     nameEn: "Guédiawaye",      lat: 14.7833, lng: -17.4053, pop: 330 },
  { id: "kaolack",       nameJa: "カオラック",         nameEn: "Kaolack",         lat: 14.1825, lng: -16.2533, pop: 233 },
  { id: "saint-louis",   nameJa: "サン・ルイ",         nameEn: "Saint-Louis",     lat: 16.0179, lng: -16.4896, pop: 178 },
  { id: "mbour",         nameJa: "ンブール",           nameEn: "M'Bour",          lat: 14.4198, lng: -16.9659, pop: 232 },
  { id: "rufisque",      nameJa: "ルフィスク",         nameEn: "Rufisque",        lat: 14.7167, lng: -17.2667, pop: 222 },
  { id: "ziguinchor",    nameJa: "ジガンショール",     nameEn: "Ziguinchor",      lat: 12.5667, lng: -16.2667, pop: 230 },
  { id: "diourbel",      nameJa: "ジューベル",         nameEn: "Diourbel",        lat: 14.6553, lng: -16.2308, pop: 100 },
  { id: "tambacounda",   nameJa: "タンバクンダ",       nameEn: "Tambacounda",     lat: 13.7708, lng: -13.6672, pop: 79 },
  { id: "richard-toll",  nameJa: "リシャール・トル",   nameEn: "Richard Toll",    lat: 16.4625, lng: -15.7008, pop: 80 },
  { id: "kolda",         nameJa: "コルダ",             nameEn: "Kolda",           lat: 12.8939, lng: -14.9408, pop: 67 },
  { id: "louga",         nameJa: "ルーガ",             nameEn: "Louga",           lat: 15.6167, lng: -16.2167, pop: 88 },
  { id: "fatick",        nameJa: "ファティック",       nameEn: "Fatick",          lat: 14.3333, lng: -16.4167, pop: 31 },
  { id: "kaffrine",      nameJa: "カフリーヌ",         nameEn: "Kaffrine",        lat: 14.1056, lng: -15.5500, pop: 39 },
  { id: "matam",         nameJa: "マタム",             nameEn: "Matam",           lat: 15.6553, lng: -13.2553, pop: 25 },
  { id: "kedougou",      nameJa: "ケドゥグー",         nameEn: "Kédougou",        lat: 12.5556, lng: -12.1739, pop: 25 },
  { id: "sedhiou",       nameJa: "セディウ",           nameEn: "Sédhiou",         lat: 12.7081, lng: -15.5569, pop: 23 },
];

export const SENEGAL_PROJECTION: CityProjection = {
  minLon: -17.536041,
  minLat: 12.305607,
  maxLon: -11.377776,
  maxLat: 16.691385,
  cosLat: 0.968154,
  scale: 91.24225,
  offX: 8,
  offY: 119.915873,
};

export const SENEGAL_META: CityCountryMeta = {
  slug: "senegal",
  continent: "africa",
  svgPath: "/maps/countries/senegal.svg",
  countryJa: "セネガル",
  countryEn: "Senegal",
};
