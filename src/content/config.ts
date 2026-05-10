import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Include _index.*.md files (Hugo convention) that Astro normally skips
const mdPattern = "**/*.md";

/**
 * Custom ID generator that preserves language code with a dot separator.
 * Default glob loader strips dots, turning "_index.ja" into "_indexja".
 * This generates IDs like "asia/japan/_index.ja" instead.
 */
function generateId({ entry }: { entry: string }): string {
  // entry is like "asia/japan/_index.ja.md" - strip .md extension only
  return entry.replace(/\.md$/, "");
}

// --- Shared base fields ---
const baseFields = {
  title: z.string(),
  subtitle: z.string().optional(),
  date: z.coerce.date().optional(),
  lastmod: z.coerce.date().optional(),
  weight: z.number().optional().default(99),
  draft: z.boolean().optional().default(false),
  keywords: z.array(z.string()).optional().default([]),
  sections: z.array(z.string()).optional().default([]),
  description: z.string().optional(),
  type: z.string().optional(),
  card_image: z.string().optional(),
};

// --- Country/region guide pages (content/rule/) ---
const ruleCollection = defineCollection({
  loader: glob({ pattern: mdPattern, base: "src/content/rule", generateId }),
  schema: z.object({
    ...baseFields,

    // Visual
    bg: z.string().optional(),
    flag: z.string().optional(),
    flag_height: z.string().optional(),

    // Title modifications
    title_prefix: z.string().optional(),
    title_suffix: z.string().optional(),
    additional_icon: z.string().optional(),

    // Feature toggles
    jetro_detail: z.boolean().optional().default(false),
    jogmec_detail: z.boolean().optional().default(false),
    plonkit: z.boolean().optional().default(false),
    plonkit_url: z.string().optional(),
    dont_show_usda: z.boolean().optional().default(false),
    no_jetro: z.boolean().optional().default(false),
    no_detaile_info: z.boolean().optional().default(false),
    no_rel_site: z.boolean().optional().default(false),

    // Icon indicators
    is_has_distinctive_googlecar: z.boolean().optional().default(false),
    is_has_many_trekker: z.boolean().optional().default(false),
    is_has_distinctive_bollard: z.boolean().optional().default(false),
    is_unofficial: z.boolean().optional().default(false),
    is_pref: z.boolean().optional().default(false),
    hidden: z.boolean().optional().default(false),

    // Similar countries
    sc_title: z.string().optional(),
    sc: z
      .array(z.tuple([z.string(), z.string()]))
      .optional(),

    // Maps
    map_title: z.string().optional(),
    maps: z
      .array(z.tuple([z.string(), z.string()]))
      .optional(),
    mapName: z.string().optional(),
    map_index: z.string().optional(),
    additional_map_class: z.string().optional(),

    // OSM hero map（産業ページと同じ仕組み）— 国別ページ上部に
    // 「タイトル＋国旗 / OSM 地図」を 2 カラム表示するためのフィールド
    mapProvider: z.enum(["osm"]).optional(),
    mapCenter: z.tuple([z.number(), z.number()]).optional(),
    mapZoom: z.number().optional(),
    mapPins: z.array(z.object({
      lat: z.number(),
      lng: z.number(),
      label: z.string(),
      note: z.string().optional(),
      type: z.string().optional(),
      link: z.string().optional(),
    })).optional(),
    mapRegions: z.object({
      source: z.string(),
      topojsonObject: z.string().optional(),
      property: z.string(),
      groups: z.array(z.object({
        name: z.string(),
        color: z.string(),
        regions: z.array(z.string()),
        note: z.string().optional(),
      })),
      legendTitle: z.string().optional(),
    }).optional(),
    /** ヒーロー下に表示するスライドショー画像のパス配列（public からの絶対 URL） */
    heroGallery: z.array(z.string()).optional(),

    // Linked content
    add_rule_link: z.boolean().optional().default(false),
    add_flagindex: z.boolean().optional().default(false),

    // Special page flags
    import_jquery_36: z.boolean().optional().default(false),
    use_polish_font: z.boolean().optional().default(false),
    sumnail_mk: z.boolean().optional().default(false),

    // SEO overrides
    seo_title: z.string().optional(),
    seo_description: z.string().optional(),
    og_image: z.string().optional(),
    social_image: z.string().optional(),
    image_alt: z.string().optional(),
    canonical: z.string().optional(),
    robots: z.string().optional(),
    noindex: z.boolean().optional().default(false),

    // Country/region feature highlights
    features: z
      .array(
        z.object({
          text: z.string(),
          ref: z.string().optional(),
        })
      )
      .optional(),

    // Structured data: FAQ
    faq: z
      .array(
        z.object({
          question: z.string(),
          answer: z.string(),
        })
      )
      .optional(),

    // Structured data: Videos
    videos: z
      .array(
        z.object({
          id: z.string().optional(),
          title: z.string(),
          description: z.string().optional(),
          uploadDate: z.string().optional(),
          thumbnailUrl: z.string().optional(),
          embedUrl: z.string().optional(),
          contentUrl: z.string().optional(),
          short: z.boolean().optional().default(false),
        })
      )
      .optional(),

    // Navigation
    page_no: z.string().optional(),
    menuTitle: z.string().optional(),
    Pre: z.string().optional(),
    Post: z.string().optional(),
    head: z.string().optional(),

    // Related industry pages (cross-collection links)
    relatedIndustry: z.array(z.string()).optional(),

    // Page-level references list. When present, the layout renders the list
    // below the sibling-countries block and the body's {{% cite "key" %}}
    // markers are numbered by the order of appearance in this array.
    references: z.array(z.object({
      key: z.string(),
      text: z.string(),
    })).optional(),

    // Prefecture basic-info card section. When present (typically only on
    // prefecture pages with is_pref: true), the remark plugin renders an
    // HTML block immediately before <div id="corp-desc">. All sub-fields
    // are optional so each prefecture can fill in incrementally.
    prefInfo: z.object({
      population: z.string().optional(),
      populationRank: z.string().optional(),
      populationCite: z.string().optional(),
      area: z.string().optional(),
      areaRank: z.string().optional(),
      areaCite: z.string().optional(),
      capital: z.string().optional(),
      capitalNote: z.string().optional(),
      capitalCite: z.string().optional(),
      highlights: z.array(z.object({
        label: z.string(),
        value: z.string(),
        rank: z.string().optional(),
        cite: z.string().optional(),
      })).optional(),
      geography: z.string().optional(),
      economy: z.string().optional(),
      relatedIndustry: z.array(z.object({
        url: z.string(),
        title: z.string(),
        note: z.string().optional(),
      })).optional(),
    }).optional(),

    // Subdivision (自治体・行政区分) list + boundary SVG. Rendered between
    // the prefInfo block and the "代表的な企業の説明" table.
    // - On Japanese prefecture pages: market-cities/towns/villages (市町村)
    // - On country pages: first-level admin divisions (provinces / states)
    municipalities: z.object({
      svg: z.string(),
      /**
       * Optional override for the section heading. Defaults to
       * "{title}の自治体" / "Municipalities of {title}".
       * For multilingual support, supply an object keyed by language.
       */
      title: z.union([
        z.string(),
        z.record(z.string(), z.string()),
      ]).optional(),
      asOf: z.string().optional(),
      source: z.string().optional(),
      sourceUrl: z.string().optional(),
      list: z.array(z.object({
        code: z.string(),
        /**
         * Display name in the file's locale. For multilingual support,
         * supply `nameI18n` with translations keyed by language code; the
         * renderer prefers `nameI18n[lang]` over `name` when available.
         */
        name: z.string(),
        nameI18n: z.record(z.string(), z.string()).optional(),
        /**
         * Per-row category. Japan uses city/town/village/ward; other
         * countries accept arbitrary strings (e.g. "metropolitan_city",
         * "state", "territory"). Unknown values render with the raw value
         * as the label.
         */
        type: z.string().optional(),
        note: z.string().optional(),
        noteI18n: z.record(z.string(), z.string()).optional(),
      })),
    }).optional(),

    // Misc
    bgf: z.boolean().optional().default(false),
    author: z.string().optional(),
    authors: z.array(z.string()).optional(),
    tags: z.array(z.string()).optional(),
  }),
});

