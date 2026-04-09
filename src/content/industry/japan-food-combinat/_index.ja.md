---
title: "日本の食品コンビナート"
subtitle: "首都圏と関西圏の食を支える臨海型食品工業集積地"
date: 2026-04-01
lastmod: 2026-04-01
description: "日本の食品コンビナート4か所を解説。京葉・千葉・神戸東部・泉佐野の立地・歴史・入居企業を紹介。"
weight: 60
mapName: "japan"
galleryDir: "japan-food-combinat"
---

<script>
(function() {
  var pins = [
    { x: 438, y: 450, label: '京葉食品', type: 'keiyo',
      note: '船橋市高瀬町。首都圏のキッチン' },
    { x: 448, y: 456, label: '千葉食品', type: 'chiba',
      note: '千葉市美浜区。[日本](/rule/asia/japan/)最大の食品コンビナート' },
    { x: 256, y: 478, label: '神戸東部第4工区', type: 'kobe',
      note: '神戸市東灘区。[日本](/rule/asia/japan/)初の食品コンビナート' },
    { x: 240, y: 488, label: '泉佐野食品', type: 'izumisano',
      note: '泉佐野市。関空近接の食品基地' },
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

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y - 6);
      glow.setAttribute('r', '11');
      glow.setAttribute('fill', 'rgba(220,38,38,0.18)');
      glow.setAttribute('stroke', 'rgba(220,38,38,0.55)');
      glow.setAttribute('stroke-width', '1.5');

      var marker = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      marker.setAttribute('x', pin.x);
      marker.setAttribute('y', pin.y);
      marker.setAttribute('font-size', '16');
      marker.setAttribute('fill', '#dc2626');
      marker.setAttribute('text-anchor', 'middle');
      marker.setAttribute('dominant-baseline', 'middle');
      marker.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      marker.textContent = '\u2605';

      var textLen = pin.label.length;
      var bgW = textLen * 8 + 6;
      var bgH = 13;
      var bgY = pin.y + 4;
      var textY = pin.y + 13;

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', bgY);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', 'rgba(153,27,27,0.85)');
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

## 食品コンビナートとは

食品コンビナートは、港湾に面した埋立地に<span style="font-weight:700">製粉・製糖・製油・冷凍食品・菓子・飲料</span>などの食品製造企業が集積し、原料の輸入から加工・出荷までを効率的に行う食品工業の集積地です。石油化学コンビナートと同様に、共有インフラ（蒸気・排水処理・電力・サイロ）の共同利用によりコスト削減を図っています。全国4か所の食品コンビナートでは合計約{{% cite "cfc" %}}130社が操業し、[日本](/rule/asia/japan/)国内の食品製造業従事者の約5〜6%を占める主要な食品生産基地となっています。

[日本](/rule/asia/japan/)の食品コンビナートは主に1960〜70年代の高度経済成長期に、増大する都市部の食料需要に応えるために整備されました。千葉地域の2つのコンビナート（千葉食品・京葉食品）は首都圏の食料需要の約40%を供給し、西[日本](/rule/asia/japan/)の神戸・大阪の2コンビナートは関西～九州地域の食料供給を担っています。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">食品コンビナート</p>
    <p class="stat-card__value">4</p>
    <p class="stat-card__unit">か所（千葉2・兵庫1・大阪1）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">日本最大・最古</p>
    <p class="stat-card__value">千葉食品</p>
    <p class="stat-card__unit">コンビナート（1964年・90ha）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">日本初の食品コンビナート</p>
    <p class="stat-card__value">神戸東部</p>
    <p class="stat-card__unit">第4工区（1972年認定）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">共通の特徴</p>
    <p class="stat-card__value">臨海立地</p>
    <p class="stat-card__unit">港湾サイロ→一次加工→二次加工の動線</p>
  </div>
</div>

## 食品コンビナートの仕組み

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">輸入</span>
    <span class="process-step__name">穀物・原糖</span>
    <span class="process-step__temp">海外産地から</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">荷揚げ</span>
    <span class="process-step__name">港湾サイロ</span>
    <span class="process-step__temp">ばら積み船</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">一次加工</span>
    <span class="process-step__name">製粉・精糖・製油</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">二次加工</span>
    <span class="process-step__name">パン・菓子・冷食</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step" style="border-color:#10b981;background:#ecfdf5;">
    <span class="process-step__label">出荷</span>
    <span class="process-step__name">首都圏・関西圏</span>
  </div>
</div>

## 食品コンビナート一覧

### 千葉食品コンビナート{{% cite "cfc" %}}

| 項目 | 内容 |
| ---- | ---- |
| 所在地 | 千葉県千葉市美浜区新港 |
| 面積 | 約{{% cite "cfc" %}}90ha（国内最大） |
| 設立 | {{% cite "cfc" %}}1964年（[日本](/rule/asia/japan/)最大・最古の食品工業団地） |
| 入居企業 | {{% cite "cfc" %}}29社 |
| 年間処理能力 | 小麦約{{% cite "cfc" %}}150万トン、砂糖約{{% cite "cfc" %}}80万トン、油脂約{{% cite "cfc" %}}100万トン |
| 特徴 | 千葉共同サイロ（{{% cite "cfc" %}}253基・16.1万トン）で国内小麦消費の約{{% cite "cfc" %}}20%を取り扱います。1日平均処理量は小麦5,000トン以上です。 |

主要入居企業: <span style="font-weight:700">日清製粉</span>（国内製粉シェア約{{% cite "cfc" %}}44%・最大手）・<span style="font-weight:700">山崎製パン</span>（製パン国内最大手）・<span style="font-weight:700">ニチレイ</span>（冷凍食品大手）・千葉製粉・不二製油・ミヨシ油脂・[日本](/rule/asia/japan/)甜菜製糖・理研ビタミン

### 京葉食品コンビナート{{% cite "kfc" %}}

| 項目 | 内容 |
| ---- | ---- |
| 所在地 | 千葉県船橋市高瀬町 |
| 面積 | 約{{% cite "kfc" %}}67ha |
| 設立 | {{% cite "kfc" %}}1973年 |
| 入居企業 | 約{{% cite "kfc" %}}31社 |
| 年間出荷額 | 約{{% cite "kfc" %}}2,000億円規模 |
| 特徴 | 「首都圈のキッチン」です。菓子・飲料・惣菜など消費者向け食品が中心になります。首都圈への一日配送が可能な立地です。 |

主要入居企業: <span style="font-weight:700">サッポロビール</span>（サッポロHD・ビール類国内シェア約{{% cite "kfc" %}}11〜12%）・<span style="font-weight:700">森永乳業</span>（乳業大手）・<span style="font-weight:700">ニチレイフーズ</span>（冷凍食品）・キーコーヒー・ドトールコーヒー・フジッコ・エスフーズ・文明堂・ユーハイム・メリーチョコレート

### 神戸東部第4工区食品コンビナート{{% cite "kobe_food" %}}

| 項目 | 内容 |
| ---- | ---- |
| 所在地 | 兵庫県神戸市東灘区深江浜町 |
| 面積 | 約{{% cite "kobe_food" %}}56ha |
| 設立 | {{% cite "kobe_food" %}}1972年（[日本](/rule/asia/japan/)初の「食品コンビナート」認定）。神戸食品コンビナート協会が産業振興しています。 |
| 入居企業 | 約{{% cite "kobe_food" %}}10社（製粉・製油・製糖・調味料メーカー） |
| 特徴 | 三井物産が主導して企業を誘致します。甲南ユーティリティが蒸気・電力を一括供給しています。関西～九州の消費地に最適な立地です。 |

主要入居企業: <span style="font-weight:700">ニップン</span>（製粉国内2位）・<span style="font-weight:700">J-オイルミルズ</span>（食用油大手）・<span style="font-weight:700">DM三井製糖</span>・<span style="font-weight:700">キユーピー</span>（マヨネーズ国内シェア約{{% cite "kobe_food" %}}60%）・<span style="font-weight:700">東洋水産</span>（マルちゃん：即席麺大手）・MCC食品・東洋ナッツ食品

### 泉佐野食品コンビナート{{% cite "izumisano" %}}

| 項目 | 内容 |
| ---- | ---- |
| 所在地 | 大阪府泉佐野市住吉町 |
| 面積 | 約{{% cite "izumisano" %}}115ha（うち港湾44ha）。国内食品コンビナート中、面積最大です。 |
| 設立 | {{% cite "izumisano" %}}1967年（関西国際空港開港前から立地） |
| 入居企業 | {{% cite "izumisano" %}}55社（最多。多業種が集積しています） |
| 特徴 | 関西国際空港に近接（距離約{{% cite "izumisano" %}}8km）しています。不二製油グループ本社の登記上本店所在地です。液体油脂・チョコレート・製粉が主要産業です。 |

主要入居企業: <span style="font-weight:700">不二製油</span>（植物性油脂世界大手・本社所在・業務用チョコレート世界シェア約{{% cite "izumisano" %}}20%）・<span style="font-weight:700">キユーピー</span>泉佐野工場・<span style="font-weight:700">東洋製罐</span>大阪工場・鳥越製粉・関西製糖・日本ハム大阪工場

## 4コンビナートの比較

| | 千葉食品 | 京葉食品 | 神戸東部第4工区 | 泉佐野 |
| -- | -------- | -------- | ------------ | ------ |
| 面積 | 90ha | 67ha | 56ha | 115ha |
| 設立 | 1964年 | 1973年 | 1972年 | 1967年 |
| 企業数 | 29社 | 31社 | 約10社 | 55社 |
| 性格 | 一次加工（製粉・精糖）中心 | 二次加工（菓子・飲料）中心 | 一次加工＋ユーティリティ共有 | 油脂・水産・多業種 |
| 供給圏 | 首都圏 | 首都圏 | 関西圏 | 関西圏 |

## 関連企業の時価総額マップ

食品コンビナートに入居する主要上場企業の時価総額を可視化しています。

{{% corp-treemap "2002,2001,2212,2871,2264,2809,2875,2607,2109,2501,2594,2613,2908,2897,2805,2874,4318,2590,2621" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・食品コンビナートとの関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 製粉・製糖</td></tr>
<tr>
<td>日清製粉グループ本社</td>
<td>{{% minkabu 2002 %}}</td>
<td>国内製粉シェア約44%の最大手。千葉食品コンビナートに主力の製粉工場を保有し、年150万トン超の小麦処理能力を持つ。千葉共同サイロ（国内20%の小麦取扱量）の主要株主として、首都圏への食料供給の中核を担う。</td>
<td>{{% corplink "https://www.nisshin.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "2002" %}}</td>
</tr>
<tr>
<td>ニップン（旧：日本製粉）</td>
<td>{{% minkabu 2001 %}}</td>
<td>製粉国内2位のメーカー。神戸東部第4工区に神戸工場を保有し、関西～西日本への小麦製品供給の中核。冷凍食品「オーマイ」ブランドで消費者向け事業も展開。2021年4月に社名を日本製粉からニップンに変更し、グローバル展開を加速。</td>
<td>{{% corplink "https://www.nippn.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2001" %}}</td>
</tr>
<tr>
<td>DM三井製糖HD</td>
<td>{{% minkabu 2109 %}}</td>
<td>国内製糖大手。神戸東部第4工区に製糖工場を保有し、高さ30mの原糖倉庫が特徴的。海外産の原糖を精製し関西～九州地域への砂糖供給を担う。食品産業向けの各種砂糖製品で市場をリード。</td>
<td>{{% corplink "https://www.dm-misui.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2109" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 食用油・調味料</td></tr>
<tr>
<td>不二製油グループ本社</td>
<td>{{% minkabu 2607 %}}</td>
<td>植物性油脂・業務用チョコレート・大豆たんぱくなどで世界的な地位を占める。泉佐野食品コンビナート内に本社・主力工場を保有。業務用チョコレートで世界シェア20%超を保有し、食品メーカー向けの原料供給で国際競争力を発揮。</td>
<td>{{% corplink "https://www.fujioilholdings.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "2607" %}}</td>
</tr>
<tr>
<td>キユーピー</td>
<td>{{% minkabu 2809 %}}</td>
<td>マヨネーズで国内シェア約60%を占める食品大手。神戸東部第4工区と泉佐野の両コンビナートに工場を保有し、関西～西日本市場を支配。ドレッシング・調味料でも業界トップシェア。グループで国内外20か国以上の生産拠点を保有。</td>
<td>{{% corplink "https://www.kewpie.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2809" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 製パン・菓子</td></tr>
<tr>
<td>山崎製パン</td>
<td>{{% minkabu 2212 %}}</td>
<td>製パン国内最大手。千葉食品コンビナート内に主力の生産拠点を保有し、首都圏の食卓を支えるパン・菓子の主要サプライヤー。チェーン店向けサンドイッチ、コンビニ向け菓子パンなど消費者ニーズに対応した多様な商品を生産。</td>
<td>{{% corplink "https://www.yamazakipan.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2212" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 乳製品・冷凍食品</td></tr>
<tr>
<td>ニチレイ</td>
<td>{{% minkabu 2871 %}}</td>
<td>冷凍食品・低温物流業界の大手。千葉食品・京葉食品の両コンビナートに拠点を保有し、首都圏への冷凍食品供給の中核。冷凍野菜、冷凍水産品、冷凍弁当で大きなシェアを占め、低温物流ネットワークで全国をカバー。</td>
<td>{{% corplink "https://www.nichirei.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2871" %}}</td>
</tr>
<tr>
<td>森永乳業</td>
<td>{{% minkabu 2264 %}}</td>
<td>京葉食品コンビナート内に工場を保有する大手乳業メーカー。牛乳、ヨーグルト、チーズなどの乳製品、飲料、アイスクリーム、栄養食品で幅広い品揃え。首都圏の消費者向けの主要サプライヤーとして市場をリード。</td>
<td>{{% corplink "https://www.morinagamilk.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2264" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ ビール・飲料・食品</td></tr>
<tr>
<td>サッポロホールディングス</td>
<td>{{% minkabu 2501 %}}</td>
<td>ビール・飲料業界の大手。サッポロビール千葉工場が京葉食品コンビナート内に立地し、ビアガーデンも併設。国内ビール市場でシェア約11～12%を占める。ビール、チューハイ、日本酒など多様な飲料製品で市場をカバー。</td>
<td>{{% corplink "https://www.sapporoholdings.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2501" %}}</td>
</tr>
<tr>
<td>東洋水産</td>
<td>{{% minkabu 2875 %}}</td>
<td>「マルちゃん」ブランドで即席麺市場でトップシェアを占める食品大手。神戸東部第4工区に工場を保有し、関西～西日本市場への主要サプライヤー。即席麺は北米でも高シェアを占め、グローバルブランドとして国際展開を推進。</td>
<td>{{% corplink "https://www.maruchan.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2875" %}}</td>
</tr>
<tr>
<td>大塚食品</td>
<td>{{% minkabu 2897 %}}</td>
<td>「ボンカレー」「マッシモ」などレトルト食品で有名な食品メーカー。レトルトカレー・パスタソース・スープなど調理食品で高シェア。複数の食品コンビナートとの関連性があり、食品製造業の重要なサプライヤーとして位置付けられている。</td>
<td>{{% corplink "https://www.otsuka-foodservice.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2897" %}}</td>
</tr>
<tr>
<td>明治ホールディングス</td>
<td>{{% minkabu 2269 %}}</td>
<td>乳製品・菓子・医薬品・栄養補助食品の総合企業。グループで複数の食品コンビナートに生産拠点を展開。牛乳、ヨーグルト、チョコレート、サプリメント等で業界リーダーとして消費者向け市場を支配。グローバル展開も積極的に推進。</td>
<td>{{% corplink "https://www.meiji.com/investor/" %}}</td>
<td>{{% dividend "tokyo" "2269" %}}</td>
</tr>
<tr>
<td>味の素</td>
<td>{{% minkabu 2802 %}}</td>
<td>タンパク質・アミノ酸・調味料で世界的なリーダー企業。千葉・泉佐野など複数の食品コンビナートに生産拠点を保有。うま味調味料（MSG）、フルーティアシリーズなどで日本の食卓を支える。食品・医薬・農業分野での研究開発力で国際競争力を発揮。</td>
<td>{{% corplink "https://www.ajinomoto.co.jp/company/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2802" %}}</td>
</tr>
<tr>
<td>日本水産</td>
<td>{{% minkabu 1332 %}}</td>
<td>水産食品業界の大手メーカー。冷凍食品・練製品・缶詰で国内有数のシェアを占める。複数の食品コンビナートに生産拠点を保有。水産物の捕獲から加工・販売までの一貫体制で、国内食卓への水産物供給を支える。</td>
<td>{{% corplink "https://www.nippon-suisan.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "1332" %}}</td>
</tr>
<tr>
<td>マルハニチロ</td>
<td>{{% minkabu 1333 %}}</td>
<td>冷凍食品・缶詰・水産食品の大手メーカー。日本水産と並ぶ業界リーダーとして全国の食品コンビナートへの主要サプライヤー。冷凍フライ、冷凍野菜、缶詰など多様な食品製品で消費者の食卓に根付いており、国内外でのシェア拡大を推進。</td>
<td>{{% corplink "https://www.maruha-nichiro.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "1333" %}}</td>
</tr>
<tr>
<td>キッコーマン</td>
<td>{{% minkabu 2801 %}}</td>
<td>醤油・調味料の世界大手メーカー。「キッコーマン」ブランドで日本国内はもちろん、米国、欧州など海外市場でも圧倒的なシェアを占める。複数の食品コンビナートと関連性があり、日本の食文化の国際化を牽引する企業。</td>
<td>{{% corplink "https://www.kikkoman.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2801" %}}</td>
</tr>
<tr>
<td>カゴメ</td>
<td>{{% minkabu 2811 %}}</td>
<td>野菜飲料・トマト製品の大手メーカー。「野菜生活」などのブランドで国内飲料市場で高いシェアを占める。加工食品での複数コンビナートとの関連性があり、健康・栄養を軸とした食品開発で消費者ニーズに対応。</td>
<td>{{% corplink "https://www.kagome.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "2811" %}}</td>
</tr>
<tr>
<td>セブン&アイ・ホールディングス</td>
<td>{{% minkabu 3382 %}}</td>
<td>流通・小売業界の日本最大手。イトーヨーカドー、セブン-イレブンなどで食品コンビナート製品の主要流通チャネルを運営。食品製造から消費者への最後のマイルをカバーする流通網を保有し、食品コンビナート産業の重要パートナー。</td>
<td>{{% corplink "https://www.7andi.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3382" %}}</td>
</tr>
</tbody>
</table>
</div>

## 参考文献

{{% references %}}
cfc: 千葉食品コンビナート協議会「千葉食品コンビナートについて」<https://www.chiba-syokuhin.org/pages/17/>
kfc: 京葉食品コンビナート協議会「京葉食品コンビナートについて」<https://www.kfc230307.org/about.html>
kobe_food: 神戸新聞「食品コンビナートのいま」<https://www.kobe-np.co.jp/rentoku/fu-kei/202209/0015666145.shtml>
izumisano: 泉佐野市立図書館「泉佐野食品コンビナート」<https://library.city.izumisano.lg.jp/izumisano/nandemo/si/syokuhinkonbi.html>
{{% /references %}}
