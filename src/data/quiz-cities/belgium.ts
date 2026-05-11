/** Top ~30 Belgian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const BELGIUM_CITIES: CityEntry[] = [
  { id: "brussels",      nameJa: "ブリュッセル",       nameEn: "Bruxelles",       lat: 50.8503, lng:  4.3517, pop: 1218 },
  { id: "antwerp",       nameJa: "アントワープ",       nameEn: "Antwerpen",       lat: 51.2194, lng:  4.4025, pop: 535 },
  { id: "ghent",         nameJa: "ヘント",             nameEn: "Gent",            lat: 51.0543, lng:  3.7174, pop: 264 },
  { id: "charleroi",     nameJa: "シャルルロワ",       nameEn: "Charleroi",       lat: 50.4108, lng:  4.4446, pop: 202 },
  { id: "liege",         nameJa: "リエージュ",         nameEn: "Liège",           lat: 50.6326, lng:  5.5797, pop: 197 },
  { id: "bruges",        nameJa: "ブルッヘ",           nameEn: "Brugge",          lat: 51.2093, lng:  3.2247, pop: 118 },
  { id: "namur",         nameJa: "ナミュール",         nameEn: "Namur",           lat: 50.4674, lng:  4.8720, pop: 111 },
  { id: "leuven",        nameJa: "ルーヴェン",         nameEn: "Leuven",          lat: 50.8798, lng:  4.7005, pop: 102 },
  { id: "mons",          nameJa: "モンス",             nameEn: "Mons",            lat: 50.4542, lng:  3.9514, pop: 95 },
  { id: "mechelen",      nameJa: "メヘレン",           nameEn: "Mechelen",        lat: 51.0259, lng:  4.4776, pop: 87 },
  { id: "aalst",         nameJa: "アールスト",         nameEn: "Aalst",           lat: 50.9367, lng:  4.0407, pop: 87 },
  { id: "kortrijk",      nameJa: "コルトレイク",       nameEn: "Kortrijk",        lat: 50.8278, lng:  3.2649, pop: 78 },
  { id: "hasselt",       nameJa: "ハッセルト",         nameEn: "Hasselt",         lat: 50.9307, lng:  5.3378, pop: 78 },
  { id: "sint-niklaas",  nameJa: "シント・ニクラース", nameEn: "Sint-Niklaas",    lat: 51.1647, lng:  4.1448, pop: 77 },
  { id: "ostend",        nameJa: "オーステンデ",       nameEn: "Oostende",        lat: 51.2287, lng:  2.9189, pop: 71 },
  { id: "tournai",       nameJa: "トゥルネー",         nameEn: "Tournai",         lat: 50.6056, lng:  3.3878, pop: 68 },
  { id: "genk",          nameJa: "ヘンク",             nameEn: "Genk",            lat: 50.9655, lng:  5.5004, pop: 66 },
  { id: "seraing",       nameJa: "セラン",             nameEn: "Seraing",         lat: 50.5847, lng:  5.5028, pop: 64 },
  { id: "roeselare",     nameJa: "ロゼラーレ",         nameEn: "Roeselare",       lat: 50.9469, lng:  3.1217, pop: 64 },
  { id: "verviers",      nameJa: "ヴェルヴィエ",       nameEn: "Verviers",        lat: 50.5910, lng:  5.8625, pop: 56 },
  { id: "mouscron",      nameJa: "ムスクロン",         nameEn: "Mouscron",        lat: 50.7444, lng:  3.2092, pop: 58 },
  { id: "beveren",       nameJa: "ベフェレン",         nameEn: "Beveren",         lat: 51.2120, lng:  4.2553, pop: 51 },
  { id: "dendermonde",   nameJa: "デンデルモンデ",     nameEn: "Dendermonde",     lat: 51.0286, lng:  4.1011, pop: 47 },
  { id: "turnhout",      nameJa: "トゥルンハウト",     nameEn: "Turnhout",        lat: 51.3217, lng:  4.9447, pop: 46 },
  { id: "lokeren",       nameJa: "ロケレン",           nameEn: "Lokeren",         lat: 51.1031, lng:  3.9938, pop: 42 },
  { id: "vilvoorde",     nameJa: "ヴィルフォールデ",   nameEn: "Vilvoorde",       lat: 50.9275, lng:  4.4267, pop: 46 },
  { id: "la-louviere",   nameJa: "ラ・ルヴィエール",   nameEn: "La Louvière",     lat: 50.4783, lng:  4.1869, pop: 81 },
  { id: "wavre",         nameJa: "ワーヴル",           nameEn: "Wavre",           lat: 50.7167, lng:  4.6000, pop: 34 },
  { id: "ieper",         nameJa: "イーペル",           nameEn: "Ieper",           lat: 50.8514, lng:  2.8856, pop: 35 },
  { id: "deinze",        nameJa: "デインゼ",           nameEn: "Deinze",          lat: 50.9842, lng:  3.5283, pop: 44 },
  { id: "uccle",         nameJa: "ユックル",           nameEn: "Uccle",           lat: 50.8003, lng:  4.3372, pop: 84 },
  { id: "schaerbeek",    nameJa: "スハールベーク",     nameEn: "Schaerbeek",      lat: 50.8676, lng:  4.3737, pop: 131 },
  { id: "anderlecht",    nameJa: "アンデルレヒト",     nameEn: "Anderlecht",      lat: 50.8333, lng:  4.3333, pop: 121 },
  { id: "molenbeek",     nameJa: "モレンベーク",       nameEn: "Molenbeek-Saint-Jean", lat: 50.8537, lng:  4.3253, pop: 99 },
];

export const BELGIUM_PROJECTION: CityProjection = {
  minLon: 2.5218,
  minLat: 49.495224,
  maxLon: 6.374525,
  maxLat: 51.496238,
  cosLat: 0.636136,
  scale: 221.963269,
  offX: 8,
  offY: 97.924196,
};

export const BELGIUM_META: CityCountryMeta = {
  slug: "belgium",
  continent: "europe",
  svgPath: "/maps/countries/belgium.svg",
  countryJa: "ベルギー",
  countryEn: "Belgium",
};
