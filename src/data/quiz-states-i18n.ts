/**
 * Translations for the state-quiz UI (hub, continent, country, Japan
 * prefecture pages). Subdivision names themselves come from the rule
 * collection's `nameI18n` field on each list item.
 */
import type { Language } from "@lib/i18n-utils";
import { DEFAULT_LANG } from "@lib/i18n-utils";

export interface QuizStatesI18n {
  hub: {
    title: string;
    pageTitle: string;
    pageDescription: string;
    lead: string;
  };
  continent: {
    titleFmt: (continent: string) => string;
    pageTitleFmt: (continent: string) => string;
    pageDescriptionFmt: (continent: string) => string;
    lead: string;
    /** Footer label, e.g. "States/regions: 13" */
    countLabelFmt: (n: number) => string;
  };
  japanHub: {
    title: string;
    pageTitle: string;
    pageDescription: string;
    lead: string;
    countLabelFmt: (n: number) => string;
  };
  country: {
    titleFmt: (country: string) => string;
    pageTitleFmt: (country: string) => string;
    pageDescriptionFmt: (country: string) => string;
    prompt: string;
  };
  prefecture: {
    titleFmt: (pref: string) => string;
    pageTitleFmt: (pref: string) => string;
    pageDescriptionFmt: (pref: string) => string;
    prompt: string;
  };
  scores: {
    streak: string;     // "連続"
    best: string;       // "最高"
    correct: string;    // (label like "○")
    wrong: string;      // (label like "✕")
    remaining: string;  // "残り"
  };
  question: {
    loading: string;
    finished: string;
  };
  feedback: {
    /** Label preceding the clicked-wrong place name. e.g. "クリック:" */
    clicked: string;
  };
  progress: {
    ariaLabel: string;
  };
  buttons: {
    skip: string;
    restart: string;
    cta: string;        // "クイズに挑戦"
    memorize: string;   // "暗記モード"
  };
  memorize: {
    /** Prompt shown in the question card while memorize mode is on. */
    prompt: string;
    /** Hint subtitle inside the question card, explaining the mode. */
    hint: string;
    /** Empty placeholder when nothing is hovered yet. */
    emptyName: string;
  };
  list: {
    /** Title above the SEO list of all quizable places, e.g. "出題地名一覧". */
    title: string;
  };
  description: {
    /** Generic page description, gets the page H1 + count of items. */
    textFmt: (h1: string, count: number) => string;
  };
  summary: {
    titleFmt: (total: number) => string;
    correct: string;
    bestThisRound: string;
    bestAll: string;
    questionsSuffix: string;  // "問" / "questions"
  };
  ad: {
    label: string;
  };
  breadcrumbs: {
    top: string;
    quiz: string;
    states: string;
    cities: string;
    japan: string;
  };
  continents: Record<
    "n_america" | "cs_america" | "europe" | "asia" | "oceania" | "middle_east" | "africa",
    string
  >;
  /** Section titles within Japan hub, by region key. */
  japanRegions: Record<string, string>;
  /** Image alt text builder, e.g. "アメリカの国旗" */
  flagAltFmt: (country: string) => string;

  /** City-quiz hub (/quiz/cities/). */
  cityHub: {
    title: string;
    pageTitle: string;
    pageDescription: string;
    lead: string;
    countLabelFmt: (n: number) => string;
    japanCardSub: string;
    contentDesc: string;
  };
  /** Per-country city quiz (/quiz/cities/{continent}/{country}/). */
  city: {
    titleFmt: (country: string) => string;
    pageTitleFmt: (country: string) => string;
    pageDescriptionFmt: (country: string) => string;
    promptDefault: string;
    promptDefaultSub: string;
    promptMemorize: string;
    promptMemorizeSub: string;
    promptHint: string;
    promptHintSub: string;
    emptyName: string;
    choicesLabel: string;
    correctPrefix: string;
    difficultyLabel: string;
    diffEasyFmt: (n: number) => string;
    diffNormalFmt: (n: number) => string;
    diffHardFmt: (n: number) => string;
    hintButton: string;
    tierEasyFmt: (n: number) => string;
    tierNormalFmt: (n: number) => string;
    tierHardFmt: (n: number) => string;
    tableNameCol: string;
    tableEnglishCol: string;
    tablePopCol: string;
    tableTitleFmt: (country: string, n: number) => string;
    tableDescFmt: (easy: number, normal: number, all: number) => string;
  };
  /** Indonesia kabupaten/kota quiz (pin-based). */
  pinQuiz: {
    /** Hub page (/quiz/states/asia/indonesia-kabupaten/). */
    hub: {
      title: string;
      pageTitle: string;
      pageDescription: string;
      lead: string;
      note: string;
      provincesLabel: string;
      countLabelFmt: (kabs: number, provs: number) => string;
    };
    /** Per-island quiz. */
    island: {
      titleFmt: (island: string) => string;
      pageTitleFmt: (island: string) => string;
      pageDescriptionFmt: (island: string, provinces: number, kabs: number) => string;
      prompt: string;
      leadFmt: (island: string, idName: string, provincesHtml: string) => string;
    };
    /** Generic prompts in the question card during the quiz. */
    promptMemorizeHint: string;
    contentTitleFmt: (n: number) => string;
    contentDescFmt: (h1: string, n: number) => string;
    note: string;
    /** Crumb label "Indonesia (kabupaten version)". */
    crumbLabel: string;
  };
  /** Crumb label for "kabupaten 当てクイズ" section in /[lang]/quiz/cities/japan/ etc — kept here for shared use. */
  pageCrumbs: {
    kabupaten: string;
  };
}

