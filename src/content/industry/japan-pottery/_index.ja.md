---
title: "日本の焼き物産地"
subtitle: "六古窯から現代の主要産地まで — 全国陶磁器産地マップ"
date: 2026-03-25
lastmod: 2026-03-25
description: "日本全国の主要な焼き物産地を解説。六古窯・美濃・有田・九谷など30か所以上の産地を地図と一覧で整理。陶器と磁器の違い、産地ごとの特徴も解説。"
weight: 20
mapName: "japan"
---

<script>
(function() {
  // 産地ピン — ティール色で表示。above:true でラベルをマーカー上側に配置
  // 密集エリアの重なり回避：常滑・丹波・清水・笠間・薩摩は表から除外（地図には非表示）
  var pins = [
    { x: 450, y: 410, label: '益子（栃木）', above: false,
      note: '民芸陶器。濱田庄司が有名' },
    { x: 302, y: 420, label: '九谷（石川）', above: false,
      note: '色絵磁器。赤・緑・紫・紺・黄の五彩' },
    { x: 266, y: 440, label: '越前（福井）', above: true,
      note: '六古窯のひとつ。灰釉の渋い味わい' },
    { x: 330, y: 466, label: '瀬戸（愛知）', above: false,
      note: '六古窯・最大産地。「せともの」の語源' },
    { x: 268, y: 480, label: '信楽（滋賀）', above: false,
      note: '六古窯。たぬきの置物と自然釉' },
    { x: 218, y: 480, label: '備前（岡山）', above: true,
      note: '六古窯。釉薬を使わない焼き締め' },
    { x: 132, y: 488, label: '萩（山口）', above: true,
      note: '茶人好み。「一楽二萩三唐津」' },
    { x: 153, y: 524, label: '砥部（愛媛）', above: false,
      note: '白磁に藍色の絵付け。伊予の磁器' },
    { x: 76, y: 542, label: '有田（佐賀）', above: true,
      note: '日本磁器発祥地。1616年に磁器焼成成功' },
  ];

  function addPins() {
    var mapEl = document.getElementById('world-map');
    if (!mapEl) return;
    var svg = mapEl.querySelector('svg');
    if (!svg) { setTimeout(addPins, 300); return; }

    pins.forEach(function(pin) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'kombinat-pin');
      g.style.cursor = 'default';

      var titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      titleEl.textContent = pin.label + ' — ' + pin.note;
      g.appendChild(titleEl);

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y - 6);
      glow.setAttribute('r', '11');
      glow.setAttribute('fill', 'rgba(15,118,110,0.18)');
      glow.setAttribute('stroke', 'rgba(15,118,110,0.55)');
      glow.setAttribute('stroke-width', '1.5');

      var star = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      star.setAttribute('x', pin.x);
      star.setAttribute('y', pin.y);
      star.setAttribute('font-size', '16');
      star.setAttribute('fill', '#0f766e');
      star.setAttribute('text-anchor', 'middle');
      star.setAttribute('dominant-baseline', 'middle');
      star.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      star.textContent = '◆';

      var textLen = pin.label.length;
      var bgW = textLen * 8 + 6;
      var bgH = 13;
      // above:true → ラベルをマーカー上側に表示
      var bgY = pin.above ? (pin.y - 18 - bgH) : (pin.y + 4);
      var textY = pin.above ? (pin.y - 18 - bgH + 10) : (pin.y + 13);

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', bgY);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', 'rgba(14,78,70,0.85)');
      labelBg.setAttribute('rx', '3');

      var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pin.x);
      label.setAttribute('y', textY);
      label.setAttribute('font-size', '8');
      label.setAttribute('fill', '#fff');
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      label.textContent = pin.label;

      g.appendChild(glow);
      g.appendChild(star);
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

## 日本の陶磁器産地とは

日本の焼き物は、地域ごとに異なる土・釉薬・焼成方法から多彩な様式が生まれ、産地ごとに個性を持っています。中世から続く**日本六古窯**（常滑・瀬戸・越前・信楽・丹波・備前）はその起点であり、17世紀以降の磁器技術の発展により有田・九谷・清水など新たな産地が加わりました。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">日本六古窯</p>
    <p class="stat-card__value">6</p>
    <p class="stat-card__unit">か所（常滑・瀬戸・越前・信楽・丹波・備前）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">美濃焼の国内シェア</p>
    <p class="stat-card__value">約55</p>
    <p class="stat-card__unit">%（日本の陶磁器生産量・2022年）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">国内陶磁器出荷額</p>
    <p class="stat-card__value">約1,500</p>
    <p class="stat-card__unit">億円（2022年・経産省）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">有田焼 磁器焼成開始</p>
    <p class="stat-card__value">1616</p>
    <p class="stat-card__unit">年（李参平が日本初の磁器を焼成）</p>
  </div>
</div>

## 陶器と磁器 — 分類と特徴

| 分類 | 原料 | 焼成温度 | 透光性 | 代表産地 |
| ---- | ---- | -------- | ------ | -------- |
| **陶器**（土もの） | 陶土（地域の粘土） | 1,100〜1,250℃ | なし | 備前・信楽・萩・益子・唐津 |
| **炻器**（半磁器） | 陶土+石英 | 1,200〜1,300℃ | わずか | 常滑・越前・丹波 |
| **磁器**（石もの） | 陶石・カオリン | 1,250〜1,350℃ | あり | 有田・九谷・美濃・瀬戸・清水 |

