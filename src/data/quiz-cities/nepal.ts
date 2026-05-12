/** Top ~25 Nepali cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const NEPAL_CITIES: CityEntry[] = [
  { id: "kathmandu",     nameJa: "カトマンズ",         nameEn: "Kathmandu",       lat: 27.7172, lng: 85.3240, pop: 975 },
  { id: "pokhara",       nameJa: "ポカラ",             nameEn: "Pokhara",         lat: 28.2096, lng: 83.9856, pop: 414 },
  { id: "lalitpur",      nameJa: "ラリトプル",         nameEn: "Lalitpur",        lat: 27.6747, lng: 85.3206, pop: 295 },
  { id: "bharatpur",     nameJa: "バラトプル",         nameEn: "Bharatpur",       lat: 27.6833, lng: 84.4333, pop: 280 },
  { id: "birgunj",       nameJa: "ビルガンジ",         nameEn: "Birgunj",         lat: 27.0114, lng: 84.8769, pop: 240 },
  { id: "biratnagar",    nameJa: "ビラトナガル",       nameEn: "Biratnagar",      lat: 26.4831, lng: 87.2834, pop: 215 },
  { id: "bhaktapur",     nameJa: "バクタプル",         nameEn: "Bhaktapur",       lat: 27.6710, lng: 85.4298, pop: 82 },
  { id: "dharan",        nameJa: "ダラン",             nameEn: "Dharan",          lat: 26.8147, lng: 87.2769, pop: 137 },
  { id: "butwal",        nameJa: "ブトワル",           nameEn: "Butwal",          lat: 27.6989, lng: 83.4486, pop: 196 },
  { id: "hetauda",       nameJa: "ヘタウダ",           nameEn: "Hetauda",         lat: 27.4283, lng: 85.0333, pop: 153 },
  { id: "janakpur",      nameJa: "ジャナクプル",       nameEn: "Janakpur",        lat: 26.7333, lng: 85.9167, pop: 153 },
  { id: "dhangadhi",     nameJa: "ダンガディ",         nameEn: "Dhangadhi",       lat: 28.7000, lng: 80.6000, pop: 147 },
  { id: "tulsipur",      nameJa: "トゥルシプル",       nameEn: "Tulsipur",        lat: 28.1167, lng: 82.3000, pop: 141 },
  { id: "itahari",       nameJa: "イタハリ",           nameEn: "Itahari",         lat: 26.6633, lng: 87.2719, pop: 140 },
  { id: "nepalgunj",     nameJa: "ネパールガンジ",     nameEn: "Nepalgunj",       lat: 28.0500, lng: 81.6167, pop: 134 },
  { id: "ghorahi",       nameJa: "ゴラヒ",             nameEn: "Ghorahi",         lat: 28.0333, lng: 82.4833, pop: 156 },
  { id: "siddharthanagar", nameJa: "シッダールタナガル", nameEn: "Siddharthanagar", lat: 27.5036, lng: 83.4544, pop: 67 },
  { id: "mahendranagar", nameJa: "マヘンドラナガル",   nameEn: "Mahendranagar",   lat: 28.9667, lng: 80.1833, pop: 106 },
  { id: "kirtipur",      nameJa: "キルティプル",       nameEn: "Kirtipur",        lat: 27.6667, lng: 85.2833, pop: 67 },
  { id: "tikapur",       nameJa: "ティカプル",         nameEn: "Tikapur",         lat: 28.5333, lng: 81.1167, pop: 92 },
  { id: "gorkha",        nameJa: "ゴルカ",             nameEn: "Gorkha",          lat: 28.0000, lng: 84.6333, pop: 70 },
  { id: "ilam",          nameJa: "イラム",             nameEn: "Ilam",            lat: 26.9097, lng: 87.9272, pop: 49 },
  { id: "rajbiraj",      nameJa: "ラジビラジ",         nameEn: "Rajbiraj",        lat: 26.5333, lng: 86.7500, pop: 63 },
  { id: "kalaiya",       nameJa: "カライヤ",           nameEn: "Kalaiya",         lat: 27.0333, lng: 85.0000, pop: 80 },
];

export const NEPAL_PROJECTION: CityProjection = {
  minLon: 80.030288,
  minLat: 26.343768,
  maxLon: 88.169067,
  maxLat: 30.416904,
  cosLat: 0.879812,
  scale: 75.971357,
  offX: 8,
  offY: 165.279166,
};

export const NEPAL_META: CityCountryMeta = {
  slug: "nepal",
  continent: "asia",
  svgPath: "/maps/countries/nepal.svg",
  countryJa: "ネパール",
  countryEn: "Nepal",
};
