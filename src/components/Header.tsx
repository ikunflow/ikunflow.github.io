import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Feather } from "lucide-react";

const navItems = [
  { path: "/", label: "首页" },
  { path: "/posts", label: "文章" },
  { path: "/games", label: "游戏" },
  { path: "/guestbook", label: "留言" },
  { path: "/about", label: "关于" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/") return location.pathname === "/";
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-paper/80 border-b border-stone-200/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-ink transition-colors hover:text-accent"
          >
            <Feather className="h-6 w-6 text-accent" />
            <span className="font-serif text-xl font-semibold tracking-tight">
              墨白集
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-md ${
                  isActive(item.path)
                    ? "text-accent"
                    : "text-stone-600 hover:text-ink hover:bg-stone-100"
                }`}
              >
                {item.label}
                {isActive(item.path) && (
                  <span className="absolute bottom-1 left-4 right-4 h-px bg-accent/40" />
                )}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-md text-stone-600 hover:bg-stone-100 transition-colors"
            aria-label="切换菜单"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-stone-200/60 bg-paper/95 backdrop-blur-md animate-fade-in">
          <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-md text-base font-medium transition-colors ${
                  isActive(item.path)
                    ? "bg-warm-100 text-accent"
                    : "text-stone-600 hover:bg-stone-100 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
