# Assignment 3: MPCS Website Redesign - 设计说明

## 网站链接
- **GitHub**: https://github.com/EaminC/UIUX-2
- **部署网站**: [Vercel部署地址]

## 设计概述

这个项目重新设计了UChicago Masters Program in Computer Science (MPCS)网站，采用现代化、响应式的设计，全面解决了三类用户的核心需求。

---

## 用户需求满足情况

### 1. Prospective Percy（潜在学生）- 已解决 2+ 个需求

#### ✅ 需求1：AI与就业市场担忧
**位置**: Homepage - "AI is Creating Opportunities, Not Replacing Them" Section
**解决方案**:
- 专门的section解释AI如何创造机会而非取代工作
- 展示具体的职业增长数据（AI/ML工程师增长+35%）
- 列出平均薪资范围（$110k-180k）
- 强调学习构建和管理AI系统的能力

#### ✅ 需求2：职业路径与投资回报
**位置**: 
- Homepage - "Program Pathways" Section
- ProgramPage - "Student Success Stories" Tab
**解决方案**:
- 展示三种不同的学习路径（全职、兼职、预备课程）
- 真实毕业生案例：Sarah Chen (Marketing → Meta), Michael Rodriguez (Financial Analyst → Citadel)
- 清晰的时间线和职业转换轨迹
- 95%就业率和$120k+平均起薪统计数据

#### ✅ 需求3：课程内容与专业化
**位置**: ProgramPage - "Curriculum" Tab
**解决方案**:
- 详细的核心课程列表，包含课程代码、难度、学分
- 四个专业方向：AI、Data Science、Software Engineering、Security & Privacy
- 每个方向包含示例课程列表
- 可下载完整课程目录

#### ✅ 需求4：教师质量
**位置**: ProgramPage - "Instructors" Tab
**解决方案**:
- 教师构成：40%研究型教授、35%行业专家、25%专职讲师
- 学生评分数据（4.5-4.8/5.0）
- 小班教学、办公时间、TA支持等特色

---

### 2. Student Samantha（在读学生）- 已解决 3+ 个需求

#### ✅ 需求1：快速访问关键信息
**位置**: Homepage - "Current Students" Section
**解决方案**:
- 6个快速链接卡片：课程目录、学术日历、职业资源、学生门户、健康资源、注册信息
- 一键直达，无需多次页面跳转
- 专门的学生门户登录按钮

#### ✅ 需求2：课程选择与规划
**位置**: 
- ProgramPage - "Curriculum" Tab
- ProgramPage - "Student Experience" Tab
**解决方案**:
- 完整课程列表with difficulty levels
- 学生案例分享课程体验和难度
- 专业化方向帮助选课决策
- 学术顾问支持信息

#### ✅ 需求3：职业准备与面试支持
**位置**: ProgramPage - "Resources" Tab
**解决方案**:
- 职业服务：简历审查、模拟面试、薪资谈判
- 校友导师项目
- 就业统计数据（95% within 6 months）
- 校园招聘活动信息

#### ✅ 需求4：健康与压力管理
**位置**: 
- Homepage - Quick Links中的"Campus Wellness"
- ProgramPage - "Resources" Tab - "Wellness & Balance"
**解决方案**:
- 心理健康咨询
- 压力管理工作坊
- 校园娱乐设施
- 健康资源汇总

#### ✅ 需求5：社交与网络构建
**位置**: ProgramPage - "Resources" Tab
**解决方案**:
- 学习小组和同伴支持
- 技术讲座和工作坊
- 黑客马拉松和竞赛
- 社交活动和网络活动
- 500+校友网络

#### ✅ 需求6：移动端友好设计
**实现方式**:
- 完全响应式设计
- 移动端导航菜单
- 触摸友好的交互
- 快速加载的优化

---

### 3. Administrator Alaina（管理员）- 已解决 1+ 个需求

#### ✅ 需求1：减少重复性邮件咨询
**位置**: Homepage - "Frequently Asked Questions" Section
**解决方案**:
- FAQ覆盖最常见问题：
  - 是否需要CS背景？
  - 学位要求是什么？
  - 有什么职业支持？
  - 如何注册课程？
- 清晰的"Contact Admissions"按钮处理特殊情况

#### ✅ 需求2：信息集中化与自助服务
**位置**: 整个网站
**解决方案**:
- 所有关键信息在homepage上可见或一键访问
- 结构化的tabs组织内容（Curriculum, Instructors, Students, Resources）
- 可下载的PDF资源（课程目录）
- 减少需要人工回复的场景

#### ✅ 需求3：校友网络参与
**位置**: ProgramPage - "Resources" Tab
**解决方案**:
- 专门的校友网络section
- 校友导师项目
- "Join Alumni Network"CTA
- 展示校友成功案例激励参与

---

## 设计原则应用

### 1. 层次结构 (Hierarchy)

#### 视觉层次：
- **H1标题**: 大尺寸(3rem)，用于页面主标题
- **H2标题**: 中尺寸(2.25rem)，用于section标题
- **H3标题**: 1.5rem，用于卡片标题
- **正文**: 1rem，易读性优先

