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
    <p class="stat-card__unit">枚（300mmウェーハ・2024年2月稼働）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">ソニー CMOSセンサー世界シェア</p>
    <p class="stat-card__value">約50</p>
    <p class="stat-card__unit">%（スマートフォン向け・2023年）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">九州半導体関連工場数</p>
    <p class="stat-card__value">約150</p>
    <p class="stat-card__unit">拠点（前後工程・材料・装置含む）</p>
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
  A["シリコンウェーハ<br/>信越化学・SUMCO"]-->B["TSMC熊本<br/>（JASM）<br/>12/16/28nm"]
  A-->C["ソニーセミコンダクタ<br/>熊本工場<br/>CMOSセンサー"]
  A-->D["ルネサス大分<br/>車載マイコン<br/>SoC"]
  B-->E["デンソー<br/>車載チップ"]
  B-->F["ソニー<br/>家電・カメラ"]
  C-->G["スマートフォン<br/>カメラモジュール"]
  C-->H["車載カメラ<br/>監視カメラ"]
  D-->I["自動車ECU<br/>産業機器"]
  J["フォトレジスト<br/>TOK・住友化学"]-->B
  J-->C
  style A fill:#374151,color:#fff,stroke:none
  style J fill:#374151,color:#fff,stroke:none
  style B fill:#1e3a5f,color:#fff,stroke:#2d5282
  style C fill:#1e3a5f,color:#fff,stroke:#2d5282
  style D fill:#1e3a5f,color:#fff,stroke:#2d5282
  style E fill:#065f46,color:#fff,stroke:none
  style F fill:#065f46,color:#fff,stroke:none
  style G fill:#065f46,color:#fff,stroke:none
  style H fill:#065f46,color:#fff,stroke:none
  style I fill:#065f46,color:#fff,stroke:none
{{% /mermaid %}}

## TSMC熊本工場（JASM）

JASM（Japan Advanced Semiconductor Manufacturing）はTSMCが日本で設立した製造子会社で、ソニーグループ（約6%）・デンソー（約10%）・トヨタ自動車（約2%）が出資しています{{% cite "jasm2024" %}}。

| 項目 | 第1工場 | 第2工場（計画） |
| ---- | ------- | -------------- |
| 所在地 | 熊本県菊陽町 | 熊本県菊陽町（隣接） |
| 稼働開始 | 2024年2月 | 2027年予定 |
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
| 長崎テクノロジーセンター | 長崎県諫早市 | CMOSセンサー・ToFセンサー |
| 大分TDセンター | 大分県大分市 | センサー後工程・試験 |

ソニーの積層型センサー技術（Stacked CMOS）は、画素層と回路層を別々のウェーハで製造して貼り合わせるもので、高画質・高速読み出しを両立します。TSMC熊本工場との地理的近接により、ウェーハ調達・技術連携の効率化が期待されています。

## ルネサスエレクトロニクス 大分工場

ルネサスの大分工場は車載マイコン・SoC（System on Chip）の主力生産拠点です。300mmウェーハの前工程ラインを持ち、主に**ADAS（先進運転支援システム）**向けSoCを生産しています{{% cite "renesas2023" %}}。

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
| 2024 | TSMC熊本第1工場竣工・量産開始（2月）。第2工場建設決定 |

{{% /timeline %}}

## 主要上場企業データ

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
<td>車載マイコン・SoC世界首位級。大分工場で300mm前工程を運営。JASM熊本工場の顧客でもある。2023年度に売上高1兆円超を達成。</td>
<td>{{% corplink "https://www.renesas.com/jp/ja/corporate/investor-relations" %}}</td>
<td>{{% dividend "tokyo" "6723" %}}</td>
</tr>
<tr>
<td>東京エレクトロン</td>
<td>{{% minkabu 8035 %}}</td>
<td>半導体製造装置世界第3位。成膜・エッチング・洗浄装置でJASM熊本工場にも装置を納入。2024年3月期の売上高は約2.4兆円。</td>
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
<td>シリコンウェーハ専業で世界2位（シェア約26%）。佐賀県伊万里に主力工場を持ち、九州クラスターへのウェーハ供給で地理的優位性を持つ。</td>
<td>{{% corplink "https://www.sumcosi.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3436" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
jasm2024: Japan Advanced Semiconductor Manufacturing株式会社「会社概要」（2024年）<https://www.japan-tsmc.com/>
sony2023: ソニーグループ株式会社「有価証券報告書2023年度」（2023年）<https://www.sony.com/ja/SonyInfo/IR/>
renesas2023: ルネサスエレクトロニクス株式会社「有価証券報告書2023年度」（2023年）<https://www.renesas.com/jp/ja/corporate/investor-relations>
{{% /references %}}
