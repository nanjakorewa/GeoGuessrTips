# GeoGuessrTips リポジトリ構成ガイド

GeoGuessrTips は Hugo 製の静的サイト「[geopinning.space](https://geopinning.space/)」のソースと生成物をまとめたリポジトリです。国・地域別に GeoGuessr の攻略メモを整理し、多言語展開 (ja/en/es/id) と画像アセット管理、GitHub Pages デプロイを行えるよう構成されています。

---

## 1. トップレベルの構成

| パス | 役割 |
| --- | --- |
| `.github/` | Issue テンプレート (`ISSUE_TEMPLATE/`) と GitHub Pages 用 Workflow (`workflows/pages.yml`)。 |
| `.vscode/` | VS Code 推奨設定 (`settings.json`)。 |
| `archetypes/` | 新規コンテンツ作成時の雛形 (`default.md`)。 |
| `content/` | Hugo の一次ソース。Markdown、画像、翻訳済みページが階層化されている。 |
| `i18n/` | 多言語 UI の翻訳辞書 (`en.yaml` 等)。 |
| `public/` | `hugo` ビルド済みの静的サイト出力 (HTML/CSS/JS/検索インデックス)。 |
| `resources/` | Hugo が生成する中間キャッシュ (`_gen/assets/scss/` など)。 |
| `scripts/` | 運用補助スクリプト (`fix_image_paths.py`)。 |
| `themes/` | カスタマイズしたテーマ `dot-mysite/` とそのレイアウト・アセット。 |
| `__pycache__/` | Python スクリプト実行時のバイトコード。 |
| `~/` | 補助設定 (`~/.codex/config.toml`) を保持する一時ディレクトリ。 |
| ルートファイル | `config.toml` (Hugo 設定)、`go.mod` / `go.sum` (Hugo Modules 依存)、`README.md`、`cgi.py` (Python 3.13 向け互換モジュール)、`translate_rule.py` (翻訳スクリプト)、`.gitignore` 等。 |

---

## 2. `content/` ディレクトリの詳細

- **about/**  
  サイト概要とプロフィール。`_index.{lang}.md` で各言語版を管理し、スクリーンショットやロゴ類を同フォルダに保存。`profile/` 以下はプロフィールページと関連画像のまとまり。

- **rule/**  
  攻略メモの中心。大陸別 (`asia/`, `europe/`, `n_america/` など) → 国別フォルダの二段階構造で、`_index.{lang}.md` が国ごとの本文。`r/` サブディレクトリに道路標識・ナンバープレート等の参考画像を収納。

- **quiz/**  
  `quiz1/`〜`quiz19/` のように各クイズを個別フォルダで管理。`_index.{lang}.md` に設問や解説を記述し、トップ直下の `_index` がクイズ一覧ページ。

- **web/**  
  関連リンク集。`free/`, `music/`, `privacy/`, `tools/`, `youtube/` など用途別ディレクトリに多言語 Markdown を配置。

各 Markdown は言語別サフィックス (`.ja.md`, `.en.md`, `.es.md`, `.id.md`) を持ち、同階層に画像などのメディアファイルが置かれる。Hugo のショートコードや HTML を併用するページも多い。

---

## 3. 翻訳・スクリプト関連

- `translate_rule.py`  
  Google 翻訳 API を利用し、日本語の攻略記事を他言語版に変換するツール。ショートコードや URL を翻訳対象から外し、長文を分割してリトライする仕組みを持つ。

- `scripts/fix_image_paths.py`  
  多言語 Markdown 内の `<img src="...">` を `/content` ルート基準の絶対パスに揃える自動整形スクリプト。翻訳後もリソースパスが壊れないようにする。

- `cgi.py`  
  Python 3.13 で削除された `cgi.parse_header` の互換実装。`httpx` など旧来の依存を動かすための最小 Shim。

---

## 4. テーマとビルド成果物

- `themes/dot-mysite/`  
  ベーステーマのカスタマイズ。`layouts/` でトップページや部分テンプレートを上書きし、`assets/` で SCSS や JS を管理、`static/` にテーマ固有の静的ファイルを配置。`theme.toml` にメタ情報が定義されている。

- `resources/_gen/`  
  Hugo が `assets/` からビルドした中間ファイルをキャッシュ。特に `assets/scss/` のコンパイル済み CSS が格納される。

- `public/`  
  `hugo` 実行後の最終成果物。言語別 (`en/`, `es/`, `id/`, `ja/`) ディレクトリに HTML が並び、`css/`, `js/`, `images/`, `flags/` など静的アセットもここに展開される。`searchindex.json`, `sitemap.xml`, `robots.txt`, `index.html` などサイト全体用のファイルも含む。

---

## 5. 運用メモ

- **画像ライセンス管理**: `content/rule/<region>/<country>/r/` に格納する標識や車両画像はパブリックドメイン／CC0／各国の許諾済み資料に限定。README に明記された方針に従う。
- **翻訳作業手順**: 日本語原稿を更新 → `translate_rule.py` で各言語を生成 → 必要に応じて `scripts/fix_image_paths.py` を実行し、リンク切れを防止。
- **デプロイ**: GitHub Actions (`.github/workflows/pages.yml`) が Hugo ビルドと GitHub Pages 反映を自動化。

このドキュメントを参照すると、コンテンツ制作・翻訳・ビルド・デプロイに関わるディレクトリとツールの関連が俯瞰できます。日々の更新や新規参加メンバーのオンボーディングに活用してください。
