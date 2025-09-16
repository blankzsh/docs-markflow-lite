---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MarkFlow Lite"
  text: "纯前端在线 Markdown 编辑器"
  tagline: 无需服务器，开箱即用，支持实时编辑、双向预览、本地保存和内容分享
  image:
    src: /logo.svg
    alt: MarkFlow Lite
  actions:
    - theme: brand
      text: 快速开始
      link: /guide/
    - theme: alt
      text: 查看功能
      link: /features/

features:
  - title: ✍️ 实时编辑
    details: 支持标准 Markdown 语法（含表格、代码块、列表等），所见即所得编辑体验
  - title: 👁️ 实时预览
    details: 边写边看，支持数学公式和流程图渲染，预览效果实时同步
  - title: 💾 本地存储
    details: 自动保存草稿到浏览器本地存储，无需担心数据丢失
  - title: 📄 文件导出
    details: 支持导出为 PDF、HTML、Markdown 等格式，方便分享和存档
  - title: 📂 文件管理
    details: 支持新建文档、打开本地 Markdown 文件，云存储集成
  - title: 🔗 内容分享
    details: 生成唯一链接，内容可通过 URL 参数共享，协作更便捷
  - title: 🎨 主题切换
    details: 提供深色/浅色主题，适配不同阅读环境，保护眼睛
  - title: ⌨️ 快捷操作
    details: 支持常用快捷键（加粗、斜体、标题插入等），提高编辑效率
  - title: 📱 响应式设计
    details: 支持桌面、平板、手机访问，随时随地编辑文档
---

## 🚀 快速开始

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

## 🛠️ 技术栈

- **开发框架**: React + TypeScript + Vite
- **Markdown 解析**: markdown-it
- **代码高亮**: Highlight.js
- **样式设计**: Tailwind CSS + @tailwindcss/typography
- **数学公式**: MathJax (通过 markdown-it-mathjax3)
- **流程图支持**: Mermaid
- **构建工具**: Vite
- **部署平台**: GitHub Pages / Vercel / Netlify

## 📞 联系我们

如果您在使用过程中遇到问题、有功能建议或想要反馈意见，请通过以下方式联系我们：

- **邮箱反馈**: [shell7@petalmail.com](mailto:shell7@petalmail.com)
- **GitHub Issues**: [提交问题或建议](https://github.com/blankzsh/markflow-lite/issues)
- **项目仓库**: [https://github.com/blankzsh/markflow-lite](https://github.com/blankzsh/markflow-lite)

我们重视每一个用户的反馈，您的建议将帮助我们持续改进 MarkFlow Lite！