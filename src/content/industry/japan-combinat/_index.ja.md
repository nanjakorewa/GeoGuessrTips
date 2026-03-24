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
    { x: 462, y: 168, label: '室蘭', url: '/industry/japan-combinat/muroran/', ready: false,
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

{{% references %}}
jpca2023: 日本石油化学工業協会. 「石油化学工業の現状」. 2023年. https://www.jpca.or.jp/
{{% /references %}}
