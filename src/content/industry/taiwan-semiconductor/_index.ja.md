---
title: "台湾の半導体産業"
subtitle: "TSMCを核とする世界最強の半導体クラスター"
date: 2026-04-07
lastmod: 2026-04-07
description: "台湾の半導体産業を解説。TSMCを中心とする世界最大のファウンドリ集積、新竹・南部・中部の3大サイエンスパーク、UMC・聯発科（MediaTek）・日月光（ASE）・ASML台湾など主要企業、地政学リスクとファウンドリの世界シェアを整理。"
weight: 32
mapName: "taiwan"
galleryDir: "taiwan-semiconductor"
---

<script>
(function() {
  // [台湾](/rule/asia/taiwan/)の主要半導体クラスター（taiwan マップ）
  var pins = [
    {
        "x": 313,
        "y": 95,
        "label": "Taipei",
        "note": "TSMC 本社・台北市"
    },
    {
        "x": 240,
        "y": 150,
        "label": "Hsinchu",
        "note": "新竹サイエンスパーク（TSMC F12 等）"
    },
    {
        "x": 227,
        "y": 226,
        "label": "Taichung",
        "note": "中部サイエンスパーク（TSMC F15）"
    },
    {
        "x": 135,
        "y": 390,
        "label": "Tainan",
        "note": "南部サイエンスパーク（TSMC F18 / 3nm）"
    },
    {
        "x": 173,
        "y": 422,
        "label": "Kaohsiung",
        "note": "TSMC F22（2nm 計画）"
    }
];

  function addPins() {
    var mapEl = document.getElementById('world-map');
    if (!mapEl) return;
    var svg = mapEl.querySelector('svg');
    if (!svg) { setTimeout(addPins, 300); return; }

    pins.forEach(function(pin) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'industry-pin');
      g.style.cursor = 'default';

      var titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      titleEl.textContent = pin.label + ' — ' + (pin.note || '');
      g.appendChild(titleEl);

      var color = '#dc2626';
      var bgColor = 'rgba(220,38,38,0.20)';
      var strokeColor = 'rgba(220,38,38,0.65)';

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y);
      glow.setAttribute('r', '6');
      glow.setAttribute('fill', bgColor);
      glow.setAttribute('stroke', strokeColor);
      glow.setAttribute('stroke-width', '1');

      var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', pin.x);
      dot.setAttribute('cy', pin.y);
      dot.setAttribute('r', '2.5');
      dot.setAttribute('fill', color);

      var textLen = pin.label.length;
      var bgW = textLen * 5 + 6;
      var bgH = 9;

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', pin.y + 6);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', 'rgba(31,41,55,0.88)');
      labelBg.setAttribute('rx', '2');

      var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pin.x);
      label.setAttribute('y', pin.y + 12);
      label.setAttribute('font-size', '6.5');
      label.setAttribute('fill', '#fff');
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      label.textContent = pin.label;

      g.appendChild(glow);
      g.appendChild(dot);
      g.appendChild(labelBg);
      g.appendChild(label);
      svg.appendChild(g);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { setTimeout(addPins, 700); });
  } else {
    setTimeout(addPins, 700);
  }
})();
</script>

## なぜ[台湾](/rule/asia/taiwan/)が半導体の中心なのか

[台湾](/rule/asia/taiwan/)は世界の<span style="font-weight:700">ファウンドリ（受託製造）</span>の<span style="font-weight:700">約65〜68%</span>を生産し、<span style="font-weight:700">最先端ノード（7nm以下）に限れば約90%</span>が[台湾](/rule/asia/taiwan/)に集中しています{{% cite "trendforce_foundry" %}}。中核企業の<span style="font-weight:700">TSMC（[台湾](/rule/asia/taiwan/)積体電路製造）</span>は世界ファウンドリシェア<span style="font-weight:700">約70%</span>（2025年）を持つ単独首位で、Apple、NVIDIA、AMD、Qualcomm、Broadcomなどの主要半導体ファブレス企業はすべてTSMCの主要顧客です。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">~68%</div><div class="stat-label">世界ファウンドリ生産シェア（[台湾](/rule/asia/taiwan/)）</div></div>
<div class="stat-card"><div class="stat-num">~90%</div><div class="stat-label">7nm以下先端ノードの[台湾](/rule/asia/taiwan/)シェア</div></div>
<div class="stat-card"><div class="stat-num">~70%</div><div class="stat-label">TSMC世界ファウンドリシェア（2025年）</div></div>
<div class="stat-card"><div class="stat-num">3</div><div class="stat-label">主要サイエンスパーク（新竹・中部・南部）</div></div>
</div>

