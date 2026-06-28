import { useEffect, useState } from "react";
import {
  getGames,
  getGameBySlug,
  createGame,
  updateGame,
  deleteGame,
  Game,
} from "@/lib/games";
import { games as localGames } from "@/data/games";
import { getCache, setCache, clearCache } from "@/lib/cache";

const CACHE_KEY = "cache_games";
const SLUG_CACHE_PREFIX = "cache_game_";

// 将本地旧 Game 结构适配为新的 Game
function adaptLocalGame(g: typeof localGames[number]): Game {
  return {
    id: g.id,
    slug: g.id,
    title: g.title,
    genre: g.genre,
    summary: g.summary,
    description: g.description,
    cover: g.cover,
    demoUrl: g.demoUrl,
    tags: [...(g.techStack || []), ...(g.platforms || [])],
    devLogs: [],
    featured: g.featured,
  };
}

export function useAllGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const cached = getCache<Game[]>(CACHE_KEY, 10 * 60 * 1000);
    if (cached && cached.length > 0) {
      setGames(cached);
      setLoading(false);
    }

    getGames()
      .then((data) => {
        if (!cancelled) {
          if (data.length > 0) {
            setGames(data);
            setCache(CACHE_KEY, data);
          } else if (!cached) {
            setGames(localGames.map(adaptLocalGame));
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          if (!cached) setGames(localGames.map(adaptLocalGame));
          setError(err.message);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, []);

  return { games, loading, error, refetch: () => window.location.reload() };
}

export function useGame(slug: string | undefined) {
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;

    const slugCacheKey = SLUG_CACHE_PREFIX + slug;
    const cached = getCache<Game | null>(slugCacheKey, 10 * 60 * 1000);
    if (cached) {
      setGame(cached);
      setLoading(false);
    }

    getGameBySlug(slug)
      .then((data) => {
        if (!cancelled) {
          if (data) {
            setGame(data);
            setCache(slugCacheKey, data);
          } else {
            const local = localGames.find((g) => g.id === slug);
            setGame(local ? adaptLocalGame(local) : null);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          if (!cached) {
            const local = localGames.find((g) => g.id === slug);
            setGame(local ? adaptLocalGame(local) : null);
          }
          setError(err.message);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, [slug]);

  return { game, loading, error };
}

export { createGame, updateGame, deleteGame, clearCache };
