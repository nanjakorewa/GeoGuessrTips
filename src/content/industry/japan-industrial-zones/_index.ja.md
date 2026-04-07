---
title: "日本の工業地帯・工業地域"
subtitle: "四大工業地帯から太平洋ベルトまで — 日本の製造業の地理的構造"
date: 2026-03-30
lastmod: 2026-03-30
description: "京浜・中京・阪神・北九州の四大工業地帯から、京葉・瀬戸内・鹿島臨海・東海・北陸・関東内陸の工業地域まで、日本の製造業の地理的構造を解説。"
weight: 50
mapName: "japan"
---

<script>
(function() {
  var pins = [
    // 四大工業地帯（オレンジ★）
    { x: 410, y: 448, label: '京浜', url: '', ready: false,
      note: '東京・横浜・川崎' },
    { x: 318, y: 478, label: '中京', url: '', ready: false,
      note: '名古屋・豊田・四日市' },
    { x: 250, y: 472, label: '阪神', url: '', ready: false,
      note: '大阪・神戸・堺' },
    { x: 95, y: 518, label: '北九州', url: '', ready: false,
      note: '北九州・大牟田' },
    // 工業地域（ティール★）
    { x: 472, y: 430, label: '鹿島臨海', url: '/industry/japan-industrial-zones/kashima/', ready: true,
      note: '鹿嶋・神栖' },
    { x: 445, y: 452, label: '京葉', url: '', ready: false,
      note: '千葉・市原・君津' },
    { x: 200, y: 490, label: '瀬戸内', url: '/industry/japan-industrial-zones/setouchi/', ready: true,
      note: '倉敷・福山・周南・今治' },
    { x: 345, y: 458, label: '東海', url: '', ready: false,
      note: '富士・浜松・静岡' },
    { x: 310, y: 410, label: '北陸', url: '', ready: false,
      note: '富山・金沢・福井' },
    { x: 430, y: 410, label: '関東内陸', url: '', ready: false,
      note: '宇都宮・太田・前橋' },
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

      var titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      titleEl.textContent = pin.label + '工業地帯 — ' + pin.note;
      g.appendChild(titleEl);

      var color = pin.ready ? '#e07b20' : 'rgba(255,255,255,0.35)';
      var bgFill = pin.ready ? 'rgba(224,123,32,0.18)' : 'rgba(200,200,200,0.1)';
      var strokeFill = pin.ready ? 'rgba(224,123,32,0.55)' : 'rgba(180,180,180,0.3)';
      var labelBgFill = pin.ready ? 'rgba(154,82,10,0.85)' : 'rgba(50,50,50,0.5)';
      var labelColor = pin.ready ? '#fff' : 'rgba(255,255,255,0.5)';

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y - 6);
      glow.setAttribute('r', '12');
      glow.setAttribute('fill', bgFill);
      glow.setAttribute('stroke', strokeFill);
      glow.setAttribute('stroke-width', '1.5');

      var star = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      star.setAttribute('x', pin.x);
      star.setAttribute('y', pin.y);
      star.setAttribute('font-size', '18');
      star.setAttribute('fill', color);
      star.setAttribute('text-anchor', 'middle');
      star.setAttribute('dominant-baseline', 'middle');
      star.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      star.textContent = pin.ready ? '\u2605' : '\u2606';

      var textLen = pin.label.length;
      var bgW = textLen * 9 + 8;
      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', pin.y + 6);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', '14');
      labelBg.setAttribute('fill', labelBgFill);
      labelBg.setAttribute('rx', '3');

      var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pin.x);
      label.setAttribute('y', pin.y + 16);
      label.setAttribute('font-size', '9');
      label.setAttribute('fill', labelColor);
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      label.textContent = pin.label;

      g.appendChild(glow);
      g.appendChild(star);
      g.appendChild(labelBg);
      g.appendChild(label);

      if (pin.ready && pin.url) {
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

## 日本の工業地帯・工業地域とは

日本の近代工業は、太平洋沿岸を中心に発展してきました。明治期から昭和にかけて形成された**四大工業地帯**（京浜・中京・阪神・北九州）に加え、高度経済成長期に開発された**工業地域**が「太平洋ベルト」と呼ばれる帯状の産業集積を形成しています。これらの地域は、日本の製造業を支える重要な役割を担っています。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">四大工業地帯</p>
    <p class="stat-card__value">4</p>
    <p class="stat-card__unit">京浜・中京・阪神・北九州</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">主な工業地域</p>
    <p class="stat-card__value">6</p>
    <p class="stat-card__unit">京葉・瀬戸内・鹿島臨海・東海・北陸・関東内陸</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">製造品出荷額1位</p>
    <p class="stat-card__value">中京</p>
    <p class="stat-card__unit">自動車産業が牽引</p>
  </div>
</div>

## 工業地帯・工業地域一覧

### 四大工業地帯

| 工業地帯 | 中心都市 | 主な産業 | 詳細 |
| -------- | -------- | -------- | ---- |
| **京浜工業地帯** | 東京・横浜・川崎 | 出版印刷・機械・化学・食品 | かつては国内最大だが、現在は全国シェア約8%まで低下{{% cite "meti_keihinkogyo" %}} |
| **中京工業地帯** | 名古屋・豊田・四日市 | 自動車・機械・石油化学 | 自動車産業が牽引。国内製造品出荷額1位{{% cite "meti_chukyo" %}} |
| **阪神工業地帯** | 大阪・神戸・堺 | 金属・化学・機械・繊維 | 近畿地域の産業基盤です。阪神淡路大震災後の再編を経験しました。 |
| **北九州工業地帯** | 北九州・大牟田 | 鉄鋼・化学（近年は衰退傾向） | かつての重工業中心地です。現在は産業転換が進行中です。 |

### 主な工業地域

| 工業地域 | 中心都市 | 主な産業 | 詳細 |
| -------- | -------- | -------- | ---- |
| **鹿島臨海工業地域** | 鹿嶋・神栖（茨城） | 鉄鋼・石油化学・電力 | [詳細 →](/industry/japan-industrial-zones/kashima/) |
| **京葉工業地域** | 千葉・市原・君津 | 石油精製・石油化学・製鉄 | 準備中 |
| **瀬戸内工業地域** | 倉敷・福山・周南・今治 | 石油化学・鉄鋼・造船・自動車 | [詳細 →](/industry/japan-industrial-zones/setouchi/) |
| **東海工業地域** | 富士・浜松・静岡 | 輸送機器・パルプ・楽器 | 準備中 |
| **北陸工業地域** | 富山・金沢・福井 | 化学繊維・医薬品・機械 | 準備中 |
| **関東内陸工業地域** | 宇都宮・太田・前橋 | 自動車部品・電気機械・食品 | 準備中 |

{{% references %}}
meti_census: 経済産業省「工業統計調査」<https://www.meti.go.jp/statistics/tyo/kougyo/>
meti_chukyo: 経済産業省「中京工業地帯の産業構造」<https://www.meti.go.jp/statistics/tyo/kougyo/>
meti_keihinkogyo: 経済産業省「京浜工業地帯の概要」<https://www.meti.go.jp/statistics/tyo/kougyo/>
{{% /references %}}
