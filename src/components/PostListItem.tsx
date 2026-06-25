import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";
import type { Post } from "@/lib/posts";
import { formatDisplayDate } from "@/lib/posts";
import TagBadge from "./TagBadge";
import LikeButton from "./LikeButton";

interface PostListItemProps {
  post: Post;
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <article className="group flex flex-col sm:flex-row gap-5 sm:gap-8 py-8 border-b border-stone-200/60 last:border-b-0">
      <div className="sm:w-28 shrink-0">
        <div className="text-xs text-stone-400 uppercase tracking-wider mb-1">
          {new Date(post.date).getFullYear()}
        </div>
        <div className="text-sm font-medium text-stone-600">
          {formatDisplayDate(post.date)}
        </div>
      </div>

      <div className="flex-1 min-w-0">
        <Link to={`/posts/${post.slug}`}>
          <h3 className="font-serif text-lg sm:text-xl font-semibold text-ink group-hover:text-accent transition-colors line-clamp-2">
            {post.title}
          </h3>
        </Link>

        <p className="mt-2 text-sm text-stone-600 line-clamp-2 leading-relaxed">
          {post.summary}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {post.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}

          <span className="flex items-center gap-1 text-xs text-stone-400">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} 分钟
          </span>

          <LikeButton contentType="posts" contentId={post.slug} />
        </div>
      </div>
    </article>
  );
}
