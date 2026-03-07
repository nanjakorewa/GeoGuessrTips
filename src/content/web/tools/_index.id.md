---
title: "Pemilihan Wilayah Acak"
subtitle: ""
date: 2023-07-03
lastmod: 2023-07-03
weight: 200
draft: false
keywords: ["gacha", "acak", "pemilihan"]
sections: [""]
---

<br><br>
<div class="googlemap-if">
<span style="font-size:1.5em;">Tempat bermain GeoGuessr sekarang adalah...</span>
</div>
<br>

<div style="width:100%;height:400px;">
<p><a id="gachaLink1" href="#" target="_blank"><img id="gachaImage" src="https://geopinning.space/flags/JP.svg" alt="Gambar dari geopinning.space menampilkan Jp"></a></p>
<p id="gachaText"><a id="gachaLink2" href="https://geopinning.space/rule/asia/japan/" target="_blank">Jepang</a></p>
</div>

<div class="googlemap-if button-list">
<button id="startButton" class="buttonRound" onclick="startGacha()" disabled>Mulai</button>
<button id="stopButton" class="buttonRound" onclick="stopGacha()" disabled>Berhenti</button>
</div>

<div class="googlemap-if button-list">
<button id="tweetButton" class="buttonRound-tweet" onclick="tweetResult()" disabled>Tweet hasilnya</button>
</div>

<br><br>

