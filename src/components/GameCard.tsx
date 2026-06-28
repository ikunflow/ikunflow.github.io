import { Link } from "react-router-dom";
import { ExternalLink, Eye, Heart } from "lucide-react";
import type { Game } from "@/lib/games";
import { useViewCount } from "@/hooks/useViewCount";
import { useLikes } from "@/hooks/useLikes";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const { views } = useViewCount("games", game.slug);
  const { likes, liked, toggleLike } = useLikes("games", game.slug);

  return (
    <Link
      to={`/games/${game.slug}`}
      className="group flex flex-col h-full rounded-xl border border-stone-200 bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-soft hover:border-accent/20 transition-all duration-300"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img
          src={game.cover}
          alt={game.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute top-3 left-3">
          <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-medium text-ink shadow-sm">
            {game.genre}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-accent transition-colors">
          {game.title}
        </h3>

        <p className="mt-3 text-sm text-stone-600 leading-relaxed flex-1 line-clamp-3">
          {game.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {(game.tags || []).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded text-xs text-stone-500 border border-stone-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {views}
          </span>
          <span
            className={`inline-flex items-center gap-1 ${liked ? "text-accent" : ""}`}
          >
            <Heart className={`h-3.5 w-3.5 ${liked ? "fill-current" : ""}`} />
            {likes}
          </span>
          {(game.devLogs || []).length > 0 && (
            <span className="text-stone-400">
              {game.devLogs.length} 篇日志
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
