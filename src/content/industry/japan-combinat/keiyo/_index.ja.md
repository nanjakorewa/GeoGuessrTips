---
title: "京葉コンビナート"
subtitle: "東京湾岸・千葉の石油化学・製鉄複合地帯"
date: 2026-03-22
lastmod: 2026-03-22
description: "千葉県東京湾岸に広がる京葉コンビナートの詳細解説。エチレン生産能力・石油精製規模・企業構成・歴史的背景など、産業構造を深掘りするデータを掲載。"
weight: 10
---

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">エチレン年産能力</p>
    <p class="stat-card__value">約210</p>
    <p class="stat-card__unit">万トン（国内1位・32%）{{% cite "chisou2015" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">原油処理能力（計）</p>
    <p class="stat-card__value">71.5</p>
    <p class="stat-card__unit">万バレル/日（国内1位・18%）{{% cite "keiyo2025" %}}{{% cite "chisou2015" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">製造品出荷額</p>
    <p class="stat-card__value">約10兆</p>
    <p class="stat-card__unit">億円規模（R4経済センサス・原油高を反映）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">コンビナート面積</p>
    <p class="stat-card__value">約5,000</p>
    <p class="stat-card__unit">ha（千葉市南部〜富津市の埋立地）{{% cite "chisou2015" %}}</p>
  </div>
</div>

## コンビナートの産業ネットワーク

京葉コンビナートでは、製油所・石化プラント・製鉄所がパイプラインと物流網で結びつき、原材料から最終製品まで一貫した生産ネットワークを形成しています。

### 石油化学系

{{% mermaid %}}
graph TB
  A["原油（輸入）"]-->B["製油所\nENEOS・出光・コスモ・富士石油"]
  B-->|"石化用ナフサ"|C["スチームクラッカー\n京葉エチレン・三井化学・丸善・出光"]
  B-->D["石油製品\nガソリン・軽油・LPG"]
  C-->E["エチレン\n210万t/年（国内1位）"]
  C-->F["プロピレン・ブタジエン・BTX"]
  E-->G["ポリエチレン\n包装材・容器"]
  E-->H["エチレンオキシド\n界面活性剤"]
  F-->I["ポリプロピレン・合成ゴム\n繊維・タイヤ・電子機器"]
  style A fill:#fef3c7,color:#78350f,stroke:#d97706,stroke-width:2px
  style B fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style C fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style D fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
  style E fill:#d1fae5,color:#065f46,stroke:#10b981,stroke-width:2px
  style F fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
  style G fill:#d1fae5,color:#065f46,stroke:#10b981
  style H fill:#d1fae5,color:#065f46,stroke:#10b981
  style I fill:#d1fae5,color:#065f46,stroke:#10b981
{{% /mermaid %}}

### 鉄鋼系

{{% mermaid %}}
graph TB
  A["鉄鉱石・コークス（輸入）"]-->B["高炉\nJFEスチール千葉（第6高炉）"]
  B-->C["薄板鋼板\n自動車・家電向け"]
  B-->D["厚板\n建設・造船向け"]
  style A fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
  style B fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style C fill:#d1fae5,color:#065f46,stroke:#10b981
  style D fill:#d1fae5,color:#065f46,stroke:#10b981
{{% /mermaid %}}

## 石油化学プロセスとコンビナート内の製品フロー

石油化学コンビナートの根幹は**ナフサ分解装置（スチームクラッカー）**です。製油所から供給されるナフサ（粗ガソリン留分）を蒸気とともに800℃超で熱分解し、エチレン・プロピレン・ブタジエン・ベンゼンなどの基礎化学品を生産します{{% cite "jpca2024" %}}。

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">原料</span>
    <span class="process-step__name">原油</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">製油所</span>
    <span class="process-step__name">常圧蒸留</span>
    <span class="process-step__temp">350℃</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">中間品</span>
    <span class="process-step__name">ナフサ</span>
    <span class="process-step__temp">沸点30〜180℃</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">熱分解</span>
    <span class="process-step__name">スチームクラッカー</span>
    <span class="process-step__temp">850℃超</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">基礎化学品</span>
    <span class="process-step__name">C2〜C4 + BTX</span>
  </div>
</div>

### 京葉地区のエチレン製造会社と主要製品{{% cite "jpca2025" %}}

京葉コンビナートには4系統のエチレン製造拠点が集積し、合計約210万t/年（国内生産能力の32%）を占めます。

| 会社 | エチレン能力 | 主な製品 |
| ---- | ---------- | ------- |
| 京葉エチレン（市原・住友化学・三菱ケミカル等合弁） | 69万t/年 | エチレン・プロピレン・ブタジエン |
| 三井化学（市原） | 55.5万t/年 | エチレン・ポリウレタン原料（MDI）・機能性樹脂 |
| 丸善石油化学（市原） | 48万t/年 | エチレン・プロピレン・ブタジエン |
| 出光興産（千葉） | 37.4万t/年 | エチレン・スチレンモノマー |
| **合計** | **約210万t/年** | — |

三井化学と出光興産は、2027年度をめどに千葉地区のエチレン装置を1基集約することで合意しています（2024年発表）。統合後は京葉地区全体のエチレン能力が再編される見通しです。

なお国内全体では、エチレン設備は2014年以降の自主停止・集約により、ピーク時の15基740万t/年から2024年時点で12基620万t/年に縮小しています。さらに集約計画が確定・検討中の案件が含まれると、将来的には8基440〜450万t/年程度になる見通しです{{% cite "jpca2025" %}}。

**エチレン誘導品の主な用途**: ポリエチレン（PE）→包装フィルム・容器、エチレンオキシド（EO）→界面活性剤、塩化ビニル（PVC）→パイプ・建材

## コンビナートの生産規模と千葉県経済への貢献

京葉臨海コンビナートは「我が国最大の素材・エネルギー産業の集積地」と位置づけられ、千葉県の製造業を牽引しています{{% cite "chisou2015" %}}。

| 指標 | 数値 | 国内・県内での位置 |
| ---- | ---- | ---------------- |
| 製造品出荷額 | 約10兆円規模 | 千葉県全体の約 **60%**（R4経済センサス） |
| エチレン生産能力 | 210万トン/年 | 国内 **1位**（32%） |
| 原油処理能力 | 71.5万バレル/日 | 国内 **1位**（18%） |
| 粗鋼生産量 | 1,316万トン | 国内 **2位**（12%） |
| LNG貯蔵能力 | 377万kl | 国内 **1位**（21%） |
| 事業所数 | 236事業所 | 千葉県全体の 4.5% |
| 従業員数 | 34,469人 | 千葉県全体の **17.3%** |

## 主要製油所

京葉工業地域には国内最大クラスの製油所が集中しています。

| 製油所（会社） | 所在地 | 処理能力 | 主な生産品 |
|--------------|--------|---------|-----------|
| ENEOS千葉製油所 | 市原市 | 175,000 BD | ガソリン・灯油・軽油・LPG・ナフサ |
| 出光興産千葉製油所 | 市原市 | 220,000 BD | ガソリン・軽油・灯油・アスファルト |
| コスモ石油千葉製油所 | 市原市 | 175,000 BD | ガソリン・灯油・軽油・石化原料ナフサ |
| 富士石油袖ケ浦製油所 | 袖ケ浦市 | 143,000 BD | ガソリン・灯油・軽油・重油 |

**BD** = Barrels per Day（バレル/日）。1バレル = 約159リットル。4社合計で約71.3万BD。

## 鉄鋼セクター — JFEスチール東日本製鉄所（千葉地区）

JFEスチールの千葉地区は、薄板鋼板（冷延・熱延）と厚板を中心に生産する一貫製鉄所です。現在稼働中の高炉は第6高炉の1基（第5高炉は長期休止・事実上廃止）で、粗鋼生産能力は年間約250万トン{{% cite "jfe2023" %}}。

製鉄所の一貫プロセス：

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">原料</span>
    <span class="process-step__name">鉄鉱石 + コークス</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">高炉</span>
    <span class="process-step__name">溶銑生産</span>
    <span class="process-step__temp">1,500℃超</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">転炉</span>
    <span class="process-step__name">粗鋼生産</span>
    <span class="process-step__temp">酸素吹込み</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">連続鋳造</span>
    <span class="process-step__name">スラブ成形</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">圧延</span>
    <span class="process-step__name">熱延・冷延・めっき</span>
  </div>
</div>

## 歴史的背景

{{% timeline %}}

| 年 | 出来事 |
|----|-------|
| 1956 | 千葉県が東京湾岸埋立事業を本格化。工業用地造成開始 |
| 1961 | 川崎製鉄（現JFE）千葉製鉄所が高炉操業開始。京葉工業地域の起点 |
| 1964 | 三菱石油（現ENEOS）千葉製油所操業開始 |
| 1965〜 | 住友化学・丸善石油化学などのエチレンプラントが相次いで完成 |
| 1973 | 第1次オイルショック。石油系原料価格が4倍に跳ね上がり、収益構造が激変 |
| 1986〜 | プラザ合意後の円高で輸出競争力低下。コンビナートの再編・合理化が本格化 |
| 2000年代 | ENEOSが旧日石・三菱石油・ジャパンエナジーを統合し国内最大の石油会社へ |
| 2023 | ENEOSが和歌山製油所を閉鎖。国内製油所の集約・大型化が続く |
| 2025〜 | 京葉臨海コンビナートGX推進協議会が始動。燃料用アンモニア大規模受入基地の整備を検討{{% cite "keiyo2025" %}} |

{{% /timeline %}}

## 市場構造とサプライチェーン上の位置

首都圏（関東）はGDPの約35%を占める最大消費地であり、京葉コンビナートの製品は以下のチェーンで流通します：

- **石油製品**：タンクローリー・パイプライン経由で首都圏のガソリンスタンド・工場へ
- **石化製品**：タンク車・コンテナーで川下の誘導品メーカー（包装材・繊維・塗料等）へ
- **鉄鋼製品**：コイル輸送で自動車工場（栃木・群馬・神奈川）や建設需要へ

コンビナート内の企業間では**パイプラインによる液体・ガスの直接融通**が行われており、輸送コストの大幅削減とCO₂排出削減に貢献しています。たとえば、製油所余剰のナフサは隣接する石化プラントへパイプラインで直送されます。

## 主要上場企業データ

{{% corp-treemap "5020,5019,5021,5009,5411,4005,4188" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・京葉との関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr>
<td>ENEOSホールディングス</td>
<td>{{% minkabu 5020 %}}</td>
<td>国内最大の石油元売り。千葉製油所（175千BD）を保有し、京葉コンビナートの石油精製・LPG供給の中核を担う。傘下のJX金属は銅製錬も。</td>
<td>{{% corplink "https://www.hd.eneos.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5020" %}}</td>
</tr>
<tr>
<td>出光興産</td>
<td>{{% minkabu 5019 %}}</td>
<td>千葉製油所（220千BD、国内最大規模）を保有。昭和シェル合併（2019年）後、国内第2位の石油元売りに。石化用ナフサも供給。</td>
<td>{{% corplink "https://www.idemitsu.com/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5019" %}}</td>
</tr>
<tr>
<td>コスモエネルギーHD</td>
<td>{{% minkabu 5021 %}}</td>
<td>国内第3位の石油元売り。アブダビ国営石油（ADNOC）が筆頭株主で中東との関係が深い。千葉製油所（175千BD）を保有。</td>
<td>{{% corplink "https://www.cosmo-energy.co.jp/ja/ir.html" %}}</td>
<td>{{% dividend "tokyo" "5021" %}}</td>
</tr>
<tr>
<td>JFEホールディングス</td>
<td>{{% minkabu 5411 %}}</td>
<td>東日本製鉄所（千葉）は薄板・厚板の主力拠点。稼働高炉は第6高炉の1基で粗鋼能力約250万t/年。自動車用高張力鋼板（ハイテン）が収益の柱。</td>
<td>{{% corplink "https://www.jfe-holdings.co.jp/investor/" %}}</td>
<td>{{% dividend "tokyo" "5411" %}}</td>
</tr>
<tr>
<td>富士石油</td>
<td>{{% minkabu 5009 %}}</td>
<td>袖ケ浦製油所（143千BD）を保有。旧アラビア石油の流れを汲み、京葉地区の原油処理能力の約2割を担う。</td>
<td>{{% corplink "https://www.foc.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5009" %}}</td>
</tr>
<tr>
<td>住友化学</td>
<td>{{% minkabu 4005 %}}</td>
<td>千葉工場（市原）はエチレン能力57万t/年。農薬・医薬品原体・半導体材料（住友化学APB）も手がける総合化学大手。</td>
<td>{{% corplink "https://www.sumitomo-chem.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4005" %}}</td>
</tr>
<tr>
<td>三菱ケミカルグループ</td>
<td>{{% minkabu 4188 %}}</td>
<td>千葉・市原に複数の石化・機能化学品工場。MMA（アクリル樹脂原料）世界シェア約30%。エチレン能力56万t/年。</td>
<td>{{% corplink "https://www.mitsubishichem-hd.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4188" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
chisou2015: 千葉県ほか「京葉臨海コンビナート国際競争力強化」国家戦略特区WG提出資料（2015年11月）<https://www.chisou.go.jp/tiiki/kokusentoc_wg/h27/151116chibapref_shiryou02.pdf>
jpca2025: 石油化学工業協会「製造業ベンチマーク検討WG説明資料」経済産業省産業構造審議会（2025年7月）<https://www.meti.go.jp/shingikai/sankoshin/sangyo_gijutsu/emissions_trading/benchmark_wg/pdf/001_05_00.pdf>
jpca2024: JPCA 石油化学工業協会 三菱ケミカルコンビナート (鹿島) <https://www.jpca.or.jp/files/trends/kakusha.pdf>
eneos2023: ENEOSホールディングス株式会社「有価証券報告書2023年度」（2023年）<https://www.hd.eneos.co.jp/ir/>
jfe2023: JFEホールディングス株式会社「有価証券報告書2023年度」（2023年）<https://www.jfe-holdings.co.jp/investor/library/annual_securities_report/>
keiyo2025: 京葉臨海コンビナートGX推進会議の開催について <https://www.pref.chiba.lg.jp/carbon/press/2025/01-gxk-press.html>
chiba_port: 千葉県「千葉港の概要（京葉臨海工業地帯）」<https://www.pref.chiba.lg.jp/kouwan/news/documents/chiba03.pdf>
{{% /references %}}
