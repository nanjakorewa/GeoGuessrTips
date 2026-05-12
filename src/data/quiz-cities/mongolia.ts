/** Top ~20 Mongolian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const MONGOLIA_CITIES: CityEntry[] = [
  { id: "ulaanbaatar",   nameJa: "ウランバートル",     nameEn: "Ulaanbaatar",     lat: 47.8864, lng: 106.9057, pop: 1646 },
  { id: "erdenet",       nameJa: "エルデネット",       nameEn: "Erdenet",         lat: 49.0353, lng: 104.0833, pop: 100 },
  { id: "darkhan",       nameJa: "ダルハン",           nameEn: "Darkhan",         lat: 49.4869, lng: 105.9229, pop: 84 },
  { id: "choibalsan",    nameJa: "チョイバルサン",     nameEn: "Choibalsan",      lat: 48.0717, lng: 114.5306, pop: 38 },
  { id: "moron",         nameJa: "ムルン",             nameEn: "Mörön",           lat: 49.6325, lng: 100.1614, pop: 37 },
  { id: "ulaangom",      nameJa: "オラーンゴム",       nameEn: "Ulaangom",        lat: 49.9811, lng: 92.0664, pop: 28 },
  { id: "khovd",         nameJa: "ホブド",             nameEn: "Khovd",           lat: 48.0056, lng: 91.6422, pop: 30 },
  { id: "bayanhongor",   nameJa: "バヤンホンゴル",     nameEn: "Bayanhongor",     lat: 46.1944, lng: 100.7186, pop: 26 },
  { id: "arvaikheer",    nameJa: "アルバイヘール",     nameEn: "Arvaikheer",      lat: 46.2667, lng: 102.7833, pop: 27 },
  { id: "sukhbaatar",    nameJa: "スフバートル",       nameEn: "Sükhbaatar",      lat: 50.2386, lng: 106.2114, pop: 22 },
  { id: "ulgii",         nameJa: "ウルギー",           nameEn: "Ölgii",           lat: 48.9683, lng: 89.9619, pop: 30 },
  { id: "sainshand",     nameJa: "サインシャンド",     nameEn: "Sainshand",       lat: 44.8908, lng: 110.1244, pop: 25 },
  { id: "uliastai",      nameJa: "ウリヤスタイ",       nameEn: "Uliastai",        lat: 47.7414, lng: 96.8420, pop: 23 },
  { id: "dalanzadgad",   nameJa: "ダランザドガド",     nameEn: "Dalanzadgad",     lat: 43.5708, lng: 104.4258, pop: 22 },
  { id: "altai",         nameJa: "アルタイ",           nameEn: "Altai",           lat: 46.3742, lng: 96.2581, pop: 17 },
  { id: "tsetserleg",    nameJa: "ツェツェルレグ",     nameEn: "Tsetserleg",      lat: 47.4742, lng: 101.4544, pop: 19 },
  { id: "zuunmod",       nameJa: "ズーンモド",         nameEn: "Zuunmod",         lat: 47.7064, lng: 106.9494, pop: 17 },
  { id: "mandalgovi",    nameJa: "マンダルゴビ",       nameEn: "Mandalgovi",      lat: 45.7625, lng: 106.2725, pop: 14 },
  { id: "baganuur",      nameJa: "バガヌール",         nameEn: "Baganuur",        lat: 47.8333, lng: 108.3667, pop: 28 },
  { id: "nalaikh",       nameJa: "ナライハ",           nameEn: "Nalaikh",         lat: 47.7728, lng: 107.2553, pop: 35 },
];

export const MONGOLIA_PROJECTION: CityProjection = {
  minLon: 87.735709,
  minLat: 41.586145,
  maxLon: 119.907027,
  maxLat: 52.129584,
  cosLat: 0.683811,
  scale: 24.728299,
  offX: 8,
  offY: 189.639343,
};

export const MONGOLIA_META: CityCountryMeta = {
  slug: "mongolia",
  continent: "asia",
  svgPath: "/maps/countries/mongolia.svg",
  countryJa: "モンゴル",
  countryEn: "Mongolia",
};
