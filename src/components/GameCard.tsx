import { ExternalLink, Github, Monitor, Smartphone, Eye, Heart } from "lucide-react";
import type { Game } from "@/data/games";
import { useViewCount } from "@/hooks/useViewCount";
import { useLikes } from "@/hooks/useLikes";

const platformIcons: Record<string, React.ReactNode> = {
  PC: <Monitor className="h-3.5 w-3.5" />,
  Mac: <Monitor className="h-3.5 w-3.5" />,
  Web: <ExternalLink className="h-3.5 w-3.5" />,
  Mobile: <Smartphone className="h-3.5 w-3.5" />,
};

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  const { views } = useViewCount("games", game.id);
  const { likes, liked, toggleLike } = useLikes("games", game.id);

  return (
    <article className="group flex flex-col h-full rounded-xl border border-stone-200 bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-soft hover:border-accent/20 transition-all duration-300">
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
        <div className="flex items-center gap-2 text-xs text-stone-500 mb-3">
          <span>{game.engine}</span>
          <span>·</span>
          <span>{game.releaseDate}</span>
        </div>

        <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-accent transition-colors">
          {game.title}
        </h3>

        <p className="mt-3 text-sm text-stone-600 leading-relaxed flex-1">
          {game.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {game.platforms.map((platform) => (
            <span
              key={platform}
              className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-warm-100 text-xs text-stone-600"
            >
              {platformIcons[platform] || null}
              {platform}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {game.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-xs text-stone-500 border border-stone-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center gap-4 text-xs text-stone-500">
          <span className="inline-flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {views}
          </span>
          <button
            type="button"
            onClick={toggleLike}
            className={`inline-flex items-center gap-1 transition-colors ${
              liked ? "text-accent" : "hover:text-accent"
            }`}
            aria-label={liked ? "取消点赞" : "点赞"}
          >
            <Heart
              className={`h-3.5 w-3.5 ${liked ? "fill-current" : ""}`}
            />
            {likes}
          </button>
        </div>

        <div className="mt-4 flex items-center gap-3 pt-4 border-t border-stone-100">
          {game.demoUrl && (
            <a
              href={game.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              试玩
            </a>
          )}
          {game.repoUrl && (
            <a
              href={game.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-stone-600 hover:text-accent transition-colors"
            >
              <Github className="h-4 w-4" />
              源码
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
