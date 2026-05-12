/** Top ~20 Slovenian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const SLOVENIA_CITIES: CityEntry[] = [
  { id: "ljubljana",     nameJa: "リュブリャナ",       nameEn: "Ljubljana",       lat: 46.0569, lng: 14.5058, pop: 285 },
  { id: "maribor",       nameJa: "マリボル",           nameEn: "Maribor",         lat: 46.5547, lng: 15.6459, pop: 96 },
  { id: "kranj",         nameJa: "クラーニ",           nameEn: "Kranj",           lat: 46.2389, lng: 14.3556, pop: 38 },
  { id: "celje",         nameJa: "ツェリエ",           nameEn: "Celje",           lat: 46.2311, lng: 15.2683, pop: 38 },
  { id: "koper",         nameJa: "コペル",             nameEn: "Koper",           lat: 45.5483, lng: 13.7298, pop: 25 },
  { id: "velenje",       nameJa: "ヴェレニェ",         nameEn: "Velenje",         lat: 46.3592, lng: 15.1100, pop: 25 },
  { id: "novo-mesto",    nameJa: "ノヴォ・メスト",     nameEn: "Novo Mesto",      lat: 45.8000, lng: 15.1667, pop: 23 },
  { id: "ptuj",          nameJa: "プトゥイ",           nameEn: "Ptuj",            lat: 46.4203, lng: 15.8703, pop: 17 },
  { id: "trbovlje",      nameJa: "トルボヴリェ",       nameEn: "Trbovlje",        lat: 46.1547, lng: 15.0530, pop: 14 },
  { id: "kamnik",        nameJa: "カムニク",           nameEn: "Kamnik",          lat: 46.2253, lng: 14.6128, pop: 14 },
  { id: "jesenice",      nameJa: "イェセニツェ",       nameEn: "Jesenice",        lat: 46.4364, lng: 14.0539, pop: 13 },
  { id: "domzale",       nameJa: "ドムジャレ",         nameEn: "Domžale",         lat: 46.1378, lng: 14.5953, pop: 13 },
  { id: "skofja-loka",   nameJa: "シュコフィヤ・ロカ", nameEn: "Škofja Loka",     lat: 46.1656, lng: 14.3061, pop: 12 },
  { id: "murska-sobota", nameJa: "ムルスカ・ソボタ",   nameEn: "Murska Sobota",   lat: 46.6614, lng: 16.1664, pop: 11 },
  { id: "izola",         nameJa: "イゾラ",             nameEn: "Izola",           lat: 45.5378, lng: 13.6597, pop: 11 },
  { id: "ajdovscina",    nameJa: "アイドフシュチナ",   nameEn: "Ajdovščina",      lat: 45.8869, lng: 13.9100, pop: 7 },
  { id: "postojna",      nameJa: "ポストイナ",         nameEn: "Postojna",        lat: 45.7747, lng: 14.2139, pop: 9 },
  { id: "slovenj-gradec", nameJa: "スロヴェニ・グラデツ", nameEn: "Slovenj Gradec", lat: 46.5103, lng: 15.0814, pop: 8 },
  { id: "krsko",         nameJa: "クルシュコ",         nameEn: "Krško",           lat: 45.9558, lng: 15.4900, pop: 7 },
  { id: "ravne-na-koroskem", nameJa: "ラヴネ・ナ・コロシュケム", nameEn: "Ravne na Koroškem", lat: 46.5453, lng: 14.9706, pop: 7 },
  { id: "ribnica",       nameJa: "リブニツァ",         nameEn: "Ribnica",         lat: 45.7392, lng: 14.7325, pop: 4 },
];

export const SLOVENIA_PROJECTION: CityProjection = {
  minLon: 13.365261,
  minLat: 45.423637,
  maxLon: 16.515302,
  maxLat: 46.863962,
  cosLat: 0.692851,
  scale: 249.254477,
  offX: 8,
  offY: 140.496273,
};

export const SLOVENIA_META: CityCountryMeta = {
  slug: "slovenia",
  continent: "europe",
  svgPath: "/maps/countries/slovenia.svg",
  countryJa: "スロベニア",
  countryEn: "Slovenia",
};
