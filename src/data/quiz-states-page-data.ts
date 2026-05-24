/**
 * Shared page-data builders for the state-quiz routes. Both the default-lang
 * (no prefix) and non-default-lang ([lang]/) page files call into these so
 * the per-page logic stays in one place.
 */
import fs from "node:fs";
import path from "node:path";
import type { Language } from "@lib/i18n-utils";
import { LANGUAGES, DEFAULT_LANG } from "@lib/i18n-utils";
import { COUNTRIES } from "./quiz-states-countries";
import { CITY_QUIZ_REGISTRY } from "./quiz-cities-registry";
import { getQuizI18n, quizPath, langPath } from "./quiz-states-i18n";

/**
 * Build the rule-page URL for a given pageDir in the user's language. If the
 * rule entry is not translated into `lang`, fall back to the default-language
 * URL so the link does not 404. If no rule entry exists in any language for
 * this pageDir, returns null so the caller can drop the link.
 */
function ruleUrl(
  pageDir: string,
  lang: Language,
  allRules: Array<{ id: string; data: any }>,
): string | null {
  const hasThisLang = allRules.some((e) => e.id === `${pageDir}/_index.${lang}`);
  const hasDefaultLang = allRules.some((e) => e.id === `${pageDir}/_index.${DEFAULT_LANG}`);
  if (!hasThisLang && !hasDefaultLang) return null;
  const useLang = hasThisLang ? lang : DEFAULT_LANG;
  const path = `/rule/${pageDir}/`;
  return useLang === DEFAULT_LANG ? path : `/${useLang}${path}`;
}

export const NON_DEFAULT_LANGUAGES = LANGUAGES.filter((l) => l !== DEFAULT_LANG);

export interface MuniListItem {
  code: string;
  name: string;
  nameI18n?: Record<string, string>;
  note?: string;
  noteI18n?: Record<string, string>;
}
export interface MunicipalitiesBlock {
  svg: string;
  list: MuniListItem[];
}

/** Inline an SVG file from public/ for embedding in the page. */
export function inlineSvg(svgUrl: string): {
  inlinedSvg: string;
  codesInSvg: Set<string>;
} {
  const fsPath = path.join(process.cwd(), "public", svgUrl.replace(/^\/+/, ""));
  const raw = fs.readFileSync(fsPath, "utf8");
  const codesInSvg = new Set(
    Array.from(raw.matchAll(/data-code="([^"]+)"/g), (m) => m[1]),
  );
  const inlinedSvg = raw
    .replace(/<\?xml[^?]*\?>\s*/, "")
    .replace(/<svg\b/, '<svg id="sq-map"');
  return { inlinedSvg, codesInSvg };
}

/**
 * Build the props passed to <StateQuizPage> for a country quiz, in the
 * given language. Uses the rule collection's locale-specific md title for
 * the country name and `nameI18n` for subdivision names.
 */
export function buildCountryQuizProps(
  lang: Language,
  country: { slug: string; continent: string; pageDir: string },
  munis: MunicipalitiesBlock,
  allRules: Array<{ id: string; data: any }>,
) {
  const t = getQuizI18n(lang);
  const localeEntry =
    allRules.find((e) => e.id === `${country.pageDir}/_index.${lang}`) ??
    allRules.find((e) => e.id === `${country.pageDir}/_index.ja`);
  const countryName = localeEntry?.data?.title ?? country.slug;

  const { inlinedSvg, codesInSvg } = inlineSvg(munis.svg);
  const quizStates = munis.list
    .filter((s) => codesInSvg.has(s.code))
    .map((s) => ({ code: s.code, name: s.nameI18n?.[lang] ?? s.name }));

  const continentJa =
    t.continents[country.continent as keyof typeof t.continents] ?? country.continent;
  const site = "https://geopinning.space";
  const canonical = `${site}${quizPath(lang, `/quiz/states/${country.continent}/${country.slug}/`)}`;
  const breadcrumbs = [
    { name: t.breadcrumbs.top, url: langPath(lang, "/") },
    { name: t.breadcrumbs.quiz, url: langPath(lang, "/quiz/") },
    { name: t.breadcrumbs.states, url: quizPath(lang, "/quiz/states/") },
    { name: continentJa, url: quizPath(lang, `/quiz/states/${country.continent}/`) },
    {
      name: countryName,
      url: quizPath(lang, `/quiz/states/${country.continent}/${country.slug}/`),
    },
  ];

  const relatedLinks: Array<{ url: string; label: string }> = [];
  const ruleHref = ruleUrl(country.pageDir, lang, allRules);
  if (ruleHref) relatedLinks.push({ url: ruleHref, label: t.relatedLinks.rule });
  // The city-quiz registry is the source of truth for the city-quiz URL —
  // its meta.continent can differ from the state-quiz continent (e.g. russia
  // is "asia" in COUNTRIES but "europe" in the city-quiz registry).
  const cityEntry = CITY_QUIZ_REGISTRY[country.slug];
  if (cityEntry) {
    relatedLinks.push({
      url: quizPath(lang, `/quiz/cities/${cityEntry.meta.continent}/${cityEntry.meta.slug}/`),
      label: t.relatedLinks.cityQuiz,
    });
  }

  return {
    lang,
    pageTitle: t.country.pageTitleFmt(countryName),
    pageDescription: t.country.pageDescriptionFmt(countryName),
    canonical,
    pageH1: t.country.titleFmt(countryName),
    prompt: t.country.prompt,
    storageKey: `sq-best:${country.slug}`,
    breadcrumbs,
    quizStates,
    inlinedSvg,
    relatedLinks,
  };
}

