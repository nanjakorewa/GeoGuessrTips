---
title: "日本のドラッグストア業界"
subtitle: "10兆円市場の勢力図 — M&Aの歴史とウエルシア・ツルハ統合"
date: 2026-04-14
lastmod: 2026-04-19
description: "日本のドラッグストア業界を解説。商流・OTC医薬品3分類・ドミナント戦略・規模の経済など基礎から、ウエルシア・ツルハ・マツキヨココカラ・コスモス薬品・サンドラッグの売上比較、ツルハHDの創業史、ウエルシア×ツルハ経営統合やマツモトキヨシ×ココカラファイン統合などM&Aの歴史、上位10社シェアの推移と調剤薬局業界への波及、食品比率拡大・インバウンドの業界構造を整理。"
weight: 43
mapName: "japan"
showMap: false
galleryDir: "japan-drugstore"
---

## [日本](/rule/asia/japan/)のドラッグストア業界概観

<figure style="float:right;clear:right;margin:0 0 14px 22px;max-width:min(420px,45%);">
  <img src="https://commons.wikimedia.org/wiki/Special:FilePath/Welcia_Aioi.JPG?width=420" alt="ウエルシア薬局店舗" loading="lazy" style="width:100%;height:auto;border-radius:6px;display:block;" />
  <figcaption style="font-size:0.85em;color:#555;margin-top:6px;text-align:center;line-height:1.45;">ウエルシア薬局の店舗外観。ウエルシアHDはイオン傘下で業界首位、2027年にツルハHDとの経営統合により圧倒的1位グループが誕生する見通しです。<br/>画像: <a href="https://commons.wikimedia.org/wiki/File:Welcia_Aioi.JPG" target="_blank" rel="noopener noreferrer">Corpse Reviver / Wikimedia Commons (CC BY 3.0)</a></figcaption>
</figure>

[日本](/rule/asia/japan/)のドラッグストア業界は2024年度に<span style="font-weight:700">売上高10兆円を突破</span>しました。かつては医薬品と化粧品が中心でしたが、食品や日用品の取り扱い拡大により、食品スーパーやコンビニエンスストアと競合する「総合型小売業」へと変貌しています{{% cite "jacds_stats" %}}。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">10兆307億円</div><div class="stat-label">業界売上高（2024年度・前年比9.0%増）</div></div>
<div class="stat-card"><div class="stat-num">23,723店</div><div class="stat-label">総店舗数（前年比682店舗増）</div></div>
<div class="stat-card"><div class="stat-num">34.1%</div><div class="stat-label">食品構成比率（2025年時点）</div></div>
</div>

## 業界の基礎 — 商流・医薬品分類・規制

### 商流 — 卸売業者を介した三者構造

ドラッグストア業界は「製薬会社・メーカー → 医薬品卸売業者 → ドラッグストア → 消費者」という商流で動いています。処方箋医薬品の場合は、これに加えて健康保険組合などの<span style="font-weight:700">審査支払機関</span>が介在し、薬価に基づいて保険点数が支払われる構造です。OTC医薬品（Over The Counter、一般用医薬品）はレジで消費者に販売されるのに対し、処方箋医薬品は調剤併設店舗で薬剤師が調合・交付します。

{{% mermaid %}}
graph LR
  M["製薬会社<br/>メーカー"]-->W["医薬品卸売業者<br/>（メディパル・アルフレッサ・スズケン等）"]
  W-->D["ドラッグストア<br/>調剤薬局"]
  D-->C["消費者<br/>（OTC医薬品）"]
  D-->P["患者<br/>（処方箋医薬品）"]
  P-.保険点数請求.->H["審査支払機関<br/>健康保険組合等"]
  H-.薬価支払.->D
  style M fill:#e3f2fd,color:#0d47a1,stroke:#1565c0
  style W fill:#fff3e0,color:#e65100,stroke:#ef6c00
  style D fill:#c62828,color:#fff,stroke:#b71c1c,stroke-width:2px
  style C fill:#e8f5e9,color:#1b5e20,stroke:#2e7d32
  style P fill:#e8f5e9,color:#1b5e20,stroke:#2e7d32
  style H fill:#f3e5f5,color:#4a148c,stroke:#6a1b9a
{{% /mermaid %}}

### OTC医薬品の3分類 — 2009年の大規模規制改革

2009年6月の<span style="font-weight:700">改正薬事法</span>施行により、OTC医薬品はリスクの高さに応じて3つに区分され、販売方法が細分化されました。この制度改革は「薬剤師でなくても販売できる商品」の範囲を大幅に広げ、ドラッグストア業界の出店ペースを一気に加速させた歴史的転換点です{{% cite "jfsa_otc" %}}。

| 分類 | リスク | 代表例 | 販売可能者 | 備考 |
| --- | --- | --- | --- | --- |
| <span style="font-weight:700">第一類医薬品</span> | 特にリスクが高い | H2ブロッカー含有胃腸薬、ロキソニン、発毛剤（ミノキシジル）等 | 薬剤師のみ | 書面による情報提供義務 |
| <span style="font-weight:700">第二類医薬品</span> | リスクが比較的高い | 主な風邪薬、解熱鎮痛剤、胃腸鎮痛鎮けい薬等 | 薬剤師・<span style="font-weight:700">登録販売者</span> | 情報提供は努力義務 |
| <span style="font-weight:700">第三類医薬品</span> | リスクが比較的低い | ビタミン剤、整腸剤、消化薬等 | 薬剤師・登録販売者 | 情報提供義務なし |

2009年改正の最大のポイントは<span style="font-weight:700">「登録販売者」という新資格の創設</span>でした。薬剤師資格がなくても第二類・第三類医薬品を販売できるようになり、OTC市場の実に<span style="font-weight:700">9割以上</span>が薬剤師不在でも販売可能となりました。これが「ドラッグストアの食品スーパー化」を制度的に後押ししています。

## 事業特性 — なぜM&Aが定石なのか

### ドミナント戦略 — 高密度出店による物流・認知のスケール

