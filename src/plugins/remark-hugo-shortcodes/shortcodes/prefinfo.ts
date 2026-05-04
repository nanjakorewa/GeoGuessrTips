/**
 * Prefecture basic info section renderer.
 *
 * Reads `prefInfo` from the page's frontmatter (passed in by the parser
 * wrapper in `index.ts`) and produces an HTML block to inject just before
 * `<div id="corp-desc">`. Uses {{% cite "key" %}} markers for citations
 * which are then resolved by the existing cite shortcode pipeline.
 */
import type { Language } from "../../../lib/i18n-utils.ts";

export interface PrefInfoData {
  population?: string;
  populationRank?: string;
  populationCite?: string;
  area?: string;
  areaRank?: string;
  areaCite?: string;
  capital?: string;
  capitalNote?: string;
  capitalCite?: string;
  highlights?: Array<{
    label: string;
    value: string;
    rank?: string;
    cite?: string;
  }>;
  geography?: string;
  economy?: string;
  relatedIndustry?: Array<{
    url: string;
    title: string;
    note?: string;
  }>;
}

const TITLE: Record<Language, (name: string) => string> = {
  ja: (n) => `${n}の基本情報`,
  en: (n) => `Key facts about ${n}`,
  id: (n) => `Informasi dasar tentang ${n}`,
  es: (n) => `Información básica de ${n}`,
  pt: (n) => `Informações básicas de ${n}`,
};

const LABEL_POP: Record<Language, string> = {
  ja: "人口",
  en: "Population",
  id: "Populasi",
  es: "Población",
  pt: "População",
};

const LABEL_AREA: Record<Language, string> = {
  ja: "面積",
  en: "Area",
  id: "Luas",
  es: "Área",
  pt: "Área",
};

const LABEL_CAPITAL: Record<Language, string> = {
  ja: "県庁所在地",
  en: "Capital",
  id: "Ibu kota",
  es: "Capital",
  pt: "Capital",
};

const SUBTITLE_GEO: Record<Language, string> = {
  ja: "地理的特徴",
  en: "Geography",
  id: "Geografi",
  es: "Geografía",
  pt: "Geografia",
};

const SUBTITLE_ECON: Record<Language, string> = {
  ja: "経済・産業の特徴",
  en: "Economy & Industry",
  id: "Ekonomi & Industri",
  es: "Economía e industria",
  pt: "Economia e indústria",
};

const RELATED_LABEL: Record<Language, (name: string) => string> = {
  ja: (n) => ` ${n}に関連する産業ページ`,
  en: (n) => ` Industry pages related to ${n}`,
  id: (n) => ` Halaman industri terkait ${n}`,
  es: (n) => ` Páginas de industria relacionadas con ${n}`,
  pt: (n) => ` Páginas de indústria relacionadas a ${n}`,
};

function pick<T>(map: Record<Language, T>, lang: Language): T {
  return map[lang] ?? map.ja;
}

/** A `{{% cite %}}` shortcode call. Empty if no key. */
function citeMark(key: string | undefined): string {
  return key ? `{{% cite "${key}" %}}` : "";
}

/** Escape minimal HTML special chars in a value-like string. */
function esc(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function card(opts: {
  label: string;
  value: string;
  rank?: string;
  cite?: string;
  highlight?: boolean;
}): string {
  const cls = `pref-info-card${opts.highlight ? " pref-info-card--highlight" : ""}`;
  const valueWithCite = `${esc(opts.value)}${citeMark(opts.cite)}`;
  const rankBlock = opts.rank
    ? `\n            <div class="pref-info-card__rank">${esc(opts.rank)}</div>`
    : "";
  return `        <div class="${cls}">
            <div class="pref-info-card__label">${esc(opts.label)}</div>
            <div class="pref-info-card__value">${valueWithCite}</div>${rankBlock}
        </div>`;
}

export function renderPrefInfoHtml(
  data: PrefInfoData,
  pageTitle: string,
  lang: Language
): string {
  const cards: string[] = [];

  if (data.population) {
    cards.push(
      card({
        label: pick(LABEL_POP, lang),
        value: data.population,
        rank: data.populationRank,
        cite: data.populationCite,
      })
    );
  }
  if (data.area) {
    cards.push(
      card({
        label: pick(LABEL_AREA, lang),
        value: data.area,
        rank: data.areaRank,
        cite: data.areaCite,
      })
    );
  }
  if (data.capital) {
    cards.push(
      card({
        label: pick(LABEL_CAPITAL, lang),
        value: data.capital,
        rank: data.capitalNote,
        cite: data.capitalCite,
      })
    );
  }
  for (const h of data.highlights ?? []) {
    cards.push(
      card({
        label: h.label,
        value: h.value,
        rank: h.rank,
        cite: h.cite,
        highlight: true,
      })
    );
  }

  // If there's nothing meaningful at all, render nothing.
  if (cards.length === 0 && !data.geography && !data.economy &&
      !(data.relatedIndustry && data.relatedIndustry.length)) {
    return "";
  }

  const parts: string[] = [];
  parts.push(
    `<section class="pref-info-section" id="pref-info">
    <h4 class="pref-info-section__title">${esc(pick(TITLE, lang)(pageTitle))}</h4>`
  );

  if (cards.length > 0) {
    parts.push(`    <div class="pref-info-cards">
${cards.join("\n")}
    </div>`);
  }

  if (data.geography) {
    parts.push(
      `    <h5 class="pref-info-subtitle">${pick(SUBTITLE_GEO, lang)}</h5>
    <p class="pref-info-text">${data.geography}</p>`
    );
  }
  if (data.economy) {
    parts.push(
      `    <h5 class="pref-info-subtitle">${pick(SUBTITLE_ECON, lang)}</h5>
    <p class="pref-info-text">${data.economy}</p>`
    );
  }

  if (data.relatedIndustry && data.relatedIndustry.length > 0) {
    const items = data.relatedIndustry
      .map(
        (r) =>
          `            <li><a href="${r.url}"><span class="pref-info-related__title">${esc(r.title)}</span>${
            r.note
              ? `<span class="pref-info-related__note">${esc(r.note)}</span>`
              : ""
          }</a></li>`
      )
      .join("\n");
    parts.push(`    <div class="pref-info-related">
        <div class="pref-info-related__label"><i class="fas fa-industry"></i>${esc(pick(RELATED_LABEL, lang)(pageTitle))}</div>
        <ul class="pref-info-related__list">
${items}
        </ul>
    </div>`);
  }

  parts.push(`</section>`);
  return parts.join("\n");
}
