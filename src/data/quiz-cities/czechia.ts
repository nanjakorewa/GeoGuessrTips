/** Top ~35 Czech cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const CZECHIA_CITIES: CityEntry[] = [
  { id: "prague",          nameJa: "プラハ",             nameEn: "Praha",           lat: 50.0755, lng: 14.4378, pop: 1357 },
  { id: "brno",            nameJa: "ブルノ",             nameEn: "Brno",            lat: 49.1951, lng: 16.6068, pop: 396 },
  { id: "ostrava",         nameJa: "オストラヴァ",       nameEn: "Ostrava",         lat: 49.8209, lng: 18.2625, pop: 278 },
  { id: "plzen",           nameJa: "プルゼニ",           nameEn: "Plzeň",           lat: 49.7384, lng: 13.3736, pop: 181 },
  { id: "liberec",         nameJa: "リベレツ",           nameEn: "Liberec",         lat: 50.7671, lng: 15.0562, pop: 105 },
  { id: "olomouc",         nameJa: "オロモウツ",         nameEn: "Olomouc",         lat: 49.5938, lng: 17.2509, pop: 102 },
  { id: "ceske-budejovice", nameJa: "チェスケー・ブジェヨヴィツェ", nameEn: "České Budějovice", lat: 48.9745, lng: 14.4744, pop: 95 },
  { id: "hradec-kralove",  nameJa: "フラデツ・クラーロヴェー", nameEn: "Hradec Králové", lat: 50.2095, lng: 15.8327, pop: 93 },
  { id: "usti-nad-labem",  nameJa: "ウースチー・ナド・ラベム", nameEn: "Ústí nad Labem", lat: 50.6608, lng: 14.0420, pop: 92 },
  { id: "pardubice",       nameJa: "パルドゥビツェ",     nameEn: "Pardubice",       lat: 50.0344, lng: 15.7812, pop: 91 },
  { id: "zlin",            nameJa: "ズリーン",           nameEn: "Zlín",            lat: 49.2244, lng: 17.6627, pop: 75 },
  { id: "havirov",         nameJa: "ハヴィージョフ",     nameEn: "Havířov",         lat: 49.7799, lng: 18.4366, pop: 70 },
  { id: "kladno",          nameJa: "クラドノ",           nameEn: "Kladno",          lat: 50.1452, lng: 14.1027, pop: 68 },
  { id: "most",            nameJa: "モスト",             nameEn: "Most",            lat: 50.5031, lng: 13.6362, pop: 64 },
  { id: "opava",           nameJa: "オパヴァ",           nameEn: "Opava",           lat: 49.9387, lng: 17.9026, pop: 55 },
  { id: "frydek-mistek",   nameJa: "フリーデク・ミーステク", nameEn: "Frýdek-Místek", lat: 49.6852, lng: 18.3500, pop: 55 },
  { id: "karvina",         nameJa: "カルヴィナー",       nameEn: "Karviná",         lat: 49.8540, lng: 18.5413, pop: 51 },
  { id: "jihlava",         nameJa: "イフラヴァ",         nameEn: "Jihlava",         lat: 49.3961, lng: 15.5912, pop: 50 },
  { id: "teplice",         nameJa: "テプリツェ",         nameEn: "Teplice",         lat: 50.6406, lng: 13.8245, pop: 49 },
  { id: "decin",           nameJa: "デチーン",           nameEn: "Děčín",           lat: 50.7820, lng: 14.2150, pop: 47 },
  { id: "chomutov",        nameJa: "ホムトフ",           nameEn: "Chomutov",        lat: 50.4604, lng: 13.4054, pop: 47 },
  { id: "karlovy-vary",    nameJa: "カルロヴィ・ヴァリ", nameEn: "Karlovy Vary",    lat: 50.2317, lng: 12.8714, pop: 47 },
  { id: "jablonec",        nameJa: "ヤブロネツ",         nameEn: "Jablonec nad Nisou", lat: 50.7242, lng: 15.1707, pop: 45 },
  { id: "mlada-boleslav",  nameJa: "ムラダー・ボレスラフ", nameEn: "Mladá Boleslav", lat: 50.4135, lng: 14.9036, pop: 45 },
  { id: "prostejov",       nameJa: "プロスチェヨフ",     nameEn: "Prostějov",       lat: 49.4719, lng: 17.1116, pop: 43 },
  { id: "prerov",          nameJa: "プシェロフ",         nameEn: "Přerov",          lat: 49.4554, lng: 17.4504, pop: 42 },
  { id: "trebic",          nameJa: "トジェビーチ",       nameEn: "Třebíč",          lat: 49.2148, lng: 15.8814, pop: 35 },
  { id: "ceska-lipa",      nameJa: "チェスカー・リーパ", nameEn: "Česká Lípa",      lat: 50.6855, lng: 14.5374, pop: 36 },
  { id: "trinec",          nameJa: "トジネツ",           nameEn: "Třinec",          lat: 49.6776, lng: 18.6700, pop: 33 },
  { id: "tabor",           nameJa: "ターボル",           nameEn: "Tábor",           lat: 49.4144, lng: 14.6578, pop: 33 },
  { id: "znojmo",          nameJa: "ズノイモ",           nameEn: "Znojmo",          lat: 48.8555, lng: 16.0488, pop: 33 },
  { id: "kolin",           nameJa: "コリーン",           nameEn: "Kolín",           lat: 50.0282, lng: 15.2003, pop: 32 },
  { id: "pribram",         nameJa: "プシーブラム",       nameEn: "Příbram",         lat: 49.6877, lng: 14.0102, pop: 31 },
  { id: "cheb",            nameJa: "ヘプ",               nameEn: "Cheb",            lat: 50.0793, lng: 12.3700, pop: 32 },
  { id: "krnov",           nameJa: "クルノフ",           nameEn: "Krnov",           lat: 50.0883, lng: 17.7042, pop: 23 },
];

export const CZECHIA_PROJECTION: CityProjection = {
  minLon: 12.076141,
  minLat: 48.557916,
  maxLon: 18.837434,
  maxLat: 51.040012,
  cosLat: 0.645471,
  scale: 124.64994,
  offX: 8,
  offY: 165.303442,
};

export const CZECHIA_META: CityCountryMeta = {
  slug: "czechia",
  continent: "europe",
  svgPath: "/maps/countries/czechia.svg",
  countryJa: "チェコ",
  countryEn: "Czechia",
};
