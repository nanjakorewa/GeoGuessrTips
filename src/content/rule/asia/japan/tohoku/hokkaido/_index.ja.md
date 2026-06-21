---
title: "北海道"
date: 2023-02-26
lastmod: 2023-07-01
weight: 20
draft: false
keywords: [""]
sections: [""]
is_pref: true
bg: "bg/Flag_of_Hokkaido_Prefecture.png"
flag: "Flag_of_Hokkaido_Prefecture.png"
no_jetro: true
mapProvider: "osm"
mapPins:
  - { lat: 43.069, lng: 141.351, label: "札幌駅", type: "capital", note: "北海道の道庁所在地・最大都市" }
  - { lat: 41.774, lng: 140.727, label: "函館駅", type: "city", note: "道南の港町・夜景の名所" }
  - { lat: 43.770, lng: 142.365, label: "旭川駅", type: "city", note: "道北の中心都市・旭山動物園" }
  - { lat: 42.985, lng: 144.381, label: "釧路駅", type: "city", note: "道東の港町・釧路湿原" }
  - { lat: 43.193, lng: 140.985, label: "小樽駅", type: "city", note: "歴史ある港町・運河" }
  - { lat: 43.665, lng: 142.806, label: "大雪山", type: "nature", note: "北海道最高峰・国立公園" }
  - { lat: 45.520, lng: 141.937, label: "稚内", type: "city", note: "日本最北端の街" }
features:
  - text: '日本最大の面積を持つ都道府県で、<span class="quiz">酪農</span>と農業が盛ん。生乳生産量は全国の約半分を占める'
    ref: "https://ja.wikipedia.org/wiki/北海道#農業"
  - text: '冬季は豪雪地帯となり、道路には<span class="quiz">矢羽根付きポール</span>（固定式視線誘導柱）が多く設置されている'
    ref: "https://ja.wikipedia.org/wiki/固定式視線誘導柱"
# 県を象徴するアイコン（ヒーロー直下の横並び帯）。電力会社・横断歩道標識・
# 標識ポール模様など、その県を一目で見分けられる要素を並べる。
prefSymbols:
  - label: "電力会社"
    name: "北海道電力"
    imgs:
      - src: "/rule/power/hokkaido.jpg"
        alt: "北海道電力"
  - label: "ダイヤマーク"
    name: "横断歩道予告（路面標示）"
    bare: true
    group: "diamond"
    imgs:
      - src: "/rule/symbols/crosswalk-diamond.svg"
        alt: "ダイヤマーク"