// --- Quiz pages (content/quiz/) ---
const quizCollection = defineCollection({
  loader: glob({ pattern: mdPattern, base: "src/content/quiz", generateId }),
  schema: z.object({
    ...baseFields,
    quiz_suffix: z.string().optional(),
    pagetype: z.string().optional(),
    difficulty: z.number().optional(),
    quiz_options: z.array(z.string()).optional(),
    quiz_answer: z.number().optional(),
    quiz_map_url: z.string().optional(),
    quiz_question: z.string().optional(),
    quiz_image: z.string().optional(),
    quiz_hint: z.string().optional(),
    quiz_group: z.string().optional(),
    quiz_group_title: z.string().optional(),
    quiz_group_description: z.string().optional(),
    quiz_group_icon: z.string().optional(),
    quiz_group_image: z.string().optional(),
  }),
});

// --- About pages (content/about/) ---
const aboutCollection = defineCollection({
  loader: glob({ pattern: mdPattern, base: "src/content/about", generateId }),
  schema: z.object({
    ...baseFields,
  }),
});

// --- Web resource pages (content/web/) ---
const webCollection = defineCollection({
  loader: glob({ pattern: mdPattern, base: "src/content/web", generateId }),
  schema: z.object({
    ...baseFields,
    sumnail_mk: z.boolean().optional().default(false),
    mapName: z.string().optional(),
    map_index: z.string().optional(),
    additional_map_class: z.string().optional(),
    import_jquery_36: z.boolean().optional().default(false),
  }),
});