## TSMC — 世界の半導体製造の心臓部

<span style="font-weight:700">TSMC（Taiwan Semiconductor Manufacturing Company、[台湾](/rule/asia/taiwan/)積体電路製造）</span>は1987年に<span style="font-weight:700">モリス・チャン</span>博士によって設立された{{% cite "tsmc_ir" %}}世界初のピュアプレイ・ファウンドリです。それまで「半導体は設計と製造を一体で行う（IDM）」のが常識だった業界に「<span style="font-weight:700">製造専業</span>」というビジネスモデルを持ち込み、<span style="font-weight:700">ファブレス／ファウンドリ分業</span>という業界構造そのものを生み出しました。

| 指標 | 値 |
| --- | --- |
| 設立 | 1987年（モリス・チャン）{{% cite "tsmc_ir" %}} |
| 本社 | 新竹サイエンスパーク |
| 時価総額 | 約1兆ドル（2025年中） |
| 売上 | 約$90B（2024年、過去最高）{{% cite "tsmc_2024_revenue" %}}|
| 世界ファウンドリシェア | 約70%（2025年） |
| 最先端ノード | N3（3nm）量産中、N2（2nm）開発中 |

### TSMCの主要Fab所在地

| Fab | 場所 | プロセス | 備考 |
| --- | --- | --- | --- |
| Fab 12 / 18 | 新竹サイエンスパーク | 研究開発・先端ノード | 本社隣接{{% cite "tsmc_fabs" %}} |
| Fab 14 / 18（南部）| 台南サイエンスパーク | N5/N3量産 | 台南市新市区{{% cite "tsmc_fabs" %}} |
| Fab 15 | 中部サイエンスパーク（台中）| 28〜10nm | 中部{{% cite "tsmc_fabs" %}} |
| Fab 16 | 南京 | 16/12nm | [中国](/rule/asia/china/)本土{{% cite "tsmc_fabs" %}} |
| Fab 21 | [米国](/rule/n_america/usa/)アリゾナ州フェニックス | N4/N3 | CHIPS法支援、N4は2024年Q4量産開始{{% cite "tsmc_arizona" %}}、N3は2027年後半量産予定{{% cite "tsmc_arizona" %}} |
| Fab Kumamoto | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> 熊本県菊陽町 | 28/22nm, 16/12nm | JASM{{% cite "jasm" %}}、ソニー・デンソー・トヨタ出資。第1工場2024年量産、第2工場建設中 |
| Fab Dresden | <img src="/flags/DE.svg" alt="DE" class="inline-flag" width="20" height="14" loading="lazy" /> [ドイツ](/rule/europe/germany/)・ドレスデン | 28/22nm, 16/12nm | ESMC{{% cite "esmc" %}}、Bosch・Infineon・NXPと合弁 |

## [台湾](/rule/asia/taiwan/)の3大サイエンスパーク

