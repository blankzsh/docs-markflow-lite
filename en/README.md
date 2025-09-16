<div align="center">

# MarkFlow Lite Documentation

[![License](https://img.shields.io/github/license/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/issues)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-brightgreen)](https://vitepress.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/blankzsh/markflow-lite/pulls)

Pure Front-end Online Markdown Editor Documentation

[中文](../README.md) | [Español](../es/README.md) | [Português](../pt/README.md) | [日本語](../ja/README.md) | [Deutsch](../de/README.md)

</div>

## Introduction

MarkFlow Lite is a pure front-end online Markdown editor that requires no server and is ready to use out of the box. It supports real-time editing, dual preview, local saving, and content sharing.

## Key Features

- ✍️ **Real-time Editing** - Supports standard Markdown syntax (including tables, code blocks, lists, etc.) with WYSIWYG editing experience
- 👁️ **Real-time Preview** - See as you write, supports mathematical formulas and flowchart rendering, real-time synchronized preview
- 💾 **Local Storage** - Automatically saves drafts to browser local storage, no need to worry about data loss
- 📄 **File Export** - Supports export to PDF, HTML, Markdown, and other formats for easy sharing and archiving
- 📂 **File Management** - Supports creating new documents, opening local Markdown files, and cloud storage integration
- 🔗 **Content Sharing** - Generate unique links, content can be shared via URL parameters, making collaboration more convenient
- 🎨 **Theme Switching** - Provides dark/light themes, adapted to different reading environments, eye protection
- ⌨️ **Shortcut Operations** - Supports common shortcuts (bold, italic, title insertion, etc.), improving editing efficiency
- 📱 **Responsive Design** - Supports desktop, tablet, and mobile access, edit documents anytime, anywhere

## Quick Start

### Online Use

Visit [MarkFlow Lite](https://editor.currso.com) directly to start using it.

### Local Development

```bash
# Clone the project
git clone https://github.com/blankzsh/markflow-lite.git

# Enter the project directory
cd markflow-lite

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Tech Stack

- **Development Framework**: React + TypeScript + Vite
- **Markdown Parsing**: markdown-it
- **Code Highlighting**: Highlight.js
- **Style Design**: Tailwind CSS + @tailwindcss/typography
- **Mathematical Formulas**: MathJax (via markdown-it-mathjax3)
- **Flowchart Support**: Mermaid
- **Build Tool**: Vite
- **Deployment Platform**: GitHub Pages / Vercel / Netlify

## Documentation Structure

```
docs/
├── .vitepress/          # VitePress configuration
├── guide/               # User guide
├── features/            # Feature introduction
├── en/                  # English documentation
├── es/                  # Spanish documentation
├── pt/                  # Portuguese documentation
├── ja/                  # Japanese documentation
├── de/                  # German documentation
├── public/              # Static assets
└── index.md             # Homepage
```

## Contributing

Contributions of any kind are welcome! If you have any of the following ideas, please feel free to participate:

- 🐛 Report bugs
- 💡 Suggest new features
- 📝 Improve documentation
- 🎨 Optimize UI/UX design
- 🔧 Fix code issues

Please check our [Contribution Guidelines](../CONTRIBUTING.md) for more information.

## Contact Us

If you encounter any issues, have feature suggestions, or want to provide feedback while using the application, please contact us through:

- **Email Feedback**: [shell7@petalmail.com](mailto:shell7@petalmail.com)
- **GitHub Issues**: [Submit Issues or Suggestions](https://github.com/blankzsh/markflow-lite/issues)
- **Project Repository**: [https://github.com/blankzsh/markflow-lite](https://github.com/blankzsh/markflow-lite)

We value every user's feedback, and your suggestions will help us continuously improve MarkFlow Lite!

## License

This project is licensed under the [MIT](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE) License.