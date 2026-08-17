# mellow landing page

大人女性向けオンライン・パーソナルスタイリングサービス「mellow」のランディングページです。

## 概要

- 感情設計を重視した日本語LP
- PC / スマートフォン対応
- Vinext + React による構成
- 画像アセットは `public/assets/images/` に配置
- サーバーレンダリングの最低限の自動テストを同梱

## 必要環境

- Node.js `>=22.13.0`
- pnpm `11.x`

## セットアップ

```bash
pnpm install
pnpm run dev
```

ローカルでは通常、以下で確認できます。

```text
http://localhost:3000/
```

すでに別サイトが `3000` 番ポートで表示される場合は、別ポートで起動してください。

```bash
pnpm run dev -- --port 3001
```

```text
http://localhost:3001/
```

## コマンド

```bash
pnpm run dev
pnpm run build
pnpm test
pnpm run lint
```

## 主な構成

```text
app/page.tsx                 LP本体
app/globals.css              全体スタイル
app/layout.tsx               メタデータ
public/assets/images/        LP用画像
tests/rendered-html.test.mjs  レンダリング確認テスト
```

## GitHubで公開する手順

GitHubで新しいリポジトリを作成したあと、このローカルリポジトリから以下を実行します。

```bash
git remote add github https://github.com/<your-name>/<repository-name>.git
git push -u github main
```

すでに `origin` をGitHubにしたい場合は、現在の内部用リモートを残す代わりに次のように変更できます。

```bash
git remote set-url origin https://github.com/<your-name>/<repository-name>.git
git push -u origin main
```

GitHubへpushすると、`.github/workflows/ci.yml` によりビルドとテストが自動実行されます。

## デプロイについて

このプロジェクトは Vinext のサーバーレンダリング構成です。GitHub Pages のような静的ホスティングだけで公開する構成ではなく、Cloudflare Workers / OpenAI Sites など、サーバー実行に対応したホスティング先での公開を想定しています。
