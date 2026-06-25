import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { posts, getPostBySlug, formatDate } from "@/data/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import TagBadge from "@/components/TagBadge";
import ViewCounter from "@/components/ViewCounter";
import LikeButton from "@/components/LikeButton";
import AnimatedSection from "@/components/AnimatedSection";

export default function PostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const currentIndex = posts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <article>
          <header className="border-b border-stone-200/60 bg-gradient-to-b from-warm-100/30 to-paper">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
              <AnimatedSection>
                <Link
                  to="/posts"
                  className="inline-flex items-center gap-1 text-sm text-stone-500 hover:text-accent transition-colors mb-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                  返回文章列表
                </Link>

                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-ink leading-tight max-w-3xl">
                  {post.title}
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-stone-500">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readingTime} 分钟阅读
                  </span>
                  <ViewCounter contentType="posts" contentId={post.slug} />
                  <LikeButton contentType="posts" contentId={post.slug} />
                </div>

                {post.tags.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <TagBadge key={tag} tag={tag} />
                    ))}
                  </div>
                )}
              </AnimatedSection>
            </div>
          </header>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
            <div className="max-w-3xl mx-auto">
              <AnimatedSection delay={100}>
                <div className="prose-custom text-ink">
                  <MarkdownRenderer content={post.content} />
                </div>
              </AnimatedSection>
            </div>
          </div>

          <nav className="border-t border-stone-200/60 bg-stone-50/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10">
              <div className="max-w-3xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                {prevPost ? (
                  <Link
                    to={`/posts/${prevPost.slug}`}
                    className="group flex items-center gap-3 p-4 rounded-lg border border-stone-200 bg-white/60 hover:border-accent/20 hover:shadow-soft transition-all"
                  >
                    <ChevronLeft className="h-5 w-5 text-stone-400 group-hover:text-accent transition-colors" />
                    <div className="text-left">
                      <div className="text-xs text-stone-400 mb-1">上一篇</div>
                      <div className="text-sm font-medium text-ink group-hover:text-accent transition-colors line-clamp-1">
                        {prevPost.title}
                      </div>
                    </div>
                  </Link>
                ) : (
                  <div />
                )}

                {nextPost ? (
                  <Link
                    to={`/posts/${nextPost.slug}`}
                    className="group flex items-center gap-3 p-4 rounded-lg border border-stone-200 bg-white/60 hover:border-accent/20 hover:shadow-soft transition-all"
                  >
                    <div className="text-right">
                      <div className="text-xs text-stone-400 mb-1">下一篇</div>
                      <div className="text-sm font-medium text-ink group-hover:text-accent transition-colors line-clamp-1">
                        {nextPost.title}
                      </div>
                    </div>
                    <ChevronRight className="h-5 w-5 text-stone-400 group-hover:text-accent transition-colors" />
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </nav>
        </article>
      </main>

      <Footer />
    </div>
  );
}
