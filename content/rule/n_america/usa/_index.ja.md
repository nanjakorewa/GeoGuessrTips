---
title: "アメリカ"
date: 2023-02-26
lastmod: 2023-04-01
weight: 1
draft: false
keywords: [""]
sections: [""]
bg: "bg/city.jpg"
flag: "US.svg"
jetro_detail: true
jogmec_detail: true
is_has_distinctive_bollard: true
sc_title: "間違えやすい地域"
sc: [
    ["../canada/", "カナダ"],
    ]
map_title: "練習用マップ"
maps: [
    ["https://www.geoguessr.com/maps/5fb4a16924491b00010c608d", "US State-Specific Clues"],
    ["https://www.geoguessr.com/maps/5ab6b56818399e27583294d0", "United States (no blurry)"],
    ]
---

<div class="main-desciption country-description">
    <h2 class="section-title">{{% i18n "how-to-distinguish" %}}</h2>
    <ul class="rule-list">
        <li><span class="quiz">青い</span>ポストがある</li>
        <li>速度制限の看板が<span class="quiz">SPEED LIMIT</span></li>
        <li>逆▽の看板標識にYIELDと書いてあれば<span class="quiz">アメリカ</span>・書いてないならば<span class="quiz">カナダ</span>になる</li>
        <li>家の前にゴミ箱が並んでいることが多い。アメリカのゴミ収集の大手Waste Managementのロゴである『WM』があることも。</li>
    </ul>
    {{% rd n_america usa small %}}
</div>


{{% tabs  %}}
{{% tab "w-etf" %}}
{{% notice tip %}}速度制限の表記は<span class="quiz">SPEED LIMIT</span>。ただしSPEEDしか書かれていないときは<span class="quiz">オレゴン</span>州。{{% goto "../canada/" "カナダ" %}}は<span class="quiz">MAXIMUM</span>。
{{% /notice %}}
<div class="googlemap-if unclickable">
<div class="googlemap-if" style="margin:7px;">
<img src="r/MUTCD_R2-1.svg" width="80px" style="margin:7px 7px 7px 40px">
<img src="r/sp-oregon.png" width="80px" style="margin:7px 40px 7px 7px">
<img src="../canada/r/CA-ON_road_sign_Rb-001-050.svg" width="80px" style="margin:7px">
<img src="../canada/CA-QC_road_sign_P-070-4-40.svg" width="80px" style="margin:7px">
<img src="../canada/r/sp-on.svg" width="80px" style="margin:7px">
</div>
</div>


{{% notice tip %}}アメリカはYEILDやONEWAYの看板に文字がある。左がアメリカ・右がカナダ。
{{% /notice %}}
<div class="googlemap-if unclickable">
<img src="../usa/r/MUTCD_R1-2.svg" width="100px" style="margin-right:100px">
<img src="../canada/r/CA-MUTCDC_RA-002.svg" width="100px" style="margin-left:100px">
</div>
<div class="googlemap-if unclickable">
<img src="../usa/r/oneway.svg" width="100px" style="margin-right:100px">
<img src="../canada/r/oneway.svg" width="100px" style="margin-left:100px">
</div>

{{% notice tip %}}
<span class="quiz">青い</span>ポスト
{{% /notice %}}
<div class="googlemap-if unclickable">
<img src="2023-06-18-09-00-28.png" width="184px">
<img src="2023-06-18-09-02-09.png" width="420px">
</div>

{{% notice tip %}}
アメリカに本拠地を置く大きな企業がたくさんある。廃棄物収集・電力・水道局のような会社も上場していて、看板やロゴが街中にある。順番にWaste ManagementとRepublic Services（廃棄物収集業者でゴミ箱にロゴがある）・ChevronとCitgo(ガソリンスタンド)・Target（小売）など。
{{% /notice %}}
<div class="googlemap-if unclickable">
<img src="./w/Waste_Management_logo.svg" width="220px" style="margin:10px"/>
<img src="./w/Republic_Services_logo.svg" width="220px" style="margin:10px"/>
<img src="./w/Chevron_Logo.svg" width="130px" style="margin:10px"/>
<img src="./w/Citgo_logo.svg" width="130px" style="margin:10px"/>
<img src="./w/Target_Corporation_logo_(vector).svg" width="130px" style="margin:10px"/>
</div>
{{% /tab %}}


