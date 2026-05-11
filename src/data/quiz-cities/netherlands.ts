/**
 * Top 25 Dutch cities (https://ja.wikipedia.org/wiki/オランダの都市の一覧).
 * Coordinates from Wikidata.
 */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";
export { projectCity } from "./_types";

export const NETHERLANDS_CITIES: CityEntry[] = [
  { id: "amsterdam",       nameJa: "アムステルダム",     nameEn: "Amsterdam",        lat: 52.3702, lng: 4.8952 },
  { id: "rotterdam",       nameJa: "ロッテルダム",       nameEn: "Rotterdam",        lat: 51.9244, lng: 4.4777 },
  { id: "den-haag",        nameJa: "デン・ハーグ",       nameEn: "The Hague",        lat: 52.0705, lng: 4.3007 },
  { id: "utrecht",         nameJa: "ユトレヒト",         nameEn: "Utrecht",          lat: 52.0907, lng: 5.1214 },
  { id: "eindhoven",       nameJa: "アイントホーフェン", nameEn: "Eindhoven",        lat: 51.4416, lng: 5.4697 },
  { id: "groningen",       nameJa: "フローニンゲン",     nameEn: "Groningen",        lat: 53.2194, lng: 6.5665 },
  { id: "tilburg",         nameJa: "ティルブルフ",       nameEn: "Tilburg",          lat: 51.5555, lng: 5.0913 },
  { id: "almere",          nameJa: "アルメレ",           nameEn: "Almere",           lat: 52.3508, lng: 5.2647 },
  { id: "breda",           nameJa: "ブレダ",             nameEn: "Breda",            lat: 51.5719, lng: 4.7683 },
  { id: "nijmegen",        nameJa: "ナイメーヘン",       nameEn: "Nijmegen",         lat: 51.8126, lng: 5.8372 },
  { id: "apeldoorn",       nameJa: "アペルドールン",     nameEn: "Apeldoorn",        lat: 52.2112, lng: 5.9699 },
  { id: "haarlem",         nameJa: "ハールレム",         nameEn: "Haarlem",          lat: 52.3874, lng: 4.6462 },
  { id: "arnhem",          nameJa: "アーネム",           nameEn: "Arnhem",           lat: 51.9851, lng: 5.8987 },
  { id: "enschede",        nameJa: "エンスヘーデ",       nameEn: "Enschede",         lat: 52.2215, lng: 6.8937 },
  { id: "amersfoort",      nameJa: "アメルスフォールト", nameEn: "Amersfoort",       lat: 52.1561, lng: 5.3878 },
  { id: "zaanstad",        nameJa: "ザーンスタット",     nameEn: "Zaanstad",         lat: 52.4391, lng: 4.8295 },
  { id: "den-bosch",       nameJa: "デン・ボス",         nameEn: "'s-Hertogenbosch", lat: 51.6978, lng: 5.3037 },
  { id: "zwolle",          nameJa: "ズヴォレ",           nameEn: "Zwolle",           lat: 52.5168, lng: 6.0830 },
  { id: "leiden",          nameJa: "ライデン",           nameEn: "Leiden",           lat: 52.1601, lng: 4.4970 },
  { id: "maastricht",      nameJa: "マーストリヒト",     nameEn: "Maastricht",       lat: 50.8514, lng: 5.6910 },
  { id: "dordrecht",       nameJa: "ドルドレヒト",       nameEn: "Dordrecht",        lat: 51.8133, lng: 4.6907 },
  { id: "leeuwarden",      nameJa: "レーワルデン",       nameEn: "Leeuwarden",       lat: 53.2012, lng: 5.7999 },
  { id: "delft",           nameJa: "デルフト",           nameEn: "Delft",            lat: 52.0116, lng: 4.3571 },
  { id: "alkmaar",         nameJa: "アルクマール",       nameEn: "Alkmaar",          lat: 52.6324, lng: 4.7534 },
  { id: "venlo",           nameJa: "フェンロー",         nameEn: "Venlo",            lat: 51.3704, lng: 6.1724 },
];

export const NETHERLANDS_PROJECTION: CityProjection = {
  minLon: 3.349415,
  minLat: 50.747550,
  maxLon: 7.198506,
  maxLat: 53.558092,
  cosLat: 0.613557,
  scale: 222.021233,
  offX: 17.833045,
  offY: 8,
};

export const NETHERLANDS_META: CityCountryMeta = {
  slug: "netherlands",
  continent: "europe",
  svgPath: "/maps/countries/netherlands.svg",
  countryJa: "オランダ",
  countryEn: "Netherlands",
};
