---
title: "日本の産業用ロボット産業"
subtitle: "ファナック・安川電機・川崎重工・三菱電機 — 世界シェア45%で世界最大級の産業用ロボット製造大国"
date: 2026-04-08
lastmod: 2026-04-08
description: "日本の産業用ロボット産業を解説。FANUC・安川電機・川崎重工・三菱電機の主要4社、世界シェア約45%、IFR統計による全球544,000台（2024年）中の位置付け、ロボットの種類（垂直多関節・SCARA・デルタ・協働），用途（自動車・電子機器・食品），地理的集積，サーボモータ・エンコーダ・ハーモニックドライブなどの部品産業を一次資料に基づき整理。"
weight: 38
mapName: "japan"
galleryDir: "japan-robotics"
---

<script>
(function() {
  // 主要ロボット企業本社・R&D拠点（青●）
  var pins = [
    { x: 395, y: 458, label: '忍野村/富士吉田', type: 'robot',
      note: 'FANUC本社・製造拠点（山梨県南都留郡）' },
    { x: 445, y: 440, label: '筑波', type: 'robot',
      note: 'FANUC筑波R&D（茨城県）' },
    { x: 95, y: 518, label: '北九州', type: 'robot',
      note: '安川電機本社・ロボット事業（福岡県北九州市）' },
    { x: 218, y: 475, label: '赤穂/姫路', type: 'robot',
      note: '川崎重工ロボット事業（兵庫県）' },
    { x: 318, y: 478, label: '名古屋', type: 'robot',
      note: '三菱電機ロボット事業本部（愛知県）' },
    { x: 330, y: 488, label: '刈谷', type: 'robot',
      note: 'デンソーウェーブロボット製造（愛知県）' },
    { x: 350, y: 428, label: '松本', type: 'robot',
      note: 'エプソン（セイコーエプソン）SCARA製造（長野県）' },
    { x: 405, y: 430, label: '大宮', type: 'robot',
      note: 'ハーモニックドライブシステムズ精密減速機（埼玉県）' },
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

      var color = '#3b82f6';
      var bgColor = 'rgba(59,130,246,0.18)';
      var strokeColor = 'rgba(59,130,246,0.55)';

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
      labelBg.setAttribute('fill', 'rgba(37,99,235,0.85)');
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

## [日本](/rule/asia/japan/)の産業用ロボット産業の概観

産業用ロボット（Industrial Robot）は、自動車・電子機器・食品・機械加工などの製造業で多関節アーム、直列リンク機構、平行リンク機構などの形態をした自動化機械です。世界の産業用ロボット市場は、2024年に<span style="font-weight:700">544,000台が稼働</span>{{% cite "ifr_2025_report" %}}され、年間出荷台数の歴史としては<span style="font-weight:700">2位の水準</span>{{% cite "ifr_2025_report" %}}にあります。[日本](/rule/asia/japan/)は世界最大のロボット製造国で、<span style="font-weight:700">全球供給の約45～46%を占める</span>{{% cite "ifr_japan_leader" %}}工業用ロボットスーパーパワーです。

2024年に[日本](/rule/asia/japan/)国内では<span style="font-weight:700">44,500台のロボットが導入</span>{{% cite "ifr_japan_2024" %}}され、稼働中のロボット数は450,500台に達しています。一方、[日本](/rule/asia/japan/)ロボット工業会（JARA）統計では、2024年の受注額が前年比1.3%減の832.1億円、生産額が12.4%減の781.1億円、出荷額が10.6%減の825.2億円を記録しています{{% cite "jara_2024" %}}。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">45～46%</div><div class="stat-label"><a href="/rule/asia/japan/">日本</a>の全球産業用ロボット製造シェア</div></div>
<div class="stat-card"><div class="stat-num">544,000台</div><div class="stat-label">2024年の全球ロボット稼働数</div></div>
<div class="stat-card"><div class="stat-num">44,500台</div><div class="stat-label">2024年の<a href="/rule/asia/japan/">日本</a>国内導入台数</div></div>
<div class="stat-card"><div class="stat-num">FANUC・安川電機・川崎重工・三菱電機</div><div class="stat-label"><a href="/rule/asia/japan/">日本</a>のロボット産業の中核4社</div></div>
</div>

## 世界トップ4とそれ以降のグローバル競争構図

全球産業用ロボット市場では、[日本](/rule/asia/japan/)・[スイス](/rule/europe/switzerland/)・[ドイツ](/rule/europe/germany/)の企業が支配的な地位を占めています。

| メーカー | 国 | 全球シェア（2022-2024年推定） | 特徴 |
| --- | --- | --- | --- |
| <span style="font-weight:700">ABB Robotics</span> | <img src="/flags/CH.svg" alt="CH" class="inline-flag" width="20" height="14" loading="lazy" /> [スイス](/rule/europe/switzerland/)・[スウェーデン](/rule/europe/sweden/)（チューリッヒ） | 21% | 世界1位、自動車・産業機械向け多関節ロボット、IRB6700など |
| <span style="font-weight:700">KUKA</span> | <img src="/flags/DE.svg" alt="DE" class="inline-flag" width="20" height="14" loading="lazy" /> [ドイツ](/rule/europe/germany/)（アウクスブルク） | 9% | 世界2位、重量物・自動車向けロボット |
| <span style="font-weight:700">FANUC（ファナック）</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> [日本](/rule/asia/japan/)（山梨） | 11%{{% cite "fanuc_market_share" %}} | 世界3〜4位、高速多関節・CNC一体型ロボット |
| <span style="font-weight:700">Yaskawa（安川電機）</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> [日本](/rule/asia/japan/)（福岡） | 8%{{% cite "yaskawa_market_share" %}} | Motoman ブランド、溶接・組立ロボット |
| <span style="font-weight:700">Kawasaki（川崎重工）</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> [日本](/rule/asia/japan/)（兵庫） | 8% | 1969年に[日本](/rule/asia/japan/)初のロボット製造{{% cite "kawasaki_history" %}}、溶接・塗装・組立 |
| <span style="font-weight:700">Mitsubishi Electric（三菱電機）</span> | <img src="/flags/JP.svg" alt="JP" class="inline-flag" width="20" height="14" loading="lazy" /> [日本](/rule/asia/japan/)（愛知） | 5% | コンパクトSCARA・多関節ロボット、パッケージング向け |

## [日本](/rule/asia/japan/)の主要4社の詳細比較

| 企業 | 上場記号 | 本社 | 創立年 | 主力製品・ブランド | 特徴 |
| --- | --- | --- | --- | --- | --- |
| <span style="font-weight:700">FANUC（ファナック）</span> | 6954{{% cite "fanuc_ir" %}} | 山梨県南都留郡忍野村 | 1956 | <span style="font-weight:700">M-10シリーズ、M-2000シリーズ、CRX協働ロボット</span> | <span style="font-weight:700">世界最大級のロボット専業メーカー。多関節ロボット、CNC工作機械との統合ロボット、AI画像認識搭載モデル</span> |
| <span style="font-weight:700">安川電機</span> | 6506{{% cite "yaskawa_ir" %}} | 福岡県北九州市 | 1915（創立）、1981（ロボット事業本格化） | <span style="font-weight:700">Motomanシリーズ（MPL800、HC10DTP、HC20DH、MH24など）</span> | <span style="font-weight:700">AC サーボモータの世界トップ級メーカー。溶接・組立・搬送ロボット、累計AC サーボモーター出荷数2,000万台（2020年）{{% cite "yaskawa_servo" %}}</span> |
| <span style="font-weight:700">川崎重工</span> | 7012{{% cite "kawasaki_ir" %}} | 兵庫県神戸市、ロボット事業：兵庫県明石市・西神工場 | 1878（創立）、1969（ロボット開始）| <span style="font-weight:700">Jシリーズ、duAro、E-series（溶接・塗装専用）</span> | <span style="font-weight:700">[日本](/rule/asia/japan/)初のロボット製造企業。溶接・塗装・医療ロボット、精密機械加工分野での高い実績</span> |
| <span style="font-weight:700">三菱電機</span> | 6503{{% cite "mitsubishi_ir" %}} | 愛知県名古屋市 | 1921（創立）、ロボット事業：1968〜 | <span style="font-weight:700">MELFA-ASSISTA、MELFA SCARA RV-2F series、RV-7FL series</span> | <span style="font-weight:700">コンパクト・高速SCARA ロボット世界トップシェア。パッケージング・食品機械向け、協働ロボット</span> |

## その他の主要[日本](/rule/asia/japan/)ロボット企業

| 企業 | 記号 | 本社 | 主な製品・特徴 |
| --- | --- | --- | --- |
| <span style="font-weight:700">デンソーウェーブ</span> | 親会社：デンソー（6202） | 愛知県刈谷市 | <span style="font-weight:700">COBOTTA協働ロボット</span>：人間と共存可能な小型安全ロボット。4、5、6軸タイプ、組立・機械加工向け{{% cite "denso_wave" %}} |
| <span style="font-weight:700">セイコーエプソン</span> | 6724{{% cite "epson_stock" %}} | 長野県松本市 | <span style="font-weight:700">世界SCARA ロボットシェア首位</span>{{% cite "epson_scara" %}}。超小型・高速・高精度な SCARA 300+ モデル、精密電子部品・医療部品の組立向け |
| <span style="font-weight:700">NACHI不二越</span> | 6474 | 富山県 | 工作機械主軸ベアリング、産業機械用ロボット（SRA5D、SRA3D） |

## 産業用ロボットの種類と用途構造

| ロボット形態 | 特徴 | 主要用途 | [日本](/rule/asia/japan/)メーカー例 |
| --- | --- | --- | --- |
| <span style="font-weight:700">垂直多関節ロボット（Articulated）</span> | 人間の腕に近い構造、2～10個の回転関節。負荷容量3～1000kg、高い汎用性 | 溶接、組立、機械加工、塗装、搬送 | FANUC、安川電機（Motoman）、川崎重工 |
| <span style="font-weight:700">SCARA ロボット</span> | 選択的コンプライアンス・アーム（3軸+回転軸）。高速・高精度・剛性、卓上型多数 | 基板組立、精密部品ピック&プレース、医療機器組立 | セイコーエプソン（#1 シェア）、三菱電機、デンソー |
| <span style="font-weight:700">デルタロボット</span> | 並列リンク機構、3本の腕で球面空間内を高速移動。超高速ピック&プレース | 食品・医薬品ピッキング、電子部品ハンドリング | セイコーエプソン、一部国産 |
| <span style="font-weight:700">協働ロボット（Cobot）</span> | 安全フェンス不要、トルク・速度リミッター搭載、人間との接近作業可能 | 軽量組立、機械加工補助、パッケージング | デンソーウェーブ（COBOTTA）、三菱電機（MELFA-ASSISTA）、FANUC（CRX） |

## 用途別・業種別の市場分布

| 用途 | 主要顧客 | 導入ロボット形態 | 強い[日本](/rule/asia/japan/)企業 |
| --- | --- | --- | --- |
| <span style="font-weight:700">自動車（溶接・組立）</span> | トヨタ、ホンダ、日産、スズキ、ダイハツ、マツダ | 多関節、溶接専用ロボット | FANUC、安川電機、川崎重工 |
| <span style="font-weight:700">電子機器・精密部品</span> | ソニー、パナソニック、トヨタ部品、村田製作所 | SCARA、デルタ、小型多関節 | セイコーエプソン、デンソー、三菱電機 |
| <span style="font-weight:700">食品・医薬品</span> | 食品メーカー、医薬品メーカー | デルタ、SCARA、協働ロボット | セイコーエプソン、三菱電機、デンソー |
| <span style="font-weight:700">金属加工・機械加工</span> | 機械工具メーカー、自動車部品サプライヤー | 多関節、CNC連携ロボット | FANUC、安川電機、NACHI不二越 |
| <span style="font-weight:700">塗装・表面処理</span> | 自動車、建機、家具メーカー | 塗装専用多関節 | 川崎重工、安川電機、FANUC |

## [日本](/rule/asia/japan/)の産業用ロボット製造拠点の地理的分布

[日本](/rule/asia/japan/)のロボット産業は、関東（FANUC 山梨）と関西（川崎重工兵庫）、中部（デンソー刈谷、三菱電機名古屋）、九州（安川電機北九州）に集中しています。

| 企業 | 本社・主力工場 | 県 | 特徴 |
| --- | --- | --- | --- |
| <span style="font-weight:700">FANUC</span> | 忍野村（本社）、筑波（R&D・関東工場）| 山梨/茨城 | 世界最大のロボット専業メーカー。富士山麓の特異な立地 |
| <span style="font-weight:700">安川電機</span> | 北九州本社、ロボット村（福岡県北九州市八幡西区）| 福岡 | Motoman 工場、サーボモータ製造、九州電機産業の中核 |
| <span style="font-worth:700">川崎重工</span> | 明石工場、西神工場（兵庫県）、水島事業所（岡山） | 兵庫/岡山 | 溶接・塗装ロボット製造、重工業との統合 |
| <span style="font-weight:700">三菱電機</span> | 名古屋製作所、伊丹工場（兵庫） | 愛知/兵庫 | MELFA SCARA・多関節ロボット、パッケージング機械連携 |
| <span style="font-weight:700">デンソーウェーブ</span> | 刈谷市（愛知県） | 愛知 | COBOTTA 協働ロボット製造、デンソー本体との統合 |
| <span style="font-weight:700">セイコーエプソン</span> | 松本市工場（長野県） | 長野 | SCARA 最大生産拠点、時計部品組立技術の応用 |

## 世界市場での位置付けと成長動向

2024年時点で、全球の産業用ロボット稼働数は<span style="font-weight:700">544,000台</span>{{% cite "ifr_2025_report" %}}に達し、アジアが全球導入の74%を占めています{{% cite "ifr_regional" %}}。このうち[中国](/rule/asia/china/)が約54%（295,000台）を占め、[日本](/rule/asia/japan/)が約8.2%（44,500台）です。

[日本](/rule/asia/japan/)ロボット工業会（JARA）による統計では、2024年の国内産業用ロボット受注額が832.1億円（前年比1.3%減）、生産額が781.1億円（前年比12.4%減）と落ち込んでいますが、2025年は回復を見込んでおり、受注額で4.8%増の870億円を予想しています{{% cite "jara_2024" %}}{{% cite "jara_2025_forecast" %}}。

## 部品産業との統合と技術クラスタ

[日本](/rule/asia/japan/)のロボット産業は、以下の精密部品・制御部品のサプライチェーンに統合されています：

| 部品・技術 | 主要企業 | 機能 |
| --- | --- | --- |
| <span style="font-weight:700">AC サーボモータ</span> | 安川電機、ニデック（6594）、オリエンタルモータ | ロボット関節の動力源。高速・高トルク・精密制御 |
| <span style="font-weight:700">精密減速機</span> | ハーモニックドライブシステムズ（6324）、住友重機械 | ロボットの関節用。バックラッシュ最小、高剛性 |
| <span style="font-weight:700">エンコーダ・センサ</span> | ニデック（Zignear 技術）、オムロン、アンプル | ロボット位置決め・速度制御用 |
| <span style="font-weight:700">制御システム・PLC</span> | 三菱電機、FANUC CNC、オムロン | ロボット動作プログラム、安全制御 |
| <span style="font-weight:700">ビジョン・AI 画像処理</span> | FANUC AI 搭載モデル、ISRA Vision、Cognex | ロボット自動判別・位置認識 |

## なぜ[日本](/rule/asia/japan/)がロボット産業で世界シェア45%を占めるのか

1. <span style="font-weight:700">サーボモータ・エンコーダ技術の領先</span>：安川電機のAC サーボモータ（世界シェア最大級）、ニデック（6594）の高精度サーボ、高分解能エンコーダが国内サプライチェーンに統合されている{{% cite "nidec_servo" %}}

2. <span style="font-weight:700">精密減速機（ハーモニックドライブ）</span>：ハーモニックドライブシステムズ（6324）の波動歯車減速機は、ロボット関節用として世界標準。軽量・高精度・バックラッシュなし{{% cite "harmonic_drive" %}}

3. <span style="font-weight:700">自動車産業との緊密な共進化</span>：トヨタ、ホンダ、日産の量産化とロボット化が並走。FANUC、安川電機、川崎重工が同じエコシステムで成長

4. <span style="font-weight:700">超精密加工と制御技術</span>：[日本](/rule/asia/japan/)の工作機械産業（オークマ、DMG森精機など）と共に、μm単位の精度を実現する制御技術が蓄積

5. <span style="font-weight:700">HDD・電子機器産業との連携</span>：1990〜2000年代のHDD産業隆盛で、セイコーエプソンが超小型・高速SCARA ロボット技術を確立

6. <span style="font-weight:700">人口減少への対応戦略</span>：高齢化・労働力不足に先駆けて、ロボット導入を推進。国策としてもロボット産業育成（METI 戦略）

## [日本](/rule/asia/japan/)産業用ロボット企業の時価総額マップ

<div class="corp-treemap-section">
<div class="corp-treemap" data-companies='[{"t":"6954","n":"FANUC","s":"産業用ロボット","v":1.0,"c":"#3b82f6"},{"t":"6506","n":"安川電機","s":"ロボット・サーボ","v":0.45,"c":"#3b82f6"},{"t":"7012","n":"川崎重工","s":"ロボット・重機","v":0.6,"c":"#3b82f6"},{"t":"6503","n":"三菱電機","s":"ロボット・産業機器","v":0.5,"c":"#3b82f6"},{"t":"6724","n":"セイコーエプソン","s":"SCARA・プリンタ","v":0.3,"c":"#3b82f6"},{"t":"6324","n":"ハーモニックドライブ","s":"精密減速機","v":0.08,"c":"#06b6d4"},{"t":"6594","n":"ニデック","s":"サーボモータ","v":0.35,"c":"#06b6d4"}]'></div>
<p class="treemap-note">※ FANUC を基準（v=1.0）とした相対時価総額。サーボ・減速機など部品企業は青系で表示。</p>
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
<tr><td>FANUC</td><td>6954</td><td>世界最大の産業用ロボット専業メーカー。多関節ロボット・CNC一体型ロボット・AI搭載協働ロボットなど高機能化による付加価値製品を展開。全球市場シェア約11%で世界3〜4位。自動車・電子機械・食品加工など多岐の産業に対応</td><td>{{% corplink "https://www.fanuc.co.jp/ja/ir/" %}}</td><td>{{% dividend "tokyo" "6954" %}}</td></tr>
<tr><td>安川電機</td><td>6506</td><td>AC サーボモータ・駆動制御で世界トップクラスの製造企業。Motomanブランドのロボット製品（溶接・組立・搬送）を展開。サーボモータ出荷累計2,000万台の実績により、ロボット関節駆動の核となる部品産業で も圧倒的な競争力を保有</td><td>{{% corplink "https://www.yaskawa.co.jp/investor" %}}</td><td>{{% dividend "tokyo" "6506" %}}</td></tr>
<tr><td>川崎重工</td><td>7012</td><td>日本初のロボット製造企業（1969年）。溶接・塗装・医療ロボットで高い実績を保有。精密機械加工分野での技術蓄積により、重工業との統合的な事業展開で競争力を維持</td><td>{{% corplink "https://www.khi.co.jp/ir/" %}}</td><td>{{% dividend "tokyo" "7012" %}}</td></tr>
<tr><td>三菱電機</td><td>6503</td><td>コンパクト・高速SCARA ロボット世界トップシェア企業。パッケージング・食品機械向けの高精度ロボット・協働ロボット（MELFA-ASSISTA）で業界をリード。産業機器事業の一部として総合的なソリューション提供</td><td>{{% corplink "https://www.mitsubishielectric.co.jp/investors/" %}}</td><td>{{% dividend "tokyo" "6503" %}}</td></tr>
<tr><td>セイコーエプソン</td><td>6724</td><td>世界SCARA ロボットシェア首位（50%以上）の企業。超小型・高速・高精度な SCARA 300+ シリーズにより精密電子部品・医療部品組立を支配。時計精密加工技術の応用で、競合他社との差別化を実現</td><td>{{% corplink "https://corporate.epson/ja/investors/" %}}</td><td>{{% dividend "tokyo" "6724" %}}</td></tr>
<tr><td>ハーモニックドライブ</td><td>6324</td><td>波動歯車減速機は産業用ロボット関節用として世界標準。軽量・高精度・バックラッシュなしの特性により、ロボット関節駆動の不可欠な精密部品メーカー。ニッチ分野での圧倒的シェア保有</td><td>{{% corplink "https://www.hds.co.jp/ir/" %}}</td><td>{{% dividend "tokyo" "6324" %}}</td></tr>
<tr><td>ニデック</td><td>6594</td><td>小型高精度モータ・精密機械の世界大手。HDD・冷却ファン向けモータから産業ロボット駆動部品まで多様な用途に対応。Zignear超高分解能エンコーダ技術でロボット位置決めと速度制御を支援</td><td>{{% corplink "https://www.nidec.com/jp/ir/" %}}</td><td>{{% dividend "tokyo" "6594" %}}</td></tr>
</tbody></table>
</div>

## 参考文献

{{% references %}}
ifr_2025_report: International Federation of Robotics (IFR)「World Robotics 2025 Report – Industrial Robots」 <https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years>
ifr_japan_leader: International Federation of Robotics「Japan is World's number one Robot Maker」<https://ifr.org/news/japan-is-worlds-number-one-robot-maker/>
ifr_japan_2024: International Federation of Robotics「Record 435,000 robots now working in Japan's factories」<https://ifr.org/downloads/press2018/2024-SEP-24_IFR_press_release_World_Robotics_2024_-_Japan.pdf>
ifr_regional: International Federation of Robotics 2025 Report, Regional Distribution Analysis, <https://ifr.org/wr-industrial-robots/>
fanuc_market_share: PatentPC「Top Robotics Vendors by Market Share」<https://patentpc.com/blog/top-robotics-vendors-by-market-installations>
fanuc_ir: FANUC 6954「投資家向け情報」<https://www.fanuc.co.jp/ja/corporate/investor/>
yaskawa_market_share: The Robot Report「IFR: Japan is world's top industrial robotics manufacturer」<https://therobotreport.com/ifr-japan-is-worlds-top-industrial-robotics-manufacturer/>
yaskawa_ir: 安川電機 6506「IR 情報」<https://www.yaskawa.co.jp/ir/>
yaskawa_servo: Yaskawa Global Site「Servo Motor Cumulative Shipments」<https://www.yaskawa-global.com/centenary/robot>
kawasaki_history: Kawasaki Heavy Industries「First Japanese Industrial Robot - 1969」<https://kawasakirobotics.com/asia-oceania/company/robotics-division/>
kawasaki_ir: 川崎重工 7012「IR 情報」<https://www.khi.co.jp/ir/>
mitsubishi_ir: 三菱電機 6503「投資家情報」<https://www.mitsubishielectric.co.jp/investors/>
denso_wave: DENSO WAVE「COBOTTA 協働ロボット」<https://www.denso-wave.com/en/robot/product/collabo/cobotta.html>
epson_stock: セイコーエプソン 6724「SCARA ロボット」<https://epson.com/scara-robots>
epson_scara: Epson「Number 1 Manufacturer SCARA Robots Worldwide」<https://epson.com/scara-robots>
nidec_servo: Nidec Corporation「AC Servo Motor with Zignear for Industrial Robots」<https://www.nidec.com/en/product/news/2022/news0609-01/>
harmonic_drive: Harmonic Drive Systems 6324「Precision Actuators & Gearing for Robotics」<https://www.harmonicdrive.net/>
jara_2024: 日本ロボット工業会「2024年産業用ロボット統計」<https://www.jara.jp/data/press/2025/250602.html>
jara_2025_forecast: 日本ロボット工業会「2025年受注額見通し 4.8%増の870億円」<https://www.automation-news.jp/2025/01/88226/>
jetro: JETRO「Japan Robot Week 2024」<https://www.jetro.go.jp/en/invest/newsroom/2024/c53dabf410fdede0.html>
{{% /references %}}
