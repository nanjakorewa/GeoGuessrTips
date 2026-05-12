/** Top ~20 Estonian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const ESTONIA_CITIES: CityEntry[] = [
  { id: "tallinn",       nameJa: "タリン",             nameEn: "Tallinn",         lat: 59.4370, lng: 24.7536, pop: 461 },
  { id: "tartu",         nameJa: "タルトゥ",           nameEn: "Tartu",           lat: 58.3776, lng: 26.7290, pop: 97 },
  { id: "narva",         nameJa: "ナルヴァ",           nameEn: "Narva",           lat: 59.3772, lng: 28.1903, pop: 53 },
  { id: "parnu",         nameJa: "パルヌ",             nameEn: "Pärnu",           lat: 58.3859, lng: 24.4971, pop: 51 },
  { id: "kohtla-jarve",  nameJa: "コフトラ・ヤルヴェ", nameEn: "Kohtla-Järve",    lat: 59.3986, lng: 27.2737, pop: 32 },
  { id: "viljandi",      nameJa: "ヴィリャンディ",     nameEn: "Viljandi",        lat: 58.3639, lng: 25.5900, pop: 17 },
  { id: "rakvere",       nameJa: "ラクヴェレ",         nameEn: "Rakvere",         lat: 59.3464, lng: 26.3559, pop: 16 },
  { id: "maardu",        nameJa: "マールドゥ",         nameEn: "Maardu",          lat: 59.4767, lng: 25.0228, pop: 16 },
  { id: "kuressaare",    nameJa: "クレッサーレ",       nameEn: "Kuressaare",      lat: 58.2531, lng: 22.4849, pop: 13 },
  { id: "sillamae",      nameJa: "シッラマエ",         nameEn: "Sillamäe",        lat: 59.3964, lng: 27.7619, pop: 12 },
  { id: "voru",          nameJa: "ヴォル",             nameEn: "Võru",            lat: 57.8333, lng: 27.0167, pop: 11 },
  { id: "valga",         nameJa: "ヴァルガ",           nameEn: "Valga",           lat: 57.7775, lng: 26.0473, pop: 12 },
  { id: "haapsalu",      nameJa: "ハープサル",         nameEn: "Haapsalu",        lat: 58.9430, lng: 23.5413, pop: 10 },
  { id: "johvi",         nameJa: "ヨフヴィ",           nameEn: "Jõhvi",           lat: 59.3589, lng: 27.4214, pop: 10 },
  { id: "keila",         nameJa: "ケイラ",             nameEn: "Keila",           lat: 59.3036, lng: 24.4133, pop: 10 },
  { id: "saue",          nameJa: "サウエ",             nameEn: "Saue",            lat: 59.3208, lng: 24.5497, pop: 6 },
  { id: "tapa",          nameJa: "タパ",               nameEn: "Tapa",            lat: 59.2603, lng: 25.9583, pop: 6 },
  { id: "elva",          nameJa: "エルヴァ",           nameEn: "Elva",            lat: 58.2222, lng: 26.4203, pop: 6 },
  { id: "polva",         nameJa: "ポルヴァ",           nameEn: "Põlva",           lat: 58.0500, lng: 27.0667, pop: 5 },
  { id: "rapla",         nameJa: "ラプラ",             nameEn: "Rapla",           lat: 59.0094, lng: 24.7944, pop: 5 },
  { id: "paide",         nameJa: "パイデ",             nameEn: "Paide",           lat: 58.8853, lng: 25.5547, pop: 8 },
];

export const ESTONIA_PROJECTION: CityProjection = {
  minLon: 21.832367,
  minLat: 57.515819,
  maxLon: 28.186475,
  maxLat: 59.670885,
  cosLat: 0.521109,
  scale: 164.291847,
  offX: 8,
  offY: 142.970113,
};

export const ESTONIA_META: CityCountryMeta = {
  slug: "estonia",
  continent: "europe",
  svgPath: "/maps/countries/estonia.svg",
  countryJa: "エストニア",
  countryEn: "Estonia",
};
