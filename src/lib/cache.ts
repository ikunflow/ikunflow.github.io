/**
 * 本地缓存工具：缓存 Firestore 数据，减少重复网络请求
 * 数据带时间戳，过期自动失效
 */

const DEFAULT_TTL = 5 * 60 * 1000; // 5 分钟

interface CacheEntry<T> {
  data: T;
  ts: number;
}

export function getCache<T>(key: string, ttl = DEFAULT_TTL): T | null {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return null;
    const entry = JSON.parse(raw) as CacheEntry<T>;
    if (Date.now() - entry.ts > ttl) {
      localStorage.removeItem(key);
      return null;
    }
    return entry.data;
  } catch {
    return null;
  }
}

export function setCache<T>(key: string, data: T): void {
  try {
    const entry: CacheEntry<T> = { data, ts: Date.now() };
    localStorage.setItem(key, JSON.stringify(entry));
  } catch {
    // localStorage 满了或不可用，忽略
  }
}

export function clearCache(key?: string): void {
  try {
    if (key) {
      localStorage.removeItem(key);
    } else {
      // 清除所有博客相关缓存
      ["cache_posts", "cache_games", "cache_profile"].forEach((k) =>
        localStorage.removeItem(k)
      );
    }
  } catch {
    // 忽略
  }
}