{{% notice tip %}}
州間高速道路などの看板であり、数字が2桁以下のものは東西・南北である程度順番に並んでいるのがマップを見ると分かる。数字が5の倍数の道は他と比べると距離が長いことが多い。数字が3桁の道路（Three-digit Interstate）のものは派生元の道路番号に100の倍数を加算したもので場所によってはとても短い{{% ref "https://www.kurumi.com/roads/3di/3di-primer.html" "3-digit Interstate Highways Primer" %}}ので、先に下二桁の道路番号を探してみるのも手。
{{% /notice %}}
<div class="googlemap-if unclickable">
<img src="I-80.svg" width="120px" style="margin:10px">
<img src="./route-example.svg" width="157px" style="margin:10px">
</div>
{{% /tabs %}}


<div class="main-desciption area-description">
    <h2 class="section-title">{{% i18n "narrow-down-the-area" %}}</h2>
    <h4 class="section-title">アメリカが関係する離島</h2>
    <ul class="rule-list">
        <li>アメリカ本土から離れた場所にアメリカ領の離島やアメリカが関係する場所が存在する
            <ul>
                <li>{{% goto "./region4/" "ハワイ・ハワイ諸島" %}}</li>
                <li>{{% goto "../../oceania/samoa/" "アメリカ領サモア" %}}</li>
                <li>{{% goto "../virgin_islands/" "アメリカ領ヴァージン諸島" %}}</li>
                <li>{{% goto "../../oceania/midway_atoll/" "ミッドウェー島" %}}</li>
                <li>{{% goto "../../oceania/northern_mariana_islands/" "北マリアナ諸島" %}}</li>
                <li>{{% goto "../puerto-rico/" "プエルトリコ" %}}（アメリカ合衆国の自治的・未編入領域）</li>
            </ul>
        </li>
    </ul>
    <h4 class="section-title">州を絞り込むヒント</h2>
    <p>離島かどうかを判断した上で、ナンバープレート・州道の看板・山や植物の様子・土地が平坦かどうか・家の周りの雰囲気を見て場所を絞り込んでいく。地域がかなり絞り込めるヒントも州によっては存在する。</p>
    <ul class="rule-list">
        <li>① ナンバープレートが前についているかどうか・ナンバープレートの色で州を絞り込める<a href="https://docs.google.com/spreadsheets/d/1P7LRYb13phYIYWlu4KSXxTosMGV44tHFU_EgqQvEXVQ/edit#gid=0">[資料]</a>{{% by "rumilb" "twitch" %}}。前にあるかどうかだけはじめに覚える。
            <ul>
                <li><a href="https://en.wikipedia.org/wiki/United_States_license_plate_designs_and_serial_formats">アメリカのナンバープレート一覧（Wikipedia）</a></li>
                <li>newがつく州のプレートは黄色がち？{{% by "niwaisound" "twitch" %}}</li>
                <li>特徴的な色の州
                    <ul>
                        <li>全体的に黒→<span class="quiz">Delaware</span></li>
                        <li>全体的に緑→<span class="quiz">Vermont</span></li>
                        <li>全体的に濃いオレンジ→<span class="quiz">New York</span></li>
                        <li>全体的に黄色→<span class="quiz">アラスカ</span></li>
                        <li>全体的もしくは両サイドが薄い黄色→<span class="quiz">Mississippi</span></li>
                        <li>白背景で、右半分だけオレンジ→<span class="quiz">Utah</span></li>
                        <li>白背景で、真ん中にオレンジが描かれている→<span class="quiz">Florida・Georgia</span></li>
                        <li>白背景で、真ん中に緑の木が描かれている→<span class="quiz">Oregon</span></li>
                        <li>白背景で、上に赤いライン→<span class="quiz">Ohio</span></li>
                        <li>白背景で、上に水色のライン→<span class="quiz">Minnesota・Montana・Iowa</span></li>
                        <li>白背景で、上が青で下が黄色→<span class="quiz">Pennsylvania</span></li>
                        <li>白背景で、上が赤茶色で下が青色→<span class="quiz">Idaho</span></li>
                        <li>白背景で、上の真ん中あたりがわずかに赤く数字のエリアが紺色に見える→<span class="quiz">California</span></li>
                        <li>上半分がハッキリとした青色で、下半分が白→<span class="quiz">Connecticut</span>、Illinoisも似た感じに見えるときがある</li>
                        <li>上半分が白色で、下半分がうっすらと青→<span class="quiz">Kentucky</span></li>
                        <li class="no-evidence">上がうっすらと黄色・下がうっすらと青→<span class="quiz">ワシントン？</span></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>② 州間高速道路と州道の看板を見つけたら位置を絞り込める
            <ul>
                <li>州道の看板で州が特定できることが多い。また一部の州では州の形がそのまま看板の形になっている。</li>
                <li>州間高速道路（青色に赤い帽子を被った看板）は偶数番号の道路が東西に、奇数番号の道路は南北に伸びていて、北東ほど数字が大きくなる</li>
                <li>高速道路の出口は"Exit 1"といった感じで番号が付いていてズームすると確認できる</li>
            </ul>
        </li>
        <li>③ 郵便局の建物の壁に州と都市名が書いてあることが多い</li>
        <li>④ハワイ諸島にもストリートビューがあり黒土や赤土が特徴的{{% ex "https://goo.gl/maps/jtYyZC2QNiC829Hn6" "https://goo.gl/maps/P7nuAhYyR9LTpAxh9" %}}</li>
    </ul>
