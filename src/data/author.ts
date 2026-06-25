export interface Author {
  name: string;
  avatar: string;
  bio: string;
  location: string;
  role: string;
  social: {
    github?: string;
    twitter?: string;
    email?: string;
    rss?: string;
  };
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export const author: Author = {
  name: "橙猫猫",
  role: "独立游戏开发者 / 写作者",
  avatar: "/avatar.jpg",
  bio: "热爱技术与文字，也热爱用游戏讲故事。在这里记录独立游戏开发、技术学习、产品思考与生活碎片。",
  location: "中国 · 上海",
  social: {
    github: "https://github.com",
    twitter: "https://twitter.com",
    email: "mailto:hello@example.com",
    rss: "#/rss",
  },
};

export const timeline: TimelineItem[] = [
  {
    year: "2024",
    title: "开始经营这个博客",
    description: "决定用更慢的方式记录独立游戏开发与技术生活，搭建了这个基于 GitHub Pages 的静态博客。",
  },
  {
    year: "2023",
    title: "发布第一款独立游戏",
    description: "经过三个月的业余时间开发，完成了第一个完整的 Roguelike 小游戏，并在 itch.io 上发布。",
  },
  {
    year: "2022",
    title: "成为独立开发者",
    description: "离开大厂，开始以自己的节奏做游戏、写代码、探索生活方式。",
  },
  {
    year: "2020",
    title: "第一次参加 Game Jam",
    description: "和两位朋友组队参加了 Ludum Dare，48 小时内做出了一款粗糙但完整的平台跳跃游戏。",
  },
  {
    year: "2019",
    title: "写下第一篇技术博客",
    description: "在 Medium 上发表了第一篇关于前端工程化的文章，意外收获了很多共鸣。",
  },
  {
    year: "2017",
    title: "入门编程",
    description: "在大学图书馆里借了一本 JavaScript 入门书，从此一发不可收拾。",
  },
];
