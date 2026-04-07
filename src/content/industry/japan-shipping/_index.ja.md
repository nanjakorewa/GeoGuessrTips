---
title: "日本の海運業"
subtitle: "外航・内航・商船隊 — 貿易立国を支える海のインフラ"
date: 2026-04-07
lastmod: 2026-04-07
description: "世界有数の海運国・日本の外航海運と内航海運を、日本商船隊の規模・主要港湾・大手3社（日本郵船・商船三井・川崎汽船）・船員と環境規制の両面から解説。地理・経済の視点で読み解く海運産業の全体像。"
weight: 41
mapName: "japan"
galleryDir: "shipping"
---

<script>
(function() {
  // 主要港湾ピン（国際戦略港湾・国際拠点港湾を中心に）
  var pins = [
    { x: 400, y: 455, label: '東京港',     type: 'strategic', note: '首都圏外貿コンテナの拠点。京浜港の中核' },
    { x: 394, y: 461, label: '横浜港',     type: 'strategic', note: '自動車輸出・コンテナ。京浜港の中核' },
    { x: 340, y: 480, label: '名古屋港',   type: 'hub',       note: '総取扱貨物量で国内首位級。自動車輸出の中心' },
    { x: 260, y: 500, label: '神戸港',     type: 'strategic', note: '阪神港の中核。西日本のコンテナゲートウェイ' },
    { x: 253, y: 503, label: '大阪港',     type: 'strategic', above: true, note: '阪神港の中核' },
    { x: 100, y: 522, label: '博多港',     type: 'hub',       note: '対アジアのコンテナ・RORO拠点' },
    {  x: 72, y: 540, label: '長崎港',     type: 'hub',       note: '造船・離島航路・クルーズ' },
    { x: 440, y: 460, label: '千葉港',     type: 'hub',       note: '取扱貨物量国内上位。原油・LNG・石化' },
    { x: 196, y: 486, label: '水島港',     type: 'hub',       note: '鉄鋼・石油化学コンビナート港' },
    { x: 150, y: 510, label: '北九州港',   type: 'hub',       note: '対アジアRORO・コンテナ' },
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

      var isStrategic = pin.type === 'strategic';
      var color = isStrategic ? '#b45309' : '#0e7490';
      var bgColor = isStrategic ? 'rgba(180,83,9,0.2)' : 'rgba(14,116,144,0.18)';
      var strokeColor = isStrategic ? 'rgba(180,83,9,0.6)' : 'rgba(14,116,144,0.55)';

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
      marker.setAttribute('font-size', isStrategic ? '14' : '12');
      marker.setAttribute('fill', color);
      marker.setAttribute('text-anchor', 'middle');
      marker.setAttribute('dominant-baseline', 'middle');
      marker.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      marker.textContent = isStrategic ? '\u2605' : '\u25CF';

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
      labelBg.setAttribute('fill', isStrategic ? 'rgba(180,83,9,0.85)' : 'rgba(14,78,70,0.85)');
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

## 日本の海運業の概要

資源の多くを輸入に依存する日本にとって、海運は経済と国民生活を支える基幹インフラです。**日本の貿易量（重量ベース）の99.6%は海上輸送**によって運ばれており{{% cite "mlit_maritime_report" %}}、原油・LNG・鉄鉱石・石炭といった一次資源から自動車・機械製品の輸出に至るまで、外航海運なしには一日たりとも経済は回りません。さらに国内物流においては、**内航海運が国内貨物輸送のおよそ4割（トンキロベース）**を担い、鉄鋼・石油製品・セメント・自動車などの産業基礎物資の長距離輸送を支えています{{% cite "mlit_naiko" %}}。

海運は大きく **外航海運**（国境を越えて物資を運ぶ）と **内航海運**（国内の港と港の間を結ぶ）に分けられ、それぞれ担い手・規制・経済的役割が大きく異なります。外航海運の中心は日本郵船・商船三井・川崎汽船の**大手3社**で、世界有数のオペレーター・船主国家として日本商船隊は世界の海運市場で大きな存在感を維持しています{{% cite "jsa_allpage2025" %}}。一方、内航海運は中小事業者が多数を占め、船員の高齢化とドライバー不足を背景に**モーダルシフト**の受け皿として役割が再評価されています{{% cite "mlit_shipping_transport" %}}。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">貿易量の海上輸送比率</p>
    <p class="stat-card__value">99.6</p>
    <p class="stat-card__unit">%（重量ベース）{{% cite "mlit_maritime_report" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">日本商船隊</p>
    <p class="stat-card__value">約2,200</p>
    <p class="stat-card__unit">隻（日本の外航海運会社が運航する2,000GT以上の外航商船）{{% cite "jsa_allpage2025" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">内航海運事業者</p>
    <p class="stat-card__value">約3,300</p>
    <p class="stat-card__unit">事業者{{% cite "mlit_naiko" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">内航輸送シェア（国内物流）</p>
    <p class="stat-card__value">約40</p>
    <p class="stat-card__unit">%（トンキロベース）{{% cite "meti2024_ship" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">内航船員数</p>
    <p class="stat-card__value">約2.8万</p>
    <p class="stat-card__unit">人（50歳以上が約半数）{{% cite "mlit_naiko" %}}</p>
  </div>
</div>

## 外航海運と内航海運 — 二つの世界

外航と内航は、同じ「海運」でも事業構造がまったく異なります。

| 区分 | 外航海運 | 内航海運 |
| ---- | -------- | -------- |
| **担う輸送** | 国際貿易（原油・LNG・鉄鉱石・自動車・コンテナ貨物等） | 国内基礎物資輸送（鉄鋼・石油製品・セメント・自動車等） |
| **主体** | 大手3社中心。外国人船員と便宜置籍船を多用 | 中小事業者が大多数。日本人船員中心 |
| **船籍** | 多くが便宜置籍船（パナマ籍など） | 日本籍 |
| **規制** | 国際海事機関（IMO）の国際ルール | 内航海運業法・船員法（国内法） |
| **典型船型** | VLCC・LNG船・ケープサイズ・大型コンテナ船・PCC（自動車船） | 499GT型・749GT型の貨物船、RORO、フェリー |
| **経済的役割** | 貿易立国の生命線 | 国内物流のバックボーン、モーダルシフトの受け皿 |

「外航は国際商品、内航は国内インフラ」と整理すると理解しやすく、外航は運賃市況（BDI等）に連動してボラティリティが大きいのに対し、内航は長期用船契約が主流で比較的安定しています{{% cite "jsa_allpage2025" %}}。

## 日本商船隊の構成

「日本商船隊」とは日本の外航海運会社が運航する2,000GT以上の外航商船を指す統計概念で、**日本籍船**と**日本の海運会社がオペレートする外国籍船（仕組船）**の合計で表されます{{% cite "jsa_allpage2025" %}}。冷戦期までは日本籍・日本人船員が中心でしたが、**コスト競争と円高**を背景に1970年代以降は急速に便宜置籍化・外国人船員化が進みました。

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">〜1970年代</span>
    <span class="process-step__name">日本籍・日本人船員中心</span>
    <span class="process-step__temp">高度成長期の輸出入を支える</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step">
    <span class="process-step__label">1980〜2000年代</span>
    <span class="process-step__name">便宜置籍・外国人船員化</span>
    <span class="process-step__temp">コスト競争でパナマ籍等に移行</span>
  </div>
  <div class="process-arrow">→</div>
  <div class="process-step" style="border-color:#10b981;background:#ecfdf5;">
    <span class="process-step__label">2008〜</span>
    <span class="process-step__name">トン数標準税制で日本籍船を増加</span>
    <span class="process-step__temp">経済安全保障の観点から国籍回帰</span>
  </div>
</div>

2008年に導入された**トン数標準税制**は、外航海運会社の法人税を運航船舶のトン数に応じて計算する制度で、これにより「準日本船舶」を含む**日本籍外航船の隻数**が増加傾向に転じました{{% cite "mlit_tonnagetax" %}}。エネルギー・食料安全保障の観点からも、有事に政府が徴用できる日本籍船・日本人船員の一定数確保が政策課題として位置づけられています{{% cite "mlit_maritime_report" %}}。

## 外航海運大手3社

日本の外航海運は **日本郵船（NYK）・商船三井（MOL）・川崎汽船（K-Line）** の大手3社が中核を担います。3社は歴史的に**コンテナ船事業**の統合を進め、2018年4月に共同出資会社 **Ocean Network Express（ONE）** を発足させました{{% cite "one_about" %}}。ONEはシンガポールに本社を置き、世界のコンテナ輸送市場で**6位前後のシェア**を維持しており、日本の海運3社は以降、**不定期船（ドライバルク・タンカー）・自動車船・LNG船**といった非コンテナ領域に経営資源を集中しています{{% cite "jsa_allpage2025" %}}{{% cite "kaiun2026_1" %}}。

大手3社は国内造船業の最大顧客であり、特にLNG燃料船への転換で大量発注を実施中です。日本郵船は自動車船12隻、ケープサイズバルカー1隻を含むLNG燃料船計13隻を就航させており、2030年代には発注残を含めて約35隻近くまで拡大する見通しです{{% cite "kaiun2026_2" %}}。商船三井はLNG船運航隻数で**世界最大級**の規模を保有し、継続的な新造発注を進めています{{% cite "kaiun2026_2" %}}。川崎汽船は自動車船で世界有数であり、LNG船への転換や洋上風力発電関連事業への進出を加速させています{{% cite "kaiun2026_2" %}}。

| 企業 | 本社 | 強い船種 | 主なアライアンス・関連会社 |
| ---- | ---- | -------- | -------------------------- |
| **日本郵船（NYK）** | 東京 | LNG船・自動車船・コンテナ（ONE出資） | ONEの筆頭出資者の一角。LNG船保有隻数は世界有数 |
| **商船三井（MOL）** | 東京 | LNG船・ドライバルク・タンカー（ONE出資） | LNG船運航隻数で世界最大級 |
| **川崎汽船（K-Line）** | 東京 | 自動車船・ドライバルク・コンテナ（ONE出資） | 自動車船隊で世界有数 |

3社はいずれも2022〜2023年のコンテナ市況高騰（パンデミック特需）で**過去最高益**を記録し、その資金を環境対応船（LNG燃料・アンモニア燃料船）と洋上風力発電・海洋資源関連の新規事業に振り向ける動きが進んでいます{{% cite "jsa_allpage2025" %}}。

## 大手3社の徹底比較 — 売上・船隊・事業構造

同じ「海運大手3社」と括られがちですが、実際には**収益源の多角化度・船種ポートフォリオ・財務戦略**に大きな違いがあります。2025年3月期（2024年度）の決算を起点に、ここでは「規模の日本郵船」「LNGの商船三井」「筋肉質な川崎汽船」という3つのキャラクターを定量的に整理します。

### 売上高・利益規模の比較（2025年3月期実績）

まず連結売上高で見ると、日本郵船が2兆5,887億円と頭ひとつ抜けており、商船三井（1兆7,754億円）・川崎汽船（1兆479億円）の順となります{{% cite "lnews_nyk_25" %}}{{% cite "lnews_mol_25" %}}{{% cite "kline_tanshin_25" %}}。コンテナ船事業を**ONE（Ocean Network Express）**に切り出した2018年以降は、ONEからの持分法投資損益が3社の経常利益を大きく左右する構造となっており、特に川崎汽船は連結営業利益1,028億円に対して**経常利益3,080億円・純利益3,053億円**と、ONE経由の投資利益が営業利益の約3倍に達しています{{% cite "kline_tanshin_25" %}}。

<figure style="margin:1.5rem 0;">
<svg viewBox="0 0 640 260" style="max-width:100%;height:auto;font-family:sans-serif;" role="img" aria-label="大手3社の売上高・営業利益・純利益比較（2025年3月期）">
  <style>
    .axis{stroke:#94a3b8;stroke-width:1}
    .grid{stroke:#e2e8f0;stroke-width:1;stroke-dasharray:2 3}
    .lbl{font-size:10px;fill:#475569}
    .val{font-size:10px;fill:#0f172a;font-weight:600}
    .ttl{font-size:12px;fill:#0f172a;font-weight:700}
    .bar-nyk{fill:#1d4ed8}
    .bar-mol{fill:#0891b2}
    .bar-kl{fill:#b45309}
  </style>
  <text x="20" y="20" class="ttl">2025年3月期 連結業績比較（億円）</text>
  <g transform="translate(60,40)">
    <line class="axis" x1="0" y1="190" x2="560" y2="190"/>
    <line class="grid" x1="0" y1="150" x2="560" y2="150"/>
    <line class="grid" x1="0" y1="110" x2="560" y2="110"/>
    <line class="grid" x1="0" y1="70"  x2="560" y2="70"/>
    <line class="grid" x1="0" y1="30"  x2="560" y2="30"/>
    <text class="lbl" x="-6" y="193" text-anchor="end">0</text>
    <text class="lbl" x="-6" y="153" text-anchor="end">8,000</text>
    <text class="lbl" x="-6" y="113" text-anchor="end">16,000</text>
    <text class="lbl" x="-6" y="73"  text-anchor="end">24,000</text>
    <text class="lbl" x="-6" y="33"  text-anchor="end">32,000</text>
    <!-- group width 160, three bars each 40 -->
    <g transform="translate(30,0)">
      <rect class="bar-nyk" x="0"  y="60"  width="36" height="130"/>
      <rect class="bar-mol" x="40" y="101" width="36" height="89"/>
      <rect class="bar-kl"  x="80" y="138" width="36" height="52"/>
      <text class="val" x="18"  y="56"  text-anchor="middle">25,887</text>
      <text class="val" x="58"  y="97"  text-anchor="middle">17,754</text>
      <text class="val" x="98"  y="134" text-anchor="middle">10,479</text>
      <text class="lbl" x="58"  y="210" text-anchor="middle">売上高</text>
    </g>
    <g transform="translate(230,0)">
      <rect class="bar-nyk" x="0"  y="180" width="36" height="10"/>
      <rect class="bar-mol" x="40" y="181" width="36" height="9"/>
      <rect class="bar-kl"  x="80" y="185" width="36" height="5"/>
      <text class="val" x="18"  y="176" text-anchor="middle">2,108</text>
      <text class="val" x="58"  y="177" text-anchor="middle">約1,900</text>
      <text class="val" x="98"  y="181" text-anchor="middle">1,028</text>
      <text class="lbl" x="58"  y="210" text-anchor="middle">営業利益</text>
    </g>
    <g transform="translate(430,0)">
      <rect class="bar-nyk" x="0"  y="175" width="36" height="15"/>
      <rect class="bar-mol" x="40" y="175" width="36" height="15"/>
      <rect class="bar-kl"  x="80" y="175" width="36" height="15"/>
      <text class="val" x="18"  y="171" text-anchor="middle">約3,000</text>
      <text class="val" x="58"  y="171" text-anchor="middle">約2,300</text>
      <text class="val" x="98"  y="171" text-anchor="middle">3,053</text>
      <text class="lbl" x="58"  y="210" text-anchor="middle">当期純利益</text>
    </g>
  </g>
  <g transform="translate(60,240)" font-size="10" fill="#334155">
    <rect class="bar-nyk" x="0"   y="-8" width="12" height="10"/><text x="16" y="1">日本郵船</text>
    <rect class="bar-mol" x="90"  y="-8" width="12" height="10"/><text x="106" y="1">商船三井</text>
    <rect class="bar-mol" x="180" y="-8" width="12" height="10" style="fill:#b45309"/><text x="196" y="1">川崎汽船</text>
  </g>
</svg>
<figcaption style="font-size:0.85em;color:#64748b;">出所：各社2025年3月期決算短信・L-NEWS・会社発表{{% cite "lnews_nyk_25" %}}{{% cite "lnews_mol_25" %}}{{% cite "kline_tanshin_25" %}}。営業利益・純利益の一部は100億円単位で丸め。</figcaption>
</figure>

| 指標（2025年3月期） | 日本郵船 | 商船三井 | 川崎汽船 |
| ---- | ---- | ---- | ---- |
| 連結売上高 | **2兆5,887億円**（+8.4%）{{% cite "lnews_nyk_25" %}} | 1兆7,754億円（+9.1%）{{% cite "lnews_mol_25" %}} | 1兆479億円（+9.4%）{{% cite "kline_tanshin_25" %}} |
| 営業利益 | 2,108億円（+20.7%）{{% cite "lnews_nyk_25" %}} | 約1,900億円（+46.3%）{{% cite "lnews_mol_25" %}} | 1,028億円（+22.2%）{{% cite "kline_tanshin_25" %}} |
| 経常利益 | 約7,200億円（ONE持分含む）{{% cite "lnews_nyk_25" %}} | 約4,300億円{{% cite "lnews_mol_25" %}} | **3,080億円**（+132.1%）{{% cite "kline_tanshin_25" %}} |
| 当期純利益 | 約5,500億円{{% cite "lnews_nyk_25" %}} | 約2,300億円{{% cite "lnews_mol_25" %}} | **3,053億円**（+199.4%）{{% cite "kline_tanshin_25" %}} |

注目すべきは川崎汽船の**経常利益の急伸**です。連結売上は3社中最小ですが、ONE持分投資利益と為替差益に押し上げられ、当期純利益では商船三井を上回りました。一方で2026年3月期見通しは「売上9,840億円／純利益1,050億円」と、ONE市況の正常化を見越して大幅減益を織り込んでいます{{% cite "kline_tanshin_25" %}}。コンテナ市況という「共通エンジン」の影響から、3社の利益体質がいかに切り離せないかがよく分かります。

### 船隊ポートフォリオの比較

次に運航船舶の構成です。日本郵船は2024年3月期末時点で**運航船舶824隻**を運航しており、内訳はケープサイズバルカー120隻・パナマックス101隻・ハンディ137隻・自動車船124隻・LNG船91隻・タンカー66隻・コンテナ船50隻などと、**船種の多様性**が際立っています{{% cite "nyk_factbook2024" %}}。商船三井はLNG船の運航隻数で世界首位級で、2025年6月時点で**発注残を含め132隻**、さらに**150隻体制**を目指した船隊拡大戦略を公表しています{{% cite "nikkei_mol_lng" %}}。川崎汽船は自動車船（PCC）で**世界シェア約18%**（2016年実績）と世界有数で、LNG船・バルカー・自動車船を主力としつつ、傭船比率が高い「軽アセット」型経営を特徴とします{{% cite "kline_car_history" %}}。

<figure style="margin:1.5rem 0;">
<svg viewBox="0 0 640 320" style="max-width:100%;height:auto;font-family:sans-serif;" role="img" aria-label="大手3社の代表的船種別運航隻数">
  <style>
    .g-bulk{fill:#1d4ed8}
    .g-car{fill:#0ea5e9}
    .g-lng{fill:#10b981}
    .g-tkr{fill:#f59e0b}
    .g-cnt{fill:#ef4444}
    .g-oth{fill:#94a3b8}
    .lbl2{font-size:11px;fill:#334155}
    .val2{font-size:10px;fill:#fff;font-weight:600}
    .ttl2{font-size:13px;fill:#0f172a;font-weight:700}
  </style>
  <text x="20" y="22" class="ttl2">船隊ポートフォリオ（運航隻数、概算）</text>
  <g transform="translate(110,50)">
    <!-- NYK: bulk 358, car 124, LNG 91, tanker 66, container 50, other 135 (total 824) -->
    <text class="lbl2" x="-10" y="18" text-anchor="end">日本郵船</text>
    <g transform="translate(0,4)">
      <rect class="g-bulk" x="0"   y="0" width="217" height="28"/>
      <rect class="g-car"  x="217" y="0" width="75"  height="28"/>
      <rect class="g-lng"  x="292" y="0" width="55"  height="28"/>
      <rect class="g-tkr"  x="347" y="0" width="40"  height="28"/>
      <rect class="g-cnt"  x="387" y="0" width="30"  height="28"/>
      <rect class="g-oth"  x="417" y="0" width="83"  height="28"/>
      <text class="val2" x="108" y="19" text-anchor="middle">バルカー358</text>
      <text class="val2" x="254" y="19" text-anchor="middle">車124</text>
      <text class="val2" x="319" y="19" text-anchor="middle">LNG91</text>
      <text class="val2" x="367" y="19" text-anchor="middle">T66</text>
      <text class="val2" x="402" y="19" text-anchor="middle">C50</text>
      <text class="val2" x="458" y="19" text-anchor="middle">その他135</text>
      <text class="lbl2" x="508" y="19">計824隻</text>
    </g>
    <!-- MOL approximate: bulk 240, car 120, LNG 132, tanker 170, container (ONE除く) 少, other 80 (~740) -->
    <text class="lbl2" x="-10" y="78" text-anchor="end">商船三井</text>
    <g transform="translate(0,64)">
      <rect class="g-bulk" x="0"   y="0" width="150" height="28"/>
      <rect class="g-car"  x="150" y="0" width="75"  height="28"/>
      <rect class="g-lng"  x="225" y="0" width="85"  height="28"/>
      <rect class="g-tkr"  x="310" y="0" width="105" height="28"/>
      <rect class="g-oth"  x="415" y="0" width="60"  height="28"/>
      <text class="val2" x="75"  y="19" text-anchor="middle">バルカー約240</text>
      <text class="val2" x="188" y="19" text-anchor="middle">車約120</text>
      <text class="val2" x="268" y="19" text-anchor="middle">LNG132</text>
      <text class="val2" x="363" y="19" text-anchor="middle">タンカー約170</text>
      <text class="val2" x="445" y="19" text-anchor="middle">その他約60</text>
      <text class="lbl2" x="508" y="19">計約740隻</text>
    </g>
    <!-- K-Line approximate: bulk 170, car 90, LNG 45, tanker 20, container ONE, other 40 (~440) -->
    <text class="lbl2" x="-10" y="138" text-anchor="end">川崎汽船</text>
    <g transform="translate(0,124)">
      <rect class="g-bulk" x="0"   y="0" width="200" height="28"/>
      <rect class="g-car"  x="200" y="0" width="105" height="28"/>
      <rect class="g-lng"  x="305" y="0" width="55"  height="28"/>
      <rect class="g-tkr"  x="360" y="0" width="25"  height="28"/>
      <rect class="g-oth"  x="385" y="0" width="45"  height="28"/>
      <text class="val2" x="100" y="19" text-anchor="middle">バルカー約170</text>
      <text class="val2" x="253" y="19" text-anchor="middle">自動車約90</text>
      <text class="val2" x="333" y="19" text-anchor="middle">LNG約45</text>
      <text class="val2" x="373" y="19" text-anchor="middle">T</text>
      <text class="val2" x="408" y="19" text-anchor="middle">その他</text>
      <text class="lbl2" x="438" y="19">計約430隻</text>
    </g>
  </g>
  <g transform="translate(40,260)" font-size="10" fill="#334155">
    <rect class="g-bulk" x="0"   y="-8" width="12" height="10"/><text x="16" y="1">バルカー</text>
    <rect class="g-car"  x="80"  y="-8" width="12" height="10"/><text x="96" y="1">自動車船</text>
    <rect class="g-lng"  x="170" y="-8" width="12" height="10"/><text x="186" y="1">LNG船</text>
    <rect class="g-tkr"  x="240" y="-8" width="12" height="10"/><text x="256" y="1">タンカー</text>
    <rect class="g-cnt"  x="320" y="-8" width="12" height="10"/><text x="336" y="1">コンテナ（ONE外）</text>
    <rect class="g-oth"  x="450" y="-8" width="12" height="10"/><text x="466" y="1">その他</text>
  </g>
  <text x="40" y="295" font-size="10" fill="#64748b">※ NYKは2024年3月期末確定値。MOL・K-Lineはファクトブック等からの概算を含む。</text>
</svg>
<figcaption style="font-size:0.85em;color:#64748b;">出所：日本郵船IRファクトブック2024{{% cite "nyk_factbook2024" %}}、商船三井IR（LNG船132隻・150隻計画）{{% cite "nikkei_mol_lng" %}}、川崎汽船FACTBOOK 2024{{% cite "kline_factbook2024" %}}。</figcaption>
</figure>

ここから読み取れる各社の「船隊の個性」は明確です。日本郵船は**資源バルカー＋自動車船＋LNG＋タンカー＋コンテナ**まで含めたフルラインで、1船種の市況ショックを他船種で吸収できる**分散型ポートフォリオ**。商船三井はLNG船132隻・150隻計画に象徴される**エネルギー船偏重**で、タンカー・LNG合わせると3社中最大の「エネルギー輸送艦隊」を形成します{{% cite "nikkei_mol_lng" %}}。川崎汽船は自動車船と資源バルカーという**2本柱特化型**で、船隊規模は3社で最も小さい一方、自動車船では世界有数の地位を保ちます{{% cite "kline_car_history" %}}{{% cite "kline_factbook2024" %}}。

### 郵船ロジスティクス — 日本郵船だけが持つ「海運＋フォワーダー」構造

日本郵船を他2社から決定的に差別化している存在が、子会社の**郵船ロジスティクス**です。同社は航空・海上フォワーディング（貨物輸送仲介）を手掛け、**国内フォワーダー3位**の地位を占めます{{% cite "deallab_forwarder" %}}。2024年3月期の郵船ロジ連結売上高は**約6,710億円**で、海運市況の影響を受けにくい物流サービス収益として、日本郵船グループ全体の「ボラティリティを均す緩衝材」として機能しています{{% cite "daily_cargo_nyk_log" %}}。

日本郵船の物流事業セグメントとしては売上高7,022億円（2024年3月期、前年比-18.6%）と、市況ピーク後の調整局面にありますが、ピーク時の2023年3月期には物流事業単体で経常利益1,400億円超を計上した実績があり、**コンテナ市況の上振れ局面では海運と物流の「二重取り」**ができる構造になっています{{% cite "daily_cargo_nyk_log" %}}。加えて航空貨物では子会社**日本貨物航空（NCA）**を通じて国際線フレイターを運航しており（2024年にANAへ株式譲渡）、海運・陸運・航空の**「総合物流」**像を3社の中で最も具体的に実装しているのが日本郵船だといえます{{% cite "lnews_nyk_25" %}}。

商船三井にもMOLロジスティクスという物流子会社が存在しますが、売上規模は郵船ロジスティクスの1/5程度に留まり、グループ全体に占める存在感は限定的です{{% cite "deallab_forwarder" %}}。川崎汽船は自社フォワーダーを持たず、代わりに**不動産・物流倉庫・海洋資源**への分散投資でリスクを取る姿勢です{{% cite "kline_factbook2024" %}}。

### 不動産・安定資産の比較

商船三井の特徴的な柱は、子会社**ダイビル**（2022年に完全子会社化）を通じた**オフィスビル賃貸事業**です。東京・大阪・札幌・ベトナムなどに延床面積ベースで数十棟のオフィスビルを保有し、海運市況と相関しない**安定キャッシュフロー**源としてグループの「ウェルビーイングライフ事業」セグメントを構成します{{% cite "lnews_mol_25" %}}。日本郵船・川崎汽船にはこの規模の不動産事業はなく、「海運＋物流」で多角化する日本郵船、「海運＋不動産」で多角化する商船三井、「海運＋傭船＋株主還元」で筋肉質経営に徹する川崎汽船、という三者三様の構図が見えてきます{{% cite "lnews_mol_25" %}}{{% cite "kline_tanshin_25" %}}。

### 強み・弱みのまとめ

| 観点 | 日本郵船（NYK） | 商船三井（MOL） | 川崎汽船（K-Line） |
| ---- | ---- | ---- | ---- |
| **規模・売上** | ◎ 3社中最大・2.6兆円級{{% cite "lnews_nyk_25" %}} | ○ 1.8兆円級{{% cite "lnews_mol_25" %}} | △ 1.0兆円級{{% cite "kline_tanshin_25" %}} |
| **船種の多様性** | ◎ バルカー・車・LNG・タンカー・コンテナの全方位{{% cite "nyk_factbook2024" %}} | ○ エネルギー船（LNG/タンカー）に偏重{{% cite "nikkei_mol_lng" %}} | △ 自動車船・バルカー2本柱{{% cite "kline_factbook2024" %}} |
| **LNG船戦略** | ○ 保有91隻{{% cite "nyk_factbook2024" %}} | ◎ 世界首位・132隻→150隻計画{{% cite "nikkei_mol_lng" %}} | △ 約45隻{{% cite "kline_factbook2024" %}} |
| **自動車船** | ○ 124隻{{% cite "nyk_factbook2024" %}} | ○ 約120隻 | ◎ 世界シェア約18%{{% cite "kline_car_history" %}} |
| **海運以外の安定収益** | ◎ 郵船ロジ6,710億円＋NCA{{% cite "daily_cargo_nyk_log" %}} | ○ ダイビル不動産{{% cite "lnews_mol_25" %}} | △ なし（傭船で軽量化）{{% cite "kline_factbook2024" %}} |
| **財務の筋肉質度** | ○ 重アセット | △ 最大資産規模 | ◎ 自己資本比率が3社で最高水準{{% cite "kline_tanshin_25" %}} |
| **市況感応度** | 物流事業で一部緩衝 | LNG長契約で相対的に安定 | ？ |

## 国際海運と日本商船隊の市場地位

日本は**輸入依存度が高い国**として、海上輸送に極度に依存しており、貿易量（輸出入合計）の**99.6%**を海上輸送で行っています{{% cite "meti2024_ship" %}}。これに対応するため、日本商船隊は**世界第3位の船腹量**を保有し、高い国際競争力を維持しています。世界の海上荷動量は年平均約3.5%で拡大しており、ゼロエミッション船等の導入を通じた日本商船隊のシェア拡大が重要課題です{{% cite "meti2024_ship" %}}。

## 主要港湾

国土交通省は港湾を戦略的に**国際戦略港湾・国際拠点港湾・重要港湾**に区分しています{{% cite "mlit_ports" %}}。

| 区分 | 港 | 特徴 |
| ---- | -- | ---- |
| **国際戦略港湾** | 京浜港（東京・横浜・川崎）、阪神港（神戸・大阪） | 基幹航路維持のための集中投資対象 |
| **国際拠点港湾** | 名古屋・四日市・博多・北九州・千葉・清水・新潟・仙台塩釜ほか | 地域の国際海上物流拠点 |
| **主要特化港** | 苫小牧（RORO・フェリー）、水島・君津（鉄鋼）、鹿島（石油化学）、徳山下松（石油化学） | 臨海産業に直結 |

**名古屋港**は自動車輸出を背景に**総取扱貨物量で長年国内首位級**を誇り、**東京・横浜・神戸・大阪**はコンテナ取扱量で上位に並びます。ただし、世界のコンテナ港湾ランキングでは上海・シンガポール・寧波・深圳・釜山などが上位を独占し、**東京港・横浜港の世界順位は大きく後退**しています。国土交通省は京浜港・阪神港を「国際戦略港湾」に指定し、**基幹航路（北米・欧州定期航路）**の寄港維持のためコンテナターミナルの規模拡大と港湾運営の一元化（港湾運営会社制度）を進めています{{% cite "mlit_ports" %}}。

## 内航海運 — 国内物流のバックボーン

内航海運は国内輸送トンキロの**約40%**を占め、特に**鉄鋼（粗鋼・鋼材）・石油製品・セメント・化学品・自動車**といった重量物を長距離・大量に運ぶのに比較優位があります{{% cite "meti2024_ship" %}}。トラック輸送と比較して**CO2排出原単位は約1/5**とされ、2024年のトラックドライバー規制強化（いわゆる「2024年問題」）を契機に **モーダルシフト** の受け皿としての期待が高まっています{{% cite "mlit_shipping_transport" %}}。

内航海運は国の運輸部門からのCO2排出量の**5.5%（1,010万トン）**を占めており、2050年カーボンニュートラル達成に向けた重要な脱炭素化対象となっています{{% cite "meti2024_ship" %}}。

### 内航海運の構造的課題と現代化

一方で構造的課題は深刻です。

- **船員の高齢化と供給不足**: 内航船員のうち**50歳以上が約半数**、60歳以上も相当数を占め、今後10年で大量退職期に入ります{{% cite "mlit_naiko" %}}。海上技術職の採用環境が改善される中でも、船員教育訓練施設の整備が重要課題です
- **船腹の老朽化**: 内航貨物船の平均船齢は依然として高く、代替建造（リプレース）が急務です。新造船の建造促進と平行して、ゼロエミッション船対応の教育訓練施設整備も必要とされています{{% cite "meti2024_ship" %}}
- **船主・運航・荷主の三層構造**: 中小の「オーナー（船主）」が大多数を占め、用船料の下押し圧力を受けやすい経営環境が続いています
- **暫定措置事業の終了後対応**: 船腹需給調整の旧制度が2023年度までに順次終了し、新たな取引慣行への移行が進行中です

これらに対し、**499GT型・749GT型の標準化・自動運航船の実証（2025年頃に技術実証）・船員のワークライフ改善**などが政策として打ち出されています{{% cite "mlit_naiko" %}}{{% cite "meti2024_ship" %}}。

## 環境規制・ゼロエミッション化

国際海事機関（IMO）は2023年改訂のGHG削減戦略で**2050年頃までに国際海運からのGHG排出を実質ゼロ**にする目標を採択しました{{% cite "imo_ghg2023" %}}。これを受け、世界の新造船市場は急速に**LNG燃料船→メタノール・アンモニア・水素燃料船**へと舵を切っており、日本の海運会社と造船業はこの転換期を事業機会と捉えています{{% cite "meti2024_ship" %}}{{% cite "kaiun2026_4" %}}。

| 燃料 | 現状と課題 | 日本勢の動き（2025-2026） |
| ---- | ---- | ------------ |
| **重油** | 依然として主力。2020年のSOx規制以降、低硫黄重油・スクラバー併用が拡大 | 既存エンジン生産は安定供給維持 |
| **LNG** | 商用運航中。CO2約20〜25%削減。サプライチェーン確立 | 日本郵船・商船三井が大型LNG燃料船を多数発注。2030年代には35隻近くに拡大見通し{{% cite "kaiun2026_2" %}} |
| **メタノール** | 商用化フェーズ。欧州船社が先行。常温液体燃料で扱いやすい | 商船三井がメタノール燃料レディ船12隻発注（2025年8月）{{% cite "kaiun2026_01" %}} |
| **アンモニア** | 2026〜2028年実証・商業化予定。N2O排出対策が課題 | ジャパンエンジンが世界初のアンモニア混焼試験成功（2023年5月）。7UEC50LSJAを2025年8月出荷。2026年実証運航開始、2028年までに商業運航実現目標{{% cite "meti2024_ship" %}} |
| **水素** | 2030年以降の実用化見込み。体積が重油の4.5倍、金属劣化・漏洩が課題 | 川崎重工が液化水素運搬船「すいそふろんてぃあ」を実証運航。2027年実証開始目標{{% cite "meti2024_ship" %}} |

**日本政府の支援体制**として、グリーンイノベーション基金で次世代船舶開発に10年間で350億円を投資し、水素・アンモニア燃料船のエンジン・燃料タンク・供給システムの開発を加速させています{{% cite "meti2024_ship" %}}。

加えて**GHG排出に対する経済的手法（IMOの燃料規制＋課金スキーム）**の導入が2025〜2027年にかけて交渉・段階的導入の見込みで、燃料コスト・運賃構造に大きな影響を与える見通しです{{% cite "imo_ghg2023" %}}。

## 日本商船隊の推移と国家経済安全保障

日本の外航商船隊は規模と国籍構成の点で著しい変化を経験しています。**2022年の日本の世界造船シェアは17%**（2018年25%から減少）であり、これに対して中国45%、韓国29%と世界有数の造船国です{{% cite "meti2024_ship" %}}。しかし日本は**世界第3位の船腹量**を保持し、外航海運事業者として高い国際競争力を維持しています{{% cite "meti2024_ship" %}}。

トン数標準税制導入以降、日本籍外航船の隻数が増加傾向に転じており、エネルギー・食料安全保障および有事の際の政府徴用能力の観点から、日本人船員を確保した日本籍船の一定数維持が国家戦略として位置づけられています{{% cite "kaiun2026_1" %}}。

世界の海上貿易量は年平均約3.5%で拡大しており、今後ゼロエミッション船等への導入により日本の国際競争力を強化する必要があります{{% cite "meti2024_ship" %}}。

## 歴史的背景

{{% timeline %}}

| 年 | 出来事 |
|----|-------|
| 1885 | 日本郵船（NYK）設立 |
| 1884 | 大阪商船設立（後の商船三井の源流） |
| 1919 | 川崎汽船（K-Line）設立 |
| 1964 | 海運集約。中核6社体制へ再編 |
| 1970年代 | 便宜置籍船・外国人船員化が進展 |
| 1985 | プラザ合意・円高。船主の仕組船スキームが拡大 |
| 1999 | 日本郵船と昭和海運、大阪商船三井と ナビックスライン等の統合により商船三井・日本郵船体制が整う |
| 2008 | **トン数標準税制**導入。日本籍外航船が回復基調に |
| 2018 | **Ocean Network Express（ONE）** 発足。大手3社のコンテナ船事業統合 |
| 2020 | IMO SOx規制（0.5%）発効。燃料転換が本格化 |
| 2022 | コンテナ運賃高騰で海運大手3社が過去最高益 |
| 2023 | IMO GHG戦略改定。2050年ゼロエミッション目標採択{{% cite "imo_ghg2023" %}} |
| 2024 | 物流「2024年問題」を契機にモーダルシフトの追い風 |

{{% /timeline %}}

## 脱炭素への金融的支援 — 日本郵船のトランジション・ファイナンス事例

日本の海運業による環境転換を支える重要な事例として、日本郵船のトランジション・ファイナンス（2021年7月発行）があります。同社は100億円の5年債（利率年0.26%）と100億円の7年債（利率年0.38%）を発行し、合計200億円の資金に対して10倍以上（計2,099億円、163件）の投資家需要を獲得しました{{% cite "nyk_tf" %}}。

**資金使途**は以下のゼロエミッション関連船舶の取得に充てられています{{% cite "nyk_tf" %}}：

- LNG燃料船およびLNG燃料供給船（バンカリング船）
- LPG燃料船
- アンモニア燃料液化ガス運搬船およびアンモニア燃料タグボート
- 高出力水素燃料電池搭載船
- 洋上風力発電アクセス船
- グリーンターミナルの新規設立
- 運航効率化技術開発

**NYKグループの脱炭素目標**はパリ協定と整合しており、2050年時点で総GHG排出量を50%削減する目標を掲げています（基準年2015年）。これはIMOおよび国土交通省の目標（2050年70%以上削減）を超える野心的な水準で、SBT認定を取得しています{{% cite "nyk_tf" %}}。

## 造船業との関係 — 「作る・買う・運ぶ」のトライアングル

日本の海事産業は、**造船所（作る）・船主（所有する）・オペレーター（運航する）** の三者が国内で完結する世界的にもまれな構造を持ちます。特に**愛媛県今治市**を中心とする瀬戸内海沿岸には、造船所（今治造船ほか）と外航船主（今治オーナー）が近接集積し、「海事都市」として機能しています{{% cite "jsa_allpage2025" %}}。一方で運航オペレーター（日本郵船・商船三井・川崎汽船）の本社機能は東京に集中しており、**技術のクラスター（瀬戸内）と商流のクラスター（東京）**の役割分担が見られます。

造船業の詳細は「[日本の造船業](/ja/industry/japan-shipbuilding/)」ページで扱っています。

## 関連企業の時価総額マップ

海運大手3社に加え、**専業海運・港湾運送・倉庫・国際フォワーダー・総合物流**まで、海運バリューチェーンを構成する主要上場企業の時価総額を可視化しました。「船を動かす会社」「港で荷役する会社」「倉庫で保管する会社」「ドア・トゥ・ドアを仲介する会社」という4つの層で眺めると、海運業が単独では成立しない**分業ネットワーク**であることがよく分かります。

{{% corp-treemap "9101,9104,9107,9110,9115,9119,9127,9130,9143,9147,9301,9302,9303,9304,9351,9357,9361,9364" %}}
<!-- treemap v2: 18 companies -->


<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・海運との関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 外航海運（大手3社）</td></tr>
<tr>
<td>日本郵船</td>
<td>{{% minkabu 9101 %}}</td>
<td>外航海運最大手。LNG船・自動車船・ドライバルクまで全方位の船隊を運航。ONEの出資者でもあり、郵船ロジスティクスを通じた航空・海上フォワーディングも手掛ける総合物流企業です。</td>
<td>{{% corplink "https://www.nyk.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "9101" %}}</td>
</tr>
<tr>
<td>商船三井</td>
<td>{{% minkabu 9104 %}}</td>
<td>LNG船の運航隻数で世界最大級。ドライバルク・タンカーにも強く、子会社ダイビルを通じた不動産事業が海運市況と相関しない安定収益源となっています。</td>
<td>{{% corplink "https://ir.mol.co.jp/ja/ir.html" %}}</td>
<td>{{% dividend "tokyo" "9104" %}}</td>
</tr>
<tr>
<td>川崎汽船</td>
<td>{{% minkabu 9107 %}}</td>
<td>自動車船（PCC）で世界有数のシェアを持つほか、ドライバルク・LNG船・ONE出資を組み合わせた筋肉質経営が特徴。洋上風力や海洋資源にも参入しています。</td>
<td>{{% corplink "https://www.kline.co.jp/ja/ir.html" %}}</td>
<td>{{% dividend "tokyo" "9107" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 外航・専業海運（資源・エネルギー・ケミカル）</td></tr>
<tr>
<td>NSユナイテッド海運</td>
<td>{{% minkabu 9110 %}}</td>
<td>鉄鋼原料（鉄鉱石・石炭）の長距離輸送に強み。日本製鉄グループの専属色が濃く、長期用船契約を軸にした安定経営が特徴です。</td>
<td>{{% corplink "https://www.nsuship.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9110" %}}</td>
</tr>
<tr>
<td>明治海運</td>
<td>{{% minkabu 9115 %}}</td>
<td>LNG船・自動車船・バルカーの運航と船舶貸渡を中核に据えた船主系海運会社。ホテル事業も併営し、神戸に本社を構える老舗です。</td>
<td>{{% corplink "https://www.meiji-shipping.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "9115" %}}</td>
</tr>
<tr>
<td>飯野海運</td>
<td>{{% minkabu 9119 %}}</td>
<td>ケミカルタンカー・LPG船を中心とする専業海運。東京・八重洲のオフィスビル賃貸も手掛ける「海運＋不動産」型の中堅です。</td>
<td>{{% corplink "https://www.iino.co.jp/kaiun/ir/" %}}</td>
<td>{{% dividend "tokyo" "9119" %}}</td>
</tr>
<tr>
<td>玉井商船</td>
<td>{{% minkabu 9127 %}}</td>
<td>鉄鋼原料・セメントのバラ積み輸送に特化した中堅海運。石川島播磨系の船主として歴史があります。</td>
<td>{{% corplink "https://www.tamai-ss.co.jp/" %}}</td>
<td>{{% dividend "tokyo" "9127" %}}</td>
</tr>
<tr>
<td>共栄タンカー</td>
<td>{{% minkabu 9130 %}}</td>
<td>原油タンカー・VLCCの運航に特化したENEOS系の専業タンカー会社。国内石油元売りの安定輸送を担います。</td>
<td>{{% corplink "https://www.kyoeitanker.co.jp/" %}}</td>
<td>{{% dividend "tokyo" "9130" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 総合物流・フォワーダー</td></tr>
<tr>
<td>SGホールディングス（佐川急便）</td>
<td>{{% minkabu 9143 %}}</td>
<td>国内宅配便2位の佐川急便を中核とする総合物流グループ。国際海上フォワーディングにも進出し、港湾～内陸輸送を一貫して担います。</td>
<td>{{% corplink "https://www.sg-hldgs.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9143" %}}</td>
</tr>
<tr>
<td>NIPPON EXPRESS HD（日本通運）</td>
<td>{{% minkabu 9147 %}}</td>
<td>陸・海・空の総合物流最大手の一角。国内フォワーダー首位で、海上フォワーディング取扱量は郵船ロジスティクスと並ぶ規模を持ちます。</td>
<td>{{% corplink "https://www.nipponexpress-holdings.com/ja/ir/" %}}</td>
<td>{{% dividend "tokyo" "9147" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 倉庫・国際物流</td></tr>
<tr>
<td>三菱倉庫</td>
<td>{{% minkabu 9301 %}}</td>
<td>倉庫業界のリーダー格で、東京・横浜を中心に港湾倉庫と国際物流を展開。本社ビルをはじめとする不動産事業も収益源です。</td>
<td>{{% corplink "https://www.mitsubishi-logistics.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9301" %}}</td>
</tr>
<tr>
<td>三井倉庫HD</td>
<td>{{% minkabu 9302 %}}</td>
<td>港湾運送と国際フォワーディングを両輪とする三井系物流。電機メーカー向けのサプライチェーン構築に強みを持ちます。</td>
<td>{{% corplink "https://www.mitsui-soko.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "9302" %}}</td>
</tr>
<tr>
<td>住友倉庫</td>
<td>{{% minkabu 9303 %}}</td>
<td>神戸港を中心に港湾倉庫と国際物流を展開する住友系倉庫。不動産賃貸事業も長年にわたり安定収益を生み出しています。</td>
<td>{{% corplink "https://www.sumitomo-soko.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9303" %}}</td>
</tr>
<tr>
<td>澁澤倉庫</td>
<td>{{% minkabu 9304 %}}</td>
<td>渋沢栄一が創業した老舗倉庫会社。東京港・横浜港の港湾倉庫と国内物流ネットワークを軸に事業を展開しています。</td>
<td>{{% corplink "https://www.shibusawa.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9304" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 港湾運送・荷役（ステベ）</td></tr>
<tr>
<td>上組</td>
<td>{{% minkabu 9364 %}}</td>
<td>港湾運送（ステベドア）最大手。神戸・大阪・名古屋・博多などの主要港で強力なシェアを持ち、コンテナ荷役から倉庫・内陸輸送まで一貫して担います。</td>
<td>{{% corplink "https://www.kamigumi.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9364" %}}</td>
</tr>
<tr>
<td>東洋埠頭</td>
<td>{{% minkabu 9351 %}}</td>
<td>東京港・横浜港を地盤とする港湾運送・倉庫会社。鋼材・穀物・プラントなど重量物荷役に強みを持ちます。</td>
<td>{{% corplink "https://www.toyofuto.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9351" %}}</td>
</tr>
<tr>
<td>名港海運</td>
<td>{{% minkabu 9357 %}}</td>
<td>名古屋港を地盤に、トヨタ系の自動車・自動車部品輸送を支える港湾運送会社。完成車輸出物流で重要な役割を果たしています。</td>
<td>{{% corplink "https://www.meikokaiun.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9357" %}}</td>
</tr>
<tr>
<td>伏木海陸運送</td>
<td>{{% minkabu 9361 %}}</td>
<td>日本海側の伏木富山港を地盤とする港湾運送会社。対ロシア・北東アジアの貿易物流に強みを持っていました。</td>
<td>{{% corplink "https://www.fkr.co.jp/" %}}</td>
<td>{{% dividend "tokyo" "9361" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
deallab_forwarder: deallab「フォワーダー業界の市場シェアの分析」<https://deallab.info/forwarder/>
imo_ghg2023: IMO「2023 IMO Strategy on Reduction of GHG Emissions from Ships」<https://www.imo.org/en/MediaCentre/PressBriefings/pages/Revised-GHG-reduction-strategy-for-global-shipping-adopted-.aspx>
jsa_allpage2025: 日本船主協会「海運統計要覧 2025（SHIPPING NOW 2025）」<https://www.jsanet.or.jp/data/pdf/allpage2025.pdf>
kaiun2026_01: 国土交通省 海事局編「KAIUN 2026年1月号」（船舶燃料の大転換）<https://www.jsanet.or.jp>
kaiun2026_1: 国土交通省 海事局編「KAIUN 2026年1月号」（海運のニュースと分析）<https://www.jsanet.or.jp>
kaiun2026_2: 国土交通省 海事局編「KAIUN 2026年2月号」（海事産業のスタートアップと革新）<https://www.jsanet.or.jp>
kaiun2026_4: 国土交通省 海事局編「KAIUN 2026年4月号」（日本舶用工業の成長戦略）<https://www.jsanet.or.jp>
kline_car_history: 川崎汽船「自動車船 事業の歴史」<https://www.kline.co.jp/ja/service/car/history.html>
kline_factbook2024: 川崎汽船「FACTBOOK 2024」事業別データ集<https://www.kline.co.jp/ja/ir/library/fact/main/018/teaserItems1/01/file/FACTBOOK_2024_J.pdf>
kline_tanshin_25: 川崎汽船「2025年3月期 決算短信〔日本基準〕（連結）」（2025年5月7日）<https://www.kline.co.jp/ja/ir/library/result.html>
lnews_mol_25: L-NEWS「商船三井 決算／3月期の売上高9.1％増、営業利益46.3％増」（2025年5月）<https://www.lnews.jp/2025/05/r0506603.html>
lnews_nyk_25: L-NEWS「日本郵船 決算／3月期の売上高8.4％増、営業利益20.7％増」（2025年5月）<https://www.lnews.jp/2025/05/r0508603.html>
meti2024_ship: 経済産業省「参考資料：船舶」（2024年12月、船舶産業の現状と脱炭素化政策）
mlit_maritime_report: 国土交通省 海事局「海事レポート」<https://www.mlit.go.jp/maritime/maritime_fr1_000025.html>
mlit_naiko: 国土交通省 海事局「内航海運の現状と課題」<https://www.mlit.go.jp/maritime/maritime_fr4_000001.html>
mlit_ports: 国土交通省 港湾局「日本の港湾」<https://www.mlit.go.jp/kowan/kowan_fr1_000006.html>
mlit_shipping_transport: 国土交通省「海事関係資料（内航海運・モーダルシフト）」<https://www.mlit.go.jp/sogoseisaku/transport/content/001840830.pdf>
mlit_tonnagetax: 国土交通省 海事局「トン数標準税制」<https://www.mlit.go.jp/maritime/maritime_tk5_000020.html>
nikkei_mol_lng: 日本経済新聞「商船三井、LNG船隊150隻へ 北米発にらみ首位固め」（2025年10月）<https://www.nikkei.com/article/DGXZQOUC0616Y0W5A001C2000000/>
nyk_factbook2024: 日本郵船「IR ファクトブック 2024」事業データ集<https://www.nyk.com/ir/library/fact/first/2024/__icsFiles/afieldfile/2024/08/29/2024_IRFact_jp_04.pdf>
nyk_tf: 日本郵船「トランジション・ファイナンス事例」（2021年7月発行トランジション・ボンド、100億円×2本、LNG・アンモニア・水素燃料船への投資）
one_about: Ocean Network Express「Company Profile」<https://www.one-line.com/en/about-us>
daily_cargo_nyk_log: Daily Cargo「日本郵船・物流事業＜24年3月期決算＞経常益52%減、航空・海上物量1桁減」（2024年5月）<https://www.daily-cargo.com/news/logistics/2024/05/161572/>
{{% /references %}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    