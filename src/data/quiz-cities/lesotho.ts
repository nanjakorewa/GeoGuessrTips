/** Top ~14 Lesotho cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const LESOTHO_CITIES: CityEntry[] = [
  { id: "maseru",          nameJa: "マセル",             nameEn: "Maseru",          lat: -29.3167, lng:  27.4833, pop: 330 },
  { id: "teyateyaneng",    nameJa: "テヤテヤネン",       nameEn: "Teyateyaneng",    lat: -29.1483, lng:  27.7406, pop: 75 },
  { id: "mafeteng",        nameJa: "マフェテン",         nameEn: "Mafeteng",        lat: -29.8214, lng:  27.2486, pop: 57 },
  { id: "hlotse",          nameJa: "フロツェ",           nameEn: "Hlotse",          lat: -28.8769, lng:  28.0492, pop: 47 },
  { id: "mohales-hoek",    nameJa: "モハレス・フーク",   nameEn: "Mohale's Hoek",   lat: -30.1500, lng:  27.4667, pop: 41 },
  { id: "maputsoe",        nameJa: "マプツォエ",         nameEn: "Maputsoe",        lat: -28.8836, lng:  27.9019, pop: 33 },
  { id: "butha-buthe",     nameJa: "ブタブテ",           nameEn: "Butha-Buthe",     lat: -28.7667, lng:  28.2500, pop: 30 },
  { id: "quthing",         nameJa: "クティン",           nameEn: "Quthing",         lat: -30.4000, lng:  27.7000, pop: 24 },
  { id: "qachas-nek",      nameJa: "カチャズ・ネック",   nameEn: "Qacha's Nek",     lat: -30.1167, lng:  28.6833, pop: 14 },
  { id: "roma",            nameJa: "ローマ",             nameEn: "Roma",            lat: -29.4500, lng:  27.7167, pop: 9 },
  { id: "mokhotlong",      nameJa: "モコトロン",         nameEn: "Mokhotlong",      lat: -29.2833, lng:  29.0667, pop: 9 },
  { id: "thaba-tseka",     nameJa: "タバ・ツェカ",       nameEn: "Thaba-Tseka",     lat: -29.5167, lng:  28.6000, pop: 8 },
  { id: "morija",          nameJa: "モリヤ",             nameEn: "Morija",          lat: -29.6167, lng:  27.5167, pop: 7 },
  { id: "semonkong",       nameJa: "セモンコン",         nameEn: "Semonkong",       lat: -29.8333, lng:  28.0833, pop: 5 },
];

export const LESOTHO_PROJECTION: CityProjection = {
  minLon: 27.002155,
  minLat: -30.658799,
  maxLon: 29.435908,
  maxLat: -28.570761,
  cosLat: 0.869367,
  scale: 257.110023,
  offX: 8,
  offY: 51.572251,
};

export const LESOTHO_META: CityCountryMeta = {
  slug: "lesotho",
  continent: "africa",
  svgPath: "/maps/countries/lesotho.svg",
  countryJa: "レソト",
  countryEn: "Lesotho",
};
