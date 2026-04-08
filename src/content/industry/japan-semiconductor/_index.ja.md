---
title: "日本の半導体産業集積地"
subtitle: "シリコンアイランド九州・東北シリコンロード・北海道新拠点"
date: 2026-03-25
lastmod: 2026-03-25
description: "日本の半導体産業集積地を解説。九州・東北・三重・北海道・関東の主要クラスターとTSMC・キオクシア・ラピダスなど最新動向をデータとともに整理。"
weight: 10
mapName: "japan"
galleryDir: "japan-semiconductor"
---

<script>
(function() {
  var pins = [
    { x: 490, y: 145, label: '北海道（千歳）', url: '/industry/japan-semiconductor/hokkaido/', ready: false,
      industry: 'ロジック半導体（ラピダス 2nm）' },
    { x: 470, y: 295, label: '東北（岩手・北上）', url: '/industry/japan-semiconductor/tohoku/', ready: false,
      industry: 'NANDフラッシュ（キオクシア北上）' },
    { x: 449, y: 424, label: '関東（茨城）', url: '/industry/japan-semiconductor/kanto/', ready: false,
      industry: '車載マイコン・研究開発' },
    { x: 298, y: 487, label: '三重（四日市）', url: '/industry/japan-semiconductor/mie/', ready: false,
      industry: 'NANDフラッシュ（キオクシア）' },
    { x: 200, y: 488, label: '広島（東広島）', url: '/industry/japan-semiconductor/hiroshima/', ready: false,
      industry: 'DRAM・HBM（マイクロン）' },
    { x: 88, y: 558, label: '九州（熊本）', url: '/industry/japan-semiconductor/kyushu/', ready: true,
      industry: 'ロジック・CMOSイメージセンサー（TSMC・ソニー）' },
  ];

  function addPins() {
    var mapEl = document.getElementById('world-map');
    if (!mapEl) return;
    var svg = mapEl.querySelector('svg');
    if (!svg) { setTimeout(addPins, 300); return; }

    pins.forEach(function(pin) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'kombinat-pin');
      g.style.cursor = pin.ready ? 'pointer' : 'default';

      if (pin.ready) {
        var titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        titleEl.textContent = pin.label + ' — ' + pin.industry;
        g.appendChild(titleEl);
      }

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y - 6);
      glow.setAttribute('r', '13');
      glow.setAttribute('fill', pin.ready ? 'rgba(99,102,241,0.18)' : 'rgba(200,200,200,0.1)');
      glow.setAttribute('stroke', pin.ready ? 'rgba(99,102,241,0.6)' : 'rgba(180,180,180,0.3)');
      glow.setAttribute('stroke-width', '1.5');

      var star = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      star.setAttribute('x', pin.x);
      star.setAttribute('y', pin.y);
      star.setAttribute('font-size', '20');
      star.setAttribute('fill', pin.ready ? '#6366f1' : 'rgba(255,255,255,0.25)');
      star.setAttribute('text-anchor', 'middle');
      star.setAttribute('dominant-baseline', 'middle');
      star.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      star.textContent = pin.ready ? '★' : '☆';

      var textLen = pin.label.length;
      var bgW = textLen * 9 + 8;
      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', pin.y + 6);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', '14');
      labelBg.setAttribute('fill', pin.ready ? 'rgba(67,56,202,0.85)' : 'rgba(50,50,50,0.5)');
      labelBg.setAttribute('rx', '3');

      var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pin.x);
      label.setAttribute('y', pin.y + 16);
      label.setAttribute('font-size', '9');
      label.setAttribute('fill', pin.ready ? '#fff' : 'rgba(255,255,255,0.4)');
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      label.textContent = pin.label;

      g.appendChild(glow);
      g.appendChild(star);
      g.appendChild(labelBg);
      g.appendChild(label);

      if (pin.ready) {
        g.addEventListener('click', function() { window.location.href = pin.url; });
      }
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

<figure>
  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Silicon_Photonics_300mm_wafer.JPG?width=720" alt="300mmシリコンウェーハ" loading="lazy" />
  <figcaption>300mmシリコンウェーハの一例。[日本](/rule/asia/japan/)は信越化学とSUMCOで世界シェアの過半を占める。<br/>画像: <a href="https://commons.wikimedia.org/wiki/File:Silicon_Photonics_300mm_wafer.JPG" target="_blank" rel="noopener noreferrer">Silicon Photonics 300mm wafer / Wikimedia Commons (CC BY-SA 4.0)</a></figcaption>
</figure>

## [日本](/rule/asia/japan/)の半導体産業集積地とは