## 焼成プロセス

{{% mermaid %}}
graph LR
  A["原料採取<br/>陶土・陶石"]-->B["精製・土練り<br/>鉄分除去・真空土練機"]
  B-->C["成形<br/>ろくろ・型・手びねり"]
  C-->D["乾燥<br/>自然乾燥・低温乾燥"]
  D-->E["素焼き<br/>800℃前後"]
  E-->F["釉薬がけ<br/>浸し・吹付・筆塗り"]
  F-->G["絵付け<br/>下絵・上絵・染付"]
  G-->H["本焼き<br/>1,100〜1,350℃"]
  H-->I["仕上げ・検品<br/>完成品"]
  style A fill:#374151,color:#fff,stroke:none
  style B fill:#1e3a5f,color:#fff,stroke:#2d5282
  style C fill:#1e3a5f,color:#fff,stroke:#2d5282
  style D fill:#1e3a5f,color:#fff,stroke:#2d5282
  style E fill:#1e3a5f,color:#fff,stroke:#2d5282
  style F fill:#1e3a5f,color:#fff,stroke:#2d5282
  style G fill:#1e3a5f,color:#fff,stroke:#2d5282
  style H fill:#1e3a5f,color:#fff,stroke:#2d5282
  style I fill:#065f46,color:#fff,stroke:none
{{% /mermaid %}}

## 主要産地一覧

### 関東

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| **笠間焼** | 茨城県笠間市 | 個性豊かな作家ものが多い。1,000人超の陶芸家が集積 | 陶器 |
| **益子焼** | 栃木県益子町 | 濱田庄司が民芸運動で全国に紹介。釉薬の素朴な表情 | 陶器 |

### 北陸・甲信越

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| **九谷焼** | 石川県能美市・加賀市 | 赤・緑・紫・紺・黄の五彩絵付け。「九谷五彩」 | 磁器 |
| **越前焼** | 福井県越前町 | 日本六古窯。灰釉の自然な風合い。壺・甕の名産地 | 陶器 |

### 東海

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| **美濃焼** | 岐阜県土岐市・多治見市ほか | 国内陶磁器生産の約55%を占める最大産地。志野・織部が代表 | 陶器・磁器 |
| **瀬戸焼** | 愛知県瀬戸市 | 日本六古窯。「せともの」の語源。灰釉・鉄釉の陶器 | 陶器・磁器 |
| **常滑焼** | 愛知県常滑市 | 日本六古窯。朱泥急須が有名。土管・建材でも大産地 | 炻器 |

### 近畿

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| **信楽焼** | 滋賀県甲賀市信楽町 | 日本六古窯。たぬきの置物と自然釉・焦げ肌 | 陶器 |
| **丹波焼（立杭焼）** | 兵庫県篠山市 | 日本六古窯。蹴ろくろで成形。素朴な灰釉 | 陶器 |
| **京焼・清水焼** | 京都市東山区ほか | 茶陶・色絵磁器の中心地。京の伝統工芸を代表する | 陶器・磁器 |

### 中国・四国

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| **備前焼** | 岡山県備前市 | 日本六古窯。釉薬なし・焼き締め。素地に土の表情 | 陶器 |
| **萩焼** | 山口県萩市 | 「一楽二萩三唐津」と称される茶陶の名産地 | 陶器 |
| **砥部焼** | 愛媛県砥部町 | 白磁に藍色の絵付け。日用食器として愛用 | 磁器 |

### 九州

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| **唐津焼** | 佐賀県唐津市 | 「一楽二萩三唐津」。シンプルで力強い土の表情 | 陶器 |
| **有田焼** | 佐賀県有田町 | 1616年に日本初の磁器焼成。白磁に染付・色絵の繊細な装飾 | 磁器 |
| **伊万里焼** | 佐賀県伊万里市 | 有田焼を伊万里港から輸出したことに由来。欧州向け輸出磁器として名声を得た | 磁器 |
| **薩摩焼** | 鹿児島県薩摩地域 | 白薩摩（色絵精緻）と黒薩摩（素朴・民陶）の2系統 | 陶器・磁器 |

## 産地の規模と担い手の変化

かつて産地の主力は**問屋・窯元システム**（窯元が素地を製造し、絵付師・問屋が流通を担う分業体制）でした。現代は次のような変化が起きています：

- **工業化産地**（美濃・瀬戸・常滑）：機械成形・トンネル窯で大量生産。飲食店向け業務用食器・タイル・衛生陶器に注力
- **作家産地**（笠間・益子・清水）：個人作家の工房が集積。陶芸教室・ギャラリーが観光資源に
- **伝統継承産地**（備前・萩・信楽）：手仕事の技法を守りつつ、個性的な作品を国内外に発信

{{% references %}}
meti2022: 経済産業省「工業統計調査 品目別統計表（窯業・土石製品）」（2022年）<https://www.meti.go.jp/statistics/tyo/kougyo/>
rokkoyo: 日本六古窯協議会「日本六古窯について」<https://www.nihon-rokkoyo.jp/>
{{% /references %}}