| サイエンスパーク | 設立 | 主要企業 | 強み |
| --- | --- | --- | --- |
| <span style="font-weight:700">新竹科学園区</span>（Hsinchu Science Park）| 1980{{% cite "hspc_about" %}} | TSMC本社・Fab12, UMC, MediaTek, Realtek, Macronix | 研究開発・本社機能・先端ノード |
| <span style="font-weight:700">中部科学園区</span>（Central Taiwan Science Park）| 2003{{% cite "ctsp_about" %}} | TSMC Fab15, Micron[台湾](/rule/asia/taiwan/), AUO, Mediatek中部 | DRAM・先端ロジック |
| <span style="font-weight:700">南部科学園区</span>（Southern Taiwan Science Park）| 1996{{% cite "stsp_about" %}} | TSMC Fab14/18, Innolux, Wistron, ASE | 先端ロジック量産・パネル |

新竹は「<span style="font-weight:700">[台湾](/rule/asia/taiwan/)のシリコンバレー</span>」 と呼ばれ、隣接する<span style="font-weight:700">国立陽明交通大学</span> ・<span style="font-weight:700">国立清華大学</span> ・<span style="font-weight:700">ITRI（工業技術研究院）</span> {{% cite "itri_about" %}}との産学連携が強みです。

## [台湾](/rule/asia/taiwan/)の主要半導体企業

| 企業 | 区分 | 概要 |
| --- | --- | --- |
| TSMC（2330）| ファウンドリ | 世界1位、最先端ノード独占 |
| UMC（聯華電子, 2303）| ファウンドリ | 世界4位、成熟ノード（28〜90nm）に特化 |
| Vanguard International（VIS, 5347）| ファウンドリ | 8インチ専業、TSMC系列 |
| Powerchip（PSMC）| ファウンドリ | DRAM起源、現在はメモリ＋特殊ロジック |
| MediaTek（聯発科, 2454）| ファブレス | スマホSoC世界1位（出荷数）、Wi-Fi/Bluetooth |
| Realtek（瑞昱, 2379）| ファブレス | LANコントローラ・オーディオ |
| Novatek（聯詠, 3034）| ファブレス | ディスプレイドライバIC世界トップ級 |
| ASE Technology（日月光, 3711）| OSAT | 世界最大の半導体後工程（パッケージ・テスト）|
| Powertech（PTI）, ChipMOS, KYEC | OSAT | 後工程専業 |
| Nanya Technology（南亜科, 2408）| メモリ | DRAM、Formosa Plastics系 |
| Winbond, Macronix | メモリ | NORフラッシュ・特殊DRAM |
| Innolux, AUO | パネル | 旧Foxconn系・友達光電。LCD/OLED |
| Foxconn / Hon Hai（鴻海, 2317）| EMS | 半導体顧客の最終組立、Apple iPhone組立 |

## 装置・材料サプライヤーの[台湾](/rule/asia/taiwan/)拠点

世界の半導体製造装置メーカー（<span style="font-weight:700">ASML</span>, <span style="font-weight:700">Applied Materials</span>, <span style="font-weight:700">Lam Research</span>, <span style="font-weight:700">Tokyo Electron</span>, <span style="font-weight:700">KLA</span>）と材料メーカー（<span style="font-weight:700">Shin-Etsu</span>, <span style="font-weight:700">SUMCO</span>, <span style="font-weight:700">JSR</span>, <span style="font-weight:700">TOK</span>, <span style="font-weight:700">信越化学</span>, <span style="font-weight:700">Linde</span>）はすべて[台湾](/rule/asia/taiwan/)に大規模な現地法人・サービス拠点を構えています。特に[オランダ](/rule/europe/netherlands/)の<span style="font-weight:700">ASML</span>は新竹・台南に研修センターを置き、EUV装置の現地サポート体制を強化しています。

## 地政学リスクと「シリコン・シールド」

[台湾](/rule/asia/taiwan/)の半導体集中は世界経済の単一障害点であると同時に、<span style="font-weight:700">「シリコン・シールド」</span>として米中対立・両岸関係における[台湾](/rule/asia/taiwan/)の戦略的重要性の根拠ともなっています。これに対し[米国](/rule/n_america/usa/)は<span style="font-weight:700">CHIPS法</span>（2022年、530億ドル）{{% cite "chips_act" %}}でTSMCのアリゾナ進出を支援、[日本](/rule/asia/japan/)は<span style="font-weight:700">経済安全保障法</span>で熊本のJASM{{% cite "jasm" %}}に約1兆円規模の補助金を投じ、[ドイツ](/rule/europe/germany/)も<span style="font-weight:700">ESMC</span>の建設を補助しています。

