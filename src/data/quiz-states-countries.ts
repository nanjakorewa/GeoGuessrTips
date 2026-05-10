/**
 * Country metadata for the state-quiz feature.
 *
 * Used by the dynamic routes under /quiz/states/ to enumerate which
 * countries to generate quiz pages for, and to render continent listings.
 *
 * Each entry refers to a rule collection entry by `pageDir` — that entry's
 * frontmatter `municipalities` block is the source of truth for the quiz
 * data (state list, SVG path, title) and the `flag` field.
 */

export interface QuizCountry {
  /** URL slug under /quiz/states/{continent}/ */
  slug: string;
  /** Continent slug — must match a key in CONTINENTS below */
  continent: string;
  /** Rule entry path: rule/{pageDir}/_index.ja.md */
  pageDir: string;
  /** Display name in Japanese (used in cards & breadcrumbs) */
  ja: string;
}

export const COUNTRIES: QuizCountry[] = [
  // North America
  { slug: "usa",        continent: "n_america", pageDir: "n_america/usa",       ja: "アメリカ" },
  { slug: "canada",     continent: "n_america", pageDir: "n_america/canada",    ja: "カナダ" },
  { slug: "mexico",     continent: "n_america", pageDir: "n_america/mexico",    ja: "メキシコ" },

  // Central / South America
  { slug: "brazil",     continent: "cs_america", pageDir: "cs_america/brazil",   ja: "ブラジル" },
  { slug: "argentina",  continent: "cs_america", pageDir: "cs_america/argentina",ja: "アルゼンチン" },
  { slug: "chile",      continent: "cs_america", pageDir: "cs_america/chile",    ja: "チリ" },
  { slug: "peru",       continent: "cs_america", pageDir: "cs_america/peru",     ja: "ペルー" },
  { slug: "colombia",   continent: "cs_america", pageDir: "cs_america/colombia", ja: "コロンビア" },

  // Europe
  { slug: "germany",    continent: "europe",     pageDir: "europe/germany",     ja: "ドイツ" },
  { slug: "france",     continent: "europe",     pageDir: "europe/france",      ja: "フランス" },
  { slug: "italy",      continent: "europe",     pageDir: "europe/italy",       ja: "イタリア" },
  { slug: "spain",      continent: "europe",     pageDir: "europe/spain",       ja: "スペイン" },
  { slug: "switzerland",continent: "europe",     pageDir: "europe/switzerland", ja: "スイス" },
  { slug: "netherlands",continent: "europe",     pageDir: "europe/netherlands", ja: "オランダ" },
  { slug: "belgium",    continent: "europe",     pageDir: "europe/belgium",     ja: "ベルギー" },
  { slug: "austria",    continent: "europe",     pageDir: "europe/austria",     ja: "オーストリア" },
  { slug: "poland",     continent: "europe",     pageDir: "europe/poland",      ja: "ポーランド" },
  { slug: "portugal",   continent: "europe",     pageDir: "europe/portugal",    ja: "ポルトガル" },
  { slug: "czechia",    continent: "europe",     pageDir: "europe/czechia",     ja: "チェコ" },
  { slug: "slovakia",   continent: "europe",     pageDir: "europe/slovakia",    ja: "スロバキア" },
  { slug: "hungary",    continent: "europe",     pageDir: "europe/hungary",     ja: "ハンガリー" },
  { slug: "romania",    continent: "europe",     pageDir: "europe/romania",     ja: "ルーマニア" },
  { slug: "bulgaria",   continent: "europe",     pageDir: "europe/bulgaria",    ja: "ブルガリア" },
  { slug: "croatia",    continent: "europe",     pageDir: "europe/croatia",     ja: "クロアチア" },
  { slug: "serbia",     continent: "europe",     pageDir: "europe/serbia",      ja: "セルビア" },
  { slug: "bosnia",     continent: "europe",     pageDir: "europe/bosnah",      ja: "ボスニア・ヘルツェゴビナ" },
  { slug: "montenegro", continent: "europe",     pageDir: "europe/montenegro",  ja: "モンテネグロ" },
  { slug: "albania",    continent: "europe",     pageDir: "europe/albania",     ja: "アルバニア" },
  { slug: "moldova",    continent: "europe",     pageDir: "europe/moldova",     ja: "モルドバ" },
  { slug: "ukraine",    continent: "europe",     pageDir: "europe/ukraine",     ja: "ウクライナ" },
  { slug: "belarus",    continent: "europe",     pageDir: "europe/belarus",     ja: "ベラルーシ" },
  { slug: "denmark",    continent: "europe",     pageDir: "europe/denmark",     ja: "デンマーク" },
  { slug: "iceland",    continent: "europe",     pageDir: "europe/iceland",     ja: "アイスランド" },
  { slug: "sweden",     continent: "europe",     pageDir: "europe/sweden",      ja: "スウェーデン" },
  { slug: "norway",     continent: "europe",     pageDir: "europe/norway",      ja: "ノルウェー" },
  { slug: "finland",    continent: "europe",     pageDir: "europe/finland",     ja: "フィンランド" },
  { slug: "greece",     continent: "europe",     pageDir: "europe/greece",      ja: "ギリシャ" },
  { slug: "estonia",    continent: "europe",     pageDir: "europe/baltic-state/estonia",   ja: "エストニア" },
  { slug: "lithuania",  continent: "europe",     pageDir: "europe/baltic-state/lithuania", ja: "リトアニア" },
  { slug: "ireland",    continent: "europe",     pageDir: "europe/ireland",     ja: "アイルランド" },

  // Asia
  { slug: "korea",      continent: "asia",       pageDir: "asia/korea",         ja: "韓国" },
  { slug: "china",      continent: "asia",       pageDir: "asia/china",         ja: "中国" },
  { slug: "india",      continent: "asia",       pageDir: "asia/india",         ja: "インド" },
  { slug: "taiwan",     continent: "asia",       pageDir: "asia/taiwan",        ja: "台湾" },
  { slug: "indonesia",  continent: "asia",       pageDir: "asia/indonesia",     ja: "インドネシア" },
  { slug: "vietnam",    continent: "asia",       pageDir: "asia/vietnum",       ja: "ベトナム" },
  { slug: "thailand",   continent: "asia",       pageDir: "asia/thai",          ja: "タイ" },
  { slug: "philippines",continent: "asia",       pageDir: "asia/philippines",   ja: "フィリピン" },
  { slug: "malaysia",   continent: "asia",       pageDir: "asia/malaysia",      ja: "マレーシア" },
  { slug: "cambodia",   continent: "asia",       pageDir: "asia/cambodia",      ja: "カンボジア" },
  { slug: "myanmar",    continent: "asia",       pageDir: "asia/myanmar",       ja: "ミャンマー" },
  { slug: "laos",       continent: "asia",       pageDir: "asia/laos",          ja: "ラオス" },
  { slug: "mongolia",   continent: "asia",       pageDir: "asia/mongolia",      ja: "モンゴル" },
  { slug: "nepal",      continent: "asia",       pageDir: "asia/nepal",         ja: "ネパール" },
  { slug: "bangladesh", continent: "asia",       pageDir: "asia/bangladesh",    ja: "バングラデシュ" },
  { slug: "srilanka",   continent: "asia",       pageDir: "asia/srilanka",      ja: "スリランカ" },
  { slug: "pakistan",   continent: "asia",       pageDir: "asia/pakistan",      ja: "パキスタン" },
  { slug: "kazakhstan", continent: "asia",       pageDir: "asia/kazakhstan",    ja: "カザフスタン" },
  { slug: "uzbekistan", continent: "asia",       pageDir: "asia/uzbekistan",    ja: "ウズベキスタン" },
  { slug: "kyrgyzstan", continent: "asia",       pageDir: "asia/kyrgyzstan",    ja: "キルギス" },
  { slug: "russia",     continent: "asia",       pageDir: "asia/russia",        ja: "ロシア" },

  // Oceania
  { slug: "australia",   continent: "oceania",   pageDir: "oceania/australia",   ja: "オーストラリア" },
  { slug: "new-zealand", continent: "oceania",   pageDir: "oceania/new-zealand", ja: "ニュージーランド" },

  // Middle East
  { slug: "saudiarabia",continent: "middle_east", pageDir: "middle_east/saudiarabia", ja: "サウジアラビア" },
  { slug: "turkey",     continent: "middle_east", pageDir: "middle_east/turkey",      ja: "トルコ" },

  // Africa
  { slug: "south-africa",continent: "africa",     pageDir: "africa/south-africa",ja: "南アフリカ" },
  { slug: "egypt",      continent: "africa",     pageDir: "africa/egypt",       ja: "エジプト" },
  { slug: "nigeria",    continent: "africa",     pageDir: "africa/nigeria",     ja: "ナイジェリア" },
];

