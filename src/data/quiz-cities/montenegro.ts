/** Top ~15 Montenegrin cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const MONTENEGRO_CITIES: CityEntry[] = [
  { id: "podgorica",     nameJa: "ポドゴリツァ",       nameEn: "Podgorica",       lat: 42.4304, lng: 19.2594, pop: 175 },
  { id: "niksic",        nameJa: "ニクシッチ",         nameEn: "Nikšić",          lat: 42.7728, lng: 18.9442, pop: 56 },
  { id: "pljevlja",      nameJa: "プリェヴリャ",       nameEn: "Pljevlja",        lat: 43.3556, lng: 19.3589, pop: 24 },
  { id: "herceg-novi",   nameJa: "ヘルツェグ・ノヴィ", nameEn: "Herceg Novi",     lat: 42.4519, lng: 18.5375, pop: 19 },
  { id: "bar",           nameJa: "バール",             nameEn: "Bar",             lat: 42.0944, lng: 19.0944, pop: 18 },
  { id: "bijelo-polje",  nameJa: "ビイェロ・ポリェ",   nameEn: "Bijelo Polje",    lat: 43.0394, lng: 19.7475, pop: 16 },
  { id: "budva",         nameJa: "ブドヴァ",           nameEn: "Budva",           lat: 42.2911, lng: 18.8400, pop: 19 },
  { id: "cetinje",       nameJa: "ツェティニェ",       nameEn: "Cetinje",         lat: 42.3911, lng: 18.9239, pop: 14 },
  { id: "kotor",         nameJa: "コトル",             nameEn: "Kotor",           lat: 42.4247, lng: 18.7712, pop: 13 },
  { id: "ulcinj",        nameJa: "ウルツィニ",         nameEn: "Ulcinj",          lat: 41.9292, lng: 19.2156, pop: 11 },
  { id: "tivat",         nameJa: "ティヴァト",         nameEn: "Tivat",           lat: 42.4364, lng: 18.6964, pop: 10 },
  { id: "berane",        nameJa: "ベラネ",             nameEn: "Berane",          lat: 42.8417, lng: 19.8736, pop: 11 },
  { id: "rozaje",        nameJa: "ロジャイェ",         nameEn: "Rožaje",          lat: 42.8431, lng: 20.1672, pop: 9 },
  { id: "danilovgrad",   nameJa: "ダニロヴグラート",   nameEn: "Danilovgrad",     lat: 42.5511, lng: 19.1064, pop: 5 },
  { id: "mojkovac",      nameJa: "モイコヴァツ",       nameEn: "Mojkovac",        lat: 42.9608, lng: 19.5839, pop: 4 },
  { id: "plav",          nameJa: "プラヴ",             nameEn: "Plav",            lat: 42.5994, lng: 19.9408, pop: 3 },
];

export const MONTENEGRO_PROJECTION: CityProjection = {
  minLon: 18.433531,
  minLat: 41.852362,
  maxLon: 20.355171,
  maxLat: 43.547886,
  cosLat: 0.734913,
  scale: 368.027819,
  offX: 20.128479,
  offY: 8,
};

export const MONTENEGRO_META: CityCountryMeta = {
  slug: "montenegro",
  continent: "europe",
  svgPath: "/maps/countries/montenegro.svg",
  countryJa: "モンテネグロ",
  countryEn: "Montenegro",
};
