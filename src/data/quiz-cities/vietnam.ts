/** Top ~30 Vietnamese cities ordered by population (~thousands). */
import type { CityEntry, CityCountryMeta, CityProjection } from "./_types";

export const VIETNAM_CITIES: CityEntry[] = [
  { id: "ho-chi-minh",   nameJa: "ホーチミン",         nameEn: "Ho Chi Minh City", lat: 10.8231, lng: 106.6297, pop: 8993 },
  { id: "hanoi",         nameJa: "ハノイ",             nameEn: "Hà Nội",          lat: 21.0285, lng: 105.8542, pop: 8053 },
  { id: "haiphong",      nameJa: "ハイフォン",         nameEn: "Hải Phòng",       lat: 20.8449, lng: 106.6881, pop: 2050 },
  { id: "can-tho",       nameJa: "カントー",           nameEn: "Cần Thơ",         lat: 10.0452, lng: 105.7469, pop: 1240 },
  { id: "da-nang",       nameJa: "ダナン",             nameEn: "Đà Nẵng",         lat: 16.0544, lng: 108.2022, pop: 1134 },
  { id: "bien-hoa",      nameJa: "ビエンホア",         nameEn: "Biên Hòa",        lat: 10.9460, lng: 106.8234, pop: 1100 },
  { id: "hue",           nameJa: "フエ",               nameEn: "Huế",             lat: 16.4637, lng: 107.5909, pop: 652 },
  { id: "nha-trang",     nameJa: "ニャチャン",         nameEn: "Nha Trang",       lat: 12.2388, lng: 109.1967, pop: 535 },
  { id: "buon-ma-thuot", nameJa: "ブオン・マ・トゥオット", nameEn: "Buôn Ma Thuột", lat: 12.6667, lng: 108.0500, pop: 502 },
  { id: "thai-nguyen",   nameJa: "タイグエン",         nameEn: "Thái Nguyên",     lat: 21.5928, lng: 105.8442, pop: 365 },
  { id: "vung-tau",      nameJa: "ヴンタウ",           nameEn: "Vũng Tàu",        lat: 10.3460, lng: 107.0843, pop: 528 },
  { id: "nam-dinh",      nameJa: "ナムディン",         nameEn: "Nam Định",        lat: 20.4341, lng: 106.1773, pop: 387 },
  { id: "vinh",          nameJa: "ヴィン",             nameEn: "Vinh",            lat: 18.6796, lng: 105.6816, pop: 480 },
  { id: "qui-nhon",      nameJa: "クイニョン",         nameEn: "Qui Nhon",        lat: 13.7765, lng: 109.2233, pop: 457 },
  { id: "long-xuyen",    nameJa: "ロンスエン",         nameEn: "Long Xuyên",      lat: 10.3859, lng: 105.4351, pop: 380 },
  { id: "thu-duc",       nameJa: "トゥドゥック",       nameEn: "Thủ Đức",         lat: 10.8525, lng: 106.7717, pop: 1010 },
  { id: "thanh-hoa",     nameJa: "タインホア",         nameEn: "Thanh Hóa",       lat: 19.8067, lng: 105.7852, pop: 393 },
  { id: "rach-gia",      nameJa: "ラックザー",         nameEn: "Rạch Giá",        lat:  9.9990, lng: 105.0808, pop: 233 },
  { id: "ha-long",       nameJa: "ハロン",             nameEn: "Hạ Long",         lat: 20.9526, lng: 107.0775, pop: 327 },
  { id: "phan-thiet",    nameJa: "ファンティエット",   nameEn: "Phan Thiết",      lat: 10.9333, lng: 108.1000, pop: 333 },
  { id: "ca-mau",        nameJa: "カマウ",             nameEn: "Cà Mau",          lat:  9.1755, lng: 105.1500, pop: 226 },
  { id: "viet-tri",      nameJa: "ヴィエットチ",       nameEn: "Việt Trì",        lat: 21.3227, lng: 105.4024, pop: 277 },
  { id: "my-tho",        nameJa: "ミトー",             nameEn: "Mỹ Tho",          lat: 10.3600, lng: 106.3608, pop: 252 },
  { id: "bac-ninh",      nameJa: "バクニン",           nameEn: "Bắc Ninh",        lat: 21.1861, lng: 106.0763, pop: 247 },
  { id: "thai-binh",     nameJa: "タイビン",           nameEn: "Thái Bình",       lat: 20.4500, lng: 106.3417, pop: 270 },
  { id: "tuyen-quang",   nameJa: "トゥエンクアン",     nameEn: "Tuyên Quang",     lat: 21.8186, lng: 105.2122, pop: 188 },
  { id: "soc-trang",     nameJa: "ソクチャン",         nameEn: "Sóc Trăng",       lat:  9.6037, lng: 105.9800, pop: 174 },
  { id: "lao-cai",       nameJa: "ラオカイ",           nameEn: "Lào Cai",         lat: 22.4858, lng: 103.9707, pop: 130 },
  { id: "dien-bien-phu", nameJa: "ディエンビエンフー", nameEn: "Điện Biên Phủ",   lat: 21.3833, lng: 103.0167, pop: 79 },
  { id: "bac-lieu",      nameJa: "バクリュウ",         nameEn: "Bạc Liêu",        lat:  9.2941, lng: 105.7278, pop: 156 },
  { id: "tam-ky",        nameJa: "タムキ",             nameEn: "Tam Kỳ",          lat: 15.5736, lng: 108.4736, pop: 116 },
  { id: "vinh-long",     nameJa: "ヴィンロン",         nameEn: "Vĩnh Long",       lat: 10.2538, lng: 105.9722, pop: 142 },
  { id: "ben-tre",       nameJa: "ベンチェ",           nameEn: "Bến Tre",         lat: 10.2415, lng: 106.3759, pop: 144 },
];

export const VIETNAM_PROJECTION: CityProjection = {
  minLon: 102.118655,
  minLat: 8.565579,
  maxLon: 109.472423,
  maxLat: 23.366275,
  cosLat: 0.961425,
  scale: 42.160179,
  offX: 130.961665,
  offY: 8,
};

export const VIETNAM_META: CityCountryMeta = {
  slug: "vietnam",
  continent: "asia",
  svgPath: "/maps/countries/vietnam.svg",
  countryJa: "ベトナム",
  countryEn: "Vietnam",
};
