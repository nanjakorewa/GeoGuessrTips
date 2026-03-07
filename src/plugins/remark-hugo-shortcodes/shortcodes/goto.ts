/**
 * goto shortcode (600+ uses)
 *
 * Hugo:   {{% goto "url" "text" %}}         → map-signs icon link
 *         {{% goto "goo.gl/..." "text" %}}  → map-marked icon link
 *         {{% goto "url" "text" "map" %}}   → map-marked icon link
 *         {{% goto "url" "text" "ex" %}}    → small map-marked icon only
 */
export function gotoHandler(args: string[]): string {
  const url = args[0] || "";
  const text = args[1] || "";
  const type = args[2] || "";

  if (url.includes("goo.gl")) {
    return `<a href="${url}" class="link-text link-color">${text}<i class="fas fa-map-marked-alt i-enlarge"></i></a>`;
  }
  if (type === "map") {
    return `<a href="${url}" class="link-text link-color">${text}<i class="fas fa-map-marked-alt i-enlarge"></i></a>`;
  }
  if (type === "ex") {
    return `<a href="${url}" class="link-text link-color"><i class="fas fa-map-marked-alt i-ensmall"></i></a>`;
  }
  return `<a href="${url}" class="link-text link-color"><i class="fas fa-map-signs"></i>${text}</a>`;
}