prefInfo:
  population: "約 510 万人"
  populationRank: "全国 8 位 / 47 都道府県"
  populationCite: "stat_jinsui_2024"
  area: "78,421 km²"
  areaRank: "全国 1 位"
  areaCite: "gsi_mencho_2024"
  capital: "札幌市"
  capitalNote: "人口 約 195 万人"
  geography: '日本最北の都道府県で、本州とは津軽海峡で隔てられる。面積は全国の約 22% を占め、知床・大雪山・阿寒摩周・釧路湿原・利尻礼文サロベツ・支笏洞爺の 6 つの国立公園を擁する。冬は本州とは比較にならない豪雪・低温に見舞われ、矢羽根付きポール（固定式視線誘導柱）が街道沿いに多く設置される。広大な土地のため農地は碁盤目状の大区画で整備され、防風林（カラマツや落葉樹）に囲まれた農場景観が GeoGuessr の判別ヒントになる。'
  economy: '全国の生乳生産量の約 5 割、小麦・じゃがいも・玉ねぎ・てんさい（甜菜）・小豆など畑作物の収量も全国 1 位を多く占める日本最大の食料供給地。漁業も全国 1 位で、釧路・根室・函館・稚内などが主要漁港。製紙（王子製紙苫小牧）、製鉄（日本製鉄室蘭）、自動車部品（トヨタ自動車北海道）に加え、千歳ではラピダスによる先端ロジック半導体（2nm）の量産工場が稼働を予定。苫東厚真・知内・伊達などに大規模火力、泊原発も停止中ながら立地する電源地帯。'
  relatedIndustry:
    - url: '/industry/japan-paper/'
      title: '日本の製紙・パルプ産業'
      note: '王子製紙苫小牧工場（国内最大級のパルプ供給拠点）'
    - url: '/industry/japan-cement/'
      title: '日本のセメント工業'
      note: '太平洋セメント上磯工場・苫小牧'
    - url: '/industry/japan-power/'
      title: '日本の電力会社'
      note: '北海道電力エリア（泊原発・苫東厚真）'
    - url: '/industry/japan-semiconductor/'
      title: '日本の半導体産業集積地'
      note: '千歳ラピダス（先端ロジック）'
    - url: '/industry/japan-jr/'
      title: '日本のJR各社'
      note: 'JR北海道'
    - url: '/industry/japan-regional-bank/'
      title: '日本の地方銀行'
      note: 'ほくほくFG（北海道銀行）・北洋銀行・イオン北海道系'
    - url: '/industry/japan-supermarket/'
      title: '日本のご当地スーパーマーケット'
      note: 'アークス・コープさっぽろ・北雄ラッキー・イオン北海道'
    - url: '/industry/japan-restaurant-chains/'
      title: '日本のご当地ファミレス・レストランチェーン'
      note: 'とんでん・ヴィクトリアステーション・びっくりドンキー発祥地'
    - url: '/industry/japan-ramen-chains/'
      title: '日本のご当地ラーメンチェーン'
      note: 'すみれ・純連・えびそば一幻（札幌味噌系）'