</div>


{{% tabs  %}}
{{% tab "①ナンバープレート" %}}
{{% notice tip %}}
まず、前にナンバープレートを付ける必要がないエリア（<span style="color:#B1AF0D;font-weight:bold;">黄色のエリア</span>）を覚えてからナンバープレートの色を覚える。光の当たり方や角度で少し違った色に見えることも多く何回も練習して慣れる必要がある。もちろん車は動くのでナンバーで100%州が当たるわけではない。
{{% /notice %}}
<div class="googlemap-if">
<a href="https://commons.wikimedia.org/wiki/File:USplatemounting.svg#/media/File:USplatemounting.svg"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/USplatemounting.svg/1200px-USplatemounting.svg.png" alt="USplatemounting.svg"></a>
<p>By Raccoonny - Own work, <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.ja">CC BY-SA 4.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=122568316">Wikimedia Commons</a></p>
</div>

<div class="googlemap-if">
<blockquote class="reddit-embed-bq" style="height:500px" data-embed-height="500">      <a href="https://www.reddit.com/r/geoguessr/comments/kop8sr/theyre_blurred_but_the_colors_might_be_helpful/">They’re blurred but the colors might be helpful</a><br> by      <a href="https://www.reddit.com/user/untoasted-bread69">u/untoasted-bread69</a> in      <a href="https://www.reddit.com/r/geoguessr/">geoguessr</a>    </blockquote><script async="" src="https://embed.reddit.com/widgets.js" charset="UTF-8"></script>
</div>

{{% /tab %}}
{{% tab "②州道の看板" %}}

<div class="googlemap-if">
<div class="description-wide">
<img src="2023-03-25-14-29-11.png" class="img-main">
</div>
<div class="description-wide">
以下のルールは100％すべてに当てはまるわけではないらしい。
<ul class="rule-list">
    <li>アメリカ国道（United States numbered highways）
        <ul>
            <li>南北の高速道路は奇数であり、東から西に向かって番号が高くなる</li>
            <li>東西の高速道路は偶数であり、北から南に向かって番号が高くなる</li>
        </ul>
    </li>
    <li>州間高速道路（Dwight David Eisenhower National System of Interstate and Defense Highways）
        <ul>
            <li class="no-evidence">南北の高速道路は奇数であり、東から西に向かって番号が低くなる</li>
            <li class="no-evidence">東西の高速道路は偶数であり、北から南に向かって番号が低くなる</li>
        </ul>
    </li>
