/**
 * notice shortcode (10,624 uses)
 *
 * Hugo:    {{% notice tip %}}content{{% /notice %}}
 * Output:  <div class="notices tip"><p>content</p></div>
 *
 * For type "rel":
 * Output:  <div class="notices-without-mark rel"><p>content</p></div>
 *
 * Optional second arg is an id attribute.
 */
export function noticeHandler(args: string[], inner: string): string {
  const type = args[0] || "note";
  const id = args[1] ? ` id="${args[1]}"` : "";

  const className = type === "rel" ? "notices-without-mark rel" : `notices ${type}`;

  // Trim inner content whitespace
  const trimmedInner = inner.trim();

  return `<div class="${className}"${id}>\n\n${trimmedInner}\n\n</div>`;
}
