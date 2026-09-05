/**
 * ヒーロー地図の「領域 → 記事ページ」リンク表を組み立てる。
 *
 * StaticGeoMap は SVG をビルド時にインライン展開するため、ここで作った表を渡すと
 * 各 <path> が <a href> で包まれ、国（や都道府県）のエリアをクリックしただけで
 * 対応するページへ遷移できるようになる。ランタイムの JS は不要。
 *
 * 対応する SVG の属性:
 *  - public/mp/maps/world.svg（simplemaps）
 *      単一ポリゴンの国: <path id="FR" name="France">  ← ISO2 + 英語名
 *      複数ポリゴンの国: <path class="France">        ← 英語名のみ（id なし）
 *  - public/maps/countries/japan.svg（Natural Earth 由来）
 *      <path data-code="JP-12" data-name="Chiba">     ← 都道府県のローマ字名
 *
 * 突き合わせは 2 段構え:
 *   1. 英語名 → ページのディレクトリ名（france → /rule/europe/france/）
 *   2. ISO2  → frontmatter の flag（"CZ.svg" → /rule/europe/czechia/）
 * 名前優先なのは、flag が重複するページ（フランス / 仏領ギアナ = FR.svg など）が
 * あるため。名前が一致するページの方が確実に「その国のページ」になる。
 */
import {
  extractLangFromId,
  extractSlugFromId,
  buildUrl,
  type Language,
} from "./i18n-utils";

export interface MapAreaLink {
  url: string;
  title: string;
}

/** キー（"name:xxx" / "code:XX"）→ リンク先 */
export type MapAreaLinks = Record<string, MapAreaLink>;

/**
 * world.svg の英語名がページのディレクトリ名と綴り違いになるケースと、
 * 複数の国を 1 ページにまとめているケースの対応表。
 * 「world.svg 側の名前」→「rule 配下のディレクトリ名」。
 */
const NAME_ALIASES: Record<string, string> = {
  "russian federation": "russia",
  "united states": "usa",
  "faeroe islands": "faroe_islands",
  "sao tome and principe": "saotome",
  "united states virgin islands": "virgin_islands",
  // バルト三国は 1 ページにまとまっている
  estonia: "baltic-state",
  latvia: "baltic-state",
  lithuania: "baltic-state",
};

function normalize(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // ダイアクリティカル除去（São → Sao）
    .toLowerCase()
    .replace(/\([^)]*\)/g, "") // "Canary Islands (Spain)" の括弧内を落とす
    .replace(/[^a-z0-9]/g, "");
}

/** SVG の name / class / data-name から引くキー */
export function areaNameKey(value: string): string {
  return `name:${normalize(value)}`;
}

/** SVG の id / data-code から引くキー */
export function areaCodeKey(value: string): string {
  return `code:${value.trim().toUpperCase()}`;
}

type Entry = { id: string; data: Record<string, any> };

/**
 * flag frontmatter（"FR.svg"）から ISO2 を取り出す。言語ごとの md で欠けている
 * ことがあるため、同じスラッグのどれか 1 つに書かれていれば採用する。
 */
function collectFlagCodes(entries: Entry[]): Map<string, string> {
  const codes = new Map<string, string>();
  for (const entry of entries) {
    const flag = entry.data?.flag;
    if (typeof flag !== "string" || !/^[A-Za-z]{2}\.svg$/.test(flag)) continue;
    const slug = extractSlugFromId(entry.id);
    if (!codes.has(slug)) codes.set(slug, flag.slice(0, 2).toUpperCase());
  }
  return codes;
}

/**
 * 同じキーに複数ページがぶら下がった場合の優先順位。
 * ディレクトリ名が短い方（france < frenchguiana、usa < united-states-…）を本家とみなし、
 * 同点はスラッグの辞書順で決める（ビルドの再現性のため）。
 */
function preferredFirst(a: string, b: string): number {
  const segA = a.split("/").pop() ?? "";
  const segB = b.split("/").pop() ?? "";
  if (segA.length !== segB.length) return segA.length - segB.length;
  return a < b ? -1 : a > b ? 1 : 0;
}

/**
 * rule コレクションから、地図の領域に対応するリンク表を作る。
 *
 * @param entries getCollection("rule") の結果（全言語ぶん）
 * @param lang    リンク先に使う言語
 * @param scope   "country" = 大陸直下の国ページ / "prefecture" = 日本の都道府県ページ
 */
export function buildRuleAreaLinks(
  entries: Entry[],
  lang: Language,
  scope: "country" | "prefecture",
): MapAreaLinks {
  const flagCodes = collectFlagCodes(entries);

  // 対象ページを抽出（表示言語のファイルが存在するものだけ = 実際に生成される URL）
  const pages = entries
    .filter((entry) => extractLangFromId(entry.id) === lang && !entry.data?.draft)
    .map((entry) => ({ slug: extractSlugFromId(entry.id), data: entry.data }))
    .filter(({ slug, data }) => {
      const depth = slug.split("/").filter(Boolean).length;
      return scope === "country"
        ? depth === 2 // 大陸 / 国。地方ハブ（asia/japan/kanto）や州ページは対象外
        : depth > 2 && data?.is_pref === true && slug.startsWith("asia/japan/");
    })
    .sort((a, b) => preferredFirst(a.slug, b.slug));

  const links: MapAreaLinks = {};
  const add = (key: string, link: MapAreaLink) => {
    if (!links[key]) links[key] = link; // 先勝ち（preferredFirst 順にソート済み）
  };

  for (const page of pages) {
    const dir = page.slug.split("/").pop() ?? "";
    const link: MapAreaLink = {
      url: buildUrl("rule", page.slug, lang),
      title: page.data?.title || dir,
    };
    add(areaNameKey(dir), link);
    if (scope === "country") {
      const code = flagCodes.get(page.slug);
      if (code) add(areaCodeKey(code), link);
    }
  }

  // 綴り違いの別名を、対応するページが存在する場合だけ登録する
  if (scope === "country") {
    for (const [worldName, dir] of Object.entries(NAME_ALIASES)) {
      const target = links[areaNameKey(dir)];
      if (target) add(areaNameKey(worldName), target);
    }
  }

  return links;
}
