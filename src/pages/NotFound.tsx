import { Link } from "react-router-dom";
import { Home, Search } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-warm-100 text-accent mb-6">
              <Search className="h-8 w-8" />
            </div>
            <h1 className="font-serif text-5xl font-bold text-ink">404</h1>
            <p className="mt-4 text-xl text-stone-600">
              你寻找的页面似乎走失了。
            </p>
            <p className="mt-2 text-sm text-stone-500">
              也许它正在某个安静的角落，等待着被重新发现。
            </p>

            <Link
              to="/"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dark transition-colors"
            >
              <Home className="h-4 w-4" />
              回到首页
            </Link>
          </AnimatedSection>
        </div>
      </main>

      <Footer />
    </div>
  );
}
