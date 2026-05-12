/** Top ~30 Nigerian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const NIGERIA_CITIES: CityEntry[] = [
  { id: "lagos",         nameJa: "ラゴス",             nameEn: "Lagos",           lat:  6.5244, lng:  3.3792, pop: 14862 },
  { id: "kano",          nameJa: "カノ",               nameEn: "Kano",            lat: 12.0022, lng:  8.5919, pop: 3848 },
  { id: "ibadan",        nameJa: "イバダン",           nameEn: "Ibadan",          lat:  7.3775, lng:  3.9470, pop: 3500 },
  { id: "abuja",         nameJa: "アブジャ",           nameEn: "Abuja",           lat:  9.0765, lng:  7.3986, pop: 3464 },
  { id: "port-harcourt", nameJa: "ポートハーコート",   nameEn: "Port Harcourt",   lat:  4.8156, lng:  7.0498, pop: 1865 },
  { id: "benin-city",    nameJa: "ベニン・シティ",     nameEn: "Benin City",      lat:  6.3350, lng:  5.6037, pop: 1782 },
  { id: "kaduna",        nameJa: "カドゥナ",           nameEn: "Kaduna",          lat: 10.5222, lng:  7.4383, pop: 1582 },
  { id: "maiduguri",     nameJa: "マイドゥグリ",       nameEn: "Maiduguri",       lat: 11.8333, lng: 13.1500, pop: 1197 },
  { id: "zaria",         nameJa: "ザリア",             nameEn: "Zaria",           lat: 11.0660, lng:  7.6843, pop: 1018 },
  { id: "aba",           nameJa: "アバ",               nameEn: "Aba",             lat:  5.1167, lng:  7.3667, pop: 1057 },
  { id: "jos",           nameJa: "ジョス",             nameEn: "Jos",             lat:  9.8965, lng:  8.8583, pop: 900 },
  { id: "ilorin",        nameJa: "イロリン",           nameEn: "Ilorin",          lat:  8.4799, lng:  4.5418, pop: 974 },
  { id: "oyo",           nameJa: "オヨ",               nameEn: "Oyo",             lat:  7.8400, lng:  3.9333, pop: 760 },
  { id: "enugu",         nameJa: "エヌグ",             nameEn: "Enugu",           lat:  6.4527, lng:  7.5101, pop: 820 },
  { id: "abeokuta",      nameJa: "アベオクタ",         nameEn: "Abeokuta",        lat:  7.1475, lng:  3.3619, pop: 815 },
  { id: "sokoto",        nameJa: "ソコト",             nameEn: "Sokoto",          lat: 13.0059, lng:  5.2476, pop: 564 },
  { id: "onitsha",       nameJa: "オニチャ",           nameEn: "Onitsha",         lat:  6.1667, lng:  6.7833, pop: 600 },
  { id: "warri",         nameJa: "ワッリ",             nameEn: "Warri",           lat:  5.5167, lng:  5.7500, pop: 536 },
  { id: "okene",         nameJa: "オケネ",             nameEn: "Okene",           lat:  7.5500, lng:  6.2333, pop: 484 },
  { id: "calabar",       nameJa: "カラバル",           nameEn: "Calabar",         lat:  4.9500, lng:  8.3250, pop: 461 },
  { id: "uyo",           nameJa: "ウヨ",               nameEn: "Uyo",             lat:  5.0500, lng:  7.9333, pop: 555 },
  { id: "katsina",       nameJa: "カツィナ",           nameEn: "Katsina",         lat: 12.9908, lng:  7.6017, pop: 432 },
  { id: "ado-ekiti",     nameJa: "アド・エキティ",     nameEn: "Ado-Ekiti",       lat:  7.6167, lng:  5.2333, pop: 424 },
  { id: "akure",         nameJa: "アクレ",             nameEn: "Akure",           lat:  7.2500, lng:  5.1950, pop: 484 },
  { id: "bauchi",        nameJa: "バウチ",             nameEn: "Bauchi",          lat: 10.3158, lng:  9.8442, pop: 318 },
  { id: "minna",         nameJa: "ミナ",               nameEn: "Minna",           lat:  9.6139, lng:  6.5569, pop: 304 },
  { id: "owerri",        nameJa: "オウェリ",           nameEn: "Owerri",          lat:  5.4836, lng:  7.0333, pop: 215 },
  { id: "yola",          nameJa: "ヨラ",               nameEn: "Yola",            lat:  9.2087, lng: 12.4814, pop: 396 },
  { id: "ife",           nameJa: "イレ・イフェ",       nameEn: "Ile-Ife",         lat:  7.4828, lng:  4.5598, pop: 501 },
  { id: "ogbomosho",     nameJa: "オグボモショ",       nameEn: "Ogbomosho",       lat:  8.1333, lng:  4.2500, pop: 645 },
];

export const NIGERIA_PROJECTION: CityProjection = {
  minLon: 2.671082,
  minLat: 4.272162,
  maxLon: 14.669936,
  maxLat: 13.880291,
  cosLat: 0.987479,
  scale: 45.912518,
  offX: 8,
  offY: 99.433303,
};

export const NIGERIA_META: CityCountryMeta = {
  slug: "nigeria",
  continent: "africa",
  svgPath: "/maps/countries/nigeria.svg",
  countryJa: "ナイジェリア",
  countryEn: "Nigeria",
};
