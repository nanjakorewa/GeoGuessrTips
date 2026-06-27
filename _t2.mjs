import { processInlineShortcode } from "./src/plugins/remark-hugo-shortcodes/parser.ts";
import { stateflagsHandler } from "./src/plugins/remark-hugo-shortcodes/shortcodes/stateflags.ts";
const md = `intro\n\n{{% stateflags US-MT US-WY US-ID %}}\n\nmore`;
const out = processInlineShortcode(md, "stateflags", (a)=>stateflagsHandler(a,"ja"));
console.log("contains grid:", out.includes("state-flags-grid"));
console.log("imgs:", (out.match(/US-[A-Z]{2}\.svg/g)||[]));
console.log("shortcode consumed:", !out.includes("{{%"));
