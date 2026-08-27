/**
 * ヒーロー地図の解決レイヤ。
 *
 * 以前は Leaflet + CARTO/OSM タイルでヒーロー地図を描画していたが、
 * 外部タイルサーバーのレート制限を受けるため全面的に廃止した。
 * 代わりに、リポジトリ内で生成済みの境界 SVG（都道府県 / 国 / 局所エリア）に
 * 等距円筒図法の投影パラメータで緯度経度ピンを重ねる（外部リクエストゼロ）。
 *
 * 投影パラメータの出どころ:
 *  - 都道府県: scripts/compute-pref-projections.cjs → pref-projections.json
 *    （public/maps/prefectures/*.svg と 0.00px 一致を検証済み）
 *  - 国:       src/data/quiz-cities/{country}.ts の {COUNTRY}_PROJECTION
 *  - 日本全図: scripts/compute-projection.cjs japan の出力
 *  - 局所エリア: scripts/generate-area-maps.cjs → area-projections.json
 *  - 世界地図: public/mp/maps/world.svg（simplemaps）。y は非線形なので
 *    折れ線テーブルで近似（IndustryLayout の実装と同じキャリブレーション）
 */
import prefProjections from "./pref-projections.json";
import areaMaps from "./area-projections.json";
import { CITY_QUIZ_REGISTRY } from "./quiz-cities-registry";

export interface HeroProjection {
  minLon: number;
  minLat: number;
  maxLon: number;
  maxLat: number;
  cosLat: number;
  scale: number;
  offX: number;
  offY: number;
}

export interface HeroMapDef {
  /** "linear" = 等距円筒 SVG + projection、"world" = simplemaps world.svg */
  kind: "linear" | "world";
  /** public 配下の SVG パス */
  svgPath: string;
  projection?: HeroProjection;
  /** "full" = SVG 全体を表示、"pins" = ピンの範囲にクロップ */
  fit: "full" | "pins";
}

interface Pin {
  lat: number;
  lng: number;
}

/** 日本全図（public/maps/countries/japan.svg）の投影パラメータ */
export const JAPAN_PROJECTION: HeroProjection = {
  minLon: 122.938162,
  minLat: 24.212104,
  maxLon: 153.985606,
  maxLat: 45.520413,
  cosLat: 0.820489,
  scale: 21.355043,
  offX: 8,
  offY: 92.480068,
};

/** rule ページのディレクトリ名 → quiz-cities レジストリslug の別名表 */
const COUNTRY_ALIASES: Record<string, string> = {
  thai: "thailand",
  vietnum: "vietnam",
  bosnah: "bosnia",
  "united-arab-emirates": "uae",
  saudiarabia: "saudiarabia",
  costa_rica: "costa-rica",
};

/** 大陸ハブページなど、world.svg をピン範囲にクロップして使うスラッグ末尾 */
const WORLD_CROP_SLUGS = new Set([
  "africa",
  "asia",
  "europe",
  "middle_east",
  "n_america",
  "cs_america",
  "oceania",
]);

