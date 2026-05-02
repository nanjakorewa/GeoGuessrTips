#!/usr/bin/env node
/**
 * Copy OSM-hero-related frontmatter fields from `_index.ja.md` to sibling
 * `_index.{en,es,id,pt}.md` files so non-Japanese pages get the same hero map +
 * features card layout as Japanese pages.
 *
 * Fields copied (only if not already present in the target):
 *   - mapProvider
 *   - mapPins
 *   - mapCenter
 *   - mapZoom
 *   - mapRegions
 *   - features
 *   - heroGallery
 *   - is_pref
 *
 * Usage: node scripts/copy-osm-fields.js
 */
import fs from "node:fs";
import path from "node:path";

const RULE_DIR = path.resolve("src/content/rule");
const FIELDS_TO_COPY = [
  "mapProvider",
  "mapPins",
  "mapCenter",
  "mapZoom",
  "mapRegions",
  "features",
  "heroGallery",
  "is_pref",
];
const TARGET_LANGS = ["en", "es", "id", "pt"];

let totalFiles = 0;
let totalUpdated = 0;
let totalSkipped = 0;

/**
 * Walk the directory tree finding `_index.ja.md` files.
 */
function* walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      yield* walk(full);
    } else if (entry.isFile() && entry.name === "_index.ja.md") {
      yield full;
    }
  }
}

/**
 * Parse a markdown file into { frontmatter, frontmatterRaw, body }.
 * `frontmatterRaw` is the raw YAML text (without `---` fences).
 */
function parseFile(filePath) {
  // Normalize CRLF → LF so the rest of the script can assume `\n`.
  const text = fs.readFileSync(filePath, "utf-8").replace(/\r\n/g, "\n");
  const m = text.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return null;
  return { frontmatterRaw: m[1], body: m[2] };
}

/**
 * Extract a top-level YAML field's full text (label + value, possibly
 * multi-line). Returns the captured block (without trailing newline) or null.
 *
 * A "top-level field" starts at column 0 with `field_name:` and ends just
 * before the next top-level field or the end of the YAML block.
 */
function extractField(yamlText, fieldName) {
  const lines = yamlText.split("\n");
  const startIdx = lines.findIndex((line) =>
    new RegExp(`^${fieldName}:(?:\\s|$)`).test(line)
  );
  if (startIdx === -1) return null;

  let endIdx = lines.length;
  for (let i = startIdx + 1; i < lines.length; i++) {
    if (/^[a-zA-Z_][a-zA-Z0-9_-]*:/.test(lines[i])) {
      endIdx = i;
      break;
    }
  }
  return lines.slice(startIdx, endIdx).join("\n").replace(/\n+$/, "");
}

/**
 * Check whether a target YAML already has the named top-level field.
 */
function hasField(yamlText, fieldName) {
  return new RegExp(`^${fieldName}:(?:\\s|$)`, "m").test(yamlText);
}

/**
 * Process one Japanese index file, copying OSM fields to siblings.
 */
function processIndex(jaPath) {
  const ja = parseFile(jaPath);
  if (!ja) return;

  // Collect fields present in the .ja frontmatter
  const fieldsToInject = [];
  for (const name of FIELDS_TO_COPY) {
    const block = extractField(ja.frontmatterRaw, name);
    if (block) fieldsToInject.push(block);
  }
  if (fieldsToInject.length === 0) return; // nothing to copy

  const dir = path.dirname(jaPath);
  for (const lang of TARGET_LANGS) {
    const targetPath = path.join(dir, `_index.${lang}.md`);
    if (!fs.existsSync(targetPath)) continue;
    totalFiles++;

    const target = parseFile(targetPath);
    if (!target) {
      totalSkipped++;
      continue;
    }

    // Filter out fields already present in target
    const newBlocks = fieldsToInject.filter(
      (b) => !hasField(target.frontmatterRaw, b.split(":")[0])
    );
    if (newBlocks.length === 0) {
      totalSkipped++;
      continue;
    }

    // Append to target frontmatter
    const newFrontmatter =
      target.frontmatterRaw.replace(/\n+$/, "") +
      "\n" +
      newBlocks.join("\n");
    const newText = `---\n${newFrontmatter}\n---\n${target.body}`;
    fs.writeFileSync(targetPath, newText, "utf-8");
    totalUpdated++;
  }
}

console.log(`Walking ${RULE_DIR} ...`);
let jaCount = 0;
for (const jaPath of walk(RULE_DIR)) {
  jaCount++;
  processIndex(jaPath);
}
console.log(`Scanned ${jaCount} _index.ja.md files`);
console.log(
  `Targets considered: ${totalFiles}, updated: ${totalUpdated}, skipped (no change needed): ${totalSkipped}`
);
