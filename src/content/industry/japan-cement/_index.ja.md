---
title: "日本のセメント工業"
subtitle: "石灰石100%自給 — 秩父・津久見・宇部・苅田・苫小牧の主要産地"
date: 2026-04-07
lastmod: 2026-04-07
description: "日本のセメント工業を解説。太平洋セメント・UBE三菱セメント・住友大阪セメントの3大グループと、秩父・津久見・宇部・苅田・苫小牧などの主要産地、宇部興産専用道路、石灰石100%自給を一次資料に基づき整理。"
weight: 37
mapName: "japan"
galleryDir: "japan-cement"
---

<script>
(function() {
  // セメント工場/石灰石産地（グレー●）
  var pins = [
    { x: 510, y: 142, label: '上磯（北斗）', type: 'cem',
      note: '太平洋セメント上磯工場（北海道北斗市）' },
    { x: 463, y: 318, label: '大船渡', type: 'cem',
      note: '太平洋セメント大船渡工場（岩手県）' },
    { x: 432, y: 410, label: '秩父/熊谷', type: 'cem',
      note: '太平洋セメント熊谷工場・武甲山石灰石（埼玉）' },
    { x: 350, y: 425, label: '藤原', type: 'cem',
      note: '太平洋セメント藤原工場（三重県いなべ市）' },
    { x: 248, y: 478, label: '赤穂', type: 'cem',
      note: '住友大阪セメント赤穂工場（兵庫県）' },
    { x: 170, y: 510, label: '宇部', type: 'cem',
      note: 'UBE三菱セメント 宇部・伊佐工場（山口県）' },
    { x: 122, y: 538, label: '苅田', type: 'cem',
      note: 'UBE三菱セメント 九州工場（福岡県苅田町）' },
    { x: 134, y: 570, label: '津久見', type: 'cem',
      note: '太平洋セメント大分工場・新津久見鉱山（大分県）' },
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

      var color = '#78716c';
      var bgColor = 'rgba(120,113,108,0.18)';
      var strokeColor = 'rgba(120,113,108,0.55)';

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

## [日本](/rule/asia/japan/)のセメント工業とは

セメントは、原料の<span style="font-weight:700">石灰石を約1,450℃のロータリーキルンで焼成</span>{{% cite "cement_assoc_overview" %}}して製造する基礎素材で、コンクリートの主成分として土木・建築の根幹を支えています。[日本](/rule/asia/japan/)のセメント工業の最大の特徴は、原料の石灰石を<span style="font-weight:700">ほぼ100%国内自給できる</span>{{% cite "limestone_assoc" %}}ことです。[日本](/rule/asia/japan/)にとって石灰石は、ほぼ唯一「自給可能な大規模地下資源」と位置付けられています{{% cite "cement_assoc_overview" %}}{{% cite "limestone_assoc" %}}。

工場立地は、巨大な石灰石鉱山と一体になっているのが特徴で、<span style="font-weight:700">鉱山〜工場〜港湾</span>が短距離で連結されている景観を作り出します。秩父の武甲山、津久見の新津久見鉱山、宇部の伊佐鉱山、苅田の平尾台、藤原岳など、[日本](/rule/asia/japan/)の代表的な石灰石産地はそのままセメント工業地でもあります。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">国内セメント生産量（2024年）</p>
    <p class="stat-card__value">約4,400</p>
    <p class="stat-card__unit">万トン（セメント協会統計）{{% cite "cement_assoc_supply" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">国内工場数</p>
    <p class="stat-card__value">17社28</p>
    <p class="stat-card__unit">工場（セメント協会 会員実績）{{% cite "cement_assoc_overview" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">石灰石自給率</p>
    <p class="stat-card__value">100</p>
    <p class="stat-card__unit">%（年産約1.3億トン）{{% cite "limestone_assoc" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">宇部興産専用道路</p>
    <p class="stat-card__value">31.94</p>
    <p class="stat-card__unit">km（私道として[日本](/rule/asia/japan/)最長・UBE三菱セメント所有）</p>
  </div>
</div>

## 国内3大グループ

[日本](/rule/asia/japan/)のセメント業界は、長い再編を経て<span style="font-weight:700">太平洋セメント・UBE三菱セメント・住友大阪セメント</span>の3大グループに集約されています{{% cite "cement_assoc_overview" %}}。3社で国内シェアの大半を占めます。

| グループ | 主な工場 | 親会社・経緯 |
| -------- | -------- | ------------ |
| <span style="font-weight:700">太平洋セメント（5233）</span> | 上磯・大船渡・熊谷・藤原・大分（津久見）・敦賀・重安・土佐 など | {{% cite "taiheiyo_company" %}}1998年10月に秩父小野田と日本セメントが合併して発足。国内最大手。 |
| <span style="font-weight:700">UBE三菱セメント</span> | 宇部・伊佐（山口）・九州工場（苅田）・黒崎・青森・岩手・横瀬 など | {{% cite "ube_mitsubishi" %}}2022年4月に宇部興産（現UBE）と三菱マテリアルのセメント事業が統合して発足。 |
| <span style="font-weight:700">住友大阪セメント（5232）</span> | 赤穂・栃木（佐野）・岐阜（春日）・八戸 など。鳥形山鉱山（高知）で石灰石を採掘 | {{% cite "soc_company" %}}1994年10月に住友セメントと大阪セメントが合併。 |

その他、麻生セメント・敦賀セメント・明星セメント・トクヤマ・デンカなどの中堅企業もセメント事業を持っています。

## 主要産地・クラスター

| 産地 | 主な工場 | 石灰石鉱山・特徴 |
| ---- | -------- | ------------ |
| <span style="font-weight:700">秩父（埼玉）</span> | 太平洋セメント熊谷工場 | 武甲山。可採鉱量約4億トン。北斜面で大規模採掘が続く |
| <span style="font-weight:700">大船渡（岩手）</span> | 太平洋セメント大船渡工場 | 主力工場の一つ。アジア・欧州への輸出基地 |
| <span style="font-weight:700">津久見（大分）</span> | 太平洋セメント大分工場 | {{% cite "taiheiyo_company" %}}新津久見鉱山（年産約1,000万t規模）。国内最大級の石灰石生産地。 |
| <span style="font-weight:700">宇部・伊佐（山口）</span> | UBE三菱セメント 宇部・伊佐工場 | 伊佐鉱山。クリンカ・石灰石を<span style="font-weight:700">宇部興産専用道路（31.94km）</span>{{% cite "ube_mitsubishi" %}}で工場へ輸送 |
| <span style="font-weight:700">苅田（福岡）</span> | UBE三菱セメント九州工場（旧・三菱マテリアル九州工場） | 平尾台カルストの石灰岩を背景に、苅田港を拠点とした北部九州のセメント積出基地 |
| <span style="font-weight:700">藤原（三重）</span> | 太平洋セメント藤原工場 | 藤原岳の石灰石を採掘する内陸工場。中部地方向け |
| <span style="font-weight:700">赤穂（兵庫）</span> | 住友大阪セメント赤穂工場 | {{%  cite "soc_company" %}}瀬戸内海（播磨灘）に面した大規模工場。セメント生産能力 約370万t/年。 |
| <span style="font-weight:700">上磯（北海道北斗市）</span> | 太平洋セメント上磯工場 | 北海道唯一の大規模セメント工場。苫小牧サービスステーション（苫小牧市）経由で道央・道東へも供給 |

## 宇部興産専用道路（私道[日本](/rule/asia/japan/)最長）

UBE三菱セメントが所有する<span style="font-weight:700">宇部伊佐専用道路</span>は、{{%  cite "ube_mitsubishi" %}}山口県美祢市の伊佐鉱山と宇部市の宇部セメント工場・宇部港を結ぶ全長<span style="font-weight:700">31.94km</span>の私道で、私道としては[日本](/rule/asia/japan/)最長です。伊佐鉱山で採掘した石灰石とクリンカ（半製品）を、専用ダブルストレーラー（最大積載荷重約120t）で大量に運搬しています。一般車両は通行できず、道路交通法が適用されないため、独自の運用が行われています。

セメント工業では、石灰石を低コストで運ぶための<span style="font-weight:700">専用道路・専用鉄道・専用船</span>が広く活用されており、宇部の専用道路はその象徴的な事例です。

## 石灰石 — [日本](/rule/asia/japan/)で唯一の「自給できる大型地下資源」

石灰石は[日本](/rule/asia/japan/)でほぼ100%自給できる数少ない地下資源です{{% cite "limestone_assoc" %}}。年間約1.3億トン規模で採掘され、{{%  cite "limestone_assoc" %}}用途別の内訳はおおよそ次の通りです。

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">用途1</span>
    <span class="process-step__name">セメント原料</span>
    <span class="process-step__temp">約45〜50%</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">用途2</span>
    <span class="process-step__name">骨材・砕石</span>
    <span class="process-step__temp">約20〜25%</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">用途3</span>
    <span class="process-step__name">製鉄・脱硫</span>
    <span class="process-step__temp">約10〜15%</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">用途4</span>
    <span class="process-step__name">化学・農業他</span>
    <span class="process-step__temp">約15〜20%</span>
  </div>
</div>

主要石灰石鉱山：武甲山（秩父）／新津久見鉱山（大分）／伊佐鉱山（山口）／藤原岳（三重）／平尾台周辺（福岡）／高知鳥形山（住友大阪セメント）など{{% cite "limestone_assoc" %}}。

## セメント製造プロセス

{{% mermaid %}}
graph LR
  A["石灰石採掘\n武甲山・伊佐・津久見"]-->B["原料調合\n(石灰石+粘土+珪石+鉄)"]
  B-->C["ロータリーキルン\n約1,450℃で焼成"]
  C-->D["クリンカ生成"]
  D-->E["石膏添加・粉砕"]
  E-->F["セメント製品\n(普通・早強・中庸熱・高炉)"]
  G["副資材\n高炉スラグ・フライアッシュ\n廃棄物・廃タイヤ"]{{%  cite "cement_assoc_overview" %}}-->C
  style A fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style C fill:#fee2e2,color:#7f1d1d,stroke:#dc2626,stroke-width:2px
  style F fill:#d1fae5,color:#065f46,stroke:#10b981,stroke-width:2px
  style G fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
{{% /mermaid %}}

セメント工業は廃棄物・副産物の有効利用でも先行しており、{{%  cite "cement_assoc_overview" %}}<span style="font-weight:700">廃タイヤ・廃プラスチック・高炉スラグ・石炭灰（フライアッシュ）・下水汚泥</span>などを副資材として大量に受け入れる「静脈産業」の側面も持っています。

## カーボンニュートラルへの取り組み

セメント業界の CO2 排出は、[日本](/rule/asia/japan/)の総CO2排出量の約4%を占めており、その内訳は石灰石の脱炭酸（プロセス由来）が約60%、化石燃料燃焼（エネルギー由来）が約40%です{{% cite "meti_cement_gx" %}}。

- <span style="font-weight:700">省エネ・燃料代替</span>: 廃棄物由来の熱源・バイオマス燃料の利用
- <span style="font-weight:700">混合セメント</span>: 高炉スラグ・フライアッシュ混合によるクリンカ比率削減
- <span style="font-weight:700">CCUS</span>: 排ガスからの CO2 分離・回収・固定化（NEDO のグリーンイノベーション基金で実証進行）
- <span style="font-weight:700">CO2 を吸収するコンクリート</span>（CO2-SUICOM 等）の研究開発

## 関連企業の時価総額マップ

国内3大グループと関連企業の時価総額を可視化しています。

{{% corp-treemap "5233,5232,4208,5711,4061,4043" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・セメントとの関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 国内3大セメント</td></tr>
<tr>
<td>太平洋セメント</td>
<td>{{% minkabu 5233 %}}</td>
<td>{{%  cite "taiheiyo_company" %}}国内最大手。1998年に秩父小野田と日本セメントが合併して発足。上磯・大船渡・津久見・熊谷・藤原など全国に主力工場を配置。セメント・生コン・骨材・資源・環境(廃棄物リサイクル)・エネルギー事業を展開する建材・環境総合メーカー。</td>
<td>{{% corplink "https://www.taiheiyo-cement.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5233" %}}</td>
</tr>
<tr>
<td>住友大阪セメント</td>
<td>{{% minkabu 5232 %}}</td>
<td>{{%  cite "soc_company" %}}1994年に住友セメントと大阪セメントが合併。赤穂・栃木佐野・高知など全国に製造拠点。セメント・骨材・建設用素材を展開する独立系セメント大手。</td>
<td>{{% corplink "https://www.soc.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5232" %}}</td>
</tr>
<tr>
<td>UBE</td>
<td>{{% minkabu 4208 %}}</td>
<td>{{%  cite "ube_mitsubishi" %}}旧宇部興産。2022年にセメント事業を切り出し、三菱マテリアルセメント事業と統合してUBE三菱セメントを発足。現在は化学・機械・精密材料を主力に再編し、分散グループ化を推進。</td>
<td>{{% corplink "https://www.ube.co.jp/ube/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4208" %}}</td>
</tr>
<tr>
<td>三菱マテリアル</td>
<td>{{% minkabu 5711 %}}</td>
<td>セメント事業を2022年にUBEと統合。現在は銅製錬・E-Scrap処理・電子部品材料・太陽光パネル向け多結晶シリコン製造が主力の非鉄・機能材メーカー。</td>
<td>{{% corplink "https://www.mmc.co.jp/corporate/ja/ir/" %}}</td>
<td>{{% dividend "tokyo" "5711" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ その他セメント・関連</td></tr>
<tr>
<td>デンカ</td>
<td>{{% minkabu 4061 %}}</td>
<td>新潟青海でアルミナセメント・特殊セメント・ホワイトセメントを製造。電子材料・医薬・医療用品も展開する総合化学メーカー。防爆技術・セメント熱源の有効利用を特徴とする。</td>
<td>{{% corplink "https://www.denka.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4061" %}}</td>
</tr>
<tr>
<td>トクヤマ</td>
<td>{{% minkabu 4043 %}}</td>
<td>山口県周南市を本拠地とする総合化学。徳山製造所でセメント・アルミナを製造する一方、半導体用多結晶シリコン・電子材料を主力とする化学企業。</td>
<td>{{% corplink "https://www.tokuyama.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4043" %}}</td>
</tr>
<tr>
<td>麻生セメント（非上場）</td>
<td>—</td>
<td>福岡県飯塚市を本拠地とする麻生グループのセメント事業会社。主力は田川工場（福岡県田川市）。麻生グループは非上場で、証券コードは付与されていない。</td>
<td>{{% corplink "https://www.aso-cement.jp/" %}}</td>
<td>—</td>
</tr>
</tbody>
</table>
</div>

## 参考文献

{{% references %}}
cement_assoc_overview: 一般社団法人セメント協会「セメント産業の概要」<https://www.jcassoc.or.jp/cement/1jpn/jc.html>
cement_assoc_supply: 一般社団法人セメント協会「セメントの需給」<https://www.jcassoc.or.jp/cement/1jpn/jh1.html>
limestone_assoc: 一般社団法人石灰石鉱業協会<https://www.limestone.gr.jp/>
meti_cement_gx: 経済産業省「製造産業局 グリーンイノベーション基金 セメント分野」<https://www.meti.go.jp/policy/mono_info_service/mono/cement/>
soc_company: 住友大阪セメント株式会社「会社情報」<https://www.soc.co.jp/company/>
taiheiyo_company: 太平洋セメント株式会社「会社情報」<https://www.taiheiyo-cement.co.jp/company/>
ube_mitsubishi: UBE三菱セメント株式会社「会社概要・拠点一覧」<https://www.mu-cc.com/company/base.html>
aso_cement: 麻生セメント株式会社「会社案内」<https://www.aso-cement.jp/company/>
soc_ako: 住友大阪セメント株式会社「拠点・工場一覧」<https://www.soc.co.jp/company/locations/>
nikkei_cement_2024: 日本経済新聞「セメント国内販売6年連続減 24年､工事見直し相次ぎ不振」<https://www.nikkei.com/article/DGXZQOUB240OZ0U5A120C2000000/>
tsukumi_limestone: 大分太平洋鉱業株式会社「津久見の石灰鉱山」<https://oita-taiheiyo.sakura.ne.jp/>
ube_road_jcassoc: 一般社団法人セメント協会「セメント・コンクリート No. 830, Apr. 2016」<https://www.jcassoc.or.jp/cement/4pdf/jg3_25.pdf>
bukousan_taiheiyo: 秩父太平洋セメント株式会社「事業案内」<https://www.ct-cement.co.jp/business/>
{{% /references %}}
