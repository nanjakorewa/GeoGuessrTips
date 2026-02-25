export const LANGUAGES = ["ja", "en", "id", "es", "pt"] as const;
export type Language = (typeof LANGUAGES)[number];
export const DEFAULT_LANG: Language = "ja";

/**
 * Extract language code from a Content Collection entry ID.
 * Entry IDs look like: "asia/bangladesh/_index.en" or "quiz1/_index.ja"
 */
export function extractLangFromId(id: string): Language {
  const match = id.match(/\.(ja|en|id|es|pt)$/);
  return (match?.[1] as Language) ?? DEFAULT_LANG;
}

/**
 * Extract the slug (URL path segment) from a Content Collection entry ID.
 * "asia/bangladesh/_index.ja" -> "asia/bangladesh"
 * "quiz1/_index.en" -> "quiz1"
 * "_index.ja" -> ""
 */
export function extractSlugFromId(id: string): string {
  return id
    .replace(/\/?_index\.(ja|en|id|es|pt)$/, "")
    .replace(/^\/+|\/+$/g, "");
}

/**
 * Build the full URL path for a given collection, slug, and language.
 * Japanese (default) has no prefix: /rule/asia/bangladesh/
 * Other languages get /{lang}/ prefix: /en/rule/asia/bangladesh/
 */
export function buildUrl(
  collection: string,
  slug: string,
  lang: Language
): string {
  const pathParts = slug ? `/${collection}/${slug}/` : `/${collection}/`;
  return lang === DEFAULT_LANG ? pathParts : `/${lang}${pathParts}`;
}

/**
 * Get the language name for display in the language switcher.
 */
export function getLanguageName(lang: Language): string {
  const names: Record<Language, string> = {
    ja: "日本語",
    en: "English",
    id: "Bahasa Indonesia",
    es: "Español",
    pt: "Português",
  };
  return names[lang];
}

/**
 * Get the locale string for Open Graph / hreflang tags.
 */
export function getLocale(lang: Language): string {
  const locales: Record<Language, string> = {
    ja: "ja_JP",
    en: "en_US",
    id: "id_ID",
    es: "es_ES",
    pt: "pt_BR",
  };
  return locales[lang];
}

/**
 * Get the hreflang value for a given language.
 */
export function getHreflang(lang: Language): string {
  const hreflangs: Record<Language, string> = {
    ja: "ja",
    en: "en",
    id: "id",
    es: "es",
    pt: "pt",
  };
  return hreflangs[lang];
}
