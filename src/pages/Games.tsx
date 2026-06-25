import { useState, useMemo } from "react";
import { Gamepad2, Search } from "lucide-react";
import { games, getAllEngines } from "@/data/games";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GameCard from "@/components/GameCard";
import TagBadge from "@/components/TagBadge";
import AnimatedSection from "@/components/AnimatedSection";

export default function Games() {
  const [activeEngine, setActiveEngine] = useState<string>("");
  const engines = getAllEngines();

  const filteredGames = useMemo(() => {
    if (!activeEngine) return games;
    return games.filter((game) => game.engine === activeEngine);
  }, [activeEngine]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b border-stone-200/60 bg-gradient-to-b from-warm-100/30 to-paper">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-xs text-stone-600 mb-6">
                <Gamepad2 className="h-3.5 w-3.5 text-accent" />
                <span>独立游戏</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                游戏作品
              </h1>
              <p className="mt-3 text-stone-600 max-w-2xl">
                这里展示我的独立游戏项目。从 Roguelike 到平台解谜，再到模拟经营，每个作品都是一次学习与表达的旅程。
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-200/60">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <Search className="h-4 w-4" />
                <span>共 {filteredGames.length} 个作品</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <TagBadge
                  tag="全部"
                  active={activeEngine === ""}
                  onClick={() => setActiveEngine("")}
                />
                {engines.map((engine) => (
                  <TagBadge
                    key={engine}
                    tag={engine}
                    active={activeEngine === engine}
                    onClick={() => setActiveEngine(engine)}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGames.map((game, index) => (
              <AnimatedSection key={game.id} delay={100 * (index + 1)}>
                <GameCard game={game} />
              </AnimatedSection>
            ))}
          </div>

          {filteredGames.length === 0 && (
            <AnimatedSection>
              <div className="py-20 text-center">
                <p className="text-stone-500">
                  没有找到使用「{activeEngine}」引擎的作品。
                </p>
              </div>
            </AnimatedSection>
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
