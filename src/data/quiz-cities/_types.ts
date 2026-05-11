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
}

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
