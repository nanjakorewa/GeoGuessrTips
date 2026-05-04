---
title: "京都"
date: 2026-03-08
lastmod: 2026-03-08
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "Kyoto.svg"
mapProvider: "osm"
mapPins:
  - { lat: 35.012, lng: 135.768, label: "京都駅", type: "capital", note: "京都府の府庁所在地・古都" }
  - { lat: 35.039, lng: 135.729, label: "金閣寺", type: "historical", note: "鹿苑寺・世界遺産" }
  - { lat: 34.995, lng: 135.785, label: "清水寺", type: "historical", note: "舞台造り・世界遺産" }
  - { lat: 34.967, lng: 135.778, label: "伏見稲荷大社", type: "historical", note: "千本鳥居" }
  - { lat: 35.017, lng: 135.677, label: "嵐山", type: "nature", note: "渡月橋・竹林の道" }
  - { lat: 35.572, lng: 135.193, label: "天橋立", type: "landmark", note: "日本三景の一つ" }
features:
  - text: '伝統工芸と先端産業が共存し、<span class="quiz">西陣織・京友禅・清水焼</span>などの伝統産業が今も盛ん'
    ref: "https://ja.wikipedia.org/wiki/京都府#伝統産業"
  - text: '京都南部は<span class="quiz">精密機器・電子部品</span>メーカーが集積する「京都モデル」の産業クラスター'
    ref: "https://ja.wikipedia.org/wiki/京都府#工業"
prefInfo:
  population: "約 254 万人"
  populationRank: "全国 13 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "4,612 km²"
  areaRank: "全国 31 位"
  areaCite: "gsi_mencho_2024"
  capital: "京都市"
  capitalNote: "人口 約 144 万人"
  geography: '南北に長く、北は日本海（丹後半島・天橋立）、南は山城盆地（京都市）。東に比叡山、西に丹波山地、中央に保津川・桂川。丹後・丹波・山城の三地方は気候も文化もまったく異なり、丹後は冬は日本海側で豪雪、山城は内陸性気候で京都盆地特有の蒸し暑い夏。天橋立は日本三景の 1 つ。'
  economy: '京都市内には任天堂・京セラ・村田製作所・島津製作所・オムロン・日本電産（ニデック）など世界的なグローバル企業の本社が集中する珍しい地域で、同族・創業者経営の独立独歩な企業文化が特徴。京焼・清水焼・西陣織・京友禅などの伝統工芸が今も観光と地場産業を支える。日本酒は伏見が灘と並ぶ大産地（月桂冠・黄桜・松本酒造）。観光業は京都市の最大産業で、清水寺・金閣寺・伏見稲荷大社などにインバウンド需要が集中。'
  relatedIndustry:
    - url: '/industry/japan-pottery/'
      title: '日本の焼き物産地'
      note: '京焼・清水焼'
    - url: '/industry/japan-fiber/'
      title: '日本の合成繊維・炭素繊維産業'
      note: '西陣織・友禅染'
    - url: '/industry/japan-trading-company/'
      title: '日本の商社'
      note: '京都の独自企業群（任天堂・京セラ・村田製作所等）'
references:
  - key: stat_jinsui_2024
    text: 総務省統計局「人口推計（2024年10月1日現在）」 https://www.stat.go.jp/data/jinsui/
  - key: gsi_mencho_2024
    text: 国土地理院「全国都道府県市区町村別面積調」 https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html
---

<div class="main-desciption country-description">
    <h2 class="section-title">全域</h2>
    <ul class="rule-list">
    </ul>
    {{% corp "asia/japan" "kinki/kyoto" %}}
</div>

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
                <td>京セラ</td>
                <td>{{% minkabu 6971 %}}</td>
                <td>京都市に本社を置くセラミック部品・電子部品メーカー。ファインセラミックス技術で世界トップ。太陽光パネル・通信機器も手がける。<a href="https://ja.wikipedia.org/wiki/京セラ" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.kyocera.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "6971" %}}</td>
            </tr>
            <tr>
                <td>村田製作所</td>
                <td>{{% minkabu 6981 %}}</td>
                <td>長岡京市に本社を置く電子部品メーカー。積層セラミックコンデンサ（MLCC）で世界シェア約40%のトップ企業。<a href="https://ja.wikipedia.org/wiki/村田製作所" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.murata.com/ja-jp/ir" %}}</td>
                <td>{{% dividend "tokyo" "6981" %}}</td>
            </tr>
            <tr>
                <td>島津製作所</td>
                <td>{{% minkabu 7701 %}}</td>
                <td>京都市に本社を置く精密機器メーカー。分析計測機器・医療機器で世界的に知られる。ノーベル化学賞受賞の田中耕一氏が在籍。<a href="https://ja.wikipedia.org/wiki/島津製作所" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.shimadzu.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "7701" %}}</td>
            </tr>
            <tr>
                <td>任天堂</td>
                <td>{{% minkabu 7974 %}}</td>
                <td>京都市に本社を置く世界的ゲーム企業。花札・トランプの製造から始まり、ファミコン以来のゲーム機で世界を席巻。<a href="https://ja.wikipedia.org/wiki/任天堂" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.nintendo.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "7974" %}}</td>
            </tr>
        </tbody>
    </table>
</div>
