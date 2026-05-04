---
title: "福岡"
date: 2023-02-26
lastmod: 2023-07-01
weight: 80
draft: false
keywords: [""]
sections: [""]
no_jetro: true
is_pref: true
flag: "Fukuoka.svg"
mapProvider: "osm"
mapPins:
  - { lat: 33.590, lng: 130.421, label: "博多駅", type: "capital", note: "福岡県の県庁所在地・九州最大都市" }
  - { lat: 33.589, lng: 130.398, label: "天神", type: "city", note: "福岡の繁華街" }
  - { lat: 33.876, lng: 130.882, label: "北九州(小倉)", type: "city", note: "工業都市・関門海峡" }
  - { lat: 33.518, lng: 130.535, label: "太宰府天満宮", type: "historical", note: "学問の神様" }
  - { lat: 33.585, lng: 130.450, label: "福岡空港", type: "landmark", note: "市街地に近い空港" }
  - { lat: 33.165, lng: 130.408, label: "柳川", type: "city", note: "水郷の街" }
features:
  - text: '九州最大の都市・福岡市を擁し、<span class="quiz">博多</span>は古くからアジアとの交易拠点'
    ref: "https://ja.wikipedia.org/wiki/福岡市"
  - text: '北九州市は<span class="quiz">官営八幡製鉄所</span>に始まる鉄鋼業発祥の地で、北九州工業地帯の中核'
    ref: "https://ja.wikipedia.org/wiki/官営八幡製鉄所"
prefInfo:
  population: "約 511 万人"
  populationRank: "全国 9 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "4,987 km²"
  areaRank: "全国 29 位"
  areaCite: "gsi_mencho_2024"
  capital: "福岡市"
  capitalNote: "人口 約 164 万人"
  geography: '九州の北部に位置し、玄界灘・響灘・周防灘に面する。県西は福岡平野、県東は北九州地域、県南は筑後平野。関門海峡を挟んで山口県と接続。県北部の玄界灘は対馬海流の通り道で漁業が盛ん、県南の筑後川は九州最大の河川。博多港・北九州港・苅田港は九州の物流玄関口。'
  economy: '九州最大の経済圏。北九州は日本製鉄八幡（明治以来の重工業集積で官営八幡製鉄所が日本近代化の起点）・トヨタ自動車九州（宮田工場で高級車レクサス生産、苅田はエンジン・トランスミッション）・日産自動車九州・苅田の太平洋セメント／三菱マテリアル黒崎セメントなど。福岡市は商業・サービス・IT のハブで、半導体関連企業も TSMC 熊本進出を背景に増加。明太子・もつ鍋・博多ラーメン・八女茶・あまおうイチゴなど食文化も独自で、九州の文化・経済・物流の中心。'
  relatedIndustry:
    - url: '/industry/japan-semiconductor/'
      title: '日本の半導体産業集積地'
      note: '北部九州の半導体集積（TSMC 熊本連動）'
    - url: '/industry/japan-semiconductor/kyushu/'
      title: '九州半導体クラスター'
      note: '九州一円の半導体クラスター（福岡が窓口）'
    - url: '/industry/japan-cement/'
      title: '日本のセメント工業'
      note: '苅田の太平洋セメント・三菱マテリアル'
    - url: '/industry/japan-shipping/'
      title: '日本の海運業'
      note: '博多港・北九州港'
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
    {{% corp "asia/japan" "kyusyu/fukuoka" %}}
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
                <td>ブリヂストン</td>
                <td>{{% minkabu 5108 %}}</td>
                <td>自動車用タイヤ業界で{{% goto "../../../../europe/france/" "フランス" %}}のミシュランに次ぐ２位であり１位をうかがう。戦前に福岡県久留米市で創業し現在も工場がある。日本国内での売上は1/4程度であり海外がメインの企業{{% ref "https://www.bridgestone.co.jp/corporate/library/data_book/" "BRIDGESTONE DATA 2025" %}}。</td>
                <td>{{% corplink "https://www.bridgestone.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "5108" %}}</td>
            </tr>
            <tr>
                <td>TOTO</td>
                <td>{{% minkabu 5332 %}}</td>
                <td>衛生陶器メーカー大手。『同業のINAXを逆にすると「TOTO X ANI」となり、兄弟であることを示した社名』という噂がまことしやかに囁かれていた時期があった。ヨーロッパでは売上がすくないものの、中国・北米向けは売上があり海外の売上高構成比率は20％程度ある。衛生陶器に限定すればLIXILに続く世界シェア３位。ボンディング・キャピラリーなど半導体関連の部品も製造する。</td>
                <td>{{% corplink "https://jp.toto.com/company/ir/" %}}</td>
                <td>{{% dividend "tokyo" "5332" %}}</td>
            </tr>
        </tbody>
    </table>
</div>