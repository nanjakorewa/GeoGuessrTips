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
import { getQuizI18n, quizPath, langPath } from "./quiz-states-i18n";

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
  const canonical = `${site}${quizPath(lang, `/quiz/states/japan/${prefDir}/`)}`;
  const breadcrumbs = [
    { name: t.breadcrumbs.top, url: langPath(lang, "/") },
    { name: t.breadcrumbs.quiz, url: langPath(lang, "/quiz/") },
    { name: t.breadcrumbs.states, url: quizPath(lang, "/quiz/states/") },
    { name: t.breadcrumbs.japan, url: quizPath(lang, "/quiz/states/japan/") },
    { name: prefDisplay, url: quizPath(lang, `/quiz/states/japan/${prefDir}/`) },
  ];

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
  };
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
