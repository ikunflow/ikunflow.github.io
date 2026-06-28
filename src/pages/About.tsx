import { Link } from "react-router-dom";
import { MapPin, Coffee, BookOpen, Gamepad2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useProfile } from "@/hooks/useProfile";
import { timeline as defaultTimeline } from "@/data/author";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import AnimatedSection from "@/components/AnimatedSection";

const defaultAboutContent = `## 关于独立游戏

我喜欢一个人或小团队做游戏的感觉。从游戏机制设计、程序实现、美术音效到最后的发布，每一个环节都能学到新东西。我的作品大多使用 Unity 或 Godot 开发，类型涵盖 Roguelike、平台解谜和模拟经营。

如果你对我的游戏感兴趣，可以去[游戏作品页](#/games)看看，或者直接在 itch.io 上搜索我的作品。

## 这个站点

这是一个基于 React + Vite + Tailwind CSS 构建的静态博客，部署在 GitHub Pages 上。所有文章都用 Markdown 书写，简单、轻量、易于维护。

如果你也想拥有一个类似的博客，欢迎参考我的文章《用 Vite + React 搭建一个静态博客》。`;

export default function About() {
  const { profile } = useProfile();
  const content = profile.aboutContent || defaultAboutContent;
  const timelineItems = (profile.timeline && profile.timeline.length > 0) ? profile.timeline : defaultTimeline;

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b border-stone-200/60 bg-gradient-to-b from-warm-100/30 to-paper">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <AnimatedSection>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                关于
              </h1>
              <p className="mt-3 text-stone-600 max-w-2xl">
                一些关于我、关于这个博客，以及关于为什么开始写作的小事。
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <AnimatedSection>
                <div className="sticky top-28">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-warm-200/50 rounded-2xl blur-xl" />
                    <img
                      src={profile.avatar}
                      alt={profile.name}
                      className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border-2 border-white shadow-soft object-cover"
                    />
                  </div>

                  <h2 className="mt-6 font-serif text-2xl font-bold text-ink">
                    {profile.name}
                  </h2>
                  <p className="text-sm text-accent font-medium">{profile.role}</p>

                  <p className="mt-4 text-stone-600 leading-relaxed">
                    {profile.bio}
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-stone-500">
                      <MapPin className="h-4 w-4 text-accent" />
                      {profile.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-500">
                      <Gamepad2 className="h-4 w-4 text-accent" />
                      独立游戏开发者
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-500">
                      <Coffee className="h-4 w-4 text-accent" />
                      咖啡爱好者
                    </div>
                    <div className="flex items-center gap-2 text-sm text-stone-500">
                      <BookOpen className="h-4 w-4 text-accent" />
                      持续学习中
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            <div className="lg:col-span-8">
              <AnimatedSection delay={100}>
                <div className="prose prose-stone max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {content}
                  </ReactMarkdown>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="mt-12 pt-10 border-t border-stone-200/60">
                  <h2 className="font-serif text-2xl font-bold text-ink mb-6">经历时间线</h2>
                  <Timeline items={timelineItems} />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
