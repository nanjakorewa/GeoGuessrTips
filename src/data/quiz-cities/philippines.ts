/** Top ~35 Philippine cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const PHILIPPINES_CITIES: CityEntry[] = [
  { id: "quezon-city",   nameJa: "ケソン",             nameEn: "Quezon City",     lat: 14.6760, lng: 121.0437, pop: 2960 },
  { id: "manila",        nameJa: "マニラ",             nameEn: "Manila",          lat: 14.5995, lng: 120.9842, pop: 1846 },
  { id: "caloocan",      nameJa: "カローカン",         nameEn: "Caloocan",        lat: 14.6481, lng: 120.9676, pop: 1661 },
  { id: "davao-city",    nameJa: "ダバオ",             nameEn: "Davao City",      lat:  7.1907, lng: 125.4553, pop: 1776 },
  { id: "cebu-city",     nameJa: "セブ",               nameEn: "Cebu City",       lat: 10.3157, lng: 123.8854, pop: 964 },
  { id: "zamboanga-city", nameJa: "サンボアンガ",      nameEn: "Zamboanga City",  lat:  6.9214, lng: 122.0790, pop: 977 },
  { id: "taguig",        nameJa: "タギッグ",           nameEn: "Taguig",          lat: 14.5176, lng: 121.0509, pop: 886 },
  { id: "antipolo",      nameJa: "アンティポロ",       nameEn: "Antipolo",        lat: 14.5878, lng: 121.1759, pop: 887 },
  { id: "pasig",         nameJa: "パシッグ",           nameEn: "Pasig",           lat: 14.5764, lng: 121.0851, pop: 803 },
  { id: "cagayan-de-oro", nameJa: "カガヤン・デ・オロ", nameEn: "Cagayan de Oro", lat:  8.4542, lng: 124.6319, pop: 728 },
  { id: "valenzuela",    nameJa: "バレンスエラ",       nameEn: "Valenzuela",      lat: 14.7000, lng: 120.9831, pop: 715 },
  { id: "dasmarinas",    nameJa: "ダスマリニャス",     nameEn: "Dasmariñas",      lat: 14.3294, lng: 120.9367, pop: 705 },
  { id: "general-santos", nameJa: "ジェネラル・サントス", nameEn: "General Santos", lat: 6.1164, lng: 125.1716, pop: 695 },
  { id: "paranaque",     nameJa: "パラニャーケ",       nameEn: "Parañaque",       lat: 14.4793, lng: 121.0198, pop: 689 },
  { id: "bacoor",        nameJa: "バコオール",         nameEn: "Bacoor",          lat: 14.4593, lng: 120.9582, pop: 664 },
  { id: "san-jose-del-monte", nameJa: "サン・ホセ・デル・モンテ", nameEn: "San Jose del Monte", lat: 14.8139, lng: 121.0453, pop: 695 },
  { id: "bacolod",       nameJa: "バコロド",           nameEn: "Bacolod",         lat: 10.6760, lng: 122.9508, pop: 600 },
  { id: "calamba",       nameJa: "カラムバ",           nameEn: "Calamba",         lat: 14.2117, lng: 121.1655, pop: 539 },
  { id: "muntinlupa",    nameJa: "ムンティンルパ",     nameEn: "Muntinlupa",      lat: 14.4081, lng: 121.0415, pop: 543 },
  { id: "iloilo-city",   nameJa: "イロイロ",           nameEn: "Iloilo City",     lat: 10.7202, lng: 122.5621, pop: 458 },
  { id: "marikina",      nameJa: "マリキナ",           nameEn: "Marikina",        lat: 14.6507, lng: 121.1029, pop: 456 },
  { id: "pasay",         nameJa: "パサイ",             nameEn: "Pasay",           lat: 14.5378, lng: 121.0014, pop: 440 },
  { id: "las-pinas",     nameJa: "ラスピニャス",       nameEn: "Las Piñas",       lat: 14.4500, lng: 120.9833, pop: 606 },
  { id: "makati",        nameJa: "マカティ",           nameEn: "Makati",          lat: 14.5547, lng: 121.0244, pop: 629 },
  { id: "san-pedro",     nameJa: "サン・ペドロ",       nameEn: "San Pedro",       lat: 14.3589, lng: 121.0489, pop: 326 },
  { id: "imus",          nameJa: "イムス",             nameEn: "Imus",            lat: 14.4297, lng: 120.9367, pop: 496 },
  { id: "binan",         nameJa: "ビニャン",           nameEn: "Biñan",           lat: 14.3389, lng: 121.0814, pop: 407 },
  { id: "olongapo",      nameJa: "オロンガポ",         nameEn: "Olongapo",        lat: 14.8333, lng: 120.2833, pop: 260 },
  { id: "angeles-city",  nameJa: "アンヘレス",         nameEn: "Angeles City",    lat: 15.1500, lng: 120.5833, pop: 462 },
  { id: "naga",          nameJa: "ナガ",               nameEn: "Naga",            lat: 13.6219, lng: 123.1948, pop: 209 },
  { id: "tarlac-city",   nameJa: "タルラック",         nameEn: "Tarlac City",     lat: 15.4878, lng: 120.5878, pop: 386 },
  { id: "baguio",        nameJa: "バギオ",             nameEn: "Baguio",          lat: 16.4023, lng: 120.5960, pop: 367 },
  { id: "san-fernando",  nameJa: "サン・フェルナンド", nameEn: "San Fernando",    lat: 15.0167, lng: 120.6833, pop: 354 },
  { id: "iligan",        nameJa: "イリガン",           nameEn: "Iligan",          lat:  8.2280, lng: 124.2453, pop: 363 },
  { id: "butuan",        nameJa: "ブトゥアン",         nameEn: "Butuan",          lat:  8.9494, lng: 125.5436, pop: 372 },
];

export const PHILIPPINES_PROJECTION: CityProjection = {
  minLon: 116.954926,
  minLat: 4.655707,
  maxLon: 126.617686,
  maxLat: 20.838324,
  cosLat: 0.975354,
  scale: 38.559894,
  offX: 98.294021,
  offY: 8,
};

export const PHILIPPINES_META: CityCountryMeta = {
  slug: "philippines",
  continent: "asia",
  svgPath: "/maps/countries/philippines.svg",
  countryJa: "フィリピン",
  countryEn: "Philippines",
};