</ul>


{{% ahref "American Highways 101: Visual Guide to U.S. Road Sign Designs & Numbering Systems" "https://99percentinvisible.org/article/american-highways-101-visual-guide-to-u-s-road-sign-designs-numbering-systems/" %}}
</div>
</div>
{{% /tab %}}
{{% tab "③郵便局の壁" %}}
{{% notice tip %}}
{{% /notice %}}
<div class="googlemap-if">
<iframe src="https://www.google.com/maps/embed?pb=!4v1681687672403!6m8!1m7!1sr2fYXxuXlaBALYa-378jPA!2m2!1d37.68900621611955!2d-97.13520247827725!3f272.14006136701346!4f3.8147606970918275!5f3.325193203789971" width="590" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
{{% /tab %}}
{{% tab "④ハワイ" %}}
{{% notice tip %}}
地名が特徴的で、土の色も黒っぽかったり赤色に近い色が多い。
{{% /notice %}}

<div class="googlemap-if">
<iframe src="https://www.google.com/maps/embed?pb=!4v1691858062776!6m8!1m7!1sPYugKXOVUcX1-hJy4TZ5tg!2m2!1d20.24482224228152!2d-155.8840741655078!3f-5.088449531737773!4f-3.270031217481801!5f0.4000000000000002"width="295" height="295" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

{{% /tab %}}
{{% /tabs %}}



<div class="main-desciption country-description">
    <h4 class="section-title">農業の分布</h4>
    <ul class="rule-list">
        <li>コーンがあるなら中央よりも東側に行くのが無難</li>
        <li>田んぼは電柱に黄色い線があるならカリフォルニア北部・無いならばミシシッピ川沿い</li>
        <li>データ提供元：<a href="https://www.usda.gov/policies-and-links">U.S. Department of Agriculture</a></li>
    </ul>
</div>

{{% tabs  %}}
{{% tab "コーン" %}}

<div class="googlemap-if">
<img src="2023-04-29-12-03-38.png">
</div>

{{% notice note %}}
コーンベルトに沿ってコーンの生産が盛ん{{% by "https://www.nass.usda.gov/Charts_and_Maps/Crops_County/cr-pr.php" "web" "Corn: Production Acreage by County(USDA)" %}}。しかし全米で広く生産されているのでこれだけで中央部とは決まらない。
{{% /notice %}}

<div class="googlemap-if unclickable">
<img src="2023-06-19-20-02-41.png" width="80%">
</div>

{{% /tab %}}
{{% tab "大豆" %}}
<div class="googlemap-if">
<img src="2023-04-29-10-49-15.png">
</div>

<div class="googlemap-if unclickable">
<img src="2023-06-19-08-54-17.png" width="90%">
</div>

{{% notice note %}}
大豆もコーンに近い分布{{% by "https://ipad.fas.usda.gov/rssiws/al/us_cropprod.aspx" "web" "Crop Production Maps(USDA)" %}}
{{% /notice %}}

{{% /tab %}}
{{% tab "コメ" %}}

<div class="googlemap-if">
<img src="2023-04-29-10-56-56.png">
</div>

{{% notice note %}}
田んぼがあるのはカリフォルニアの特定の地域とアーカンソーの川沿い～沿岸部がほとんど{{% by "https://ipad.fas.usda.gov/rssiws/al/us_cropprod.aspx" "web" "Crop Production Maps(USDA)" %}}。カリフォルニアは電柱のヒントからわかるはず？
{{% /notice %}}

<div class="googlemap-if">
<iframe src="https://www.google.com/maps/embed?pb=!4v1682733490202!6m8!1m7!1s4A3IkVME8LVYpuCXg-OuaA!2m2!1d39.49365609048166!2d-121.7822379196536!3f221.79363223039482!4f-5.790068187062502!5f3.2786393840952575" width="295" height="295" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<iframe src="https://www.google.com/maps/embed?pb=!4v1682734884108!6m8!1m7!1sMEXmr5wqageIfPuhj8E0iw!2m2!1d35.79319395387087!2d-89.8386351406563!3f121.71333783003216!4f-3.589889380682493!5f3.325193203789971" width="295" height="295" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

