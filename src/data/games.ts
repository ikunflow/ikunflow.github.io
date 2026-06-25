export interface Game {
  id: string;
  title: string;
  genre: string;
  summary: string;
  description: string;
  engine: string;
  platforms: string[];
  techStack: string[];
  cover: string;
  demoUrl?: string;
  repoUrl?: string;
  featured?: boolean;
  releaseDate?: string;
}

export const games: Game[] = [
  {
    id: "pixel-dungeon",
    title: "像素地牢",
    genre: "Roguelike",
    summary: "一款轻量回合制地牢探险游戏，每次进入都是全新的地图。",
    description:
      "《像素地牢》是我学习游戏开发以来的第一个完整作品。游戏采用回合制战斗，玩家需要在随机生成的地牢中收集装备、击败怪物并寻找出口。整个项目耗时三个月，从角色移动到随机地图生成，每个细节都让我学到了很多。",
    engine: "Unity",
    platforms: ["PC", "Web"],
    techStack: ["C#", "Unity", "Aseprite"],
    cover: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com",
    repoUrl: "https://github.com",
    featured: true,
    releaseDate: "2024-06",
  },
  {
    id: "star-collector",
    title: "星尘收集者",
    genre: "平台解谜",
    summary: "在漂浮的星球之间跳跃，收集散落的星尘并解开古老遗迹的谜题。",
    description:
      "《星尘收集者》是一款更注重氛围的平台解谜游戏。玩家扮演一名在废弃星球间旅行的探索者，通过操控重力方向来穿越复杂地形。美术上采用了低多边形风格，音乐则使用合成器制作，希望营造出一种孤独而温暖的太空感。",
    engine: "Godot",
    platforms: ["PC", "Mac"],
    techStack: ["GDScript", "Godot 4", "Blender"],
    cover: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&w=800&q=80",
    demoUrl: "https://example.com",
    featured: true,
    releaseDate: "2024-11",
  },
  {
    id: "tea-shop-sim",
    title: "山间茶舍",
    genre: "模拟经营",
    summary: "在山脚下经营一家小茶舍，招待旅人、种植茶叶、聆听故事。",
    description:
      "《山间茶舍》是一款慢节奏的模拟经营游戏。玩家需要种植不同品种的茶叶、调配茶饮、布置茶舍，并倾听客人们的故事。这是我尝试将叙事与经营结合的一次实验，希望能做出有东方美学的治愈体验。",
    engine: "Unity",
    platforms: ["PC", "Mobile"],
    techStack: ["C#", "Unity", "FMOD"],
    cover: "https://images.unsplash.com/photo-1516916759473-600c07bc99d7?auto=format&fit=crop&w=800&q=80",
    repoUrl: "https://github.com",
    featured: false,
    releaseDate: "2025-03",
  },
];

export function getFeaturedGames(): Game[] {
  return games.filter((game) => game.featured);
}

export function getGameById(id: string): Game | undefined {
  return games.find((game) => game.id === id);
}

export function getAllEngines(): string[] {
  const engines = new Set<string>();
  games.forEach((game) => engines.add(game.engine));
  return Array.from(engines);
}

export function getAllPlatforms(): string[] {
  const platforms = new Set<string>();
  games.forEach((game) => game.platforms.forEach((p) => platforms.add(p)));
  return Array.from(platforms);
}
