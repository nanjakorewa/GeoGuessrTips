---
title: "日本の半導体産業集積地"
subtitle: "シリコンアイランド九州・東北シリコンロード・北海道新拠点"
date: 2026-03-25
lastmod: 2026-03-25
description: "日本の半導体産業集積地を解説。九州・東北・三重・北海道・関東の主要クラスターとTSMC・キオクシア・ラピダスなど最新動向をデータとともに整理。"
weight: 10
mapName: "japan"
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

## 日本の半導体産業集積地とは

半導体製造では設計・材料・前工程・後工程の各段階が高度に専門化しており、企業が地理的に集積することでサプライチェーンの効率化が図られています。日本は**材料・製造装置**で世界的な競争力を持ちながら、2000年代以降はファブ（前工程製造）の国際競争力が低下しました。2021年以降の経済安全保障政策を契機に、TSMCの熊本誘致・ラピダス設立など国内製造能力の再建が進んでいます{{% cite "meti2023" %}}。

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

## 主要集積地一覧

| 集積地 | 所在地 | 主な産業 | 詳細 |
| ------ | ------ | -------- | ---- |
| **九州半導体クラスター** | 熊本・大分・長崎 | ロジック・CMOSイメージセンサー（TSMC・ソニー・ルネサス） | [詳細 →](/industry/japan-semiconductor/kyushu/) |
| 東北（岩手・北上） | 岩手県北上市 | NANDフラッシュメモリ（キオクシア北上工場）。※宮城PSMC計画は2024年末に提携解消で中止 | 準備中 |
| 三重・四日市 | 三重県四日市市 | NANDフラッシュメモリ（キオクシア・ウェスタンデジタル） | 準備中 |
| 広島（東広島） | 広島県東広島市 | DRAM・HBM（マイクロンメモリジャパン）。生成AI需要で高帯域幅メモリ（HBM）の最先端拠点 | 準備中 |
| 北海道千歳 | 北海道千歳市 | 最先端ロジック2nm（ラピダス）。2025年にIIM-1試作ライン稼働、2027年量産目標 | 準備中 |

### パワー半導体

上記のロジック・メモリ集積地に加え、日本はパワー半導体でも世界的な競争力を維持しています{{% cite "meti_semi_ref" %}}。EV・再エネ向けの需要拡大により重要性が増しています。

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

{{% corp-treemap "6758,6723,8035,4063,3436,6857,6963,6966,6258,6146,7735,6871,4185,4186" %}}

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
<tr>
<td>ソニーグループ</td>
<td>{{% minkabu 6758 %}}</td>
<td>CMOSイメージセンサー世界首位（シェア約50%）。熊本・長崎に主力工場。JASM出資。</td>
<td>{{% corplink "https://www.sony.com/ja/SonyInfo/IR/" %}}</td>
<td>{{% dividend "tokyo" "6758" %}}</td>
</tr>
<tr>
<td>東京エレクトロン</td>
<td>{{% minkabu 8035 %}}</td>
<td>半導体製造装置世界第3位。塗布現像装置で世界シェア1位。九州に開発・生産子会社。</td>
<td>{{% corplink "https://www.tel.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "8035" %}}</td>
</tr>
<tr>
<td>信越化学工業</td>
<td>{{% minkabu 4063 %}}</td>
<td>シリコンウェーハ世界首位（シェア約30%）。フォトレジストでも高シェア。</td>
<td>{{% corplink "https://www.shinetsu.co.jp/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4063" %}}</td>
</tr>
<tr>
<td>アドバンテスト</td>
<td>{{% minkabu 6857 %}}</td>
<td>半導体テスト装置で世界首位級。AI半導体向けテスターの需要増で成長。</td>
<td>{{% corplink "https://www.advantest.com/ja/investors/" %}}</td>
<td>{{% dividend "tokyo" "6857" %}}</td>
</tr>
<tr>
<td>ルネサスエレクトロニクス</td>
<td>{{% minkabu 6723 %}}</td>
<td>車載マイコン・SoC世界首位級。九州に川尻・大分の2拠点。</td>
<td>{{% corplink "https://www.renesas.com/ja/about/investor-relations" %}}</td>
<td>{{% dividend "tokyo" "6723" %}}</td>
</tr>
<tr>
<td>ディスコ</td>
<td>{{% minkabu 6146 %}}</td>
<td>ダイシング・グラインディング装置で世界シェア約80%。精密加工装置の独占的企業。</td>
<td>{{% corplink "https://www.disco.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6146" %}}</td>
</tr>
<tr>
<td>SCREENホールディングス</td>
<td>{{% minkabu 7735 %}}</td>
<td>ウェーハ洗浄装置で世界シェア1位。コーター・デベロッパーも手がける。</td>
<td>{{% corplink "https://www.screen.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7735" %}}</td>
</tr>
<tr>
<td>SUMCO</td>
<td>{{% minkabu 3436 %}}</td>
<td>シリコンウェーハ専業で世界2位（シェア約26%）。佐賀県伊万里に主力工場。</td>
<td>{{% corplink "https://www.sumcosi.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3436" %}}</td>
</tr>
<tr>
<td>ローム</td>
<td>{{% minkabu 6963 %}}</td>
<td>SiCパワー半導体でEV向けインバーター市場を開拓。九州に複数拠点。</td>
<td>{{% corplink "https://www.rohm.co.jp/investor-relations" %}}</td>
<td>{{% dividend "tokyo" "6963" %}}</td>
</tr>
<tr>
<td>三井ハイテック</td>
<td>{{% minkabu 6966 %}}</td>
<td>リードフレーム世界大手。EV向けモーターコアが急成長。北九州に本社。</td>
<td>{{% corplink "https://www.mitsui-high-tec.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "6966" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
meti2023: 半導体・デジタル産業戦略の今後の方向性 <https://www.meti.go.jp/policy/mono_info_service/joho/conference/semicon_digital/0014/handeji14-4.pdf>
siiq2023: 九州地域半導体・エレクトロニクス分野関連企業マップ（九州半導体・エレクトロニクスイノベーション協議会、2023年）<https://siiq.or.jp/wp-content/uploads/2023/11/%E4%B9%9D%E5%B7%9E%E5%9C%B0%E5%9F%9F%E5%8D%8A%E5%B0%8E%E4%BD%93%E3%83%BB%E3%82%A8%E3%83%AC%E3%82%AF%E3%83%88%E3%83%AD%E3%83%8B%E3%82%AF%E3%82%B9%E5%88%86%E9%87%8E%E9%96%A2%E9%80%A3%E4%BC%81%E6%A5%AD%E3%83%9E%E3%83%83%E3%83%97.pdf>
meti_semi_strategy: 経済産業省「半導体・デジタル産業戦略（改定案・概要版）」（2023年4月）<https://www.meti.go.jp/policy/mono_info_service/joho/conference/semicon_digital/0008/3gaiyou.pdf>
meti_semi_plan: 経済産業省「認定特定半導体生産施設整備等計画について」<https://www.meti.go.jp/policy/mono_info_service/joho/laws/semiconductor/semiconductor_plan.html>
meti_rapidus: 経済産業省「ポスト5G情報通信システム基盤強化研究開発事業（先端半導体製造技術の開発（委託））」<https://www.meti.go.jp/policy/mono_info_service/joho/post5g/pdf/240402_theme_01.pdf>
meti_semi_ref: 経済産業省「参考資料（半導体）」（2024年12月）<https://www.meti.go.jp/press/2024/12/20241227006/20241227006-13.pdf>
{{% /references %}}
