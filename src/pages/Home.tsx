import { useState, useMemo } from 'react';
import { WORKS_DATA, WorkItem, CATEGORIES, AUTHOR_INFO } from '@/data/works';
import WorkCard from '@/components/WorkCard';
import WorkDetailModal from '@/components/WorkDetailModal';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Search, Sparkles, X, Filter, Video, Code, Palette, PlayCircle, Gamepad2, Layers } from 'lucide-react';

interface HomeProps {
  initialCategory?: string;
}

export default function Home({ initialCategory = 'all' }: HomeProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [activeModalWork, setActiveModalWork] = useState<WorkItem | null>(null);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tagsSet = new Set<string>();
    WORKS_DATA.forEach((work) => {
      work.tags.forEach((tag) => tagsSet.add(tag));
    });
    return Array.from(tagsSet);
  }, []);

  // Filter works based on Category, Search Query, and Selected Tag
  const filteredWorks = useMemo(() => {
    return WORKS_DATA.filter((work) => {
      if (selectedCategory !== 'all' && work.category !== selectedCategory) {
        return false;
      }
      if (selectedTag && !work.tags.includes(selectedTag)) {
        return false;
      }
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const titleMatch = work.title.toLowerCase().includes(query);
        const descMatch = work.description.toLowerCase().includes(query);
        const tagMatch = work.tags.some((t) => t.toLowerCase().includes(query));
        const bvidMatch = work.bvid.toLowerCase().includes(query);
        return titleMatch || descMatch || tagMatch || bvidMatch;
      }
      return true;
    });
  }, [selectedCategory, searchQuery, selectedTag]);

  const taCount = WORKS_DATA.filter((w) => w.category === 'ta').length;
  const devCount = WORKS_DATA.filter((w) => w.category === 'dev').length;

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 flex flex-col font-sans transition-colors">
      <Header activeCategory={selectedCategory} onSelectCategory={setSelectedCategory} />

      <main className="flex-1">
        {/* Game Dev & TA Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-amber-500/10 via-indigo-500/5 to-stone-50 dark:from-amber-950/20 dark:via-stone-900/40 dark:to-stone-950 border-b border-stone-200/60 dark:border-stone-800/60 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-500/20 text-xs font-semibold tracking-wide shadow-xs">
              <Gamepad2 className="w-4 h-4 text-amber-500" />
              <span>GAME DEVELOPER & TECHNICAL ARTIST SHOWCASE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
              游戏开发 & <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-indigo-600 bg-clip-text text-transparent">技术美术作品集</span>
            </h1>

            <p className="max-w-2xl mx-auto text-base sm:text-lg text-stone-600 dark:text-stone-400 leading-relaxed">
              {AUTHOR_INFO.bio}
            </p>

            {/* Core Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-2 max-w-3xl mx-auto pt-2">
              {AUTHOR_INFO.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-white/80 dark:bg-stone-900/80 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-800/80 shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Category Quick Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedTag(null);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm ${
                  selectedCategory === 'all'
                    ? 'bg-stone-900 text-white dark:bg-stone-100 dark:text-stone-900 scale-105 ring-2 ring-amber-500/50'
                    : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800'
                }`}
              >
                <Layers className="w-4 h-4 text-amber-500" />
                <span>全部作品 ({WORKS_DATA.length})</span>
              </button>

              <button
                onClick={() => {
                  setSelectedCategory('ta');
                  setSelectedTag(null);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm ${
                  selectedCategory === 'ta'
                    ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950 scale-105 ring-2 ring-amber-500/50'
                    : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800'
                }`}
              >
                <Palette className="w-4 h-4 text-amber-500" />
                <span>TA 游戏技术美术 ({taCount})</span>
              </button>

              <button
                onClick={() => {
                  setSelectedCategory('dev');
                  setSelectedTag(null);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-sm ${
                  selectedCategory === 'dev'
                    ? 'bg-indigo-600 text-white dark:bg-indigo-500 dark:text-stone-950 scale-105 ring-2 ring-indigo-500/50'
                    : 'bg-white dark:bg-stone-900 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200 dark:border-stone-800'
                }`}
              >
                <Code className="w-4 h-4 text-indigo-500" />
                <span>游戏程序开发 ({devCount})</span>
              </button>
            </div>
          </div>
        </section>

        {/* Filter & Showcase Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          {/* Search & Tag Filter Box */}
          <div className="bg-white dark:bg-stone-900/90 rounded-2xl p-4 sm:p-5 border border-stone-200/80 dark:border-stone-800/80 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="relative w-full sm:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-stone-400" />
                <input
                  type="text"
                  placeholder="搜索游戏作品、BV号或Shader技术..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-9 py-2 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-900 dark:text-stone-100 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/50 border border-transparent transition-all"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-0.5 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-400"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 self-end sm:self-center font-medium">
                <Filter className="w-3.5 h-3.5 text-amber-500" />
                <span>
                  共筛选出 <strong className="text-stone-900 dark:text-stone-100">{filteredWorks.length}</strong> 项展示作品
                </span>
                {(selectedTag || searchQuery) && (
                  <button
                    onClick={() => {
                      setSelectedTag(null);
                      setSearchQuery('');
                    }}
                    className="ml-2 text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-0.5 font-semibold"
                  >
                    <X className="w-3 h-3" />
                    重置筛选
                  </button>
                )}
              </div>
            </div>

            {/* Tech Tags Bar */}
            <div className="pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              <span className="text-xs font-semibold text-stone-400 dark:text-stone-500 whitespace-nowrap mr-1">
                技术领域:
              </span>
              {allTags.map((tag) => {
                const isActive = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(isActive ? null : tag)}
                    className={`whitespace-nowrap text-xs px-3 py-1 rounded-lg transition-colors font-medium ${
                      isActive
                        ? 'bg-amber-600 text-white dark:bg-amber-500 dark:text-stone-950 font-bold shadow-sm'
                        : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-amber-100 dark:hover:bg-amber-900/40 hover:text-amber-700 dark:hover:text-amber-300'
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Category Header */}
          {selectedCategory !== 'all' && (
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/20 flex items-center gap-3">
              <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400">
                {selectedCategory === 'ta' ? <Palette className="w-5 h-5" /> : <Code className="w-5 h-5" />}
              </div>
              <div>
                <h3 className="text-sm font-bold text-stone-900 dark:text-stone-100">
                  {CATEGORIES.find((c) => c.id === selectedCategory)?.name}
                </h3>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  {CATEGORIES.find((c) => c.id === selectedCategory)?.desc}
                </p>
              </div>
            </div>
          )}

          {/* Cards Grid */}
          {filteredWorks.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {filteredWorks.map((work) => (
                <WorkCard
                  key={work.id}
                  work={work}
                  onSelect={(item) => setActiveModalWork(item)}
                  onTagClick={(tag) => setSelectedTag(tag)}
                />
              ))}
            </div>
          ) : (
            <div className="min-h-[300px] flex flex-col items-center justify-center p-8 bg-white dark:bg-stone-900 rounded-2xl border border-stone-200 dark:border-stone-800 text-center space-y-3">
              <PlayCircle className="w-12 h-12 text-stone-300 dark:text-stone-700 animate-pulse" />
              <h3 className="text-lg font-bold text-stone-700 dark:text-stone-300">没有找到匹配的游戏作品</h3>
              <p className="text-sm text-stone-400 max-w-sm">
                请尝试更换搜索词或重置技术领域标签
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('all');
                  setSelectedTag(null);
                  setSearchQuery('');
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-amber-600 text-white text-xs font-semibold hover:bg-amber-700 transition-colors"
              >
                查看全部作品
              </button>
            </div>
          )}
        </section>
      </main>

      <WorkDetailModal
        work={activeModalWork}
        onClose={() => setActiveModalWork(null)}
        onTagClick={(tag) => setSelectedTag(tag)}
      />

      <Footer />
    </div>
  );
}
