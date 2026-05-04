/**
 * Remark plugin that transforms Hugo shortcode syntax into HTML.
 *
 * Processing strategy:
 * 1. Intercept raw markdown BEFORE remarkParse processes it
 * 2. Process innermost shortcodes first, then outer containers
 * 3. Multiple passes to handle nesting (tabs > tab > notice)
 *
 * IMPORTANT: All shortcodes must use {{% %}} syntax (not {{< >}})
 * because remarkParse treats < and > as HTML, breaking the shortcode.
 *
 * Implementation: We override `this.parser` (set by remarkParse) to
 * pre-process shortcodes in the raw markdown string before parsing.
 * This is critical because block shortcodes like tabs/notice span
 * multiple markdown blocks and cannot be handled at the AST level.
 */
import fs from "node:fs";
import yaml from "js-yaml";
import type { Plugin } from "unified";
import type { Root } from "mdast";
import type { VFile } from "vfile";
import type { Language } from "../../lib/i18n-utils.ts";
import {
  processBlockShortcode,
  processInlineShortcode,
} from "./parser.ts";

import { t } from "../../i18n/translations.ts";

// Shortcode handlers
import { noticeHandler } from "./shortcodes/notice.ts";
import { i18nHandler } from "./shortcodes/i18n.ts";
import { tabsHandler, tabHandler } from "./shortcodes/tabs.ts";
import { gotoHandler } from "./shortcodes/goto.ts";
import { exHandler } from "./shortcodes/ex.ts";
import { byHandler } from "./shortcodes/by.ts";
import { refHandler } from "./shortcodes/ref.ts";
import { lbHandler } from "./shortcodes/lb.ts";
import { rdHandler } from "./shortcodes/rd.ts";
import { resetQuizState, quizHandler } from "./shortcodes/quiz.ts";
import { resetCitationState, initializeCitationRegistry, citeHandler, referencesHandler } from "./shortcodes/cite.ts";
import { renderPrefInfoHtml, type PrefInfoData } from "./shortcodes/prefinfo.ts";
import {
  colorHandler,
  maruHandler,
  timelineHandler,
  mermaidHandler,
  qbHandler,
  quizifHandler,
  youtubeHandler,
  yshortHandler,
  googlemapHandler,
  bollardHandler,
  snslHandler,
  sectionTitleHandler,
  blogcardHandler,
  imgrefHandler,
  imrefHandler,
  sharebuttonHandler,
  twitterHandler,
  speakerdeckHandler,
  corpHandler,
  corpLogosOnlyHandler,
  ahrefHandler,
  arelHandler,
  corplinkHandler,
  titleHandler,
  pixivEmbedHandler,
  mapHandler,
  youtubeDescHandler,
  dividendHandler,
  minkabuHandler,
  nasdaqHandler,
  ahrefsHandler,
  corpTreemapHandler,
  amazoncardHandler,
  amazonLinksHandler,
} from "./shortcodes/misc.ts";

function getLanguageFromVFile(vfile: VFile): Language {
  const filePath =
    (vfile as any).path || (vfile as any).history?.[0] || "";
  const match = filePath.match(/\.(ja|en|id|es|pt)\.md$/);
  return (match?.[1] as Language) ?? "ja";
}

/**
 * Returns the page's slug under src/content/rule/, e.g. "asia/japan/tohoku/aomori".
 * Returns null for non-rule files or if the path can't be parsed.
 */
function getRuleSlugFromVFile(vfile: VFile): string | null {
  const filePath =
    (vfile as any).path || (vfile as any).history?.[0] || "";
  if (!filePath) return null;
  const normalized = filePath.replace(/\\/g, "/");
  const match = normalized.match(
    /src\/content\/rule\/(.+)\/_index\.[a-z]+\.md$/
  );
  return match ? match[1] : null;
}

/**
 * Read & parse the YAML frontmatter from disk. Returns {} if unavailable.
 * Astro strips frontmatter from the doc string before remark plugins run,
 * so we re-read the source file. Cheap (small files, once per build).
 */
function getFrontmatterFromVFile(vfile: VFile): Record<string, any> {
  const filePath =
    (vfile as any).path || (vfile as any).history?.[0] || "";
  if (!filePath) return {};
  try {
    const content = fs.readFileSync(filePath, "utf-8");
    // Match either LF or CRLF line endings (`\r?\n`).
    const m = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
    if (!m) return {};
    return (yaml.load(m[1]) as Record<string, any>) || {};
  } catch {
    return {};
  }
}

/**
 * Process all shortcodes in a text string.
 * Order matters: inner shortcodes must be processed before outer ones.
 */
