/** Top ~15 Qatari cities/municipalities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const QATAR_CITIES: CityEntry[] = [
  { id: "doha",         nameJa: "ドーハ",             nameEn: "Doha",         lat: 25.2854, lng: 51.5310, pop: 1450 },
  { id: "al-rayyan",    nameJa: "アル・ライヤーン",   nameEn: "Al Rayyan",    lat: 25.2919, lng: 51.4244, pop: 690 },
  { id: "al-wakrah",    nameJa: "アル・ワクラ",       nameEn: "Al Wakrah",    lat: 25.1700, lng: 51.6033, pop: 300 },
  { id: "al-khor",      nameJa: "アル・ホール",       nameEn: "Al Khor",      lat: 25.6840, lng: 51.4969, pop: 200 },
  { id: "lusail",       nameJa: "ルサイル",           nameEn: "Lusail",       lat: 25.4286, lng: 51.4906, pop: 200 },
  { id: "umm-salal",    nameJa: "ウンム・サラル",     nameEn: "Umm Salal",    lat: 25.4889, lng: 51.4022, pop: 100 },
  { id: "al-daayen",    nameJa: "アル・ダアイン",     nameEn: "Al Daayen",    lat: 25.5783, lng: 51.4892, pop: 60 },
  { id: "mesaieed",     nameJa: "メサイード",         nameEn: "Mesaieed",     lat: 24.9881, lng: 51.5469, pop: 35 },
  { id: "al-shahaniya", nameJa: "アル・シャハニヤ",   nameEn: "Al-Shahaniya", lat: 25.4108, lng: 51.1844, pop: 30 },
  { id: "dukhan",       nameJa: "ドゥハン",           nameEn: "Dukhan",       lat: 25.4258, lng: 50.7831, pop: 9 },
  { id: "madinat-ash-shamal", nameJa: "マディナト・アッシャマール", nameEn: "Madinat ash Shamal", lat: 26.1283, lng: 51.2042, pop: 8 },
  { id: "al-ruwais",    nameJa: "アル・ルワイス",     nameEn: "Al Ruwais",    lat: 26.1389, lng: 51.2167, pop: 5 },
  { id: "al-jumayliyah", nameJa: "アル・ジュマイリヤ", nameEn: "Al Jumayliyah", lat: 25.6167, lng: 51.0833, pop: 4 },
  { id: "al-ghuwariyah", nameJa: "アル・グワリヤ",    nameEn: "Al Ghuwariyah", lat: 25.8167, lng: 51.2333, pop: 3 },
];

export const QATAR_PROJECTION: CityProjection = {
  minLon: 50.750987,
  minLat: 24.559872,
  maxLon: 51.616547,
  maxLat: 26.160102,
  cosLat: 0.903635,
  scale: 389.943946,
  offX: 127.502675,
  offY: 8,
};

export const QATAR_META: CityCountryMeta = {
  slug: "qatar",
  continent: "middle_east",
  svgPath: "/maps/countries/qatar.svg",
  countryJa: "カタール",
  countryEn: "Qatar",
};
