# Assignment 3 提交 - Google Doc 模板

复制以下内容到你的 Google Doc 中：

---

# Assignment 3: MPCS Website Redesign

**学生姓名**: [你的名字]  
**提交日期**: [日期]

## Figma 链接（如果有的话）

[在这里添加你的 Figma 链接，确保设置为"Anyone with the link can view"]

## GitHub & 部署链接

**GitHub 仓库**: https://github.com/EaminC/UIUX-2  
**部署网站**: [你的 Vercel 部署地址]  
（例如：https://uiux-2.vercel.app）

---

## 用户需求与设计原则

### Prospective Percy 需求（已解决 4 个）

#### 1. ✅ AI 与就业市场担忧

**位置**: Homepage - "AI is Creating Opportunities" Section  
**解决方案**:

- 专门的 section 解释 AI 创造的机会
- 展示职业增长数据（AI/ML 工程师+35%增长）
- 平均薪资范围 $110k-180k
- 强调学习构建 AI 系统的能力，而非被 AI 取代

#### 2. ✅ 职业路径与投资回报

**位置**: Homepage - "Program Pathways" & ProgramPage - "Student Experience"  
**解决方案**:

- 三种学习路径清晰展示（全职 9-12 月、兼职 18-24 月、预备课程 1 个夏天）
- 真实毕业生案例：Marketing → Meta, Financial Analyst → Citadel
- 95%就业率和$120k+平均起薪数据
- 时间投入与回报一目了然

#### 3. ✅ 课程内容与专业化

**位置**: ProgramPage - "Curriculum" Tab  
**解决方案**:

- 详细课程列表（代码、难度级别、学分）
- 四个专业方向：AI、Data Science、Software Engineering、Security
- 每个方向包含示例课程
- 可下载完整课程目录

#### 4. ✅ 教师质量

**位置**: ProgramPage - "Instructors" Tab  
**解决方案**:

- 教师构成透明：40%研究型、35%行业专家、25%讲师
- 学生评分展示（4.5-4.8/5.0）
- 教学理念和支持系统说明

---

### Student Samantha 需求（已解决 6 个）

#### 1. ✅ 快速访问关键信息

**位置**: Homepage - "Current Students" Section  
**解决方案**:

- 6 个快速链接卡片：课程目录、学术日历、职业资源、学生门户、健康资源、注册信息
- 一键访问，无需多次页面跳转
- 减少寻找信息的时间

#### 2. ✅ 课程选择与规划

**位置**: ProgramPage - "Curriculum" Tab  
**解决方案**:

- 课程难度标签（Beginner/Intermediate/Advanced）
- 先修课程信息
- 学生案例分享课程体验
- 专业化方向指导

#### 3. ✅ 职业准备与面试支持

**位置**: ProgramPage - "Resources" Tab  
**解决方案**:

- 完整的职业服务：简历审查、模拟面试、薪资谈判、校友导师
- 95% within 6 months 就业数据
- 校园招聘活动信息

#### 4. ✅ 健康与压力管理

**位置**: Homepage Quick Links + ProgramPage Resources  
**解决方案**:

- 心理健康咨询
- 压力管理工作坊
- 校园娱乐设施
- 健康资源集中展示

#### 5. ✅ 社交与网络构建

**位置**: ProgramPage - "Resources" Tab  
**解决方案**:

- 学习小组和同伴支持
- 技术讲座、黑客马拉松、竞赛
- 社交活动
- 500+校友网络

#### 6. ✅ 移动端友好

**实现方式**:

- 完全响应式设计
- 移动端导航菜单
- 触摸友好的交互元素

---

### Administrator Alaina 需求（已解决 3 个）

#### 1. ✅ 减少重复性邮件

**位置**: Homepage - "FAQ" Section  
**解决方案**:

- 覆盖最常见问题（CS 背景要求、学位要求、职业支持、注册流程）
- 清晰的联系按钮 for 特殊情况
- 自助式信息获取

#### 2. ✅ 信息集中化

**位置**: 整个网站架构  
**解决方案**:

- 所有关键信息在 homepage 可见或一键访问
- Tab-based navigation 减少页面管理
- 可下载 PDF 资源
- 结构化内容组织

#### 3. ✅ 校友网络参与

**位置**: ProgramPage - "Resources" Tab  
**解决方案**:

- 专门的校友网络 section
- 校友导师项目
- "Join Alumni Network" CTA
- 校友成功案例激励参与

---

## 设计原则应用

### 1. Hierarchy（层次结构）

**视觉层次**:

- H1 (3rem): 页面主标题，最大尺寸吸引注意
- H2 (2.25rem): Section 标题，清晰分隔内容区域
- H3 (1.5rem): 卡片标题和子 section
- Body (1rem): 正文内容，易读性优先

**信息优先级**:

