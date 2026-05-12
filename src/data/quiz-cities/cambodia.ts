/** Top ~20 Cambodian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const CAMBODIA_CITIES: CityEntry[] = [
  { id: "phnom-penh",    nameJa: "プノンペン",         nameEn: "Phnom Penh",      lat: 11.5564, lng: 104.9282, pop: 2129 },
  { id: "siem-reap",     nameJa: "シェムリアップ",     nameEn: "Siem Reap",       lat: 13.3633, lng: 103.8564, pop: 245 },
  { id: "battambang",    nameJa: "バッタンバン",       nameEn: "Battambang",      lat: 13.0957, lng: 103.2022, pop: 250 },
  { id: "sihanoukville", nameJa: "シハヌークビル",     nameEn: "Sihanoukville",   lat: 10.6293, lng: 103.5226, pop: 156 },
  { id: "ta-khmau",      nameJa: "タクマウ",           nameEn: "Ta Khmau",        lat: 11.4833, lng: 104.9500, pop: 95 },
  { id: "serei-saophoan", nameJa: "セレイ・サオパン", nameEn: "Serei Saophoan",  lat: 13.5848, lng: 102.9742, pop: 99 },
  { id: "kampong-cham",  nameJa: "コンポンチャム",     nameEn: "Kampong Cham",    lat: 11.9925, lng: 105.4633, pop: 119 },
  { id: "kampot",        nameJa: "カンポット",         nameEn: "Kampot",          lat: 10.6104, lng: 104.1810, pop: 39 },
  { id: "pursat",        nameJa: "ポーサット",         nameEn: "Pursat",          lat: 12.5388, lng: 103.9192, pop: 64 },
  { id: "kampong-speu",  nameJa: "コンポンスプー",     nameEn: "Kampong Speu",    lat: 11.4538, lng: 104.5208, pop: 64 },
  { id: "kampong-chhnang", nameJa: "コンポンチュナン", nameEn: "Kampong Chhnang", lat: 12.2500, lng: 104.6667, pop: 75 },
  { id: "kampong-thom",  nameJa: "コンポントム",       nameEn: "Kampong Thom",    lat: 12.7111, lng: 104.8889, pop: 66 },
  { id: "takeo",         nameJa: "タケオ",             nameEn: "Takeo",           lat: 10.9908, lng: 104.7872, pop: 39 },
  { id: "stung-treng",   nameJa: "ストゥントレン",     nameEn: "Stung Treng",     lat: 13.5263, lng: 105.9683, pop: 30 },
  { id: "prey-veng",     nameJa: "プレイベン",         nameEn: "Prey Veng",       lat: 11.4828, lng: 105.3253, pop: 47 },
  { id: "svay-rieng",    nameJa: "スヴァイリエン",     nameEn: "Svay Rieng",      lat: 11.0775, lng: 105.7997, pop: 25 },
  { id: "kratie",        nameJa: "クラチエ",           nameEn: "Kratie",          lat: 12.4881, lng: 106.0184, pop: 81 },
  { id: "banlung",       nameJa: "バンルン",           nameEn: "Banlung",         lat: 13.7390, lng: 106.9876, pop: 25 },
  { id: "samraong",      nameJa: "サムラオン",         nameEn: "Samraong",        lat: 14.1810, lng: 103.5180, pop: 22 },
  { id: "pailin",        nameJa: "パイリン",           nameEn: "Pailin",          lat: 12.8489, lng: 102.6092, pop: 24 },
  { id: "koh-kong",      nameJa: "コッコン",           nameEn: "Koh Kong",        lat: 11.6153, lng: 102.9819, pop: 39 },
];

export const CAMBODIA_PROJECTION: CityProjection = {
  minLon: 102.313424,
  minLat: 10.415774,
  maxLon: 107.610516,
  maxLat: 14.704582,
  cosLat: 0.976068,
  scale: 105.215869,
  offX: 8,
  offY: 94.37467,
};

export const CAMBODIA_META: CityCountryMeta = {
  slug: "cambodia",
  continent: "asia",
  svgPath: "/maps/countries/cambodia.svg",
  countryJa: "カンボジア",
  countryEn: "Cambodia",
};
