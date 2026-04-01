---
title: "日本のコンビナート"
subtitle: "石油化学・鉄鋼コンビナートの全国分布マップ"
date: 2026-03-22
description: "日本全国の主要コンビナート8地区を地図で確認。エチレン生産能力・鉄鋼生産量・立地の経緯など、産業構造を深掘りする解説ページへのインデックス。"
weight: 10
mapName: "japan"
---

<script>
(function() {
  // コンビナートマーカー設定
  // 座標は japan.js の SVG座標系（645.8 × 700.4）に基づく
  var pins = [
    { x: 482, y: 160, label: '室蘭', url: '/industry/japan-combinat/muroran/', ready: false,
      industry: '製鉄' },
    { x: 472, y: 428, label: '鹿島', url: '/industry/japan-combinat/kashima/', ready: true,
      industry: '鉄鋼・石油化学' },
    { x: 441, y: 456, label: '京葉', url: '/industry/japan-combinat/keiyo/', ready: true,
      industry: '石油精製・石油化学・製鉄' },
    { x: 299, y: 487, label: '四日市', url: '/industry/japan-combinat/yokkaichi/', ready: false,
      industry: '石油化学' },
    { x: 252, y: 478, label: '堺・阪神', url: '/industry/japan-combinat/hanshin/', ready: false,
      industry: '石油精製・製鉄' },
    { x: 207, y: 489, label: '水島', url: '/industry/japan-combinat/mizushima/', ready: true,
      industry: '石油化学・製鉄・自動車' },
    { x: 147, y: 505, label: '周南', url: '/industry/japan-combinat/shunan/', ready: false,
      industry: '石油化学・化学' },
    { x: 118, y: 542, label: '大分', url: '/industry/japan-combinat/oita/', ready: false,
      industry: '石油精製・鉄鋼' },
  ];

  function addPins() {
    var mapEl = document.getElementById('world-map');
    if (!mapEl) return;
    var svg = mapEl.querySelector('svg');
    if (!svg) {
      setTimeout(addPins, 300);
      return;
    }

    pins.forEach(function(pin) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'kombinat-pin');
      g.style.cursor = pin.ready ? 'pointer' : 'default';

      // Tooltip title
      if (pin.ready) {
        var titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
        titleEl.textContent = pin.label + 'コンビナート — ' + pin.industry;
        g.appendChild(titleEl);
      }

      // Glow circle behind star
      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y - 6);
      glow.setAttribute('r', '13');
      glow.setAttribute('fill', pin.ready ? 'rgba(224,123,32,0.18)' : 'rgba(200,200,200,0.1)');
      glow.setAttribute('stroke', pin.ready ? 'rgba(224,123,32,0.6)' : 'rgba(180,180,180,0.3)');
      glow.setAttribute('stroke-width', '1.5');

      // Star mark
      var star = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      star.setAttribute('x', pin.x);
      star.setAttribute('y', pin.y);
      star.setAttribute('font-size', '20');
      star.setAttribute('fill', pin.ready ? '#e07b20' : 'rgba(255,255,255,0.25)');
      star.setAttribute('text-anchor', 'middle');
      star.setAttribute('dominant-baseline', 'middle');
      star.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      star.textContent = pin.ready ? '★' : '☆';

      // Label background
      var textLen = pin.label.length;
      var bgW = textLen * 9 + 8;
      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', pin.y + 6);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', '14');
      labelBg.setAttribute('fill', pin.ready ? 'rgba(30,58,95,0.85)' : 'rgba(50,50,50,0.5)');
      labelBg.setAttribute('rx', '3');

      // Label text
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

## 日本のコンビナートとは

「コンビナート（kombinat）」はロシア語に由来する語で、石油精製・石油化学・製鉄・電力などの施設が湾岸の埋立地に集積し、原材料・中間製品・エネルギーをパイプラインで融通し合う生産体系を指します。日本では1950〜70年代の**高度経済成長期**に、政府の「新産業都市」政策のもとで全国各地に建設されました。

2023年時点で日本にはエチレンプラントを持つ石油化学コンビナートが**8地区**存在します{{% cite "jpca2023" %}}。鉄鋼については高炉を持つ一貫製鉄所が東日本・西日本各地に立地しています。

## 主要コンビナート一覧

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">石油化学コンビナート</p>
    <p class="stat-card__value">8</p>
    <p class="stat-card__unit">地区（エチレンプラント保有）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">国内エチレン年産能力</p>
    <p class="stat-card__value">約630</p>
    <p class="stat-card__unit">万トン（2022年）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">粗鋼生産量（日本全体）</p>
    <p class="stat-card__value">約8,900</p>
    <p class="stat-card__unit">万トン（2022年）</p>
  </div>
</div>

| コンビナート | 所在地 | 主な産業 | 詳細 |
|------------|--------|---------|------|
| **京葉コンビナート** | 千葉県（市原・千葉・君津） | 石油精製・石油化学・製鉄・発電 | [詳細 →](/industry/japan-combinat/keiyo/) |
| **鹿島コンビナート** | 茨城県（鹿嶋・神栖） | 鉄鋼・石油化学・電力 | [詳細 →](/industry/japan-combinat/kashima/) |
| **水島コンビナート** | 岡山県倉敷市 | 石油精製・石油化学・製鉄・自動車 | [詳細 →](/industry/japan-combinat/mizushima/) |
| 四日市コンビナート | 三重県四日市市 | 石油化学・化学 | 準備中 |
| 堺・阪神コンビナート | 大阪府〜兵庫県 | 石油精製・製鉄 | 準備中 |
| 周南コンビナート | 山口県周南市 | 石油化学・化学・製鉄 | 準備中 |
| 大分コンビナート | 大分県大分市 | 石油精製・石油化学・鉄鋼 | 準備中 |
| 室蘭コンビナート | 北海道室蘭市 | 製鉄 | 準備中 |

## 関連企業の時価総額マップ

解説済みコンビナート（京葉・鹿島・水島）に関連する主要上場企業の時価総額を可視化しています。同一企業が複数のコンビナートに立地する場合も1回のみ表示されます。

{{% corp-treemap "5020,5019,5021,5009,5411,4005,4188,5401,3407,7211" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・コンビナートとの関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr>
<td>ENEOSホールディングス</td>
<td>{{% minkabu 5020 %}}</td>
<td>国内最大の石油元売り。京葉・鹿島・水島の3コンビナートに製油所を保有し、ナフサをコンビナートに供給。</td>
<td>{{% corplink "https://www.hd.eneos.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5020" %}}</td>
</tr>
<tr>
<td>日本製鉄</td>
<td>{{% minkabu 5401 %}}</td>
<td>国内最大の鉄鋼メーカー。鹿島・君津に一貫製鉄所。鹿島は2025年に1基体制へ移行。</td>
<td>{{% corplink "https://www.nipponsteel.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "5401" %}}</td>
</tr>
<tr>
<td>JFEホールディングス</td>
<td>{{% minkabu 5411 %}}</td>
<td>京葉（千葉）・水島に一貫製鉄所。自動車用ハイテン鋼板に強み。水島で電気炉転換に着手。</td>
<td>{{% corplink "https://www.jfe-holdings.co.jp/investor/" %}}</td>
<td>{{% dividend "tokyo" "5411" %}}</td>
</tr>
<tr>
<td>三菱ケミカルグループ</td>
<td>{{% minkabu 4188 %}}</td>
<td>京葉・鹿島・水島の3コンビナートに拠点。MMA世界シェア約30%。石化事業は分社化済。</td>
<td>{{% corplink "https://www.mitsubishichem-hd.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4188" %}}</td>
</tr>
<tr>
<td>住友化学</td>
<td>{{% minkabu 4005 %}}</td>
<td>京葉（千葉）・鹿島に拠点。鹿島はエチレン停止後、機能性化学品に集約。</td>
<td>{{% corplink "https://www.sumitomo-chem.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4005" %}}</td>
</tr>
<tr>
<td>出光興産</td>
<td>{{% minkabu 5019 %}}</td>
<td>京葉に国内最大規模の千葉製油所（220千BD）。三井化学とエチレン装置統合で合意。</td>
<td>{{% corplink "https://www.idemitsu.com/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5019" %}}</td>
</tr>
<tr>
<td>旭化成</td>
<td>{{% minkabu 3407 %}}</td>
<td>水島を発祥・主力拠点とする総合化学メーカー。LIBセパレーターで世界シェア30〜40%。</td>
<td>{{% corplink "https://www.asahi-kasei.com/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "3407" %}}</td>
</tr>
<tr>
<td>三菱自動車工業</td>
<td>{{% minkabu 7211 %}}</td>
<td>水島工場が国内唯一の軽自動車専用拠点。日産へのOEM供給が生産の大半。</td>
<td>{{% corplink "https://www.mitsubishi-motors.com/jp/investors/" %}}</td>
<td>{{% dividend "tokyo" "7211" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
jpca2023: みずほ産業調査 「石油化学工業の現状」. 2019年. https://www.mizuhobank.co.jp/corporate/industry/sangyou/pdf/1061_all.pdf
{{% /references %}}
