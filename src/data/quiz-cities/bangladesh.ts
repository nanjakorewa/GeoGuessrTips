/** Top ~30 Bangladeshi cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const BANGLADESH_CITIES: CityEntry[] = [
  { id: "dhaka",         nameJa: "ダッカ",             nameEn: "Dhaka",           lat: 23.8103, lng: 90.4125, pop: 10356 },
  { id: "chittagong",    nameJa: "チッタゴン",         nameEn: "Chittagong",      lat: 22.3569, lng: 91.7832, pop: 3920 },
  { id: "khulna",        nameJa: "クルナ",             nameEn: "Khulna",          lat: 22.8456, lng: 89.5403, pop: 950 },
  { id: "rajshahi",      nameJa: "ラジシャヒ",         nameEn: "Rajshahi",        lat: 24.3636, lng: 88.6241, pop: 763 },
  { id: "sylhet",        nameJa: "シレット",           nameEn: "Sylhet",          lat: 24.8949, lng: 91.8687, pop: 537 },
  { id: "rangpur",       nameJa: "ラングプル",         nameEn: "Rangpur",         lat: 25.7439, lng: 89.2752, pop: 590 },
  { id: "comilla",       nameJa: "コミラ",             nameEn: "Comilla",         lat: 23.4607, lng: 91.1809, pop: 296 },
  { id: "barisal",       nameJa: "バリサル",           nameEn: "Barisal",         lat: 22.7010, lng: 90.3535, pop: 328 },
  { id: "narayanganj",   nameJa: "ナラヤンガンジ",     nameEn: "Narayanganj",     lat: 23.6238, lng: 90.5000, pop: 285 },
  { id: "gazipur",       nameJa: "ガジプール",         nameEn: "Gazipur",         lat: 24.0958, lng: 90.4125, pop: 994 },
  { id: "mymensingh",    nameJa: "ミメンシン",         nameEn: "Mymensingh",      lat: 24.7471, lng: 90.4203, pop: 471 },
  { id: "saidpur",       nameJa: "サイドプル",         nameEn: "Saidpur",         lat: 25.7781, lng: 88.8939, pop: 130 },
  { id: "tangail",       nameJa: "タンガイル",         nameEn: "Tangail",         lat: 24.2513, lng: 89.9167, pop: 161 },
  { id: "jessore",       nameJa: "ジェソール",         nameEn: "Jessore",         lat: 23.1697, lng: 89.2128, pop: 257 },
  { id: "bogra",         nameJa: "ボグラ",             nameEn: "Bogra",           lat: 24.8485, lng: 89.3700, pop: 350 },
  { id: "dinajpur",      nameJa: "ディナジプール",     nameEn: "Dinajpur",        lat: 25.6217, lng: 88.6354, pop: 187 },
  { id: "pabna",         nameJa: "パブナ",             nameEn: "Pabna",           lat: 24.0064, lng: 89.2372, pop: 138 },
  { id: "kushtia",       nameJa: "クシュティア",       nameEn: "Kushtia",         lat: 23.9088, lng: 89.1220, pop: 235 },
  { id: "nawabganj",     nameJa: "ナワブガンジ",       nameEn: "Chapainawabganj", lat: 24.5965, lng: 88.2775, pop: 165 },
  { id: "naogaon",       nameJa: "ナオガオン",         nameEn: "Naogaon",         lat: 24.8088, lng: 88.9434, pop: 153 },
  { id: "feni",          nameJa: "フェニ",             nameEn: "Feni",            lat: 23.0159, lng: 91.3976, pop: 152 },
  { id: "noakhali",      nameJa: "ノアカリ",           nameEn: "Noakhali",        lat: 22.8333, lng: 91.1000, pop: 110 },
  { id: "brahmanbaria",  nameJa: "ブラフマンバリア",   nameEn: "Brahmanbaria",    lat: 23.9571, lng: 91.1115, pop: 142 },
  { id: "jamalpur",      nameJa: "ジャマルプール",     nameEn: "Jamalpur",        lat: 24.9277, lng: 89.9436, pop: 167 },
  { id: "sirajganj",     nameJa: "シラジガンジ",       nameEn: "Sirajganj",       lat: 24.4534, lng: 89.7000, pop: 161 },
  { id: "tongi",         nameJa: "トンギ",             nameEn: "Tongi",           lat: 23.8908, lng: 90.4023, pop: 470 },
  { id: "savar",         nameJa: "サバル",             nameEn: "Savar",           lat: 23.8583, lng: 90.2667, pop: 297 },
  { id: "cox-bazar",     nameJa: "コックスバザール",   nameEn: "Cox's Bazar",     lat: 21.4272, lng: 92.0058, pop: 167 },
  { id: "ishwardi",      nameJa: "イシュワルディ",     nameEn: "Ishwardi",        lat: 24.1333, lng: 89.0667, pop: 76 },
  { id: "satkhira",      nameJa: "サトキラ",           nameEn: "Satkhira",        lat: 22.7167, lng: 89.0833, pop: 122 },
];

export const BANGLADESH_PROJECTION: CityProjection = {
  minLon: 88.02179,
  minLat: 20.738715,
  maxLon: 92.642851,
  maxLat: 26.623544,
  cosLat: 0.915795,
  scale: 106.035367,
  offX: 55.632122,
  offY: 8,
};

export const BANGLADESH_META: CityCountryMeta = {
  slug: "bangladesh",
  continent: "asia",
  svgPath: "/maps/countries/bangladesh.svg",
  countryJa: "バングラデシュ",
  countryEn: "Bangladesh",
};
