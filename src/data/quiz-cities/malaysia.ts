/** Top ~30 Malaysian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const MALAYSIA_CITIES: CityEntry[] = [
  { id: "kuala-lumpur",  nameJa: "クアラルンプール",   nameEn: "Kuala Lumpur",    lat:  3.1390, lng: 101.6869, pop: 1808 },
  { id: "kajang",        nameJa: "カジャン",           nameEn: "Kajang",          lat:  2.9930, lng: 101.7870, pop: 1047 },
  { id: "subang-jaya",   nameJa: "スバンジャヤ",       nameEn: "Subang Jaya",     lat:  3.0738, lng: 101.5183, pop: 916 },
  { id: "klang",         nameJa: "クラン",             nameEn: "Klang",           lat:  3.0449, lng: 101.4456, pop: 902 },
  { id: "johor-bahru",   nameJa: "ジョホールバル",     nameEn: "Johor Bahru",     lat:  1.4927, lng: 103.7414, pop: 858 },
  { id: "ampang-jaya",   nameJa: "アンパンジャヤ",     nameEn: "Ampang Jaya",     lat:  3.1369, lng: 101.7666, pop: 808 },
  { id: "shah-alam",     nameJa: "シャーアラム",       nameEn: "Shah Alam",       lat:  3.0733, lng: 101.5185, pop: 760 },
  { id: "penang",        nameJa: "ペナン",             nameEn: "George Town",     lat:  5.4141, lng: 100.3288, pop: 708 },
  { id: "ipoh",          nameJa: "イポー",             nameEn: "Ipoh",            lat:  4.5975, lng: 101.0901, pop: 657 },
  { id: "selayang",      nameJa: "セラヤン",           nameEn: "Selayang",        lat:  3.2466, lng: 101.6529, pop: 535 },
  { id: "iskandar-puteri", nameJa: "イスカンダル・プテリ", nameEn: "Iskandar Puteri", lat: 1.4127, lng: 103.6700, pop: 575 },
  { id: "petaling-jaya", nameJa: "ペタリンジャヤ",     nameEn: "Petaling Jaya",   lat:  3.1073, lng: 101.6068, pop: 613 },
  { id: "kuching",       nameJa: "クチン",             nameEn: "Kuching",         lat:  1.5535, lng: 110.3593, pop: 570 },
  { id: "kota-kinabalu", nameJa: "コタキナバル",       nameEn: "Kota Kinabalu",   lat:  5.9788, lng: 116.0753, pop: 500 },
  { id: "seremban",      nameJa: "セレンバン",         nameEn: "Seremban",        lat:  2.7297, lng: 101.9381, pop: 555 },
  { id: "sandakan",      nameJa: "サンダカン",         nameEn: "Sandakan",        lat:  5.8333, lng: 118.1167, pop: 396 },
  { id: "kuantan",       nameJa: "クアンタン",         nameEn: "Kuantan",         lat:  3.8077, lng: 103.3260, pop: 427 },
  { id: "alor-setar",    nameJa: "アロースター",       nameEn: "Alor Setar",      lat:  6.1184, lng: 100.3685, pop: 405 },
  { id: "malacca",       nameJa: "マラッカ",           nameEn: "Malacca City",    lat:  2.1896, lng: 102.2501, pop: 484 },
  { id: "tawau",         nameJa: "タワウ",             nameEn: "Tawau",           lat:  4.2447, lng: 117.8910, pop: 397 },
  { id: "kota-bharu",    nameJa: "コタバル",           nameEn: "Kota Bharu",      lat:  6.1254, lng: 102.2386, pop: 491 },
  { id: "miri",          nameJa: "ミリ",               nameEn: "Miri",            lat:  4.4148, lng: 114.0089, pop: 300 },
  { id: "taiping",       nameJa: "タイピン",           nameEn: "Taiping",         lat:  4.8500, lng: 100.7333, pop: 245 },
  { id: "kulim",         nameJa: "クリム",             nameEn: "Kulim",           lat:  5.3650, lng: 100.5611, pop: 250 },
  { id: "sungai-petani", nameJa: "スンガイペタニ",     nameEn: "Sungai Petani",   lat:  5.6471, lng: 100.4881, pop: 456 },
  { id: "muar",          nameJa: "ムアル",             nameEn: "Muar",            lat:  2.0444, lng: 102.5689, pop: 234 },
  { id: "kuala-terengganu", nameJa: "クアラトレンガヌ", nameEn: "Kuala Terengganu", lat: 5.3300, lng: 103.1370, pop: 343 },
  { id: "putrajaya",     nameJa: "プトラジャヤ",       nameEn: "Putrajaya",       lat:  2.9264, lng: 101.6964, pop: 109 },
  { id: "labuan",        nameJa: "ラブアン",           nameEn: "Labuan",          lat:  5.2767, lng: 115.2417, pop: 100 },
  { id: "batu-pahat",    nameJa: "バトゥパハ",         nameEn: "Batu Pahat",      lat:  1.8484, lng: 102.9320, pop: 209 },
  { id: "sibu",          nameJa: "シブ",               nameEn: "Sibu",            lat:  2.2882, lng: 111.8268, pop: 247 },
  { id: "kangar",        nameJa: "カンガル",           nameEn: "Kangar",          lat:  6.4356, lng: 100.1980, pop: 87 },
];

export const MALAYSIA_PROJECTION: CityProjection = {
  minLon: 99.645228,
  minLat: 0.85137,
  maxLon: 119.278087,
  maxLat: 7.35578,
  cosLat: 0.997436,
  scale: 27.779868,
  offX: 8,
  offY: 229.654175,
};

export const MALAYSIA_META: CityCountryMeta = {
  slug: "malaysia",
  continent: "asia",
  svgPath: "/maps/countries/malaysia.svg",
  countryJa: "マレーシア",
  countryEn: "Malaysia",
};
