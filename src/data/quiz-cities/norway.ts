/** Top ~30 Norwegian cities (municipality / urban area) ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const NORWAY_CITIES: CityEntry[] = [
  { id: "oslo",          nameJa: "オスロ",             nameEn: "Oslo",            lat: 59.9139, lng: 10.7522, pop: 717 },
  { id: "bergen",        nameJa: "ベルゲン",           nameEn: "Bergen",          lat: 60.3913, lng:  5.3221, pop: 288 },
  { id: "stavanger",     nameJa: "スタヴァンゲル",     nameEn: "Stavanger",       lat: 58.9700, lng:  5.7331, pop: 148 },
  { id: "trondheim",     nameJa: "トロンハイム",       nameEn: "Trondheim",       lat: 63.4305, lng: 10.3951, pop: 213 },
  { id: "drammen",       nameJa: "ドラメン",           nameEn: "Drammen",         lat: 59.7440, lng: 10.2045, pop: 103 },
  { id: "fredrikstad",   nameJa: "フレドリクスタ",     nameEn: "Fredrikstad",     lat: 59.2181, lng: 10.9298, pop: 84 },
  { id: "kristiansand",  nameJa: "クリスチャンサン",   nameEn: "Kristiansand",    lat: 58.1599, lng:  8.0182, pop: 116 },
  { id: "sandnes",       nameJa: "サンネス",           nameEn: "Sandnes",         lat: 58.8517, lng:  5.7361, pop: 82 },
  { id: "tromso",        nameJa: "トロムソ",           nameEn: "Tromsø",          lat: 69.6492, lng: 18.9553, pop: 78 },
  { id: "sarpsborg",     nameJa: "サルプスボルグ",     nameEn: "Sarpsborg",       lat: 59.2839, lng: 11.1097, pop: 60 },
  { id: "skien",         nameJa: "シーエン",           nameEn: "Skien",           lat: 59.2096, lng:  9.6088, pop: 56 },
  { id: "alesund",       nameJa: "オーレスン",         nameEn: "Ålesund",         lat: 62.4722, lng:  6.1495, pop: 65 },
  { id: "sandefjord",    nameJa: "サンデフィヨル",     nameEn: "Sandefjord",      lat: 59.1314, lng: 10.2166, pop: 64 },
  { id: "haugesund",     nameJa: "ハウゲスン",         nameEn: "Haugesund",       lat: 59.4138, lng:  5.2680, pop: 45 },
  { id: "tonsberg",      nameJa: "トンスベルグ",       nameEn: "Tønsberg",        lat: 59.2674, lng: 10.4076, pop: 56 },
  { id: "moss",          nameJa: "モス",               nameEn: "Moss",            lat: 59.4370, lng: 10.6650, pop: 50 },
  { id: "porsgrunn",     nameJa: "ポルスグルン",       nameEn: "Porsgrunn",       lat: 59.1407, lng:  9.6562, pop: 37 },
  { id: "bodo",          nameJa: "ボードー",           nameEn: "Bodø",            lat: 67.2804, lng: 14.4049, pop: 52 },
  { id: "arendal",       nameJa: "アーレンダール",     nameEn: "Arendal",         lat: 58.4612, lng:  8.7724, pop: 45 },
  { id: "larvik",        nameJa: "ラルヴィク",         nameEn: "Larvik",          lat: 59.0540, lng: 10.0357, pop: 47 },
  { id: "halden",        nameJa: "ハルデン",           nameEn: "Halden",          lat: 59.1242, lng: 11.3877, pop: 31 },
  { id: "lillehammer",   nameJa: "リレハンメル",       nameEn: "Lillehammer",     lat: 61.1153, lng: 10.4663, pop: 30 },
  { id: "gjovik",        nameJa: "ヨーヴィク",         nameEn: "Gjøvik",          lat: 60.7957, lng: 10.6915, pop: 31 },
  { id: "molde",         nameJa: "モルデ",             nameEn: "Molde",           lat: 62.7372, lng:  7.1607, pop: 32 },
  { id: "harstad",       nameJa: "ハールスタ",         nameEn: "Harstad",         lat: 68.7977, lng: 16.5413, pop: 25 },
  { id: "hamar",         nameJa: "ハーマル",           nameEn: "Hamar",           lat: 60.7945, lng: 11.0680, pop: 33 },
  { id: "kongsberg",     nameJa: "コングスベルグ",     nameEn: "Kongsberg",       lat: 59.6655, lng:  9.6492, pop: 28 },
  { id: "narvik",        nameJa: "ナルヴィク",         nameEn: "Narvik",          lat: 68.4385, lng: 17.4272, pop: 22 },
  { id: "alta",          nameJa: "アルタ",             nameEn: "Alta",            lat: 69.9689, lng: 23.2716, pop: 22 },
  { id: "honefoss",      nameJa: "ホーネフォス",       nameEn: "Hønefoss",        lat: 60.1685, lng: 10.2546, pop: 17 },
  { id: "elverum",       nameJa: "エルヴェルム",       nameEn: "Elverum",         lat: 60.8830, lng: 11.5635, pop: 22 },
];

export const NORWAY_PROJECTION: CityProjection = {
  minLon: -9.117421,
  minLat: -54.462498,
  maxLon: 33.640391,
  maxLat: 80.770087,
  cosLat: 0.973763,
  scale: 4.614273,
  offX: 183.940158,
  offY: 8,
};

export const NORWAY_META: CityCountryMeta = {
  slug: "norway",
  continent: "europe",
  svgPath: "/maps/countries/norway.svg",
  countryJa: "ノルウェー",
  countryEn: "Norway",
};
