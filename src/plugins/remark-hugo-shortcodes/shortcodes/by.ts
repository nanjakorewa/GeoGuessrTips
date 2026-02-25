/**
 * by shortcode (228+ uses)
 *
 * Hugo:   {{% by "user" "twitch" %}}
 *         {{% by "url" "wiki" "Article Title" %}}
 *         {{% by "url" "web" "Title" %}}
 *         {{% by "url" "youtube" "Title" %}}
 *         {{% by "url" "plonkit" %}}
 *         {{% by "url" "youcome" "Username" %}}
 */
import type { Language } from "../../../lib/i18n-utils.ts";
import { t } from "../../../i18n/translations.ts";

export function byHandler(args: string[], lang: Language): string {
  const source = args[0] || "";
  const type = args[1] || "";
  const label = args[2] || "";

  switch (type) {
    case "twitch":
      return `<a href="https://www.twitch.tv/${source}" class="hinttext by-twitch">(by ${source} <i class="fab fa-twitch"></i>)</a>`;

    case "wiki":
      return `<a href="${source}" class="hinttext by-wiki">(from Wikipedia 『${label}』<i class="fab fa-wikipedia-w"></i>)</a>`;

    case "web":
      return `(<a href="${source}" class="hinttext by-geotips"><i class="fas fa-book-open"></i>${t("bib", lang)} ${label}</a>)`;

    case "youtube":
      return `<a href="${source}" class="hinttext by-youtube">(from 『${label}』<i class="fab fa-youtube"></i>)</a>`;

    case "plonkit":
      return `<a href="${source}" class="hinttext by-geotips">(by plonk it <i class="fas fa-map-marker-alt"></i>)</a>`;

    case "youcome":
      return `<a href="${source}" class="hinttext by-youcome">(by youtubeのコメント欄 <i class="far fa-comment"></i> ${label}さん</a>)`;

    default:
      return `<a href="https://geotips.net/" class="hinttext by-geotips">(by Geotips <i class="fas fa-map-marker-alt"></i>)</a>`;
  }
}