municipalities:
  svg: "/maps/prefectures/hokkaido.svg"
  list:
    - { code: "01100", name: "札幌市", type: "city", note: "県庁所在地" }
    - { code: "01202", name: "函館市", type: "city" }
    - { code: "01203", name: "小樽市", type: "city" }
    - { code: "01204", name: "旭川市", type: "city" }
    - { code: "01205", name: "室蘭市", type: "city" }
    - { code: "01206", name: "釧路市", type: "city" }
    - { code: "01207", name: "帯広市", type: "city" }
    - { code: "01208", name: "北見市", type: "city" }
    - { code: "01209", name: "夕張市", type: "city" }
    - { code: "01210", name: "岩見沢市", type: "city" }
    - { code: "01211", name: "網走市", type: "city" }
    - { code: "01212", name: "留萌市", type: "city" }
    - { code: "01213", name: "苫小牧市", type: "city" }
    - { code: "01214", name: "稚内市", type: "city" }
    - { code: "01215", name: "美唄市", type: "city" }
    - { code: "01216", name: "芦別市", type: "city" }
    - { code: "01217", name: "江別市", type: "city" }
    - { code: "01218", name: "赤平市", type: "city" }
    - { code: "01219", name: "紋別市", type: "city" }
    - { code: "01220", name: "士別市", type: "city" }
    - { code: "01221", name: "名寄市", type: "city" }
    - { code: "01222", name: "三笠市", type: "city" }
    - { code: "01223", name: "根室市", type: "city" }
    - { code: "01224", name: "千歳市", type: "city" }
    - { code: "01225", name: "滝川市", type: "city" }
    - { code: "01226", name: "砂川市", type: "city" }
    - { code: "01227", name: "歌志内市", type: "city" }
    - { code: "01228", name: "深川市", type: "city" }
    - { code: "01229", name: "富良野市", type: "city" }
    - { code: "01230", name: "登別市", type: "city" }
    - { code: "01231", name: "恵庭市", type: "city" }
    - { code: "01233", name: "伊達市", type: "city" }
    - { code: "01234", name: "北広島市", type: "city" }
    - { code: "01235", name: "石狩市", type: "city" }
    - { code: "01236", name: "北斗市", type: "city" }
    - { code: "01303", name: "当別町", type: "town", note: "石狩郡" }
    - { code: "01304", name: "新篠津村", type: "village", note: "石狩郡" }
    - { code: "01331", name: "松前町", type: "town", note: "松前郡" }
    - { code: "01332", name: "福島町", type: "town", note: "松前郡" }
    - { code: "01333", name: "知内町", type: "town", note: "上磯郡" }
    - { code: "01334", name: "木古内町", type: "town", note: "上磯郡" }
    - { code: "01337", name: "七飯町", type: "town", note: "亀田郡" }
    - { code: "01343", name: "鹿部町", type: "town", note: "茅部郡" }
    - { code: "01345", name: "森町", type: "town", note: "茅部郡" }
    - { code: "01346", name: "八雲町", type: "town", note: "二海郡" }
    - { code: "01347", name: "長万部町", type: "town", note: "山越郡" }
    - { code: "01361", name: "江差町", type: "town", note: "檜山郡" }
    - { code: "01362", name: "上ノ国町", type: "town", note: "檜山郡" }
    - { code: "01363", name: "厚沢部町", type: "town", note: "檜山郡" }
    - { code: "01364", name: "乙部町", type: "town", note: "爾志郡" }
    - { code: "01367", name: "奥尻町", type: "town", note: "奥尻郡" }
    - { code: "01370", name: "今金町", type: "town", note: "瀬棚郡" }
    - { code: "01371", name: "せたな町", type: "town", note: "久遠郡" }
    - { code: "01391", name: "島牧村", type: "village", note: "島牧郡" }
    - { code: "01392", name: "寿都町", type: "town", note: "寿都郡" }
    - { code: "01393", name: "黒松内町", type: "town", note: "寿都郡" }
    - { code: "01394", name: "蘭越町", type: "town", note: "磯谷郡" }
    - { code: "01395", name: "ニセコ町", type: "town", note: "虻田郡" }
    - { code: "01396", name: "真狩村", type: "village", note: "虻田郡" }
    - { code: "01397", name: "留寿都村", type: "village", note: "虻田郡" }
    - { code: "01398", name: "喜茂別町", type: "town", note: "虻田郡" }
    - { code: "01399", name: "京極町", type: "town", note: "虻田郡" }
    - { code: "01400", name: "倶知安町", type: "town", note: "虻田郡" }
    - { code: "01401", name: "共和町", type: "town", note: "岩内郡" }
    - { code: "01402", name: "岩内町", type: "town", note: "岩内郡" }
    - { code: "01403", name: "泊村", type: "village", note: "古宇郡" }
    - { code: "01404", name: "神恵内村", type: "village", note: "古宇郡" }
    - { code: "01405", name: "積丹町", type: "town", note: "積丹郡" }
    - { code: "01406", name: "古平町", type: "town", note: "古平郡" }
    - { code: "01407", name: "仁木町", type: "town", note: "余市郡" }
    - { code: "01408", name: "余市町", type: "town", note: "余市郡" }
    - { code: "01409", name: "赤井川村", type: "village", note: "余市郡" }
    - { code: "01423", name: "南幌町", type: "town", note: "空知郡" }
    - { code: "01424", name: "奈井江町", type: "town", note: "空知郡" }
    - { code: "01425", name: "上砂川町", type: "town", note: "空知郡" }
    - { code: "01427", name: "由仁町", type: "town", note: "夕張郡" }
    - { code: "01428", name: "長沼町", type: "town", note: "夕張郡" }
    - { code: "01429", name: "栗山町", type: "town", note: "夕張郡" }
    - { code: "01430", name: "月形町", type: "town", note: "樺戸郡" }
    - { code: "01431", name: "浦臼町", type: "town", note: "樺戸郡" }
    - { code: "01432", name: "新十津川町", type: "town", note: "樺戸郡" }
    - { code: "01433", name: "妹背牛町", type: "town", note: "雨竜郡" }
    - { code: "01434", name: "秩父別町", type: "town", note: "雨竜郡" }
    - { code: "01436", name: "雨竜町", type: "town", note: "雨竜郡" }
    - { code: "01437", name: "北竜町", type: "town", note: "雨竜郡" }
    - { code: "01438", name: "沼田町", type: "town", note: "雨竜郡" }
    - { code: "01452", name: "鷹栖町", type: "town", note: "上川郡" }
    - { code: "01453", name: "東神楽町", type: "town", note: "上川郡" }
    - { code: "01454", name: "当麻町", type: "town", note: "上川郡" }
    - { code: "01455", name: "比布町", type: "town", note: "上川郡" }
    - { code: "01456", name: "愛別町", type: "town", note: "上川郡" }
    - { code: "01457", name: "上川町", type: "town", note: "上川郡" }
    - { code: "01458", name: "東川町", type: "town", note: "上川郡" }
    - { code: "01459", name: "美瑛町", type: "town", note: "上川郡" }
    - { code: "01460", name: "上富良野町", type: "town", note: "空知郡" }
    - { code: "01461", name: "中富良野町", type: "town", note: "空知郡" }
    - { code: "01462", name: "南富良野町", type: "town", note: "空知郡" }
    - { code: "01463", name: "占冠村", type: "village", note: "勇払郡" }
    - { code: "01464", name: "和寒町", type: "town", note: "上川郡" }
    - { code: "01465", name: "剣淵町", type: "town", note: "上川郡" }
    - { code: "01468", name: "下川町", type: "town", note: "上川郡" }
    - { code: "01469", name: "美深町", type: "town", note: "中川郡" }
    - { code: "01470", name: "音威子府村", type: "village", note: "中川郡" }
    - { code: "01471", name: "中川町", type: "town", note: "中川郡" }
    - { code: "01472", name: "幌加内町", type: "town", note: "雨竜郡" }
    - { code: "01481", name: "増毛町", type: "town", note: "増毛郡" }
    - { code: "01482", name: "小平町", type: "town", note: "留萌郡" }
    - { code: "01483", name: "苫前町", type: "town", note: "苫前郡" }
    - { code: "01484", name: "羽幌町", type: "town", note: "苫前郡" }
    - { code: "01485", name: "初山別村", type: "village", note: "苫前郡" }
    - { code: "01486", name: "遠別町", type: "town", note: "天塩郡" }
    - { code: "01487", name: "天塩町", type: "town", note: "天塩郡" }
    - { code: "01511", name: "猿払村", type: "village", note: "宗谷郡" }
    - { code: "01512", name: "浜頓別町", type: "town", note: "枝幸郡" }
    - { code: "01513", name: "中頓別町", type: "town", note: "枝幸郡" }
    - { code: "01514", name: "枝幸町", type: "town", note: "枝幸郡" }
    - { code: "01516", name: "豊富町", type: "town", note: "天塩郡" }
    - { code: "01517", name: "礼文町", type: "town", note: "礼文郡" }
    - { code: "01518", name: "利尻町", type: "town", note: "利尻郡" }
    - { code: "01519", name: "利尻富士町", type: "town", note: "利尻郡" }
    - { code: "01520", name: "幌延町", type: "town", note: "天塩郡" }
    - { code: "01543", name: "美幌町", type: "town", note: "網走郡" }
    - { code: "01544", name: "津別町", type: "town", note: "網走郡" }
    - { code: "01545", name: "斜里町", type: "town", note: "斜里郡" }
    - { code: "01546", name: "清里町", type: "town", note: "斜里郡" }
    - { code: "01547", name: "小清水町", type: "town", note: "斜里郡" }
    - { code: "01549", name: "訓子府町", type: "town", note: "常呂郡" }
    - { code: "01550", name: "置戸町", type: "town", note: "常呂郡" }
    - { code: "01552", name: "佐呂間町", type: "town", note: "常呂郡" }
    - { code: "01555", name: "遠軽町", type: "town", note: "紋別郡" }
    - { code: "01559", name: "湧別町", type: "town", note: "紋別郡" }
    - { code: "01560", name: "滝上町", type: "town", note: "紋別郡" }
    - { code: "01561", name: "興部町", type: "town", note: "紋別郡" }
    - { code: "01562", name: "西興部村", type: "village", note: "紋別郡" }
    - { code: "01563", name: "雄武町", type: "town", note: "紋別郡" }
    - { code: "01564", name: "大空町", type: "town", note: "網走郡" }
    - { code: "01571", name: "豊浦町", type: "town", note: "虻田郡" }
    - { code: "01575", name: "壮瞥町", type: "town", note: "有珠郡" }
    - { code: "01578", name: "白老町", type: "town", note: "白老郡" }
    - { code: "01581", name: "厚真町", type: "town", note: "勇払郡" }
    - { code: "01584", name: "洞爺湖町", type: "town", note: "虻田郡" }
    - { code: "01585", name: "安平町", type: "town", note: "勇払郡" }
    - { code: "01586", name: "むかわ町", type: "town", note: "勇払郡" }
    - { code: "01601", name: "日高町", type: "town", note: "沙流郡" }
    - { code: "01602", name: "平取町", type: "town", note: "沙流郡" }
    - { code: "01604", name: "新冠町", type: "town", note: "新冠郡" }
    - { code: "01607", name: "浦河町", type: "town", note: "浦河郡" }
    - { code: "01608", name: "様似町", type: "town", note: "様似郡" }
    - { code: "01609", name: "えりも町", type: "town", note: "幌泉郡" }
    - { code: "01610", name: "新ひだか町", type: "town", note: "日高郡" }
    - { code: "01631", name: "音更町", type: "town", note: "河東郡" }
    - { code: "01632", name: "士幌町", type: "town", note: "河東郡" }
    - { code: "01633", name: "上士幌町", type: "town", note: "河東郡" }
    - { code: "01634", name: "鹿追町", type: "town", note: "河東郡" }
    - { code: "01635", name: "新得町", type: "town", note: "上川郡" }
    - { code: "01636", name: "清水町", type: "town", note: "上川郡" }
    - { code: "01637", name: "芽室町", type: "town", note: "河西郡" }
    - { code: "01638", name: "中札内村", type: "village", note: "河西郡" }
    - { code: "01639", name: "更別村", type: "village", note: "河西郡" }
    - { code: "01641", name: "大樹町", type: "town", note: "広尾郡" }
    - { code: "01642", name: "広尾町", type: "town", note: "広尾郡" }
    - { code: "01643", name: "幕別町", type: "town", note: "中川郡" }
    - { code: "01644", name: "池田町", type: "town", note: "中川郡" }
    - { code: "01645", name: "豊頃町", type: "town", note: "中川郡" }
    - { code: "01646", name: "本別町", type: "town", note: "中川郡" }
    - { code: "01647", name: "足寄町", type: "town", note: "足寄郡" }
    - { code: "01648", name: "陸別町", type: "town", note: "足寄郡" }
    - { code: "01649", name: "浦幌町", type: "town", note: "十勝郡" }
    - { code: "01661", name: "釧路町", type: "town", note: "釧路郡" }
    - { code: "01662", name: "厚岸町", type: "town", note: "厚岸郡" }
    - { code: "01663", name: "浜中町", type: "town", note: "厚岸郡" }
    - { code: "01664", name: "標茶町", type: "town", note: "川上郡" }
    - { code: "01665", name: "弟子屈町", type: "town", note: "川上郡" }
    - { code: "01667", name: "鶴居村", type: "village", note: "阿寒郡" }
    - { code: "01668", name: "白糠町", type: "town", note: "白糠郡" }
    - { code: "01691", name: "別海町", type: "town", note: "野付郡" }
    - { code: "01692", name: "中標津町", type: "town", note: "標津郡" }
    - { code: "01693", name: "標津町", type: "town", note: "標津郡" }
    - { code: "01694", name: "羅臼町", type: "town", note: "目梨郡" }
    - { code: "01695", name: "色丹村", type: "village", note: "色丹郡" }
    - { code: "01696", name: "泊村", type: "village", note: "国後郡" }
    - { code: "01697", name: "留夜別村", type: "village", note: "国後郡" }
    - { code: "01698", name: "留別村", type: "village", note: "択捉郡" }
    - { code: "01699", name: "紗那村", type: "village", note: "紗那郡" }
    - { code: "01700", name: "蘂取村", type: "village", note: "蘂取郡" }
