/** Top ~30 Omani cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const OMAN_CITIES: CityEntry[] = [
  { id: "muscat",          nameJa: "マスカット",           nameEn: "Muscat",          lat: 23.5859, lng: 58.4059, pop: 1560 },
  { id: "seeb",            nameJa: "シーブ",               nameEn: "Seeb",            lat: 23.6700, lng: 58.1892, pop: 470 },
  { id: "salalah",         nameJa: "サラーラ",             nameEn: "Salalah",         lat: 17.0151, lng: 54.0924, pop: 350 },
  { id: "bawshar",         nameJa: "バウシャル",           nameEn: "Bawshar",         lat: 23.5667, lng: 58.4000, pop: 270 },
  { id: "sohar",           nameJa: "ソハール",             nameEn: "Sohar",           lat: 24.3475, lng: 56.7300, pop: 220 },
  { id: "sur",             nameJa: "スール",               nameEn: "Sur",             lat: 22.5667, lng: 59.5289, pop: 120 },
  { id: "as-suwayq",       nameJa: "スワイク",             nameEn: "As-Suwayq",       lat: 23.8500, lng: 57.4333, pop: 110 },
  { id: "nizwa",           nameJa: "ニズワ",               nameEn: "Nizwa",           lat: 22.9333, lng: 57.5333, pop: 110 },
  { id: "barka",           nameJa: "バルカ",               nameEn: "Barka",           lat: 23.7081, lng: 57.8881, pop: 110 },
  { id: "ibri",            nameJa: "イブリー",             nameEn: "Ibri",            lat: 23.2257, lng: 56.5158, pop: 105 },
  { id: "rustaq",          nameJa: "ルスタック",           nameEn: "Rustaq",          lat: 23.3905, lng: 57.4239, pop: 92 },
  { id: "saham",           nameJa: "サハム",               nameEn: "Saham",           lat: 24.1722, lng: 56.8889, pop: 90 },
  { id: "buraimi",         nameJa: "ブライミ",             nameEn: "Al Buraimi",      lat: 24.2500, lng: 55.7833, pop: 80 },
  { id: "shinas",          nameJa: "シナース",             nameEn: "Shinas",          lat: 24.7458, lng: 56.4658, pop: 65 },
  { id: "bahla",           nameJa: "バフラ",               nameEn: "Bahla",           lat: 22.9667, lng: 57.3000, pop: 60 },
  { id: "al-mudaibi",      nameJa: "ムダイビ",             nameEn: "Al Mudaibi",      lat: 22.5667, lng: 58.1167, pop: 56 },
  { id: "qurayyat",        nameJa: "クライヤート",         nameEn: "Qurayyat",        lat: 23.2589, lng: 58.9089, pop: 50 },
  { id: "ibra",            nameJa: "イブラ",               nameEn: "Ibra",            lat: 22.6911, lng: 58.5328, pop: 50 },
  { id: "samail",          nameJa: "サマイル",             nameEn: "Samail",          lat: 23.3050, lng: 57.9700, pop: 50 },
  { id: "izki",            nameJa: "イズキ",               nameEn: "Izki",            lat: 22.9333, lng: 57.7667, pop: 40 },
  { id: "bidiyah",         nameJa: "ビディーヤ",           nameEn: "Bidiyah",         lat: 22.4500, lng: 58.8000, pop: 40 },
  { id: "adam",            nameJa: "アダム",               nameEn: "Adam",            lat: 22.3792, lng: 57.5278, pop: 35 },
  { id: "al-kamil",        nameJa: "カミル",               nameEn: "Al Kamil",        lat: 22.2333, lng: 59.2000, pop: 30 },
  { id: "sinaw",           nameJa: "シナウ",               nameEn: "Sinaw",           lat: 22.5683, lng: 58.0500, pop: 30 },
  { id: "khasab",          nameJa: "ハサブ",               nameEn: "Khasab",          lat: 26.1839, lng: 56.2486, pop: 30 },
  { id: "yanqul",          nameJa: "ヤンクル",             nameEn: "Yanqul",          lat: 23.5683, lng: 56.5447, pop: 25 },
  { id: "thumrait",        nameJa: "サムレート",           nameEn: "Thumrait",        lat: 17.6661, lng: 54.0247, pop: 23 },
  { id: "duqm",            nameJa: "ドゥクム",             nameEn: "Duqm",            lat: 19.6586, lng: 57.7036, pop: 20 },
  { id: "mahut",           nameJa: "マフート",             nameEn: "Mahut",           lat: 20.0822, lng: 58.6253, pop: 15 },
  { id: "haima",           nameJa: "ハイマ",               nameEn: "Haima",           lat: 19.9667, lng: 56.2750, pop: 10 },
];

export const OMAN_PROJECTION: CityProjection = {
  minLon: 51.978615,
  minLat: 16.642401,
  maxLon: 59.844574,
  maxLat: 26.385972,
  cosLat: 0.930327,
  scale: 64.042228,
  offX: 45.672291,
  offY: 8,
};

export const OMAN_META: CityCountryMeta = {
  slug: "oman",
  continent: "middle_east",
  svgPath: "/maps/countries/oman.svg",
  countryJa: "オマーン",
  countryEn: "Oman",
};
