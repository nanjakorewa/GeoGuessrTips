---
title: "日本の造船業"
subtitle: "商船・艦艇・瀬戸内海クラスター — 世界3位の造船国の全体像"
date: 2026-03-30
lastmod: 2026-03-30
description: "日本の主要造船所を地図で整理。今治造船・JMU・三菱重工・川崎重工など商船から艦艇までカバーし、瀬戸内海を中心とする造船クラスターの構造を解説。"
weight: 40
mapName: "japan"
galleryDir: "shipbuilding"
---

<script>
(function() {
  // 商船造船所（ティール●）と艦艇・防衛造船所（ネイビー★）
  var pins = [
    // 商船系造船所
    { x: 418, y: 348, label: '新潟造船', type: 'civil',
      note: '巡視船・官公庁船' },
    { x: 440, y: 460, label: '三井E&S千葉', type: 'civil',
      note: '商船・艦船撤退。港湾クレーン・舶用エンジンに特化' },
    { x: 182, y: 488, label: '常石造船', type: 'civil',
      note: 'ばら積み貨物船・コンテナ船' },
    { x: 190, y: 502, label: '今治造船本社', type: 'civil', above: true,
      note: '国内建造量1位。ばら積み・タンカー' },
    { x: 220, y: 512, label: '今治造船丸亀', type: 'civil',
      note: '大型船建造ドック' },
    { x: 206, y: 476, label: '三菱重工MS玉野', type: 'defense',
      note: '護衛艦・官公庁船（旧三井E&S玉野）' },
    { x: 140, y: 494, label: 'JMU呉', type: 'civil',
      note: '大型商船・タンカー' },
    { x: 90, y: 522, label: '大島造船所', type: 'civil',
      note: 'ばら積み船。香焼工場買収で拡大中' },
    { x: 270, y: 442, label: 'JMU舞鶴', type: 'civil',
      note: '艦艇修繕・洋上風力拠点' },
    // 艦艇・防衛系造船所
    { x: 394, y: 456, label: 'JMU横浜', type: 'defense',
      note: '護衛艦など' },
    { x: 72, y: 540, label: '三菱重工長崎', type: 'defense',
      note: '護衛艦・大型艦艇' },
    { x: 260, y: 500, label: '川崎重工神戸', type: 'defense',
      note: '潜水艦建造' },
    { x: 252, y: 492, label: '三菱重工神戸', type: 'defense', above: true,
      note: '潜水艦建造' },
  ];

  function addPins() {
    var mapEl = document.getElementById('world-map');
    if (!mapEl) return;
    var svg = mapEl.querySelector('svg');
    if (!svg) { setTimeout(addPins, 300); return; }

    pins.forEach(function(pin) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'kombinat-pin');
      g.style.cursor = 'default';

      var titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      titleEl.textContent = pin.label + ' — ' + pin.note;
      g.appendChild(titleEl);

      var isDefense = pin.type === 'defense';
      var color = isDefense ? '#1e3a5f' : '#0e7490';
      var bgColor = isDefense ? 'rgba(30,58,95,0.2)' : 'rgba(14,116,144,0.18)';
      var strokeColor = isDefense ? 'rgba(30,58,95,0.6)' : 'rgba(14,116,144,0.55)';

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y - 6);
      glow.setAttribute('r', '10');
      glow.setAttribute('fill', bgColor);
      glow.setAttribute('stroke', strokeColor);
      glow.setAttribute('stroke-width', '1.5');

      var marker = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      marker.setAttribute('x', pin.x);
      marker.setAttribute('y', pin.y);
      marker.setAttribute('font-size', isDefense ? '14' : '12');
      marker.setAttribute('fill', color);
      marker.setAttribute('text-anchor', 'middle');
      marker.setAttribute('dominant-baseline', 'middle');
      marker.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      marker.textContent = isDefense ? '\u2605' : '\u25CF';

      var textLen = pin.label.length;
      var bgW = textLen * 8 + 6;
      var bgH = 13;
      var isAbove = pin.above || false;
      var bgY = isAbove ? (pin.y - 18 - bgH) : (pin.y + 4);
      var textY = isAbove ? (pin.y - 18 - bgH + 10) : (pin.y + 13);

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', bgY);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', isDefense ? 'rgba(30,58,95,0.85)' : 'rgba(14,78,70,0.85)');
      labelBg.setAttribute('rx', '3');

      var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pin.x);
      label.setAttribute('y', textY);
      label.setAttribute('font-size', '8');
      label.setAttribute('fill', '#fff');
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      label.textContent = pin.label;

      g.appendChild(glow);
      g.appendChild(marker);
      g.appendChild(labelBg);
      g.appendChild(label);
      svg.appendChild(g);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(addPins, 700); });
  } else {
    setTimeout(addPins, 700);
  }
})();
</script>

