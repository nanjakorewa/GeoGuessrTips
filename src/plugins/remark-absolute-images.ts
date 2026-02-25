/**
 * Remark plugin that converts relative image paths in Markdown
 * to absolute paths based on the content file's location.
 *
 * This prevents Astro from trying to import images as assets
 * and instead lets them be served from public/.
 *
 * Example:
 *   File: src/content/rule/asia/vietnam/_index.ja.md
 *   Input:  ![](./image.png) or ![](image.png)
 *   Output: ![](/rule/asia/vietnam/image.png)
 */
import type { Root, Image } from "mdast";
import type { Plugin } from "unified";
import { visit } from "unist-util-visit";
import path from "node:path";

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

    visit(tree, "image", (node: Image) => {
      const url = node.url;
      if (!url) return;

      // Skip already absolute paths, URLs, and data URIs
      if (url.startsWith("/") || url.startsWith("http") || url.startsWith("data:")) return;

      // Convert relative path to absolute
      // "./image.png" or "image.png" -> "/rule/asia/vietnum/image.png"
      const cleanUrl = url.replace(/^\.\//, "");
      node.url = `/${contentDir}/${cleanUrl}`;
    });
  };
};

export default remarkAbsoluteImages;