references:
  - key: stat_jinsui_2024
    text: 総務省統計局「人口推計（2024年10月1日現在）」 https://www.stat.go.jp/data/jinsui/
  - key: gsi_mencho_2024
    text: 国土地理院「全国都道府県市区町村別面積調」 https://www.gsi.go.jp/KOKUJYOHO/MENCHO.html
---

<div class="main-desciption area-description">
    <h2 class="section-title">全域</h2>
    <ul class="rule-list">
      <li>市外局番は011</li>
        <li>道路に<span class="quiz">視線誘導標</span>がある</li>
        <li>コンビニに<span class="quiz">セイコーマート</span>がある</li>
        <li>道路に<span class="quiz">スノーポール</span>がある</li>
        <li>寒い地域特有の家が多い
            <ul>
                <li>屋根が<span class="quiz">平ら</span></li>
                <li>カスケード型のガレージがある</li>
                <li>ホームタンクと呼ばれる<span class="quiz">灯油タンク</span>のある家が目立つ{{% ref "http://www.sundia.co.jp/product/home_equipment/home-tank-main/" "サンダイヤオイルタンク" %}}</li>
            </ul>
        </li>
    </ul>
    {{% corp "asia/japan" "tohoku/hokkaido" %}}
</div>


{{% tabs %}}
{{% tab "視線誘導標" %}}
{{% notice tip %}}
雪が多い地域は道路の上に<span class="quiz">矢印（固定式視線誘導柱）</span>がある。北海道以外でも雪が多い地域に同じものがある{{% ex "https://goo.gl/maps/RTeMj4iZoyZ7C5v67" %}}ので他の要素と合わせて北海道と判断する。
{{% /notice %}}

