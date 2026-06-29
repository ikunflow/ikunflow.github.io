import { useState, useMemo } from "react";
import { Bookmark as BookmarkIcon, Search } from "lucide-react";
import { useAllBookmarks } from "@/hooks/useBookmarks";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookmarkCard from "@/components/BookmarkCard";
import AnimatedSection from "@/components/AnimatedSection";

export default function Bookmarks() {
  const { bookmarks, loading } = useAllBookmarks();
  const [activeCategory, setActiveCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    bookmarks.forEach((b) => {
      if (b.category) cats.add(b.category);
    });
    return Array.from(cats).sort();
  }, [bookmarks]);

  const filteredBookmarks = useMemo(() => {
    let result = bookmarks;
    if (activeCategory) {
      result = result.filter((b) => b.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (b) =>
          b.title.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.url.toLowerCase().includes(q)
      );
    }
    return result;
  }, [activeCategory, searchQuery, bookmarks]);

  // 按分类分组显示
  const groupedBookmarks = useMemo(() => {
    if (activeCategory || searchQuery.trim()) {
      return { [activeCategory || "搜索结果"]: filteredBookmarks };
    }
    const groups: Record<string, typeof bookmarks> = {};
    filteredBookmarks.forEach((b) => {
      const cat = b.category || "未分类";
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(b);
    });
    return groups;
  }, [filteredBookmarks, activeCategory, searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="border-b border-stone-200/60 bg-gradient-to-b from-warm-100/30 to-paper">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 border border-stone-200 text-xs text-stone-600 mb-6">
                <BookmarkIcon className="h-3.5 w-3.5 text-accent" />
                <span>收藏夹</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl font-bold text-ink">
                网站收藏
              </h1>
              <p className="mt-3 text-stone-600 max-w-2xl">
                我收藏的优质网站和工具，按分类整理，方便查找。
              </p>
            </AnimatedSection>
          </div>
        </section>

        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          {/* 搜索和筛选 */}
          <AnimatedSection delay={100}>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-stone-200/60">
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索收藏..."
                  className="w-full pl-10 pr-4 py-2 rounded-lg border border-stone-200 bg-white/50 text-sm focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent/40"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  onClick={() => setActiveCategory("")}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                    activeCategory === ""
                      ? "bg-accent text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  全部
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(activeCategory === cat ? "" : cat)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-accent text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {loading ? (
            <div className="py-20 text-center">
              <p className="text-stone-500">加载中...</p>
            </div>
          ) : (
            Object.entries(groupedBookmarks).map(([category, items]) => (
              <div key={category} className="mb-10 last:mb-0">
                {!searchQuery.trim() && (
                  <h2 className="text-lg font-semibold text-ink mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-accent rounded-full" />
                    {category}
                    <span className="text-xs text-stone-400 font-normal">
                      ({items.length})
                    </span>
                  </h2>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((bookmark, index) => (
                    <AnimatedSection key={bookmark.id} delay={50 * (index + 1)}>
                      <BookmarkCard bookmark={bookmark} />
                    </AnimatedSection>
                  ))}
                </div>
              </div>
            ))
          )}

          {filteredBookmarks.length === 0 && !loading && (
            <AnimatedSection>
              <div className="py-20 text-center">
                <p className="text-stone-500">
                  {searchQuery
                    ? `没有找到匹配「${searchQuery}」的收藏`
                    : "还没有收藏，去后台添加吧！"}
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
