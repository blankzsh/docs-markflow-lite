<div align="center">

# MarkFlow Lite 文档

[![License](https://img.shields.io/github/license/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/blankzsh/markflow-lite)](https://github.com/blankzsh/markflow-lite/issues)
[![VitePress](https://img.shields.io/badge/VitePress-1.6.4-brightgreen)](https://vitepress.dev/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/blankzsh/markflow-lite/pulls)

纯前端在线 Markdown 编辑器文档

[English](./en/README.md) | [Español](./es/README.md) | [Português](./pt/README.md) | [日本語](./ja/README.md) | [Deutsch](./de/README.md)

</div>

## 简介

MarkFlow Lite 是一个纯前端在线 Markdown 编辑器，无需服务器，开箱即用。它支持实时编辑、双向预览、本地保存和内容分享等功能。

## 主要特性

- ✍️ **实时编辑** - 支持标准 Markdown 语法（含表格、代码块、列表等），所见即所得编辑体验
- 👁️ **实时预览** - 边写边看，支持数学公式和流程图渲染，预览效果实时同步
- 💾 **本地存储** - 自动保存草稿到浏览器本地存储，无需担心数据丢失
- 📄 **文件导出** - 支持导出为 PDF、HTML、Markdown 等格式，方便分享和存档
- 📂 **文件管理** - 支持新建文档、打开本地 Markdown 文件，云存储集成
- 🔗 **内容分享** - 生成唯一链接，内容可通过 URL 参数共享，协作更便捷
- 🎨 **主题切换** - 提供深色/浅色主题，适配不同阅读环境，保护眼睛
- ⌨️ **快捷操作** - 支持常用快捷键（加粗、斜体、标题插入等），提高编辑效率
- 📱 **响应式设计** - 支持桌面、平板、手机访问，随时随地编辑文档

## 快速开始

### 在线使用

直接访问 [MarkFlow Lite](https://editor.currso.com) 即可开始使用。

### 本地开发

```bash
# 克隆项目
git clone https://github.com/blankzsh/markflow-lite.git

# 进入项目目录
cd markflow-lite

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

## 技术栈

- **开发框架**: React + TypeScript + Vite
- **Markdown 解析**: markdown-it
- **代码高亮**: Highlight.js
- **样式设计**: Tailwind CSS + @tailwindcss/typography
- **数学公式**: MathJax (通过 markdown-it-mathjax3)
- **流程图支持**: Mermaid
- **构建工具**: Vite
- **部署平台**: GitHub Pages / Vercel / Netlify

## 文档结构

```
docs/
├── .vitepress/          # VitePress 配置
├── guide/               # 使用指南
├── features/            # 功能介绍
├── en/                  # 英文文档
├── es/                  # 西班牙文文档
├── pt/                  # 葡萄牙文文档
├── ja/                  # 日文文档
├── de/                  # 德文文档
├── public/              # 静态资源
└── index.md             # 首页
```

## 贡献

欢迎任何形式的贡献！如果你有以下想法，请随时参与：

- 🐛 报告 bug
- 💡 提出新功能建议
- 📝 改进文档
- 🎨 优化 UI/UX 设计
- 🔧 修复代码问题

请查看我们的 [贡献指南](./CONTRIBUTING.md) 了解更多信息。

## 联系我们

如果您在使用过程中遇到问题、有功能建议或想要反馈意见，请通过以下方式联系我们：

- **邮箱反馈**: [shell7@petalmail.com](mailto:shell7@petalmail.com)
- **GitHub Issues**: [提交问题或建议](https://github.com/blankzsh/markflow-lite/issues)
- **项目仓库**: [https://github.com/blankzsh/markflow-lite](https://github.com/blankzsh/markflow-lite)

我们重视每一个用户的反馈，您的建议将帮助我们持续改进 MarkFlow Lite！

## 许可证

本项目采用 [MIT](https://github.com/blankzsh/markflow-lite/blob/main/LICENSE) 许可证。