ドラッグストア業界のM&Aが活発な最大の理由は、<span style="font-weight:700">ドミナント戦略</span>との親和性が極めて高いことです。特定エリアに店舗を集中出店することで、(1) 物流コストの低減、(2) 広告宣伝効率の向上、(3) ブランド認知の浸透、(4) 人材配置の柔軟性、という4つの効果が同時に得られます。地方チェーンを丸ごと買収するM&Aは、ドミナントを一気に完成させる最速の手段なのです。

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px;margin:24px 0;">
<div style="background:#e3f2fd;border-left:4px solid #1565c0;padding:16px;border-radius:6px;">
<strong style="color:#0d47a1;">ウエルシアHD</strong><br/>関東（東京・埼玉・千葉・茨城）に高密度。調剤併設率が業界最高水準
</div>
<div style="background:#ffebee;border-left:4px solid #c62828;padding:16px;border-radius:6px;">
<strong style="color:#b71c1c;">ツルハHD</strong><br/>北海道・東北で圧倒的シェア。M&Aで関東・関西・四国・東海を獲得
</div>
<div style="background:#e8f5e9;border-left:4px solid #2e7d32;padding:16px;border-radius:6px;">
<strong style="color:#1b5e20;">コスモス薬品</strong><br/>九州・西日本の郊外にEDLP大型店を集中出店。食品比率約58%
</div>
<div style="background:#fff3e0;border-left:4px solid #ef6c00;padding:16px;border-radius:6px;">
<strong style="color:#e65100;">クスリのアオキHD</strong><br/>北陸発、生鮮食品強化型店舗で地方ドミナントを築く
</div>
</div>

### 規模の経済とPB（プライベートブランド）戦略

店舗数が多いほど、メーカーへの仕入交渉力が強まります。さらに一定規模を超えると<span style="font-weight:700">自社PB</span>の開発・販売が経済合理的になり、粗利率を大きく押し上げます。マツキヨココカラの「matsukiyo」「くらしリズム」、ウエルシアの「Aクオリティ」、コスモス薬品の「Oh!Price」など、各社PBは売上構成比の10〜20%を占めるまで成長。M&Aで店舗数を一気に増やすことで、PB投資が一段と回収しやすくなる好循環が生まれます。

### フード＆ドラッグモデル — 集客と利益率の両立

低価格の食品で日常的に来店動機を作り、粗利率の高い医薬品・化粧品で収益を得る「<span style="font-weight:700">フード＆ドラッグ</span>」モデルが業界の基本設計になっています。食品単体では利益率が低いため、通常の食品スーパーでは実現できない価格を、医薬品側のマージンで支えられるのがドラッグストアの構造的優位性です。九州発のコスモス薬品はこの原理を突き詰め、食品比率58%の「食品スーパーに近いドラッグストア」として1兆円企業にのし上がりました。

## 売上高ランキングと業績比較

| 企業 | 売上高（億円） | 営業利益率 | 店舗数 | 強みのカテゴリ | IRハイライト |
| --- | --- | --- | --- | --- | --- |
| <span style="font-weight:700">ウエルシアHD</span> | 12,850 | 約3.0% | 3,013 | 医薬品・食品・調剤 | 調剤併設率業界最高水準（約65%）。深夜営業「ウエルカフェ」で地域密着 |
| <span style="font-weight:700">マツキヨココカラ&カンパニー</span> | 10,616 | 約7.5% | 3,499 | 化粧品・インバウンド | PB「matsukiyo」売上比率10%超。業界トップクラスの高収益体質 |
| <span style="font-weight:700">コスモス薬品</span> | 10,113 | 約4.0% | 1,452 | 食品（約58%） | 初の売上1兆円超（2024年5月期）。EDLPの規模の経済で粗利率低めを補う |
| <span style="font-weight:700">ツルハHD</span> | 8,456※ | 約4.5% | 2,658 | 家庭用雑貨・食品 | 北海道発、M&A中心の全国展開。統合後の新親会社に |
| <span style="font-weight:700">サンドラッグ</span> | 8,018 | 約5.0% | 1,498 | バランス型 | 「ダイレックス」併営。ROE・自己資本比率ともに業界上位 |
| <span style="font-weight:700">クスリのアオキHD</span> | 5,014 | 約5.5% | 1,000超 | 食品・生鮮 | 生鮮強化型大型店を展開。食品スーパーM&Aで商圏深耕 |

※ ツルハHDの2025年2月期は決算期変更に伴う9.5ヶ月の短縮決算のため、単純比較には注意が必要{{% cite "tsuruha_ir" %}}。ウエルシア・ツルハ統合後は売上高2兆3,000億円超で圧倒的首位となり、2032年2月期には<span style="font-weight:700">売上3兆円・営業利益率7%</span>を目標に掲げています{{% cite "welcia_tsuruha_integration" %}}。なお利益率はマツキヨココカラが突出しており、化粧品PBの高粗利と都市型立地、インバウンド需要が重なった構造的優位が際立ちます。

### 売上高比較チャート

<div style="max-width:750px;margin:24px auto;">
<canvas id="bar-drugstore" style="max-height:350px;"></canvas>
</div>

<script type="module">
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/+esm';
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

new Chart(document.getElementById('bar-drugstore'), {
  type:'bar',
  data:{
    labels:['ウエルシアHD','マツキヨココカラ','コスモス薬品','ツルハHD','サンドラッグ','クスリのアオキ'],
    datasets:[{
      label:'売上高（億円）',
      data:[12850,10616,10113,8456,8018,5014],
      backgroundColor:['#1565c0','#6a1b9a','#2e7d32','#c62828','#ef6c00','#00838f']
    }]
  },
  options:{
    responsive:true,
    indexAxis:'y',
    plugins:{
      legend:{display:false},
      tooltip:{callbacks:{label:function(ctx){return ' '+ctx.parsed.x.toLocaleString()+'億円';}}}
    },
    scales:{
      x:{title:{display:true,text:'売上高（億円）',font:{size:11}},beginAtZero:true,
        ticks:{callback:function(v){return v.toLocaleString();}}},
      y:{ticks:{font:{size:12}}}
    }
  }
});
</script>

## 各社の売上構成 — 同じ「ドラッグストア」でも中身は全く違う

ドラッグストア各社は同じ業態名でありながら、売上構成が大きく異なります。この違いが各社の競争戦略と利益率に直結しています。

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:24px;margin:28px 0;">
<div style="background:#fff;border-radius:10px;box-shadow:0 1px 8px rgba(0,0,0,.07);padding:20px;text-align:center;">
<strong>コスモス薬品</strong><br/><span style="font-size:.85rem;color:#666;">食品特化型</span>
<canvas id="pie-cosmos" style="max-height:240px;margin-top:8px;"></canvas>
</div>
<div style="background:#fff;border-radius:10px;box-shadow:0 1px 8px rgba(0,0,0,.07);padding:20px;text-align:center;">
<strong>マツキヨココカラ</strong><br/><span style="font-size:.85rem;color:#666;">化粧品特化型</span>
<canvas id="pie-mkcc" style="max-height:240px;margin-top:8px;"></canvas>
</div>
<div style="background:#fff;border-radius:10px;box-shadow:0 1px 8px rgba(0,0,0,.07);padding:20px;text-align:center;">
<strong>ウエルシアHD</strong><br/><span style="font-size:.85rem;color:#666;">医薬品・バランス型</span>
<canvas id="pie-welcia" style="max-height:240px;margin-top:8px;"></canvas>
</div>
</div>

