#!/usr/bin/env node
/**
 * Inject the `municipalities:` block from scripts/.generated/countries/{slug}.muni.yaml
 * into the frontmatter of each country's _index.ja.md.
 * Skips pages that already have a `municipalities:` block.
 */
const fs = require("fs");
const path = require("path");

const PROJECT_ROOT = path.join(__dirname, "..");
const YAML_DIR = path.join(__dirname, ".generated/countries");
const COUNTRY_CONFIGS_DIR = path.join(__dirname, "country-data");

function processOne(slug, cfg) {
  const md = path.join(PROJECT_ROOT, "src/content/rule", cfg.pageDir, "_index.ja.md");
  if (!fs.existsSync(md)) return { skipped: `no md: ${cfg.pageDir}` };

  const content = fs.readFileSync(md, "utf8");
  const fmMatch = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!fmMatch) return { skipped: "no frontmatter" };
  const fm = fmMatch[1];
  if (/^municipalities:/m.test(fm)) {
    return { skipped: "already has municipalities" };
  }

  const yamlPath = path.join(YAML_DIR, `${slug}.muni.yaml`);
  if (!fs.existsSync(yamlPath)) {
    return { skipped: "no generated yaml" };
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

const configs = fs
  .readdirSync(COUNTRY_CONFIGS_DIR)
  .filter((f) => f.endsWith(".cjs"))
  .map((f) => {
    const slug = f.replace(/\.cjs$/, "");
    return { slug, cfg: require(path.join(COUNTRY_CONFIGS_DIR, f)) };
  });

let injected = 0, skipped = 0;
for (const { slug, cfg } of configs) {
  const r = processOne(slug, cfg);
  if (r.wrote) {
    console.log(`✓ ${slug.padEnd(20)} ← ${path.relative(PROJECT_ROOT, r.wrote)}`);
    injected++;
  } else {
    console.log(`  ${slug.padEnd(20)} skipped (${r.skipped})`);
    skipped++;
  }
}
console.log(`\nInjected: ${injected}, Skipped: ${skipped}`);
