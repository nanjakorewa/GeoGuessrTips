/** Top ~25 Bosnian/Herzegovinian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const BOSNIA_CITIES: CityEntry[] = [
  { id: "sarajevo",      nameJa: "サラエヴォ",         nameEn: "Sarajevo",        lat: 43.8563, lng: 18.4131, pop: 275 },
  { id: "banja-luka",    nameJa: "バニャ・ルカ",       nameEn: "Banja Luka",      lat: 44.7722, lng: 17.1910, pop: 185 },
  { id: "tuzla",         nameJa: "トゥズラ",           nameEn: "Tuzla",           lat: 44.5343, lng: 18.6736, pop: 110 },
  { id: "zenica",        nameJa: "ゼニツァ",           nameEn: "Zenica",          lat: 44.2039, lng: 17.9078, pop: 110 },
  { id: "mostar",        nameJa: "モスタル",           nameEn: "Mostar",          lat: 43.3438, lng: 17.8078, pop: 105 },
  { id: "bijeljina",     nameJa: "ビイェリナ",         nameEn: "Bijeljina",       lat: 44.7561, lng: 19.2144, pop: 107 },
  { id: "brcko",         nameJa: "ブルチコ",           nameEn: "Brčko",           lat: 44.8694, lng: 18.8108, pop: 39 },
  { id: "prijedor",      nameJa: "プリイェドル",       nameEn: "Prijedor",        lat: 44.9794, lng: 16.7100, pop: 89 },
  { id: "doboj",         nameJa: "ドボイ",             nameEn: "Doboj",           lat: 44.7333, lng: 18.0867, pop: 71 },
  { id: "trebinje",      nameJa: "トレビニェ",         nameEn: "Trebinje",        lat: 42.7117, lng: 18.3422, pop: 30 },
  { id: "cazin",         nameJa: "ツァジン",           nameEn: "Cazin",           lat: 44.9667, lng: 15.9436, pop: 23 },
  { id: "bihac",         nameJa: "ビハチ",             nameEn: "Bihać",           lat: 44.8167, lng: 15.8703, pop: 56 },
  { id: "gradiska",      nameJa: "グラディシュカ",     nameEn: "Gradiška",        lat: 45.1453, lng: 17.2467, pop: 49 },
  { id: "zvornik",       nameJa: "ズヴォルニク",       nameEn: "Zvornik",         lat: 44.3886, lng: 19.0997, pop: 54 },
  { id: "siroki-brijeg", nameJa: "シロキ・ブリイェグ", nameEn: "Široki Brijeg",   lat: 43.3833, lng: 17.5944, pop: 13 },
  { id: "konjic",        nameJa: "コニツ",             nameEn: "Konjic",          lat: 43.6531, lng: 17.9669, pop: 26 },
  { id: "livno",         nameJa: "リヴノ",             nameEn: "Livno",           lat: 43.8267, lng: 17.0064, pop: 9 },
  { id: "gorazde",       nameJa: "ゴラジュデ",         nameEn: "Goražde",         lat: 43.6661, lng: 18.9742, pop: 21 },
  { id: "visoko",        nameJa: "ヴィソコ",           nameEn: "Visoko",          lat: 43.9886, lng: 18.1789, pop: 17 },
  { id: "tesanj",        nameJa: "テシャニ",           nameEn: "Tešanj",          lat: 44.6122, lng: 17.9856, pop: 16 },
  { id: "modrica",       nameJa: "モドリチャ",         nameEn: "Modriča",         lat: 44.9528, lng: 18.3061, pop: 25 },
  { id: "gracanica",     nameJa: "グラチャニツァ",     nameEn: "Gračanica",       lat: 44.6989, lng: 18.3050, pop: 18 },
  { id: "lukavac",       nameJa: "ルカヴァツ",         nameEn: "Lukavac",         lat: 44.5489, lng: 18.5239, pop: 13 },
  { id: "foca",          nameJa: "フォチャ",           nameEn: "Foča",            lat: 43.5061, lng: 18.7811, pop: 12 },
];

export const BOSNIA_PROJECTION: CityProjection = {
  minLon: 15.716074,
  minLat: 42.559212,
  maxLon: 19.618885,
  maxLat: 45.284524,
  cosLat: 0.720286,
  scale: 193.515679,
  offX: 8,
  offY: 56.304698,
};

export const BOSNIA_META: CityCountryMeta = {
  slug: "bosnia",
  continent: "europe",
  svgPath: "/maps/countries/bosnia.svg",
  countryJa: "ボスニア・ヘルツェゴビナ",
  countryEn: "Bosnia and Herzegovina",
};
