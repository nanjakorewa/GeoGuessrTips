/**
 * Collection of simple/low-frequency shortcode handlers.
 */
import type { Language } from "../../../lib/i18n-utils.ts";
import { t } from "../../../i18n/translations.ts";
import fs from "node:fs";
import path from "node:path";

/** color: {{% color "#FF0000" %}} → colored square */
export function colorHandler(args: string[]): string {
  const color = args[0] || "#000";
  return `<span style="color:${color} !important; font-weight: bold;">■</span>`;
}

/** maru: {{% maru %}} → empty (placeholder) */
export function maruHandler(): string {
  return "";
}

/** qb: {{% qb %}} → quiz heading */
export function qbHandler(): string {
  return `<h4 class="section-title">ここはどこ？</h4>`;
}

/** quizif: {{% quizif "url" "margin?" %}} → blurred iframe embed */
export function quizifHandler(args: string[]): string {
  const url = args[0] || "";
  const hasMargin = args[1] === "margin";
  const style = hasMargin ? ' style="margin-top:20px;"' : "";
  return `<div class="googlemap-if quiz-iframe-blur"${style}><iframe src="${url}" width="100%" height="450" style="border:0" allowfullscreen="" loading="lazy"></iframe></div>`;
}

/** youtube: {{% youtube "videoId" %}} → YouTube embed */
export function youtubeHandler(args: string[]): string {
  const id = args[0] || "";
  return `<div class="youtube-area"><iframe src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}

/** yshort: {{% yshort "url or id" %}} → YouTube Shorts embed */
export function yshortHandler(args: string[]): string {
  let id = args[0] || "";
  // Extract video ID from YouTube Shorts URL
  const match = id.match(/shorts\/([^?/]+)/);
  if (match) id = match[1];
  return `<div class="youtube-area"><iframe width="315" height="560" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}

/** googlemap: {{% googlemap "url" %}} → map link */
export function googlemapHandler(args: string[]): string {
  const url = args[0] || "";
  return `<a href="${url}" class="link-text link-color"><i class="fas fa-map-marked-alt"></i></a>`;
}

/** bollard: {{% bollard "area" "section" "text" %}} → bollard info link */
export function bollardHandler(args: string[]): string {
  const area = args[0] || "";
  const section = args[1] || "";
  const text = args[2] || "";
  return `<a href="https://geopinning.space/rule/${area}/#${section}" class="link-text link-color"><i class="fas fa-road"></i>${text}</a>`;
}

/** snsl: {{% snsl "platform" "username" %}} → social link icon */
export function snslHandler(args: string[]): string {
  const platform = args[0] || "twitter";
  const username = args[1] || "";

  switch (platform) {
    case "twitch":
      return `<a href="https://www.twitch.tv/${username}"><i class="fab fa-twitch"></i></a>`;
    case "youtube":
      return `<a href="https://www.youtube.com/@${username}"><i class="fab fa-youtube"></i></a>`;
    default:
      return `<a href="https://twitter.com/${username}"><i class="fab fa-twitter"></i></a>`;
  }
}

/** section-title: {{% section-title "id" "title" %}} */
export function sectionTitleHandler(args: string[]): string {
  const id = args[0] || "";
  const title = args[1] || "";
  return `<h3 id="${id}" class="section-title">${title}</h3>`;
}

/** blogcard: {{% blogcard %}}...{{% /blogcard %}} → wrapper div */
export function blogcardHandler(_args: string[], inner: string): string {
  return `<div class="blogcard">\n\n${inner.trim()}\n\n</div>`;
}

/** imgref: {{% imgref %}}...{{% /imgref %}} → image source section */
export function imgrefHandler(
  _args: string[],
  inner: string,
  lang: Language
): string {
  const label =
    lang === "ja"
      ? "画像出典"
      : lang === "id"
        ? "Sumber gambar"
        : "Original image source";
  return `<div class="imgref-area"><h4>${label}</h4><ul>\n\n${inner.trim()}\n\n</ul></div>`;
}

