/** Top ~20 Albanian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const ALBANIA_CITIES: CityEntry[] = [
  { id: "tirana",        nameJa: "ティラナ",           nameEn: "Tiranë",          lat: 41.3275, lng: 19.8187, pop: 557 },
  { id: "durres",        nameJa: "ドゥラス",           nameEn: "Durrës",          lat: 41.3231, lng: 19.4554, pop: 175 },
  { id: "vlore",         nameJa: "ヴロラ",             nameEn: "Vlorë",           lat: 40.4686, lng: 19.4914, pop: 130 },
  { id: "shkoder",       nameJa: "シュコドラ",         nameEn: "Shkodër",         lat: 42.0683, lng: 19.5126, pop: 113 },
  { id: "fier",          nameJa: "フィエル",           nameEn: "Fier",            lat: 40.7239, lng: 19.5567, pop: 105 },
  { id: "elbasan",       nameJa: "エルバサン",         nameEn: "Elbasan",         lat: 41.1125, lng: 20.0822, pop: 100 },
  { id: "korce",         nameJa: "コルチャ",           nameEn: "Korçë",           lat: 40.6186, lng: 20.7808, pop: 75 },
  { id: "berat",         nameJa: "ベラト",             nameEn: "Berat",           lat: 40.7058, lng: 19.9522, pop: 60 },
  { id: "lushnje",       nameJa: "ルシュニャ",         nameEn: "Lushnjë",         lat: 40.9419, lng: 19.7050, pop: 41 },
  { id: "kavaje",        nameJa: "カヴァヤ",           nameEn: "Kavajë",          lat: 41.1856, lng: 19.5571, pop: 40 },
  { id: "kukes",         nameJa: "クケス",             nameEn: "Kukës",           lat: 42.0764, lng: 20.4222, pop: 17 },
  { id: "gjirokaster",   nameJa: "ジロカストラ",       nameEn: "Gjirokastër",     lat: 40.0758, lng: 20.1397, pop: 26 },
  { id: "lezhe",         nameJa: "レジャ",             nameEn: "Lezhë",           lat: 41.7833, lng: 19.6333, pop: 22 },
  { id: "saranda",       nameJa: "サランダ",           nameEn: "Sarandë",         lat: 39.8754, lng: 20.0050, pop: 41 },
  { id: "patos",         nameJa: "パトス",             nameEn: "Patos",           lat: 40.6817, lng: 19.6336, pop: 23 },
  { id: "kuçove",        nameJa: "クチョーヴァ",       nameEn: "Kuçovë",          lat: 40.8014, lng: 19.9156, pop: 18 },
  { id: "peshkopi",      nameJa: "ペシュコピ",         nameEn: "Peshkopi",        lat: 41.6839, lng: 20.4314, pop: 14 },
  { id: "burrel",        nameJa: "ブレル",             nameEn: "Burrel",          lat: 41.6092, lng: 20.0086, pop: 16 },
  { id: "kruje",         nameJa: "クルヤ",             nameEn: "Krujë",           lat: 41.5089, lng: 19.7917, pop: 20 },
  { id: "permet",        nameJa: "ペルメティ",         nameEn: "Përmet",          lat: 40.2342, lng: 20.3522, pop: 8 },
  { id: "tepelene",      nameJa: "テペレネ",           nameEn: "Tepelenë",        lat: 40.2967, lng: 20.0214, pop: 9 },
  { id: "rreshen",       nameJa: "レシェン",           nameEn: "Rrëshen",         lat: 41.7733, lng: 19.8842, pop: 11 },
];

export const ALBANIA_PROJECTION: CityProjection = {
  minLon: 19.272033,
  minLat: 39.637013,
  maxLon: 21.036679,
  maxLat: 42.654814,
  cosLat: 0.753036,
  scale: 206.773077,
  offX: 142.615562,
  offY: 8,
};

export const ALBANIA_META: CityCountryMeta = {
  slug: "albania",
  continent: "europe",
  svgPath: "/maps/countries/albania.svg",
  countryJa: "アルバニア",
  countryEn: "Albania",
};
