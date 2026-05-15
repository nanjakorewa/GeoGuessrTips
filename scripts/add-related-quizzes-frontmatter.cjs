/**
 * One-shot maintenance: for every country that has a state-quiz and/or
 * city-quiz, insert a `related_quizzes_title` + `related_quizzes` block into
 * the corresponding rule-page frontmatter (every existing _index.{lang}.md).
 *
 *   Skips files where the field already exists, so re-running is safe and
 *   never overwrites manually curated entries (e.g. Indonesia's kabupaten
 *   quiz).
 *
 * Usage:
 *   node scripts/add-related-quizzes-frontmatter.cjs [--dry]
 */
const fs = require('fs');
const path = require('path');

const REPO = path.resolve(__dirname, '..');
const DRY = process.argv.includes('--dry');

// ── 1. Parse the COUNTRIES list (slug → continent + pageDir) from the TS file
const countriesTs = fs.readFileSync(
  path.join(REPO, 'src/data/quiz-states-countries.ts'),
  'utf8',
);
const COUNTRY_RE = /\{\s*slug:\s*"([^"]+)"\s*,\s*continent:\s*"([^"]+)"\s*,\s*pageDir:\s*"([^"]+)"\s*,\s*ja:\s*"([^"]+)"\s*\}/g;
const COUNTRIES = [];
let m;
while ((m = COUNTRY_RE.exec(countriesTs)) !== null) {
  COUNTRIES.push({ slug: m[1], continent: m[2], pageDir: m[3], ja: m[4] });
}

// ── 2. Parse the city-quiz slug list (keys of CITY_QUIZ_REGISTRY)
const citiesTs = fs.readFileSync(
  path.join(REPO, 'src/data/quiz-cities-registry.ts'),
  'utf8',
);
const CITY_LINE_RE = /^\s*(?:"([a-z-]+)"|([a-z-]+))\s*:\s*\{\s*cities:/gm;
const CITY_SLUGS = new Set();
while ((m = CITY_LINE_RE.exec(citiesTs)) !== null) {
  CITY_SLUGS.add(m[1] || m[2]);
}

// Countries that have a city quiz but no state quiz — pageDir + continent
// kept here so we can target their rule pages. Slug matches the city-quiz
// registry key (URL slug under /quiz/cities/{continent}/{slug}/).
const CITY_ONLY_COUNTRIES = [
  { slug: "paraguay",           continent: "cs_america",  pageDir: "cs_america/paraguay" },
  { slug: "namibia",            continent: "africa",      pageDir: "africa/namibia" },
  { slug: "ghana",              continent: "africa",      pageDir: "africa/ghana" },
  { slug: "jordan",             continent: "middle_east", pageDir: "middle_east/jordan" },
  { slug: "eswatini",           continent: "africa",      pageDir: "africa/eswatini" },
  { slug: "lesotho",            continent: "africa",      pageDir: "africa/lesotho" },
  { slug: "rwanda",             continent: "africa",      pageDir: "africa/rwanda" },
  { slug: "costa-rica",         continent: "n_america",   pageDir: "n_america/costa_rica" },
  { slug: "dominican-republic", continent: "n_america",   pageDir: "n_america/dominican-republic" },
  { slug: "puerto-rico",        continent: "n_america",   pageDir: "n_america/puerto-rico" },
  { slug: "curacao",            continent: "cs_america",  pageDir: "cs_america/curacao" },
  { slug: "oman",               continent: "middle_east", pageDir: "middle_east/oman" },
  { slug: "qatar",              continent: "middle_east", pageDir: "middle_east/qatar" },
  { slug: "uae",                continent: "middle_east", pageDir: "middle_east/united_arab_emirates" },
];

// Build per-country quiz inventory
const stateCountriesPlan = COUNTRIES
  .map((c) => ({
    ...c,
    hasState: true, // by definition: it's in COUNTRIES
    hasCity: CITY_SLUGS.has(c.slug),
  }));
const cityOnlyPlan = CITY_ONLY_COUNTRIES
  .filter((c) => CITY_SLUGS.has(c.slug))
  .map((c) => ({ ...c, hasState: false, hasCity: true }));
const PLAN = [...stateCountriesPlan, ...cityOnlyPlan]
  .filter((c) => c.hasState || c.hasCity);

// ── 3. Localized labels & URL builder
const I18N = {
  ja: { title: "関連クイズ",                  state: "州当てクイズ",         city: "都市当てクイズ" },
  en: { title: "Related quizzes",             state: "State quiz",           city: "City quiz" },
  id: { title: "Kuis terkait",                state: "Kuis tebak provinsi",  city: "Kuis tebak kota" },
  es: { title: "Cuestionarios relacionados",  state: "Quiz de estados",      city: "Quiz de ciudades" },
  pt: { title: "Quizzes relacionados",        state: "Quiz de estados",      city: "Quiz de cidades" },
};
function urlFor(lang, kind, continent, slug) {
  const prefix = lang === 'ja' ? '' : `/${lang}`;
  return `${prefix}/quiz/${kind}/${continent}/${slug}/`;
}

function buildBlock(lang, country) {
  const t = I18N[lang];
  const entries = [];
  if (country.hasState) entries.push([urlFor(lang, 'states', country.continent, country.slug), t.state]);
  if (country.hasCity)  entries.push([urlFor(lang, 'cities', country.continent, country.slug), t.city]);
  if (!entries.length) return null;
  const lines = [
    `related_quizzes_title: "${t.title}"`,
    `related_quizzes: [`,
    ...entries.map(([url, label]) => `    ["${url}", "${label}"],`),
    `    ]`,
  ];
  return lines.join('\n');
}

// ── 4. Process each rule file
function processFile(filePath, lang, country) {
  if (!fs.existsSync(filePath)) return { status: 'missing' };
  let raw = fs.readFileSync(filePath, 'utf8');
  // Strip UTF-8 BOM if present (several rule files start with a BOM).
  const hadBom = raw.charCodeAt(0) === 0xfeff;
  if (hadBom) raw = raw.slice(1);
  // Some files have a leading blank line / CRLF before the opening "---".
  const leadMatch = raw.match(/^(\s*)/);
  const leadingWs = leadMatch ? leadMatch[1] : '';
  if (leadingWs) raw = raw.slice(leadingWs.length);
  if (!/^---\s*(\r?\n)/.test(raw)) return { status: 'no-frontmatter' };
  // Find end of frontmatter — first line after the opener that is exactly "---"
  const fmEndRe = /\r?\n---\s*(\r?\n|$)/g;
  fmEndRe.lastIndex = 3; // skip the opening "---"
  const endMatch = fmEndRe.exec(raw);
  if (!endMatch) return { status: 'no-frontmatter-end' };
  // Idempotency: scan the actual frontmatter region (not just the first 8KB,
  // which fails on files with long municipality lists in frontmatter).
  const frontmatterText = raw.slice(0, endMatch.index);
  if (/^related_quizzes_title\s*:/m.test(frontmatterText)) {
    return { status: 'already-has' };
  }
  // endMatch.index points to the "\n" before the closing "---"; we want to
  // insert AT that newline so the new lines appear before "---".
  const insertAt = endMatch.index + (endMatch[0].startsWith('\r\n') ? 2 : 1);
  const block = buildBlock(lang, country);
  if (!block) return { status: 'no-entries' };
  const before = raw.slice(0, insertAt);
  const after = raw.slice(insertAt);
  const needsNl = before.endsWith('\n') ? '' : '\n';
  let updated = `${before}${needsNl}${block}\n${after}`;
  if (leadingWs) updated = leadingWs + updated;
  if (hadBom) updated = '﻿' + updated;
  if (DRY) return { status: 'would-write' };
  fs.writeFileSync(filePath, updated);
  return { status: 'wrote' };
}

const langs = ['ja', 'en', 'id', 'es', 'pt'];
const summary = { wrote: 0, 'already-has': 0, missing: 0, other: 0 };
for (const country of PLAN) {
  for (const lang of langs) {
    const filePath = path.join(REPO, 'src', 'content', 'rule', country.pageDir, `_index.${lang}.md`);
    const result = processFile(filePath, lang, country);
    if (result.status === 'wrote' || result.status === 'would-write' || result.status === 'already-has' || result.status === 'missing') {
      summary[result.status === 'would-write' ? 'wrote' : result.status]++;
    } else {
      summary.other++;
      console.warn(`${country.slug} ${lang}: ${result.status}`);
    }
    if (result.status === 'wrote' || result.status === 'would-write') {
      const kinds = [country.hasState && 'state', country.hasCity && 'city'].filter(Boolean).join('+');
      console.log(`  ${result.status === 'would-write' ? '[dry]' : '[ok]'} ${country.slug}/${lang}  (${kinds})`);
    }
  }
}
console.log('\nSummary:', summary, DRY ? '(dry run)' : '');
