/** Top ~30 Finnish cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const FINLAND_CITIES: CityEntry[] = [
  { id: "helsinki",     nameJa: "ヘルシンキ",         nameEn: "Helsinki",        lat: 60.1699, lng: 24.9384, pop: 658 },
  { id: "espoo",        nameJa: "エスポー",           nameEn: "Espoo",           lat: 60.2055, lng: 24.6559, pop: 308 },
  { id: "tampere",      nameJa: "タンペレ",           nameEn: "Tampere",         lat: 61.4978, lng: 23.7610, pop: 250 },
  { id: "vantaa",       nameJa: "ヴァンター",         nameEn: "Vantaa",          lat: 60.2934, lng: 25.0378, pop: 242 },
  { id: "oulu",         nameJa: "オウル",             nameEn: "Oulu",            lat: 65.0121, lng: 25.4651, pop: 211 },
  { id: "turku",        nameJa: "トゥルク",           nameEn: "Turku",           lat: 60.4518, lng: 22.2666, pop: 200 },
  { id: "jyvaskyla",    nameJa: "ユヴァスキュラ",     nameEn: "Jyväskylä",       lat: 62.2426, lng: 25.7473, pop: 145 },
  { id: "lahti",        nameJa: "ラハティ",           nameEn: "Lahti",           lat: 60.9827, lng: 25.6612, pop: 121 },
  { id: "kuopio",       nameJa: "クオピオ",           nameEn: "Kuopio",          lat: 62.8924, lng: 27.6783, pop: 122 },
  { id: "pori",         nameJa: "ポリ",               nameEn: "Pori",            lat: 61.4847, lng: 21.7972, pop: 84 },
  { id: "kouvola",      nameJa: "コウヴォラ",         nameEn: "Kouvola",         lat: 60.8678, lng: 26.7041, pop: 80 },
  { id: "joensuu",      nameJa: "ヨエンスー",         nameEn: "Joensuu",         lat: 62.6010, lng: 29.7636, pop: 77 },
  { id: "lappeenranta", nameJa: "ラッペーンランタ",   nameEn: "Lappeenranta",    lat: 61.0587, lng: 28.1887, pop: 72 },
  { id: "hameenlinna",  nameJa: "ハメーンリンナ",     nameEn: "Hämeenlinna",     lat: 60.9959, lng: 24.4644, pop: 68 },
  { id: "vaasa",        nameJa: "ヴァーサ",           nameEn: "Vaasa",           lat: 63.0951, lng: 21.6165, pop: 67 },
  { id: "seinajoki",    nameJa: "セイナヨキ",         nameEn: "Seinäjoki",       lat: 62.7903, lng: 22.8403, pop: 64 },
  { id: "rovaniemi",    nameJa: "ロヴァニエミ",       nameEn: "Rovaniemi",       lat: 66.5039, lng: 25.7294, pop: 64 },
  { id: "mikkeli",      nameJa: "ミッケリ",           nameEn: "Mikkeli",         lat: 61.6886, lng: 27.2723, pop: 52 },
  { id: "kotka",        nameJa: "コトカ",             nameEn: "Kotka",           lat: 60.4664, lng: 26.9458, pop: 51 },
  { id: "porvoo",       nameJa: "ポルヴォー",         nameEn: "Porvoo",          lat: 60.3923, lng: 25.6650, pop: 51 },
  { id: "salo",         nameJa: "サロ",               nameEn: "Salo",            lat: 60.3851, lng: 23.1296, pop: 51 },
  { id: "kokkola",      nameJa: "コッコラ",           nameEn: "Kokkola",         lat: 63.8377, lng: 23.1300, pop: 48 },
  { id: "lohja",        nameJa: "ロホヤ",             nameEn: "Lohja",           lat: 60.2519, lng: 24.0658, pop: 45 },
  { id: "hyvinkaa",     nameJa: "ヒュヴィンカー",     nameEn: "Hyvinkää",        lat: 60.6307, lng: 24.8587, pop: 47 },
  { id: "jarvenpaa",    nameJa: "ヤルヴェンパー",     nameEn: "Järvenpää",       lat: 60.4733, lng: 25.0900, pop: 45 },
  { id: "rauma",        nameJa: "ラウマ",             nameEn: "Rauma",           lat: 61.1287, lng: 21.5114, pop: 39 },
  { id: "kajaani",      nameJa: "カヤーニ",           nameEn: "Kajaani",         lat: 64.2273, lng: 27.7286, pop: 36 },
  { id: "tuusula",      nameJa: "トゥースラ",         nameEn: "Tuusula",         lat: 60.4030, lng: 25.0264, pop: 39 },
  { id: "kerava",       nameJa: "ケラヴァ",           nameEn: "Kerava",          lat: 60.4032, lng: 25.1041, pop: 37 },
  { id: "imatra",       nameJa: "イマトラ",           nameEn: "Imatra",          lat: 61.1717, lng: 28.7592, pop: 25 },
  { id: "savonlinna",   nameJa: "サヴォンリンナ",     nameEn: "Savonlinna",      lat: 61.8693, lng: 28.8861, pop: 32 },
];

export const FINLAND_PROJECTION: CityProjection = {
  minLon: 20.623165,
  minLat: 59.811225,
  maxLon: 31.569525,
  maxLat: 70.07531,
  cosLat: 0.423515,
  scale: 60.794508,
  offX: 139.079771,
  offY: 8,
};

export const FINLAND_META: CityCountryMeta = {
  slug: "finland",
  continent: "europe",
  svgPath: "/maps/countries/finland.svg",
  countryJa: "フィンランド",
  countryEn: "Finland",
};
