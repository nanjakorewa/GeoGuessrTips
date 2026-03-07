/**
 * i18n shortcode (1,288 uses)
 *
 * Hugo:    {{% i18n "how-to-distinguish" %}}
 * Output:  The translated string for the current language
 */
import type { Language } from "../../../lib/i18n-utils.ts";
import { t } from "../../../i18n/translations.ts";

export function i18nHandler(args: string[], lang: Language): string {
  const key = args[0] || "";
  return t(key, lang);
}
