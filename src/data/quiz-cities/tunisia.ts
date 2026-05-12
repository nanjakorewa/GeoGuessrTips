/** Top ~25 Tunisian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const TUNISIA_CITIES: CityEntry[] = [
  { id: "tunis",         nameJa: "チュニス",           nameEn: "Tunis",           lat: 36.8065, lng: 10.1815, pop: 638 },
  { id: "sfax",          nameJa: "スファクス",         nameEn: "Sfax",            lat: 34.7406, lng: 10.7603, pop: 330 },
  { id: "sousse",        nameJa: "スース",             nameEn: "Sousse",          lat: 35.8256, lng: 10.6361, pop: 271 },
  { id: "ettadhamen",    nameJa: "エタダーメン",       nameEn: "Ettadhamen",      lat: 36.8500, lng: 10.1500, pop: 196 },
  { id: "kairouan",      nameJa: "カイルアン",         nameEn: "Kairouan",        lat: 35.6786, lng: 10.0964, pop: 187 },
  { id: "bizerte",       nameJa: "ビゼルト",           nameEn: "Bizerte",         lat: 37.2744, lng:  9.8739, pop: 142 },
  { id: "gabes",         nameJa: "ガベス",             nameEn: "Gabès",           lat: 33.8881, lng: 10.0986, pop: 130 },
  { id: "ariana",        nameJa: "アリアナ",           nameEn: "Ariana",          lat: 36.8625, lng: 10.1956, pop: 114 },
  { id: "gafsa",         nameJa: "ガフサ",             nameEn: "Gafsa",           lat: 34.4250, lng:  8.7841, pop: 111 },
  { id: "la-marsa",      nameJa: "ラ・マルサ",         nameEn: "La Marsa",        lat: 36.8783, lng: 10.3247, pop: 92 },
  { id: "kasserine",     nameJa: "カセリーヌ",         nameEn: "Kasserine",       lat: 35.1675, lng:  8.8364, pop: 81 },
  { id: "monastir",      nameJa: "モナスティル",       nameEn: "Monastir",        lat: 35.7700, lng: 10.8267, pop: 105 },
  { id: "ben-arous",     nameJa: "ベン・アルース",     nameEn: "Ben Arous",       lat: 36.7553, lng: 10.2300, pop: 89 },
  { id: "medenine",      nameJa: "メデニーヌ",         nameEn: "Médenine",        lat: 33.3547, lng: 10.5053, pop: 75 },
  { id: "nabeul",        nameJa: "ナーブル",           nameEn: "Nabeul",          lat: 36.4514, lng: 10.7350, pop: 73 },
  { id: "kebili",        nameJa: "ケビリ",             nameEn: "Kebili",          lat: 33.7044, lng:  8.9694, pop: 59 },
  { id: "hammam-sousse", nameJa: "ハマム・スース",     nameEn: "Hammam Sousse",   lat: 35.8636, lng: 10.5942, pop: 55 },
  { id: "hammam-lif",    nameJa: "ハマム・リーフ",     nameEn: "Hammam-Lif",      lat: 36.7333, lng: 10.3333, pop: 65 },
  { id: "msaken",        nameJa: "ムサケン",           nameEn: "Msaken",          lat: 35.7314, lng: 10.5803, pop: 76 },
  { id: "mahdia",        nameJa: "マハディア",         nameEn: "Mahdia",          lat: 35.5047, lng: 11.0622, pop: 80 },
  { id: "el-kef",        nameJa: "ル・ケフ",           nameEn: "El Kef",          lat: 36.1822, lng:  8.7081, pop: 50 },
  { id: "sidi-bouzid",   nameJa: "シディ・ブージド",   nameEn: "Sidi Bouzid",     lat: 35.0381, lng:  9.4858, pop: 56 },
  { id: "tozeur",        nameJa: "トズール",           nameEn: "Tozeur",          lat: 33.9197, lng:  8.1335, pop: 39 },
  { id: "beja",          nameJa: "ベジャ",             nameEn: "Béja",            lat: 36.7256, lng:  9.1817, pop: 57 },
  { id: "jendouba",      nameJa: "ジェンドゥーバ",     nameEn: "Jendouba",        lat: 36.5011, lng:  8.7803, pop: 50 },
];

export const TUNISIA_PROJECTION: CityProjection = {
  minLon: 7.479832,
  minLat: 30.228905,
  maxLon: 11.564131,
  maxLat: 37.345201,
  cosLat: 0.83111,
  scale: 87.686066,
  offX: 131.174721,
  offY: 8,
};

export const TUNISIA_META: CityCountryMeta = {
  slug: "tunisia",
  continent: "africa",
  svgPath: "/maps/countries/tunisia.svg",
  countryJa: "チュニジア",
  countryEn: "Tunisia",
};
