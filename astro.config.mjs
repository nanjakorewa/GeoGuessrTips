import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import remarkAbsoluteImages from "./src/plugins/remark-absolute-images.ts";
import remarkImageOptimize from "./src/plugins/remark-image-optimize.ts";
import remarkHugoShortcodes from "./src/plugins/remark-hugo-shortcodes/index.ts";

export default defineConfig({
  site: "https://geopinning.space",
  output: "static",

  integrations: [
    sitemap({
      filter: (page) => !page.includes("/draft/"),
    }),
  ],

  markdown: {
    remarkPlugins: [
      remarkHugoShortcodes,
      remarkAbsoluteImages,
      remarkImageOptimize,
    ],
  },

  build: {
    format: "directory",
  },

  trailingSlash: "always",
});
