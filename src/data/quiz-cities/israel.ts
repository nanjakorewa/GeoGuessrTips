/** Top ~25 Israeli cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const ISRAEL_CITIES: CityEntry[] = [
  { id: "jerusalem",     nameJa: "エルサレム",         nameEn: "Jerusalem",       lat: 31.7683, lng: 35.2137, pop: 944 },
  { id: "tel-aviv",      nameJa: "テルアビブ",         nameEn: "Tel Aviv",        lat: 32.0853, lng: 34.7818, pop: 460 },
  { id: "haifa",         nameJa: "ハイファ",           nameEn: "Haifa",           lat: 32.7940, lng: 34.9896, pop: 285 },
  { id: "rishon-lezion", nameJa: "リション・レツィヨン", nameEn: "Rishon LeZion", lat: 31.9714, lng: 34.7894, pop: 256 },
  { id: "petah-tikva",   nameJa: "ペタフ・ティクヴァ", nameEn: "Petah Tikva",     lat: 32.0878, lng: 34.8878, pop: 248 },
  { id: "ashdod",        nameJa: "アシュドッド",       nameEn: "Ashdod",          lat: 31.8044, lng: 34.6553, pop: 225 },
  { id: "netanya",       nameJa: "ネタニヤ",           nameEn: "Netanya",         lat: 32.3328, lng: 34.8600, pop: 234 },
  { id: "beer-sheva",    nameJa: "ベエルシェバ",       nameEn: "Beersheba",       lat: 31.2518, lng: 34.7913, pop: 213 },
  { id: "bnei-brak",     nameJa: "ブネイ・ブラク",     nameEn: "Bnei Brak",       lat: 32.0833, lng: 34.8333, pop: 213 },
  { id: "holon",         nameJa: "ホロン",             nameEn: "Holon",           lat: 32.0114, lng: 34.7722, pop: 196 },
  { id: "ramat-gan",     nameJa: "ラマト・ガン",       nameEn: "Ramat Gan",       lat: 32.0833, lng: 34.8167, pop: 162 },
  { id: "ashkelon",      nameJa: "アシュケロン",       nameEn: "Ashkelon",        lat: 31.6688, lng: 34.5742, pop: 153 },
  { id: "rehovot",       nameJa: "レホヴォト",         nameEn: "Rehovot",         lat: 31.8961, lng: 34.8047, pop: 153 },
  { id: "bat-yam",       nameJa: "バト・ヤム",         nameEn: "Bat Yam",         lat: 32.0231, lng: 34.7503, pop: 130 },
  { id: "kfar-saba",     nameJa: "クファル・サバ",     nameEn: "Kfar Saba",       lat: 32.1750, lng: 34.9075, pop: 105 },
  { id: "herzliya",      nameJa: "ヘルツリーヤ",       nameEn: "Herzliya",        lat: 32.1660, lng: 34.8438, pop: 100 },
  { id: "modiin",        nameJa: "モディイン",         nameEn: "Modi'in",         lat: 31.8928, lng: 35.0072, pop: 96 },
  { id: "raanana",       nameJa: "ラアナナ",           nameEn: "Ra'anana",        lat: 32.1836, lng: 34.8703, pop: 78 },
  { id: "lod",           nameJa: "ロッド",             nameEn: "Lod",             lat: 31.9467, lng: 34.8903, pop: 80 },
  { id: "ramla",         nameJa: "ラムラ",             nameEn: "Ramla",           lat: 31.9272, lng: 34.8722, pop: 80 },
  { id: "nahariya",      nameJa: "ナハリヤ",           nameEn: "Nahariya",        lat: 33.0094, lng: 35.0972, pop: 60 },
  { id: "givatayim",     nameJa: "ギヴァタイム",       nameEn: "Givatayim",       lat: 32.0719, lng: 34.8092, pop: 60 },
  { id: "hadera",        nameJa: "ハデラ",             nameEn: "Hadera",          lat: 32.4365, lng: 34.9196, pop: 102 },
  { id: "nazareth",      nameJa: "ナザレ",             nameEn: "Nazareth",        lat: 32.7022, lng: 35.2978, pop: 78 },
  { id: "eilat",         nameJa: "エイラット",         nameEn: "Eilat",           lat: 29.5577, lng: 34.9519, pop: 52 },
];

export const ISRAEL_PROJECTION: CityProjection = {
  minLon: 34.248351,
  minLat: 29.489691,
  maxLon: 35.888073,
  maxLat: 33.406722,
  cosLat: 0.853112,
  scale: 159.30433,
  offX: 168.577235,
  offY: 8,
};

export const ISRAEL_META: CityCountryMeta = {
  slug: "israel",
  continent: "middle_east",
  svgPath: "/maps/countries/israel.svg",
  countryJa: "イスラエル",
  countryEn: "Israel",
};
