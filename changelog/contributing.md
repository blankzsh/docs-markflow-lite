# 贡献指南

感谢您对 MarkFlow Lite 项目的关注！我们非常欢迎社区的贡献，无论是代码、文档、设计还是反馈建议。

## 🤝 参与方式

### 代码贡献
- 🐛 修复 Bug
- ✨ 添加新功能
- ⚡ 性能优化
- 🔧 重构代码

### 非代码贡献
- 📚 改进文档
- 🌍 翻译内容
- 🎨 设计改进
- 🧪 测试反馈

## 🛠️ 开发环境设置

### 前置要求
- Node.js 18.0 或更高版本
- npm 或 yarn
- Git

### 克隆项目
```bash
# 克隆仓库
git clone https://github.com/blankzsh/MarkFlow-Lite.git
cd MarkFlow-Lite

# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 项目结构
```
MarkFlow-Lite/
├── src/                 # 主应用源码
│   ├── components/      # React 组件
│   ├── hooks/          # 自定义 Hooks
│   ├── utils/          # 工具函数
│   └── assets/         # 静态资源
├── docs/               # 文档站点
│   ├── .vitepress/     # VitePress 配置
│   ├── guide/          # 用户指南
│   ├── changelog/      # 开发日志
│   └── features/       # 功能介绍
├── public/             # 公共资源
└── tests/              # 测试文件
```

## 📝 提交规范

### Commit Message 格式
我们使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### 类型说明
- `feat`: 新功能
- `fix`: 修复问题
- `docs`: 文档更新
- `style`: 代码格式调整
- `refactor`: 代码重构
- `perf`: 性能优化
- `test`: 测试相关
- `chore`: 构建或工具更改

### 示例
```bash
feat(editor): add auto-save functionality

Add automatic saving every 30 seconds to prevent data loss.
Users can configure the interval in settings.

Closes #123
```

## 🔀 Pull Request 流程

### 1. Fork 项目
点击 GitHub 页面右上角的 "Fork" 按钮

### 2. 创建分支
```bash
# 创建并切换到新分支
git checkout -b feature/your-feature-name

# 或者修复分支
git checkout -b fix/issue-number
```

### 3. 开发和测试
```bash
# 运行测试
npm test

# 代码检查
npm run lint

# 构建检查
npm run build
```

### 4. 提交代码
```bash
git add .
git commit -m "feat: add your feature description"
git push origin feature/your-feature-name
```

### 5. 创建 Pull Request
- 在 GitHub 上点击 "New Pull Request"
- 填写详细的 PR 描述
- 等待代码审查

## 📋 PR 检查清单

在提交 PR 之前，请确保：

- [ ] 代码符合项目规范
- [ ] 添加了必要的测试
- [ ] 测试全部通过
- [ ] 文档已更新
- [ ] Commit 信息规范
- [ ] 没有不必要的文件更改

## 🧪 测试指南

### 运行测试
```bash
# 运行所有测试
npm test

# 运行特定测试
npm test -- --testNamePattern="Editor"

# 生成覆盖率报告
npm run test:coverage
```

### 编写测试
```javascript
import { render, screen } from '@testing-library/react';
import { Editor } from '../components/Editor';

describe('Editor Component', () => {
  test('renders editor correctly', () => {
    render(<Editor />);
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
```

## 🌍 翻译贡献

### 支持的语言
- 🇨🇳 简体中文 (zh-CN)
- 🇺🇸 英语 (en-US)
- 🇪🇸 西班牙语 (es-ES)
- 🇧🇷 葡萄牙语 (pt-BR)
- 🇯🇵 日语 (ja-JP)
- 🇩🇪 德语 (de-DE)

### 翻译流程
1. 复制 `docs/en/` 目录
2. 重命名为目标语言代码
3. 翻译所有 Markdown 文件
4. 更新 `config.mjs` 中的语言配置
5. 提交 PR

### 翻译质量要求
- ✅ 技术术语准确
- ✅ 语言自然流畅
- ✅ 保持格式一致
- ✅ 链接正确有效

## 🎨 设计贡献

### UI/UX 改进
- 提供设计原型（Figma、Sketch 等）
- 详细说明设计理念
- 考虑可访问性要求
- 保持品牌一致性

### 图标和资源
- 使用 SVG 格式
- 提供多种尺寸
- 符合现有设计风格
- 优化文件大小

## 🐛 问题报告

### 报告模板
```markdown
**问题描述**
简短描述问题

**复现步骤**
1. 打开应用
2. 点击某个按钮
3. 观察到错误

**期望行为**
描述期望的正确行为

**实际行为**
描述实际发生的情况

**环境信息**
- 操作系统: [Windows 11]
- 浏览器: [Chrome 120]
- 版本: [v1.3.0]

**截图或视频**
如果适用，添加截图帮助解释问题
```

## 📞 联系方式

### 开发团队
- **邮件**: dev@markflow.app
- **Discord**: [MarkFlow Community](https://discord.gg/markflow)
- **GitHub**: [@blankzsh](https://github.com/blankzsh)

### 社区
- **用户论坛**: [community.markflow.app](https://community.markflow.app)
- **微信群**: 扫描二维码加入
- **QQ 群**: 123456789

## 🏆 贡献者名单

感谢所有为项目做出贡献的开发者：

### 核心团队
- [@blankzsh](https://github.com/blankzsh) - 项目创始人
- [@contributor1](https://github.com/contributor1) - 前端开发
- [@contributor2](https://github.com/contributor2) - UI/UX 设计

### 社区贡献者
- [@translator-es](https://github.com/translator-es) - 西班牙语翻译
- [@translator-pt](https://github.com/translator-pt) - 葡萄牙语翻译
- [@translator-ja](https://github.com/translator-ja) - 日语翻译
- [@translator-de](https://github.com/translator-de) - 德语翻译

### 特别感谢
- 所有提交 Issue 和 PR 的用户
- Alpha 和 Beta 测试用户
- 文档校对志愿者

## 📜 行为准则

我们致力于创造一个友好、包容的社区环境。请遵循以下准则：

- 🤝 **尊重他人**: 对所有参与者友好和尊重
- 💭 **开放心态**: 欢迎不同的观点和想法
- 🎯 **建设性反馈**: 提供有用、具体的建议
- 📚 **乐于学习**: 保持学习和成长的心态
- 🚫 **零容忍**: 不容忍任何形式的骚扰或歧视

违反行为准则的行为将被严肃处理，可能导致从社区中被移除。

---

再次感谢您的贡献！让我们一起把 MarkFlow Lite 做得更好！🚀
