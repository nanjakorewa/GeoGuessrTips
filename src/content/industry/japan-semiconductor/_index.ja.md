---
title: "日本の半導体産業集積地"
subtitle: "シリコンアイランド九州・東北シリコンロード・北海道新拠点"
date: 2026-03-25
lastmod: 2026-03-25
description: "日本の半導体産業集積地を解説。九州・東北・三重・北海道・関東の主要クラスターとTSMC・キオクシア・ラピダスなど最新動向をデータとともに整理。"
weight: 10
mapProvider: "osm"
galleryDir: "japan-semiconductor"
mapPins:
  - { lat: 42.821, lng: 141.652, label: "北海道（千歳）", type: "factory", note: "ロジック半導体（ラピダス 2nm）" }
  - { lat: 39.286, lng: 141.114, label: "東北（岩手・北上）", type: "factory", note: "NANDフラッシュ（キオクシア北上）" }
  - { lat: 36.342, lng: 140.447, label: "関東（茨城）", type: "factory", note: "車載マイコン・研究開発" }
  - { lat: 34.964, lng: 136.625, label: "三重（四日市）", type: "factory", note: "NANDフラッシュ（キオクシア）" }
  - { lat: 34.427, lng: 132.744, label: "広島（東広島）", type: "factory", note: "DRAM・HBM（マイクロン）" }
  - { lat: 32.879, lng: 130.768, label: "九州（熊本）", type: "factory", note: "ロジック・CMOSイメージセンサー（TSMC・ソニー）", link: "/industry/japan-semiconductor/kyushu/" }
---

## [日本](/rule/asia/japan/)の半導体産業集積地とは

<figure style="float:right;clear:right;margin:0 0 14px 22px;max-width:min(420px,45%);">
  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Rapidus_factory_under_construction.jpg?width=420" alt="建設中のラピダス千歳工場" loading="lazy" style="width:100%;height:auto;border-radius:6px;display:block;" />
  <figcaption style="font-size:0.85em;color:#555;margin-top:6px;text-align:center;line-height:1.45;">北海道千歳市で建設中のラピダス（Rapidus）IIM-1工場<br/>画像: <a href="https://commons.wikimedia.org/wiki/File:Rapidus_factory_under_construction.jpg" target="_blank" rel="noopener noreferrer">どういたしまして / Wikimedia Commons (CC BY-SA 4.0)</a></figcaption>
</figure>

半導体製造では設計・材料・前工程・後工程の各段階が高度に専門化しており、企業が地理的に集積することでサプライチェーンの効率化が図られています。[日本](/rule/asia/japan/)は<span style="font-weight:700">材料・製造装置</span>で世界的な競争力を持ちながら、2000年代以降はファブ（前工程製造）の国際競争力が低下してきました。[日本](/rule/asia/japan/)の半導体産業は現在、材料（シリコンウェーハ・フォトレジスト・ガス）では世界シェア30〜50%を占め、製造装置では世界第2〜3位の地位を保有しています{{% cite "joga_material_survey" %}}{{% cite "meti_semi_ref" %}}。2021年以降の経済安全保障政策を契機に、TSMCの熊本誘致・ラピダス設立など国内製造能力の再建が進んでいます{{% cite "meti2023" %}}。

<div class="stat-grid">
  <div class="stat-card"><div class="stat-num">約6.5兆円<span class="stat-sub">（2025年度見込み・政府目標2030年15兆円）</span>{{% cite "meti_semi_strategy" %}}</div><div class="stat-label">国内半導体生産額</div></div>
  <div class="stat-card"><div class="stat-num">6地域<span class="stat-sub">（九州・東北・三重・広島・関東・北海道）</span></div><div class="stat-label">主要産業集積地</div></div>
  <div class="stat-card"><div class="stat-num">月産5.5万枚<span class="stat-sub">（300mm・2024年12月量産開始）</span>{{% cite "meti_semi_plan" %}}</div><div class="stat-label">TSMC熊本第1工場</div></div>
  <div class="stat-card"><div class="stat-num">2027年量産目標<span class="stat-sub">（2025年試作ライン稼働・EUV調整中）</span>{{% cite "meti_rapidus" %}}</div><div class="stat-label">ラピダス（北海道千歳）</div></div>
</div>

