---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "MarkFlow Lite"
  text: "Pure Front-end Online Markdown Editor"
  tagline: No server required, ready to use out of the box, supporting real-time editing, dual preview, local saving, and content sharing
  image:
    src: /logo.svg
    alt: MarkFlow Lite
  actions:
    - theme: brand
      text: Quick Start
      link: /en/guide/
    - theme: alt
      text: View Features
      link: /en/features/

features:
  - title: ✍️ Real-time Editing
    details: Supports standard Markdown syntax (including tables, code blocks, lists, etc.) with WYSIWYG editing experience
  - title: 👁️ Real-time Preview
    details: See as you write, supports mathematical formulas and flowchart rendering, real-time synchronized preview
  - title: 💾 Local Storage
    details: Automatically saves drafts to browser local storage, no need to worry about data loss
  - title: 📄 File Export
    details: Supports export to PDF, HTML, Markdown, and other formats for easy sharing and archiving
  - title: 📂 File Management
    details: Supports creating new documents, opening local Markdown files, and cloud storage integration
  - title: 🔗 Content Sharing
    details: Generate unique links, content can be shared via URL parameters, making collaboration more convenient
  - title: 🎨 Theme Switching
    details: Provides dark/light themes, adapted to different reading environments, eye protection
  - title: ⌨️ Shortcut Operations
    details: Supports common shortcuts (bold, italic, title insertion, etc.), improving editing efficiency
  - title: 📱 Responsive Design
    details: Supports desktop, tablet, and mobile access, edit documents anytime, anywhere
---

## 🚀 Quick Start

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

## 🛠️ Tech Stack

- **Development Framework**: React + TypeScript + Vite
- **Markdown Parsing**: markdown-it
- **Code Highlighting**: Highlight.js
- **Style Design**: Tailwind CSS + @tailwindcss/typography
- **Mathematical Formulas**: MathJax (via markdown-it-mathjax3)
- **Flowchart Support**: Mermaid
- **Build Tool**: Vite
- **Deployment Platform**: GitHub Pages / Vercel / Netlify

## 📞 Contact Us

If you encounter any issues, have feature suggestions, or want to provide feedback while using the application, please contact us through:

- **Email Feedback**: [shell7@petalmail.com](mailto:shell7@petalmail.com)
- **GitHub Issues**: [Submit Issues or Suggestions](https://github.com/blankzsh/markflow-lite/issues)
- **Project Repository**: [https://github.com/blankzsh/markflow-lite](https://github.com/blankzsh/markflow-lite)

We value every user's feedback, and your suggestions will help us continuously improve MarkFlow Lite!