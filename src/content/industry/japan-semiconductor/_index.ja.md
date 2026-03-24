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
    { x: 470, y: 295, label: '東北（岩手）', url: '/industry/japan-semiconductor/tohoku/', ready: false,
      industry: 'NANDフラッシュ（キオクシア北上）' },
    { x: 449, y: 424, label: '関東（茨城）', url: '/industry/japan-semiconductor/kanto/', ready: false,
      industry: '車載マイコン・研究開発' },
    { x: 298, y: 487, label: '三重（四日市）', url: '/industry/japan-semiconductor/mie/', ready: false,
      industry: 'NANDフラッシュ（キオクシア）' },
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
    <p class="stat-card__value">約4兆</p>
    <p class="stat-card__unit">円（2022年・経産省推計）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">主要産業集積地</p>
    <p class="stat-card__value">5</p>
    <p class="stat-card__unit">地域（九州・東北・三重・関東・北海道）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">TSMC熊本第1工場</p>
    <p class="stat-card__value">月産5.5万</p>
    <p class="stat-card__unit">枚（300mmウェーハ・2024年稼働）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">ラピダス 目標生産開始</p>
    <p class="stat-card__value">2027</p>
    <p class="stat-card__unit">年（2nmプロセス・北海道千歳）</p>
  </div>
</div>

## 主要集積地一覧

| 集積地 | 所在地 | 主な産業 | 詳細 |
| ------ | ------ | -------- | ---- |
| **九州半導体クラスター** | 熊本・大分・長崎 | ロジック・CMOSイメージセンサー（TSMC・ソニー・ルネサス） | [詳細 →](/industry/japan-semiconductor/kyushu/) |
| 東北シリコンロード | 岩手・宮城 | NANDフラッシュメモリ（キオクシア・マイクロン） | 準備中 |
| 三重・四日市 | 三重県四日市市 | NANDフラッシュメモリ（キオクシア・ウェスタンデジタル） | 準備中 |
| 関東（茨城・神奈川） | 茨城・神奈川 | 車載マイコン・R&D・材料（ルネサス・産総研） | 準備中 |
| 北海道千歳 | 北海道千歳市 | 最先端ロジック2nm（ラピダス・建設中） | 準備中 |

## 半導体サプライチェーンの概要

{{% mermaid %}}
graph LR
  A["シリコン原料"]-->B["シリコンウェーハ<br/>信越化学・SUMCO"]
  B-->C["前工程<br/>露光・成膜・エッチング"]
  C-->D["後工程<br/>封止・パッケージ"]
  D-->E["最終製品<br/>スマートフォン・車載・AI"]
  F["フォトレジスト<br/>JSR・信越・東京応化"]-->C
  G["製造装置<br/>東京エレクトロン・キヤノン"]-->C
  style A fill:#374151,color:#fff,stroke:none
  style F fill:#374151,color:#fff,stroke:none
  style G fill:#374151,color:#fff,stroke:none
  style B fill:#1e3a5f,color:#fff,stroke:#2d5282
  style C fill:#1e3a5f,color:#fff,stroke:#2d5282
  style D fill:#1e3a5f,color:#fff,stroke:#2d5282
  style E fill:#065f46,color:#fff,stroke:none
{{% /mermaid %}}

{{% references %}}
meti2023: 経済産業省「半導体・デジタル産業戦略（改訂版）」（2023年）<https://www.meti.go.jp/policy/mono_info_service/joho/pdf/semiconductor_strategy.pdf>
{{% /references %}}
