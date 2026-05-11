/** Top ~30 South African cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const SOUTH_AFRICA_CITIES: CityEntry[] = [
  { id: "johannesburg",  nameJa: "ヨハネスブルク",     nameEn: "Johannesburg",    lat: -26.2041, lng:  28.0473, pop: 5635 },
  { id: "cape-town",     nameJa: "ケープタウン",       nameEn: "Cape Town",       lat: -33.9249, lng:  18.4241, pop: 4618 },
  { id: "durban",        nameJa: "ダーバン",           nameEn: "Durban",          lat: -29.8587, lng:  31.0218, pop: 3500 },
  { id: "pretoria",      nameJa: "プレトリア",         nameEn: "Pretoria",        lat: -25.7479, lng:  28.2293, pop: 2473 },
  { id: "port-elizabeth", nameJa: "ポート・エリザベス", nameEn: "Gqeberha",       lat: -33.9608, lng:  25.6022, pop: 1263 },
  { id: "bloemfontein",  nameJa: "ブルームフォンテーン", nameEn: "Bloemfontein", lat: -29.0852, lng:  26.1596, pop: 564 },
  { id: "east-london",   nameJa: "イースト・ロンドン", nameEn: "East London",     lat: -33.0153, lng:  27.9116, pop: 478 },
  { id: "pietermaritzburg", nameJa: "ピーターマリッツバーグ", nameEn: "Pietermaritzburg", lat: -29.6020, lng: 30.3794, pop: 750 },
  { id: "nelspruit",     nameJa: "ネルスプレイト",     nameEn: "Mbombela",        lat: -25.4753, lng:  30.9694, pop: 110 },
  { id: "kimberley",     nameJa: "キンバリー",         nameEn: "Kimberley",       lat: -28.7282, lng:  24.7499, pop: 226 },
  { id: "polokwane",     nameJa: "ポロクワネ",         nameEn: "Polokwane",       lat: -23.9045, lng:  29.4689, pop: 130 },
  { id: "rustenburg",    nameJa: "ラスタンバーグ",     nameEn: "Rustenburg",      lat: -25.6672, lng:  27.2424, pop: 626 },
  { id: "george",        nameJa: "ジョージ",           nameEn: "George",          lat: -33.9627, lng:  22.4612, pop: 220 },
  { id: "stellenbosch",  nameJa: "ステレンボッシュ",   nameEn: "Stellenbosch",    lat: -33.9321, lng:  18.8602, pop: 170 },
  { id: "soweto",        nameJa: "ソウェト",           nameEn: "Soweto",          lat: -26.2678, lng:  27.8585, pop: 1271 },
  { id: "tembisa",       nameJa: "テンビサ",           nameEn: "Tembisa",         lat: -25.9961, lng:  28.2230, pop: 511 },
  { id: "khayelitsha",   nameJa: "カエリチャ",         nameEn: "Khayelitsha",     lat: -34.0359, lng:  18.6826, pop: 391 },
  { id: "mitchells-plain", nameJa: "ミッチェルズ・プレイン", nameEn: "Mitchells Plain", lat: -34.0490, lng: 18.6184, pop: 311 },
  { id: "vereeniging",   nameJa: "ファエレーニヒング", nameEn: "Vereeniging",     lat: -26.6731, lng:  27.9263, pop: 377 },
  { id: "welkom",        nameJa: "ウェルコム",         nameEn: "Welkom",          lat: -27.9770, lng:  26.7252, pop: 211 },
  { id: "newcastle",     nameJa: "ニューカッスル",     nameEn: "Newcastle",       lat: -27.7574, lng:  29.9318, pop: 363 },
  { id: "krugersdorp",   nameJa: "クルーガーズドルプ", nameEn: "Krugersdorp",     lat: -26.0941, lng:  27.7669, pop: 141 },
  { id: "alberton",      nameJa: "アルバートン",       nameEn: "Alberton",        lat: -26.2706, lng:  28.1227, pop: 121 },
  { id: "boksburg",      nameJa: "ボクスバーグ",       nameEn: "Boksburg",        lat: -26.2125, lng:  28.2625, pop: 261 },
  { id: "benoni",        nameJa: "ベノニ",             nameEn: "Benoni",          lat: -26.1885, lng:  28.3206, pop: 158 },
  { id: "centurion",     nameJa: "センチュリオン",     nameEn: "Centurion",       lat: -25.8587, lng:  28.1869, pop: 237 },
  { id: "bisho",         nameJa: "ビショー",           nameEn: "Bhisho",          lat: -32.8475, lng:  27.4422, pop: 9 },
  { id: "richards-bay",  nameJa: "リチャーズ・ベイ",   nameEn: "Richards Bay",    lat: -28.7807, lng:  32.0383, pop: 56 },
  { id: "potchefstroom", nameJa: "ポチェフストルーム", nameEn: "Potchefstroom",   lat: -26.7164, lng:  27.0964, pop: 130 },
  { id: "klerksdorp",    nameJa: "クラークスドルプ",   nameEn: "Klerksdorp",      lat: -26.8521, lng:  26.6664, pop: 178 },
  { id: "vanderbijlpark", nameJa: "ファンデルベイルパーク", nameEn: "Vanderbijlpark", lat: -26.7126, lng: 27.8358, pop: 99 },
  { id: "umtata",        nameJa: "ウムタタ",           nameEn: "Mthatha",         lat: -31.5889, lng:  28.7844, pop: 137 },
];

export const SOUTH_AFRICA_PROJECTION: CityProjection = {
  minLon: 16.469981,
  minLat: -46.965753,
  maxLon: 37.977794,
  maxLat: -22.126452,
  cosLat: 0.82367,
  scale: 25.12148,
  offX: 57.482172,
  offY: 8,
};

export const SOUTH_AFRICA_META: CityCountryMeta = {
  slug: "south-africa",
  continent: "africa",
  svgPath: "/maps/countries/south-africa.svg",
  countryJa: "南アフリカ",
  countryEn: "South Africa",
};
