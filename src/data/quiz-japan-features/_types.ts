/**
 * Shared types for the Japan-features quizzes.
 *
 * Each quiz file under src/data/quiz-japan-features/ exports an array of
 * features (FeaturePoint or FeaturePolyline) plus the page meta. Pins are
 * point features; ranges/rivers are polylines drawn on the SVG overlay.
 */
import type { CityProjection } from "../quiz-cities/_types";
export { projectCity } from "../quiz-cities/_types";

export interface FeaturePoint {
  id: string;
  nameJa: string;
  /** Hiragana reading shown as furigana */
  nameKana?: string;
  /** English/romaji rendering shown as a sub-line on cards */
  nameEn?: string;
  type: "point";
  lat: number;
  lng: number;
}

export interface FeaturePolyline {
  id: string;
  nameJa: string;
  nameKana?: string;
  nameEn?: string;
  type: "polyline";
  /** [lng, lat] pairs along the feature (mountain ridge / river course). */
  points: [number, number][];
}

export type JapanFeature = FeaturePoint | FeaturePolyline;

export interface JapanFeatureCategoryMeta {
  /** URL slug under /quiz/japan/{slug}/ */
  slug: string;
  /** Display name in Japanese, e.g. "ダム" */
  categoryJa: string;
  /** Display name in English */
  categoryEn: string;
  /** Color hint for pins/lines on the SVG (CSS color string) */
  color: string;
  /** Page-level lead paragraph */
  leadJa: string;
}

export interface JapanFeatureQuizEntry {
  features: JapanFeature[];
  projection: CityProjection;
  meta: JapanFeatureCategoryMeta;
}

/**
 * Same equirectangular projection as the city quiz, but exported here so the
 * Japan-features page can stay decoupled from the city-quiz import graph.
 */
export const JAPAN_PROJECTION: CityProjection = {
  minLon: 122.938162,
  minLat: 24.212104,
  maxLon: 153.985606,
  maxLat: 45.520413,
  cosLat: 0.820489,
  scale: 21.355043,
  offX: 8,
  offY: 92.480068,
};
