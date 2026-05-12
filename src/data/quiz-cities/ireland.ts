/** Top ~25 Irish cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const IRELAND_CITIES: CityEntry[] = [
  { id: "dublin",        nameJa: "ダブリン",           nameEn: "Dublin",          lat: 53.3498, lng:  -6.2603, pop: 1264 },
  { id: "cork",          nameJa: "コーク",             nameEn: "Cork",            lat: 51.8985, lng:  -8.4756, pop: 224 },
  { id: "limerick",      nameJa: "リムリック",         nameEn: "Limerick",        lat: 52.6638, lng:  -8.6267, pop: 102 },
  { id: "galway",        nameJa: "ゴールウェイ",       nameEn: "Galway",          lat: 53.2707, lng:  -9.0568, pop: 86 },
  { id: "waterford",     nameJa: "ウォーターフォード", nameEn: "Waterford",       lat: 52.2593, lng:  -7.1101, pop: 60 },
  { id: "drogheda",      nameJa: "ドロエダ",           nameEn: "Drogheda",        lat: 53.7189, lng:  -6.3478, pop: 44 },
  { id: "swords",        nameJa: "ソーズ",             nameEn: "Swords",          lat: 53.4597, lng:  -6.2181, pop: 40 },
  { id: "dundalk",       nameJa: "ダンドーク",         nameEn: "Dundalk",         lat: 54.0014, lng:  -6.4058, pop: 39 },
  { id: "bray",          nameJa: "ブレイ",             nameEn: "Bray",            lat: 53.2026, lng:  -6.0986, pop: 33 },
  { id: "navan",         nameJa: "ナヴァン",           nameEn: "Navan",           lat: 53.6528, lng:  -6.6814, pop: 33 },
  { id: "ennis",         nameJa: "エニス",             nameEn: "Ennis",           lat: 52.8431, lng:  -8.9864, pop: 26 },
  { id: "kilkenny",      nameJa: "キルケニー",         nameEn: "Kilkenny",        lat: 52.6541, lng:  -7.2448, pop: 27 },
  { id: "tralee",        nameJa: "トラリー",           nameEn: "Tralee",          lat: 52.2675, lng:  -9.7019, pop: 26 },
  { id: "carlow",        nameJa: "カーロー",           nameEn: "Carlow",          lat: 52.8408, lng:  -6.9261, pop: 27 },
  { id: "newbridge",     nameJa: "ニューブリッジ",     nameEn: "Newbridge",       lat: 53.1818, lng:  -6.7969, pop: 26 },
  { id: "naas",          nameJa: "ネース",             nameEn: "Naas",            lat: 53.2197, lng:  -6.6594, pop: 26 },
  { id: "athlone",       nameJa: "アスローン",         nameEn: "Athlone",         lat: 53.4239, lng:  -7.9407, pop: 22 },
  { id: "portlaoise",    nameJa: "ポートリーシュ",     nameEn: "Portlaoise",      lat: 53.0344, lng:  -7.2997, pop: 22 },
  { id: "mullingar",     nameJa: "マリンガー",         nameEn: "Mullingar",       lat: 53.5239, lng:  -7.3380, pop: 21 },
  { id: "wexford",       nameJa: "ウェクスフォード",   nameEn: "Wexford",         lat: 52.3369, lng:  -6.4633, pop: 21 },
  { id: "sligo",         nameJa: "スライゴ",           nameEn: "Sligo",           lat: 54.2766, lng:  -8.4761, pop: 20 },
  { id: "letterkenny",   nameJa: "レターケニー",       nameEn: "Letterkenny",     lat: 54.9558, lng:  -7.7339, pop: 22 },
  { id: "celbridge",     nameJa: "セルブリッジ",       nameEn: "Celbridge",       lat: 53.3389, lng:  -6.5439, pop: 21 },
  { id: "clonmel",       nameJa: "クロンメル",         nameEn: "Clonmel",         lat: 52.3558, lng:  -7.7044, pop: 17 },
  { id: "killarney",     nameJa: "キラーニー",         nameEn: "Killarney",       lat: 52.0599, lng:  -9.5044, pop: 15 },
];

export const IRELAND_PROJECTION: CityProjection = {
  minLon: -10.478179,
  minLat: 51.445705,
  maxLon: -5.99352,
  maxLat: 55.386379,
  cosLat: 0.596,
  scale: 158.348546,
  offX: 68.378482,
  offY: 8,
};

export const IRELAND_META: CityCountryMeta = {
  slug: "ireland",
  continent: "europe",
  svgPath: "/maps/countries/ireland.svg",
  countryJa: "アイルランド",
  countryEn: "Ireland",
};
