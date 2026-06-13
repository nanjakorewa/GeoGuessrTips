/**
 * photo-placeholder shortcode
 *
 * Hugo:
 *   {{% photo-placeholder "飛騨高山の古い町並み" %}}
 *
 * Output: A pure-CSS "?" placeholder tile, shown where a real photo is not
 * yet available. It keeps the layout consistent with image tiles and signals
 * "photo wanted" honestly, WITHOUT shipping an actual image file (no page
 * weight, no licensing pressure to grab a questionable image).
 *
 *   args[0] (optional): caption / location label
 *
 * Note: rendered inside a `.googlemap-if` wrapper so it drops into the same
 * slots the existing image markup uses.
 */
export function photoPlaceholderHandler(args: string[]): string {
  const caption = (args[0] || "").trim();

  const title = caption || "写真準備中";
  const ariaLabel = `画像なし（写真募集中）${caption ? "：" + caption : ""}`;

  return (
    `<div class="googlemap-if photo-placeholder-wrap no-margin">` +
    `<div class="photo-placeholder" role="img" aria-label="${ariaLabel}">` +
    `<span class="photo-placeholder__mark" aria-hidden="true">?</span>` +
    `<span class="photo-placeholder__title">${title}</span>` +
    `<span class="photo-placeholder__note"><i class="fas fa-camera"></i>写真募集中</span>` +
    `</div>` +
    `</div>`
  );
}