<script type="module">
import { Chart, ArcElement, Tooltip, Legend, DoughnutController } from 'https://cdn.jsdelivr.net/npm/chart.js@4.4.7/+esm';
Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

var C={food:'#2e7d32',drug:'#1565c0',cosme:'#ad1457',daily:'#ef6c00',other:'#9e9e9e'};
var pieOpts={responsive:true,plugins:{
  legend:{position:'bottom',labels:{font:{size:10},padding:8,boxWidth:12}},
  tooltip:{callbacks:{label:function(ctx){
    var t=ctx.dataset.data.reduce(function(a,b){return a+b},0);
    return ' '+ctx.label+': '+(ctx.parsed/t*100).toFixed(0)+'%';
  }}}
}};

new Chart(document.getElementById('pie-cosmos'),{type:'doughnut',
  data:{labels:['食品','医薬品','化粧品','日用品','その他'],
    datasets:[{data:[58,15,8,14,5],backgroundColor:[C.food,C.drug,C.cosme,C.daily,C.other]}]},
  options:pieOpts});

new Chart(document.getElementById('pie-mkcc'),{type:'doughnut',
  data:{labels:['化粧品','医薬品','食品','日用品','その他'],
    datasets:[{data:[35,25,15,15,10],backgroundColor:[C.cosme,C.drug,C.food,C.daily,C.other]}]},
  options:pieOpts});

new Chart(document.getElementById('pie-welcia'),{type:'doughnut',
  data:{labels:['医薬品','食品','化粧品','日用品・その他'],
    datasets:[{data:[30,28,22,20],backgroundColor:[C.drug,C.food,C.cosme,C.daily]}]},
  options:pieOpts});
</script>

コスモス薬品は食品が58%を占め、もはや「食品スーパー」に近い構成です。低価格の食品で集客し、利益率の高い医薬品で稼ぐモデルです。対照的にマツキヨココカラは化粧品が35%を占め、インバウンド需要とPB化粧品の高い利益率で差別化しています。

## ツルハホールディングスの歴史

ツルハHDは[日本](/rule/asia/japan/)のドラッグストアM&A史を語る上で欠かせない企業です。北海道・旭川の一薬局から、積極的な買収戦略で全国チェーンへ成長しました{{% cite "tsuruha_history" %}}。

<div style="position:relative;padding-left:28px;margin:24px 0;border-left:3px solid #c62828;">
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#c62828;border:3px solid #fff;box-shadow:0 0 0 2px #c62828;"></div>
<span style="font-weight:700;color:#c62828;">1929年</span> — 北海道旭川市にて「鶴羽薬師堂」として創業
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#ef9a9a;border:3px solid #fff;box-shadow:0 0 0 2px #ef9a9a;"></div>
<span style="font-weight:700;color:#c62828;">1956年</span> — 屋号を「ツルハ薬局」に変更
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#ef9a9a;border:3px solid #fff;box-shadow:0 0 0 2px #ef9a9a;"></div>
<span style="font-weight:700;color:#c62828;">1975年</span> — 株式会社クスリのツルハコントロールセンターを設立（薬類の卸売り目的）
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#c62828;border:3px solid #fff;box-shadow:0 0 0 2px #c62828;"></div>
<span style="font-weight:700;color:#c62828;">1987年</span> — 東京六郷店を出店し、<span style="font-weight:700">北海道以外への初進出</span>
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#ef9a9a;border:3px solid #fff;box-shadow:0 0 0 2px #ef9a9a;"></div>
<span style="font-weight:700;color:#c62828;">1991年</span> — 商号を「株式会社ツルハ」に変更、本社を札幌市に移転
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#ef9a9a;border:3px solid #fff;box-shadow:0 0 0 2px #ef9a9a;"></div>
<span style="font-weight:700;color:#c62828;">1992年</span> — 調剤業務に参入、ドラッグストア事業を本格化
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#c62828;border:3px solid #fff;box-shadow:0 0 0 2px #c62828;"></div>
<span style="font-weight:700;color:#c62828;">2000年代〜</span> — <span style="font-weight:700">積極的なM&A</span>により全国展開を加速。くすりの福太郎、レデイ薬局などを傘下に
</div>
<div style="margin-bottom:0;">
<div style="position:absolute;left:-11px;width:19px;height:19px;border-radius:50%;background:#b71c1c;border:3px solid #fff;box-shadow:0 0 0 2px #b71c1c;"></div>
<span style="font-weight:700;color:#b71c1c;font-size:1.05em;">2025年12月</span> — <span style="font-weight:700">ウエルシアHDとの経営統合が実現。売上高2.3兆円の日本最大チェーン誕生</span>
</div>
</div>

## M&Aの歴史 — 業界再編の歩み

ドラッグストア業界は[日本](/rule/asia/japan/)の小売業の中でもM&Aが最も活発に行われてきた業界の一つです。まず主要な再編の時系列を振り返ります。

### 業界シェアの推移 — 群雄割拠から寡占化へ

1990年代までのドラッグストア業界は、地域ごとに中小チェーンが乱立する<span style="font-weight:700">群雄割拠</span>状態でした。しかし2000年代以降のM&A加速と2009年の薬事法改正を経て、急速な寡占化が進行。上位10社の市場シェアは以下のように推移しました{{% cite "jacds_stats" %}}。

