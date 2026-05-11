/** Top ~30 Egyptian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const EGYPT_CITIES: CityEntry[] = [
  { id: "cairo",         nameJa: "カイロ",             nameEn: "Cairo",           lat: 30.0444, lng: 31.2357, pop: 10230 },
  { id: "alexandria",    nameJa: "アレクサンドリア",   nameEn: "Alexandria",      lat: 31.2001, lng: 29.9187, pop: 5400 },
  { id: "giza",          nameJa: "ギーザ",             nameEn: "Giza",            lat: 30.0131, lng: 31.2089, pop: 4778 },
  { id: "shubra-el-kheima", nameJa: "シュブラ・エル・ケーマ", nameEn: "Shubra El Kheima", lat: 30.1286, lng: 31.2422, pop: 1165 },
  { id: "port-said",     nameJa: "ポート・サイド",     nameEn: "Port Said",       lat: 31.2653, lng: 32.3019, pop: 750 },
  { id: "suez",          nameJa: "スエズ",             nameEn: "Suez",            lat: 29.9737, lng: 32.5263, pop: 745 },
  { id: "luxor",         nameJa: "ルクソール",         nameEn: "Luxor",           lat: 25.6872, lng: 32.6396, pop: 422 },
  { id: "mansoura",      nameJa: "マンスーラ",         nameEn: "Mansoura",        lat: 31.0409, lng: 31.3785, pop: 530 },
  { id: "tanta",         nameJa: "タンター",           nameEn: "Tanta",           lat: 30.7865, lng: 31.0004, pop: 580 },
  { id: "asyut",         nameJa: "アシュート",         nameEn: "Asyut",           lat: 27.1810, lng: 31.1837, pop: 462 },
  { id: "ismailia",      nameJa: "イスマイリア",       nameEn: "Ismailia",        lat: 30.5852, lng: 32.2654, pop: 366 },
  { id: "faiyum",        nameJa: "ファイユーム",       nameEn: "Faiyum",          lat: 29.3084, lng: 30.8428, pop: 475 },
  { id: "zagazig",       nameJa: "ザガジグ",           nameEn: "Zagazig",         lat: 30.5877, lng: 31.5022, pop: 384 },
  { id: "aswan",         nameJa: "アスワン",           nameEn: "Aswan",           lat: 24.0889, lng: 32.8998, pop: 326 },
  { id: "damietta",      nameJa: "ダミエッタ",         nameEn: "Damietta",        lat: 31.4179, lng: 31.8144, pop: 330 },
  { id: "damanhur",      nameJa: "ダマンフール",       nameEn: "Damanhur",        lat: 31.0429, lng: 30.4682, pop: 269 },
  { id: "minya",         nameJa: "ミニヤー",           nameEn: "Minya",           lat: 28.0871, lng: 30.7618, pop: 245 },
  { id: "beni-suef",     nameJa: "ベニー・スエフ",     nameEn: "Beni Suef",       lat: 29.0744, lng: 31.0978, pop: 240 },
  { id: "hurghada",      nameJa: "フルガダ",           nameEn: "Hurghada",        lat: 27.2579, lng: 33.8116, pop: 250 },
  { id: "qena",          nameJa: "ケナ",               nameEn: "Qena",            lat: 26.1551, lng: 32.7160, pop: 235 },
  { id: "sohag",         nameJa: "ソハーグ",           nameEn: "Sohag",           lat: 26.5569, lng: 31.6948, pop: 234 },
  { id: "kafr-el-sheikh", nameJa: "カフル・エル・シェイク", nameEn: "Kafr El Sheikh", lat: 31.1106, lng: 30.9408, pop: 184 },
  { id: "arish",         nameJa: "アリーシュ",         nameEn: "Arish",           lat: 31.1313, lng: 33.7986, pop: 144 },
  { id: "10th-ramadan",  nameJa: "10月10日市",         nameEn: "10th of Ramadan City", lat: 30.2904, lng: 31.7434, pop: 220 },
  { id: "6th-october",   nameJa: "10月6日市",          nameEn: "6th of October City", lat: 29.9285, lng: 30.9333, pop: 506 },
  { id: "new-cairo",     nameJa: "ニュー・カイロ",     nameEn: "New Cairo",       lat: 30.0331, lng: 31.4913, pop: 250 },
  { id: "banha",         nameJa: "バンハー",           nameEn: "Banha",           lat: 30.4658, lng: 31.1855, pop: 167 },
  { id: "marsa-matruh",  nameJa: "マルサ・マトルーフ", nameEn: "Marsa Matruh",    lat: 31.3543, lng: 27.2373, pop: 91 },
  { id: "sharm-el-sheikh", nameJa: "シャルム・エル・シェイク", nameEn: "Sharm El Sheikh", lat: 27.9158, lng: 34.3300, pop: 73 },
  { id: "qalyub",        nameJa: "カルユーブ",         nameEn: "Qalyub",          lat: 30.1797, lng: 31.2056, pop: 165 },
  { id: "talkha",        nameJa: "タルハー",           nameEn: "Talkha",          lat: 31.0540, lng: 31.3756, pop: 119 },
];

export const EGYPT_PROJECTION: CityProjection = {
  minLon: 24.688343,
  minLat: 21.994369,
  maxLon: 36.899181,
  maxLat: 31.65648,
  cosLat: 0.892386,
  scale: 49.92302,
  offX: 8,
  offY: 78.81912,
};

export const EGYPT_META: CityCountryMeta = {
  slug: "egypt",
  continent: "africa",
  svgPath: "/maps/countries/egypt.svg",
  countryJa: "エジプト",
  countryEn: "Egypt",
};
