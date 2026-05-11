/** Top 20 French metropolitan cities. Population in thousands. */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const FRANCE_CITIES: CityEntry[] = [
  { id: "paris",          nameJa: "パリ",             nameEn: "Paris",          lat: 48.8566, lng:  2.3522, pop: 2150 },
  { id: "marseille",      nameJa: "マルセイユ",       nameEn: "Marseille",      lat: 43.2965, lng:  5.3698, pop: 870 },
  { id: "lyon",           nameJa: "リヨン",           nameEn: "Lyon",           lat: 45.7640, lng:  4.8357, pop: 520 },
  { id: "toulouse",       nameJa: "トゥールーズ",     nameEn: "Toulouse",       lat: 43.6047, lng:  1.4442, pop: 490 },
  { id: "nice",           nameJa: "ニース",           nameEn: "Nice",           lat: 43.7102, lng:  7.2620, pop: 340 },
  { id: "nantes",         nameJa: "ナント",           nameEn: "Nantes",         lat: 47.2184, lng: -1.5536, pop: 320 },
  { id: "strasbourg",     nameJa: "ストラスブール",   nameEn: "Strasbourg",     lat: 48.5734, lng:  7.7521, pop: 290 },
  { id: "montpellier",    nameJa: "モンペリエ",       nameEn: "Montpellier",    lat: 43.6108, lng:  3.8767, pop: 295 },
  { id: "bordeaux",       nameJa: "ボルドー",         nameEn: "Bordeaux",       lat: 44.8378, lng: -0.5792, pop: 260 },
  { id: "lille",          nameJa: "リール",           nameEn: "Lille",          lat: 50.6292, lng:  3.0573, pop: 235 },
  { id: "rennes",         nameJa: "レンヌ",           nameEn: "Rennes",         lat: 48.1173, lng: -1.6778, pop: 220 },
  { id: "reims",          nameJa: "ランス",           nameEn: "Reims",          lat: 49.2583, lng:  4.0317, pop: 180 },
  { id: "le-havre",       nameJa: "ル・アーヴル",     nameEn: "Le Havre",       lat: 49.4944, lng:  0.1079, pop: 165 },
  { id: "saint-etienne",  nameJa: "サン・テティエンヌ", nameEn: "Saint-Étienne",lat: 45.4397, lng:  4.3872, pop: 170 },
  { id: "toulon",         nameJa: "トゥーロン",       nameEn: "Toulon",         lat: 43.1242, lng:  5.9280, pop: 175 },
  { id: "grenoble",       nameJa: "グルノーブル",     nameEn: "Grenoble",       lat: 45.1885, lng:  5.7245, pop: 158 },
  { id: "dijon",          nameJa: "ディジョン",       nameEn: "Dijon",          lat: 47.3220, lng:  5.0415, pop: 156 },
  { id: "angers",         nameJa: "アンジェ",         nameEn: "Angers",         lat: 47.4784, lng: -0.5632, pop: 155 },
  { id: "nimes",          nameJa: "ニーム",           nameEn: "Nîmes",          lat: 43.8367, lng:  4.3601, pop: 150 },
  { id: "clermont-ferrand", nameJa: "クレルモン・フェラン", nameEn: "Clermont-Ferrand", lat: 45.7772, lng: 3.0870, pop: 147 },
];

export const FRANCE_PROJECTION: CityProjection = {
  minLon: -5.14026,
  minLat: 41.36484,
  maxLon: 9.55996,
  maxLat: 51.089,
  cosLat: 0.691804,
  scale: 53.492391,
  offX: 8,
  offY: 59.915718,
};

export const FRANCE_META: CityCountryMeta = {
  slug: "france",
  continent: "europe",
  svgPath: "/maps/countries/france.svg",
  countryJa: "フランス",
  countryEn: "France",
};
