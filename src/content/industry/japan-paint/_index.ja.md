---
title: "日本の塗料業の分布"
subtitle: "建築・自動車・船舶・重防食 — 多用途塗料メーカーの全国マップ"
date: 2026-04-07
lastmod: 2026-04-07
description: "日本の塗料産業を解説。日本ペイント・関西ペイント・大日本塗料の3大メーカーを中心に、年間生産量約160万トン規模の市場、建築・自動車・工業・船舶・重防食といった用途別構造、関西2大本社・関東〜中部の主要工場分布までを整理。"
weight: 34
mapName: "japan"
galleryDir: "japan-paint"
---

<script>
(function() {
  var pins = [
    // 主要塗料メーカー本社・主力工場
    { x: 252, y: 470, label: '日本ペイントHD（大阪本社）', type: 'paint',
      note: '大阪市北区。創業地は東京・茂木合名（1881）、現HDは東京/大阪二本社制' },
    { x: 256, y: 474, label: '関西ペイント（大阪本社）', type: 'paint', above: true,
      note: '大阪市中央区。1918年創業。総合塗料で関ペ系列を統括' },
    { x: 260, y: 478, label: '大日本塗料（大阪本社）', type: 'paint',
      note: '大阪市此花区。重防食・建材用塗料の最大手' },
    { x: 410, y: 446, label: '日本ペイント・東京事業所', type: 'paint',
      note: '品川区。HDの東京本社機能・研究' },
    { x: 414, y: 450, label: '神東塗料／ロックペイント／大塚刷毛 等', type: 'paint',
      note: '中堅メーカー本社が首都圏・関西に集中' },
    // 主要工場
    { x: 247, y: 472, label: '関西ペイント尼崎工場', type: 'plant',
      note: '兵庫県尼崎市。関ペ最大級の自動車・工業塗料製造拠点' },
    { x: 320, y: 478, label: '日本ペイント名古屋', type: 'plant',
      note: '愛知県東海市。自動車塗料の主力工場、トヨタグループ向け' },
    { x: 406, y: 452, label: '関西ペイント平塚事業所', type: 'plant',
      note: '神奈川県平塚市。関東向け主力工場' },
    { x: 195, y: 495, label: '中国塗料 大竹工場', type: 'plant',
      note: '広島県大竹市。船舶塗料世界トップ級' },
    { x: 244, y: 476, label: '日本ペイントマリン', type: 'plant',
      note: '兵庫県神戸市垂水区。船舶用塗料のCMP（旧中国塗料）と並ぶ二大メーカー' },
    { x: 434, y: 414, label: '大日本塗料 小山工場', type: 'plant',
      note: '栃木県小山市。重防食塗料の主力' },
  ];
  function init() {
    var map = document.querySelector('#world-map svg');
    if (!map) { setTimeout(init, 200); return; }
    var ns = 'http://www.w3.org/2000/svg';
    pins.forEach(function(p) {
      var color = p.type === 'paint' ? '#dc2626' : '#0891b2';
      var c = document.createElementNS(ns, 'circle');
      c.setAttribute('cx', p.x); c.setAttribute('cy', p.y);
      c.setAttribute('r', 6); c.setAttribute('fill', color);
      c.setAttribute('stroke', '#fff'); c.setAttribute('stroke-width', '1.5');
      var t = document.createElementNS(ns, 'title');
      t.textContent = p.label + ' — ' + p.note;
      c.appendChild(t);
      map.appendChild(c);
    });
  }
  setTimeout(init, 500);
})();
</script>

## [日本](/rule/asia/japan/)の塗料産業の概観

