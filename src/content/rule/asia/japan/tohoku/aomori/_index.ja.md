---
title: "青森"
date: 2023-02-26
lastmod: 2023-07-01
weight: 80
draft: false
keywords: [""]
sections: [""]
no_jetro: true
is_pref: true
flag: "Aomori.svg"
mapProvider: "osm"
mapPins:
  - { lat: 40.829, lng: 140.741, label: "青森駅", type: "capital", note: "青森県の県庁所在地" }
  - { lat: 40.521, lng: 141.488, label: "八戸駅", type: "city", note: "県南の中心・港町" }
  - { lat: 40.607, lng: 140.464, label: "弘前駅", type: "city", note: "弘前城・桜の名所" }
  - { lat: 41.236, lng: 140.348, label: "大間崎", type: "landmark", note: "本州最北端・マグロの街" }
  - { lat: 40.652, lng: 140.882, label: "八甲田山", type: "nature", note: "火山群・スキーリゾート" }
  - { lat: 40.464, lng: 140.882, label: "十和田湖", type: "nature", note: "カルデラ湖・景勝地" }
features:
  - text: '<span class="quiz">りんご</span>の生産量は全国1位で、全国の約6割を占める'
    ref: "https://ja.wikipedia.org/wiki/青森県#農業"
  - text: '本州最北端に位置し、<span class="quiz">津軽海峡</span>を挟んで北海道と向かい合う'
    ref: "https://ja.wikipedia.org/wiki/青森県"
prefInfo:
  population: "約 121 万人"
  populationRank: "全国 31 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "9,646 km²"
  areaRank: "全国 8 位"
  areaCite: "gsi_mencho_2024"
  capital: "青森市"
  capitalNote: "人口 約 27 万人"
  geography: '本州最北端、津軽海峡を挟んで北海道と向かい合う。陸奥湾・八甲田山・白神山地・十和田湖など自然景観が豊か。白神山地（青森・秋田）はユネスコ世界自然遺産。冬は日本海側で豪雪、太平洋側ではやませ（冷害をもたらす偏東風）が吹き、米作の年次変動が大きい。県南東部の太平洋沿岸（八戸・三沢）は比較的雪が少なく、本州他県とは異なる気候帯を形成。'
  economy: 'りんごの生産量は全国 1 位で全国の約 6 割を占め、にんにく・長いも・ホタテ貝でも全国 1 位。むつ小川原（六ヶ所村）に国家石油備蓄基地と日本原燃の原子燃料サイクル施設（再処理工場・濃縮ウラン）があり、エネルギー関連の重要拠点。下北半島の大間原発・東通原発も立地。八戸港は鉄鋼・飼料・水産を扱う工業港で、三菱製紙八戸工場が立地。津軽地方には伝統工芸の津軽塗・こぎん刺し。'
  relatedIndustry:
    - url: '/industry/japan-stockpile/'
      title: '日本の石油・LPガス備蓄基地'
      note: 'むつ小川原（六ヶ所村）国家石油備蓄基地'
    - url: '/industry/japan-mineral-stockpile/'
      title: '日本のレアメタル備蓄制度'
      note: '六ヶ所国家石油・レアメタル備蓄'
    - url: '/industry/japan-power/'
      title: '日本の電力会社'
      note: '東北電力エリア・原子燃料サイクル施設'
    - url: '/industry/japan-paper/'
      title: '日本の製紙・パルプ産業'
      note: '三菱製紙八戸工場'
    - url: '/industry/world-agriculture/'
      title: '世界の農産物・穀物トレード'
      note: 'りんご輸出（台湾・香港向け）'
references:
  - key: stat_jinsui_2024
    text: 総務省統計局「人口推計（2024年10月1日現在）」 https://www.stat.go.jp/data/jinsui/
  - key: gsi_mencho_2024
    text: 国土地理院「全国都道府県市区町村別面積調」 https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html
---

<div class="main-desciption country-description">
    <h2 class="section-title">全域</h2>
    <ul class="rule-list">
        <li>りんごを模ったオブジェや看板が多い</li>
    </ul>
    {{% corp "asia/japan" "tohoku/aomori" %}}
</div>



{{% tabs %}}
{{% tab "りんご" %}}
{{% notice tip %}}
りんごの生産量日本一。果樹園＋雪国特有の屋根の傾斜がある場合は青森周辺の可能性が高まる。りんごが描かれた看板なども多い{{% ex "https://maps.app.goo.gl/vMiAWejHHfSrVuKX6" %}}。
{{% /notice %}}

<div class="googlemap-if unclickable">
<img src="aomori-apple.jpg" width="80%">
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
                <td>むつ小川原石油備蓄</td>
                <td>{{% minkabu 5020 %}}</td>
                <td>ENEOSのグループ会社。日本の石油需要の10日分以上を備蓄している。独立行政法人石油天然ガス・金属鉱物資源機構が保有し運営を受託する形を取っている。</td>
                <td>{{% corplink "https://www.torishima.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "5020" %}}</td>
            </tr>
            <tr>
                <td>日本原燃</td>
                <td>-</td>
                <td>原子燃料サイクル・濃縮ウラン製造など、原発関連事業を行う。非上場。</td>
                <td>-</td>
                <td>-</td>
            </tr>
            <tr>
                <td>プライフーズ</td>
                <td>-</td>
                <td>三井物産系列の食肉加工業者{{% ref "https://www.maff.go.jp/tohoku/stinfo/bunseki/attach/pdf/maffnabi-21.pdf" "家畜の飼養頭羽数と東北のシェア - 農林水産省" %}}。</td>
                <td>-</td>
                <td>-</td>
            </tr>
        </tbody>
    </table>
</div>