// --- Industry zone pages (content/industry/) ---
const industryCollection = defineCollection({
  loader: glob({ pattern: mdPattern, base: "src/content/industry", generateId }),
  schema: z.object({
    ...baseFields,
    mapName: z.string().optional(),
    /** mapName があっても地図表示を抑止するフラグ（ピンが1つも載らないページ用） */
    showMap: z.boolean().optional(),
    /** "osm" を指定すると Leaflet + OpenStreetMap タイルで描画する */
    mapProvider: z.enum(["osm"]).optional(),
    /** OSM 地図の初期中心 [lat, lng]（省略時はピンに合わせて自動フィット） */
    mapCenter: z.tuple([z.number(), z.number()]).optional(),
    /** OSM 地図の初期ズーム（省略時はピンに合わせて自動フィット） */
    mapZoom: z.number().optional(),
    map_index: z.string().optional(),
    additional_map_class: z.string().optional(),
    noindex: z.boolean().optional().default(false),
    seo_title: z.string().optional(),
    og_image: z.string().optional(),
    highlightStates: z.array(z.string()).optional(),
    highlightColor: z.string().optional(),
    mapPins: z.array(z.object({
      lat: z.number(),
      lng: z.number(),
      label: z.string(),
      note: z.string().optional(),
      type: z.string().optional(),
      link: z.string().optional(),
    })).optional(),
    /** OSM 地図上に色分けポリゴン（コロプレス）を重ねる設定 */
    mapRegions: z.object({
      /** TopoJSON または GeoJSON ファイルのパス（/public からの絶対パス） */
      source: z.string(),
      /** TopoJSON の場合、objects 配下のキー名（例: "japan"） */
      topojsonObject: z.string().optional(),
      /** features の properties から色分けキーを取り出すプロパティ名（例: "nam"） */
      property: z.string(),
      /** ポリゴングループ定義 */
      groups: z.array(z.object({
        name: z.string(),
        color: z.string(),
        regions: z.array(z.string()),
        note: z.string().optional(),
      })),
      /** 凡例タイトル */
      legendTitle: z.string().optional(),
    }).optional(),
    galleryDir: z.string().optional(),
  }),
});

export const collections = {
  rule: ruleCollection,
  quiz: quizCollection,
  about: aboutCollection,
  web: webCollection,
  industry: industryCollection,
};
