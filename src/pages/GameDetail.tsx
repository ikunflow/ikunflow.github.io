import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Tag, FileText } from "lucide-react";
import { useGame } from "@/hooks/useGames";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function GameDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { game, loading, error } = useGame(slug);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-ink/60">加载中...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !game) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center justify-center px-4">
          <h1 className="text-xl font-bold text-ink mb-2">游戏未找到</h1>
          <p className="text-ink/60 mb-4">{error || "该游戏不存在"}</p>
          <Link
            to="/games"
            className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
          >
            返回游戏列表
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* 封面区 */}
        <section className="relative">
          <div className="aspect-[21/9] w-full overflow-hidden bg-stone-100">
            <img
              src={game.cover}
              alt={game.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-10">
              <AnimatedSection>
                <Link
                  to="/games"
                  className="inline-flex items-center gap-1.5 text-white/80 hover:text-white text-sm mb-4 transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  返回游戏列表
                </Link>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-medium text-white border border-white/20">
                    {game.genre}
                  </span>
                  {game.featured && (
                    <span className="px-3 py-1 rounded-full bg-accent/80 text-xs font-medium text-white">
                      精选
                    </span>
                  )}
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                  {game.title}
                </h1>
                <p className="mt-3 text-white/80 max-w-2xl text-lg">
                  {game.summary}
                </p>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* 主内容区 */}
            <div className="lg:col-span-2">
              <AnimatedSection delay={100}>
                <div className="prose prose-stone max-w-none">
                  <h2 className="font-serif text-2xl font-bold text-ink mb-4">游戏介绍</h2>
                  <div className="text-stone-600 leading-relaxed whitespace-pre-line">
                    {game.description}
                  </div>
                </div>
              </AnimatedSection>

              {/* 开发日志 */}
              {(game.devLogs || []).length > 0 && (
                <AnimatedSection delay={200}>
                  <div className="mt-12 pt-10 border-t border-stone-200/60">
                    <h2 className="font-serif text-2xl font-bold text-ink mb-6 flex items-center gap-2">
                      <FileText className="h-6 w-6 text-accent" />
                      开发日志
                    </h2>
                    <div className="space-y-6">
                      {game.devLogs.map((log) => (
                        <article
                          key={log.id || log.date}
                          className="paper p-6 rounded-xl shadow-sm"
                        >
                          <div className="flex items-center gap-3 mb-3">
                            <Calendar className="h-4 w-4 text-accent" />
                            <span className="text-sm text-stone-500">{log.date}</span>
                          </div>
                          <h3 className="font-serif text-lg font-semibold text-ink mb-3">
                            {log.title}
                          </h3>
                          <div className="prose prose-stone prose-sm max-w-none">
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                              {log.content}
                            </ReactMarkdown>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </AnimatedSection>
              )}

              {(!game.devLogs || game.devLogs.length === 0) && (
                <AnimatedSection delay={200}>
                  <div className="mt-12 pt-10 border-t border-stone-200/60 text-center py-10">
                    <FileText className="h-10 w-10 text-stone-300 mx-auto mb-3" />
                    <p className="text-stone-400">暂无开发日志</p>
                  </div>
                </AnimatedSection>
              )}
            </div>

            {/* 侧边栏 */}
            <aside className="lg:col-span-1">
              <AnimatedSection delay={150}>
                <div className="paper p-6 rounded-xl shadow-sm sticky top-24">
                  {/* 试玩链接 */}
                  {game.demoUrl && (
                    <a
                      href={game.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium mb-6"
                    >
                      <ExternalLink className="h-5 w-5" />
                      试玩游戏
                    </a>
                  )}

                  {/* 标签 */}
                  {(game.tags || []).length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-sm font-medium text-ink/80 mb-3 flex items-center gap-1.5">
                        <Tag className="h-4 w-4" />
                        标签
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {game.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-xs rounded-full bg-accent/10 text-accent-dark"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* 信息 */}
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-stone-500">类型</span>
                      <span className="text-ink font-medium">{game.genre}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-stone-500">开发日志</span>
                      <span className="text-ink font-medium">{(game.devLogs || []).length} 篇</span>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
