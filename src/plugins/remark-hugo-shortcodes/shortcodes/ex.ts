/**
 * ex shortcode (35+ uses)
 *
 * Hugo:   {{% ex "url1" "url2" "url3" %}}
 * Output: Multiple map marker icon links (up to 7 URLs)
 */
export function exHandler(args: string[]): string {
  return args
    .filter(Boolean)
    .map(
      (url) =>
        `<a href="${url}" class="link-text link-color" target="_blank" rel="noopener noreferrer"><i class="fas fa-map-marked-alt i-ensmall"></i></a>`
    )
    .join("");
}
