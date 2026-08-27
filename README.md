
# [GeoGuessrのめも](https://geopinning.space/)

ジオゲッサーのめもを記録するリポジトリ。[GeoGuessrのめも](https://geopinning.space/)のソースコードと画像です。

## 国と地域の判定めも

国と地域を当てるためのヒントをめもしたり、関連サイトへのリンクをまとめたりするページです。以下はページ例です。

- [スウェーデン](https://geopinning.space/rule/europe/finland/)
- [コロンビア](https://geopinning.space/rule/cs_america/colombia/)
- [アメリカ](https://geopinning.space/rule/n_america/usa/)

## リポジトリ内の画像について

ナンバープレートは基本的にWikimediaより引用しています。各ページ上に表示されている出典を確認してください。
標識について、ウェブ上に出典の記載がないものはCC0・パブリックドメイン・自分が編集し自作した画像のいずれかです。各国の名前が付いたフォルダ以下の「r」というフォルダ以下に標識の画像があります。

**保存先のフォルダの例**

- [スウェーデンの標識：content/rule/europe/sweden/r](https://github.com/nanjakorewa/GeoGuessrTips/tree/main/content/rule/europe/sweden/r)
- [香港の標識：content/rule/asia/hongkong/r](https://github.com/nanjakorewa/GeoGuessrTips/tree/main/content/rule/asia/hongkong/r)
- [カナダの標識：content/rule/n_america/canada/r](https://github.com/nanjakorewa/GeoGuessrTips/tree/main/content/rule/n_america/canada/r)

## ヒーロー地図（静的SVG・外部タイル不使用）

かつてヒーロー地図は Leaflet + CARTO/OSM タイルで描画していたが、外部タイルサーバーの
レート制限を受けるため全面的に廃止した。現在はリポジトリ内で生成済みの境界 SVG に
等距円筒図法の投影パラメータで緯度経度ピンを重ねており、ランタイムの外部リクエストはゼロ。

- 表示コンポーネント: `src/components/StaticGeoMap.astro`（ビルド時に SVG をインライン展開）
- 地図の解決ロジック: `src/data/hero-map.ts`（都道府県 / 日本全図 / 国 / 局所エリア / world を自動選択。
  該当する SVG がない国は「主要スポット一覧」パネルにフォールバック）
- 投影パラメータ:
  - 都道府県: `src/data/pref-projections.json` ← `scripts/compute-pref-projections.cjs`
    （`c:/tmp/jp_muni` の N03 キャッシュから再計算し、既存 SVG と突き合わせ検証）
  - 国: `src/data/quiz-cities/{country}.ts` の `{COUNTRY}_PROJECTION`
  - 局所エリア（コンビナート等）: `src/data/area-projections.json` ← `scripts/generate-area-maps.cjs`
- インドネシア kabupaten クイズ（`PinQuizPage.astro`）も Leaflet を廃止し、
  `public/maps/indonesia-adm2.svg`（`scripts/generate-indonesia-adm2-svg.cjs` で生成）を
  背景に自前のパン/ズームで動く
- ピン位置の検証: `node scripts/verify-pref-pins.cjs`
  （県庁所在地ピンが県庁所在地の自治体ポリゴンに入るかをレイキャスティングで確認）

frontmatter の `mapProvider: "osm"` は歴史的経緯の値で、「ヒーロー地図を表示する」の意味。
`heroMapArea: "<slug>"` を指定すると `public/maps/areas/<slug>.svg` の局所エリア地図を使う。

## コミット時の注意点

- 標識の画像はパブリックドメイン・CC0・国ごとのライセンス的にokなものに限定する
  - ニュージーランド：[Sign specifications](https://www.nzta.govt.nz/resources/traffic-control-devices-manual/sign-specifications/)
  - イギリス：[Open Government Licence v1.0](http://nationalarchives.gov.uk/doc/open-government-licence/version/1/)
- ナンバープレートの画像を引用する場合は**出典を示す必要がないとしても**ライセンスと出典を示すこと
  - ライセンスを書き忘れたかどうかを後から判断するのが難しくなるため
- Google Map・Street View
  - [Google マップ & Google Earth ガイドライン](https://www.google.com/intl/ja_ALL/permissions/geoguidelines/)
  - Googleストリートビューのスクリーンショットは使用しないこと
  - Google Mapsを引用する場合は**必ず画像の近くにソースへのリンクを貼ること**

## 個人情報・シークレット保護フック (pre-commit)

`scripts/hooks/` 配下に、個人情報・APIトークン等の誤コミットを防ぐ pre-commit フックを置いています。

### 初回セットアップ

`npm install` 時に自動で `git config core.hooksPath scripts/hooks` が設定されます。
別マシンで clone した直後に手動で有効化したい場合は次のいずれか：

```bash
# 推奨：npm script から
npm run install-hooks

# または直接シェルスクリプトを実行
bash scripts/hooks/install.sh
```

### 何が保護されるか

| 種類 | 動作 | 例 |
|---|---|---|
| API トークン・秘密鍵 | **コミット中止** | `AKIA…` (AWS), `ghp_…` (GitHub), `xoxb-…` (Slack), `sk_live_…` (Stripe), `AIza…` (Google), JWT, PEM 形式の秘密鍵 |
| クレジットカード番号 | **コミット中止** | 13–19 桁で Luhn チェックに合格するもの |
| 機密ファイル名 | **コミット中止** | `.env`, `id_rsa`, `*.pem`, `*.key`, `*.p12`, `credentials.json`, `.netrc` 等 |
| `.ngwords` 記載のNGワード | **コミット中止** | 既存の振る舞いを継続 |
| メール／電話／郵便番号／12桁数値 | **警告のみ**（コミット可） | 誤検知が多いため |
| NUL バイト | 自動除去してから add | ステージ済みテキストファイルから |

### 誤検知の対処

- **`.piiallowlist`** にファイル名や文字列の正規表現を 1 行 1 件で追加すると、その値はスキャン対象から除外されます。
- 既に `example.com` ドメインなどは標準で許可済み。
- 緊急時は `git commit --no-verify` でフックをバイパスできます（最小限に留めること）。

### 動作確認

`scripts/hooks/check_pii.py` は単独で実行することもでき、ステージ済みの差分を直接スキャンします：

```bash
python3 scripts/hooks/check_pii.py
```

## 連絡先

問題点やミスを見つけた場合はissueを立てていただけると嬉しいです。また連絡はissueか[twitter](https://twitter.com/nanjakorewa)のDMなどで受け付けています。

<hr />

# [geopinning.space](https://geopinning.space/)

Personalized Google Street View pinning page(since 2023/02).


## Collection of tips for guessing the country

Pages to note down tips for guessing the country and to compile links to related sites.

- [Japan](https://geopinning.space/rule/asia/japan/)
- [United Kingdom](https://geopinning.space/rule/europe/united-kingdom/)
- [Colombia](https://geopinning.space/rule/cs_america/colombia/)

## Attention when committing

- Images of signs must be in the public domain only.
  - Images of New Zealand signs are available from [Sign specifications](https://www.nzta.govt.nz/resources/traffic-control-devices-manual/sign-specifications/).
- When citing license plate images, indicate the license name and the source of the citation even if the source does not need to be indicated.
  - in order to determine whether I forgot to write license name.
- Maps, Street View, Earth
  - [Google Maps & Google Earth Guidelines](https://www.google.com/intl/ja_ALL/permissions/geoguidelines/)
  - Do **NOT** use Google Street View screenshots
  - When citing Google Maps, **always link to the source near the image**.

# Contact

If you notice a problem, please report it via issue. I appreciate any help you can provide.