/**
 * Build the props for a Japan prefecture quiz.
 */
export function buildPrefectureQuizProps(
  lang: Language,
  prefDir: string,
  region: string,
  munis: MunicipalitiesBlock,
  allRules: Array<{ id: string; data: any }>,
) {
  const t = getQuizI18n(lang);
  const ruleIdBase = `asia/japan/${region}/${prefDir}`;
  const localeEntry =
    allRules.find((e) => e.id === `${ruleIdBase}/_index.${lang}`) ??
    allRules.find((e) => e.id === `${ruleIdBase}/_index.ja`);
  const titleRaw = localeEntry?.data?.title ?? prefDir;

  // For JA, suffix prefecture-style ending if missing
  let prefDisplay = titleRaw;
  if (lang === "ja") {
    const SUFFIX_OK = /[県府都道]$/;
    if (!SUFFIX_OK.test(titleRaw)) {
      const sfx =
        titleRaw === "東京"
          ? "都"
          : titleRaw === "京都" || titleRaw === "大阪"
          ? "府"
          : titleRaw === "北海道"
          ? ""
          : "県";
      prefDisplay = titleRaw + sfx;
    }
  }

  const { inlinedSvg, codesInSvg } = inlineSvg(munis.svg);
  const codeSeen = new Set<string>();
  const quizStates: { code: string; name: string }[] = [];
  for (const item of munis.list) {
    if (!codesInSvg.has(item.code)) continue;
    if (codeSeen.has(item.code)) continue;
    codeSeen.add(item.code);
    quizStates.push({ code: item.code, name: item.nameI18n?.[lang] ?? item.name });
  }

  const site = "https://geopinning.space";
  const canonical = `${site}${quizPath(lang, `/quiz/cities/japan/${prefDir}/`)}`;
  const breadcrumbs = [
    { name: t.breadcrumbs.top, url: langPath(lang, "/") },
    { name: t.breadcrumbs.quiz, url: langPath(lang, "/quiz/") },
    { name: t.breadcrumbs.cities, url: quizPath(lang, "/quiz/cities/") },
    { name: t.breadcrumbs.japan, url: quizPath(lang, "/quiz/cities/japan/") },
    { name: prefDisplay, url: quizPath(lang, `/quiz/cities/japan/${prefDir}/`) },
  ];

  const relatedLinks: Array<{ url: string; label: string }> = [];
  const ruleHref = ruleUrl(ruleIdBase, lang, allRules);
  if (ruleHref) relatedLinks.push({ url: ruleHref, label: t.relatedLinks.rule });

  return {
    lang,
    pageTitle: t.prefecture.pageTitleFmt(prefDisplay),
    pageDescription: t.prefecture.pageDescriptionFmt(prefDisplay),
    canonical,
    pageH1: t.prefecture.titleFmt(prefDisplay),
    prompt: t.prefecture.prompt,
    storageKey: `sq-best:japan-${prefDir}`,
    breadcrumbs,
    quizStates,
    inlinedSvg,
    relatedLinks,
  };
}

/**
 * Build the relatedLinks list for a city-quiz page (e.g.
 * /quiz/cities/europe/germany/). Adds a link to the country's rule guide and,
 * when a state quiz exists for this country, a link to that too.
 */
/** City-quiz slugs whose rule page directory does not match
 * `{continent}/{slug}` and is not in COUNTRIES. Without this override
 * the rule link is dropped because the assumed path 404s. */
const CITY_SLUG_TO_RULE_DIR: Record<string, string> = {
  uae: "middle_east/united_arab_emirates",
  "costa-rica": "n_america/costa_rica",
};

export function buildCityQuizRelatedLinks(
  lang: Language,
  meta: { continent: string; slug: string },
  allRules: Array<{ id: string; data: any }>,
): Array<{ url: string; label: string }> {
  const t = getQuizI18n(lang);
  // Cross-reference COUNTRIES so that countries with a different rule pageDir
  // (e.g. bosnia → europe/bosnah) link to the correct rule page.
  const country = COUNTRIES.find((c) => c.slug === meta.slug);
  const pageDir =
    country?.pageDir
    ?? CITY_SLUG_TO_RULE_DIR[meta.slug]
    ?? `${meta.continent}/${meta.slug}`;
  const links: Array<{ url: string; label: string }> = [];
  const ruleHref = ruleUrl(pageDir, lang, allRules);
  if (ruleHref) links.push({ url: ruleHref, label: t.relatedLinks.rule });
  if (country) {
    links.push({
      url: quizPath(lang, `/quiz/states/${country.continent}/${country.slug}/`),
      label: t.relatedLinks.stateQuiz,
    });
  }
  return links;
}

/**
 * Resolve all country/prefecture rule entries needed across the various
 * quiz routes. Cached at module scope by Astro's evaluation model.
 */
export async function getCountriesAndPrefectures(
  getCollection: (n: "rule") => Promise<any[]>,
) {
  const allRules = await getCollection("rule");
  const prefs = allRules.filter(
    (e: any) =>
      /^asia\/japan\/[^/]+\/[^/]+\/_index\.ja$/.test(e.id) &&
      e.data?.is_pref === true &&
      !!e.data?.municipalities,
  );
  return { allRules, prefs };
}
