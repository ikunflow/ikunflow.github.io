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
            <div className="max-w-3xl">
              <AnimatedSection>
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border text-xs mb-6 ${
                  profile.background ? "bg-white/20 border-white/30 text-white/90" : "bg-white/70 border-stone-200 text-stone-600"
                }`}>
                  <Sparkles className="h-3.5 w-3.5 text-accent" />
                  <span>欢迎来访</span>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={100}>
                <h1 className={`font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${
                  profile.background ? "text-white" : "text-ink"
                }`}>
                  在代码与文字之间，
                  <br />
                  <span className="text-accent">寻找生活的诗意。</span>
                </h1>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <p className={`mt-6 text-lg sm:text-xl leading-relaxed max-w-2xl ${
                  profile.background ? "text-white/80" : "text-stone-600"
                }`}>
                  这里是 {profile.name} 的个人空间，记录独立游戏开发、技术学习、产品思考与生活碎片。慢下来，才能看得更清楚。
                </p>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    to="/posts"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors shadow-glow"
                  >
                    浏览文章
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-stone-300 text-stone-700 text-sm font-medium hover:border-accent/40 hover:bg-warm-50 transition-colors"
                  >
                    了解更多
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
