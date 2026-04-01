---
title: "日本の石油・LPガス備蓄基地"
subtitle: "国家備蓄10基地＋LPガス備蓄5基地 — エネルギー安全保障の要"
date: 2026-03-29
lastmod: 2026-03-29
description: "日本の国家石油備蓄基地10か所とLPガス備蓄基地5か所を解説。地上タンク・地下岩盤・洋上貯蔵の3方式と、各基地の備蓄量・所在地・貯蔵方式を地図付きで整理。"
weight: 30
mapName: "japan"
---

<script>
(function() {
  // 石油備蓄基地（オレンジ●）とLPガス備蓄基地（ティール◆）
  var pins = [
    // 国家石油備蓄基地 10か所
    { x: 510, y: 142, label: '苫小牧東部', type: 'oil',
      note: '地上タンク・約640万kL' },
    { x: 490, y: 220, label: 'むつ小川原', type: 'oil',
      note: '地上タンク・約570万kL' },
    { x: 515, y: 262, label: '久慈', type: 'oil',
      note: '地下岩盤・約175万kL' },
    { x: 440, y: 260, label: '秋田', type: 'oil',
      note: '地上＋地下・約450万kL' },
    { x: 288, y: 436, label: '福井', type: 'oil',
      note: '地上タンク・約340万kL' },
    { x: 175, y: 509, label: '菊間', type: 'oil',
      note: '地下岩盤・約150万kL' },
    { x: 90, y: 510, label: '白島', type: 'oil', above: true,
      note: '洋上タンク・約560万kL' },
    { x: 32, y: 548, label: '上五島', type: 'oil',
      note: '洋上タンク・約440万kL' },
    { x: 72, y: 597, label: '串木野', type: 'oil',
      note: '地下岩盤・約175万kL' },
    { x: 95, y: 626, label: '志布志', type: 'oil',
      note: '地上タンク・約500万kL' },
    // 国家LPガス備蓄基地 5か所
    { x: 473, y: 431, label: '神栖(LPG)', type: 'lpg',
      note: '地上低温・約20万t' },
    { x: 332, y: 390, label: '七尾(LPG)', type: 'lpg',
      note: '地上低温・約25万t' },
    { x: 210, y: 486, label: '倉敷(LPG)', type: 'lpg',
      note: '地下岩盤・約40万t' },
    { x: 170, y: 516, label: '波方(LPG)', type: 'lpg',
      note: '地下岩盤・約45万t' },
    { x: 52, y: 534, label: '長崎福島(LPG)', type: 'lpg',
      note: '地上低温・約20万t（長崎県松浦市）' },
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

      var isOil = pin.type === 'oil';
      var color = isOil ? '#e07b20' : '#0f766e';
      var bgColor = isOil ? 'rgba(224,123,32,0.18)' : 'rgba(15,118,110,0.18)';
      var strokeColor = isOil ? 'rgba(224,123,32,0.55)' : 'rgba(15,118,110,0.55)';

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y - 6);
      glow.setAttribute('r', '10');
      glow.setAttribute('fill', bgColor);
      glow.setAttribute('stroke', strokeColor);
      glow.setAttribute('stroke-width', '1.5');

      var marker = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      marker.setAttribute('x', pin.x);
      marker.setAttribute('y', pin.y);
      marker.setAttribute('font-size', isOil ? '14' : '12');
      marker.setAttribute('fill', color);
      marker.setAttribute('text-anchor', 'middle');
      marker.setAttribute('dominant-baseline', 'middle');
      marker.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      marker.textContent = isOil ? '\u25CF' : '\u25C6';

      var textLen = pin.label.length;
      var bgW = textLen * 8 + 6;
      var bgH = 13;
      var isAbove = pin.above || false;
      var bgY = isAbove ? (pin.y - 18 - bgH) : (pin.y + 4);
      var textY = isAbove ? (pin.y - 18 - bgH + 10) : (pin.y + 13);

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', bgY);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', isOil ? 'rgba(154,82,10,0.85)' : 'rgba(14,78,70,0.85)');
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
      g.appendChild(marker);
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

## 日本の石油・LPガス備蓄制度

日本は原油の99.7%を輸入に依存しており{{% cite "enecho_oil_stats" %}}、中東情勢の緊迫や海上輸送路の途絶に備えた**国家備蓄**はエネルギー安全保障の要です。1975年の石油備蓄法制定以降、全国に備蓄基地が整備され、2004年からはJOGMEC（独立行政法人エネルギー・金属鉱物資源機構）が一括管理しています{{% cite "jogmec2024" %}}{{% cite "meti2024" %}}。

備蓄は**国家備蓄**（政府が直接保有）・**民間備蓄**（石油会社に義務付け）・**産油国共同備蓄**の3層構造で運用されています{{% cite "enecho2026" %}}。内訳は時期により変動しますが、国家備蓄が約90〜110日分、民間備蓄が約70〜90日分で、合計約200日分以上を確保しています{{% cite "enecho2026" %}}。IEA（国際エネルギー機関）の加盟国義務である90日分を大幅に上回る水準です。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">国家石油備蓄基地</p>
    <p class="stat-card__value">10</p>
    <p class="stat-card__unit">か所（合計約4,000万kL）{{% cite "jogmec_oil_method" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">国家LPガス備蓄基地</p>
    <p class="stat-card__value">5</p>
    <p class="stat-card__unit">か所（合計約150万トン）{{% cite "jogmec_lpg" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">石油備蓄日数（国家＋民間）</p>
    <p class="stat-card__value">約200</p>
    <p class="stat-card__unit">日分以上{{% cite "enecho2026" %}}</p>
  </div>
</div>

## 3つの貯蔵方式

| 方式 | 概要 | 代表基地 |
| ---- | ---- | -------- |
| **地上タンク** | 浮き屋根式の大型タンクを地上に設置。最も一般的 | 苫小牧東部・むつ小川原・福井・志布志 |
| **水封式地下岩盤タンク** | 地下の岩盤を掘削し、地下水圧で原油を封じ込める。地震・津波に強い | 久慈・秋田（一部）・菊間・串木野 |
| **洋上タンク** | 二重船殻の大型貯蔵船を沖合に係留。用地不要 | 白島（北九州沖）・上五島（長崎沖） |

### 水封式地下岩盤タンクの仕組み

水封式地下岩盤タンクは、地下数十mの堅い岩盤を掘削して空洞を作り、そこに原油やLPガスを貯蔵する方式です{{% cite "jogmec_system" %}}。空洞の周囲には常に**地下水が岩盤の亀裂を通じて浸透**しており、この地下水圧が原油の漏洩を防ぐ「水の壁」として機能します。原油は水よりも軽いため、水圧が原油を空洞内に押し留める原理です。

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">構造</span>
    <span class="process-step__name">地下岩盤の空洞</span>
    <span class="process-step__temp">深さ30〜50m</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">封じ込め</span>
    <span class="process-step__name">地下水圧</span>
    <span class="process-step__temp">水が油を押さえる</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step" style="border-color:#10b981;background:#ecfdf5;">
    <span class="process-step__label">利点</span>
    <span class="process-step__name">耐震・耐津波・低火災リスク</span>
  </div>
</div>

地上タンクに比べ、**地震に極めて強く火災リスクが低い**ことが最大の利点です。2011年の東日本大震災でも久慈基地（岩手県）は被害を受けず、地下備蓄の耐災害性が実証されました。また地上の土地を有効活用でき、景観への影響も少ないという特徴があります。

## 国家石油備蓄基地（10か所）

| 基地名 | 所在地 | 貯蔵方式 | 備蓄容量 | 完成年 |
| ------ | ------ | -------- | -------- | ------ |
| **苫小牧東部** | 北海道苫小牧市・厚真町 | 地上タンク（浮き屋根式55基） | 約640万kL{{% cite "tomabi" %}} | 1990年 |
| **むつ小川原** | 青森県六ヶ所村 | 地上タンク（浮き屋根式51基） | 約570万kL{{% cite "mutsu" %}} | 1985年 |
| **久慈** | 岩手県久慈市 | 水封式地下岩盤 | 約175万kL | 1993年 |
| **秋田** | 秋田県男鹿市 | 地上タンク＋地下岩盤 | 約450万kL | 1995年 |
| **福井** | 福井県福井市・坂井市 | 地上タンク（浮き屋根式30基） | 約340万kL | 1986年 |
| **菊間** | 愛媛県今治市菊間町 | 水封式地下岩盤 | 約150万kL | 1994年 |
| **白島** | 福岡県北九州市沖 | 洋上タンク（貯蔵船8隻） | 約560万kL | 1996年 |
| **上五島** | 長崎県新上五島町沖 | 洋上タンク（貯蔵船5隻） | 約440万kL | 1988年 |
| **串木野** | 鹿児島県いちき串木野市 | 水封式地下岩盤 | 約175万kL | 1994年 |
| **志布志** | 鹿児島県東串良町・肝付町 | 地上タンク（浮き屋根式43基） | 約500万kL{{% cite "shibushi" %}} | 1993年 |

## 国家LPガス備蓄基地（5か所）

LPガス（プロパン・ブタン）は家庭用・タクシー用・化学原料として重要であり、2005年以降に専用の国家備蓄基地が整備されました。

| 基地名 | 所在地 | 貯蔵方式 | 備蓄容量 | 完成年 |
| ------ | ------ | -------- | -------- | ------ |
| **神栖** | 茨城県神栖市 | 地上低温タンク | 約20万トン | 2005年 |
| **七尾** | 石川県七尾市 | 地上低温タンク | 約25万トン | 2005年 |
| **倉敷** | 岡山県倉敷市 | 水封式地下岩盤 | 約40万トン | 2013年 |
| **波方** | 愛媛県今治市波方町 | 水封式地下岩盤 | 約45万トン | 2013年 |
| **福島（長崎）** | 長崎県松浦市福島町 | 地上低温タンク | 約20万トン | 2005年 |

倉敷・波方の地下岩盤方式は世界最大規模のLPガス地下備蓄施設として知られています{{% cite "jogmec_lpg" %}}。

## 備蓄制度の3層構造

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">第1層</span>
    <span class="process-step__name">国家備蓄</span>
    <span class="process-step__temp">約90日分</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">第2層</span>
    <span class="process-step__name">民間備蓄</span>
    <span class="process-step__temp">約70日義務</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">第3層</span>
    <span class="process-step__name">産油国共同備蓄</span>
    <span class="process-step__temp">サウジ・UAE等</span>
  </div>
  <div class="process-arrow">＝</div>
  <div class="process-step" style="border-color:#10b981;background:#ecfdf5;">
    <span class="process-step__label">合計</span>
    <span class="process-step__name">約200日分以上</span>
    <span class="process-step__temp">IEA基準90日を超過</span>
  </div>
</div>

## 歴史的背景

{{% timeline %}}

| 年 | 出来事 |
|----|-------|
| 1973 | 第1次石油危機。原油価格が4倍に高騰し、日本経済に深刻な打撃 |
| 1975 | 石油備蓄法制定。国家備蓄制度の開始 |
| 1978 | 第2次石油危機。備蓄の重要性が再認識される |
| 1985 | むつ小川原基地完成（最初の大規模基地） |
| 1988 | 上五島基地完成（日本初の洋上備蓄） |
| 2004 | JOGMEC設立。全国の国家備蓄基地を一括管理に移行 |
| 2005 | LPガス国家備蓄基地3か所（神栖・七尾・福島）が完成 |
| 2011 | 東日本大震災。民間備蓄義務日数を70日→45日に引き下げ、市場への石油供給を確保 |
| 2013 | 倉敷・波方のLPガス地下岩盤備蓄が完成（世界最大規模） |
| 2022 | ロシアのウクライナ侵攻を受け、IEA加盟国と協調して国家備蓄を放出。日本は約1,500万バレルを供給{{% cite "meti_release2022" %}} |

{{% /timeline %}}

## 緊急時の備蓄放出実績

国家備蓄は「貯めておくだけ」ではなく、実際に危機時に放出された実績があります。

- **2011年 東日本大震災**: 製油所の被災により供給が逼迫。政府は民間備蓄義務日数を70日から45日に引き下げ、事実上の備蓄放出を行いました。また久慈基地（水封式地下岩盤）は震度5強の揺れにも被害なく、地下備蓄の耐震性が実証されました。
- **2022年 ウクライナ情勢**: ロシアのウクライナ侵攻に伴う原油価格高騰を受け、IEA加盟国と協調して日本は国家備蓄から約1,500万バレルを放出{{% cite "meti_release2022" %}}。日本のエネルギー安全保障政策における大きな転換点となりました。

## 関連企業の時価総額マップ

石油・LPガスの備蓄制度に関連する上流開発・元売り・LPガス企業の時価総額を可視化しています。

{{% corp-treemap "1605,5020,5019,5021,1662,8088,5009" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・備蓄との関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr>
<td>INPEX</td>
<td>{{% minkabu 1605 %}}</td>
<td>国内最大の石油・天然ガス開発企業。原油の上流開発で国家備蓄の供給源に直結。</td>
<td>{{% corplink "https://www.inpex.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "1605" %}}</td>
</tr>
<tr>
<td>ENEOSホールディングス</td>
<td>{{% minkabu 5020 %}}</td>
<td>国内最大の石油元売り。製油所で備蓄原油を精製し石油製品として供給。民間備蓄の最大の担い手。</td>
<td>{{% corplink "https://www.hd.eneos.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5020" %}}</td>
</tr>
<tr>
<td>出光興産</td>
<td>{{% minkabu 5019 %}}</td>
<td>国内第2位の石油元売り。民間備蓄義務を担う主要企業の一つ。</td>
<td>{{% corplink "https://www.idemitsu.com/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5019" %}}</td>
</tr>
<tr>
<td>コスモエネルギーHD</td>
<td>{{% minkabu 5021 %}}</td>
<td>国内第3位の石油元売り。アブダビ国営石油（ADNOC）が筆頭株主で中東との関係が深い。</td>
<td>{{% corplink "https://www.cosmo-energy.co.jp/ja/ir.html" %}}</td>
<td>{{% dividend "tokyo" "5021" %}}</td>
</tr>
<tr>
<td>石油資源開発（JAPEX）</td>
<td>{{% minkabu 1662 %}}</td>
<td>国内の石油・天然ガス開発を手がける。地下貯留技術はCCS事業にも展開。</td>
<td>{{% corplink "https://www.japex.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "1662" %}}</td>
</tr>
<tr>
<td>岩谷産業</td>
<td>{{% minkabu 8088 %}}</td>
<td>LPガス国内最大手。LPガス備蓄制度における民間備蓄の主要な担い手。水素ステーション事業も展開。</td>
<td>{{% corplink "https://www.iwatani.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "8088" %}}</td>
</tr>
<tr>
<td>富士石油</td>
<td>{{% minkabu 5009 %}}</td>
<td>袖ケ浦製油所（143千BD）を保有。旧アラビア石油の流れを汲む。</td>
<td>{{% corplink "https://www.foc.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5009" %}}</td>
</tr>
</tbody>
</table>
</div>

## 備蓄インフラの将来 — GXとの接点

既存の備蓄インフラは、カーボンニュートラル時代においても活用が検討されています。地下岩盤の大規模空洞は、将来的に**水素やアンモニア、CO2（CCS）**の貯蔵施設への転用が技術的に可能とされており、京葉コンビナートのGX推進協議会などで具体的な検討が進んでいます。石油備蓄基地が「化石燃料の貯蔵庫」から「次世代エネルギーのインフラ」へと役割を転換する可能性があります。

{{% references %}}
jogmec2024: JOGMEC「石油・天然ガス備蓄事業」（2024年）<https://www.jogmec.go.jp/activities/stockpiling/oilgas/reserves/index.html>
meti2024: 経済産業省 資源エネルギー庁「令和6年度から令和10年度までの石油・LPガス備蓄目標（案）について」資源・燃料分科会（2024年）<https://www.meti.go.jp/shingikai/enecho/shigen_nenryo/pdf/042_04_00.pdf>
enecho2026: 資源エネルギー庁「石油備蓄の現況」（2026年3月17日）<https://www.enecho.meti.go.jp/statistics/petroleum_and_lpgas/pl001/pdf/2026/260317oil.pdf>
tomabi: 苫小牧石油備蓄株式会社「会社概要」<https://www.tomabi.co.jp/company/outline.html>
mutsu: JOGMEC「むつ小川原国家石油備蓄基地」<https://www.jogmec.go.jp/about/domestic-offices/reserve-base/mutsu-ogawara.html>
shibushi: 志布志石油備蓄株式会社「施設概要」<https://www.shibushi.co.jp/facility/>
jogmec_lpg: JOGMEC「石油ガス備蓄事業の概要」<https://www.jogmec.go.jp/content/300376575.pdf>
jogmec_system: JOGMEC「備蓄の方式」<https://www.jogmec.go.jp/activities/stockpiling/oilgas/reserves/reserve-system.html>
enecho_oil_stats: 資源エネルギー庁「石油備蓄の現況」<https://www.enecho.meti.go.jp/statistics/petroleum_and_lpgas/pl001/>
meti_release2022: 経済産業省「IEA加盟国による石油の協調備蓄放出として民間備蓄義務量の追加引下げを行います」（2022年4月15日）<https://www.meti.go.jp/press/2022/04/20220415004/20220415004.html>
jogmec_oil_method: JOGMEC「国家石油備蓄方式の紹介」<https://www.jogmec.go.jp/library/stockpiling_oil_066.html>
{{% /references %}}
