# 图像资源管理

## 图像存放位置

项目中的图像资源应该存放在以下位置：

```
src/assets/images/
├── profile/          # 个人头像
│   ├── profile-main.jpg      # 主头像 (400x400)
│   └── profile-thumbnail.jpg # 缩略图 (200x200)
├── projects/         # 项目截图
│   ├── ecommerce-main.jpg
│   ├── dashboard-main.jpg
│   ├── mobile-framework-main.jpg
│   ├── chatbot-main.jpg
│   ├── education-main.jpg
│   └── finance-app-main.jpg
├── icons/           # 图标资源
│   ├── logo.svg
│   └── favicon.ico
└── backgrounds/     # 背景图片
    ├── hero-bg.jpg
    └── pattern.png
```

## 当前使用情况

目前项目中使用了以下外部图像资源：

### 个人头像
- **位置**: `src/components/Hero.tsx`
- **当前**: 使用 Unsplash 外部链接
- **建议**: 替换为 `src/assets/images/profile/profile-main.jpg`

### 项目截图
- **位置**: `src/data/projects.ts` (6个项目)
- **当前**: 使用 Unsplash 外部链接
- **建议**: 替换为对应的本地项目截图

## 最佳实践

### 1. 图像优化
- **头像**: 400x400px, JPG/PNG, < 100KB
- **项目截图**: 400x300px, JPG, < 200KB
- **图标**: SVG 格式优先，支持缩放
- **背景图**: WebP 格式，支持渐进加载

### 2. 命名规范
- 使用小写字母和连字符
- 描述性文件名: `project-name-feature.jpg`
- 避免特殊字符和空格

### 3. 懒加载
所有图像都应该启用懒加载：
```tsx
<img 
  src={imagePath} 
  alt="描述文字"
  loading="lazy"
/>
```

### 4. 备用方案
为每个图像提供备用文本和加载失败处理：
```tsx
<img 
  src={imagePath} 
  alt="项目名称截图"
  onError={(e) => {
    e.target.src = '/src/assets/images/projects/placeholder.jpg'
  }}
/>
```

## 更新组件

要将外部图像替换为本地图像，请：

1. 将图像文件放入对应的 `src/assets/images/` 子目录
2. 更新组件中的 `src` 属性路径
3. 确保启用 `loading="lazy"` 属性
4. 添加适当的 `alt` 文本

## 性能考虑

- 使用适当的图像格式 (WebP > JPG > PNG)
- 压缩图像以减少文件大小
- 实施懒加载以提高页面加载速度
- 考虑使用 CDN 托管大型图像