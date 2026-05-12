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