{{% /tab %}}
{{% tab "綿花" %}}

<div class="googlemap-if">
<img src="2023-04-29-11-29-30.png">
</div>

{{% notice note %}}
綿花の様子は見られないが、道端に白い綿が落ちているかも{{% by "https://ipad.fas.usda.gov/rssiws/al/us_cropprod.aspx" "web" "Crop Production Maps(USDA)" %}}？
{{% /notice %}}

<div class="googlemap-if">
<iframe src="https://www.google.com/maps/embed?pb=!4v1682735996734!6m8!1m7!1sEoQ6csXiM6a72t-5Lb5-Og!2m2!1d33.46990965072755!2d-101.818398460253!3f197.95125231968635!4f-20.326037687398497!5f3.1477169517970793" width="295" height="295" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
<iframe src="https://www.google.com/maps/embed?pb=!4v1682736049473!6m8!1m7!1sOI7-S9mUEoFcMKBxHPuW9Q!2m2!1d33.61479697415089!2d-101.6134666971198!3f236.01923132521446!4f-12.615322855656387!5f2.9290789356164444" width="295" height="295" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

{{% /tab %}}
{{% tab "サトウキビ" %}}

<div class="googlemap-if">
<img src="2023-04-29-12-00-47.png">
</div>

{{% notice note %}}
フロリダ周辺の特定の地域のみ、ルイジアナはほぼ道が無い？{{% by "https://ipad.fas.usda.gov/rssiws/al/us_cropprod.aspx" "web" "Crop Production Maps(USDA)" %}}。
{{% /notice %}}

<div class="googlemap-if">
<iframe src="https://www.google.com/maps/embed?pb=!4v1682736662963!6m8!1m7!1sCmGChqhfRZwxQ5vtqkL7ZQ!2m2!1d26.54856124221731!2d-80.91671755371033!3f91.42825537003402!4f-5.256725945766988!5f2.7989670233367177" width="590" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

{{% /tab %}}
{{% tab "小麦" %}}
<div class="googlemap-if">
<img src="2023-04-29-12-07-38.png">
</div>

{{% notice note %}}
コーンや大豆と地域が重複していない。他のデータと地図が同じ形になるように縮尺や色を加工しています。
{{% /notice %}}

{{% /tab %}}
{{% /tabs %}}


<div class="main-desciption country-description">
    <h4 class="section-title">その他</h4>
    <ul class="rule-list">
        <li class="no-evidence">ガソリンスタンドの分布が会社ごとに違う{{% ref "https://www.scrapehero.com/location-reports/10-largest-gas-stations-in-the-usa/#3143" "10 Largest gas stations in the United States in 2023" %}}
            <ul>
                <li>Chevron→南の海沿いの州か西海岸の州</li>
                <li>Citgo→東側の州</li>
                <li>Phillips→内陸の州</li>
                <li>Murphy USA→東側の州</li>
                <li>Texaco→南の海沿いの州か西海岸の州</li>
            </ul>
        </li>
        <li class="no-evidence">車の車検のシールで州がわかることがある</li>
    </ul>
</div>


{{% tabs %}}
{{% tab "ガソリンスタンド" %}}
{{% notice tip %}}
自作なので正しくないかも
{{% /notice %}}
<div class="googlemap-if unclickable">
<img src="./gas_station.png" width="90%">
</div>
{{% /tab %}}
{{% tab "車のシール" %}}
{{% notice tip %}}
いくつかの州は車の車検のシールで判別できるかも
{{% /notice %}}
<div class="googlemap-if">
<iframe src="https://www.google.com/maps/embed?pb=!4v1686697089977!6m8!1m7!1scNsmawQmXIHwhM2LgvJ8Sw!2m2!1d29.77205520001398!2d-95.85548442263284!3f213.64170150512496!4f-24.867341361566673!5f3.325193203789971" width="295" height="295" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
{{% /tab %}}
{{% /tabs %}}