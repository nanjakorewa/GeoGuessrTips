import { stateflagsHandler } from "./src/plugins/remark-hugo-shortcodes/shortcodes/stateflags.ts";
const codes=["US-ME","US-NH","US-VT","US-MA","US-RI","US-CT","US-NY","US-NJ","US-PA","US-WV"];
for (const lang of ["ja","en","es","id"]) {
  const html=stateflagsHandler(codes, lang);
  const imgs=(html.match(/US-[A-Z]{2}\.svg/g)||[]).length;
  console.log(lang, "imgs:", imgs, "| first caption:", (html.match(/figcaption[^>]*>([^<]+)</)||[])[1]);
}
console.log("empty:", JSON.stringify(stateflagsHandler([], "ja")));
console.log("filters junk:", (stateflagsHandler(["US-CA","garbage"],"en").match(/US-[A-Z]{2}\.svg/g)||[]));
