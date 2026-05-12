/** Top ~20 Latvian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const LATVIA_CITIES: CityEntry[] = [
  { id: "riga",          nameJa: "リガ",               nameEn: "Riga",            lat: 56.9496, lng: 24.1052, pop: 615 },
  { id: "daugavpils",    nameJa: "ダウガフピルス",     nameEn: "Daugavpils",      lat: 55.8714, lng: 26.5286, pop: 80 },
  { id: "liepaja",       nameJa: "リエパーヤ",         nameEn: "Liepāja",         lat: 56.5083, lng: 21.0117, pop: 67 },
  { id: "jelgava",       nameJa: "イェルガヴァ",       nameEn: "Jelgava",         lat: 56.6500, lng: 23.7128, pop: 55 },
  { id: "jurmala",       nameJa: "ユールマラ",         nameEn: "Jūrmala",         lat: 56.9722, lng: 23.7711, pop: 49 },
  { id: "ventspils",     nameJa: "ヴェンツピルス",     nameEn: "Ventspils",       lat: 57.3894, lng: 21.5606, pop: 33 },
  { id: "rezekne",       nameJa: "レーゼクネ",         nameEn: "Rēzekne",         lat: 56.5114, lng: 27.3322, pop: 27 },
  { id: "valmiera",      nameJa: "ヴァルミエラ",       nameEn: "Valmiera",        lat: 57.5403, lng: 25.4275, pop: 22 },
  { id: "ogre",          nameJa: "オグレ",             nameEn: "Ogre",            lat: 56.8167, lng: 24.6000, pop: 21 },
  { id: "jekabpils",     nameJa: "イェカブピルス",     nameEn: "Jēkabpils",       lat: 56.5000, lng: 25.8667, pop: 21 },
  { id: "tukums",        nameJa: "トゥクムス",         nameEn: "Tukums",          lat: 56.9667, lng: 23.1500, pop: 17 },
  { id: "salaspils",     nameJa: "サラスピルス",       nameEn: "Salaspils",       lat: 56.8617, lng: 24.3531, pop: 17 },
  { id: "cesis",         nameJa: "ツェーシス",         nameEn: "Cēsis",           lat: 57.3133, lng: 25.2700, pop: 15 },
  { id: "kuldiga",       nameJa: "クルディーガ",       nameEn: "Kuldīga",         lat: 56.9692, lng: 21.9617, pop: 11 },
  { id: "olaine",        nameJa: "オライネ",           nameEn: "Olaine",          lat: 56.7956, lng: 23.9389, pop: 12 },
  { id: "saldus",        nameJa: "サルドゥス",         nameEn: "Saldus",          lat: 56.6667, lng: 22.5000, pop: 11 },
  { id: "talsi",         nameJa: "タルシ",             nameEn: "Talsi",           lat: 57.2436, lng: 22.5867, pop: 10 },
  { id: "dobele",        nameJa: "ドベレ",             nameEn: "Dobele",          lat: 56.6225, lng: 23.2792, pop: 9 },
  { id: "bauska",        nameJa: "バウスカ",           nameEn: "Bauska",          lat: 56.4067, lng: 24.1908, pop: 9 },
  { id: "ludza",         nameJa: "ルーザ",             nameEn: "Ludza",           lat: 56.5469, lng: 27.7167, pop: 8 },
];

export const LATVIA_PROJECTION: CityProjection = {
  minLon: 20.968598,
  minLat: 55.666991,
  maxLon: 28.217275,
  maxLat: 58.075138,
  cosLat: 0.546525,
  scale: 137.318849,
  offX: 8,
  offY: 154.658013,
};

export const LATVIA_META: CityCountryMeta = {
  slug: "latvia",
  continent: "europe",
  svgPath: "/maps/countries/latvia.svg",
  countryJa: "ラトビア",
  countryEn: "Latvia",
};
