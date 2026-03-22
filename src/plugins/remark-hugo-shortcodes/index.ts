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
import type { Plugin } from "unified";
import type { Root } from "mdast";
import type { VFile } from "vfile";
import type { Language } from "../../lib/i18n-utils.ts";
import {
  processBlockShortcode,
  processInlineShortcode,
} from "./parser.ts";

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
import { resetCitationState, citeHandler, referencesHandler } from "./shortcodes/cite.ts";
import {
  colorHandler,
  maruHandler,
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
 * Process all shortcodes in a text string.
 * Order matters: inner shortcodes must be processed before outer ones.
 */
function processAllShortcodes(text: string, lang: Language): string {
  let result = text;

  // Reset per-page state
  resetQuizState();
  resetCitationState();

  // --- Pass 0: Named-param shortcodes (custom regex) ---
  // amazoncard uses named params: {{% amazoncard url="..." title="..." %}}
  result = result.replace(
    /\{\{%\s*amazoncard([\s\S]*?)%\}\}/g,
    (_match, rawArgs) => amazoncardHandler(rawArgs)
  );

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

  // rd and corp are inline but read from filesystem
  result = processInlineShortcode(result, "rd", (args) =>
    rdHandler(args, lang)
  );
  result = processInlineShortcode(result, "corp", (args) =>
    corpHandler(args, lang)
  );

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
      const processed = processAllShortcodes(doc, lang);
      return originalParser.call(this, processed, file);
    };
  }
};

export default remarkHugoShortcodes;
