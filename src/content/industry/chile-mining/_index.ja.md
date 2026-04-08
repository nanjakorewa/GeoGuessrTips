---
title: "チリの銅・リチウム鉱業"
subtitle: "アタカマ砂漠 — 世界最大の銅生産国とリチウムトライアングル"
date: 2026-04-08
lastmod: 2026-04-08
description: "チリの鉱業を解説。世界の銅生産で約24%（2024年541万トン）を占める世界最大の銅産国としての地位、Codelco・BHP Escondida・Collahuasiなど主要鉱山、SQMとAlbemarleが操業するSalar de Atacamaのリチウム生産、リチウムトライアングルとチリ国家リチウム戦略までを整理。"
weight: 37
mapName: "southAmerica"
galleryDir: "chile-mining"
---

<script>
(function() {
  // [チリ](/rule/cs_america/chile/)の主要鉱山（southAmerica マップ）
  var pins = [
    {
        "x": 132,
        "y": 345,
        "label": "Collahuasi",
        "note": "世界級の銅鉱山（タラパカ州）"
    },
    {
        "x": 130,
        "y": 365,
        "label": "Chuquicamata",
        "note": "Codelco 露天掘り銅鉱山（カラマ）"
    },
    {
        "x": 138,
        "y": 395,
        "label": "Escondida",
        "note": "BHP 世界最大級の銅鉱山（アントファガスタ）"
    },
    {
        "x": 145,
        "y": 410,
        "label": "Salar de Atacama",
        "note": "SQM・Albemarle リチウム塩湖"
    },
    {
        "x": 140,
        "y": 525,
        "label": "Santiago",
        "note": "首都・Codelco 本社"
    },
    {
        "x": 142,
        "y": 550,
        "label": "El Teniente",
        "note": "Codelco 世界最大級の地下銅鉱山（ランカグア近郊）"
    }
];

  function addPins() {
    var mapEl = document.getElementById('world-map');
    if (!mapEl) return;
    var svg = mapEl.querySelector('svg');
    if (!svg) { setTimeout(addPins, 300); return; }

    pins.forEach(function(pin) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'industry-pin');
      g.style.cursor = 'default';

      var titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      titleEl.textContent = pin.label + ' — ' + (pin.note || '');
      g.appendChild(titleEl);

      var color = '#dc2626';
      var bgColor = 'rgba(220,38,38,0.20)';
      var strokeColor = 'rgba(220,38,38,0.65)';

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y);
      glow.setAttribute('r', '6');
      glow.setAttribute('fill', bgColor);
      glow.setAttribute('stroke', strokeColor);
      glow.setAttribute('stroke-width', '1');

      var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', pin.x);
      dot.setAttribute('cy', pin.y);
      dot.setAttribute('r', '2.5');
      dot.setAttribute('fill', color);

      var textLen = pin.label.length;
      var bgW = textLen * 5 + 6;
      var bgH = 9;

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', pin.y + 6);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', 'rgba(31,41,55,0.88)');
      labelBg.setAttribute('rx', '2');

      var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pin.x);
      label.setAttribute('y', pin.y + 12);
      label.setAttribute('font-size', '6.5');
      label.setAttribute('fill', '#fff');
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      label.textContent = pin.label;

      g.appendChild(glow);
      g.appendChild(dot);
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

## なぜ[チリ](/rule/cs_america/chile/)が鉱業大国なのか

