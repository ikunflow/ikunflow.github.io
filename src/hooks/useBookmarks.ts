import { useEffect, useState } from "react";
import {
  getBookmarks,
  createBookmark,
  updateBookmark,
  deleteBookmark,
  Bookmark,
} from "@/lib/bookmarks";
import { getCache, setCache, clearCache } from "@/lib/cache";

const CACHE_KEY = "cache_bookmarks";

export function useAllBookmarks() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const cached = getCache<Bookmark[]>(CACHE_KEY, 10 * 60 * 1000);
    if (cached && cached.length > 0) {
      setBookmarks(cached);
      setLoading(false);
    }

    getBookmarks()
      .then((data) => {
        if (!cancelled) {
          if (data.length > 0) {
            setBookmarks(data);
            setCache(CACHE_KEY, data);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { bookmarks, loading, error, refetch: () => window.location.reload() };
}

export { createBookmark, updateBookmark, deleteBookmark, clearCache };
