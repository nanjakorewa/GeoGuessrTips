/** Top ~30 Australian cities (urban areas) ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const AUSTRALIA_CITIES: CityEntry[] = [
  { id: "sydney",        nameJa: "シドニー",           nameEn: "Sydney",          lat: -33.8688, lng: 151.2093, pop: 5312 },
  { id: "melbourne",     nameJa: "メルボルン",         nameEn: "Melbourne",       lat: -37.8136, lng: 144.9631, pop: 5079 },
  { id: "brisbane",      nameJa: "ブリスベン",         nameEn: "Brisbane",        lat: -27.4698, lng: 153.0251, pop: 2606 },
  { id: "perth",         nameJa: "パース",             nameEn: "Perth",           lat: -31.9523, lng: 115.8613, pop: 2192 },
  { id: "adelaide",      nameJa: "アデレード",         nameEn: "Adelaide",        lat: -34.9285, lng: 138.6007, pop: 1418 },
  { id: "gold-coast",    nameJa: "ゴールドコースト",   nameEn: "Gold Coast",      lat: -28.0167, lng: 153.4000, pop: 720 },
  { id: "newcastle",     nameJa: "ニューカッスル",     nameEn: "Newcastle",       lat: -32.9283, lng: 151.7817, pop: 446 },
  { id: "canberra",      nameJa: "キャンベラ",         nameEn: "Canberra",        lat: -35.2809, lng: 149.1300, pop: 462 },
  { id: "sunshine-coast", nameJa: "サンシャインコースト", nameEn: "Sunshine Coast", lat: -26.6500, lng: 153.0667, pop: 358 },
  { id: "central-coast", nameJa: "セントラルコースト", nameEn: "Central Coast",   lat: -33.4250, lng: 151.3416, pop: 343 },
  { id: "wollongong",    nameJa: "ウロンゴン",         nameEn: "Wollongong",      lat: -34.4278, lng: 150.8931, pop: 305 },
  { id: "geelong",       nameJa: "ジーロング",         nameEn: "Geelong",         lat: -38.1499, lng: 144.3617, pop: 290 },
  { id: "hobart",        nameJa: "ホバート",           nameEn: "Hobart",          lat: -42.8821, lng: 147.3272, pop: 250 },
  { id: "townsville",    nameJa: "タウンズビル",       nameEn: "Townsville",      lat: -19.2589, lng: 146.8169, pop: 196 },
  { id: "cairns",        nameJa: "ケアンズ",           nameEn: "Cairns",          lat: -16.9203, lng: 145.7710, pop: 159 },
  { id: "toowoomba",     nameJa: "トゥーンバ",         nameEn: "Toowoomba",       lat: -27.5598, lng: 151.9507, pop: 144 },
  { id: "darwin",        nameJa: "ダーウィン",         nameEn: "Darwin",          lat: -12.4634, lng: 130.8456, pop: 148 },
  { id: "ballarat",      nameJa: "バララット",         nameEn: "Ballarat",        lat: -37.5622, lng: 143.8503, pop: 113 },
  { id: "bendigo",       nameJa: "ベンディゴ",         nameEn: "Bendigo",         lat: -36.7570, lng: 144.2794, pop: 102 },
  { id: "launceston",    nameJa: "ローンセストン",     nameEn: "Launceston",      lat: -41.4391, lng: 147.1358, pop: 88 },
  { id: "albury",        nameJa: "オールバリー",       nameEn: "Albury",          lat: -36.0737, lng: 146.9135, pop: 95 },
  { id: "mackay",        nameJa: "マッカイ",           nameEn: "Mackay",          lat: -21.1559, lng: 149.1772, pop: 80 },
  { id: "rockhampton",   nameJa: "ロックハンプトン",   nameEn: "Rockhampton",     lat: -23.3781, lng: 150.5100, pop: 81 },
  { id: "bunbury",       nameJa: "バンバリー",         nameEn: "Bunbury",         lat: -33.3257, lng: 115.6411, pop: 76 },
  { id: "bundaberg",     nameJa: "バンダバーグ",       nameEn: "Bundaberg",       lat: -24.8650, lng: 152.3486, pop: 74 },
  { id: "wagga-wagga",   nameJa: "ワガワガ",           nameEn: "Wagga Wagga",     lat: -35.1170, lng: 147.3690, pop: 56 },
  { id: "hervey-bay",    nameJa: "ハービー・ベイ",     nameEn: "Hervey Bay",      lat: -25.2882, lng: 152.8175, pop: 56 },
  { id: "coffs-harbour", nameJa: "コフス・ハーバー",   nameEn: "Coffs Harbour",   lat: -30.2963, lng: 153.1135, pop: 73 },
  { id: "shepparton",    nameJa: "シェパートン",       nameEn: "Shepparton",      lat: -36.3805, lng: 145.3982, pop: 51 },
  { id: "port-macquarie", nameJa: "ポート・マッコーリー", nameEn: "Port Macquarie", lat: -31.4333, lng: 152.9000, pop: 48 },
  { id: "alice-springs", nameJa: "アリススプリングス", nameEn: "Alice Springs",   lat: -23.6980, lng: 133.8807, pop: 27 },
];

export const AUSTRALIA_PROJECTION: CityProjection = {
  minLon: 112.919444,
  minLat: -54.750421,
  maxLon: 158.963227,
  maxLat: -9.369806,
  cosLat: 0.847492,
  scale: 13.750365,
  offX: 11.718551,
  offY: 8,
};

export const AUSTRALIA_META: CityCountryMeta = {
  slug: "australia",
  continent: "oceania",
  svgPath: "/maps/countries/australia.svg",
  countryJa: "オーストラリア",
  countryEn: "Australia",
};
