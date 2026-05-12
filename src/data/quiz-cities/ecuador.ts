/** Top ~25 Ecuadorian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const ECUADOR_CITIES: CityEntry[] = [
  { id: "guayaquil",     nameJa: "グアヤキル",         nameEn: "Guayaquil",       lat:  -2.1709, lng: -79.9224, pop: 2698 },
  { id: "quito",         nameJa: "キト",               nameEn: "Quito",           lat:  -0.1807, lng: -78.4678, pop: 2011 },
  { id: "cuenca",        nameJa: "クエンカ",           nameEn: "Cuenca",          lat:  -2.9001, lng: -79.0059, pop: 580 },
  { id: "santo-domingo", nameJa: "サント・ドミンゴ",   nameEn: "Santo Domingo",   lat:  -0.2547, lng: -79.1714, pop: 458 },
  { id: "machala",       nameJa: "マチャラ",           nameEn: "Machala",         lat:  -3.2581, lng: -79.9554, pop: 280 },
  { id: "duran",         nameJa: "ドゥラン",           nameEn: "Durán",           lat:  -2.1717, lng: -79.8358, pop: 290 },
  { id: "manta",         nameJa: "マンタ",             nameEn: "Manta",           lat:  -0.9667, lng: -80.7167, pop: 264 },
  { id: "portoviejo",    nameJa: "ポルトビエホ",       nameEn: "Portoviejo",      lat:  -1.0586, lng: -80.4517, pop: 280 },
  { id: "loja",          nameJa: "ロハ",               nameEn: "Loja",            lat:  -3.9929, lng: -79.2042, pop: 215 },
  { id: "ambato",        nameJa: "アンバト",           nameEn: "Ambato",          lat:  -1.2542, lng: -78.6228, pop: 178 },
  { id: "esmeraldas",    nameJa: "エスメラルダス",     nameEn: "Esmeraldas",      lat:   0.9682, lng: -79.6517, pop: 162 },
  { id: "riobamba",      nameJa: "リオバンバ",         nameEn: "Riobamba",        lat:  -1.6708, lng: -78.6483, pop: 156 },
  { id: "milagro",       nameJa: "ミラグロ",           nameEn: "Milagro",         lat:  -2.1342, lng: -79.5872, pop: 167 },
  { id: "ibarra",        nameJa: "イバラ",             nameEn: "Ibarra",          lat:   0.3500, lng: -78.1167, pop: 145 },
  { id: "quevedo",       nameJa: "ケベド",             nameEn: "Quevedo",         lat:  -1.0292, lng: -79.4708, pop: 173 },
  { id: "babahoyo",      nameJa: "ババオヨ",           nameEn: "Babahoyo",        lat:  -1.8019, lng: -79.5347, pop: 90 },
  { id: "latacunga",     nameJa: "ラタクンガ",         nameEn: "Latacunga",       lat:  -0.9333, lng: -78.6167, pop: 99 },
  { id: "tulcan",        nameJa: "トゥルカン",         nameEn: "Tulcán",          lat:   0.8092, lng: -77.7167, pop: 60 },
  { id: "san-lorenzo",   nameJa: "サン・ロレンソ",     nameEn: "San Lorenzo",     lat:   1.2861, lng: -78.8403, pop: 25 },
  { id: "azogues",       nameJa: "アソゲス",           nameEn: "Azogues",         lat:  -2.7400, lng: -78.8400, pop: 71 },
  { id: "macas",         nameJa: "マカス",             nameEn: "Macas",           lat:  -2.3119, lng: -78.1097, pop: 19 },
  { id: "nueva-loja",    nameJa: "ヌエバ・ロハ",       nameEn: "Nueva Loja",      lat:   0.0833, lng: -76.8833, pop: 91 },
  { id: "puyo",          nameJa: "プヨ",               nameEn: "Puyo",            lat:  -1.4833, lng: -77.9833, pop: 36 },
  { id: "tena",          nameJa: "テナ",               nameEn: "Tena",            lat:  -0.9947, lng: -77.8156, pop: 24 },
  { id: "zamora",        nameJa: "サモラ",             nameEn: "Zamora",          lat:  -4.0683, lng: -78.9550, pop: 13 },
];

export const ECUADOR_PROJECTION: CityProjection = {
  minLon: -81.01301,
  minLat: -5.011373,
  maxLon: -75.227264,
  maxLat: 1.434312,
  cosLat: 0.999513,
  scale: 94.070004,
  offX: 8,
  offY: 16.827192,
};

export const ECUADOR_META: CityCountryMeta = {
  slug: "ecuador",
  continent: "cs_america",
  svgPath: "/maps/countries/ecuador.svg",
  countryJa: "エクアドル",
  countryEn: "Ecuador",
};