<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:28px 0;text-align:center;">
<div style="background:linear-gradient(135deg,#e3f2fd 0%,#bbdefb 100%);padding:20px 12px;border-radius:8px;">
<div style="font-size:.85rem;color:#0d47a1;">2004年</div>
<div style="font-size:2rem;font-weight:700;color:#0d47a1;">約25%</div>
<div style="font-size:.85rem;color:#0d47a1;">上位10社合計シェア<br/>（群雄割拠）</div>
</div>
<div style="background:linear-gradient(135deg,#fff3e0 0%,#ffe0b2 100%);padding:20px 12px;border-radius:8px;">
<div style="font-size:.85rem;color:#e65100;">2009年</div>
<div style="font-size:2rem;font-weight:700;color:#e65100;">約44%</div>
<div style="font-size:.85rem;color:#e65100;">薬事法改正・登録販売者制度<br/>（寡占化進行）</div>
</div>
<div style="background:linear-gradient(135deg,#ffebee 0%,#ffcdd2 100%);padding:20px 12px;border-radius:8px;">
<div style="font-size:.85rem;color:#b71c1c;">2018年</div>
<div style="font-size:2rem;font-weight:700;color:#b71c1c;">70%超</div>
<div style="font-size:.85rem;color:#b71c1c;">大手による市場支配<br/>（M&A主戦場化）</div>
</div>
</div>

わずか14年間で上位10社のシェアが<span style="font-weight:700">25% → 70%超</span>へ、約3倍に膨張しました。これは小売業の中でも突出した寡占化スピードです。背景には、2009年改正薬事法で登録販売者制度が創設され、薬剤師不在でもOTC医薬品の9割が販売可能になったこと、さらに食品・日用品を取り込む「フード＆ドラッグ」モデルの浸透があります。

### 22年ぶりの首位交代 — マツモトキヨシの転落

この寡占化の過程で象徴的だったのが、長らく業界1位に君臨していた<span style="font-weight:700">マツモトキヨシ</span>の転落です。都市型・化粧品特化・PB戦略で知られたマツキヨは、2015年度まで首位を守り続けましたが、M&Aによる規模拡大を急いだ後発組に一気に抜かれました。

| 年度 | 業界首位 | マツキヨ順位 | 備考 |
| --- | --- | --- | --- |
| 〜2015年 | <span style="font-weight:700">マツモトキヨシ</span> | <span style="font-weight:700">1位</span> | 22年連続で首位を維持 |
| 2016年 | ウエルシアHD | 3位 | ウエルシアがイオン支援で急拡大、首位陥落 |
| 2017年 | ウエルシアHD | 3位 | ツルハHDが杏林堂を買収し東海圏進出 |
| 2018年 | ウエルシアHD | <span style="font-weight:700">4位</span> | コスモス薬品にも抜かれ4位へ |
| 2021年 | ウエルシアHD | 2位 | ココカラ統合で売上1兆円超、2位に再浮上 |

マツキヨの転落の本質は「M&Aによる規模拡大を急ぐ競合」と「自力出店・オーガニック成長」の戦略の違いにあります。マツキヨは2021年にココカラファインと統合してようやく反撃に出ましたが、その時点でウエルシア・ツルハの両輪による背後のイオン包囲網が既に動き出していました。

### 主要M&Aの年表

<div style="position:relative;padding-left:28px;margin:24px 0;border-left:3px solid #6a1b9a;">
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#ce93d8;border:3px solid #fff;box-shadow:0 0 0 2px #ce93d8;"></div>
<span style="font-weight:700;color:#6a1b9a;">2006年</span> — ツルハHDが<span style="font-weight:700">くすりの福太郎</span>を子会社化。関東圏への本格進出
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#ce93d8;border:3px solid #fff;box-shadow:0 0 0 2px #ce93d8;"></div>
<span style="font-weight:700;color:#6a1b9a;">2012年</span> — ツルハHDが<span style="font-weight:700">レデイ薬局</span>（四国最大手）を子会社化。全国チェーンへ
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#ce93d8;border:3px solid #fff;box-shadow:0 0 0 2px #ce93d8;"></div>
<span style="font-weight:700;color:#6a1b9a;">2017年</span> — ツルハHDが<span style="font-weight:700">杏林堂薬局</span>（静岡県首位）を子会社化。東海圏にも足掛かり
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-11px;width:19px;height:19px;border-radius:50%;background:#6a1b9a;border:3px solid #fff;box-shadow:0 0 0 2px #6a1b9a;"></div>
<span style="font-weight:700;color:#6a1b9a;font-size:1.05em;">2021年10月</span> — <span style="font-weight:700">マツモトキヨシHD × ココカラファイン</span>が経営統合。「マツキヨココカラ&カンパニー」発足（売上1兆円超）
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#ce93d8;border:3px solid #fff;box-shadow:0 0 0 2px #ce93d8;"></div>
<span style="font-weight:700;color:#6a1b9a;">2023年</span> — イオンがツルハHD株を取得開始。ウエルシアとの統合構想が浮上
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#ce93d8;border:3px solid #fff;box-shadow:0 0 0 2px #ce93d8;"></div>
<span style="font-weight:700;color:#6a1b9a;">2024年</span> — スギHDが<span style="font-weight:700">I&H株式会社</span>（阪神調剤薬局系）を買収し関西圏を強化
</div>
<div style="margin-bottom:0;">
<div style="position:absolute;left:-11px;width:19px;height:19px;border-radius:50%;background:#b71c1c;border:3px solid #fff;box-shadow:0 0 0 2px #b71c1c;"></div>
<span style="font-weight:700;color:#b71c1c;font-size:1.05em;">2025年12月</span> — <span style="font-weight:700">ウエルシアHD × ツルハHD</span> 経営統合完了。売上2.3兆円・5,659店舗の日本最大チェーン誕生
</div>
</div>

### 業界再編の構図

{{% mermaid %}}
graph TB
  subgraph イオングループ
    A["イオン<br/>（親会社）"]-->B["ウエルシアHD<br/>売上1.29兆円"]
    A-->C["ツルハHD<br/>売上0.85兆円"]
    B-->|"2025年12月<br/>経営統合"|D["新・ツルハHD<br/>売上2.3兆円<br/>5,659店舗"]
    C-->D
  end
  subgraph 独立系
    E["マツキヨHD"]-->|"2021年10月<br/>経営統合"|G["マツキヨココカラ<br/>売上1.06兆円<br/>3,499店舗"]
    F["ココカラファイン"]-->G
    H["コスモス薬品<br/>売上1.01兆円<br/>EDLP路線"]
    I["サンドラッグ<br/>売上0.80兆円"]
  end
  style D fill:#c62828,color:#fff,stroke:#b71c1c,stroke-width:2px
  style G fill:#6a1b9a,color:#fff,stroke:#4a148c,stroke-width:2px
  style A fill:#1565c0,color:#fff,stroke:#0d47a1,stroke-width:2px
  style H fill:#2e7d32,color:#fff,stroke:#1b5e20
  style I fill:#ef6c00,color:#fff,stroke:#e65100
  style B fill:#e3f2fd,color:#0d47a1,stroke:#1565c0
  style C fill:#ffebee,color:#b71c1c,stroke:#c62828
  style E fill:#f3e5f5,color:#4a148c,stroke:#6a1b9a
  style F fill:#f3e5f5,color:#4a148c,stroke:#6a1b9a
{{% /mermaid %}}

