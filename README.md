# 概要

```
hugo --minify -d docs
git add --all
git commit -m "[update] docs"
git push

```

# 置換
```
width="295" height="295"
width="295" height="295"
```

```
width="295" height="295"
width="150" height="350"
```

# ページ追記の仕方

## twitter 埋め込み

1. [https://publish.twitter.com/](https://publish.twitter.com/)か[GET statuses/oembed](https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/get-statuses-oembed) 経由で埋め込み用の HTML を取得する。
2. 埋め込み用の HTML の `<blockquote>〜</blockquote>` を`.md`　ファイルに追記する。

## youtube

youtube から発行される埋め込み用 HTML を使用する。

```
{{% youtube 0y3vBvXsMVE %}}
```

として動画を埋め込む。使用した動画は[この再生リスト](https://www.youtube.com/playlist?list=PLfaxCAFIhb8BzUAjq95298WlSUgBO0_ck)に追加する。

## pixiv

```
<a href="https://www.pixiv.net/artworks/{イラスト固有ID}" title="{イラストタイトル}">
<img class="pixiv-embed-img" alt="{イラストタイトル}" class="http-image" src="https://embed.pixiv.net/decorate.php?illust_id={イラスト固有ID}&amp;mode=sns-automator"></a>
```

と指定するることで埋め込むことができるが公式でのブログパーツの提供は終了しており正しい利用なのか不明（イラスト作成者が埋め込みで画像が公開されていることを認識しているのか不明）。
そのため１ページ目が本の表紙や目次である場合以外は埋め込みではなくテキストでのリンクを優先すること。

## speaker-deck

`{{% speakerdeck data-id data-ratio %}}` と指定する。

## その他のサイト

[ブログカード風の紹介リンクタグ作成](https://matsmoto.jp/tool/link-001/)を使用する。

複数のリンクが存在する場合は

```
{{% ahrefs %}}
    {{% ahref "ページタイトル" "https://〜〜〜" %}}  <!--通常のページ-->
    {{% ahref "ページタイトル" "https://〜〜〜" "pint" %}} <!--ピンタレスト関係のページ-->
    {{% ahref "ページタイトル" "https://〜〜〜" "clip " %}} <!--クリップスタジオ関係のページ-->
{{% /ahrefs %}}
```

などと指定する。リンク先はあらかじめ確認、特にpinterestのリンク先の画像が著作権の視点で問題無いかを確認する。

## 著作権関係の確認先

- 
