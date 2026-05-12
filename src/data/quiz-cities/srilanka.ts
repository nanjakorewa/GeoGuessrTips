/** Top ~25 Sri Lankan cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const SRILANKA_CITIES: CityEntry[] = [
  { id: "colombo",       nameJa: "コロンボ",           nameEn: "Colombo",         lat:  6.9271, lng: 79.8612, pop: 753 },
  { id: "dehiwala",      nameJa: "デヒワラ",           nameEn: "Dehiwala-Mt. Lavinia", lat: 6.8389, lng: 79.8653, pop: 220 },
  { id: "moratuwa",      nameJa: "モラトゥワ",         nameEn: "Moratuwa",        lat:  6.7730, lng: 79.8816, pop: 168 },
  { id: "negombo",       nameJa: "ネゴンボ",           nameEn: "Negombo",         lat:  7.2083, lng: 79.8358, pop: 142 },
  { id: "kandy",         nameJa: "キャンディ",         nameEn: "Kandy",           lat:  7.2906, lng: 80.6337, pop: 125 },
  { id: "sri-jayawardenepura", nameJa: "スリ・ジャヤワルダナプラ・コッテ", nameEn: "Sri Jayawardenepura Kotte", lat: 6.8881, lng: 79.9181, pop: 116 },
  { id: "kalmunai",      nameJa: "カルムナイ",         nameEn: "Kalmunai",        lat:  7.4097, lng: 81.8358, pop: 100 },
  { id: "trincomalee",   nameJa: "トリンコマリー",     nameEn: "Trincomalee",     lat:  8.5874, lng: 81.2152, pop: 99 },
  { id: "galle",         nameJa: "ゴール",             nameEn: "Galle",           lat:  6.0535, lng: 80.2210, pop: 87 },
  { id: "jaffna",        nameJa: "ジャフナ",           nameEn: "Jaffna",          lat:  9.6615, lng: 80.0255, pop: 88 },
  { id: "anuradhapura",  nameJa: "アヌラーダプラ",     nameEn: "Anuradhapura",    lat:  8.3114, lng: 80.4037, pop: 63 },
  { id: "matara",        nameJa: "マータラ",           nameEn: "Matara",          lat:  5.9485, lng: 80.5353, pop: 76 },
  { id: "ratnapura",     nameJa: "ラトナプラ",         nameEn: "Ratnapura",       lat:  6.6828, lng: 80.4036, pop: 47 },
  { id: "batticaloa",    nameJa: "バッティカロア",     nameEn: "Batticaloa",      lat:  7.7102, lng: 81.6924, pop: 87 },
  { id: "kurunegala",    nameJa: "クルネーガラ",       nameEn: "Kurunegala",      lat:  7.4863, lng: 80.3647, pop: 27 },
  { id: "badulla",       nameJa: "バドゥッラ",         nameEn: "Badulla",         lat:  6.9934, lng: 81.0550, pop: 47 },
  { id: "nuwara-eliya",  nameJa: "ヌワラ・エリヤ",     nameEn: "Nuwara Eliya",    lat:  6.9497, lng: 80.7891, pop: 28 },
  { id: "vavuniya",      nameJa: "ヴァヴニヤ",         nameEn: "Vavuniya",        lat:  8.7542, lng: 80.4982, pop: 33 },
  { id: "puttalam",      nameJa: "プッタラム",         nameEn: "Puttalam",        lat:  8.0408, lng: 79.8281, pop: 45 },
  { id: "ampara",        nameJa: "アンパーラ",         nameEn: "Ampara",          lat:  7.2911, lng: 81.6747, pop: 35 },
  { id: "matale",        nameJa: "マータレー",         nameEn: "Matale",          lat:  7.4675, lng: 80.6234, pop: 39 },
  { id: "mannar",        nameJa: "マンナール",         nameEn: "Mannar",          lat:  8.9778, lng: 79.9094, pop: 16 },
  { id: "polonnaruwa",   nameJa: "ポロンナルワ",       nameEn: "Polonnaruwa",     lat:  7.9403, lng: 81.0188, pop: 14 },
  { id: "hambantota",    nameJa: "ハンバントタ",       nameEn: "Hambantota",      lat:  6.1248, lng: 81.1185, pop: 12 },
  { id: "kilinochchi",   nameJa: "キリノッチ",         nameEn: "Kilinochchi",     lat:  9.4017, lng: 80.4006, pop: 12 },
];

export const SRILANKA_PROJECTION: CityProjection = {
  minLon: 79.655772,
  minLat: 5.923733,
  maxLon: 81.89031,
  maxLat: 9.829576,
  cosLat: 0.990565,
  scale: 159.760646,
  offX: 103.188421,
  offY: 8,
};

export const SRILANKA_META: CityCountryMeta = {
  slug: "srilanka",
  continent: "asia",
  svgPath: "/maps/countries/srilanka.svg",
  countryJa: "スリランカ",
  countryEn: "Sri Lanka",
};