## [台湾](/rule/asia/taiwan/)半導体企業の時価総額マップ

<div class="corp-treemap-section">
<div class="treemap-legend">
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#6366f1"></span>ファウンドリ・IDM</span>
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#0891b2"></span>ファブレス</span>
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#6b7280"></span>OSAT・EMS・パネル</span>
</div>
<div class="corp-treemap" data-companies='[{"t":"TSM","n":"TSMC","s":"ファウンドリ","v":150.0,"c":"#6366f1"},{"t":"2317.TW","n":"Hon Hai (Foxconn)","s":"EMS","v":12.0,"c":"#6b7280"},{"t":"2454.TW","n":"MediaTek","s":"ファブレス","v":10.5,"c":"#0891b2"},{"t":"UMC","n":"UMC","s":"ファウンドリ","v":3.75,"c":"#6366f1"},{"t":"ASX","n":"ASE Technology","s":"OSAT","v":3.75,"c":"#6b7280"},{"t":"3034.TW","n":"Novatek","s":"ファブレス","v":2.25,"c":"#0891b2"},{"t":"HIMX","n":"Himax","s":"ファブレス","v":0.6,"c":"#0891b2"},{"t":"SIMO","n":"Silicon Motion","s":"ファブレス","v":0.6,"c":"#0891b2"},{"t":"2379.TW","n":"Realtek","s":"ファブレス","v":1.5,"c":"#0891b2"},{"t":"5347.TW","n":"Vanguard","s":"ファウンドリ","v":1.2,"c":"#6366f1"},{"t":"2408.TW","n":"Nanya Tech","s":"DRAM","v":0.75,"c":"#6366f1"},{"t":"3481.TW","n":"Innolux","s":"パネル","v":0.45,"c":"#6b7280"},{"t":"2409.TW","n":"AUO","s":"パネル","v":0.45,"c":"#6b7280"}]'></div>
<p class="treemap-note">※ 面積は時価総額（概算・1ドル=150円換算）に比例。</p>
</div>

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light"><tr>
<th class="col-width-3">企業</th>
<th class="col-width-2">ティッカー</th>
<th class="col-width-3">事業</th>
<th class="col-width-1">IR</th>
<th class="col-width-1">配当履歴</th>
</tr></thead>
<tbody class="corp-desc">
<tr><td>TSMC</td><td>TSM</td><td>ファウンドリ</td><td>{{% corplink "https://www.google.com/search?q=TSMC+Investor+Relations" %}}</td><td>{{% dividend "other" "TSM" %}}</td></tr>
<tr><td>Hon Hai (Foxconn)</td><td>2317.TW</td><td>EMS</td><td>{{% corplink "https://www.google.com/search?q=Hon Hai (Foxconn)+Investor+Relations" %}}</td><td>{{% dividend "other" "2317.TW" %}}</td></tr>
<tr><td>MediaTek</td><td>2454.TW</td><td>ファブレス</td><td>{{% corplink "https://www.google.com/search?q=MediaTek+Investor+Relations" %}}</td><td>{{% dividend "other" "2454.TW" %}}</td></tr>
<tr><td>UMC</td><td>UMC</td><td>ファウンドリ</td><td>{{% corplink "https://www.google.com/search?q=UMC+Investor+Relations" %}}</td><td>{{% dividend "other" "UMC" %}}</td></tr>
<tr><td>ASE Technology</td><td>ASX</td><td>OSAT</td><td>{{% corplink "https://www.google.com/search?q=ASE Technology+Investor+Relations" %}}</td><td>{{% dividend "other" "ASX" %}}</td></tr>
<tr><td>Novatek</td><td>3034.TW</td><td>ファブレス</td><td>{{% corplink "https://www.google.com/search?q=Novatek+Investor+Relations" %}}</td><td>{{% dividend "other" "3034.TW" %}}</td></tr>
<tr><td>Himax</td><td>HIMX</td><td>ファブレス</td><td>{{% corplink "https://www.google.com/search?q=Himax+Investor+Relations" %}}</td><td>{{% dividend "other" "HIMX" %}}</td></tr>
<tr><td>Silicon Motion</td><td>SIMO</td><td>ファブレス</td><td>{{% corplink "https://www.google.com/search?q=Silicon Motion+Investor+Relations" %}}</td><td>{{% dividend "other" "SIMO" %}}</td></tr>
<tr><td>Realtek</td><td>2379.TW</td><td>ファブレス</td><td>{{% corplink "https://www.google.com/search?q=Realtek+Investor+Relations" %}}</td><td>{{% dividend "other" "2379.TW" %}}</td></tr>
<tr><td>Vanguard</td><td>5347.TW</td><td>ファウンドリ</td><td>{{% corplink "https://www.google.com/search?q=Vanguard+Investor+Relations" %}}</td><td>{{% dividend "other" "5347.TW" %}}</td></tr>
<tr><td>Nanya Tech</td><td>2408.TW</td><td>DRAM</td><td>{{% corplink "https://www.google.com/search?q=Nanya Tech+Investor+Relations" %}}</td><td>{{% dividend "other" "2408.TW" %}}</td></tr>
<tr><td>Innolux</td><td>3481.TW</td><td>パネル</td><td>{{% corplink "https://www.google.com/search?q=Innolux+Investor+Relations" %}}</td><td>{{% dividend "other" "3481.TW" %}}</td></tr>
<tr><td>AUO</td><td>2409.TW</td><td>パネル</td><td>{{% corplink "https://www.google.com/search?q=AUO+Investor+Relations" %}}</td><td>{{% dividend "other" "2409.TW" %}}</td></tr>
</tbody></table>
</div>