<div class="googlemap-if unclickable">
<img src="Kōnomai02.jpg" width="80%" alt="Hokkaido GeoGuessr guide image showing Kōnomai02">
</div>

{{% /tab %}}
{{% tab "フキ" %}}

{{% notice tip %}}
道端にフキが大量に生えていることがある。フキ自体は全国で見られるが、大量に生えているのは北海道以外あまりない。
{{% /notice %}}
<div class="googlemap-if">
<img src="komon03.jpg" alt="Hokkaido GeoGuessr guide image showing komon03">
</div>
{{% /tab %}}
{{% tab "電柱" %}}
{{% notice tip %}}
左側に大き目の数字が並んだレイアウト。見分けはつきやすい{{% ex "https://maps.app.goo.gl/Gm1EufTTWhDNDY4Z9" %}}。
{{% /notice %}}

<div class="googlemap-if unclickable">
<img src="../../pole/pole-hokkaido.png" width="120px" alt="Pole GeoGuessr guide image showing Pole Hokkaido">
</div>

{{% /tab %}}
{{% tab "セイコーマート" %}}
{{% notice tip %}}
コンビニは<span class="quiz">セイコーマート</span>が特徴的。
{{% /notice %}}

<div class="googlemap-if unclickable">
<img src="Akan_bus_Akan01.jpg" width="80%" alt="Hokkaido GeoGuessr guide image showing Akan Bus Akan01">
</div>



