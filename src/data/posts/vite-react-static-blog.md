---
title: 用 Vite + React 搭建一个静态博客
slug: vite-react-static-blog
date: 2024-12-25
summary: 从零开始，用 Vite、React 和 react-markdown 构建一个可部署到 GitHub Pages 的轻量博客。
tags: ["技术", "React", "Vite"]
featured: true
readingTime: 8
---

# 用 Vite + React 搭建一个静态博客

静态博客的魅力在于简单。不需要数据库，不需要服务器，写完 Markdown 构建一下就能部署。

这篇文章会介绍我是如何用 Vite + React 搭建这个博客的，适合想拥有自己博客但又不想维护复杂系统的开发者。

## 技术选型

| 工具 | 用途 |
|------|------|
| Vite | 构建工具，启动快，配置简单 |
| React | UI 框架 |
| Tailwind CSS | 样式方案 |
| react-markdown | 渲染 Markdown |
| react-syntax-highlighter | 代码高亮 |
| gray-matter | 解析 frontmatter |

## 核心思路

每篇文章是一个 `.md` 文件，顶部用 YAML frontmatter 写元数据：

```yaml
---
title: 文章标题
slug: article-slug
date: 2024-12-25
tags: ["技术", "React"]
---
```

正文就是普通的 Markdown。构建时通过 Vite 的 `?raw` import 读取文件内容，再用 `gray-matter` 分离 frontmatter 和正文。

```typescript
import raw from "./posts/hello-world.md?raw";
import matter from "gray-matter";

const { data, content } = matter(raw);
```

## 路由设计

因为部署在 GitHub Pages，我使用了 `HashRouter`，避免刷新页面时出现 404。

主要路由：

- `/` —— 首页
- `/posts` —— 文章列表
- `/posts/:slug` —— 文章详情
- `/about` —— 关于页

## 一点心得

做个人项目最大的敌人是过度设计。很多时候，一个能跑起来的简单方案，比完美的复杂架构更有价值。

希望这篇文章对你有帮助。如果你也在搭博客，欢迎交流。
