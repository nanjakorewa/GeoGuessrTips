/** Shared types for the city-quiz data files under src/data/quiz-cities/. */

export interface CityEntry {
  /** URL-safe id (lowercase, dash-separated) */
  id: string;
  /** Japanese name (Katakana) */
  nameJa: string;
  /** English / local-language name */
  nameEn: string;
  lat: number;
  lng: number;
  /**
   * Population in thousands (e.g., 820 = 820,000). Approximate from
   * Wikipedia / official census. Used for:
   *  - pin radius (larger city → bigger marker)
   *  - the city table at the bottom of the page
   * Cities below 100 (i.e. <100k) are normally excluded from the data,
   * but the field can be 0 for tiny capitals if needed.
   */
  pop: number;
}

/** Difficulty tier derived from a city's population rank in its country. */
export type CityTier = 1 | 2 | 3;
/** Tier 1 = top 20, tier 2 = ranks 20-49, tier 3 = ranks 50-99. */
export function tierForRank(rank: number): CityTier {
  if (rank < 20) return 1;
  if (rank < 50) return 2;
  return 3;
}
/** Maximum number of cities included in a country's quiz pool. */
export const MAX_CITIES_PER_COUNTRY = 100;

/**
 * SVG projection params matching scripts/build-country-maps.cjs output.
 * Use projectCity(lng, lat, projection) to convert to viewBox coordinates.
 */
export interface CityProjection {
  minLon: number;
  minLat: number;
  maxLon: number;
  maxLat: number;
  cosLat: number;
  scale: number;
  offX: number;
  offY: number;
}

export interface CityCountryMeta {
  /** URL slug under /quiz/cities/{continent}/{slug}/ */
  slug: string;
  continent: string;
  /** Public path to the country's SVG (already generated) */
  svgPath: string;
  /** Country display name in Japanese */
  countryJa: string;
  /** Country display name in English */
  countryEn: string;
}

export function projectCity(
  lng: number,
  lat: number,
  proj: CityProjection,
): { x: number; y: number } {
  return {
    x: proj.offX + (lng - proj.minLon) * proj.cosLat * proj.scale,
    y: proj.offY + (proj.maxLat - lat) * proj.scale,
  };
}