### ウエルシアHDの成立 — 1997年の「原点」

業界最大手ウエルシアHDの歴史は<span style="font-weight:700">1997年の合併</span>に始まります。茨城県を地盤とした「グリーンクロス」と、千葉県を地盤とした「コア」という2つの地域チェーンが合併し、「グリーンクロス・コア」（後のウエルシア）が誕生しました。この合併により関東圏広域をカバーする基盤ができ、その後のイオングループ入り（2000年代）、調剤併設路線の確立、度重なるM&Aにつながっていきます。

<div style="position:relative;padding-left:28px;margin:24px 0;border-left:3px solid #1565c0;">
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-11px;width:19px;height:19px;border-radius:50%;background:#1565c0;border:3px solid #fff;box-shadow:0 0 0 2px #1565c0;"></div>
<span style="font-weight:700;color:#0d47a1;font-size:1.05em;">1997年</span> — <span style="font-weight:700">グリーンクロス × コア</span> 合併。グリーンクロス・コア発足（後のウエルシア）
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#90caf9;border:3px solid #fff;box-shadow:0 0 0 2px #90caf9;"></div>
<span style="font-weight:700;color:#0d47a1;">2000年代</span> — イオングループの支援企業に。調剤併設店舗の拡大戦略を確立
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#90caf9;border:3px solid #fff;box-shadow:0 0 0 2px #90caf9;"></div>
<span style="font-weight:700;color:#0d47a1;">2008年</span> — <span style="font-weight:700">寺島薬局、高田薬局</span>等を相次いで統合。関東支配を強化
</div>
<div style="margin-bottom:18px;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#90caf9;border:3px solid #fff;box-shadow:0 0 0 2px #90caf9;"></div>
<span style="font-weight:700;color:#0d47a1;">2015年</span> — CFSコーポレーション（ハックドラッグ運営）を子会社化、神奈川・静岡に拡大
</div>
<div style="margin-bottom:0;">
<div style="position:absolute;left:-9px;width:15px;height:15px;border-radius:50%;background:#90caf9;border:3px solid #fff;box-shadow:0 0 0 2px #90caf9;"></div>
<span style="font-weight:700;color:#0d47a1;">2016年</span> — <span style="font-weight:700">マツキヨを抜いて業界首位に</span>。調剤併設率・深夜営業「ウエルカフェ」など独自路線で成長
</div>
</div>

スギHDも同様にM&Aを軸とした成長戦略を採っており、2024年にはI&H株式会社（阪神調剤薬局系）を買収して関西圏の調剤機能を一気に強化しました。業界上位のほぼ全てが「地場チェーンの連続買収」によって現在の地位を築いており、オーガニック成長一本で勝負したマツキヨとの戦略差が、順位の差に直結した構図です。

### ウエルシア × ツルハ 経営統合（2025年）

業界最大のM&A。2025年4月に最終契約が締結され、<span style="font-weight:700">12月1日に統合が実現</span>しました。ツルハHDが親会社として上場を維持し、ウエルシアHDがその完全子会社となる形です（ウエルシアは2025年11月27日に上場廃止）{{% cite "welcia_tsuruha_integration" %}}。

統合後の売上高は2兆3,124億円、国内店舗数5,659店舗で[日本](/rule/asia/japan/)最大のドラッグストアチェーンが誕生しました。背景にはイオングループの戦略があります。イオンは以前からウエルシアHDの支援企業でしたが、2027年までにツルハHDを連結子会社に組み込む計画です。両社のIR資料では<span style="font-weight:700">3年間で500億円のシナジー創出</span>（物流共通化・PB統合・仕入共同化）と、2032年2月期に<span style="font-weight:700">売上3兆円・営業利益率7%</span>を目標として掲げています。

<div class="stat-grid">
<div class="stat-card"><div class="stat-num">2.3兆円</div><div class="stat-label">統合後売上高</div></div>
<div class="stat-card"><div class="stat-num">5,659店</div><div class="stat-label">統合後国内店舗数</div></div>
<div class="stat-card"><div class="stat-num">500億円</div><div class="stat-label">3年間のシナジー目標</div></div>
<div class="stat-card"><div class="stat-num">3兆円</div><div class="stat-label">2032年2月期の売上目標</div></div>
</div>

### マツモトキヨシ × ココカラファイン 統合（2021年）

2021年10月に経営統合し「マツキヨココカラ&カンパニー」が発足しました。売上高1兆円超・店舗数3,400店超の企業が誕生し、統合後は5つの店舗フォーマット（スタンダード、郊外型、都市型フラッグシップ、matsukiyoLAB、グローバル）に再構築。化粧品カテゴリにおけるPB（プライベートブランド）戦略でも差別化を図っています{{% cite "mkcc_ir" %}}。

### その他の主要なM&A

スギHDはI&H株式会社を買収し関西圏を強化、薬日本堂の100%子会社化も実施しました。業界全体では企業数が減少する一方で店舗数は増加しており、大手への集約が進行しています。

## 業界の構造的特徴

### 食品比率の拡大 — スーパーとの境界線が曖昧に

ドラッグストアの食品売上構成比は2025年時点で<span style="font-weight:700">34.1%</span>に達しています。特にコスモス薬品（約58%）やクスリのアオキ（生鮮強化型店舗を展開）は、もはや食品スーパーと直接競合する存在です。低価格の食品で集客し、利益率の高い医薬品・化粧品で収益を確保する「<span style="font-weight:700">フード＆ドラッグ</span>」モデルが業界の成長を支えてきました。

### 調剤併設の拡大 — 調剤薬局業界への波及効果

調剤薬局機能を備えた店舗が増加傾向にあり、特にウエルシアHDは調剤併設率の高さが特徴です。「かかりつけ薬局」としての機能強化は差別化要因となりますが、薬剤師不足が新規出店のボトルネックになっています。

さらに、この動きは専業の<span style="font-weight:700">調剤薬局業界</span>への脅威となっています。調剤薬局専業の最大手はアイングループHD（<span style="font-weight:700">約1,200店舗、売上約3,300億円</span>）ですが、ドラッグストア各社の調剤併設店舗を合算すると、店舗数・売上ともに圧倒します。ドラッグストアは「フード＆ドラッグで集客 → 調剤も併せて処方」という集客導線の強さがあり、専業調剤薬局にとっては構造的に不利な戦いになっています。

