---
title: "日本のタイヤ産業"
subtitle: "ブリヂストン・住友ゴム・横浜ゴム・東洋ゴム — 世界3位から大手6社まで、タイヤ産業の中核を担う日本"
date: 2026-04-08
lastmod: 2026-04-08
description: "日本のタイヤ産業を解説。ブリヂストン（世界1-2位）、住友ゴム（Dunlop・Falken）、横浜ゴム、東洋ゴムの4大メーカーによる全球展開。世界市場における Michelin・Goodyear・Continental との競争構図、天然ゴム原料のタイ・インドネシア・マレーシア・ベトナム調達、EV向けタイヤの成長市場、久留米・防府・那須・彦根・白河・仙台などの主要工場立地を詳細に整理。"
weight: 40
mapName: "japan"
galleryDir: "japan-tire"
---

<script>
(function() {
  // [タイ](/rule/asia/thai/)ヤ工場ピン（赤系●）
  var pins = [
    { x: 440, y: 360, label: '仙台', type: 'tire',
      note: '東洋ゴム仙台工場（宮城県岩沼市）' },
    { x: 510, y: 142, label: '苫小牧', type: 'tire',
      note: '北海道拠点・流通センター' },
    { x: 410, y: 448, label: '東京圏', type: 'tire',
      note: 'ブリヂストン本社・開発拠点' },
    { x: 318, y: 478, label: '名古屋', type: 'tire',
      note: '住友ゴム名古屋工場（愛知県豊田市）' },
    { x: 250, y: 472, label: '大阪/泉大津', type: 'tire',
      note: '住友ゴム泉大津工場（大阪府泉大津市）' },
    { x: 125, y: 548, label: '久留米', type: 'tire',
      note: 'ブリヂストン久留米工場・発祥地（福岡県）' },
    { x: 145, y: 520, label: '防府/宮崎', type: 'tire',
      note: 'ブリヂストン防府工場（山口県防府市）・住友ゴム宮崎工場' },
    { x: 338, y: 438, label: '平塚/三島', type: 'tire',
      note: '横浜ゴム平塚・三島工場（神奈川県）' },
    { x: 350, y: 455, label: '三重', type: 'tire',
      note: '横浜ゴム三重工場・東洋ゴム桑名工場' },
    { x: 265, y: 495, label: '尾道', type: 'tire',
      note: '横浜ゴム尾道工場（広島県）' },
    { x: 390, y: 425, label: '那須/彦根', type: 'tire',
      note: 'ブリヂストン那須・彦根工場（栃木県・滋賀県）' },
    { x: 220, y: 525, label: '白河', type: 'tire',
      note: '住友ゴム白河工場（福島県白河市）' },
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

      var color = '#dc2626';
      var bgColor = 'rgba(220,38,38,0.18)';
      var strokeColor = 'rgba(220,38,38,0.55)';

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

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', pin.y + 4);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', 'rgba(68,64,60,0.85)');
      labelBg.setAttribute('rx', '3');

      var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pin.x);
      label.setAttribute('y', pin.y + 13);
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

## [日本](/rule/asia/japan/)の[タイ](/rule/asia/thai/)ヤ産業の概観

[タイ](/rule/asia/thai/)ヤは、自動車・トラック・バス・建設機械・航空機など、あらゆる乗り物の<span style="font-weight:700">回転駆動力を支える最重要部品</span>です。世界の[タイ](/rule/asia/thai/)ヤ市場は約143～151億ドル規模{{% cite "tire_market_2024_2025" %}}で、上位10社（<span style="font-weight:700">Michelin / Bridgestone / Goodyear / Continental / Sumitomo Rubber / Pirelli / Hankook / Yokohama / ZC Rubber / Maxxis</span>）で世界の大半を占めます。[日本](/rule/asia/japan/)は[タイ](/rule/asia/thai/)ヤ製造で世界的に高い評価を受け、特にブリヂストンが世界1～2位{{% cite "tire_business_top75" %}}、住友ゴム工業（Dunlop・Falken）が世界5位{{% cite "tire_business_top75" %}}、横浜ゴムが世界8位{{% cite "tire_business_top75" %}}、東洋ゴムも国際競争力を有する<span style="font-weight:700">[タイ](/rule/asia/thai/)ヤ大国</span>です。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">4社</div><div class="stat-label">主要[タイ](/rule/asia/thai/)ヤメーカー（ブリヂストン・住友ゴム・横浜ゴム・東洋ゴム）</div></div>
<div class="stat-card"><div class="stat-num">143～151億USD</div><div class="stat-label">世界[タイ](/rule/asia/thai/)ヤ市場規模（2024-2025年）</div></div>
<div class="stat-card"><div class="stat-num">世界1～2位</div><div class="stat-label">ブリヂストンの世界順位{{% cite "tire_business_michelin_2024" %}}</div></div>
<div class="stat-card"><div class="stat-num">EV市場36.3億USD</div><div class="stat-label">EV向け[タイ](/rule/asia/thai/)ヤ市場（2025年）成長中{{% cite "ev_tire_market_2025" %}}</div></div>
</div>

## 世界トップ10[タイ](/rule/asia/thai/)ヤメーカー

| 順位 | メーカー | 国 | 主力ブランド | 特徴 |
| --- | --- | --- | --- | --- |
| <span style="font-weight:700">1</span> | <span style="font-weight:700">Michelin</span> | <img src="/flags/FR.svg" alt="FR" class="inline-flag" width="20" height="14" loading="lazy" /> [フランス](/rule/europe/france/) | Michelin / BBS / Kleber | 2024年売上28.3億ドル{{% cite "tire_business_michelin_2024" %}}、乗用車・商用車ともに高性能[タイ](/rule/asia/thai/)ヤで世界首位 |
| <span style="font-weight:700">2</span> | <span style="font-weight:700">Bridgestone</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> [日本](/rule/asia/japan/)（東京） | Bridgestone / Firestone / Turanza | 推定売上26.6億ドル{{% cite "tire_business_michelin_2024" %}}、1931年久留米創立、1988年Firestone買収で世界2位に躍進 |
| <span style="font-weight:700">3</span> | <span style="font-weight:700">Goodyear</span> | <img src="/flags/US.svg" alt="US" class="inline-flag" width="20" height="14" loading="lazy" /> [米国](/rule/n_america/usa/) | Goodyear / Dunlop（米）/ Kelly | 売上17.9億ドル{{% cite "tire_business_michelin_2024" %}}、商用車[タイ](/rule/asia/thai/)ヤ世界大手 |
| <span style="font-weight:700">4</span> | <span style="font-weight:700">Continental</span> | <img src="/flags/DE.svg" alt="DE" class="inline-flag" width="20" height="14" loading="lazy" /> [ドイツ](/rule/europe/germany/) | Continental / Matador / Barum | 売上12.4億ドル{{% cite "tire_business_michelin_2024" %}}、自動車部品大手、プレミアム[タイ](/rule/asia/thai/)ヤ |
| <span style="font-weight:700">5</span> | <span style="font-weight:700">Sumitomo Rubber</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> [日本](/rule/asia/japan/)（神戸） | Dunlop / Falken / Ohtsu | [日本](/rule/asia/japan/)第2位、Dunlop欧州・北米事業を2025年に$7.01億で再取得{{% cite "sumitomo_dunlop_2025" %}} |
| <span style="font-weight:700">6</span> | <span style="font-weight:700">Pirelli</span> | <img src="/flags/IT.svg" alt="IT" class="inline-flag" width="20" height="14" loading="lazy" /> [イタリア](/rule/europe/italy/) | Pirelli / Scorpion / Cinturato | プレミアム[タイ](/rule/asia/thai/)ヤ、スポーツカー・F1 |
| <span style="font-weight:700">7</span> | <span style="font-weight:700">Hankook</span> | <img src="/flags/KR.svg" alt="KR" class="inline-flag" width="20" height="14" loading="lazy" /> [韓国](/rule/asia/korea/) | Hankook / Laufenn | アジア新興大手 |
| <span style="font-weight:700">8</span> | <span style="font-weight:700">Yokohama</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> [日本](/rule/asia/japan/)（平塚） | Yokohama / Avid / BluEarth | [日本](/rule/asia/japan/)第3位、1917年創立、乗用車・OEM向け高性能[タイ](/rule/asia/thai/)ヤ |
| <span style="font-weight:700">9</span> | <span style="font-weight:700">ZC Rubber</span> | <img src="/flags/CN.svg" alt="CN" class="inline-flag" width="20" height="14" loading="lazy" /> [中国](/rule/asia/china/) | Zhongce / Nereus | [中国](/rule/asia/china/)最大級、低中価格帯 |
| <span style="font-weight:700">10</span> | <span style="font-weight:700">Maxxis</span> | <img src="/flags/TW.svg" alt="TW" class="inline-flag" width="20" height="14" loading="lazy" /> [台湾](/rule/asia/taiwan/) | Maxxis / Victra | 中堅メーカー |

{{% cite "tire_business_top75" %}}

## [日本](/rule/asia/japan/)の4大[タイ](/rule/asia/thai/)ヤメーカー

| 企業 | 設立 | 本社 | 株式コード | 特徴 |
| --- | --- | --- | --- | --- |
| <span style="font-weight:700">ブリヂストン</span> | 1931{{% cite "bridgestone_history" %}} | 東京・中央区 | 5108 | 1931年3月1日、石橋正二郎が福岡県久留米市で創立{{% cite "bridgestone_official" %}}。世界1～2位。1988年米Firestone買収で急成長{{% cite "bridgestone_firestone_1988" %}}。時価総額約30.3億ドル{{% cite "bridgestone_marketcap_2026" %}} |
| <span style="font-weight:700">住友ゴム工業</span> | 1909（住友グループ）/ 1944{{% cite "sumitomo_rubber_history" %}}（独立法人化） | 神戸・中央区 | 5110 | Dunlop・Falkenブランド展開。2025年にDunlop欧州・北米事業を$7.01億で再買収{{% cite "sumitomo_dunlop_2025" %}}、世界5位の地位を強化 |
| <span style="font-weight:700">横浜ゴム</span> | 1917{{% cite "yokohama_founding" %}} | 平塚・神奈川県 | 5101 | 1917年創立、乗用車OEM向けの高性能[タイ](/rule/asia/thai/)ヤに特化。Avid・BluEarth等プレミアムブランド |
| <span style="font-weight:700">東洋ゴム / TOYO TIRE</span> | 1945（東洋ゴム工業）/ 2019{{% cite "toyo_tire_history" %}}（東洋ゴム→TOYO TIRE改名） | 伊丹・兵庫県 | 5105 | 創立1945年（戦後）、Toyo Tires・Nittoブランド。軽量・高性能[タイ](/rule/asia/thai/)ヤで OEM/交換市場両対応 |

## ブリヂストンの歴史 — [日本](/rule/asia/japan/)[タイ](/rule/asia/thai/)ヤ産業の源流

ブリヂストンは<span style="font-weight:700">1931年3月1日</span>、実業家<span style="font-weight:700">石橋正二郎</span>により福岡県久留米市で創立されました{{% cite "bridgestone_history" %}}。名前は創業者の姓を英訳した「橋（Bridge）」と「石（Stone）」から生まれた<span style="font-weight:700">造語</span>です{{% cite "bridgestone_name_origin" %}}。

創業初期は<span style="font-weight:700">欧米への技術依存を避け、[日本](/rule/asia/japan/)の独自技術で[タイ](/rule/asia/thai/)ヤ開発</span>{{% cite "bridgestone_early_strategy" %}}を推し進め、品質向上と製造効率化により国内市場を開拓。戦後の高度経済成長とトヨタ・日産などの自動車産業の世界進出に並走して、ブリヂストンも国際展開を加速させました。

<span style="font-weight:700">1988年、ブリヂストンは[米国](/rule/n_america/usa/)Firestone Tire & Rubber Company を$2.6億で買収</span>{{% cite "bridgestone_firestone_1988" %}}し、買収前の世界市場シェア10%から一躍17%へ上昇、Goodyear を抜いて世界2位[タイ](/rule/asia/thai/)ヤメーカーへ躍進しました{{% cite "bridgestone_firestone_1988" %}}。その後、北米事業の経営難（1989～1990年の日々の損失が100万ドルを超える）を乗り越え、1993年以降は黒字化し、1990年代後半には年利益2～3億ドルを安定的に生み出すようになりました{{% cite "bridgestone_firestone_1988" %}}。

## 天然ゴムの調達 — アジア・太平洋の資源依存

[タイ](/rule/asia/thai/)ヤは<span style="font-weight:700">天然ゴム＋合成ゴム＋鋼線＋化学薬品</span>の複合材料です。特に<span style="font-weight:700">天然ゴムは全[タイ](/rule/asia/thai/)ヤ生産量の約70%</span>{{% cite "natural_rubber_tire_70pct" %}}を占める最重要原料で、[日本](/rule/asia/japan/)の[タイ](/rule/asia/thai/)ヤメーカーはほぼ全量を海外から輸入しています。

| 天然ゴム産出国（2025年） | 生産シェア | [日本](/rule/asia/japan/)[タイ](/rule/asia/thai/)ヤメーカーの主要調達元 |
| --- | --- | --- |
| <img src="/flags/TH.svg" alt="TH" class="inline-flag" width="20" height="14" loading="lazy" /> [タイ](/rule/asia/thai/) | ~35%（約400万トン/年）| ブリヂストン・住友ゴム・横浜ゴムの主力供給国 |
| <img src="/flags/ID.svg" alt="ID" class="inline-flag" width="20" height="14" loading="lazy" /> [[インド](/rule/asia/india/)ネシア](/rule/asia/indonesia/) | ~25%（約300万トン/年） | ブリヂストン・住友ゴムの重要供給国 |
| <img src="/flags/VN.svg" alt="VN" class="inline-flag" width="20" height="14" loading="lazy" /> [ベトナム](/rule/asia/vietnum/) | ~12%（~150万トン/年） | 横浜ゴム・東洋ゴムの調達拠点 |
| <img src="/flags/MY.svg" alt="MY" class="inline-flag" width="20" height="14" loading="lazy" /> [マレーシア](/rule/asia/malaysia/) | ~8%（~100万トン/年） | 合成ゴムメーカーとしても重要 |

[タイ](/rule/asia/thai/)・[[インド](/rule/asia/india/)ネシア](/rule/asia/indonesia/)・[ベトナム](/rule/asia/vietnum/)・[マレーシア](/rule/asia/malaysia/)を合わせると<span style="font-weight:700">世界天然ゴム生産量の約80%</span>{{% cite "natural_rubber_sourcing" %}}を占め、[日本](/rule/asia/japan/)の[タイ](/rule/asia/thai/)ヤメーカーは戦略的に現地生産・加工施設を展開し、サプライチェーン統合を進めています。

## EV向け[タイ](/rule/asia/thai/)ヤ市場の急成長

電気自動車（EV）の普及に伴い、<span style="font-weight:700">EV向け[タイ](/rule/asia/thai/)ヤ市場は新たな成長分野</span>として注目されています。

- **2024年**: 世界EV向け[タイ](/rule/asia/thai/)ヤ市場 ~28.3億ドル
- **2025年**: 推定 36.3億ドル（+28.2% YoY）{{% cite "ev_tire_market_2025" %}}
- **2034年予測**: 337.2億ドル（CAGR 28.1%）{{% cite "ev_tire_market_2034" %}}

EV向け[タイ](/rule/asia/thai/)ヤは、<span style="font-weight:700">高い静粛性・転がり抵抗の低さ・耐荷重性</span>が要求される特殊仕様です。ブリヂストンは<span style="font-weight:700">「Turanza 6」（ENLITEN技術搭載）</span>{{% cite "bridgestone_turanza6" %}}を開発し、2024～2025年のEV向けOEM指定[タイ](/rule/asia/thai/)ヤとして採用が拡大しています。

## [日本](/rule/asia/japan/)での[タイ](/rule/asia/thai/)ヤ工場の地理的特徴

[日本](/rule/asia/japan/)の[タイ](/rule/asia/thai/)ヤ工場は、<span style="font-weight:700">九州（久留米・防府・宮崎）・中部（名古屋・三重・桑名）・関東・関西（泉大津）</span>に集中分立しています。これらは<span style="font-weight:700">トヨタ・日産・ホンダなどの自動車メインベルト</span>に近接し、JIT（ジャスト・イン・[タイ](/rule/asia/thai/)ム）供給に対応した戦略的立地です。

| 企業 | 主力工場 | 都道府県 | 主な製品 |
| --- | --- | --- | --- |
| <span style="font-weight:700">ブリヂストン</span> | 久留米{{% cite "bridgestone_plants" %}} | 福岡 | 乗用車・航空機[タイ](/rule/asia/thai/)ヤ（発祥地） |
| | 防府{{% cite "bridgestone_plants" %}} | 山口 | 乗用車・商用車・建機用 |
| | 那須{{% cite "bridgestone_plants" %}} | 栃木 | 乗用車・バイク用[タイ](/rule/asia/thai/)ヤ |
| | 彦根{{% cite "bridgestone_plants" %}} | 滋賀 | 乗用車用[タイ](/rule/asia/thai/)ヤ |
| | 下関 | 山口 | 建機・重機用オフロード[タイ](/rule/asia/thai/)ヤ |
| <span style="font-weight:700">住友ゴム工業</span> | 白河{{% cite "sumitomo_factories" %}} | 福島 | Dunlop乗用車[タイ](/rule/asia/thai/)ヤ |
| | 泉大津{{% cite "sumitomo_factories" %}} | 大阪 | Dunlop・工業品 |
| | 名古屋{{% cite "sumitomo_factories" %}} | 愛知 | Falken・乗用車[タイ](/rule/asia/thai/)ヤ |
| | 宮崎{{% cite "sumitomo_factories" %}} | 宮崎 | Dunlop乗用車[タイ](/rule/asia/thai/)ヤ |
| <span style="font-weight:700">横浜ゴム</span> | 平塚{{% cite "yokohama_plants" %}} | 神奈川 | 乗用車[タイ](/rule/asia/thai/)ヤ（本社隣接） |
| | 三島{{% cite "yokohama_plants" %}} | 神奈川 | 乗用車[タイ](/rule/asia/thai/)ヤ |
| | 三重{{% cite "yokohama_plants" %}} | 三重 | 乗用車・商用車[タイ](/rule/asia/thai/)ヤ |
| | 尾道{{% cite "yokohama_plants" %}} | 広島 | オフロード[タイ](/rule/asia/thai/)ヤ |
| <span style="font-weight:700">東洋ゴム/TOYO TIRE</span> | 桑名{{% cite "toyo_plants" %}} | 三重 | Toyo Tires乗用車 |
| | 仙台（岩沼）{{% cite "toyo_plants" %}} | 宮城 | Toyo Tires・Nitto商用車 |

## なぜ[日本](/rule/asia/japan/)が[タイ](/rule/asia/thai/)ヤで強いのか

- <span style="font-weight:700">自動車産業との統合発展</span>: トヨタ・日産・ホンダなどの世界規模OEM展開と並走し、品質・納期要求に対応。ブリヂストンも同じく世界展開に対応した製造基盤{{% cite "bridgestone_automotive_sync" %}}
- <span style="font-weight:700">化学・材料科学の蓄積</span>: 合成ゴム・化学架橋技術、転がり抵抗・耐久性向上への研究開発力
- <span style="font-weight:700">EV時代への適応</span>: ブリヂストンの「Turanza 6」「ENLITEN」など低転がり抵抗[タイ](/rule/asia/thai/)ヤ開発で、EV市場シェア拡大{{% cite "ev_tire_market_2025" %}}
- <span style="font-weight:700">グローバルサプライチェーン</span>: 東南アジア天然ゴムからの安定調達、北米・欧州・[中国](/rule/asia/china/)での現地生産基盤
- <span style="font-weight:700">品質・信頼性の国際競争力</span>: Michelin・Goodyear・Continental との激烈な競争の中で、[日本](/rule/asia/japan/)メーカーは「[日本](/rule/asia/japan/)品質」という信認を背景に、乗用車OEM・交換市場ともに強固な市場地位を維持

## グローバル市場における[日本](/rule/asia/japan/)メーカーの位置

ブリヂストンは世界市場で<span style="font-weight:700">Michelin とシェア1～2位を競う</span>{{% cite "tire_business_michelin_2024" %}}主要プレイヤーです。2024年時点で、Michelin売上28.3億ドル、ブリヂストン推定26.6億ドルと、両社の競争は激化しています。

[日本](/rule/asia/japan/)4社の世界市場シェアを合算すると、世界[タイ](/rule/asia/thai/)ヤ市場全体の約12～15%を占め、独立した地域大手として機能しています。

| 地域別[日本](/rule/asia/japan/)[タイ](/rule/asia/thai/)ヤメーカーの役割 | 主力メーカー |
| --- | --- |
| 東南アジア（[タイ](/rule/asia/thai/)・[[インド](/rule/asia/india/)ネシア](/rule/asia/indonesia/)・[マレーシア](/rule/asia/malaysia/)） | ブリヂストン（最大）、住友ゴム、横浜ゴム |
| 北米（[米国](/rule/n_america/usa/)・[カナダ](/rule/n_america/canada/)・[メキシコ](/rule/n_america/mexico/)） | ブリヂストン（Firestone含む） |
| 欧州 | ブリヂストン、住友ゴム（Dunlop再買収{{% cite "sumitomo_dunlop_2025" %}}） |
| [中国](/rule/asia/china/) | ブリヂストン、住友ゴム、横浜ゴム |
| [日本](/rule/asia/japan/)国内 | ブリヂストン、住友ゴム、横浜ゴム、東洋ゴム |

## [日本](/rule/asia/japan/)の[タイ](/rule/asia/thai/)ヤメーカー時価総額マップ

<div class="corp-treemap-section">
<div class="corp-treemap" data-companies='[{"t":"5108","n":"ブリヂストン","s":"タイヤ・ゴム","v":1.0,"c":"#ef4444"},{"t":"5110","n":"住友ゴム工業","s":"タイヤ・スポーツ","v":0.25,"c":"#ef4444"},{"t":"5101","n":"横浜ゴム","s":"タイヤ・自動車部品","v":0.18,"c":"#ef4444"},{"t":"5105","n":"TOYO TIRE","s":"タイヤ・自動車部品","v":0.12,"c":"#ef4444"}]'></div>
<p class="treemap-note">※ ブリヂストンは圧倒的な世界市場シェアで[日本](/rule/asia/japan/)[タイ](/rule/asia/thai/)ヤ産業の中核を占め、市場時価総額約30.3億ドル（2026年2月）{{% cite "bridgestone_marketcap_2026" %}}。住友ゴム・横浜ゴム・東洋ゴムは連携・競争関係にある。</p>
</div>

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light"><tr>
<th class="col-width-3">企業</th>
<th class="col-width-2">ティッカー</th>
<th class="col-width-3">事業</th>
<th class="col-width-1">IR</th>
<th class="col-width-1">配当履歴</th>
</tr></thead>
<tbody class="corp-desc">
<tr><td>ブリヂストン</td><td>5108</td><td>[タイ](/rule/asia/thai/)ヤ・ゴム</td><td>{{% corplink "https://www.google.com/search?q=ブリヂストン+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "5108" %}}</td></tr>
<tr><td>住友ゴム工業</td><td>5110</td><td>[タイ](/rule/asia/thai/)ヤ・スポーツ</td><td>{{% corplink "https://www.google.com/search?q=住友ゴム工業+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "5110" %}}</td></tr>
<tr><td>横浜ゴム</td><td>5101</td><td>[タイ](/rule/asia/thai/)ヤ・自動車部品</td><td>{{% corplink "https://www.google.com/search?q=横浜ゴム+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "5101" %}}</td></tr>
<tr><td>TOYO TIRE</td><td>5105</td><td>[タイ](/rule/asia/thai/)ヤ・自動車部品</td><td>{{% corplink "https://www.google.com/search?q=TOYO TIRE+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "5105" %}}</td></tr>
</tbody></table>
</div>

## 参考文献

{{% references %}}
bridgestone_official: Bridgestone Corporation「企業情報：ブリヂストン東京本社」<https://www.bridgestone.com/corporate/locations/tire/japan.html>
bridgestone_history: Bridgestone「企業沿革：1931-1940」<https://www.bridgestone.com/corporate/history/1931-1940.html>
bridgestone_name_origin: Bridgestone Blog「ブリヂストンの名前の由来」<https://www.bridgestone.com/blog/2019082801.html>
bridgestone_early_strategy: Bridgestone「ブリヂストンストーリー：グローバルな夢」<https://www.bridgestone.com/corporate/history/story/01.index.html>
bridgestone_firestone_1988: WardsAuto「Bridgestone Tire Comes Full Circle 25 Years After Buying Firestone in 1988」<https://www.wardsauto.com/industry/bridgestone-tire-comes-full-circle-25-years-after-buying-firestone-in-1988>
bridgestone_plants: Bridgestone「タイヤ工場：日本」<https://www.bridgestone.com/corporate/locations/tire/japan.html>
bridgestone_turanza6: Bridgestone「Turanza 6・ENLITEN技術」<https://www.bridgestone.com/products/off_the_road/about/production.html>
bridgestone_marketcap_2026: Companies Market Cap「Bridgestone Market Capitalization」<https://companiesmarketcap.com/bridgestone/marketcap/>
bridgestone_automotive_sync: Bridgestone「自動車メーカーとの協業」<https://www.bridgestone.com/corporate/news/2022080802.html>
sumitomo_rubber_history: Sumitomo Rubber Industries「企業概要：Global Network (Japan)」<https://www.srigroup.co.jp/english/corporate/group/japan.html>
sumitomo_dunlop_2025: Sumitomo Rubber Industries「Dunlop権利買収・2025年」<https://www.srigroup.co.jp/english/corporate/group/japan.html>
sumitomo_factories: Sumitomo Rubber Industries「Global Network (Japan) - 白河・泉大津・名古屋・宮崎工場」<https://www.srigroup.co.jp/english/corporate/group/japan.html>
yokohama_founding: The Yokohama Rubber Company「企業沿革：1917年創立」<https://www.y-yokohama.com/global/sustainability/related/10/>
yokohama_plants: The Yokohama Rubber Company「工場立地：平塚・三島・三重・尾道」<https://www.y-yokohama.com/global/sustainability/mori/>
toyo_tire_history: Toyo Tire Corporation「企業情報：1945年創立・2019年改名」<https://www.toyotires-global.com/corporate/pdf/profile_190807.pdf>
toyo_plants: Toyo Tire Corporation「工場：桑名・仙台（岩沼）」<https://www.toyotires-global.com/csr/pdf/site_report2023_en.pdf>
tire_market_2024_2025: Grand View Research「Global Tires Market Size 2024-2025」<https://www.grandviewresearch.com/industry-analysis/tires-market-report>
tire_business_top75: Tire Business「Global Tire Report Top 75 - 2024」<https://www.tirebusiness.com/global-tire-report/top-tire-manufacturers-2024-michelin-bridgestone-goodyear-conti-lead-again/>
tire_business_michelin_2024: Tire Business「Michelin leads tire makers in 40th edition of Global Tire Report Top 75 ranking」<https://www.tirebusiness.com/global-tire-report/michelin-leads-tire-makers-40th-edition-global-tire-report-top-75-ranking/>
natural_rubber_tire_70pct: ARC Group「Rubber Manufacturing in Southeast Asia Part 1: Thailand and Indonesia」<https://arc-group.com/rubber-manufacturing-thailand-indonesia/>
natural_rubber_sourcing: ANRPC「Top 10 Rubber Producing Countries (2025)」<https://www.anrpc.org/news/top-10-rubber-producing-countries-(2025)>
ev_tire_market_2025: Towards Automotive「Electric Vehicle Tires Market Size to Elevate $59.59 Bn by 2034」<https://www.towardsautomotive.com/insights/electric-vehicle-tires-market-sizing>
ev_tire_market_2034: Precedence Research「Electric Vehicle (EV) Tire Market Size to Hit USD 337.20 Bn by 2034」<https://www.precedenceresearch.com/electric-vehicle-tire-market>
jatma: Japan Automobile Tyre Manufacturers Association「Member Companies」<https://www.jatma.or.jp/english/about/member.html>
{{% /references %}}
