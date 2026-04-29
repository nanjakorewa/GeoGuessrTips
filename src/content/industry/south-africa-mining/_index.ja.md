---
title: "南アフリカの白金族・レアメタル鉱業"
subtitle: "ブッシュフェルト火成岩体 — 世界のPGMの中心地"
date: 2026-04-07
lastmod: 2026-04-07
description: "南アフリカ共和国を特徴づける白金族（PGM: プラチナ・パラジウム・ロジウム）、クロム、マンガン、金、ダイヤモンドなどの鉱業を解説。世界のプラチナ生産の約75%を占めるブッシュフェルト火成岩体と主要鉱山会社・産出国シェアを整理。"
weight: 31
mapName: "southAfrica"
galleryDir: "south-africa-mining"
---

<script>
(function() {
  // [南アフリカ](/rule/africa/south-africa/)の主要鉱業拠点（southAfrica マップ）
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

## なぜ[南アフリカ](/rule/africa/south-africa/)が白金族の中心なのか

<figure style="float:right;clear:right;margin:0 0 14px 22px;max-width:min(420px,45%);">
  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Platinum_Mining.jpg?width=420" alt="南アフリカの白金鉱山採掘" loading="lazy" style="width:100%;height:auto;border-radius:6px;display:block;" />
  <figcaption style="font-size:0.85em;color:#555;margin-top:6px;text-align:center;line-height:1.45;">南アフリカにおける白金族金属の採掘作業。露天掘りと坑内採鉱の両方が行われ、世界の白金生産の過半を占めています。<br/>画像: <a href="https://commons.wikimedia.org/wiki/File:Platinum_Mining.jpg" target="_blank" rel="noopener noreferrer">Ryanj93 / Wikimedia Commons (CC BY-SA 4.0)</a></figcaption>
</figure>

[南アフリカ](/rule/africa/south-africa/)共和国はプラチナ族金属（PGM: Platinum Group Metals = 白金 Pt、パラジウム Pd、ロジウム Rh、ルテニウム Ru、イリジウム Ir、オスミウム Os）の世界生産で<span style="font-weight:700">圧倒的1位</span>です{{% cite "usgs_pgm" %}}。プラチナでは世界の<span style="font-weight:700">約73%</span>{{% cite "wpic_platinum" %}}、ロジウムでは<span style="font-weight:700">約85～88%</span>{{% cite "usgs_minerals_yearbook_2022" %}}を生産しています。これは<span style="font-weight:700">ブッシュフェルト火成岩体（Bushveld Complex）</span>という地質学的に特異な層状貫入岩体（Layered Intrusion）が国土北部に広がっていることに由来します。約2.05ギガ年前（Ga）{{% cite "usgs_bushveld_geological" %}}の超大型マグマ活動で形成されたこの岩体は東西約450km、南北約350km{{% cite "britannica_bushveld" %}}におよぶ世界最大のPGM鉱床群です。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">~73%</div><div class="stat-label">世界プラチナ生産シェア（南ア）{{% cite "wpic_platinum" %}} </div></div>
<div class="stat-card"><div class="stat-num">~85-88%</div><div class="stat-label">世界ロジウム生産シェア（南ア）{{% cite "usgs_minerals_yearbook_2022" %}} </div></div>
<div class="stat-card"><div class="stat-num">~41%</div><div class="stat-label">世界クロムシェア（南ア）{{% cite "usgs_chromium_2025" %}} </div></div>
<div class="stat-card"><div class="stat-num">~21-25%</div><div class="stat-label">世界マンガン生産シェア（南ア）{{% cite "usgs_manganese_2025" %}} </div></div>
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
| Impala Platinum（Implats）| Impala Rustenburg, Marula, Two Rivers | [カナダ](/rule/n_america/canada/)・[ジンバブエ](/rule/africa/zimbabwe/)にも展開 |
| Northam Platinum | Booysendal, Zondereinde | 中堅 |
| Tharisa | Tharisa Mine | クロム+PGM併産 |

[ロシア](/rule/asia/russia/)の<span style="font-weight:700">Norilsk Nickel</span>はノリリスク（シベリア）でNi/Cu採掘の副産物としてパラジウム世界1位（世界生産の約40%{{% cite "norilsk_palladium" %}}）、プラチナ世界2位を生産しており、南アと[ロシア](/rule/asia/russia/)でPGM供給の大半を占めます。

## クロム・マンガンも世界トップ

ブッシュフェルト体には世界最大のクロム鉱床もあり、フェロクロムを含む[南アフリカ](/rule/africa/south-africa/)のクロム輸出量は世界1位です。隣接するノーザンケープ州の<span style="font-weight:700">カラハリ・マンガン田</span> は世界最大のマンガン鉱床で、Anglo American/BHPの<span style="font-weight:700">Samancor Manganese</span> などが操業しています。

## 金・ダイヤモンド — 歴史的な主役

[南アフリカ](/rule/africa/south-africa/)は1886年{{% cite "witwatersrand_history" %}}のヴィットウォーターズランド金鉱（Witwatersrand）発見以来、長く世界最大の金産国でしたが、深度3,000m級{{% cite "usgs_pgm_elements" %}}を超える坑内採掘の高コスト化で生産は減少。現在の世界1位は[中国](/rule/asia/china/)、南アは10位前後です。<span style="font-weight:700">AngloGold Ashanti</span>、<span style="font-weight:700">Gold Fields</span>、<span style="font-weight:700">Harmony Gold</span>が3大手で、いずれも国際展開しています。

ダイヤモンドはキンバリー（Kimberley、Big Hole）の採掘（1871年{{% cite "britannica_kimberley" %}}開始）が<span style="font-weight:700">De Beers Consolidated Mines</span> （1888年3月{{% cite "debeers_official_history" %}}設立）の礎となりました。現在De Beersは<span style="font-weight:700">Anglo American傘下</span> で、ボツワナ・[ナミビア](/rule/africa/namibia/)・[カナダ](/rule/n_america/canada/)にも展開しています。

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
<div class="corp-treemap" data-companies='[{"t":"AU","n":"AngloGold Ashanti","s":"金","v":2.25,"c":"#fbbf24"},{"t":"GFI","n":"Gold Fields","s":"金","v":2.25,"c":"#fbbf24"},{"t":"SBSW","n":"Sibanye-Stillwater","s":"PGM・金","v":2.1,"c":"#9ca3af"},{"t":"HMY","n":"Harmony Gold","s":"金","v":1.2,"c":"#fbbf24"},{"t":"SSL","n":"Sasol","s":"化学・石油","v":1.8,"c":"#d97706"},{"t":"AMS.JO","n":"Anglo American Platinum","s":"PGM","v":1.5,"c":"#9ca3af"},{"t":"IMP.JO","n":"Impala Platinum","s":"PGM","v":0.9,"c":"#9ca3af"},{"t":"NPH.JO","n":"Northam Platinum","s":"PGM","v":0.3,"c":"#9ca3af"}]'></div>
<p class="treemap-note">※ 面積は時価総額（概算・1ドル=150円換算）に比例。</p>
</div>

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light"><tr>
<th class="col-width-3">企業</th>
<th class="col-width-2">証券コード</th>
<th class="col-width-3">事業概要</th>
<th class="col-width-1">決算情報</th>
<th class="col-width-1">配当履歴</th>
</tr></thead>
<tbody class="corp-desc">
<tr><td>AngloGold Ashanti</td><td>AU</td><td>元南アAnglo Americanから1998年分離、2023年に本社を米コロラド州デンバーに移し米NYSE一次上場へ。タンザニアGeita、コンゴ民主Kibali（45%、Barrickと合弁）、豪Sunrise Dam/Tropicana、米Centerra（2024年Sukari取得）を主力に、ブラジル・アルゼンチン・ガーナ・ギニアで金を生産。</td><td>{{% corplink "https://www.anglogoldashanti.com/investors/" %}}</td><td>{{% dividend "other" "AU" %}}</td></tr>
<tr><td>Gold Fields</td><td>GFI</td><td>南ア・ヨハネスブルグ本社、世界有数の金鉱業者。南アSouth Deep（同国最大級の深部金鉱）、豪州St Ives/Agnew/Granny Smith、ガーナTarkwa/Damang、ペルーCerro Corona（銅金）、チリSalares Norte（2024年生産開始）、カナダWindfall（2024年Osisko Mining買収）を運営。</td><td>{{% corplink "https://www.goldfields.com/investors.php" %}}</td><td>{{% dividend "other" "GFI" %}}</td></tr>
<tr><td>Sibanye-Stillwater</td><td>SBSW</td><td>南ア・ウェストンアリア本社、2013年Gold Fieldsから分離して創業後、M&Aで急拡大。南アのPGM（旧Lonmin Marikana・Rustenburg）、米モンタナ州Stillwater/East Boulder（米国唯一のPGM鉱山）、南ア金（Beatrix・Driefontein・Kloof）に加え、欧州ではフィンランドKeliber（リチウム建設中）・仏Sandouvilleニッケル製錬所で電池金属にも進出。</td><td>{{% corplink "https://www.sibanyestillwater.com/investors/" %}}</td><td>{{% dividend "other" "SBSW" %}}</td></tr>
<tr><td>Harmony Gold</td><td>HMY</td><td>南ア・ヨハネスブルグ本社、南ア最大の金生産者の一つ。ヴィットヴァータースラント金鉱床のMoab Khotsong・Mponeng（世界最深クラス）・Tshepong等を運営。パプアニューギニアのHidden Valley金鉱山、Wafi-Golpu銅金プロジェクト（Newmontと50/50JV）を保有し、銅への多角化を進める。</td><td>{{% corplink "https://www.harmony.co.za/investors/" %}}</td><td>{{% dividend "other" "HMY" %}}</td></tr>
<tr><td>Sasol</td><td>SSL</td><td>南ア・ヨハネスブルグ本社、1950年設立の世界最大の石炭液化（CTL）・天然ガス液化（GTL）企業。ムプマランガ州シクンダの巨大Secunda複合（CTL）で南ア国内液体燃料の約3割を供給。モザンビーク産天然ガスを活用したSasolburg GTL、ルイジアナ州レイクチャールズの化学複合も運営。</td><td>{{% corplink "https://www.sasol.com/investor-centre" %}}</td><td>{{% dividend "other" "SSL" %}}</td></tr>
<tr><td>Anglo American Platinum</td><td>AMS.JO</td><td>通称Amplats、南ア・ヨハネスブルグ上場。世界最大のプラチナ（Pt）・パラジウム（Pd）・ロジウム（Rh）生産者。ブッシュフェルト火成岩体のMogalakwena（世界最大のPGM露天掘り）、Amandelbult、Mototolo、Modikwa、Unki（ジンバブエ）を運営。2024年Anglo Americanが事業分離方針を発表し、2025年に「Valterra Platinum」として分離される予定。</td><td>{{% corplink "https://www.angloamericanplatinum.com/investors.aspx" %}}</td><td>{{% dividend "other" "AMS.JO" %}}</td></tr>
<tr><td>Impala Platinum</td><td>IMP.JO</td><td>通称Implats、南ア・ヨハネスブルグ上場、世界2位のPGM生産者。南アブッシュフェルトのImpala Rustenburg（同社最大、世界有数）、ジンバブエのZimplats（87%、世界最大級のPGM埋蔵）、南アMarula、カナダImpala Canada（旧Lac des Iles、パラジウム主体）、2023年買収のRoyal Bafokeng PlatinumのStyldrift等を運営。</td><td>{{% corplink "https://www.implats.co.za/investor-overview.php" %}}</td><td>{{% dividend "other" "IMP.JO" %}}</td></tr>
<tr><td>Northam Platinum</td><td>NPH.JO</td><td>Northam Platinum Holdings、南ア・ヨハネスブルグ上場の独立系PGM生産者。ブッシュフェルト西部ZondereindeとBooysendal（北部リンポポ州）、2021年買収のEland/Eland Platinumを運営し、南ア3大PGMメジャー（Amplats・Implatsと並び）の一角。精錬所Zondereindeも保有し上流〜精錬まで一貫体制。</td><td>{{% corplink "https://www.northam.co.za/investors-and-media" %}}</td><td>{{% dividend "other" "NPH.JO" %}}</td></tr>
</tbody></table>
</div>

## 参考文献

{{% references %}}
usgs_pgm: USGS「Mineral Commodity Summaries 2025 — Platinum-Group Metals」<https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-platinum-group.pdf>
usgs_minerals_yearbook_2022: USGS「2021 Minerals Yearbook - Platinum-Group Metals」<https://pubs.usgs.gov/myb/vol1/2021/myb1-2021-platinum-group.pdf>
wpic_platinum: World Platinum Investment Council「Platinum Quarterly」<https://platinuminvestment.com/supply-and-demand/platinum-quarterly>
usgs_bushveld_geological: USGS「Platinum-group elements in southern Africa: mineral inventory and an assessment of undiscovered mineral resources」SIR 2010-5090-Q<https://pubs.usgs.gov/publication/sir20105090Q>
britannica_bushveld: Britannica「Bushveld Complex」<https://www.britannica.com/place/Bushveld-Complex>
usgs_chromium_2025: USGS「Mineral Commodity Summaries 2025 — Chromium」<https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-chromium.pdf>
usgs_manganese_2025: USGS「Mineral Commodity Summaries 2025 — Manganese」<https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-manganese.pdf>
usgs_pgm_elements: USGS「Platinum-group elements in southern Africa: mineral inventory and an assessment of undiscovered mineral resources」<https://pubs.usgs.gov/publication/sir20105090Q>
witwatersrand_history: South African History Online「Discovery of the Gold in 1884」<https://sahistory.org.za/article/discovery-gold-1884>
britannica_kimberley: Britannica「Big Hole」<https://www.britannica.com/place/Big-Hole>
{{% /references %}}
