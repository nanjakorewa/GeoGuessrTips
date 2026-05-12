/** Top ~20 Icelandic cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const ICELAND_CITIES: CityEntry[] = [
  { id: "reykjavik",     nameJa: "レイキャヴィーク",   nameEn: "Reykjavík",       lat: 64.1466, lng: -21.9426, pop: 140 },
  { id: "kopavogur",     nameJa: "コパヴォーグル",     nameEn: "Kópavogur",       lat: 64.1117, lng: -21.9128, pop: 39 },
  { id: "hafnarfjordur", nameJa: "ハプナルフィヨルズゥル", nameEn: "Hafnarfjörður", lat: 64.0671, lng: -21.9456, pop: 30 },
  { id: "akureyri",      nameJa: "アークレイリ",       nameEn: "Akureyri",        lat: 65.6835, lng: -18.1262, pop: 20 },
  { id: "reykjanesbaer", nameJa: "レイキャネスバイル", nameEn: "Reykjanesbær",    lat: 64.0000, lng: -22.5500, pop: 22 },
  { id: "gardabaer",     nameJa: "ガルザバイル",       nameEn: "Garðabær",        lat: 64.0833, lng: -21.9167, pop: 18 },
  { id: "mosfellsbaer",  nameJa: "モースフェッルスバイル", nameEn: "Mosfellsbær", lat: 64.1672, lng: -21.7058, pop: 13 },
  { id: "selfoss",       nameJa: "セルフォス",         nameEn: "Selfoss",         lat: 63.9333, lng: -21.0000, pop: 10 },
  { id: "akranes",       nameJa: "アクラネス",         nameEn: "Akranes",         lat: 64.3219, lng: -22.0747, pop: 8 },
  { id: "vestmannaeyjar", nameJa: "ヴェストマンナエイヤル", nameEn: "Vestmannaeyjar", lat: 63.4427, lng: -20.2734, pop: 4 },
  { id: "isafjordur",    nameJa: "イーサフィヨルズゥル", nameEn: "Ísafjörður",   lat: 66.0747, lng: -23.1233, pop: 3 },
  { id: "egilsstadir",   nameJa: "エイイルススタジル", nameEn: "Egilsstaðir",     lat: 65.2667, lng: -14.4000, pop: 3 },
  { id: "borgarnes",     nameJa: "ボルガルネス",       nameEn: "Borgarnes",       lat: 64.5375, lng: -21.9219, pop: 2 },
  { id: "saudarkrokur",  nameJa: "サウザールクロークル", nameEn: "Sauðárkrókur",  lat: 65.7458, lng: -19.6394, pop: 3 },
  { id: "husavik",       nameJa: "フーサヴィーク",     nameEn: "Húsavík",         lat: 66.0450, lng: -17.3389, pop: 2 },
  { id: "hofn",          nameJa: "ヘプン",             nameEn: "Höfn",            lat: 64.2536, lng: -15.2078, pop: 2 },
  { id: "stykkisholmur", nameJa: "スティッキスホールムル", nameEn: "Stykkishólmur", lat: 65.0758, lng: -22.7233, pop: 1 },
  { id: "vik",           nameJa: "ヴィーク",           nameEn: "Vík",             lat: 63.4189, lng: -19.0067, pop: 1 },
  { id: "thorshofn",     nameJa: "ソルスヘプン",       nameEn: "Þórshöfn",        lat: 66.1944, lng: -15.3300, pop: 1 },
  { id: "blonduos",      nameJa: "ブレンドゥオス",     nameEn: "Blönduós",        lat: 65.6597, lng: -20.2814, pop: 1 },
];

export const ICELAND_PROJECTION: CityProjection = {
  minLon: -24.539906,
  minLat: 63.396715,
  maxLon: -13.502919,
  maxLat: 66.564154,
  cosLat: 0.422928,
  scale: 116.541932,
  offX: 8,
  offY: 135.43027,
};

export const ICELAND_META: CityCountryMeta = {
  slug: "iceland",
  continent: "europe",
  svgPath: "/maps/countries/iceland.svg",
  countryJa: "アイスランド",
  countryEn: "Iceland",
};
