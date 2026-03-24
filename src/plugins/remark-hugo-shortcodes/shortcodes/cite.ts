/**
 * Citation shortcodes for reference management.
 *
 * Usage:
 *   Inline: {{% cite "key" %}}
 *   Block:  {{% references %}}
 *             key: Author. "Title." Publisher, Year. URL
 *           {{% /references %}}
 */

// Per-page state (reset at the start of each page via resetCitationState)
let citationRegistry: Map<string, number> = new Map();
let citationCounter = 0;

export function resetCitationState(): void {
  citationRegistry = new Map();
  citationCounter = 0;
}

/**
 * cite: {{% cite "key" %}}
 * Registers the key (if new) and returns a superscript link.
 * Example: {{% cite "jpca2024" %}} → <sup>[1]</sup>
 */
export function citeHandler(args: string[]): string {
  const key = (args[0] || "").trim();
  if (!key) return "";

  if (!citationRegistry.has(key)) {
    citationCounter++;
    citationRegistry.set(key, citationCounter);
  }
  const num = citationRegistry.get(key)!;
  return `<sup class="cite-num"><a href="#ref-${key}" id="citeref-${num}">[${num}]</a></sup>`;
}

/**
 * references: {{% references %}}...{{% /references %}}
 * Inner content: one reference per line, format: "key: reference text"
 * Lines without ":" are treated as uncited additional references.
 * Cited references are sorted by citation order.
 */
export function referencesHandler(_args: string[], inner: string): string {
  interface RefItem {
    key: string;
    text: string;
  }

  const lines = inner
    .trim()
    .split("\n")
    .filter((l) => l.trim());

  const items: RefItem[] = lines.map((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) {
      return { key: `_anon_${Math.random()}`, text: line.trim() };
    }
    const key = line.substring(0, colonIdx).trim();
    const text = line.substring(colonIdx + 1).trim();
    return { key, text };
  });

  // Cited refs sorted by order of appearance; uncited refs appended after
  const cited = items
    .filter((i) => citationRegistry.has(i.key))
    .sort(
      (a, b) =>
        (citationRegistry.get(a.key) ?? 999) -
        (citationRegistry.get(b.key) ?? 999)
    );
  const uncited = items.filter((i) => !citationRegistry.has(i.key));
  const allRefs = [...cited, ...uncited];

  const listItems = allRefs
    .map((item) => {
      const num = citationRegistry.get(item.key);
      const numBadge = num
        ? `<span class="ref-num">[${num}]</span> `
        : "";
      // Convert URLs to links; supports bare URLs and <url> syntax.
      // PDF URLs get a badge instead of full URL text.
      const urlRegex = /<(https?:\/\/[^>]+)>|(https?:\/\/[^\s<]+)/g;
      const linkedText = item.text.replace(urlRegex, (_match, bracketUrl, bareUrl) => {
        const url = bracketUrl ?? bareUrl;
        const lower = url.toLowerCase();
        const isPdf =
          lower.endsWith(".pdf") ||
          lower.includes(".pdf?") ||
          lower.includes(".pdf#");
        if (isPdf) {
          return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="ref-pdf-badge">PDF</a>`;
        }
        return `<a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>`;
      });
      return `<li id="ref-${item.key}" class="ref-item">${numBadge}<span class="ref-text">${linkedText}</span></li>`;
    })
    .join("\n");

  return `<div class="references-section" id="references">
<h3 class="references-title">参考文献・出典</h3>
<ol class="references-list">
${listItems}
</ol>
</div>`;
}