<script>
var items = [
    { image: "https://geopinning.space/flags/IN.svg", text: "India", link: "https://geopinning.space/rule/asia/india/" },
    { image: "https://geopinning.space/flags/JP.svg", text: "Jepang", link: "https://geopinning.space/rule/asia/japan/" },
    { image: "https://geopinning.space/flags/US.svg", text: "Amerika Serikat", link: "https://geopinning.space/rule/n_america/usa/" },
    { image: "https://geopinning.space/flags/AR.svg", text: "Argentina", link: "https://geopinning.space/rule/cs_america/argentina/" },
    { image: "https://geopinning.space/flags/ID.svg", text: "Indonesia", link: "https://geopinning.space/rule/asia/indonesia/" },
    { image: "https://geopinning.space/flags/CA.svg", text: "Kanada", link: "https://geopinning.space/rule/n_america/canada/" },
    { image: "https://geopinning.space/flags/BT.svg", text: "Bhutan", link: "https://geopinning.space/rule/asia/bhutan/" },
    { image: "https://geopinning.space/flags/RU.svg", text: "Rusia", link: "https://geopinning.space/rule/asia/russia/" },
    { image: "https://geopinning.space/flags/ML.svg", text: "Mali", link: "https://geopinning.space/rule/africa/mali/" },
    { image: "https://geopinning.space/flags/BR.svg", text: "Brasil", link: "https://geopinning.space/rule/cs_america/brazil/" },
    { image: "https://geopinning.space/flags/MX.svg", text: "Meksiko", link: "https://geopinning.space/rule/n_america/mexico/" },
    { image: "https://geopinning.space/flags/MX.svg", text: "Meksiko", link: "https://geopinning.space/rule/n_america/mexico/" },
    { image: "https://geopinning.space/flags/KH.svg", text: "Kamboja", link: "https://geopinning.space/rule/asia/cambodia/" },
    { image: "https://geopinning.space/flags/KG.svg", text: "Kirgizstan", link: "https://geopinning.space/rule/asia/kyrgyzstan/" },
    { image: "https://geopinning.space/flags/SG.svg", text: "Singapura", link: "https://geopinning.space/rule/asia/singapore/" },
    { image: "https://geopinning.space/flags/LK.svg", text: "Sri Lanka", link: "https://geopinning.space/rule/asia/srilanka/" },
    { image: "https://geopinning.space/flags/TH.svg", text: "Thailand", link: "https://geopinning.space/rule/asia/thai/" },
    { image: "https://geopinning.space/flags/NP.svg", text: "Nepal", link: "https://geopinning.space/rule/asia/nepal/" },
    { image: "https://geopinning.space/flags/PK.svg", text: "Pakistan", link: "https://geopinning.space/rule/asia/pakistan/" },
    { image: "https://geopinning.space/flags/BD.svg", text: "Bangladesh", link: "https://geopinning.space/rule/asia/bangladesh/" },
    { image: "https://geopinning.space/flags/PH.svg", text: "Filipina", link: "https://geopinning.space/rule/asia/philippines/" },
    { image: "https://geopinning.space/flags/MY.svg", text: "Malaysia", link: "https://geopinning.space/rule/asia/malaysia/" },
    { image: "https://geopinning.space/flags/MN.svg", text: "Mongolia", link: "https://geopinning.space/rule/asia/mongolia/" },
    { image: "https://geopinning.space/flags/LA.svg", text: "Laos", link: "https://geopinning.space/rule/asia/laos/" },
    { image: "https://geopinning.space/flags/HK.svg", text: "Hong Kong", link: "https://geopinning.space/rule/asia/hongkong/" },
    { image: "https://geopinning.space/flags/TW.svg", text: "Taiwan", link: "https://geopinning.space/rule/asia/taiwan/" },
    { image: "https://geopinning.space/flags/KR.svg", text: "Korea Selatan", link: "https://geopinning.space/rule/asia/korea/" },
    { image: "https://geopinning.space/flags/CN.svg", text: "Tiongkok", link: "https://geopinning.space/rule/asia/china/" },
    { image: "https://geopinning.space/flags/MO.svg", text: "Makau", link: "https://geopinning.space/rule/asia/macau/" },
    { image: "https://geopinning.space/flags/WS.svg", text: "Samoa Amerika", link: "https://geopinning.space/rule/oceania/samoa/" },
    { image: "https://geopinning.space/flags/AU.svg", text: "Australia", link: "https://geopinning.space/rule/oceania/australia/" },
    { image: "https://geopinning.space/flags/GU.svg", text: "Guam", link: "https://geopinning.space/rule/oceania/guam/" },
    { image: "https://geopinning.space/flags/CX.svg", text: "Pulau Natal", link: "https://geopinning.space/rule/oceania/christmas-island/" },
    { image: "https://geopinning.space/flags/CC.svg", text: "Kepulauan Cocos (Keeling)", link: "https://geopinning.space/rule/oceania/cocos_islands/" },
    { image: "https://geopinning.space/flags/NZ.svg", text: "Selandia Baru", link: "https://geopinning.space/rule/oceania/new-zealand/" },
    { image: "https://geopinning.space/flags/VU.svg", text: "Vanuatu", link: "https://geopinning.space/rule/oceania/vanuatu/" },
    { image: "https://geopinning.space/flags/Pitcairn.svg", text: "Kepulauan Pitcairn", link: "https://geopinning.space/rule/oceania/pitcairn/" },
    { image: "https://geopinning.space/flags/MDW.svg", text: "Atol Midway", link: "https://geopinning.space/rule/oceania/midway_atoll/" },
    { image: "https://geopinning.space/flags/MP.svg", text: "Kepulauan Mariana Utara", link: "https://geopinning.space/rule/oceania/northern_mariana_islands/" },
    { image: "https://geopinning.space/flags/AE.svg", text: "Uni Emirat Arab", link: "https://geopinning.space/rule/middle_east/united_arab_emirates/" },
    { image: "https://geopinning.space/flags/IQ.svg", text: "Irak", link: "https://geopinning.space/rule/middle_east/iraq/" },
    { image: "https://geopinning.space/flags/QA.svg", text: "Qatar", link: "https://geopinning.space/rule/middle_east/qatar/" },
    { image: "https://geopinning.space/flags/TR.svg", text: "Turki", link: "https://geopinning.space/rule/middle_east/turkey/" },
    { image: "https://geopinning.space/flags/PS.svg", text: "Tepi Barat", link: "https://geopinning.space/rule/middle_east/palestine/" },
    { image: "https://geopinning.space/flags/JO.svg", text: "Yordania", link: "https://geopinning.space/rule/middle_east/jordan/" },
    { image: "https://geopinning.space/flags/LB.svg", text: "Lebanon", link: "https://geopinning.space/rule/middle_east/lebanon/" },
    { image: "https://geopinning.space/flags/IS.svg", text: "Islandia", link: "https://geopinning.space/rule/europe/iceland/" },
    { image: "https://geopinning.space/flags/IE.svg", text: "Irlandia", link: "https://geopinning.space/rule/europe/ireland/" },
    { image: "https://geopinning.space/flags/AL.svg", text: "Albania", link: "https://geopinning.space/rule/europe/albania/" },
    { image: "https://geopinning.space/flags/AD.svg", text: "Andorra", link: "https://geopinning.space/rule/europe/andorra/" },
    { image: "https://geopinning.space/flags/GB.svg", text: "Britania Raya", link: "https://geopinning.space/rule/europe/united-kingdom/" },
    { image: "https://geopinning.space/flags/IT.svg", text: "Italia", link: "https://geopinning.space/rule/europe/italy/" },
    { image: "https://geopinning.space/flags/UA.svg", text: "Ukraina", link: "https://geopinning.space/rule/europe/ukraine/" },
    { image: "https://geopinning.space/flags/RO.svg", text: "Rumania", link: "https://geopinning.space/rule/europe/romania/" },
    { image: "https://geopinning.space/flags/AT.svg", text: "Austria", link: "https://geopinning.space/rule/europe/austria/" },
    { image: "https://geopinning.space/flags/AX.svg", text: "Kepulauan Aland", link: "https://geopinning.space/rule/europe/aland_islands/" },
    { image: "https://geopinning.space/flags/PL.svg", text: "Polandia", link: "https://geopinning.space/rule/europe/poland/" },
    { image: "https://geopinning.space/flags/NL.svg", text: "Belanda", link: "https://geopinning.space/rule/europe/netherlands/" },
    { image: "https://geopinning.space/flags/GR.svg", text: "Yunani", link: "https://geopinning.space/rule/europe/greece/" },
    { image: "https://geopinning.space/flags/HR.svg", text: "Kroasia", link: "https://geopinning.space/rule/europe/croatia/" },
    { image: "https://geopinning.space/flags/SM.svg", text: "San Marino", link: "https://geopinning.space/rule/europe/san-marino/" },
    { image: "https://geopinning.space/flags/JE.svg", text: "Jersey", link: "https://geopinning.space/rule/europe/jersey/" },
    { image: "https://geopinning.space/flags/GI.svg", text: "Gibraltar", link: "https://geopinning.space/rule/europe/gibraltar/" },
    { image: "https://geopinning.space/flags/CH.svg", text: "Swiss", link: "https://geopinning.space/rule/europe/switzerland/" },
    { image: "https://geopinning.space/flags/SJ.svg", text: "Svalbard", link: "https://geopinning.space/rule/europe/svalbard/" },
    { image: "https://geopinning.space/flags/SE.svg", text: "Swedia", link: "https://geopinning.space/rule/europe/sweden/" },
    { image: "https://geopinning.space/flags/ES.svg", text: "Spanyol", link: "https://geopinning.space/rule/europe/spain/" },
    { image: "https://geopinning.space/flags/SK.svg", text: "Slowakia", link: "https://geopinning.space/rule/europe/slovakia/" },
    { image: "https://geopinning.space/flags/SI.svg", text: "Slovenia", link: "https://geopinning.space/rule/europe/slovenia/" },
    { image: "https://geopinning.space/flags/RS.svg", text: "Serbia", link: "https://geopinning.space/rule/europe/serbia/" },
    { image: "https://geopinning.space/flags/CZ.svg", text: "Ceko", link: "https://geopinning.space/rule/europe/czechia/" },
    { image: "https://geopinning.space/flags/DK.svg", text: "Denmark", link: "https://geopinning.space/rule/europe/denmark/" },
    { image: "https://geopinning.space/flags/DE.svg", text: "Jerman", link: "https://geopinning.space/rule/europe/germany/" },
    { image: "https://geopinning.space/flags/NO.svg", text: "Norwegia", link: "https://geopinning.space/rule/europe/norway/" },
    { image: "https://geopinning.space/flags/EE.svg", text: "Estonia", link: "https://geopinning.space/rule/europe/baltic-state/estonia/" },
    { image: "https://geopinning.space/flags/LV.svg", text: "Latvia", link: "https://geopinning.space/rule/europe/baltic-state/latvia/" },
    { image: "https://geopinning.space/flags/LT.svg", text: "Lituania", link: "https://geopinning.space/rule/europe/baltic-state/lithuania/" },
    { image: "https://geopinning.space/flags/HU.svg", text: "Hongaria", link: "https://geopinning.space/rule/europe/hungary/" },
    { image: "https://geopinning.space/flags/FI.svg", text: "Finlandia", link: "https://geopinning.space/rule/europe/finland/" },
    { image: "https://geopinning.space/flags/FO.svg", text: "Kepulauan Faroe", link: "https://geopinning.space/rule/europe/faroe_islands/" },
    { image: "https://geopinning.space/flags/FR.svg", text: "Prancis", link: "https://geopinning.space/rule/europe/france/" },
    { image: "https://geopinning.space/flags/BG.svg", text: "Bulgaria", link: "https://geopinning.space/rule/europe/bulgaria/" },
    { image: "https://geopinning.space/flags/BY.svg", text: "Belarus", link: "https://geopinning.space/rule/europe/belarus/" },
    { image: "https://geopinning.space/flags/BE.svg", text: "Belgia", link: "https://geopinning.space/rule/europe/belgium/" },
    { image: "https://geopinning.space/flags/PT.svg", text: "Portugal", link: "https://geopinning.space/rule/europe/portugal/" },
    { image: "https://geopinning.space/flags/MT.svg", text: "Malta", link: "https://geopinning.space/rule/europe/malta/" },
    { image: "https://geopinning.space/flags/IM.svg", text: "Pulau Man", link: "https://geopinning.space/rule/europe/mannin/" },
    { image: "https://geopinning.space/flags/MC.svg", text: "Monako", link: "https://geopinning.space/rule/europe/monaco/" },
    { image: "https://geopinning.space/flags/ME.svg", text: "Montenegro", link: "https://geopinning.space/rule/europe/montenegro/" },
    { image: "https://geopinning.space/flags/LU.svg", text: "Luksemburg", link: "https://geopinning.space/rule/europe/luxembourg/" },
    { image: "https://geopinning.space/flags/MK.svg", text: "Makedonia Utara", link: "https://geopinning.space/rule/europe/macedonia/" },
    { image: "https://geopinning.space/flags/GH.svg", text: "Ghana", link: "https://geopinning.space/rule/africa/ghana/" },
    { image: "https://geopinning.space/flags/UG.svg", text: "Uganda", link: "https://geopinning.space/rule/africa/uganda/" },
    { image: "https://geopinning.space/flags/EG.svg", text: "Mesir", link: "https://geopinning.space/rule/africa/egypt/" },
    { image: "https://geopinning.space/flags/SZ.svg", text: "Eswatini", link: "https://geopinning.space/rule/africa/eswatini/" },
    { image: "https://geopinning.space/flags/CANA.svg", text: "Kepulauan Canary", link: "https://geopinning.space/rule/africa/canary_islands/" },
    { image: "https://geopinning.space/flags/KE.svg", text: "Kenya", link: "https://geopinning.space/rule/africa/kenya/" },
    { image: "https://geopinning.space/flags/SN.svg", text: "Senegal", link: "https://geopinning.space/rule/africa/senegal/" },
    { image: "https://geopinning.space/flags/TZ.svg", text: "Tanzania", link: "https://geopinning.space/rule/africa/tanzania/" },
    { image: "https://geopinning.space/flags/TN.svg", text: "Tunisia", link: "https://geopinning.space/rule/africa/tunisia/" },
    { image: "https://geopinning.space/flags/NG.svg", text: "Nigeria", link: "https://geopinning.space/rule/africa/nigeria/" },
    { image: "https://geopinning.space/flags/BW.svg", text: "Botswana", link: "https://geopinning.space/rule/africa/botswana/" },
    { image: "https://geopinning.space/flags/MG.svg", text: "Madagaskar", link: "https://geopinning.space/rule/africa/madagascar/" },
    { image: "https://geopinning.space/flags/MADE.svg", text: "Madeira", link: "https://geopinning.space/rule/africa/madeira_islands/" },
    { image: "https://geopinning.space/flags/RW.svg", text: "Rwanda", link: "https://geopinning.space/rule/africa/rwanda/" },
    { image: "https://geopinning.space/flags/LS.svg", text: "Lesotho", link: "https://geopinning.space/rule/africa/lesotho/" },
    { image: "https://geopinning.space/flags/REUN.svg", text: "Reunion", link: "https://geopinning.space/rule/africa/reunion/" },
    { image: "https://geopinning.space/flags/ZA.svg", text: "Afrika Selatan", link: "https://geopinning.space/rule/africa/south-africa/" },
    { image: "https://geopinning.space/flags/VI.svg", text: "Kepulauan Virgin AS", link: "https://geopinning.space/rule/n_america/virgin_islands/" },
    { image: "https://geopinning.space/flags/GT.svg", text: "Guatemala", link: "https://geopinning.space/rule/n_america/guatemala/" },
    { image: "https://geopinning.space/flags/GL.svg", text: "Greenland", link: "https://geopinning.space/rule/n_america/greenland/" },
    { image: "https://geopinning.space/flags/COCR.svg", text: "Kosta Rika", link: "https://geopinning.space/rule/n_america/costa_rica/" },
    { image: "https://geopinning.space/flags/SPM.svg", text: "Saint Pierre dan Miquelon", link: "https://geopinning.space/rule/n_america/saint-pierre-miquelon/" },
    { image: "https://geopinning.space/flags/DO.svg", text: "Republik Dominika", link: "https://geopinning.space/rule/n_america/dominican-republic/" },
    { image: "https://geopinning.space/flags/BM.svg", text: "Bermuda", link: "https://geopinning.space/rule/n_america/bermuda/" },
    { image: "https://geopinning.space/flags/PR.svg", text: "Puerto Riko", link: "https://geopinning.space/rule/n_america/puerto-rico/" },
    { image: "https://geopinning.space/flags/MX.svg", text: "Meksiko", link: "https://geopinning.space/rule/n_america/mexico/" },
    { image: "https://geopinning.space/flags/AR.svg", text: "Argentina", link: "https://geopinning.space/rule/cs_america/argentina/" },
    { image: "https://geopinning.space/flags/UY.svg", text: "Uruguay", link: "https://geopinning.space/rule/cs_america/uruguay/" },
    { image: "https://geopinning.space/flags/EC.svg", text: "Ekuador", link: "https://geopinning.space/rule/cs_america/ecuador/" },
    { image: "https://geopinning.space/flags/GPSI.svg", text: "Kepulauan Galapagos", link: "https://geopinning.space/rule/cs_america/galapagos_islands/" },
    { image: "https://geopinning.space/flags/CW.svg", text: "Curacao", link: "https://geopinning.space/rule/cs_america/curacao/" },
    { image: "https://geopinning.space/flags/CO.svg", text: "Kolombia", link: "https://geopinning.space/rule/cs_america/colombia/" },
    { image: "https://geopinning.space/flags/GS.svg", text: "Georgia Selatan dan Kepulauan Sandwich Selatan", link: "https://geopinning.space/rule/cs_america/sgssi/" },
    { image: "https://geopinning.space/flags/CL.svg", text: "Chili", link: "https://geopinning.space/rule/cs_america/chile/" },
    { image: "https://geopinning.space/flags/FK.svg", text: "Kepulauan Falkland", link: "https://geopinning.space/rule/cs_america/falkland_islands/" },
    { image: "https://geopinning.space/flags/PE.svg", text: "Peru", link: "https://geopinning.space/rule/cs_america/peru/" },
    { image: "https://geopinning.space/flags/BO.svg", text: "Bolivia", link: "https://geopinning.space/rule/cs_america/bolivia/" },
    { image: "https://geopinning.space/flags/MQ.svg", text: "Martinik", link: "https://geopinning.space/rule/cs_america/martinique/" },
    { image: "https://geopinning.space/flags/AQ.svg", text: "Antartika", link: "https://geopinning.space/rule/antarctica/" },
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
    currentIndex = (currentIndex + 1 + Math.floor(0.5 * Math.random() * itemLen)) % itemLen;
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
    var text = encodeURIComponent("Hasil gacha: " + gachaText.textContent);
    //var url = encodeURIComponent(gachaLink1.href);
    var url = encodeURIComponent("https://geopinning.space/web/tools/");
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + text + "&url=" + url;
    window.open(tweetUrl);
}
</script>

#### Catatan
<span style="font-weight:bold;color:#990000;">Jika kamu sensitif terhadap layar yang berkedip, harap berhati-hati.</span> Untuk mengurangi kedipan, kami membatasi seberapa sering gambar berubah, tetapi secara internal gacha berputar sekitar 20x lebih cepat (sekitar 100 pergantian per detik).
