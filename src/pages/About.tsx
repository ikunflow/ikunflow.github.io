import { Link } from "react-router-dom";
import { MapPin, Coffee, BookOpen, Gamepad2 } from "lucide-react";
import { author, timeline } from "@/data/author";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Timeline from "@/components/Timeline";
import AnimatedSection from "@/components/AnimatedSection";

export default function About() {
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
                      src={author.avatar}
                      alt={author.name}
                      className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-2xl border-2 border-white shadow-soft object-cover"
                    />
                  </div>

                  <h2 className="mt-6 font-serif text-2xl font-bold text-ink">
                    {author.name}
                  </h2>
                  <p className="text-sm text-accent font-medium">{author.role}</p>

                  <p className="mt-4 text-stone-600 leading-relaxed">
                    {author.bio}
                  </p>

                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2 text-sm text-stone-500">
                      <MapPin className="h-4 w-4 text-accent" />
                      {author.location}
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
                <div className="prose-custom max-w-none">
                  <h2>为什么写博客</h2>
                  <p>
                    写作和做游戏很像，都是一种整理思绪、表达想法的方式。很多时候，脑子里的概念是混沌的，只有当它们被写成文字或做成可交互的原型，才会变得清晰。
                  </p>
                  <p>
                    这个博客没有宏大的目标，只是想留下一些痕迹。关于独立游戏开发的笔记、关于技术的思考、关于生活的片段——这些都是真实存在过的证明。
                  </p>

                  <h2>关于独立游戏</h2>
                  <p>
                    我喜欢一个人或小团队做游戏的感觉。从游戏机制设计、程序实现、美术音效到最后的发布，每一个环节都能学到新东西。我的作品大多使用 Unity 或 Godot 开发，类型涵盖 Roguelike、平台解谜和模拟经营。
                  </p>
                  <p>
                    如果你对我的游戏感兴趣，可以去
                    <Link to="/games" className="text-accent border-b border-accent/30 hover:border-accent transition-colors">
                      游戏作品页
                    </Link>
                    看看，或者直接在 itch.io 上搜索我的作品。
                  </p>

                  <h2>这个站点</h2>
                  <p>
                    这是一个基于 React + Vite + Tailwind CSS 构建的静态博客，部署在 GitHub Pages 上。所有文章都用 Markdown 书写，简单、轻量、易于维护。
                  </p>
                  <p>
                    如果你也想拥有一个类似的博客，欢迎参考我的文章《用 Vite + React 搭建一个静态博客》。
                  </p>

                  <h2>经历时间线</h2>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={200}>
                <div className="mt-8">
                  <Timeline items={timeline} />
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