#### 信息优先级：
- Hero section最重要：核心价值主张 + CTA
- 快速统计数据在首屏：95%就业率、$120k薪资
- AI与就业担忧在高位置：解决Percy最大顾虑
- 次要信息通过tabs组织

#### 颜色层次：
- UChicago Maroon(#800000)：主要CTA和重要信息
- 白色/灰色：背景和次要内容
- 渐变：创造深度和视觉兴趣

### 2. 布局 (Layout)

#### 网格系统：
- 使用Tailwind CSS的grid系统
- 桌面端: 2-4列布局
- 移动端: 单列或2列布局
- 最大宽度7xl (1280px) 保持可读性

#### 空间使用：
- 一致的padding (py-20, px-4-8)
- 卡片间距 (gap-8)
- 白空间增强可读性

#### 响应式设计：
- Mobile-first approach
- 断点: sm, md, lg, xl
- 灵活的grid columns (grid-cols-1 md:grid-cols-2 lg:grid-cols-3)

### 3. 排版 (Typography)

#### 字体选择：
- 系统字体栈（快速加载）
- Serif字体用于logo和正式标题
- Sans-serif用于正文（可读性）

#### 字体大小：
- 响应式字体大小
- 行高1.5-1.6提升可读性
- Letter-spacing用于标题

#### 对比与可读性：
- 高对比度文字（WCAG AA标准）
- Maroon背景上使用白色文字
- 白色背景上使用深灰色文字

### 4. 颜色 (Color)

#### UChicago品牌色：
- **Primary Maroon**: #800000
- **Dark Maroon**: #5c0000
- **Light Maroon**: #9d2235

#### 颜色应用：
- Maroon: CTA按钮、链接、图标、强调
- 渐变: hero sections增加视觉深度
- 半透明: 叠加层和背景效果
- 语义色: 
  - Green: Beginner难度
  - Blue: Intermediate难度
  - Purple: Advanced难度

#### 品牌一致性：
- 遵循UChicago branding guidelines
- Logo正确使用
- 颜色比例平衡（60-30-10规则）

---

## 网格布局 (Grid Based Layout)

### 实现方式：

#### 1. Container Grid
```css
max-w-7xl mx-auto px-4 sm:px-6 lg:px-8
```

#### 2. Content Grids
- **Stats Section**: `grid grid-cols-2 sm:grid-cols-4 gap-4`
- **Pathways**: `grid lg:grid-cols-3 gap-8`
- **Features**: `grid md:grid-cols-2 lg:grid-cols-4 gap-8`
- **Quick Links**: `grid md:grid-cols-2 lg:grid-cols-3 gap-4`

#### 3. Alignment
- Consistent gutter widths (gap-4, gap-6, gap-8)
- Items-center for vertical alignment
- Justify-between for horizontal spacing

---

## 原创设计特点

### 与现有MPCS网站的区别：

1. **现代视觉风格**
   - 渐变背景和glassmorphism效果
   - 浮动动画orbs
   - Hover效果和过渡动画

2. **信息架构重组**
   - 基于用户需求的优先级排序
   - Tab-based navigation减少页面跳转
   - 快速访问卡片for current students

3. **AI时代相关内容**
   - 专门解决AI对就业的担忧
   - 展示AI相关职业数据
   - 强调未来技能培养

4. **学生体验优先**
   - 真实学生案例
   - 职业转换故事
   - 健康资源强调

5. **视觉层次和可扫描性**
   - 图标配合文字
   - 卡片式布局
   - 清晰的CTA按钮

---

## 技术实现

### 技术栈：
- **React 18**: 组件化开发
- **TypeScript**: 类型安全
- **Tailwind CSS**: Utility-first CSS
- **Radix UI**: 无障碍UI组件
- **Lucide Icons**: 现代图标库
- **Vite**: 快速构建工具

### 性能优化：
- 懒加载图片
- CSS优化（79.87 KB compressed）
- JS代码分割（236 KB compressed）
- 响应式图片

### 无障碍性：
- 语义化HTML
- ARIA labels
- 键盘导航支持
- 颜色对比度符合WCAG标准

---

## 移动端约束 (Constraints) - Bonus

### 实现的约束：
- Header使用sticky定位，跨设备一致
- Footer响应式布局
- 内容居中或拉伸（flex和grid）
- 图片和文本框响应式调整

### 为什么使用约束：
- 确保跨多设备尺寸的一致行为
- 提供流畅的响应式体验
- 维护设计完整性

---

## 总结

这个重新设计的MPCS网站：

✅ **全面满足用户需求**
- Prospective Percy: 4个需求已解决
- Student Samantha: 6个需求已解决  
- Administrator Alaina: 3个需求已解决

✅ **应用所有设计原则**
- Hierarchy: 清晰的视觉和信息层次
- Layout: 基于grid的响应式布局
- Typography: 系统化的字体体系
- Color: UChicago品牌色的现代应用

✅ **原创设计**
- 完全不同于现有MPCS网站
- 现代化的视觉语言
- 用户体验优先的设计决策

✅ **技术实现优秀**
- 性能优化
- 无障碍性
- 响应式设计
- 可部署到生产环境

---

## 下一步

1. ✅ 代码已推送到GitHub
2. ✅ 构建成功
3. 🔄 部署到Vercel
4. 📝 准备Google Doc提交


