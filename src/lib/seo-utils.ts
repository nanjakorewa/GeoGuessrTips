import type { Language } from "./i18n-utils";

const SITE_TITLE = "GeoGuessrの攻略めも";
const MAX_DESCRIPTION_LENGTH = 160;

/**
 * Truncate a string to a maximum length, appending "..." if truncated.
 */
function truncate(text: string, max: number): string {
  const cleaned = text.replace(/\s+/g, " ").trim();
  if (cleaned.length <= max) return cleaned;
  return cleaned.slice(0, max - 3) + "...";
}

/**
 * Generate a meta description for a content collection entry.
 *
 * Priority:
 *  1. `seo_description` frontmatter field (returned as-is)
 *  2. `description` frontmatter field (returned as-is)
 *  3. Auto-generated based on collection type and language
 *     - rule pages (have `flag`): country/region identification tips
 *     - quiz pages: quiz description
 *     - other pages: title + site name fallback
 */
export function generateDescription(
  entry: { data: Record<string, any> },
  lang: Language,
  collection?: string,
): string {
  const data = entry.data;

  // 1. Explicit SEO description takes highest priority
  if (data.seo_description) {
    return truncate(data.seo_description, MAX_DESCRIPTION_LENGTH);
  }

  // 2. Frontmatter description
  if (data.description) {
    return truncate(data.description, MAX_DESCRIPTION_LENGTH);
  }

  const title = data.title || "";

  // 3. Auto-generate for rule/country pages (identified by flag field)
  if (data.flag) {
    const flagTemplates: Record<Language, string> = {
      ja: "%sをGeoGuessrで見分けるためのヒントや特徴をまとめたメモです。ストリートビューで気付いたポイントを記録しています。",
      en: "Notes that summarise tips and distinctive features to help identify %s while playing GeoGuessr.",
      id: "Catatan yang merangkum kiat dan ciri khas untuk membantu membedakan %s saat bermain GeoGuessr.",
      es: "Notas que reúnen consejos y rasgos distintivos para identificar %s mientras juegas GeoGuessr.",
      pt: "Notas que reúnem dicas e características distintivas para identificar %s ao jogar GeoGuessr.",
    };
    const template = flagTemplates[lang] || flagTemplates.ja;
    return truncate(template.replace("%s", title), MAX_DESCRIPTION_LENGTH);
  }

  // 4. Auto-generate for rule pages without flag (section/region index pages)
  if (collection === "rule") {
    const ruleTemplates: Record<Language, string> = {
      ja: `${title}の特徴やストリートビューの見分け方`,
      en: `Tips and Street View identification for ${title}`,
      id: `Tips dan identifikasi Street View untuk ${title}`,
      es: `Consejos e identificación en Street View para ${title}`,
      pt: `Dicas e identificação no Street View para ${title}`,
    };
    return truncate(ruleTemplates[lang] || ruleTemplates.ja, MAX_DESCRIPTION_LENGTH);
  }

  // 5. Auto-generate for quiz pages
  if (collection === "quiz") {
    const quizTemplates: Record<Language, string> = {
      ja: `${title} - GeoGuessrクイズ`,
      en: `${title} - GeoGuessr quiz`,
      id: `${title} - Kuis GeoGuessr`,
      es: `${title} - Quiz de GeoGuessr`,
      pt: `${title} - Quiz de GeoGuessr`,
    };
    return truncate(quizTemplates[lang] || quizTemplates.ja, MAX_DESCRIPTION_LENGTH);
  }

  // 6. Fallback for any other collection (about, web, etc.)
  if (title) {
    return truncate(`${title} | ${SITE_TITLE}`, MAX_DESCRIPTION_LENGTH);
  }

  // 7. Ultimate fallback
  const defaultDescs: Record<Language, string> = {
    ja: "GeoGuessr（ジオゲッサー）のプレイで気付いた特徴や攻略ヒントを国・地域ごとにまとめた個人メモです。",
    en: "Personal notes that collect strategies, observations, and distinctive clues for GeoGuessr.",
    id: "Catatan pribadi berisi strategi, pengamatan, dan petunjuk khas GeoGuessr.",
    es: "Notas personales con estrategias, observaciones y pistas distintivas de GeoGuessr.",
    pt: "Notas pessoais que reúnem estratégias, observações e pistas distintivas de GeoGuessr.",
  };
  return truncate(defaultDescs[lang] || defaultDescs.ja, MAX_DESCRIPTION_LENGTH);
}
