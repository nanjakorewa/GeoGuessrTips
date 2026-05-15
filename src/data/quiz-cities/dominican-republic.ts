/** Top ~30 Dominican cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const DOMINICAN_REPUBLIC_CITIES: CityEntry[] = [
  { id: "santo-domingo",     nameJa: "サントドミンゴ",       nameEn: "Santo Domingo",     lat: 18.4861, lng: -69.9312, pop: 2900 },
  { id: "santo-domingo-este", nameJa: "サントドミンゴ・エステ", nameEn: "Santo Domingo Este", lat: 18.4833, lng: -69.8500, pop: 950 },
  { id: "santiago",          nameJa: "サンティアゴ",         nameEn: "Santiago de los Caballeros", lat: 19.4500, lng: -70.7000, pop: 690 },
  { id: "santo-domingo-norte", nameJa: "サントドミンゴ・ノルテ", nameEn: "Santo Domingo Norte", lat: 18.5333, lng: -69.9000, pop: 530 },
  { id: "santo-domingo-oeste", nameJa: "サントドミンゴ・オエステ", nameEn: "Santo Domingo Oeste", lat: 18.5000, lng: -70.0000, pop: 380 },
  { id: "los-alcarrizos",    nameJa: "ロス・アルカリソス",   nameEn: "Los Alcarrizos",    lat: 18.5167, lng: -70.0167, pop: 270 },
  { id: "la-vega",           nameJa: "ラ・ベガ",             nameEn: "La Vega",           lat: 19.2231, lng: -70.5294, pop: 250 },
  { id: "la-romana",         nameJa: "ラ・ロマーナ",         nameEn: "La Romana",         lat: 18.4250, lng: -68.9719, pop: 220 },
  { id: "san-pedro-de-macoris", nameJa: "サン・ペドロ・デ・マコリス", nameEn: "San Pedro de Macorís", lat: 18.4500, lng: -69.3000, pop: 195 },
  { id: "san-francisco-de-macoris", nameJa: "サン・フランシスコ・デ・マコリス", nameEn: "San Francisco de Macorís", lat: 19.3000, lng: -70.2500, pop: 188 },
  { id: "higuey",            nameJa: "イグエイ",             nameEn: "Higüey",            lat: 18.6167, lng: -68.7000, pop: 168 },
  { id: "puerto-plata",      nameJa: "プエルト・プラタ",     nameEn: "Puerto Plata",      lat: 19.7892, lng: -70.6886, pop: 158 },
  { id: "san-cristobal",     nameJa: "サン・クリストバル",   nameEn: "San Cristóbal",     lat: 18.4167, lng: -70.1000, pop: 154 },
  { id: "bonao",             nameJa: "ボナオ",               nameEn: "Bonao",             lat: 18.9417, lng: -70.4111, pop: 100 },
  { id: "bani",              nameJa: "バニ",                 nameEn: "Baní",              lat: 18.2833, lng: -70.3333, pop: 92 },
  { id: "azua",              nameJa: "アスア",               nameEn: "Azua",              lat: 18.4536, lng: -70.7367, pop: 90 },
  { id: "barahona",          nameJa: "バラオナ",             nameEn: "Barahona",          lat: 18.2086, lng: -71.1006, pop: 84 },
  { id: "boca-chica",        nameJa: "ボカ・チカ",           nameEn: "Boca Chica",        lat: 18.4500, lng: -69.6000, pop: 80 },
  { id: "moca",              nameJa: "モカ",                 nameEn: "Moca",              lat: 19.3917, lng: -70.5236, pop: 78 },
  { id: "mao",               nameJa: "マオ",                 nameEn: "Mao",               lat: 19.5500, lng: -71.0667, pop: 60 },
  { id: "jarabacoa",         nameJa: "ハラバコア",           nameEn: "Jarabacoa",         lat: 19.1208, lng: -70.6386, pop: 60 },
  { id: "samana",            nameJa: "サマナ",               nameEn: "Samaná",            lat: 19.2056, lng: -69.3358, pop: 50 },
  { id: "cotui",             nameJa: "コトゥイ",             nameEn: "Cotuí",             lat: 19.0500, lng: -70.1500, pop: 50 },
  { id: "constanza",         nameJa: "コンスタンサ",         nameEn: "Constanza",         lat: 18.9000, lng: -70.7333, pop: 50 },
  { id: "esperanza",         nameJa: "エスペランサ",         nameEn: "Esperanza",         lat: 19.5833, lng: -70.9833, pop: 45 },
  { id: "nagua",             nameJa: "ナグア",               nameEn: "Nagua",             lat: 19.3833, lng: -69.8500, pop: 36 },
  { id: "el-seibo",          nameJa: "エル・セイボ",         nameEn: "El Seibo",          lat: 18.7639, lng: -69.0386, pop: 25 },
  { id: "neiba",             nameJa: "ネイバ",               nameEn: "Neiba",             lat: 18.4833, lng: -71.4167, pop: 25 },
  { id: "monte-plata",       nameJa: "モンテ・プラタ",       nameEn: "Monte Plata",       lat: 18.8067, lng: -69.7836, pop: 20 },
  { id: "monte-cristi",      nameJa: "モンテ・クリスティ",   nameEn: "Monte Cristi",      lat: 19.8500, lng: -71.6500, pop: 18 },
  { id: "jimani",            nameJa: "ヒマニ",               nameEn: "Jimaní",            lat: 18.4928, lng: -71.8506, pop: 8 },
];

export const DOMINICAN_REPUBLIC_PROJECTION: CityProjection = {
  minLon: -72.009838,
  minLat: 17.545559,
  maxLon: -68.328603,
  maxLat: 19.93769,
  cosLat: 0.946977,
  scale: 156.050756,
  offX: 8,
  offY: 133.353075,
};

export const DOMINICAN_REPUBLIC_META: CityCountryMeta = {
  slug: "dominican-republic",
  continent: "n_america",
  svgPath: "/maps/countries/dominican-republic.svg",
  countryJa: "ドミニカ共和国",
  countryEn: "Dominican Republic",
};
