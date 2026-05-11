/** Top 15 German cities by population. */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const GERMANY_CITIES: CityEntry[] = [
  { id: "berlin",     nameJa: "ベルリン",     nameEn: "Berlin",       lat: 52.5200, lng: 13.4050 },
  { id: "hamburg",    nameJa: "ハンブルク",   nameEn: "Hamburg",      lat: 53.5511, lng:  9.9937 },
  { id: "munich",     nameJa: "ミュンヘン",   nameEn: "München",      lat: 48.1351, lng: 11.5820 },
  { id: "cologne",    nameJa: "ケルン",       nameEn: "Köln",         lat: 50.9375, lng:  6.9603 },
  { id: "frankfurt",  nameJa: "フランクフルト", nameEn: "Frankfurt am Main", lat: 50.1109, lng: 8.6821 },
  { id: "stuttgart",  nameJa: "シュトゥットガルト", nameEn: "Stuttgart", lat: 48.7758, lng: 9.1829 },
  { id: "dusseldorf", nameJa: "デュッセルドルフ", nameEn: "Düsseldorf",lat: 51.2277, lng:  6.7735 },
  { id: "leipzig",    nameJa: "ライプツィヒ", nameEn: "Leipzig",      lat: 51.3397, lng: 12.3731 },
  { id: "dortmund",   nameJa: "ドルトムント", nameEn: "Dortmund",     lat: 51.5136, lng:  7.4653 },
  { id: "essen",      nameJa: "エッセン",     nameEn: "Essen",        lat: 51.4556, lng:  7.0116 },
  { id: "bremen",     nameJa: "ブレーメン",   nameEn: "Bremen",       lat: 53.0793, lng:  8.8017 },
  { id: "dresden",    nameJa: "ドレスデン",   nameEn: "Dresden",      lat: 51.0504, lng: 13.7373 },
  { id: "hannover",   nameJa: "ハノーファー", nameEn: "Hannover",     lat: 52.3759, lng:  9.7320 },
  { id: "nuremberg",  nameJa: "ニュルンベルク", nameEn: "Nürnberg",   lat: 49.4521, lng: 11.0767 },
  { id: "duisburg",   nameJa: "デュイスブルク", nameEn: "Duisburg",   lat: 51.4344, lng:  6.7623 },
];

export const GERMANY_PROJECTION: CityProjection = {
  minLon: 5.85249,
  minLat: 47.271121,
  maxLon: 15.022059,
  maxLat: 55.065334,
  cosLat: 0.627036,
  scale: 80.059398,
  offX: 49.843289,
  offY: 8,
};

export const GERMANY_META: CityCountryMeta = {
  slug: "germany",
  continent: "europe",
  svgPath: "/maps/countries/germany.svg",
  countryJa: "ドイツ",
  countryEn: "Germany",
};
