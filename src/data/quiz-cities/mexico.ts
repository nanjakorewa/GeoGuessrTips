/** Top 20 Mexican cities. Population in thousands. */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const MEXICO_CITIES: CityEntry[] = [
  { id: "mexico-city",  nameJa: "メキシコシティ",   nameEn: "Ciudad de México", lat: 19.4326, lng:  -99.1332, pop: 9200 },
  { id: "guadalajara",  nameJa: "グアダラハラ",     nameEn: "Guadalajara",      lat: 20.6597, lng: -103.3496, pop: 1390 },
  { id: "monterrey",    nameJa: "モンテレイ",       nameEn: "Monterrey",        lat: 25.6866, lng: -100.3161, pop: 1140 },
  { id: "puebla",       nameJa: "プエブラ",         nameEn: "Puebla",           lat: 19.0414, lng:  -98.2063, pop: 1690 },
  { id: "tijuana",      nameJa: "ティフアナ",       nameEn: "Tijuana",          lat: 32.5149, lng: -117.0382, pop: 1810 },
  { id: "leon",         nameJa: "レオン",           nameEn: "León",             lat: 21.1250, lng: -101.6860, pop: 1580 },
  { id: "juarez",       nameJa: "シウダー・フアレス", nameEn: "Ciudad Juárez",   lat: 31.6904, lng: -106.4245, pop: 1510 },
  { id: "merida",       nameJa: "メリダ",           nameEn: "Mérida",           lat: 20.9674, lng:  -89.5926, pop: 920 },
  { id: "acapulco",     nameJa: "アカプルコ",       nameEn: "Acapulco",         lat: 16.8531, lng:  -99.8237, pop: 790 },
  { id: "cancun",       nameJa: "カンクン",         nameEn: "Cancún",           lat: 21.1619, lng:  -86.8515, pop: 890 },
  { id: "queretaro",    nameJa: "ケレタロ",         nameEn: "Querétaro",        lat: 20.5888, lng: -100.3899, pop: 800 },
  { id: "aguascalientes", nameJa: "アグアスカリエンテス", nameEn: "Aguascalientes", lat: 21.8853, lng: -102.2916, pop: 935 },
  { id: "cuernavaca",   nameJa: "クエルナバカ",     nameEn: "Cuernavaca",       lat: 18.9242, lng:  -99.2216, pop: 365 },
  { id: "veracruz",     nameJa: "ベラクルス",       nameEn: "Veracruz",         lat: 19.1738, lng:  -96.1342, pop: 425 },
  { id: "oaxaca",       nameJa: "オアハカ",         nameEn: "Oaxaca",           lat: 17.0732, lng:  -96.7266, pop: 270 },
  { id: "san-luis-potosi", nameJa: "サン・ルイス・ポトシ", nameEn: "San Luis Potosí", lat: 22.1565, lng: -100.9855, pop: 825 },
  { id: "morelia",      nameJa: "モレリア",         nameEn: "Morelia",          lat: 19.7022, lng: -101.1864, pop: 750 },
  { id: "saltillo",     nameJa: "サルティーヨ",     nameEn: "Saltillo",         lat: 25.4232, lng: -101.0053, pop: 825 },
  { id: "hermosillo",   nameJa: "エルモシージョ",   nameEn: "Hermosillo",       lat: 29.0729, lng: -110.9559, pop: 855 },
  { id: "culiacan",     nameJa: "クリアカン",       nameEn: "Culiacán",         lat: 24.8091, lng: -107.3940, pop: 810 },
];

export const MEXICO_PROJECTION: CityProjection = {
  minLon: -118.368804,
  minLat: 14.546279,
  maxLon: -86.735341,
  maxLat: 32.712836,
  cosLat: 0.916156,
  scale: 18.770796,
  offX: 8,
  offY: 149.49963,
};

export const MEXICO_META: CityCountryMeta = {
  slug: "mexico",
  continent: "n_america",
  svgPath: "/maps/countries/mexico.svg",
  countryJa: "メキシコ",
  countryEn: "Mexico",
};
