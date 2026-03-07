/**
 * ref shortcode (80+ uses)
 *
 * Hugo:   {{% ref "url" "Title" %}}
 * Output: (<a href="url" class="hinttext by-geotips"><i class="fas fa-book-open"></i>参考文献 Title</a>)
 */
import type { Language } from "../../../lib/i18n-utils.ts";
import { t } from "../../../i18n/translations.ts";

export function refHandler(args: string[], lang: Language): string {
  const url = args[0] || "";
  const title = args[1] || "";
  const bibLabel = t("bib", lang);
  return `(<a href="${url}" class="hinttext by-geotips"><i class="fas fa-book-open"></i>${bibLabel} ${title}</a>)`;
}
