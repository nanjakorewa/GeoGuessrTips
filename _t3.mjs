import { processInlineShortcode } from "./src/plugins/remark-hugo-shortcodes/parser.ts";
import { stateflagsHandler } from "./src/plugins/remark-hugo-shortcodes/shortcodes/stateflags.ts";
for (const lang of ["ja","en","es","id","pt"]) {
  const h=stateflagsHandler(["US-WV","US-NY","US-DC"], lang);
  console.log(lang, "| imgs:", (h.match(/US-[A-Z]{2}\.svg/g)||[]).length,
    "| heading:", (h.match(/section-title">([^<]+)</)||[])[1],
    "| caps:", (h.match(/figcaption[^>]*>([^<]+)</g)||[]).map(s=>s.replace(/.*>([^<]+)<.*/,"$1")).join(","));
}
const md="x\n\n{{% stateflags US-CA US-OR %}}\n\ny";
const out=processInlineShortcode(md,"stateflags",(a)=>stateflagsHandler(a,"ja"));
console.log("integration grid+consumed:", out.includes("state-flags-grid") && !out.includes("{{%"));
