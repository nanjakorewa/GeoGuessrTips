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
    <p class="stat-card__value">約165</p>
    <p class="stat-card__unit">万トン（国内最大・2022年）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">製油所処理能力（計）</p>
    <p class="stat-card__value">約58</p>
    <p class="stat-card__unit">万バレル/日（3製油所合計）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">JFE千葉粗鋼能力</p>
    <p class="stat-card__value">約350</p>
    <p class="stat-card__unit">万トン/年</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">コンビナート面積</p>
    <p class="stat-card__value">約3,000</p>
    <p class="stat-card__unit">ha（埋立地・市原〜君津）</p>
  </div>
</div>

## コンビナートの産業ネットワーク

京葉コンビナートでは、製油所・石化プラント・製鉄所がパイプラインと物流網で結びつき、原材料から最終製品まで一貫した生産ネットワークを形成しています。

{{% mermaid %}}
graph LR
  A["原油・輸入"]-->B["製油所\nENEOS・出光・コスモ"]
  B-->|"ナフサ供給"|C["スチームクラッカー\n住友化学・三菱ケミカル・丸善"]
  B-->D["石油製品\nガソリン・軽油・LPG"]
  C-->E["エチレン"]
  C-->F["プロピレン"]
  C-->G["ブタジエン・BTX"]
  E-->H["ポリエチレン\n包装材・容器"]
  E-->I["エチレンオキシド\n界面活性剤"]
  F-->J["ポリプロピレン\n繊維・部品"]
  G-->K["合成ゴム・ABS\nタイヤ・電子機器"]
  L["鉄鉱石・石炭・輸入"]-->M["高炉\nJFEスチール千葉"]
  M-->N["薄板・厚板\n建設・自動車・造船"]
  D-->O["首都圏消費・流通"]
  H-->O
  J-->O
  N-->O
  style A fill:#92400e,color:#fff,stroke:none
  style L fill:#374151,color:#fff,stroke:none
  style B fill:#1e3a5f,color:#fff,stroke:#2d5282
  style C fill:#1e3a5f,color:#fff,stroke:#2d5282
  style M fill:#1e3a5f,color:#fff,stroke:#2d5282
  style O fill:#065f46,color:#fff,stroke:none
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

### 京葉地区の製造会社と主要製品{{% cite "jpca2023" %}}

| 会社 | 設備 | 主な製品 |
|------|------|---------|
| 丸善石油化学（市原） | エチレンプラント 52万t/年 | エチレン・プロピレン・ブタジエン |
| 三菱ケミカル（市原） | エチレンプラント 56万t/年 | エチレン・MMA・EO/EG |
| 住友化学（市原） | エチレンプラント 57万t/年 | エチレン・プロピレン・ポリエチレン |
| 旭化成（川崎・隣接） | 合成ゴム・ABS樹脂 | SBR・ABS |

**エチレン誘導品の主な用途**: ポリエチレン（PE）→包装フィルム・容器、エチレンオキシド（EO）→界面活性剤、塩化ビニル（PVC）→パイプ・建材

## 主要製油所

京葉工業地域には国内最大クラスの製油所が集中しています。ENEOSのLPG主力基地でもあり、首都圏へのLPG安定供給の要を担います{{% cite "eneos2023" %}}。

| 製油所（会社） | 所在地 | 処理能力 | 主な生産品 |
|--------------|--------|---------|-----------|
| ENEOS千葉製油所 | 市原市 | 175,000 BD | ガソリン・灯油・軽油・LPG・ナフサ |
| 出光興産千葉製油所 | 市原市 | 220,000 BD | ガソリン・軽油・灯油・アスファルト |
| コスモ石油千葉製油所 | 市原市 | 175,000 BD | ガソリン・灯油・軽油・石化原料ナフサ |

**BD** = Barrels per Day（バレル/日）。1バレル = 約159リットル。

## 鉄鋼セクター — JFEスチール東日本製鉄所（千葉地区）

JFEスチールの千葉地区は、薄板鋼板（冷延・熱延）と厚板を中心に生産する一貫製鉄所です。高炉2基を保有し、粗鋼生産能力は年間約350万トン{{% cite "jfe2023" %}}。

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

{{% /timeline %}}

## 市場構造とサプライチェーン上の位置

首都圏（関東）はGDPの約35%を占める最大消費地であり、京葉コンビナートの製品は以下のチェーンで流通します：

- **石油製品**：タンクローリー・パイプライン経由で首都圏のガソリンスタンド・工場へ
- **石化製品**：タンク車・コンテナーで川下の誘導品メーカー（包装材・繊維・塗料等）へ
- **鉄鋼製品**：コイル輸送で自動車工場（栃木・群馬・神奈川）や建設需要へ

コンビナート内の企業間では**パイプラインによる液体・ガスの直接融通**が行われており、輸送コストの大幅削減とCO₂排出削減に貢献しています。たとえば、製油所余剰のナフサは隣接する石化プラントへパイプラインで直送されます。

## 主要上場企業データ

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
<td>{{% corplink "https://www.eneos-hd.co.jp/ir/" %}}</td>
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
<td>{{% corplink "https://ceh.cosmo-energy.co.jp/ja/ir/" %}}</td>
<td>{{% dividend "tokyo" "5021" %}}</td>
</tr>
<tr>
<td>JFEホールディングス</td>
<td>{{% minkabu 5411 %}}</td>
<td>東日本製鉄所（千葉）は薄板・厚板の主力拠点。粗鋼能力350万t/年。自動車用高張力鋼板（ハイテン）が収益の柱。</td>
<td>{{% corplink "https://www.jfe-holdings.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5411" %}}</td>
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
jpca2024: 日本石油化学工業協会「石油化学工業の現状2024年版」（2024年）<https://www.jpca.or.jp/files/trends/kakusha.pdf>
jpca2023: 日本石油化学工業協会「石油化学工業の現状2023年版」（2023年）<https://www.jpca.or.jp/>
eneos2023: ENEOSホールディングス株式会社「有価証券報告書2023年度」（2023年）<https://www.eneos-hd.co.jp/ir/>
jfe2023: JFEホールディングス株式会社「有価証券報告書2023年度」（2023年）<https://www.jfe-holdings.co.jp/ir/>
{{% /references %}}
