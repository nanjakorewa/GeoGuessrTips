/**
 * Replace fragile reference URLs with stable canonical URLs.
 * Idempotent — safe to re-run.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const RULE_BASE = path.resolve(__dirname, "..", "src", "content", "rule", "asia", "japan");

const REPLACEMENTS = [
  // The year-specific 人口推計 path went 404 in many cases; canonical hub:
  ["https://www.stat.go.jp/data/jinsui/2024np/index.html", "https://www.stat.go.jp/data/jinsui/"],
  // MENCHO-title.htm — typo of `MENCHO.html` (no -title)
  ["https://www.gsi.go.jp/KOKUJYOHO/MENCHO-title.htm", "https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html"],
];

function walk(dir) {
  const out = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...walk(p));
    else if (entry.name === "_index.ja.md") out.push(p);
  }
  return out;
}

let touched = 0;
for (const fp of walk(RULE_BASE)) {
  let c = fs.readFileSync(fp, "utf-8");
  let changed = false;
  for (const [from, to] of REPLACEMENTS) {
    if (c.includes(from)) {
      c = c.split(from).join(to);
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(fp, c, "utf-8");
    touched++;
    console.log("Updated:", path.relative(RULE_BASE, fp));
  }
}
console.log(`Done — ${touched} file(s) updated.`);
