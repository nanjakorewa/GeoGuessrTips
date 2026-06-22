---
title: "静岡"
date: 2023-02-26
lastmod: 2023-07-01
weight: 80
draft: false
keywords: [""]
sections: [""]
no_jetro: true
is_pref: true
prefSymbols:
  - label: "電力会社"
    name: "中部電力／東京電力"
    imgs:
      - src: "/rule/power/chubu.svg"
        alt: "中部電力"
      - src: "/rule/power/tepco.svg"
        alt: "東京電力"
  - label: "ダイヤマーク"
    name: "横断歩道予告"
    bare: true
    group: "diamond-p"
    imgs:
      - src: "/rule/symbols/crosswalk-diamond-p.svg"
        alt: "ダイヤマーク"
  - label: "標識ポール"
    name: "点検シール"
    bare: true
    imgs:
      - src: "/rule/poles/shizuoka.png"
        alt: "標識ポール"
  - label: "擁壁"
    name: "ブロック模様"
    bare: true
    group: "wall-h"
    note: "東京は奥多摩エリアで見られる"
    imgs:
      - src: "/rule/walls/kanagawa_shizuoka_okutama.png"
        alt: "擁壁"
flag: "Shizuoka.svg"
mapProvider: "osm"
mapPins:
  - { lat: 34.976, lng: 138.388, label: "静岡駅", type: "capital", note: "静岡県の県庁所在地" }
  - { lat: 34.710, lng: 137.726, label: "浜松駅", type: "city", note: "県西部の中心・楽器産業" }
  - { lat: 35.361, lng: 138.728, label: "富士山", type: "nature", note: "山梨県との県境" }
  - { lat: 34.998, lng: 138.519, label: "三保の松原", type: "landmark", note: "富士山世界遺産構成資産" }
  - { lat: 34.875, lng: 138.946, label: "伊豆半島", type: "nature", note: "温泉地・観光地" }
  - { lat: 34.975, lng: 138.385, label: "駿府城", type: "historical", note: "徳川家康の隠居城" }
features:
  - text: '<span class="quiz">茶</span>の生産量が全国1位で、牧之原台地を中心に広大な茶畑が広がる'
    ref: "https://ja.wikipedia.org/wiki/静岡県#農業"
  - text: '浜松市は<span class="quiz">楽器</span>（ヤマハ・河合楽器）と<span class="quiz">オートバイ</span>（スズキ・ヤマハ発動機）の一大生産拠点'
    ref: "https://ja.wikipedia.org/wiki/浜松市#工業"
prefInfo:
  population: "約 357 万人"
  populationRank: "全国 10 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "7,777 km²"
  areaRank: "全国 13 位"
  areaCite: "gsi_mencho_2024"
  capital: "静岡市"
  capitalNote: "人口 約 68 万人"
  geography: '東西に長く、富士山・南アルプスを北に、駿河湾・遠州灘を南に擁する。伊豆半島が東部に突き出し、半島南端の下田は黒船来航の地。茶畑・温暖な気候・富士山伏流水が地域文化を形成し、茶畑の整然とした畝（茶ノ木の連なり）は GeoGuessr で目立つランドマーク。沼津・清水・焼津・浜名湖など漁業港・観光地が連なる。'
  economy: '製紙・パルプは富士市が日本最大の紙生産地で、トイレットペーパー・段ボールの大半をこの地域が供給する。自動車・二輪では浜松にスズキ・ヤマハ発動機の本社、ホンダの創業地（楽器も含めるとヤマハ・カワイの本社）。茶（やぶきた）の生産量は鹿児島と全国 1〜2 位を競い、みかん・うなぎ・桜エビ・しらすなど農水産品も豊富。御殿場プレミアム・アウトレット、伊豆半島の温泉観光も大きな経済柱。'
  relatedIndustry:
    - url: '/industry/japan-paper/'
      title: '日本の製紙・パルプ産業'
      note: '富士市（国内最大級の製紙集積）'
    - url: '/industry/japan-tire/'
      title: '日本のタイヤ産業'
      note: 'ブリヂストン横浜タイヤ／関連'
    - url: '/industry/japan-power/'
      title: '日本の電力会社'
      note: '中部電力エリア・浜岡原発'
    - url: '/industry/japan-regional-bank/'
      title: '日本の地方銀行'
      note: '静岡フィナンシャルグループ（静岡銀行）・スルガ銀行・清水銀行'
    - url: '/industry/japan-supermarket/'
      title: '日本のご当地スーパーマーケット'
      note: 'マックスバリュ東海・ヤマト/遠鉄ストア'
    - url: '/industry/japan-restaurant-chains/'
      title: '日本のご当地ファミレス・レストランチェーン'
      note: 'さわやか（県内のみ35店・げんこつハンバーグ）・五味八珍'
