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
    getGames()
      .then((data) => {
        if (!cancelled) {
          setGames(data.length > 0 ? data : localGames.map(adaptLocalGame));
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          setGames(localGames.map(adaptLocalGame));
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
    getGameBySlug(slug)
      .then((data) => {
        if (!cancelled) {
          if (data) {
            setGame(data);
          } else {
            const local = localGames.find((g) => g.id === slug);
            setGame(local ? adaptLocalGame(local) : null);
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!cancelled) {
          const local = localGames.find((g) => g.id === slug);
          setGame(local ? adaptLocalGame(local) : null);
          setError(err.message);
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, [slug]);

  return { game, loading, error };
}

export { createGame, updateGame, deleteGame };
