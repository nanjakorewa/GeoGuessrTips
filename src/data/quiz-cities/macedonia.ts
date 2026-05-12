/** Top ~20 North Macedonian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const MACEDONIA_CITIES: CityEntry[] = [
  { id: "skopje",        nameJa: "スコピエ",           nameEn: "Skopje",          lat: 41.9981, lng: 21.4254, pop: 545 },
  { id: "kumanovo",      nameJa: "クマノヴォ",         nameEn: "Kumanovo",        lat: 42.1322, lng: 21.7144, pop: 76 },
  { id: "bitola",        nameJa: "ビトラ",             nameEn: "Bitola",          lat: 41.0314, lng: 21.3347, pop: 75 },
  { id: "prilep",        nameJa: "プリレプ",           nameEn: "Prilep",          lat: 41.3464, lng: 21.5544, pop: 67 },
  { id: "tetovo",        nameJa: "テトヴォ",           nameEn: "Tetovo",          lat: 42.0167, lng: 20.9711, pop: 53 },
  { id: "veles",         nameJa: "ヴェレス",           nameEn: "Veles",           lat: 41.7170, lng: 21.7750, pop: 45 },
  { id: "shtip",         nameJa: "シュティプ",         nameEn: "Štip",            lat: 41.7460, lng: 22.2050, pop: 44 },
  { id: "ohrid",         nameJa: "オフリド",           nameEn: "Ohrid",           lat: 41.1175, lng: 20.8011, pop: 42 },
  { id: "strumica",      nameJa: "ストルミツァ",       nameEn: "Strumica",        lat: 41.4378, lng: 22.6433, pop: 35 },
  { id: "kavadarci",     nameJa: "カヴァダルツィ",     nameEn: "Kavadarci",       lat: 41.4339, lng: 22.0117, pop: 38 },
  { id: "kocani",        nameJa: "コチャニ",           nameEn: "Kočani",          lat: 41.9156, lng: 22.4111, pop: 28 },
  { id: "kicevo",        nameJa: "キチェヴォ",         nameEn: "Kičevo",          lat: 41.5125, lng: 20.9608, pop: 27 },
  { id: "struga",        nameJa: "ストルガ",           nameEn: "Struga",          lat: 41.1772, lng: 20.6786, pop: 16 },
  { id: "radovis",       nameJa: "ラドヴィシュ",       nameEn: "Radoviš",         lat: 41.6394, lng: 22.4658, pop: 16 },
  { id: "gevgelija",     nameJa: "ゲヴゲリヤ",         nameEn: "Gevgelija",       lat: 41.1389, lng: 22.5042, pop: 15 },
  { id: "debar",         nameJa: "デバル",             nameEn: "Debar",           lat: 41.5161, lng: 20.5269, pop: 14 },
  { id: "negotino",      nameJa: "ネゴチノ",           nameEn: "Negotino",        lat: 41.4831, lng: 22.0894, pop: 13 },
  { id: "kratovo",       nameJa: "クラトヴォ",         nameEn: "Kratovo",         lat: 42.0786, lng: 22.1808, pop: 7 },
  { id: "delcevo",       nameJa: "デルチェヴォ",       nameEn: "Delčevo",         lat: 41.9667, lng: 22.7833, pop: 12 },
  { id: "vinica",        nameJa: "ヴィニツァ",         nameEn: "Vinica",          lat: 41.8833, lng: 22.5167, pop: 11 },
];

export const MACEDONIA_PROJECTION: CityProjection = {
  minLon: 20.444157,
  minLat: 40.849394,
  maxLon: 23.009582,
  maxLat: 42.370335,
  cosLat: 0.747684,
  scale: 283.610054,
  offX: 8,
  offY: 104.322921,
};

export const MACEDONIA_META: CityCountryMeta = {
  slug: "macedonia",
  continent: "europe",
  svgPath: "/maps/countries/macedonia.svg",
  countryJa: "北マケドニア",
  countryEn: "North Macedonia",
};
