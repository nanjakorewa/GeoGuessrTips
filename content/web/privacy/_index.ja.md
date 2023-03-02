---
title: "個人情報を隠す"
date: 2023-02-26
lastmod: 2023-02-26
weight: 1
draft: false
keywords: ["スタイルシート", "css"]
sections: [""]
---

ほぼ気休め程度ですが、カスタムcssを適用してメールアドレスや電話番号の表示がされる可能性があるボタンを丸ごと非表示にすることで回避できます（2023年1月時点のウェブならば）。もちろんGoogleからログアウトするのも有効。

### カスタムcss例

```css
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
```

```css
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
```

### 適用前
右上からメールアドレスと他のアカウントの名前・アドレスを確認できる。
また、「モバイルデバイスに送信」などをクリックすると電話番号の一部が表示される。

![](2023-03-02-12-19-13.png)

### 適用後
ボタン表示エリアごと削除し、場所の説明だけが表示されるようになる。

![](2023-03-02-12-16-43.png)