[チリ](/rule/cs_america/chile/)共和国は<span style="font-weight:700">世界最大の銅生産国</span>であり、2024年の銅生産量は<span style="font-weight:700">約550万トン</span>（前年比+4.9%）と、20年来の減少傾向を反転させて成長軌道に戻りました{{% cite "cochilco_2024" %}。世界の銅鉱山生産（約2,300万トン）のうち<span style="font-weight:700">約24%</span>{{% cite "usgs_mcs2025_copper" %}}を1か国で供給しており、第2位[ペルー](/rule/cs_america/peru/)（約12%）、第3位[コンゴ民主共和国](/rule/africa/rdc/)（約10%）を大きく引き離しています。さらに[チリ](/rule/cs_america/chile/)は<span style="font-weight:700">世界最大の銅埋蔵量保有国</span>でもあり、確認埋蔵量の<span style="font-weight:700">約21.3%</span>が国内に集中しています{{% cite "usgs_mcs2025_copper" %}}。

加えて[チリ](/rule/cs_america/chile/)は<span style="font-weight:700">世界第2位のリチウム生産国</span> （1位は[オーストラリア](/rule/oceania/australia/)）で、アタカマ塩湖（Salar de Atacama）のかん水から世界の<span style="font-weight:700">約34%</span> ものリチウムが採れるとされ、隣接する[アルゼンチン](/rule/cs_america/argentina/)・[ボリビア](/rule/cs_america/bolivia/)と合わせた<span style="font-weight:700">「リチウムトライアングル」</span> は世界リチウム資源の約56%を占めます{{% cite "fastmarkets_lithium_triangle" %}}。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">~550万t</div><div class="stat-label">2024年 [チリ](/rule/cs_america/chile/)銅生産量（世界1位）</div></div>
<div class="stat-card"><div class="stat-num">~24%</div><div class="stat-label">世界銅鉱山生産シェア</div></div>
<div class="stat-card"><div class="stat-num">~21.3%</div><div class="stat-label">世界銅埋蔵量シェア</div></div>
<div class="stat-card"><div class="stat-num">~34%</div><div class="stat-label">アタカマ塩湖の世界リチウム供給シェア</div></div>
</div>

## [チリ](/rule/cs_america/chile/)の銅鉱業

### 主要銅鉱山

| 鉱山 | 場所 | 運営者 | 2024年生産（概算）| 備考 |
| --- | --- | --- | --- | --- |
| <span style="font-weight:700">Escondida</span> | アントファガスタ州（標高3,100m）| BHP 57.5%, Rio Tinto 30%, JECO 12.5% | ~110〜120万t | 世界最大級の銅鉱山、JECOは三菱商事/三菱マテリアル/日鉱グループの合弁 |
| <span style="font-weight:700">Collahuasi</span> | タラパカ州 | Anglo American 44%, Glencore 44%, JCR 12% | ~56万t | JCR=三井物産/JX金属の合弁 |
| <span style="font-weight:700">El Teniente</span> | オイギンス州ランカグア近郊 | Codelco（国営）| ~46万t | 世界最大の地下銅鉱山、1905年からBraden Copperにより本格操業開始{{% cite "codelco" %}} |
| <span style="font-weight:700">Chuquicamata</span> | アントファガスタ州 | Codelco | ~32万t | 世界最大級の露天掘りから地下採鉱に転換 |
| <span style="font-weight:700">Los Pelambres</span> | コキンボ州 | Antofagasta plc 60%, JX/丸紅 40% | ~30万t | ルクシック家のAntofagastaグループ |
| <span style="font-weight:700">Los Bronces</span> | サンティアゴ近郊 | Anglo American 50.1%, Codelco 20%, 三菱29.5% | ~25万t | 大型再掘プロジェクト進行中 |
| <span style="font-weight:700">Spence / Pampa Norte</span> | アントファガスタ州 | BHP | ~25万t | 銅カソード生産 |
| <span style="font-weight:700">Radomiro Tomic</span> | アントファガスタ州 | Codelco | ~27万t | チュキカマタの北延長 |
| <span style="font-weight:700">Caserones</span> | アタカマ州 | Lundin Mining（旧JX金属/三井物産）| ~14万t | 2023年にLundinが買収 |
| <span style="font-weight:700">Sierra Gorda</span> | アントファガスタ州 | KGHM 55%, 住友金属鉱山/住友商事 45% | ~15万t | 銅・モリブデン |
| <span style="font-weight:700">Centinela</span> | アントファガスタ州 | Antofagasta 70%, 丸紅 30% | ~25万t | 第2集中工場プロジェクト進行中 |

### Codelco — 世界最大の銅生産企業

<span style="font-weight:700">Codelco（Corporación Nacional del Cobre de Chile）</span>は1976年にピノチェト政権下で設立された[チリ](/rule/cs_america/chile/)国営銅会社で、Chuquicamata・El Teniente・Andina・Salvador・Ministro Hales・Radomiro Tomic・Gabriela Mistralの<span style="font-weight:700">7鉱業部門</span>を運営し、[チリ](/rule/cs_america/chile/)の銅生産の25〜30%、単独企業として世界最大級の銅生産者です。1971年のサルバドール・アジェンデ政権下で米系企業（Anaconda、Kennecott）の銅鉱山が国有化されたのが起源で、今も[チリ](/rule/cs_america/chile/)政府100%所有です。近年は鉱床深度化と品位低下で生産が伸び悩み、2024年は<span style="font-weight:700">約132.9万トン</span>（自社操業分）または<span style="font-weight:700">約144万トン</span>（権益分を含む）を生産し、BHPと並ぶ世界最大級の銅生産企業として世界1位の座を維持しました{{% cite "codelco_2024_results" %}}。

### [日本](/rule/asia/japan/)企業の関与

[チリ](/rule/cs_america/chile/)の主要銅鉱山には[日本](/rule/asia/japan/)の総合商社・非鉄製錬会社が広く出資しており、<span style="font-weight:700">邦船3社の海上輸送</span>と並ぶ「[チリ](/rule/cs_america/chile/) → [日本](/rule/asia/japan/)」のサプライチェーンを形成しています。

| [日本](/rule/asia/japan/)側出資者 | 主な参画鉱山 |
| --- | --- |
| 三菱商事・三菱マテリアル・日鉱（JECO）| Escondida（12.5%）|
| 三井物産・JX金属（JCR）| Collahuasi（12%）|
| 三菱商事 | Los Bronces（29.5%）, Anglo American Sur |
| 住友金属鉱山・住友商事 | Sierra Gorda（45%）, Candelaria |
| 丸紅 | Los Pelambres、Centinela |
| JX金属（旧パンパシフィック・カッパー）| Caserones（旧オペレータ、現Lundin）|

東予製錬所（住友金属鉱山）、佐賀関製錬所（JX金属）、直島製錬所（三菱マテリアル）などは[チリ](/rule/cs_america/chile/)産の銅精鉱を主要原料としており、[日本](/rule/asia/japan/)の銅製錬産業は[チリ](/rule/cs_america/chile/)依存度が高いと言えます。

## [チリ](/rule/cs_america/chile/)のリチウム鉱業

### Salar de Atacama — 世界最大級のリチウムかん水資源

リチウムは「<span style="font-weight:700">スポジュメン鉱石</span>」（豪州）と「<span style="font-weight:700">塩湖かん水</span>」（南米）の2系統で生産されますが、後者は太陽蒸発による低コスト生産が可能です{{% cite "usgs_mcs2025_li" %}}。<span style="font-weight:700">Salar de Atacama</span>は標高約2,300mのアンデス高地にある世界最大級の塩湖で、北はチュキカマタの銅鉱山地帯、東は[ボリビア](/rule/cs_america/bolivia/)国境のウユニ塩湖（Salar de Uyuni）に隣接します。

### SQMとAlbemarle

[チリ](/rule/cs_america/chile/)のリチウム鉱区は[チリ](/rule/cs_america/chile/)国家所有で、<span style="font-weight:700">CORFO（[チリ](/rule/cs_america/chile/)生産振興公社）</span>から特別操業契約を得た2社のみが採掘できます。

| 企業 | 国 | [チリ](/rule/cs_america/chile/)生産シェア | 概要 |
| --- | --- | --- | --- |
| <span style="font-weight:700">SQM（Sociedad Química y Minera de Chile）</span>| <img src="/flags/CL.svg" alt="CL" class="inline-flag" width="20" height="14" loading="lazy" /> [チリ](/rule/cs_america/chile/) | ~65% | 旧Soquimich、ピノチェト時代の婿ジュリオ・ポンセ・レロウ氏が支配。元々はナイトレート（硝石）会社でリチウム化合物・ヨウ素・カリ肥料も主要事業。NYSE: SQM{{% cite "sqm_company" %}} |
| <span style="font-weight:700">Albemarle</span>| <img src="/flags/US.svg" alt="US" class="inline-flag" width="20" height="14" loading="lazy" /> [米国](/rule/n_america/usa/) | ~35% | 旧Rockwood Lithium買収（2015）。世界最大級のリチウム企業、米NC州本社。NYSE: ALB{{% cite "investingnews_lithium" %}} |

SQMはアタカマ操業から<span style="font-weight:700">2024年に201,000トンLCE（炭酸リチウム換算）</span>を生産し、世界のリチウム鉱山単一拠点としてトップ生産量を達成しました{{% cite "investingnews_lithium" %}}。

### [チリ](/rule/cs_america/chile/)の新リチウム戦略（2023年）

2023年4月、[チリ](/rule/cs_america/chile/)のボリッチ大統領は<span style="font-weight:700">「国家リチウム戦略」</span>を発表し、今後の新規リチウム開発はすべて<span style="font-weight:700">官民パートナーシップ</span>で行い、<span style="font-weight:700">Codelcoと[チリ](/rule/cs_america/chile/)国営企業ENAMIが多数株を持つ形でのみ許可</span>するとしました。SQMとAlbemarleの既存契約はそれぞれ2030年・2043年まで有効ですが、2024年5月にSQMはCodelcoとのジョイントベンチャー協定（2025〜2060年）に合意。これによりCodelcoはアタカマ操業の50%以上を取得する見込みです。

## アタカマ砂漠の鉱業ベルト

```text
[太平洋] ─ [アタカマ砂漠（標高2,000〜4,000m）] ─ [アンデス山脈]
                    │
   ┌────────────┼────────────┐
   │            │            │
 銅鉱山ベルト    リチウム塩湖    国境（[ペルー](/rule/cs_america/peru/)/[ボリビア](/rule/cs_america/bolivia/)/[アルゼンチン](/rule/cs_america/argentina/)）
 ─────────     ─────────
 Chuquicamata   Salar de Atacama
 Escondida      Salar de Maricunga（開発中）
 Collahuasi
 Spence
 Centinela
```

アントファガスタ・トコピジャ・メヒジョネスといった港湾は銅精鉱・銅カソード・リチウム化合物の輸出ハブで、ここから[日本](/rule/asia/japan/)・[中国](/rule/asia/china/)・[韓国](/rule/asia/korea/)・欧州へ船積みされます。

## 産業上の特徴と課題

- <span style="font-weight:700">水資源</span>: アタカマ砂漠は世界で最も乾燥した地域で、銅精鉱の浮選とリチウムかん水の蒸発の両方が水を大量消費。BHPは2018年にEscondidaで<span style="font-weight:700">海水淡水化</span>100%化を達成{{% cite "expomin_chile2024" %}}
- <span style="font-weight:700">電力</span>: 標高3,000m級の鉱山操業には大量電力が必要。[チリ](/rule/cs_america/chile/)は2030年代後半までに鉱業電力の100%再エネ化を目指す
- <span style="font-weight:700">コミュニティ</span>: アタカマ先住民（リカン・アンタイ、コヤなど）との対話が必須
- <span style="font-weight:700">国家主義</span>: 銅は1971年に国有化{{% cite "codelco" %}}、リチウムは2023年戦略で再び国家管理強化の流れ

## [チリ](/rule/cs_america/chile/)鉱業に関わる主要企業の時価総額マップ

<div class="corp-treemap-section">
<div class="treemap-legend">
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#d97706"></span>銅・多角化</span>
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#10b981"></span>リチウム</span>
</div>
<div class="corp-treemap" data-companies='[{"t":"BHP","n":"BHP Group","s":"銅・多角化","v":21.0,"c":"#d97706"},{"t":"RIO","n":"Rio Tinto","s":"銅・多角化","v":16.5,"c":"#d97706"},{"t":"FCX","n":"Freeport-McMoRan","s":"銅","v":8.3,"c":"#d97706"},{"t":"SCCO","n":"Southern Copper","s":"銅","v":12.0,"c":"#d97706"},{"t":"GLEN.L","n":"Glencore","s":"銅・多角化","v":8.3,"c":"#d97706"},{"t":"AAL.L","n":"Anglo American","s":"銅・多角化","v":6.8,"c":"#d97706"},{"t":"TECK","n":"Teck Resources","s":"銅・多角化","v":3.8,"c":"#d97706"},{"t":"SQM","n":"SQM","s":"リチウム","v":2.25,"c":"#10b981"},{"t":"ALB","n":"Albemarle","s":"リチウム","v":1.5,"c":"#10b981"},{"t":"ANTO.L","n":"Antofagasta plc","s":"銅","v":3.0,"c":"#d97706"},{"t":"LUN.TO","n":"Lundin Mining","s":"銅","v":1.2,"c":"#d97706"},{"t":"KGH.WA","n":"KGHM","s":"銅","v":0.75,"c":"#d97706"}]'></div>
<p class="treemap-note">※ 面積は時価総額（概算・1ドル=150円換算）に比例。Codelcoは[チリ](/rule/cs_america/chile/)国営企業のため除外。</p>
</div>

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light"><tr>
<th class="col-width-3">企業</th>
<th class="col-width-2">ティッカー</th>
<th class="col-width-3">事業</th>
<th class="col-width-1">IR</th>
<th class="col-width-1">配当履歴</th>
</tr></thead>
<tbody class="corp-desc">
<tr><td>BHP Group</td><td>BHP</td><td>銅・多角化</td><td>{{% corplink "https://www.google.com/search?q=BHP Group+Investor+Relations" %}}</td><td>{{% dividend "other" "BHP" %}}</td></tr>
<tr><td>Rio Tinto</td><td>RIO</td><td>銅・多角化</td><td>{{% corplink "https://www.google.com/search?q=Rio Tinto+Investor+Relations" %}}</td><td>{{% dividend "other" "RIO" %}}</td></tr>
<tr><td>Freeport-McMoRan</td><td>FCX</td><td>銅</td><td>{{% corplink "https://www.google.com/search?q=Freeport-McMoRan+Investor+Relations" %}}</td><td>{{% dividend "other" "FCX" %}}</td></tr>
<tr><td>Southern Copper</td><td>SCCO</td><td>銅</td><td>{{% corplink "https://www.google.com/search?q=Southern Copper+Investor+Relations" %}}</td><td>{{% dividend "other" "SCCO" %}}</td></tr>
<tr><td>Glencore</td><td>GLEN.L</td><td>銅・多角化</td><td>{{% corplink "https://www.google.com/search?q=Glencore+Investor+Relations" %}}</td><td>{{% dividend "other" "GLEN.L" %}}</td></tr>
<tr><td>Anglo American</td><td>AAL.L</td><td>銅・多角化</td><td>{{% corplink "https://www.google.com/search?q=Anglo American+Investor+Relations" %}}</td><td>{{% dividend "other" "AAL.L" %}}</td></tr>
<tr><td>Teck Resources</td><td>TECK</td><td>銅・多角化</td><td>{{% corplink "https://www.google.com/search?q=Teck Resources+Investor+Relations" %}}</td><td>{{% dividend "other" "TECK" %}}</td></tr>
<tr><td>SQM</td><td>SQM</td><td>リチウム</td><td>{{% corplink "https://www.google.com/search?q=SQM+Investor+Relations" %}}</td><td>{{% dividend "other" "SQM" %}}</td></tr>
<tr><td>Albemarle</td><td>ALB</td><td>リチウム</td><td>{{% corplink "https://www.google.com/search?q=Albemarle+Investor+Relations" %}}</td><td>{{% dividend "other" "ALB" %}}</td></tr>
<tr><td>Antofagasta plc</td><td>ANTO.L</td><td>銅</td><td>{{% corplink "https://www.google.com/search?q=Antofagasta plc+Investor+Relations" %}}</td><td>{{% dividend "other" "ANTO.L" %}}</td></tr>
<tr><td>Lundin Mining</td><td>LUN.TO</td><td>銅</td><td>{{% corplink "https://www.google.com/search?q=Lundin Mining+Investor+Relations" %}}</td><td>{{% dividend "other" "LUN.TO" %}}</td></tr>
<tr><td>KGHM</td><td>KGH.WA</td><td>銅</td><td>{{% corplink "https://www.google.com/search?q=KGHM+Investor+Relations" %}}</td><td>{{% dividend "other" "KGH.WA" %}}</td></tr>
</tbody></table>
</div>

## 参考文献

{{% references %}}
cochilco_2024: Cochilco（Comisión Chilena del Cobre）「Chilean copper production breaks downward trend and closes 2024 with 4.9% growth」<https://www.cochilco.cl/>
usgs_mcs2025_copper: USGS「Mineral Commodity Summaries 2025 — Copper」<https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-copper.pdf>
fastmarkets_lithium_triangle: Fastmarkets「The Lithium Triangle」<https://www.fastmarkets.com/insights/the-lithium-triangle-three-countries-control-more-than-50-of-global-resources/>
codelco_2024_results: Codelco「December 2024 Results」<https://www.codelco.com/sites/site/docs/20240426/20240426181050/operational_and_financial_report_december_31_2024.pdf>
codelco: Codelco「About Us」<https://www.codelco.com/en/>
sqm_company: SQM「Investor Information」<https://ir.sqm.com/>
usgs_mcs2025_li: USGS「Mineral Commodity Summaries 2025 — Lithium」<https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-lithium.pdf>
jogmec_chile: JOGMEC「チリの鉱業概観」<https://mric.jogmec.go.jp/>
{{% /references %}}
