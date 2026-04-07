---
title: "チリの銅・リチウム鉱業"
subtitle: "アタカマ砂漠 — 世界最大の銅生産国とリチウムトライアングル"
date: 2026-04-08
lastmod: 2026-04-08
description: "チリの鉱業を解説。世界の銅生産で約24%（2024年541万トン）を占める世界最大の銅産国としての地位、Codelco・BHP Escondida・Collahuasiなど主要鉱山、SQMとAlbemarleが操業するSalar de Atacamaのリチウム生産、リチウムトライアングルとチリ国家リチウム戦略までを整理。"
weight: 37
mapName: "southAmerica"
---

<script>
(function() {
  // チリの主要鉱山（southAmerica マップ）
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
        "x": 138,
        "y": 530,
        "label": "El Teniente",
        "note": "Codelco 世界最大級の地下銅鉱山"
    },
    {
        "x": 140,
        "y": 540,
        "label": "Santiago",
        "note": "首都・Codelco 本社"
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

## なぜチリが鉱業大国なのか

チリ共和国は**世界最大の銅生産国**であり、2024年の銅生産量は**約541万トン**（前年比+4.9%）と、20年来の減少傾向を反転させて成長軌道に戻りました{{% cite "expomin_chile2024" %}}。世界の銅鉱山生産（約2,200万トン）のうち**約24%**{{% cite "plusmining_2024" %}}を1か国で供給しており、第2位ペルー（約12%）、第3位コンゴ民主共和国（約10%）を大きく引き離しています。さらにチリは**世界最大の銅埋蔵量保有国**でもあり、確認埋蔵量の**約21%**が国内に集中しています。

加えてチリは**世界第2位のリチウム生産国** （1位はオーストラリア）で、アタカマ塩湖（Salar de Atacama）のかん水から世界の**約34%** ものリチウムが採れるとされ、隣接するアルゼンチン・ボリビアと合わせた**「リチウムトライアングル」** は世界リチウム資源の50%以上を占めます{{% cite "fastmarkets_lithium_triangle" %}}。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">~541万t</div><div class="stat-label">2024年 チリ銅生産量（世界1位）</div></div>
<div class="stat-card"><div class="stat-num">~24%</div><div class="stat-label">世界銅鉱山生産シェア</div></div>
<div class="stat-card"><div class="stat-num">~21%</div><div class="stat-label">世界銅埋蔵量シェア</div></div>
<div class="stat-card"><div class="stat-num">~34%</div><div class="stat-label">アタカマ塩湖の世界リチウム供給シェア</div></div>
</div>

## チリの銅鉱業

### 主要銅鉱山

| 鉱山 | 場所 | 運営者 | 2024年生産（概算）| 備考 |
| --- | --- | --- | --- | --- |
| **Escondida** | アントファガスタ州（標高3,100m）| BHP 57.5%, Rio Tinto 30%, JECO 12.5% | ~110〜120万t | 世界最大級の銅鉱山、JECOは三菱商事/三菱マテリアル/日鉱グループの合弁 |
| **Collahuasi** | タラパカ州 | Anglo American 44%, Glencore 44%, JCR 12% | ~56万t | JCR=三井物産/JX金属の合弁 |
| **El Teniente** | オイギンス州ランカグア近郊 | Codelco（国営）| ~46万t | 世界最大の地下銅鉱山、1819年から操業{{% cite "codelco" %}} |
| **Chuquicamata** | アントファガスタ州 | Codelco | ~32万t | 世界最大級の露天掘りから地下採鉱に転換 |
| **Los Pelambres** | コキンボ州 | Antofagasta plc 60%, JX/丸紅 40% | ~30万t | ルクシック家のAntofagastaグループ |
| **Los Bronces** | サンティアゴ近郊 | Anglo American 50.1%, Codelco 20%, 三菱29.5% | ~25万t | 大型再掘プロジェクト進行中 |
| **Spence / Pampa Norte** | アントファガスタ州 | BHP | ~25万t | 銅カソード生産 |
| **Radomiro Tomic** | アントファガスタ州 | Codelco | ~27万t | チュキカマタの北延長 |
| **Caserones** | アタカマ州 | Lundin Mining（旧JX金属/三井物産）| ~14万t | 2023年にLundinが買収 |
| **Sierra Gorda** | アントファガスタ州 | KGHM 55%, 住友金属鉱山/住友商事 45% | ~15万t | 銅・モリブデン |
| **Centinela** | アントファガスタ州 | Antofagasta 70%, 丸紅 30% | ~25万t | 第2集中工場プロジェクト進行中 |

### Codelco — 世界最大の銅生産企業

**Codelco（Corporación Nacional del Cobre de Chile）**は1976年にピノチェト政権下で設立されたチリ国営銅会社で、Chuquicamata・El Teniente・Andina・Salvador・Ministro Hales・Radomiro Tomic・Gabriela Mistralの**7鉱業部門**を運営し、チリの銅生産の25〜30%、単独企業として世界最大級の銅生産者です。1971年のサルバドール・アジェンデ政権下で米系企業（Anaconda、Kennecott）の銅鉱山が国有化されたのが起源で、今もチリ政府100%所有です。近年は鉱床深度化と品位低下で生産が伸び悩み、2024年は**約132万8000トン**（自社操業分）または**約144万トン**（権益分を含む）を生産し、BHPと並ぶ世界最大級の銅生産企業として世界1位の座を維持しました{{% cite "miningweekly_codelco" %}}。

### 日本企業の関与

チリの主要銅鉱山には日本の総合商社・非鉄製錬会社が広く出資しており、**邦船3社の海上輸送**と並ぶ「チリ → 日本」のサプライチェーンを形成しています。

| 日本側出資者 | 主な参画鉱山 |
| --- | --- |
| 三菱商事・三菱マテリアル・日鉱（JECO）| Escondida（12.5%）|
| 三井物産・JX金属（JCR）| Collahuasi（12%）|
| 三菱商事 | Los Bronces（29.5%）, Anglo American Sur |
| 住友金属鉱山・住友商事 | Sierra Gorda（45%）, Candelaria |
| 丸紅 | Los Pelambres、Centinela |
| JX金属（旧パンパシフィック・カッパー）| Caserones（旧オペレータ、現Lundin）|

東予製錬所（住友金属鉱山）、佐賀関製錬所（JX金属）、直島製錬所（三菱マテリアル）などはチリ産の銅精鉱を主要原料としており、日本の銅製錬産業はチリ依存度が高いと言えます。

## チリのリチウム鉱業

### Salar de Atacama — 世界最大級のリチウムかん水資源

リチウムは「**スポジュメン鉱石**」（豪州）と「**塩湖かん水**」（南米）の2系統で生産されますが、後者は太陽蒸発による低コスト生産が可能です{{% cite "usgs_mcs2025_li" %}}。**Salar de Atacama**は標高約2,300mのアンデス高地にある世界最大級の塩湖で、北はチュキカマタの銅鉱山地帯、東はボリビア国境のウユニ塩湖（Salar de Uyuni）に隣接します。

### SQMとAlbemarle

チリのリチウム鉱区はチリ国家所有で、**CORFO（チリ生産振興公社）**から特別操業契約を得た2社のみが採掘できます。

| 企業 | 国 | チリ生産シェア | 概要 |
| --- | --- | --- | --- |
| **SQM（Sociedad Química y Minera de Chile）**| <img src="/flags/CL.svg" alt="CL" class="inline-flag" width="20" height="14" loading="lazy" /> チリ | ~65% | 旧Soquimich、ピノチェト時代の婿ジュリオ・ポンセ・レロウ氏が支配。元々はナイトレート（硝石）会社でリチウム化合物・ヨウ素・カリ肥料も主要事業。NYSE: SQM{{% cite "sqm_company" %}} |
| **Albemarle**| <img src="/flags/US.svg" alt="US" class="inline-flag" width="20" height="14" loading="lazy" /> 米国 | ~35% | 旧Rockwood Lithium買収（2015）。世界最大級のリチウム企業、米NC州本社。NYSE: ALB{{% cite "investingnews_lithium" %}} |

SQMはアタカマ操業から**2024年に201,000トンLCE（炭酸リチウム換算）**を生産し、世界のリチウム鉱山単一拠点としてトップ生産量を達成しました{{% cite "investingnews_lithium" %}}。

### チリの新リチウム戦略（2023年）

2023年4月、チリのボリッチ大統領は**「国家リチウム戦略」**を発表し、今後の新規リチウム開発はすべて**官民パートナーシップ**で行い、**Codelcoとチリ国営企業ENAMIが多数株を持つ形でのみ許可**するとしました。SQMとAlbemarleの既存契約はそれぞれ2030年・2043年まで有効ですが、2024年5月にSQMはCodelcoとのジョイントベンチャー協定（2025〜2060年）に合意。これによりCodelcoはアタカマ操業の50%以上を取得する見込みです。

## アタカマ砂漠の鉱業ベルト

```text
[太平洋] ─ [アタカマ砂漠（標高2,000〜4,000m）] ─ [アンデス山脈]
                    │
   ┌────────────┼────────────┐
   │            │            │
 銅鉱山ベルト    リチウム塩湖    国境（ペルー/ボリビア/アルゼンチン）
 ─────────     ─────────
 Chuquicamata   Salar de Atacama
 Escondida      Salar de Maricunga（開発中）
 Collahuasi
 Spence
 Centinela
```

アントファガスタ・トコピジャ・メヒジョネスといった港湾は銅精鉱・銅カソード・リチウム化合物の輸出ハブで、ここから日本・中国・韓国・欧州へ船積みされます。

## 産業上の特徴と課題

- **水資源**: アタカマ砂漠は世界で最も乾燥した地域で、銅精鉱の浮選とリチウムかん水の蒸発の両方が水を大量消費。BHPは2018年にEscondidaで**海水淡水化**100%化を達成{{% cite "expomin_chile2024" %}}
- **電力**: 標高3,000m級の鉱山操業には大量電力が必要。チリは2030年代後半までに鉱業電力の100%再エネ化を目指す
- **コミュニティ**: アタカマ先住民（リカン・アンタイ、コヤなど）との対話が必須
- **国家主義**: 銅は1971年に国有化{{% cite "codelco" %}}、リチウムは2023年戦略で再び国家管理強化の流れ

## チリ鉱業に関わる主要企業の時価総額マップ

<div class="corp-treemap-section">
<div class="treemap-legend">
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#d97706"></span>銅・多角化</span>
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#10b981"></span>リチウム</span>
</div>
<div class="corp-treemap" data-companies='[{"t":"BHP","n":"BHP Group","s":"\u92dc\u30fb\u591a\u89d2\u5316","v":21.0,"c":"#d97706"},{"t":"RIO","n":"Rio Tinto","s":"\u92dc\u30fb\u591a\u89d2\u5316","v":16.5,"c":"#d97706"},{"t":"GLEN.L","n":"Glencore","s":"\u92dc\u30fb\u591a\u89d2\u5316","v":8.3,"c":"#d97706"},{"t":"AAL.L","n":"Anglo American","s":"\u92dc\u30fb\u591a\u89d2\u5316","v":6.8,"c":"#d97706"},{"t":"ANTO.L","n":"Antofagasta plc","s":"\u92dc","v":3.0,"c":"#d97706"},{"t":"SQM","n":"SQM","s":"\u30ea\u30c1\u30a6\u30e0","v":2.25,"c":"#10b981"},{"t":"ALB","n":"Albemarle","s":"\u30ea\u30c1\u30a6\u30e0","v":1.5,"c":"#10b981"},{"t":"LUN.TO","n":"Lundin Mining","s":"\u92dc","v":1.2,"c":"#d97706"},{"t":"KGH.WA","n":"KGHM","s":"\u92dc","v":0.75,"c":"#d97706"}]'></div>
<p class="treemap-note">※ 面積は時価総額（概算・1ドル=150円換算）に比例。Codelcoはチリ国営企業のため除外。</p>
</div>

## 参考文献

{{% references %}}
expomin_chile2024: Expomin「Chilean copper production breaks downward trend and closes 2024 with 4.9% growth」<https://www.expomin.cl/en/chilean-copper-production-breaks-downward-trend-and-closes-2024-with-4-9-growth/>
plusmining_2024: PlusMining「Chile's share in the global copper market drops from 30% to 24% in a decade」<https://plusmining.com/en/2025/02/24/chiles-share-in-the-global-copper-market-drops-from-30-to-24-in-a-decade/>
fastmarkets_lithium_triangle: Fastmarkets「The Lithium Triangle」<https://www.fastmarkets.com/insights/the-lithium-triangle-three-countries-control-more-than-50-of-global-resources/>
investingnews_lithium: Investing News Network「Top Lithium Producers」<https://investingnews.com/daily/resource-investing/battery-metals-investing/lithium-investing/top-lithium-producers/>
codelco_2024_results: Codelco「December 2024 Results」<https://www.codelco.com/sites/site/docs/20240426/20240426181050/operational_and_financial_report_december_31_2024.pdf>
miningweekly_codelco: Mining Weekly「Codelco extends reign as top copper producer as BHP challenges」<https://www.miningweekly.com/article/codelco-extends-reign-as-top-copper-producer-as-bhp-challenges-2025-03-31>
cochilco: Cochilco（Comisión Chilena del Cobre）<https://www.cochilco.cl/>
codelco: Codelco「About Us」<https://www.codelco.com/en/>
sqm_company: SQM「Investor Information」<https://ir.sqm.com/>
usgs_mcs2025_li: USGS「Mineral Commodity Summaries 2025 — Lithium」<https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-lithium.pdf>
jogmec_chile: JOGMEC「チリの鉱業概観」<https://mric.jogmec.go.jp/>
{{% /references %}}
