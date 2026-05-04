---
title: "福島"
date: 2026-03-08
lastmod: 2026-03-08
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "Fukushima.svg"
mapProvider: "osm"
mapPins:
  - { lat: 37.754, lng: 140.459, label: "福島駅", type: "capital", note: "福島県の県庁所在地" }
  - { lat: 37.494, lng: 139.929, label: "郡山", type: "city", note: "県中央の交通要衝" }
  - { lat: 37.050, lng: 140.887, label: "いわき", type: "city", note: "浜通りの中心都市" }
  - { lat: 37.495, lng: 139.930, label: "会津若松", type: "historical", note: "鶴ヶ城・会津漆器" }
  - { lat: 37.500, lng: 140.107, label: "猪苗代湖", type: "nature", note: "日本第4位の湖" }
  - { lat: 37.640, lng: 140.075, label: "磐梯山", type: "nature", note: "会津の名峰" }
features:
  - text: '会津地方は<span class="quiz">漆器・酒造</span>が盛んで、会津塗は400年以上の歴史を持つ伝統工芸'
    ref: "https://ja.wikipedia.org/wiki/会津塗"
  - text: 'いわき市周辺は<span class="quiz">化学・製造業</span>の工場が集積する工業地帯'
    ref: "https://ja.wikipedia.org/wiki/福島県#工業"
prefInfo:
  population: "約 179 万人"
  populationRank: "全国 21 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "13,784 km²"
  areaRank: "全国 3 位"
  areaCite: "gsi_mencho_2024"
  capital: "福島市"
  capitalNote: "人口 約 28 万人"
  geography: '東北 6 県で唯一首都圏に隣接する東北最南端で、面積は全国 3 位。県西部は会津地方、中央部は中通り、東部の沿岸が浜通りで、それぞれ気候・文化が異なる。磐梯山・猪苗代湖が中通りと会津の境にあり、奥会津には只見川流域の豪雪山村。会津若松は戊辰戦争の舞台で、白河は江戸の北の関所として歴史を持つ。'
  economy: '米・桃・なし・きゅうりなど農業県で、桃は全国 2 位、きゅうり生産も上位。浜通りには福島第一原発・第二原発があり、廃炉作業が長期にわたって進行中。浪江町・南相馬の福島ロボットテストフィールド、FH2R（福島水素エネルギー研究フィールド）など新エネルギーの研究拠点が集積。郡山・福島市・いわき市には電子部品・精密機械・化学工業の集積がある。会津地方は漆器（会津塗）・酒造りの伝統。'
  relatedIndustry:
    - url: '/industry/japan-hydrogen-ammonia/'
      title: '日本の水素・アンモニア拠点'
      note: '浪江 FH2R（福島水素エネルギー研究フィールド）'
    - url: '/industry/japan-power/'
      title: '日本の電力会社'
      note: '東京電力管内・福島第一/第二原発（廃炉中）'
    - url: '/industry/japan-semiconductor/'
      title: '日本の半導体産業集積地'
      note: '郡山・白河の電子部品工場'
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
    {{% corp "asia/japan" "tohoku/fukushima" %}}
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
                <td>クレハ</td>
                <td>{{% minkabu 4023 %}}</td>
                <td>いわき市に本社工場を置く化学メーカー。家庭用ラップ「クレラップ」で知られるほか、リチウムイオン電池用バインダー（PVDF）で世界トップシェア。<a href="https://ja.wikipedia.org/wiki/クレハ" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.kureha.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "4023" %}}</td>
            </tr>
            <tr>
                <td>東邦銀行</td>
                <td>{{% minkabu 8346 %}}</td>
                <td>福島市に本店を置く福島県最大の地方銀行。県内預金シェアトップ。<a href="https://ja.wikipedia.org/wiki/東邦銀行" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.tohobank.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "8346" %}}</td>
            </tr>
            <tr>
                <td>常磐興産</td>
                <td>{{% minkabu 9675 %}}</td>
                <td>いわき市の常磐炭鉱を起源とする企業。閉山後にレジャー施設「スパリゾートハワイアンズ」を開業し、観光業に転換。<a href="https://ja.wikipedia.org/wiki/常磐興産" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.joban-kosan.com/ir/" %}}</td>
                <td>{{% dividend "tokyo" "9675" %}}</td>
            </tr>
        </tbody>
    </table>
</div>
