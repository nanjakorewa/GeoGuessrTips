/** Top ~30 Paraguayan cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const PARAGUAY_CITIES: CityEntry[] = [
  { id: "asuncion",            nameJa: "アスンシオン",           nameEn: "Asunción",            lat: -25.2637, lng: -57.5759, pop: 520 },
  { id: "ciudad-del-este",     nameJa: "シウダー・デル・エステ", nameEn: "Ciudad del Este",     lat: -25.5097, lng: -54.6111, pop: 310 },
  { id: "luque",               nameJa: "ルケ",                   nameEn: "Luque",               lat: -25.2697, lng: -57.4869, pop: 270 },
  { id: "san-lorenzo",         nameJa: "サン・ロレンソ",         nameEn: "San Lorenzo",         lat: -25.3397, lng: -57.5089, pop: 252 },
  { id: "capiata",             nameJa: "カピアタ",               nameEn: "Capiatá",             lat: -25.3553, lng: -57.4456, pop: 230 },
  { id: "fernando-de-la-mora", nameJa: "フェルナンド・デ・ラ・モラ", nameEn: "Fernando de la Mora", lat: -25.3217, lng: -57.5394, pop: 175 },
  { id: "lambare",             nameJa: "ランバレ",               nameEn: "Lambaré",             lat: -25.3458, lng: -57.6044, pop: 170 },
  { id: "limpio",              nameJa: "リンピオ",               nameEn: "Limpio",              lat: -25.1697, lng: -57.4953, pop: 130 },
  { id: "encarnacion",         nameJa: "エンカルナシオン",       nameEn: "Encarnación",         lat: -27.3306, lng: -55.8667, pop: 130 },
  { id: "nemby",               nameJa: "ニェンビ",               nameEn: "Ñemby",               lat: -25.3953, lng: -57.5375, pop: 125 },
  { id: "pedro-juan-caballero", nameJa: "ペドロ・フアン・カバジェロ", nameEn: "Pedro Juan Caballero", lat: -22.5469, lng: -55.7331, pop: 115 },
  { id: "caaguazu",            nameJa: "カアグアス",             nameEn: "Caaguazú",            lat: -25.4667, lng: -56.0167, pop: 110 },
  { id: "mariano-roque-alonso", nameJa: "マリアノ・ロケ・アロンソ", nameEn: "Mariano Roque Alonso", lat: -25.2000, lng: -57.5333, pop: 100 },
  { id: "presidente-franco",   nameJa: "プレシデンテ・フランコ", nameEn: "Presidente Franco",   lat: -25.5667, lng: -54.6167, pop: 100 },
  { id: "itaugua",             nameJa: "イタウグア",             nameEn: "Itauguá",             lat: -25.3939, lng: -57.3633, pop: 90 },
  { id: "coronel-oviedo",      nameJa: "コロネル・オビエド",     nameEn: "Coronel Oviedo",      lat: -25.4500, lng: -56.4333, pop: 90 },
  { id: "concepcion",          nameJa: "コンセプシオン",         nameEn: "Concepción",          lat: -23.4064, lng: -57.4344, pop: 80 },
  { id: "villa-elisa",         nameJa: "ビジャ・エリサ",         nameEn: "Villa Elisa",         lat: -25.3614, lng: -57.5972, pop: 80 },
  { id: "hernandarias",        nameJa: "エルナンダリアス",       nameEn: "Hernandarias",        lat: -25.4083, lng: -54.6383, pop: 75 },
  { id: "villarrica",          nameJa: "ビジャリカ",             nameEn: "Villarrica",          lat: -25.7811, lng: -56.4439, pop: 70 },
  { id: "aregua",              nameJa: "アレグア",               nameEn: "Areguá",              lat: -25.3083, lng: -57.3936, pop: 70 },
  { id: "san-antonio",         nameJa: "サン・アントニオ",       nameEn: "San Antonio",         lat: -25.4083, lng: -57.5567, pop: 65 },
  { id: "caacupe",             nameJa: "カアクペ",               nameEn: "Caacupé",             lat: -25.3856, lng: -57.1408, pop: 60 },
  { id: "san-estanislao",      nameJa: "サン・エスタニスラオ",   nameEn: "San Estanislao",      lat: -24.6500, lng: -56.4333, pop: 50 },
  { id: "pilar",               nameJa: "ピラル",                 nameEn: "Pilar",               lat: -26.8597, lng: -58.3019, pop: 35 },
  { id: "ypacarai",            nameJa: "イパカライ",             nameEn: "Ypacaraí",            lat: -25.3958, lng: -57.2900, pop: 30 },
];

export const PARAGUAY_PROJECTION: CityProjection = {
  minLon: -62.650357,
  minLat: -27.586842,
  maxLon: -54.245289,
  maxLat: -19.286729,
  cosLat: 0.917499,
  scale: 70.542663,
  offX: 8,
  offY: 27.243961,
};

export const PARAGUAY_META: CityCountryMeta = {
  slug: "paraguay",
  continent: "cs_america",
  svgPath: "/maps/countries/paraguay.svg",
  countryJa: "パラグアイ",
  countryEn: "Paraguay",
};
