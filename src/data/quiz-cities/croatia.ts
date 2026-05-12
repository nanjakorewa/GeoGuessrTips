/** Top ~25 Croatian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const CROATIA_CITIES: CityEntry[] = [
  { id: "zagreb",        nameJa: "ザグレブ",           nameEn: "Zagreb",          lat: 45.8150, lng: 15.9819, pop: 769 },
  { id: "split",         nameJa: "スプリト",           nameEn: "Split",           lat: 43.5081, lng: 16.4402, pop: 161 },
  { id: "rijeka",        nameJa: "リエカ",             nameEn: "Rijeka",          lat: 45.3271, lng: 14.4422, pop: 108 },
  { id: "osijek",        nameJa: "オシエク",           nameEn: "Osijek",          lat: 45.5550, lng: 18.6955, pop: 96 },
  { id: "zadar",         nameJa: "ザダル",             nameEn: "Zadar",           lat: 44.1194, lng: 15.2314, pop: 72 },
  { id: "velika-gorica", nameJa: "ヴェリカ・ゴリツァ", nameEn: "Velika Gorica",   lat: 45.7126, lng: 16.0760, pop: 65 },
  { id: "slavonski-brod", nameJa: "スラヴォンスキ・ブロド", nameEn: "Slavonski Brod", lat: 45.1603, lng: 18.0157, pop: 53 },
  { id: "pula",          nameJa: "プーラ",             nameEn: "Pula",            lat: 44.8666, lng: 13.8496, pop: 52 },
  { id: "karlovac",      nameJa: "カルロヴァツ",       nameEn: "Karlovac",        lat: 45.4870, lng: 15.5478, pop: 48 },
  { id: "varazdin",      nameJa: "ヴァラジュディン",   nameEn: "Varaždin",        lat: 46.3057, lng: 16.3366, pop: 38 },
  { id: "sibenik",       nameJa: "シベニク",           nameEn: "Šibenik",         lat: 43.7350, lng: 15.8952, pop: 35 },
  { id: "sisak",         nameJa: "シサク",             nameEn: "Sisak",           lat: 45.4708, lng: 16.3805, pop: 33 },
  { id: "dubrovnik",     nameJa: "ドゥブロヴニク",     nameEn: "Dubrovnik",       lat: 42.6507, lng: 18.0944, pop: 28 },
  { id: "bjelovar",      nameJa: "ビェロヴァル",       nameEn: "Bjelovar",        lat: 45.8987, lng: 16.8482, pop: 27 },
  { id: "kastela",       nameJa: "カシュテラ",         nameEn: "Kaštela",         lat: 43.5500, lng: 16.3500, pop: 38 },
  { id: "samobor",       nameJa: "サモボル",           nameEn: "Samobor",         lat: 45.8000, lng: 15.7167, pop: 37 },
  { id: "vinkovci",      nameJa: "ヴィンコヴツィ",     nameEn: "Vinkovci",        lat: 45.2884, lng: 18.8050, pop: 32 },
  { id: "koprivnica",    nameJa: "コプリヴニツァ",     nameEn: "Koprivnica",      lat: 46.1633, lng: 16.8344, pop: 30 },
  { id: "djakovo",       nameJa: "ジャコヴォ",         nameEn: "Đakovo",          lat: 45.3081, lng: 18.4106, pop: 28 },
  { id: "vukovar",       nameJa: "ヴコヴァル",         nameEn: "Vukovar",         lat: 45.3500, lng: 19.0000, pop: 27 },
  { id: "pozega",        nameJa: "ポジェガ",           nameEn: "Požega",          lat: 45.3403, lng: 17.6850, pop: 26 },
  { id: "krizevci",      nameJa: "クリジェヴツィ",     nameEn: "Križevci",        lat: 46.0349, lng: 16.5394, pop: 21 },
  { id: "cakovec",       nameJa: "チャコヴェツ",       nameEn: "Čakovec",         lat: 46.3845, lng: 16.4339, pop: 27 },
  { id: "metkovic",      nameJa: "メトコヴィッチ",     nameEn: "Metković",        lat: 43.0533, lng: 17.6485, pop: 15 },
  { id: "rovinj",        nameJa: "ロヴィニ",           nameEn: "Rovinj",          lat: 45.0817, lng: 13.6386, pop: 14 },
];

export const CROATIA_PROJECTION: CityProjection = {
  minLon: 13.501475,
  minLat: 42.416327,
  maxLon: 19.407838,
  maxLat: 46.546979,
  cosLat: 0.713475,
  scale: 129.092227,
  offX: 8,
  offY: 53.382467,
};

export const CROATIA_META: CityCountryMeta = {
  slug: "croatia",
  continent: "europe",
  svgPath: "/maps/countries/croatia.svg",
  countryJa: "クロアチア",
  countryEn: "Croatia",
};
