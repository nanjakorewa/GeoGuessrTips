/** Top ~20 Bolivian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const BOLIVIA_CITIES: CityEntry[] = [
  { id: "santa-cruz",    nameJa: "サンタクルス",       nameEn: "Santa Cruz de la Sierra", lat: -17.7833, lng: -63.1821, pop: 1684 },
  { id: "la-paz",        nameJa: "ラパス",             nameEn: "La Paz",          lat: -16.4897, lng: -68.1193, pop: 766 },
  { id: "cochabamba",    nameJa: "コチャバンバ",       nameEn: "Cochabamba",      lat: -17.3895, lng: -66.1568, pop: 632 },
  { id: "el-alto",       nameJa: "エル・アルト",       nameEn: "El Alto",         lat: -16.5000, lng: -68.1750, pop: 943 },
  { id: "oruro",         nameJa: "オルロ",             nameEn: "Oruro",           lat: -17.9833, lng: -67.1500, pop: 264 },
  { id: "sucre",         nameJa: "スクレ",             nameEn: "Sucre",           lat: -19.0333, lng: -65.2627, pop: 300 },
  { id: "tarija",        nameJa: "タリハ",             nameEn: "Tarija",          lat: -21.5355, lng: -64.7296, pop: 234 },
  { id: "potosi",        nameJa: "ポトシ",             nameEn: "Potosí",          lat: -19.5836, lng: -65.7531, pop: 240 },
  { id: "sacaba",        nameJa: "サカバ",             nameEn: "Sacaba",          lat: -17.4000, lng: -66.0500, pop: 175 },
  { id: "quillacollo",   nameJa: "キヤコジョ",         nameEn: "Quillacollo",     lat: -17.4000, lng: -66.2833, pop: 137 },
  { id: "montero",       nameJa: "モンテロ",           nameEn: "Montero",         lat: -17.3406, lng: -63.2516, pop: 124 },
  { id: "trinidad",      nameJa: "トリニダード",       nameEn: "Trinidad",        lat: -14.8333, lng: -64.9000, pop: 130 },
  { id: "yacuiba",       nameJa: "ヤクイバ",           nameEn: "Yacuiba",         lat: -22.0167, lng: -63.6833, pop: 92 },
  { id: "warnes",        nameJa: "ワルネス",           nameEn: "Warnes",          lat: -17.5128, lng: -63.1683, pop: 96 },
  { id: "riberalta",     nameJa: "リベラルタ",         nameEn: "Riberalta",       lat: -11.0000, lng: -66.0667, pop: 89 },
  { id: "viacha",        nameJa: "ビアチャ",           nameEn: "Viacha",          lat: -16.6500, lng: -68.3000, pop: 80 },
  { id: "cobija",        nameJa: "コビハ",             nameEn: "Cobija",          lat: -11.0231, lng: -68.7689, pop: 56 },
  { id: "tupiza",        nameJa: "トゥピサ",           nameEn: "Tupiza",          lat: -21.4444, lng: -65.7194, pop: 23 },
  { id: "camiri",        nameJa: "カミリ",             nameEn: "Camiri",          lat: -20.0500, lng: -63.5333, pop: 36 },
  { id: "villamontes",   nameJa: "ビヤモンテス",       nameEn: "Villamontes",     lat: -21.2500, lng: -63.4667, pop: 35 },
  { id: "guayaramerin",  nameJa: "ガヤラメリン",       nameEn: "Guayaramerín",    lat: -10.8333, lng: -65.3500, pop: 37 },
];

export const BOLIVIA_PROJECTION: CityProjection = {
  minLon: -69.666492,
  minLat: -22.897258,
  maxLon: -57.465661,
  maxLat: -9.679821,
  cosLat: 0.959861,
  scale: 46.45163,
  offX: 8,
  offY: 13.014256,
};

export const BOLIVIA_META: CityCountryMeta = {
  slug: "bolivia",
  continent: "cs_america",
  svgPath: "/maps/countries/bolivia.svg",
  countryJa: "ボリビア",
  countryEn: "Bolivia",
};
