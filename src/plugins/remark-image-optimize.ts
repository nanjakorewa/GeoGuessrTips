/**
 * Remark plugin that adds loading="lazy" and decoding="async"
 * to all images in the Markdown AST.
 *
 * Handles two kinds of nodes:
 *   A) mdast image nodes (type: "image") — converted to raw HTML nodes
 *      with the attributes applied.
 *   B) HTML nodes (type: "html") containing <img tags — attributes are
 *      injected via regex if not already present.
 *
 * This plugin should run AFTER remark-absolute-images so that image
 * URLs are already resolved to their final form before we serialize
 * the node to HTML.
 */
import type { Root, Image, Html } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";

/**
 * Escape HTML special characters in a string for use in an attribute value.
 */
function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

const remarkImageOptimize: Plugin<[], Root> = () => {
  return (tree) => {
    visit(tree, (node, index, parent) => {
      if (!parent || index === undefined) return;

      // --- A) mdast image nodes ---
      if (node.type === "image") {
        const img = node as Image;
        const src = escapeHtml(img.url || "");
        const alt = escapeHtml(img.alt || "");
        const title = img.title ? ` title="${escapeHtml(img.title)}"` : "";

        const html = `<img src="${src}" alt="${alt}"${title} loading="lazy" decoding="async">`;

        // Replace the image node with a raw HTML node
        const htmlNode: Html = {
          type: "html",
          value: html,
        };
        parent.children[index] = htmlNode as any;
        return;
      }

      // --- B) HTML nodes containing <img tags ---
      if (node.type === "html") {
        const htmlNode = node as Html;
        if (!/<img\s/i.test(htmlNode.value)) return;

        let value = htmlNode.value;

        // Add loading="lazy" if not already present
        value = value.replace(/<img\s(?![^>]*\bloading=)/gi, (match) => {
          return match + 'loading="lazy" ';
        });

        // Add decoding="async" if not already present
        value = value.replace(/<img\s(?![^>]*\bdecoding=)/gi, (match) => {
          return match + 'decoding="async" ';
        });

        htmlNode.value = value;
      }
    });
  };
};

export default remarkImageOptimize;