municipalities:
  svg: "/maps/prefectures/shizuoka.svg"
  list:
    - { code: "22100", name: "静岡市", type: "city", note: "県庁所在地" }
    - { code: "22130", name: "浜松市", type: "city", note: "政令指定都市" }
    - { code: "22203", name: "沼津市", type: "city" }
    - { code: "22205", name: "熱海市", type: "city" }
    - { code: "22206", name: "三島市", type: "city" }
    - { code: "22207", name: "富士宮市", type: "city" }
    - { code: "22208", name: "伊東市", type: "city" }
    - { code: "22209", name: "島田市", type: "city" }
    - { code: "22210", name: "富士市", type: "city" }
    - { code: "22211", name: "磐田市", type: "city" }
    - { code: "22212", name: "焼津市", type: "city" }
    - { code: "22213", name: "掛川市", type: "city" }
    - { code: "22214", name: "藤枝市", type: "city" }
    - { code: "22215", name: "御殿場市", type: "city" }
    - { code: "22216", name: "袋井市", type: "city" }
    - { code: "22219", name: "下田市", type: "city" }
    - { code: "22220", name: "裾野市", type: "city" }
    - { code: "22221", name: "湖西市", type: "city" }
    - { code: "22222", name: "伊豆市", type: "city" }
    - { code: "22223", name: "御前崎市", type: "city" }
    - { code: "22224", name: "菊川市", type: "city" }
    - { code: "22225", name: "伊豆の国市", type: "city" }
    - { code: "22226", name: "牧之原市", type: "city" }
    - { code: "22301", name: "東伊豆町", type: "town", note: "賀茂郡" }
    - { code: "22302", name: "河津町", type: "town", note: "賀茂郡" }
    - { code: "22304", name: "南伊豆町", type: "town", note: "賀茂郡" }
    - { code: "22305", name: "松崎町", type: "town", note: "賀茂郡" }
    - { code: "22306", name: "西伊豆町", type: "town", note: "賀茂郡" }
    - { code: "22325", name: "函南町", type: "town", note: "田方郡" }
    - { code: "22341", name: "清水町", type: "town", note: "駿東郡" }
    - { code: "22342", name: "長泉町", type: "town", note: "駿東郡" }
    - { code: "22344", name: "小山町", type: "town", note: "駿東郡" }
    - { code: "22424", name: "吉田町", type: "town", note: "榛原郡" }
    - { code: "22429", name: "川根本町", type: "town", note: "榛原郡" }
    - { code: "22461", name: "森町", type: "town", note: "周智郡" }
references:
  - key: stat_jinsui_2024
    text: 総務省統計局「人口推計（2024年10月1日現在）」 https://www.stat.go.jp/data/jinsui/
  - key: gsi_mencho_2024
    text: 国土地理院「全国都道府県市区町村別面積調」 https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html
---

<div class="main-desciption country-description">
    <h2 class="section-title">全域</h2>
    <ul class="rule-list">
      <li>市外局番は054</li>
        <li>お茶の生産が多い</li>
    </ul>
    {{% corp "asia/japan" "chubu/shizuoka" %}}
</div>

{{% tabs %}}
{{% tab "お茶" %}}
{{% notice tip %}}
お茶の生産が多いが、近年は{{% goto "../../kyusyu/kagoshima/" "鹿児島" %}}とほぼ同じ生産量となっている。
{{% /notice %}}

<div class="googlemap-if">
<img src="mount_fuji_20120909_b.jpg" alt="Shizuoka GeoGuessr guide image showing Mount Fuji 20120909 B">
</div>