<figure>
  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/JASM_Kumamoto.JPG?width=720" alt="JASM (TSMC熊本第1工場) 外観" loading="lazy" />
  <figcaption>熊本県菊陽町のJASM (Japan Advanced Semiconductor Manufacturing)。TSMC・ソニー・デンソー・トヨタ出資の合弁で、2024年12月に量産を開始した九州半導体クラスターの中核拠点。<br/>画像: <a href="https://commons.wikimedia.org/wiki/File:JASM_Kumamoto.JPG" target="_blank" rel="noopener noreferrer">JASM Kumamoto / Wikimedia Commons (CC BY-SA 4.0)</a></figcaption>
</figure>

## 主要集積地一覧

| 集積地 | 所在地 | 主な産業 | 詳細 |
| ------ | ------ | -------- | ---- |
| <span style="font-weight:700">九州半導体クラスター</span> | 熊本・大分・長崎 | ロジック・CMOSイメージセンサー（TSMC・ソニー・ルネサス）{{% cite "siiq2023" %}} | [詳細 →](/industry/japan-semiconductor/kyushu/) |
| 東北（岩手・北上） | 岩手県北上市 | NANDフラッシュメモリ（キオクシア北上工場）。※宮城PSMC計画は2024年末に提携解消で中止 | 準備中 |
| 三重・四日市 | 三重県四日市市 | NANDフラッシュメモリ（キオクシア・ウェスタンデジタル） | 準備中 |
| 広島（東広島） | 広島県東広島市 | DRAM・HBM（マイクロンメモリジャパン）。生成AI需要で高帯域幅メモリ（HBM）の最先端拠点 | 準備中 |
| 北海道千歳 | 北海道千歳市 | 最先端ロジック2nm（ラピダス）。2025年にIIM-1試作ライン稼働、2027年量産目標 | 準備中 |

### パワー半導体

上記のロジック・メモリ集積地に加え、[日本](/rule/asia/japan/)はパワー半導体でも世界的な競争力を維持しています{{% cite "meti_semi_ref" %}}{{% cite "meti2023" %}}。EV・再エネ向けの需要拡大により、その重要性が高まっています。

| 企業 | 主要拠点 | 製品 |
| ---- | -------- | ---- |
| ローム | 宮崎・福岡 | SiCパワーデバイス（EV向けインバーター） |
| 三菱電機 | 福岡（パワーデバイス製作所） | IGBTモジュール（鉄道・産業機器） |
| 富士電機 | 長野・北陸 | パワーモジュール（再エネ・産業向け） |
| 東芝 | 石川（加賀） | パワーMOSFET・SiCデバイス |

## 半導体サプライチェーンの概要

{{% mermaid %}}
graph LR
  A["シリコン原料"]-->B["シリコンウェーハ\n信越化学・SUMCO"]
  B-->C["前工程\n露光・成膜・エッチング"]
  C-->D["後工程\n封止・パッケージ"]
  D-->E["最終製品\nスマートフォン・車載・AI"]
  F["フォトレジスト\nJSR・信越・東京応化"]-->C
  G["製造装置\n東京エレクトロン・キヤノン"]-->C
  style A fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
  style F fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
  style G fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
  style B fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style C fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style D fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style E fill:#d1fae5,color:#065f46,stroke:#10b981,stroke-width:2px
{{% /mermaid %}}

## 半導体集積地の生産能力と素材シェア

<div class="shosha-chart-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:24px;margin:28px 0;">
<div style="background:#fff;border-radius:10px;box-shadow:0 1px 8px rgba(0,0,0,.07);padding:20px;text-align:center;">
<strong>日本の主要半導体工場 — 製品タイプ別の月産能力（300mm換算・千枚/月）</strong>
<canvas id="bar-semi-cap" style="max-height:340px;margin-top:8px;"></canvas>
</div>
<div style="background:#fff;border-radius:10px;box-shadow:0 1px 8px rgba(0,0,0,.07);padding:20px;text-align:center;">
<strong>300mmウェーハ供給 世界シェア（2024年）</strong>
<canvas id="pie-wafer" style="max-height:280px;margin-top:8px;"></canvas>
</div>
</div>

※ 月産能力は各社IR・業界レポート等から300mm換算で概算。200mmラインは面積比（300mm≒2.25枚分）で換算。Rapidus千歳は建設中のため計画値（斜線表示）。ウェーハシェアは信越化学・SUMCO各社IR{{% cite "shinetsu_ir" %}}{{% cite "sumco_ir" %}}および業界推定に基づく。

