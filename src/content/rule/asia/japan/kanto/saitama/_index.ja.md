---
title: "埼玉"
date: 2026-03-08
lastmod: 2026-03-08
weight: 80
draft: false
keywords: [""]
sections: [""]
is_pref: true
flag: "Saitama.svg"
mapProvider: "osm"
mapPins:
  - { lat: 35.906, lng: 139.624, label: "さいたま新都心", type: "capital", note: "埼玉県の県庁所在地" }
  - { lat: 35.925, lng: 139.485, label: "川越", type: "historical", note: "小江戸・蔵造りの街並み" }
  - { lat: 35.799, lng: 139.469, label: "所沢", type: "city", note: "ベッドタウン" }
  - { lat: 36.071, lng: 139.121, label: "秩父", type: "nature", note: "山岳観光地・秩父神社" }
  - { lat: 36.181, lng: 139.378, label: "熊谷", type: "city", note: "猛暑で有名な内陸都市" }
  - { lat: 35.871, lng: 139.737, label: "草加", type: "city", note: "草加せんべいの産地" }
features:
  - text: '東京のベッドタウンとして人口約730万人を擁し、<span class="quiz">都道府県別人口5位</span>'
    ref: "https://ja.wikipedia.org/wiki/埼玉県#人口"
  - text: '川口市は<span class="quiz">鋳物</span>の街として知られ、江戸時代から続く金属加工産業が集積'
    ref: "https://ja.wikipedia.org/wiki/川口市#工業"
prefInfo:
  population: "約 734 万人"
  populationRank: "全国 5 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "3,798 km²"
  areaRank: "全国 39 位"
  areaCite: "gsi_mencho_2024"
  capital: "さいたま市"
  capitalNote: "人口 約 134 万人"
  geography: '東京都の北側に隣接する関東平野の内陸県。県西部に秩父山地、東部・南部は荒川・利根川流域の平野。海に面しない 8 県の 1 つ。武蔵野台地と荒川低地が県の中央を東西に分け、川越・所沢・春日部などのベッドタウンが東京通勤圏として発達。秩父盆地は山に囲まれた独自の文化圏。'
  economy: '東京都に隣接するため物流・倉庫業の集積が顕著で、圏央道・関越道沿線に巨大物流センターが集中する。本田技研工業の 4 輪関連工場（狭山・寄居・小川）が立地（2 輪生産は熊本に集約済み）。ロッテ浦和工場、味の素・キユーピー埼玉工場など首都圏の食品工業も多い。秩父地域はセメント（武甲山由来の石灰石）の産地で、太平洋セメント熊谷・三菱マテリアル横瀬の拠点がある。深谷ねぎ・狭山茶が農産物の代表。'
  relatedIndustry:
    - url: '/industry/japan-logistics/'
      title: '日本のロジスティクス'
      note: '圏央道沿線（久喜・坂戸・狭山等の物流拠点）'
    - url: '/industry/japan-cement/'
      title: '日本のセメント工業'
      note: '秩父・熊谷（武甲山系石灰石）'
    - url: '/industry/japan-power/'
      title: '日本の電力会社'
      note: '東京電力エリア'
references:
  - key: stat_jinsui_2024
    text: 総務省統計局「人口推計（2024年10月1日現在）」 https://www.stat.go.jp/data/jinsui/
  - key: gsi_mencho_2024
    text: 国土地理院「全国都道府県市区町村別面積調」 https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html
---

<div class="main-desciption country-description">
    <h2 class="section-title">全域</h2>
    <ul class="rule-list">
        <li>消防水利施設のマーキングがオレンジ色の線で示されている</li>
    </ul>
    {{% corp "asia/japan" "kanto/saitama" %}}
</div>

{{% tabs %}}
{{% tab "消防水利マーキング" %}}
{{% notice tip %}}
埼玉の消防水利施設のマーキング方法は他の県と異なり、オレンジ色の線が引かれている{{% ref "https://www.city.ageo.lg.jp/site/shoubou/05612016062701.html" "上尾市 - 消防水利標識の設置" %}}。
{{% /notice %}}

<div class="googlemap-if">
<img src="fire-hydrant-marking.png" alt="Saitama GeoGuessr guide image showing Orange fire hydrant marking on road">
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
                <td>しまむら</td>
                <td>{{% minkabu 8227 %}}</td>
                <td>さいたま市に本社を置く衣料品チェーン。低価格帯の衣料品販売で全国約2,200店舗を展開する業界大手。<a href="https://ja.wikipedia.org/wiki/しまむら" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.shimamura.gr.jp/company/ir/" %}}</td>
                <td>{{% dividend "tokyo" "8227" %}}</td>
            </tr>
            <tr>
                <td>武蔵野銀行</td>
                <td>{{% minkabu 8336 %}}</td>
                <td>さいたま市に本店を置く埼玉県の地方銀行。県内に約100支店を持つ。<a href="https://ja.wikipedia.org/wiki/武蔵野銀行" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.musashinobank.co.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "8336" %}}</td>
            </tr>
            <tr>
                <td>ベルク</td>
                <td>{{% minkabu 9974 %}}</td>
                <td>鶴ヶ島市に本社を置くスーパーマーケットチェーン。埼玉県を地盤に関東で約130店舗を展開。<a href="https://ja.wikipedia.org/wiki/ベルク_(企業)" target="_blank"><sup>[参]</sup></a></td>
                <td>{{% corplink "https://www.belc.jp/ir/" %}}</td>
                <td>{{% dividend "tokyo" "9974" %}}</td>
            </tr>
        </tbody>
    </table>
</div>
