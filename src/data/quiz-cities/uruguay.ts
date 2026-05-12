/** Top ~20 Uruguayan cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const URUGUAY_CITIES: CityEntry[] = [
  { id: "montevideo",    nameJa: "モンテビデオ",       nameEn: "Montevideo",      lat: -34.9011, lng: -56.1645, pop: 1305 },
  { id: "salto",         nameJa: "サルト",             nameEn: "Salto",           lat: -31.3833, lng: -57.9667, pop: 105 },
  { id: "ciudad-de-la-costa", nameJa: "シウダ・デ・ラ・コスタ", nameEn: "Ciudad de la Costa", lat: -34.8000, lng: -55.9667, pop: 95 },
  { id: "paysandu",      nameJa: "パイサンドゥ",       nameEn: "Paysandú",        lat: -32.3167, lng: -58.0833, pop: 76 },
  { id: "las-piedras",   nameJa: "ラス・ピエドラス",   nameEn: "Las Piedras",     lat: -34.7300, lng: -56.2200, pop: 70 },
  { id: "rivera",        nameJa: "リベラ",             nameEn: "Rivera",          lat: -30.9000, lng: -55.5500, pop: 66 },
  { id: "maldonado",     nameJa: "マルドナド",         nameEn: "Maldonado",       lat: -34.9000, lng: -54.9500, pop: 65 },
  { id: "tacuarembo",    nameJa: "タクアレンボ",       nameEn: "Tacuarembó",      lat: -31.7167, lng: -55.9833, pop: 55 },
  { id: "melo",          nameJa: "メロ",               nameEn: "Melo",            lat: -32.3667, lng: -54.1833, pop: 51 },
  { id: "mercedes",      nameJa: "メルセデス",         nameEn: "Mercedes",        lat: -33.2500, lng: -58.0333, pop: 41 },
  { id: "minas",         nameJa: "ミナス",             nameEn: "Minas",           lat: -34.3667, lng: -55.2333, pop: 38 },
  { id: "san-jose",      nameJa: "サン・ホセ",         nameEn: "San José de Mayo", lat: -34.3333, lng: -56.7167, pop: 36 },
  { id: "durazno",       nameJa: "ドゥラスノ",         nameEn: "Durazno",         lat: -33.3833, lng: -56.5167, pop: 34 },
  { id: "florida",       nameJa: "フロリダ",           nameEn: "Florida",         lat: -34.0972, lng: -56.2147, pop: 33 },
  { id: "barros-blancos", nameJa: "バロス・ブランコス", nameEn: "Barros Blancos", lat: -34.7500, lng: -56.0000, pop: 31 },
  { id: "colonia-del-sacramento", nameJa: "コロニア・デル・サクラメント", nameEn: "Colonia del Sacramento", lat: -34.4683, lng: -57.8442, pop: 27 },
  { id: "treinta-y-tres", nameJa: "トレインタ・イ・トレス", nameEn: "Treinta y Tres", lat: -33.2167, lng: -54.3833, pop: 26 },
  { id: "rocha",         nameJa: "ロチャ",             nameEn: "Rocha",           lat: -34.4833, lng: -54.3333, pop: 25 },
  { id: "artigas",       nameJa: "アルティガス",       nameEn: "Artigas",         lat: -30.4000, lng: -56.4667, pop: 41 },
  { id: "fray-bentos",   nameJa: "フライ・ベントス",   nameEn: "Fray Bentos",     lat: -33.1167, lng: -58.3000, pop: 23 },
];

export const URUGUAY_PROJECTION: CityProjection = {
  minLon: -58.439361,
  minLat: -34.973403,
  maxLon: -53.110836,
  maxLat: -30.09687,
  cosLat: 0.843062,
  scale: 121.09675,
  offX: 8,
  offY: 24.733852,
};

export const URUGUAY_META: CityCountryMeta = {
  slug: "uruguay",
  continent: "cs_america",
  svgPath: "/maps/countries/uruguay.svg",
  countryJa: "ウルグアイ",
  countryEn: "Uruguay",
};