export interface QuizContinent {
  slug: string;
  ja: string;
  emoji: string;
  desc: string;
}

export const CONTINENTS: QuizContinent[] = [
  { slug: "n_america",   ja: "北米",       emoji: "🌎", desc: "アメリカ・カナダ・メキシコ" },
  { slug: "cs_america",  ja: "中南米",     emoji: "🌎", desc: "ブラジル・アルゼンチン ほか" },
  { slug: "europe",      ja: "ヨーロッパ", emoji: "🌍", desc: "ドイツ・フランス・イタリア ほか" },
  { slug: "asia",        ja: "アジア",     emoji: "🌏", desc: "韓国・中国・台湾 ほか" },
  { slug: "oceania",     ja: "オセアニア", emoji: "🌏", desc: "オーストラリア・ニュージーランド" },
  { slug: "middle_east", ja: "中東",       emoji: "🌍", desc: "サウジアラビア・トルコ" },
  { slug: "africa",      ja: "アフリカ",   emoji: "🌍", desc: "南アフリカ・エジプト ほか" },
];

export const CONTINENT_BY_SLUG: Record<string, QuizContinent> = Object.fromEntries(
  CONTINENTS.map((c) => [c.slug, c])
);

export function countriesByContinent(continent: string): QuizCountry[] {
  return COUNTRIES.filter((c) => c.continent === continent);
}