[日本](/rule/asia/japan/)の塗料の国内需要は2024年度実績で<span style="font-weight:700">約140万トン</span>{{% cite "jpma_stats" %}}で推移しており、年間出荷金額はおよそ7,000億円規模と推定されています{{% cite "jpma_stats" %}}。世界の塗料市場（金額ベース約2,170億ドル）の中で[日本](/rule/asia/japan/)は数量ベース世界4〜5位、メーカー規模では<span style="font-weight:700">日本ペイントHDが世界4位、関西ペイントが世界8位</span>{{% cite "global_ranking_2024" %}}にランクされる輸出競争力を持ちます。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">~140万t</div><div class="stat-label">2024年度 需要実績（JPMA）</div></div>
<div class="stat-card"><div class="stat-num">3社</div><div class="stat-label">3大メーカー（日本ペイントHD・関西ペイント・大日本塗料）</div></div>
<div class="stat-card"><div class="stat-num">5</div><div class="stat-label">主要用途（建築・自動車・工業・船舶・重防食）</div></div>
<div class="stat-card"><div class="stat-num">大阪</div><div class="stat-label">3大メーカー全社の本社（または共同本社）所在地</div></div>
</div>

## 用途別の市場構造

塗料の用途は大きく5分野に分かれ、それぞれ異なるサプライヤー構造を持ちます。

| 用途 | 概要 | 主要メーカー |
| --- | --- | --- |
| <span style="font-weight:700">建築用</span> | 住宅・ビル・マンションの内外装、屋根・外壁 | 日本ペイント、関西ペイント、エスケー化研、菊水化学 |
| <span style="font-weight:700">自動車用（OEM）</span> | 完成車塗装ライン向け（電着・中塗り・上塗り・クリア）| 日本ペイントオートモーティブ、関西ペイント、BASFコーティングス |
| <span style="font-weight:700">自動車補修用（リフィニッシュ）</span> | 板金・補修ショップ向け | 日本ペイント、関西ペイント、デュポン、PPG |
| <span style="font-weight:700">工業用（産業機器・電機・建材）</span> | 家電・OA機器・鋼製品など | 日本ペイント、関西ペイント、大日本塗料、神東塗料 |
| <span style="font-weight:700">船舶用（マリン）</span> | 船底防汚塗料・上部構造塗料 | 中国塗料、日本ペイントマリン（NPMC）、関西ペイントマリン |
| <span style="font-weight:700">重防食</span> | 橋梁・タンク・プラント・鉄構造物 | 大日本塗料、日本ペイント防食コーティングス、関西ペイント |
| <span style="font-weight:700">粉体塗料・特殊</span> | 焼付塗装、電子部品 | 日本ペイント、関西ペイント、ロックペイント |

## 3大メーカー

### 日本ペイントホールディングス（4612）

1881年（明治14年）{{% cite "nipponpaint_hd" %}}に<span style="font-weight:700">茂木重次郎</span>が東京で創業した[日本](/rule/asia/japan/)最古の塗料メーカーで、現在は<span style="font-weight:700">東京（品川シーズンテラス）と大阪（大淀北）の2本社制</span>{{% cite "nipponpaint_hd" %}}です。[シンガポール](/rule/asia/singapore/)の<span style="font-weight:700">Wuthelam Group（呉氏一族）</span>を筆頭株主として迎え、グローバル企業統合（[オーストラリア](/rule/oceania/australia/)DuluxGroup買収、米Cromologyなど）を進め、<span style="font-weight:700">世界4位級（連結売上1.4〜1.7兆円規模）</span>{{% cite "global_ranking_2024" %}}の塗料企業に成長しました。

主力子会社：
- 日本ペイント・オートモーティブコーティングス（NPA、自動車OEM）
- 日本ペイント・インダストリアルコーティングス
- 日本ペイント・マリン（NPMC、船舶用）
- 日本ペイント防食コーティングス

### 関西ペイント（4613）

1918年{{% cite "kansai_paint" %}}に<span style="font-weight:700">岩井勝次郎</span> が大阪で創業した総合塗料メーカー。本社は大阪市北区梅田で、自動車OEM塗料・補修塗料に強みを持ちます。<span style="font-weight:700">世界8位</span> {{% cite "global_ranking_2024" %}}の塗料メーカーで、[インド](/rule/asia/india/)・[トルコ](/rule/middle_east/turkey/)・[南アフリカ](/rule/africa/south-africa/)・東南アジアでの存在感が大きいのが特徴です。<span style="font-weight:700">尼崎事業所</span> が国内最大の工場で、自動車・工業塗料の主力ラインを擁します。