/** imref: {{% imref "label?" %}} → inline link to image source section */
export function imrefHandler(args: string[], lang: Language): string {
  const label = args[0] || "";
  const text =
    lang === "ja"
      ? "画像出典"
      : lang === "id"
        ? "Sumber gambar"
        : "Image Source";
  return `<a href="#imgref" class="hinttext">${label || text}</a>`;
}

/** sharebutton: {{% sharebutton %}} → placeholder (handled by layout) */
export function sharebuttonHandler(): string {
  return "";
}

/** twitter: {{% twitter "url" %}} → empty (was broken in Hugo too) */
export function twitterHandler(): string {
  return "";
}

/** speakerdeck: {{% speakerdeck "id" "ratio" %}} */
export function speakerdeckHandler(args: string[]): string {
  const id = args[0] || "";
  const ratio = args[1] || "1.77777777777778";
  return `<div style="left: 0; width: 100%; height: 0; position: relative; padding-bottom: calc(100% / ${ratio});"><iframe src="//speakerdeck.com/player/${id}" style="top: 0; left: 0; width: 100%; height: 100%; position: absolute; border: 0;" allowfullscreen scrolling="no" allow="encrypted-media;"></iframe></div>`;
}

/** corp: {{% corp area region size %}} → corporation sign images */
export function corpHandler(args: string[], lang: Language): string {
  const area = args[0] || "";
  const region = args[1] || "";
  const size = args[2] || "normal";

  const dirPath = path.resolve("src/content/rule", area, region, "corp");
  if (!fs.existsSync(dirPath)) return "";

  const files = fs.readdirSync(dirPath).filter((f) =>
    /\.(jpg|jpeg|png|svg|gif|webp)$/i.test(f)
  );
  if (files.length === 0) return "";

  const heading = t("findable-corp-sign", lang);
  const images = files
    .map((f) => {
      const src =
        lang === "ja"
          ? `./corp/${f}`
          : `https://geopinning.space/rule/${area}/${region}/corp/${f}`;
      return `<img src="${src}" class="${size}"/>`;
    })
    .join("\n");

  const detailBtn = `<a href="#corp-desc" class="btn-corp-detail">&#9662; 詳細</a>`;
  return `<h4 class="section-title">${heading} ${detailBtn}</h4>\n<div class="sign-area">\n${images}\n</div>`;
}

