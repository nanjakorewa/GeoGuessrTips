---
title: "九州半導体クラスター"
subtitle: "シリコンアイランド九州 — TSMC・ソニー・ルネサスが集積するロジック・センサー産地"
date: 2026-03-25
lastmod: 2026-03-25
description: "熊本を中心とする九州半導体クラスターを詳解。TSMC熊本工場（JASM）の生産規模・ソニーCMOSイメージセンサー・ルネサス大分・歴史的経緯と主要上場企業データ。"
weight: 10
---

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">TSMC熊本第1工場 月産能力</p>
    <p class="stat-card__value">5.5万</p>
    <p class="stat-card__unit">枚（300mm・2024年12月量産開始）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">ソニー CMOSセンサー世界シェア</p>
    <p class="stat-card__value">約50</p>
    <p class="stat-card__unit">%（スマートフォン向け・2023年）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">TSMC熊本第2工場 稼働予定</p>
    <p class="stat-card__value">2027</p>
    <p class="stat-card__unit">年（6nm/4nmプロセス）</p>
  </div>
</div>

## 九州半導体クラスターの産業ネットワーク

{{% mermaid %}}
graph LR
  A["シリコンウェーハ\n信越化学・SUMCO"]-->B["TSMC熊本（JASM）\n12/16/28nm"]
  A-->C["ソニーセミコンダクタ\n熊本・合志・長崎"]
  A-->D["ルネサス川尻\n車載マイコン"]
  A-->D2["ルネサス大分\nADAS向けSoC"]
  B-->E["デンソー\n車載チップ"]
  B-->F["ソニー\n家電・カメラ"]
  C-->G["スマートフォン\nカメラモジュール"]
  C-->H["車載カメラ\n監視カメラ"]
  D-->I["自動車ECU\n産業機器"]
  D2-->I
  J["製造装置・材料\nTEL九州・TOK"]-->B
  J-->C
  style A fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
  style J fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
  style B fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style C fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style D fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style D2 fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style E fill:#d1fae5,color:#065f46,stroke:#10b981
  style F fill:#d1fae5,color:#065f46,stroke:#10b981
  style G fill:#d1fae5,color:#065f46,stroke:#10b981
  style H fill:#d1fae5,color:#065f46,stroke:#10b981
  style I fill:#d1fae5,color:#065f46,stroke:#10b981
{{% /mermaid %}}

## TSMC熊本工場（JASM）

JASM（Japan Advanced Semiconductor Manufacturing）はTSMCが日本で設立した製造子会社で、ソニーグループ（約6%）・デンソー（約10%）・トヨタ自動車（約2%）が出資しています{{% cite "jasm2024" %}}。

| 項目 | 第1工場 | 第2工場（計画） |
| ---- | ------- | -------------- |
| 所在地 | 熊本県菊陽町 | 熊本県菊陽町（隣接） |
| 稼働開始 | 2024年2月開所、同年12月量産開始 | 2027年予定 |
| プロセスノード | 12nm / 16nm / 28nm | 6nm / 4nm |
| 月産能力 | 55,000枚（300mm） | 100,000枚（計画） |
| 国家補助金 | 約4,760億円 | 約7,320億円（予定） |
| 主な顧客 | ソニー・デンソー・ルネサス | 未公表 |

熊本工場が生産する28nmプロセスは**成熟ノード**と呼ばれ、車載・産業機器・IoT向けに安定した需要があります。最先端の2nm以下と異なり、EUV露光装置を使わず既存のArFi露光で製造でき、設備投資を抑えつつ高い歩留まりを実現できます。

## ソニーセミコンダクタ — CMOSイメージセンサー

ソニーの半導体部門（ソニーセミコンダクタソリューションズ）は熊本県と長崎県に主力工場を保有し、スマートフォン向けCMOSイメージセンサーで世界シェア約50%を占めます{{% cite "sony2023" %}}。

| 工場 | 所在地 | 主な製品 |
| ---- | ------ | -------- |
| 熊本テクノロジーセンター | 熊本県菊陽町 | 積層型CMOSセンサー（スマートフォン・車載） |
| 合志市清水新工場 | 熊本県合志市 | イメージセンサー新工場（JASM隣接地）。車載用センサー増産に対応 |
| 長崎テクノロジーセンター | 長崎県諫早市 | CMOSセンサー・ToFセンサー |
| 大分TDセンター | 大分県大分市 | センサー後工程・試験 |

ソニーの積層型センサー技術（Stacked CMOS）は、画素層と回路層を別々のウェーハで製造して貼り合わせるもので、高画質・高速読み出しを両立します。TSMC熊本工場との地理的近接により、ウェーハ調達・技術連携の効率化が期待されています。

