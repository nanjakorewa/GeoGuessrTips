/**
 * City-quiz registry: maps a country slug to its city list, SVG projection
 * params and display metadata. Used by /quiz/cities/[continent]/[country].astro
 * to enumerate paths via getStaticPaths and to render each page.
 */
import type {
  CityCountryMeta,
  CityEntry,
  CityProjection,
} from "./quiz-cities/_types";
import { projectCity } from "./quiz-cities/_types";
import { NETHERLANDS_CITIES, NETHERLANDS_PROJECTION, NETHERLANDS_META } from "./quiz-cities/netherlands";
import { USA_CITIES,         USA_PROJECTION,         USA_META         } from "./quiz-cities/usa";
import { GERMANY_CITIES,     GERMANY_PROJECTION,     GERMANY_META     } from "./quiz-cities/germany";
import { FRANCE_CITIES,      FRANCE_PROJECTION,      FRANCE_META      } from "./quiz-cities/france";
import { ITALY_CITIES,       ITALY_PROJECTION,       ITALY_META       } from "./quiz-cities/italy";
import { BRAZIL_CITIES,      BRAZIL_PROJECTION,      BRAZIL_META      } from "./quiz-cities/brazil";
import { MEXICO_CITIES,      MEXICO_PROJECTION,      MEXICO_META      } from "./quiz-cities/mexico";

export interface CityQuizEntry {
  cities: CityEntry[];
  projection: CityProjection;
  meta: CityCountryMeta;
}

export const CITY_QUIZ_REGISTRY: Record<string, CityQuizEntry> = {
  netherlands: { cities: NETHERLANDS_CITIES, projection: NETHERLANDS_PROJECTION, meta: NETHERLANDS_META },
  usa:         { cities: USA_CITIES,         projection: USA_PROJECTION,         meta: USA_META },
  germany:     { cities: GERMANY_CITIES,     projection: GERMANY_PROJECTION,     meta: GERMANY_META },
  france:      { cities: FRANCE_CITIES,      projection: FRANCE_PROJECTION,      meta: FRANCE_META },
  italy:       { cities: ITALY_CITIES,       projection: ITALY_PROJECTION,       meta: ITALY_META },
  brazil:      { cities: BRAZIL_CITIES,      projection: BRAZIL_PROJECTION,      meta: BRAZIL_META },
  mexico:      { cities: MEXICO_CITIES,      projection: MEXICO_PROJECTION,      meta: MEXICO_META },
};

export const CITY_QUIZ_SLUGS = Object.keys(CITY_QUIZ_REGISTRY);

export { projectCity };
