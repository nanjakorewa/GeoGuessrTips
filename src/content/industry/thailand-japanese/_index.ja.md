---
title: "タイにおける日系企業の集積"
subtitle: "東アジア最大の日系製造業ハブ — 自動車・電機・部品サプライチェーン"
date: 2026-04-07
lastmod: 2026-04-07
description: "タイにある約6,000社の日系企業を解説。アセアン最大の自動車生産国を支えるトヨタ・ホンダ・いすゞ・日産・三菱などの完成車メーカーと、東部臨海工業地帯（Eastern Seaboard）に集中する部品サプライヤー、BOI恩典制度、近年の中国EVの台頭までを整理。"
weight: 33
mapName: "thailand"
galleryDir: "thailand-japanese"
---

<script>
(function() {
  // [タイ](/rule/asia/thai/)の日系製造業集積（thailand マップ）
  var pins = [
    {
        "x": 148,
        "y": 318,
        "label": "Bangkok",
        "note": "首都・日系企業の本拠"
    },
    {
        "x": 143,
        "y": 286,
        "label": "Ayutthaya",
        "note": "ロジャナ・ハイテク工業団地"
    },
    {
        "x": 152,
        "y": 324,
        "label": "Samut Prakan",
        "note": "バンコク南部の老舗工業地帯"
    },
    {
        "x": 185,
        "y": 325,
        "label": "Chachoengsao",
        "note": "EEC 北部・スワンナプーム周辺"
    },
    {
        "x": 179,
        "y": 347,
        "label": "Chonburi/Laem Chabang",
        "note": "EEC 中核港湾・自動車組立"
    },
    {
        "x": 185,
        "y": 358,
        "label": "Rayong",
        "note": "Eastern Seaboard 工業団地群"
    }
];

  function addPins() {
    var mapEl = document.getElementById('world-map');
    if (!mapEl) return;
    var svg = mapEl.querySelector('svg');
    if (!svg) { setTimeout(addPins, 300); return; }

    pins.forEach(function(pin) {
      var g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      g.setAttribute('class', 'industry-pin');
      g.style.cursor = 'default';

      var titleEl = document.createElementNS('http://www.w3.org/2000/svg', 'title');
      titleEl.textContent = pin.label + ' — ' + (pin.note || '');
      g.appendChild(titleEl);

      var color = '#dc2626';
      var bgColor = 'rgba(220,38,38,0.20)';
      var strokeColor = 'rgba(220,38,38,0.65)';

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y);
      glow.setAttribute('r', '6');
      glow.setAttribute('fill', bgColor);
      glow.setAttribute('stroke', strokeColor);
      glow.setAttribute('stroke-width', '1');

      var dot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      dot.setAttribute('cx', pin.x);
      dot.setAttribute('cy', pin.y);
      dot.setAttribute('r', '2.5');
      dot.setAttribute('fill', color);

      var textLen = pin.label.length;
      var bgW = textLen * 5 + 6;
      var bgH = 9;

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', pin.y + 6);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', 'rgba(31,41,55,0.88)');
      labelBg.setAttribute('rx', '2');

      var label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      label.setAttribute('x', pin.x);
      label.setAttribute('y', pin.y + 12);
      label.setAttribute('font-size', '6.5');
      label.setAttribute('fill', '#fff');
      label.setAttribute('text-anchor', 'middle');
      label.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      label.textContent = pin.label;

      g.appendChild(glow);
      g.appendChild(dot);
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

## なぜ[タイ](/rule/asia/thai/)に日系企業が集まるのか

[タイ](/rule/asia/thai/)は<span style="font-weight:700">東南アジア最大の日系企業集積地</span>で、JETROが把握する日系企業数は<span style="font-weight:700">約6,083社</span>にのぼります（2024年度調査）{{% cite "jetro_thailand_2024survey" %}}。[タイ](/rule/asia/thai/)の自動車産業は<span style="font-weight:700">「アジアのデトロイト」</span>と呼ばれ、年間生産台数は2023年に約184万台{{% cite "jetro_auto_production2023" %}}、2024年は[中国](/rule/asia/china/)EV競合と国内需要減で約147万台{{% cite "jetro_auto_production2024" %}}に低下しましたが、その大部分は日系8社が占めます。日系企業の集中は1970年代の繊維、80年代後半のプラザ合意後の電機・自動車進出に始まり、90年代の東部臨海開発（<span style="font-weight:700">Eastern Seaboard Development Programme</span>）と2010年代の<span style="font-weight:700">Eastern Economic Corridor (EEC)</span> {{% cite "eec_office" %}}で加速しました。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">~6,083社</div><div class="stat-label">[タイ](/rule/asia/thai/)の日系企業数（JETRO 2024年調査）</div></div>
<div class="stat-card"><div class="stat-num">~150万台</div><div class="stat-label">[タイ](/rule/asia/thai/)年間自動車生産（2024年、うち日系8割超）</div></div>
<div class="stat-card"><div class="stat-num">8社</div><div class="stat-label">日系完成車メーカーの進出数</div></div>
<div class="stat-card"><div class="stat-num">EEC</div><div class="stat-label">3県（チョンブリ・ラヨーン・チャチェンサオ）の特別経済区</div></div>
</div>

## 日系自動車メーカーの主要工場

| メーカー | 進出時期 | 主要工場所在地 | 主要モデル |
| --- | --- | --- | --- |
| トヨタ自動車（Toyota Motor Thailand）| 1962 | サムロン（バンコク郊外）、バンポー（チャチェンサオ）、ゲートウェイ（チャチェンサオ）| ハイラックス、フォーチュナー、ヤリス |
| いすゞ（Isuzu Motors）| 1957年輸出開始{{% cite "isuzu_thailand_history" %}}、1966年現地生産 | サムロン、ゲートウェイ | D-MAX、MU-X（ピックアップ世界拠点） |
| ホンダ（Honda Automobile Thailand）| 1983 | アユタヤ、プラチンブリ | シビック、CR-V、シティ |
| 日産（Nissan Motor Thailand）| 1962 | サムットプラカン | アルメーラ、Navara、Kicks（e-POWER） |
| 三菱自動車（Mitsubishi Motors）| 1961 | レムチャバン（チョンブリ）| Triton、パジェロスポーツ、Xpander（生産拠点） |
| マツダ | 1995（AAT合弁）| ラヨーン（AutoAlliance Thailand）| Mazda2、BT-50。フォードとの合弁 |
| スズキ | 2012 | ラヨーン | Swift、Carry |
| ヒノ自動車 | 1964 | サムロン | トラック・バス |

[タイ](/rule/asia/thai/)のピックアップトラック生産は世界トップ級で、特に<span style="font-weight:700">Hilux</span>と<span style="font-weight:700">D-MAX</span>は北米以外への輸出ハブとなっています。

## 東部臨海工業地帯（Eastern Seaboard）と EEC

東部臨海開発は[タイ](/rule/asia/thai/)政府が1980年代に策定した国家戦略で、<span style="font-weight:700">チョンブリ県・ラヨーン県・チャチェンサオ県</span> の3県沿岸を工業集積地として整備しました。レムチャバン港（コンテナ取扱量世界20位前後）と<span style="font-weight:700">マプタプット港</span> （石油化学・LNG）を二大ゲートウェイとし、内陸には以下のような大規模工業団地が並びます{{% cite "boi_thailand" %}}。

| 工業団地 | 県 | 主な入居 |
| --- | --- | --- |
| Amata City Chonburi | チョンブリ | 自動車部品（デンソー、アイシン、豊田合成、ジェイテクト）|
| Amata City Rayong | ラヨーン | 自動車・電機 |
| Hemaraj Eastern Seaboard | ラヨーン | 完成車（フォード/マツダ AAT、三菱）|
| WHA Eastern Seaboard | ラヨーン | 自動車・電機 |
| Map Ta Phut Industrial Estate | ラヨーン | PTT・三井化学・住友化学・宇部興産・JSR・カネカ・三菱ケミカル など石油化学 |
| Laem Chabang Industrial Estate | チョンブリ | 完成車・港湾物流 |
| Rojana Industrial Park（アユタヤ）| アユタヤ | ホンダ、日系電子部品 |

2017年に発足した<span style="font-weight:700">EEC（Eastern Economic Corridor）</span> {{% cite "eec_office" %}}はこの3県を「次世代産業集積地」として再定義し、BOI（[タイ](/rule/asia/thai/)投資委員会）による法人税最大15年免除、外国人雇用緩和、土地取得緩和などの恩典で<span style="font-weight:700">EV、スマートエレクトロニクス、ロボット、航空、医療</span> の10業種を呼び込んでいます。

## 部品サプライヤー（ティア1〜2）

完成車8社の進出に伴い、日系の主要ティア1サプライヤーがすべて[タイ](/rule/asia/thai/)に展開しています。

| カテゴリ | 主要日系企業 |
| --- | --- |
| 電装・制御 | デンソー、アイシン、ジェイテクト、ボッシュ系 |
| 内装・シート | トヨタ紡織、テイ・エス テック、林テレンプ |
| 樹脂・ゴム | 豊田合成、ブリヂストン、住友ゴム、横浜ゴム |
| 鋳造・鍛造 | アイシン、リョービ、エフテック |
| ベアリング | [日本](/rule/asia/japan/)精工（NSK）、NTN、ジェイテクト、ミネベアミツミ |
| 半導体・電子部品 | ローム、村田製作所、京セラ、TDK、ミネベアミツミ |
| 鉄鋼 | 日本製鉄（NS-SUS）、JFEスチール |

ミネベアミツミは[タイ](/rule/asia/thai/)に巨大な部品工場群を持ち、日系企業として国内最多級の従業員を雇用しています。矢崎総業（Yazaki Corporation Thailand）はワイヤーハーネスの大手サプライヤーとして単独で<span style="font-weight:700">5万人以上</span>を雇用し、在タイ日系企業のなかで最大級の労働力を抱えています{{% cite "personnel_consultant_2025" %}}。住友電装（Sumitomo Electric Wiring Systems Thailand）も配線システムで自動車サプライチェーンを支えています。

## 家電メーカー

バンコク近郊・アユタヤ・チョンブリには日系家電メーカーの工場が集積し、ASEAN域内および欧米・中東への輸出ハブとして稼働しています。省エネ型冷蔵庫・エアコン・洗濯機の生産が中心です{{% cite "personnel_consultant_2025" %}}。

| 企業 | 現地法人名 | 主な事業 |
| --- | --- | --- |
| パナソニック | Panasonic Thailand | 白物家電・電池・電装部品 |
| 日立製作所 | Hitachi Industrial Technology Thailand | 産業用機器・インバータ・エアコン |
| 三菱電機 | Mitsubishi Electric Consumer Products Thailand | エアコン・冷蔵庫・扇風機 |
| シャープ | Sharp Appliances Thailand | 冷蔵庫・洗濯機・空気清浄機 |

## 機械・産業機器

精密機械・金属加工・産業用ロボット分野では日系メーカーの技術力が厚い信頼を得ており、自動車・電子部品工場向けの設備需要を取り込んでいます{{% cite "personnel_consultant_2025" %}}。

| 企業 | 現地法人名 | 分野 |
| --- | --- | --- |
| 牧野フライス製作所 | Makino Thailand | マシニングセンタ・放電加工機 |
| オークマ | Okuma Techno (Thailand) | CNC工作機械 |
| ファナック | FANUC (Thailand) | 産業用ロボット・CNC |
| コマツ | Bangkok Komatsu Sales | 建設機械・鉱山機械 |

## ゼネコン・建設

日系ゼネコンは耐震・防音・省エネ設計を強みとし、日系工場・オフィスビル・商業施設の設計施工を数多く手掛けています。2025年のミャンマー地震時には大林組設計施設の耐震性が注目されました{{% cite "personnel_consultant_2025" %}}。

| 企業 | 現地法人名 |
| --- | --- |
| 大林組 | Thai Obayashi Corporation |
| 清水建設 | Shimizu Corporation (Thailand) |
| 竹中工務店 | Takenaka Corporation (Thailand) |
| 前田建設工業 | Thai Maeda Corporation |

## パッケージ・紙器

製造業集積地のタイでは梱包資材の需要が高く、日系の段ボール・紙器・印刷・金属缶メーカーが多数展開しています{{% cite "personnel_consultant_2025" %}}。

| 企業 | 現地法人名 |
| --- | --- |
| レンゴー | Thai Containers Group |
| 王子ホールディングス | OJI Paper Thailand |
| 大日本印刷 | Dai Nippon Printing (Thailand) |
| 東洋製罐グループ | Toyo Seikan (Thailand) |

## 物流・運輸

日系メーカーの在タイ拠点を支える国際輸送・倉庫・通関・フォワーディング事業で、日系物流企業が港湾・空港周辺に拠点を構えています{{% cite "personnel_consultant_2025" %}}。

| 企業 | 現地法人名 |
| --- | --- |
| 日本通運 | Nippon Express Logistics (Thailand) |
| ヤマト運輸 | Yamato Unyu Thailand |
| センコー | SENKO Thailand |
| 近鉄エクスプレス | Kintetsu World Express Thailand |
| 鈴与 | Suzuyo Thailand |
| 日新 | Siam Nistrans |

## 商社

5大総合商社はいずれも[タイ](/rule/asia/thai/)に大型の現地法人を構え、卸売・資源取引・インフラ開発・工業団地運営まで幅広く事業を展開しています{{% cite "personnel_consultant_2025" %}}。

| 企業 | 現地法人名 |
| --- | --- |
| 三菱商事 | Mitsubishi Company (Thailand) / Thai-MC |
| 伊藤忠商事 | ITOCHU (Thailand) / ITOCHU Enterprise (Thailand) |
| 住友商事 | Sumitomo Corporation Thailand |
| 三井物産 | Mitsui & Co. (Thailand) |
| 丸紅 | Marubeni Thailand |

## 電力・インフラ

発電事業への投資、電力技術支援、ガス供給、鉄道・高速道路事業の技術協力を通じて、タイのインフラ整備や脱炭素政策にも貢献しています{{% cite "personnel_consultant_2025" %}}。

| 企業 | 現地法人名 |
| --- | --- |
| 東京電力HD | TEPCO Energy Partner International (Thailand) |
| 三井エネルギー資源開発 | Siam Moeco Ltd |
| 大阪ガス | Osaka Gas Thailand |
| 関西電力 | Kansai Energy Solutions (Thailand) |
| JR貨物 | Japan Freight Railway Company, Bangkok Representative Office |
| 首都高速道路 | Shutoko International Thailand |

## 食品・飲料メーカー

日清食品はタイ人向けに「トムヤムクン味」などローカルテイストのカップ麺を展開し、味の素は調味料市場でトップブランドの地位を築いています{{% cite "personnel_consultant_2025" %}}。

| 企業 | 現地法人名 | 主な製品 |
| --- | --- | --- |
| 味の素 | Ajinomoto Thailand | うま味調味料・冷凍食品・飲料 |
| 日清食品 | Nissin Thailand | 即席麺（トムヤムクン味など） |
| キユーピー | Kewpie Thailand | マヨネーズ・ドレッシング |
| ハウス食品 | House Osotspa Foods | カレー・レトルト食品 |

## 外食チェーン

日系外食チェーンは手頃な価格と安心感のある味でタイ都市部の若年層・ファミリー層に広く支持され、ショッピングモールを中心に多店舗展開しています{{% cite "personnel_consultant_2025" %}}。

| ブランド | 運営主体 |
| --- | --- |
| CoCo壱番屋 | ICHIBANYA MIDWEST ASIA / Tana Group International（FC） |
| スシロー | Sushiro GH (Thailand) |
| やよい軒 | MK Interfood（FC） |
| 8番らーめん | Thai-Hachiban |
| 吉野家 | Central Group（FC） |
| 博多一風堂 | FOODXCITE（ライセンス） |

## 小売・生活雑貨

日系小売企業は「高品質・合理的価格」ポジショニングでタイの都市部中間層に人気を博しています{{% cite "personnel_consultant_2025" %}}。

| 企業 | 現地法人名 |
| --- | --- |
| ユニクロ | UNIQLO Thailand |
| 無印良品 | MUJI Thailand |
| ダイソー | DAISO Thailand |
| イオン | AEON Thailand |
| 三越伊勢丹 | Mitsukoshi Isetan Thailand |
| ニトリ | Nitori Thailand |
| マツモトキヨシ | Central & Matsumoto Kiyoshi |

## アニメ・ゲーム・エンタメ

アニメ・ゲーム・キャラクター関連事業を通じて若年層を中心に日本文化を浸透させており、バンコクを中心にカラオケ・メイドカフェ・専門店が展開されています{{% cite "personnel_consultant_2025" %}}。

| ブランド | 概要 |
| --- | --- |
| Manekineko Thailand | カラオケまねきねこ |
| AnimateBKK | アニメイト |
| めいどりーみんタイランド MBK店 | メイドカフェ |
| G&LDH | 芸能事務所LDH × タイGMM Musicの合弁 |
| KADOKAWA Amarin | 角川書店 × タイ出版社アマリンの合弁 |

## 化学・素材

マプタプットに集中する石油化学では<span style="font-weight:700">PTTグローバルケミカル</span> を核に、<span style="font-weight:700">三井化学</span> 、<span style="font-weight:700">住友化学</span> 、<span style="font-weight:700">宇部興産</span> 、<span style="font-weight:700">三菱ケミカル</span> 、<span style="font-weight:700">JSR</span> 、<span style="font-weight:700">カネカ</span> 、<span style="font-weight:700">東ソー</span> 、<span style="font-weight:700">ダイセル</span> などが進出しています{{% cite "boi_thailand" %}}。[タイ](/rule/asia/thai/)の石油化学はASEAN最大級で、上流石油化学製品の年間生産能力は1,320万トン超、エチレン生産能力は年間450万トン超を持ちます。

## [中国](/rule/asia/china/)EVの台頭という新たな競争

2020年代に入り、[中国](/rule/asia/china/)EVメーカーの<span style="font-weight:700">BYD・長城汽車（GWM）・上海汽車（MG）・哪吒（Neta）・GAC Aion</span>が[タイ](/rule/asia/thai/)に大型投資を発表し、ラヨーン県を中心に新工場を稼働させています{{% cite "nation_thailand_japan_ev" %}}。[タイ](/rule/asia/thai/)自動車市場での日系メーカーのシェアは2024年時点で全体の76.7%ですが、乗用車に限定すると64.8%に低下しており、特に[中国](/rule/asia/china/)BEVメーカーが乗用車で18.8%のシェアを獲得しています{{% cite "jetro_thailand_auto_2024" %}}。

## BOI（[タイ](/rule/asia/thai/)投資委員会）恩典の概要

| 恩典 | 内容 |
| --- | --- |
| 法人所得税免除 | 最大8年（A1〜A4業種）。EEC内なら最大15年 |
| 機械輸入関税免除 | 100% |
| 原材料輸入関税免除 | 輸出向け生産で100%、国内向け5年間 |
| 100%外資出資 | 製造業は原則可（一部業種制限）|
| 土地所有 | 外国人投資家の工場用地所有を許可 |

## 在[タイ](/rule/asia/thai/)進出 主要日系企業の時価総額マップ（親会社ベース）

<div class="corp-treemap-section">
<div class="treemap-legend">
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#059669"></span>完成車</span>
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#6366f1"></span>部品・電装</span>
<span class="treemap-legend__item"><span class="treemap-legend__color" style="background:#6b7280"></span>タイヤ</span>
</div>
<div class="corp-treemap" data-companies='[{"t":"7203","n":"\u30c8\u30e8\u30bf\u81ea\u52d5\u8eca","s":"\u5b8c\u6210\u8eca","v":50.0,"c":"#059669"},{"t":"6902","n":"\u30c7\u30f3\u30bd\u30fc","s":"\u90e8\u54c1","v":7.0,"c":"#6366f1"},{"t":"7267","n":"\u30db\u30f3\u30c0","s":"\u5b8c\u6210\u8eca","v":6.0,"c":"#059669"},{"t":"5108","n":"\u30d6\u30ea\u30b8\u30b9\u30c8\u30f3","s":"\u30bf\u30a4\u30e4","v":5.0,"c":"#6b7280"},{"t":"7269","n":"\u30b9\u30ba\u30ad","s":"\u5b8c\u6210\u8eca","v":3.0,"c":"#059669"},{"t":"7201","n":"\u65e5\u7523\u81ea\u52d5\u8eca","s":"\u5b8c\u6210\u8eca","v":2.0,"c":"#059669"},{"t":"7259","n":"\u30a2\u30a4\u30b7\u30f3","s":"\u90e8\u54c1","v":1.5,"c":"#6366f1"},{"t":"7202","n":"\u3044\u3059\u3056","s":"\u5b8c\u6210\u8eca","v":1.5,"c":"#059669"},{"t":"7261","n":"\u30de\u30c4\u30c0","s":"\u5b8c\u6210\u8eca","v":1.0,"c":"#059669"},{"t":"7211","n":"\u4e09\u83f1\u81ea\u52d5\u8eca","s":"\u5b8c\u6210\u8eca","v":0.7,"c":"#059669"},{"t":"6473","n":"\u30b8\u30a7\u30a4\u30c6\u30af\u30c8","s":"\u90e8\u54c1","v":0.4,"c":"#6366f1"},{"t":"7205","n":"\u65e5\u91ce\u81ea\u52d5\u8eca","s":"\u5b8c\u6210\u8eca","v":0.4,"c":"#059669"}]'></div>
<p class="treemap-note">※ 親会社（東証）の時価総額。[タイ](/rule/asia/thai/)現法は非上場のため日本本社で代替。</p>
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
<tr><td>トヨタ自動車</td><td>7203</td><td>完成車</td><td>{{% corplink "https://www.google.com/search?q=トヨタ自動車+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "7203" %}}</td></tr>
<tr><td>デンソー</td><td>6902</td><td>部品</td><td>{{% corplink "https://www.google.com/search?q=デンソー+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "6902" %}}</td></tr>
<tr><td>ホンダ</td><td>7267</td><td>完成車</td><td>{{% corplink "https://www.google.com/search?q=ホンダ+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "7267" %}}</td></tr>
<tr><td>ブリジストン</td><td>5108</td><td>タイヤ</td><td>{{% corplink "https://www.google.com/search?q=ブリジストン+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "5108" %}}</td></tr>
<tr><td>スズキ</td><td>7269</td><td>完成車</td><td>{{% corplink "https://www.google.com/search?q=スズキ+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "7269" %}}</td></tr>
<tr><td>日産自動車</td><td>7201</td><td>完成車</td><td>{{% corplink "https://www.google.com/search?q=日産自動車+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "7201" %}}</td></tr>
<tr><td>アイシン</td><td>7259</td><td>部品</td><td>{{% corplink "https://www.google.com/search?q=アイシン+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "7259" %}}</td></tr>
<tr><td>いすゞ</td><td>7202</td><td>完成車</td><td>{{% corplink "https://www.google.com/search?q=いすゞ+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "7202" %}}</td></tr>
<tr><td>マツダ</td><td>7261</td><td>完成車</td><td>{{% corplink "https://www.google.com/search?q=マツダ+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "7261" %}}</td></tr>
<tr><td>三菱自動車</td><td>7211</td><td>完成車</td><td>{{% corplink "https://www.google.com/search?q=三菱自動車+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "7211" %}}</td></tr>
<tr><td>ジェイテクト</td><td>6473</td><td>部品</td><td>{{% corplink "https://www.google.com/search?q=ジェイテクト+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "6473" %}}</td></tr>
<tr><td>日野自動車</td><td>7205</td><td>完成車</td><td>{{% corplink "https://www.google.com/search?q=日野自動車+Investor+Relations" %}}</td><td>{{% dividend "tokyo" "7205" %}}</td></tr>
</tbody></table>
</div>

## 参考文献

{{% references %}}
jetro_thailand_2024survey: JETRO「タイ日系企業進出動向調査 2024年度（2025年2月）」<https://www.jetro.go.jp/world/reports/2025/01/32a9472f08549876.html>
jetro_asia_survey2024: JETRO「2024年度 海外進出日系企業実態調査（アジア・オセアニア）」<https://www.jetro.go.jp/ext_images/en/reports/survey/pdf/2024/EN_Asia_and_Oceania_2024_r4.pdf>
jetro_auto_production2023: JETRO「2023年の自動車生産は184万台に微減（タイ）」<https://www.jetro.go.jp/biz/areareports/2024/c18277fee9d36ad3.html>
jetro_auto_production2024: JETRO「2024年の自動車生産台数、前年比19.9％減の約147万台(タイ)」<https://www.jetro.go.jp/biznews/2025/02/7e112964c18ef037.html>
jetro_thailand_auto_2024: JETRO「自動車の内需不振を輸出が補えず（タイ）」<https://www.jetro.go.jp/biz/areareports/2025/37bbad8f45948671.html>
isuzu_thailand_history: いすゞ自動車「タイで累計車両生産600万台を達成」<https://www.isuzu.co.jp/newsroom/details/20231121_1.html>
boi_thailand: Thailand Board of Investment「Investment Promotion」<https://www.boi.go.th/index.php?page=ipa_index>
eec_office: Eastern Economic Corridor Office「About EEC」<https://www.eeco.or.th/en>
nation_thailand_japan_ev: The Nation Thailand「Thailand works to retain Japan auto giants with new offer of deals」<https://www.nationthailand.com/business/automobile/40043715>
toyota_thailand: Toyota Motor Thailand「Company Profile」<https://www.toyota.co.th/>
{{% /references %}}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       