function lastSegment(slug: string): string {
  const parts = slug.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

function countrySlugFor(dir: string): string | null {
  const norm = dir.toLowerCase().replace(/_/g, "-");
  const aliased = COUNTRY_ALIASES[dir] ?? COUNTRY_ALIASES[norm] ?? norm;
  return CITY_QUIZ_REGISTRY[aliased] ? aliased : null;
}

/**
 * ページ情報からヒーロー地図の定義を解決する。
 * null の場合、地図は出さずピン一覧のフォールバックパネルを表示する。
 */
export function resolveHeroMap(
  collection: string,
  slug: string,
  data: any,
): HeroMapDef | null {
  const pins: Pin[] = Array.isArray(data?.mapPins) ? data.mapPins : [];

  // 明示指定の局所エリア SVG（コンビナート等の湾岸詳細ページ）
  if (data?.heroMapArea && (areaMaps as any)[data.heroMapArea]) {
    const a = (areaMaps as any)[data.heroMapArea];
    return { kind: "linear", svgPath: a.svgPath, projection: a.projection, fit: "full" };
  }

  if (collection === "rule") {
    if (slug.startsWith("asia/japan")) {
      const dir = lastSegment(slug);
      if (data?.is_pref && (prefProjections as any)[dir]) {
        return {
          kind: "linear",
          svgPath: `/maps/prefectures/${dir}.svg`,
          projection: (prefProjections as any)[dir],
          fit: "full",
        };
      }
      // 日本トップ・地方ハブ（chubu, kanto, ...）は日本全図
      return {
        kind: "linear",
        svgPath: "/maps/countries/japan.svg",
        projection: JAPAN_PROJECTION,
        fit: "full",
      };
    }
    const dir = lastSegment(slug);
    if (WORLD_CROP_SLUGS.has(dir)) {
      return { kind: "world", svgPath: "/mp/maps/world.svg", fit: "pins" };
    }
    const countrySlug = countrySlugFor(dir);
    if (countrySlug) {
      const entry = CITY_QUIZ_REGISTRY[countrySlug];
      return {
        kind: "linear",
        svgPath: entry.meta.svgPath,
        projection: entry.projection as HeroProjection,
        fit: "full",
      };
    }
    return null;
  }

  if (collection === "industry") {
    // ピンなしでもコロプレス（日本の地域色分け）だけのページは日本全図
    if (!pins.length && data?.mapRegions) {
      return {
        kind: "linear",
        svgPath: "/maps/countries/japan.svg",
        projection: JAPAN_PROJECTION,
        fit: "full",
      };
    }
    // ピンの広がりで world / 日本 / 単一国を自動判定
    if (!pins.length) return null;
    const lats = pins.map((p) => p.lat);
    const lngs = pins.map((p) => p.lng);
    const minLat = Math.min(...lats);
    const maxLat = Math.max(...lats);
    const minLng = Math.min(...lngs);
    const maxLng = Math.max(...lngs);

    const within = (p: HeroProjection) =>
      minLat >= p.minLat && maxLat <= p.maxLat && minLng >= p.minLon && maxLng <= p.maxLon;

    // 日本国内に収まるページは日本全図（ピン範囲が狭ければクロップ）
    if (within(JAPAN_PROJECTION)) {
      const span = Math.max(maxLat - minLat, (maxLng - minLng) * JAPAN_PROJECTION.cosLat);
      return {
        kind: "linear",
        svgPath: "/maps/countries/japan.svg",
        projection: JAPAN_PROJECTION,
        fit: span < 8 ? "pins" : "full",
      };
    }

    // 単一国に収まるページはその国の SVG（範囲が最小の国を選ぶ）
    let best: { slug: string; area: number } | null = null;
    for (const [cSlug, entry] of Object.entries(CITY_QUIZ_REGISTRY)) {
      const p = entry.projection as HeroProjection;
      if (!within(p)) continue;
      const area = (p.maxLon - p.minLon) * (p.maxLat - p.minLat);
      if (!best || area < best.area) best = { slug: cSlug, area };
    }
    if (best) {
      const entry = CITY_QUIZ_REGISTRY[best.slug];
      return {
        kind: "linear",
        svgPath: entry.meta.svgPath,
        projection: entry.projection as HeroProjection,
        fit: "full",
      };
    }

    // 世界に散らばるページは world.svg
    return { kind: "world", svgPath: "/mp/maps/world.svg", fit: "pins" };
  }

  return null;
}

/** simplemaps world.svg (viewBox 0 0 2000 857) の座標変換。
 *  x は線形、y は既知の国位置からキャリブレーションした折れ線テーブル。 */
export function worldToXY(lat: number, lng: number): { x: number; y: number } {
  const x = 5.394 * lng + 989.6;
  const table: [number, number][] = [
    [85, 0], [64, 103], [50, 185], [35, 275],
    [29, 310], [26, 333], [12, 432], [0, 510],
    [-15, 580], [-30, 665], [-50, 770], [-60, 830],
  ];
  let y = 510;
  if (lat >= table[0][0]) y = table[0][1];
  else if (lat <= table[table.length - 1][0]) y = table[table.length - 1][1];
  else {
    for (let i = 0; i < table.length - 1; i++) {
      if (lat <= table[i][0] && lat >= table[i + 1][0]) {
        const t = (lat - table[i + 1][0]) / (table[i][0] - table[i + 1][0]);
        y = table[i + 1][1] + t * (table[i][1] - table[i + 1][1]);
        break;
      }
    }
  }
  return { x, y };
}

export function projectHero(
  def: HeroMapDef,
  lat: number,
  lng: number,
): { x: number; y: number } {
  if (def.kind === "world") return worldToXY(lat, lng);
  const p = def.projection!;
  return {
    x: p.offX + (lng - p.minLon) * p.cosLat * p.scale,
    y: p.offY + (p.maxLat - lat) * p.scale,
  };
}
