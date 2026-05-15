/** Top ~20 Namibian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const NAMIBIA_CITIES: CityEntry[] = [
  { id: "windhoek",       nameJa: "ヴィントフック",     nameEn: "Windhoek",       lat: -22.5594, lng:  17.0832, pop: 486 },
  { id: "rundu",          nameJa: "ルンドゥ",           nameEn: "Rundu",          lat: -17.9333, lng:  19.7667, pop: 87 },
  { id: "walvis-bay",     nameJa: "ウォルビスベイ",     nameEn: "Walvis Bay",     lat: -22.9575, lng:  14.5053, pop: 85 },
  { id: "swakopmund",     nameJa: "スワコプムント",     nameEn: "Swakopmund",     lat: -22.6792, lng:  14.5272, pop: 75 },
  { id: "oshakati",       nameJa: "オシャカティ",       nameEn: "Oshakati",       lat: -17.7833, lng:  15.7000, pop: 40 },
  { id: "katima-mulilo",  nameJa: "カティマ・ムリロ",   nameEn: "Katima Mulilo",  lat: -17.5000, lng:  24.2667, pop: 38 },
  { id: "rehoboth",       nameJa: "レホボト",           nameEn: "Rehoboth",       lat: -23.3167, lng:  17.0833, pop: 30 },
  { id: "otjiwarongo",    nameJa: "オチワロンゴ",       nameEn: "Otjiwarongo",    lat: -20.4637, lng:  16.6478, pop: 30 },
  { id: "ondangwa",       nameJa: "オンダングワ",       nameEn: "Ondangwa",       lat: -17.9167, lng:  15.9500, pop: 25 },
  { id: "ongwediva",      nameJa: "オングウェディバ",   nameEn: "Ongwediva",      lat: -17.7833, lng:  15.7700, pop: 25 },
  { id: "grootfontein",   nameJa: "グルートフォンテイン", nameEn: "Grootfontein", lat: -19.5667, lng:  18.1167, pop: 25 },
  { id: "okahandja",      nameJa: "オカハンジャ",       nameEn: "Okahandja",      lat: -21.9833, lng:  16.9167, pop: 24 },
  { id: "tsumeb",         nameJa: "ツメブ",             nameEn: "Tsumeb",         lat: -19.2333, lng:  17.7167, pop: 21 },
  { id: "keetmanshoop",   nameJa: "キートマンスフープ", nameEn: "Keetmanshoop",   lat: -26.5833, lng:  18.1333, pop: 21 },
  { id: "gobabis",        nameJa: "ゴバビス",           nameEn: "Gobabis",        lat: -22.4500, lng:  18.9667, pop: 19 },
  { id: "outapi",         nameJa: "オウタピ",           nameEn: "Outapi",         lat: -17.5000, lng:  14.9833, pop: 15 },
  { id: "mariental",      nameJa: "マリエンタール",     nameEn: "Mariental",      lat: -24.6333, lng:  17.9667, pop: 13 },
  { id: "luderitz",       nameJa: "リューデリッツ",     nameEn: "Lüderitz",       lat: -26.6481, lng:  15.1525, pop: 13 },
  { id: "opuwo",          nameJa: "オプウォ",           nameEn: "Opuwo",          lat: -18.0667, lng:  13.8333, pop: 12 },
  { id: "karibib",        nameJa: "カリビブ",           nameEn: "Karibib",        lat: -21.9333, lng:  15.8333, pop: 7 },
  { id: "omaruru",        nameJa: "オマルル",           nameEn: "Omaruru",        lat: -21.4333, lng:  15.9333, pop: 6 },
];

export const NAMIBIA_PROJECTION: CityProjection = {
  minLon: 11.717621,
  minLat: -28.959368,
  maxLon: 25.259781,
  maxLat: -16.951057,
  cosLat: 0.92081,
  scale: 43.625552,
  offX: 8,
  offY: 58.065405,
};

export const NAMIBIA_META: CityCountryMeta = {
  slug: "namibia",
  continent: "africa",
  svgPath: "/maps/countries/namibia.svg",
  countryJa: "ナミビア",
  countryEn: "Namibia",
};
