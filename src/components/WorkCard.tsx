import React from 'react';
import { WorkItem } from '@/data/works';
import BilibiliPlayer from './BilibiliPlayer';
import { Tag, Calendar, Github, ExternalLink, Maximize2, Cpu, Palette } from 'lucide-react';

interface WorkCardProps {
  work: WorkItem;
  onSelect: (work: WorkItem) => void;
  onTagClick?: (tag: string) => void;
}

export const WorkCard: React.FC<WorkCardProps> = ({ work, onSelect, onTagClick }) => {
  const isTA = work.category === 'ta';

  return (
    <article className="group bg-white dark:bg-stone-900/90 rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Video Player Header */}
      <div className="p-2 sm:p-3 bg-stone-50 dark:bg-stone-950/50 border-b border-stone-100 dark:border-stone-800/80">
        <BilibiliPlayer bvid={work.bvid} title={work.title} />
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Category & Date Header */}
          <div className="flex items-center justify-between gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ${
                isTA
                  ? 'bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-300 border border-amber-200 dark:border-amber-800/50'
                  : 'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50'
              }`}
            >
              {isTA ? <Palette className="w-3.5 h-3.5" /> : <Cpu className="w-3.5 h-3.5" />}
              {work.categoryName}
            </span>

            <div className="flex items-center text-xs text-stone-400 dark:text-stone-500 font-mono">
              <Calendar className="w-3.5 h-3.5 mr-1" />
              {work.date}
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => onSelect(work)}
            className="text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors cursor-pointer line-clamp-1"
          >
            {work.title}
          </h3>

          {/* Description */}
          <p className="mt-2.5 text-sm text-stone-600 dark:text-stone-400 leading-relaxed line-clamp-3">
            {work.description}
          </p>
        </div>

        {/* Footer: Tags & Actions */}
        <div className="pt-3 border-t border-stone-100 dark:border-stone-800/60 space-y-3">
          {/* Tag Badges */}
          <div className="flex flex-wrap gap-1.5">
            {work.tags.map((tag) => (
              <button
                key={tag}
                onClick={() => onTagClick && onTagClick(tag)}
                className="inline-flex items-center gap-1 text-xs px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-amber-100 dark:hover:bg-amber-900/40 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
              >
                <Tag className="w-3 h-3 text-stone-400" />
                <span>{tag}</span>
              </button>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-1">
            <button
              onClick={() => onSelect(work)}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 transition-colors"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>技术细节与大屏预览</span>
            </button>

            <div className="flex items-center gap-2">
              {work.githubUrl && (
                <a
                  href={work.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  title="查看源码"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              {work.demoUrl && (
                <a
                  href={work.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                  title="在线演示"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default WorkCard;
