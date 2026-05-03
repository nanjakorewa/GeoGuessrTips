/**
 * Remark plugin that converts relative image paths in Markdown
 * to absolute paths based on the content file's location.
 *
 * This prevents Astro from trying to import images as assets
 * and instead lets them be served from public/.
 *
 * Handles both:
 *   A) mdast image nodes:   ![](image.png)  ->  ![](/rule/asia/vietnum/image.png)
 *   B) raw HTML <img src>:  <img src="image.png">  ->  <img src="/rule/asia/vietnum/image.png">
 *
 * (B) is required for non-default-language pages (e.g. /en/rule/...) where the
 * page URL prefix no longer matches the public/ directory layout, so
 * browser-relative resolution would 404.
 */
import type { Root, Image, Html } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

function isExternalOrAbsolute(url: string): boolean {
  return (
    url.startsWith("/") ||
    url.startsWith("http://") ||
    url.startsWith("https://") ||
    url.startsWith("data:") ||
    url.startsWith("//")
  );
}

function toAbsolute(url: string, contentDir: string): string {
  const cleanUrl = url.replace(/^\.\//, "");
  return `/${contentDir}/${cleanUrl}`;
}

const remarkAbsoluteImages: Plugin<[], Root> = () => {
  return (tree, vfile) => {
    // Get the directory path of the content file relative to src/content/
    const filePath = vfile.path || vfile.history?.[0] || "";
    if (!filePath) return;

    // Normalize to forward slashes
    const normalizedPath = filePath.replace(/\\/g, "/");

    // Extract the path relative to src/content/
    const contentMatch = normalizedPath.match(/src\/content\/(.+)\/_index\.[a-z]+\.md$/);
    if (!contentMatch) return;

    const contentDir = contentMatch[1]; // e.g., "rule/asia/vietnum"

    visit(tree, (node) => {
      // --- A) mdast image nodes (markdown `![](...)` syntax) ---
      if (node.type === "image") {
        const img = node as Image;
        const url = img.url;
        if (!url || isExternalOrAbsolute(url)) return;
        img.url = toAbsolute(url, contentDir);
        return;
      }

      // --- B) Raw HTML nodes containing <img> tags ---
      if (node.type === "html") {
        const htmlNode = node as Html;
        if (!/<img\s/i.test(htmlNode.value)) return;

        // Rewrite src="..." and src='...' for each <img> tag.
        htmlNode.value = htmlNode.value.replace(
          /(<img\b[^>]*?\bsrc=)(["'])([^"']+)\2/gi,
          (match, prefix, quote, url) => {
            if (isExternalOrAbsolute(url)) return match;
            return `${prefix}${quote}${toAbsolute(url, contentDir)}${quote}`;
          }
        );
      }
    });
  };
};

export default remarkAbsoluteImages;