## 日本の造船業の概要

日本は中国・韓国に次ぐ**世界第3位の造船国**です。国内には造船事業者が約922社、舶用機器メーカーが約1,000社存在し、市場規模は約3.2兆円に達します{{% cite "meti2024" %}}。貿易量の**99.6%が海上輸送**に依存する日本にとって{{% cite "mlit_maritime" %}}、造船は国家安全保障と経済の根幹を支える産業です。

造船所は**瀬戸内海沿岸**に集中し、穏やかな海象・豊富な関連産業・歴史的蓄積から「造船クラスター」を形成しています。しかし近年は中国の台頭により、2024年の世界受注シェアは**わずか8%**まで低下しており{{% cite "mlit2026" %}}、政府は2035年に向けた「造船業再生ロードマップ」を策定しています。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">造船事業者数</p>
    <p class="stat-card__value">922</p>
    <p class="stat-card__unit">社（2023年4月時点）{{% cite "meti2024" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">市場規模</p>
    <p class="stat-card__value">3.2兆</p>
    <p class="stat-card__unit">円（売上高2.3兆円・2022年度）{{% cite "meti2024" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">従業員数</p>
    <p class="stat-card__value">約7.2万</p>
    <p class="stat-card__unit">人（うち外国人約1.5万人・2024年）{{% cite "mlit_ship_status" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">世界受注シェア</p>
    <p class="stat-card__value">8</p>
    <p class="stat-card__unit">%（2024年・中国71%に対し大幅縮小）{{% cite "mlit2026" %}}</p>
  </div>
</div>

## 国内建造量ランキング（2022年）{{% cite "meti2024" %}}

今治造船（1位）とJMU（2位）は2021年に資本業務提携し、共同出資の商船設計・営業会社**「日本シップヤード（NSY）」**を設立しています。NSYは国内商船の設計・受注の司令塔として機能しており、両社合計で国内シェア51%を占めます。

| 順位 | 企業 | 建造量（総トン） | シェア |
| ---- | ---- | -------------- | ------ |
| 1 | **今治造船** | 334.8万GT | 35% |
| 2 | **JMU** | 156.8万GT | 16% |
| 3 | **大島造船所** | 125.5万GT | 13% |
| 4 | **名村造船所** | 92.4万GT | 10% |
| 5 | **新来島どっく** | 79.4万GT | 8% |
| 6 | 常石造船 | 28.9万GT | 3% |
| 7 | 尾道造船 | 24.7万GT | 3% |
| 8 | 住友重機械 | 24.1万GT | 3% |

## 世界受注シェアの推移{{% cite "mlit2026" %}}

| 年 | 日本 | 韓国 | 中国 | 欧州 |
| -- | ---- | ---- | ---- | ---- |
| 2018 | 21% | 44% | 22% | 3% |
| 2020 | 16% | 27% | 47% | 2% |
| 2022 | 18% | 30% | 44% | 1% |
| 2024 | **8%** | 16% | **71%** | 2% |

中国が2024年に受注シェア71%を占め、日本は8%まで縮小（単年受注量ベース）。中国のシェア拡大は、LNG船や大型コンテナ船の量産体制を確立したことが大きく、日本の船主が中国に発注する割合も約4割に達しています{{% cite "mlit_ship_status" %}}。

## 商船建造と艦艇建造 — 二つの柱

日本の造船業は**商船（民間）**と**艦艇（防衛）**の二本柱で成り立っています。

| 区分 | 主な船種 | 主要企業 |
| ---- | -------- | -------- |
| **商船** | ばら積み貨物船・タンカー・コンテナ船・LNG船・自動車運搬船 | 今治造船・JMU・常石造船・大島造船所 |
| **艦艇** | 護衛艦・潜水艦・掃海艇・巡視船 | 三菱重工（長崎・神戸）・川崎重工（神戸）・JMU（横浜） |

## 主要造船所一覧

### 商船系

| 造船所 | 所在地 | 主な建造船種 | 特記事項 |
| ------ | ------ | ---------- | -------- |
| **今治造船** 本社 | 愛媛県今治市 | ばら積み船・タンカー・コンテナ船 | 国内建造量1位。グループ全体で年間70隻超 |
| **今治造船** 丸亀事業所 | 香川県丸亀市 | 大型商船 | 大型建造ドック保有 |
| **ジャパンマリンユナイテッド（JMU）** 呉 | 広島県呉市 | 大型商船・タンカー | 旧日本海軍工廠の流れ |
| **JMU** 舞鶴 | 京都府舞鶴市 | 艦艇修繕・洋上風力設備 | 商船新造から撤退後、艦艇ライフサイクル事業と洋上風力発電設備の製造拠点に転換 |
| **常石造船** | 広島県福山市 | ばら積み船・コンテナ船 | フィリピン・中国にも造船所を展開 |
| **大島造船所** | 長崎県西海市 | ばら積み貨物船 | 三菱重工から香焼工場（国内最大級ドック）を買収し建造能力を大幅拡大中 |
| **名村造船所** | 佐賀県伊万里市 | ばら積み船・タンカー | 国内4位。函館どつく（北海道）も傘下 |
| **新来島どっく** | 愛媛県今治市ほか | ばら積み船・ケミカルタンカー | 国内5位。瀬戸内に複数ドック |
| **新潟造船** | 新潟県新潟市 | 巡視船・官公庁船 | 中小型船に特化 |

### 艦艇・防衛系

| 造船所 | 所在地 | 主な建造船種 | 特記事項 |
| ------ | ------ | ---------- | -------- |
| **三菱重工** 長崎造船所 | 長崎県長崎市 | 護衛艦・大型艦艇 | 旧海軍の戦艦「武蔵」建造の歴史 |
| **三菱重工** 神戸造船所 | 兵庫県神戸市 | **潜水艦** | 川崎重工と交互に年1隻建造 |
| **川崎重工** 神戸工場 | 兵庫県神戸市 | **潜水艦** | 三菱重工と交互に年1隻建造 |
| **三菱重工マリタイムシステムズ** 玉野 | 岡山県玉野市 | 護衛艦・官公庁船 | 2021年に三井E&Sから艦船事業を譲受 |
| **JMU** 横浜事業所 | 神奈川県横浜市 | 護衛艦・掃海艇 | 旧IHIマリンユナイテッド |

日本の潜水艦は三菱重工と川崎重工が**1年交替で建造**するユニークな体制をとっており、技術の継続性と産業基盤の維持を両立しています。

## 瀬戸内海造船クラスター

瀬戸内海沿岸には今治造船・常石造船・JMU呉・三井E&S玉野・今治造船丸亀など主要造船所が密集しています。この集積には以下の要因があります。

- **穏やかな海象**: 瀬戸内海は波が小さく、進水・試運転に適している
- **舶用機器メーカーの集積**: エンジン・プロペラ・舵・甲板機器などのサプライヤーが近隣に立地
- **熟練労働力**: 戦前からの造船の歴史に基づく技能者の蓄積
- **瀬戸内海連携の加速**: 近年は今治造船を中心に、JMUとの共同出資（NSY）など業界再編が進行中
- **海事都市今治**: 造船所だけでなく、日本最大の外航船主（オーナー）が今治に集積。「作る側」と「買う側」が至近距離にあるため、仕様の擦り合わせや迅速な意思決定が可能

## 造船業の構造変化

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">1950〜70年代</span>
    <span class="process-step__name">世界1位</span>
    <span class="process-step__temp">タンカーブーム</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">1980〜2000年代</span>
    <span class="process-step__name">韓国に首位譲渡</span>
    <span class="process-step__temp">再編・統合</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">2010年代〜</span>
    <span class="process-step__name">中国が首位に</span>
    <span class="process-step__temp">日本は3位</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step" style="border-color:#10b981;background:#ecfdf5;">
    <span class="process-step__label">現在</span>
    <span class="process-step__name">高付加価値船にシフト</span>
    <span class="process-step__temp">LNG船・艦艇・環境規制対応船</span>
  </div>
</div>

## 歴史的背景

{{% timeline %}}

| 年 | 出来事 |
|----|-------|
| 1956 | 日本が世界最大の造船国に。タンカー需要で急成長 |
| 1973 | 第1次石油危機。タンカー需要が激減し、造船不況に突入 |
| 1980年代 | 韓国（現代・大宇・三星）が台頭。日本は世界2位に |
| 2002 | JFE系の造船部門を統合しユニバーサル造船設立 |
| 2010年代 | 中国が建造量で世界1位に。日本は3位に後退 |
| 2013 | ユニバーサル造船とIHIマリンユナイテッドが合併し**JMU**設立 |
| 2021 | 今治造船とJMUが資本業務提携。国内造船の再編が加速 |
| 2024 | 三井E&Sが商船建造から事実上撤退。港湾クレーン・舶用エンジンに注力。世界受注シェア8%に低下 |
| 2025 | 日米造船協力MOU締結（10月）。造船業再生ロードマップ策定{{% cite "mlit2026" %}} |

{{% /timeline %}}

## ゼロエミッション船への転換{{% cite "meti2024" %}}

IMO（国際海事機関）は2050年のGHG排出ゼロを目標に掲げており、日本は次世代燃料船の開発で世界をリードしようとしています。

| 燃料 | 時期 | 主な動き |
| ---- | ---- | -------- |
| **LNG** | 現在〜 | すでに商用運航中。CO2約25%削減 |
| **アンモニア** | 2026年実証→2028年商用目標 | ジャパンエンジンが世界初のアンモニア混焼試験成功（2023年） |
| **水素** | 2027年実証→2030年以降 | 容積が重油の4.5倍という課題。異常燃焼（ノッキング）への対応が必要 |

グリーンイノベーション基金から10年間で**350億円**が次世代船舶開発に投入されています{{% cite "nedo_gi_ship" %}}。

## 造船業再生ロードマップ（2035年目標）{{% cite "mlit2026" %}}

政府は2024年の建造量約900万GTから**2035年に1,800万GT（倍増）**を目標とするロードマップを策定しました{{% cite "mlit_roadmap" %}}。

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">Phase 1</span>
    <span class="process-step__name">2026〜2028</span>
    <span class="process-step__temp">DX・AI導入、日米協力開始</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">Phase 2</span>
    <span class="process-step__name">2029〜2031</span>
    <span class="process-step__temp">1〜3グループに統合、設備増強</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step" style="border-color:#10b981;background:#ecfdf5;">
    <span class="process-step__label">Phase 3</span>
    <span class="process-step__name">2032〜2035</span>
    <span class="process-step__temp">1,800万GT体制・次世代船リーダー</span>
  </div>
</div>

主な施策：
- **コスト10%削減**（日本は中国に対し約20%のコスト劣位{{% cite "mlit2026" %}}）
- **建造能力50%増**（設備拡張・新ドック建設）
- **生産性25%改善**（自動溶接ロボット・3D設計データによる建造管理・AI工程最適化の実装が進行中）
- **業界再編**（1〜3グループへの統合を検討。NSYによる設計一元化が先行事例）

## 日米造船協力MOU（2025年10月締結）{{% cite "mlit2026" %}}

日米両国は造船能力の強化に向けた覚書（MOU）を締結しました。経済安全保障上重要な船舶（LNG船・安保関連船舶）の建造能力確保や、AI・ロボット技術の共同開発、人材交流を推進します。

## 関連企業の時価総額マップ

造船・重工および海運に関わる主要上場企業の時価総額を可視化しています。

{{% corp-treemap "7011,7012,7003,7013,9101,9104,7014,6814,7721,6016,6018,6023,7021" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・造船との関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr>
<td>三菱重工業</td>
<td>{{% minkabu 7011 %}}</td>
<td>長崎造船所で護衛艦・大型艦艇、神戸造船所で潜水艦を建造。防衛・エネルギー・航空宇宙の総合重工。</td>
<td>{{% corplink "https://www.mhi.com/jp/finance/" %}}</td>
<td>{{% dividend "tokyo" "7011" %}}</td>
</tr>
<tr>
<td>川崎重工業</td>
<td>{{% minkabu 7012 %}}</td>
<td>神戸工場で潜水艦を三菱重工と交互に建造。二輪車（Ninja等）・航空機・水素関連も手がける。</td>
<td>{{% corplink "https://www.khi.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7012" %}}</td>
</tr>
<tr>
<td>IHI</td>
<td>{{% minkabu 7013 %}}</td>
<td>航空エンジン（GE・P&W向け）が収益の柱。旧石川島播磨重工業。JMUの出資母体の一つ。</td>
<td>{{% corplink "https://www.ihi.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7013" %}}</td>
</tr>
<tr>
<td>三井E&Sホールディングス</td>
<td>{{% minkabu 7003 %}}</td>
<td>商船・艦船建造から撤退し、港湾クレーン（世界シェア上位）・舶用ディーゼルエンジンに特化。</td>
<td>{{% corplink "https://www.mes.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7003" %}}</td>
</tr>
<tr>
<td>日本郵船</td>
<td>{{% minkabu 9101 %}}</td>
<td>外航海運最大手。コンテナ船・自動車運搬船・LNG船を運航。ONE（コンテナ）の主要株主。</td>
<td>{{% corplink "https://www.nyk.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "9101" %}}</td>
</tr>
<tr>
<td>商船三井</td>
<td>{{% minkabu 9104 %}}</td>
<td>LNG船・ドライバルク船に強み。不定期船（ばら積み）事業が収益の柱。</td>
<td>{{% corplink "https://ir.mol.co.jp/ja/ir.html" %}}</td>
<td>{{% dividend "tokyo" "9104" %}}</td>
</tr>
<tr>
<td>名村造船所</td>
<td>{{% minkabu 7014 %}}</td>
<td>国内建造量4位。佐賀県伊万里に主力ドック。函館どつく（北海道）も傘下。</td>
<td>{{% corplink "https://www.namura.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7014" %}}</td>
</tr>
<tr>
<td>古野電気</td>
<td>{{% minkabu 6814 %}}</td>
<td>舶用電子機器（レーダー・GPS・魚群探知機）世界大手。船舶の安全航行を支える。</td>
<td>{{% corplink "https://www.furuno.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6814" %}}</td>
</tr>
<tr>
<td>東京計器</td>
<td>{{% minkabu 7721 %}}</td>
<td>舶用ジャイロコンパス・オートパイロット・防衛用機器を製造。</td>
<td>{{% corplink "https://www.tokyokeiki.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7721" %}}</td>
</tr>
<tr>
<td>ジャパンエンジンコーポレーション</td>
<td>{{% minkabu 6016 %}}</td>
<td>大型舶用2ストロークディーゼルエンジンを製造。世界初のアンモニア混焼試験に成功（2023年）。</td>
<td>{{% corplink "https://www.j-eng.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6016" %}}</td>
</tr>
<tr>
<td>阪神内燃機工業</td>
<td>{{% minkabu 6018 %}}</td>
<td>中・大型舶用ディーゼルエンジンを製造。内航船向けに強み。</td>
<td>{{% corplink "https://www.hanshin-dw.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6018" %}}</td>
</tr>
<tr>
<td>ダイハツディーゼル</td>
<td>{{% minkabu 6023 %}}</td>
<td>舶用中速ディーゼルエンジン・発電機関を製造。</td>
<td>{{% corplink "https://www.dhtd.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6023" %}}</td>
</tr>
<tr>
<td>ニッチツ</td>
<td>{{% minkabu 7021 %}}</td>
<td>舶用機器・化学品。船舶用ポンプ・バルブ等を手がける。</td>
<td>{{% corplink "https://www.nitchitsu.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7021" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
meti2024: 経済産業省「造船に関する参考資料」（2024年12月）<https://www.meti.go.jp/press/2024/12/20241227006/20241227006-10.pdf>
mlit2026: 国土交通省 海事局「造船業の現状と再生ロードマップ」（2026年1月）<https://wwwtb.mlit.go.jp/tohoku/content/000366415.pdf>
mlit_maritime: 国土交通省 海事局「海事レポート」<https://www.mlit.go.jp/maritime/content/001621452.pdf>
mlit_ship_status: 国土交通省「船舶産業を取り巻く現状」<https://www.mlit.go.jp/maritime/content/001895997.pdf>
nedo_gi_ship: NEDO グリーンイノベーション基金事業「次世代船舶の開発」プロジェクト <https://green-innovation.nedo.go.jp/project/development-next-generation-vessels/progress/>
mlit_roadmap: 国土交通省「造船業の再生に向けたロードマップ」<https://www.mlit.go.jp/maritime/content/001975728.pdf>
{{% /references %}}
