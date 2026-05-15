/** Top ~25 Costa Rican cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const COSTA_RICA_CITIES: CityEntry[] = [
  { id: "san-jose",         nameJa: "サンホセ",             nameEn: "San José",         lat:  9.9281, lng: -84.0907, pop: 343 },
  { id: "alajuela",         nameJa: "アラフエラ",           nameEn: "Alajuela",         lat: 10.0167, lng: -84.2167, pop: 254 },
  { id: "cartago",          nameJa: "カルタゴ",             nameEn: "Cartago",          lat:  9.8644, lng: -83.9194, pop: 156 },
  { id: "heredia",          nameJa: "エレディア",           nameEn: "Heredia",          lat: 10.0028, lng: -84.1167, pop: 130 },
  { id: "curridabat",       nameJa: "クリダバット",         nameEn: "Curridabat",       lat:  9.9167, lng: -84.0333, pop: 75 },
  { id: "tibas",            nameJa: "ティバス",             nameEn: "Tibás",            lat:  9.9620, lng: -84.0850, pop: 70 },
  { id: "puerto-limon",     nameJa: "プエルト・リモン",     nameEn: "Puerto Limón",     lat: 10.0000, lng: -83.0333, pop: 65 },
  { id: "escazu",           nameJa: "エスカス",             nameEn: "Escazú",           lat:  9.9189, lng: -84.1394, pop: 60 },
  { id: "liberia",          nameJa: "リベリア",             nameEn: "Liberia",          lat: 10.6336, lng: -85.4406, pop: 56 },
  { id: "ciudad-quesada",   nameJa: "シウダー・ケサーダ",   nameEn: "Ciudad Quesada",   lat: 10.3232, lng: -84.4279, pop: 45 },
  { id: "san-isidro",       nameJa: "サン・イシドロ",       nameEn: "San Isidro de El General", lat:  9.3833, lng: -83.7000, pop: 45 },
  { id: "perez-zeledon",    nameJa: "ペレス・セレドン",     nameEn: "Pérez Zeledón",    lat:  9.3667, lng: -83.7000, pop: 45 },
  { id: "puntarenas",       nameJa: "プンタレナス",         nameEn: "Puntarenas",       lat:  9.9763, lng: -84.8390, pop: 41 },
  { id: "desamparados",     nameJa: "デサンパラドス",       nameEn: "Desamparados",     lat:  9.8975, lng: -84.0658, pop: 35 },
  { id: "turrialba",        nameJa: "トゥリアルバ",         nameEn: "Turrialba",        lat:  9.9036, lng: -83.6839, pop: 33 },
  { id: "siquirres",        nameJa: "シキレス",             nameEn: "Siquirres",        lat: 10.0964, lng: -83.5061, pop: 30 },
  { id: "san-vicente",      nameJa: "サン・ビセンテ",       nameEn: "San Vicente de Moravia", lat:  9.9667, lng: -84.0500, pop: 30 },
  { id: "san-pedro",        nameJa: "サン・ペドロ",         nameEn: "San Pedro",        lat:  9.9347, lng: -84.0497, pop: 27 },
  { id: "santa-cruz",       nameJa: "サンタ・クルス",       nameEn: "Santa Cruz",       lat: 10.2625, lng: -85.5839, pop: 27 },
  { id: "guadalupe",        nameJa: "グアダルーペ",         nameEn: "Guadalupe",        lat:  9.9489, lng: -84.0581, pop: 24 },
  { id: "san-rafael",       nameJa: "サン・ラファエル",     nameEn: "San Rafael",       lat:  9.9311, lng: -84.1411, pop: 24 },
  { id: "san-francisco",    nameJa: "サン・フランシスコ・デ・ドス・リオス", nameEn: "San Francisco de Dos Ríos", lat:  9.9192, lng: -84.0728, pop: 24 },
  { id: "alajuelita",       nameJa: "アラフエリータ",       nameEn: "Alajuelita",       lat:  9.8989, lng: -84.0972, pop: 23 },
  { id: "nicoya",           nameJa: "ニコヤ",               nameEn: "Nicoya",           lat: 10.1486, lng: -85.4519, pop: 20 },
  { id: "grecia",           nameJa: "グレシア",             nameEn: "Grecia",           lat: 10.0731, lng: -84.3147, pop: 16 },
  { id: "naranjo",          nameJa: "ナランホ",             nameEn: "Naranjo",          lat: 10.0972, lng: -84.3814, pop: 10 },
  { id: "atenas",           nameJa: "アテナス",             nameEn: "Atenas",           lat:  9.9783, lng: -84.3756, pop: 9 },
];

export const COSTA_RICA_PROJECTION: CityProjection = {
  minLon: -87.117665,
  minLat: 5.515082,
  maxLon: -82.562837,
  maxLat: 11.209937,
  cosLat: 0.989368,
  scale: 109.572588,
  offX: 33.111059,
  offY: 8,
};

export const COSTA_RICA_META: CityCountryMeta = {
  slug: "costa-rica",
  continent: "n_america",
  svgPath: "/maps/countries/costa-rica.svg",
  countryJa: "コスタリカ",
  countryEn: "Costa Rica",
};
