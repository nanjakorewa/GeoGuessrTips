---
title: "ランダムガチャ"
subtitle: ""
date: 2023-07-03
lastmod: 2023-07-03
weight: 100
draft: false
keywords: ["Daig_Oさんの配信で使ってるアレ", "バックグラウンド", "音楽"]
sections: [""]
---

<br><br>
<div class="googlemap-if">
<span style="font-size:1.5em;">今からGeoGuessrで遊ぶ場所は...</span>
</div>
<br>

<div style="width:100%;height:400px;">
<p><a id="gachaLink1" href="#" target="_blank"><img id="gachaImage" src="https://geopinning.space/flags/JP.svg" alt="ガチャ画像"></a></p>
<p id="gachaText"><a id="gachaLink2" href="https://geopinning.space/rule/asia/japan/" target="_blank">日本</a></p>
</div>

<div class="googlemap-if button-list">
<button id="startButton" class="buttonRound" onclick="startGacha()" disabled>スタート</button>
<button id="stopButton" class="buttonRound" onclick="stopGacha()" disabled>ストップ</button>
</div>

<div class="googlemap-if button-list">
<button id="tweetButton" class="buttonRound-tweet" onclick="tweetResult()" disabled>結果をツイートする</button>
</div>

<br><br>

<script>
var items = [
    { image: "https://geopinning.space/flags/IN.svg", text: "インド", link: "https://geopinning.space/rule/asia/india/" },
    { image: "https://geopinning.space/flags/JP.svg", text: "日本", link: "https://geopinning.space/rule/asia/japan/" },
    { image: "https://geopinning.space/flags/US.svg", text: "アメリカ", link: "https://geopinning.space/rule/n_america/usa/" },
    { image: "https://geopinning.space/flags/AR.svg", text: "アルゼンチン", link: "https://geopinning.space/rule/cs_america/argentina/" },
    { image: "https://geopinning.space/flags/ID.svg", text: "インドネシア", link: "https://geopinning.space/rule/asia/indonesia/" },
    { image: "https://geopinning.space/flags/CA.svg", text: "カナダ", link: "https://geopinning.space/rule/n_america/canada/" },
    { image: "https://geopinning.space/flags/BT.svg", text: "ブータン", link: "https://geopinning.space/rule/asia/bhutan/" },
    { image: "https://geopinning.space/flags/RU.svg", text: "ロシア", link: "https://geopinning.space/rule/asia/russia/" },
    { image: "https://geopinning.space/flags/ML.svg", text: "マリ共和国", link: "https://geopinning.space/rule/africa/mali/" },
    { image: "https://geopinning.space/flags/BR.svg", text: "ブラジル", link: "https://geopinning.space/rule/cs_america/brazil/" },
    { image: "https://geopinning.space/flags/MX.svg", text: "メキシコ", link: "https://geopinning.space/rule/n_america/mexico/" },
    { image: "https://geopinning.space/flags/MX.svg", text: "メキシコ", link: "https://geopinning.space/rule/n_america/mexico/" },
    { image: "https://geopinning.space/flags/KH.svg", text: "カンボジア", link: "https://geopinning.space/rule/asia/cambodia/" },
    { image: "https://geopinning.space/flags/KG.svg", text: "キルギス共和国", link: "https://geopinning.space/rule/asia/kyrgyzstan/" },
    { image: "https://geopinning.space/flags/SG.svg", text: "シンガポール", link: "https://geopinning.space/rule/asia/singapore/" },
    { image: "https://geopinning.space/flags/LK.svg", text: "スリランカ", link: "https://geopinning.space/rule/asia/srilanka/" },
    { image: "https://geopinning.space/flags/TH.svg", text: "タイ", link: "https://geopinning.space/rule/asia/thai/" },
    { image: "https://geopinning.space/flags/NP.svg", text: "ネパール", link: "https://geopinning.space/rule/asia/nepal/" },
    { image: "https://geopinning.space/flags/PK.svg", text: "パキスタン", link: "https://geopinning.space/rule/asia/pakistan/" },
    { image: "https://geopinning.space/flags/BD.svg", text: "バングラディシュ", link: "https://geopinning.space/rule/asia/bangladesh/" },
    { image: "https://geopinning.space/flags/PH.svg", text: "フィリピン", link: "https://geopinning.space/rule/asia/philippines/" },
    { image: "https://geopinning.space/flags/MY.svg", text: "マレーシア", link: "https://geopinning.space/rule/asia/malaysia/" },
    { image: "https://geopinning.space/flags/MN.svg", text: "モンゴル", link: "https://geopinning.space/rule/asia/mongolia/" },
    { image: "https://geopinning.space/flags/LA.svg", text: "ラオス", link: "https://geopinning.space/rule/asia/laos/" },
    { image: "https://geopinning.space/flags/HK.svg", text: "香港", link: "https://geopinning.space/rule/asia/hongkong/" },
    { image: "https://geopinning.space/flags/TW.svg", text: "台湾", link: "https://geopinning.space/rule/asia/taiwan/" },
    { image: "https://geopinning.space/flags/KR.svg", text: "韓国", link: "https://geopinning.space/rule/asia/korea/" },
    { image: "https://geopinning.space/flags/CN.svg", text: "中国", link: "https://geopinning.space/rule/asia/china/" },
    { image: "https://geopinning.space/flags/MO.svg", text: "澳門", link: "https://geopinning.space/rule/asia/macau/" },
    { image: "https://geopinning.space/flags/WS.svg", text: "アメリカ領サモア", link: "https://geopinning.space/rule/oceania/samoa/" },
    { image: "https://geopinning.space/flags/AU.svg", text: "オーストラリア", link: "https://geopinning.space/rule/oceania/australia/" },
    { image: "https://geopinning.space/flags/GU.svg", text: "グアム", link: "https://geopinning.space/rule/oceania/guam/" },
    { image: "https://geopinning.space/flags/CX.svg", text: "クリスマス島", link: "https://geopinning.space/rule/oceania/christmas-island/" },
    { image: "https://geopinning.space/flags/CC.svg", text: "ココス諸島", link: "https://geopinning.space/rule/oceania/cocos_islands/" },
    { image: "https://geopinning.space/flags/NZ.svg", text: "ニュージーランド", link: "https://geopinning.space/rule/oceania/new-zealand/" },
    { image: "https://geopinning.space/flags/VU.svg", text: "バヌアツ", link: "https://geopinning.space/rule/oceania/vanuatu/" },
    { image: "https://geopinning.space/flags/Pitcairn.svg", text: "ピトケアン諸島", link: "https://geopinning.space/rule/oceania/pitcairn/" },
    { image: "https://geopinning.space/flags/MDW.svg", text: "ミッドウェー島", link: "https://geopinning.space/rule/oceania/midway_atoll/" },
    { image: "https://geopinning.space/flags/MP.svg", text: "北マリアナ諸島", link: "https://geopinning.space/rule/oceania/northern_mariana_islands/" },
    { image: "https://geopinning.space/flags/AE.svg", text: "アラブ首長国連邦", link: "https://geopinning.space/rule/middle_east/united_arab_emirates/" },
    { image: "https://geopinning.space/flags/IQ.svg", text: "イラク", link: "https://geopinning.space/rule/middle_east/iraq/" },
    { image: "https://geopinning.space/flags/QA.svg", text: "カタール", link: "https://geopinning.space/rule/middle_east/qatar/" },
    { image: "https://geopinning.space/flags/TR.svg", text: "トルコ", link: "https://geopinning.space/rule/middle_east/turkey/" },
    { image: "https://geopinning.space/flags/PS.svg", text: "パレスチナ", link: "https://geopinning.space/rule/middle_east/palestine/" },
    { image: "https://geopinning.space/flags/JO.svg", text: "ヨルダン", link: "https://geopinning.space/rule/middle_east/jordan/" },
    { image: "https://geopinning.space/flags/LB.svg", text: "レバノン", link: "https://geopinning.space/rule/middle_east/lebanon/" },
    { image: "https://geopinning.space/flags/IS.svg", text: "アイスランド", link: "https://geopinning.space/rule/europe/iceland/" },
    { image: "https://geopinning.space/flags/IE.svg", text: "アイルランド", link: "https://geopinning.space/rule/europe/ireland/" },
    { image: "https://geopinning.space/flags/AL.svg", text: "アルバニア", link: "https://geopinning.space/rule/europe/albania/" },
    { image: "https://geopinning.space/flags/AD.svg", text: "アンドラ", link: "https://geopinning.space/rule/europe/andorra/" },
    { image: "https://geopinning.space/flags/GB.svg", text: "イギリス", link: "https://geopinning.space/rule/europe/united-kingdom/" },
    { image: "https://geopinning.space/flags/IT.svg", text: "イタリア", link: "https://geopinning.space/rule/europe/italy/" },
    { image: "https://geopinning.space/flags/UA.svg", text: "ウクライナ", link: "https://geopinning.space/rule/europe/ukraine/" },
    { image: "https://geopinning.space/flags/RO.svg", text: "ルーマニア", link: "https://geopinning.space/rule/europe/romania/" },
    { image: "https://geopinning.space/flags/AT.svg", text: "オーストリア", link: "https://geopinning.space/rule/europe/austria/" },
    { image: "https://geopinning.space/flags/AX.svg", text: "オーランド諸島", link: "https://geopinning.space/rule/europe/aland_islands/" },
    { image: "https://geopinning.space/flags/PL.svg", text: "ポーランド", link: "https://geopinning.space/rule/europe/poland/" },
    { image: "https://geopinning.space/flags/NL.svg", text: "オランダ", link: "https://geopinning.space/rule/europe/netherlands/" },
    { image: "https://geopinning.space/flags/GR.svg", text: "ギリシャ", link: "https://geopinning.space/rule/europe/greece/" },
    { image: "https://geopinning.space/flags/HR.svg", text: "クロアチア", link: "https://geopinning.space/rule/europe/croatia/" },
    { image: "https://geopinning.space/flags/SM.svg", text: "サンマリノ", link: "https://geopinning.space/rule/europe/san-marino/" },
    { image: "https://geopinning.space/flags/JE.svg", text: "ジャージー", link: "https://geopinning.space/rule/europe/jersey/" },
    { image: "https://geopinning.space/flags/GI.svg", text: "ジブラルタル", link: "https://geopinning.space/rule/europe/gibraltar/" },
    { image: "https://geopinning.space/flags/CH.svg", text: "スイス", link: "https://geopinning.space/rule/europe/switzerland/" },
    { image: "https://geopinning.space/flags/SJ.svg", text: "スヴァールバル諸島", link: "https://geopinning.space/rule/europe/svalbard/" },
    { image: "https://geopinning.space/flags/SE.svg", text: "スウェーデン", link: "https://geopinning.space/rule/europe/sweden/" },
    { image: "https://geopinning.space/flags/ES.svg", text: "スペイン", link: "https://geopinning.space/rule/europe/spain/" },
    { image: "https://geopinning.space/flags/SK.svg", text: "スロバキア", link: "https://geopinning.space/rule/europe/slovakia/" },
    { image: "https://geopinning.space/flags/SI.svg", text: "スロベニア", link: "https://geopinning.space/rule/europe/slovenia/" },
    { image: "https://geopinning.space/flags/RS.svg", text: "セルビア", link: "https://geopinning.space/rule/europe/serbia/" },
    { image: "https://geopinning.space/flags/CZ.svg", text: "チェコ", link: "https://geopinning.space/rule/europe/czechia/" },
    { image: "https://geopinning.space/flags/DK.svg", text: "デンマーク", link: "https://geopinning.space/rule/europe/denmark/" },
    { image: "https://geopinning.space/flags/DE.svg", text: "ドイツ", link: "https://geopinning.space/rule/europe/germany/" },
    { image: "https://geopinning.space/flags/NO.svg", text: "ノルウェー", link: "https://geopinning.space/rule/europe/norway/" },
    { image: "https://geopinning.space/flags/EE.svg", text: "エストニア", link: "https://geopinning.space/rule/europe/baltic-state/estonia/" },
    { image: "https://geopinning.space/flags/LV.svg", text: "ラトビア", link: "https://geopinning.space/rule/europe/baltic-state/latvia/" },
    { image: "https://geopinning.space/flags/LT.svg", text: "リトアニア", link: "https://geopinning.space/rule/europe/baltic-state/lithuania/" },
    { image: "https://geopinning.space/flags/HU.svg", text: "ハンガリー", link: "https://geopinning.space/rule/europe/hungary/" },
    { image: "https://geopinning.space/flags/FI.svg", text: "フィンランド", link: "https://geopinning.space/rule/europe/finland/" },
    { image: "https://geopinning.space/flags/FO.svg", text: "フェロー諸島", link: "https://geopinning.space/rule/europe/faroe_islands/" },
    { image: "https://geopinning.space/flags/FR.svg", text: "フランス", link: "https://geopinning.space/rule/europe/france/" },
    { image: "https://geopinning.space/flags/BG.svg", text: "ブルガリア", link: "https://geopinning.space/rule/europe/bulgaria/" },
    { image: "https://geopinning.space/flags/BY.svg", text: "ベラルーシ", link: "https://geopinning.space/rule/europe/belarus/" },
    { image: "https://geopinning.space/flags/BE.svg", text: "ベルギー", link: "https://geopinning.space/rule/europe/belgium/" },
    { image: "https://geopinning.space/flags/PT.svg", text: "ポルトガル", link: "https://geopinning.space/rule/europe/portugal/" },
    { image: "https://geopinning.space/flags/MT.svg", text: "マルタ", link: "https://geopinning.space/rule/europe/malta/" },
    { image: "https://geopinning.space/flags/IM.svg", text: "マン島", link: "https://geopinning.space/rule/europe/mannin/" },
    { image: "https://geopinning.space/flags/MC.svg", text: "モナコ", link: "https://geopinning.space/rule/europe/monaco/" },
    { image: "https://geopinning.space/flags/ME.svg", text: "モンテネグロ", link: "https://geopinning.space/rule/europe/montenegro/" },
    { image: "https://geopinning.space/flags/LU.svg", text: "ルクセンブルグ", link: "https://geopinning.space/rule/europe/luxembourg/" },
    { image: "https://geopinning.space/flags/MK.svg", text: "北マケドニア", link: "https://geopinning.space/rule/europe/macedonia/" },
    { image: "https://geopinning.space/flags/GH.svg", text: "ガーナ", link: "https://geopinning.space/rule/africa/ghana/" },
    { image: "https://geopinning.space/flags/UG.svg", text: "ウガンダ", link: "https://geopinning.space/rule/africa/uganda/" },
    { image: "https://geopinning.space/flags/EG.svg", text: "エジプト", link: "https://geopinning.space/rule/africa/egypt/" },
    { image: "https://geopinning.space/flags/SZ.svg", text: "エスワティニ", link: "https://geopinning.space/rule/africa/eswatini/" },
    { image: "https://geopinning.space/flags/CANA.svg", text: "カナリア諸島", link: "https://geopinning.space/rule/africa/canary_islands/" },
    { image: "https://geopinning.space/flags/KE.svg", text: "ケニア", link: "https://geopinning.space/rule/africa/kenya/" },
    { image: "https://geopinning.space/flags/SN.svg", text: "セネガル", link: "https://geopinning.space/rule/africa/senegal/" },
    { image: "https://geopinning.space/flags/TZ.svg", text: "タンザニア", link: "https://geopinning.space/rule/africa/tanzania/" },
    { image: "https://geopinning.space/flags/TN.svg", text: "チュニジア", link: "https://geopinning.space/rule/africa/tunisia/" },
    { image: "https://geopinning.space/flags/NG.svg", text: "ナイジェリア", link: "https://geopinning.space/rule/africa/nigeria/" },
    { image: "https://geopinning.space/flags/BW.svg", text: "ボツワナ", link: "https://geopinning.space/rule/africa/botswana/" },
    { image: "https://geopinning.space/flags/MG.svg", text: "マダガスカル", link: "https://geopinning.space/rule/africa/madagascar/" },
    { image: "https://geopinning.space/flags/MADE.svg", text: "マデイラ諸島", link: "https://geopinning.space/rule/africa/madeira_islands/" },
    { image: "https://geopinning.space/flags/RW.svg", text: "ルワンダ", link: "https://geopinning.space/rule/africa/rwanda/" },
    { image: "https://geopinning.space/flags/LS.svg", text: "レソト", link: "https://geopinning.space/rule/africa/lesotho/" },
    { image: "https://geopinning.space/flags/REUN.svg", text: "レユニオン", link: "https://geopinning.space/rule/africa/reunion/" },
    { image: "https://geopinning.space/flags/ZA.svg", text: "南アフリカ", link: "https://geopinning.space/rule/africa/south-africa/" },
    { image: "https://geopinning.space/flags/VI.svg", text: "アメリカ領ヴァージン諸島", link: "https://geopinning.space/rule/n_america/virgin_islands/" },
    { image: "https://geopinning.space/flags/GT.svg", text: "グアテマラ", link: "https://geopinning.space/rule/n_america/guatemala/" },
    { image: "https://geopinning.space/flags/GL.svg", text: "グリーンランド", link: "https://geopinning.space/rule/n_america/greenland/" },
    { image: "https://geopinning.space/flags/COCR.svg", text: "コスタリカ", link: "https://geopinning.space/rule/n_america/costa_rica/" },
    { image: "https://geopinning.space/flags/SPM.svg", text: "サンピエール島・ミクロン島", link: "https://geopinning.space/rule/n_america/saint-pierre-miquelon/" },
    { image: "https://geopinning.space/flags/DO.svg", text: "ドミニカ共和国", link: "https://geopinning.space/rule/n_america/dominican-republic/" },
    { image: "https://geopinning.space/flags/BM.svg", text: "バミューダ", link: "https://geopinning.space/rule/n_america/bermuda/" },
    { image: "https://geopinning.space/flags/PR.svg", text: "プエルトリコ", link: "https://geopinning.space/rule/n_america/puerto-rico/" },
    { image: "https://geopinning.space/flags/MX.svg", text: "メキシコ", link: "https://geopinning.space/rule/n_america/mexico/" },
    { image: "https://geopinning.space/flags/AR.svg", text: "アルゼンチン", link: "https://geopinning.space/rule/cs_america/argentina/" },
    { image: "https://geopinning.space/flags/UY.svg", text: "ウルグアイ", link: "https://geopinning.space/rule/cs_america/uruguay/" },
    { image: "https://geopinning.space/flags/EC.svg", text: "エクアドル", link: "https://geopinning.space/rule/cs_america/ecuador/" },
    { image: "https://geopinning.space/flags/GPSI.svg", text: "ガラパゴス諸島", link: "https://geopinning.space/rule/cs_america/galapagos_islands/" },
    { image: "https://geopinning.space/flags/CW.svg", text: "キュラソー", link: "https://geopinning.space/rule/cs_america/curacao/" },
    { image: "https://geopinning.space/flags/CO.svg", text: "コロンビア", link: "https://geopinning.space/rule/cs_america/colombia/" },
    { image: "https://geopinning.space/flags/GS.svg", text: "サウスジョージア・サウスサンドウィッチ諸島", link: "https://geopinning.space/rule/cs_america/sgssi/" },
    { image: "https://geopinning.space/flags/CL.svg", text: "チリ", link: "https://geopinning.space/rule/cs_america/chile/" },
    { image: "https://geopinning.space/flags/FK.svg", text: "フォークランド諸島", link: "https://geopinning.space/rule/cs_america/falkland_islands/" },
    { image: "https://geopinning.space/flags/PE.svg", text: "ペルー", link: "https://geopinning.space/rule/cs_america/peru/" },
    { image: "https://geopinning.space/flags/BO.svg", text: "ボリビア", link: "https://geopinning.space/rule/cs_america/bolivia/" },
    { image: "https://geopinning.space/flags/MQ.svg", text: "マルティニーク", link: "https://geopinning.space/rule/cs_america/martinique/" },
    { image: "https://geopinning.space/flags/AQ.svg", text: "南極大陸", link: "https://geopinning.space/rule/antarctica/" },
];

