import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Gamepad2 } from "lucide-react";
import { useMemo } from "react";
import { useAllPosts } from "@/hooks/usePosts";
import { useAllGames } from "@/hooks/useGames";
import { useProfile } from "@/hooks/useProfile";
import { formatDisplayDate } from "@/lib/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostCard from "@/components/PostCard";
import GameCard from "@/components/GameCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  const { posts, loading } = useAllPosts();
  const { games: allGames } = useAllGames();
  const { profile } = useProfile();
  const featuredPosts = useMemo(
    () => posts.filter((post) => post.featured),
    [posts]
  );
  const recentPosts = useMemo(() => posts.slice(0, 3), [posts]);
  const featuredGames = useMemo(() => allGames.filter((g) => g.featured), [allGames]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-stone-200/60">
          {profile.background ? (
            <div className="absolute inset-0">
              <img src={profile.background} alt="" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-warm-100/50 via-paper to-stone-100/30" />
          )}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 -left-24 w-72 h-72 bg-warm-200/30 rounded-full blur-3xl" />

          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
            <div className="max-w-2xl text-center mx-auto">
              <AnimatedSection>
                <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${
                  profile.background ? "text-white" : "text-ink"
                }`}>
                  Hi~
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <p className={`mt-4 text-lg sm:text-xl leading-relaxed ${
                  profile.background ? "text-white/80" : "text-stone-600"
                }`}>
                  {profile.name} 的小窝，偶尔写点东西、做点游戏。
                </p>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <Link
                    to="/posts"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                      profile.background
                        ? "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                        : "bg-ink text-white hover:bg-ink/90"
                    }`}
                  >
                    看看文章
                  </Link>
                  <Link
                    to="/games"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                      profile.background
                        ? "bg-white/10 text-white/90 hover:bg-white/20 border border-white/20"
                        : "border border-stone-300 text-stone-700 hover:border-accent/40"
                    }`}
                  >
                    玩玩游戏
                  </Link>
                  <Link
                    to="/bookmarks"
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                      profile.background
                        ? "bg-white/10 text-white/90 hover:bg-white/20 border border-white/20"
                        : "border border-stone-300 text-stone-700 hover:border-accent/40"
                    }`}
                  >
                    翻翻收藏
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {featuredPosts.length > 0 && (
          <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                    精选文章
                  </h2>
                  <p className="mt-1 text-sm text-stone-500">
                    值得反复阅读的内容
                  </p>
                </div>
                <Link
                  to="/posts"
                  className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                >
                  查看全部
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post, index) => (
                <AnimatedSection key={post.slug} delay={100 * (index + 1)}>
                  <PostCard post={post} />
                </AnimatedSection>
              ))}
            </div>
          </section>
        )}

        {featuredGames.length > 0 && (
          <section className="border-t border-stone-200/60 bg-stone-50/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
              <AnimatedSection>
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-xs text-stone-600 mb-3">
                      <Gamepad2 className="h-3.5 w-3.5 text-accent" />
                      <span>独立游戏</span>
                    </div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                      精选游戏作品
                    </h2>
                    <p className="mt-1 text-sm text-stone-500">
                      一个人做的小游戏，也是一次完整的表达
                    </p>
                  </div>
                  <Link
                    to="/games"
                    className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                  >
                    查看全部
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </AnimatedSection>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredGames.map((game, index) => (
                  <AnimatedSection key={game.id} delay={100 * (index + 1)}>
                    <GameCard game={game} />
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>
        )}

        <section className="border-t border-stone-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <AnimatedSection>
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-ink">
                    最新动态
                  </h2>
                  <p className="mt-1 text-sm text-stone-500">
                    最近的思考与记录
                  </p>
                </div>
                <Link
                  to="/posts"
                  className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark transition-colors"
                >
                  全部文章
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </AnimatedSection>

            <div className="max-w-3xl">
              {loading ? (
                <p className="text-stone-500 py-6">加载文章中...</p>
              ) : (
                recentPosts.map((post, index) => (
                  <AnimatedSection key={post.slug} delay={100 * (index + 1)}>
                    <article className="group py-6 border-b border-stone-200/60 last:border-b-0">
                      <Link to={`/posts/${post.slug}`}>
                        <div className="text-xs text-stone-400 mb-2">
                          {formatDisplayDate(post.date)}
                        </div>
                        <h3 className="font-serif text-lg font-semibold text-ink group-hover:text-accent transition-colors">
                          {post.title}
                        </h3>
                        <p className="mt-2 text-sm text-stone-600 line-clamp-2 leading-relaxed">
                          {post.summary}
                        </p>
                      </Link>
                    </article>
                  </AnimatedSection>
                ))
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