| 企業 | 業態 | 調剤併設店舗数 | 調剤売上（概算） |
| --- | --- | --- | --- |
| <span style="font-weight:700">アイングループHD</span> | 調剤専業最大手 | 約1,200店 | 約3,300億円 |
| <span style="font-weight:700">スギHD</span> | ドラッグストア | 833店（調剤併設） | 約910億円 |
| <span style="font-weight:700">マツキヨココカラ</span> | ドラッグストア | 289店（調剤併設） | 約457億円 |
| <span style="font-weight:700">ウエルシアHD</span> | ドラッグストア | 1,900店超（業界最高水準の併設率） | 非開示（大手級） |

「門前薬局（病院の近くに立地する調剤薬局）」から「<span style="font-weight:700">かかりつけ薬局</span>」への政策誘導（服薬情報の一元管理、在宅医療対応）も進んでおり、その受け皿としてドラッグストアが選ばれやすい環境になっています。結果として専業調剤薬局は、M&Aで大手ドラッグストアに吸収される構図（例：スギHDによるI&H買収）が加速しています。

### インバウンド需要

訪日外国人旅行者の増加により、化粧品や総合感冒薬（風邪薬）などの需要が拡大しています。都市型店舗を多く持つマツキヨココカラがこの恩恵を最も強く受けています。

## 業界の課題

### オーバーストア問題

大手チェーンの積極出店により同業他社との隣接が増加し、激しい価格競争が展開されています。都市部では出店競争が一巡し、新規出店よりも既存店舗の収益性向上を重視する流れが強まっています。

### 人手不足

限られた人員で接客、レジ、商品補充、清掃など多岐にわたる業務を担当する必要があり、特に薬剤師不足は深刻です。薬剤師の確保が困難な地域では調剤併設型の新規出店が制約を受けています。

### 異業種との競合激化

コンビニエンスストアのOTC薬（市販薬）販売解禁や、ECサイトの医薬品受け取り窓口機能の強化により、競争環境が変化しています。食品分野ではスーパーマーケットとの価格競争も続いています。

## 今後の展望 — 「3兆円チェーン vs 1兆円チェーン群」の時代へ

{{% mermaid %}}
graph LR
  A["統合前<br/>群雄割拠<br/>（2024年）"]-->B["ウエルシア×ツルハ統合<br/>2.3兆円の巨人誕生<br/>（2025年）"]
  B-->C["2032年目標<br/>売上3兆円<br/>営業利益率7%"]
  B-->D["さらなる再々編？<br/>中堅チェーンの統合"]
  style A fill:#f3f4f6,color:#1f2937,stroke:#9ca3af
  style B fill:#c62828,color:#fff,stroke:#b71c1c,stroke-width:2px
  style C fill:#1565c0,color:#fff,stroke:#0d47a1,stroke-width:2px
  style D fill:#fff3e0,color:#e65100,stroke:#ef6c00
{{% /mermaid %}}

ウエルシア・ツルハ統合の実現により、業界は「3兆円チェーン vs 1兆円チェーン群」という新たな競争構図に入りました。マツキヨココカラはインバウンド・化粧品特化で差別化を図り、コスモス薬品は独自のEDLP路線を堅持。一方で、業界全体の成長が鈍化し始める中で、さらなる再編（再々編）が動き出す可能性も指摘されています。人口減少局面における出店戦略の転換、デジタル化への対応、海外展開の可能性など、各社の中長期戦略が問われる局面に入っています。

## 関連企業の時価総額マップ

ドラッグストア業界に関連する主要上場企業（[日本](/rule/asia/japan/)）の時価総額を可視化しています。ドラッグストアチェーン本体に加え、調剤薬局・医薬品卸・OTC医薬品メーカー・化粧品メーカーまで、業界バリューチェーン全体を一覧できます。なお、ウエルシアHD（旧3141）は2025年11月27日にツルハHDとの経営統合に伴い上場廃止となったため本マップには含まれていません（統合後の本体はツルハHD 3391）。

