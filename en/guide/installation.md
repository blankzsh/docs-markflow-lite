# Installation

## 📋 System Requirements

Before starting to use MarkFlow Lite, please ensure your system meets the following requirements:

- **Node.js**: 16.0 or higher
- **npm**: 7.0 or higher
- **Modern Browser**: Chrome, Firefox, Safari, Edge
- **Operating System**: Windows, macOS, Linux

## 🛠️ Environment Preparation

### Install Node.js

1. Visit [Node.js Official Website](https://nodejs.org/)
2. Download the LTS (Long Term Support) version
3. Follow the installation wizard to complete the installation
4. Verify installation:

```bash
node --version
npm --version
```

### Install Git

1. Visit [Git Official Website](https://git-scm.com/)
2. Download the version suitable for your operating system
3. Follow the installation wizard to complete the installation
4. Verify installation:

```bash
git --version
```

## 📥 Installation Steps

### 1. Clone the Project

```bash
# Using HTTPS
git clone https://github.com/blankzsh/markflow-lite.git

# Or using SSH
git clone git@github.com:blankzsh/markflow-lite.git

# Enter the project directory
cd markflow-lite
```

### 2. Install Dependencies

```bash
# Install project dependencies
npm install

# Or using yarn
yarn install

# Or using pnpm
pnpm install
```

### 3. Start Development Server

```bash
# Start the development server
npm run dev

# Or using yarn
yarn dev

# Or using pnpm
pnpm dev
```

After the server starts, open your browser and visit `http://localhost:5173` (or another displayed port).

### 4. Build for Production

```bash
# Build the project
npm run build

# Preview the build result
npm run preview
```

## 🔧 Advanced Installation

### Using Docker

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

Build and run:

```bash
# Build image
docker build -t markflow-lite .

# Run container
docker run -p 4173:4173 markflow-lite
```

### Deploy with Nginx

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

## 🐛 Common Issues

### Installation Failed

1. **Permission Issues**:
   ```bash
   # Use administrator privileges
   sudo npm install
   ```

2. **Network Issues**:
   ```bash
   # Use domestic mirror
   npm install --registry https://registry.npmmirror.com
   ```

3. **Cache Issues**:
   ```bash
   # Clear cache
   npm cache clean --force
   npm install
   ```

### Dependency Conflicts

```bash
# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Port Occupied

```bash
# Use another port
npm run dev -- --port 3000
```

## ✅ Verify Installation

After installation is complete, you can verify it through the following methods:

1. **Access Application**: Open browser and visit `http://localhost:5173`
2. **Check Console**: Press F12 to open developer tools, check console for errors
3. **Test Features**:
   - Input some Markdown text
   - Check if preview displays normally
   - Test export functionality

## 🎯 Next Steps

- [Basic Usage](./basic-usage) - Learn how to use MarkFlow Lite
- [Features](../features/) - Learn about all features
- [Cloud Storage Configuration](./cloud-storage) - Configure cloud storage services