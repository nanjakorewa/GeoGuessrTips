/** Top ~25 Belarusian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const BELARUS_CITIES: CityEntry[] = [
  { id: "minsk",         nameJa: "ミンスク",           nameEn: "Minsk",           lat: 53.9006, lng: 27.5590, pop: 2009 },
  { id: "gomel",         nameJa: "ゴメリ",             nameEn: "Gomel",           lat: 52.4345, lng: 30.9754, pop: 510 },
  { id: "mogilev",       nameJa: "モギリョフ",         nameEn: "Mogilev",         lat: 53.9007, lng: 30.3320, pop: 357 },
  { id: "vitebsk",       nameJa: "ヴィテプスク",       nameEn: "Vitebsk",         lat: 55.1904, lng: 30.2049, pop: 367 },
  { id: "grodno",        nameJa: "フロドナ",           nameEn: "Grodno",          lat: 53.6884, lng: 23.8258, pop: 357 },
  { id: "brest",         nameJa: "ブレスト",           nameEn: "Brest",           lat: 52.0976, lng: 23.7341, pop: 340 },
  { id: "bobruisk",      nameJa: "バブルイスク",       nameEn: "Bobruisk",        lat: 53.1384, lng: 29.2214, pop: 217 },
  { id: "baranovichi",   nameJa: "バラナヴィチ",       nameEn: "Baranovichi",     lat: 53.1327, lng: 26.0139, pop: 175 },
  { id: "borisov",       nameJa: "バリサウ",           nameEn: "Borisov",         lat: 54.2278, lng: 28.4928, pop: 142 },
  { id: "pinsk",         nameJa: "ピンスク",           nameEn: "Pinsk",           lat: 52.1229, lng: 26.0951, pop: 138 },
  { id: "orsha",         nameJa: "オルシャ",           nameEn: "Orsha",           lat: 54.5081, lng: 30.4172, pop: 116 },
  { id: "mozyr",         nameJa: "モズィル",           nameEn: "Mozyr",           lat: 52.0451, lng: 29.2456, pop: 113 },
  { id: "soligorsk",     nameJa: "サリホルスク",       nameEn: "Soligorsk",       lat: 52.7878, lng: 27.5379, pop: 105 },
  { id: "novopolotsk",   nameJa: "ナヴァパロツク",     nameEn: "Novopolotsk",     lat: 55.5333, lng: 28.6500, pop: 102 },
  { id: "lida",          nameJa: "リダ",               nameEn: "Lida",            lat: 53.8866, lng: 25.2997, pop: 100 },
  { id: "molodechno",    nameJa: "マラデチナ",         nameEn: "Molodechno",      lat: 54.3122, lng: 26.8419, pop: 95 },
  { id: "polotsk",       nameJa: "ポロツク",           nameEn: "Polotsk",         lat: 55.4845, lng: 28.7860, pop: 80 },
  { id: "zhlobin",       nameJa: "ジロビン",           nameEn: "Zhlobin",         lat: 52.8959, lng: 30.0413, pop: 76 },
  { id: "svetlogorsk",   nameJa: "スヴェトロホルスク", nameEn: "Svetlogorsk",     lat: 52.6320, lng: 29.7339, pop: 67 },
  { id: "rechitsa",      nameJa: "レチツァ",           nameEn: "Rechitsa",        lat: 52.3713, lng: 30.3940, pop: 65 },
  { id: "zhodino",       nameJa: "ジョディノ",         nameEn: "Zhodino",         lat: 54.0991, lng: 28.3500, pop: 64 },
  { id: "slutsk",        nameJa: "スルツク",           nameEn: "Slutsk",          lat: 53.0277, lng: 27.5497, pop: 62 },
  { id: "kobrin",        nameJa: "コブリン",           nameEn: "Kobrin",          lat: 52.2167, lng: 24.3500, pop: 53 },
  { id: "volkovysk",     nameJa: "ヴァウカヴィスク",   nameEn: "Volkovysk",       lat: 53.1666, lng: 24.4500, pop: 44 },
  { id: "novogrudok",    nameJa: "ナヴァフルダク",     nameEn: "Novogrudok",      lat: 53.6000, lng: 25.8333, pop: 30 },
];

export const BELARUS_PROJECTION: CityProjection = {
  minLon: 23.165645,
  minLat: 51.235168,
  maxLon: 32.719532,
  maxLat: 56.156806,
  cosLat: 0.59207,
  scale: 96.171418,
  offX: 8,
  offY: 83.339548,
};

export const BELARUS_META: CityCountryMeta = {
  slug: "belarus",
  continent: "europe",
  svgPath: "/maps/countries/belarus.svg",
  countryJa: "ベラルーシ",
  countryEn: "Belarus",
};
