/** Top ~25 Panamanian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const PANAMA_CITIES: CityEntry[] = [
  { id: "panama-city",   nameJa: "パナマシティ",       nameEn: "Panama City",    lat:  8.9824, lng: -79.5199, pop: 880 },
  { id: "san-miguelito", nameJa: "サン・ミゲリート",   nameEn: "San Miguelito",  lat:  9.0333, lng: -79.5000, pop: 320 },
  { id: "tocumen",       nameJa: "トクメン",           nameEn: "Tocumen",        lat:  9.0883, lng: -79.3814, pop: 110 },
  { id: "las-cumbres",   nameJa: "ラス・クンブレス",   nameEn: "Las Cumbres",    lat:  9.0975, lng: -79.5331, pop: 76 },
  { id: "david",         nameJa: "ダビド",             nameEn: "David",          lat:  8.4333, lng: -82.4333, pop: 145 },
  { id: "arraijan",      nameJa: "アラハン",           nameEn: "Arraiján",       lat:  8.9519, lng: -79.6661, pop: 280 },
  { id: "la-chorrera",   nameJa: "ラ・チョレラ",       nameEn: "La Chorrera",    lat:  8.8800, lng: -79.7833, pop: 170 },
  { id: "colon",         nameJa: "コロン",             nameEn: "Colón",          lat:  9.3547, lng: -79.9000, pop: 230 },
  { id: "santiago",      nameJa: "サンティアゴ・デ・ベラグアス", nameEn: "Santiago de Veraguas", lat: 8.1014, lng: -80.9839, pop: 89 },
  { id: "chitre",        nameJa: "チトレ",             nameEn: "Chitré",         lat:  7.9667, lng: -80.4333, pop: 50 },
  { id: "penonome",      nameJa: "ペノノメ",           nameEn: "Penonomé",       lat:  8.5167, lng: -80.3500, pop: 24 },
  { id: "vista-alegre",  nameJa: "ビスタ・アレグレ",   nameEn: "Vista Alegre",   lat:  8.9189, lng: -79.7378, pop: 51 },
  { id: "changuinola",   nameJa: "チャングイノラ",     nameEn: "Changuinola",    lat:  9.4333, lng: -82.5167, pop: 36 },
  { id: "puerto-armuelles", nameJa: "プエルト・アルムエリェス", nameEn: "Puerto Armuelles", lat: 8.2833, lng: -82.8667, pop: 22 },
  { id: "aguadulce",     nameJa: "アグアドゥルセ",     nameEn: "Aguadulce",      lat:  8.2467, lng: -80.5469, pop: 22 },
  { id: "las-tablas",    nameJa: "ラス・タブラス",     nameEn: "Las Tablas",     lat:  7.7619, lng: -80.2811, pop: 9 },
  { id: "soná",          nameJa: "ソナ",               nameEn: "Soná",           lat:  8.0167, lng: -81.3167, pop: 8 },
  { id: "bocas-del-toro", nameJa: "ボカス・デル・トロ", nameEn: "Bocas del Toro", lat:  9.3333, lng: -82.2500, pop: 10 },
  { id: "yaviza",        nameJa: "ジャビサ",           nameEn: "Yaviza",         lat:  8.1500, lng: -77.6833, pop: 5 },
  { id: "el-porvenir",   nameJa: "エル・ポルベニル",   nameEn: "El Porvenir",    lat:  9.5500, lng: -78.9500, pop: 1 },
  { id: "boquete",       nameJa: "ボケテ",             nameEn: "Boquete",        lat:  8.7800, lng: -82.4350, pop: 7 },
  { id: "metetí",        nameJa: "メテティ",           nameEn: "Metetí",         lat:  8.2333, lng: -77.9833, pop: 5 },
  { id: "balboa",        nameJa: "バルボア",           nameEn: "Balboa",         lat:  8.9667, lng: -79.5667, pop: 3 },
  { id: "el-real",       nameJa: "エル・レアル",       nameEn: "El Real",        lat:  8.1167, lng: -77.7167, pop: 1 },
];

export const PANAMA_PROJECTION: CityProjection = {
  minLon: -83.053246,
  minLat: 7.205715,
  maxLon: -77.16327,
  maxLat: 9.629292,
  cosLat: 0.989228,
  scale: 93.36608,
  offX: 8,
  offY: 206.860058,
};

export const PANAMA_META: CityCountryMeta = {
  slug: "panama",
  continent: "n_america",
  svgPath: "/maps/countries/panama.svg",
  countryJa: "パナマ",
  countryEn: "Panama",
};
