/** Top ~25 Slovak cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const SLOVAKIA_CITIES: CityEntry[] = [
  { id: "bratislava",    nameJa: "ブラチスラヴァ",     nameEn: "Bratislava",      lat: 48.1486, lng: 17.1077, pop: 475 },
  { id: "kosice",        nameJa: "コシツェ",           nameEn: "Košice",          lat: 48.7164, lng: 21.2611, pop: 228 },
  { id: "presov",        nameJa: "プレショウ",         nameEn: "Prešov",          lat: 48.9989, lng: 21.2393, pop: 84 },
  { id: "nitra",         nameJa: "ニトラ",             nameEn: "Nitra",           lat: 48.3069, lng: 18.0866, pop: 77 },
  { id: "zilina",        nameJa: "ジリナ",             nameEn: "Žilina",          lat: 49.2237, lng: 18.7395, pop: 82 },
  { id: "banska-bystrica", nameJa: "バンスカー・ビストリツァ", nameEn: "Banská Bystrica", lat: 48.7395, lng: 19.1535, pop: 76 },
  { id: "trnava",        nameJa: "トルナヴァ",         nameEn: "Trnava",          lat: 48.3774, lng: 17.5882, pop: 64 },
  { id: "trencin",       nameJa: "トレンチーン",       nameEn: "Trenčín",         lat: 48.8945, lng: 18.0444, pop: 55 },
  { id: "martin",        nameJa: "マルチン",           nameEn: "Martin",          lat: 49.0664, lng: 18.9286, pop: 53 },
  { id: "poprad",        nameJa: "ポプラド",           nameEn: "Poprad",          lat: 49.0533, lng: 20.2978, pop: 51 },
  { id: "prievidza",     nameJa: "プリエヴィッツァ",   nameEn: "Prievidza",       lat: 48.7728, lng: 18.6256, pop: 45 },
  { id: "zvolen",        nameJa: "ズヴォレン",         nameEn: "Zvolen",          lat: 48.5764, lng: 19.1217, pop: 41 },
  { id: "michalovce",    nameJa: "ミハロウツェ",       nameEn: "Michalovce",      lat: 48.7558, lng: 21.9189, pop: 38 },
  { id: "nove-zamky",    nameJa: "ノヴェー・ザームキ", nameEn: "Nové Zámky",      lat: 47.9853, lng: 18.1611, pop: 36 },
  { id: "spisska-nova-ves", nameJa: "スピシュスカー・ノヴァー・ヴェス", nameEn: "Spišská Nová Ves", lat: 48.9433, lng: 20.5667, pop: 36 },
  { id: "komarno",       nameJa: "コマールノ",         nameEn: "Komárno",         lat: 47.7619, lng: 18.1294, pop: 33 },
  { id: "humenne",       nameJa: "フメンネ",           nameEn: "Humenné",         lat: 48.9333, lng: 21.9167, pop: 32 },
  { id: "levice",        nameJa: "レヴィツェ",         nameEn: "Levice",          lat: 48.2167, lng: 18.6000, pop: 33 },
  { id: "bardejov",      nameJa: "バルデヨウ",         nameEn: "Bardejov",        lat: 49.2942, lng: 21.2767, pop: 32 },
  { id: "liptovsky-mikulas", nameJa: "リプトフスキー・ミクラーシュ", nameEn: "Liptovský Mikuláš", lat: 49.0833, lng: 19.6167, pop: 31 },
  { id: "ruzomberok",    nameJa: "ルジョンベロク",     nameEn: "Ružomberok",      lat: 49.0833, lng: 19.3000, pop: 27 },
  { id: "topolcany",     nameJa: "トポリチャニ",       nameEn: "Topoľčany",       lat: 48.5614, lng: 18.1758, pop: 26 },
  { id: "trebisov",      nameJa: "トレビショウ",       nameEn: "Trebišov",        lat: 48.6256, lng: 21.7158, pop: 23 },
  { id: "dunajska-streda", nameJa: "ドゥナイスカー・ストレダ", nameEn: "Dunajská Streda", lat: 47.9931, lng: 17.6175, pop: 23 },
  { id: "rimavska-sobota", nameJa: "リマフスカー・ソボタ", nameEn: "Rimavská Sobota", lat: 48.3833, lng: 20.0167, pop: 23 },
];

export const SLOVAKIA_PROJECTION: CityProjection = {
  minLon: 16.84448,
  minLat: 47.750006,
  maxLon: 22.539637,
  maxLat: 49.60178,
  cosLat: 0.660318,
  scale: 144.657268,
  offX: 8,
  offY: 186.063716,
};

export const SLOVAKIA_META: CityCountryMeta = {
  slug: "slovakia",
  continent: "europe",
  svgPath: "/maps/countries/slovakia.svg",
  countryJa: "スロバキア",
  countryEn: "Slovakia",
};
