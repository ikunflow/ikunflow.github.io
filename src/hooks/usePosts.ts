import { useEffect, useState } from "react";
import {
  getPosts,
  getPostBySlug,
  createPost,
  updatePost,
  deletePost,
  Post,
} from "@/lib/posts";
import { posts as localPosts, getPostBySlug as getLocalPostBySlug } from "@/data/posts";
import { getCache, setCache, clearCache } from "@/lib/cache";

const CACHE_KEY = "cache_posts";
const SLUG_CACHE_PREFIX = "cache_post_";

export function useAllPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    // 1. 先读本地缓存，秒开
    const cached = getCache<Post[]>(CACHE_KEY, 10 * 60 * 1000); // 10 分钟
    if (cached && cached.length > 0) {
      setPosts(cached);
      setLoading(false);
    }

    // 2. 后台请求 Firestore 更新
    getPosts()
      .then((data) => {
        if (!cancelled) {
          if (data.length > 0) {
            setPosts(data);
            setCache(CACHE_KEY, data);
          } else if (!cached) {
            setPosts(localPosts as Post[]);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          if (!cached) setPosts(localPosts as Post[]);
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { posts, loading, error, refetch: () => window.location.reload() };
}

export function usePost(slug: string | undefined) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    const slugCacheKey = SLUG_CACHE_PREFIX + slug;
    const cached = getCache<Post | null>(slugCacheKey, 10 * 60 * 1000);
    if (cached) {
      setPost(cached);
      setLoading(false);
    }

    getPostBySlug(slug)
      .then((data) => {
        if (!cancelled) {
          const result = data || (getLocalPostBySlug(slug) as Post | null);
          setPost(result);
          if (result) setCache(slugCacheKey, result);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          if (!cached) setPost(getLocalPostBySlug(slug) as Post | null);
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { post, loading, error };
}

// 写操作后清除缓存
export { createPost, updatePost, deletePost, clearCache };
