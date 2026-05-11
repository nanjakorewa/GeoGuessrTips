/** Top ~25 New Zealand cities (urban areas) ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const NEW_ZEALAND_CITIES: CityEntry[] = [
  { id: "auckland",      nameJa: "オークランド",       nameEn: "Auckland",        lat: -36.8485, lng: 174.7633, pop: 1463 },
  { id: "christchurch",  nameJa: "クライストチャーチ", nameEn: "Christchurch",    lat: -43.5321, lng: 172.6362, pop: 396 },
  { id: "wellington",    nameJa: "ウェリントン",       nameEn: "Wellington",      lat: -41.2865, lng: 174.7762, pop: 217 },
  { id: "hamilton",      nameJa: "ハミルトン",         nameEn: "Hamilton",        lat: -37.7870, lng: 175.2793, pop: 184 },
  { id: "tauranga",      nameJa: "タウランガ",         nameEn: "Tauranga",        lat: -37.6878, lng: 176.1651, pop: 162 },
  { id: "lower-hutt",    nameJa: "ロウアー・ハット",   nameEn: "Lower Hutt",      lat: -41.2160, lng: 174.9100, pop: 113 },
  { id: "dunedin",       nameJa: "ダニーデン",         nameEn: "Dunedin",         lat: -45.8788, lng: 170.5028, pop: 105 },
  { id: "palmerston-north", nameJa: "パーマストン・ノース", nameEn: "Palmerston North", lat: -40.3523, lng: 175.6082, pop: 91 },
  { id: "napier",        nameJa: "ネイピア",           nameEn: "Napier",          lat: -39.4928, lng: 176.9120, pop: 67 },
  { id: "porirua",       nameJa: "ポリルア",           nameEn: "Porirua",         lat: -41.1380, lng: 174.8407, pop: 60 },
  { id: "hibiscus-coast", nameJa: "ハイビスカス・コースト", nameEn: "Hibiscus Coast", lat: -36.5872, lng: 174.7027, pop: 59 },
  { id: "rotorua",       nameJa: "ロトルア",           nameEn: "Rotorua",         lat: -38.1368, lng: 176.2497, pop: 58 },
  { id: "new-plymouth",  nameJa: "ニュー・プリマス",   nameEn: "New Plymouth",    lat: -39.0556, lng: 174.0752, pop: 58 },
  { id: "whangarei",     nameJa: "ファンガレイ",       nameEn: "Whangārei",       lat: -35.7280, lng: 174.3236, pop: 56 },
  { id: "nelson",        nameJa: "ネルソン",           nameEn: "Nelson",          lat: -41.2706, lng: 173.2840, pop: 52 },
  { id: "invercargill",  nameJa: "インバーカーギル",   nameEn: "Invercargill",    lat: -46.4132, lng: 168.3538, pop: 53 },
  { id: "upper-hutt",    nameJa: "アッパー・ハット",   nameEn: "Upper Hutt",      lat: -41.1230, lng: 175.0708, pop: 47 },
  { id: "whanganui",     nameJa: "ファンガヌイ",       nameEn: "Whanganui",       lat: -39.9301, lng: 175.0480, pop: 43 },
  { id: "gisborne",      nameJa: "ギズボーン",         nameEn: "Gisborne",        lat: -38.6628, lng: 178.0176, pop: 38 },
  { id: "blenheim",      nameJa: "ブレナム",           nameEn: "Blenheim",        lat: -41.5134, lng: 173.9612, pop: 32 },
  { id: "pukekohe",      nameJa: "プケコヘ",           nameEn: "Pukekohe",        lat: -37.2017, lng: 174.9024, pop: 34 },
  { id: "timaru",        nameJa: "ティマル",           nameEn: "Timaru",          lat: -44.3904, lng: 171.2373, pop: 29 },
  { id: "taupo",         nameJa: "タウポ",             nameEn: "Taupō",           lat: -38.6857, lng: 176.0702, pop: 29 },
  { id: "masterton",     nameJa: "マスタートン",       nameEn: "Masterton",       lat: -40.9595, lng: 175.6580, pop: 22 },
  { id: "levin",         nameJa: "レビン",             nameEn: "Levin",           lat: -40.6219, lng: 175.2829, pop: 21 },
  { id: "ashburton",     nameJa: "アシュバートン",     nameEn: "Ashburton",       lat: -43.9039, lng: 171.7444, pop: 20 },
  { id: "queenstown",    nameJa: "クイーンズタウン",   nameEn: "Queenstown",      lat: -45.0312, lng: 168.6626, pop: 16 },
  { id: "feilding",      nameJa: "フィールディング",   nameEn: "Feilding",        lat: -40.2249, lng: 175.5680, pop: 16 },
  { id: "tokoroa",       nameJa: "トコロア",           nameEn: "Tokoroa",         lat: -38.2244, lng: 175.8717, pop: 14 },
  { id: "hawera",        nameJa: "ハウェラ",           nameEn: "Hawera",          lat: -39.5917, lng: 174.2833, pop: 11 },
];

export const NEW_ZEALAND_PROJECTION: CityProjection = {
  minLon: -176.85497,
  minLat: -47.277602,
  maxLon: 178.566173,
  maxLat: -34.397638,
  cosLat: 0.756566,
  scale: 2.023061,
  offX: 8,
  offY: 306.971526,
};

export const NEW_ZEALAND_META: CityCountryMeta = {
  slug: "new-zealand",
  continent: "oceania",
  svgPath: "/maps/countries/new-zealand.svg",
  countryJa: "ニュージーランド",
  countryEn: "New Zealand",
};