/** amazoncard: {{% amazoncard url="..." title="..." image="..." price="..." tagline="..." badge="..." %}} */
export function amazoncardHandler(rawArgs: string): string {
  // Normalize smart quotes (U+201C/U+201D) back to ASCII quotes
  // remark-smartypants converts " to \u201C/\u201D which breaks param extraction
  const normalized = rawArgs.replace(/[\u201C\u201D]/g, '"');
  const get = (key: string): string => {
    const m = normalized.match(new RegExp(`${key}="([^"]*)"`));
    return m ? m[1] : "";
  };
  const url = get("url");
  const title = get("title") || "Amazon item";
  const img = get("image");
  const price = get("price");
  const tagline = get("tagline");
  const badge = get("badge");
  const placeholder = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='320' height='320' viewBox='0 0 320 320'><rect width='320' height='320' fill='%23f3f4f6'/><text x='160' y='190' text-anchor='middle' font-size='86' font-family='Arial, sans-serif' font-weight='800' fill='%23999'>?</text></svg>`;
  const imgSrc = img || placeholder;

  return `<div class="amazon-card">
  <a class="amazon-card__image" href="${url}" target="_blank" rel="noopener noreferrer sponsored">
    <img src="${imgSrc}" alt="${title}" class="no-lightbox">
    ${badge ? `<span class="amazon-card__badge">${badge}</span>` : ""}
  </a>
  <div class="amazon-card__body">
    <h3 class="amazon-card__title">
      <a href="${url}" target="_blank" rel="noopener noreferrer sponsored">${title}</a>
    </h3>
    ${tagline ? `<p class="amazon-card__tagline">${tagline}</p>` : ""}
    ${price ? `<p class="amazon-card__meta">価格: ${price}</p>` : ""}
    <a class="amazon-card__cta" href="${url}" target="_blank" rel="noopener noreferrer sponsored">Amazonで見る</a>
  </div>
</div>`;
}

/**
 * amazon-links: {{% amazon-links %}}
 * Originally a Hugo shortcode that displayed country-specific Amazon book/guide links.
 * The original template is no longer available.
 * TODO: Re-implement with country-specific Amazon affiliate data if needed.
 */
export function amazonLinksHandler(_args: string[]): string {
  return "";
}

/** ahref: {{% ahref "text" "url" "class?" %}} */
export function ahrefHandler(args: string[]): string {
  const text = args[0] || "";
  const url = args[1] || "";
  const cls = args[2] ? ` class="${args[2]}"` : "";
  return `<a href="${url}"${cls}>${text}</a>`;
}

/** arel: {{% arel "url" "text" %}} */
export function arelHandler(args: string[]): string {
  const url = args[0] || "";
  const text = args[1] || "";
  return `<a href="${url}">${text}</a>`;
}

/** corplink: {{% corplink "url" "text" %}} */
export function corplinkHandler(args: string[]): string {
  const url = args[0] || "";
  const text = args[1] || "";
  return `<a href="${url}" target="_blank" rel="noopener noreferrer">${text} <i class="fas fa-external-link-alt"></i></a>`;
}

/** title: {{% title %}} → page title (not resolvable in remark, output empty) */
export function titleHandler(): string {
  return "";
}

/** pixiv-embed: {{% pixiv-embed "id" "title" %}} */
export function pixivEmbedHandler(args: string[]): string {
  const id = args[0] || "";
  const title = args[1] || "";
  return `<div class="pixiv-embed"><a href="https://www.pixiv.net/artworks/${id}" target="_blank" rel="noopener noreferrer">${title}</a></div>`;
}

/** map: {{% map "type" "width?" %}} → JSMaps (placeholder, needs JS in layout) */
export function mapHandler(args: string[]): string {
  const mapType = args[0] || "";
  const width = args[1] || "100%";
  return `<div id="jsmaps-container" data-map-type="${mapType}" style="width:${width};"></div>`;
}

/** youtube-desc: {{% youtube-desc "videoId" %}} → larger youtube embed */
export function youtubeDescHandler(args: string[]): string {
  const id = args[0] || "";
  return `<div class="youtube-area"><iframe width="590" height="295" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}

/** dividend: {{% dividend "market" "ticker" %}} */
export function dividendHandler(args: string[]): string {
  const market = args[0] || "";
  const ticker = args[1] || "";
  if (market === "tokyo") {
    return `<a href="https://irbank.net/${ticker}/dividend" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>`;
  }
  return `<a href="https://www.nasdaq.com/market-activity/stocks/${ticker}/dividend-history" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>`;
}

/** minkabu: {{% minkabu "code" %}} */
export function minkabuHandler(args: string[]): string {
  const code = args[0] || "";
  return `<a href="https://minkabu.jp/stock/${code}/settlement" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>`;
}

/** nasdaq: {{% nasdaq "market" "ticker" %}} */
export function nasdaqHandler(args: string[]): string {
  const market = args[0] || "";
  const ticker = args[1] || "";
  if (market === "tokyo") {
    return `<a href="https://www.google.com/finance/quote/${ticker}:TYO" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>`;
  }
  return `<a href="https://www.nasdaq.com/market-activity/stocks/${ticker}" target="_blank" rel="noopener noreferrer"><i class="fas fa-external-link-alt"></i></a>`;
}

/** ahrefs: {{% ahrefs %}}...{{% /ahrefs %}} → link list wrapper */
export function ahrefsHandler(_args: string[], inner: string): string {
  return `<div class="ahrefs-list">\n\n${inner.trim()}\n\n</div>`;
}
