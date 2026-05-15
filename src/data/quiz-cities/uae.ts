/** Top ~25 UAE cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const UAE_CITIES: CityEntry[] = [
  { id: "dubai",          nameJa: "ドバイ",             nameEn: "Dubai",          lat: 25.2048, lng: 55.2708, pop: 3600 },
  { id: "sharjah",        nameJa: "シャールジャ",       nameEn: "Sharjah",        lat: 25.3463, lng: 55.4209, pop: 1700 },
  { id: "abu-dhabi",      nameJa: "アブダビ",           nameEn: "Abu Dhabi",      lat: 24.4539, lng: 54.3773, pop: 1480 },
  { id: "al-ain",         nameJa: "アル・アイン",       nameEn: "Al Ain",         lat: 24.2075, lng: 55.7447, pop: 770 },
  { id: "ajman",          nameJa: "アジュマーン",       nameEn: "Ajman",          lat: 25.4111, lng: 55.4354, pop: 540 },
  { id: "ras-al-khaimah", nameJa: "ラアス・アル＝ハイマ", nameEn: "Ras al-Khaimah", lat: 25.7895, lng: 55.9432, pop: 350 },
  { id: "fujairah",       nameJa: "フジャイラ",         nameEn: "Fujairah",       lat: 25.1288, lng: 56.3265, pop: 230 },
  { id: "mussafah",       nameJa: "ムサッファ",         nameEn: "Mussafah",       lat: 24.3603, lng: 54.5050, pop: 200 },
  { id: "khalifa-city",   nameJa: "ハリーファ・シティ", nameEn: "Khalifa City",   lat: 24.4250, lng: 54.5717, pop: 120 },
  { id: "jebel-ali",      nameJa: "ジェベル・アリ",     nameEn: "Jebel Ali",      lat: 24.9858, lng: 55.0928, pop: 100 },
  { id: "umm-al-quwain",  nameJa: "ウンム・アル＝カイワイン", nameEn: "Umm al-Quwain", lat: 25.5647, lng: 55.5552, pop: 75 },
  { id: "kalba",          nameJa: "カルバ",             nameEn: "Kalba",          lat: 25.0700, lng: 56.3500, pop: 55 },
  { id: "khor-fakkan",    nameJa: "ホール・ファッカン", nameEn: "Khor Fakkan",    lat: 25.3392, lng: 56.3597, pop: 50 },
  { id: "madinat-zayed",  nameJa: "マディーナト・ザーイド", nameEn: "Madinat Zayed", lat: 23.6553, lng: 53.7050, pop: 45 },
  { id: "dibba-al-fujairah", nameJa: "ディッバ・アル・フジャイラ", nameEn: "Dibba Al-Fujairah", lat: 25.5919, lng: 56.2614, pop: 42 },
  { id: "dibba-al-hisn",  nameJa: "ディッバ・アル・ヒスン", nameEn: "Dibba Al-Hisn", lat: 25.6189, lng: 56.2725, pop: 30 },
  { id: "ruwais",         nameJa: "ルワイス",           nameEn: "Ruwais",         lat: 24.0833, lng: 52.7333, pop: 25 },
  { id: "liwa-oasis",     nameJa: "リワ・オアシス",     nameEn: "Liwa Oasis",     lat: 23.1333, lng: 53.7833, pop: 20 },
  { id: "ar-rams",        nameJa: "ラムス",             nameEn: "Ar-Rams",        lat: 25.8767, lng: 56.0506, pop: 15 },
  { id: "al-jazirah-al-hamra", nameJa: "アル・ジャジーラ・アル・ハムラ", nameEn: "Al Jazirah Al Hamra", lat: 25.6961, lng: 55.7833, pop: 14 },
  { id: "hatta",          nameJa: "ハッタ",             nameEn: "Hatta",          lat: 24.8000, lng: 56.1167, pop: 12 },
  { id: "ghayathi",       nameJa: "ガヤーシー",         nameEn: "Ghayathi",       lat: 23.8350, lng: 52.8147, pop: 12 },
  { id: "al-madam",       nameJa: "マダム",             nameEn: "Al Madam",       lat: 24.9667, lng: 55.7833, pop: 10 },
  { id: "al-awir",        nameJa: "アル・アウィル",     nameEn: "Al Awir",        lat: 25.1833, lng: 55.5500, pop: 8 },
  { id: "masfut",         nameJa: "マスフート",         nameEn: "Masfut",         lat: 24.7833, lng: 56.0167, pop: 7 },
];

export const UAE_PROJECTION: CityProjection = {
  minLon: 51.569347,
  minLat: 22.620946,
  maxLon: 56.383637,
  maxLat: 26.074792,
  cosLat: 0.911059,
  scale: 124.028096,
  offX: 8,
  offY: 105.813028,
};

export const UAE_META: CityCountryMeta = {
  slug: "uae",
  continent: "middle_east",
  svgPath: "/maps/countries/uae.svg",
  countryJa: "アラブ首長国連邦",
  countryEn: "United Arab Emirates",
};
