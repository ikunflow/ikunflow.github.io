import React, { useEffect } from 'react';
import { WorkItem } from '@/data/works';
import BilibiliPlayer from './BilibiliPlayer';
import { X, Calendar, Tag, Github, ExternalLink, Palette, Cpu } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface WorkDetailModalProps {
  work: WorkItem | null;
  onClose: () => void;
  onTagClick?: (tag: string) => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({ work, onClose, onTagClick }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (work) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [work, onClose]);

  if (!work) return null;

  const isTA = work.category === 'ta';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md transition-all duration-300 animate-in fade-in">
      {/* Modal Container */}
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-950/80">
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                isTA
                  ? 'bg-amber-100 dark:bg-amber-950/80 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800'
                  : 'bg-indigo-100 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-300 dark:border-indigo-800'
              }`}
            >
              {isTA ? <Palette className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
              {work.categoryName}
            </span>
            <span className="text-xs text-stone-400 font-mono flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {work.date}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/60 dark:hover:bg-stone-800 transition-colors"
            title="关闭 (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {/* Main Video Section */}
          <div className="w-full shadow-lg rounded-xl overflow-hidden bg-black">
            <BilibiliPlayer bvid={work.bvid} title={work.title} autoplay={true} />
          </div>

          {/* Title and Short Summary */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-900 dark:text-stone-100 leading-tight">
              {work.title}
            </h2>
            <p className="mt-3 text-base text-stone-600 dark:text-stone-300 leading-relaxed bg-stone-50 dark:bg-stone-800/40 p-4 rounded-xl border border-stone-100 dark:border-stone-800">
              {work.description}
            </p>
          </div>

          {/* Technical Breakdown & Markdown Description */}
          {work.longDescription && (
            <div className="prose prose-stone dark:prose-invert max-w-none prose-headings:text-stone-900 dark:prose-headings:text-stone-100 prose-a:text-amber-600 dark:prose-a:text-amber-400">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{work.longDescription}</ReactMarkdown>
            </div>
          )}

          {/* Tags & External Links */}
          <div className="pt-4 border-t border-stone-200 dark:border-stone-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {work.tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => {
                    if (onTagClick) onTagClick(tag);
                    onClose();
                  }}
                  className="inline-flex items-center gap-1.5 text-xs px-3 py-1 rounded-lg bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-amber-100 dark:hover:bg-amber-900/50 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
                >
                  <Tag className="w-3.5 h-3.5 text-stone-400" />
                  <span>{tag}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {work.githubUrl && (
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 text-white dark:bg-stone-800 dark:hover:bg-stone-700 text-xs font-medium transition-colors shadow-sm"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub 源码</span>
                </a>
              )}
              {work.demoUrl && (
                <a
                  href={work.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-medium transition-colors shadow-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>在线 Demo</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkDetailModal;
