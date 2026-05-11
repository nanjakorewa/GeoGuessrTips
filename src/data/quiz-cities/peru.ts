/** Top ~30 Peruvian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const PERU_CITIES: CityEntry[] = [
  { id: "lima",          nameJa: "リマ",               nameEn: "Lima",            lat: -12.0464, lng: -77.0428, pop: 9750 },
  { id: "arequipa",      nameJa: "アレキパ",           nameEn: "Arequipa",        lat: -16.4090, lng: -71.5375, pop: 1080 },
  { id: "trujillo",      nameJa: "トルヒージョ",       nameEn: "Trujillo",        lat:  -8.1118, lng: -79.0287, pop: 935 },
  { id: "chiclayo",      nameJa: "チクラヨ",           nameEn: "Chiclayo",        lat:  -6.7714, lng: -79.8409, pop: 580 },
  { id: "piura",         nameJa: "ピウラ",             nameEn: "Piura",           lat:  -5.1945, lng: -80.6328, pop: 484 },
  { id: "iquitos",       nameJa: "イキトス",           nameEn: "Iquitos",         lat:  -3.7437, lng: -73.2516, pop: 467 },
  { id: "cusco",         nameJa: "クスコ",             nameEn: "Cusco",           lat: -13.5319, lng: -71.9675, pop: 428 },
  { id: "chimbote",      nameJa: "チンボーテ",         nameEn: "Chimbote",        lat:  -9.0764, lng: -78.5936, pop: 371 },
  { id: "huancayo",      nameJa: "ワンカヨ",           nameEn: "Huancayo",        lat: -12.0651, lng: -75.2049, pop: 380 },
  { id: "tacna",         nameJa: "タクナ",             nameEn: "Tacna",           lat: -18.0066, lng: -70.2461, pop: 290 },
  { id: "juliaca",       nameJa: "フリアカ",           nameEn: "Juliaca",         lat: -15.5000, lng: -70.1333, pop: 277 },
  { id: "ica",           nameJa: "イカ",               nameEn: "Ica",             lat: -14.0678, lng: -75.7286, pop: 282 },
  { id: "sullana",       nameJa: "スジャナ",           nameEn: "Sullana",         lat:  -4.9039, lng: -80.6852, pop: 202 },
  { id: "ayacucho",      nameJa: "アヤクーチョ",       nameEn: "Ayacucho",        lat: -13.1632, lng: -74.2243, pop: 217 },
  { id: "cajamarca",     nameJa: "カハマルカ",         nameEn: "Cajamarca",       lat:  -7.1638, lng: -78.5028, pop: 247 },
  { id: "pucallpa",      nameJa: "プカルパ",           nameEn: "Pucallpa",        lat:  -8.3791, lng: -74.5539, pop: 326 },
  { id: "huanuco",       nameJa: "ワヌコ",             nameEn: "Huánuco",         lat:  -9.9281, lng: -76.2406, pop: 200 },
  { id: "tarapoto",      nameJa: "タラポト",           nameEn: "Tarapoto",        lat:  -6.4836, lng: -76.3722, pop: 173 },
  { id: "puno",          nameJa: "プーノ",             nameEn: "Puno",            lat: -15.8402, lng: -70.0219, pop: 145 },
  { id: "tumbes",        nameJa: "トゥンベス",         nameEn: "Tumbes",          lat:  -3.5667, lng: -80.4500, pop: 110 },
  { id: "chincha-alta",  nameJa: "チンチャ・アルタ",   nameEn: "Chincha Alta",    lat: -13.4178, lng: -76.1314, pop: 168 },
  { id: "huaraz",        nameJa: "ワラス",             nameEn: "Huaraz",          lat:  -9.5278, lng: -77.5278, pop: 121 },
  { id: "abancay",       nameJa: "アバンカイ",         nameEn: "Abancay",         lat: -13.6358, lng: -72.8814, pop: 70 },
  { id: "chachapoyas",   nameJa: "チャチャポヤス",     nameEn: "Chachapoyas",     lat:  -6.2306, lng: -77.8694, pop: 32 },
  { id: "moquegua",      nameJa: "モケグア",           nameEn: "Moquegua",        lat: -17.1947, lng: -70.9356, pop: 76 },
  { id: "talara",        nameJa: "タララ",             nameEn: "Talara",          lat:  -4.5772, lng: -81.2719, pop: 95 },
  { id: "huacho",        nameJa: "ワチョ",             nameEn: "Huacho",          lat: -11.1067, lng: -77.6094, pop: 60 },
  { id: "pisco",         nameJa: "ピスコ",             nameEn: "Pisco",           lat: -13.7150, lng: -76.2026, pop: 105 },
  { id: "puerto-maldonado", nameJa: "プエルト・マルドナド", nameEn: "Puerto Maldonado", lat: -12.5933, lng: -69.1893, pop: 76 },
  { id: "cerro-de-pasco", nameJa: "セロ・デ・パスコ", nameEn: "Cerro de Pasco",   lat: -10.6868, lng: -76.2569, pop: 70 },
  { id: "huancavelica",  nameJa: "ワンカベリカ",       nameEn: "Huancavelica",    lat: -12.7867, lng: -74.9700, pop: 49 },
];

export const PERU_PROJECTION: CityProjection = {
  minLon: -81.337558,
  minLat: -18.337746,
  maxLon: -68.684252,
  maxLat: -0.029093,
  cosLat: 0.987182,
  scale: 34.082245,
  offX: 67.137257,
  offY: 8,
};

export const PERU_META: CityCountryMeta = {
  slug: "peru",
  continent: "cs_america",
  svgPath: "/maps/countries/peru.svg",
  countryJa: "ペルー",
  countryEn: "Peru",
};
