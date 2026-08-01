import { useState } from "react";
import { Link } from "react-router-dom";
import { Sparkles, Menu, X, Code, Palette, Grid } from "lucide-react";
import LikeButton from "./LikeButton";

interface HeaderProps {
  activeCategory?: string;
  onSelectCategory?: (category: string) => void;
}

export default function Header({ activeCategory = 'all', onSelectCategory }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const categories = [
    { id: 'all', label: '全部作品', icon: Grid, path: '/' },
    { id: 'ta', label: 'TA 作品', icon: Palette, path: '/ta' },
    { id: 'dev', label: '开发作品', icon: Code, path: '/dev' },
  ];

  const handleCategoryClick = (id: string) => {
    if (onSelectCategory) {
      onSelectCategory(id);
    }
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-white/80 dark:bg-stone-950/80 border-b border-stone-200/80 dark:border-stone-800/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo & Title */}
          <Link
            to="/"
            onClick={() => handleCategoryClick('all')}
            className="flex items-center gap-2.5 group"
          >
            <div className="p-2 rounded-xl bg-gradient-to-tr from-amber-500 to-amber-400 text-stone-950 shadow-md group-hover:scale-105 transition-transform">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-stone-900 dark:text-stone-100 tracking-tight group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                作品展示 Showcase
              </span>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 -mt-1 font-mono tracking-wider">
                TA & DEVELOPER PORTFOLIO
              </span>
            </div>
          </Link>

          {/* Navigation Category Tabs (Desktop) */}
          <nav className="hidden md:flex items-center gap-1.5 p-1 bg-stone-100 dark:bg-stone-900/90 rounded-xl border border-stone-200/70 dark:border-stone-800/70">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isSelected
                      ? "bg-white dark:bg-stone-800 text-amber-600 dark:text-amber-400 shadow-sm border border-stone-200/60 dark:border-stone-700/60"
                      : "text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-200 hover:bg-stone-200/50 dark:hover:bg-stone-800/50"
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? "text-amber-500" : "text-stone-400"}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action: Like Button */}
          <div className="hidden sm:flex items-center gap-3">
            <LikeButton />
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="切换菜单"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200 dark:border-stone-800 bg-white/95 dark:bg-stone-950/95 backdrop-blur-xl animate-in slide-in-from-top-2">
          <nav className="p-4 space-y-3">
            <div className="space-y-1">
              {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategoryClick(cat.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      isSelected
                        ? "bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 font-semibold"
                        : "text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-900"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${isSelected ? "text-amber-500" : "text-stone-400"}`} />
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="pt-2 border-t border-stone-200 dark:border-stone-800 flex justify-center">
              <LikeButton />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