<script type="module">
import { Chart, ArcElement, Tooltip, Legend, DoughnutController,
         BarController, BarElement, CategoryScale, LinearScale }
  from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/+esm';
Chart.register(ArcElement, Tooltip, Legend, DoughnutController,
               BarController, BarElement, CategoryScale, LinearScale);

/* ---- 横棒グラフ：製品タイプ別月産能力 ---- */
var barLabels = [
  'NANDフラッシュ\n（四日市・北上）',
  'ロジック・MCU\n（JASM熊本・ルネサス等）',
  'CMOSイメージセンサー\n（ソニー熊本・長崎）',
  'DRAM・HBM\n（マイクロン広島）',
  'パワー半導体\n（宮崎・福岡・長野等）',
  '最先端2nm\n（Rapidus千歳・建設中）'
];
var barData   = [250, 120, 105, 95, 55, 10];
var barColors = ['#1565c0','#b71c1c','#6a1b9a','#e65100','#2e7d32','#bdbdbd'];

/* 建設中（Rapidus）にストライプパターンを適用 */
var cvs = document.createElement('canvas'); cvs.width=10; cvs.height=10;
var pctx = cvs.getContext('2d');
pctx.fillStyle='#e0e0e0'; pctx.fillRect(0,0,10,10);
pctx.strokeStyle='#9e9e9e'; pctx.lineWidth=2;
pctx.beginPath(); pctx.moveTo(0,10); pctx.lineTo(10,0); pctx.stroke();
var stripePattern = pctx.createPattern(cvs,'repeat');
barColors[5] = stripePattern;

new Chart(document.getElementById('bar-semi-cap'), {
  type:'bar',
  data:{
    labels: barLabels,
    datasets:[{
      data: barData,
      backgroundColor: barColors,
      borderWidth: 0,
      barThickness: 28
    }]
  },
  options:{
    indexAxis:'y',
    responsive:true,
    plugins:{
      legend:{ display:false },
      tooltip:{
        callbacks:{
          label:function(ctx){
            var v = ctx.parsed.x;
            var suffix = ctx.dataIndex===5 ? '（計画値）' : '';
            return ' ' + v + '千枚/月' + suffix;
          }
        }
      }
    },
    scales:{
      x:{
        title:{ display:true, text:'千枚/月（300mm換算）', font:{size:11} },
        beginAtZero:true,
        grid:{ color:'rgba(0,0,0,.06)' }
      },
      y:{
        ticks:{ font:{size:10}, autoSkip:false },
        grid:{ display:false }
      }
    }
  }
});

/* ---- ドーナツ：300mmウェーハ世界シェア ---- */
var pieOpts = {
  responsive: true,
  plugins: {
    legend: { position:'bottom', labels:{ font:{size:10}, padding:8, boxWidth:12 } },
    tooltip: {
      callbacks: {
        label: function(ctx) {
          var t = ctx.dataset.data.reduce(function(a,b){return a+b},0);
          return ' ' + ctx.label + ' (' + (ctx.parsed/t*100).toFixed(1) + '%)';
        }
      }
    }
  }
};

new Chart(document.getElementById('pie-wafer'), {
  type:'doughnut',
  data:{
    labels:['信越化学（日本）','SUMCO（日本）','GlobalWafers（台湾）','SK Siltron（韓国）','Siltronic（独）','その他'],
    datasets:[{data:[32, 24, 17, 13, 8, 6],
      backgroundColor:['#b71c1c','#c62828','#00838f','#f9a825','#546e7a','#9e9e9e']}]
  }, options:pieOpts
});
</script>

## 関連企業の時価総額マップ

半導体製造・装置・材料に関わる主要上場企業の時価総額を可視化しています。

