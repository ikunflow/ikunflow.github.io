import matter from "gray-matter";

import helloWorldRaw from "./hello-world.md?raw";
import viteReactRaw from "./vite-react-static-blog.md?raw";
import winterRaw from "./winter-morning-thoughts.md?raw";

export interface Post {
  slug: string;
  title: string;
  date: string;
  summary: string;
  tags: string[];
  featured?: boolean;
  readingTime: number;
  content: string;
}

const rawFiles: Record<string, string> = {
  "hello-world": helloWorldRaw,
  "vite-react-static-blog": viteReactRaw,
  "winter-morning-thoughts": winterRaw,
};

function parsePost(slug: string, raw: string): Post {
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? new Date().toISOString().split("T")[0],
    summary: data.summary ?? "",
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: data.featured === true,
    readingTime: data.readingTime ?? Math.ceil(content.length / 500),
    content,
  };
}

export const posts: Post[] = Object.entries(rawFiles)
  .map(([slug, raw]) => parsePost(slug, raw))
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): Post[] {
  return posts.filter((post) => post.featured);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tagSet.add(tag)));
  return Array.from(tagSet);
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter((post) => post.tags.includes(tag));
}

export function formatDate(date: string): string {
  const d = new Date(date);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}
