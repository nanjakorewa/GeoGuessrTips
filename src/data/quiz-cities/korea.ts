/** Top ~30 South Korean cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const KOREA_CITIES: CityEntry[] = [
  { id: "seoul",         nameJa: "ソウル",             nameEn: "Seoul",           lat: 37.5665, lng: 126.9780, pop: 9586 },
  { id: "busan",         nameJa: "釜山",               nameEn: "Busan",           lat: 35.1796, lng: 129.0756, pop: 3349 },
  { id: "incheon",       nameJa: "仁川",               nameEn: "Incheon",         lat: 37.4563, lng: 126.7052, pop: 2954 },
  { id: "daegu",         nameJa: "大邱",               nameEn: "Daegu",           lat: 35.8714, lng: 128.6014, pop: 2417 },
  { id: "daejeon",       nameJa: "大田",               nameEn: "Daejeon",         lat: 36.3504, lng: 127.3845, pop: 1474 },
  { id: "gwangju",       nameJa: "光州",               nameEn: "Gwangju",         lat: 35.1595, lng: 126.8526, pop: 1438 },
  { id: "suwon",         nameJa: "水原",               nameEn: "Suwon",           lat: 37.2636, lng: 127.0286, pop: 1234 },
  { id: "ulsan",         nameJa: "蔚山",               nameEn: "Ulsan",           lat: 35.5384, lng: 129.3114, pop: 1133 },
  { id: "yongin",        nameJa: "龍仁",               nameEn: "Yongin",          lat: 37.2411, lng: 127.1776, pop: 1075 },
  { id: "goyang",        nameJa: "高陽",               nameEn: "Goyang",          lat: 37.6584, lng: 126.8320, pop: 1080 },
  { id: "changwon",      nameJa: "昌原",               nameEn: "Changwon",        lat: 35.2280, lng: 128.6811, pop: 1037 },
  { id: "seongnam",      nameJa: "城南",               nameEn: "Seongnam",        lat: 37.4386, lng: 127.1378, pop: 928 },
  { id: "cheongju",      nameJa: "清州",               nameEn: "Cheongju",        lat: 36.6424, lng: 127.4890, pop: 859 },
  { id: "bucheon",       nameJa: "富川",               nameEn: "Bucheon",         lat: 37.5036, lng: 126.7660, pop: 810 },
  { id: "namyangju",     nameJa: "南楊州",             nameEn: "Namyangju",       lat: 37.6364, lng: 127.2161, pop: 737 },
  { id: "hwaseong",      nameJa: "華城",               nameEn: "Hwaseong",        lat: 37.1994, lng: 126.8311, pop: 935 },
  { id: "jeonju",        nameJa: "全州",               nameEn: "Jeonju",          lat: 35.8242, lng: 127.1480, pop: 649 },
  { id: "ansan",         nameJa: "安山",               nameEn: "Ansan",           lat: 37.3219, lng: 126.8309, pop: 644 },
  { id: "cheonan",       nameJa: "天安",               nameEn: "Cheonan",         lat: 36.8151, lng: 127.1139, pop: 686 },
  { id: "anyang",        nameJa: "安養",               nameEn: "Anyang",          lat: 37.3943, lng: 126.9568, pop: 545 },
  { id: "pohang",        nameJa: "浦項",               nameEn: "Pohang",          lat: 36.0190, lng: 129.3435, pop: 498 },
  { id: "uijeongbu",     nameJa: "議政府",             nameEn: "Uijeongbu",       lat: 37.7381, lng: 127.0337, pop: 466 },
  { id: "siheung",       nameJa: "始興",               nameEn: "Siheung",         lat: 37.3804, lng: 126.8030, pop: 514 },
  { id: "gimhae",        nameJa: "金海",               nameEn: "Gimhae",          lat: 35.2342, lng: 128.8898, pop: 547 },
  { id: "pyeongtaek",    nameJa: "平澤",               nameEn: "Pyeongtaek",      lat: 36.9921, lng: 127.1129, pop: 552 },
  { id: "gimpo",         nameJa: "金浦",               nameEn: "Gimpo",           lat: 37.6157, lng: 126.7159, pop: 484 },
  { id: "iksan",         nameJa: "益山",               nameEn: "Iksan",           lat: 35.9483, lng: 126.9577, pop: 281 },
  { id: "gunsan",        nameJa: "群山",               nameEn: "Gunsan",          lat: 35.9676, lng: 126.7370, pop: 265 },
  { id: "wonju",         nameJa: "原州",               nameEn: "Wonju",           lat: 37.3422, lng: 127.9202, pop: 358 },
  { id: "jeju",          nameJa: "済州",               nameEn: "Jeju",            lat: 33.4996, lng: 126.5312, pop: 489 },
];

export const KOREA_PROJECTION: CityProjection = {
  minLon: 124.613617,
  minLat: 33.197577,
  maxLon: 130.920665,
  maxLat: 38.624335,
  cosLat: 0.80993,
  scale: 106.4941,
  offX: 8,
  offY: 31.041147,
};

export const KOREA_META: CityCountryMeta = {
  slug: "korea",
  continent: "asia",
  svgPath: "/maps/countries/korea.svg",
  countryJa: "韓国",
  countryEn: "South Korea",
};
