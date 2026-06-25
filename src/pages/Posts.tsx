import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { posts, getAllTags } from "@/data/posts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PostListItem from "@/components/PostListItem";
import TagBadge from "@/components/TagBadge";
import AnimatedSection from "@/components/AnimatedSection";

export default function Posts() {
  const [activeTag, setActiveTag] = useState<string>("");
  const tags = getAllTags();

  const filteredPosts = useMemo(() => {
    if (!activeTag) return posts;
    return posts.filter((post) => post.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b border-stone-200/60 bg-gradient-to-b from-warm-100/30 to-paper">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <AnimatedSection>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                文章
              </h1>
              <p className="mt-3 text-stone-600 max-w-2xl">
                这里收录了所有的文章、手记与思考。你可以按标签筛选，也可以慢慢翻阅。
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-200/60">
              <div className="flex items-center gap-2 text-sm text-stone-500">
                <Search className="h-4 w-4" />
                <span>共 {filteredPosts.length} 篇文章</span>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <TagBadge
                  tag="全部"
                  active={activeTag === ""}
                  onClick={() => setActiveTag("")}
                />
                {tags.map((tag) => (
                  <TagBadge
                    key={tag}
                    tag={tag}
                    active={activeTag === tag}
                    onClick={() => setActiveTag(tag)}
                  />
                ))}
              </div>
            </div>
          </AnimatedSection>

          <div className="max-w-4xl">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <AnimatedSection key={post.slug} delay={100 * (index + 1)}>
                  <PostListItem post={post} />
                </AnimatedSection>
              ))
            ) : (
              <AnimatedSection>
                <div className="py-20 text-center">
                  <p className="text-stone-500">
                    没有找到带有「{activeTag}」标签的文章。
                  </p>
                </div>
              </AnimatedSection>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