## 参考文献

{{% references %}}
trendforce_foundry: TrendForce「2Q25 Foundry Revenue Surges 14.6% to Record High, TSMC's Market Share Hits 70%」<https://www.trendforce.com/presscenter/news/20250901-12691.html>
tsmc_2024_revenue: TSMC「2024 Annual Report」<https://investor.tsmc.com/static/annualReports/2024/english/index.html>
tsmc_ir: TSMC「Investor Relations」<https://investor.tsmc.com/english>
tsmc_fabs: TSMC「TSMC Fabs」<https://www.tsmc.com/english/aboutTSMC/TSMC_Fabs>
moea_taiwan_semi: 中華民國經濟部「半導體產業」<https://www.moea.gov.tw/>
hspc_about: Hsinchu Science Park「About」<https://www.sipa.gov.tw/english/index.jsp>
itri_about: ITRI「About ITRI」<https://www.itri.org.tw/english/>
jetro_taiwan_semi: JETRO「台湾半導体産業の現状」<https://www.jetro.go.jp/biz/areareports/special/2024/0301/>
chips_act: U.S. Department of Commerce「CHIPS for America」<https://www.commerce.gov/issues/chips>
tsmc_arizona: TSMC「TSMC Arizona」<https://www.tsmc.com/static/abouttsmcaz/index.htm>
jasm: Japan Advanced Semiconductor Manufacturing「JASM」<https://pr.tsmc.com/english/news/3105>
esmc: European Semiconductor Manufacturing Company「ESMC」<https://esmc.eu/en/index.html>
ctsp_about: Central Taiwan Science Park「Park Profile」<https://www.ctsp.gov.tw/english/01about/abo_park_profile.aspx?v=20&fr=768&no=771>
stsp_about: Southern Taiwan Science Park「Tainan Science Park」<https://www.stsp.gov.tw/web/WEB/Jsp/Page/cindex.jsp?frontTarget=ENGLISH&thisRootID=6>
{{% /references %}}
