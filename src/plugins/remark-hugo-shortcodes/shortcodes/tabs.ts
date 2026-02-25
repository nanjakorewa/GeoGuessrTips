/**
 * tabs / tab shortcodes (5,969 combined uses)
 *
 * tabs:
 *   Hugo:   {{% tabs %}}...{{% /tabs %}}
 *   Output: <div class="code-tabs"><ul class="nav nav-tabs"></ul><div class="tab-content">...</div></div>
 *
 * tab:
 *   Hugo:   {{% tab "w-etf" %}}...{{% /tab %}}
 *   Output: <div class="tab-pane" title="translated-title">...</div>
 *
 *   If tab name starts with "w-mymemo", adds "mymemo" class.
 *   If tab name starts with "w-", translates via i18n.
 *   Otherwise uses name as-is.
 */
import type { Language } from "../../../lib/i18n-utils.ts";
import { t } from "../../../i18n/translations.ts";

export function tabsHandler(args: string[], inner: string): string {
  const extraClass = args[0] ? ` ${args[0]}` : "";
  return (
    `<div class="code-tabs${extraClass}">\n` +
    `  <ul class="nav nav-tabs"></ul>\n` +
    `  <div class="tab-content">\n${inner}\n  </div>\n` +
    `</div>`
  );
}

export function tabHandler(
  args: string[],
  inner: string,
  lang: Language
): string {
  const name = args[0] || "";
  let title: string;
  let extraClass = "";

  if (name.startsWith("w-mymemo")) {
    title = t(name, lang);
    extraClass = " mymemo";
  } else if (name.startsWith("w-")) {
    title = t(name, lang);
  } else {
    title = name;
  }

  return `<div class="tab-pane${extraClass}" title="${title}">\n\n${inner.trim()}\n\n</div>`;
}
