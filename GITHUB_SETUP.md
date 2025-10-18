# GitHub 和 Vercel 部署快速指南

## 第一步：推送到 GitHub

### 1. 初始化 Git 仓库

```bash
cd /Users/eamin/Desktop/UIUX2
git init
git add .
git commit -m "feat: 初始化项目"
```

### 2. 在 GitHub 上创建新仓库

1. 访问 https://github.com/new
2. 填写仓库名称（例如：`uiux2-project`）
3. 选择 **Public** 或 **Private**
4. **不要**勾选 "Add a README file"、".gitignore" 或 "license"
5. 点击 **"Create repository"**

### 3. 关联并推送

在 GitHub 创建仓库后，会显示推送命令，执行：

```bash
git remote add origin https://github.com/你的用户名/你的仓库名.git
git branch -M main
git push -u origin main
```

## 第二步：部署到 Vercel

### 快速部署（推荐）

1. 访问 https://vercel.com
2. 使用 GitHub 账号登录
3. 点击 **"Add New..."** → **"Project"**
4. 选择刚才创建的 GitHub 仓库
5. Vercel 会自动识别配置
6. 点击 **"Deploy"**
7. 等待 1-2 分钟，完成！

### 部署后你会得到：

- 一个唯一的 URL：`https://your-project.vercel.app`
- 每次推送到 GitHub 会自动重新部署
- 实时预览和生产环境

## 第三步：后续更新

每次修改代码后：

```bash
git add .
git commit -m "描述你的修改"
git push
```

推送后，Vercel 会自动部署新版本！

## 检查清单

在推送到 GitHub 之前，确保：

- ✅ `node_modules` 文件夹在 `.gitignore` 中（已配置）
- ✅ `.env` 文件在 `.gitignore` 中（已配置）
- ✅ 所有依赖都在 `package.json` 中
- ✅ 本地可以成功运行 `npm run build`

## 常见问题

### Q: 部署失败怎么办？

查看 Vercel 的部署日志，通常会显示具体错误。

### Q: 如何添加自定义域名？

在 Vercel 项目设置中的 "Domains" 选项卡添加。

### Q: 环境变量怎么配置？

在 Vercel 项目设置中的 "Environment Variables" 选项卡添加。

---

**现在就开始部署吧！** 🚀
