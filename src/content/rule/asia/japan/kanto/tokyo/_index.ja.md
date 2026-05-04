---
title: "東京"
date: 2026-03-08
lastmod: 2026-03-08
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "Tokyo.svg"
mapProvider: "osm"
mapPins:
  - { lat: 35.682, lng: 139.766, label: "東京駅", type: "capital", note: "日本の首都・玄関口" }
  - { lat: 35.689, lng: 139.692, label: "新宿駅", type: "city", note: "都庁所在地・西の中心" }
  - { lat: 35.658, lng: 139.745, label: "東京タワー", type: "landmark", note: "高さ333m・東京のシンボル" }
  - { lat: 35.710, lng: 139.811, label: "東京スカイツリー", type: "landmark", note: "高さ634m・電波塔" }
  - { lat: 35.715, lng: 139.797, label: "浅草寺", type: "historical", note: "都内最古の寺・観光名所" }
  - { lat: 35.762, lng: 139.731, label: "池袋駅", type: "city", note: "副都心・サンシャイン" }
  - { lat: 34.069, lng: 139.527, label: "伊豆諸島(大島)", type: "nature", note: "東京都管轄の島嶼部" }
features:
  - text: '日本の首都で人口約1,400万人。日本企業の本社が最も集中する<span class="quiz">経済の中心地</span>'
    ref: "https://ja.wikipedia.org/wiki/東京都"
prefInfo:
  population: "約 1,406 万人"
  populationRank: "全国 1 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "2,200 km²"
  areaRank: "全国 45 位"
  areaCite: "gsi_mencho_2024"
  capital: "新宿区(都庁)"
  capitalNote: "人口（都全域）約 1,406 万人"
  geography: '日本の首都。区部・多摩地域・伊豆諸島・小笠原諸島から成り、面積は全国 45 位と狭いが、人口は約 1,406 万人で全国 1 位。23 区は江戸城（皇居）を中心に放射状に発展した世界有数の人口密集地で、多摩地域は丘陵と山地、伊豆諸島は火山島群、小笠原諸島はユネスコ世界自然遺産で本土から 1,000km 離れた亜熱帯。'
  economy: '日本最大の経済圏で、上場企業の本社の半数以上、外資系企業の大半が集中する。総合商社（三菱商事・三井物産・伊藤忠・住友・丸紅）、メガバンク（三菱 UFJ・三井住友・みずほ）、海運大手（日本郵船・商船三井・川崎汽船）、大手電機（日立・東芝・ソニー）、自動車（ホンダ）の本社が東京にあり、グローバル企業の意思決定機能が集積する。羽田空港は国際線・国内線のハブで、東京港はコンテナ取扱量で全国上位。23 区は商業・サービス業中心で工業集積は低いが、大田区は中小製造業（金属加工・精密機械）の世界的な集積地。'
  relatedIndustry:
    - url: '/industry/japan-trading-company/'
      title: '日本の商社'
      note: '5 大商社（三菱・三井・伊藤忠・住友・丸紅）の本社所在地'
    - url: '/industry/japan-shipping/'
      title: '日本の海運業'
      note: '日本郵船・商船三井・川崎汽船の本社'
    - url: '/industry/japan-logistics/'
      title: '日本のロジスティクス'
      note: '首都圏物流の中枢'
    - url: '/industry/japan-jr/'
      title: '日本のJR各社'
      note: 'JR 東日本・JR 東海・JR 貨物の本社'
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
    {{% corp "asia/japan" "kanto/tokyo" %}}
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
                <td>トヨタ自動車</td>
                <td>{{% minkabu 7203 %}}</td>
                <td>日本最大の自動車メーカー。本社は愛知県だが、東京本社を文京区に置く。世界販売台数で首位級。<a href="https://ja.wikipedia.org/wiki/トヨタ自動車" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://global.toyota/jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "7203" %}}</td>
            </tr>
            <tr>
                <td>三菱重工業</td>
                <td>{{% minkabu 7011 %}}</td>
                <td>発電プラント・航空機・造船・防衛機器など重工業の総合メーカー。丸の内に本社を置く。<a href="https://ja.wikipedia.org/wiki/三菱重工業" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.mhi.com/jp/finance" %}}</td>
                <td>{{% dividend "tokyo" "7011" %}}</td>
            </tr>
            <tr>
                <td>キッコーマン</td>
                <td>{{% minkabu 2801 %}}</td>
                <td>醤油で世界シェアトップ。本社は千葉県野田市だが東京にも拠点を持つ。海外売上比率が7割を超えるグローバル食品企業。<a href="https://ja.wikipedia.org/wiki/キッコーマン" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.kikkoman.com/jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "2801" %}}</td>
            </tr>
        </tbody>
    </table>
</div>
