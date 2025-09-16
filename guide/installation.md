# 安装

## 📋 系统要求

在开始使用 MarkFlow Lite 之前，请确保你的系统满足以下要求：

- **Node.js**: 16.0 或更高版本
- **npm**: 7.0 或更高版本
- **现代浏览器**: Chrome, Firefox, Safari, Edge
- **操作系统**: Windows, macOS, Linux

## 🛠️ 环境准备

### 安装 Node.js

1. 访问 [Node.js 官网](https://nodejs.org/)
2. 下载 LTS（长期支持）版本
3. 按照安装向导完成安装
4. 验证安装：

```bash
node --version
npm --version
```

### 安装 Git

1. 访问 [Git 官网](https://git-scm.com/)
2. 下载适合你操作系统的版本
3. 按照安装向导完成安装
4. 验证安装：

```bash
git --version
```

## 📥 安装步骤

### 1. 克隆项目

```bash
# 使用 HTTPS
git clone https://github.com/blankzsh/markflow-lite.git

# 或使用 SSH
git clone git@github.com:blankzsh/markflow-lite.git

# 进入项目目录
cd markflow-lite
```

### 2. 安装依赖

```bash
# 安装项目依赖
npm install

# 或使用 yarn
yarn install

# 或使用 pnpm
pnpm install
```

### 3. 启动开发服务器

```bash
# 启动开发服务器
npm run dev

# 或使用 yarn
yarn dev

# 或使用 pnpm
pnpm dev
```

服务器启动后，打开浏览器访问 `http://localhost:5173`（或其他显示的端口）。

### 4. 构建生产版本

```bash
# 构建项目
npm run build

# 预览构建结果
npm run preview
```

## 🔧 高级安装

### 使用 Docker

```dockerfile
# Dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 4173

CMD ["npm", "run", "preview"]
```

构建和运行：

```bash
# 构建镜像
docker build -t markflow-lite .

# 运行容器
docker run -p 4173:4173 markflow-lite
```

### 使用 Nginx 部署

```nginx
# nginx.conf
server {
    listen 80;
    server_name your-domain.com;
    
    location / {
        root /usr/share/nginx/html;
        index index.html;
        try_files $uri $uri/ /index.html;
    }
    
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## 🐛 常见问题

### 安装失败

1. **权限问题**：
   ```bash
   # 使用管理员权限
   sudo npm install
   ```

2. **网络问题**：
   ```bash
   # 使用国内镜像
   npm install --registry https://registry.npmmirror.com
   ```

3. **缓存问题**：
   ```bash
   # 清理缓存
   npm cache clean --force
   npm install
   ```

### 依赖冲突

```bash
# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 端口被占用

```bash
# 使用其他端口
npm run dev -- --port 3000
```

## ✅ 验证安装

安装完成后，你可以通过以下方式验证：

1. **访问应用**：打开浏览器访问 `http://localhost:5173`
2. **检查控制台**：按 F12 打开开发者工具，查看控制台是否有错误
3. **测试功能**：
   - 输入一些 Markdown 文本
   - 检查预览是否正常显示
   - 测试导出功能

## 🎯 下一步

- [基础使用](./basic-usage) - 学习如何使用 MarkFlow Lite
- [功能特性](../features/) - 了解所有功能特性
- [云存储配置](./cloud-storage) - 配置云存储服务