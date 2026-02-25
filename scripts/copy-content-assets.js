/**
 * Copy non-Markdown assets (images, fonts, etc.) from src/content/ to public/
 * so that relative image references in Markdown (e.g., ./bollards.png) resolve correctly.
 *
 * This script runs as a pre-build step.
 */
import fs from "node:fs";
import path from "node:path";

const SRC_DIR = path.resolve("src/content");
const DEST_DIR = path.resolve("public");

const ASSET_EXTENSIONS = new Set([
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".webp",
  ".avif",
  ".ico",
  ".otf",
  ".ttf",
  ".woff",
  ".woff2",
  ".mp4",
  ".webm",
  ".pdf",
]);

const IGNORE_EXTENSIONS = new Set([".md", ".mdx", ".ts", ".clip"]);

let copiedCount = 0;

function copyAssets(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;

  const entries = fs.readdirSync(srcDir, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(srcDir, entry.name);
    const destPath = path.join(destDir, entry.name);

    if (entry.isDirectory()) {
      copyAssets(srcPath, destPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name).toLowerCase();

      if (IGNORE_EXTENSIONS.has(ext)) continue;
      if (!ASSET_EXTENSIONS.has(ext)) continue;

      // Create destination directory if needed
      const destDirPath = path.dirname(destPath);
      if (!fs.existsSync(destDirPath)) {
        fs.mkdirSync(destDirPath, { recursive: true });
      }

      fs.copyFileSync(srcPath, destPath);
      copiedCount++;
    }
  }
}

console.log("Copying content assets to public/...");
copyAssets(SRC_DIR, DEST_DIR);
console.log(`Done. Copied ${copiedCount} asset files.`);