var intervalId;
var gachaImage = document.getElementById("gachaImage");
var gachaText = document.getElementById("gachaText");
var gachaLink1 = document.getElementById("gachaLink1");
var gachaLink2 = document.getElementById("gachaLink2");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
var tweetButton = document.getElementById("tweetButton");
startButton.disabled = false;
stopButton.disabled = true;
var currentIndex = 0;
var itemLen = items.length;

function startGacha(forceChangeImg = false) {
    startButton.disabled = true;
    stopButton.disabled = false;
    tweetButton.disabled = true;
    intervalId = setInterval(function() {
    currentIndex = (currentIndex + 1 + Math.floor(0.3 * Math.random() * itemLen)) % itemLen;
    if (Math.floor(Math.random() * 20)%20 === 0) {
        gachaImage.src = items[currentIndex].image;
    }
    gachaLink1.href = items[currentIndex].link;
    gachaLink2.href = items[currentIndex].link;
    gachaLink2.textContent = items[currentIndex].text;
    }, 10);
}

function stopGacha() {
    gachaImage.src = items[currentIndex].image;
    startButton.disabled = false;
    stopButton.disabled = true;
    tweetButton.disabled = false;
    clearInterval(intervalId);
}

function tweetResult() {
    var text = encodeURIComponent("ガチャの結果: " + gachaText.textContent);
    //var url = encodeURIComponent(gachaLink1.href);
    var url = encodeURIComponent("https://geopinning.space/web/tools/");
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + text + "&url=" + url;
    window.open(tweetUrl);
}
</script>

#### 注意点
<span style="font-weight:bold;color:#990000;">画面の点滅が苦手な人は注意してください。</span>過剰な点滅を抑えるために画像の切り替わり回数を減らしていますが、内部的には表示されている画像の約20倍のスピードでガチャしています。