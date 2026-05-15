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
import { BANGLADESH_CITIES,  BANGLADESH_PROJECTION,  BANGLADESH_META  } from "./quiz-cities/bangladesh";
import { BELARUS_CITIES,     BELARUS_PROJECTION,     BELARUS_META     } from "./quiz-cities/belarus";
import { BULGARIA_CITIES,    BULGARIA_PROJECTION,    BULGARIA_META    } from "./quiz-cities/bulgaria";
import { CAMBODIA_CITIES,    CAMBODIA_PROJECTION,    CAMBODIA_META    } from "./quiz-cities/cambodia";
import { CROATIA_CITIES,     CROATIA_PROJECTION,     CROATIA_META     } from "./quiz-cities/croatia";
import { ESTONIA_CITIES,     ESTONIA_PROJECTION,     ESTONIA_META     } from "./quiz-cities/estonia";
import { ICELAND_CITIES,     ICELAND_PROJECTION,     ICELAND_META     } from "./quiz-cities/iceland";
import { IRELAND_CITIES,     IRELAND_PROJECTION,     IRELAND_META     } from "./quiz-cities/ireland";
import { KAZAKHSTAN_CITIES,  KAZAKHSTAN_PROJECTION,  KAZAKHSTAN_META  } from "./quiz-cities/kazakhstan";
import { KOREA_CITIES,       KOREA_PROJECTION,       KOREA_META       } from "./quiz-cities/korea";
import { KYRGYZSTAN_CITIES,  KYRGYZSTAN_PROJECTION,  KYRGYZSTAN_META  } from "./quiz-cities/kyrgyzstan";
import { LAOS_CITIES,        LAOS_PROJECTION,        LAOS_META        } from "./quiz-cities/laos";
import { LITHUANIA_CITIES,   LITHUANIA_PROJECTION,   LITHUANIA_META   } from "./quiz-cities/lithuania";
import { MOLDOVA_CITIES,     MOLDOVA_PROJECTION,     MOLDOVA_META     } from "./quiz-cities/moldova";
import { MONGOLIA_CITIES,    MONGOLIA_PROJECTION,    MONGOLIA_META    } from "./quiz-cities/mongolia";
import { MONTENEGRO_CITIES,  MONTENEGRO_PROJECTION,  MONTENEGRO_META  } from "./quiz-cities/montenegro";
import { MYANMAR_CITIES,     MYANMAR_PROJECTION,     MYANMAR_META     } from "./quiz-cities/myanmar";
import { NEPAL_CITIES,       NEPAL_PROJECTION,       NEPAL_META       } from "./quiz-cities/nepal";
import { NIGERIA_CITIES,     NIGERIA_PROJECTION,     NIGERIA_META     } from "./quiz-cities/nigeria";
import { PHILIPPINES_CITIES, PHILIPPINES_PROJECTION, PHILIPPINES_META } from "./quiz-cities/philippines";
import { RUSSIA_CITIES,      RUSSIA_PROJECTION,      RUSSIA_META      } from "./quiz-cities/russia";
import { SERBIA_CITIES,      SERBIA_PROJECTION,      SERBIA_META      } from "./quiz-cities/serbia";
import { SLOVAKIA_CITIES,    SLOVAKIA_PROJECTION,    SLOVAKIA_META    } from "./quiz-cities/slovakia";
import { SRILANKA_CITIES,    SRILANKA_PROJECTION,    SRILANKA_META    } from "./quiz-cities/srilanka";
import { TAIWAN_CITIES,      TAIWAN_PROJECTION,      TAIWAN_META      } from "./quiz-cities/taiwan";
import { THAILAND_CITIES,    THAILAND_PROJECTION,    THAILAND_META    } from "./quiz-cities/thailand";
import { TURKEY_CITIES,      TURKEY_PROJECTION,      TURKEY_META      } from "./quiz-cities/turkey";
import { UZBEKISTAN_CITIES,  UZBEKISTAN_PROJECTION,  UZBEKISTAN_META  } from "./quiz-cities/uzbekistan";
import { BOLIVIA_CITIES,     BOLIVIA_PROJECTION,     BOLIVIA_META     } from "./quiz-cities/bolivia";
import { ECUADOR_CITIES,     ECUADOR_PROJECTION,     ECUADOR_META     } from "./quiz-cities/ecuador";
import { URUGUAY_CITIES,     URUGUAY_PROJECTION,     URUGUAY_META     } from "./quiz-cities/uruguay";
import { SLOVENIA_CITIES,    SLOVENIA_PROJECTION,    SLOVENIA_META    } from "./quiz-cities/slovenia";
import { MACEDONIA_CITIES,   MACEDONIA_PROJECTION,   MACEDONIA_META   } from "./quiz-cities/macedonia";
import { LATVIA_CITIES,      LATVIA_PROJECTION,      LATVIA_META      } from "./quiz-cities/latvia";
import { TUNISIA_CITIES,     TUNISIA_PROJECTION,     TUNISIA_META     } from "./quiz-cities/tunisia";
import { KENYA_CITIES,       KENYA_PROJECTION,       KENYA_META       } from "./quiz-cities/kenya";
import { SENEGAL_CITIES,     SENEGAL_PROJECTION,     SENEGAL_META     } from "./quiz-cities/senegal";
import { ISRAEL_CITIES,      ISRAEL_PROJECTION,      ISRAEL_META      } from "./quiz-cities/israel";
import { PARAGUAY_CITIES,    PARAGUAY_PROJECTION,    PARAGUAY_META    } from "./quiz-cities/paraguay";
import { NAMIBIA_CITIES,     NAMIBIA_PROJECTION,     NAMIBIA_META     } from "./quiz-cities/namibia";
import { GHANA_CITIES,       GHANA_PROJECTION,       GHANA_META       } from "./quiz-cities/ghana";
import { JORDAN_CITIES,      JORDAN_PROJECTION,      JORDAN_META      } from "./quiz-cities/jordan";
import { ESWATINI_CITIES,    ESWATINI_PROJECTION,    ESWATINI_META    } from "./quiz-cities/eswatini";
import { LESOTHO_CITIES,     LESOTHO_PROJECTION,     LESOTHO_META     } from "./quiz-cities/lesotho";
import { RWANDA_CITIES,      RWANDA_PROJECTION,      RWANDA_META      } from "./quiz-cities/rwanda";
import { COSTA_RICA_CITIES,  COSTA_RICA_PROJECTION,  COSTA_RICA_META  } from "./quiz-cities/costa-rica";
import { DOMINICAN_REPUBLIC_CITIES, DOMINICAN_REPUBLIC_PROJECTION, DOMINICAN_REPUBLIC_META } from "./quiz-cities/dominican-republic";
import { PUERTO_RICO_CITIES, PUERTO_RICO_PROJECTION, PUERTO_RICO_META } from "./quiz-cities/puerto-rico";
import { CURACAO_CITIES,     CURACAO_PROJECTION,     CURACAO_META     } from "./quiz-cities/curacao";
import { OMAN_CITIES,        OMAN_PROJECTION,        OMAN_META        } from "./quiz-cities/oman";
import { QATAR_CITIES,       QATAR_PROJECTION,       QATAR_META       } from "./quiz-cities/qatar";
import { UAE_CITIES,         UAE_PROJECTION,         UAE_META         } from "./quiz-cities/uae";

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
  bangladesh:  { cities: BANGLADESH_CITIES,  projection: BANGLADESH_PROJECTION,  meta: BANGLADESH_META },
  belarus:     { cities: BELARUS_CITIES,     projection: BELARUS_PROJECTION,     meta: BELARUS_META },
  bulgaria:    { cities: BULGARIA_CITIES,    projection: BULGARIA_PROJECTION,    meta: BULGARIA_META },
  cambodia:    { cities: CAMBODIA_CITIES,    projection: CAMBODIA_PROJECTION,    meta: CAMBODIA_META },
  croatia:     { cities: CROATIA_CITIES,     projection: CROATIA_PROJECTION,     meta: CROATIA_META },
  estonia:     { cities: ESTONIA_CITIES,     projection: ESTONIA_PROJECTION,     meta: ESTONIA_META },
  iceland:     { cities: ICELAND_CITIES,     projection: ICELAND_PROJECTION,     meta: ICELAND_META },
  ireland:     { cities: IRELAND_CITIES,     projection: IRELAND_PROJECTION,     meta: IRELAND_META },
  kazakhstan:  { cities: KAZAKHSTAN_CITIES,  projection: KAZAKHSTAN_PROJECTION,  meta: KAZAKHSTAN_META },
  korea:       { cities: KOREA_CITIES,       projection: KOREA_PROJECTION,       meta: KOREA_META },
  kyrgyzstan:  { cities: KYRGYZSTAN_CITIES,  projection: KYRGYZSTAN_PROJECTION,  meta: KYRGYZSTAN_META },
  laos:        { cities: LAOS_CITIES,        projection: LAOS_PROJECTION,        meta: LAOS_META },
  lithuania:   { cities: LITHUANIA_CITIES,   projection: LITHUANIA_PROJECTION,   meta: LITHUANIA_META },
  moldova:     { cities: MOLDOVA_CITIES,     projection: MOLDOVA_PROJECTION,     meta: MOLDOVA_META },
  mongolia:    { cities: MONGOLIA_CITIES,    projection: MONGOLIA_PROJECTION,    meta: MONGOLIA_META },
  montenegro:  { cities: MONTENEGRO_CITIES,  projection: MONTENEGRO_PROJECTION,  meta: MONTENEGRO_META },
  myanmar:     { cities: MYANMAR_CITIES,     projection: MYANMAR_PROJECTION,     meta: MYANMAR_META },
  nepal:       { cities: NEPAL_CITIES,       projection: NEPAL_PROJECTION,       meta: NEPAL_META },
  nigeria:     { cities: NIGERIA_CITIES,     projection: NIGERIA_PROJECTION,     meta: NIGERIA_META },
  philippines: { cities: PHILIPPINES_CITIES, projection: PHILIPPINES_PROJECTION, meta: PHILIPPINES_META },
  russia:      { cities: RUSSIA_CITIES,      projection: RUSSIA_PROJECTION,      meta: RUSSIA_META },
  serbia:      { cities: SERBIA_CITIES,      projection: SERBIA_PROJECTION,      meta: SERBIA_META },
  slovakia:    { cities: SLOVAKIA_CITIES,    projection: SLOVAKIA_PROJECTION,    meta: SLOVAKIA_META },
  srilanka:    { cities: SRILANKA_CITIES,    projection: SRILANKA_PROJECTION,    meta: SRILANKA_META },
  taiwan:      { cities: TAIWAN_CITIES,      projection: TAIWAN_PROJECTION,      meta: TAIWAN_META },
  thailand:    { cities: THAILAND_CITIES,    projection: THAILAND_PROJECTION,    meta: THAILAND_META },
  turkey:      { cities: TURKEY_CITIES,      projection: TURKEY_PROJECTION,      meta: TURKEY_META },
  uzbekistan:  { cities: UZBEKISTAN_CITIES,  projection: UZBEKISTAN_PROJECTION,  meta: UZBEKISTAN_META },
  bolivia:     { cities: BOLIVIA_CITIES,     projection: BOLIVIA_PROJECTION,     meta: BOLIVIA_META },
  ecuador:     { cities: ECUADOR_CITIES,     projection: ECUADOR_PROJECTION,     meta: ECUADOR_META },
  uruguay:     { cities: URUGUAY_CITIES,     projection: URUGUAY_PROJECTION,     meta: URUGUAY_META },
  slovenia:    { cities: SLOVENIA_CITIES,    projection: SLOVENIA_PROJECTION,    meta: SLOVENIA_META },
  macedonia:   { cities: MACEDONIA_CITIES,   projection: MACEDONIA_PROJECTION,   meta: MACEDONIA_META },
  latvia:      { cities: LATVIA_CITIES,      projection: LATVIA_PROJECTION,      meta: LATVIA_META },
  tunisia:     { cities: TUNISIA_CITIES,     projection: TUNISIA_PROJECTION,     meta: TUNISIA_META },
  kenya:       { cities: KENYA_CITIES,       projection: KENYA_PROJECTION,       meta: KENYA_META },
  senegal:     { cities: SENEGAL_CITIES,     projection: SENEGAL_PROJECTION,     meta: SENEGAL_META },
  israel:      { cities: ISRAEL_CITIES,      projection: ISRAEL_PROJECTION,      meta: ISRAEL_META },
  paraguay:    { cities: PARAGUAY_CITIES,    projection: PARAGUAY_PROJECTION,    meta: PARAGUAY_META },
  namibia:     { cities: NAMIBIA_CITIES,     projection: NAMIBIA_PROJECTION,     meta: NAMIBIA_META },
  ghana:       { cities: GHANA_CITIES,       projection: GHANA_PROJECTION,       meta: GHANA_META },
  jordan:      { cities: JORDAN_CITIES,      projection: JORDAN_PROJECTION,      meta: JORDAN_META },
  eswatini:    { cities: ESWATINI_CITIES,    projection: ESWATINI_PROJECTION,    meta: ESWATINI_META },
  lesotho:     { cities: LESOTHO_CITIES,     projection: LESOTHO_PROJECTION,     meta: LESOTHO_META },
  rwanda:      { cities: RWANDA_CITIES,      projection: RWANDA_PROJECTION,      meta: RWANDA_META },
  "costa-rica":         { cities: COSTA_RICA_CITIES,         projection: COSTA_RICA_PROJECTION,         meta: COSTA_RICA_META },
  "dominican-republic": { cities: DOMINICAN_REPUBLIC_CITIES, projection: DOMINICAN_REPUBLIC_PROJECTION, meta: DOMINICAN_REPUBLIC_META },
  "puerto-rico":        { cities: PUERTO_RICO_CITIES,        projection: PUERTO_RICO_PROJECTION,        meta: PUERTO_RICO_META },
  curacao:     { cities: CURACAO_CITIES,     projection: CURACAO_PROJECTION,     meta: CURACAO_META },
  oman:        { cities: OMAN_CITIES,        projection: OMAN_PROJECTION,        meta: OMAN_META },
  qatar:       { cities: QATAR_CITIES,       projection: QATAR_PROJECTION,       meta: QATAR_META },
  uae:         { cities: UAE_CITIES,         projection: UAE_PROJECTION,         meta: UAE_META },
};

export const CITY_QUIZ_SLUGS = Object.keys(CITY_QUIZ_REGISTRY);

export { projectCity };