{{% /tab %}}
{{% tab "家の造り" %}}

{{% notice tip %}}
北海道には<span class="quiz">灯油タンク</span>（ホームタンクと呼ばれる４９０㍑灯油が保存できるタンク）が家の外にある。屋根からの雪下ろしをしなくても大丈夫なように工夫された、遠くからみると<span class="quiz">まっ平な屋根に見えるスノーダクト屋根・フラットルーフ</span>屋根が多い。また、誰もいない場所に雪が自然に落ちるように設計された屋根も多い。屋根の上の雪を下すためのはしごも見えるはず。車庫は<span class="quiz">耐久性の高いカスケードガレージ</span>が使われていることがある{{% ref "https://bunka-hokkaido.com/cascade_garage.html" "カスケードガレージの特長 - 文化シャッター北海道" %}}。
{{% /notice %}}

<div class="googlemap-if no-margin">
<p><a href="https://commons.wikimedia.org/wiki/File:Typical_Residential_Street_in_Yuni,_Hokkaido.jpg#/media/File:Typical_Residential_Street_in_Yuni,_Hokkaido.jpg"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ad/Typical_Residential_Street_in_Yuni%2C_Hokkaido.jpg" alt="Wikimedia Commons photo showing Typical Residential Street In Yuni, Hokkaido" width="90%"></a></p><p>By <a href="//commons.wikimedia.org/wiki/User:Sgroey" title="User:Sgroey">Sgroey</a> - <span class="int-own-work" lang="en">Own work</span>, <a href="https://creativecommons.org/licenses/by-sa/4.0" title="Creative Commons Attribution-Share Alike 4.0">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=115473171">Link</a></p>
</div>

