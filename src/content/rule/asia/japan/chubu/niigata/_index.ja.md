---
title: "新潟"
date: 2026-03-08
lastmod: 2026-03-08
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "Niigata.svg"
mapProvider: "osm"
mapPins:
  - { lat: 37.912, lng: 139.062, label: "新潟駅", type: "capital", note: "新潟県の県庁所在地・日本海側最大都市" }
  - { lat: 37.953, lng: 139.060, label: "新潟港", type: "port", note: "佐渡へのフェリー発着地" }
  - { lat: 38.045, lng: 138.367, label: "佐渡島(両津港)", type: "landmark", note: "金山で知られる離島" }
  - { lat: 36.937, lng: 138.852, label: "湯沢", type: "nature", note: "スキーリゾート・温泉地" }
  - { lat: 37.148, lng: 138.249, label: "上越市(高田)", type: "city", note: "桜の名所" }
  - { lat: 37.446, lng: 138.851, label: "長岡", type: "city", note: "長岡花火で有名" }
features:
  - text: '米の産出額は全国1位で、<span class="quiz">コシヒカリ</span>の最大産地'
    ref: "https://ja.wikipedia.org/wiki/新潟県#農業"
  - text: '燕三条地域は<span class="quiz">金属洋食器・刃物</span>の一大産地で、金属洋食器の国内シェア約9割'
    ref: "https://ja.wikipedia.org/wiki/燕市#金属洋食器"
prefInfo:
  population: "約 213 万人"
  populationRank: "全国 15 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "12,584 km²"
  areaRank: "全国 5 位"
  areaCite: "gsi_mencho_2024"
  capital: "新潟市"
  capitalNote: "人口 約 78 万人"
  geography: '本州日本海側の中央部に位置し、面積は全国 5 位。越後平野は信濃川・阿賀野川がつくる広大な穀倉地帯。佐渡島は県西沖の離島で、上越国境には越後山脈・苗場山。冬は日本海側気候で世界有数の豪雪地帯となり、十日町・湯沢・南魚沼の豪雪は新幹線の運休すら引き起こす。気候が南北で大きく異なり、上越（直江津）と下越（村上）では同じ県内とは思えない違いがある。'
  economy: '米の収穫量は全国 1 位で、コシヒカリ（魚沼産が最高ランク）の主産地。日本酒の蔵元数は約 90 と全国最多で、八海山・久保田・〆張鶴など地酒の聖地。日本海側最大の港湾・新潟港を持ち、ロシア極東との貿易の窓口。製造業では金物（燕三条のステンレス洋食器・刃物は世界市場でも有名）、製紙（王子製紙新潟）、非鉄金属（直江津のリチウムイオン電池材料）、電子部品（北越コーポレーション）など多様。柏崎刈羽原発（東京電力管轄）は世界最大級の原発。'
  relatedIndustry:
    - url: '/industry/japan-paper/'
      title: '日本の製紙・パルプ産業'
      note: '新潟・燕の製紙工場'
    - url: '/industry/japan-power/'
      title: '日本の電力会社'
      note: '東北電力／柏崎刈羽原発（東京電力）'
    - url: '/industry/japan-shipping/'
      title: '日本の海運業'
      note: '新潟港（日本海側最大級）'
references:
  - key: stat_jinsui_2024
    text: 総務省統計局「人口推計（2024年10月1日現在）」 https://www.stat.go.jp/data/jinsui/
  - key: gsi_mencho_2024
    text: 国土地理院「全国都道府県市区町村別面積調」 https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html
---

<div class="main-desciption country-description">
    <h2 class="section-title">全域</h2>
    <ul class="rule-list"></ul>
    {{% corp "asia/japan" "chubu/niigata" %}}
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
                <td>コロナ</td>
                <td>{{% minkabu 5909 %}}</td>
                <td>三条市に本社を置く暖房機器メーカー。石油ファンヒーターで国内トップシェア。エコキュートなど給湯器も手がける。<a href="https://ja.wikipedia.org/wiki/コロナ_(暖房器具)" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.corona.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "5909" %}}</td>
            </tr>
            <tr>
                <td>ダイニチ工業</td>
                <td>{{% minkabu 5951 %}}</td>
                <td>新潟市に本社を置く暖房機器メーカー。石油ファンヒーターでコロナと並ぶ国内2強。加湿器でも高シェア。<a href="https://ja.wikipedia.org/wiki/ダイニチ工業" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.dainichi-net.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "5951" %}}</td>
            </tr>
            <tr>
                <td>亀田製菓</td>
                <td>{{% minkabu 2220 %}}</td>
                <td>新潟市に本社を置く米菓メーカー。「亀田の柿の種」「ハッピーターン」で国内米菓シェアトップ。<a href="https://ja.wikipedia.org/wiki/亀田製菓" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.kamedaseika.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "2220" %}}</td>
            </tr>
        </tbody>
    </table>
</div>
