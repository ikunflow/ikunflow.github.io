import { Github, Twitter, Mail, Rss, Heart } from "lucide-react";
import { author } from "@/data/author";

const socialIcons = {
  github: Github,
  twitter: Twitter,
  email: Mail,
  rss: Rss,
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-stone-200/60 bg-stone-50/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-serif text-lg font-semibold text-ink">
              {author.name}
            </h3>
            <p className="mt-1 text-sm text-stone-500 max-w-xs">
              {author.bio}
            </p>
          </div>

          <div className="flex items-center gap-3">
            {Object.entries(author.social).map(([key, url]) => {
              const Icon = socialIcons[key as keyof typeof socialIcons];
              if (!Icon || !url) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full border border-stone-200 text-stone-500 hover:text-accent hover:border-accent/40 hover:bg-warm-50 transition-all"
                  aria-label={key}
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-stone-200/60 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-stone-400">
          <span>
            © {currentYear} {author.name}. All rights reserved.
          </span>
          <span className="flex items-center gap-1">
            Made with <Heart className="h-3 w-3 text-accent" /> and React
          </span>
        </div>
      </div>
    </footer>
  );
}
