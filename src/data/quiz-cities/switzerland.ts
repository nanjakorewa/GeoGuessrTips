/** Top ~30 Swiss cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const SWITZERLAND_CITIES: CityEntry[] = [
  { id: "zurich",        nameJa: "チューリヒ",         nameEn: "Zürich",          lat: 47.3769, lng:  8.5417, pop: 421 },
  { id: "geneva",        nameJa: "ジュネーヴ",         nameEn: "Genève",          lat: 46.2044, lng:  6.1432, pop: 203 },
  { id: "basel",         nameJa: "バーゼル",           nameEn: "Basel",           lat: 47.5596, lng:  7.5886, pop: 175 },
  { id: "bern",          nameJa: "ベルン",             nameEn: "Bern",            lat: 46.9480, lng:  7.4474, pop: 134 },
  { id: "lausanne",      nameJa: "ローザンヌ",         nameEn: "Lausanne",        lat: 46.5197, lng:  6.6323, pop: 144 },
  { id: "winterthur",    nameJa: "ヴィンタートゥール", nameEn: "Winterthur",      lat: 47.5022, lng:  8.7245, pop: 117 },
  { id: "lucerne",       nameJa: "ルツェルン",         nameEn: "Luzern",          lat: 47.0502, lng:  8.3093, pop: 83 },
  { id: "st-gallen",     nameJa: "ザンクト・ガレン",   nameEn: "St. Gallen",      lat: 47.4245, lng:  9.3767, pop: 76 },
  { id: "lugano",        nameJa: "ルガーノ",           nameEn: "Lugano",          lat: 46.0037, lng:  8.9511, pop: 62 },
  { id: "biel",          nameJa: "ビール",             nameEn: "Biel/Bienne",     lat: 47.1368, lng:  7.2466, pop: 56 },
  { id: "thun",          nameJa: "トゥーン",           nameEn: "Thun",            lat: 46.7580, lng:  7.6280, pop: 47 },
  { id: "koniz",         nameJa: "ケーニス",           nameEn: "Köniz",           lat: 46.9230, lng:  7.4145, pop: 43 },
  { id: "la-chaux",      nameJa: "ラ・ショー・ド・フォン", nameEn: "La Chaux-de-Fonds", lat: 47.0998, lng:  6.8253, pop: 38 },
  { id: "fribourg",      nameJa: "フリブール",         nameEn: "Fribourg",        lat: 46.8065, lng:  7.1610, pop: 39 },
  { id: "schaffhausen",  nameJa: "シャフハウゼン",     nameEn: "Schaffhausen",    lat: 47.6968, lng:  8.6346, pop: 37 },
  { id: "vernier",       nameJa: "ヴェルニエ",         nameEn: "Vernier",         lat: 46.2167, lng:  6.0833, pop: 36 },
  { id: "chur",          nameJa: "クール",             nameEn: "Chur",            lat: 46.8499, lng:  9.5329, pop: 37 },
  { id: "neuchatel",     nameJa: "ヌーシャテル",       nameEn: "Neuchâtel",       lat: 46.9930, lng:  6.9310, pop: 33 },
  { id: "uster",         nameJa: "ウスター",           nameEn: "Uster",           lat: 47.3489, lng:  8.7203, pop: 35 },
  { id: "sion",          nameJa: "シオン",             nameEn: "Sion",            lat: 46.2270, lng:  7.3596, pop: 35 },
  { id: "zug",           nameJa: "ツーク",             nameEn: "Zug",             lat: 47.1662, lng:  8.5155, pop: 31 },
  { id: "yverdon",       nameJa: "イヴェルドン・レ・バン", nameEn: "Yverdon-les-Bains", lat: 46.7785, lng: 6.6411, pop: 30 },
  { id: "emmen",         nameJa: "エメン",             nameEn: "Emmen",           lat: 47.0790, lng:  8.3000, pop: 30 },
  { id: "rapperswil",    nameJa: "ラパースヴィル・ヨナ", nameEn: "Rapperswil-Jona", lat: 47.2261, lng:  8.8350, pop: 28 },
  { id: "kreuzlingen",   nameJa: "クロイツリンゲン",   nameEn: "Kreuzlingen",     lat: 47.6500, lng:  9.1742, pop: 22 },
  { id: "dubendorf",     nameJa: "デューベンドルフ",   nameEn: "Dübendorf",       lat: 47.4000, lng:  8.6167, pop: 30 },
  { id: "dietikon",      nameJa: "ディーティコン",     nameEn: "Dietikon",        lat: 47.4023, lng:  8.4017, pop: 28 },
  { id: "frauenfeld",    nameJa: "フラウエンフェルト", nameEn: "Frauenfeld",      lat: 47.5536, lng:  8.8975, pop: 26 },
  { id: "wettingen",     nameJa: "ヴェッティンゲン",   nameEn: "Wettingen",       lat: 47.4683, lng:  8.3186, pop: 21 },
  { id: "wil",           nameJa: "ヴィル",             nameEn: "Wil",             lat: 47.4615, lng:  9.0498, pop: 24 },
  { id: "kloten",        nameJa: "クローテン",         nameEn: "Kloten",          lat: 47.4480, lng:  8.5827, pop: 21 },
  { id: "montreux",      nameJa: "モントルー",         nameEn: "Montreux",        lat: 46.4312, lng:  6.9107, pop: 27 },
];

export const SWITZERLAND_PROJECTION: CityProjection = {
  minLon: 5.954809,
  minLat: 45.820718,
  maxLon: 10.466627,
  maxLat: 47.801166,
  cosLat: 0.684408,
  scale: 176.170151,
  offX: 8,
  offY: 145.552089,
};

export const SWITZERLAND_META: CityCountryMeta = {
  slug: "switzerland",
  continent: "europe",
  svgPath: "/maps/countries/switzerland.svg",
  countryJa: "スイス",
  countryEn: "Switzerland",
};
