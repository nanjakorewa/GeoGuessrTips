/** Top ~15 Rwandan cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const RWANDA_CITIES: CityEntry[] = [
  { id: "kigali",       nameJa: "キガリ",           nameEn: "Kigali",       lat:  -1.9500, lng:  30.0588, pop: 1750 },
  { id: "gisenyi",      nameJa: "ギセニ",           nameEn: "Gisenyi",      lat:  -1.7028, lng:  29.2569, pop: 136 },
  { id: "ruhengeri",    nameJa: "ルヘンゲリ",       nameEn: "Musanze",      lat:  -1.4994, lng:  29.6322, pop: 100 },
  { id: "butare",       nameJa: "ブタレ",           nameEn: "Butare",       lat:  -2.5967, lng:  29.7392, pop: 90 },
  { id: "rwamagana",    nameJa: "ルワマガナ",       nameEn: "Rwamagana",    lat:  -1.9489, lng:  30.4347, pop: 90 },
  { id: "gitarama",     nameJa: "ギタラマ",         nameEn: "Muhanga",      lat:  -2.0833, lng:  29.7500, pop: 87 },
  { id: "byumba",       nameJa: "ビュンバ",         nameEn: "Byumba",       lat:  -1.5764, lng:  30.0683, pop: 70 },
  { id: "kibungo",      nameJa: "キブンゴ",         nameEn: "Kibungo",      lat:  -2.1597, lng:  30.5425, pop: 65 },
  { id: "cyangugu",     nameJa: "チャングーグ",     nameEn: "Cyangugu",     lat:  -2.4847, lng:  28.9075, pop: 63 },
  { id: "kabuga",       nameJa: "カブガ",           nameEn: "Kabuga",       lat:  -1.9333, lng:  30.2167, pop: 60 },
  { id: "nyanza",       nameJa: "ニャンザ",         nameEn: "Nyanza",       lat:  -2.3500, lng:  29.7500, pop: 50 },
  { id: "kibuye",       nameJa: "キブイェ",         nameEn: "Kibuye",       lat:  -2.0608, lng:  29.3486, pop: 50 },
  { id: "gikongoro",    nameJa: "ギコンゴロ",       nameEn: "Nyamagabe",    lat:  -2.4836, lng:  29.5567, pop: 30 },
  { id: "kayonza",      nameJa: "カヨンザ",         nameEn: "Kayonza",      lat:  -1.8814, lng:  30.6111, pop: 22 },
];

export const RWANDA_PROJECTION: CityProjection = {
  minLon: 28.857236,
  minLat: -2.826855,
  maxLon: 30.887809,
  maxLat: -1.058694,
  cosLat: 0.999425,
  scale: 268.058759,
  offX: 8,
  offY: 83.014478,
};

export const RWANDA_META: CityCountryMeta = {
  slug: "rwanda",
  continent: "africa",
  svgPath: "/maps/countries/rwanda.svg",
  countryJa: "ルワンダ",
  countryEn: "Rwanda",
};
