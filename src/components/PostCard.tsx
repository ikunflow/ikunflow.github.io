import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import type { Post } from "@/data/posts";
import { formatDate } from "@/data/posts";
import TagBadge from "./TagBadge";
import LikeButton from "./LikeButton";

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="group flex flex-col h-full rounded-xl border border-stone-200 bg-white/60 backdrop-blur-sm overflow-hidden hover:shadow-soft hover:border-accent/20 transition-all duration-300">
      <Link to={`/posts/${post.slug}`} className="block p-6 flex-1">
        <div className="flex items-center gap-3 text-xs text-stone-500 mb-4">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readingTime} 分钟
          </span>
        </div>

        <h3 className="font-serif text-xl font-semibold text-ink group-hover:text-accent transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="mt-3 text-sm text-stone-600 line-clamp-3 leading-relaxed">
          {post.summary}
        </p>

        {post.tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <TagBadge key={tag} tag={tag} />
            ))}
          </div>
        )}
      </Link>

      <div className="px-6 pb-6 flex items-center justify-between">
        <Link
          to={`/posts/${post.slug}`}
          className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
        >
          阅读全文
          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <LikeButton contentType="posts" contentId={post.slug} />
      </div>
    </article>
  );
}
