/**
 * stateflags shortcode - US state flag grid
 *
 * Hugo:   {{% stateflags US-ME US-NH US-VT %}}
 * Output: a responsive grid of state flag SVGs (from /flags/US-XX.svg)
 *         with localized state-name labels.
 *
 * Args: a list of ISO 3166-2:US codes (e.g. "US-CA"). Order is preserved.
 *
 * Flag assets live in public/flags/US-XX.svg and were collected from
 * Wikimedia Commons. Names are localized for the four content languages
 * (en/es/id/ja); any code not in the table falls back to its bare code.
 */
import type { Language } from "../../../lib/i18n-utils.ts";

/**
 * Localized display names per ISO 3166-2:US code.
 * Only the languages with US region pages (en/es/id/ja) are populated;
 * any other language falls back to English, then to the bare code.
 */
const STATE_NAMES: Record<string, Partial<Record<Language, string>>> = {
  "US-AL": { en: "Alabama", es: "Alabama", id: "Alabama", ja: "アラバマ州" },
  "US-AK": { en: "Alaska", es: "Alaska", id: "Alaska", ja: "アラスカ州" },
  "US-AZ": { en: "Arizona", es: "Arizona", id: "Arizona", ja: "アリゾナ州" },
  "US-AR": { en: "Arkansas", es: "Arkansas", id: "Arkansas", ja: "アーカンソー州" },
  "US-CA": { en: "California", es: "California", id: "California", ja: "カリフォルニア州" },
  "US-CO": { en: "Colorado", es: "Colorado", id: "Colorado", ja: "コロラド州" },
  "US-CT": { en: "Connecticut", es: "Connecticut", id: "Connecticut", ja: "コネチカット州" },
  "US-DE": { en: "Delaware", es: "Delaware", id: "Delaware", ja: "デラウェア州" },
  "US-DC": { en: "District of Columbia", es: "Distrito de Columbia", id: "District of Columbia", ja: "コロンビア特別区" },
  "US-FL": { en: "Florida", es: "Florida", id: "Florida", ja: "フロリダ州" },
  "US-GA": { en: "Georgia", es: "Georgia", id: "Georgia", ja: "ジョージア州" },
  "US-HI": { en: "Hawaii", es: "Hawái", id: "Hawaii", ja: "ハワイ州" },
  "US-ID": { en: "Idaho", es: "Idaho", id: "Idaho", ja: "アイダホ州" },
  "US-IL": { en: "Illinois", es: "Illinois", id: "Illinois", ja: "イリノイ州" },
  "US-IN": { en: "Indiana", es: "Indiana", id: "Indiana", ja: "インディアナ州" },
  "US-IA": { en: "Iowa", es: "Iowa", id: "Iowa", ja: "アイオワ州" },
  "US-KS": { en: "Kansas", es: "Kansas", id: "Kansas", ja: "カンザス州" },
  "US-KY": { en: "Kentucky", es: "Kentucky", id: "Kentucky", ja: "ケンタッキー州" },
  "US-LA": { en: "Louisiana", es: "Luisiana", id: "Louisiana", ja: "ルイジアナ州" },
  "US-ME": { en: "Maine", es: "Maine", id: "Maine", ja: "メイン州" },
  "US-MD": { en: "Maryland", es: "Maryland", id: "Maryland", ja: "メリーランド州" },
  "US-MA": { en: "Massachusetts", es: "Massachusetts", id: "Massachusetts", ja: "マサチューセッツ州" },
  "US-MI": { en: "Michigan", es: "Michigan", id: "Michigan", ja: "ミシガン州" },
  "US-MN": { en: "Minnesota", es: "Minnesota", id: "Minnesota", ja: "ミネソタ州" },
  "US-MS": { en: "Mississippi", es: "Misisipi", id: "Mississippi", ja: "ミシシッピ州" },
  "US-MO": { en: "Missouri", es: "Misuri", id: "Missouri", ja: "ミズーリ州" },
  "US-MT": { en: "Montana", es: "Montana", id: "Montana", ja: "モンタナ州" },
  "US-NE": { en: "Nebraska", es: "Nebraska", id: "Nebraska", ja: "ネブラスカ州" },
  "US-NV": { en: "Nevada", es: "Nevada", id: "Nevada", ja: "ネバダ州" },
  "US-NH": { en: "New Hampshire", es: "New Hampshire", id: "New Hampshire", ja: "ニューハンプシャー州" },
  "US-NJ": { en: "New Jersey", es: "Nueva Jersey", id: "New Jersey", ja: "ニュージャージー州" },
  "US-NM": { en: "New Mexico", es: "Nuevo México", id: "New Mexico", ja: "ニューメキシコ州" },
  "US-NY": { en: "New York", es: "Nueva York", id: "New York", ja: "ニューヨーク州" },
  "US-NC": { en: "North Carolina", es: "Carolina del Norte", id: "Carolina Utara", ja: "ノースカロライナ州" },
  "US-ND": { en: "North Dakota", es: "Dakota del Norte", id: "Dakota Utara", ja: "ノースダコタ州" },
  "US-OH": { en: "Ohio", es: "Ohio", id: "Ohio", ja: "オハイオ州" },
  "US-OK": { en: "Oklahoma", es: "Oklahoma", id: "Oklahoma", ja: "オクラホマ州" },
  "US-OR": { en: "Oregon", es: "Oregón", id: "Oregon", ja: "オレゴン州" },
  "US-PA": { en: "Pennsylvania", es: "Pensilvania", id: "Pennsylvania", ja: "ペンシルベニア州" },
  "US-RI": { en: "Rhode Island", es: "Rhode Island", id: "Rhode Island", ja: "ロードアイランド州" },
  "US-SC": { en: "South Carolina", es: "Carolina del Sur", id: "Carolina Selatan", ja: "サウスカロライナ州" },
  "US-SD": { en: "South Dakota", es: "Dakota del Sur", id: "Dakota Selatan", ja: "サウスダコタ州" },
  "US-TN": { en: "Tennessee", es: "Tennessee", id: "Tennessee", ja: "テネシー州" },
  "US-TX": { en: "Texas", es: "Texas", id: "Texas", ja: "テキサス州" },
  "US-UT": { en: "Utah", es: "Utah", id: "Utah", ja: "ユタ州" },
  "US-VT": { en: "Vermont", es: "Vermont", id: "Vermont", ja: "バーモント州" },
  "US-VA": { en: "Virginia", es: "Virginia", id: "Virginia", ja: "バージニア州" },
  "US-WA": { en: "Washington", es: "Washington", id: "Washington", ja: "ワシントン州" },
  "US-WV": { en: "West Virginia", es: "Virginia Occidental", id: "Virginia Barat", ja: "ウェストバージニア州" },
  "US-WI": { en: "Wisconsin", es: "Wisconsin", id: "Wisconsin", ja: "ウィスコンシン州" },
  "US-WY": { en: "Wyoming", es: "Wyoming", id: "Wyoming", ja: "ワイオミング州" },
};

/** Heading shown above the flag grid, per language. */
const HEADING: Record<Language, string> = {
  ja: "州の旗",
  en: "State Flags",
  es: "Banderas de los estados",
  id: "Bendera Negara Bagian",
  pt: "Bandeiras dos Estados",
};

export function stateflagsHandler(args: string[], lang: Language): string {
  const codes = args.filter((c) => /^US-[A-Z]{2}$/.test(c));
  if (codes.length === 0) return "";

  const heading = HEADING[lang] ?? HEADING.ja;

  const cells = codes
    .map((code) => {
      const name = STATE_NAMES[code]?.[lang] ?? STATE_NAMES[code]?.en ?? code;
      return (
        `<figure class="state-flag-item">` +
        `<img src="/flags/${code}.svg" alt="${name}" class="state-flag-img" loading="lazy" decoding="async" width="120" height="80"/>` +
        `<figcaption class="state-flag-name">${name}</figcaption>` +
        `</figure>`
      );
    })
    .join("\n");

  return (
    `<div class="state-flags-block">\n` +
    `<h4 class="section-title">${heading}</h4>\n` +
    `<div class="state-flags-grid">\n${cells}\n</div>\n` +
    `</div>`
  );
}
