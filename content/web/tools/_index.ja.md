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


<div class="googlemap-if button-list">
<button id="startButton" class="buttonRound" onclick="startGacha()" disabled>スタート</button>
<button id="stopButton" class="buttonRound" onclick="stopGacha()" disabled>ストップ</button>
</div>
<br><br>

<div style="width:100%;height:400px;">
<p><a id="gachaLink1" href="#" target="_blank"><img id="gachaImage" src="https://geopinning.space/flags/JP.svg" alt="ガチャ画像"></a></p>
<p id="gachaText"><a id="gachaLink2" href="https://geopinning.space/rule/asia/japan/" target="_blank">日本</a></p>
</div>

<script>
var items = [
    { image: "https://geopinning.space/flags/IN.svg", text: "インド", link: "https://geopinning.space/rule/asia/india/" },
    { image: "https://geopinning.space/flags/JP.svg", text: "日本", link: "https://geopinning.space/rule/asia/japan/" },
    { image: "https://geopinning.space/flags/US.svg", text: "アメリカ", link: "https://geopinning.space/rule/n_america/usa/" },
    { image: "https://geopinning.space/flags/AR.svg", text: "アルゼンチン", link: "https://geopinning.space/rule/cs_america/argentina/" },
    { image: "https://geopinning.space/flags/ID.svg", text: "インドネシア", link: "https://geopinning.space/rule/asia/indonesia/" }
];

var intervalId;
var gachaImage = document.getElementById("gachaImage");
var gachaText = document.getElementById("gachaText");
var gachaLink1 = document.getElementById("gachaLink1");
var gachaLink2 = document.getElementById("gachaLink2");
var startButton = document.getElementById("startButton");
var stopButton = document.getElementById("stopButton");
startButton.disabled = false;
stopButton.disabled = true;

function startGacha() {
    startButton.disabled = true;
    stopButton.disabled = false;
    var currentIndex = 0;
    intervalId = setInterval(function() {
    currentIndex = (currentIndex + 1) % items.length;
    gachaImage.src = items[currentIndex].image;
    gachaLink1.href = items[currentIndex].link;
    gachaLink2.href = items[currentIndex].link;
    gachaLink2.textContent = items[currentIndex].text;
    }, 20);
}
function stopGacha() {
    startButton.disabled = false;
    stopButton.disabled = true;
    clearInterval(intervalId);
}
</script>

#### 注意点
<span style="font-weight:bold;color:#990000;">画面の点滅が苦手な人は注意してください。</span>
GeoGuesserで出る可能性がある国限定のガチャ。自分用、作成途中だけど寝たいのでコミット。仮実装で5か国のみ表示されます。
パラグアイは出現しないです。オーランド諸島のような離島は選択される可能性があります。