## ルネサスエレクトロニクス — 九州2拠点体制

ルネサスは九州に2つの主力前工程拠点を持ち、車載マイコン・SoCの世界シェアトップクラスの製造基盤を形成しています{{% cite "renesas2023" %}}。

| 工場 | 所在地 | 主な製品 |
| ---- | ------ | -------- |
| 川尻工場 | 熊本市南区 | 車載マイコン前工程（40nm/90nm中心）。世界シェアトップクラスの車載マイコン主力拠点 |
| 大分工場 | 大分県大分市 | 300mmウェーハ前工程。ADAS向けSoC |

川尻工場はJASM（TSMC）と同じ熊本クラスター内に位置し、技術連携の面でも重要な拠点です。

## 歴史的背景 — シリコンアイランド九州の形成

{{% timeline %}}

| 年 | 出来事 |
| -- | ------ |
| 1968 | ソニーが熊本工場を設立。家電向け半導体の組立が九州進出の端緒 |
| 1970年代 | 半導体組立工場が九州各地に集積。安価な土地・労働力が立地要因 |
| 1985 | NEC・日立・東芝などが九州に前工程ラインを展開。組立から製造へ転換 |
| 1990年代 | 「シリコンアイランド九州」と呼称されるようになる |
| 2011 | 東日本大震災でルネサス那珂工場被災。九州の地理的分散立地が再評価 |
| 2021 | 経産省が半導体・デジタル産業戦略を策定。TSMC誘致交渉が本格化 |
| 2022 | JASM設立（2月）。熊本工場の建設着工（4月） |
| 2024 | TSMC熊本第1工場開所式（2月）、12月に量産出荷開始。第2工場建設決定 |

{{% /timeline %}}

## 主要上場企業データ

{{% corp-treemap "6758,6723,8035,4063,3436" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・九州との関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr>
<td>ソニーグループ</td>
<td>{{% minkabu 6758 %}}</td>
<td>CMOSイメージセンサー世界首位（シェア約50%）。熊本・長崎・大分に主力工場を保有。TSMC熊本工場（JASM）に約6%出資し、ウェーハ供給を受ける。</td>
<td>{{% corplink "https://www.sony.com/ja/SonyInfo/IR/" %}}</td>
<td>{{% dividend "tokyo" "6758" %}}</td>
</tr>
<tr>
<td>ルネサスエレクトロニクス</td>
<td>{{% minkabu 6723 %}}</td>
<td>車載マイコン・SoC世界首位級。熊本・川尻工場（40nm/90nm車載マイコン主力）と大分工場（300mm ADAS向けSoC）の2拠点体制。JASM熊本工場の顧客でもある。</td>
<td>{{% corplink "https://www.renesas.com/jp/ja/corporate/investor-relations" %}}</td>
<td>{{% dividend "tokyo" "6723" %}}</td>
</tr>
<tr>
<td>東京エレクトロン</td>
<td>{{% minkabu 8035 %}}</td>
<td>半導体製造装置世界第3位。熊本県合志市に開発・生産子会社「東京エレクトロン九州」を置き、世界シェア1位の塗布現像装置（コーター・デベロッパー）を製造。JASM熊本工場にも装置を納入。</td>
<td>{{% corplink "https://www.tel.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "8035" %}}</td>
</tr>
<tr>
<td>信越化学工業</td>
<td>{{% minkabu 4063 %}}</td>
<td>シリコンウェーハ世界首位（シェア約30%）。TSMCへのウェーハ供給元として九州クラスターとも連携。フォトレジストでも高シェア。</td>
<td>{{% corplink "https://www.shinetsu.co.jp/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4063" %}}</td>
</tr>
<tr>
<td>SUMCO</td>
<td>{{% minkabu 3436 %}}</td>
<td>シリコンウェーハ専業で世界2位（シェア約26%）。佐賀県伊万里地区を主力とし、2024〜2025年に新工場が相次ぎ稼働。JASMへの最短距離でのウェーハ供給体制を構築。</td>
<td>{{% corplink "https://www.sumcosi.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3436" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
jasm2024: Japan Advanced Semiconductor Manufacturing株式会社「会社概要」（2024年）<https://www.tsmc.com/static/japanese/careers/jasm/index.html>
sony2023: ソニーグループ株式会社「有価証券報告書2023年度」（2023年）<https://www.sony.com/ja/SonyInfo/IR/library/yu.html>
renesas2023: ルネサスエレクトロニクス株式会社「有価証券報告書2023年度」（2023年）<https://www.renesas.com/ja/about/investor-relations/security?srsltid=AfmBOoo-ipgMc01_XY54gV4RGeJuVOOqqO9yMGm8F44UGtfe3Xg37ek3>
{{% /references %}}
