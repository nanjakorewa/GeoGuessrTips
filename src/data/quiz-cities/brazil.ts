/** Top 20 Brazilian cities. Population in thousands. */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const BRAZIL_CITIES: CityEntry[] = [
  { id: "sao-paulo",       nameJa: "サンパウロ",         nameEn: "São Paulo",       lat: -23.5505, lng: -46.6333, pop: 12330 },
  { id: "rio-de-janeiro",  nameJa: "リオデジャネイロ",   nameEn: "Rio de Janeiro",  lat: -22.9068, lng: -43.1729, pop: 6730 },
  { id: "brasilia",        nameJa: "ブラジリア",         nameEn: "Brasília",        lat: -15.8267, lng: -47.9218, pop: 3050 },
  { id: "salvador",        nameJa: "サルバドール",       nameEn: "Salvador",        lat: -12.9714, lng: -38.5014, pop: 2810 },
  { id: "fortaleza",       nameJa: "フォルタレザ",       nameEn: "Fortaleza",       lat:  -3.7172, lng: -38.5433, pop: 2700 },
  { id: "belo-horizonte",  nameJa: "ベロオリゾンテ",     nameEn: "Belo Horizonte",  lat: -19.9167, lng: -43.9345, pop: 2510 },
  { id: "manaus",          nameJa: "マナウス",           nameEn: "Manaus",          lat:  -3.1190, lng: -60.0217, pop: 2260 },
  { id: "curitiba",        nameJa: "クリチバ",           nameEn: "Curitiba",        lat: -25.4296, lng: -49.2719, pop: 1980 },
  { id: "recife",          nameJa: "レシフェ",           nameEn: "Recife",          lat:  -8.0476, lng: -34.8770, pop: 1660 },
  { id: "porto-alegre",    nameJa: "ポルトアレグレ",     nameEn: "Porto Alegre",    lat: -30.0346, lng: -51.2177, pop: 1490 },
  { id: "goiania",         nameJa: "ゴイアニア",         nameEn: "Goiânia",         lat: -16.6869, lng: -49.2648, pop: 1540 },
  { id: "belem",           nameJa: "ベレン",             nameEn: "Belém",           lat:  -1.4558, lng: -48.5044, pop: 1500 },
  { id: "guarulhos",       nameJa: "グアルーリョス",     nameEn: "Guarulhos",       lat: -23.4538, lng: -46.5333, pop: 1390 },
  { id: "campinas",        nameJa: "カンピーナス",       nameEn: "Campinas",        lat: -22.9099, lng: -47.0626, pop: 1220 },
  { id: "sao-luis",        nameJa: "サン・ルイス",       nameEn: "São Luís",        lat:  -2.5391, lng: -44.2829, pop: 1120 },
  { id: "natal",           nameJa: "ナタル",             nameEn: "Natal",           lat:  -5.7945, lng: -35.2110, pop: 890 },
  { id: "maceio",          nameJa: "マセイオ",           nameEn: "Maceió",          lat:  -9.6498, lng: -35.7089, pop: 1030 },
  { id: "campo-grande",    nameJa: "カンポ・グランデ",   nameEn: "Campo Grande",    lat: -20.4697, lng: -54.6201, pop: 920 },
  { id: "florianopolis",   nameJa: "フロリアノポリス",   nameEn: "Florianópolis",   lat: -27.5949, lng: -48.5482, pop: 510 },
  { id: "vitoria",         nameJa: "ヴィトーリア",       nameEn: "Vitória",         lat: -20.3155, lng: -40.3128, pop: 365 },
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
