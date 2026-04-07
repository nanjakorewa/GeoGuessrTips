---
title: "日本の非鉄金属製錬"
subtitle: "別子・日立・小坂・直島 — 鉱山町から世界の都市鉱山リサイクル拠点へ"
date: 2026-04-07
lastmod: 2026-04-07
description: "日本の非鉄金属製錬を解説。住友金属鉱山・JX金属・三菱マテリアル・三井金属・DOWA・東邦亜鉛の主要製錬所と、別子・足尾・日立・小坂の四大銅山の歴史、E-Scrap都市鉱山リサイクルまでを一次資料に基づき整理。"
weight: 36
mapName: "japan"
---

<script>
(function() {
  // 銅製錬所（オレンジ●）と亜鉛・鉛・歴史鉱山（青◆）
  var pins = [
    // 銅製錬所
    { x: 175, y: 510, label: '東予(銅)', type: 'cu',
      note: '住友金属鉱山 東予製錬所（愛媛県西条市）' },
    { x: 116, y: 568, label: '佐賀関(銅)', type: 'cu',
      note: 'パンパシフィック・カッパー 佐賀関製錬所（大分市）' },
    { x: 215, y: 503, label: '玉野(銅)', type: 'cu',
      note: 'パンパシフィック・カッパー 玉野製錬所（岡山県玉野市）' },
    { x: 480, y: 365, label: '小名浜(銅)', type: 'cu',
      note: '小名浜製錬（JX金属系・福島県いわき市）' },
    { x: 200, y: 535, label: '直島(銅)', type: 'cu', above: true,
      note: '三菱マテリアル 直島製錬所（香川県直島町）' },
    // 鉛・亜鉛・歴史鉱山
    { x: 462, y: 245, label: '小坂(鉛亜鉛)', type: 'zn',
      note: 'DOWA 小坂製錬（秋田県小坂町）' },
    { x: 460, y: 280, label: '秋田(亜鉛)', type: 'zn',
      note: 'DOWA 秋田製錬（秋田県秋田市）' },
    { x: 463, y: 325, label: '八戸(亜鉛)', type: 'zn', above: true,
      note: '三井金属 八戸製錬（青森県八戸市）' },
    { x: 432, y: 410, label: '安中(亜鉛)', type: 'zn',
      note: '東邦亜鉛 安中製錬所（群馬県安中市）' },
    { x: 348, y: 430, label: '神岡(亜鉛鉛)', type: 'zn',
      note: '神岡鉱業（三井金属系・岐阜県飛騨市）' },
    // 歴史的銅山
    { x: 432, y: 388, label: '足尾(歴史)', type: 'hist', above: true,
      note: '古河鉱業 足尾銅山（栃木県・1973年閉山）' },
    { x: 467, y: 410, label: '日立(歴史)', type: 'hist',
      note: '日立鉱山（茨城県・1981年閉山）' },
    { x: 175, y: 530, label: '別子(歴史)', type: 'hist',
      note: '住友 別子銅山（愛媛県新居浜市・1973年閉山）' },
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

      var color, bgColor, strokeColor, marker;
      if (pin.type === 'cu') {
        color = '#d97706'; bgColor = 'rgba(217,119,6,0.18)'; strokeColor = 'rgba(217,119,6,0.55)'; marker = '\u25CF';
      } else if (pin.type === 'zn') {
        color = '#0f766e'; bgColor = 'rgba(15,118,110,0.18)'; strokeColor = 'rgba(15,118,110,0.55)'; marker = '\u25C6';
      } else {
        color = '#6b7280'; bgColor = 'rgba(107,114,128,0.15)'; strokeColor = 'rgba(107,114,128,0.45)'; marker = '\u25B2';
      }

      var glow = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
      glow.setAttribute('cx', pin.x);
      glow.setAttribute('cy', pin.y - 6);
      glow.setAttribute('r', '10');
      glow.setAttribute('fill', bgColor);
      glow.setAttribute('stroke', strokeColor);
      glow.setAttribute('stroke-width', '1.5');

      var markerEl = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      markerEl.setAttribute('x', pin.x);
      markerEl.setAttribute('y', pin.y);
      markerEl.setAttribute('font-size', '12');
      markerEl.setAttribute('fill', color);
      markerEl.setAttribute('text-anchor', 'middle');
      markerEl.setAttribute('dominant-baseline', 'middle');
      markerEl.setAttribute('style', 'font-family:sans-serif; user-select:none;');
      markerEl.textContent = marker;

      var textLen = pin.label.length;
      var bgW = textLen * 7 + 6;
      var bgH = 13;
      var isAbove = pin.above || false;
      var bgY = isAbove ? (pin.y - 18 - bgH) : (pin.y + 4);
      var textY = isAbove ? (pin.y - 18 - bgH + 10) : (pin.y + 13);

      var labelBg = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
      labelBg.setAttribute('x', pin.x - bgW / 2);
      labelBg.setAttribute('y', bgY);
      labelBg.setAttribute('width', bgW);
      labelBg.setAttribute('height', bgH);
      labelBg.setAttribute('fill', 'rgba(50,50,50,0.85)');
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
      g.appendChild(markerEl);
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

## 日本の非鉄金属製錬とは

日本は鉱石（精鉱）を輸入し、国内で銅・亜鉛・鉛・ニッケルなどに製錬する<span style="font-weight:700">「精鉱輸入・精錬輸出」型</span> の構造を持っています。明治期から昭和半ばまでは国内の鉱山が主要な原料供給源でしたが、1970年代までに大半の金属鉱山が閉山し、現在ではほぼ全量を海外鉱石に依存しています{{% cite "jogmec_metal_overview" %}}。

それでも日本の非鉄製錬産業は、<span style="font-weight:700">世界最高水準の歩留まり・複雑鉱処理能力・副産物（金・銀・PGM・レアメタル）回収技術</span> を背景に、銅製錬で世界的な存在感を維持しています。さらに近年は、廃電子基板（<span style="font-weight:700">E-Scrap</span>）から貴金属を回収する<span style="font-weight:700">「都市鉱山」リサイクル</span> の世界的拠点としても注目されています{{% cite "mmc_escrap" %}}。

## 基本データ

<div class="stat-grid">
  <div class="stat-card">
    <p class="stat-card__label">国内電気銅生産能力</p>
    <p class="stat-card__value">約160</p>
    <p class="stat-card__unit">万トン/年（世界第3位級）{{% cite "jogmec_metal_overview" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">国内主要銅製錬所</p>
    <p class="stat-card__value">5</p>
    <p class="stat-card__unit">か所（東予・佐賀関・玉野・小名浜・直島）</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">三菱マテリアル直島 E-Scrap処理</p>
    <p class="stat-card__value">約16</p>
    <p class="stat-card__unit">万トン/年（グループ世界最大級）{{% cite "mmc_escrap" %}}</p>
  </div>
  <div class="stat-card">
    <p class="stat-card__label">別子銅山 操業期間</p>
    <p class="stat-card__value">283</p>
    <p class="stat-card__unit">年（1691〜1973年）{{% cite "sumitomo_besshi" %}}</p>
  </div>
</div>

## 主要銅製錬所

| 製錬所 | 所在地 | 運営企業 | 特徴 |
| ------ | ------ | -------- | ---- |
| <span style="font-weight:700">東予製錬所</span> | 愛媛県西条市 | 住友金属鉱山 | 自溶炉を採用した世界最高水準の銅製錬所。年間約45万t規模{{% cite "smm_toyo" %}} |
| <span style="font-weight:700">佐賀関製錬所</span> | 大分県大分市 | パンパシフィック・カッパー（JX金属・三井金属の合弁） | 国内最大規模の銅製錬所。年間約45万t規模{{% cite "ppc_company" %}} |
| <span style="font-weight:700">玉野製錬所</span> | 岡山県玉野市 | パンパシフィック・カッパー | 旧日比共同製錬。年間約20万t{{% cite "ppc_company" %}} |
| <span style="font-weight:700">小名浜製錬</span> | 福島県いわき市 | 小名浜製錬（JX金属系） | 1963年操業開始。リサイクル原料処理にも特化{{% cite "ppc_company" %}} |
| <span style="font-weight:700">直島製錬所</span> | 香川県直島町 | 三菱マテリアル | 銅製錬と E-Scrap リサイクルの複合拠点。世界最大級のE-Scrap処理能力{{% cite "mmc_naoshima" %}} |

## 主要亜鉛・鉛・ニッケル製錬所

| 鉱種 | 製錬所 | 所在地 | 運営企業 | 備考 |
| ---- | ------ | ------ | -------- | ---- |
| 亜鉛 | <span style="font-weight:700">秋田製錬所</span> | 秋田県秋田市 | DOWAホールディングス | 国内最大級の電気亜鉛生産拠点。年産約20万t{{% cite "dowa_metalmine" %}} |
| 亜鉛・鉛 | <span style="font-weight:700">小坂製錬</span> | 秋田県小坂町 | DOWAホールディングス | 旧鉱山から複雑鉱処理・リサイクル拠点へ転換{{% cite "dowa_metalmine" %}} |
| 亜鉛 | 亜鉛 | <span style="font-weight:700">八戸製錬</span> | 青森県八戸市 | 三井金属鉱業 | 国内有数の電気亜鉛拠点{{% cite "mitsui_kinzoku_business" %}} |
| 亜鉛・鉛 | <span style="font-weight:700">神岡鉱業</span> | 岐阜県飛騨市 | 三井金属鉱業（神岡鉱業） | 旧神岡鉱山由来。現在はリサイクル原料処理が中心{{% cite "mitsui_kinzoku_business" %}} |
| 亜鉛 | <span style="font-weight:700">安中製錬所</span> | 群馬県安中市 | 東邦亜鉛 | 2024年12月発表の事業再生計画により、亜鉛製錬事業からの撤退方針が示された{{% cite "tohozinc_recovery" %}} |
| ニッケル | <span style="font-weight:700">ニッケル工場</span> | 愛媛県新居浜市 | 住友金属鉱山 | フィリピン・ニューカレドニアからの鉱石を処理。EV電池材料の前駆体（NCA・NMC）も製造{{% cite "smm_company" %}} |

## 歴史的四大銅山

明治〜昭和期の日本経済を支えた四大銅山は、現在いずれも閉山しているか、リサイクル拠点へと役割を変えています。

{{% timeline %}}

| 年 | 出来事 |
|----|-------|
| 1610 | 足尾銅山が開山（栃木県）。江戸幕府の御用銅山として発展 |
| 1691 | 別子銅山が開坑（愛媛県新居浜）。住友家が283年にわたり経営{{% cite "sumitomo_besshi" %}} |
| 1884 | 藤田組（現DOWA）が小坂鉱山を払下げで取得。鉱床転換に成功 |
| 1891 | 田中正造が足尾鉱毒事件を国会で告発。日本初の公害問題に |
| 1905 | 久原房之助が日立鉱山を買収。久原鉱業（後の日本鉱業→JX金属）の起点に |
| 1973 | 足尾銅山閉山（363年） |
| 1973 | 別子銅山閉山（283年）。住友金属鉱山は東予に新製錬所を建設し継承 |
| 1981 | 日立鉱山閉山（76年） |
| 2008 | 小坂製錬がリサイクル拠点として再生。E-Scrap処理を本格化 |

{{% /timeline %}}

### 別子銅山（住友・愛媛県新居浜市）

別子銅山は1691年に住友家が開発を開始した、日本を代表する銅山です{{% cite "sumitomo_besshi" %}}。閉山までの283年間で約65万トンの銅を産出し、住友財閥の原点となりました。閉山後も住友金属鉱山は東予製錬所（西条市）を1971年に建設し{{% cite "smm_toyo" %}}、海外鉱石を使った銅製錬を継続しています。新居浜には住友化学・住友重機械工業など住友グループ各社の主力工場が今も集積しています。

### 足尾銅山（古河・栃木県）

足尾銅山は1610年開山の歴史を持ち{{% cite "jogmec_metal_overview" %}}、明治期に古河市兵衛が近代化に成功しました。一方、煙害と鉱毒水で渡良瀬川流域に深刻な公害を引き起こし、田中正造の告発で日本初の公害問題となりました。1973年閉山{{% cite "jogmec_metal_overview" %}}。

### 日立鉱山（久原房之助・茨城県）

久原房之助が1905年に買収し{{% cite "jogmec_metal_overview" %}}、近代経営の手本となりました。鉱山の煙害対策として建設された<span style="font-weight:700">「日立大煙突」</span>（1915年完成、当時世界一の高さ155m）は、現在も日立市のシンボルとして残っています。日立鉱山は後の日立製作所創業の母体ともなりました。1981年閉山{{% cite "jogmec_metal_overview" %}}。

### 小坂鉱山・小坂製錬（DOWA・秋田県）

小坂鉱山は1884年に藤田組（現DOWAホールディングス）が払い下げを受けたあと{{% cite "dowa_metalmine" %}}、煙害を起こす黒鉱（複雑硫化鉱）の処理技術で世界的な評価を得ました。鉱山は1990年に閉山しましたが{{% cite "dowa_metalmine" %}}、<span style="font-weight:700">小坂製錬は世界に先駆けて E-Scrap・廃電子基板リサイクル拠点へと転換</span>し、現在でも金・銀・銅・PGM・レアメタルなどを回収し続けています{{% cite "dowa_metalmine" %}}。

## 都市鉱山リサイクル — 直島・小坂・佐賀関

廃電子基板（E-Scrap）には、自然界の鉱石を遥かに上回る濃度で金・銀・銅・PGMが含まれているため、「都市鉱山」と呼ばれます。日本の銅製錬所はこの都市鉱山を世界中から集めて処理する拠点として国際的に認知されています{{% cite "mmc_escrap" %}}。

| 拠点 | 運営企業 | 主な処理 |
| ---- | -------- | -------- |
| <span style="font-weight:700">直島製錬所</span> | 三菱マテリアル | E-Scrap年間約16万トン処理（グループ世界最大級）。2030年度までに約24万トンへ拡大計画{{% cite "mmc_escrap" %}} |
| <span style="font-weight:700">小坂製錬</span> | DOWA | 黒鉱処理技術を応用した複雑硫化鉱・E-Scrapの処理{{% cite "dowa_metalmine" %}} |
| <span style="font-weight:700">佐賀関製錬所</span> | パンパシフィック・カッパー（JX金属） | 銅製錬と組み合わせた E-Scrap・銅二次原料処理{{% cite "ppc_company" %}} |

直島の三菱マテリアル製錬所は、世界の E-Scrap 発生量（年約80万トン）のうち{{% cite "mmc_escrap" %}}、<span style="font-weight:700">グループ全体で約20%相当を処理</span> しているとされ、世界の都市鉱山リサイクルの中心拠点となっています{{% cite "mmc_escrap" %}}。2030年度には処理能力を約24万トンに拡大し{{% cite "mmc_escrap" %}}、さらなる役割強化を予定しています。

## 関連企業の時価総額マップ

非鉄製錬・リサイクル事業を手がける主要上場企業の時価総額を可視化しています。

{{% corp-treemap "5713,5711,5706,5714,5707,5016" %}}

<div class="container-corp mt-5" id="corp-desc">
<table class="table table-striped table-bordered">
<thead class="table-light">
<tr>
<th class="col-width-2">企業</th>
<th class="col-width-1">証券コード</th>
<th class="col-width-7">事業概要・主要拠点</th>
<th class="col-width-05">決算情報</th>
<th class="col-width-05">配当履歴</th>
</tr>
</thead>
<tbody class="corp-desc">
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 銅製錬・電池材料</td></tr>
<tr>
<td>住友金属鉱山</td>
<td>{{% minkabu 5713 %}}</td>
<td>住友グループ。東予製錬所（銅）・新居浜ニッケル工場・電池正極材（NCA/NMC）。海外資源開発でも世界有数{{% cite "smm_company" %}}。</td>
<td>{{% corplink "https://www.smm.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5713" %}}</td>
</tr>
<tr>
<td>三菱マテリアル</td>
<td>{{% minkabu 5711 %}}</td>
<td>直島製錬所を中核に、銅製錬と E-Scrap リサイクルで世界最大級。電子材料・加工事業も展開{{% cite "mmc_escrap" %}}。</td>
<td>{{% corplink "https://www.mmc.co.jp/corporate/ja/ir/" %}}</td>
<td>{{% dividend "tokyo" "5711" %}}</td>
</tr>
<tr>
<td>JX金属</td>
<td>{{% minkabu 5016 %}}</td>
<td>2025年3月東証プライム上場（旧JX金属、ENEOSグループから分社化）。佐賀関・小名浜・玉野の銅製錬を子会社PPCで運営。スパッタリングターゲット世界シェア6割超{{% cite "jxnmm_about" %}}。</td>
<td>{{% corplink "https://www.jx-nmm.com/" %}}</td>
<td>{{% dividend "tokyo" "5016" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 亜鉛・鉛・電子部材</td></tr>
<tr>
<td>三井金属鉱業</td>
<td>{{% minkabu 5706 %}}</td>
<td>八戸製錬・神岡鉱業（亜鉛・鉛）。極薄銅箔（マイクロシン）で世界シェア首位。EV用銅箔も主力{{% cite "mitsui_kinzoku_business" %}}。</td>
<td>{{% corplink "https://www.mitsui-kinzoku.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "5706" %}}</td>
</tr>
<tr>
<td>DOWAホールディングス</td>
<td>{{% minkabu 5714 %}}</td>
<td>小坂製錬・秋田製錬を中核に、リサイクル事業（環境管理・金属回収）と電子材料を展開。サーキュラーエコノミー型ビジネスモデル{{% cite "dowa_metalmine" %}}。</td>
<td>{{% corplink "https://hd.dowa.co.jp/ja/ir/" %}}</td>
<td>{{% dividend "tokyo" "5714" %}}</td>
</tr>
<tr>
<td>東邦亜鉛</td>
<td>{{% minkabu 5707 %}}</td>
<td>安中製錬所を中心とする亜鉛・鉛製錬。2024年12月発表の事業再生計画で亜鉛製錬撤退方針{{% cite "tohozinc_recovery" %}}。</td>
<td>{{% corplink "https://www.toho-zinc.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "5707" %}}</td>
</tr>
</tbody>
</table>
</div>

{{% references %}}
dowa_metalmine: DOWAホールディングス株式会社「製錬事業」<https://hd.dowa.co.jp/ja/product/metalmine.html>
jogmec_metal_overview: 独立行政法人エネルギー・金属鉱物資源機構（JOGMEC）「金属資源情報」<https://mric.jogmec.go.jp/>
jxnmm_about: JX金属株式会社「会社情報」<https://www.jx-nmm.com/company/>
kosaka_mine_closure: Wikipedia「小坂鉱山」<https://ja.wikipedia.org/wiki/%E5%B0%8F%E5%9D%82%E9%89%B1%E5%B1%B1>
mitsui_kinzoku_business: 三井金属鉱業株式会社「事業紹介」<https://www.mitsui-kinzoku.com/business/>
mmc_escrap: 三菱マテリアル株式会社「E-Scrap事業」<https://www.mmc.co.jp/corporate/ja/02/02-01.html>
mmc_naoshima: 三菱マテリアル株式会社 直島製錬所<https://www.mmc.co.jp/naoshima/>
ppc_company: パンパシフィック・カッパー株式会社「会社案内」<https://www.ppcu.co.jp/company/>
smm_company: 住友金属鉱山株式会社「会社情報」<https://www.smm.co.jp/corp_info/>
smm_toyo: 住友金属鉱山株式会社「東予工場」<https://www.smm.co.jp/corp_info/location/domestic/toyo/>
sumitomo_besshi: 住友グループ広報委員会「別子銅山」<https://www.sumitomo.gr.jp/history/besshidouzan/>
tohozinc_recovery: 東邦亜鉛株式会社「事業再生計画について」<https://www.toho-zinc.co.jp/news/>
{{% /references %}}
