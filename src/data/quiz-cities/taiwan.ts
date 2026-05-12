/** Top ~25 Taiwanese cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const TAIWAN_CITIES: CityEntry[] = [
  { id: "new-taipei",    nameJa: "新北",               nameEn: "New Taipei",      lat: 25.0124, lng: 121.4657, pop: 4030 },
  { id: "kaohsiung",     nameJa: "高雄",               nameEn: "Kaohsiung",       lat: 22.6273, lng: 120.3014, pop: 2745 },
  { id: "taichung",      nameJa: "台中",               nameEn: "Taichung",        lat: 24.1477, lng: 120.6736, pop: 2820 },
  { id: "taipei",        nameJa: "台北",               nameEn: "Taipei",          lat: 25.0330, lng: 121.5654, pop: 2600 },
  { id: "taoyuan",       nameJa: "桃園",               nameEn: "Taoyuan",         lat: 24.9936, lng: 121.3010, pop: 2270 },
  { id: "tainan",        nameJa: "台南",               nameEn: "Tainan",          lat: 22.9999, lng: 120.2270, pop: 1880 },
  { id: "hsinchu",       nameJa: "新竹",               nameEn: "Hsinchu",         lat: 24.8138, lng: 120.9675, pop: 451 },
  { id: "keelung",       nameJa: "基隆",               nameEn: "Keelung",         lat: 25.1276, lng: 121.7392, pop: 367 },
  { id: "chiayi",        nameJa: "嘉義",               nameEn: "Chiayi",          lat: 23.4800, lng: 120.4490, pop: 266 },
  { id: "changhua",      nameJa: "彰化",               nameEn: "Changhua",        lat: 24.0828, lng: 120.5418, pop: 232 },
  { id: "pingtung",      nameJa: "屏東",               nameEn: "Pingtung",        lat: 22.6724, lng: 120.4949, pop: 197 },
  { id: "yilan",         nameJa: "宜蘭",               nameEn: "Yilan",           lat: 24.7570, lng: 121.7530, pop: 95 },
  { id: "miaoli",        nameJa: "苗栗",               nameEn: "Miaoli",          lat: 24.5601, lng: 120.8214, pop: 90 },
  { id: "douliu",        nameJa: "斗六",               nameEn: "Douliu",          lat: 23.7081, lng: 120.5443, pop: 107 },
  { id: "hualien",       nameJa: "花蓮",               nameEn: "Hualien",         lat: 23.9772, lng: 121.6044, pop: 100 },
  { id: "taitung",       nameJa: "台東",               nameEn: "Taitung",         lat: 22.7583, lng: 121.1444, pop: 105 },
  { id: "nantou",        nameJa: "南投",               nameEn: "Nantou",          lat: 23.9099, lng: 120.6856, pop: 100 },
  { id: "puli",          nameJa: "埔里",               nameEn: "Puli",            lat: 23.9650, lng: 120.9583, pop: 86 },
  { id: "magong",        nameJa: "馬公",               nameEn: "Magong",          lat: 23.5683, lng: 119.5797, pop: 64 },
  { id: "zhongli",       nameJa: "中壢",               nameEn: "Zhongli",         lat: 24.9577, lng: 121.2257, pop: 410 },
  { id: "banqiao",       nameJa: "板橋",               nameEn: "Banqiao",         lat: 25.0096, lng: 121.4566, pop: 553 },
  { id: "luzhou",        nameJa: "蘆洲",               nameEn: "Luzhou",          lat: 25.0844, lng: 121.4729, pop: 199 },
  { id: "fengshan",      nameJa: "鳳山",               nameEn: "Fengshan",        lat: 22.6256, lng: 120.3597, pop: 350 },
  { id: "yongkang",      nameJa: "永康",               nameEn: "Yongkang",        lat: 23.0265, lng: 120.2570, pop: 232 },
  { id: "danshui",       nameJa: "淡水",               nameEn: "Tamsui",          lat: 25.1672, lng: 121.4408, pop: 188 },
];

export const TAIWAN_PROJECTION: CityProjection = {
  minLon: 118.279552,
  minLat: 21.904608,
  maxLon: 122.005382,
  maxLat: 25.287421,
  cosLat: 0.916391,
  scale: 159.329154,
  offX: 8,
  offY: 50.509633,
};

export const TAIWAN_META: CityCountryMeta = {
  slug: "taiwan",
  continent: "asia",
  svgPath: "/maps/countries/taiwan.svg",
  countryJa: "台湾",
  countryEn: "Taiwan",
};
