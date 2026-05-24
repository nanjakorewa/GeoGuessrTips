/**
 * Helper for the kabupaten/kota island quiz pages.
 *
 * Wraps the static JSON data and builds the props passed into
 * <PinQuizPage> for a given island and language, so the JA and non-JA route
 * files stay short.
 */
import type { Language } from "@lib/i18n-utils";
import { getQuizI18n, quizPath, langPath } from "./quiz-states-i18n";
import islands from "./quiz-indonesia-kabupaten.json";

interface ProvinceRef { slug: string; nameJa: string; nameId: string; }
export interface IslandData {
  slug: string;
  nameId: string;
  nameJa: string;
  bbox: [number, number, number, number] | null;
  provinces: ProvinceRef[];
  kabs: Array<{
    name: string;
    shortName: string;
    province: string;
    provinceId: string;
    provinceSlug: string;
    lat: number;
    lng: number;
  }>;
}

export const ISLANDS = islands as IslandData[];

const SITE = "https://geopinning.space";

export function buildKabupatenIslandProps(lang: Language, isle: IslandData) {
  const t = getQuizI18n(lang);
  const displayName = lang === "ja" ? isle.nameJa : isle.nameId;
  const canonical = `${SITE}${quizPath(lang, `/quiz/states/asia/indonesia-kabupaten/${isle.slug}/`)}`;
  const pageH1 = t.pinQuiz.island.titleFmt(displayName);
  const pageTitle = t.pinQuiz.island.pageTitleFmt(displayName);
  const pageDescription = t.pinQuiz.island.pageDescriptionFmt(
    displayName,
    isle.provinces.length,
    isle.kabs.length,
  );
  // Pin codes: "{provinceSlug}|{shortName}" — unique even when two kabupaten
  // share a short name across provinces.
  // shortName label includes the province in parens for context.
  const provinceForLang = (k: IslandData["kabs"][number]) =>
    lang === "ja" ? k.province : k.provinceId;
  const pins = isle.kabs.map((k) => ({
    code: `${k.provinceSlug}|${k.shortName}`,
    name: k.name,
    shortName: lang === "ja"
      ? `${k.shortName}（${k.province}）`
      : `${k.shortName} (${k.provinceId})`,
    lat: k.lat,
    lng: k.lng,
    type: k.name.startsWith("Kota ") ? ("kota" as const) : ("kabupaten" as const),
  }));

  const continentAsia = t.continents.asia;
  const breadcrumbs = [
    { name: t.breadcrumbs.top, url: langPath(lang, "/") },
    { name: t.breadcrumbs.quiz, url: langPath(lang, "/quiz/") },
    { name: t.breadcrumbs.states, url: quizPath(lang, "/quiz/states/") },
    { name: continentAsia, url: quizPath(lang, "/quiz/states/asia/") },
    { name: t.pinQuiz.crumbLabel, url: quizPath(lang, "/quiz/states/asia/indonesia-kabupaten/") },
    { name: displayName, url: canonical.replace(SITE, "") },
  ];

  const provinceListHtml = isle.provinces
    .map((p) => lang === "ja" ? `<b>${p.nameJa}</b>（${p.nameId}）` : `<b>${p.nameId}</b>`)
    .join(lang === "ja" ? "、" : ", ");
  const lead = t.pinQuiz.island.leadFmt(displayName, isle.nameId, provinceListHtml);

  return {
    lang,
    pageTitle,
    pageDescription,
    canonical,
    pageH1,
    prompt: t.pinQuiz.island.prompt,
    storageKey: `pq-best:indonesia-kabupaten-${isle.slug}`,
    breadcrumbs,
    pins,
    bbox: isle.bbox!,
    lead,
  };
}