### 大日本塗料（4611）

1929年{{% cite "dnt_company" %}}創業、本社は大阪市中央区南船場。<span style="font-weight:700">重防食・建材用塗料の最大手</span> で、橋梁・タンク・プラントなどの社会インフラ向けに高い実績を持ちます。栃木県小山市の<span style="font-weight:700">小山工場</span> が重防食塗料の主力拠点です。

## 船舶用塗料 — 「中国塗料」が世界トップ級

<span style="font-weight:700">中国塗料（4617）</span>{{% cite "chugoku_marine" %}}は社名の「[中国](/rule/asia/china/)」は[中国](/rule/asia/china/)地方（広島）を指し、広島県大竹市発祥の独立系塗料メーカーです。船底防汚塗料（アンチファウリング）で世界トップ3（CMP / 日本ペイントマリン NPMC / Hempel / Jotun / AkzoNobel）に入る存在で、海外売上比率が高い[日本](/rule/asia/japan/)の塗料メーカーの代表例です。日本ペイントマリン（神戸）と合わせ、[日本](/rule/asia/japan/)は世界の船舶塗料供給の中核を担います。

## 主要中堅メーカー

| 企業 | 本社 | 強み |
| --- | --- | --- |
| エスケー化研 | 大阪府茨木市 | 建築用塗料（外壁仕上げ材）国内トップ |
| 菊水化学工業 | 名古屋 | 建築用塗料・工法 |
| 神東塗料 | 兵庫県尼崎市 | 工業用塗料、関西ペイント傘下 |
| ロックペイント | 大阪市東成区 | 自動車補修・工業 |
| 神東ペイント／藤倉化成 | — | 工業用 |
| イサム塗料 | 大阪市淀川区 | 自動車補修 |
| アトミクス | 東京都荒川区 | 床用・路面標示 |
| 太陽塗料 | 神奈川県川崎市 | 工業用 |
| 染めQテクノロジィ | 神奈川県相模原市 | 特殊塗料 |
| エスケー化研 | 大阪府茨木市 | 建築用塗料・外壁材（4628上場） |
| DIC | 東京都中央区 | 化学・塗料・顔料（5106上場） |

## なぜ大阪に本社が集中するのか

3大メーカーすべてが大阪に本社（または主要拠点）を置く背景には、明治期〜大正期の関西経済圏の繁栄があります。大阪は染料・薬品・油脂工業の集積地で、塗料の原料となる<span style="font-weight:700">亜麻仁油・桐油・顔料・樹脂</span>{{% cite "jpma_overview" %}}のサプライヤーが集まっていました。また、関西〜瀬戸内に造船・自動車・電機の需要が集中していたことも、塗料メーカーが関西に根付く要因となりました。

## [日本](/rule/asia/japan/)の上場塗料メーカー時価総額マップ

<div class="corp-treemap-section">
<div class="corp-treemap" data-companies='[{"t":"4612","n":"日本ペイントHD","s":"総合","v":3.5,"c":"#dc2626"},{"t":"4613","n":"関西ペイント","s":"総合","v":0.6,"c":"#dc2626"},{"t":"4617","n":"中国塗料","s":"船舶","v":0.13,"c":"#1d4ed8"},{"t":"4611","n":"大日本塗料","s":"重防食","v":0.05,"c":"#6b7280"},{"t":"4628","n":"エスケー化研","s":"建築","v":0.08,"c":"#f59e0b"},{"t":"5106","n":"DIC","s":"化学・塗料","v":0.22,"c":"#f97316"}]'></div>
<p class="treemap-note">※ 東証上場の主要塗料メーカー。エスケー化研（4628）・DIC（5106）等中堅メーカーも含む。</p>
</div>

