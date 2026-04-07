---
title: "日本の塗料業の分布"
subtitle: "建築・自動車・船舶・重防食 — 多用途塗料メーカーの全国マップ"
date: 2026-04-07
lastmod: 2026-04-07
description: "日本の塗料産業を解説。日本ペイント・関西ペイント・大日本塗料の3大メーカーを中心に、年間生産量約160万トン規模の市場、建築・自動車・工業・船舶・重防食といった用途別構造、関西2大本社・関東〜中部の主要工場分布までを整理。"
weight: 34
mapName: "japan"
---

<script>
(function() {
  var pins = [
    // 主要塗料メーカー本社・主力工場
    { x: 230, y: 470, label: '日本ペイントHD（大阪本社）', type: 'paint',
      note: '日本ペイントHDの登記上本社の一つ。創業地は東京・茂木合名（1881）、現HDは東京/大阪二本社制' },
    { x: 235, y: 472, label: '関西ペイント（大阪本社）', type: 'paint', above: true,
      note: '大阪市北区。1918年創業。総合塗料で関ペ系列を統括' },
    { x: 240, y: 475, label: '大日本塗料（大阪本社）', type: 'paint',
      note: '大阪市中央区。重防食・建材用塗料の最大手' },
    { x: 470, y: 380, label: '日本ペイント・東京事業所', type: 'paint',
      note: '品川区。HDの東京本社機能・研究' },
    { x: 425, y: 405, label: '神東塗料／ロックペイント／大塚刷毛 等', type: 'paint',
      note: '中堅メーカー本社が首都圏・関西に集中' },
    // 主要工場
    { x: 245, y: 460, label: '関西ペイント尼崎工場', type: 'plant',
      note: '兵庫県尼崎市。関ペ最大級の自動車・工業塗料製造拠点' },
    { x: 320, y: 437, label: '日本ペイント名古屋', type: 'plant',
      note: '愛知県東海市。自動車塗料の主力工場、トヨタグループ向け' },
    { x: 460, y: 392, label: '関西ペイント平塚事業所', type: 'plant',
      note: '神奈川県平塚市。関東向け主力工場' },
    { x: 425, y: 432, label: '中国塗料 大竹工場', type: 'plant',
      note: '広島県大竹市。船舶塗料世界トップ級' },
    { x: 415, y: 415, label: '日本ペイントマリン', type: 'plant',
      note: '兵庫県神戸市垂水区。船舶用塗料のCMP（旧中国塗料）と並ぶ二大メーカー' },
    { x: 480, y: 365, label: '大日本塗料 小山工場', type: 'plant',
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

## 日本の塗料産業の概観

日本の塗料の国内需要は2024年度実績で**約123万7千トン**{{% cite "jpma_stats" %}}で推移しており、年間出荷金額はおよそ7,000億円規模と推定されています{{% cite "jpma_stats" %}}。世界の塗料市場（金額ベース約2,170億ドル）の中で日本は数量ベース世界4〜5位、メーカー規模では**日本ペイントHDが世界4位、関西ペイントが世界5位**{{% cite "global_ranking_2024" %}}にランクされる輸出競争力を持ちます。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">~123.7万t</div><div class="stat-label">2024年度 需要実績（JPMA）</div></div>
<div class="stat-card"><div class="stat-num">3社</div><div class="stat-label">3大メーカー（日本ペイントHD・関西ペイント・大日本塗料）</div></div>
<div class="stat-card"><div class="stat-num">5</div><div class="stat-label">主要用途（建築・自動車・工業・船舶・重防食）</div></div>
<div class="stat-card"><div class="stat-num">大阪</div><div class="stat-label">3大メーカー全社の本社（または共同本社）所在地</div></div>
</div>

## 用途別の市場構造

塗料の用途は大きく5分野に分かれ、それぞれ異なるサプライヤー構造を持ちます。

| 用途 | 概要 | 主要メーカー |
| --- | --- | --- |
| **建築用** | 住宅・ビル・マンションの内外装、屋根・外壁 | 日本ペイント、関西ペイント、エスケー化研、菊水化学 |
| **自動車用（OEM）** | 完成車塗装ライン向け（電着・中塗り・上塗り・クリア）| 日本ペイントオートモーティブ、関西ペイント、BASFコーティングス |
| **自動車補修用（リフィニッシュ）** | 板金・補修ショップ向け | 日本ペイント、関西ペイント、デュポン、PPG |
| **工業用（産業機器・電機・建材）** | 家電・OA機器・鋼製品など | 日本ペイント、関西ペイント、大日本塗料、神東塗料 |
| **船舶用（マリン）** | 船底防汚塗料・上部構造塗料 | 中国塗料、日本ペイントマリン（NPMC）、関西ペイントマリン |
| **重防食** | 橋梁・タンク・プラント・鉄構造物 | 大日本塗料、日本ペイント防食コーティングス、関西ペイント |
| **粉体塗料・特殊** | 焼付塗装、電子部品 | 日本ペイント、関西ペイント、ロックペイント |

## 3大メーカー

### 日本ペイントホールディングス（4612）

1881年（明治14年）{{% cite "nipponpaint_hd" %}}に**茂木重次郎**が東京で創業した日本最古の塗料メーカーで、現在は**東京（品川シーズンテラス）と大阪（大淀北）の2本社制**{{% cite "nipponpaint_hd" %}}です。シンガポールの**Wuthelam Group（呉氏一族）**を筆頭株主として迎え、グローバル企業統合（オーストラリアDuluxGroup買収、米Cromologyなど）を進め、**世界4位級（連結売上1.4〜1.7兆円規模）**{{% cite "global_ranking_2024" %}}の塗料企業に成長しました。

主力子会社：
- 日本ペイント・オートモーティブコーティングス（NPA、自動車OEM）
- 日本ペイント・インダストリアルコーティングス
- 日本ペイント・マリン（NPMC、船舶用）
- 日本ペイント防食コーティングス

### 関西ペイント（4613）

1918年{{% cite "kansai_paint" %}}に**岩井勝次郎** が大阪で創業した総合塗料メーカー。本社は大阪市北区梅田で、自動車OEM塗料・補修塗料に強みを持ちます。**世界5位** {{% cite "global_ranking_2024" %}}の塗料メーカーで、インド・トルコ・南アフリカ・東南アジアでの存在感が大きいのが特徴です。**尼崎事業所** が国内最大の工場で、自動車・工業塗料の主力ラインを擁します。

### 大日本塗料（4611）

1929年{{% cite "dnt_company" %}}創業、本社は大阪市中央区南船場。**重防食・建材用塗料の最大手** で、橋梁・タンク・プラントなどの社会インフラ向けに高い実績を持ちます。栃木県小山市の**小山工場** が重防食塗料の主力拠点です。

## 船舶用塗料 — 「中国塗料」が世界トップ級

**中国塗料（4617）**{{% cite "chugoku_marine" %}}は社名の「中国」は中国地方（広島）を指し、広島県大竹市発祥の独立系塗料メーカーです。船底防汚塗料（アンチファウリング）で世界トップ3（CMP / 日本ペイントマリン NPMC / Hempel / Jotun / AkzoNobel）に入る存在で、海外売上比率が高い日本の塗料メーカーの代表例です。日本ペイントマリン（神戸）と合わせ、日本は世界の船舶塗料供給の中核を担います。

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

## なぜ大阪に本社が集中するのか

3大メーカーすべてが大阪に本社（または主要拠点）を置く背景には、明治期〜大正期の関西経済圏の繁栄があります。大阪は染料・薬品・油脂工業の集積地で、塗料の原料となる**亜麻仁油・桐油・顔料・樹脂**{{% cite "jpma_overview" %}}のサプライヤーが集まっていました。また、関西〜瀬戸内に造船・自動車・電機の需要が集中していたことも、塗料メーカーが関西に根付く要因となりました。

## 日本の上場塗料メーカー時価総額マップ

<div class="corp-treemap-section">
<div class="corp-treemap" data-companies='[{"t":"4612","n":"\u65e5\u672c\u30da\u30a4\u30f3\u30c8HD","s":"\u7dcf\u5408","v":3.5,"c":"#dc2626"},{"t":"4613","n":"\u95a2\u897f\u30da\u30a4\u30f3\u30c8","s":"\u7dcf\u5408","v":0.6,"c":"#dc2626"},{"t":"4617","n":"\u4e2d\u56fd\u5857\u6599","s":"\u8239\u8236","v":0.13,"c":"#1d4ed8"},{"t":"4611","n":"\u5927\u65e5\u672c\u5857\u6599","s":"\u91cd\u9632\u98df","v":0.05,"c":"#6b7280"}]'></div>
<p class="treemap-note">※ 東証上場の主要塗料メーカー。エスケー化研（4628）等は中堅で別扱い。</p>
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
