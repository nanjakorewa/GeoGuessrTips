/** Top ~30 Chilean cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const CHILE_CITIES: CityEntry[] = [
  { id: "santiago",      nameJa: "サンティアゴ",       nameEn: "Santiago",        lat: -33.4489, lng: -70.6693, pop: 6260 },
  { id: "valparaiso",    nameJa: "バルパライソ",       nameEn: "Valparaíso",      lat: -33.0472, lng: -71.6127, pop: 297 },
  { id: "concepcion",    nameJa: "コンセプシオン",     nameEn: "Concepción",      lat: -36.8201, lng: -73.0440, pop: 224 },
  { id: "la-serena",     nameJa: "ラ・セレナ",         nameEn: "La Serena",       lat: -29.9027, lng: -71.2519, pop: 234 },
  { id: "antofagasta",   nameJa: "アントファガスタ",   nameEn: "Antofagasta",     lat: -23.6509, lng: -70.3975, pop: 425 },
  { id: "temuco",        nameJa: "テムコ",             nameEn: "Temuco",          lat: -38.7393, lng: -72.5908, pop: 282 },
  { id: "rancagua",      nameJa: "ランカグア",         nameEn: "Rancagua",        lat: -34.1708, lng: -70.7444, pop: 252 },
  { id: "talca",         nameJa: "タルカ",             nameEn: "Talca",           lat: -35.4264, lng: -71.6554, pop: 222 },
  { id: "arica",         nameJa: "アリカ",             nameEn: "Arica",           lat: -18.4783, lng: -70.3126, pop: 234 },
  { id: "chillan",       nameJa: "チジャン",           nameEn: "Chillán",         lat: -36.6063, lng: -72.1034, pop: 184 },
  { id: "iquique",       nameJa: "イキケ",             nameEn: "Iquique",         lat: -20.2208, lng: -70.1431, pop: 191 },
  { id: "puerto-montt",  nameJa: "プエルト・モント",   nameEn: "Puerto Montt",    lat: -41.4717, lng: -72.9369, pop: 245 },
  { id: "los-angeles",   nameJa: "ロス・アンヘレス",   nameEn: "Los Ángeles",     lat: -37.4690, lng: -72.3540, pop: 192 },
  { id: "calama",        nameJa: "カラマ",             nameEn: "Calama",          lat: -22.4534, lng: -68.9277, pop: 168 },
  { id: "copiapo",       nameJa: "コピアポ",           nameEn: "Copiapó",         lat: -27.3666, lng: -70.3322, pop: 158 },
  { id: "osorno",        nameJa: "オソルノ",           nameEn: "Osorno",          lat: -40.5731, lng: -73.1335, pop: 171 },
  { id: "vina-del-mar",  nameJa: "ビニャ・デル・マル", nameEn: "Viña del Mar",    lat: -33.0153, lng: -71.5500, pop: 334 },
  { id: "puente-alto",   nameJa: "プエンテ・アルト",   nameEn: "Puente Alto",     lat: -33.6166, lng: -70.5736, pop: 568 },
  { id: "maipu",         nameJa: "マイプ",             nameEn: "Maipú",           lat: -33.5167, lng: -70.7667, pop: 521 },
  { id: "la-florida",    nameJa: "ラ・フロリダ",       nameEn: "La Florida",      lat: -33.5524, lng: -70.5985, pop: 366 },
  { id: "las-condes",    nameJa: "ラス・コンデス",     nameEn: "Las Condes",      lat: -33.4099, lng: -70.5662, pop: 296 },
  { id: "san-bernardo",  nameJa: "サン・ベルナルド",   nameEn: "San Bernardo",    lat: -33.5928, lng: -70.6996, pop: 301 },
  { id: "punta-arenas",  nameJa: "プンタ・アレナス",   nameEn: "Punta Arenas",    lat: -53.1638, lng: -70.9171, pop: 131 },
  { id: "valdivia",      nameJa: "バルディビア",       nameEn: "Valdivia",        lat: -39.8142, lng: -73.2459, pop: 166 },
  { id: "ovalle",        nameJa: "オバジェ",           nameEn: "Ovalle",          lat: -30.5980, lng: -71.2003, pop: 111 },
  { id: "san-felipe",    nameJa: "サン・フェリペ",     nameEn: "San Felipe",      lat: -32.7503, lng: -70.7250, pop: 76 },
  { id: "linares",       nameJa: "リナーレス",         nameEn: "Linares",         lat: -35.8462, lng: -71.5933, pop: 95 },
  { id: "coyhaique",     nameJa: "コイハイケ",         nameEn: "Coyhaique",       lat: -45.5752, lng: -72.0662, pop: 60 },
  { id: "quillota",      nameJa: "キヨタ",             nameEn: "Quillota",        lat: -32.8800, lng: -71.2467, pop: 91 },
  { id: "san-antonio",   nameJa: "サン・アントニオ",   nameEn: "San Antonio",     lat: -33.5928, lng: -71.6064, pop: 91 },
  { id: "curico",        nameJa: "クリコ",             nameEn: "Curicó",          lat: -34.9854, lng: -71.2392, pop: 144 },
  { id: "ancud",         nameJa: "アンクード",         nameEn: "Ancud",           lat: -41.8697, lng: -73.8203, pop: 39 },
];

export const CHILE_PROJECTION: CityProjection = {
  minLon: -109.453725,
  minLat: -55.918504,
  maxLon: -66.420806,
  maxLat: -17.506588,
  cosLat: 0.801645,
  scale: 15.769435,
  offX: 8,
  offY: 17.132894,
};

export const CHILE_META: CityCountryMeta = {
  slug: "chile",
  continent: "cs_america",
  svgPath: "/maps/countries/chile.svg",
  countryJa: "チリ",
  countryEn: "Chile",
};
