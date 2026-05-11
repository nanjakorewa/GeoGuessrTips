/** Top ~25 Saudi Arabian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const SAUDI_ARABIA_CITIES: CityEntry[] = [
  { id: "riyadh",        nameJa: "リヤド",             nameEn: "Riyadh",          lat: 24.7136, lng: 46.6753, pop: 7676 },
  { id: "jeddah",        nameJa: "ジッダ",             nameEn: "Jeddah",          lat: 21.4858, lng: 39.1925, pop: 4697 },
  { id: "mecca",         nameJa: "メッカ",             nameEn: "Mecca",           lat: 21.3891, lng: 39.8579, pop: 2042 },
  { id: "medina",        nameJa: "メディナ",           nameEn: "Medina",          lat: 24.5247, lng: 39.5692, pop: 1488 },
  { id: "dammam",        nameJa: "ダンマーム",         nameEn: "Dammam",          lat: 26.4207, lng: 50.0888, pop: 1252 },
  { id: "taif",          nameJa: "ターイフ",           nameEn: "Taif",            lat: 21.4373, lng: 40.5128, pop: 688 },
  { id: "tabuk",         nameJa: "タブーク",           nameEn: "Tabuk",           lat: 28.3835, lng: 36.5662, pop: 667 },
  { id: "buraidah",      nameJa: "ブライダ",           nameEn: "Buraydah",        lat: 26.3260, lng: 43.9750, pop: 614 },
  { id: "khobar",        nameJa: "ホバール",           nameEn: "Khobar",          lat: 26.2794, lng: 50.2083, pop: 626 },
  { id: "khamis-mushait", nameJa: "ハミース・ムシャイト", nameEn: "Khamis Mushait", lat: 18.3060, lng: 42.7297, pop: 631 },
  { id: "hofuf",         nameJa: "ホフーフ",           nameEn: "Hofuf",           lat: 25.3826, lng: 49.5867, pop: 660 },
  { id: "ha-il",         nameJa: "ハーイル",           nameEn: "Ha'il",           lat: 27.5219, lng: 41.6907, pop: 412 },
  { id: "najran",        nameJa: "ナジュラン",         nameEn: "Najran",          lat: 17.4924, lng: 44.1277, pop: 381 },
  { id: "jubail",        nameJa: "ジュベイル",         nameEn: "Jubail",          lat: 27.0046, lng: 49.6463, pop: 379 },
  { id: "abha",          nameJa: "アブハー",           nameEn: "Abha",            lat: 18.2164, lng: 42.5053, pop: 366 },
  { id: "yanbu",         nameJa: "ヤンブー",           nameEn: "Yanbu",           lat: 24.0890, lng: 38.0617, pop: 331 },
  { id: "al-kharj",      nameJa: "アル・ハルジュ",     nameEn: "Al Kharj",        lat: 24.1556, lng: 47.3120, pop: 425 },
  { id: "qatif",         nameJa: "カティーフ",         nameEn: "Qatif",           lat: 26.5196, lng: 50.0115, pop: 524 },
  { id: "unayzah",       nameJa: "ウナイザ",           nameEn: "Unayzah",         lat: 26.0848, lng: 43.9888, pop: 163 },
  { id: "arar",          nameJa: "アル・アール",       nameEn: "Arar",            lat: 30.9758, lng: 41.0383, pop: 191 },
  { id: "sakaka",        nameJa: "サカーカ",           nameEn: "Sakaka",          lat: 29.9697, lng: 40.2064, pop: 242 },
  { id: "jizan",         nameJa: "ジーザーン",         nameEn: "Jizan",           lat: 16.8892, lng: 42.5511, pop: 158 },
  { id: "bisha",         nameJa: "ビシャ",             nameEn: "Bisha",           lat: 19.9700, lng: 42.5817, pop: 205 },
  { id: "qurayyat",      nameJa: "クライヤート",       nameEn: "Qurayyat",        lat: 31.3308, lng: 37.3447, pop: 147 },
  { id: "rabigh",        nameJa: "ラービグ",           nameEn: "Rabigh",          lat: 22.7990, lng: 39.0349, pop: 92 },
  { id: "al-bahah",      nameJa: "アル・バーハ",       nameEn: "Al Bahah",        lat: 20.0129, lng: 41.4677, pop: 109 },
  { id: "diriyah",       nameJa: "ディルイーヤ",       nameEn: "Diriyah",         lat: 24.7372, lng: 46.5736, pop: 73 },
  { id: "al-jouf",       nameJa: "ジョウフ",           nameEn: "Domat Al-Jandal", lat: 29.8167, lng: 39.8689, pop: 32 },
  { id: "rafha",         nameJa: "ラフハ",             nameEn: "Rafha",           lat: 29.6275, lng: 43.4934, pop: 60 },
];

export const SAUDI_ARABIA_PROJECTION: CityProjection = {
  minLon: 34.572765,
  minLat: 16.370958,
  maxLon: 55.637565,
  maxLat: 32.121348,
  cosLat: 0.91179,
  scale: 28.3235,
  offX: 8,
  offY: 96.946916,
};

export const SAUDI_ARABIA_META: CityCountryMeta = {
  slug: "saudiarabia",
  continent: "asia",
  svgPath: "/maps/countries/saudiarabia.svg",
  countryJa: "サウジアラビア",
  countryEn: "Saudi Arabia",
};
