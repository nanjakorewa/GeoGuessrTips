---
title: "日本の合成繊維・炭素繊維産業"
subtitle: "東レ・帝人・三菱ケミカル — 高性能炭素繊維で世界市場を制覇"
date: 2026-04-08
lastmod: 2026-04-08
description: "日本の合成繊維・炭素繊維産業を解説。東レ・帝人・三菱ケミカル・旭化成・クラレによる世界的な高性能繊維製造、ボーイング787向けの炭素繊維複合材供給、合成繊維生産の1980年代以来の産業転換を整理。"
weight: 39
mapName: "japan"
galleryDir: "japan-fiber"
---

<script>
(function() {
  // [日本](/rule/asia/japan/)の繊維・炭素繊維工場（青●）
  var pins = [
    { x: 355, y: 478, label: '三島', type: 'fiber',
      note: '帝人/東邦テナックス 三島事業所（静岡県三島市）— 炭素繊維・CFRTP / 東レ 三島工場 — 合成繊維' },
    { x: 205, y: 520, label: '愛媛（松前）', type: 'fiber',
      note: '東レ 愛媛工場（愛媛県伊予郡松前町）— 炭素繊維・TORAYCA' },
    { x: 235, y: 510, label: '大竹', type: 'fiber',
      note: '三菱ケミカル 大竹事業所（広島県大竹市）— 炭素繊維（Pyrofil）' },
    { x: 318, y: 478, label: '豊橋', type: 'fiber',
      note: '三菱ケミカル 豊橋事業所（愛知県豊橋市）— 炭素繊維' },
    { x: 127, y: 567, label: '延岡', type: 'fiber',
      note: '旭化成 延岡地区（宮崎県延岡市）— キュプラ（Bemberg）・合成繊維' },
    { x: 410, y: 448, label: '東京', type: 'fiber',
      note: '東レ本社（中央区日本橋） / 帝人東京本社（千代田区霞が関）' },
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

      var color = '#3b82f6';
      var bgColor = 'rgba(59,130,246,0.18)';
      var strokeColor = 'rgba(59,130,246,0.55)';

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
      marker.setAttribute('font-size', '14');
      marker.setAttribute('fill', color);
      marker.setAttribute('text-anchor', 'middle');
      marker.setAttribute('dominant-baseline', 'middle');
      marker.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      marker.textContent = '\u25CF';

      var textLen = pin.label.length;
      var bgW = textLen * 8 + 6;
      var bgH = 13;

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', pin.y + 4);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', 'rgba(68,64,60,0.85)');
      labelBg.setAttribute('rx', '3');

      var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pin.x);
      label.setAttribute('y', pin.y + 13);
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

## [日本](/rule/asia/japan/)の合成繊維・炭素繊維産業の概観

[日本](/rule/asia/japan/)の繊維産業は、戦後の織機・紡糸技術革新により世界最大級の地位を確立しました。現在、[日本](/rule/asia/japan/)は<span style="font-weight:700">高性能繊維と炭素繊維複合材で世界をリード</span>し、とりわけ<span style="font-weight:700">炭素繊維（PAN系）の世界市場シェアの約50～60%を占める</span>{{% cite "toray_ir" %}}{{% cite "teijin_cf_capacity" %}}主要メーカーを擁しています。一方、ポリエステル・ナイロン・アクリルなどの一般合成繊維は1980年代以来、製造基盤が減少し、[中国](/rule/asia/china/)・[ベトナム](/rule/asia/vietnam/)・[インドネシア](/rule/asia/indonesia/)などへの生産シフトが進んでいます。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">3社</div><div class="stat-label">世界炭素繊維市場の50～60%を支配（東レ・帝人・三菱ケミカル）</div></div>
<div class="stat-card"><div class="stat-num">13.5%</div><div class="stat-label">東レの全球炭素繊維市場シェア（世界1位）</div></div>
<div class="stat-card"><div class="stat-num">約1兆円</div><div class="stat-label">東レ—ボーイング787・777X向け長期供給契約規模（2014年10年契約、Reuters報道）</div></div>
<div class="stat-card"><div class="stat-num">特化型素材</div><div class="stat-label">[日本](/rule/asia/japan/)の競争力：高強度PE・ポバール・アラミドTwaron</div></div>
</div>

## 世界炭素繊維市場での[日本](/rule/asia/japan/)企業の支配力

全球炭素繊維市場は2023年時点で約134.5億ドル規模{{% cite "cf_market_size" %}}。<span style="font-weight:700">PAN系炭素繊維（ポリアクリロニトリル系）の世界市場では、東レ（Zoltek含む）・帝人（Toho Tenax）・三菱ケミカルが北米・欧州の航空宇宙級炭素繊維の大半を供給</span>{{% cite "toray_ir" %}}しており、とりわけ航空機産業では[日本](/rule/asia/japan/)メーカーが圧倒的優位を保有しています。

| メーカー | 国 | 特徴・用途 |
| --- | --- | --- |
| <span style="font-weight:700">東レ（3402）</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> | 世界1位、TORAYCA（PAN系高強度）、ボーイング787独占供給 |
| <span style="font-weight:700">帝人（3401）</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> | Toho Tenax（高modulus）、CFRTP（熱可塑性複合材） |
| <span style="font-weight:700">三菱ケミカルグループ（4188）</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> | Aichi/Sacramento拡張（2025-2027）、スポーツ・航空向け |
| <span style="font-weight:700">SGL Carbon</span> | <img src="/flags/DE.svg" alt="DE" class="inline-flag" width="20" height="14" loading="lazy" /> | [ドイツ](/rule/europe/germany/)（[ドイツ](/rule/europe/germany/)系では最大） |
| <span style="font-weight:700">Solvay</span> | <img src="/flags/BE.svg" alt="BE" class="inline-flag" width="20" height="14" loading="lazy" /> | [ベルギー](/rule/europe/belgium/)、航空用樹脂複合材 |

## [日本](/rule/asia/japan/)の炭素繊維・CFRP供給サプライチェーン

### ボーイング787・777X向けの長期供給契約

東レは長年ボーイングの787 Dreamlinerに<span style="font-weight:700">TORAYCA 3900系エポキシプリプレグ</span>を主要供給しており{{% cite "boeing_toray" %}}、2014年に787・777X向けの10年以上にわたる長期供給契約を締結しました。当時のReuters報道では契約総額は<span style="font-weight:700">約1兆円規模（おおむね80～100億ドル相当）</span>{{% cite "reuters_toray_boeing" %}}と伝えられ、東レの炭素繊維事業の柱を形成しています。787は<span style="font-weight:700">機体構造の約50%が複合材で構成</span>{{% cite "boeing_787_composite" %}}されており、TORAYCAが主要な構造材料として採用されています。

### 主要メーカーの工場立地と生産能力

| 企業 | 工場所在地 | 用途・特徴 |
| --- | --- | --- |
| <span style="font-weight:700">東レ</span>（3402） | 愛媛県伊予郡松前町（愛媛工場：TORAYCA）、静岡県三島（三島工場：合成繊維）、米Zoltek各拠点、韓国亀尾 | PAN系高強度、全球生産能力 約54,600MT/年（2023年、Zoltek含む） |
| <span style="font-weight:700">帝人</span>（3401） | 静岡県三島（東邦テナックス三島事業所：炭素繊維）、独Heinsberg、米Greenwood | 全球生産能力 約13,900MT/年、CFRTP量産技術を保有 |
| <span style="font-weight:700">三菱ケミカル</span>（4188） | 広島県大竹（大竹事業所）、愛知県豊橋（豊橋事業所）、米Sacramento | Pyrofil/Grafilブランド、スポーツ・航空・産業向け |
| <span style="font-weight:700">旭化成</span>（3407） | 宮崎県延岡（延岡地区）、その他 | キュプラ（Bemberg）、ポリアミド、合成繊維主体 |

## 合成繊維産業の構造変化：1980年代からの転換

### ポリエステル・ナイロン・アクリルの衰退

[日本](/rule/asia/japan/)は1960～1980年代、ポリエステル・ナイロン・アクリルなどの汎用合成繊維で世界最大級の生産国でした。しかし<span style="font-weight:700">1980年代以降、低賃金国（[中国](/rule/asia/china/)・[ベトナム](/rule/asia/vietnam/)・[インドネシア](/rule/asia/indonesia/)）への生産シフト</span>が加速し、[日本](/rule/asia/japan/)国内の一般合成繊維生産能力は大幅に縮小されています。現在、[日本](/rule/asia/japan/)の主要メーカーは以下のような<span style="font-weight:700">高機能・高差別化繊維</span>へシフトしました：

- <span style="font-weight:700">炭素繊維（Carbon Fiber）</span> — 東レ・帝人・三菱ケミカル（航空・風力・スポーツ）
- <span style="font-weight:700">アラミド繊維（Aramid）</span> — 帝人Twaron（防弾・保護服、DuPont Kevlar と競合）
- <span style="font-weight:700">PVA（ポリビニルアルコール）</span> — クラレ（3405）世界シェア1位（フィルム・接着剤）
- <span style="font-weight:700">超高強度ポリエチレン</span> — 東洋紡イザナス®（DSM/Avient Dyneema®との競争）
- <span style="font-weight:700">Bemberg（キュプラ繊維）</span> — 旭化成（延岡）、高級ファッション向け

## 主要5社の比較：世代別シェア

| 企業 | コード | 本社 | 時価総額 | 主力事業 |
| --- | --- | --- | --- | --- |
| <span style="font-weight:700">東レ</span> | 3402 | 東京（中央区日本橋） | 1.97T JPY | 炭素繊維・複合材（world #1）、ポリエステル |
| <span style="font-weight:700">帝人</span> | 3401 | 大阪（北区中之島）／東京（千代田区霞が関） | 327.8B JPY | Twaron®アラミド、CFRTP、医療用繊維 |
| <span style="font-weight:700">三菱ケミカルグループ</span> | 4188 | 東京（千代田区丸の内） | 1.14T JPY | 炭素繊維（成長投資中）、化学品 |
| <span style="font-weight:700">クラレ</span> | 3405 | 岡山・倉敷（本店）／東京（大手町） | ～3.66B USD | PVA・ポバール（global #1）、EVOH |
| <span style="font-weight:700">旭化成</span> | 3407 | 東京（千代田区有楽町） | ～1.59T JPY相当 | キュプラBemberg、ポリアミド、医療繊維 |

## 高性能繊維での[日本](/rule/asia/japan/)の競争上の優位

### クラレのポバール（PVA）グローバル支配

クラレは<span style="font-weight:700">ポリビニルアルコール（ポバール）で世界シェア1位</span>{{% cite "kuraray_pva" %}}を占有しており、フィルム・接着剤・繊維用途を制覇しています。PVA市場は2025年時点で約29億ドル、2035年に43億ドルまで成長予測{{% cite "pva_market_size" %}}されており、クラレはこの成長を主導しています。

### 帝人のTwaron — アラミド繊維での優位性

帝人は<span style="font-weight:700">アラミド繊維Twaron®（オランダ子会社Teijin Aramid B.V.が製造）</span>を供給し、DuPont Kevlar®と世界市場を二分しています{{% cite "teijin_aramid" %}}。Twaronは生産拠点を[オランダ](/rule/europe/netherlands/)に置き、防弾衣料・保護服・光ファイバーケーブル補強材・航空機構造などで採用されています。炭素繊維事業の東邦テナックス（Toho Tenax）とは別組織です。

### 東レのボーイング787独占と世界市場での支配力

東レの<span style="font-weight:700">世界炭素繊維市場シェア約13.5%（2023年、売上ベース）</span>{{% cite "cf_market_size" %}}は、ボーイング787・777X向けの長期契約に支えられています。加えて、<span style="font-weight:700">Zoltek（[米国](/rule/n_america/usa/)、2014年買収）</span>を傘下に置き{{% cite "toray_zoltek_acquisition" %}}、産業用大口生産能力を有しており、2023年時点で全球炭素繊維生産能力は<span style="font-weight:700">約54,600MT/年（Zoltek含む）</span>{{% cite "toray_ir" %}}に達しています。

## 用途別市場分布と応用

| 用途 | 市場特性 | 関連企業 |
| --- | --- | --- |
| 航空宇宙（旅客機・戦闘機） | 要求品質最高、世界市場シェア主導 | 東レ（787）、帝人（航空部品） |
| 風力発電翼（ウインドブレード） | 低・中コスト、大型化トレンド | 東レ、帝人、三菱ケミカル |
| 自動車（EV・CFRP部品） | 軽量化・コスト競争激化中 | 東レ、三菱ケミカル、帝人 |
| 高圧水素タンク（燃料電池車） | 新興市場、安全規制厳しい | 東レ（TES）、帝人 |
| スポーツ・レジャー（ゴルフ・自転車） | 高価格帯、デザイン重視 | 三菱ケミカル、東レ |
| 医療・健康関連 | 生体適合性要求 | 旭化成（Bemberg）、帝人 |

## [日本](/rule/asia/japan/)化学繊維産業の世界構成と経済規模

[日本](/rule/asia/japan/)の化学繊維協会（JCFA）{{% cite "jcfa" %}}が集約する統計によれば、[日本](/rule/asia/japan/)の化学繊維産業は以下の特性を持ちます：

- **世界PAN系炭素繊維市場で[日本](/rule/asia/japan/)メーカー支配度：50～60%**（東レ・帝人・三菱ケミカル連合）
- **特化型高機能繊維での競争力**: アラミド（帝人Twaron）、PVA（クラレ）、超高強度PE、キュプラ
- **生産拠点**: 愛媛（松前）・静岡（三島）・広島（大竹）・愛知（豊橋）・宮崎（延岡）など、瀬戸内～中部～九州の工業地帯に分散
- **川下産業との統合**: ボーイング、Vestas（風力）、自動車OEMとの深い供給契約構造

## なぜ[日本](/rule/asia/japan/)が高性能繊維で世界をリードするのか

- <span style="font-weight:700">紡糸・プリプレグ化技術の精度</span>: 東レ・帝人の高精度紡糸機・加熱・冷却プロセスの制御が競争力源
- <span style="font-weight:700">航空宇宙向けの認証・品質体系</span>: ボーイング・エアバス向けの長年の供給実績と厳格な品質管理
- <span style="font-weight:700">垂直統合サプライチェーン</span>: 前駆体（precursor）→炭素化→プリプレグ化まで一貫生産で高品質維持
- <span style="font-weight:700">自動車・電子産業との共進化</span>: トヨタ・ホンダなどのEV軽量化ニーズに応じた低コスト化研究
- <span style="font-weight:700">汎用繊維からの経営転換</span>: 1980年代の構造転換で、高差別化・高マージン製品へのフォーカス実現

## [日本](/rule/asia/japan/)の合成繊維・炭素繊維メーカー時価総額マップ

<div class="corp-treemap-section">
<div class="corp-treemap" data-companies='[{"t":"3402","n":"東レ","s":"炭素繊維・複合材","v":1.0,"c":"#3b82f6"},{"t":"4188","n":"三菱ケミカルグループ","s":"化学品・炭素繊維","v":0.58,"c":"#3b82f6"},{"t":"3401","n":"帝人","s":"CFRTP・アラミド","v":0.17,"c":"#3b82f6"},{"t":"3407","n":"旭化成","s":"合成繊維・医療","v":0.16,"c":"#3b82f6"},{"t":"3405","n":"クラレ","s":"PVA・ポバール","v":0.185,"c":"#3b82f6"}]'></div>
<p class="treemap-note">※ 時価総額は2026年4月時点の推定値。東レが業界最大手、三菱ケミカルが急成長投資中。</p>
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
<tr><td>東レ</td><td>3402</td><td>世界炭素繊維市場シェア13.5%で世界1位。TORAYCA®で航空宇宙（ボーイング787独占供給）・風力・自動車向けに高強度複合材を供給。Zoltek傘下でグローバル生産能力約54,600MT/年を保有。</td><td>{{% corplink "https://www.toray.co.jp/ir/" %}}</td><td>{{% dividend "tokyo" "3402" %}}</td></tr>
<tr><td>三菱ケミカルグループ</td><td>4188</td><td>炭素繊維（Pyrofil/Grafilブランド）で航空・スポーツ・産業向けに展開。大竹・豊橋工場を中心に生産。米Sacramento・アイチ工場拡張（2025-2027）で大幅増産投資中。</td><td>{{% corplink "https://www.mcgc.com/ir/" %}}</td><td>{{% dividend "tokyo" "4188" %}}</td></tr>
<tr><td>帝人</td><td>3401</td><td>Toho Tenax®で高modulus炭素繊維を供給。アラミド繊維Twaron®（防弾・保護服）でDuPont Kevlar®と世界市場を二分。CFRTP量産技術に強み。世界炭素繊維生産能力約13,900MT/年。</td><td>{{% corplink "https://www.teijin.com/ir/" %}}</td><td>{{% dividend "tokyo" "3401" %}}</td></tr>
<tr><td>旭化成</td><td>3407</td><td>キュプラ繊維（Bemberg®）で高級ファッション向けに世界最高品質を供給。延岡を中心にポリアミド・合成繊維も製造。医療用繊維・医薬事業も展開する総合化学企業。</td><td>{{% corplink "https://www.asahi-kasei.com/ir/" %}}</td><td>{{% dividend "tokyo" "3407" %}}</td></tr>
<tr><td>クラレ</td><td>3405</td><td>ポバール（PVA）で世界シェア1位。フィルム・接着剤・繊維用途で圧倒的優位。EVOH樹脂も高機能包装向けで主力。2026-2035年PVA市場成長を牽引。</td><td>{{% corplink "https://www.kuraray.com/ir/" %}}</td><td>{{% dividend "tokyo" "3405" %}}</td></tr>
</tbody></table>
</div>

## 参考文献

{{% references %}}
toray_ir: 東レ株式会社「IR資料室・統合報告書」<https://www.toray.co.jp/ir/library/annual/>
teijin_cf_capacity: 帝人株式会社「統合報告書・IRライブラリー」<https://www.teijin.co.jp/ir/library/annual_report/>
cf_market_size: GlobeNewswire「$13.45 Bn Carbon Fiber Global Market 2023」<https://www.globenewswire.com/news-release/2025/11/17/3189181/0/en/13-45-Bn-Carbon-Fiber-Global-Market-Opportunities-and-Strategies-to-2034-Top-10-Players-Control-78-64-of-2023-Market-Led-by-Toray-Industries-at-13-50-Share.html>
boeing_toray: Toray Composite Materials America「Toray extends comprehensive agreement with Boeing」<https://www.toraycma.com/toray-extends-comprehensive-agreement-with-boeing-to-supply-carbon-fiber-torayca-prepreg/>
reuters_toray_boeing: Reuters「Toray in long-term pact to supply Boeing with carbon fibre」(2014)<https://www.reuters.com/article/us-toray-ind-boeing-idUSKCN0I10JG20141012>
boeing_787_composite: Boeing「787 Dreamliner by Design — Composites」<https://www.boeing.com/commercial/787/by-design/>
kuraray_pva: 株式会社クラレ「PVAビジネス」<https://www.kuraray.co.jp/products/poval>
pva_market_size: Grand View Research「Polyvinyl Alcohol Market Size Report」<https://www.grandviewresearch.com/industry-analysis/polyvinyl-alcohol-pva-market>
teijin_aramid: Teijin Aramid B.V.「About Twaron」<https://www.teijinaramid.com/en/products/twaron/>
toray_zoltek_acquisition: Toray Industries「Toray Completes Acquisition of Zoltek」(2014)<https://www.toray.com/global/news/details/20140218150001.html>
jcfa: 日本化学繊維協会「統計・資料」<https://www.jcfa.gr.jp/>
{{% /references %}}
