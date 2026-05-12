/** Top ~25 Guatemalan cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const GUATEMALA_CITIES: CityEntry[] = [
  { id: "guatemala-city", nameJa: "グアテマラシティ",   nameEn: "Guatemala City", lat: 14.6349, lng: -90.5069, pop: 1006 },
  { id: "mixco",          nameJa: "ミシュコ",           nameEn: "Mixco",          lat: 14.6328, lng: -90.6064, pop: 465 },
  { id: "villa-nueva",    nameJa: "ビヤ・ヌエバ",       nameEn: "Villa Nueva",    lat: 14.5311, lng: -90.5872, pop: 619 },
  { id: "petapa",         nameJa: "ペタパ",             nameEn: "Petapa",         lat: 14.5022, lng: -90.5572, pop: 145 },
  { id: "san-juan-sacatepequez", nameJa: "サン・フアン・サカテペケス", nameEn: "San Juan Sacatepéquez", lat: 14.7186, lng: -90.6444, pop: 270 },
  { id: "quetzaltenango", nameJa: "ケツァルテナンゴ",   nameEn: "Quetzaltenango", lat: 14.8333, lng: -91.5167, pop: 180 },
  { id: "escuintla",      nameJa: "エスクィントラ",     nameEn: "Escuintla",      lat: 14.3050, lng: -90.7853, pop: 156 },
  { id: "villa-canales",  nameJa: "ビヤ・カナレス",     nameEn: "Villa Canales",  lat: 14.4814, lng: -90.5333, pop: 158 },
  { id: "chinautla",      nameJa: "チナウトラ",         nameEn: "Chinautla",      lat: 14.7019, lng: -90.4994, pop: 116 },
  { id: "puerto-barrios", nameJa: "プエルト・バリオス", nameEn: "Puerto Barrios", lat: 15.7281, lng: -88.5947, pop: 100 },
  { id: "chichicastenango", nameJa: "チチカステナンゴ", nameEn: "Chichicastenango", lat: 14.9358, lng: -91.1167, pop: 142 },
  { id: "huehuetenango",  nameJa: "ウェウェテナンゴ",   nameEn: "Huehuetenango",  lat: 15.3194, lng: -91.4716, pop: 142 },
  { id: "antigua",        nameJa: "アンティグア・グアテマラ", nameEn: "Antigua Guatemala", lat: 14.5586, lng: -90.7339, pop: 50 },
  { id: "amatitlan",      nameJa: "アマティトラン",     nameEn: "Amatitlán",      lat: 14.4781, lng: -90.6147, pop: 121 },
  { id: "chimaltenango",  nameJa: "チマルテナンゴ",     nameEn: "Chimaltenango",  lat: 14.6611, lng: -90.8189, pop: 117 },
  { id: "san-marcos",     nameJa: "サン・マルコス",     nameEn: "San Marcos",     lat: 14.9647, lng: -91.7942, pop: 60 },
  { id: "totonicapan",    nameJa: "トトニカパン",       nameEn: "Totonicapán",    lat: 14.9111, lng: -91.3611, pop: 138 },
  { id: "coban",          nameJa: "コバン",             nameEn: "Cobán",          lat: 15.4733, lng: -90.3711, pop: 154 },
  { id: "salama",         nameJa: "サラマ",             nameEn: "Salamá",         lat: 15.1031, lng: -90.3175, pop: 56 },
  { id: "santa-cruz-quiche", nameJa: "サンタ・クルス・デル・キチェ", nameEn: "Santa Cruz del Quiché", lat: 15.0306, lng: -91.1492, pop: 99 },
  { id: "mazatenango",    nameJa: "マサテナンゴ",       nameEn: "Mazatenango",    lat: 14.5333, lng: -91.5000, pop: 102 },
  { id: "retalhuleu",     nameJa: "レタルレウ",         nameEn: "Retalhuleu",     lat: 14.5333, lng: -91.6833, pop: 88 },
  { id: "solola",         nameJa: "ソロラ",             nameEn: "Sololá",         lat: 14.7714, lng: -91.1828, pop: 117 },
  { id: "jutiapa",        nameJa: "フティアパ",         nameEn: "Jutiapa",        lat: 14.2906, lng: -89.8956, pop: 80 },
  { id: "jalapa",         nameJa: "ハラパ",             nameEn: "Jalapa",         lat: 14.6333, lng: -89.9889, pop: 105 },
  { id: "flores",         nameJa: "フローレス",         nameEn: "Flores",         lat: 16.9269, lng: -89.8919, pop: 35 },
];

export const GUATEMALA_PROJECTION: CityProjection = {
  minLon: -92.246257,
  minLat: 13.731404,
  maxLon: -88.220937,
  maxLat: 17.81602,
  cosLat: 0.962343,
  scale: 140.43284,
  offX: 8,
  offY: 33.192887,
};

export const GUATEMALA_META: CityCountryMeta = {
  slug: "guatemala",
  continent: "n_america",
  svgPath: "/maps/countries/guatemala.svg",
  countryJa: "グアテマラ",
  countryEn: "Guatemala",
};
