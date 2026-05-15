/** Top ~17 Puerto Rican cities/municipios ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const PUERTO_RICO_CITIES: CityEntry[] = [
  { id: "san-juan",     nameJa: "サンフアン",         nameEn: "San Juan",     lat: 18.4655, lng: -66.1057, pop: 343 },
  { id: "bayamon",      nameJa: "バヤモン",           nameEn: "Bayamón",      lat: 18.3989, lng: -66.1556, pop: 165 },
  { id: "carolina",     nameJa: "カロライナ",         nameEn: "Carolina",     lat: 18.3808, lng: -65.9572, pop: 145 },
  { id: "ponce",        nameJa: "ポンセ",             nameEn: "Ponce",        lat: 18.0111, lng: -66.6141, pop: 130 },
  { id: "caguas",       nameJa: "カグアス",           nameEn: "Caguas",       lat: 18.2342, lng: -66.0356, pop: 120 },
  { id: "guaynabo",     nameJa: "グアイナボ",         nameEn: "Guaynabo",     lat: 18.3578, lng: -66.1106, pop: 86 },
  { id: "arecibo",      nameJa: "アレシボ",           nameEn: "Arecibo",      lat: 18.4733, lng: -66.7156, pop: 85 },
  { id: "toa-baja",     nameJa: "トア・バハ",         nameEn: "Toa Baja",     lat: 18.4439, lng: -66.2597, pop: 73 },
  { id: "mayaguez",     nameJa: "マヤグエス",         nameEn: "Mayagüez",     lat: 18.2014, lng: -67.1397, pop: 70 },
  { id: "trujillo-alto", nameJa: "トルヒージョ・アルト", nameEn: "Trujillo Alto", lat: 18.3536, lng: -66.0058, pop: 65 },
  { id: "humacao",      nameJa: "ウマカオ",           nameEn: "Humacao",      lat: 18.1500, lng: -65.8278, pop: 52 },
  { id: "vega-baja",    nameJa: "ベガ・バハ",         nameEn: "Vega Baja",    lat: 18.4458, lng: -66.3878, pop: 50 },
  { id: "aguadilla",    nameJa: "アグアディーリャ",   nameEn: "Aguadilla",    lat: 18.4275, lng: -67.1542, pop: 50 },
  { id: "cayey",        nameJa: "カイエイ",           nameEn: "Cayey",        lat: 18.1119, lng: -66.1664, pop: 42 },
  { id: "manati",       nameJa: "マナティ",           nameEn: "Manatí",       lat: 18.4264, lng: -66.4886, pop: 38 },
  { id: "yauco",        nameJa: "ヤウコ",             nameEn: "Yauco",        lat: 18.0344, lng: -66.8497, pop: 33 },
  { id: "fajardo",      nameJa: "ファハルド",         nameEn: "Fajardo",      lat: 18.3258, lng: -65.6519, pop: 30 },
];

export const PUERTO_RICO_PROJECTION: CityProjection = {
  minLon: -67.937815,
  minLat: 17.922919,
  maxLon: -65.244618,
  maxLat: 18.522773,
  cosLat: 0.949847,
  scale: 212.655649,
  offX: 8,
  offY: 256.218829,
};

export const PUERTO_RICO_META: CityCountryMeta = {
  slug: "puerto-rico",
  continent: "n_america",
  svgPath: "/maps/countries/puerto-rico.svg",
  countryJa: "プエルトリコ",
  countryEn: "Puerto Rico",
};
