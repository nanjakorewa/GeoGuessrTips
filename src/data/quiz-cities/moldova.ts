/** Top ~20 Moldovan cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const MOLDOVA_CITIES: CityEntry[] = [
  { id: "chisinau",      nameJa: "キシナウ",           nameEn: "Chișinău",        lat: 47.0105, lng: 28.8638, pop: 685 },
  { id: "tiraspol",      nameJa: "ティラスポリ",       nameEn: "Tiraspol",        lat: 46.8408, lng: 29.6433, pop: 129 },
  { id: "balti",         nameJa: "ベルツィ",           nameEn: "Bălți",           lat: 47.7547, lng: 27.9293, pop: 122 },
  { id: "bender",        nameJa: "ベンデル",           nameEn: "Bender",          lat: 46.8389, lng: 29.4781, pop: 91 },
  { id: "ribnita",       nameJa: "ルブニツァ",         nameEn: "Rîbnița",         lat: 47.7669, lng: 29.0083, pop: 51 },
  { id: "cahul",         nameJa: "カフル",             nameEn: "Cahul",           lat: 45.9078, lng: 28.1944, pop: 39 },
  { id: "ungheni",       nameJa: "ウンゲニ",           nameEn: "Ungheni",         lat: 47.2092, lng: 27.7986, pop: 33 },
  { id: "soroca",        nameJa: "ソロカ",             nameEn: "Soroca",          lat: 48.1556, lng: 28.2989, pop: 38 },
  { id: "orhei",         nameJa: "オルヘイ",           nameEn: "Orhei",           lat: 47.3833, lng: 28.8167, pop: 33 },
  { id: "dubasari",      nameJa: "ドゥバサリ",         nameEn: "Dubăsari",        lat: 47.2667, lng: 29.1667, pop: 23 },
  { id: "comrat",        nameJa: "コムラト",           nameEn: "Comrat",          lat: 46.3000, lng: 28.6667, pop: 26 },
  { id: "ceadir-lunga",  nameJa: "チャドゥル・ルンガ", nameEn: "Ceadâr-Lunga",    lat: 46.0594, lng: 28.8294, pop: 19 },
  { id: "straseni",      nameJa: "ストラシェニ",       nameEn: "Strășeni",        lat: 47.1431, lng: 28.6097, pop: 18 },
  { id: "drochia",       nameJa: "ドロキア",           nameEn: "Drochia",         lat: 48.0317, lng: 27.8125, pop: 13 },
  { id: "causeni",       nameJa: "コウシェニ",         nameEn: "Căușeni",         lat: 46.6406, lng: 29.4044, pop: 16 },
  { id: "edinet",        nameJa: "エディネツ",         nameEn: "Edineț",          lat: 48.1689, lng: 27.2967, pop: 14 },
  { id: "hincesti",      nameJa: "フンチェシュト",     nameEn: "Hîncești",        lat: 46.8294, lng: 28.5917, pop: 15 },
  { id: "floresti",      nameJa: "フロレシュト",       nameEn: "Florești",        lat: 47.8950, lng: 28.2950, pop: 13 },
  { id: "anenii-noi",    nameJa: "アネニ・ノイ",       nameEn: "Anenii Noi",      lat: 46.8783, lng: 29.2350, pop: 9 },
  { id: "criuleni",      nameJa: "クリウレニ",         nameEn: "Criuleni",        lat: 47.2122, lng: 29.1547, pop: 8 },
];

export const MOLDOVA_PROJECTION: CityProjection = {
  minLon: 26.617889,
  minLat: 45.461774,
  maxLon: 30.131576,
  maxLat: 48.486034,
  cosLat: 0.682331,
  scale: 206.331466,
  offX: 32.660264,
  offY: 8,
};

export const MOLDOVA_META: CityCountryMeta = {
  slug: "moldova",
  continent: "europe",
  svgPath: "/maps/countries/moldova.svg",
  countryJa: "モルドバ",
  countryEn: "Moldova",
};