{{% /tab %}}
{{% tab "砂箱" %}}

{{% notice tip %}}
交差点付近に<span class="quiz">砂箱が</span>あることも。路面が滑りにくくなるようにするための砂が入っている{{% ex "https://maps.app.goo.gl/iG6wBTWHZM6AxMYV7" %}}。ご当地砂箱もあるらしい（<a href="https://tokukita.jp/gotouchineta/hokkaido-sunabako.html">出典</a>）。
{{% /notice %}}


<div class="googlemap-if">
<img src="960px-Sandbox02.jpg" alt="Hokkaido GeoGuessr guide image showing 960px Sandbox02">
</div>

{{% /tab %}}
{{% tab "標識" %}}

{{% notice tip %}}
北海道以外であまり見られない標識もあるかも{{% ex "https://maps.app.goo.gl/6R9bUhSauoZT8RsX9" %}}？
{{% /notice %}}
<div class="googlemap-if">
<img src="Japanese_road_sign_406-2.svg" width="250px" alt="Hokkaido GeoGuessr guide image showing Japanese Road Sign 406 2">
</div>
{{% /tab %}}
{{% /tabs %}}


<div class="main-desciption country-description">
    <h2 class="section-title">都市・町の絞り込み</h2>
    <ul class="rule-list">
        <li>苫小牧市は<span class="quiz">製紙</span>の街で、大規模な製紙工場と港がある</li>
        <li>札幌市は碁盤の目状の街路が広がる北海道最大の都市</li>
        <li>室蘭市は<span class="quiz">製鉄</span>と港湾の街で、白鳥大橋が架かる工業都市</li>
        <li>帯広・十勝平野は防風林に区切られた広大な<span class="quiz">畑作</span>地帯で直線道路が続く</li>
        <li>函館市は函館山と坂・五稜郭で知られる港町</li>
    </ul>
</div>

{{% tabs %}}
{{% tab "苫小牧" %}}
{{% notice tip %}}
<span class="quiz">苫小牧市</span>は王子製紙発祥の製紙の街で、大規模な製紙工場と掘込式の苫小牧港がある{{% ref "https://ja.wikipedia.org/wiki/%E8%8B%AB%E5%B0%8F%E7%89%A7%E5%B8%82" "苫小牧市" %}}。紙の原料となる巨大な木材置き場やチップヤード{{% ex "https://maps.app.goo.gl/niCQGyPbFK5wAL876" "https://maps.app.goo.gl/RzwJ5oBhoiJwDrNM9" %}}があれば確定だろう。飼料メーカー倉庫{{% ex "https://maps.app.goo.gl/ouyQhimQvq5drGDo9" "https://maps.app.goo.gl/gcBTpK3JtLpRFd9U8" %}}や物流センター{{% ex "https://maps.app.goo.gl/SMaTZokGQZUGuWeK7" %}}、重化学系の工場{{% ex "https://maps.app.goo.gl/mA8mn3BWuXvFhuMz8" "https://maps.app.goo.gl/J3tQnErX7g4JhYKu5" %}}も集積している。
{{% /notice %}}

