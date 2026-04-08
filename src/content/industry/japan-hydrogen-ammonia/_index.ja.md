---
title: "日本の水素・アンモニア拠点"
subtitle: "GX戦略の中核 — 川崎・神戸・苫小牧・福島・周南など主要拠点"
date: 2026-04-07
lastmod: 2026-04-07
description: "日本の水素・アンモニア拠点を解説。神戸液化水素受入基地、福島FH2R、苫小牧CCS連携、周南カーボンフリーアンモニア構想、JERA碧南火力混焼など主要拠点を一次資料に基づき整理。"
weight: 35
mapName: "japan"
galleryDir: "japan-hydrogen-ammonia"
---

<script>
(function() {
  // 水素拠点（青●）とアンモニア拠点（赤◆）
  var pins = [
    { x: 510, y: 142, label: '苫小牧', type: 'h2',
      note: 'CCS実証＋グリーン水素計画（北海道電力・出光・ENEOS）' },
    { x: 480, y: 270, label: '福島浪江(FH2R)', type: 'h2',
      note: '水電解10MW・太陽光20MW（NEDO）' },
    { x: 460, y: 425, label: '川崎臨海', type: 'h2',
      note: '千鳥町水素ネットワーク・レゾナック廃プラ水素' },
    { x: 270, y: 472, label: '神戸', type: 'h2',
      note: 'Hy touch神戸液化水素受入基地（川崎重工）' },
    { x: 200, y: 488, label: '周南', type: 'nh3',
      note: '出光・東ソー・トクヤマ カーボンフリーアンモニア構想' },
    { x: 318, y: 480, label: '碧南(発電)', type: 'nh3',
      note: 'JERA碧南火力 アンモニア20%混焼商用化準備' },
    { x: 88, y: 558, label: '大分九重町', type: 'h2',
      note: '地熱由来グリーン水素（大林組）' },
    { x: 75, y: 525, label: '北九州響灘', type: 'h2', above: true,
      note: '響灘グリーン水素拠点構想（福岡県）' },
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

      var isH2 = pin.type === 'h2';
      var color = isH2 ? '#0ea5e9' : '#dc2626';
      var bgColor = isH2 ? 'rgba(14,165,233,0.18)' : 'rgba(220,38,38,0.18)';
      var strokeColor = isH2 ? 'rgba(14,165,233,0.55)' : 'rgba(220,38,38,0.55)';

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
      marker.setAttribute('font-size', isH2 ? '14' : '12');
      marker.setAttribute('fill', color);
      marker.setAttribute('text-anchor', 'middle');
      marker.setAttribute('dominant-baseline', 'middle');
      marker.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      marker.textContent = isH2 ? '\u25CF' : '\u25C6';

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
      labelBg.setAttribute('fill', isH2 ? 'rgba(7,89,133,0.85)' : 'rgba(127,29,29,0.85)');
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

## [日本](/rule/asia/japan/)の水素・アンモニア戦略

水素・アンモニアは、2050年カーボンニュートラル実現に向けた<span style="font-weight:700">GX（グリーントランスフォーメーション）戦略の中核燃料</span>として位置付けられています。経済産業省は2017年に世界初の国家水素戦略を策定し、2023年6月には「水素基本戦略」を改定して導入目標を大幅に引き上げました{{% cite "meti_h2strategy2023" %}}。脱炭素が困難な火力発電・製鉄・石油化学・重輸送・船舶などの分野で、化石燃料を水素・アンモニアに置き換えることが想定されています。

[日本](/rule/asia/japan/)は既存の港湾・パイプライン・大規模需要家（火力発電所・コンビナート）を活かしながら、海外からの輸入と国内製造を組み合わせた<span style="font-weight:700">「水素・アンモニア・サプライチェーン」</span>を構築しようとしています。豪州・中東・北米などとの国際協力も同時並行で進んでいます{{% cite "meti_h2strategy2023" %}}。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">2030年導入目標</p>
    <p class="stat-card__value">最大300万</p>
    <p class="stat-card__unit">トン/年（水素・アンモニア合計）{{% cite "meti_h2strategy2023" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">2040年導入目標</p>
    <p class="stat-card__value">1,200万</p>
    <p class="stat-card__unit">トン/年程度{{% cite "meti_h2strategy2023" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">2050年導入目標</p>
    <p class="stat-card__value">2,000万</p>
    <p class="stat-card__unit">トン/年程度{{% cite "meti_h2strategy2023" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">官民投資（15年間）</p>
    <p class="stat-card__value">15兆</p>
    <p class="stat-card__unit">円規模{{% cite "meti_h2strategy2023" %}}</p>
  </div>
</div>

## 水素・アンモニアのカテゴリ

水素・アンモニアは製造方法によって色で分類され、CO2排出量と価格が異なります。

| 区分 | 製造方法 | CO2排出 | 主な用途 |
| ---- | -------- | ------- | -------- |
| <span style="font-weight:700">グレー水素・アンモニア</span> | 化石燃料の改質（天然ガス・石炭） | 多い | 既存の化学原料 |
| <span style="font-weight:700">ブルー水素・アンモニア</span> | 化石燃料の改質＋CCS（CO2回収貯留）{{% cite "meti_h2strategy2023" %}} | 少ない | 過渡期の低炭素燃料 |
| <span style="font-weight:700">グリーン水素・アンモニア</span> | 再エネ電力による水電解 | ゼロ | 完全脱炭素の最終形 |
| <span style="font-weight:700">ターコイズ水素</span> | メタン熱分解（副生物は固体炭素） | ゼロ | 開発段階 |

## 主要拠点

<div style="overflow-x:auto;">
<table class="table table-striped table-bordered">
<thead>
<tr><th>拠点</th><th>所在地</th><th>運営主体</th><th>主な内容</th><th>稼働年</th></tr>
</thead>
<tbody>
<tr><td><strong>Hy touch 神戸</strong></td><td>兵庫県神戸市・神戸空港島</td><td>川崎重工業</td><td>世界初の液化水素受入実証ターミナル。2,500m³球形液化水素貯蔵タンク{{% cite "khi_hytouch" %}}（容量2,250m³）。豪州褐炭由来水素を液化水素運搬船「すいそ ふろんてぃあ」で輸送する HESC プロジェクトの陸側拠点{{% cite "hesc" %}}</td><td>2020</td></tr>
<tr><td><strong>FH2R</strong></td><td>福島県浪江町（棚塩産業団地）</td><td>NEDO・東芝ESS・東北電力・岩谷産業</td><td>福島水素エネルギー研究フィールド。10MW級水電解装置{{% cite "nedo_fh2r" %}}と20MW{{% cite "nedo_fh2r" %}}の太陽光発電を組み合わせたグリーン水素製造実証（当時世界最大級）{{% cite "nedo_fh2r" %}}</td><td>2020</td></tr>
<tr><td><strong>苫小牧</strong></td><td>北海道苫小牧市</td><td>北海道電力・出光興産・ENEOS など</td><td>苫小牧CCS実証{{% cite "meti_tomakomai_ccs" %}}（経産省・JOGMEC、2016〜）に隣接して、グリーン水素・ブルーアンモニア供給拠点を構想。CCS累計圧入量30万t超{{% cite "meti_tomakomai_ccs" %}}</td><td>2016〜</td></tr>
<tr><td><strong>川崎臨海部</strong></td><td>神奈川県川崎市</td><td>レゾナック（旧昭和電工）他</td><td>使用済みプラスチック由来{{% cite "resonac_kawasaki" %}}の低炭素水素・アンモニアを製造。コンビナート内パイプラインで供給する千鳥町水素ネットワーク{{% cite "resonac_kawasaki" %}}</td><td>2003〜</td></tr>
<tr><td><strong>周南コンビナート</strong></td><td>山口県周南市</td><td>出光興産・東ソー・トクヤマ・[日本](/rule/asia/japan/)ゼオン</td><td>苛性ソーダ製造の副生水素を活用したカーボンフリーアンモニア供給網構想{{% cite "meti_ammonia_society" %}}。2030年以降{{% cite "meti_ammonia_society" %}}の大規模供給を計画{{% cite "meti_ammonia_society" %}}</td><td>構想中</td></tr>
<tr><td><strong>JERA碧南火力</strong></td><td>愛知県碧南市</td><td>JERA</td><td>石炭火力発電所でアンモニア20%{{%cite "jera_hekinan" %}}混焼の実証試験を実施{{% cite "jera_hekinan" %}}（2024年4月1日～6月26日）。2020年代後半{{% cite "jera_hekinan" %}}から商用運転を計画し、長期的にはアンモニア専焼化を目指す{{% cite "jera_hekinan" %}}</td><td>2024実証</td></tr>
<tr><td><strong>大分九重</strong></td><td>大分県玖珠郡九重町</td><td>大林組</td><td>地熱発電を利用した[日本](/rule/asia/japan/)初{{% cite "obayashi_kuju" %}}のグリーン水素製造・供給実証プラント{{% cite "obayashi_kuju" %}}</td><td>2021</td></tr>
<tr><td><strong>北九州響灘</strong></td><td>福岡県北九州市</td><td>福岡県・北九州市</td><td>洋上風力と組み合わせた響灘グリーン水素拠点構想{{% cite "fukuoka_h2" %}}。八幡東区東田地区では水素パイプライン実証{{%cite "fukuoka_h2" %}}（約1.2km）{{% cite "fukuoka_h2" %}}</td><td>2015〜</td></tr>
</tbody>
</table>
</div>

## グリーンイノベーション基金（2兆円）

経済産業省は2020年{{% cite "nedo_gi_fund" %}}、2050年カーボンニュートラル実現に向けた「グリーンイノベーション基金」を<span style="font-weight:700">総額2兆円規模</span>{{%cite "nedo_gi_fund" %}}でNEDOに造成しました{{% cite "nedo_gi_fund" %}}。10年間の継続支援により、研究開発から社会実装までを後押しする仕組みです。水素・アンモニア関連で採択された主なテーマは次の通りです。

| テーマ | 主な実施企業 | 概要 |
| ------ | ------------ | ---- |
| 大規模水素サプライチェーン構築 | 川崎重工業・ENEOS・岩谷産業 等 | 海外グリーン・ブルー水素の輸入と国内利用 |
| 水電解装置の大規模化 | 旭化成・東芝ESS 等 | アルカリ／PEM水電解装置の量産化と大型化 |
| 燃料アンモニア・サプライチェーン | JERA・IHI・三井物産 等 | 海外からの輸入と火力発電混焼 |
| 製鉄プロセスでの水素活用 | [日本](/rule/asia/japan/)製鉄・JFE・神戸製鋼 | 高炉水素還元・水素直接還元製鉄 |
| 次世代船舶（水素・アンモニア燃料） | [日本](/rule/asia/japan/)郵船・商船三井・川崎汽船 等 | ゼロエミッション船の実用化 |

出典: NEDO「グリーンイノベーション基金事業」{{% cite "nedo_gi_fund" %}}

## 水素・アンモニアの用途別フロー

{{% mermaid %}}
graph LR
  A["海外グリーン水素\n(豪州・中東)"]-->B["輸入(液化H2/MCH/NH3)\n川崎重工・千代田化工"]
  C["国内再エネ\n(風力・太陽光)"]-->D["国内水電解\n(FH2R・苫小牧)"]
  B-->E["大規模需要家"]
  D-->E
  E-->F["火力発電\nJERA碧南・IHI"]
  E-->G["製鉄\n[日本](/rule/asia/japan/)製鉄・JFE・神戸製鋼"]
  E-->H["コンビナート\n川崎・周南・大分"]
  E-->I["モビリティ\nFCV・FCバス・FC船"]
  style A fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style C fill:#dcfce7,color:#14532d,stroke:#16a34a,stroke-width:2px
  style B fill:#fef3c7,color:#78350f,stroke:#f59e0b,stroke-width:2px
  style D fill:#fef3c7,color:#78350f,stroke:#f59e0b,stroke-width:2px
{{% /mermaid %}}

## 国内水素ステーション

燃料電池自動車（FCV）向けの<span style="font-weight:700">商用水素ステーション</span>は、首都圏・中京圏・関西圏・北部九州の4大需要地を中心に整備が進められています。最大手は<span style="font-weight:700">岩谷産業</span>で、国内に50か所超のステーションを運営しています{{% cite "iwatani_h2station" %}}。[日本](/rule/asia/japan/)水素ステーションネットワーク合同会社（JHyM）には自動車・エネルギー・インフラ各社が参画しています。

## 歴史的経緯

{{% timeline %}}

| 年 | 出来事 |
|----|-------|
| 2014 | トヨタ「MIRAI」発売{{%cite "iwatani_h2station" %}}, 岩谷産業が国内初の商用水素ステーション開設{{% cite "iwatani_h2station" %}} |
| 2017 | 経済産業省「水素基本戦略」策定{{%cite "meti_h2strategy2023" %}}（世界初の国家水素戦略） |
| 2020 | FH2R{{%cite "nedo_fh2r" %}}（福島水素エネルギー研究フィールド）開所。Hy touch 神戸{{%cite "khi_hytouch" %}}の液化水素受入基地完成 |
| 2020 | 経産省「グリーンイノベーション基金」{{%cite "nedo_gi_fund" %}}2兆円創設{{% cite "nedo_gi_fund" %}} |
| 2022 | 川崎重工の液化水素運搬船「すいそ ふろんてぃあ」{{%cite "hesc" %}}が豪州〜神戸の世界初海上輸送実証を完了{{% cite "hesc" %}} |
| 2023 | 経産省「水素基本戦略」改定。2040年導入目標1,200万t/年を新設{{% cite "meti_h2strategy2023" %}} |
| 2024 | JERA碧南火力でアンモニア20%混焼実証完了{{%cite "jera_hekinan" %}}（2024年6月）{{% cite "jera_hekinan" %}} |
| 2027 | JERA碧南火力でアンモニア混焼の商用運転開始予定 |

{{% /timeline %}}

## 国際サプライチェーン

[日本](/rule/asia/japan/)は単独で必要量を製造できないため、海外との国際協力が前提となっています。

- <span style="font-weight:700">豪州（HESC プロジェクト）</span>: ビクトリア州の褐炭から水素を製造し、液化して神戸へ輸送{{%cite "hesc" %}}。川崎重工・電源開発・岩谷産業・丸紅・住友商事・ENEOS などが参画{{% cite "hesc" %}}。
- <span style="font-weight:700">中東（[UAE](/rule/middle_east/united_arab_emirates/)・サウジ）</span>: ブルーアンモニア{{%cite "meti_h2strategy2023" %}}（天然ガス改質＋CCS）の輸入。三井物産・三菱商事・伊藤忠商事が長期契約交渉。
- <span style="font-weight:700">[米国](/rule/n_america/usa/)</span>: ルイジアナ州 Blue Point プロジェクトに JERA が出資{{%cite "jera_hekinan" %}}（年140万トン{{%cite "jera_hekinan" %}}のブルーアンモニア計画）{{% cite "jera_hekinan" %}}。

## 関連企業の時価総額マップ

水素・アンモニアサプライチェーンに関わる主要上場企業の時価総額を可視化しています。

{{% corp-treemap "9501,9502,9503,7012,7013,5020,5019,8088,4004,4063,3407,4042,5401,4005,4188,4063,4046" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・水素アンモニアとの関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 発電事業者（アンモニア混焼）</td></tr>
<tr>
<td>東京電力HD</td>
<td>{{% minkabu 9501 %}}</td>
<td>JERA（東電・中部電力50%出資）の親会社。火力発電のアンモニア混焼実証を推進。</td>
<td>{{% corplink "https://www.tepco.co.jp/about/ir/" %}}</td>
<td>{{% dividend "tokyo" "9501" %}}</td>
</tr>
<tr>
<td>中部電力</td>
<td>{{% minkabu 9502 %}}</td>
<td>JERAの親会社（50%）。碧南火力のアンモニア混焼商用化を主導。</td>
<td>{{% corplink "https://www.chuden.co.jp/corporate/ir/" %}}</td>
<td>{{% dividend "tokyo" "9502" %}}</td>
</tr>
<tr>
<td>関西電力</td>
<td>{{% minkabu 9503 %}}</td>
<td>水素サプライチェーン実証に参画。原子力由来の水素製造研究も推進。</td>
<td>{{% corplink "https://www.kepco.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9503" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 重工業（液化水素・水電解装置）</td></tr>
<tr>
<td>川崎重工業</td>
<td>{{% minkabu 7012 %}}</td>
<td>液化水素運搬船「すいそ ふろんてぃあ」を世界初開発{{%cite "hesc" %}}。神戸液化水素受入基地（Hy touch神戸）を運営{{% cite "khi_hytouch" %}}。大型液化水素運搬船の基本設計承認を取得{{% cite "khi_hytouch" %}}。</td>
<td>{{% corplink "https://www.khi.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7012" %}}</td>
</tr>
<tr>
<td>IHI</td>
<td>{{% minkabu 7013 %}}</td>
<td>アンモニア専焼バーナー・ガスタービンを開発。JERAと碧南火力の混焼実証を共同実施。</td>
<td>{{% corplink "https://www.ihi.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7013" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 石油元売り（水素サプライチェーン）</td></tr>
<tr>
<td>ENEOSホールディングス</td>
<td>{{% minkabu 5020 %}}</td>
<td>国内最大の石油元売り。中央技術研究所を中心に水素キャリアMCH{{%cite "meti_h2strategy2023" %}}（メチルシクロヘキサン）方式を開発{{%cite "meti_h2strategy2023" %}}。トヨタ「Woven City」に水素を供給。</td>
<td>{{% corplink "https://www.hd.eneos.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5020" %}}</td>
</tr>
<tr>
<td>出光興産</td>
<td>{{% minkabu 5019 %}}</td>
<td>苫小牧{{%cite "meti_tomakomai_ccs" %}}でのグリーン水素・ブルーアンモニア構想を推進{{% cite "meti_tomakomai_ccs" %}}。徳山事業所{{%cite "meti_ammonia_society" %}}でのカーボンフリーアンモニア供給網に参画{{% cite "meti_ammonia_society" %}}。</td>
<td>{{% corplink "https://www.idemitsu.com/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5019" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ ガス・LPG（水素ステーション）</td></tr>
<tr>
<td>岩谷産業</td>
<td>{{% minkabu 8088 %}}</td>
<td>国内水素ステーション最大手（約50か所）{{% cite "iwatani_h2station" %}}。市原・堺・周南で液化水素を製造。FH2Rにも参画。</td>
<td>{{% corplink "https://www.iwatani.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "8088" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 化学（アンモニア・水電解）</td></tr>
<tr>
<td>レゾナック・ホールディングス</td>
<td>{{% minkabu 4004 %}}</td>
<td>川崎事業所{{%cite "resonac_kawasaki" %}}で使用済みプラスチックを原料に低炭素水素・アンモニアを製造{{%cite "resonac_kawasaki" %}}（2003年〜の長期実績）{{% cite "resonac_kawasaki" %}}。</td>
<td>{{% corplink "https://www.resonac.com/jp/ir" %}}</td>
<td>{{% dividend "tokyo" "4004" %}}</td>
</tr>
<tr>
<td>旭化成</td>
<td>{{% minkabu 3407 %}}</td>
<td>大型アルカリ水電解装置を開発{{%cite "nedo_gi_fund" %}}。グリーンイノベーション基金{{%cite "nedo_gi_fund" %}}で水電解の大規模化テーマに採択{{% cite "nedo_gi_fund" %}}。</td>
<td>{{% corplink "https://www.asahi-kasei.com/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "3407" %}}</td>
</tr>
<tr>
<td>東ソー</td>
<td>{{% minkabu 4042 %}}</td>
<td>苛性ソーダ製造の副生水素を活用{{%cite "meti_ammonia_society" %}}。周南コンビナート{{%cite "meti_ammonia_society" %}}のカーボンフリーアンモニア構想に参画{{% cite "meti_ammonia_society" %}}。</td>
<td>{{% corplink "https://www.tosoh.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4042" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 製鉄（水素還元）</td></tr>
<tr>
<td>[日本](/rule/asia/japan/)製鉄</td>
<td>{{% minkabu 5401 %}}</td>
<td>高炉水素還元・水素直接還元製鉄の実証を推進。グリーンイノベーション基金で「ハイドロゲンスチール」テーマに採択。</td>
<td>{{% corplink "https://www.nipponsteel.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "5401" %}}</td>
</tr>
<tr>
<td>住友化学</td>
<td>{{% minkabu 4005 %}}</td>
<td>グリーンイノベーション基金で水電解・低温アンモニア合成に採択。アンモニア関連技術開発を推進。</td>
<td>{{% corplink "https://www.sumitomo-chem.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4005" %}}</td>
</tr>
<tr>
<td>三菱ケミカル</td>
<td>{{% minkabu 4188 %}}</td>
<td>水素・アンモニア関連の機能化学品開発。複数コンビナートでの供給ネットワーク。</td>
<td>{{% corplink "https://www.mitsubishichem-hd.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4188" %}}</td>
</tr>
<tr>
<td>信越化学工業</td>
<td>{{% minkabu 4063 %}}</td>
<td>PVC・ソーダ製造の副生水素活用。水電解関連材料の開発・製造。</td>
<td>{{% corplink "https://www.shinetsu.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4063" %}}</td>
</tr>
<tr>
<td>大阪ソーダ</td>
<td>{{% minkabu 4046 %}}</td>
<td>塩素・アルカリ化学の副生水素活用。アンモニア関連構想への参画。</td>
<td>{{% corplink "https://www.osakasoda.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4046" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 自動車・輸送（水素燃料電池）</td></tr>
<tr>
<td>トヨタ自動車</td>
<td>{{% minkabu 7203 %}}</td>
<td>MIRAIなど燃料電池車（FCV）の開発・販売。Woven Cityで水素社会実験。商用FCV（水素トラック）も開発中。</td>
<td>{{% corplink "https://www.toyota.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7203" %}}</td>
</tr>
<tr>
<td>本田技工業</td>
<td>{{% minkabu 7267 %}}</td>
<td>クラリティ・フューエル・セルなど燃料電池車の開発。次世代FCV・商用ソリューション開発を推進。</td>
<td>{{% corplink "https://www.honda.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7267" %}}</td>
</tr>
<tr>
<td>日野自動車</td>
<td>{{% minkabu 7205 %}}</td>
<td>水素燃料電池トラック・バスの開発。大型商用車向けの水素社会対応を推進。</td>
<td>{{% corplink "https://www.hino.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7205" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 商社・エネルギー（国際サプライチェーン）</td></tr>
<tr>
<td>三井物産</td>
<td>{{% minkabu 8031 %}}</td>
<td>国際水素・アンモニア協力の主要プレイヤー。豪州・中東プロジェクトに参画。</td>
<td>{{% corplink "https://www.mitsui.com/mgssi/en/ir/" %}}</td>
<td>{{% dividend "tokyo" "8031" %}}</td>
</tr>
<tr>
<td>三菱商事</td>
<td>{{% minkabu 8058 %}}</td>
<td>JERA経由で水素・アンモニア事業に参画。国際プロジェクト推進。</td>
<td>{{% corplink "https://www.mitsubishicorp.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "8058" %}}</td>
</tr>
<tr>
<td>伊藤忠商事</td>
<td>{{% minkabu 8001 %}}</td>
<td>国際水素・アンモニアサプライチェーン事業展開。中東・豪州プロジェクト参画。</td>
<td>{{% corplink "https://www.itochu.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "8001" %}}</td>
</tr>
<tr>
<td>電源開発（J-Power）</td>
<td>{{% minkabu 9513 %}}</td>
<td>HESC プロジェクトで豪州水素製造・輸送に参画。国内水素供給の中核を担当。</td>
<td>{{% corplink "https://www.jpower.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9513" %}}</td>
</tr>
</tbody>
</table>
</div>

## 参考文献

{{% references %}}
fukuoka_h2: 福岡県「水素グリーン成長戦略」<https://www.pref.fukuoka.lg.jp/contents/suiso-greengrowth.html>
hesc: 経済産業省「褐炭由来水素サプライチェーン構築実証事業」<https://www.meti.go.jp/policy/energy_environment/global_warming/roadmap/innovation/hydrogen.html>
iwatani_h2station: 岩谷産業「水素ステーション一覧」<https://www.iwatani.co.jp/jpn/h2/station/>
jera_hekinan: 株式会社JERA「碧南火力発電所におけるアンモニア混焼実証試験について」<https://www.jera.co.jp/news/information/20240603_1859>
khi_hytouch: 川崎重工業株式会社「液化水素レシービングターミナル『Hy touch 神戸』」<https://www.khi.co.jp/hydrogen/article/article01.html>
meti_ammonia_society: 経済産業省 資源エネルギー庁「燃料アンモニア導入官民協議会」<https://www.meti.go.jp/shingikai/energy_environment/nenryo_anmonia/>
meti_h2strategy2023: 経済産業省 資源エネルギー庁「水素基本戦略」（2023年6月改定）<https://www.meti.go.jp/shingikai/enecho/shoene_shinene/suiso_seisaku/pdf/20230606_2.pdf>
meti_tomakomai_ccs: 経済産業省「苫小牧におけるCCS大規模実証試験」<https://www.meti.go.jp/policy/energy_environment/global_warming/roadmap/innovation/ccus.html>
nedo_fh2r: NEDO「福島水素エネルギー研究フィールド（FH2R）が本格運用開始」<https://www.nedo.go.jp/news/press/AA5_101293.html>
nedo_gi_fund: NEDO「グリーンイノベーション基金事業」<https://green-innovation.nedo.go.jp/>
obayashi_kuju: 株式会社大林組「地熱発電を利用したグリーン水素製造・供給」<https://www.obayashi.co.jp/news/detail/news20210718_1.html>
resonac_kawasaki: 株式会社レゾナック「川崎事業所のケミカルリサイクル」<https://www.resonac.com/jp/sustainability/society/recycle.html>
{{% /references %}}
