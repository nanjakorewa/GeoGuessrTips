---
title: "Seleção aleatória de região"
subtitle: ""
date: 2023-07-03
lastmod: 2023-07-03
weight: 200
draft: false
keywords: ["gacha", "aleatório", "seleção"]
sections: [""]
---

<br><br>
<div class="googlemap-if">
<span style="font-size:1.5em;">O lugar onde você vai jogar GeoGuessr agora é...</span>
</div>
<br>

<div style="width:100%;height:400px;">
<p><a id="gachaLink1" href="#" target="_blank"><img id="gachaImage" src="https://geopinning.space/flags/JP.svg" alt="Imagem de geopinning.space mostrando Jp"></a></p>
<p id="gachaText"><a id="gachaLink2" href="https://geopinning.space/rule/asia/japan/" target="_blank">Japão</a></p>
</div>

<div class="googlemap-if button-list">
<button id="startButton" class="buttonRound" onclick="startGacha()" disabled>Iniciar</button>
<button id="stopButton" class="buttonRound" onclick="stopGacha()" disabled>Parar</button>
</div>

<div class="googlemap-if button-list">
<button id="tweetButton" class="buttonRound-tweet" onclick="tweetResult()" disabled>Tuitar o resultado</button>
</div>

<br><br>

<script>
var items = [
    { image: "https://geopinning.space/flags/IN.svg", text: "Índia", link: "https://geopinning.space/rule/asia/india/" },
    { image: "https://geopinning.space/flags/JP.svg", text: "Japão", link: "https://geopinning.space/rule/asia/japan/" },
    { image: "https://geopinning.space/flags/US.svg", text: "Estados Unidos", link: "https://geopinning.space/rule/n_america/usa/" },
    { image: "https://geopinning.space/flags/AR.svg", text: "Argentina", link: "https://geopinning.space/rule/cs_america/argentina/" },
    { image: "https://geopinning.space/flags/ID.svg", text: "Indonésia", link: "https://geopinning.space/rule/asia/indonesia/" },
    { image: "https://geopinning.space/flags/CA.svg", text: "Canadá", link: "https://geopinning.space/rule/n_america/canada/" },
    { image: "https://geopinning.space/flags/BT.svg", text: "Butão", link: "https://geopinning.space/rule/asia/bhutan/" },
    { image: "https://geopinning.space/flags/RU.svg", text: "Rússia", link: "https://geopinning.space/rule/asia/russia/" },
    { image: "https://geopinning.space/flags/ML.svg", text: "Mali", link: "https://geopinning.space/rule/africa/mali/" },
    { image: "https://geopinning.space/flags/BR.svg", text: "Brasil", link: "https://geopinning.space/rule/cs_america/brazil/" },
    { image: "https://geopinning.space/flags/MX.svg", text: "México", link: "https://geopinning.space/rule/n_america/mexico/" },
    { image: "https://geopinning.space/flags/MX.svg", text: "México", link: "https://geopinning.space/rule/n_america/mexico/" },
    { image: "https://geopinning.space/flags/KH.svg", text: "Camboja", link: "https://geopinning.space/rule/asia/cambodia/" },
    { image: "https://geopinning.space/flags/KG.svg", text: "Quirguistão", link: "https://geopinning.space/rule/asia/kyrgyzstan/" },
    { image: "https://geopinning.space/flags/SG.svg", text: "Singapura", link: "https://geopinning.space/rule/asia/singapore/" },
    { image: "https://geopinning.space/flags/LK.svg", text: "Sri Lanka", link: "https://geopinning.space/rule/asia/srilanka/" },
    { image: "https://geopinning.space/flags/TH.svg", text: "Tailândia", link: "https://geopinning.space/rule/asia/thai/" },
    { image: "https://geopinning.space/flags/NP.svg", text: "Nepal", link: "https://geopinning.space/rule/asia/nepal/" },
    { image: "https://geopinning.space/flags/PK.svg", text: "Paquistão", link: "https://geopinning.space/rule/asia/pakistan/" },
    { image: "https://geopinning.space/flags/BD.svg", text: "Bangladesh", link: "https://geopinning.space/rule/asia/bangladesh/" },
    { image: "https://geopinning.space/flags/PH.svg", text: "Filipinas", link: "https://geopinning.space/rule/asia/philippines/" },
    { image: "https://geopinning.space/flags/MY.svg", text: "Malásia", link: "https://geopinning.space/rule/asia/malaysia/" },
    { image: "https://geopinning.space/flags/MN.svg", text: "Mongólia", link: "https://geopinning.space/rule/asia/mongolia/" },
    { image: "https://geopinning.space/flags/LA.svg", text: "Laos", link: "https://geopinning.space/rule/asia/laos/" },
    { image: "https://geopinning.space/flags/HK.svg", text: "Hong Kong", link: "https://geopinning.space/rule/asia/hongkong/" },
    { image: "https://geopinning.space/flags/TW.svg", text: "Taiwan", link: "https://geopinning.space/rule/asia/taiwan/" },
    { image: "https://geopinning.space/flags/KR.svg", text: "Coreia do Sul", link: "https://geopinning.space/rule/asia/korea/" },
    { image: "https://geopinning.space/flags/CN.svg", text: "China", link: "https://geopinning.space/rule/asia/china/" },
    { image: "https://geopinning.space/flags/MO.svg", text: "Macau", link: "https://geopinning.space/rule/asia/macau/" },
    { image: "https://geopinning.space/flags/WS.svg", text: "Samoa Americana", link: "https://geopinning.space/rule/oceania/samoa/" },
    { image: "https://geopinning.space/flags/AU.svg", text: "Austrália", link: "https://geopinning.space/rule/oceania/australia/" },
    { image: "https://geopinning.space/flags/GU.svg", text: "Guam", link: "https://geopinning.space/rule/oceania/guam/" },
    { image: "https://geopinning.space/flags/CX.svg", text: "Ilha do Natal", link: "https://geopinning.space/rule/oceania/christmas-island/" },
    { image: "https://geopinning.space/flags/CC.svg", text: "Ilhas Cocos (Keeling)", link: "https://geopinning.space/rule/oceania/cocos_islands/" },
    { image: "https://geopinning.space/flags/NZ.svg", text: "Nova Zelândia", link: "https://geopinning.space/rule/oceania/new-zealand/" },
    { image: "https://geopinning.space/flags/VU.svg", text: "Vanuatu", link: "https://geopinning.space/rule/oceania/vanuatu/" },
    { image: "https://geopinning.space/flags/Pitcairn.svg", text: "Ilhas Pitcairn", link: "https://geopinning.space/rule/oceania/pitcairn/" },
    { image: "https://geopinning.space/flags/MDW.svg", text: "Atol de Midway", link: "https://geopinning.space/rule/oceania/midway_atoll/" },
    { image: "https://geopinning.space/flags/MP.svg", text: "Ilhas Marianas do Norte", link: "https://geopinning.space/rule/oceania/northern_mariana_islands/" },
    { image: "https://geopinning.space/flags/AE.svg", text: "Emirados Árabes Unidos", link: "https://geopinning.space/rule/middle_east/united_arab_emirates/" },
    { image: "https://geopinning.space/flags/IQ.svg", text: "Iraque", link: "https://geopinning.space/rule/middle_east/iraq/" },
    { image: "https://geopinning.space/flags/QA.svg", text: "Catar", link: "https://geopinning.space/rule/middle_east/qatar/" },
    { image: "https://geopinning.space/flags/TR.svg", text: "Turquia", link: "https://geopinning.space/rule/middle_east/turkey/" },
    { image: "https://geopinning.space/flags/PS.svg", text: "Cisjordânia", link: "https://geopinning.space/rule/middle_east/palestine/" },
    { image: "https://geopinning.space/flags/JO.svg", text: "Jordânia", link: "https://geopinning.space/rule/middle_east/jordan/" },
    { image: "https://geopinning.space/flags/LB.svg", text: "Líbano", link: "https://geopinning.space/rule/middle_east/lebanon/" },
    { image: "https://geopinning.space/flags/IS.svg", text: "Islândia", link: "https://geopinning.space/rule/europe/iceland/" },
    { image: "https://geopinning.space/flags/IE.svg", text: "Irlanda", link: "https://geopinning.space/rule/europe/ireland/" },
    { image: "https://geopinning.space/flags/AL.svg", text: "Albânia", link: "https://geopinning.space/rule/europe/albania/" },
    { image: "https://geopinning.space/flags/AD.svg", text: "Andorra", link: "https://geopinning.space/rule/europe/andorra/" },
    { image: "https://geopinning.space/flags/GB.svg", text: "Reino Unido", link: "https://geopinning.space/rule/europe/united-kingdom/" },
    { image: "https://geopinning.space/flags/IT.svg", text: "Itália", link: "https://geopinning.space/rule/europe/italy/" },
    { image: "https://geopinning.space/flags/UA.svg", text: "Ucrânia", link: "https://geopinning.space/rule/europe/ukraine/" },
    { image: "https://geopinning.space/flags/RO.svg", text: "Romênia", link: "https://geopinning.space/rule/europe/romania/" },
    { image: "https://geopinning.space/flags/AT.svg", text: "Áustria", link: "https://geopinning.space/rule/europe/austria/" },
    { image: "https://geopinning.space/flags/AX.svg", text: "Ilhas Aland", link: "https://geopinning.space/rule/europe/aland_islands/" },
    { image: "https://geopinning.space/flags/PL.svg", text: "Polônia", link: "https://geopinning.space/rule/europe/poland/" },
    { image: "https://geopinning.space/flags/NL.svg", text: "Países Baixos", link: "https://geopinning.space/rule/europe/netherlands/" },
    { image: "https://geopinning.space/flags/GR.svg", text: "Grécia", link: "https://geopinning.space/rule/europe/greece/" },
    { image: "https://geopinning.space/flags/HR.svg", text: "Croácia", link: "https://geopinning.space/rule/europe/croatia/" },
    { image: "https://geopinning.space/flags/SM.svg", text: "San Marino", link: "https://geopinning.space/rule/europe/san-marino/" },
    { image: "https://geopinning.space/flags/JE.svg", text: "Jersey", link: "https://geopinning.space/rule/europe/jersey/" },
    { image: "https://geopinning.space/flags/GI.svg", text: "Gibraltar", link: "https://geopinning.space/rule/europe/gibraltar/" },
    { image: "https://geopinning.space/flags/CH.svg", text: "Suíça", link: "https://geopinning.space/rule/europe/switzerland/" },
    { image: "https://geopinning.space/flags/SJ.svg", text: "Svalbard", link: "https://geopinning.space/rule/europe/svalbard/" },
    { image: "https://geopinning.space/flags/SE.svg", text: "Suécia", link: "https://geopinning.space/rule/europe/sweden/" },
    { image: "https://geopinning.space/flags/ES.svg", text: "Espanha", link: "https://geopinning.space/rule/europe/spain/" },
    { image: "https://geopinning.space/flags/SK.svg", text: "Eslováquia", link: "https://geopinning.space/rule/europe/slovakia/" },
    { image: "https://geopinning.space/flags/SI.svg", text: "Eslovênia", link: "https://geopinning.space/rule/europe/slovenia/" },
    { image: "https://geopinning.space/flags/RS.svg", text: "Sérvia", link: "https://geopinning.space/rule/europe/serbia/" },
    { image: "https://geopinning.space/flags/CZ.svg", text: "Tchéquia", link: "https://geopinning.space/rule/europe/czechia/" },
    { image: "https://geopinning.space/flags/DK.svg", text: "Dinamarca", link: "https://geopinning.space/rule/europe/denmark/" },
    { image: "https://geopinning.space/flags/DE.svg", text: "Alemanha", link: "https://geopinning.space/rule/europe/germany/" },
    { image: "https://geopinning.space/flags/NO.svg", text: "Noruega", link: "https://geopinning.space/rule/europe/norway/" },
    { image: "https://geopinning.space/flags/EE.svg", text: "Estônia", link: "https://geopinning.space/rule/europe/baltic-state/estonia/" },
    { image: "https://geopinning.space/flags/LV.svg", text: "Letônia", link: "https://geopinning.space/rule/europe/baltic-state/latvia/" },
    { image: "https://geopinning.space/flags/LT.svg", text: "Lituânia", link: "https://geopinning.space/rule/europe/baltic-state/lithuania/" },
    { image: "https://geopinning.space/flags/HU.svg", text: "Hungria", link: "https://geopinning.space/rule/europe/hungary/" },
    { image: "https://geopinning.space/flags/FI.svg", text: "Finlândia", link: "https://geopinning.space/rule/europe/finland/" },
    { image: "https://geopinning.space/flags/FO.svg", text: "Ilhas Faroé", link: "https://geopinning.space/rule/europe/faroe_islands/" },
    { image: "https://geopinning.space/flags/FR.svg", text: "França", link: "https://geopinning.space/rule/europe/france/" },
    { image: "https://geopinning.space/flags/BG.svg", text: "Bulgária", link: "https://geopinning.space/rule/europe/bulgaria/" },
    { image: "https://geopinning.space/flags/BY.svg", text: "Belarus", link: "https://geopinning.space/rule/europe/belarus/" },
    { image: "https://geopinning.space/flags/BE.svg", text: "Bélgica", link: "https://geopinning.space/rule/europe/belgium/" },
    { image: "https://geopinning.space/flags/PT.svg", text: "Portugal", link: "https://geopinning.space/rule/europe/portugal/" },
    { image: "https://geopinning.space/flags/MT.svg", text: "Malta", link: "https://geopinning.space/rule/europe/malta/" },
    { image: "https://geopinning.space/flags/IM.svg", text: "Ilha de Man", link: "https://geopinning.space/rule/europe/mannin/" },
    { image: "https://geopinning.space/flags/MC.svg", text: "Mônaco", link: "https://geopinning.space/rule/europe/monaco/" },
    { image: "https://geopinning.space/flags/ME.svg", text: "Montenegro", link: "https://geopinning.space/rule/europe/montenegro/" },
    { image: "https://geopinning.space/flags/LU.svg", text: "Luxemburgo", link: "https://geopinning.space/rule/europe/luxembourg/" },
    { image: "https://geopinning.space/flags/MK.svg", text: "Macedônia do Norte", link: "https://geopinning.space/rule/europe/macedonia/" },
    { image: "https://geopinning.space/flags/GH.svg", text: "Gana", link: "https://geopinning.space/rule/africa/ghana/" },
    { image: "https://geopinning.space/flags/UG.svg", text: "Uganda", link: "https://geopinning.space/rule/africa/uganda/" },
    { image: "https://geopinning.space/flags/EG.svg", text: "Egito", link: "https://geopinning.space/rule/africa/egypt/" },
    { image: "https://geopinning.space/flags/SZ.svg", text: "Essuatíni", link: "https://geopinning.space/rule/africa/eswatini/" },
    { image: "https://geopinning.space/flags/CANA.svg", text: "Ilhas Canárias", link: "https://geopinning.space/rule/africa/canary_islands/" },
    { image: "https://geopinning.space/flags/KE.svg", text: "Quênia", link: "https://geopinning.space/rule/africa/kenya/" },
    { image: "https://geopinning.space/flags/SN.svg", text: "Senegal", link: "https://geopinning.space/rule/africa/senegal/" },
    { image: "https://geopinning.space/flags/TZ.svg", text: "Tanzânia", link: "https://geopinning.space/rule/africa/tanzania/" },
    { image: "https://geopinning.space/flags/TN.svg", text: "Tunísia", link: "https://geopinning.space/rule/africa/tunisia/" },
    { image: "https://geopinning.space/flags/NG.svg", text: "Nigéria", link: "https://geopinning.space/rule/africa/nigeria/" },
    { image: "https://geopinning.space/flags/BW.svg", text: "Botsuana", link: "https://geopinning.space/rule/africa/botswana/" },
    { image: "https://geopinning.space/flags/MG.svg", text: "Madagascar", link: "https://geopinning.space/rule/africa/madagascar/" },
    { image: "https://geopinning.space/flags/MADE.svg", text: "Madeira", link: "https://geopinning.space/rule/africa/madeira_islands/" },
    { image: "https://geopinning.space/flags/RW.svg", text: "Ruanda", link: "https://geopinning.space/rule/africa/rwanda/" },
    { image: "https://geopinning.space/flags/LS.svg", text: "Lesoto", link: "https://geopinning.space/rule/africa/lesotho/" },
    { image: "https://geopinning.space/flags/REUN.svg", text: "Reunião", link: "https://geopinning.space/rule/africa/reunion/" },
    { image: "https://geopinning.space/flags/ZA.svg", text: "África do Sul", link: "https://geopinning.space/rule/africa/south-africa/" },
    { image: "https://geopinning.space/flags/VI.svg", text: "Ilhas Virgens Americanas", link: "https://geopinning.space/rule/n_america/virgin_islands/" },
    { image: "https://geopinning.space/flags/GT.svg", text: "Guatemala", link: "https://geopinning.space/rule/n_america/guatemala/" },
    { image: "https://geopinning.space/flags/GL.svg", text: "Groenlândia", link: "https://geopinning.space/rule/n_america/greenland/" },
    { image: "https://geopinning.space/flags/COCR.svg", text: "Costa Rica", link: "https://geopinning.space/rule/n_america/costa_rica/" },
    { image: "https://geopinning.space/flags/SPM.svg", text: "São Pedro e Miquelon", link: "https://geopinning.space/rule/n_america/saint-pierre-miquelon/" },
    { image: "https://geopinning.space/flags/DO.svg", text: "República Dominicana", link: "https://geopinning.space/rule/n_america/dominican-republic/" },
    { image: "https://geopinning.space/flags/BM.svg", text: "Bermudas", link: "https://geopinning.space/rule/n_america/bermuda/" },
    { image: "https://geopinning.space/flags/PR.svg", text: "Porto Rico", link: "https://geopinning.space/rule/n_america/puerto-rico/" },
    { image: "https://geopinning.space/flags/MX.svg", text: "México", link: "https://geopinning.space/rule/n_america/mexico/" },
    { image: "https://geopinning.space/flags/AR.svg", text: "Argentina", link: "https://geopinning.space/rule/cs_america/argentina/" },
    { image: "https://geopinning.space/flags/UY.svg", text: "Uruguai", link: "https://geopinning.space/rule/cs_america/uruguay/" },
    { image: "https://geopinning.space/flags/EC.svg", text: "Equador", link: "https://geopinning.space/rule/cs_america/ecuador/" },
    { image: "https://geopinning.space/flags/GPSI.svg", text: "Ilhas Galápagos", link: "https://geopinning.space/rule/cs_america/galapagos_islands/" },
    { image: "https://geopinning.space/flags/CW.svg", text: "Curaçao", link: "https://geopinning.space/rule/cs_america/curacao/" },
    { image: "https://geopinning.space/flags/CO.svg", text: "Colômbia", link: "https://geopinning.space/rule/cs_america/colombia/" },
    { image: "https://geopinning.space/flags/GS.svg", text: "Geórgia do Sul e Ilhas Sandwich do Sul", link: "https://geopinning.space/rule/cs_america/sgssi/" },
    { image: "https://geopinning.space/flags/CL.svg", text: "Chile", link: "https://geopinning.space/rule/cs_america/chile/" },
    { image: "https://geopinning.space/flags/FK.svg", text: "Ilhas Malvinas", link: "https://geopinning.space/rule/cs_america/falkland_islands/" },
    { image: "https://geopinning.space/flags/PE.svg", text: "Peru", link: "https://geopinning.space/rule/cs_america/peru/" },
    { image: "https://geopinning.space/flags/BO.svg", text: "Bolívia", link: "https://geopinning.space/rule/cs_america/bolivia/" },
    { image: "https://geopinning.space/flags/MQ.svg", text: "Martinica", link: "https://geopinning.space/rule/cs_america/martinique/" },
    { image: "https://geopinning.space/flags/AQ.svg", text: "Antártida", link: "https://geopinning.space/rule/antarctica/" },
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
    var text = encodeURIComponent("Resultado do gacha: " + gachaText.textContent);
    //var url = encodeURIComponent(gachaLink1.href);
    var url = encodeURIComponent("https://geopinning.space/web/tools/");
    var tweetUrl = "https://twitter.com/intent/tweet?text=" + text + "&url=" + url;
    window.open(tweetUrl);
}
</script>

#### Observação
<span style="font-weight:bold;color:#990000;">Se você é sensível a telas piscando, tenha cuidado.</span> Para reduzir a cintilação, limitamos a quantidade de trocas visíveis, mas internamente o gacha gira cerca de 20x mais rápido (aprox. 100 trocas por segundo).