半導体製造では設計・材料・前工程・後工程の各段階が高度に専門化しており、企業が地理的に集積することでサプライチェーンの効率化が図られています。[日本](/rule/asia/japan/)は<span style="font-weight:700">材料・製造装置</span>で世界的な競争力を持ちながら、2000年代以降はファブ（前工程製造）の国際競争力が低下してきました。[日本](/rule/asia/japan/)の半導体産業は現在、材料（シリコンウェーハ・フォトレジスト・ガス）では世界シェア30〜50%を占め、製造装置では世界第2〜3位の地位を保有しています{{% cite "joga_material_survey" %}}{{% cite "meti_semi_ref" %}}。2021年以降の経済安全保障政策を契機に、TSMCの熊本誘致・ラピダス設立など国内製造能力の再建が進んでいます{{% cite "meti2023" %}}。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">国内半導体生産額</p>
    <p class="stat-card__value">約6.5兆</p>
    <p class="stat-card__unit">円（2025年度見込み・政府目標2030年15兆円）{{% cite "meti_semi_strategy" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">主要産業集積地</p>
    <p class="stat-card__value">6</p>
    <p class="stat-card__unit">地域（九州・東北・三重・広島・関東・北海道）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">TSMC熊本第1工場</p>
    <p class="stat-card__value">月産5.5万</p>
    <p class="stat-card__unit">枚（300mm・2024年12月量産開始）{{% cite "meti_semi_plan" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">ラピダス（北海道千歳）</p>
    <p class="stat-card__value">2027</p>
    <p class="stat-card__unit">年量産目標（2025年試作ライン稼働・EUV調整中）{{% cite "meti_rapidus" %}}</p>
  </div>
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

## 関連企業の時価総額マップ

半導体製造・装置・材料に関わる主要上場企業の時価総額を可視化しています。

{{% corp-treemap "6758,6723,8035,4063,3436,6857,6963,6966,6258,6146,7735,6871,4185,4186,6920,6594,6556,8564,6502,6702,5214" %}}

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
<td>CMOSイメージセンサー世界首位（シェア約50%）{{% cite "sony_ir" %}}。熊本・長崎に主力工場。JASM出資。</td>
<td>{{% corplink "https://www.sony.com/ja/SonyInfo/IR/" %}}</td>
<td>{{% dividend "tokyo" "6758" %}}</td>
</tr>
<tr>
<td>ルネサスエレクトロニクス</td>
<td>{{% minkabu 6723 %}}</td>
<td>車載マイコン・SoC世界首位級。九州に川尻・大分の2拠点。</td>
<td>{{% corplink "https://www.renesas.com/ja/about/investor-relations" %}}</td>
<td>{{% dividend "tokyo" "6723" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体デバイス（パワー半導体・その他）</td></tr>
<tr>
<td>ローム</td>
<td>{{% minkabu 6963 %}}</td>
<td>SiCパワー半導体でEV向けインバーター市場を開拓。九州に複数拠点。</td>
<td>{{% corplink "https://www.rohm.co.jp/investor-relations" %}}</td>
<td>{{% dividend "tokyo" "6963" %}}</td>
</tr>
<tr>
<td>東芝</td>
<td>{{% minkabu 6502 %}}</td>
<td>NAND型フラッシュメモリで世界的存在感。パワー半導体・CPU・SSD事業も展開。</td>
<td>{{% corplink "https://www.global.toshiba/en/" %}}</td>
<td>{{% dividend "tokyo" "6502" %}}</td>
</tr>
<tr>
<td>富士通</td>
<td>{{% minkabu 6702 %}}</td>
<td>LSI・マイクロプロセッサ設計。サーバー・HPC向けプロセッサで知見を活用。</td>
<td>{{% corplink "https://www.fujitsu.com/jp/" %}}</td>
<td>{{% dividend "tokyo" "6702" %}}</td>
</tr>
<tr>
<td>[日本](/rule/asia/japan/)電気</td>
<td>{{% minkabu 5214 %}}</td>
<td>LSI・光通信デバイスを展開。サーバー・ネットワーク向けの技術力が強み。</td>
<td>{{% corplink "https://www.nec.com/ja/" %}}</td>
<td>{{% dividend "tokyo" "5214" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体材料（シリコンウェーハ・フォトレジスト）</td></tr>
<tr>
<td>信越化学工業</td>
<td>{{% minkabu 4063 %}}</td>
<td>シリコンウェーハ世界首位（シェア約30%）{{% cite "shinetsu_ir" %}}。フォトレジストでも高シェア。</td>
<td>{{% corplink "https://www.shinetsu.co.jp/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4063" %}}</td>
</tr>
<tr>
<td>SUMCO</td>
<td>{{% minkabu 3436 %}}</td>
<td>シリコンウェーハ専業で世界2位（シェア約26%）{{% cite "sumco_ir" %}}。佐賀県伊万里に主力工場。</td>
<td>{{% corplink "https://www.sumcosi.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3436" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体製造装置</td></tr>
<tr>
<td>東京エレクトロン</td>
<td>{{% minkabu 8035 %}}</td>
<td>半導体製造装置世界第3位。塗布現像装置で世界シェア1位。九州に開発・生産子会社。</td>
<td>{{% corplink "https://www.tel.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "8035" %}}</td>
</tr>
<tr>
<td>SCREENホールディングス</td>
<td>{{% minkabu 7735 %}}</td>
<td>ウェーハ洗浄装置で世界シェア1位。コーター・デベロッパーも手がける。</td>
<td>{{% corplink "https://www.screen.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7735" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体製造装置（搬送・その他）</td></tr>
<tr>
<td>平田機工</td>
<td>{{% minkabu 6258 %}}</td>
<td>搬送装置・自動化設備で半導体工場向けソリューションを提供。</td>
<td>{{% corplink "https://www.hirata.jp/" %}}</td>
<td>{{% dividend "tokyo" "6258" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 検査・計測・後工程装置</td></tr>
<tr>
<td>アドバンテスト</td>
<td>{{% minkabu 6857 %}}</td>
<td>半導体テスト装置で世界首位級。AI半導体向けテスターの需要増で成長。</td>
<td>{{% corplink "https://www.advantest.com/ja/investors/" %}}</td>
<td>{{% dividend "tokyo" "6857" %}}</td>
</tr>
<tr>
<td>ディスコ</td>
<td>{{% minkabu 6146 %}}</td>
<td>ダイシング・グラインディング装置で世界シェア約80%{{% cite "disco_ir" %}}。精密加工装置の独占的企業。</td>
<td>{{% corplink "https://www.disco.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6146" %}}</td>
</tr>
<tr>
<td>Lasertec</td>
<td>{{% minkabu 6920 %}}</td>
<td>半導体検査・計測装置で世界トップシェア。EUV露光の検査装置も提供。</td>
<td>{{% corplink "https://www.lasertec.co.jp/" %}}</td>
<td>{{% dividend "tokyo" "6920" %}}</td>
</tr>
<tr>
<td>[日本](/rule/asia/japan/)マイクロニクス</td>
<td>{{% minkabu 6871 %}}</td>
<td>プローブカード（テスト治具）で半導体テスト装置向けに供給。</td>
<td>{{% corplink "https://www.nihon-micronics.co.jp/" %}}</td>
<td>{{% dividend "tokyo" "6871" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 半導体材料（フォトレジスト・その他）</td></tr>
<tr>
<td>JSR</td>
<td>{{% minkabu 4185 %}}</td>
<td>フォトレジストで世界的シェア。露光技術の進化に伴う高度な製品開発で競争力を維持。</td>
<td>{{% corplink "https://www.jsr.co.jp/" %}}</td>
<td>{{% dividend "tokyo" "4185" %}}</td>
</tr>
<tr>
<td>東京応化工業</td>
<td>{{% minkabu 4186 %}}</td>
<td>フォトレジスト・ケミカルス供給。EUV用材料の開発で注力。</td>
<td>{{% corplink "https://www.tokyo-ohka.co.jp/" %}}</td>
<td>{{% dividend "tokyo" "4186" %}}</td>
</tr><tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ パッケージング・部品</td></tr>
<tr>
<td>三井ハイテック</td>
<td>{{% minkabu 6966 %}}</td>
<td>リードフレーム世界大手。EV向けモーターコアが急成長。北九州に本社。</td>
<td>{{% corplink "https://www.mitsui-high-tec.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "6966" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 電子部品（コンデンサ・センサー・モーター）</td></tr>
<tr>
<td>村田製作所</td>
<td>{{% minkabu 8564 %}}</td>
<td>積層セラミックコンデンサで世界首位。センサー・無線モジュールも展開。半導体の需要変動に連動。</td>
<td>{{% corplink "https://www.murata.com/" %}}</td>
<td>{{% dividend "tokyo" "8564" %}}</td>
</tr>
<tr>
<td>TDK</td>
<td>{{% minkabu 6556 %}}</td>
<td>フェライト・センサー・電源モジュールで世界的競争力。スマートフォン・自動車向け部品が主要。</td>
<td>{{% corplink "https://www.tdk.com/ja/" %}}</td>
<td>{{% dividend "tokyo" "6556" %}}</td>
</tr>
<tr>
<td>[日本](/rule/asia/japan/)電産</td>
<td>{{% minkabu 6594 %}}</td>
<td>小型モーター・精密機械で世界的企業。HDD・冷却ファン・EV向けモーターに強み。</td>
<td>{{% corplink "https://www.nidec.com/ja/" %}}</td>
<td>{{% dividend "tokyo" "6594" %}}</td>
</tr>
</tbody>
</table>
</div>

## 参考文献

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
{{% /references %}}
