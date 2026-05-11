/** Top 15 Brazilian cities. */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const BRAZIL_CITIES: CityEntry[] = [
  { id: "sao-paulo",       nameJa: "サンパウロ",         nameEn: "São Paulo",       lat: -23.5505, lng: -46.6333 },
  { id: "rio-de-janeiro",  nameJa: "リオデジャネイロ",   nameEn: "Rio de Janeiro",  lat: -22.9068, lng: -43.1729 },
  { id: "brasilia",        nameJa: "ブラジリア",         nameEn: "Brasília",        lat: -15.8267, lng: -47.9218 },
  { id: "salvador",        nameJa: "サルバドール",       nameEn: "Salvador",        lat: -12.9714, lng: -38.5014 },
  { id: "fortaleza",       nameJa: "フォルタレザ",       nameEn: "Fortaleza",       lat:  -3.7172, lng: -38.5433 },
  { id: "belo-horizonte",  nameJa: "ベロオリゾンテ",     nameEn: "Belo Horizonte",  lat: -19.9167, lng: -43.9345 },
  { id: "manaus",          nameJa: "マナウス",           nameEn: "Manaus",          lat:  -3.1190, lng: -60.0217 },
  { id: "curitiba",        nameJa: "クリチバ",           nameEn: "Curitiba",        lat: -25.4296, lng: -49.2719 },
  { id: "recife",          nameJa: "レシフェ",           nameEn: "Recife",          lat:  -8.0476, lng: -34.8770 },
  { id: "porto-alegre",    nameJa: "ポルトアレグレ",     nameEn: "Porto Alegre",    lat: -30.0346, lng: -51.2177 },
  { id: "goiania",         nameJa: "ゴイアニア",         nameEn: "Goiânia",         lat: -16.6869, lng: -49.2648 },
  { id: "belem",           nameJa: "ベレン",             nameEn: "Belém",           lat:  -1.4558, lng: -48.5044 },
  { id: "campinas",        nameJa: "カンピーナス",       nameEn: "Campinas",        lat: -22.9099, lng: -47.0626 },
  { id: "sao-luis",        nameJa: "サン・ルイス",       nameEn: "São Luís",        lat:  -2.5391, lng: -44.2829 },
  { id: "natal",           nameJa: "ナタル",             nameEn: "Natal",           lat:  -5.7945, lng: -35.2110 },
];

export const BRAZIL_PROJECTION: CityProjection = {
  minLon: -74.018475,
  minLat: -33.74228,
  maxLon: -29.345326,
  maxLat: 5.267225,
  cosLat: 0.969284,
  scale: 12.563223,
  offX: 8,
  offY: 74.95744,
};

export const BRAZIL_META: CityCountryMeta = {
  slug: "brazil",
  continent: "cs_america",
  svgPath: "/maps/countries/brazil.svg",
  countryJa: "ブラジル",
  countryEn: "Brazil",
};
