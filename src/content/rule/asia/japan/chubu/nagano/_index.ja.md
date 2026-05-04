---
title: "長野"
date: 2026-03-08
lastmod: 2026-03-08
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "Nagano.svg"
mapProvider: "osm"
mapPins:
  - { lat: 36.648, lng: 138.188, label: "長野駅", type: "capital", note: "長野県の県庁所在地" }
  - { lat: 36.661, lng: 138.187, label: "善光寺", type: "historical", note: "信州の名刹" }
  - { lat: 36.238, lng: 137.972, label: "松本城", type: "historical", note: "国宝・現存天守" }
  - { lat: 36.350, lng: 138.585, label: "軽井沢", type: "city", note: "高原リゾート" }
  - { lat: 36.250, lng: 137.756, label: "上高地", type: "nature", note: "北アルプスの景勝地" }
  - { lat: 36.043, lng: 138.087, label: "諏訪湖", type: "nature", note: "諏訪大社・花火大会" }
features:
  - text: '諏訪湖周辺は「<span class="quiz">東洋のスイス</span>」と呼ばれ、精密機器・時計産業が集積'
    ref: "https://ja.wikipedia.org/wiki/諏訪地域#精密機器産業"
  - text: '<span class="quiz">味噌</span>の生産量は全国1位で、信州味噌は全国シェア約5割'
    ref: "https://ja.wikipedia.org/wiki/信州味噌"
prefInfo:
  population: "約 202 万人"
  populationRank: "全国 16 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "13,562 km²"
  areaRank: "全国 4 位"
  areaCite: "gsi_mencho_2024"
  capital: "長野市"
  capitalNote: "人口 約 37 万人"
  geography: '8 県と接する内陸県（接県数日本一）。北アルプス・中央アルプス・南アルプスの 3 つの 3,000m 級山岳が県を縦断し、日本で最も標高が高い県庁所在地（長野市）の 1 つ。諏訪湖・松本盆地・佐久盆地・伊那谷など盆地が複数あり、それぞれ独自の気候・文化を形成。冬は内陸性気候で寒さが厳しく、軽井沢・志賀高原などスキーリゾートも多い。'
  economy: '精密機械（時計・カメラ）の伝統から、現在は半導体製造装置・電子部品の集積（諏訪・岡谷）が県を代表する産業。エプソン（諏訪本社）・ミネベアミツミ・キッセイ薬品など。高原野菜（レタス・白菜・キャベツ）の生産は全国 1 位を多く占め、南信のリンゴ・ぶどうも有名。観光業も大きく、軽井沢・上高地・信州そば・松本城・善光寺などインバウンド需要も拡大。長野駅と松本駅は北陸新幹線・中央本線・篠ノ井線の結節点。'
  relatedIndustry:
    - url: '/industry/japan-semiconductor/'
      title: '日本の半導体産業集積地'
      note: '諏訪・岡谷の精密機械・半導体製造装置'
    - url: '/industry/japan-power/'
      title: '日本の電力会社'
      note: '中部電力エリア・水力発電'
references:
  - key: stat_jinsui_2024
    text: 総務省統計局「人口推計（2024年10月1日現在）」 https://www.stat.go.jp/data/jinsui/
  - key: gsi_mencho_2024
    text: 国土地理院「全国都道府県市区町村別面積調」 https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html
---

<div class="main-desciption country-description">
    <h2 class="section-title">全域</h2>
    <ul class="rule-list">
        <li>横断歩道前のダイヤマーク標示が他県と異なる形状をしている</li>
    </ul>
    {{% corp "asia/japan" "chubu/nagano" %}}
</div>

{{% tabs %}}
{{% tab "ダイヤマーク標示" %}}
{{% notice tip %}}
この横断歩道前ダイヤマーク標示を使用するのは長野県の他に<a href="../aichi/">愛知県</a>・<a href="../../chugoku/yamaguchi/">山口県</a>・<a href="../../kyusyu/kagoshima/">鹿児島県</a>である。
{{% /notice %}}

<div class="googlemap-if">
<img src="diamond-marking.svg" width="120px" alt="Nagano GeoGuessr guide image showing Diamond crosswalk marking">
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
                <td>セイコーエプソン</td>
                <td>{{% minkabu 6724 %}}</td>
                <td>諏訪市に本社を置くプリンター・プロジェクターの大手メーカー。諏訪の時計製造技術を起源とし、インクジェットプリンターで世界トップクラス。<a href="https://ja.wikipedia.org/wiki/セイコーエプソン" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://corporate.epson/ja/ir/" %}}</td>
                <td>{{% dividend "tokyo" "6724" %}}</td>
            </tr>
            <tr>
                <td>新光電気工業</td>
                <td>{{% minkabu 6967 %}}</td>
                <td>長野市に本社を置く半導体パッケージ基板メーカー。富士通グループ。フリップチップ型パッケージで高いシェアを持つ。<a href="https://ja.wikipedia.org/wiki/新光電気工業" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.shinko.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "6967" %}}</td>
            </tr>
            <tr>
                <td>マルコメ</td>
                <td>非上場</td>
                <td>長野市に本社を置く味噌メーカー。信州味噌の最大手で、「マルコメ君」のCMで全国的に知られる。<a href="https://ja.wikipedia.org/wiki/マルコメ" target="_blank"><sup>[参]</sup></a></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
</div>
