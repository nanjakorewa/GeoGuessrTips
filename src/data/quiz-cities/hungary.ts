/** Top ~35 Hungarian cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const HUNGARY_CITIES: CityEntry[] = [
  { id: "budapest",      nameJa: "ブダペスト",         nameEn: "Budapest",        lat: 47.4979, lng: 19.0402, pop: 1706 },
  { id: "debrecen",      nameJa: "デブレツェン",       nameEn: "Debrecen",        lat: 47.5316, lng: 21.6273, pop: 200 },
  { id: "szeged",        nameJa: "セゲド",             nameEn: "Szeged",          lat: 46.2530, lng: 20.1480, pop: 159 },
  { id: "miskolc",       nameJa: "ミシュコルツ",       nameEn: "Miskolc",         lat: 48.1035, lng: 20.7784, pop: 152 },
  { id: "pecs",          nameJa: "ペーチ",             nameEn: "Pécs",            lat: 46.0727, lng: 18.2323, pop: 142 },
  { id: "gyor",          nameJa: "ジェール",           nameEn: "Győr",            lat: 47.6875, lng: 17.6504, pop: 130 },
  { id: "nyiregyhaza",   nameJa: "ニーレジハーザ",     nameEn: "Nyíregyháza",     lat: 47.9554, lng: 21.7166, pop: 116 },
  { id: "kecskemet",     nameJa: "ケチケメート",       nameEn: "Kecskemét",       lat: 46.9069, lng: 19.6914, pop: 110 },
  { id: "szekesfehervar", nameJa: "セーケシュフェヘールヴァール", nameEn: "Székesfehérvár", lat: 47.1860, lng: 18.4221, pop: 96 },
  { id: "szombathely",   nameJa: "ソンバトヘイ",       nameEn: "Szombathely",     lat: 47.2351, lng: 16.6219, pop: 76 },
  { id: "szolnok",       nameJa: "ソルノク",           nameEn: "Szolnok",         lat: 47.1817, lng: 20.1986, pop: 70 },
  { id: "tatabanya",     nameJa: "タタバーニャ",       nameEn: "Tatabánya",       lat: 47.5705, lng: 18.4143, pop: 64 },
  { id: "kaposvar",      nameJa: "カポシュヴァール",   nameEn: "Kaposvár",        lat: 46.3568, lng: 17.7878, pop: 60 },
  { id: "erd",           nameJa: "エールド",           nameEn: "Érd",             lat: 47.3667, lng: 18.9000, pop: 67 },
  { id: "veszprem",      nameJa: "ヴェスプレーム",     nameEn: "Veszprém",        lat: 47.0907, lng: 17.9069, pop: 56 },
  { id: "bekescsaba",    nameJa: "ベーケーシュチャバ", nameEn: "Békéscsaba",      lat: 46.6779, lng: 21.0908, pop: 56 },
  { id: "zalaegerszeg",  nameJa: "ザラエゲルセグ",     nameEn: "Zalaegerszeg",    lat: 46.8419, lng: 16.8431, pop: 54 },
  { id: "sopron",        nameJa: "ショプロン",         nameEn: "Sopron",          lat: 47.6817, lng: 16.5845, pop: 63 },
  { id: "eger",          nameJa: "エゲル",             nameEn: "Eger",            lat: 47.9025, lng: 20.3744, pop: 51 },
  { id: "nagykanizsa",   nameJa: "ナジカニジャ",       nameEn: "Nagykanizsa",     lat: 46.4543, lng: 16.9897, pop: 46 },
  { id: "dunaujvaros",   nameJa: "ドゥナウーイヴァーロシュ", nameEn: "Dunaújváros", lat: 46.9619, lng: 18.9355, pop: 43 },
  { id: "hodmezovasarhely", nameJa: "ホードメズヴァーシャールヘイ", nameEn: "Hódmezővásárhely", lat: 46.4188, lng: 20.3268, pop: 42 },
  { id: "salgotarjan",   nameJa: "ショルゴータルヤーン", nameEn: "Salgótarján",   lat: 48.0986, lng: 19.7935, pop: 33 },
  { id: "ozd",           nameJa: "オーズド",           nameEn: "Ózd",             lat: 48.2218, lng: 20.2902, pop: 32 },
  { id: "papa",          nameJa: "パーパ",             nameEn: "Pápa",            lat: 47.3294, lng: 17.4677, pop: 31 },
  { id: "godollo",       nameJa: "ゲデレ",             nameEn: "Gödöllő",         lat: 47.5946, lng: 19.3650, pop: 34 },
  { id: "vac",           nameJa: "ヴァーツ",           nameEn: "Vác",             lat: 47.7762, lng: 19.1383, pop: 33 },
  { id: "gyongyos",      nameJa: "ジェンジェシュ",     nameEn: "Gyöngyös",        lat: 47.7831, lng: 19.9300, pop: 29 },
  { id: "esztergom",     nameJa: "エステルゴム",       nameEn: "Esztergom",       lat: 47.7867, lng: 18.7406, pop: 28 },
  { id: "ajka",          nameJa: "アイカ",             nameEn: "Ajka",            lat: 47.0989, lng: 17.5572, pop: 28 },
  { id: "hatvan",        nameJa: "ハトヴァン",         nameEn: "Hatvan",          lat: 47.6679, lng: 19.6818, pop: 21 },
  { id: "siofok",        nameJa: "シオフォク",         nameEn: "Siófok",          lat: 46.9000, lng: 18.0667, pop: 25 },
  { id: "mosonmagyarovar", nameJa: "モションマジャローヴァール", nameEn: "Mosonmagyaróvár", lat: 47.8674, lng: 17.2685, pop: 32 },
  { id: "komlo",         nameJa: "コムロー",           nameEn: "Komló",           lat: 46.1934, lng: 18.2628, pop: 23 },
  { id: "varpalota",     nameJa: "ヴァールパロタ",     nameEn: "Várpalota",       lat: 47.2003, lng: 18.1383, pop: 20 },
];

export const HUNGARY_PROJECTION: CityProjection = {
  minLon: 16.094035,
  minLat: 45.741343,
  maxLon: 22.877601,
  maxLat: 48.569233,
  cosLat: 0.680014,
  scale: 117.929701,
  offX: 8,
  offY: 153.25389,
};

export const HUNGARY_META: CityCountryMeta = {
  slug: "hungary",
  continent: "europe",
  svgPath: "/maps/countries/hungary.svg",
  countryJa: "ハンガリー",
  countryEn: "Hungary",
};
