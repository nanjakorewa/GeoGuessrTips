#!/usr/bin/env node
/**
 * Inject the `municipalities:` block from scripts/.generated/{dir}.muni.yaml
 * into each prefecture's _index.ja.md. Skips prefectures that already have a
 * `municipalities:` key in their frontmatter (so existing manual edits, e.g.
 * Akita's curated entries, are preserved).
 *
 * Insertion point: just before the `references:` key if present, else just
 * before the closing `---` of the frontmatter.
 */
const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const YAML_DIR = path.join(__dirname, ".generated");

// Same prefecture map as build-all-prefecture-maps.cjs (dir + region pair)
const PREFS = require("./_prefectures.cjs");

function processOne(pref) {
  const md = path.join(
    PROJECT_ROOT,
    "src/content/rule/asia/japan",
    pref.region,
    pref.dir,
    "_index.ja.md"
  );
  if (!fs.existsSync(md)) return { skipped: "no md file" };

  const content = fs.readFileSync(md, "utf8");
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return { skipped: "no frontmatter" };
  const fm = fmMatch[1];
  if (/^municipalities:/m.test(fm)) {
    return { skipped: "already has municipalities" };
  }

  const yamlPath = path.join(YAML_DIR, `${pref.dir}.muni.yaml`);
  if (!fs.existsSync(yamlPath)) {
    return { skipped: `no generated yaml: ${pref.dir}.muni.yaml` };
  }
  const yaml = fs.readFileSync(yamlPath, "utf8").replace(/\s+$/, "");

  // Insert before `references:` if present, else before closing `---`.
  let newFm;
  if (/^references:/m.test(fm)) {
    newFm = fm.replace(/(^references:)/m, `${yaml}\n$1`);
  } else {
    newFm = fm.replace(/\s*$/, `\n${yaml}`);
  }

  const newContent = content.replace(fmMatch[0], `---\n${newFm}\n---`);
  fs.writeFileSync(md, newContent);
  return { wrote: yamlPath };
}

let injected = 0;
let skipped = 0;
for (const pref of PREFS) {
  const r = processOne(pref);
  if (r.wrote) {
    console.log(`✓ ${pref.dir.padEnd(12)} ← ${path.relative(PROJECT_ROOT, r.wrote)}`);
    injected++;
  } else {
    console.log(`  ${pref.dir.padEnd(12)} skipped (${r.skipped})`);
    skipped++;
  }
}
console.log(`\nInjected: ${injected}, Skipped: ${skipped}`);
