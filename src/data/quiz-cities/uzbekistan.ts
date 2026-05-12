/** Top ~25 Uzbek cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const UZBEKISTAN_CITIES: CityEntry[] = [
  { id: "tashkent",      nameJa: "タシュケント",       nameEn: "Tashkent",        lat: 41.2995, lng: 69.2401, pop: 2972 },
  { id: "samarkand",     nameJa: "サマルカンド",       nameEn: "Samarkand",       lat: 39.6542, lng: 66.9597, pop: 552 },
  { id: "namangan",      nameJa: "ナマンガン",         nameEn: "Namangan",        lat: 40.9983, lng: 71.6726, pop: 626 },
  { id: "andijan",       nameJa: "アンディジャン",     nameEn: "Andijan",         lat: 40.7821, lng: 72.3442, pop: 478 },
  { id: "nukus",         nameJa: "ヌクス",             nameEn: "Nukus",           lat: 42.4530, lng: 59.6103, pop: 312 },
  { id: "bukhara",       nameJa: "ブハラ",             nameEn: "Bukhara",         lat: 39.7681, lng: 64.4556, pop: 280 },
  { id: "qarshi",        nameJa: "カルシ",             nameEn: "Qarshi",          lat: 38.8606, lng: 65.7886, pop: 273 },
  { id: "fergana",       nameJa: "フェルガナ",         nameEn: "Fergana",         lat: 40.3892, lng: 71.7842, pop: 264 },
  { id: "kokand",        nameJa: "コーカンド",         nameEn: "Kokand",          lat: 40.5286, lng: 70.9425, pop: 244 },
  { id: "margilan",      nameJa: "マルギラン",         nameEn: "Margilan",        lat: 40.4717, lng: 71.7242, pop: 215 },
  { id: "urgench",       nameJa: "ウルゲンチ",         nameEn: "Urgench",         lat: 41.5500, lng: 60.6333, pop: 165 },
  { id: "termez",        nameJa: "テルメズ",           nameEn: "Termez",          lat: 37.2242, lng: 67.2783, pop: 182 },
  { id: "navoiy",        nameJa: "ナヴォイ",           nameEn: "Navoiy",          lat: 40.1031, lng: 65.3611, pop: 145 },
  { id: "jizzakh",       nameJa: "ジザフ",             nameEn: "Jizzakh",         lat: 40.1158, lng: 67.8422, pop: 175 },
  { id: "gulistan",      nameJa: "グリスタン",         nameEn: "Gulistan",        lat: 40.4900, lng: 68.7867, pop: 95 },
  { id: "chirchik",      nameJa: "チルチク",           nameEn: "Chirchik",        lat: 41.4683, lng: 69.5808, pop: 156 },
  { id: "olmaliq",       nameJa: "オルマリク",         nameEn: "Olmaliq",         lat: 40.8444, lng: 69.5972, pop: 144 },
  { id: "angren",        nameJa: "アングレン",         nameEn: "Angren",          lat: 41.0167, lng: 70.1431, pop: 178 },
  { id: "bekabad",       nameJa: "ベカバード",         nameEn: "Bekabad",         lat: 40.2208, lng: 69.2697, pop: 86 },
  { id: "shahrisabz",    nameJa: "シャフリサブズ",     nameEn: "Shahrisabz",      lat: 39.0561, lng: 66.8364, pop: 100 },
  { id: "kattaqurghon",  nameJa: "カッタクルガン",     nameEn: "Kattaqurghon",    lat: 39.8989, lng: 66.2611, pop: 75 },
  { id: "yangiyul",      nameJa: "ヤンギユル",         nameEn: "Yangiyul",        lat: 41.1133, lng: 69.0461, pop: 65 },
  { id: "denov",         nameJa: "デナウ",             nameEn: "Denov",           lat: 38.2683, lng: 67.8919, pop: 90 },
  { id: "yangiabad",     nameJa: "ザラフシャン",       nameEn: "Zarafshan",       lat: 41.5772, lng: 64.1989, pop: 70 },
  { id: "khiva",         nameJa: "ヒヴァ",             nameEn: "Khiva",           lat: 41.3782, lng: 60.3608, pop: 95 },
];

export const UZBEKISTAN_PROJECTION: CityProjection = {
  minLon: 55.975839,
  minLat: 37.185147,
  maxLon: 73.148641,
  maxLat: 45.558719,
  cosLat: 0.750435,
  scale: 42.212852,
  offX: 8,
  offY: 143.263822,
};

export const UZBEKISTAN_META: CityCountryMeta = {
  slug: "uzbekistan",
  continent: "asia",
  svgPath: "/maps/countries/uzbekistan.svg",
  countryJa: "ウズベキスタン",
  countryEn: "Uzbekistan",
};
