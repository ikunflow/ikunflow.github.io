export interface WorkItem {
  id: string;
  title: string;
  category: 'ta' | 'dev';
  categoryName: string;
  bvid: string; // Bilibili BV号, 例如 'BV1GJ411x7h7'
  description: string;
  longDescription?: string;
  coverImage?: string;
  tags: string[];
  date: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export interface AuthorInfo {
  name: string;
  title: string;
  bio: string;
  bilibiliSpaceUrl: string;
  githubUrl?: string;
  email?: string;
  skills: string[];
}

export const AUTHOR_INFO: AuthorInfo = {
  name: '个人名称/网名',
  title: 'Game Dev & Tech Artist Portfolio',
  bio: '游戏开发 & 游戏技术美术作品集。擅长 Unity / Cocos / UE 引擎，精通 C++、C#、TS、Lua 及 HLSL / UnityShader。',
  bilibiliSpaceUrl: 'https://space.bilibili.com',
  githubUrl: 'https://github.com',
  email: 'your_email@example.com',
  skills: [
    'Unity',
    'Cocos',
    'UE',
    'C++',
    'C#',
    'TS',
    'Lua',
    'HLSL',
    'UnityShader'
  ]
};

export const CATEGORIES = [
  { id: 'all', name: '全部作品', desc: '包含技术美术与游戏程序开发的所有作品' },
  { id: 'ta', name: 'TA 游戏技术美术', desc: '涵盖 HLSL / UnityShader 编写、UE/Unity 渲染管线、图形学算法与 GPU 特效' },
  { id: 'dev', name: '游戏程序开发', desc: '涵盖 Unity / Cocos / UE 游戏核心框架、C++/C#/TS/Lua 系统架构与引擎工具链' }
];

export const WORKS_DATA: WorkItem[] = [
  {
    id: 'template-work-1',
    title: '作品示例标题（修改为你的作品名称）',
    category: 'ta', // 'ta' 表示 TA技术美术作品，'dev' 表示 游戏程序开发作品
    categoryName: 'TA 技术美术',
    bvid: 'BV1GJ411x7h7', // 替换为你B站视频的BV号
    description: '这里填写作品简短概述描述，展示在列表卡片上。',
    longDescription: `### 核心技术亮点与拆解
- **技术点一**：支持使用 Markdown 格式撰写详细的技术实现拆解。
- **技术点二**：可以介绍核心算法、管线设计或渲染效果优化。
- **技术点三**：点击卡片可直接在大屏预览弹窗中查看。`,
    tags: ['Unity', 'HLSL', 'UnityShader', 'C#'],
    date: '2024-06',
    githubUrl: 'https://github.com',
    demoUrl: 'https://example.com',
    featured: true
  }
];
