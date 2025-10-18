# UIUX2 项目

一个使用 React + TypeScript + Vite + Tailwind CSS 构建的现代化网页应用。

## 技术栈

- **React 18** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 快速的构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架
- **Radix UI** - 无障碍的 UI 组件库

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

然后在浏览器中打开 `http://localhost:5173`

### 构建生产版本

```bash
npm run build
```

### 预览生产版本

```bash
npm run preview
```

## 部署到 Vercel

### 方式一：通过 Vercel 控制台部署

1. 将代码推送到 GitHub 仓库
2. 访问 [Vercel](https://vercel.com)
3. 点击 "Import Project"
4. 选择你的 GitHub 仓库
5. Vercel 会自动检测配置并部署

### 方式二：使用 Vercel CLI

```bash
npm install -g vercel
vercel
```

## 项目结构

```
UIUX2/
├── components/        # React 组件
│   ├── figma/        # Figma 相关组件
│   └── ui/           # UI 组件库
├── styles/           # 全局样式
├── src/              # 源代码入口
├── App.tsx           # 主应用组件
└── index.html        # HTML 入口
```

## 许可证

MIT