const T: Record<Language, QuizStatesI18n> = {
  ja: {
    hub: {
      title: "州当てクイズ",
      pageTitle: "州当てクイズ｜大陸を選ぶ",
      pageDescription: "世界各国の州・地域を地図上で当てるクイズ。大陸を選ぶと、その大陸の国別クイズページに進みます。",
      lead: "世界各国の州・地域を地図上で当てるクイズです。\nまずは大陸を選んでください。各国ページで国を選ぶと、ランダム出題が始まります。",
    },
    continent: {
      titleFmt: (n) => `${n}の州当てクイズ`,
      pageTitleFmt: (n) => `${n}の州当てクイズ｜国を選ぶ`,
      pageDescriptionFmt: (n) => `${n}地域の各国の州・地域を地図上で当てるクイズ集。国を選んでスタート。`,
      lead: "国を選ぶと、出題された州/地域を地図上で当てるクイズが始まります。",
      countLabelFmt: (n) => `州・地域 ${n} 件`,
    },
    japanHub: {
      title: "日本の市町村クイズ",
      pageTitle: "日本の市町村クイズ｜都道府県を選ぶ",
      pageDescription: "47 都道府県の市町村を地図上で当てるクイズ。県を選ぶとその県の市町村クイズが始まります。",
      lead: "都道府県を選ぶと、その県の市町村を地図上で当てるクイズが始まります。",
      countLabelFmt: (n) => `市町村 ${n} 件`,
    },
    country: {
      titleFmt: (n) => `${n}の州当てクイズ`,
      pageTitleFmt: (n) => `${n}の州当てクイズ｜地図で正しい場所をクリック`,
      pageDescriptionFmt: (n) => `${n}の州・地域・行政区分を地図上で当てるクイズ。連続正解の最高記録に挑戦しよう。`,
      prompt: "この州・地域はどこ？",
    },
    prefecture: {
      titleFmt: (n) => `${n}の市町村クイズ`,
      pageTitleFmt: (n) => `${n}の市町村クイズ｜地図で正しい場所をクリック`,
      pageDescriptionFmt: (n) => `${n}の市町村を地図上で当てるクイズ。連続正解の最高記録に挑戦しよう。`,
      prompt: "この市町村はどこ？",
    },
    scores: {
      streak: "連続",
      best: "最高",
      correct: "○",
      wrong: "✕",
      remaining: "残り",
    },
    question: { loading: "読み込み中…", finished: "終了！" },
    feedback: { clicked: "クリック:" },
    progress: { ariaLabel: "クイズの進捗" },
    buttons: { skip: "スキップ", restart: "最初から", cta: "クイズに挑戦", memorize: "暗記モード" },
    memorize: {
      prompt: "暗記モード",
      hint: "マップ上の地域にカーソルを合わせる（スマホはタップ）と名称が表示されます",
      emptyName: "—",
    },
    list: { title: "このクイズで出題される地名一覧" },
    description: {
      textFmt: (h1, n) =>
        `「${h1}」のページです。地図上に表示される${n}件の地名がランダムに出題され、正しい場所をクリックして答えます。`,
    },
    summary: {
      titleFmt: (n) => `🎉 全 ${n} 問終了`,
      correct: "正解",
      bestThisRound: "最高連続正解",
      bestAll: "通算ベスト",
      questionsSuffix: "問",
    },
    ad: { label: "広告" },
    breadcrumbs: { top: "トップ", quiz: "クイズ", states: "州当てクイズ", cities: "都市当てクイズ", japan: "日本（県別）" },
    continents: {
      n_america: "北米",
      cs_america: "中南米",
      europe: "ヨーロッパ",
      asia: "アジア",
      oceania: "オセアニア",
      middle_east: "中東",
      africa: "アフリカ",
    },
    japanRegions: {
      tohoku: "北海道・東北",
      kanto: "関東",
      chubu: "中部",
      kinki: "近畿",
      chugoku: "中国地方",
      shikoku: "四国",
      kyusyu: "九州・沖縄",
    },
    flagAltFmt: (n) => `${n}の国旗`,
    cityHub: {
      title: "都市当てクイズ",
      pageTitle: "都市当てクイズ｜国を選ぶ",
      pageDescription: "世界各国の主要都市を、地図上のピンに対応する都市名カードから当てるクイズ。国を選んでスタート。",
      lead: "世界各国の主要都市を地図上で当てるクイズです。\n国を選ぶと、マップ上のピンに対応する都市名カードを選んで答えるクイズが始まります。暗記モードに切り替えるとピンとカードの対応を自由に確認できます。",
      countLabelFmt: (n) => `主要都市 ${n} 件`,
      japanCardSub: "47 都道府県の市町村クイズ",
      contentDesc:
        "各国ページでは、地図上に表示された主要都市のピンの中から、オレンジ色でハイライトされたピンに対応する都市名カードを選んで当てます。連続正解の最高記録更新を目指せるほか、暗記モードではピンとカードを行き来して位置と名前を学習できます。",
    },
    city: {
      titleFmt: (n) => `${n}の主要都市クイズ`,
      pageTitleFmt: (n) => `${n}の主要都市クイズ｜マップ上のピンに対応する都市を選ぼう`,
      pageDescriptionFmt: (n) => `${n}の主要都市を、地図上でハイライトされたピンに対応する都市名カードを選んで当てるクイズ。位置と名前の暗記学習に。`,
      promptDefault: "オレンジ色のピンに対応する都市は？",
      promptDefaultSub: "下のカードから選んでください",
      promptMemorize: "暗記モード",
      promptMemorizeSub: "ピンまたはカードにカーソルを合わせる（スマホはタップ）と都市名がここに表示されます",
      promptHint: "ヒント有モード",
      promptHintSub: "オレンジ色のピンに対応する都市はどれ？",
      emptyName: "—",
      choicesLabel: "選択肢",
      correctPrefix: "正解: ",
      difficultyLabel: "難易度",
      diffEasyFmt: (n) => `簡単 (${n})`,
      diffNormalFmt: (n) => `普通 (${n})`,
      diffHardFmt: (n) => `難しい (${n})`,
      hintButton: "ヒント有",
      tierEasyFmt: (n) => `簡単（人口上位${n}）`,
      tierNormalFmt: (n) => `普通（人口20〜${n}位）`,
      tierHardFmt: (n) => `難しい（人口50位以下、全${n}件）`,
      tableNameCol: "都市名",
      tableEnglishCol: "英語表記",
      tablePopCol: "人口 (千人)",
      tableTitleFmt: (country, n) => `このクイズで出題される${country}の都市 (${n})`,
      tableDescFmt: (easy, normal, all) => `都市は人口によって難易度別にグループ分けされています。難易度「簡単」では人口上位 ${easy} 都市、「普通」では上位 ${normal} 都市、「難しい」では全 ${all} 都市（最大100）から出題されます。地図上のピンの大きさは人口に比例しています。`,
    },
    pinQuiz: {
      hub: {
        title: "インドネシアの kabupaten 当てクイズ",
        pageTitle: "インドネシアの kabupaten 当てクイズ｜島を選ぶ",
        pageDescription: "インドネシアの7つの島・諸島ごとに kabupaten / kota（県・市）を地図上のピンから当てるクイズ。島を選ぶとランダム出題が始まります。",
        lead: "インドネシアの <strong>7 つの島・諸島</strong>ごとに kabupaten / kota（県・市）の位置を地図上のピンから当てるクイズです。\n全体では <strong>38 州・約 514</strong> の kabupaten / kota が存在しますが、本クイズは島単位にまとめて出題します。",
        note: "ピンの位置・名称は GADM v2.8（2010 年頃）の行政区分に基づいています。2010 年以降の kabupaten 分割や、2012 年（北カリマンタン州）・2022 年（パプア地域 4 州）の新州設置については、可能な範囲で現代の州構成に再分類しています。",
        provincesLabel: "含まれる州",
        countLabelFmt: (kabs, provs) => `${kabs} kabupaten / kota（${provs} 州）`,
      },
      island: {
        titleFmt: (n) => `${n}の kabupaten 当てクイズ`,
        pageTitleFmt: (n) => `${n}の kabupaten 当てクイズ｜地図でピンをクリック`,
        pageDescriptionFmt: (n, p, k) => `${n}に属する ${p} 州・${k} kabupaten / kota の位置を、地図上のピンから当てるクイズです。`,
        prompt: "この kabupaten / kota はどこ？",
        leadFmt: (n, idName, provincesHtml) => `${n}（インドネシア語: <b>${idName}</b>）に含まれる州：${provincesHtml}。`,
      },
      promptMemorizeHint: "マップ上のピンにカーソルを合わせる（スマホはタップ）と名称が表示されます",
      contentTitleFmt: (n) => `このクイズに出題される kabupaten/kota 一覧 (${n})`,
      contentDescFmt: (h1, n) => `「${h1}」のページです。地図上に表示される${n}件の kabupaten/kota がランダムに出題され、正しいピンをクリックして答えます。`,
      note: "kabupaten/kota のデータは GADM 2.8（2010 年頃）の行政区分に基づいており、現在のインドネシアの 514 kabupaten/kota のうち約 388 件をカバーします。2010 年以降の分割（例：北カリマンタン州・パプア州の再編）については、可能な範囲で現代の州構成に再分類しています。",
      crumbLabel: "インドネシア（kabupaten 版）",
    },
    pageCrumbs: { kabupaten: "kabupaten" },
  },
  en: {
    hub: {
      title: "State Map Quiz",
      pageTitle: "State Map Quiz | Choose a continent",
      pageDescription: "Click the correct state, region or municipality on the map. Pick a continent to start.",
      lead: "Click the correct state or region on the map.\nPick a continent first; on each country page you'll be quizzed at random.",
    },
    continent: {
      titleFmt: (n) => `${n} State Quiz`,
      pageTitleFmt: (n) => `${n} State Quiz | Choose a country`,
      pageDescriptionFmt: (n) => `Map quizzes for the states/regions of countries in ${n}. Pick a country to start.`,
      lead: "Choose a country to begin a randomized state-on-the-map quiz.",
      countLabelFmt: (n) => `${n} states / regions`,
    },
    japanHub: {
      title: "Japan Municipality Quiz",
      pageTitle: "Japan Municipality Quiz | Choose a prefecture",
      pageDescription: "Map quizzes for the municipalities of all 47 Japanese prefectures. Pick a prefecture to start.",
      lead: "Choose a prefecture to begin a randomized municipality-on-the-map quiz for that prefecture.",
      countLabelFmt: (n) => `${n} municipalities`,
    },
    country: {
      titleFmt: (n) => `${n} State Quiz`,
      pageTitleFmt: (n) => `${n} State Quiz | Click the correct place on the map`,
      pageDescriptionFmt: (n) => `Click the correct state/region of ${n} on the map. Beat your best streak.`,
      prompt: "Which state/region is this?",
    },
    prefecture: {
      titleFmt: (n) => `${n} Municipality Quiz`,
      pageTitleFmt: (n) => `${n} Municipality Quiz | Click the correct place on the map`,
      pageDescriptionFmt: (n) => `Click the correct municipality of ${n} on the map. Beat your best streak.`,
      prompt: "Which municipality is this?",
    },
    scores: { streak: "Streak", best: "Best", correct: "✓", wrong: "✕", remaining: "Left" },
    question: { loading: "Loading…", finished: "Finished!" },
    feedback: { clicked: "Clicked:" },
    progress: { ariaLabel: "Quiz progress" },
    buttons: { skip: "Skip", restart: "Restart", cta: "Try the quiz", memorize: "Study mode" },
    memorize: {
      prompt: "Study mode",
      hint: "Hover over a region (or tap on mobile) to see its name.",
      emptyName: "—",
    },
    list: { title: "All places that can appear in this quiz" },
    description: {
      textFmt: (h1, n) =>
        `${h1} — click the correct place on the map for each of the ${n} prompts in random order. Track your best streak and study the names interactively.`,
    },
    summary: {
      titleFmt: (n) => `🎉 Finished all ${n} questions`,
      correct: "Correct",
      bestThisRound: "Best streak this round",
      bestAll: "All-time best",
      questionsSuffix: "",
    },
    ad: { label: "Advertisement" },
    breadcrumbs: { top: "Home", quiz: "Quiz", states: "State Map Quiz", cities: "City Map Quiz", japan: "Japan (by prefecture)" },
    continents: {
      n_america: "North America",
      cs_america: "Latin America",
      europe: "Europe",
      asia: "Asia",
      oceania: "Oceania",
      middle_east: "Middle East",
      africa: "Africa",
    },
    japanRegions: {
      tohoku: "Hokkaido / Tohoku",
      kanto: "Kanto",
      chubu: "Chubu",
      kinki: "Kinki",
      chugoku: "Chugoku",
      shikoku: "Shikoku",
      kyusyu: "Kyushu / Okinawa",
    },
    flagAltFmt: (n) => `Flag of ${n}`,
    cityHub: {
      title: "City Map Quiz",
      pageTitle: "City Map Quiz | Choose a country",
      pageDescription: "Quizzes for the major cities of countries around the world. Click the city name that matches the highlighted pin. Pick a country to start.",
      lead: "Match the highlighted pin on the map to the correct city name.\nPick a country to start. Switch to study mode to freely explore the pin-and-card pairs.",
      countLabelFmt: (n) => `${n} cities`,
      japanCardSub: "Municipality quiz for all 47 prefectures",
      contentDesc: "On each country page, choose the city name card matching the orange-highlighted pin on the map. Track your best streak, and use study mode to freely map pin positions to city names.",
    },
    city: {
      titleFmt: (n) => `${n} City Quiz`,
      pageTitleFmt: (n) => `${n} City Quiz | Match the highlighted pin to the city`,
      pageDescriptionFmt: (n) => `Match each highlighted pin on the map of ${n} to its city name. Practise locations and names interactively.`,
      promptDefault: "Which city does the orange pin point to?",
      promptDefaultSub: "Pick a card below",
      promptMemorize: "Study mode",
      promptMemorizeSub: "Hover a pin or card (tap on mobile) — its name will appear here",
      promptHint: "Hint mode",
      promptHintSub: "Which of the highlighted cards matches the orange pin?",
      emptyName: "—",
      choicesLabel: "Choices",
      correctPrefix: "Correct: ",
      difficultyLabel: "Difficulty",
      diffEasyFmt: (n) => `Easy (${n})`,
      diffNormalFmt: (n) => `Normal (${n})`,
      diffHardFmt: (n) => `Hard (${n})`,
      hintButton: "Hint",
      tierEasyFmt: (n) => `Easy (top ${n} by population)`,
      tierNormalFmt: (n) => `Normal (population ranks 20–${n})`,
      tierHardFmt: (n) => `Hard (population rank 50+, ${n} total)`,
      tableNameCol: "City",
      tableEnglishCol: "Name",
      tablePopCol: "Population (k)",
      tableTitleFmt: (country, n) => `Cities of ${country} in this quiz (${n})`,
      tableDescFmt: (easy, normal, all) => `Cities are grouped into difficulty tiers by population. Easy mode draws from the top ${easy} cities, Normal from the top ${normal}, and Hard from all ${all} (max 100). Pin size on the map scales with population.`,
    },
    pinQuiz: {
      hub: {
        title: "Indonesia Kabupaten/Kota Quiz",
        pageTitle: "Indonesia Kabupaten Quiz | Choose an island",
        pageDescription: "Match each kabupaten / kota (regency / city) of Indonesia to its location on the map. Grouped by the seven major islands.",
        lead: "Match each kabupaten / kota (regency / city) of Indonesia to its location on the map, grouped by the <strong>seven major islands</strong>.\nIndonesia has <strong>38 provinces and ~514 kabupaten / kota</strong> in total; this quiz batches them by island.",
        note: "Pin positions and names come from GADM v2.8 (~2010). Where possible we have re-classified kabupaten into the modern province structure following the 2012 (North Kalimantan) and 2022 (four new Papua provinces) splits.",
        provincesLabel: "Provinces included",
        countLabelFmt: (kabs, provs) => `${kabs} kabupaten / kota (${provs} provinces)`,
      },
      island: {
        titleFmt: (n) => `${n} Kabupaten Quiz`,
        pageTitleFmt: (n) => `${n} Kabupaten Quiz | Click the matching pin`,
        pageDescriptionFmt: (n, p, k) => `Pin-on-map quiz for the ${p} provinces and ${k} kabupaten / kota of ${n}.`,
        prompt: "Where is this kabupaten / kota?",
        leadFmt: (n, idName, provincesHtml) => `${n} (Indonesian: <b>${idName}</b>) — provinces included: ${provincesHtml}.`,
      },
      promptMemorizeHint: "Hover a pin on the map (or tap on mobile) to see its name",
      contentTitleFmt: (n) => `Kabupaten / kota in this quiz (${n})`,
      contentDescFmt: (h1, n) => `${h1} — click the correct pin on the map for each of the ${n} prompts in random order.`,
      note: "Kabupaten / kota data is based on GADM 2.8 (~2010), covering ~388 of Indonesia's 514 modern kabupaten / kota. Where possible we have re-classified them under the modern 38-province structure (post-2012 / 2022 splits).",
      crumbLabel: "Indonesia (kabupaten)",
    },
    pageCrumbs: { kabupaten: "kabupaten" },
  },
  id: {
    hub: {
      title: "Kuis Peta Negara Bagian",
      pageTitle: "Kuis Peta Negara Bagian | Pilih benua",
      pageDescription: "Klik provinsi/negara bagian yang benar di peta. Pilih benua untuk mulai.",
      lead: "Klik provinsi/negara bagian yang benar di peta.\nPilih benua dahulu, lalu pilih negara untuk memulai.",
    },
    continent: {
      titleFmt: (n) => `Kuis Peta ${n}`,
      pageTitleFmt: (n) => `Kuis Peta ${n} | Pilih negara`,
      pageDescriptionFmt: (n) => `Kuis peta provinsi/negara bagian dari berbagai negara di ${n}. Pilih negara untuk mulai.`,
      lead: "Pilih negara untuk memulai kuis acak.",
      countLabelFmt: (n) => `${n} provinsi / wilayah`,
    },
    japanHub: {
      title: "Kuis Munisipalitas Jepang",
      pageTitle: "Kuis Munisipalitas Jepang | Pilih prefektur",
      pageDescription: "Kuis peta munisipalitas dari 47 prefektur Jepang. Pilih prefektur untuk mulai.",
      lead: "Pilih prefektur untuk memulai kuis munisipalitas pada peta prefektur itu.",
      countLabelFmt: (n) => `${n} munisipalitas`,
    },
    country: {
      titleFmt: (n) => `Kuis Peta ${n}`,
      pageTitleFmt: (n) => `Kuis Peta ${n} | Klik tempat yang benar di peta`,
      pageDescriptionFmt: (n) => `Klik provinsi/negara bagian ${n} yang benar di peta. Pecahkan rekor beruntun terbaik.`,
      prompt: "Provinsi/negara bagian mana ini?",
    },
    prefecture: {
      titleFmt: (n) => `Kuis Munisipalitas ${n}`,
      pageTitleFmt: (n) => `Kuis Munisipalitas ${n} | Klik tempat yang benar di peta`,
      pageDescriptionFmt: (n) => `Klik munisipalitas ${n} yang benar di peta. Pecahkan rekor beruntun terbaik.`,
      prompt: "Munisipalitas mana ini?",
    },
    scores: { streak: "Beruntun", best: "Terbaik", correct: "✓", wrong: "✕", remaining: "Tersisa" },
    question: { loading: "Memuat…", finished: "Selesai!" },
    feedback: { clicked: "Diklik:" },
    progress: { ariaLabel: "Kemajuan kuis" },
    buttons: { skip: "Lewati", restart: "Mulai ulang", cta: "Coba kuis ini", memorize: "Mode belajar" },
    memorize: {
      prompt: "Mode belajar",
      hint: "Arahkan kursor (atau ketuk di ponsel) ke wilayah pada peta untuk melihat namanya.",
      emptyName: "—",
    },
    list: { title: "Daftar nama yang muncul dalam kuis ini" },
    description: {
      textFmt: (h1, n) =>
        `${h1} — klik tempat yang benar pada peta untuk masing-masing ${n} pertanyaan acak. Catat beruntun terbaik dan pelajari nama-namanya secara interaktif.`,
    },
    summary: {
      titleFmt: (n) => `🎉 Selesai ${n} pertanyaan`,
      correct: "Benar",
      bestThisRound: "Beruntun terbaik kali ini",
      bestAll: "Terbaik selama ini",
      questionsSuffix: "",
    },
    ad: { label: "Iklan" },
    breadcrumbs: { top: "Beranda", quiz: "Kuis", states: "Kuis Peta", cities: "Kuis Kota", japan: "Jepang (per prefektur)" },
    continents: {
      n_america: "Amerika Utara",
      cs_america: "Amerika Latin",
      europe: "Eropa",
      asia: "Asia",
      oceania: "Oseania",
      middle_east: "Timur Tengah",
      africa: "Afrika",
    },
    japanRegions: {
      tohoku: "Hokkaido / Tohoku",
      kanto: "Kanto",
      chubu: "Chubu",
      kinki: "Kinki",
      chugoku: "Chugoku",
      shikoku: "Shikoku",
      kyusyu: "Kyushu / Okinawa",
    },
    flagAltFmt: (n) => `Bendera ${n}`,
    cityHub: {
      title: "Kuis Kota",
      pageTitle: "Kuis Kota | Pilih negara",
      pageDescription: "Kuis kota-kota utama dari berbagai negara di dunia. Pilih kartu nama kota yang sesuai dengan pin yang disorot. Pilih negara untuk mulai.",
      lead: "Cocokkan pin yang disorot di peta dengan nama kota yang benar.\nPilih negara untuk memulai. Mode belajar memungkinkan Anda menelusuri pasangan pin–kartu.",
      countLabelFmt: (n) => `${n} kota`,
      japanCardSub: "Kuis munisipalitas 47 prefektur",
      contentDesc: "Pada tiap halaman negara, pilih kartu nama kota yang sesuai dengan pin oranye di peta. Pecahkan rekor beruntun terbaik dan gunakan mode belajar untuk menghubungkan posisi pin dengan nama kota.",
    },
    city: {
      titleFmt: (n) => `Kuis Kota ${n}`,
      pageTitleFmt: (n) => `Kuis Kota ${n} | Cocokkan pin yang disorot dengan nama kota`,
      pageDescriptionFmt: (n) => `Cocokkan tiap pin yang disorot di peta ${n} dengan nama kotanya. Latih lokasi dan nama secara interaktif.`,
      promptDefault: "Kota mana yang ditunjuk pin oranye?",
      promptDefaultSub: "Pilih kartu di bawah",
      promptMemorize: "Mode belajar",
      promptMemorizeSub: "Arahkan kursor ke pin atau kartu (ketuk di ponsel) — nama akan muncul di sini",
      promptHint: "Mode petunjuk",
      promptHintSub: "Kartu mana yang cocok dengan pin oranye?",
      emptyName: "—",
      choicesLabel: "Pilihan",
      correctPrefix: "Jawaban: ",
      difficultyLabel: "Kesulitan",
      diffEasyFmt: (n) => `Mudah (${n})`,
      diffNormalFmt: (n) => `Normal (${n})`,
      diffHardFmt: (n) => `Sulit (${n})`,
      hintButton: "Petunjuk",
      tierEasyFmt: (n) => `Mudah (${n} kota terbesar)`,
      tierNormalFmt: (n) => `Normal (peringkat populasi 20–${n})`,
      tierHardFmt: (n) => `Sulit (peringkat 50+, total ${n})`,
      tableNameCol: "Kota",
      tableEnglishCol: "Nama",
      tablePopCol: "Populasi (ribu)",
      tableTitleFmt: (country, n) => `Kota-kota ${country} di kuis ini (${n})`,
      tableDescFmt: (easy, normal, all) => `Kota dikelompokkan ke dalam tingkat kesulitan berdasarkan populasi. Mode Mudah mengambil ${easy} kota terbesar, Normal ${normal}, dan Sulit semua ${all} kota (maksimum 100). Ukuran pin di peta proporsional terhadap populasi.`,
    },
    pinQuiz: {
      hub: {
        title: "Kuis Kabupaten / Kota Indonesia",
        pageTitle: "Kuis Kabupaten Indonesia | Pilih pulau",
        pageDescription: "Cocokkan tiap kabupaten / kota Indonesia dengan lokasinya di peta. Dikelompokkan menurut tujuh pulau utama.",
        lead: "Cocokkan tiap kabupaten / kota Indonesia dengan lokasinya di peta, dikelompokkan menurut <strong>tujuh pulau utama</strong>.\nIndonesia memiliki <strong>38 provinsi dan ~514 kabupaten / kota</strong>; kuis ini menampilkannya per pulau.",
        note: "Posisi dan nama pin berasal dari GADM v2.8 (~2010). Sebisa mungkin kabupaten dialokasikan ulang ke struktur provinsi modern setelah pemekaran 2012 (Kalimantan Utara) dan 2022 (empat provinsi baru Papua).",
        provincesLabel: "Provinsi yang termasuk",
        countLabelFmt: (kabs, provs) => `${kabs} kabupaten / kota (${provs} provinsi)`,
      },
      island: {
        titleFmt: (n) => `Kuis Kabupaten ${n}`,
        pageTitleFmt: (n) => `Kuis Kabupaten ${n} | Klik pin yang sesuai`,
        pageDescriptionFmt: (n, p, k) => `Kuis pin-di-peta untuk ${p} provinsi dan ${k} kabupaten / kota di ${n}.`,
        prompt: "Di mana kabupaten / kota ini?",
        leadFmt: (n, idName, provincesHtml) => `${n} (bahasa Indonesia: <b>${idName}</b>) — provinsi yang termasuk: ${provincesHtml}.`,
      },
      promptMemorizeHint: "Arahkan kursor (atau ketuk di ponsel) ke pin pada peta untuk melihat namanya",
      contentTitleFmt: (n) => `Kabupaten / kota dalam kuis ini (${n})`,
      contentDescFmt: (h1, n) => `${h1} — klik pin yang benar pada peta untuk masing-masing ${n} pertanyaan acak.`,
      note: "Data kabupaten / kota berasal dari GADM 2.8 (~2010), mencakup ~388 dari 514 kabupaten / kota Indonesia saat ini. Sebisa mungkin diklasifikasikan ulang ke struktur 38 provinsi modern.",
      crumbLabel: "Indonesia (kabupaten)",
    },
    pageCrumbs: { kabupaten: "kabupaten" },
  },
  es: {
    hub: {
      title: "Quiz de mapas de estados",
      pageTitle: "Quiz de mapas de estados | Elige un continente",
      pageDescription: "Haz clic en el estado o región correcta en el mapa. Elige un continente para empezar.",
      lead: "Haz clic en el estado o región correcta en el mapa.\nPrimero elige un continente; en cada país recibirás preguntas aleatorias.",
    },
    continent: {
      titleFmt: (n) => `Quiz de mapas de ${n}`,
      pageTitleFmt: (n) => `Quiz de mapas de ${n} | Elige un país`,
      pageDescriptionFmt: (n) => `Quizzes de los estados/regiones de los países de ${n}. Elige un país para empezar.`,
      lead: "Elige un país para empezar un quiz aleatorio sobre el mapa.",
      countLabelFmt: (n) => `${n} estados / regiones`,
    },
    japanHub: {
      title: "Quiz de municipios de Japón",
      pageTitle: "Quiz de municipios de Japón | Elige una prefectura",
      pageDescription: "Quizzes de los municipios de las 47 prefecturas de Japón. Elige una prefectura para empezar.",
      lead: "Elige una prefectura para empezar un quiz aleatorio de sus municipios.",
      countLabelFmt: (n) => `${n} municipios`,
    },
    country: {
      titleFmt: (n) => `Quiz de mapas de ${n}`,
      pageTitleFmt: (n) => `Quiz de mapas de ${n} | Haz clic en el lugar correcto`,
      pageDescriptionFmt: (n) => `Haz clic en el estado/región correcto de ${n} en el mapa. Bate tu mejor racha.`,
      prompt: "¿Qué estado/región es este?",
    },
    prefecture: {
      titleFmt: (n) => `Quiz de municipios de ${n}`,
      pageTitleFmt: (n) => `Quiz de municipios de ${n} | Haz clic en el lugar correcto`,
      pageDescriptionFmt: (n) => `Haz clic en el municipio correcto de ${n} en el mapa. Bate tu mejor racha.`,
      prompt: "¿Qué municipio es este?",
    },
    scores: { streak: "Racha", best: "Mejor", correct: "✓", wrong: "✕", remaining: "Restantes" },
    question: { loading: "Cargando…", finished: "¡Terminado!" },
    feedback: { clicked: "Clic:" },
    progress: { ariaLabel: "Progreso del quiz" },
    buttons: { skip: "Saltar", restart: "Reiniciar", cta: "Probar el quiz", memorize: "Modo estudio" },
    memorize: {
      prompt: "Modo estudio",
      hint: "Pase el cursor (o pulse en móvil) sobre una región del mapa para ver su nombre.",
      emptyName: "—",
    },
    list: { title: "Lista de lugares que aparecen en este quiz" },
    description: {
      textFmt: (h1, n) =>
        `${h1} — haz clic en el lugar correcto del mapa para cada una de las ${n} preguntas en orden aleatorio. Bate tu mejor racha y aprende los nombres de forma interactiva.`,
    },
    summary: {
      titleFmt: (n) => `🎉 Terminadas ${n} preguntas`,
      correct: "Correctas",
      bestThisRound: "Mejor racha esta ronda",
      bestAll: "Mejor de todos los tiempos",
      questionsSuffix: "",
    },
    ad: { label: "Publicidad" },
    breadcrumbs: { top: "Inicio", quiz: "Quiz", states: "Quiz de mapas", cities: "Quiz de ciudades", japan: "Japón (por prefectura)" },
    continents: {
      n_america: "América del Norte",
      cs_america: "América Latina",
      europe: "Europa",
      asia: "Asia",
      oceania: "Oceanía",
      middle_east: "Oriente Medio",
      africa: "África",
    },
    japanRegions: {
      tohoku: "Hokkaido / Tohoku",
      kanto: "Kanto",
      chubu: "Chubu",
      kinki: "Kinki",
      chugoku: "Chugoku",
      shikoku: "Shikoku",
      kyusyu: "Kyushu / Okinawa",
    },
    flagAltFmt: (n) => `Bandera de ${n}`,
    cityHub: {
      title: "Quiz de ciudades",
      pageTitle: "Quiz de ciudades | Elige un país",
      pageDescription: "Quiz de las principales ciudades de cada país. Elige la tarjeta de ciudad que corresponde al pin resaltado. Elige un país para empezar.",
      lead: "Asocia el pin resaltado del mapa con la tarjeta de ciudad correcta.\nElige un país para empezar. Cambia al modo estudio para explorar libremente las parejas de pin y tarjeta.",
      countLabelFmt: (n) => `${n} ciudades`,
      japanCardSub: "Quiz de municipios de las 47 prefecturas",
      contentDesc: "En cada página de país, elige la tarjeta cuyo nombre coincide con el pin naranja del mapa. Supera tu mejor racha y usa el modo estudio para asociar libremente posiciones y nombres.",
    },
    city: {
      titleFmt: (n) => `Quiz de ciudades de ${n}`,
      pageTitleFmt: (n) => `Quiz de ciudades de ${n} | Asocia el pin resaltado con la ciudad`,
      pageDescriptionFmt: (n) => `Asocia cada pin resaltado del mapa de ${n} con su ciudad. Practica ubicaciones y nombres de forma interactiva.`,
      promptDefault: "¿A qué ciudad corresponde el pin naranja?",
      promptDefaultSub: "Elige una tarjeta abajo",
      promptMemorize: "Modo estudio",
      promptMemorizeSub: "Pasa el cursor por un pin o tarjeta (toca en móvil): su nombre aparecerá aquí",
      promptHint: "Modo pistas",
      promptHintSub: "¿Cuál de las tarjetas resaltadas corresponde al pin naranja?",
      emptyName: "—",
      choicesLabel: "Opciones",
      correctPrefix: "Correcto: ",
      difficultyLabel: "Dificultad",
      diffEasyFmt: (n) => `Fácil (${n})`,
      diffNormalFmt: (n) => `Normal (${n})`,
      diffHardFmt: (n) => `Difícil (${n})`,
      hintButton: "Pista",
      tierEasyFmt: (n) => `Fácil (top ${n} por población)`,
      tierNormalFmt: (n) => `Normal (puestos 20–${n} por población)`,
      tierHardFmt: (n) => `Difícil (puesto 50+, ${n} en total)`,
      tableNameCol: "Ciudad",
      tableEnglishCol: "Nombre",
      tablePopCol: "Población (miles)",
      tableTitleFmt: (country, n) => `Ciudades de ${country} en este quiz (${n})`,
      tableDescFmt: (easy, normal, all) => `Las ciudades se agrupan por dificultad según la población. Fácil incluye las ${easy} mayores, Normal las ${normal}, y Difícil las ${all} (máximo 100). El tamaño del pin escala con la población.`,
    },
    pinQuiz: {
      hub: {
        title: "Quiz de kabupaten / kota de Indonesia",
        pageTitle: "Quiz de kabupaten de Indonesia | Elige una isla",
        pageDescription: "Asocia cada kabupaten / kota (regencia / ciudad) de Indonesia con su ubicación en el mapa. Agrupado por las siete islas mayores.",
        lead: "Asocia cada kabupaten / kota (regencia / ciudad) de Indonesia con su ubicación, agrupado por las <strong>siete islas mayores</strong>.\nIndonesia tiene <strong>38 provincias y unos 514 kabupaten / kota</strong> en total; este quiz los agrupa por isla.",
        note: "Las posiciones y nombres provienen de GADM v2.8 (~2010). En la medida de lo posible se han re-clasificado a la estructura provincial moderna tras las divisiones de 2012 (Kalimantan Norte) y 2022 (cuatro nuevas provincias de Papúa).",
        provincesLabel: "Provincias incluidas",
        countLabelFmt: (kabs, provs) => `${kabs} kabupaten / kota (${provs} provincias)`,
      },
      island: {
        titleFmt: (n) => `Quiz de kabupaten de ${n}`,
        pageTitleFmt: (n) => `Quiz de kabupaten de ${n} | Haz clic en el pin correcto`,
        pageDescriptionFmt: (n, p, k) => `Quiz de pines en el mapa para las ${p} provincias y ${k} kabupaten / kota de ${n}.`,
        prompt: "¿Dónde está este kabupaten / kota?",
        leadFmt: (n, idName, provincesHtml) => `${n} (indonesio: <b>${idName}</b>) — provincias incluidas: ${provincesHtml}.`,
      },
      promptMemorizeHint: "Pasa el cursor (o toca en móvil) sobre un pin del mapa para ver su nombre",
      contentTitleFmt: (n) => `Kabupaten / kota en este quiz (${n})`,
      contentDescFmt: (h1, n) => `${h1} — haz clic en el pin correcto del mapa para cada una de las ${n} preguntas aleatorias.`,
      note: "Los datos de kabupaten / kota se basan en GADM 2.8 (~2010) y cubren ~388 de los 514 kabupaten / kota actuales. Sebisa mungkin se han re-clasificado bajo la estructura moderna de 38 provincias.",
      crumbLabel: "Indonesia (kabupaten)",
    },
    pageCrumbs: { kabupaten: "kabupaten" },
  },
  pt: {
    hub: {
      title: "Quiz de mapas de estados",
      pageTitle: "Quiz de mapas de estados | Escolha um continente",
      pageDescription: "Clique no estado ou região correta no mapa. Escolha um continente para começar.",
      lead: "Clique no estado ou região correta no mapa.\nEscolha um continente; em cada país aparecerão perguntas aleatórias.",
    },
    continent: {
      titleFmt: (n) => `Quiz de mapas de ${n}`,
      pageTitleFmt: (n) => `Quiz de mapas de ${n} | Escolha um país`,
      pageDescriptionFmt: (n) => `Quizzes de estados/regiões dos países de ${n}. Escolha um país para começar.`,
      lead: "Escolha um país para começar um quiz aleatório sobre o mapa.",
      countLabelFmt: (n) => `${n} estados / regiões`,
    },
    japanHub: {
      title: "Quiz de municípios do Japão",
      pageTitle: "Quiz de municípios do Japão | Escolha uma prefeitura",
      pageDescription: "Quizzes de municípios das 47 prefeituras do Japão. Escolha uma prefeitura para começar.",
      lead: "Escolha uma prefeitura para iniciar um quiz aleatório de seus municípios.",
      countLabelFmt: (n) => `${n} municípios`,
    },
    country: {
      titleFmt: (n) => `Quiz de mapas de ${n}`,
      pageTitleFmt: (n) => `Quiz de mapas de ${n} | Clique no lugar correto`,
      pageDescriptionFmt: (n) => `Clique no estado/região correto de ${n} no mapa. Bata seu melhor recorde.`,
      prompt: "Qual estado/região é este?",
    },
    prefecture: {
      titleFmt: (n) => `Quiz de municípios de ${n}`,
      pageTitleFmt: (n) => `Quiz de municípios de ${n} | Clique no lugar correto`,
      pageDescriptionFmt: (n) => `Clique no município correto de ${n} no mapa. Bata seu melhor recorde.`,
      prompt: "Qual município é este?",
    },
    scores: { streak: "Sequência", best: "Melhor", correct: "✓", wrong: "✕", remaining: "Restantes" },
    question: { loading: "Carregando…", finished: "Concluído!" },
    feedback: { clicked: "Clicado:" },
    progress: { ariaLabel: "Progresso do quiz" },
    buttons: { skip: "Pular", restart: "Reiniciar", cta: "Tente o quiz", memorize: "Modo estudo" },
    memorize: {
      prompt: "Modo estudo",
      hint: "Passe o cursor (ou toque no celular) sobre uma região do mapa para ver o nome.",
      emptyName: "—",
    },
    list: { title: "Lista de lugares que aparecem neste quiz" },
    description: {
      textFmt: (h1, n) =>
        `${h1} — clique no local correto do mapa para cada uma das ${n} perguntas em ordem aleatória. Bata seu melhor recorde e aprenda os nomes de forma interativa.`,
    },
    summary: {
      titleFmt: (n) => `🎉 Concluídas ${n} perguntas`,
      correct: "Corretas",
      bestThisRound: "Melhor sequência nesta rodada",
      bestAll: "Melhor de todos os tempos",
      questionsSuffix: "",
    },
    ad: { label: "Publicidade" },
    breadcrumbs: { top: "Início", quiz: "Quiz", states: "Quiz de mapas", cities: "Quiz de cidades", japan: "Japão (por prefeitura)" },
    continents: {
      n_america: "América do Norte",
      cs_america: "América Latina",
      europe: "Europa",
      asia: "Ásia",
      oceania: "Oceania",
      middle_east: "Oriente Médio",
      africa: "África",
    },
    japanRegions: {
      tohoku: "Hokkaido / Tohoku",
      kanto: "Kanto",
      chubu: "Chubu",
      kinki: "Kinki",
      chugoku: "Chugoku",
      shikoku: "Shikoku",
      kyusyu: "Kyushu / Okinawa",
    },
    flagAltFmt: (n) => `Bandeira de ${n}`,
    cityHub: {
      title: "Quiz de cidades",
      pageTitle: "Quiz de cidades | Escolha um país",
      pageDescription: "Quiz das principais cidades de cada país. Escolha o cartão da cidade que corresponde ao pin destacado. Escolha um país para começar.",
      lead: "Associe o pin destacado do mapa ao nome da cidade correto.\nEscolha um país para começar. Use o modo estudo para percorrer livremente as duplas pin–cartão.",
      countLabelFmt: (n) => `${n} cidades`,
      japanCardSub: "Quiz de municípios das 47 prefeituras",
      contentDesc: "Em cada página de país, escolha o cartão da cidade que corresponde ao pin laranja no mapa. Supere seu melhor recorde e use o modo estudo para ligar posições e nomes.",
    },
    city: {
      titleFmt: (n) => `Quiz de cidades de ${n}`,
      pageTitleFmt: (n) => `Quiz de cidades de ${n} | Associe o pin destacado à cidade`,
      pageDescriptionFmt: (n) => `Associe cada pin destacado no mapa de ${n} ao nome da cidade. Pratique localizações e nomes de forma interativa.`,
      promptDefault: "A qual cidade o pin laranja corresponde?",
      promptDefaultSub: "Escolha um cartão abaixo",
      promptMemorize: "Modo estudo",
      promptMemorizeSub: "Passe o cursor por um pin ou cartão (toque no celular): o nome aparece aqui",
      promptHint: "Modo dica",
      promptHintSub: "Qual dos cartões destacados corresponde ao pin laranja?",
      emptyName: "—",
      choicesLabel: "Opções",
      correctPrefix: "Correto: ",
      difficultyLabel: "Dificuldade",
      diffEasyFmt: (n) => `Fácil (${n})`,
      diffNormalFmt: (n) => `Normal (${n})`,
      diffHardFmt: (n) => `Difícil (${n})`,
      hintButton: "Dica",
      tierEasyFmt: (n) => `Fácil (top ${n} por população)`,
      tierNormalFmt: (n) => `Normal (posições 20–${n} por população)`,
      tierHardFmt: (n) => `Difícil (posição 50+, ${n} no total)`,
      tableNameCol: "Cidade",
      tableEnglishCol: "Nome",
      tablePopCol: "População (mil)",
      tableTitleFmt: (country, n) => `Cidades de ${country} neste quiz (${n})`,
      tableDescFmt: (easy, normal, all) => `As cidades são agrupadas por dificuldade conforme a população. Fácil inclui as ${easy} maiores, Normal as ${normal} e Difícil todas as ${all} (máx. 100). O tamanho do pin escala com a população.`,
    },
    pinQuiz: {
      hub: {
        title: "Quiz de kabupaten / kota da Indonésia",
        pageTitle: "Quiz de kabupaten da Indonésia | Escolha uma ilha",
        pageDescription: "Associe cada kabupaten / kota (regência / cidade) da Indonésia à sua localização no mapa. Agrupados pelas sete ilhas principais.",
        lead: "Associe cada kabupaten / kota (regência / cidade) da Indonésia à sua localização no mapa, agrupados pelas <strong>sete ilhas principais</strong>.\nA Indonésia tem <strong>38 províncias e ~514 kabupaten / kota</strong>; este quiz os agrupa por ilha.",
        note: "As posições e nomes dos pins vêm do GADM v2.8 (~2010). Sempre que possível, os kabupaten foram reclassificados na estrutura provincial moderna após as divisões de 2012 (Kalimantan Norte) e 2022 (quatro novas províncias da Papua).",
        provincesLabel: "Províncias incluídas",
        countLabelFmt: (kabs, provs) => `${kabs} kabupaten / kota (${provs} províncias)`,
      },
      island: {
        titleFmt: (n) => `Quiz de kabupaten de ${n}`,
        pageTitleFmt: (n) => `Quiz de kabupaten de ${n} | Clique no pin correto`,
        pageDescriptionFmt: (n, p, k) => `Quiz de pins no mapa para as ${p} províncias e ${k} kabupaten / kota de ${n}.`,
        prompt: "Onde fica este kabupaten / kota?",
        leadFmt: (n, idName, provincesHtml) => `${n} (indonésio: <b>${idName}</b>) — províncias incluídas: ${provincesHtml}.`,
      },
      promptMemorizeHint: "Passe o cursor (ou toque no celular) sobre um pin para ver o nome",
      contentTitleFmt: (n) => `Kabupaten / kota neste quiz (${n})`,
      contentDescFmt: (h1, n) => `${h1} — clique no pin correto do mapa para cada uma das ${n} perguntas aleatórias.`,
      note: "Os dados de kabupaten / kota são baseados no GADM 2.8 (~2010) e cobrem ~388 dos 514 kabupaten / kota atuais. Sempre que possível são reclassificados na estrutura moderna de 38 províncias.",
      crumbLabel: "Indonésia (kabupaten)",
    },
    pageCrumbs: { kabupaten: "kabupaten" },
  },
};

export function getQuizI18n(lang: Language): QuizStatesI18n {
  return T[lang] ?? T.ja;
}

/** Build a /quiz/states/... URL prefixed with the lang segment when needed. */
export function quizPath(lang: Language, path: string): string {
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}

/** Build a path to any site URL prefixed with the lang segment when needed. */
export function langPath(lang: Language, path: string): string {
  return lang === DEFAULT_LANG ? path : `/${lang}${path}`;
}
