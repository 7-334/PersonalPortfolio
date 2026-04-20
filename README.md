# 个人作品集网站

一个现代化的个人作品集网站，展示开发者技能、项目经验和联系方式。

## 🛠 技术栈

### 前端技术
- **React 19** - 现代化的用户界面库
- **TypeScript** - 类型安全的 JavaScript 超集
- **Vite** - 快速的前端构建工具
- **Tailwind CSS** - 实用优先的 CSS 框架

### 开发工具
- **ESLint** - JavaScript 代码检查工具
- **Prettier** - 代码格式化工具
- **Git** - 版本控制系统

## 📁 项目结构

```
PersonalPortfolio/
├── index.html              # HTML 入口文件
├── package.json            # 项目依赖和脚本配置
├── vite.config.ts          # Vite 构建配置
├── tailwind.config.js      # Tailwind CSS 配置
├── tsconfig.json           # TypeScript 配置
├── tsconfig.node.json      # Node.js 相关 TypeScript 配置
├── postcss.config.js       # PostCSS 配置
├── src/                    # 源代码目录
│   ├── main.tsx           # 应用程序入口点
│   ├── index.css          # 全局样式文件
│   ├── App.tsx            # 根组件
│   ├── components/        # 可复用组件
│   │   ├── Header.tsx     # 网站头部导航
│   │   ├── Hero.tsx       # 首屏英雄区域
│   │   ├── About.tsx      # 关于我介绍
│   │   ├── Projects.tsx   # 项目展示
│   │   ├── Contact.tsx    # 联系方式
│   │   └── Footer.tsx     # 网站底部
│   └── data/              # 数据文件
│       ├── projects.ts    # 项目数据（接口定义和示例数据）
│       └── skills.ts      # 技能数据（接口定义和技能列表）
└── README.md              # 项目说明文档
```

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

这将在 `http://localhost:5173` 启动开发服务器。

### 构建生产版本

```bash
npm run build
```

构建文件将输出到 `dist` 目录。

### 预览生产版本

```bash
npm run preview
```

## 🎨 设计特色

- **深色主题** - 采用深色背景 (#0a0a0a) 和白色文字，提供舒适的视觉体验
- **渐变色强调** - 使用渐变色作为视觉强调元素
- **平滑动画** - 添加了平滑的滚动和交互动画效果
- **响应式设计** - 完美适配各种屏幕尺寸，包括移动端

## 📋 功能模块

### 1. 导航栏 (Header)
- 响应式导航菜单
- 移动端汉堡菜单
- 平滑滚动到各部分内容

### 2. 首屏介绍 (Hero)
- 个人介绍和职业定位
- 主要技能展示
- 联系按钮和社交链接

### 3. 关于我 (About)
- 个人简介和经验介绍
- 技能展示（支持图标和熟练度）
- 可扩展的技能数据结构

### 4. 项目展示 (Projects)
- 项目卡片网格布局
- 项目详情展示
- 技术栈标签
- 项目链接和 GitHub 仓库链接

### 5. 联系方式 (Contact)
- 联系表单
- 社交媒体链接
- 邮箱和电话信息

### 6. 页脚 (Footer)
- 版权信息
- 回到顶部按钮

## 🔧 数据管理

项目使用 TypeScript 接口定义数据结构，确保类型安全：

- `Project` 接口定义项目数据结构
- `Skill` 接口定义技能数据结构
- 数据存储在 `src/data/` 目录中，便于维护和更新

## 📱 移动端适配

- 使用 Tailwind CSS 的响应式工具类
- 移动端友好的导航菜单
- 触摸友好的交互设计
- 优化的字体大小和间距

## ⚡ 性能优化

- 图片懒加载
- 组件按需渲染
- Vite 的快速热更新
- 优化的 CSS 和 JavaScript 打包

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

ISC License

## 📞 联系方式

- 邮箱: example@email.com
- GitHub: [your-username](https://github.com/your-username)
- LinkedIn: [your-profile](https://linkedin.com/in/your-profile)

---

**注意**: 这是一个模板项目，实际使用时请根据个人情况进行定制化修改。