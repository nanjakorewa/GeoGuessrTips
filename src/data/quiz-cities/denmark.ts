/** Top ~30 Danish cities (urban areas) ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const DENMARK_CITIES: CityEntry[] = [
  { id: "copenhagen",   nameJa: "コペンハーゲン",     nameEn: "København",       lat: 55.6761, lng: 12.5683, pop: 1380 },
  { id: "aarhus",       nameJa: "オーフス",           nameEn: "Aarhus",          lat: 56.1629, lng: 10.2039, pop: 290 },
  { id: "odense",       nameJa: "オーデンセ",         nameEn: "Odense",          lat: 55.4038, lng: 10.4024, pop: 180 },
  { id: "aalborg",      nameJa: "オールボー",         nameEn: "Aalborg",         lat: 57.0488, lng:  9.9217, pop: 144 },
  { id: "esbjerg",      nameJa: "エスビャウ",         nameEn: "Esbjerg",         lat: 55.4761, lng:  8.4593, pop: 72 },
  { id: "randers",      nameJa: "ラナス",             nameEn: "Randers",         lat: 56.4607, lng: 10.0369, pop: 64 },
  { id: "kolding",      nameJa: "コリング",           nameEn: "Kolding",         lat: 55.4904, lng:  9.4721, pop: 63 },
  { id: "horsens",      nameJa: "ホーセンス",         nameEn: "Horsens",         lat: 55.8617, lng:  9.8503, pop: 62 },
  { id: "vejle",        nameJa: "ヴァイレ",           nameEn: "Vejle",           lat: 55.7058, lng:  9.5378, pop: 60 },
  { id: "roskilde",     nameJa: "ロスキレ",           nameEn: "Roskilde",        lat: 55.6415, lng: 12.0803, pop: 51 },
  { id: "herning",      nameJa: "ヘアニング",         nameEn: "Herning",         lat: 56.1397, lng:  8.9787, pop: 51 },
  { id: "silkeborg",    nameJa: "シルケボー",         nameEn: "Silkeborg",       lat: 56.1812, lng:  9.5532, pop: 50 },
  { id: "helsingor",    nameJa: "ヘルシンゲル",       nameEn: "Helsingør",       lat: 56.0361, lng: 12.6136, pop: 48 },
  { id: "naestved",     nameJa: "ネストヴェズ",       nameEn: "Næstved",         lat: 55.2272, lng: 11.7611, pop: 45 },
  { id: "fredericia",   nameJa: "フレデリシア",       nameEn: "Fredericia",      lat: 55.5660, lng:  9.7530, pop: 42 },
  { id: "viborg",       nameJa: "ヴィボー",           nameEn: "Viborg",          lat: 56.4516, lng:  9.4023, pop: 41 },
  { id: "koge",         nameJa: "ケーエ",             nameEn: "Køge",            lat: 55.4577, lng: 12.1820, pop: 39 },
  { id: "holstebro",    nameJa: "ホルステブロー",     nameEn: "Holstebro",       lat: 56.3614, lng:  8.6166, pop: 36 },
  { id: "taastrup",     nameJa: "トーストロプ",       nameEn: "Taastrup",        lat: 55.6517, lng: 12.3030, pop: 35 },
  { id: "slagelse",     nameJa: "スラーエルセ",       nameEn: "Slagelse",        lat: 55.4040, lng: 11.3550, pop: 35 },
  { id: "hillerod",     nameJa: "ヒレレズ",           nameEn: "Hillerød",        lat: 55.9275, lng: 12.3079, pop: 35 },
  { id: "sonderborg",   nameJa: "セナボー",           nameEn: "Sønderborg",      lat: 54.9094, lng:  9.7917, pop: 28 },
  { id: "svendborg",    nameJa: "スヴェンボー",       nameEn: "Svendborg",       lat: 55.0593, lng: 10.6068, pop: 27 },
  { id: "hjorring",     nameJa: "ヨアリング",         nameEn: "Hjørring",        lat: 57.4609, lng:  9.9824, pop: 26 },
  { id: "frederikshavn", nameJa: "フレデリクスハウン", nameEn: "Frederikshavn",  lat: 57.4407, lng: 10.5360, pop: 23 },
  { id: "haderslev",    nameJa: "ハーザースレウ",     nameEn: "Haderslev",       lat: 55.2483, lng:  9.4905, pop: 22 },
  { id: "skive",        nameJa: "スキーヴェ",         nameEn: "Skive",           lat: 56.5667, lng:  9.0286, pop: 21 },
  { id: "ringsted",     nameJa: "リングステズ",       nameEn: "Ringsted",        lat: 55.4427, lng: 11.7898, pop: 23 },
  { id: "nykobing-falster", nameJa: "ニュコービング・ファルスター", nameEn: "Nykøbing Falster", lat: 54.7708, lng: 11.8740, pop: 17 },
  { id: "kalundborg",   nameJa: "カルンボー",         nameEn: "Kalundborg",      lat: 55.6803, lng: 11.0892, pop: 16 },
];

export const DENMARK_PROJECTION: CityProjection = {
  minLon: 8.094005,
  minLat: 54.56859,
  maxLon: 15.151378,
  maxLat: 57.751166,
  cosLat: 0.556877,
  scale: 138.419172,
  offX: 8,
  offY: 99.735233,
};

export const DENMARK_META: CityCountryMeta = {
  slug: "denmark",
  continent: "europe",
  svgPath: "/maps/countries/denmark.svg",
  countryJa: "デンマーク",
  countryEn: "Denmark",
};
