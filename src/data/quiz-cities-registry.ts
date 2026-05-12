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
import { SPAIN_CITIES,       SPAIN_PROJECTION,       SPAIN_META       } from "./quiz-cities/spain";
import { POLAND_CITIES,      POLAND_PROJECTION,      POLAND_META      } from "./quiz-cities/poland";
import { UKRAINE_CITIES,     UKRAINE_PROJECTION,     UKRAINE_META     } from "./quiz-cities/ukraine";
import { ROMANIA_CITIES,     ROMANIA_PROJECTION,     ROMANIA_META     } from "./quiz-cities/romania";
import { GREECE_CITIES,      GREECE_PROJECTION,      GREECE_META      } from "./quiz-cities/greece";
import { PORTUGAL_CITIES,    PORTUGAL_PROJECTION,    PORTUGAL_META    } from "./quiz-cities/portugal";
import { SWEDEN_CITIES,      SWEDEN_PROJECTION,      SWEDEN_META      } from "./quiz-cities/sweden";
import { NORWAY_CITIES,      NORWAY_PROJECTION,      NORWAY_META      } from "./quiz-cities/norway";
import { FINLAND_CITIES,     FINLAND_PROJECTION,     FINLAND_META     } from "./quiz-cities/finland";
import { DENMARK_CITIES,     DENMARK_PROJECTION,     DENMARK_META     } from "./quiz-cities/denmark";
import { CZECHIA_CITIES,     CZECHIA_PROJECTION,     CZECHIA_META     } from "./quiz-cities/czechia";
import { HUNGARY_CITIES,     HUNGARY_PROJECTION,     HUNGARY_META     } from "./quiz-cities/hungary";
import { AUSTRIA_CITIES,     AUSTRIA_PROJECTION,     AUSTRIA_META     } from "./quiz-cities/austria";
import { SWITZERLAND_CITIES, SWITZERLAND_PROJECTION, SWITZERLAND_META } from "./quiz-cities/switzerland";
import { BELGIUM_CITIES,     BELGIUM_PROJECTION,     BELGIUM_META     } from "./quiz-cities/belgium";
import { CHINA_CITIES,       CHINA_PROJECTION,       CHINA_META       } from "./quiz-cities/china";
import { INDIA_CITIES,       INDIA_PROJECTION,       INDIA_META       } from "./quiz-cities/india";
import { INDONESIA_CITIES,   INDONESIA_PROJECTION,   INDONESIA_META   } from "./quiz-cities/indonesia";
import { PAKISTAN_CITIES,    PAKISTAN_PROJECTION,    PAKISTAN_META    } from "./quiz-cities/pakistan";
import { VIETNAM_CITIES,     VIETNAM_PROJECTION,     VIETNAM_META     } from "./quiz-cities/vietnam";
import { MALAYSIA_CITIES,    MALAYSIA_PROJECTION,    MALAYSIA_META    } from "./quiz-cities/malaysia";
import { SAUDI_ARABIA_CITIES, SAUDI_ARABIA_PROJECTION, SAUDI_ARABIA_META } from "./quiz-cities/saudi-arabia";
import { AUSTRALIA_CITIES,   AUSTRALIA_PROJECTION,   AUSTRALIA_META   } from "./quiz-cities/australia";
import { NEW_ZEALAND_CITIES, NEW_ZEALAND_PROJECTION, NEW_ZEALAND_META } from "./quiz-cities/new-zealand";
import { SOUTH_AFRICA_CITIES, SOUTH_AFRICA_PROJECTION, SOUTH_AFRICA_META } from "./quiz-cities/south-africa";
import { EGYPT_CITIES,       EGYPT_PROJECTION,       EGYPT_META       } from "./quiz-cities/egypt";
import { ARGENTINA_CITIES,   ARGENTINA_PROJECTION,   ARGENTINA_META   } from "./quiz-cities/argentina";
import { CHILE_CITIES,       CHILE_PROJECTION,       CHILE_META       } from "./quiz-cities/chile";
import { CANADA_CITIES,      CANADA_PROJECTION,      CANADA_META      } from "./quiz-cities/canada";
import { COLOMBIA_CITIES,    COLOMBIA_PROJECTION,    COLOMBIA_META    } from "./quiz-cities/colombia";
import { PERU_CITIES,        PERU_PROJECTION,        PERU_META        } from "./quiz-cities/peru";
import { ALBANIA_CITIES,     ALBANIA_PROJECTION,     ALBANIA_META     } from "./quiz-cities/albania";
import { BOSNIA_CITIES,      BOSNIA_PROJECTION,      BOSNIA_META      } from "./quiz-cities/bosnia";
import { GUATEMALA_CITIES,   GUATEMALA_PROJECTION,   GUATEMALA_META   } from "./quiz-cities/guatemala";
import { PANAMA_CITIES,      PANAMA_PROJECTION,      PANAMA_META      } from "./quiz-cities/panama";

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
  spain:       { cities: SPAIN_CITIES,       projection: SPAIN_PROJECTION,       meta: SPAIN_META },
  poland:      { cities: POLAND_CITIES,      projection: POLAND_PROJECTION,      meta: POLAND_META },
  ukraine:     { cities: UKRAINE_CITIES,     projection: UKRAINE_PROJECTION,     meta: UKRAINE_META },
  romania:     { cities: ROMANIA_CITIES,     projection: ROMANIA_PROJECTION,     meta: ROMANIA_META },
  greece:      { cities: GREECE_CITIES,      projection: GREECE_PROJECTION,      meta: GREECE_META },
  portugal:    { cities: PORTUGAL_CITIES,    projection: PORTUGAL_PROJECTION,    meta: PORTUGAL_META },
  sweden:      { cities: SWEDEN_CITIES,      projection: SWEDEN_PROJECTION,      meta: SWEDEN_META },
  norway:      { cities: NORWAY_CITIES,      projection: NORWAY_PROJECTION,      meta: NORWAY_META },
  finland:     { cities: FINLAND_CITIES,     projection: FINLAND_PROJECTION,     meta: FINLAND_META },
  denmark:     { cities: DENMARK_CITIES,     projection: DENMARK_PROJECTION,     meta: DENMARK_META },
  czechia:     { cities: CZECHIA_CITIES,     projection: CZECHIA_PROJECTION,     meta: CZECHIA_META },
  hungary:     { cities: HUNGARY_CITIES,     projection: HUNGARY_PROJECTION,     meta: HUNGARY_META },
  austria:     { cities: AUSTRIA_CITIES,     projection: AUSTRIA_PROJECTION,     meta: AUSTRIA_META },
  switzerland: { cities: SWITZERLAND_CITIES, projection: SWITZERLAND_PROJECTION, meta: SWITZERLAND_META },
  belgium:     { cities: BELGIUM_CITIES,     projection: BELGIUM_PROJECTION,     meta: BELGIUM_META },
  china:       { cities: CHINA_CITIES,       projection: CHINA_PROJECTION,       meta: CHINA_META },
  india:       { cities: INDIA_CITIES,       projection: INDIA_PROJECTION,       meta: INDIA_META },
  indonesia:   { cities: INDONESIA_CITIES,   projection: INDONESIA_PROJECTION,   meta: INDONESIA_META },
  pakistan:    { cities: PAKISTAN_CITIES,    projection: PAKISTAN_PROJECTION,    meta: PAKISTAN_META },
  vietnam:     { cities: VIETNAM_CITIES,     projection: VIETNAM_PROJECTION,     meta: VIETNAM_META },
  malaysia:    { cities: MALAYSIA_CITIES,    projection: MALAYSIA_PROJECTION,    meta: MALAYSIA_META },
  saudiarabia: { cities: SAUDI_ARABIA_CITIES, projection: SAUDI_ARABIA_PROJECTION, meta: SAUDI_ARABIA_META },
  australia:   { cities: AUSTRALIA_CITIES,   projection: AUSTRALIA_PROJECTION,   meta: AUSTRALIA_META },
  "new-zealand": { cities: NEW_ZEALAND_CITIES, projection: NEW_ZEALAND_PROJECTION, meta: NEW_ZEALAND_META },
  "south-africa": { cities: SOUTH_AFRICA_CITIES, projection: SOUTH_AFRICA_PROJECTION, meta: SOUTH_AFRICA_META },
  egypt:       { cities: EGYPT_CITIES,       projection: EGYPT_PROJECTION,       meta: EGYPT_META },
  argentina:   { cities: ARGENTINA_CITIES,   projection: ARGENTINA_PROJECTION,   meta: ARGENTINA_META },
  chile:       { cities: CHILE_CITIES,       projection: CHILE_PROJECTION,       meta: CHILE_META },
  canada:      { cities: CANADA_CITIES,      projection: CANADA_PROJECTION,      meta: CANADA_META },
  colombia:    { cities: COLOMBIA_CITIES,    projection: COLOMBIA_PROJECTION,    meta: COLOMBIA_META },
  peru:        { cities: PERU_CITIES,        projection: PERU_PROJECTION,        meta: PERU_META },
  albania:     { cities: ALBANIA_CITIES,     projection: ALBANIA_PROJECTION,     meta: ALBANIA_META },
  bosnia:      { cities: BOSNIA_CITIES,      projection: BOSNIA_PROJECTION,      meta: BOSNIA_META },
  guatemala:   { cities: GUATEMALA_CITIES,   projection: GUATEMALA_PROJECTION,   meta: GUATEMALA_META },
  panama:      { cities: PANAMA_CITIES,      projection: PANAMA_PROJECTION,      meta: PANAMA_META },
};

export const CITY_QUIZ_SLUGS = Object.keys(CITY_QUIZ_REGISTRY);

export { projectCity };