{{% corp-treemap "6758,6723,8035,4063,3436,6857,6963,6966,6258,6146,7735,6871,4185,4186,6920,6594,6762,6981,6502,6702,6701" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体デバイス（ロジック・イメージセンサー）</td></tr>
<tr>
<td>ソニーグループ</td>
<td>{{% minkabu 6758 %}}</td>
<td>CMOSイメージセンサーで世界首位（シェア約50%）{{% cite "sony_ir" %}}。熊本県菊陽町・合志市・長崎県諫早市・大分県に主力工場を保有し、スマートフォン・車載カメラ向けの高精度積層型センサーを供給。TSMC熊本工場（JASM）へ約6%出資し、ウェーハ調達を確保。半導体トップメーカーとしての地位確立</td>
<td>{{% corplink "https://www.sony.com/ja/SonyInfo/IR/" %}}</td>
<td>{{% dividend "tokyo" "6758" %}}</td>
</tr>
<tr>
<td>ルネサスエレクトロニクス</td>
<td>{{% minkabu 6723 %}}</td>
<td>車載マイコン・SoC世界首位級の設計製造企業。熊本県熊本市南区川尻工場（40nm/90nm車載マイコン主力）、大分県大分市工場（300mm ADAS向けSoC）の2拠点でロジック製造を展開。TSMC熊本との地理的近接による技術連携が強み</td>
<td>{{% corplink "https://www.renesas.com/jp/ja/about/investor-relations" %}}</td>
<td>{{% dividend "tokyo" "6723" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体デバイス（パワー半導体・その他）</td></tr>
<tr>
<td>ローム</td>
<td>{{% minkabu 6963 %}}</td>
<td>SiC（シリコンカーバイド）パワー半導体でEV向けインバーター・パワーコンディショナー市場を開拓。京都本社のほか、宮崎・福岡に九州拠点を保有し、パワーデバイス製造の重要生産基地として機能</td>
<td>{{% corplink "https://www.rohm.co.jp/ir" %}}</td>
<td>{{% dividend "tokyo" "6963" %}}</td>
</tr>
<tr>
<td>東芝</td>
<td>{{% minkabu 6502 %}}</td>
<td>NAND型フラッシュメモリ開発の歴史を持つ総合電機企業。パワーMOSFET・SiCデバイス、CPU・SSD事業を展開。石川県加賀市にパワーデバイス製造拠点を保有し、次世代電子機器向けの重要企業</td>
<td>{{% corplink "https://www.global.toshiba/ww/ir/corporate.html" %}}</td>
<td>{{% dividend "tokyo" "6502" %}}</td>
</tr>
<tr>
<td>富士通</td>
<td>{{% minkabu 6702 %}}</td>
<td>LSI・マイクロプロセッサ設計企業。サーバー・HPC向けプロセッサで業界的な知見を活用。SPARC64アーキテクチャなど独自技術で大規模データセンター向け高性能チップを展開</td>
<td>{{% corplink "https://global.fujitsu/ja-jp/ir" %}}</td>
<td>{{% dividend "tokyo" "6702" %}}</td>
</tr>
<tr>
<td>日本電気</td>
<td>{{% minkabu 6701 %}}</td>
<td>LSI・光通信デバイス開発企業。サーバー・ネットワーク機器向けプロセッサで技術的な優位性を保持。通信インフラの高度化に伴う需要増加で成長基盤を整備</td>
<td>{{% corplink "https://www.nec.com/en/global/ir/index.html" %}}</td>
<td>{{% dividend "tokyo" "6701" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体材料（シリコンウェーハ・フォトレジスト）</td></tr>
<tr>
<td>信越化学工業</td>
<td>{{% minkabu 4063 %}}</td>
<td>シリコンウェーハ世界首位（シェア約42%）{{% cite "shinetsu_ir" %}}。300mm・450mmウェーハの大型化・高品質化で TSMC・ソニーなど最先端メーカーへ供給。フォトレジストでも世界的シェアを保有し、半導体製造の基盤素材を支配</td>
<td>{{% corplink "https://www.shinetsu.co.jp/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4063" %}}</td>
</tr>
<tr>
<td>SUMCO</td>
<td>{{% minkabu 3436 %}}</td>
<td>シリコンウェーハ専業で世界2位（シェア約18%）{{% cite "sumco_ir" %}}。佐賀県伊万里地区を主力生産地とし、2024〜2025年に新工場が相次ぎ稼働。TSMC熊本工場への最短距離でのウェーハ納入体制を構築し、九州半導体クラスター発展の重要な部品供給企業</td>
<td>{{% corplink "https://www.sumcosi.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3436" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体製造装置</td></tr>
<tr>
<td>東京エレクトロン</td>
<td>{{% minkabu 8035 %}}</td>
<td>半導体製造装置世界第3〜4位（Applied Materials・ASML・Lam Researchと競合）。塗布現像装置で世界シェア1位。熊本県合志市に開発・生産子会社「東京エレクトロン九州」を置き、JASM熊本工場向けに最先端装置を納入。九州半導体クラスターの装置産業を代表する存在</td>
<td>{{% corplink "https://www.tel.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "8035" %}}</td>
</tr>
<tr>
<td>SCREENホールディングス</td>
<td>{{% minkabu 7735 %}}</td>
<td>ウェーハ洗浄装置で世界シェア1位の製造装置企業。コーター・デベロッパー装置も手がけ、半導体前工程装置の「裏方」として不可欠な地位を保有。EUV露光対応装置への需要増加で成長基盤を強化</td>
<td>{{% corplink "https://www.screen.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7735" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体製造装置（搬送・その他）</td></tr>
<tr>
<td>平田機工</td>
<td>{{% minkabu 6258 %}}</td>
<td>生産ライン全体の設計・製造を行う機械製造企業。半導体・自動車・パネル産業向けの搬送装置・自動化設備で高度なシステムソリューションを提供。熊本本社の立地から九州半導体クラスター発展への地の利も大きい</td>
<td>{{% corplink "https://www.hirata.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6258" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 検査・計測・後工程装置</td></tr>
<tr>
<td>アドバンテスト</td>
<td>{{% minkabu 6857 %}}</td>
<td>半導体テスト装置で世界首位級の企業。生成AI・HBM向けメモリテスター、ロジック向けテスト機の需要急増で急成長。テスト工程の重要性が高まる中、競争力の強化が加速</td>
<td>{{% corplink "https://www.advantest.com/ja/investors" %}}</td>
<td>{{% dividend "tokyo" "6857" %}}</td>
</tr>
<tr>
<td>ディスコ</td>
<td>{{% minkabu 6146 %}}</td>
<td>ダイシング・グラインディング装置で世界シェア約70～80%{{% cite "disco_ir" %}}。半導体後工程の精密加工分野で圧倒的な独占的地位を確保。微細化・3D IC化に対応する高精度装置開発で技術的優位を維持</td>
<td>{{% corplink "https://www.disco.co.jp/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6146" %}}</td>
</tr>
<tr>
<td>レーザーテック</td>
<td>{{% minkabu 6920 %}}</td>
<td>半導体ウェーハ検査・計測装置で世界トップシェアの企業。微細化・EUV露光対応の検査装置で革新的技術を展開。次世代チップの不良検出において競争力を確保し、歩留まり向上に貢献</td>
<td>{{% corplink "https://www.lasertec.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6920" %}}</td>
</tr>
<tr>
<td>日本マイクロニクス</td>
<td>{{% minkabu 6871 %}}</td>
<td>プローブカード（半導体テスト用高精密治具）の世界3位メーカー。メモリ向けプローブカードで約33%のシェアを確保。テスト装置メーカーと連携し、半導体品質保証の重要な位置づけを確保</td>
<td>{{% corplink "https://www.mjc.co.jp/en/ir/" %}}</td>
<td>{{% dividend "tokyo" "6871" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体材料（フォトレジスト・その他）</td></tr>
<tr>
<td>JSR</td>
<td>{{% minkabu 4185 %}}</td>
<td>フォトレジスト・電子材料で世界的シェアを保有する化学企業。EUV露光対応の次世代レジスト開発で業界をリード。電子材料事業による付加価値の高い製品展開で競争力を強化</td>
<td>{{% corplink "https://www.jsr.co.jp/jsr_e/ir/" %}}</td>
<td>{{% dividend "tokyo" "4185" %}}</td>
</tr>
<tr>
<td>東京応化工業</td>
<td>{{% minkabu 4186 %}}</td>
<td>フォトレジスト・半導体用ケミカルス供給の重要企業。EUV露光用高精度レジスト開発に注力し、次世代チップ製造での技術的なポジション強化。川崎本社から全球顧客へ最先端材料を供給</td>
<td>{{% corplink "https://www.tok.co.jp/eng" %}}</td>
<td>{{% dividend "tokyo" "4186" %}}</td>
</tr><tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ パッケージング・部品</td></tr>
<tr>
<td>三井ハイテック</td>
<td>{{% minkabu 6966 %}}</td>
<td>リードフレーム（半導体パッケージング用金属部品）で世界大手。EV向けモーターコア製造が急成長。北九州本社の立地から九州半導体・電子機器産業の重要なパッケージング・部品サプライヤーとしての役割を担当</td>
<td>{{% corplink "https://www.mitsui-high-tec.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "6966" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 電子部品（コンデンサ・センサー・モーター）</td></tr>
<tr>
<td>村田製作所</td>
<td>{{% minkabu 6981 %}}</td>
<td>積層セラミックコンデンサで世界首位（シェア40%以上）のメーカー。センサー・無線モジュール・高周波デバイスで多様なエレクトロニクス企業に供給。AI・5G・EV向けの電子部品需要で成長基盤を強化</td>
<td>{{% corplink "https://corporate.murata.com/ja-jp/ir" %}}</td>
<td>{{% dividend "tokyo" "6981" %}}</td>
</tr>
<tr>
<td>TDK</td>
<td>{{% minkabu 6762 %}}</td>
<td>フェライト・センサー・電源モジュールで世界的な競争力を保有。スマートフォン・自動車・IoT向けの電子部品で多岐の顧客層に供給。HDD減衰に伴うタービンモーター向けから、EV・自動運転向け高機能部品への展開を強化</td>
<td>{{% corplink "https://www.tdk.com/ja/ir/index.html" %}}</td>
<td>{{% dividend "tokyo" "6762" %}}</td>
</tr>
<tr>
<td>ニデック</td>
<td>{{% minkabu 6594 %}}</td>
<td>小型モーター・精密機械で世界的企業。HDD冷却ファン・カメラモーターからEV駆動モーター向け高機能製品へ事業をシフト。超小型・高効率・高品質の製品開発で業界をリード</td>
<td>{{% corplink "https://www.nidec.com/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6594" %}}</td>
</tr>
</tbody>
</table>
</div>


{{% references %}}
disco_ir: 株式会社ディスコ「会社情報」<https://www.disco.co.jp/eg/corporate/history/index.html>
joga_material_survey: 日本半導体製造装置・材料協会（SEAJ）「半導体材料産業の国際競争力分析」<https://www.seaj.or.jp/>
meti2023: 半導体・デジタル産業戦略の今後の方向性 <https://www.meti.go.jp/policy/mono_info_service/joho/conference/semicon_digital/0014/handeji14-4.pdf>
meti_rapidus: 経済産業省「ポスト5G情報通信システム基盤強化研究開発事業（先端半導体製造技術の開発（委託））」<https://www.meti.go.jp/policy/mono_info_service/joho/post5g/pdf/240402_theme_01.pdf>
meti_semi_plan: 経済産業省「認定特定半導体生産施設整備等計画について」<https://www.meti.go.jp/policy/mono_info_service/joho/laws/semiconductor/semiconductor_plan.html>
meti_semi_ref: 経済産業省「参考資料（半導体）」（2024年12月）<https://www.meti.go.jp/press/2024/12/20241227006/20241227006-13.pdf>
meti_semi_strategy: 経済産業省「半導体・デジタル産業戦略（改定案・概要版）」（2023年4月）<https://www.meti.go.jp/policy/mono_info_service/joho/conference/semicon_digital/0008/3gaiyou.pdf>
shinetsu_ir: 信越化学工業株式会社「Annual Report 2024」<https://www.shinetsu.co.jp/wp-content/uploads/2024/07/Annual-Report-2024-for-printing.pdf>
siiq2023: 九州地域半導体・エレクトロニクス分野関連企業マップ（九州半導体・エレクトロニクスイノベーション協議会、2023年）<https://siiq.or.jp/wp-content/uploads/2023/11/%E4%B9%9D%E5%B7%9E%E5%9C%B0%E5%9F%9F%E5%8D%8A%E5%B0%8E%E4%BD%93%E3%83%BB%E3%82%A8%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AD%E3%83%8B%E3%82%AF%E3%82%B9%E5%88%86%E9%87%8E%E9%96%A2%E9%80%A3%E4%BC%81%E6%A5%AD%E3%83%9E%E3%83%83%E3%83%97.pdf>
sony_ir: ソニーグループ株式会社「有価証券報告書・統合報告書」<https://www.sony.com/ja/SonyInfo/IR/library/yu.html>
sumco_ir: 株式会社SUMCO「IR情報」<https://www.sumcosi.com/ir/>
murata_ir: 株式会社村田製作所「投資家情報」（証券コード: 6981）<https://corporate.murata.com/ja-jp/ir>
tdk_ir: TDK株式会社「投資家情報」（証券コード: 6762）<https://www.tdk.com/ja/ir/index.html>
nec_ir: 日本電気株式会社「投資家情報」（証券コード: 6701）<https://www.nec.com/ja/ir/>
fujitsu_sparc: 富士通株式会社「SPARC64プロセッサ」<https://www.fujitsu.com/jp/products/computing/servers/unix/sparc/>
{{% /references %}}
