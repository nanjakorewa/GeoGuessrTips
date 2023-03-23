---
title: "個人情報を隠す"
date: 2023-02-26
lastmod: 2023-02-26
weight: 11
draft: false
keywords: ["スタイルシート", "css"]
sections: [""]
---

ほぼ気休め程度ですが、カスタムcssを適用してメールアドレスや電話番号の表示がされる可能性があるボタンを丸ごと非表示にするために用意したcssです（2023年1月時点で有効）。

<h3 class="no-blur">Google検索の位置情報を書き換える</h3>
<img src="2023-03-21-16-59-28.png" />

Googleにログインしていると検索した際の画面表示にかなり詳細な住所が映ってしまうので注意する。
ログアウトしてもIPなどから大まかな地域が分かる可能性がある。
配信する場合はコンビニ・スーパーなど身近なワードは検索を避けるのが無難だと思う。

一応、VPNを使う or Chrome のデベロッパーツールから位置情報をまるごと書き換えることで位置を変更できる。

<img src="2023-03-21-17-01-06.png" />


<h3 class="no-blur">カスタムcss例</h3>

<pre>
@-moz-document domain("google.co.jp") {
    div.qLP7kc {
        display: none;
    }
    
    div.qWuU9c {
        display: none;
    }
    
    div.scene-footer-container {
        bottom: 3em !important;
        right: 10em !important;
        margin-top: 0;
        transform: scale(1.5, 1.5);
    }
    
    div.sW9vGe {
        width: 12em;
    }
    
    img.gb_h {
        display: none;
    }
    
    div.gb_Ef {
        display: none;
    }
    
    div.hdeJwf{
        display: none;
    }
    
    div.etWJQ {
        display: none;
    }
}
</pre>

<pre>
@-moz-document url-prefix("https://www.google.com/maps/") {
    img.gb_h {
        display: none;
    }
    
    div.gb_Ef {
        display: none;
    }
    
    div.hdeJwf{
        display: none;
    }
    
    div.etWJQ {
        display: none;
    }
}
</pre>


<h3 class="no-blur">適用前</h3>
右上からメールアドレスと他のアカウントの名前・アドレスを確認できる。
また、「モバイルデバイスに送信」などをクリックすると電話番号の一部が表示される。

![](2023-03-02-12-19-13.png)

<h3 class="no-blur">適用後</h3>
ボタン表示エリアごと削除し、場所の説明だけが表示されるようになる。

![](2023-03-02-12-16-43.png)