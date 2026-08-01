import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100">
      <Header />

      <main className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="text-center space-y-5 max-w-md mx-auto">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-amber-500/10 text-amber-500 mb-2">
            <Search className="h-10 w-10" />
          </div>
          <h1 className="text-6xl font-extrabold tracking-tight text-stone-900 dark:text-stone-100">404</h1>
          <p className="text-lg text-stone-600 dark:text-stone-400">
            未找到该展示页面
          </p>
          <p className="text-xs text-stone-400 dark:text-stone-500">
            页面可能已被更新或路径输入有误。
          </p>

          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            <Home className="h-4 w-4" />
            返回作品展示首页
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
