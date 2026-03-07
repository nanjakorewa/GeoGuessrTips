/**
 * rd shortcode - Road Sign Display
 *
 * Hugo:   {{% rd asia bangladesh small %}}
 * Output: <h4> + road sign images from r/ directory
 *
 * Reads images from filesystem at build time.
 * Args: [area, region, size?, license?, licenseUrl?]
 */
import fs from "node:fs";
import path from "node:path";
import type { Language } from "../../../lib/i18n-utils.ts";
import { t } from "../../../i18n/translations.ts";

export function rdHandler(args: string[], lang: Language): string {
  const area = args[0] || "";
  const region = args[1] || "";
  const size = args[2] || "normal";
  const license = args[3] || "";
  const licenseUrl = args[4] || "";

  const dirPath = path.resolve("src/content/rule", area, region, "r");

  if (!fs.existsSync(dirPath)) return "";

  const files = fs.readdirSync(dirPath).filter((f) =>
    /\.(jpg|jpeg|png|svg|gif|webp)$/i.test(f)
  );

  if (files.length === 0) return "";

  const heading = t("findable-road-sign", lang);

  const images = files
    .map((f) => {
      const src =
        lang === "ja"
          ? `./r/${f}`
          : `https://geopinning.space/rule/${area}/${region}/r/${f}`;
      return `<img src="${src}" class="${size}"/>`;
    })
    .join("\n");

  let licenseHtml = "";
  if (license === "OGL") {
    licenseHtml = `<div class="sign-area sign-area-clickable"><p><a href="http://nationalarchives.gov.uk/doc/open-government-licence/version/1/">Open Government Licence v1.0(Link)</a></p></div>`;
  } else if (license) {
    licenseHtml = `<div class="sign-area sign-area-clickable"><p>${license} <a href="${licenseUrl}">Wikimedia Commons(Link)</a></p></div>`;
  }

  return `<h4 class="section-title">${heading}</h4>\n<div class="sign-area">\n${images}\n${licenseHtml}\n</div>`;
}
