# Tamagawa Portfolio

玉川寛一のポートフォリオサイト

## プロジェクト概要

Next.js 15を使用した静的サイト生成（SSG）ポートフォリオサイトです。
簡易認証機能を実装しており、関係者のみが閲覧可能です。

## 技術スタック

- **Framework**: Next.js 15.1.6
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: GitHub

## GitHubリポジトリ

- **リポジトリ名**: `design-boost/Portfolio`
- **URL**: https://github.com/design-boost/Portfolio
- **ブランチ**: `main`
- **リモート設定**: `git@github.com:design-boost/Portfolio.git`

## Vercel連携

### プロジェクト情報

- **プロジェクト名**: `portfolio`
- **プロジェクトID**: `prj_ntpH69BirgVieuKUW6wqteFekdns`
- **組織ID**: `team_tDpsU6RkUgn0M524B6ze0o7A`
- **デプロイURL**: https://portfolio-design-boost.vercel.app

### 連携方法

1. **GitHubリポジトリとの自動連携**
   - VercelダッシュボードでGitHubリポジトリ `design-boost/Portfolio` をインポート
   - `main`ブランチへのプッシュで自動デプロイが実行される

2. **プロジェクト設定**
   - **Framework Preset**: Next.js（自動検出）
   - **Root Directory**: `GrayTailwindNextjs`
   - **Build Command**: `npm run build`（自動）
   - **Output Directory**: `out`（静的エクスポート）

### 環境変数

以下の環境変数がVercelのProduction環境に設定されています：

- `NEXT_PUBLIC_AUTH_USERNAME`: 認証用ID
- `NEXT_PUBLIC_AUTH_PASSWORD`: 認証用パスワード

**重要**: 環境変数を設定する際は、値の最後に改行や空白が含まれないように注意してください。

### 環境変数の設定方法

1. Vercelダッシュボードにアクセス
2. プロジェクト「portfolio」→ Settings → Environment Variables
3. 環境変数を追加・編集
4. 変更後は再デプロイが必要

## ローカル開発

### セットアップ

```bash
# 依存関係のインストール
npm install

# 環境変数の設定
# .env.localファイルを作成
NEXT_PUBLIC_AUTH_USERNAME=tama
NEXT_PUBLIC_AUTH_PASSWORD=goodjob
```

### 開発サーバーの起動

```bash
npm run dev
```

開発サーバーは [http://localhost:3000](http://localhost:3000) で起動します。

### ビルド

```bash
npm run build
```

静的ファイルは `out` ディレクトリに出力されます。

## デプロイフロー

1. **コード変更をコミット**
   ```bash
   git add .
   git commit -m "変更内容"
   ```

2. **GitHubにプッシュ**
   ```bash
   git push origin main
   ```

3. **自動デプロイ**
   - Vercelが自動的に変更を検知
   - ビルドとデプロイが自動実行される
   - 数分で本番環境に反映

## 認証機能

サイトは簡易認証機能で保護されています。

- **認証コンポーネント**: `components/AuthGuard.tsx`
- **認証状態**: localStorageに保存
- **ログアウト**: 右上のログアウトボタンから実行可能

## ディレクトリ構造

```
GrayTailwindNextjs/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # ルートレイアウト
│   ├── page.tsx            # ホームページ
│   └── portfolio/          # ポートフォリオ詳細ページ
├── components/              # Reactコンポーネント
│   ├── AuthGuard.tsx       # 認証ガード
│   ├── Header.tsx          # ヘッダー
│   ├── Navigation.tsx      # ナビゲーション
│   └── ...
├── lib/                    # ライブラリ・ユーティリティ
│   └── siteData.ts         # サイトデータ
├── public/                 # 静的ファイル
│   └── images/             # 画像ファイル
└── .vercel/                # Vercel設定（Git管理外）
```

## 注意事項

- `.env.local`ファイルはGitにコミットしない（`.gitignore`に含まれています）
- 環境変数に改行や空白が含まれていると認証が失敗する可能性があります
- 静的エクスポート（`output: 'export'`）を使用しているため、一部のNext.js機能は使用できません

## トラブルシューティング

### ログインできない場合

1. 環境変数に改行や空白が含まれていないか確認
2. Vercelダッシュボードで環境変数を再設定
3. 再デプロイを実行

### デプロイが失敗する場合

1. Vercelダッシュボードの「Logs」タブでエラーを確認
2. ローカルでビルドが成功するか確認（`npm run build`）
3. ESLintエラーがないか確認（`npm run lint`）

## ライセンス

Private
