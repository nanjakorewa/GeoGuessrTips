/**
 * lb shortcode (367 uses)
 *
 * Hugo:   {{% lb 50 small %}}content{{% /lb %}}
 * Output: <div class="div-lb size-50"><div class="resolution-small">content</div></div>
 *
 *         {{% lb 50 %}}content{{% /lb %}}
 * Output: <div class="div-lb size-50">content</div>
 *
 *         {{% lb %}}content{{% /lb %}}
 * Output: <div class="div-lb">content</div>
 */
export function lbHandler(args: string[], inner: string): string {
  const size = args[0];
  const resolution = args[1];

  const sizeClass = size ? ` size-${size}` : "";
  const trimmedInner = inner.trim();

  if (resolution) {
    return `<div class="div-lb${sizeClass}"><div class="resolution-small">\n\n${trimmedInner}\n\n</div></div>`;
  }
  return `<div class="div-lb${sizeClass}">\n\n${trimmedInner}\n\n</div>`;
}
