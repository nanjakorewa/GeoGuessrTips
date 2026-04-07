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

日本の焼き物は、地域ごとに異なる土・釉薬・焼成方法から多彩な様式が生まれ、産地ごとに個性を持っています。中世から続く<span style="font-weight:700">日本六古窯</span>（常滑・瀬戸・越前・信楽・丹波・備前）がその起点となり{{% cite "rokkoyo" %}}、17世紀以降の磁器技術の発展により有田・九谷・清水など新たな産地が加わっていきました。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">日本六古窯</p>
    <p class="stat-card__value">6</p>
    <p class="stat-card__unit">か所（常滑・瀬戸・越前・信楽・丹波・備前）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">美濃焼の国内シェア</p>
    <p class="stat-card__value">約50〜60</p>
    <p class="stat-card__unit">%（和洋飲食器・2022年）{{% cite "meti2022" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">国内陶磁器出荷額</p>
    <p class="stat-card__value">約1,500</p>
    <p class="stat-card__unit">億円（2022年・経産省）{{% cite "meti2022" %}}</p>
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
| <span style="font-weight:700">陶器</span>（土もの） | 陶土（地域の粘土） | 1,100〜1,250℃ | なし | 萩・益子・唐津・笠間・京焼（一部） |
| <span style="font-weight:700">炻器</span>（せっき） | 陶土（高温焼き締め） | 1,200〜1,300℃ | わずか | 備前・常滑・越前・丹波・信楽・万古 |
| <span style="font-weight:700">磁器</span>（石もの） | 陶石・カオリン | 1,250〜1,350℃ | あり | 有田・九谷・美濃・瀬戸・清水 |

## 焼成プロセス

<span style="font-weight:700">素地づくり</span>

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">原料</span>
    <span class="process-step__name">陶土・陶石</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">精製</span>
    <span class="process-step__name">土練り</span>
    <span class="process-step__temp">鉄分除去</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">成形</span>
    <span class="process-step__name">ろくろ・型</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">乾燥</span>
    <span class="process-step__name">自然・低温</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">素焼き</span>
    <span class="process-step__name">焼き締め</span>
    <span class="process-step__temp">800℃前後</span>
  </div>
</div>

<span style="font-weight:700">焼成・絵付け</span>

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">釉薬がけ</span>
    <span class="process-step__name">浸し・吹付</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step" style="border-color:#d97706;background:#fffbeb;">
    <span class="process-step__label">下絵付け</span>
    <span class="process-step__name">染付・鉄絵</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">本焼き</span>
    <span class="process-step__name">焼成</span>
    <span class="process-step__temp">1,100〜1,350℃</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step" style="border-color:#d97706;background:#fffbeb;">
    <span class="process-step__label">上絵付け</span>
    <span class="process-step__name">色絵・金彩</span>
    <span class="process-step__temp">九谷・有田等</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">上絵焼き</span>
    <span class="process-step__name">低温焼成</span>
    <span class="process-step__temp">800℃前後</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step" style="border-color:#10b981;background:#ecfdf5;">
    <span class="process-step__label">完成</span>
    <span class="process-step__name">仕上げ・検品</span>
  </div>
</div>

※上絵付け（色絵）を行わない産地（備前・信楽など）は本焼き後に仕上げとなります。

## 主要産地一覧

### 関東

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| <span style="font-weight:700">笠間焼</span> | 茨城県笠間市 | 個性豊かな作家ものが多い。1,000人超の陶芸家が集積 | 陶器 |
| <span style="font-weight:700">益子焼</span> | 栃木県益子町 | 濱田庄司が民芸運動で全国に紹介。釉薬の素朴な表情 | 陶器 |

### 北陸・甲信越

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| <span style="font-weight:700">九谷焼</span> | 石川県能美市・加賀市 | 赤・緑・紫・紺・黄の五彩絵付け。「九谷五彩」 | 磁器 |
| <span style="font-weight:700">越前焼</span> | 福井県越前町 | 日本六古窯。灰釉の自然な風合い。壺・甕の名産地 | 炻器（焼き締め） |

### 東海

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| <span style="font-weight:700">美濃焼</span> | 岐阜県土岐市・多治見市ほか | 和洋飲食器の国内シェア約50〜60%を占める最大産地{{% cite "meti2022" %}}。陶器から磁器まで幅広い器種を工業的に量産できる点が強みで、志野・織部などの伝統様式から業務用食器まで対応 | 陶器・磁器 |
| <span style="font-weight:700">瀬戸焼</span> | 愛知県瀬戸市 | 日本六古窯。「せともの」の語源。灰釉・鉄釉の陶器 | 陶器・磁器 |
| <span style="font-weight:700">常滑焼</span> | 愛知県常滑市 | 日本六古窯。朱泥急須が有名。土管・建材でも大産地 | 炻器 |

### 近畿

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| <span style="font-weight:700">信楽焼</span> | 滋賀県甲賀市信楽町 | 日本六古窯。たぬきの置物と自然釉・焦げ肌 | 炻器・陶器 |
| <span style="font-weight:700">丹波焼（立杭焼）</span> | 兵庫県丹波篠山市 | 日本六古窯。蹴ろくろで成形。素朴な灰釉 | 炻器（焼き締め） |
| <span style="font-weight:700">京焼・清水焼</span> | 京都市東山区ほか | 茶陶・色絵磁器の中心地。京の伝統工芸を代表する | 陶器・磁器 |

### 中国・四国

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| <span style="font-weight:700">備前焼</span> | 岡山県備前市 | 日本六古窯。釉薬なし・焼き締め。素地に土の表情 | 炻器 |
| <span style="font-weight:700">萩焼</span> | 山口県萩市 | 「一楽二萩三唐津」と称される茶陶の名産地 | 陶器 |
| <span style="font-weight:700">砥部焼</span> | 愛媛県砥部町 | 白磁に藍色の絵付け。日用食器として愛用 | 磁器 |

### 九州

| 産地 | 所在地 | 特徴 | 分類 |
| ---- | ------ | ---- | ---- |
| <span style="font-weight:700">唐津焼</span> | 佐賀県唐津市 | 「一楽二萩三唐津」。シンプルで力強い土の表情 | 陶器 |
| <span style="font-weight:700">有田焼</span> | 佐賀県有田町 | 1616年に日本初の磁器焼成。白磁に染付・色絵の繊細な装飾 | 磁器 |
| <span style="font-weight:700">伊万里焼</span> | 佐賀県伊万里市 | かつては有田焼の積出港に由来した名称。現在は伊万里市大川内山の「鍋島様式」など、同地で作られる磁器を指す | 磁器 |
| <span style="font-weight:700">薩摩焼</span> | 鹿児島県薩摩地域 | 白薩摩（色絵精緻）と黒薩摩（素朴・民陶）の2系統 | 陶器・磁器 |

## 産地の規模と担い手の変化

かつて産地の主力は<span style="font-weight:700">問屋・窯元システム</span>（窯元が素地を製造し、絵付師・問屋が流通を担う分業体制）でした。現代は次のような変化が起きているんです：

- <span style="font-weight:700">工業化産地</span>（美濃・瀬戸・常滑）：機械成形・トンネル窯で大量生産。飲食店向け業務用食器・タイル・衛生陶器に注力
- <span style="font-weight:700">作家産地</span>（笠間・益子・清水）：個人作家の工房が集積。陶芸教室・ギャラリーが観光資源に
- <span style="font-weight:700">伝統継承産地</span>（備前・萩・信楽）：手仕事の技法を守りつつ、個性的な作品を国内外に発信

## 焼き物から生まれたハイテク産業 — セラミックス技術の系譜

日本の焼き物産地で培われた窯業技術は、近代以降に<span style="font-weight:700">ファインセラミックス（精密陶磁器）</span>へと進化し、電子部品・半導体パッケージ・環境装置といったハイテク分野を生み出しました。特に愛知県の瀬戸・常滑・名古屋地区は、伝統窯業の集積が近代的セラミックス産業へ転換した好例となっています。

### 森村グループ — 食器から衛生陶器・碍子・スパークプラグへ

明治期に貿易商として創業した森村組（1876年設立）は、1904年に日本陶器（現ノリタケカンパニーリミテド）を設立して洋食器の国産化に成功しました{{% cite "morimura" %}}。この陶磁器製造で蓄積されたセラミックス焼成技術は、その後4つの上場企業を生み出しています。

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">1904年</span>
    <span class="process-step__name">日本陶器</span>
    <span class="process-step__temp">洋食器</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">1917年</span>
    <span class="process-step__name">東洋陶器</span>
    <span class="process-step__temp">衛生陶器（現TOTO）</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">1919年</span>
    <span class="process-step__name">日本碍子</span>
    <span class="process-step__temp">送電用碍子（現NGK）</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">1936年</span>
    <span class="process-step__name">日本特殊陶業</span>
    <span class="process-step__temp">スパークプラグ（現Niterra）</span>
  </div>
</div>

### 技術創出型 — セラミックスの電気特性から電子部品へ

窯業産地の系譜とは独立に、セラミックスの電気特性（絶縁性・圧電性・磁性）に着目して創業した企業群もいます。これらは伝統的な窯業からの転換ではなく、セラミックス材料の科学的研究を起点としているんです。日本のセラミックス電子部品は世界シェアで圧倒的な地位を占めており、MLCC・フェライト・セラミック基板で高いシェアを実現しています。

- <span style="font-weight:700">京セラ</span>（1959年創業）：稲盛和夫が京都で「京都セラミック」として設立{{% cite "kyocera_ir" %}}。ファインセラミックスから電子部品・太陽電池・半導体パッケージへと多角化。電子部品は売上高の約30%を占めています{{% cite "kyocera_ir" %}}
- <span style="font-weight:700">村田製作所</span>（1944年創業）：チタン酸バリウムの焼結技術からセラミックコンデンサ（MLCC）を事業化{{% cite "murata_history" %}}。MLCCで世界シェア約40%を占める業界圧倒的首位
- <span style="font-weight:700">TDK</span>（1935年創業）：磁性セラミックスである<span style="font-weight:700">フェライト</span>の工業化に世界で初めて成功{{% cite "tdk_history" %}}。電子部品・蓄電池へ展開。フェライトコアで世界有数のシェア
- <span style="font-weight:700">イビデン</span>（1912年創業）：揖斐川の水力発電によるカーバイド製造からスタートし、セラミック技術を蓄積{{% cite "ibiden_ir" %}}。現在はICパッケージ基板（有機基板が主力）とディーゼル排ガス浄化フィルター（DPF）の二本柱。DPFで欧州市場で高シェア

### 産地転換型 — 窯業産地から生まれた現代企業

こちらは伝統的な窯業産地の技術・人材が直接的に近代産業へ転換したケースなんです。これらの企業は地域の陶磁器産業の衰退に対応し、ハイテク分野での新たな成長を実現していきました。

- <span style="font-weight:700">LIXIL</span>（旧INAX）：常滑焼の伝統を持つ伊奈製陶（1924年設立）が衛生陶器・タイルに展開{{% cite "lixil_ir" %}}。現在はTOSTEMと統合し住宅設備大手に。温水洗浄便座「ウォシュレット」で世界的に知られる
- <span style="font-weight:700">MARUWA</span>（1946年創業）：瀬戸の窯業家・神戸家が電子用セラミック基板に転換{{% cite "maruwa_history" %}}。パワー半導体向けセラミック基板で世界有数のシェア。5G通信部品にも展開

## 関連企業の時価総額マップ

窯業・セラミックス技術に由来する主要上場企業の時価総額を可視化しています。

{{% corp-treemap "6971,6981,6762,5332,5333,5334,5331,5938,4062,5344" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・セラミックスとの関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ MLCC・フェライト・パワー半導体基板</td></tr>
<tr>
<td>京セラ</td>
<td>{{% minkabu 6971 %}}</td>
<td>稲盛和夫が「京都セラミック」として創業。ファインセラミックスから電子部品・太陽電池・半導体パッケージに展開。セラミックナイフでも知られる{{% cite "kyocera_ir" %}}。</td>
<td>{{% corplink "https://www.kyocera.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6971" %}}</td>
</tr>
<tr>
<td>村田製作所</td>
<td>{{% minkabu 6981 %}}</td>
<td>チタン酸バリウム系セラミックスの焜結技術を基盤に創業。積層セラミックコンデンサ（MLCC）で世界シェア約40%の圧倒的首位です{{% cite "murata_history" %}}。</td>
<td>{{% corplink "https://corporate.murata.com/ja-jp/ir" %}}</td>
<td>{{% dividend "tokyo" "6981" %}}</td>
</tr>
<tr>
<td>TDK</td>
<td>{{% minkabu 6762 %}}</td>
<td>磁性セラミックス「フェライト」の工業化企業として1935年に創業{{% cite "tdk_history" %}}。現在は電子部品・蓄電池（ATL）・センサーが収益の柱。</td>
<td>{{% corplink "https://www.tdk.com/ja/ir" %}}</td>
<td>{{% dividend "tokyo" "6762" %}}</td>
</tr>
<tr>
<td>MARUWA</td>
<td>{{% minkabu 5344 %}}</td>
<td>瀬戸の窯業家・神戸家が創業。パワー半導体向けセラミック基板・窒化アルミニウム基板で高シェア{{% cite "maruwa_history" %}}。5G通信部品にも展開。</td>
<td>{{% corplink "https://www.maruwa-g.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "5344" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 森村グループ系セラミックス多角化（食器・衛生陶器・碍子・スパークプラグ）</td></tr>
<tr>
<td>ノリタケカンパニーリミテド</td>
<td>{{% minkabu 5331 %}}</td>
<td>1904年に森村組が設立した日本陶器が前身。洋食器「ノリタケチャイナ」に加え、工業用研削砥石・電子セラミック部品を製造{{% cite "morimura" %}}。</td>
<td>{{% corplink "https://www.noritake.co.jp/company/ir/" %}}</td>
<td>{{% dividend "tokyo" "5331" %}}</td>
</tr>
<tr>
<td>TOTO</td>
<td>{{% minkabu 5332 %}}</td>
<td>1917年に日本陶器（現ノリタケ）から衛生陶器部門が独立して設立{{% cite "morimura" %}}。温水洗浄便座「ウォシュレット」で世界的に知られる。</td>
<td>{{% corplink "https://jp.toto.com/company/ir/" %}}</td>
<td>{{% dividend "tokyo" "5332" %}}</td>
</tr>
<tr>
<td>日本ガイシ（NGK）</td>
<td>{{% minkabu 5333 %}}</td>
<td>1919年に日本陶器の碍子部門が独立{{% cite "morimura" %}}。送電用セラミック碍子から出発し、NAS電池・DPF（排ガスフィルター）・半導体製造装置部品に展開。</td>
<td>{{% corplink "https://www.ngk.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5333" %}}</td>
</tr>
<tr>
<td>Niterra（旧日本特殊陶業）</td>
<td>{{% minkabu 5334 %}}</td>
<td>1936年に日本ガイシからスパークプラグ部門が独立{{% cite "morimura" %}}。自動車用点火プラグ世界首位。近年はセラミックス技術を活かし医療機器・固体酸化物形燃料電池（SOFC）にも多角化。</td>
<td>{{% corplink "https://www.ngkntk.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5334" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 窯業産地転換型（衛生陶器・タイル・ICパッケージ基板・DPF）</td></tr>
<tr>
<td>LIXIL</td>
<td>{{% minkabu 5938 %}}</td>
<td>常滑焼の伝統を持つ伊奈製陶（INAX）を母体の一つとする住宅設備大手{{% cite "lixil_ir" %}}。衛生陶器・タイル・水回り設備。常滑に「INAXライブミュージアム」を運営。</td>
<td>{{% corplink "https://www.lixil.com/jp/investor/" %}}</td>
<td>{{% dividend "tokyo" "5938" %}}</td>
</tr>
<tr>
<td>イビデン</td>
<td>{{% minkabu 4062 %}}</td>
<td>揖斐川の水力発電・カーバイド製造から出発し、セラミック技術を蓄積。現在の主力はICパッケージ基板（有機基板）とディーゼル排ガス浄化フィルター（DPF）の二本柱。DPFは欧州市場で高シェア{{% cite "ibiden_ir" %}}。</td>
<td>{{% corplink "https://www.ibiden.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4062" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
ibiden_ir: イビデン株式会社「会社概要」<https://www.ibiden.co.jp/company/profile/>
kyocera_ir: 京セラ株式会社「会社概要・沿革」<https://www.kyocera.co.jp/company/company_profile.html>
lixil_ir: 株式会社LIXIL「LIXILの歩み」<https://www.lixil.com/jp/about/history.html>
maruwa_history: 株式会社MARUWA「沿革」<https://www.maruwa-g.com/e/company/history.html>
meti2022: 経済産業省「工業統計調査 品目別統計表（窯業・土石製品）」（2022年）<https://www.e-stat.go.jp/stat-search/database?page=1&toukei=00550010&tstat=000001022686&cycle=7&tclass1=000001022790&metadata=1&data=1>
morimura: 森村グループ「グループについて」<https://www.morimura.co.jp/corporate/group.html>
murata_history: 株式会社村田製作所「ムラタの歩み」<https://corporate.murata.com/company/history>
rokkoyo: Six ancient kilns「日本六古窯について」<https://sixancientkilns.jp/about/>
tdk_history: TDK株式会社「TDKの歩み」<https://www.tdk.com/en/about_tdk/our_history/index.html>
{{% /references %}}
