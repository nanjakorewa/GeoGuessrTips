---
title: "日本のポンプ産業"
subtitle: "荏原・日機装・酉島・鶴見 — 国内361社が支える流体機械とグローバル展開"
date: 2026-04-13
lastmod: 2026-04-13
description: "日本のポンプ産業を解説。荏原製作所（売上8,666億円）・日機装・酉島製作所・鶴見製作所の主要企業、国内生産額約3,500〜4,000億円の市場規模、世界ポンプ市場（約700億ドル）でのシェア、海水淡水化・LNG・水素向け成長分野を各社IR資料に基づき整理。"
weight: 41
mapName: "japan"
galleryDir: "japan-pump"
---

<script>
(function() {
  var pins = [
    { x: 422, y: 452, label: '大田区（荏原）', type: 'pump',
      note: '荏原製作所 本社（東京都大田区）' },
    { x: 412, y: 444, label: '渋谷（日機装）', type: 'pump',
      note: '日機装 本社（東京都渋谷区）' },
    { x: 264, y: 470, label: '高槻（酉島）', type: 'pump',
      note: '酉島製作所 本社(大阪府高槻市）' },
    { x: 258, y: 480, label: '大阪（鶴見）', type: 'pump',
      note: '鶴見製作所 本社（大阪市鶴見区）' },
    { x: 428, y: 456, label: '大田区（電業社）', type: 'pump',
      note: '電業社機械製作所 本社（東京都大田区）' },
    { x: 232, y: 478, label: 'たつの（帝国電機）', type: 'pump',
      note: '帝国電機製作所 本社（兵庫県たつの市）' },
    { x: 416, y: 448, label: '千代田（イワキ）', type: 'pump',
      note: 'イワキ 本社（東京都千代田区）' },
    { x: 255, y: 476, label: '大阪（タクミナ）', type: 'pump',
      note: 'タクミナ 本社（大阪市中央区）' },
    { x: 148, y: 512, label: '北九州（横田）', type: 'pump',
      note: '横田製作所 本社（北九州市小倉北区）' },
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

      var color = '#2563eb';
      var bgColor = 'rgba(37,99,235,0.18)';
      var strokeColor = 'rgba(37,99,235,0.55)';

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

## [日本](/rule/asia/japan/)のポンプ産業とは

<figure style="float:right;clear:right;margin:0 0 14px 22px;max-width:min(420px,45%);">
  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Centrifugal_Pump.jpg?width=420" alt="遠心ポンプ" loading="lazy" style="width:100%;height:auto;border-radius:6px;display:block;" />
  <figcaption style="font-size:0.85em;color:#555;margin-top:6px;text-align:center;line-height:1.45;">遠心ポンプ（セントリフューガルポンプ）の一例。日本の流体機械産業では荏原製作所・日機装・酉島製作所・鶴見製作所などが石油精製・水処理・原子力・空調等多用途で世界市場に展開しています。<br/>画像: <a href="https://commons.wikimedia.org/wiki/File:Centrifugal_Pump.jpg" target="_blank" rel="noopener noreferrer">Saud / Wikimedia Commons (CC BY-SA 4.0)</a></figcaption>
</figure>

ポンプは水・油・薬液・スラリーなどあらゆる流体を輸送する<span style="font-weight:700">産業の血管</span>とも言える基幹機械です。上下水道、石油精製、化学プラント、発電所、半導体工場、ビルの空調から家庭の給水まで、ポンプなしで稼働する産業施設はほとんど存在しません。

[日本](/rule/asia/japan/)のポンプ製造業には国内に361社のメーカーがあり{{% cite "toyama_pump" %}}、生産金額は年間約3,500〜4,000億円規模を維持しています{{% cite "toyama_pump" %}}。荏原製作所を筆頭とする大手から高度な専門分野に特化した中堅まで層が厚く、荏原の連結売上高は8,666億円（2024年12月期）に達し、売上規模で世界ポンプメーカー上位に位置します{{% cite "ebara_ir2024" %}}。

さらに特徴的なのは、<span style="font-weight:700">ニッチ分野で世界トップを占める専業メーカーが多数存在する</span>ことです。海水淡水化ポンプでは酉島製作所が世界首位{{% cite "torishima_ir2024" %}}、LNG用極低温ポンプでは日機装が世界シェア約50%{{% cite "nikkiso_ir2024" %}}{{% cite "nikkiso_cryo" %}}、キャンドモータポンプでは帝国電機製作所が世界シェア約40%{{% cite "teikoku_ir2025" %}}を占めます。

<div class="stat-grid">
  <div class="stat-card"><div class="stat-num">約3,500〜4,000億円/年{{% cite "toyama_pump" %}}</div><div class="stat-label">国内ポンプ生産金額</div></div>
  <div class="stat-card"><div class="stat-num">361社<span class="stat-sub">（東京68、大阪60、神奈川26、愛知26）</span>{{% cite "toyama_pump" %}}</div><div class="stat-label">国内メーカー数</div></div>
  <div class="stat-card"><div class="stat-num">約630〜710億ドル<span class="stat-sub">（CAGR 4〜5%成長）</span>{{% cite "precedence_pump" %}}{{% cite "imarc_pump" %}}</div><div class="stat-label">世界ポンプ市場規模（2025年推計）</div></div>
  <div class="stat-card"><div class="stat-num">約400〜500万台{{% cite "toyama_pump" %}}</div><div class="stat-label">国内年間生産台数</div></div>
</div>

## ポンプの種類と用途

ポンプは動作原理により大きく分類され、用途に応じて多様な種類が製造されています。世界市場での用途別シェアを見ると、石油精製・化学プラント・上下水道・電力・家庭用の5分野で全体の約6割を占めます{{% cite "toyama_pump" %}}。

| 用途分野 | 世界市場シェア | 主な使用ポンプ |
| -------- | ------------ | ------------ |
| 石油精製 | 約18% | API規格遠心ポンプ、高温・高圧対応 |
| 化学プラント | 約14% | 耐食性ポンプ、キャンドモータポンプ |
| 上下水道 | 約11% | 大型渦巻ポンプ、水中ポンプ |
| 電力（発電所） | 約9% | ボイラ給水ポンプ、復水ポンプ |
| 家庭用 | 約9% | 給水ポンプ、循環ポンプ |

{{% cite "toyama_pump" %}}

## 世界のポンプ市場と主要メーカー

世界のポンプ市場は2025年時点で約630〜710億ドル規模と推定され、2030年にかけてCAGR 4〜5%の成長が見込まれています{{% cite "precedence_pump" %}}{{% cite "imarc_pump" %}}。市場は比較的分散しており、上位5社の合計シェアでも30〜35%程度にとどまります。

以下は2024年の売上高ベースによる主要メーカー比較です。

| 順位 | 企業 | 本社国 | 2024年売上高 |
| ---- | ---- | ------ | ----------- |
| 1 | Xylem | 米国 | 86億ドル{{% cite "xylem_ar2024" %}} |
| 2 | 荏原製作所 | [日本](/rule/asia/japan/) | 8,666億円（約57億ドル）{{% cite "ebara_ir2024" %}} |
| 3 | Grundfos | デンマーク | 45億ユーロ{{% cite "grundfos_ar2024" %}} |
| 4 | Flowserve | 米国 | 45.6億ドル{{% cite "flowserve_ar2024" %}} |
| 5 | Sulzer | スイス | 35.3億スイスフラン{{% cite "sulzer_ar2024" %}} |
| 6 | KSB | ドイツ | 29.7億ユーロ{{% cite "ksb_ar2024" %}} |
| 7 | WILO | ドイツ | 19.0億ユーロ{{% cite "wilo_ar2024" %}} |
| 8 | Weir Group | 英国 | — |

※ 荏原・Xylemは半導体装置・水処理機器を含む連結売上。ポンプ単体売上は各社とも連結売上より小さくなります。

## 国内メーカーの売上高ランキング

[日本](/rule/asia/japan/)のポンプメーカーは荏原製作所が突出した規模を持ち、日機装・酉島製作所・鶴見製作所が続きます{{% cite "shikiho_pump" %}}。ただし、荏原は半導体CMP装置、日機装は医療機器（人工透析）・航空宇宙部品を含む連結売上であり、ポンプ単体の売上は各社ともそれより小さくなる点に注意が必要です。

| 順位 | 企業 | 連結売上高（最新期） | 営業利益 | 主力分野 |
| ---- | ---- | ------------------- | ------- | ------- |
| 1 | 荏原製作所（6361） | 8,666億円（FY2024/12）{{% cite "ebara_ir2024" %}} | 979億円 | 総合ポンプ、半導体CMP装置、コンプレッサ |
| 2 | 日機装（6376） | 2,130億円（FY2024/12）{{% cite "nikkiso_ir2024" %}} | 90億円 | 特殊ポンプ、LNG極低温ポンプ、医療機器、航空宇宙 |
| 3 | 酉島製作所（6363） | 865億円（FY2024）{{% cite "torishima_ir2024" %}} | 54億円 | 大型プラント向けポンプ、海水淡水化、発電所向け |
| 4 | 鶴見製作所（6351） | 680億円（FY2025/3）{{% cite "tsurumi_ir2025" %}} | 102億円 | 水中ポンプ国内トップ、建設・排水向け |
| 5 | イワキ（6237） | 457億円（FY2025/3）{{% cite "iwaki_ir2025" %}} | 58億円 | ケミカルポンプ（薬液搬送）、半導体向け |
| 6 | 帝国電機製作所（6333） | 305億円（FY2025/3）{{% cite "teikoku_ir2025" %}} | 60億円 | キャンドモータポンプ（密閉型）世界首位 |
| 7 | 電業社機械製作所（6365） | 280億円（FY2025/3）{{% cite "dmw_ir2025" %}} | 22億円 | 上下水道向けポンプ、送風機 |

## ポンプのライフサイクルコスト（LCC）

ポンプの総保有コスト（LCC）では、<span style="font-weight:700">購入費は全体のわずか約14%</span>に過ぎず、最大のコスト要因は動力費（電力費）の約32%です{{% cite "toyama_pump" %}}。世界のモータ消費電力の約20%はポンプ駆動に使われているとされ、省エネルギー性能の向上が業界の重要テーマとなっています。

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">コスト1</span>
    <span class="process-step__name">動力費（電力）</span>
    <span class="process-step__temp">約32%</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">コスト2</span>
    <span class="process-step__name">保守管理費</span>
    <span class="process-step__temp">約20%</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">コスト3</span>
    <span class="process-step__name">購入費</span>
    <span class="process-step__temp">約14%</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">コスト4</span>
    <span class="process-step__name">その他（据付・廃棄等）</span>
    <span class="process-step__temp">約34%</span>
  </div>
</div>

この背景から、インバータ制御やIoTによるリアルタイム運転最適化が、ポンプの省エネ技術の中核となっています{{% cite "toyama_pump" %}}。

## 技術トレンド

[日本](/rule/asia/japan/)のポンプ産業では、以下の技術トレンドが進んでいます{{% cite "toyama_pump" %}}。

| 技術分野 | 内容 |
| -------- | ---- |
| CFD（数値流体力学） | コンピュータシミュレーションによるインペラ・ケーシング設計の最適化。試作回数を削減し開発期間を短縮 |
| 3Dプリンティング | 金属積層造形による複雑形状インペラの製造。従来の鋳造では不可能な流路形状を実現 |
| エンジニアリングプラスチック | 耐食・軽量部品への樹脂材料の採用。ケミカルポンプの耐薬品性向上 |
| インバータ制御 | 回転数可変運転による省エネ。流量に応じた最適回転数で消費電力を大幅削減 |
| IoT・遠隔監視 | センサーによる振動・温度・流量のリアルタイム監視。異常の早期検知と予知保全を実現 |

## 成長分野と将来展望

国内ポンプ市場は成熟しつつありますが、世界市場では複数の有望分野が成長を牽引しています。各社IR資料からも、これらの分野への注力姿勢が読み取れます。

| 成長分野 | 市場規模・成長率 | 概要 | 日本企業の動向 |
| -------- | -------------- | ---- | ------------ |
| 海水淡水化 | CAGR 6〜9%で成長{{% cite "precedence_pump" %}} | 水不足の深刻化により中東・北アフリカを中心に需要拡大。高圧ポンプが必須 | 酉島製作所が世界シェア首位、過去10年で2,200台超受注{{% cite "torishima_ir2024" %}} |
| LNG・液体水素用極低温ポンプ | LNG需要拡大に伴い堅調成長 | LNG需要の拡大と水素エネルギーの普及に伴い需要増加 | 日機装が世界シェア約50%{{% cite "nikkiso_ir2024" %}}。酉島も液体水素分野に参入{{% cite "torishima_ir2024" %}} |
| 半導体製造向けポンプ | 生成AI需要で急成長 | ドライ真空ポンプ、CMP装置、ケミカルポンプの需要増 | 荏原が精密・電子事業で売上の32%{{% cite "ebara_ir2024" %}}。イワキは薬液搬送で国内トップ{{% cite "iwaki_ir2025" %}} |
| 水素・アンモニア | 脱炭素政策が追い風 | 水素サプライチェーン向けポンプ・コンプレッサの需要創出 | 酉島がHermetic社と提携{{% cite "torishima_ir2024" %}}、日機装が脱炭素関連で増収{{% cite "nikkiso_ir2024" %}} |
| FPSO（浮体式生産貯蔵設備） | 深海開発で需要増 | 南米・東アフリカ沖合が有望 | 荏原・酉島がプラント用大型ポンプで参画 |

## 業界動向 — 海外展開とM&A

[日本](/rule/asia/japan/)のポンプメーカーは国内市場の成熟に伴い、海外展開を積極的に進めています。

荏原製作所は2020年にトルコの深井戸ポンプメーカーVansan社を約113億円で買収して欧州・中東・アフリカ市場への足がかりを築き{{% cite "ebara_vansan" %}}、2022年にはカナダのHayward Gordon社を買収して北米の産業用ポンプ・ミキサー市場に参入しました{{% cite "ebara_hayward" %}}。グループ全体の海外売上比率は約66%、世界111社のグループネットワークを構築しています{{% cite "ebara_ir2024" %}}。

酉島製作所は海外売上比率50%超を維持し{{% cite "torishima_ir2024" %}}、中東・東南アジアの海水淡水化プロジェクトに多数参画しています。極低温ポンプに強みを持つ海外企業の子会社化や、ドイツHermetic社との業務提携により、液体水素・アンモニア分野への事業拡大を図っています{{% cite "torishima_ir2024" %}}。

帝国電機製作所は海外売上比率が70%を超えており{{% cite "teikoku_ir2025" %}}、米国・インドでの原子力向け大型プロジェクト受注も進んでいます。鶴見製作所は北米の鉱山・建設市場やASEAN諸国での需要を取り込み、海外売上は251億円（FY2025/3）に成長しています{{% cite "tsurumi_ir2025" %}}。

世界的にもGrundfos・Flowserve・Sulzerなどの欧米大手はM&Aによる規模拡大を継続しており、ポンプ産業は今後も再編が進む見通しです。

## 主要企業の中期経営計画と成長戦略

| 企業 | 計画名・目標年度 | 売上目標 | 重点戦略 |
| ---- | -------------- | ------- | ------- |
| 荏原製作所 | E-Plan2028（〜FY2028）{{% cite "ebara_ir2024" %}}{{% cite "ebara_eplan2028" %}} | 1.2兆円 | 精密・電子事業への重点投資（藤沢工場、熊本工場増強、台湾製造拠点）。長期ビジョン「E-Vision2035」で売上2兆円以上を目指す |
| 日機装 | NIKKISO 2028（〜FY2028）{{% cite "nikkiso_ir2024" %}} | — | インダストリアル事業の拡大（低・脱炭素関連）、メディカル事業の安定成長 |
| 酉島製作所 | 新中計（〜FY2029）{{% cite "torishima_ir2024" %}} | 約1,000億円 | 営業利益率10%以上、ROE 10%以上。水素・アンモニア分野への展開 |
| 鶴見製作所 | — | 710億円（FY2026/3予想）{{% cite "tsurumi_ir2025" %}} | ASEAN・北米での海外展開強化、水処理関連機器の拡充 |

## ポンプ産業のバリューチェーン

{{% mermaid %}}
graph LR
  A["素材メーカー\n鋳鉄・ステンレス・樹脂"]-->B["ポンプメーカー\n設計・製造・組立"]
  B-->C["商社・代理店\n販売・据付"]
  C-->D["エンドユーザー\nプラント・上下水道・建設"]
  D-->E["保守・メンテナンス\n部品交換・オーバーホール"]
  E-->|"リピート需要"|B
  F["エンジニアリング会社\nプラント設計・EPC"]-->|"仕様決定"|B
  style A fill:#fef3c7,color:#78350f,stroke:#f59e0b,stroke-width:2px
  style B fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style D fill:#d1fae5,color:#065f46,stroke:#10b981,stroke-width:2px
  style E fill:#fce7f3,color:#831843,stroke:#ec4899,stroke-width:2px
{{% /mermaid %}}

## 各社のニッチトップ戦略

[日本](/rule/asia/japan/)のポンプ産業の最大の特徴は、<span style="font-weight:700">特定用途で世界シェア首位を握る「ニッチトップ」企業が複数存在する</span>ことです。

| 企業 | ニッチ分野 | 世界シェア | 強みの源泉 |
| ---- | --------- | --------- | --------- |
| 酉島製作所 | 海水淡水化プラント用ポンプ{{% cite "torishima_ir2024" %}} | 世界首位 | 高圧・大流量ポンプの設計技術、中東での豊富な納入実績 |
| 日機装 | LNG用極低温ポンプ{{% cite "nikkiso_ir2024" %}}{{% cite "nikkiso_cryo" %}} | 約50% | 極低温（−162℃以下）での信頼性、Atlas Copco LNG事業の買収 |
| 帝国電機 | キャンドモータポンプ{{% cite "teikoku_ir2025" %}} | 約40% | 完全密閉構造の設計・製造技術、無漏洩の高信頼性 |
| イワキ | 浄水場用塩素注入ポンプ{{% cite "iwaki_ir2025" %}} | 国内約50% | 多品種少量生産、耐薬品性素材の知見 |
| 鶴見製作所 | 建設業向け水中ポンプ{{% cite "tsurumi_ir2025" %}} | 国内約60% | 現場の過酷環境への対応力、全国販売・サービス網 |
| 荏原製作所 | 半導体CMP装置{{% cite "ebara_ir2024" %}} | 世界2位 | ポンプ技術から派生した精密研磨技術、生成AI需要の追い風 |

## 関連企業の時価総額マップ

{{% corp-treemap "6361,6376,6363,6351,6365,6333,6237" %}}

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
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 総合ポンプメーカー</td></tr>
<tr>
<td>荏原製作所</td>
<td>{{% minkabu 6361 %}}</td>
<td>1912年創業の総合流体機械メーカー。標準ポンプからプラント用大型ポンプ、コンプレッサ、タービンまで幅広い流体機械を製造。FY2024の売上収益は8,666億円（前年比14.1%増）、営業利益979億円{{% cite "ebara_ir2024" %}}。セグメント別では精密・電子事業（半導体CMP装置・ドライ真空ポンプ）が全体の32%を占め最大の収益源に成長。2020年にトルコのVansan社（約113億円）{{% cite "ebara_vansan" %}}、2022年にカナダのHayward Gordon社を買収{{% cite "ebara_hayward" %}}し海外展開を加速。海外売上比率は約66%、世界111社のグループネットワークを持つ。長期ビジョン「E-Vision2035」で売上2兆円以上を目指す{{% cite "ebara_ir2024" %}}。</td>
<td>{{% corplink "https://www.ebara.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6361" %}}</td>
</tr>
<tr>
<td>日機装</td>
<td>{{% minkabu 6376 %}}</td>
<td>産業用特殊ポンプ（往復動ポンプ・極低温ポンプ）を柱に、医療機器（人工透析装置で国内シェア上位）、航空宇宙部品（カスケード逆噴射装置）を3本柱で展開。FY2024の連結売上は2,130億円（前年比10.6%増）、営業利益90億円{{% cite "nikkiso_ir2024" %}}。LNG用極低温ポンプは世界シェア約50%で最大手級の地位を確保{{% cite "nikkiso_ir2024" %}}{{% cite "nikkiso_cryo" %}}。インダストリアル事業は低・脱炭素関連需要を追い風に過去最高の売上・利益を達成。新中計「NIKKISO 2028」で成長を加速{{% cite "nikkiso_ir2024" %}}。</td>
<td>{{% corplink "https://www.nikkiso.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6376" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ プラント・インフラ向けポンプ</td></tr>
<tr>
<td>酉島製作所</td>
<td>{{% minkabu 6363 %}}</td>
<td>1919年創業の大型プラント向けポンプ専業メーカー。FY2024の連結売上は865億円（5年連続過去最高）{{% cite "torishima_ir2024" %}}。海水淡水化プラント向けポンプで世界シェア首位を確保し、過去10年で2,200台超を受注{{% cite "torishima_ir2024" %}}。海外売上比率は50%超。中期経営計画「Beyond110」を7年前倒しで達成し、新目標としてFY2029に売上約1,000億円・営業利益率10%以上を掲げる。液体水素・アンモニア分野への展開も推進中{{% cite "torishima_ir2024" %}}。</td>
<td>{{% corplink "https://www.torishima.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6363" %}}</td>
</tr>
<tr>
<td>電業社機械製作所</td>
<td>{{% minkabu 6365 %}}</td>
<td>上下水道・雨水排水向けポンプを主力とするポンプ・送風機メーカー。FY2025/3の売上高は280億円（前年比16.5%増）、営業利益22億円{{% cite "dmw_ir2025" %}}。政府・公共セクター向け需要に強い基盤を持つ。中東・インド・サウジアラビアに製造拠点を展開し海外事業を推進中{{% cite "dmw_ir2025" %}}。</td>
<td>{{% corplink "https://www.dmw.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6365" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 専門分野特化型ポンプ</td></tr>
<tr>
<td>鶴見製作所</td>
<td>{{% minkabu 6351 %}}</td>
<td>水中ポンプの国内トップメーカー。FY2025/3の連結売上は680億円（前年比8.7%増）、営業利益102億円{{% cite "tsurumi_ir2025" %}}。国内市場シェア約3割、建設業向けでは約6割のシェアを持つ{{% cite "tsurumi_ir2025" %}}。海外売上は251億円で、北米の鉱山・建設市場やASEAN諸国での需要が堅調。新製品「水中ノンクロッグ型スマッシュポンプBN型」など異物通過性能の高い製品を投入{{% cite "tsurumi_ir2025" %}}。</td>
<td>{{% corplink "https://www.tsurumipump.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6351" %}}</td>
</tr>
<tr>
<td>帝国電機製作所</td>
<td>{{% minkabu 6333 %}}</td>
<td>キャンドモータポンプ（モータとポンプを一体化した完全密閉型）のパイオニア。FY2025/3の連結売上は305億円、営業利益60億円（営業利益率19.8%）で過去最高業績を達成{{% cite "teikoku_ir2025" %}}。キャンドモータポンプで世界シェア約40%・国内シェア約60%の世界首位{{% cite "teikoku_ir2025" %}}。化学プラント・原子力発電所など漏洩が許されない用途に強みを持ち、海外売上比率は70%超。米国・中国・台湾・ドイツ・インドなどに拠点を展開{{% cite "teikoku_ir2025" %}}。</td>
<td>{{% corplink "https://www.teikokudenki.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6333" %}}</td>
</tr>
<tr>
<td>イワキ</td>
<td>{{% minkabu 6237 %}}</td>
<td>ケミカルポンプ(薬液搬送用ポンプ)の専業メーカー。FY2025/3の連結売上は457億円、営業利益58億円(営業利益率12.8%){{% cite "iwaki_ir2025" %}}。浄水場の塩素注入・人工透析用ポンプで国内シェア約50%、半導体・液晶製造向けケミカルポンプでも国内トップシェア{{% cite "iwaki_ir2025" %}}。海外売上比率は約52%で、米国(72億円)・欧州(60億円)・中国(56億円)を中心にグローバル展開{{% cite "iwaki_ir2025" %}}。</td>
<td>{{% corplink "https://www.iwakipumps.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6237" %}}</td>
</tr>
</tbody>
</table>
</div>

## 参考文献

{{% references %}}
toyama_pump: 外山技術士事務所「ポンプ業界の動向と将来展望」（2023年3月10日）<https://yuksoto.sakura.ne.jp/2303101%20Pump_Gyoukai_Dohkou_Tenbou.pdf>
ebara_ir2024: 荏原製作所「2024年12月期 決算短信」<https://www.ebara.com/content/dam/ebara/grand-masters/entities/ja/pdf/ir/library/earnings/earnings/160q4_jp.pdf>
ebara_vansan: 荏原製作所「トルコ Vansan Makina Sanayi ve Ticaret A.Ş.の株式取得について」（2020年12月）<https://www.ebara.co.jp/corporate/newsroom/release/company/detail/1205398_1673.html>
ebara_hayward: 荏原製作所「Hayward Gordon Group の持分取得について」（2022年10月）<https://www.ebara.co.jp/corporate/newsroom/release/company/detail/1205458_1673.html>
ebara_eplan2028: 荏原製作所「長期ビジョン E-Vision2035 及び中期経営計画 E-Plan2028」<https://www.ebara.com/jp-ja/ir/business/vision/>
nikkiso_ir2024: 日機装「2024年12月期 決算短信」<https://www.nikkiso.co.jp/ir/library/results_archive.html>
nikkiso_cryo: 日機装 Bright「LNGから水素まで、極低温の液体を送るクライオジェニックポンプの開発とは」<https://bright.nikkiso.co.jp/article/production/cryogenic-pump>
torishima_ir2024: 酉島製作所「2024年度 決算説明資料」<https://www.torishima.co.jp/common/uploads/Presentation_FY2024.pdf>
tsurumi_ir2025: 鶴見製作所「2025年3月期 決算短信」<https://www.tsurumipump.co.jp/ir/library/finance/pdf/2025_tanshin.pdf>
dmw_ir2025: 電業社機械製作所「2025年3月期 決算短信」<https://www.dmw.co.jp/ir/library.html>
teikoku_ir2025: 帝国電機製作所「2025年3月期 決算短信」<https://www.teikokudenki.co.jp/ir/library/settlement.html>
iwaki_ir2025: イワキ「2025年3月期 決算短信」<https://www.iwakipumps.co.jp/ir/library/result.html>
shikiho_pump: 会社四季報オンライン「ポンプ関連企業レポート」<https://shikiho.toyokeizai.net/news/0/21876>
precedence_pump: Precedence Research "Pumps Market Size, Share, and Trends 2025 to 2034" <https://www.precedenceresearch.com/pumps-market>
imarc_pump: IMARC Group "Pumps Market Report 2025-2033" <https://www.imarcgroup.com/pumps-market>
xylem_ar2024: Xylem Inc. "Fourth Quarter and Full Year 2024 Results" <https://www.xylem.com/en-us/about-xylem/newsroom/press-releases/xylem-reports-fourth-quarter-and-full-year-2024-results/>
grundfos_ar2024: Grundfos "Annual Report 2024" <https://www.grundfos.com/media/reports-and-publications/grundfos-annual-report-2024>
flowserve_ar2024: Flowserve Corporation "Annual Report 2024" <https://ir.flowserve.com/financials/annual-reports/>
sulzer_ar2024: Sulzer Ltd "Annual Report 2024" <https://www.sulzer.com/en/about-us/investors>
ksb_ar2024: KSB SE & Co. KGaA "Annual Report 2024" <https://www.ksb.com/en-global/media/press-releases/uebersicht/ksb-sets-new-record-2092884>
wilo_ar2024: WILO SE "Annual Report 2024" <https://wilo.com/en/Company/Annual-Sustainability-Report/>
{{% /references %}}