{{% /tab %}}
{{% tab "中部電力" %}}
{{% notice tip %}}
愛知県、岐阜県、三重県、富士川以西の静岡県、長野県では中部電力の電柱やロゴが見つかる。
{{% /notice %}}

<div class="googlemap-if">
<img src="../../pole/pole-chubu.png" width="220px" alt="Pole GeoGuessr guide image showing Pole Chubu">
</div>

{{% /tab %}}
{{% /tabs %}}

<div class="main-desciption country-description">
    <h2 class="section-title">都市・町の絞り込み</h2>
    <ul class="rule-list">
        <li>富士市・富士宮市は<span class="quiz">製紙</span>の街で、工場の煙突越しに富士山が見える</li>
        <li>浜松市はヤマハ・カワイなど<span class="quiz">楽器</span>とオートバイ産業の街</li>
        <li>牧之原・島田など県中部には広大な<span class="quiz">茶畑</span>が広がる</li>
        <li>静岡市は徳川家ゆかりの<span class="quiz">駿府城</span>がある県都</li>
        <li>熱海市は海に面した斜面にホテルが立ち並ぶ温泉リゾート</li>
    </ul>
</div>

{{% tabs %}}
{{% tab "富士" %}}
{{% notice tip %}}
<span class="quiz">富士市・富士宮市</span>は富士山の伏流水を生かした製紙・パルプの一大産地で、製紙工場の煙突と富士山が同時に見える景観が特徴{{% ref "https://ja.wikipedia.org/wiki/%E5%AF%8C%E5%A3%AB%E5%B8%82" "富士市" %}}。
{{% /notice %}}

{{% photo-placeholder "富士・製紙工場と富士山" %}}
{{% /tab %}}
{{% tab "浜松" %}}
{{% notice tip %}}
<span class="quiz">浜松市</span>はヤマハ・河合楽器・ローランドなど楽器メーカーが集まる「音楽の街」で、スズキ・ホンダゆかりのオートバイ産業の街でもある{{% ref "https://ja.wikipedia.org/wiki/%E6%B5%9C%E6%9D%BE%E5%B8%82" "浜松市" %}}。
{{% /notice %}}

{{% photo-placeholder "浜松・楽器とオートバイの街" %}}
{{% /tab %}}
{{% tab "茶畑" %}}
{{% notice tip %}}
<span class="quiz">牧之原台地</span>を中心に、島田・菊川・掛川など県中部には日本有数の広大な茶園が広がる{{% ref "https://ja.wikipedia.org/wiki/%E7%89%A7%E4%B9%8B%E5%8E%9F%E5%8F%B0%E5%9C%B0" "牧之原台地" %}}。
{{% /notice %}}

{{% photo-placeholder "牧之原・広がる茶畑" %}}
{{% /tab %}}
{{% tab "駿府城" %}}
{{% notice tip %}}
<span class="quiz">静岡市</span>は徳川家康が晩年を過ごした駿府城の城下町として発展した県都{{% ref "https://ja.wikipedia.org/wiki/%E9%A7%BF%E5%BA%9C%E5%9F%8E" "駿府城" %}}。
{{% /notice %}}

{{% photo-placeholder "静岡・駿府城" %}}
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
                <td>ヤマハ</td>
                <td>{{% minkabu 7951 %}}</td>
                <td>楽器事業ではピアノ生産量で世界シェア1位。スポーツ用品、自動車部品、半導体部品なども手掛ける。二輪部門は独立しヤマハ発動機となった。</td>
                <td>{{% corplink "https://www.yamaha.com/ja/ir/" %}}</td>
                <td>{{% dividend "tokyo" "7951" %}}</td>
            </tr>
            <tr>
                <td>ヤマハ発動機</td>
                <td>{{% minkabu 7272 %}}</td>
                <td>船外機やウォータービークルの販売台数で世界1位。二輪では世界４位のシェア。</td>
                <td>{{% corplink "https://global.yamaha-motor.com/jp/ir/library/" %}}</td>
                <td>{{% dividend "tokyo" "7272" %}}</td>
            </tr>
        </tbody>
    </table>
</div>