/** Top ~25 Serbian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const SERBIA_CITIES: CityEntry[] = [
  { id: "belgrade",      nameJa: "ベオグラード",       nameEn: "Belgrade",        lat: 44.7866, lng: 20.4489, pop: 1397 },
  { id: "novi-sad",      nameJa: "ノヴィ・サド",       nameEn: "Novi Sad",        lat: 45.2671, lng: 19.8335, pop: 307 },
  { id: "nis",           nameJa: "ニシュ",             nameEn: "Niš",             lat: 43.3209, lng: 21.8958, pop: 183 },
  { id: "kragujevac",    nameJa: "クラグイェヴァツ",   nameEn: "Kragujevac",      lat: 44.0142, lng: 20.9111, pop: 150 },
  { id: "subotica",      nameJa: "スボティツァ",       nameEn: "Subotica",        lat: 46.1006, lng: 19.6678, pop: 97 },
  { id: "leskovac",      nameJa: "レスコヴァツ",       nameEn: "Leskovac",        lat: 42.9981, lng: 21.9461, pop: 60 },
  { id: "krusevac",      nameJa: "クルシェヴァツ",     nameEn: "Kruševac",        lat: 43.5803, lng: 21.3361, pop: 58 },
  { id: "kraljevo",      nameJa: "クラリェヴォ",       nameEn: "Kraljevo",        lat: 43.7236, lng: 20.6890, pop: 65 },
  { id: "pancevo",       nameJa: "パンチェヴォ",       nameEn: "Pančevo",         lat: 44.8703, lng: 20.6403, pop: 76 },
  { id: "cacak",         nameJa: "チャチャク",         nameEn: "Čačak",           lat: 43.8914, lng: 20.3497, pop: 73 },
  { id: "smederevo",     nameJa: "スメデレヴォ",       nameEn: "Smederevo",       lat: 44.6633, lng: 20.9286, pop: 64 },
  { id: "valjevo",       nameJa: "ヴァリェヴォ",       nameEn: "Valjevo",         lat: 44.2697, lng: 19.8842, pop: 56 },
  { id: "novi-pazar",    nameJa: "ノヴィ・パザル",     nameEn: "Novi Pazar",      lat: 43.1411, lng: 20.5128, pop: 68 },
  { id: "vranje",        nameJa: "ヴラニェ",           nameEn: "Vranje",          lat: 42.5519, lng: 21.9011, pop: 55 },
  { id: "uzice",         nameJa: "ウジツェ",           nameEn: "Užice",           lat: 43.8556, lng: 19.8425, pop: 53 },
  { id: "sombor",        nameJa: "ソンボル",           nameEn: "Sombor",          lat: 45.7742, lng: 19.1122, pop: 47 },
  { id: "zrenjanin",     nameJa: "ズレニャニン",       nameEn: "Zrenjanin",       lat: 45.3811, lng: 20.3919, pop: 76 },
  { id: "pozarevac",     nameJa: "ポジャレヴァツ",     nameEn: "Požarevac",       lat: 44.6203, lng: 21.1875, pop: 44 },
  { id: "sabac",         nameJa: "シャバツ",           nameEn: "Šabac",           lat: 44.7547, lng: 19.6919, pop: 52 },
  { id: "loznica",       nameJa: "ロズニツァ",         nameEn: "Loznica",         lat: 44.5333, lng: 19.2236, pop: 19 },
  { id: "pirot",         nameJa: "ピロト",             nameEn: "Pirot",           lat: 43.1531, lng: 22.5853, pop: 38 },
  { id: "zajecar",       nameJa: "ザイェチャル",       nameEn: "Zaječar",         lat: 43.9039, lng: 22.2722, pop: 38 },
  { id: "kikinda",       nameJa: "キキンダ",           nameEn: "Kikinda",         lat: 45.8275, lng: 20.4644, pop: 38 },
  { id: "vrsac",         nameJa: "ヴルシャツ",         nameEn: "Vršac",           lat: 45.1206, lng: 21.3072, pop: 36 },
  { id: "bor",           nameJa: "ボル",               nameEn: "Bor",             lat: 44.0739, lng: 22.0958, pop: 35 },
];

export const SERBIA_PROJECTION: CityProjection = {
  minLon: 18.844978,
  minLat: 42.234945,
  maxLon: 22.984571,
  maxLat: 46.173875,
  cosLat: 0.716857,
  scale: 158.418657,
  offX: 44.946635,
  offY: 8,
};

export const SERBIA_META: CityCountryMeta = {
  slug: "serbia",
  continent: "europe",
  svgPath: "/maps/countries/serbia.svg",
  countryJa: "セルビア",
  countryEn: "Serbia",
};
