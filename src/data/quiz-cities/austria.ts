/** Top ~30 Austrian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const AUSTRIA_CITIES: CityEntry[] = [
  { id: "vienna",        nameJa: "ウィーン",           nameEn: "Wien",            lat: 48.2082, lng: 16.3738, pop: 1980 },
  { id: "graz",          nameJa: "グラーツ",           nameEn: "Graz",            lat: 47.0707, lng: 15.4395, pop: 296 },
  { id: "linz",          nameJa: "リンツ",             nameEn: "Linz",            lat: 48.3069, lng: 14.2858, pop: 211 },
  { id: "salzburg",      nameJa: "ザルツブルク",       nameEn: "Salzburg",        lat: 47.8095, lng: 13.0550, pop: 156 },
  { id: "innsbruck",     nameJa: "インスブルック",     nameEn: "Innsbruck",       lat: 47.2692, lng: 11.4041, pop: 132 },
  { id: "klagenfurt",    nameJa: "クラーゲンフルト",   nameEn: "Klagenfurt",      lat: 46.6249, lng: 14.3056, pop: 102 },
  { id: "villach",       nameJa: "フィラハ",           nameEn: "Villach",         lat: 46.6111, lng: 13.8558, pop: 62 },
  { id: "wels",          nameJa: "ヴェルス",           nameEn: "Wels",            lat: 48.1665, lng: 14.0282, pop: 62 },
  { id: "sankt-polten",  nameJa: "ザンクト・ペルテン", nameEn: "Sankt Pölten",    lat: 48.2047, lng: 15.6256, pop: 55 },
  { id: "dornbirn",      nameJa: "ドルンビルン",       nameEn: "Dornbirn",        lat: 47.4126, lng:  9.7434, pop: 49 },
  { id: "wiener-neustadt", nameJa: "ヴィーナー・ノイシュタット", nameEn: "Wiener Neustadt", lat: 47.8154, lng: 16.2470, pop: 47 },
  { id: "steyr",         nameJa: "シュタイアー",       nameEn: "Steyr",           lat: 48.0408, lng: 14.4196, pop: 38 },
  { id: "feldkirch",     nameJa: "フェルトキルヒ",     nameEn: "Feldkirch",       lat: 47.2400, lng:  9.5993, pop: 35 },
  { id: "bregenz",       nameJa: "ブレゲンツ",         nameEn: "Bregenz",         lat: 47.5031, lng:  9.7471, pop: 30 },
  { id: "leonding",      nameJa: "レオンディング",     nameEn: "Leonding",        lat: 48.2667, lng: 14.2500, pop: 28 },
  { id: "klosterneuburg", nameJa: "クロスターノイブルク", nameEn: "Klosterneuburg", lat: 48.3056, lng: 16.3257, pop: 27 },
  { id: "baden",         nameJa: "バーデン",           nameEn: "Baden",           lat: 48.0084, lng: 16.2403, pop: 26 },
  { id: "leoben",        nameJa: "レオーベン",         nameEn: "Leoben",          lat: 47.3833, lng: 15.0833, pop: 25 },
  { id: "krems",         nameJa: "クレムス",           nameEn: "Krems an der Donau", lat: 48.4099, lng: 15.6047, pop: 25 },
  { id: "traun",         nameJa: "トラウン",           nameEn: "Traun",           lat: 48.2236, lng: 14.2370, pop: 24 },
  { id: "amstetten",     nameJa: "アムシュテッテン",   nameEn: "Amstetten",       lat: 48.1167, lng: 14.8667, pop: 24 },
  { id: "lustenau",      nameJa: "ルステナウ",         nameEn: "Lustenau",        lat: 47.4267, lng:  9.6603, pop: 23 },
  { id: "kapfenberg",    nameJa: "カプフェンベルク",   nameEn: "Kapfenberg",      lat: 47.4439, lng: 15.2939, pop: 23 },
  { id: "moedling",      nameJa: "メードリング",       nameEn: "Mödling",         lat: 48.0863, lng: 16.2900, pop: 21 },
  { id: "hallein",       nameJa: "ハライン",           nameEn: "Hallein",         lat: 47.6833, lng: 13.1000, pop: 21 },
  { id: "kufstein",      nameJa: "クーフシュタイン",   nameEn: "Kufstein",        lat: 47.5836, lng: 12.1714, pop: 20 },
  { id: "traiskirchen",  nameJa: "トライスキルヒェン", nameEn: "Traiskirchen",    lat: 48.0167, lng: 16.2944, pop: 19 },
  { id: "schwechat",     nameJa: "シュヴェヒャート",   nameEn: "Schwechat",       lat: 48.1409, lng: 16.4775, pop: 19 },
  { id: "braunau",       nameJa: "ブラウナウ",         nameEn: "Braunau am Inn",  lat: 48.2589, lng: 13.0367, pop: 17 },
  { id: "stockerau",     nameJa: "シュトッケラウ",     nameEn: "Stockerau",       lat: 48.3833, lng: 16.2167, pop: 17 },
];

export const AUSTRIA_PROJECTION: CityProjection = {
  minLon: 9.521155,
  minLat: 46.378643,
  maxLon: 17.148338,
  maxLat: 49.009774,
  cosLat: 0.673087,
  scale: 105.965223,
  offX: 8,
  offY: 180.595809,
};

export const AUSTRIA_META: CityCountryMeta = {
  slug: "austria",
  continent: "europe",
  svgPath: "/maps/countries/austria.svg",
  countryJa: "オーストリア",
  countryEn: "Austria",
};
