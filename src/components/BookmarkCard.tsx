import { ExternalLink } from "lucide-react";
import type { Bookmark } from "@/lib/bookmarks";

export default function BookmarkCard({ bookmark }: { bookmark: Bookmark }) {
  const safeUrl = /^https?:\/\//.test(bookmark.url) ? bookmark.url : `https://${bookmark.url}`;

  const domain = (() => {
    try {
      return new URL(safeUrl).hostname;
    } catch {
      return bookmark.url;
    }
  })();

  const faviconUrl = bookmark.favicon || `https://www.google.com/s2/favicons?domain=${domain}&sz=32`;

  return (
    <a
      href={safeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-5 rounded-xl border border-stone-200/80 bg-white/60 hover:border-accent/30 hover:shadow-soft transition-all"
    >
      <div className="flex items-start gap-3">
        <img
          src={faviconUrl}
          alt=""
          className="w-8 h-8 rounded mt-0.5 shrink-0 bg-stone-100"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "";
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="font-medium text-ink group-hover:text-accent transition-colors truncate">
              {bookmark.title}
            </h3>
            <ExternalLink className="h-3.5 w-3.5 text-stone-400 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          {bookmark.description && (
            <p className="mt-1 text-sm text-stone-500 line-clamp-2">
              {bookmark.description}
            </p>
          )}
          <p className="mt-1.5 text-xs text-stone-400 truncate">{domain}</p>
        </div>
      </div>
    </a>
  );
}