{{% corp-treemap "3391,3088,3349,9989,3549,7649,3148,7679,9267,9627,3341,7459,2784,9987,8129,4967,4527,4523,4911,4922,4452,4912,8113" %}}

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
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ ドラッグストアチェーン</td></tr>
<tr>
<td>ツルハホールディングス</td>
<td>{{% minkabu 3391 %}}</td>
<td>1929年北海道旭川創業。M&Aで全国展開を図ったドラッグストアM&A史の中心企業。<span style="font-weight:700">2025年12月1日にウエルシアHDと経営統合</span>し、統合後の売上高2兆3,124億円・国内店舗5,659店舗の日本最大チェーンに。イオンが2027年までに連結子会社化する計画で、2032年2月期売上3兆円・営業利益率7%を目標に掲げる。</td>
<td>{{% corplink "https://www.tsuruha-hd.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "3391" %}}</td>
</tr>
<tr>
<td>マツキヨココカラ&カンパニー</td>
<td>{{% minkabu 3088 %}}</td>
<td>2021年10月にマツモトキヨシHDとココカラファインが経営統合して発足。2025年3月期売上高1兆616億円・店舗3,499店。都市型・化粧品特化型で<span style="font-weight:700">インバウンド需要</span>の恩恵を最も受ける。PBブランド「matsukiyo」「matsukiyoLAB」「くらしリズム」を軸に高粗利モデル。5つの店舗フォーマット（スタンダード・郊外型・都市型フラッグシップ・matsukiyoLAB・グローバル）で展開。</td>
<td>{{% corplink "https://www.matsukiyococokara.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3088" %}}</td>
</tr>
<tr>
<td>コスモス薬品</td>
<td>{{% minkabu 3349 %}}</td>
<td>福岡県発の食品特化型ドラッグストア。<span style="font-weight:700">食品構成比約58%</span>の「ほぼ食品スーパー」モデルで、2024年5月期に業界初の売上高1兆円超え（1兆113億円）を達成。EDLP（Everyday Low Price）戦略で九州・西日本の郊外に大型店を集中出店し、標準店は1,000m²超・生鮮食品も取扱う。M&Aに頼らず自前出店で成長した稀有な企業。</td>
<td>{{% corplink "https://www.cosmospharmacy.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "3349" %}}</td>
</tr>
<tr>
<td>サンドラッグ</td>
<td>{{% minkabu 9989 %}}</td>
<td>バランス型ドラッグストアの代表格。2024年3月期売上高8,018億円。ドラッグストア事業に加え、九州地盤のディスカウント業態「<span style="font-weight:700">ダイレックス</span>」を展開し、食品・日用品の低価格販売でも強みを持つ二業態ハイブリッドが特徴。ROEが業界上位で、株主還元姿勢も堅実。</td>
<td>{{% corplink "https://www.sundrug.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9989" %}}</td>
</tr>
<tr>
<td>クスリのアオキホールディングス</td>
<td>{{% minkabu 3549 %}}</td>
<td>北陸（石川県）発、食品強化型ドラッグストア。売上高5,014億円（2024年5月期）。<span style="font-weight:700">生鮮食品強化型の大型店</span>を開発し、青果・精肉・鮮魚を取り扱う店舗を拡大中。M&Aとオーガニック出店の両輪で地方ドミナントを築き、首都圏・関西にも進出を加速。食品スーパーM&Aで北陸・東海エリアを固める戦略。</td>
<td>{{% corplink "https://www.ir.kusuri-aoki-hd.co.jp/ja/Top.html" %}}</td>
<td>{{% dividend "tokyo" "3549" %}}</td>
</tr>
<tr>
<td>スギホールディングス</td>
<td>{{% minkabu 7649 %}}</td>
<td>愛知県発、<span style="font-weight:700">調剤併設率が業界最高水準</span>のドラッグストア。調剤併設店舗833店・調剤売上約910億円（2024年2月期）。2024年にI&H株式会社（阪神調剤薬局系）を買収し関西圏の調剤機能を強化、薬日本堂も100%子会社化。地域包括ケアへの貢献を経営戦略の柱に据える。</td>
<td>{{% corplink "https://www.sugi-hd.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7649" %}}</td>
</tr>
<tr>
<td>クリエイトSDホールディングス</td>
<td>{{% minkabu 3148 %}}</td>
<td>神奈川県横浜市に本社を置く、南関東（神奈川・東京・静岡）地盤のドラッグストア。調剤併設率が高く、医薬品・日用品・化粧品・食品のバランス型。M&Aより自前出店・地元密着型経営を重視する独立系中堅。</td>
<td>{{% corplink "https://www.createsdhd.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "3148" %}}</td>
</tr>
<tr>
<td>薬王堂ホールディングス</td>
<td>{{% minkabu 7679 %}}</td>
<td>岩手県発、東北6県を中心に小商圏型ドラッグストアを展開。小型店モデル（売場面積330m²前後）で人口5,000人規模の小商圏にも出店可能な<span style="font-weight:700">過疎地対応型</span>のビジネスモデルが特徴。地方ドミナント戦略の極地で、コンビニ跡地活用などユニークな出店も行う。</td>
<td>{{% corplink "https://www.yakuodo-hd.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7679" %}}</td>
</tr>
<tr>
<td>Genky DrugStores</td>
<td>{{% minkabu 9267 %}}</td>
<td>福井県坂井市本社。北陸・中京エリアで食品強化型ドラッグストアを展開。食品比率が高く、コスモス薬品と同じ<span style="font-weight:700">フード&ドラッグ路線</span>を取る。自社PBや低価格訴求の棚づくりで成長し、東証プライム上場企業として地方ドラッグストア再編の焦点にもなり得る。</td>
<td>{{% corplink "https://www.genky.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9267" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 調剤薬局（ドラッグストアの最大のライバル・M&Aターゲット）</td></tr>
<tr>
<td>アインホールディングス</td>
<td>{{% minkabu 9627 %}}</td>
<td>調剤薬局専業の<span style="font-weight:700">最大手</span>（約1,200店舗・売上約3,300億円）。門前薬局中心から「かかりつけ薬局」への転換を進める。子会社「アインズ&トルペ」で化粧品小売にも展開。ドラッグストア各社の調剤併設攻勢により構造的逆風にさらされ、M&Aによる再編主導側に回っている。</td>
<td>{{% corplink "https://www.ainj.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9627" %}}</td>
</tr>
<tr>
<td>日本調剤</td>
<td>{{% minkabu 3341 %}}</td>
<td>調剤薬局業界2位級。約700店を展開し、処方箋受取を主軸とする。子会社「日本ジェネリック」で後発医薬品製造も手掛ける垂直統合型。薬剤師採用に強みを持ち、在宅医療・医薬品情報提供サービスを拡大。ドラッグストアとの競合激化で事業戦略の見直しが続く。</td>
<td>{{% corplink "https://www.nicho.co.jp/corporate/ir/" %}}</td>
<td>{{% dividend "tokyo" "3341" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 医薬品卸（ドラッグストアへのサプライヤー）</td></tr>
<tr>
<td>メディパルホールディングス</td>
<td>{{% minkabu 7459 %}}</td>
<td>医薬品卸最大手。中核子会社メディセオがドラッグストア各社への医療用・OTC医薬品供給で圧倒的シェアを持つ。化粧品・日用品卸（Paltac）も傘下。ドラッグストア業界の寡占化進展で、交渉力が相対的に低下する構造的課題を抱える。</td>
<td>{{% corplink "https://www.medipal.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "7459" %}}</td>
</tr>
<tr>
<td>アルフレッサホールディングス</td>
<td>{{% minkabu 2784 %}}</td>
<td>医薬品卸業界2位。首都圏・関西で強く、<span style="font-weight:700">セルフメディケーション</span>（OTC・健康食品）事業にも注力。ドラッグストア向け供給チャネルが主力で、調剤薬局・病院向けとの三面展開。物流効率化とDX投資で利益率改善を図る。</td>
<td>{{% corplink "https://www.alfresa.com/ir/" %}}</td>
<td>{{% dividend "tokyo" "2784" %}}</td>
</tr>
<tr>
<td>スズケン</td>
<td>{{% minkabu 9987 %}}</td>
<td>医薬品卸業界3位。名古屋本社で中部地盤が強い。子会社ジェネリック医薬品メーカー「三和化学研究所」を傘下に持ち、糖尿病領域で独自ポジション。ドラッグストア・調剤併設店舗への卸売と、地域医療ネットワークへの供給が両輪。</td>
<td>{{% corplink "https://www.suzuken.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "9987" %}}</td>
</tr>
<tr>
<td>東邦ホールディングス</td>
<td>{{% minkabu 8129 %}}</td>
<td>医薬品卸業界4位。首都圏・西日本を中心に、卸子会社「東邦薬品」と調剤薬局子会社「共創未来ファーマ」の<span style="font-weight:700">卸×調剤のハイブリッド</span>戦略が特徴。ドラッグストアチェーンによる調剤参入の脅威に対し、自社で調剤薬局網も保有するユニークなポジション。</td>
<td>{{% corplink "https://ir.tohohd.co.jp/en.html" %}}</td>
<td>{{% dividend "tokyo" "8129" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ OTC医薬品メーカー</td></tr>
<tr>
<td>小林製薬</td>
<td>{{% minkabu 4967 %}}</td>
<td>「熱さまシート」「ブルーレット」「サワデー」「ケシミン」など<span style="font-weight:700">ニッチ市場で圧倒的シェア</span>を持つブランドを多数保有。ドラッグストア棚で高い利益貢献を行うメーカーで、新商品投入力が特徴。2024年の紅麹問題を経てガバナンス改革を進めており、回復基調にある。</td>
<td>{{% corplink "https://www.kobayashi.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4967" %}}</td>
</tr>
<tr>
<td>ロート製薬</td>
<td>{{% minkabu 4527 %}}</td>
<td>目薬（Vロートシリーズ）で国内首位、スキンケア「<span style="font-weight:700">肌ラボ</span>」「メンソレータム」が主力。ドラッグストア棚のスキンケア・目薬カテゴリで高いシェア。海外売上比率も高く、アジア市場で強み。OTCメーカーの中でも「攻めの新商品展開」で知られる存在。</td>
<td>{{% corplink "https://www.rohto.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4527" %}}</td>
</tr>
<tr>
<td>エーザイ</td>
<td>{{% minkabu 4523 %}}</td>
<td>医療用医薬品（認知症治療薬レカネマブ等）が主軸だが、OTCでも「チョコラBB」「サクロン」等のロングセラーを保有。ドラッグストア棚の定番ビタミン剤・胃腸薬カテゴリで安定した売上を構築。処方箋医薬品中心だが、セルフメディケーション比率拡大を戦略的に追求。</td>
<td>{{% corplink "https://www.eisai.co.jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4523" %}}</td>
</tr>
<tr><td colspan="5" style="background:#f1f5f9;font-weight:700;">■ 化粧品・日用品メーカー（ドラッグストア棚の主要サプライヤー）</td></tr>
<tr>
<td>資生堂</td>
<td>{{% minkabu 4911 %}}</td>
<td>化粧品業界首位（国内）。ドラッグストア向けは「<span style="font-weight:700">エリクシール</span>」「ANESSA」「TSUBAKI」「洗顔専科」等を供給。プレステージは百貨店・自社EC中心だが、マス市場向けはマツキヨココカラをはじめとするドラッグストアへの供給が主力チャネル。インバウンド需要に大きく影響を受ける企業。</td>
<td>{{% corplink "https://corp.shiseido.com/jp/ir/" %}}</td>
<td>{{% dividend "tokyo" "4911" %}}</td>
</tr>
<tr>
<td>コーセー</td>
<td>{{% minkabu 4922 %}}</td>
<td>化粧品大手。「<span style="font-weight:700">雪肌精</span>」「FASIO」「ヴィセ」などのドラッグストア向けブランドを多数保有。プレステージの「コスメデコルテ」と合わせた二軸戦略。マツキヨココカラとの共同開発商品や、店頭カウンセリング連携など、小売との距離が近いのが特徴。</td>
<td>{{% corplink "https://www.kose.co.jp/jp/ja/ir/" %}}</td>
<td>{{% dividend "tokyo" "4922" %}}</td>
</tr>
<tr>
<td>花王</td>
<td>{{% minkabu 4452 %}}</td>
<td>日用品・化粧品の最大手。「メリーズ」「ビオレ」「アタック」「ソフィーナ」「<span style="font-weight:700">キュレル</span>」等、ドラッグストア棚で最大の売場面積を占めるメーカー。PB（プライベートブランド）との共存戦略が課題で、ブランド力と棚取り力が業界随一。</td>
<td>{{% corplink "https://www.kao.com/global/en/investor-relations/" %}}</td>
<td>{{% dividend "tokyo" "4452" %}}</td>
</tr>
<tr>
<td>ライオン</td>
<td>{{% minkabu 4912 %}}</td>
<td>歯磨き粉・オーラルケアで国内首位（「<span style="font-weight:700">クリニカ</span>」「ビトイーン」「システマ」）、ハンドソープ「キレイキレイ」も主力。ドラッグストアのオーラルケア・ハンドケア・洗剤棚の中核。OTC医薬品「バファリン」「ストッパ」も保有し、化学・日用品・OTCの三層構成。</td>
<td>{{% corplink "https://www.lion.co.jp/ja/ir/" %}}</td>
<td>{{% dividend "tokyo" "4912" %}}</td>
</tr>
<tr>
<td>ユニ・チャーム</td>
<td>{{% minkabu 8113 %}}</td>
<td>紙おむつ（「ムーニー」「マミーポコ」）・生理用品（「ソフィ」）・ウェットティッシュ・ペット用品で国内首位。ドラッグストアの<span style="font-weight:700">ベビー・サニタリー・ペット棚</span>の中核供給企業。アジア・中東での海外展開も加速しており、インバウンド・海外観光客による「爆買い」対象にもなってきた商品ラインを多数保有。</td>
<td>{{% corplink "https://www.unicharm.co.jp/ja/ir.html" %}}</td>
<td>{{% dividend "tokyo" "8113" %}}</td>
</tr>
</tbody>
</table>
</div>


{{% references %}}
jacds_stats: 日本チェーンドラッグストア協会「ドラッグストア実態調査」<https://www.jacds.gr.jp/data/>
jfsa_otc: 厚生労働省「一般用医薬品のリスク区分について」<https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/iyakuhin/ippanyou/index.html>
tsuruha_ir: ツルハHD 2025年2月期決算短信<https://www.tsuruha-hd.co.jp/ir/>
tsuruha_history: ツルハHD 沿革<https://www.tsuruha-hd.co.jp/company/history/>
welcia_tsuruha_integration: ウエルシア・ツルハ経営統合に関するプレスリリース（2025年4月）<https://www.aeon.info/>
mkcc_ir: マツキヨココカラ&カンパニー IR情報<https://www.matsukiyococokara.com/ir/>
{{% /references %}}
