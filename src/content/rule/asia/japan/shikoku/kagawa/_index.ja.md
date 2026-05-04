---
title: "香川"
date: 2023-02-26
lastmod: 2023-07-01
weight: 80
draft: false
keywords: [""]
sections: [""]
no_jetro: true
is_pref: true
flag: "Kagawa.svg"
mapProvider: "osm"
mapPins:
  - { lat: 34.347, lng: 134.047, label: "高松駅", type: "capital", note: "香川県の県庁所在地・うどん県" }
  - { lat: 34.331, lng: 134.052, label: "栗林公園", type: "landmark", note: "特別名勝の大名庭園" }
  - { lat: 34.185, lng: 133.815, label: "金刀比羅宮", type: "historical", note: "こんぴらさん" }
  - { lat: 34.241, lng: 133.815, label: "瀬戸大橋", type: "landmark", note: "本州と四国を結ぶ橋" }
  - { lat: 34.476, lng: 134.226, label: "小豆島", type: "nature", note: "瀬戸内海の島・オリーブ" }
  - { lat: 34.286, lng: 133.798, label: "丸亀城", type: "historical", note: "現存天守" }
features:
  - text: '「<span class="quiz">うどん県</span>」を自称するほど讃岐うどんの文化が根付き、うどん店の密度は日本一'
    ref: "https://ja.wikipedia.org/wiki/讃岐うどん"
  - text: '日本で最も面積が小さい都道府県で、<span class="quiz">ため池</span>の密度が全国最高'
    ref: "https://ja.wikipedia.org/wiki/香川県#地理"
prefInfo:
  population: "約 93 万人"
  populationRank: "全国 40 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "1,877 km²"
  areaRank: "全国 47 位"
  areaCite: "gsi_mencho_2024"
  capital: "高松市"
  capitalNote: "人口 約 41 万人"
  geography: '四国の北東部、瀬戸内海に面する日本最小面積の県（全国 47 位）。讃岐平野・讃岐山脈・小豆島が主な地形で、降水量が少ないため古来からため池が発達（満濃池は弘法大師空海が改修）。瀬戸大橋で岡山県と接続。瀬戸内海の多島美は本州・四国・九州を結ぶ航路の中継点として歴史を持つ。'
  economy: '讃岐うどんの本場で、小麦製粉（日清製粉グループ）も県内で完結する珍しい地域。今治造船多度津造船所など造船関連、丸亀の手袋（皮革手袋・スポーツ手袋）が国内シェア 9 割。直島・豊島はベネッセアートサイトで現代美術観光の聖地、三菱マテリアル直島製錬所がリサイクル銅・貴金属の都市鉱山処理を担う。坂出は瀬戸内工業地域の一角で、塩田跡地に製油所・石油備蓄基地・コスモ石油坂出。'
  relatedIndustry:
    - url: '/industry/japan-shipbuilding/'
      title: '日本の造船業'
      note: '今治造船多度津造船所'
    - url: '/industry/japan-nonferrous/'
      title: '日本の非鉄金属製錬'
      note: '三菱マテリアル直島製錬所（都市鉱山リサイクル）'
    - url: '/industry/japan-industrial-zones/setouchi/'
      title: '瀬戸内工業地域'
      note: '坂出・宇多津の臨海工業地'
references:
  - key: stat_jinsui_2024
    text: 総務省統計局「人口推計（2024年10月1日現在）」 https://www.stat.go.jp/data/jinsui/
  - key: gsi_mencho_2024
    text: 国土地理院「全国都道府県市区町村別面積調」 https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html
---

<div class="main-desciption country-description">
    <h2 class="section-title">全域</h2>
    <ul class="rule-list">
        <li>オレンジの●がふたつ描かれた看板がある</li>
    </ul>
    {{% corp "asia/japan" "shikoku/kagawa" %}}
</div>

{{% tabs %}}
{{% tab "２つの●" %}}
{{% notice tip %}}
オレンジの●がふたつ描かれた看板がある。
{{% /notice %}}

<div class="googlemap-if">
<img src="otaki_tunnel_nio.jpg" alt="Kagawa GeoGuessr guide image showing Otaki Tunnel Nio">
</div>

{{% /tab %}}
{{% tab "四国電力" %}}
{{% notice tip %}}
四国電力の電柱プレートが見つかる。太陽光発電などの自家発電システムを連結している場合は『自家発逆潮流有』のラベルが見つかるが、オレンジテープのラベルは四国電力だと思われる。
{{% /notice %}}

<div class="googlemap-if">
<img src="../../pole/pole-shikoku.png" width="420px" alt="Pole GeoGuessr guide image showing Pole Shikoku">
</div>

{{% /tab %}}
{{% /tabs %}}


<div class="container-corp mt-5" id="corp-desc" style="padding-top:50px">
    <h4 class="mb-4">代表的な企業の説明</h4>
    <table class="table table-striped table-bordered">
        <thead class="table-light">
            <tr>
                <th scope="col" class="col-width-2">企業名</th>
                <th scope="col" class="col-width-1">コード</th>
                <th scope="col" class="col-width-7">説明</th>
                <th scope="col" class="col-width-05">決算</th>
                <th scope="col" class="col-width-05">配当履歴</th>
            </tr>
        </thead>
        <tbody class="corp-desc">
            <tr>
                <td>四国化成</td>
                <td>{{% minkabu 4099 %}}</td>
                <td>プリント配線板表面処理薬剤の世界シェア一位。不溶性硫黄など他の材料でも国内トップ。</td>
                <td>{{% corplink "https://www.okiden.co.jp/ir/library/" %}}</td>
                <td>{{% dividend "tokyo" "4099" %}}</td>
            </tr>
        </tbody>
    </table>
</div>