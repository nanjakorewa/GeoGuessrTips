/**
 * 産業ページ向け企業マスターデータ
 * - 各ページから {{% corp-treemap "5020,5019,..." %}} で参照
 * - ツリーマップと企業テーブルの両方に使用
 */

export interface Company {
  ticker: string;
  name: string;
  nameEn: string;
  market: "tokyo";
  sector: string;
  industry: string;
  /** 時価総額（兆円・概算） */
  marketCapTr: number;
  /** ページ固有の説明文（ticker→description のマップは各ページで指定） */
}

/** セクター別の配色 */
export const sectorColors: Record<string, string> = {
  "エネルギー": "#d97706",
  "素材・化学": "#2563eb",
  "鉄鋼": "#6b7280",
  "自動車": "#059669",
  "半導体": "#6366f1",
  "半導体材料": "#7c3aed",
  "半導体装置": "#0891b2",
};

/** 企業マスター（ticker をキーに引く） */
export const companies: Record<string, Company> = {
  "5020": {
    ticker: "5020",
    name: "ENEOSホールディングス",
    nameEn: "ENEOS Holdings",
    market: "tokyo",
    sector: "エネルギー",
    industry: "石油精製・元売り",
    marketCapTr: 1.8,
  },
  "5019": {
    ticker: "5019",
    name: "出光興産",
    nameEn: "Idemitsu Kosan",
    market: "tokyo",
    sector: "エネルギー",
    industry: "石油精製・元売り",
    marketCapTr: 1.5,
  },
  "5021": {
    ticker: "5021",
    name: "コスモエネルギーHD",
    nameEn: "Cosmo Energy",
    market: "tokyo",
    sector: "エネルギー",
    industry: "石油精製・元売り",
    marketCapTr: 0.5,
  },
  "5009": {
    ticker: "5009",
    name: "富士石油",
    nameEn: "Fuji Oil",
    market: "tokyo",
    sector: "エネルギー",
    industry: "石油精製",
    marketCapTr: 0.05,
  },
  "5401": {
    ticker: "5401",
    name: "日本製鉄",
    nameEn: "Nippon Steel",
    market: "tokyo",
    sector: "鉄鋼",
    industry: "高炉・一貫製鉄",
    marketCapTr: 3.5,
  },
  "5411": {
    ticker: "5411",
    name: "JFEホールディングス",
    nameEn: "JFE Holdings",
    market: "tokyo",
    sector: "鉄鋼",
    industry: "高炉・一貫製鉄",
    marketCapTr: 1.5,
  },
  "4005": {
    ticker: "4005",
    name: "住友化学",
    nameEn: "Sumitomo Chemical",
    market: "tokyo",
    sector: "素材・化学",
    industry: "総合化学",
    marketCapTr: 0.7,
  },
  "4188": {
    ticker: "4188",
    name: "三菱ケミカルグループ",
    nameEn: "Mitsubishi Chemical",
    market: "tokyo",
    sector: "素材・化学",
    industry: "総合化学",
    marketCapTr: 1.2,
  },
  "3407": {
    ticker: "3407",
    name: "旭化成",
    nameEn: "Asahi Kasei",
    market: "tokyo",
    sector: "素材・化学",
    industry: "総合化学",
    marketCapTr: 1.5,
  },
  "7211": {
    ticker: "7211",
    name: "三菱自動車工業",
    nameEn: "Mitsubishi Motors",
    market: "tokyo",
    sector: "自動車",
    industry: "完成車メーカー",
    marketCapTr: 0.7,
  },
  "6758": {
    ticker: "6758",
    name: "ソニーグループ",
    nameEn: "Sony Group",
    market: "tokyo",
    sector: "半導体",
    industry: "イメージセンサー",
    marketCapTr: 18.0,
  },
  "6723": {
    ticker: "6723",
    name: "ルネサスエレクトロニクス",
    nameEn: "Renesas Electronics",
    market: "tokyo",
    sector: "半導体",
    industry: "車載マイコン・SoC",
    marketCapTr: 5.0,
  },
  "8035": {
    ticker: "8035",
    name: "東京エレクトロン",
    nameEn: "Tokyo Electron",
    market: "tokyo",
    sector: "半導体装置",
    industry: "半導体製造装置",
    marketCapTr: 15.0,
  },
  "4063": {
    ticker: "4063",
    name: "信越化学工業",
    nameEn: "Shin-Etsu Chemical",
    market: "tokyo",
    sector: "半導体材料",
    industry: "シリコンウェーハ・フォトレジスト",
    marketCapTr: 8.0,
  },
  "3436": {
    ticker: "3436",
    name: "SUMCO",
    nameEn: "SUMCO",
    market: "tokyo",
    sector: "半導体材料",
    industry: "シリコンウェーハ",
    marketCapTr: 0.5,
  },
};

/** ticker配列から重複排除済みの企業リストを取得 */
export function getCompanies(tickers: string[]): Company[] {
  const seen = new Set<string>();
  return tickers
    .filter((t) => {
      if (seen.has(t)) return false;
      seen.add(t);
      return true;
    })
    .map((t) => companies[t])
    .filter(Boolean);
}
