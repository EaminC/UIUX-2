# 部署指南

## 部署到 Vercel

### 前提条件

1. 拥有 GitHub 账号
2. 拥有 Vercel 账号（可以用 GitHub 账号登录）
3. 代码已推送到 GitHub 仓库

### 步骤一：推送代码到 GitHub

如果还没有将代码推送到 GitHub，请按以下步骤操作：

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/your-username/your-repo-name.git

# 推送到 GitHub
git push -u origin main
```

### 步骤二：在 Vercel 上部署

#### 方法 1：通过 Vercel 网站（推荐）

1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 **"Add New..."** → **"Project"**
3. 从 GitHub 导入你的仓库
4. Vercel 会自动检测到这是一个 Vite 项目
5. 确认配置无误后，点击 **"Deploy"**
6. 等待部署完成（通常 1-2 分钟）
7. 部署成功后会得到一个 `your-project.vercel.app` 的地址

#### 方法 2：使用 Vercel CLI

```bash
# 全局安装 Vercel CLI
npm install -g vercel

# 登录
vercel login

# 在项目目录中运行
vercel

# 按照提示操作即可
```

### 配置说明

项目已经包含 `vercel.json` 配置文件，Vercel 会：

- 自动运行 `npm install` 安装依赖
- 自动运行 `npm run build` 构建项目
- 将 `dist` 目录作为输出目录
- 配置 SPA 路由重写规则

### 自动部署

一旦在 Vercel 上部署成功，每次推送到 GitHub 的 `main` 分支都会自动触发重新部署。

### 环境变量

如果需要配置环境变量：

1. 在 Vercel 项目设置中进入 **"Settings"** → **"Environment Variables"**
2. 添加你的环境变量（例如 API keys）
3. 重新部署项目

### 自定义域名

要使用自定义域名：

1. 在 Vercel 项目设置中进入 **"Settings"** → **"Domains"**
2. 添加你的域名
3. 按照 Vercel 的说明配置 DNS

### 故障排查

如果部署失败：

1. 检查 Vercel 的构建日志
2. 确保 `package.json` 中的依赖版本正确
3. 确保本地 `npm run build` 能够成功执行
4. 检查 Node.js 版本（项目使用 Node 18）

### 性能优化建议

部署后可以考虑：

- 使用 Vercel Analytics 监控性能
- 启用 Vercel 的图片优化
- 配置 CDN 缓存策略

## 其他部署平台

### Netlify

如果想部署到 Netlify：

1. 访问 [netlify.com](https://netlify.com)
2. 导入 GitHub 仓库
3. 构建命令：`npm run build`
4. 发布目录：`dist`
5. 点击 Deploy

### GitHub Pages

部署到 GitHub Pages 需要额外配置：

1. 修改 `vite.config.ts` 添加 base 路径
2. 使用 GitHub Actions 自动部署
3. 详细步骤可参考 Vite 官方文档

---

**祝部署顺利！** 🚀
