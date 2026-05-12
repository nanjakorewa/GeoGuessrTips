/** Top ~30 Thai cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const THAILAND_CITIES: CityEntry[] = [
  { id: "bangkok",       nameJa: "バンコク",           nameEn: "Bangkok",         lat: 13.7563, lng: 100.5018, pop: 8281 },
  { id: "samut-prakan",  nameJa: "サムットプラーカーン", nameEn: "Samut Prakan", lat: 13.5990, lng: 100.5998, pop: 388 },
  { id: "nonthaburi",    nameJa: "ノンタブリー",       nameEn: "Nonthaburi",      lat: 13.8622, lng: 100.5145, pop: 257 },
  { id: "udon-thani",    nameJa: "ウドーンターニー",   nameEn: "Udon Thani",      lat: 17.4138, lng: 102.7878, pop: 247 },
  { id: "chon-buri",     nameJa: "チョンブリー",       nameEn: "Chon Buri",       lat: 13.3611, lng: 100.9847, pop: 219 },
  { id: "nakhon-ratchasima", nameJa: "ナコーンラーチャシーマー", nameEn: "Nakhon Ratchasima", lat: 14.9799, lng: 102.0978, pop: 174 },
  { id: "chiang-mai",    nameJa: "チエンマイ",         nameEn: "Chiang Mai",      lat: 18.7883, lng:  98.9853, pop: 1175 },
  { id: "hat-yai",       nameJa: "ハジャイ",           nameEn: "Hat Yai",         lat:  7.0086, lng: 100.4747, pop: 156 },
  { id: "pak-kret",      nameJa: "パークレット",       nameEn: "Pak Kret",        lat: 13.9136, lng: 100.4978, pop: 195 },
  { id: "si-racha",      nameJa: "シーラーチャー",     nameEn: "Si Racha",        lat: 13.1740, lng: 100.9285, pop: 81 },
  { id: "phuket",        nameJa: "プーケット",         nameEn: "Phuket",          lat:  7.8804, lng:  98.3923, pop: 79 },
  { id: "khon-kaen",     nameJa: "コーンケン",         nameEn: "Khon Kaen",       lat: 16.4419, lng: 102.8360, pop: 116 },
  { id: "nakhon-si-thammarat", nameJa: "ナコーンシータンマラート", nameEn: "Nakhon Si Thammarat", lat: 8.4304, lng: 99.9631, pop: 105 },
  { id: "rayong",        nameJa: "ラヨーン",           nameEn: "Rayong",          lat: 12.6803, lng: 101.2585, pop: 102 },
  { id: "ubon-ratchathani", nameJa: "ウボンラーチャターニー", nameEn: "Ubon Ratchathani", lat: 15.2448, lng: 104.8473, pop: 99 },
  { id: "surat-thani",   nameJa: "スラートターニー",   nameEn: "Surat Thani",     lat:  9.1382, lng:  99.3217, pop: 130 },
  { id: "pattaya",       nameJa: "パッタヤー",         nameEn: "Pattaya",         lat: 12.9236, lng: 100.8825, pop: 119 },
  { id: "nakhon-sawan",  nameJa: "ナコーンサワン",     nameEn: "Nakhon Sawan",    lat: 15.7047, lng: 100.1372, pop: 87 },
  { id: "songkhla",      nameJa: "ソンクラー",         nameEn: "Songkhla",        lat:  7.1898, lng: 100.5954, pop: 165 },
  { id: "buriram",       nameJa: "ブリーラム",         nameEn: "Buriram",         lat: 14.9930, lng: 103.1029, pop: 47 },
  { id: "phitsanulok",   nameJa: "ピサヌローク",       nameEn: "Phitsanulok",     lat: 16.8211, lng: 100.2659, pop: 71 },
  { id: "lampang",       nameJa: "ランパーン",         nameEn: "Lampang",         lat: 18.2783, lng:  99.4877, pop: 53 },
  { id: "yala",          nameJa: "ヤラー",             nameEn: "Yala",            lat:  6.5413, lng: 101.2806, pop: 62 },
  { id: "samut-sakhon",  nameJa: "サムットサーコーン", nameEn: "Samut Sakhon",    lat: 13.5475, lng: 100.2750, pop: 70 },
  { id: "chachoengsao",  nameJa: "チャチューンサオ",   nameEn: "Chachoengsao",    lat: 13.6904, lng: 101.0779, pop: 50 },
  { id: "trang",         nameJa: "トラン",             nameEn: "Trang",           lat:  7.5645, lng:  99.6239, pop: 60 },
  { id: "lopburi",       nameJa: "ロップブリー",       nameEn: "Lopburi",         lat: 14.7997, lng: 100.6534, pop: 60 },
  { id: "sakon-nakhon",  nameJa: "サコンナコーン",     nameEn: "Sakon Nakhon",    lat: 17.1611, lng: 104.1486, pop: 55 },
  { id: "krabi",         nameJa: "クラビー",           nameEn: "Krabi",           lat:  8.0863, lng:  98.9063, pop: 33 },
  { id: "chiang-rai",    nameJa: "チエンラーイ",       nameEn: "Chiang Rai",      lat: 19.9105, lng:  99.8406, pop: 76 },
];

export const THAILAND_PROJECTION: CityProjection = {
  minLon: 97.351401,
  minLat: 5.62989,
  maxLon: 105.650998,
  maxLat: 20.445006,
  cosLat: 0.974223,
  scale: 42.119144,
  offX: 109.719528,
  offY: 8,
};

export const THAILAND_META: CityCountryMeta = {
  slug: "thailand",
  continent: "asia",
  svgPath: "/maps/countries/thailand.svg",
  countryJa: "タイ",
  countryEn: "Thailand",
};
