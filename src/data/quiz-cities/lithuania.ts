/** Top ~20 Lithuanian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const LITHUANIA_CITIES: CityEntry[] = [
  { id: "vilnius",       nameJa: "ヴィリニュス",       nameEn: "Vilnius",         lat: 54.6872, lng: 25.2797, pop: 599 },
  { id: "kaunas",        nameJa: "カウナス",           nameEn: "Kaunas",          lat: 54.8985, lng: 23.9036, pop: 295 },
  { id: "klaipeda",      nameJa: "クライペダ",         nameEn: "Klaipėda",        lat: 55.7033, lng: 21.1443, pop: 152 },
  { id: "siauliai",      nameJa: "シャウレイ",         nameEn: "Šiauliai",        lat: 55.9333, lng: 23.3167, pop: 104 },
  { id: "panevezys",     nameJa: "パネヴェジース",     nameEn: "Panevėžys",       lat: 55.7333, lng: 24.3500, pop: 92 },
  { id: "alytus",        nameJa: "アリートゥス",       nameEn: "Alytus",          lat: 54.4000, lng: 24.0500, pop: 51 },
  { id: "marijampole",   nameJa: "マリヤンポレ",       nameEn: "Marijampolė",     lat: 54.5667, lng: 23.3500, pop: 36 },
  { id: "mazeikiai",     nameJa: "マジェイケイ",       nameEn: "Mažeikiai",       lat: 56.3167, lng: 22.3333, pop: 34 },
  { id: "jonava",        nameJa: "ヨナヴァ",           nameEn: "Jonava",          lat: 55.0833, lng: 24.2833, pop: 27 },
  { id: "utena",         nameJa: "ウテナ",             nameEn: "Utena",           lat: 55.5000, lng: 25.6000, pop: 25 },
  { id: "kedainiai",     nameJa: "ケーダイネイ",       nameEn: "Kėdainiai",       lat: 55.2833, lng: 23.9667, pop: 22 },
  { id: "telsiai",       nameJa: "テルシェイ",         nameEn: "Telšiai",         lat: 55.9833, lng: 22.2500, pop: 21 },
  { id: "taurage",       nameJa: "タウラゲ",           nameEn: "Tauragė",         lat: 55.2500, lng: 22.2833, pop: 22 },
  { id: "ukmerge",       nameJa: "ウクメルゲ",         nameEn: "Ukmergė",         lat: 55.2444, lng: 24.7567, pop: 21 },
  { id: "visaginas",     nameJa: "ヴィサギナス",       nameEn: "Visaginas",       lat: 55.5961, lng: 26.4283, pop: 17 },
  { id: "plunge",        nameJa: "プルンゲ",           nameEn: "Plungė",          lat: 55.9117, lng: 21.8425, pop: 17 },
  { id: "kretinga",      nameJa: "クレティンガ",       nameEn: "Kretinga",        lat: 55.8833, lng: 21.2333, pop: 17 },
  { id: "palanga",       nameJa: "パランガ",           nameEn: "Palanga",         lat: 55.9167, lng: 21.0667, pop: 16 },
  { id: "silute",        nameJa: "シルテ",             nameEn: "Šilutė",          lat: 55.3500, lng: 21.4833, pop: 15 },
  { id: "radviliskis",   nameJa: "ラドヴィリシュキス", nameEn: "Radviliškis",     lat: 55.8167, lng: 23.5333, pop: 15 },
];

export const LITHUANIA_PROJECTION: CityProjection = {
  minLon: 20.924569,
  minLat: 53.886841,
  maxLon: 26.80072,
  maxLat: 56.442602,
  cosLat: 0.571219,
  scale: 162.070234,
  offX: 8,
  offY: 112.893608,
};

export const LITHUANIA_META: CityCountryMeta = {
  slug: "lithuania",
  continent: "europe",
  svgPath: "/maps/countries/lithuania.svg",
  countryJa: "リトアニア",
  countryEn: "Lithuania",
};