- Hero section 在首屏：核心价值主张 + CTA
- 关键统计数据(95%就业率、$120k 薪资)高位置展示
- AI 就业担忧 section 紧随 hero：解决 Percy 最大顾虑
- 次要信息通过 tabs 和折叠组件组织

**颜色层次**:

- UChicago Maroon (#800000): 主要 CTA 和关键信息
- 渐变背景: 创造深度和视觉层次
- 白色/灰色: 次要内容和背景

### 2. Layout（布局）

**网格系统**:

- Tailwind CSS grid 系统
- 桌面: 2-4 列灵活布局
- 移动: 单列或 2 列布局
- 最大宽度 1280px 保持可读性

**响应式设计**:

```
- Stats: grid-cols-2 sm:grid-cols-4
- Pathways: grid lg:grid-cols-3
- Features: grid md:grid-cols-2 lg:grid-cols-4
- Quick Links: grid md:grid-cols-2 lg:grid-cols-3
```

**空间使用**:

- 一致的垂直间距(py-20)
- 卡片间距(gap-4/6/8)
- 白空间增强可读性

### 3. Typography（排版）

**字体选择**:

- 系统字体栈确保快速加载
- Serif 字体用于 logo 和正式元素
- Sans-serif 用于正文(最佳可读性)

**字体大小层级**:

- 响应式缩放
- 行高 1.5-1.6 提升可读性
- Letter-spacing 用于标题增强辨识度

**对比度**:

- 符合 WCAG AA 标准
- Maroon 背景上白色文字
- 白色背景上深灰色文字

### 4. Color（颜色）

**UChicago 品牌色**:

- Primary Maroon: #800000
- Dark Maroon: #5c0000
- Light Maroon: #9d2235

**颜色应用**:

- Maroon: CTA 按钮、链接、图标、重要信息
- 渐变: Hero sections 创造视觉深度
- 半透明: 叠加层和背景效果(glassmorphism)
- 语义色: Green(Beginner)、Blue(Intermediate)、Purple(Advanced)

**品牌一致性**:

- 遵循 UChicago branding guidelines
- Logo 标准使用
- 60-30-10 颜色比例

---

## Grid Based Layout & Original Design

### 网格布局实现:

**Container Grid**:

```
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

**Content Grids**:

- 一致的 gutter widths (gap-4/6/8)
- 响应式列数 (cols-1/2/3/4)
- 对齐和分布 (items-center, justify-between)

### 原创设计特点:

**与现有 MPCS 网站的区别**:

1. **现代视觉语言**

   - 渐变背景和 glassmorphism 效果
   - 浮动动画 orbs 增加动态感
   - Smooth hover 效果和过渡动画
   - 卡片式布局替代传统列表

2. **信息架构重组**

   - 用户需求驱动的优先级
   - Tab-based navigation 减少跳转
   - 快速访问卡片 for 学生
   - 一页式信息密度 vs 多页深度导航

3. **AI 时代内容**

   - 专门的 AI 就业市场 section（现有网站没有）
   - AI/ML 职业数据展示
   - 强调未来技能培养

4. **学生体验优先**

   - 真实学生转型故事
   - 健康资源 prominent 展示
   - 社交和网络机会强调

5. **视觉可扫描性**
   - 图标+文字组合
   - 清晰的视觉层次
   - Badge 和标签系统

---

## Constraints & UChicago Branding (Bonus)

### Constraints 实现:

**移动端约束**:

- Header sticky 定位，跨设备拉伸
- Footer 响应式布局
- 内容居中或 flex 拉伸
- 图片和文本框自适应

**为什么使用**:

- 确保跨设备尺寸一致行为
- 流畅的响应式用户体验

### UChicago Branding:

**品牌遵循**:

- ✅ Logo 正确使用（实际 UChicago logo）
- ✅ 品牌色准确(#800000 Maroon)
- ✅ 字体类似 Gotham（系统 sans-serif）
- ✅ 专业和学术的视觉调性

---

## 技术实现

**技术栈**:

- React 18 + TypeScript
- Tailwind CSS (utility-first)
- Radix UI (accessible components)
- Vite (fast build)

**性能**:

- CSS: 79.87 KB gzipped
- JS: 236 KB gzipped
- 快速加载优化

**无障碍性**:

- 语义化 HTML
- ARIA labels
- 键盘导航
- WCAG 颜色对比度

---

## 总结

这个 MPCS 网站重新设计：

✅ **超额完成用户需求**

- Percy: 4 个需求 (要求 2+)
- Samantha: 6 个需求 (要求 3+)
- Alaina: 3 个需求 (要求 1+)

✅ **全面应用设计原则**

- Hierarchy, Layout, Typography, Color

✅ **完全原创设计**

- 不复制现有网站
- 现代化视觉语言
- 用户体验驱动

✅ **技术优秀**

- 可部署生产环境
- 性能优化
- 无障碍支持

---