<div class="googlemap-if no-margin">
<img src="tomakomai.jpg" width="720" alt="Hokkaido GeoGuessr guide image showing a paper mill in Tomakomai">
</div>
{{% /tab %}}
{{% tab "札幌" %}}
{{% notice tip %}}
<span class="quiz">札幌市</span>は碁盤の目状の街路が広がる北海道最大の都市で、大通公園やテレビ塔、雪景色が手がかり。
{{% /notice %}}

<div class="googlemap-if no-margin">
<img src="sapporo.jpg" width="720" alt="Hokkaido GeoGuessr guide image showing the city of Sapporo">
</div>
{{% /tab %}}
{{% tab "室蘭" %}}
{{% notice tip %}}
<span class="quiz">室蘭市</span>は鉄鋼（日本製鉄）と石油・港湾の工業都市で、製鉄所がある{{% ex "https://maps.app.goo.gl/EiwFFnnno1tEJTAB9" %}}{{% ref "https://ja.wikipedia.org/wiki/%E5%AE%A4%E8%98%AD%E5%B8%82" "室蘭市" %}}。白鳥大橋も有名{{% ex "https://maps.app.goo.gl/9nnF8Ws97EKRzc5G9" %}}。平野が狭く農業よりも工業が集積しているので特徴的。
{{% /notice %}}

<div class="googlemap-if no-margin">
<img src="muroran.jpg" width="720" alt="Hokkaido GeoGuessr guide image showing Muroran steelworks and the Hakucho Bridge">
</div>
{{% /tab %}}
{{% tab "十勝" %}}
{{% notice tip %}}
帯広市を中心とする<span class="quiz">十勝平野</span>は、防風林（カラマツ等）に区切られた広大な畑作地帯{{% ex "https://maps.app.goo.gl/oGApyrQXHqbC9wRZA" "https://maps.app.goo.gl/eNyaFGK8H6CJeggv7" %}}で、まっすぐな農道が続く{{% ref "https://ja.wikipedia.org/wiki/%E5%8D%81%E5%8B%9D%E5%B9%B3%E9%87%8E" "十勝平野" %}}。
{{% /notice %}}

<div class="googlemap-if no-margin">
<img src="tokachi.jpg" width="720" alt="Hokkaido GeoGuessr guide image showing the Tokachi plain with shelterbelts">
</div>
{{% /tab %}}
{{% tab "函館" %}}
{{% notice tip %}}
<span class="quiz">函館市</span>は函館山からの夜景、坂と西洋館、五稜郭{{% ex "https://maps.app.goo.gl/ebHPrkXWkAcmYa9u6" "https://maps.app.goo.gl/zo5QZ6Le8m96huhv9" %}}で知られる道南の港町{{% ref "https://ja.wikipedia.org/wiki/%E5%87%BD%E9%A4%A8%E5%B8%82" "函館市" %}}。
{{% /notice %}}

<div class="googlemap-if no-margin">
<img src="hakodate.jpg" width="640" alt="Hokkaido GeoGuessr guide image showing Hakodate from Mount Hakodate">
</div>
{{% /tab %}}
{{% /tabs %}}


<div class="container-corp mt-5" id="corp-desc" style="padding-top:50px">
    <h4 class="mb-4">代表的な企業の説明</h4>
    <table class="table table-striped table-bordered">
        <thead class="table-