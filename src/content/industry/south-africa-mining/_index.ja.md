---
title: "南アフリカの白金族・レアメタル鉱業"
subtitle: "ブッシュフェルト火成岩体 — 世界のPGMの中心地"
date: 2026-04-07
lastmod: 2026-04-07
description: "南アフリカ共和国を特徴づける白金族（PGM: プラチナ・パラジウム・ロジウム）、クロム、マンガン、金、ダイヤモンドなどの鉱業を解説。世界のプラチナ生産の約75%を占めるブッシュフェルト火成岩体と主要鉱山会社・産出国シェアを整理。"
weight: 31
mapName: "southAfrica"
---

<script>
(function() {
  // 南アフリカの主要鉱業拠点（southAfrica マップ）
  var pins = [
    {
        "x": 486,
        "y": 60,
        "label": "Mogalakwena",
        "note": "Anglo American Platinum（リンポポ州）"
    },
    {
        "x": 450,
        "y": 130,
        "label": "Bushveld/Rustenburg",
        "note": "ブッシュフェルト火成岩体・PGM 中心地"
    },
    {
        "x": 447,
        "y": 150,
        "label": "Johannesburg",
        "note": "ヴィットヴァータースラント金鉱床"
    },
    {
        "x": 525,
        "y": 135,
        "label": "Mpumalanga",
        "note": "石炭・PGM 鉱山地帯"
    },
    {
        "x": 230,
        "y": 200,
        "label": "Sishen",
        "note": "Kumba Iron Ore 鉄鉱山（北ケープ州）"
    },
    {
        "x": 250,
        "y": 240,
        "label": "Kimberley",
        "note": "歴史的ダイヤモンド鉱山"
    },
    {
        "x": 176,
        "y": 397,
        "label": "Cape Town",
        "note": "ケープタウン（参考）"
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

## なぜ南アフリカが白金族の中心なのか

南アフリカ共和国はプラチナ族金属（PGM: Platinum Group Metals = 白金 Pt、パラジウム Pd、ロジウム Rh、ルテニウム Ru、イリジウム Ir、オスミウム Os）の世界生産で<span style="font-weight:700">圧倒的1位</span>です{{% cite "usgs_pgm" %}}。プラチナでは世界の<span style="font-weight:700">約72〜75%</span>{{% cite "usgs_pgm" %}}、ロジウムでは<span style="font-weight:700">約80%</span>{{% cite "sa_rhodium" %}}を生産しています。これは<span style="font-weight:700">ブッシュフェルト火成岩体（Bushveld Complex）</span>という地質学的に特異な層状貫入岩体（Layered Intrusion）が国土北部に広がっていることに由来します。約20億年前{{% cite "bushveld_wiki" %}}の超大型マグマ活動で形成されたこの岩体は東西約400km{{% cite "bushveld_wiki" %}}、南北約300km{{% cite "bushveld_wiki" %}}におよぶ世界最大のPGM鉱床群です。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">~75%</div><div class="stat-label">世界プラチナ生産シェア（南ア）{{% cite "usgs_pgm" %}} </div></div>
<div class="stat-card"><div class="stat-num">~80%</div><div class="stat-label">世界ロジウム生産シェア（南ア）{{% cite "sa_rhodium" %}} </div></div>
<div class="stat-card"><div class="stat-num">~40%</div><div class="stat-label">世界クロム生産シェア（南ア）{{% cite "sa_chromium" %}} </div></div>
<div class="stat-card"><div class="stat-num">~36%</div><div class="stat-label">世界マンガン生産シェア（南ア）{{% cite "sa_manganese" %}} </div></div>
</div>

## ブッシュフェルト火成岩体の主要鉱床

PGMはおもに3層の鉱化帯（リーフ）から採掘されます。

| リーフ | 位置 | 特徴 |
| --- | --- | --- |
| Merensky Reef | 西〜東リム | 19世紀末発見、伝統的なPGM鉱床、Pt主体 |
| UG2 Reef（Upper Group 2 Chromitite）| 西〜東リム | クロマイト主体、Pt/Pd/Rh併産。深部化で主力に |
| Platreef | 北リム | 厚い層、Pd>Pt、Ni/Cu併産。露天掘り可能 |

## 主要PGM企業

| 企業 | 主な鉱山 | 概略 |
| --- | --- | --- |
| Anglo American Platinum（Amplats）| Mogalakwena, Amandelbult, Mototolo | 世界最大のPGM企業、Anglo American傘下。Mogalakwenaは世界唯一のPlatreef露天掘り |
| Sibanye-Stillwater | Rustenburg, Kroondal, Marikana | 旧Lonmin買収。米モンタナ州Stillwater鉱山も保有 |
| Impala Platinum（Implats）| Impala Rustenburg, Marula, Two Rivers | カナダ・ジンバブエにも展開 |
| Northam Platinum | Booysendal, Zondereinde | 中堅 |
| Tharisa | Tharisa Mine | クロム+PGM併産 |

ロシアの<span style="font-weight:700">Norilsk Nickel</span>はノリリスク（シベリア）でNi/Cu採掘の副産物としてパラジウム世界1位（世界生産の約40%{{% cite "norilsk_palladium" %}}）、プラチナ世界2位を生産しており、南アとロシアでPGM供給の大半を占めます。

## クロム・マンガンも世界トップ

ブッシュフェルト体には世界最大のクロム鉱床もあり、フェロクロムを含む南アフリカのクロム輸出量は世界1位です。隣接するノーザンケープ州の<span style="font-weight:700">カラハリ・マンガン田</span> は世界最大のマンガン鉱床で、Anglo American/BHPの<span style="font-weight:700">Samancor Manganese</span> などが操業しています。

## 金・ダイヤモンド — 歴史的な主役

南アフリカは19世紀末{{% cite "witwatersrand_wiki" %}}のヴィットウォーターズランド金鉱（Witwatersrand）発見以来、長く世界最大の金産国でしたが、深度3,000m{{% cite "witwatersrand_wiki" %}}を超える坑内採掘の高コスト化で生産は減少。現在の世界1位は中国、南アは10位前後です。<span style="font-weight:700">AngloGold Ashanti</span>、<span style="font-weight:700">Gold Fields</span>、<span style="font-weight:700">Harmony Gold</span>が3大手で、いずれも国際展開しています。

ダイヤモンドはキンバリー（Kimberley、Big Hole）の採掘（1871年{{% cite "bighole_wiki" %}}開始）が<span style="font-weight:700">De Beers Consolidated Mines</span> （1888年{{% cite "debeers_wiki" %}}設立）の礎となりました。現在De Beersは<span style="font-weight:700">Anglo American傘下</span> で、ボツワナ・ナミビア・カナダにも展開しています。

## 自動車触媒需要との関係

PGMの最大用途は<span style="font-weight:700">自動車排ガス触媒（オートキャット）</span> で、ガソリン車はPt/Pd/Rh、ディーゼル車はPtを多用します。EV化はPGM需要を構造的に減らす方向に働きますが、<span style="font-weight:700">水素燃料電池（PEMFC）の電極触媒</span> や<span style="font-weight:700">水電解（PEM）の電極</span> にPt/Irが不可欠なため、水素経済の進展次第で代替需要が生まれるとされます。

## 産業上の課題

- <span style="font-weight:700">電力危機（Loadshedding）</span>: Eskomの計画停電が鉱山稼働率を大きく下げる
- <span style="font-weight:700">鉱区深度化</span>: PGM鉱山は地下2,000m{{% cite "usgs_pgm" %}}級が多く、坑道冷却・換気コストが上昇
- <span style="font-weight:700">労働争議</span>: 2012年Marikana事件以来、労使関係が事業リスクの中心
- <span style="font-weight:700">B-BBEE</span>: 黒人経済力強化政策で鉱業権の26%以上を歴史的不利益層に保有させる必要

## 主要南ア鉱業企業の時価総額マップ

<div class="corp-treemap-section">
<div class="treemap-legend">
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#9ca3af"></span>PGM（白金族）</span>
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#fbbf24"></span>金</span>
</div>
<div class="corp-treemap" data-companies='[{"t":"AU","n":"AngloGold Ashanti","s":"\u91d1","v":2.25,"c":"#fbbf24"},{"t":"GFI","n":"Gold Fields","s":"\u91d1","v":2.25,"c":"#fbbf24"},{"t":"AMS.JO","n":"Anglo American Platinum","s":"PGM","v":1.5,"c":"#9ca3af"},{"t":"HMY","n":"Harmony Gold","s":"\u91d1","v":1.2,"c":"#fbbf24"},{"t":"IMP.JO","n":"Impala Platinum","s":"PGM","v":0.9,"c":"#9ca3af"},{"t":"SBSW","n":"Sibanye-Stillwater","s":"PGM","v":0.75,"c":"#9ca3af"},{"t":"NPH.JO","n":"Northam Platinum","s":"PGM","v":0.3,"c":"#9ca3af"}]'></div>
<p class="treemap-note">※ 面積は時価総額（概算・1ドル=150円換算）に比例。</p>
</div>

## 参考文献

{{% references %}}
usgs_pgm: USGS「Mineral Commodity Summaries — Platinum-Group Metals」<https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-platinum-group.pdf>
amplats_ar: Anglo American Platinum「Annual Reports」<https://www.angloamericanplatinum.com/investors/annual-reporting>
implats_company: Impala Platinum「Operations」<https://www.implats.co.za/operations.php>
sibanye_about: Sibanye-Stillwater「About」<https://www.sibanyestillwater.com/about-us/>
jogmec_pgm: JOGMEC「白金族（PGM）」資源別レポート<https://mric.jogmec.go.jp/>
council_pgm: World Platinum Investment Council「Platinum Quarterly」<https://platinuminvestment.com/supply-and-demand/platinum-quarterly>
bushveld_wiki: Wikipedia「Bushveld Igneous Complex」<https://en.wikipedia.org/wiki/Bushveld_Igneous_Complex>
sa_chromium: World Population Review「Chromium Production by Country 2026」<https://worldpopulationreview.com/country-rankings/chromium-production-by-country>
sa_manganese: World Population Review「Manganese Production by Country 2026」<https://worldpopulationreview.com/country-rankings/manganese-production-by-country>
sa_rhodium: Statista「Rhodium supplies worldwide by region 2024」<https://www.statista.com/statistics/592729/supply-of-rhodium-worldwide-by-region/>
norilsk_palladium: World Population Review「Palladium Production by Country 2026」<https://worldpopulationreview.com/country-rankings/palladium-production-by-country>
witwatersrand_wiki: Wikipedia「Witwatersrand」<https://en.wikipedia.org/wiki/Witwatersrand>
bighole_wiki: Wikipedia「Big Hole」<https://en.wikipedia.org/wiki/Big_Hole>
debeers_wiki: Wikipedia「De Beers」<https://en.wikipedia.org/wiki/De_Beers>
{{% /references %}}
