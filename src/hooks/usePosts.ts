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

export function useAllPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    getPosts()
      .then((data) => {
        if (!cancelled) {
          setPosts(data.length > 0 ? data : (localPosts as Post[]));
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setPosts(localPosts as Post[]);
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
    getPostBySlug(slug)
      .then((data) => {
        if (!cancelled) {
          setPost(data || (getLocalPostBySlug(slug) as Post | null));
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setPost(getLocalPostBySlug(slug) as Post | null);
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

export { createPost, updatePost, deletePost };
