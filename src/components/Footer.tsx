import LikeButton from "./LikeButton";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200/80 dark:border-stone-800/80 bg-stone-50 dark:bg-stone-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-base font-bold text-stone-900 dark:text-stone-100">
              作品展示 Showcase
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <LikeButton />
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-stone-200/60 dark:border-stone-800/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-400 dark:text-stone-500">
          <span>
            © {currentYear} Portfolio Showcase. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-rose-500 fill-rose-500" />
          </span>
        </div>
      </div>
    </footer>
  );
}
