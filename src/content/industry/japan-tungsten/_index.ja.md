---
title: "日本のタングステン産業"
subtitle: "超硬工具から核融合まで — 中国依存率80%超のレアメタルと日本の加工技術"
date: 2026-04-13
lastmod: 2026-04-13
description: "日本のタングステン産業を解説。三菱マテリアル・住友電工グループ（アライドマテリアル）・日本タングステンの主要企業、超硬合金・切削工具・半導体・核融合への用途、中国の圧倒的シェアと日本のリサイクル戦略を整理。"
weight: 39
mapName: "japan"
galleryDir: "japan-tungsten"
---

<script>
(function() {
  var pins = [
    { x: 95, y: 528, label: '福岡（日本タングステン）', type: 'w',
      note: '日本タングステン本社（福岡市博多区）' },
    { x: 158, y: 502, label: '岩国（喜和田）', type: 'mine',
      note: '喜和田鉱山跡（山口県岩国市・1992年休山）' },
    { x: 388, y: 415, label: '富山（アライドマテリアル）', type: 'w',
      note: 'アライドマテリアル富山製作所（富山県）' },
    { x: 265, y: 490, label: '伊丹（住友電工）', type: 'w',
      note: '住友電工ハードメタル（兵庫県伊丹市）' },
    { x: 315, y: 460, label: '岐阜（三菱マテリアル）', type: 'w',
      note: '三菱マテリアル加工事業カンパニー（岐阜製作所）' },
    { x: 272, y: 482, label: '京都（大谷鉱山跡）', type: 'mine',
      note: '大谷鉱山跡（京都府亀岡市・1983年閉山）' },
    { x: 455, y: 412, label: '高取（茨城）', type: 'mine',
      note: '高取鉱山跡（茨城県城里町・1986年閉山）' },
    { x: 270, y: 488, label: '大阪（日本新金属）', type: 'w',
      note: '日本新金属 本社工場（大阪府豊中市）' },
    { x: 436, y: 278, label: '秋田（日本新金属）', type: 'w',
      note: '日本新金属 秋田工場（秋田市茨島）' },
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

      var color = pin.type === 'mine' ? '#a16207' : '#2563eb';
      var bgColor = pin.type === 'mine' ? 'rgba(161,98,7,0.18)' : 'rgba(37,99,235,0.18)';
      var strokeColor = pin.type === 'mine' ? 'rgba(161,98,7,0.55)' : 'rgba(37,99,235,0.55)';

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

## [日本](/rule/asia/japan/)のタングステン産業とは

タングステン（元素記号 W、原子番号74）は、<span style="font-weight:700">融点3,422℃と全金属中で最も高い融点</span>を持ち、極めて高い硬度・密度・耐熱性を備えるレアメタルです。最大の用途は<span style="font-weight:700">超硬合金（炭化タングステン WC をコバルトで焼結した複合材料）</span>で、切削工具・金型・掘削ビットなどに広く使われます{{% cite "jogmec_w_flow" %}}。[日本](/rule/asia/japan/)では国内消費量の約76%が超硬合金向けであり{{% cite "jogmec_w_flow" %}}、世界平均（約61%）を大きく上回ります。

[日本](/rule/asia/japan/)はかつて大谷鉱山（京都）、喜和田鉱山（山口）、高取鉱山（茨城）などでタングステンを採掘していましたが、1980年代の円高と中国産低価格鉱の流入により国内鉱山は相次いで閉山し、現在は<span style="font-weight:700">ほぼ全量を輸入に依存</span>しています{{% cite "kiwada_wiki" %}}。一方で、超硬工具のリサイクル技術や高付加価値加工においては世界トップクラスの競争力を維持しています。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">世界鉱石生産量（2024年推計）</p>
    <p class="stat-card__value">約80,000</p>
    <p class="stat-card__unit">メートルトン{{% cite "usgs_tungsten" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">中国の世界シェア</p>
    <p class="stat-card__value">約83</p>
    <p class="stat-card__unit">%（約67,000トン）{{% cite "usgs_tungsten" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">融点（全金属中最高）</p>
    <p class="stat-card__value">3,422</p>
    <p class="stat-card__unit">℃</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">日本の超硬合金向け比率</p>
    <p class="stat-card__value">約76</p>
    <p class="stat-card__unit">%（世界平均は約61%）{{% cite "jogmec_w_flow" %}}</p>
  </div>
</div>

## タングステンの用途

タングステンは高融点・高硬度・高密度という特性から、幅広い産業で利用されています。

<div class="process-flow">
  <div class="process-step">
    <span class="process-step__label">用途1</span>
    <span class="process-step__name">超硬合金・切削工具</span>
    <span class="process-step__temp">約76%（日本）</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">用途2</span>
    <span class="process-step__name">特殊鋼・高速度鋼</span>
    <span class="process-step__temp">約10%</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">用途3</span>
    <span class="process-step__name">電子材料・半導体</span>
    <span class="process-step__temp">約8%</span>
  </div>
  <div class="process-arrow">＋</div>
  <div class="process-step">
    <span class="process-step__label">用途4</span>
    <span class="process-step__name">その他（触媒・防衛・核融合）</span>
    <span class="process-step__temp">約6%</span>
  </div>
</div>

| 用途分野 | 具体的な利用例 | 活かされるタングステンの特性 |
| -------- | ------------- | ----------------------- |
| <span style="font-weight:700">超硬合金（cemented carbide）</span> | 切削工具（エンドミル・ドリル・チップ）、金型、掘削ビット | 高硬度・耐摩耗性 |
| <span style="font-weight:700">特殊鋼</span> | 高速度鋼（ハイス鋼）、耐熱合金 | 高温強度の維持 |
| <span style="font-weight:700">半導体</span> | 配線材料（ビア配線・コンタクトプラグ）、半導体製造装置の構造部材 | 低電気抵抗・高融点 |
| <span style="font-weight:700">照明・電極</span> | 電球フィラメント、溶接用電極、放電ランプ | 最高融点・低蒸気圧 |
| <span style="font-weight:700">核融合</span> | ITERダイバータ（プラズマ対向材料）{{% cite "sei_fusion" %}} | 耐熱衝撃性・低スパッタリング |
| <span style="font-weight:700">防衛・重量材</span> | 徹甲弾の弾芯、放射線遮蔽材、バランスウエイト | 高密度（約19.3 g/cm³、金とほぼ同等） |

## 世界の生産構造と中国の支配的地位

タングステン鉱石の世界生産は<span style="font-weight:700">中国が約83%</span>を占め、資源・精錬・中間製品のすべてにおいて圧倒的な支配力を持っています{{% cite "usgs_tungsten" %}}。中国以外の主要生産国はベトナム、ロシア、ボリビア、ルワンダなどですが、いずれも中国に比べれば小規模です。

| 順位 | 国 | 鉱石生産量（2024年推計） | シェア |
| ---- | -- | ---------------------- | ----- |
| 1 | <span style="font-weight:700">中国</span> | 約67,000 t | 約83% |
| 2 | ベトナム | 約3,400 t | 約4% |
| 3 | ロシア | 約2,000 t | 約3% |
| 4 | ルワンダ | 約1,600 t | 約2% |
| 5 | 北朝鮮 | 約1,100 t | 約1% |
| 6 | ボリビア | 約1,000 t | 約1% |
| — | その他 | 約3,900 t | 約5% |

{{% cite "usgs_tungsten" %}}

この中国への極端な集中は、レアアースと並んで[日本](/rule/asia/japan/)の資源安全保障上の重大な課題として認識されています。

## [日本](/rule/asia/japan/)のタングステン鉱山の歴史

[日本](/rule/asia/japan/)にはかつて複数のタングステン鉱山が稼働していましたが、1980年代以降に中国産の安価な鉱石が大量に流入し、円高も重なって経済的に採算が合わなくなり、相次いで閉山しました{{% cite "kiwada_wiki" %}}。

| 鉱山名 | 所在地 | 主要鉱物 | 閉山・休山年 | 備考 |
| ------ | ------ | ------- | ---------- | ---- |
| <span style="font-weight:700">大谷鉱山</span> | 京都府亀岡市 | 灰重石・錫石 | 1983年閉山 | 会社破産により閉山{{% cite "otani_wiki" %}}。一時は日本のタングステン生産の約6割を占めた |
| <span style="font-weight:700">鐘打鉱山</span> | 京都府船井郡（現・京丹波町） | 灰重石 | 1982年閉山 | 1930年創業。安価な輸入鉱石と品位低下により閉山{{% cite "kaneuchi_rdb" %}} |
| <span style="font-weight:700">高取鉱山</span> | 茨城県東茨城郡城里町（旧・七会村） | 灰重石 | 1986年閉山 | 1908年（明治41年）よりタングステン採掘。関東地方の代表的タングステン鉱山 |
| <span style="font-weight:700">明延鉱山</span> | 兵庫県養父市 | 錫・タングステン・銅 | 1987年閉山 | 「日本一の錫の鉱山」とも呼ばれた |
| <span style="font-weight:700">喜和田鉱山</span> | 山口県岩国市 | 灰重石 | 1992年休山 | {{% cite "kiwada_wiki" %}}[日本](/rule/asia/japan/)最後のタングステン鉱山。1909年にズリ石から大量の灰重石が発見され、一大産地となった。2005年に事実上閉山 |

2008年にはタングステン価格の高騰を背景にアドバンスト・マテリアル・ジャパンが喜和田鉱山の再開を検討しましたが、埋蔵量の確認や採掘人員の確保が困難であったことから事業化は断念されました{{% cite "bloomberg_kiwada" %}}。

## 主要企業

[日本](/rule/asia/japan/)のタングステン産業は、鉱石の採掘ではなく<span style="font-weight:700">中間製品（タングステン粉末・炭化タングステン粉末）からの超硬合金製造・加工とリサイクル</span>に特化しています。

| 企業 | 特徴 |
| ---- | ---- |
| <span style="font-weight:700">三菱マテリアル（5711）</span> | 超硬工具大手。2024年12月に独H.C. Starck Holdingを約210億円で買収し{{% cite "mmc_hcstarck" %}}、中国を除くタングステン製錬・リサイクルで世界最大のサプライヤーに。供給能力は約15,000トン/年（従来の約6倍）{{% cite "mmc_w_strategy" %}}。日本・欧州・北米・中国の4拠点でタングステン事業を展開。岐阜製作所が加工事業の中核 |
| <span style="font-weight:700">住友電工グループ（5802）</span> | 子会社のアライドマテリアル（英文社名A.L.M.T. Corp.、旧東京タングステンと旧大阪ダイヤモンド工業が2000年に合併）がタングステン・モリブデン製品の製造を担う{{% cite "almt_company" %}}。住友電工ハードメタルが超硬切削工具を展開。核融合向けタングステン材料の研究開発にも注力{{% cite "sei_fusion" %}} |
| <span style="font-weight:700">日本タングステン（6998）</span> | 福岡市博多区に本社を置くタングステン専業メーカー{{% cite "nittan_company" %}}。1931年創業。粉末冶金技術をベースに、タングステン・モリブデン製品、電気接点、超硬合金、ファインセラミックスを製造・販売。バインダレス超硬合金を世界に先駆けて開発 |
| <span style="font-weight:700">Niterra Materials（旧・東芝マテリアル）</span> | 1909年に日本初のタングステンフィラメント製造を開始。タングステン合金・モリブデン部品・スパッタリングターゲット等を製造。2025年6月に日本特殊陶業が東芝から全株式を取得し社名変更{{% cite "niterra_tmat" %}} |
| <span style="font-weight:700">日本新金属</span> | 三菱マテリアルグループの子会社（1963年に粟村鉱業と三菱金属鉱業の合弁で設立）{{% cite "jnm_company" %}}。大阪本社工場・秋田工場の2拠点体制{{% cite "mmc_w_strategy" %}}。国内唯一の精鉱・スクラップからの一貫精錬により、タングステン・モリブデン粉末を製造。売上高約175億円（FY2025見込）のうち超硬工具向け約40%、電子部品向け約60%で、高純度タングステン粉末や二次電池向けタングステン化成品など高付加価値品に特化 |

## 三菱マテリアルによるH.C. Starck買収（2024年）

2024年5月に三菱マテリアルは、ベトナムのMasan High-Tech Materials（MHT）からドイツのタングステン製品メーカー<span style="font-weight:700">H.C. Starck Holding</span>の全株式を取得する契約を締結し、同年12月に取得を完了しました{{% cite "mmc_hcstarck" %}}。取得価額は約1億3,450万米ドル（約210億円）。

H.C. Starckは1920年設立、従業員約770名のタングステン粉末・炭化タングステン粉末メーカーで、<span style="font-weight:700">ドイツ（ゴスラー本社）・カナダ（サーニア）・中国（贛州）の3拠点</span>で製造を行い、650種類以上のタングステン関連製品を展開しています{{% cite "mmc_w_strategy" %}}。登録済み特許は100件以上（出願中140件）を保有し、ドイツの大学・研究機関との協業によりヨーロッパにおけるタングステン製品のオーソリティとして広く知られています。

売上高はFY2025年度見込みで約590億円（超硬工具向け約70%、その他約30%）{{% cite "mmc_w_strategy" %}}。ゴスラー本社工場の<span style="font-weight:700">リサイクル比率は80%</span>に達しており、溶融塩プロセスを採用した環境負荷の低いリサイクル技術に強みを持ちます。

買収前の三菱マテリアルのタングステン事業は日本新金属のみで、世界的にはミドルクラスのサプライヤーでしたが、H.C. Starckの取得により<span style="font-weight:700">中国を除くタングステン製錬・リサイクルで世界最大のサプライヤー</span>となり、供給能力は従来の約6倍となる<span style="font-weight:700">約15,000トン/年</span>（日本新金属2,500トン/年＋H.C. Starck 12,500トン/年）に拡大しました{{% cite "mmc_w_strategy" %}}。

### タングステン事業の3つの柱

2025年9月の事業戦略説明会で三菱マテリアルは、日本新金属とH.C. Starckのシナジーにより<span style="font-weight:700">タングステン資源循環のデファクトスタンダード確立</span>を目指す方針を示しました{{% cite "mmc_w_strategy" %}}。

- <span style="font-weight:700">共同研究開発と新規事業の拡大</span>: 日本新金属の高純度化技術とH.C. Starckの大量生産技術を融合し、材料開発力を深化。両社製品のクロスセル推進と共同開発製品による新規顧客への技術提案。超硬工具向けに加え<span style="font-weight:700">二次電池向け等に事業規模を拡大</span>
- <span style="font-weight:700">効率化の推進</span>: 両社の調達・サプライチェーンを最大限活用してタングステンの調達を強化。生産技術からITシステムまであらゆる領域で統合を推進
- <span style="font-weight:700">リサイクル推進</span>: 両社のリサイクル率<span style="font-weight:700">80%の達成・維持</span>を目標とし、日本・欧州・米州・アジア各国におけるタングステン資源循環を設計。三菱マテリアルの工具販売チャネルを活用した使用済み超硬工具の回収にも注力

### H.C. Starckと日本新金属の棲み分け

| 項目 | H.C. Starck | 日本新金属 |
| ---- | ----------- | ------ |
| 製造特性 | <span style="font-weight:700">バルク大量生産</span>。効率生産・省人化技術に強み | <span style="font-weight:700">カスタマイズ特注品</span>。高純度化技術・小ロット対応に強み |
| 主要品種 | W/WC粉末、タングステン化成品 | W/WC粉末、高純度タングステン粉末、二次電池向け化成品、モリブデン関連製品、非酸化物セラミックス粉末、ヘテロポリ酸 |
| リサイクル技術 | 溶融塩プロセス（環境負荷低） | 酸化焙焼プロセス |
| 生産体制 | ドイツ・カナダ・中国の3拠点 | 大阪本社工場・秋田工場の2拠点（日本市場に注力） |
| 売上高（FY2025見込） | 約590億円 | 約175億円 |
| 売上構成 | 超硬工具向け約70%、その他約30% | 超硬工具向け約40%、電子部品向け約60% |
| 主要顧客 | 超硬工具・化学・重工メーカー | 切削/耐摩耗工具・電子部品/半導体素材・二次電池関連素材メーカー |

{{% cite "mmc_w_strategy" %}}

## タングステン市場の動向と価格高騰

2025年に入り、タングステン市場は大きな変動に直面しています{{% cite "mmc_w_strategy" %}}。

- <span style="font-weight:700">APT価格の史上最高値更新</span>: タングステン精鉱の約80%を占める中国が、米中貿易摩擦を背景に2025年2月から輸出管理を強化。タングステンの中間生成物であるAPT（パラタングステン酸アンモニウム）の価格が2025年4月以降急騰し、史上最高値を更新した。採鉱コストはユニット当たり約200ドル程度とされるが、APT価格は2025年時点で540ドルに達している
- <span style="font-weight:700">世界的な需要増加見通し</span>: 2034年までのタングステン需要CAGRは年率2.1%と見込まれ、半導体・電子部品・リチウムイオンバッテリー・核融合・医療分野など従来の超硬工具以外の成長領域が拡大
- <span style="font-weight:700">リサイクル市場の成長</span>: 精鉱生産が中国に偏在する中、リサイクル率の向上による安定原料調達が重要性を増している。しかし現在のタングステンリサイクル率は<span style="font-weight:700">世界全体で約25%</span>（三菱マテリアル推定）にとどまっており{{% cite "mmc_w_strategy" %}}、向上の余地が大きい
- <span style="font-weight:700">代替材料の不在</span>: タングステンは工業製品での使用に耐えうる代替元素が基本的に存在せず、供給を押さえていること自体が大きな競争優位となる

## タングステンのリサイクル

[日本](/rule/asia/japan/)は国内タングステン消費の相当部分をリサイクル（二次資源）で賄っています{{% cite "sei_recycle" %}}。超硬工具スクラップからタングステンを回収・再利用する技術は[日本](/rule/asia/japan/)企業が世界をリードしており、資源安全保障の観点からも極めて重要な戦略です。

{{% mermaid %}}
graph LR
  A["超硬工具スクラップ\n使用済みチップ・ドリル"]-->B["回収・分別"]
  B-->C["亜鉛処理法 or\n化学溶解法"]
  C-->D["タングステン酸\nアンモニウム（APT）"]
  D-->E["タングステン粉末\n再生"]
  E-->F["超硬合金\n再製造"]
  G["中国からの輸入\nAPT・WC粉末"]-->E
  style A fill:#fef3c7,color:#78350f,stroke:#f59e0b,stroke-width:2px
  style D fill:#dbeafe,color:#1e3a5f,stroke:#3b82f6,stroke-width:2px
  style F fill:#d1fae5,color:#065f46,stroke:#10b981,stroke-width:2px
  style G fill:#fee2e2,color:#7f1d1d,stroke:#dc2626,stroke-width:2px
{{% /mermaid %}}

### セクター別リサイクル率

タングステンの回収しやすさは用途によって大きく異なります{{% cite "mmc_w_strategy" %}}。

| 用途セクター | リサイクル率 | タングステン市場シェア | 備考 |
| --------- | --------- | ------------- | ---- |
| 切削工具 | 約60% | 約25% | 使用済みチップ・ドリルの回収が比較的容易 |
| 耐摩耗工具 | 約15% | 約25% | 圧延ロール等は大型のため回収が困難 |
| 建設工具 | — | — | トンネル掘削ビット等は岩と混合し回収困難 |
| 電子材料・半導体 | 数% | — | 使用量が微量のため回収が進んでいない |
| 化学・重工・LiB | 約50% | 約5% | 触媒等は産廃として一部回収 |

### リサイクル技術の比較

タングステンのリサイクルには主に2つの技術が存在し、[日本](/rule/asia/japan/)企業はそれぞれ異なるアプローチを採用しています{{% cite "mmc_w_strategy" %}}。

- <span style="font-weight:700">溶融塩プロセス</span>（H.C. Starck）: 環境負荷が低い方法。H.C. Starckのゴスラー工場ではリサイクル比率80%を達成
- <span style="font-weight:700">酸化焙焼プロセス</span>（日本新金属）: 焼成するプロセスのため、CO2排出はやや多いが、後工程の湿式製錬（イオン交換技術）により高品質の製品を得られる
- <span style="font-weight:700">酸化–湿式化学処理法</span>（住友電工グループ）: 2007年にJOGMECプロジェクトとして名古屋大学との共同研究で開発{{% cite "sei_recycle" %}}。スクラップを化学的に分解・溶解し、高純度の三酸化タングステン（WO₃）を回収

三菱マテリアルグループは、H.C. Starckと日本新金属の両社でリサイクル率80%の達成・維持を目標とし、北米でも超硬スクラップの自社回収・前処理体制の構築を進めています{{% cite "mmc_w_strategy" %}}。

## アライドマテリアルのタングステン供給能力増強（2026年）

2026年4月、住友電工グループのアライドマテリアルは<span style="font-weight:700">タングステン粉末および炭化タングステン粉末の供給能力を約1.5倍に増強</span>する計画を発表しました{{% cite "sei_capacity" %}}。総投資額は約159億円で、2028年度上期の稼働開始を目指します。

具体的には、アライドマテリアル富山製作所から約1kmの場所に約4万m²の用地を確保し、新工場を建設。タングステンの還元および炭化工程の能力を増強します。本計画は経済産業省の<span style="font-weight:700">「重要鉱物に係る供給確保計画」</span>に認定され、助成金支援の対象となっています{{% cite "sei_capacity" %}}。

超硬工具・半導体回路配線・電子部品の製造に不可欠なタングステン粉末は世界的に供給不足が懸念されており、この投資は中国依存リスクの低減と安定供給体制の強化を目的としています。

## 資源安全保障と[日本](/rule/asia/japan/)の対応

タングステンは経済産業省が定める<span style="font-weight:700">レアメタル備蓄対象鉱種</span>の一つであり、JOGMECによる国家備蓄の対象にも含まれています{{% cite "cjc_raremetal" %}}。中国への依存度が約83%と極めて高いため、以下の対策が進められています。

- <span style="font-weight:700">リサイクル強化</span>: 超硬工具スクラップの回収率向上。住友電工・三菱マテリアルが技術を主導
- <span style="font-weight:700">調達先多角化</span>: ベトナム・ボリビア・ルワンダ等の非中国サプライヤーとの関係構築
- <span style="font-weight:700">国家備蓄</span>: JOGMECによるタングステンのレアメタル備蓄{{% cite "cjc_raremetal" %}}
- <span style="font-weight:700">代替材料研究</span>: 一部用途でのセラミックス・CBN（立方晶窒化ホウ素）などへの代替検討
- <span style="font-weight:700">国内供給能力の増強</span>: アライドマテリアルが約159億円を投資してタングステン粉末の供給能力を約1.5倍に増強（2028年度上期稼働予定）{{% cite "sei_capacity" %}}
- <span style="font-weight:700">海外権益確保</span>: 三菱マテリアルのH.C. Starck買収{{% cite "mmc_hcstarck" %}}は、中国外でのタングステンバリューチェーン確保の象徴的事例

## 関連企業の時価総額マップ

{{% corp-treemap "5711,5802,6998" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・タングステンとの関連</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ タングステン加工・超硬工具</td></tr>
<tr>
<td>三菱マテリアル</td>
<td>{{% minkabu 5711 %}}</td>
<td>{{% cite "mmc_w_strategy" %}}非鉄金属・機能材メーカー。超硬工具（加工事業カンパニー）が主力事業の一つ。2024年12月にドイツH.C. Starck Holdingを買収し、中国を除くタングステン製錬・リサイクルで世界最大のサプライヤーに。供給能力は約15,000トン/年。子会社の日本新金属（大阪・秋田2拠点）が高付加価値タングステン粉末を、H.C. Starck（ドイツ・カナダ・中国3拠点）が大量生産品を担い、2030年までにリサイクル率80%を目標とする。銅製錬・E-Scrap処理・電子部品材料も展開。</td>
<td>{{% corplink "https://www.mmc.co.jp/corporate/ja/ir/" %}}</td>
<td>{{% dividend "tokyo" "5711" %}}</td>
</tr>
<tr>
<td>住友電気工業</td>
<td>{{% minkabu 5802 %}}</td>
<td>{{% cite "sei_recycle" %}}電線・光ファイバーから自動車部品・超硬工具まで展開する総合メーカー。子会社アライドマテリアル（英文社名A.L.M.T. Corp.）がタングステン・モリブデン製品を製造し、住友電工ハードメタルが超硬切削工具を手掛ける。核融合向けタングステン材料の研究開発にも注力。</td>
<td>{{% corplink "https://sumitomoelectric.com/jp/ir" %}}</td>
<td>{{% dividend "tokyo" "5802" %}}</td>
</tr>
<tr>
<td>日本タングステン</td>
<td>{{% minkabu 6998 %}}</td>
<td>{{% cite "nittan_company" %}}1931年創業のタングステン専業メーカー。福岡市博多区に本社。粉末冶金技術をベースに、タングステン・モリブデン製品、電気接点、超硬合金、ファインセラミックスを製造・販売。バインダレス超硬合金を世界初開発。</td>
<td>{{% corplink "https://www.nittan.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "6998" %}}</td>
</tr>
</tbody>
</table>
</div>

## 参考文献

{{% references %}}
jogmec_w_flow: JOGMEC「鉱物資源マテリアルフロー2018 タングステン (W)」<https://mric.jogmec.go.jp/wp-content/uploads/2019/03/material_flow2018_W.pdf>
usgs_tungsten: USGS Mineral Commodity Summaries — Tungsten（2025年）<https://pubs.usgs.gov/periodicals/mcs2025/mcs2025-tungsten.pdf>
kiwada_wiki: 喜和田鉱山 — Wikipedia <https://ja.wikipedia.org/wiki/%E5%96%9C%E5%92%8C%E7%94%B0%E9%89%B1%E5%B1%B1>
kyoto_rdb: 京都府レッドデータブック2015「大谷鉱山および行者山の錫・タングステン鉱脈」<https://www.pref.kyoto.jp/kankyo/rdb/geo/db/soi0019.html>
bloomberg_kiwada: Bloomberg「閉山の国産タングステン鉱山蘇生が幻に－アドバンストが撤退を示唆」（2008年9月4日）<https://www.bloomberg.com/jp/news/articles/2008-09-04/K6NQ046JIJUO01>
mmc_hcstarck: 三菱マテリアル「H.C.Starck Holdingの株式取得に関する基本合意について」（2024年5月14日）<https://www.mmc.co.jp/corporate/ja/news/press/2024/24-0514b.html>
almt_company: 株式会社アライドマテリアル 公式サイト <https://www.allied-material.co.jp/>
nittan_company: 日本タングステン株式会社 公式サイト <https://www.nittan.co.jp/>
sei_recycle: 住友電工「レアメタル課題解決への挑戦。タングステン完全リサイクルへの道」<https://sumitomoelectric.com/jp/id/project/v17/02>
sei_fusion: 住友電工「核融合向けのタングステン技術」<https://www.jaif.or.jp/journal/japan/21330.html>
cjc_raremetal: 産業環境管理協会 資源・リサイクル促進センター「タングステン W」<https://www.cjc.or.jp/raremetal/overview/needs-targets/tungsten>
otani_wiki: 大谷鉱山 (京都府) — Wikipedia <https://ja.wikipedia.org/wiki/%E5%A4%A7%E8%B0%B7%E9%89%B1%E5%B1%B1_(%E4%BA%AC%E9%83%BD%E5%BA%9C)>
kaneuchi_rdb: 京都府レッドデータブック2015「鐘打鉱山のタングステン鉱脈」<https://www.pref.kyoto.jp/kankyo/rdb/geo/db/soi0017.html>
niterra_tmat: 東芝「東芝マテリアル株式会社の企業価値向上に向けた施策の実行について」（2024年11月25日）<https://www.global.toshiba/jp/news/corporate/2024/11/news-20241125-01.html>
jnm_company: 日本新金属株式会社 三菱マテリアルグループ紹介 <http://www.jnm.co.jp/ja/company/group.html>
sei_capacity: 住友電工「タングステンの供給能力を約1.5倍に増強 総額約159億円を投資、2028年度上期稼働へ」（2026年4月）<https://sumitomoelectric.com/jp/press/2026/04/prs033>
mmc_w_strategy: 三菱マテリアル「タングステン事業戦略説明会」（2025年9月12日）<https://ir.mmc.co.jp/ja/ir/news/news-6603690760580602755/main/0/link/0912scripts2.pdf>
{{% /references %}}
                                                  