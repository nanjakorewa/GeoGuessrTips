/**
 * Registry for the Japan-features quizzes at /quiz/japan/{category}/.
 * Each entry pairs a feature list with the shared Japan projection and the
 * category-specific display metadata.
 */
import { JAPAN_PROJECTION, projectCity } from "./quiz-japan-features/_types";
import type { JapanFeatureQuizEntry } from "./quiz-japan-features/_types";
import { DAMS, DAMS_META } from "./quiz-japan-features/dams";
import { MOUNTAIN_RANGES, MOUNTAIN_RANGES_META } from "./quiz-japan-features/mountain-ranges";
import { PLAINS, PLAINS_META } from "./quiz-japan-features/plains";
import { PENINSULAS, PENINSULAS_META } from "./quiz-japan-features/peninsulas";
import { RIVERS, RIVERS_META } from "./quiz-japan-features/rivers";

export const JAPAN_FEATURES_REGISTRY: Record<string, JapanFeatureQuizEntry> = {
  dams:              { features: DAMS,            projection: JAPAN_PROJECTION, meta: DAMS_META },
  "mountain-ranges": { features: MOUNTAIN_RANGES, projection: JAPAN_PROJECTION, meta: MOUNTAIN_RANGES_META },
  plains:            { features: PLAINS,          projection: JAPAN_PROJECTION, meta: PLAINS_META },
  peninsulas:        { features: PENINSULAS,      projection: JAPAN_PROJECTION, meta: PENINSULAS_META },
  rivers:            { features: RIVERS,          projection: JAPAN_PROJECTION, meta: RIVERS_META },
};

export const JAPAN_FEATURES_SLUGS = Object.keys(JAPAN_FEATURES_REGISTRY);

export { projectCity };
