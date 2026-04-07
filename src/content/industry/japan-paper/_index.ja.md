---
title: "日本の製紙・パルプ産業"
subtitle: "富士・苫小牧・四国中央・八代 — 紙のまちと巨大製紙工場群"
date: 2026-04-07
lastmod: 2026-04-07
description: "日本の製紙・パルプ産業を解説。王子HD・日本製紙・大王製紙・レンゴーの主要工場と、富士・苫小牧・四国中央市・八代・石巻・岩国の主要産地、古紙利用率世界トップクラスのリサイクル体制を一次資料に基づき整理。"
weight: 38
mapName: "japan"
---

<script>
(function() {
  // 製紙工場（緑●）と主要紙クラスター
  var pins = [
    { x: 510, y: 142, label: '苫小牧', type: 'paper',
      note: '王子製紙苫小牧工場（新聞用紙国内最大級）' },
    { x: 482, y: 230, label: '釧路', type: 'paper', above: true,
      note: '日本製紙釧路工場・王子マテリア釧路' },
    { x: 462, y: 218, label: '旭川', type: 'paper',
      note: '日本製紙旭川工場' },
    { x: 480, y: 350, label: '石巻', type: 'paper',
      note: '日本製紙石巻工場（書籍用紙約4割）' },
    { x: 380, y: 460, label: '富士', type: 'paper',
      note: '富士・富士宮 製紙クラスター（70社超集積）' },
    { x: 195, y: 502, label: '四国中央', type: 'paper',
      note: '大王製紙三島工場ほか（紙のまち日本一）' },
    { x: 158, y: 502, label: '岩国', type: 'paper', above: true,
      note: '日本製紙岩国工場（1939年〜）' },
    { x: 122, y: 580, label: '八代', type: 'paper',
      note: '日本製紙八代工場（九州唯一の多品種一貫生産）' },
    { x: 78, y: 600, label: '日南', type: 'paper',
      note: '王子製紙日南工場' },
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

      var color = '#15803d';
      var bgColor = 'rgba(21,128,61,0.18)';
      var strokeColor = 'rgba(21,128,61,0.55)';

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
      marker.setAttribute('font-size', '14');
      marker.setAttribute('fill', color);
      marker.setAttribute('text-anchor', 'middle');
      marker.setAttribute('dominant-baseline', 'middle');
      marker.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      marker.textContent = '\u25CF';

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
      labelBg.setAttribute('fill', 'rgba(20,83,45,0.85)');
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

## 日本の製紙・パルプ産業とは

製紙・パルプは、**大量の水・木材繊維・電力**を必要とする典型的な装置産業です。日本の製紙工場は、豊富な水（河川）と港湾を持つ地域に集中して立地しており、富士市・苫小牧・四国中央市・八代・石巻・岩国などが代表的な紙のまちとして知られています。

日本の紙・板紙生産量は中国・米国に次ぐ**世界第3位級**{{% cite "jpa_supply_demand" %}}で、2007年頃の約3,200万トンをピークに、印刷・新聞用紙の需要減少を背景に縮小傾向にあります。一方で、EC需要を背景に**段ボール原紙・板紙**は底堅く推移しており、業界全体としては**「印刷・情報用紙の縮小と段ボール・パッケージへのシフト」**が大きなトレンドとなっています{{% cite "jpa_supply_demand" %}}。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">国内紙・板紙生産量（2023年）</p>
    <p class="stat-card__value">約2,200</p>
    <p class="stat-card__unit">万トン{{% cite "jpa_supply_demand" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">古紙利用率</p>
    <p class="stat-card__value">65</p>
    <p class="stat-card__unit">%超（世界トップクラス）{{% cite "jpa_recycle" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">四国中央市 紙関連出荷額</p>
    <p class="stat-card__value">約5,100</p>
    <p class="stat-card__unit">億円（紙のまち日本一・20年連続）{{% cite "shikokuchuo_paper" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">主要4社</p>
    <p class="stat-card__value">王子・日本・大王・レンゴー</p>
    <p class="stat-card__unit">国内シェアの大半を占める</p>
  </div>
</div>

## 主要4社

### 王子ホールディングス（3861）

国内最大手で、世界の製紙メーカーの中でも上位に位置します。新聞用紙・板紙・段ボール・パルプ・産業用素材など幅広く展開しています{{% cite "oji_network" %}}。主要工場は次の通りです。

| 工場 | 所在地 | 主な製品 |
| ---- | ------ | -------- |
| **苫小牧工場** | 北海道苫小牧市 | 新聞用紙の国内最大級拠点 |
| 江別工場 | 北海道江別市 | 印刷・情報用紙 |
| 米子工場 | 鳥取県米子市 | 印刷用紙 |
| 春日井工場 | 愛知県春日井市 | 板紙・パッケージ |
| 富士工場 | 静岡県富士市 | 紙・板紙 |
| 呉工場 | 広島県呉市 | パルプ・板紙 |
| 日南工場 | 宮崎県日南市 | クラフトパルプ |

### 日本製紙（3863）

国内2位の総合製紙会社で、印刷・情報用紙・パッケージ・パルプを中核としています{{% cite "nipponpaper_factory" %}}。

| 工場 | 所在地 | 主な製品 |
| ---- | ------ | -------- |
| **石巻工場** | 宮城県石巻市 | 印刷・情報用紙の主力。書籍用紙の国内シェア約4割 |
| **富士工場** | 静岡県富士市 | 印刷・情報用紙 |
| **岩国工場** | 山口県岩国市 | 1939年{{% cite "nipponpaper_factory" %}}操業開始。塗工紙・化成品。CNF実証設備 |
| **八代工場** | 熊本県八代市 | 九州唯一の多品種・一貫生産工場 |
| 旭川・釧路工場 | 北海道 | 印刷用紙・パルプ |
| 勿来工場 | 福島県いわき市 | 板紙 |

### 大王製紙（3880）

国内3位。**愛媛県四国中央市三島工場** を中核とし、新聞用紙・段ボール原紙・衛生用紙（エリエール）まで幅広く展開しています{{% cite "daio_locations" %}}。三島工場は単一拠点としての規模が国内最大級。

### レンゴー（3941）

板紙・段ボール最大手で、国内段ボール市場でシェア約25%を持ちます{{% cite "rengo_outline" %}}。製紙工場5か所、段ボール工場25か所のネットワークを持ち、近年は EC 需要の拡大で成長しています。

## 主要産地クラスター

| 産地 | 特徴 |
| ---- | ---- |
| **富士・富士宮（静岡県）** | 全国紙生産量の約11%{{%cite "shizuoka_fuji_paper" %}}を占める一大集積地。約70社の製紙会社が立地し、富士山の伏流水を活用。紙・紙加工品出荷額は全国2位{{% cite "shizuoka_fuji_paper" %}} |
| **苫小牧（北海道）** | 王子製紙苫小牧工場が立地。新聞用紙の国内最大級の供給拠点{{% cite "oji_network" %}} |
| **四国中央市（愛媛県）** | 大王製紙三島工場・丸住製紙・リンテック・ユニ・チャームなどが集積。**紙関連製造品出荷額は約5,100億円超で日本一**（20年連続）。書道用紙の全国シェア約7割{{% cite "shikokuchuo_paper" %}} |
| **八代（熊本県）** | 日本製紙八代工場。球磨川の水を活用し、九州唯一の多品種一貫生産工場 |
| **石巻（宮城県）** | 日本製紙石巻工場。書籍用紙の国内シェア約4割。東日本大震災で大きな被害を受けたが復興 |
| **岩国（山口県）** | 日本製紙岩国工場。1939年{{%cite "nipponpaper_factory" %}}操業の伝統工場。CNF（セルロースナノファイバー）の実証拠点 |

### 「紙のまち」四国中央市

愛媛県四国中央市は、**紙関連製品の製造品出荷額が約5,100億円超で日本一**を20年連続で維持している、文字通り日本の紙の中心地です{{% cite "shikokuchuo_paper" %}}。市内には大王製紙三島工場をはじめ、丸住製紙、リンテック、ユニ・チャームなどの主要工場が立ち並びます。書道用紙の全国シェアは約7割に達し、ティッシュ・トイレットペーパーなど家庭紙の生産でも全国有数です。

## 古紙リサイクルとサーキュラーエコノミー

日本の古紙利用率は**65%超** と世界トップクラスで、特に板紙（段ボール用紙など）では**95%前後** {{% cite "jpa_recycle" %}}にまで達しています{{% cite "jpa_recycle" %}}。これは、自治体・古紙問屋・製紙メーカーが連携した日本独自の回収システムによるものです。

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">原料</span>
    <span class="process-step__name">木材パルプ</span>
    <span class="process-step__temp">輸入＋国内</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">原料</span>
    <span class="process-step__name">古紙</span>
    <span class="process-step__temp">利用率65%超</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">製造</span>
    <span class="process-step__name">紙・板紙</span>
    <span class="process-step__temp">2,200万t/年</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step" style="border-color:#10b981;background:#ecfdf5;">
    <span class="process-step__label">回収</span>
    <span class="process-step__name">古紙回収</span>
    <span class="process-step__temp">回収率約80%</span>
  </div>
</div>

## 産業の動向 — 段ボール・CNF・バイオマス

- **段ボール・パッケージの拡大**: EC需要の拡大により段ボール原紙・包装用紙が成長分野に。レンゴー・王子・日本製紙ともパッケージ分野を強化{{% cite "rengo_outline" %}}。
- **新聞・印刷用紙の縮小**: デジタル化とペーパーレス化により需要が減少。各社は工場の生産設備を統廃合し、輸出へシフト。王子製紙苫小牧工場のN-4マシンは2026年3月末停止予定{{% cite "oji_network" %}}。
- **CNF（セルロースナノファイバー）**: 日本製紙岩国・石巻工場、大王製紙三島工場、王子HDで量産・研究開発が進む。樹脂強化材・化粧品・食品・医療材料への応用{{% cite "nipponpaper_cnf" %}}。
- **バイオマス発電**: 製紙工程で生じる**黒液**（パルプ製造時の廃液）を燃焼してエネルギー回収する**「自家バイオマス発電」**は、日本の製紙業界の標準的な取り組み。日本製紙の勇払バイオマス発電所など、独立した発電事業も展開。

## 関連企業の時価総額マップ

国内主要4社と関連企業の時価総額を可視化しています。

{{% corp-treemap "3861,3863,3880,3941,3865" %}}

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
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 製紙総合（4大グループ）</td></tr>
<tr>
<td>王子ホールディングス</td>
<td>{{% minkabu 3861 %}}</td>
<td>国内最大手。苫小牧・米子・春日井・日南など主要工場多数。新聞用紙・板紙・パッケージ・パルプ・産業用素材{{% cite "oji_network" %}}。</td>
<td>{{% corplink "https://www.ojiholdings.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "3861" %}}</td>
</tr>
<tr>
<td>日本製紙</td>
<td>{{% minkabu 3863 %}}</td>
<td>国内2位の総合製紙。石巻・富士・岩国・八代を主力工場とし、印刷・情報用紙・パッケージ・パルプ・CNFを展開{{% cite "nipponpaper_factory" %}}。</td>
<td>{{% corplink "https://www.nipponpapergroup.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3863" %}}</td>
</tr>
<tr>
<td>大王製紙</td>
<td>{{% minkabu 3880 %}}</td>
<td>国内3位。四国中央市三島工場が中核。エリエールブランドの衛生用紙でも国内大手{{% cite "daio_locations" %}}。</td>
<td>{{% corplink "https://www.daio-paper.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "3880" %}}</td>
</tr>
<tr>
<td>レンゴー</td>
<td>{{% minkabu 3941 %}}</td>
<td>板紙・段ボール最大手（国内段ボールシェア約25%）。製紙5工場・段ボール25工場のネットワーク{{% cite "rengo_outline" %}}。</td>
<td>{{% corplink "https://www.rengo.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "3941" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 専業・中堅</td></tr>
<tr>
<td>北越コーポレーション</td>
<td>{{% minkabu 3865 %}}</td>
<td>新潟県長岡市本社。新潟工場を中核とした印刷・情報用紙・特殊紙・パッケージを展開。</td>
<td>{{% corplink "https://www.hokuetsucorp.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3865" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
daio_locations: 大王製紙株式会社「事業所一覧」<https://www.daio-paper.co.jp/company/base/>
jpa_recycle: 日本製紙連合会「古紙」<https://www.jpa.gr.jp/states/used-paper/>
jpa_supply_demand: 日本製紙連合会「紙・板紙」<https://www.jpa.gr.jp/states/paper/>
nipponpaper_cnf: 日本製紙株式会社「セルロースナノファイバー」<https://www.nipponpapergroup.com/products/cnf/>
nipponpaper_factory: 日本製紙グループ「事業所・工場一覧」<https://www.nipponpapergroup.com/about/branch/factory/>
oji_network: 王子ホールディングス株式会社「拠点一覧」<https://www.ojiholdings.co.jp/group/network.html>
rengo_outline: レンゴー株式会社「会社概要」<https://www.rengo.co.jp/company/outline/>
shikokuchuo_paper: 四国中央市「紙のまちのデータ」<https://www.city.shikokuchuo.ehime.jp/soshiki/22/37567.html>
shizuoka_fuji_paper: 富士市「富士の紙」<https://www.city.fuji.shizuoka.jp/sangyou/c0204/fmervo000000ah0r.html>
{{% /references %}}