function processAllShortcodes(
  text: string,
  lang: Language,
  ruleSlug: string | null,
  pageTitle: string,
  referenceKeys: string[],
  prefInfo: PrefInfoData | null
): string {
  let result = text;

  // Reset per-page state
  resetQuizState();
  if (referenceKeys.length > 0) {
    // Frontmatter declares references — number cites by frontmatter order
    initializeCitationRegistry(referenceKeys);
  } else {
    resetCitationState();
  }

  // --- Pass 0: Named-param shortcodes (custom regex) ---
  // amazoncard uses named params: {{% amazoncard url="..." title="..." %}}
  result = result.replace(
    /\{\{%\s*amazoncard([\s\S]*?)%\}\}/g,
    (_match, rawArgs) => amazoncardHandler(rawArgs)
  );

  // Empty <ul class="rule-list"></ul> → placeholder paragraph.
  // Stub pages (no items recorded yet) end up showing only the section
  // header above an empty list, which looks broken. Substitute a localized
  // "not yet documented" message that mentions the page title.
  result = result.replace(
    /<ul\s+class="rule-list"\s*>\s*<\/ul>/g,
    () => {
      const message = t("rule-list-empty", lang).replace("%s", pageTitle);
      return `<p class="rule-list-empty">${message}</p>`;
    }
  );

  // Frontmatter `prefInfo` → render an HTML block immediately before
  // <div id="corp-desc">. The injected block may include {{% cite %}}
  // markers, which subsequent passes will resolve.
  if (prefInfo) {
    const prefInfoHtml = renderPrefInfoHtml(prefInfo, pageTitle, lang);
    if (prefInfoHtml) {
      const corpDescOpen = /<div\b[^>]*\bid=["']corp-desc["']/;
      if (corpDescOpen.test(result)) {
        result = result.replace(corpDescOpen, (m) => `${prefInfoHtml}\n\n${m}`);
      }
    }
  }

  // --- Pass 1: Inline (self-closing) shortcodes ---
  // These appear inside block shortcodes and must be resolved first.

  result = processInlineShortcode(result, "cite", citeHandler);
  result = processInlineShortcode(result, "i18n", (args) =>
    i18nHandler(args, lang)
  );
  result = processInlineShortcode(result, "ex", exHandler);
  result = processInlineShortcode(result, "ref", (args) =>
    refHandler(args, lang)
  );
  result = processInlineShortcode(result, "imref", (args) =>
    imrefHandler(args, lang)
  );
  result = processInlineShortcode(result, "goto", gotoHandler);
  result = processInlineShortcode(result, "by", (args) =>
    byHandler(args, lang)
  );
  result = processInlineShortcode(result, "color", colorHandler);
  result = processInlineShortcode(result, "maru", maruHandler);
  result = processInlineShortcode(result, "qb", qbHandler);
  result = processInlineShortcode(result, "quiz", quizHandler);
  result = processInlineShortcode(result, "quizif", quizifHandler);
  result = processInlineShortcode(result, "youtube-desc", youtubeDescHandler);
  result = processInlineShortcode(result, "youtube", youtubeHandler);
  result = processInlineShortcode(result, "yshort", yshortHandler);
  result = processInlineShortcode(result, "googlemap", googlemapHandler);
  result = processInlineShortcode(result, "bollard", bollardHandler);
  result = processInlineShortcode(result, "snsl", snslHandler);
  result = processInlineShortcode(result, "section-title", sectionTitleHandler);
  result = processInlineShortcode(result, "sharebutton", sharebuttonHandler);
  result = processInlineShortcode(result, "twitter", twitterHandler);
  result = processInlineShortcode(result, "speakerdeck", speakerdeckHandler);
  result = processInlineShortcode(result, "ahref", ahrefHandler);
  result = processInlineShortcode(result, "arel", arelHandler);
  result = processInlineShortcode(result, "corplink", corplinkHandler);
  result = processInlineShortcode(result, "title", titleHandler);
  result = processInlineShortcode(result, "pixiv-embed", pixivEmbedHandler);
  result = processInlineShortcode(result, "map", mapHandler);
  result = processInlineShortcode(result, "amazon-links", amazonLinksHandler);
  result = processInlineShortcode(result, "dividend", dividendHandler);
  result = processInlineShortcode(result, "minkabu", minkabuHandler);
  result = processInlineShortcode(result, "nasdaq", nasdaqHandler);
  result = processInlineShortcode(result, "corp-treemap", corpTreemapHandler);

  // rd and corp are inline but read from filesystem
  result = processInlineShortcode(result, "rd", (args) =>
    rdHandler(args, lang)
  );

  // corp: when the page has a "代表的な企業の説明" section (id="corp-desc"),
  // move the logo grid into that section instead of rendering it inline in
  // "国・地域の見分け方". The section already has its own heading, so drop
  // the redundant heading + "詳細" button and inject only the logos div.
  //
  // If no explicit {{% corp %}} shortcode is present but the page has a
  // corp/ directory next to it, auto-derive area from the page's own slug.
  // This lets non-Japanese pages (which often omit the shortcode) display
  // logos automatically as long as the corp/ directory exists.
  const hasCorpDesc = /<div\b[^>]*\bid=["']corp-desc["']/.test(result);
  if (hasCorpDesc) {
    let movedCorpLogos = "";
    result = processInlineShortcode(result, "corp", (args) => {
      movedCorpLogos += corpLogosOnlyHandler(args);
      return "";
    });
    if (!movedCorpLogos && ruleSlug) {
      // No explicit shortcode → try auto-detection from the page's own path.
      // corpLogosOnlyHandler returns "" if the corp/ directory doesn't exist,
      // so this is a no-op for pages without logos.
      movedCorpLogos = corpLogosOnlyHandler([ruleSlug, ""]);
    }
    if (movedCorpLogos) {
      // Inject right after the section's <h4> heading (before the table).
      // Falls back to injecting just inside the opening div if no h4 follows.
      const afterHeading =
        /(<div\b[^>]*\bid=["']corp-desc["'][^>]*>\s*<h4\b[^>]*>[\s\S]*?<\/h4>)/;
      if (afterHeading.test(result)) {
        result = result.replace(afterHeading, `$1\n${movedCorpLogos}`);
      } else {
        result = result.replace(
          /(<div\b[^>]*\bid=["']corp-desc["'][^>]*>)/,
          `$1\n${movedCorpLogos}`
        );
      }
    }
  } else {
    result = processInlineShortcode(result, "corp", (args) =>
      corpHandler(args, lang)
    );
  }

  // --- Pass 2: Inner block shortcodes ---
  // notice, lb, blogcard, imgref appear inside tab

  result = processBlockShortcode(result, "notice", noticeHandler);
  result = processBlockShortcode(result, "lb", lbHandler);
  result = processBlockShortcode(result, "blogcard", blogcardHandler);
  result = processBlockShortcode(result, "imgref", (args, inner) =>
    imgrefHandler(args, inner, lang)
  );
  result = processBlockShortcode(result, "ahrefs", ahrefsHandler);
  result = processBlockShortcode(result, "references", referencesHandler);
  result = processBlockShortcode(result, "timeline", timelineHandler);
  result = processBlockShortcode(result, "mermaid", mermaidHandler);

  // --- Pass 3: tab (inside tabs) ---
  result = processBlockShortcode(result, "tab", (args, inner) =>
    tabHandler(args, inner, lang)
  );

  // --- Pass 4: tabs (outermost container) ---
  result = processBlockShortcode(result, "tabs", tabsHandler);

  return result;
}

/**
 * The remark plugin.
 *
 * We wrap the parser function (set by remarkParse via `this.parser`)
 * to pre-process shortcodes in the raw markdown string before
 * remarkParse converts it into an AST.
 *
 * Key: use `this.parser` (lowercase), NOT `this.parse` or `this.Parser`.
 * In unified v11 + remark-parse v11, the parser function is stored as
 * `this.parser` and receives (doc: string, file: VFile).
 */
const remarkHugoShortcodes: Plugin<[], Root> = function () {
  const self = this as any;
  const originalParser = self.parser;

  if (typeof originalParser === "function") {
    self.parser = function (doc: string, file: VFile) {
      const lang = getLanguageFromVFile(file);
      const ruleSlug = getRuleSlugFromVFile(file);
      const fm = getFrontmatterFromVFile(file);
      const pageTitle = (typeof fm.title === "string" ? fm.title : "");
      const referenceKeys: string[] = Array.isArray(fm.references)
        ? fm.references
            .map((r: any) => (r && typeof r.key === "string" ? r.key : ""))
            .filter(Boolean)
        : [];
      const prefInfo: PrefInfoData | null =
        fm.prefInfo && typeof fm.prefInfo === "object" ? fm.prefInfo : null;
      const processed = processAllShortcodes(
        doc,
        lang,
        ruleSlug,
        pageTitle,
        referenceKeys,
        prefInfo
      );
      return originalParser.call(this, processed, file);
    };
  }
};

export default remarkHugoShortcodes;
