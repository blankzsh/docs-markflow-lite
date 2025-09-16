<div align="center">

# MarkFlow Lite ドキュメント

[![License](https://img.shields.io/github/license/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/issues)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-brightgreen)](https://vitepress.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/blankzsh/markflow-lite/pulls)

純粋なフロントエンド オンライン Markdown エディター ドキュメント

[中文](../README.md) | [English](../en/README.md) | [Español](../es/README.md) | [Português](../pt/README.md) | [Deutsch](../de/README.md)

</div>

## 紹介

MarkFlow Lite は、サーバーを必要とせず、すぐに使える純粋なフロントエンドオンライン Markdown エディターです。リアルタイム編集、双方向プレビュー、ローカル保存、コンテンツ共有をサポートしています。

## 主な特徴

- ✍️ **リアルタイム編集** - 標準 Markdown 構文（テーブル、コードブロック、リストなどを含む）をサポート、WYSIWYG 編集体験
- 👁️ **リアルタイムプレビュー** - 書きながら見る、数式とフローチャートのレンダリングをサポート、プレビューのリアルタイム同期
- 💾 **ローカルストレージ** - ブラウザのローカルストレージに下書きを自動保存、データ損失の心配なし
- 📄 **ファイルエクスポート** - PDF、HTML、Markdown などの形式へのエクスポートをサポート、共有やアーカイブに便利
- 📂 **ファイル管理** - 新しいドキュメントの作成、ローカル Markdown ファイルの開設、クラウドストレージ統合をサポート
- 🔗 **コンテンツ共有** - 固有のリンクを生成、URL パラメータ経由でコンテンツを共有可能、コラボレーションが便利
- 🎨 **テーマ切り替え** - ライト/ダークテーマを提供、異なる読書環境に適応、目の保護
- ⌨️ **ショートカット操作** - 一般的なショートカット（太字、斜体、タイトル挿入など）をサポート、編集効率向上
- 📱 **レスポンシブデザイン** - デスクトップ、タブレット、モバイルでのアクセスをサポート、いつでもどこでもドキュメント編集

## クイックスタート

### オンライン使用

[MarkFlow Lite](https://editor.currso.com) に直接アクセスして使用を開始します。

### ローカル開発

```bash
# プロジェクトをクローン
git clone https://github.com/blankzsh/markflow-lite.git

# プロジェクトディレクトリに入る
cd markflow-lite

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

## 技術スタック

- **開発フレームワーク**: React + TypeScript + Vite
- **Markdown 解析**: markdown-it
- **コードハイライト**: Highlight.js
- **スタイル設計**: Tailwind CSS + @tailwindcss/typography
- **数式**: MathJax (markdown-it-mathjax3 経由)
- **フローチャートサポート**: Mermaid
- **ビルドツール**: Vite
- **デプロイプラットフォーム**: GitHub Pages / Vercel / Netlify

## ドキュメント構造

```
docs/
├── .vitepress/          # VitePress 設定
├── guide/               # ユーザーガイド
├── features/            # 機能紹介
├── en/                  # 英語ドキュメント
├── es/                  # スペイン語ドキュメント
├── pt/                  # ポルトガル語ドキュメント
├── ja/                  # 日本語ドキュメント
├── de/                  # ドイツ語ドキュメント
├── public/              # 静的リソース
└── index.md             # ホームページ
```

## 貢献

どんな形の貢献でも歓迎します！以下のいずれかのアイデアがある場合は、ぜひ参加してください：

- 🐛 バグ報告
- 💡 新機能の提案
- 📝 ドキュメントの改善
- 🎨 UI/UX デザインの最適化
- 🔧 コード問題の修正

詳細については、[貢献ガイドライン](../CONTRIBUTING.md)をご確認ください。

## お問い合わせ

アプリケーションの使用中に問題が発生した場合、機能の提案がある場合、またはフィードバックを提供したい場合は、以下の方法でお問い合わせください：

- **メールフィードバック**: [shell7@petalmail.com](mailto:shell7@petalmail.com)
- **GitHub Issues**: [問題や提案を投稿](https://github.com/blankzsh/markflow-lite/issues)
- **プロジェクトリポジトリ**: [https://github.com/blankzsh/markflow-lite](https://github.com/blankzsh/markflow-lite)

私たちはすべてのユーザーのフィードバックを大切にし、あなたの提案が MarkFlow Lite の継続的な改善に役立ちます！

## ライセンス

このプロジェクトは [MIT](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE) ライセンスの下で提供されています。