## 関連企業の時価総額マップと企業情報

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 総合塗料メーカー（3大グループ）</td></tr>
<tr>
<td>日本ペイントHD</td>
<td>{{% minkabu 4612 %}}</td>
<td>1881年創業の[日本](/rule/asia/japan/)最古の塗料メーカー。東京・大阪二本社制。世界4位の塗料企業。自動車OEM・建築・船舶向け幅広展開{{% cite "nipponpaint_hd" %}}。</td>
<td>{{% corplink "https://www.nipponpaint-holdings.com/company/outline/" %}}</td>
<td>{{% dividend "tokyo" "4612" %}}</td>
</tr>
<tr>
<td>関西ペイント</td>
<td>{{% minkabu 4613 %}}</td>
<td>1918年創業。大阪本社。世界8位。自動車OEM・補修塗料に強み。尼崎事業所が国内最大級の製造拠点{{% cite "kansai_paint" %}}。</td>
<td>{{% corplink "https://www.kansai.co.jp/company/overview/" %}}</td>
<td>{{% dividend "tokyo" "4613" %}}</td>
</tr>
<tr>
<td>大日本塗料</td>
<td>{{% minkabu 4611 %}}</td>
<td>1929年創業。大阪本社。重防食・建材用塗料の最大手。橋梁・タンク・プラント等インフラ向け{{% cite "dnt_company" %}}。</td>
<td>{{% corplink "https://www.dnt.co.jp/company/about/" %}}</td>
<td>{{% dividend "tokyo" "4611" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 特化型・中堅メーカー</td></tr>
<tr>
<td>中国塗料</td>
<td>{{% minkabu 4617 %}}</td>
<td>広島県大竹市発祥。船底防汚塗料で世界トップ3。海外売上高比率が高い独立系メーカー{{% cite "chugoku_marine" %}}。</td>
<td>{{% corplink "https://www.cmp.co.jp/company/" %}}</td>
<td>{{% dividend "tokyo" "4617" %}}</td>
</tr>
<tr>
<td>エスケー化研</td>
<td>{{% minkabu 4628 %}}</td>
<td>大阪府茨木市本社。建築用塗料・外壁仕上げ材で国内シェア高。中堅ながら確実な市場ポジション。</td>
<td>{{% corplink "https://www.sk-kaken.co.jp/company/" %}}</td>
<td>{{% dividend "tokyo" "4628" %}}</td>
</tr>
<tr>
<td>DIC</td>
<td>{{% minkabu 5106 %}}</td>
<td>東京都中央区本社。化学・塗料・顔料の総合企業。高機能塗料・印刷インク等に多角展開。</td>
<td>{{% corplink "https://www.dic.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5106" %}}</td>
</tr>
</tbody>
</table>
</div>

## 参考文献

{{% references %}}
jpma_stats: 日本塗料工業会（JPMA）「統計・需要実績」<https://www.toryo.or.jp/jp/data/index.html>
jpma_overview: 日本塗料工業会「日塗工の概要 2024」<https://www.toryo.or.jp/jp/info/jpma/summary2024.html>
nipponpaint_hd: 日本ペイントホールディングス「会社情報」<https://www.nipponpaint-holdings.com/company/outline/>
kansai_paint: 関西ペイント「会社情報」<https://www.kansai.co.jp/company/overview/>
dnt_company: 大日本塗料「会社情報」<https://www.dnt.co.jp/company/about/index.html>
chugoku_marine: 中国塗料「会社情報」<https://www.cmp.co.jp/>
coating_media: コーティングメディア「塗料・塗装白書 2024」<https://www.coatingmedia.com/publication/whitepaper/whitepaper2024.html>
global_ranking_2024: コーティングメディア「シャーウィン・ウィリアムズが1位に 世界塗料メーカーランキング」<https://www.coatingmedia.com/online/a/1-10.html>
jpma_demand_2024: WEB塗料報知「２０２５年度需要予測、微増の１２４万８千ｔ」<https://www.e-toryo.co.jp/statistics/toryo-116/>
{{% /references %}}
