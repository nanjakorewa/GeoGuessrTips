/** Top 25 well-known US cities (contiguous 48 + DC). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const USA_CITIES: CityEntry[] = [
  { id: "new-york",     nameJa: "ニューヨーク",     nameEn: "New York",      lat: 40.7128, lng:  -74.0060 },
  { id: "los-angeles",  nameJa: "ロサンゼルス",     nameEn: "Los Angeles",   lat: 34.0522, lng: -118.2437 },
  { id: "chicago",      nameJa: "シカゴ",           nameEn: "Chicago",       lat: 41.8781, lng:  -87.6298 },
  { id: "houston",      nameJa: "ヒューストン",     nameEn: "Houston",       lat: 29.7604, lng:  -95.3698 },
  { id: "phoenix",      nameJa: "フェニックス",     nameEn: "Phoenix",       lat: 33.4484, lng: -112.0740 },
  { id: "philadelphia", nameJa: "フィラデルフィア", nameEn: "Philadelphia",  lat: 39.9526, lng:  -75.1652 },
  { id: "san-antonio",  nameJa: "サンアントニオ",   nameEn: "San Antonio",   lat: 29.4241, lng:  -98.4936 },
  { id: "san-diego",    nameJa: "サンディエゴ",     nameEn: "San Diego",     lat: 32.7157, lng: -117.1611 },
  { id: "dallas",       nameJa: "ダラス",           nameEn: "Dallas",        lat: 32.7767, lng:  -96.7970 },
  { id: "san-jose",     nameJa: "サンノゼ",         nameEn: "San Jose",      lat: 37.3382, lng: -121.8863 },
  { id: "austin",       nameJa: "オースティン",     nameEn: "Austin",        lat: 30.2672, lng:  -97.7431 },
  { id: "jacksonville", nameJa: "ジャクソンビル",   nameEn: "Jacksonville",  lat: 30.3322, lng:  -81.6557 },
  { id: "fort-worth",   nameJa: "フォートワース",   nameEn: "Fort Worth",    lat: 32.7555, lng:  -97.3308 },
  { id: "indianapolis", nameJa: "インディアナポリス", nameEn: "Indianapolis",lat: 39.7684, lng:  -86.1581 },
  { id: "charlotte",    nameJa: "シャーロット",     nameEn: "Charlotte",     lat: 35.2271, lng:  -80.8431 },
  { id: "san-francisco",nameJa: "サンフランシスコ", nameEn: "San Francisco", lat: 37.7749, lng: -122.4194 },
  { id: "seattle",      nameJa: "シアトル",         nameEn: "Seattle",       lat: 47.6062, lng: -122.3321 },
  { id: "denver",       nameJa: "デンバー",         nameEn: "Denver",        lat: 39.7392, lng: -104.9903 },
  { id: "washington",   nameJa: "ワシントンD.C.",   nameEn: "Washington D.C.", lat: 38.9072, lng:  -77.0369 },
  { id: "boston",       nameJa: "ボストン",         nameEn: "Boston",        lat: 42.3601, lng:  -71.0589 },
  { id: "nashville",    nameJa: "ナッシュビル",     nameEn: "Nashville",     lat: 36.1627, lng:  -86.7816 },
  { id: "detroit",      nameJa: "デトロイト",       nameEn: "Detroit",       lat: 42.3314, lng:  -83.0458 },
  { id: "las-vegas",    nameJa: "ラスベガス",       nameEn: "Las Vegas",     lat: 36.1699, lng: -115.1398 },
  { id: "miami",        nameJa: "マイアミ",         nameEn: "Miami",         lat: 25.7617, lng:  -80.1918 },
  { id: "atlanta",      nameJa: "アトランタ",       nameEn: "Atlanta",       lat: 33.7490, lng:  -84.3880 },
];

export const USA_PROJECTION: CityProjection = {
  minLon: -124.734607,
  minLat: 24.9501,
  maxLon: -66.977325,
  maxLat: 49.369494,
  cosLat: 0.796954,
  scale: 11.818406,
  offX: 8,
  offY: 175.700838,
};

export const USA_META: CityCountryMeta = {
  slug: "usa",
  continent: "n_america",
  svgPath: "/maps/countries/usa.svg",
  countryJa: "アメリカ",
  countryEn: "United States",
};
