/** Top ~35 Swedish cities (urban areas) ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const SWEDEN_CITIES: CityEntry[] = [
  { id: "stockholm",     nameJa: "ストックホルム",     nameEn: "Stockholm",       lat: 59.3293, lng: 18.0686, pop: 990 },
  { id: "goteborg",      nameJa: "ヨーテボリ",         nameEn: "Göteborg",        lat: 57.7089, lng: 11.9746, pop: 600 },
  { id: "malmo",         nameJa: "マルメ",             nameEn: "Malmö",           lat: 55.6050, lng: 13.0038, pop: 354 },
  { id: "uppsala",       nameJa: "ウプサラ",           nameEn: "Uppsala",         lat: 59.8586, lng: 17.6389, pop: 178 },
  { id: "vasteras",      nameJa: "ヴェステロース",     nameEn: "Västerås",        lat: 59.6099, lng: 16.5448, pop: 128 },
  { id: "orebro",        nameJa: "エーレブルー",       nameEn: "Örebro",          lat: 59.2741, lng: 15.2066, pop: 126 },
  { id: "linkoping",     nameJa: "リンショーピング",   nameEn: "Linköping",       lat: 58.4108, lng: 15.6214, pop: 117 },
  { id: "helsingborg",   nameJa: "ヘルシンボリ",       nameEn: "Helsingborg",     lat: 56.0465, lng: 12.6945, pop: 113 },
  { id: "jonkoping",     nameJa: "ヨンショーピング",   nameEn: "Jönköping",       lat: 57.7826, lng: 14.1618, pop: 105 },
  { id: "norrkoping",    nameJa: "ノーショーピング",   nameEn: "Norrköping",      lat: 58.5877, lng: 16.1924, pop: 102 },
  { id: "lund",          nameJa: "ルンド",             nameEn: "Lund",            lat: 55.7047, lng: 13.1910, pop: 95 },
  { id: "umea",          nameJa: "ウメオ",             nameEn: "Umeå",            lat: 63.8258, lng: 20.2630, pop: 93 },
  { id: "gavle",         nameJa: "イェヴレ",           nameEn: "Gävle",           lat: 60.6749, lng: 17.1413, pop: 78 },
  { id: "boras",         nameJa: "ボロース",           nameEn: "Borås",           lat: 57.7210, lng: 12.9401, pop: 75 },
  { id: "sodertalje",    nameJa: "セーデルテリエ",     nameEn: "Södertälje",      lat: 59.1955, lng: 17.6253, pop: 76 },
  { id: "eskilstuna",    nameJa: "エスキルストゥーナ", nameEn: "Eskilstuna",      lat: 59.3711, lng: 16.5114, pop: 71 },
  { id: "huddinge",      nameJa: "フディンゲ",         nameEn: "Huddinge",        lat: 59.2367, lng: 17.9818, pop: 96 },
  { id: "halmstad",      nameJa: "ハルムスタード",     nameEn: "Halmstad",        lat: 56.6745, lng: 12.8578, pop: 70 },
  { id: "vaxjo",         nameJa: "ヴェクシェー",       nameEn: "Växjö",           lat: 56.8777, lng: 14.8092, pop: 67 },
  { id: "karlstad",      nameJa: "カールスタード",     nameEn: "Karlstad",        lat: 59.4022, lng: 13.5115, pop: 64 },
  { id: "sundsvall",     nameJa: "スンツヴァル",       nameEn: "Sundsvall",       lat: 62.3908, lng: 17.3069, pop: 58 },
  { id: "trollhattan",   nameJa: "トロルヘッタン",     nameEn: "Trollhättan",     lat: 58.2837, lng: 12.2886, pop: 49 },
  { id: "ostersund",     nameJa: "エステルスンド",     nameEn: "Östersund",       lat: 63.1792, lng: 14.6357, pop: 51 },
  { id: "lulea",         nameJa: "ルレオ",             nameEn: "Luleå",           lat: 65.5848, lng: 22.1547, pop: 49 },
  { id: "borlange",      nameJa: "ボルレンゲ",         nameEn: "Borlänge",        lat: 60.4858, lng: 15.4275, pop: 44 },
  { id: "kalmar",        nameJa: "カルマル",           nameEn: "Kalmar",          lat: 56.6634, lng: 16.3568, pop: 42 },
  { id: "tumba",         nameJa: "トゥンバ",           nameEn: "Tumba",           lat: 59.1989, lng: 17.8336, pop: 41 },
  { id: "kristianstad",  nameJa: "クリスチャンスター", nameEn: "Kristianstad",    lat: 56.0294, lng: 14.1567, pop: 40 },
  { id: "uddevalla",     nameJa: "ウッデヴァラ",       nameEn: "Uddevalla",       lat: 58.3489, lng: 11.9425, pop: 35 },
  { id: "skelleftea",    nameJa: "シェレフテオ",       nameEn: "Skellefteå",      lat: 64.7506, lng: 20.9628, pop: 36 },
  { id: "skovde",        nameJa: "シェーヴデ",         nameEn: "Skövde",          lat: 58.3905, lng: 13.8454, pop: 36 },
  { id: "karlskrona",    nameJa: "カールスクルーナ",   nameEn: "Karlskrona",      lat: 56.1612, lng: 15.5869, pop: 36 },
  { id: "varberg",       nameJa: "ヴァールベリ",       nameEn: "Varberg",         lat: 57.1057, lng: 12.2502, pop: 34 },
  { id: "visby",         nameJa: "ヴィスビー",         nameEn: "Visby",           lat: 57.6348, lng: 18.2942, pop: 24 },
  { id: "falun",         nameJa: "ファルン",           nameEn: "Falun",           lat: 60.6065, lng: 15.6355, pop: 37 },
];

export const SWEDEN_PROJECTION: CityProjection = {
  minLon: 11.108165,
  minLat: 55.342678,
  maxLon: 24.163414,
  maxLat: 69.036356,
  cosLat: 0.466548,
  scale: 45.568473,
  offX: 141.223344,
  offY: 8,
};

export const SWEDEN_META: CityCountryMeta = {
  slug: "sweden",
  continent: "europe",
  svgPath: "/maps/countries/sweden.svg",
  countryJa: "スウェーデン",
  countryEn: "Sweden",
};
