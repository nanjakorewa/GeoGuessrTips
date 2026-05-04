/**
 * Adds `geography`, `economy`, `relatedIndustry` to each prefecture's
 * existing `prefInfo` block. Skips entries that already define any of these
 * fields, so it is safe to re-run.
 *
 * Run once:  node scripts/add_pref_info_content.mjs
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, "..");
const RULE_BASE = path.join(REPO_ROOT, "src", "content", "rule", "asia", "japan");

// dir → { geo, eco, rel: [{url, title, note}] }
const DATA = {
  // 北海道
  "tohoku/hokkaido": {
    geo: "日本最北の都道府県で、本州とは津軽海峡で隔てられる。面積は全国の約 22% を占め、知床・大雪山・阿寒・釧路湿原など 6 つの国立公園を擁する。冬は本州とは比較にならない豪雪・低温に見舞われ、矢羽根付きポール（固定式視線誘導柱）が街道沿いに多く設置される。",
    eco: "全国の生乳生産量の約 5 割、小麦・じゃがいも・玉ねぎなど畑作物の収量も全国 1 位を多く占める日本最大の食料供給地。漁業も全国 1 位で、釧路・函館・小樽が主要漁港。製紙（王子製紙苫小牧）、製鉄（日本製鉄室蘭）、自動車部品（トヨタ自動車北海道）に加え、千歳ではラピダスによる先端ロジック半導体の量産工場が稼働を予定する。",
    rel: [
      { url: "/industry/japan-paper/", title: "日本の製紙・パルプ産業", note: "王子製紙苫小牧工場（国内最大級のパルプ供給拠点）" },
      { url: "/industry/japan-cement/", title: "日本のセメント工業", note: "太平洋セメント上磯工場・苫小牧" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "北海道電力エリア（泊原発・苫東厚真）" },
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "千歳ラピダス（先端ロジック）" },
      { url: "/industry/japan-jr/", title: "日本のJR各社", note: "JR北海道" },
    ],
  },
  // 東北
  "tohoku/aomori": {
    geo: "本州最北端、津軽海峡を挟んで北海道と向かい合う。陸奥湾・八甲田山・白神山地・十和田湖など自然景観が豊か。白神山地（青森・秋田）はユネスコ世界自然遺産。冬は日本海側で豪雪、太平洋側ではやませ（冷害をもたらす偏東風）が吹く。",
    eco: "りんごの生産量は全国 1 位（全国の約 6 割）。にんにく・長いも・ホタテ貝でも全国 1 位。むつ小川原（六ヶ所村）に国家石油備蓄基地と原子燃料サイクル施設があり、エネルギー関連の重要拠点。八戸港は鉄鋼・飼料・水産を扱う工業港。",
    rel: [
      { url: "/industry/japan-stockpile/", title: "日本の石油・LPガス備蓄基地", note: "むつ小川原（六ヶ所村）国家石油備蓄基地" },
      { url: "/industry/japan-mineral-stockpile/", title: "日本のレアメタル備蓄制度", note: "六ヶ所国家石油・レアメタル備蓄" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東北電力エリア・原子燃料サイクル施設" },
      { url: "/industry/japan-paper/", title: "日本の製紙・パルプ産業", note: "三菱製紙八戸工場" },
      { url: "/industry/world-agriculture/", title: "世界の農産物・穀物トレード", note: "りんご輸出（台湾・香港向け）" },
    ],
  },
  "tohoku/iwate": {
    geo: "本州最大の面積を持つ県（全国 2 位）。北上山地と奥羽山脈に挟まれた北上盆地が県の中心。東岸はリアス式海岸の三陸海岸で、平泉に世界遺産（中尊寺金色堂ほか）。",
    eco: "米・畜産（前沢牛・短角牛）・畑作のバランスが取れた農業県。三陸沿岸はワカメ・カキ・アワビなど漁業が盛ん。製造業では北上市・金ケ崎町に半導体・自動車関連工場が集積し、東京エレクトロン東北・トヨタ自動車東日本の主要拠点。",
    rel: [
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "北上 東京エレクトロン東北" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東北電力エリア" },
    ],
  },
  "tohoku/miyagi": {
    geo: "東北地方の中心地で、仙台平野は東北最大の平野。太平洋岸は松島湾以南がリアス式海岸、以北が砂浜海岸。蔵王連峰・栗駒山が県境に連なる。",
    eco: "仙台市は東北の政治・経済・物流ハブ。製造業では半導体（東京エレクトロン宮城）、自動車部品（トヨタ自動車東日本）、ビール（キリン仙台）など。気仙沼・石巻はサンマ・カツオなど水産業の主要漁港。仙台港は東北のコンテナ・自動車輸出入の中核。",
    rel: [
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "黒川・大和町 東京エレクトロン宮城" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東北電力本店所在地" },
      { url: "/industry/japan-jr/", title: "日本のJR各社", note: "JR東日本仙台支社" },
    ],
  },
  "tohoku/akita": {
    geo: "日本海に面し、奥羽山脈と出羽山地に挟まれる。県中央の秋田平野は米作の中心地。県北の白神山地は世界自然遺産、十和田湖は青森との県境にまたがる。冬は日本海側気候で豪雪。",
    eco: "米の作付面積・収量とも全国上位（あきたこまちが主力）。鉱業の歴史が長く、小坂町・尾去沢ではかつて銅・鉛・亜鉛を産出、現在も DOWA ホールディングス（旧同和鉱業）系列の小坂製錬がリサイクル原料処理を担う。阿仁鉱山ではタングステン採掘の歴史がある。",
    rel: [
      { url: "/industry/japan-nonferrous/", title: "日本の非鉄金属製錬", note: "小坂製錬（DOWA系）— 都市鉱山リサイクル" },
      { url: "/industry/japan-tungsten/", title: "日本のタングステン産業", note: "阿仁鉱山（旧鉱山）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東北電力エリア" },
    ],
  },
  "tohoku/yamagata": {
    geo: "出羽山地と奥羽山脈に挟まれ、最上川が県を縦断する。庄内平野は県西部の穀倉地帯。県東部に蔵王連峰、北部に月山・羽黒山（出羽三山）。",
    eco: "米・サクランボ・西洋ナシ・ぶどう（デラウェア）などの果樹生産が全国上位。サクランボは全国の約 7 割を占める。製造業では半導体（東北エプソン、信越化学）、米沢の繊維（米織）が地場産業。",
    rel: [
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "鶴岡・米沢の半導体・電子部品工場" },
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "米沢の繊維産業（米織）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東北電力エリア" },
    ],
  },
  "tohoku/fukushima": {
    geo: "東北 6 県で唯一の阪神地域（東北最南端）で、面積は全国 3 位。県西部は会津地方、中央部は中通り、東部の沿岸が浜通りで、それぞれ気候・文化が異なる。磐梯山・猪苗代湖が中通りと会津の境にある。",
    eco: "米・桃・なし・きゅうりなど農業県。浜通りには福島第一原発があり、廃炉作業が進行中。浪江町・南相馬には水素・アンモニアなどの新エネルギー研究拠点（FH2R 福島水素エネルギー研究フィールド）。郡山・福島市には電子部品・精密機械産業が集積。",
    rel: [
      { url: "/industry/japan-hydrogen-ammonia/", title: "日本の水素・アンモニア拠点", note: "浪江 FH2R（福島水素エネルギー研究フィールド）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東京電力管内・福島第一/第二原発（廃炉中）" },
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "郡山・白河の電子部品工場" },
    ],
  },
  // 関東
  "kanto/ibaraki": {
    geo: "関東平野の北東部に位置し、太平洋に面する。県北は阿武隈高地、県南は霞ヶ浦（日本第 2 位の湖）。鹿島灘・九十九里浜が砂浜海岸。",
    eco: "鹿島臨海工業地域は石油精製・化学・鉄鋼（日本製鉄鹿島）・電力を集積する太平洋側最大級のコンビナートの 1 つ。つくば市は研究学園都市で国立研究機関と先端企業が集中する。レンコン・メロン・ピーマンなど農業も全国上位。",
    rel: [
      { url: "/industry/japan-combinat/kashima/", title: "鹿島コンビナート", note: "鹿島港・神栖市の石油・化学・鉄鋼コンビナート" },
      { url: "/industry/japan-industrial-zones/kashima/", title: "鹿島臨海工業地域", note: "茨城南東部の主要工業地帯" },
      { url: "/industry/japan-stockpile/", title: "日本の石油・LPガス備蓄基地", note: "鹿島石油備蓄基地" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東京電力エリア・東海第二原発" },
    ],
  },
  "kanto/tochigi": {
    geo: "関東平野の北端に位置する内陸県。県北には日光連山・那須連山、県南は関東平野が広がる。日光東照宮・中禅寺湖は世界遺産・国立公園に登録される観光地。",
    eco: "いちご（とちおとめ・とちあいか）の生産量は 54 年連続日本一。宇都宮市は餃子の街として知られ、住友大阪セメント佐野工場、自動車部品メーカー（栃木県内のホンダ・日産関連）も多い。マニー（医療機器）など世界シェアの高い専門メーカーが本社を置く。",
    rel: [
      { url: "/industry/japan-cement/", title: "日本のセメント工業", note: "住友大阪セメント佐野工場" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東京電力エリア" },
    ],
  },
  "kanto/gunma": {
    geo: "関東平野の北西端の内陸県。北部に谷川岳・尾瀬・草津白根山、南部に赤城山・榛名山・妙義山（上毛三山）。利根川源流域。",
    eco: "SUBARU の本社・主力工場が太田市にあり、自動車関連の中核県。富岡製糸場（世界遺産）に象徴される製糸の伝統があり、こんにゃく芋は全国の約 9 割を生産。キャベツ（嬬恋）・下仁田ねぎなど農業も多様。",
    rel: [
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東京電力エリア・水力発電（利根川水系）" },
      { url: "/industry/japan-tire/", title: "日本のタイヤ産業", note: "ブリヂストン東洋タイヤ／関連工場" },
    ],
  },
  "kanto/saitama": {
    geo: "東京都の北側に隣接する関東平野の内陸県。県西部に秩父山地、東部・南部は荒川・利根川流域の平野。海に面しない 8 県の 1 つ。",
    eco: "東京都に隣接するため物流・倉庫業の集積が顕著（圏央道沿線）。本田技研工業の主力 2 輪・4 輪工場（狭山・寄居）。秩父地域はセメント（武甲山由来）の産地で、太平洋セメント熊谷・三菱マテリアル横瀬の拠点がある。",
    rel: [
      { url: "/industry/japan-logistics/", title: "日本のロジスティクス", note: "圏央道沿線（久喜・坂戸・狭山等の物流拠点）" },
      { url: "/industry/japan-cement/", title: "日本のセメント工業", note: "秩父・熊谷（武甲山系石灰石）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東京電力エリア" },
    ],
  },
  "kanto/chiba": {
    geo: "房総半島がほぼ全域を占め、東京湾と太平洋に挟まれる。半島中央に房総丘陵、北部は下総台地と利根川下流の平野。",
    eco: "京葉コンビナートは石油精製・化学・鉄鋼（JFE 千葉）・電力を集積する首都圏最大のコンビナート。木更津・市原に LNG・原油・LPG の輸入基地。成田国際空港は国際物流の中核。落花生・梨・日本なし・ねぎなど農業も上位。",
    rel: [
      { url: "/industry/japan-combinat/keiyo/", title: "京葉コンビナート", note: "市原・千葉・袖ケ浦の石油化学・鉄鋼コンビナート" },
      { url: "/industry/japan-stockpile/", title: "日本の石油・LPガス備蓄基地", note: "袖ケ浦・市原の LPG/石油備蓄" },
      { url: "/industry/japan-paper/", title: "日本の製紙・パルプ産業", note: "王子製紙市原工場" },
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "千葉港（取扱貨物量全国上位）" },
    ],
  },
  "kanto/tokyo": {
    geo: "日本の首都。区部・多摩地域・伊豆諸島・小笠原諸島から成る。面積は全国 45 位と狭いが、人口は約 1,406 万人で全国 1 位。小笠原諸島はユネスコ世界自然遺産。",
    eco: "日本最大の経済圏で、上場企業の本社の半数以上、外資系企業の大半が集中する。総合商社（三菱商事・三井物産・伊藤忠・住友・丸紅）、メガバンク、海運大手（日本郵船・商船三井・川崎汽船）の本社が東京にあり、グローバル企業の意思決定機能が集積する。",
    rel: [
      { url: "/industry/japan-trading-company/", title: "日本の商社", note: "5 大商社（三菱・三井・伊藤忠・住友・丸紅）の本社所在地" },
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "日本郵船・商船三井・川崎汽船の本社" },
      { url: "/industry/japan-logistics/", title: "日本のロジスティクス", note: "首都圏物流の中枢" },
      { url: "/industry/japan-jr/", title: "日本のJR各社", note: "JR 東日本・JR 東海・JR 貨物の本社" },
    ],
  },
  "kanto/kanagawa": {
    geo: "東京都の南側に隣接し、東京湾と相模湾に面する。三浦半島・湘南海岸・箱根山・丹沢山地など多様な地形。横浜・川崎は京浜工業地帯の中核。",
    eco: "京浜工業地帯は鉄鋼（JFE 京浜は休止）・石油精製・化学・自動車（日産横浜）の集積地。横浜港は全国有数のコンテナ取扱量。本社機能では日産自動車・東芝・キヤノンなどグローバル製造業が立地。",
    rel: [
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "横浜港（首都圏のコンテナ・完成車輸出入)" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東京電力エリア・横須賀火力" },
      { url: "/industry/japan-logistics/", title: "日本のロジスティクス", note: "京浜港湾物流" },
    ],
  },
  // 中部
  "chubu/niigata": {
    geo: "本州日本海側の中央部に位置し、面積は全国 5 位。越後平野は信濃川・阿賀野川がつくる広大な穀倉地帯。佐渡島は県西沖、上越国境には越後山脈・苗場山。冬は日本海側気候で世界有数の豪雪地帯。",
    eco: "米の収穫量は全国 1 位（コシヒカリの主産地）。日本海側最大の港湾・新潟港を持ち、ロシア極東との貿易の窓口。製紙（王子製紙新潟）・非鉄金属（直江津）・電子部品など製造業も多様。",
    rel: [
      { url: "/industry/japan-paper/", title: "日本の製紙・パルプ産業", note: "新潟・燕の製紙工場" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東北電力／柏崎刈羽原発（東京電力）" },
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "新潟港（日本海側最大級）" },
    ],
  },
  "chubu/toyama": {
    geo: "富山湾に面し、立山連峰・剱岳など 3,000m 級の北アルプスが県南東に連なる。黒部峡谷・宇奈月温泉・室堂など山岳観光地が豊富。",
    eco: "「越中富山の薬売り」で知られる配置薬の伝統から、医薬品製造業が今も県の主要産業（県内製薬出荷額は全国上位）。アルミ二次加工（三協立山）・水力発電（黒部ダム由来の電力でアルミ精錬の歴史）・繊維など多岐にわたる。",
    rel: [
      { url: "/industry/japan-drugstore/", title: "日本のドラッグストア業界", note: "配置薬発祥の地・製薬企業の集積" },
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "YKK 黒部・繊維・ファスナー" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "北陸電力本店・黒部川水系の水力発電" },
    ],
  },
  "chubu/ishikawa": {
    geo: "能登半島が日本海に大きく突き出た北陸の県。県中央の金沢平野、能登半島の里山里海。白山は日本三霊山の 1 つ。",
    eco: "九谷焼・輪島塗・加賀友禅など伝統工芸が今も生きる。コマツ粟津工場（建機）が世界市場の中核拠点。津幡・小松には繊維・機械工業の集積。金沢は北陸の金融・観光ハブ。",
    rel: [
      { url: "/industry/japan-pottery/", title: "日本の焼き物産地", note: "九谷焼（加賀地方）" },
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "小松・能美の繊維産業" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "北陸電力エリア・志賀原発" },
    ],
  },
  "chubu/fukui": {
    geo: "若狭湾と日本海に面する北陸の県。嶺北（福井平野）と嶺南（若狭地方）で気候・文化が分かれる。県南西部に若狭湾沿いの原発銀座（敦賀・美浜・大飯・高浜）。",
    eco: "鯖江市は眼鏡フレーム生産で国内シェア約 95%・世界シェア約 20%。福井平野では繊維（合成繊維）が伝統産業。越前焼・越前打刃物・越前和紙など伝統工芸も健在。若狭湾沿岸の原発群は関西電力管轄で、関西圏に電力を供給する。",
    rel: [
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "福井の合繊産業（テキスタイル）" },
      { url: "/industry/japan-pottery/", title: "日本の焼き物産地", note: "越前焼（六古窯の 1 つ）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "若狭湾沿岸の原発群（関西電力）" },
    ],
  },
  "chubu/yamanashi": {
    geo: "富士山・八ヶ岳・南アルプスなど 3,000m 級の山岳に囲まれた内陸県。甲府盆地が県の中心で、富士五湖が県南東部にある。海に面しない 8 県の 1 つ。",
    eco: "ぶどう・もも・すももの生産量が全国 1 位で、ワイン産業（甲州ワイン）の中心地。ファナック（産業用ロボットで世界シェア約 22%、CNC で世界シェア約 50%）の本社・工場が忍野村にあり、この 1 社の存在で県の工業出荷額が大きく振れる。",
    rel: [
      { url: "/industry/japan-robotics/", title: "日本の産業用ロボット産業", note: "ファナック（忍野村）— 世界シェア首位級" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "東京電力エリア（駿河湾以東）" },
    ],
  },
  "chubu/nagano": {
    geo: "8 県と接する内陸県（接県数日本一）。北アルプス・中央アルプス・南アルプスの 3 つの 3,000m 級山岳が県を縦断する。日本で最も標高が高い県庁所在地（長野市）の 1 つ。",
    eco: "精密機械（時計・カメラ）の伝統から、現在は半導体製造装置・電子部品の集積（諏訪・岡谷）。エプソン（諏訪）・ミネベアミツミなど。高原野菜（レタス・白菜）の生産も全国上位。",
    rel: [
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "諏訪・岡谷の精密機械・半導体製造装置" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "中部電力エリア・水力発電" },
    ],
  },
  "chubu/shizuoka": {
    geo: "東西に長く、富士山・南アルプスを北に、駿河湾・遠州灘を南に擁する。伊豆半島が東部に突き出す。茶畑・温暖な気候・富士山伏流水が地域文化を形成。",
    eco: "製紙・パルプ（富士市は日本最大の紙生産地）。自動車・二輪では浜松にスズキ・ホンダ・ヤマハ発動機の本社／創業地。茶（やぶきた）・みかん・うなぎ・桜エビなど農水産品も豊富。",
    rel: [
      { url: "/industry/japan-paper/", title: "日本の製紙・パルプ産業", note: "富士市（国内最大級の製紙集積）" },
      { url: "/industry/japan-tire/", title: "日本のタイヤ産業", note: "ブリヂストン横浜タイヤ／関連" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "中部電力エリア・浜岡原発" },
    ],
  },
  "chubu/aichi": {
    geo: "濃尾平野の南東部に位置し、伊勢湾・三河湾に面する。県西部は名古屋を中心とした平野部、東部は三河山地。",
    eco: "トヨタ自動車本社・主力工場（豊田市）を中核とする「クルマの愛知」。製造品出荷額は 40 年以上連続で全国 1 位。瀬戸焼・常滑焼の窯業、一宮・知多の繊維、東邦ガス・中部電力など多様な産業基盤を持つ。",
    rel: [
      { url: "/industry/japan-robotics/", title: "日本の産業用ロボット産業", note: "デンソー・ファナック取引先・トヨタ系自動化" },
      { url: "/industry/japan-pottery/", title: "日本の焼き物産地", note: "瀬戸焼・常滑焼（六古窯）" },
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "一宮（毛織物）・東レ" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "中部電力本社" },
    ],
  },
  // 近畿
  "kinki/mie": {
    geo: "紀伊半島の東部、伊勢湾・熊野灘に面する。北部は伊勢平野、南部は紀伊山地・熊野古道（世界遺産）。志摩半島はリアス式海岸。",
    eco: "四日市コンビナートは石油精製・石油化学（コスモ石油・東ソー・三菱ケミカル）の集積地で、四大コンビナートの 1 つ。キオクシア四日市は世界有数の NAND フラッシュメモリ拠点。鈴鹿には日清食品（インスタントラーメン発祥地）・本田技研鈴鹿製作所。萬古焼（菰野・四日市）の産地。",
    rel: [
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "キオクシア四日市（NAND フラッシュ）" },
      { url: "/industry/japan-instant-noodle/", title: "インスタントラーメンの世界戦争", note: "鈴鹿に日清食品の主力工場" },
      { url: "/industry/japan-pottery/", title: "日本の焼き物産地", note: "萬古焼（菰野・四日市）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "中部電力エリア" },
    ],
  },
  "kinki/shiga": {
    geo: "近畿地方の北東部に位置する内陸県。県中央に日本最大の湖・琵琶湖（県面積の約 6 分の 1）、周囲を比叡山・伊吹山・鈴鹿山脈が囲む。",
    eco: "ブリヂストン彦根工場をはじめタイヤ製造の重要拠点。製薬（協和発酵バイオ・武田など）・ガラス（日本電気硝子大津）・繊維（近江上布）など多様な製造業。彦根・近江八幡・大津に観光資源も豊富。",
    rel: [
      { url: "/industry/japan-tire/", title: "日本のタイヤ産業", note: "ブリヂストン彦根工場・東洋ゴム" },
      { url: "/industry/japan-glass/", title: "日本の板ガラス・特殊ガラス産業", note: "日本電気硝子大津本社" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "関西電力エリア" },
    ],
  },
  "kinki/kyoto": {
    geo: "南北に長く、北は日本海（丹後半島・天橋立）、南は山城盆地（京都市）。東に比叡山、西に丹波山地。",
    eco: "京都市内には任天堂・京セラ・村田製作所・島津製作所・オムロン・日本電産など世界的なグローバル企業の本社が集中する珍しい地域。京焼・清水焼・西陣織などの伝統工芸が今も観光と地場産業を支える。日本酒は伏見が灘と並ぶ大産地。",
    rel: [
      { url: "/industry/japan-pottery/", title: "日本の焼き物産地", note: "京焼・清水焼" },
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "西陣織・友禅染" },
      { url: "/industry/japan-trading-company/", title: "日本の商社", note: "京都の独自企業群（任天堂・京セラ・村田製作所等）" },
    ],
  },
  "kinki/osaka": {
    geo: "近畿地方の中心で、大阪湾に面する。淀川・大和川など大河川が流入し、市街地は埋立地と低地が多い。府の南部に泉州（堺以南）の海岸・丘陵地帯。",
    eco: "西日本最大の経済圏で、商業・卸売の中心として「天下の台所」の歴史。道修町は江戸期からの薬種街で、現在も武田薬品・塩野義・大日本住友製薬・田辺三菱の本社が集積する製薬の中心地。堺は刃物（プロ用包丁国内シェア約 9 割）。池田に日清食品創業地（インスタントラーメン誕生）。泉州は綿織物の伝統産業地。",
    rel: [
      { url: "/industry/japan-instant-noodle/", title: "インスタントラーメンの世界戦争", note: "池田で日清食品が世界初のインスタントラーメンを発売（1958）" },
      { url: "/industry/japan-trading-company/", title: "日本の商社", note: "伊藤忠・住友商事・丸紅・双日のルーツ" },
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "東洋紡（大阪本社）・泉州綿織物" },
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "大阪港・阪神港" },
    ],
  },
  "kinki/hyogo": {
    geo: "近畿地方の中部、瀬戸内海と日本海の両方に面する珍しい県。神戸・阪神地区は瀬戸内側、城崎・但馬は日本海側。淡路島は県南西の島。",
    eco: "神戸製鋼・川崎重工神戸造船所・三菱重工神戸造船所など重厚長大産業の中核地。神戸港は日本有数のコンテナ取扱量。姫路には日本製鉄広畑・三菱電機・パナソニックの主力工場。神戸の灘・西宮の灘五郷は日本酒の最大産地。",
    rel: [
      { url: "/industry/japan-shipbuilding/", title: "日本の造船業", note: "神戸（三菱重工・川崎重工）・相生（IHI）" },
      { url: "/industry/japan-cement/", title: "日本のセメント工業", note: "姫路の太平洋セメント・宇部三菱" },
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "神戸港（日本有数のコンテナ港）" },
      { url: "/industry/japan-tire/", title: "日本のタイヤ産業", note: "住友ゴム神戸本社・ブリヂストン関連" },
    ],
  },
  "kinki/nara": {
    geo: "近畿地方の中部、海に面しない 8 県の 1 つ。県北部に奈良盆地、南部は紀伊山地で吉野・大峰山系。古都奈良の文化財・法隆寺地域・紀伊山地の霊場と参詣道はいずれも世界遺産。",
    eco: "靴下生産は全国シェア約 6 割で、広陵町が中心地。プラスチック手袋・蚊帳・墨など独特の地場産業が多い。観光業（東大寺・春日大社・興福寺）が県経済の重要な柱。",
    rel: [
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "広陵町の靴下産業（国内シェア約 6 割）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "関西電力エリア" },
    ],
  },
  "kinki/wakayama": {
    geo: "紀伊半島の南西部を占め、太平洋（紀伊水道・熊野灘）に面する。県南部は紀伊山地で熊野古道・熊野三山が世界遺産。串本は本州最南端。",
    eco: "梅（南高梅）の生産量は全国の約 6 割で日本一。みかん・柿・はっさくなど柑橘類も全国上位。製鉄では日本製鉄和歌山製鉄所が県北部に立地し、家電・化学（花王・東燃ゼネラル）も集積。",
    rel: [
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "関西電力エリア・御坊火力" },
      { url: "/industry/world-agriculture/", title: "世界の農産物・穀物トレード", note: "梅・柑橘の輸出" },
    ],
  },
  // 中国
  "chugoku/tottori": {
    geo: "日本海に面した中国地方北部の県。鳥取砂丘は日本最大級の海岸砂丘。県西部に大山（中国地方最高峰）、県境に蒜山高原。人口は全国最少の 47 位。",
    eco: "二十世紀梨・らっきょう・スイカなど農業が中心。境港は本州西側のサバ・カニ漁の主要港。境港市は「ゲゲゲの鬼太郎」作者・水木しげるの出身地で観光資源化されている。",
    rel: [
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "中国電力エリア" },
      { url: "/industry/world-agriculture/", title: "世界の農産物・穀物トレード", note: "二十世紀梨など果樹輸出" },
    ],
  },
  "chugoku/shimane": {
    geo: "日本海に面した中国地方の北西部の県。県西部に石見地方、東部に出雲地方、北沖に隠岐諸島。出雲大社・石見銀山（世界遺産）・宍道湖など歴史・自然遺産が豊富。",
    eco: "石見銀山は江戸期に世界有数の銀生産を誇った（現在は閉山）。今は JFE 条鋼松江・島根原発・水産（しじみ・ノドグロ）が産業の中心。",
    rel: [
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "中国電力・島根原発" },
      { url: "/industry/japan-nonferrous/", title: "日本の非鉄金属製錬", note: "石見銀山（歴史的銀産地）" },
    ],
  },
  "chugoku/okayama": {
    geo: "瀬戸内海に面し、中国山地と瀬戸内海に挟まれる。岡山平野は穀倉地帯。瀬戸内側は晴天日数が多く「晴れの国」と呼ばれる。瀬戸大橋で香川県（四国）と接続。",
    eco: "水島コンビナートは瀬戸内工業地域の中核で、JFE 西日本（旧川崎製鉄）・三菱自工水島・三菱ケミカル・出光興産などが集積。倉敷市児島はジーンズ発祥地で、国内最大の繊維産地。備前焼の伝統。マスカット・桃など果樹も全国上位。",
    rel: [
      { url: "/industry/japan-combinat/mizushima/", title: "水島コンビナート", note: "倉敷市水島の鉄鋼・石油化学コンビナート" },
      { url: "/industry/japan-industrial-zones/setouchi/", title: "瀬戸内工業地域", note: "岡山県南部（水島）が中核地" },
      { url: "/industry/japan-pottery/", title: "日本の焼き物産地", note: "備前焼（六古窯）" },
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "水島港（取扱貨物量全国上位）" },
    ],
  },
  "chugoku/hiroshima": {
    geo: "瀬戸内海に面した中国地方最大の県。県中央の広島平野、県東部の福山平野。瀬戸内には宮島・しまなみ海道。原爆ドーム・厳島神社が世界遺産。",
    eco: "マツダ（広島市・府中町）の本社・主力工場。JFE スチール西日本（福山）・三井造船（玉野/常石）・三菱重工広島造船所など重工業の集積。レモン・もみじまんじゅう・牡蠣（広島湾は全国の 6 割）も特産。",
    rel: [
      { url: "/industry/japan-industrial-zones/setouchi/", title: "瀬戸内工業地域", note: "福山・呉・広島が中核" },
      { url: "/industry/japan-shipbuilding/", title: "日本の造船業", note: "尾道・常石（常石造船）・呉（旧三菱重工）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "中国電力本店所在地" },
    ],
  },
  "chugoku/yamaguchi": {
    geo: "本州最西端で、瀬戸内海と日本海に面する。県西は関門海峡を挟んで九州（北九州市）と接続。秋吉台はカルスト台地（特別天然記念物）。",
    eco: "周南コンビナート（徳山・新南陽）と宇部・小野田は石油化学・セメント（宇部三菱セメント・太平洋セメント宇部）の中核。下関はフグ（ふく）・捕鯨の伝統と港湾物流。トクヤマ・三井化学岩国大竹工場など化学企業の集積。",
    rel: [
      { url: "/industry/japan-cement/", title: "日本のセメント工業", note: "宇部・小野田（宇部三菱セメント本社）" },
      { url: "/industry/japan-industrial-zones/setouchi/", title: "瀬戸内工業地域", note: "周南・徳山・宇部" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "中国電力エリア・上関原発計画地" },
    ],
  },
  // 四国
  "shikoku/tokushima": {
    geo: "四国の東部、瀬戸内海・紀伊水道に面する。県北は吉野川・讃岐山脈、県南は剣山・那賀川流域の山地。鳴門海峡に世界三大潮流の 1 つ・鳴門の渦潮。",
    eco: "日亜化学工業（阿南）は青色 LED・LED チップで世界トップクラスのシェア。徳島市は阿波踊りで知られ、すだち・なるとオレンジ・なると金時など農産物も多い。",
    rel: [
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "阿南 日亜化学工業（青色 LED 世界トップ）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "四国電力エリア" },
    ],
  },
  "shikoku/kagawa": {
    geo: "四国の北東部、瀬戸内海に面する日本最小面積の県（全国 47 位）。讃岐平野・讃岐山脈・小豆島が主な地形。瀬戸大橋で岡山県と接続。",
    eco: "讃岐うどんの本場で、小麦製粉（日清製粉グループ）も県内で完結する珍しい地域。今治造船多度津造船所など造船関連、丸亀の手袋（皮革手袋・スポーツ手袋）が国内シェア 9 割。直島はベネッセアートサイト・三菱マテリアル直島製錬所（リサイクル銅・貴金属）。",
    rel: [
      { url: "/industry/japan-shipbuilding/", title: "日本の造船業", note: "今治造船多度津造船所" },
      { url: "/industry/japan-nonferrous/", title: "日本の非鉄金属製錬", note: "三菱マテリアル直島製錬所（都市鉱山リサイクル）" },
      { url: "/industry/japan-industrial-zones/setouchi/", title: "瀬戸内工業地域", note: "坂出・宇多津の臨海工業地" },
    ],
  },
  "shikoku/ehime": {
    geo: "四国の北西部、瀬戸内海と宇和海に面する。県中央に石鎚山（西日本最高峰）、北部にしまなみ海道（広島県と結ぶ）。",
    eco: "今治市は造船業で世界有数（今治造船は国内最大）・タオル生産で国内シェア約 6 割。四国中央市は製紙・紙加工で日本一の集積（大王製紙・愛媛製紙）。みかん・伊予柑など柑橘類も全国上位。",
    rel: [
      { url: "/industry/japan-shipbuilding/", title: "日本の造船業", note: "今治造船グループ（国内最大）・波止浜" },
      { url: "/industry/japan-paper/", title: "日本の製紙・パルプ産業", note: "四国中央市（大王製紙等）— 国内最大級の紙生産集積" },
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "今治タオル（国内シェア約 6 割）" },
    ],
  },
  "shikoku/kochi": {
    geo: "四国の南部、太平洋に面する。県北に四国山地、県南は黒潮の流れる土佐湾。海岸線は東西に長く、室戸岬・足摺岬は本州・四国の南端。",
    eco: "なす・しょうが・ゆずなど施設園芸が全国上位。一本釣りカツオ漁の本場で、土佐の鰹節は伝統産業。林業も盛んで、土佐和紙・土佐備長炭などの伝統産業を支える。",
    rel: [
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "四国電力エリア" },
      { url: "/industry/japan-paper/", title: "日本の製紙・パルプ産業", note: "土佐和紙（伝統紙）" },
    ],
  },
  // 九州
  "kyusyu/fukuoka": {
    geo: "九州の北部に位置し、玄界灘・響灘・周防灘に面する。県西は福岡平野、県東は北九州地域。関門海峡を挟んで山口県と接続。",
    eco: "九州最大の経済圏。北九州は日本製鉄八幡（明治以来の重工業集積）・トヨタ自動車九州・日産九州・苅田の太平洋セメントなど。福岡市は商業・サービス・IT のハブで、半導体関連企業も TSMC 熊本進出を背景に増加。",
    rel: [
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "北部九州の半導体集積（TSMC 熊本連動）" },
      { url: "/industry/japan-semiconductor/kyushu/", title: "九州半導体クラスター", note: "九州一円の半導体クラスター（福岡が窓口）" },
      { url: "/industry/japan-cement/", title: "日本のセメント工業", note: "苅田の太平洋セメント・三菱マテリアル" },
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "博多港・北九州港" },
    ],
  },
  "kyusyu/saga": {
    geo: "九州の北西部、玄界灘・有明海に面する。県東部に脊振山地、南部に有明海干潟。日本最大級の干潟生態系を有する。",
    eco: "有田焼・伊万里焼・唐津焼の窯業集積（全国の磁器の代表産地）。県西部にはソニーセミコンダクタソリューションズ熊本連携の集積効果も及ぶ。海苔（有明海産）の生産は全国 1 位。",
    rel: [
      { url: "/industry/japan-pottery/", title: "日本の焼き物産地", note: "有田焼・伊万里焼・唐津焼（日本の磁器発祥地）" },
      { url: "/industry/japan-semiconductor/kyushu/", title: "九州半導体クラスター", note: "佐賀の半導体・電子部品関連" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "九州電力・玄海原発" },
    ],
  },
  "kyusyu/nagasaki": {
    geo: "九州の北西部、対馬・壱岐・五島列島など離島が多い。長崎半島・島原半島が南に伸び、雲仙岳・普賢岳の火山地帯。海岸線の総延長は北海道に次ぐ全国 2 位。",
    eco: "三菱重工長崎造船所は明治期からの近代造船発祥地（軍艦島・端島は世界遺産）。佐世保には重工系造船・米軍基地。長崎市は観光（眼鏡橋・グラバー園・出島）・水産業の中心。",
    rel: [
      { url: "/industry/japan-shipbuilding/", title: "日本の造船業", note: "長崎（三菱重工）・佐世保（佐世保重工）" },
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "長崎港・佐世保港" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "九州電力エリア" },
    ],
  },
  "kyusyu/kumamoto": {
    geo: "九州中部、有明海・八代海・東シナ海に面する。県中央に阿蘇山（世界最大級のカルデラ）、南部に九州山地・球磨川。",
    eco: "TSMC 熊本（菊陽町）の進出で半導体クラスターの中心地に急浮上。本田技研工業熊本製作所（二輪）。スイカ・トマト・アスパラガス・くまもと黒牛など農業も全国上位。八代の畳表（い草）は全国シェア約 9 割。",
    rel: [
      { url: "/industry/japan-semiconductor/", title: "日本の半導体産業集積地", note: "菊陽町 TSMC（JASM）— 国内最大の海外ファウンドリ進出" },
      { url: "/industry/japan-semiconductor/kyushu/", title: "九州半導体クラスター", note: "熊本中心の九州半導体集積" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "九州電力エリア" },
    ],
  },
  "kyusyu/oita": {
    geo: "九州の東部、瀬戸内海（豊後水道）・伊予灘に面する。県中央に九重連山・阿蘇山系、南部にリアス式海岸。別府・由布院など温泉の湧出量は全国 1 位。",
    eco: "津久見の太平洋セメント・小野田は西日本最大級のセメント生産地。日本製鉄大分は粗鋼生産で国内最大級。臼杵・佐伯の造船、九州石油（出光大分）。シイタケ・かぼす・関アジ・関サバなど多様な特産。",
    rel: [
      { url: "/industry/japan-cement/", title: "日本のセメント工業", note: "津久見（太平洋セメント）— 西日本最大級" },
      { url: "/industry/japan-shipbuilding/", title: "日本の造船業", note: "臼杵・佐伯の造船" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "九州電力エリア" },
    ],
  },
  "kyusyu/miyazaki": {
    geo: "九州の南東部、太平洋（日向灘）に面する。県北は九州山地、南部は霧島山系。日南海岸・青島・高千穂峡など景勝地。",
    eco: "畜産（みやざき牛・地頭鶏・宮崎ブランドポーク）の中心地で、ブロイラー出荷羽数は全国 1 位。きゅうり・ピーマン・マンゴー（完熟マンゴー）など農業も上位。延岡には旭化成の創業地・主力工場（化学・繊維・医薬）。",
    rel: [
      { url: "/industry/japan-fiber/", title: "日本の合成繊維・炭素繊維産業", note: "延岡 旭化成（創業地・繊維事業の中核）" },
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "九州電力エリア" },
    ],
  },
  "kyusyu/kagoshima": {
    geo: "九州の南端、東シナ海・太平洋に面する。県中央に活火山・桜島（鹿児島市の対岸）、北に霧島連山、南に薩摩半島・大隅半島。離島は屋久島（世界自然遺産）・種子島・奄美群島など。",
    eco: "畜産（黒豚・黒牛）と薩摩焼酎が代表。さつまいも・茶・ぶり養殖は全国 1 位。種子島には JAXA 種子島宇宙センター（ロケット打ち上げ）。",
    rel: [
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "九州電力・川内原発" },
      { url: "/industry/world-agriculture/", title: "世界の農産物・穀物トレード", note: "茶・さつまいも輸出" },
    ],
  },
  "kyusyu/okinawa": {
    geo: "日本最南端の県で、沖縄本島・宮古諸島・八重山諸島など 160 以上の島々から成る。亜熱帯気候で、サンゴ礁・マングローブ林。海に面しないどころか県全域が島嶼。",
    eco: "観光業が県経済の中心。米軍基地が県面積の約 8% を占める。製糖業（サトウキビ）・パイナップル・ゴーヤ・もずくなどの農水産物。本土とは異なる赤瓦・シーサーの建築文化が GeoGuessr の判別に有効。",
    rel: [
      { url: "/industry/japan-power/", title: "日本の電力会社", note: "沖縄電力（本土と独立した系統）" },
      { url: "/industry/japan-shipping/", title: "日本の海運業", note: "那覇港・本部港" },
    ],
  },
};

let added = 0, skipped = 0, missing = 0, parseErr = 0;

for (const [dir, payload] of Object.entries(DATA)) {
  const filePath = path.join(RULE_BASE, dir, "_index.ja.md");
  if (!fs.existsSync(filePath)) {
    console.warn(`MISSING: ${filePath}`);
    missing++;
    continue;
  }
  const content = fs.readFileSync(filePath, "utf-8");
  const fmMatch = content.match(/^(---\r?\n)([\s\S]*?)(\r?\n---)/);
  if (!fmMatch) {
    console.warn(`NO FRONTMATTER: ${dir}`);
    parseErr++;
    continue;
  }
  const fmBody = fmMatch[2];
  if (!/^prefInfo:/m.test(fmBody)) {
    console.warn(`NO prefInfo: ${dir} — run add_pref_info.mjs first`);
    parseErr++;
    continue;
  }
  if (/^\s{2}geography:|^\s{2}economy:|^\s{2}relatedIndustry:/m.test(fmBody)) {
    console.log(`SKIP (already populated): ${dir}`);
    skipped++;
    continue;
  }

  // Find the prefInfo block. Insert geo/eco/relatedIndustry at its end
  // (i.e. just before the next top-level key, or before `---`).
  const eol = fmMatch[1].includes("\r\n") ? "\r\n" : "\n";

  // Build the YAML strings using single-quoted scalars for safety. Single
  // quotes only need to be doubled to escape; full-width Japanese has none.
  const sq = (s) => `'${s.replace(/'/g, "''")}'`;
  const newLines = [
    `  geography: ${sq(payload.geo)}`,
    `  economy: ${sq(payload.eco)}`,
    `  relatedIndustry:`,
    ...payload.rel.flatMap((r) => [
      `    - url: ${sq(r.url)}`,
      `      title: ${sq(r.title)}`,
      ...(r.note ? [`      note: ${sq(r.note)}`] : []),
    ]),
  ].join(eol);

  // Locate the end of the prefInfo block. The block ends where another
  // top-level YAML key begins (a non-indented line) or at end of frontmatter.
  const lines = fmBody.split(/\r?\n/);
  let prefStart = -1;
  let prefEnd = lines.length;
  for (let i = 0; i < lines.length; i++) {
    if (/^prefInfo:/.test(lines[i])) {
      prefStart = i;
    } else if (prefStart >= 0 && i > prefStart && /^[A-Za-z_]/.test(lines[i])) {
      prefEnd = i;
      break;
    }
  }
  if (prefStart < 0) {
    console.warn(`Could not locate prefInfo block in ${dir}`);
    parseErr++;
    continue;
  }

  // Insert at prefEnd (right before next top-level key).
  const before = lines.slice(0, prefEnd).join(eol);
  const after = lines.slice(prefEnd).join(eol);
  // Trim trailing whitespace before joining to keep tidy output
  const newFmBody = before.replace(/[\s\r\n]+$/, "") + eol + newLines +
    (after ? eol + after : "");

  const newContent =
    fmMatch[1] + newFmBody + fmMatch[3] + content.slice(fmMatch[0].length);
  fs.writeFileSync(filePath, newContent, "utf-8");
  console.log(`OK: ${dir}`);
  added++;
}

console.log(`\nDone — added: ${added}, skipped: ${skipped}, missing: ${missing}, parseErr: ${parseErr}`);
