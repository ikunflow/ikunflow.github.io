import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

interface LikeButtonProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ size = 'md', className = '' }) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(88);
  const [animating, setAnimating] = useState<boolean>(false);

  useEffect(() => {
    const storedLiked = localStorage.getItem('portfolio_site_liked') === 'true';
    const storedCount = localStorage.getItem('portfolio_site_like_count');
    if (storedLiked) {
      setLiked(true);
    }
    if (storedCount) {
      setLikeCount(parseInt(storedCount, 10));
    }
  }, []);

  const handleLike = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 400);

    if (liked) {
      const newCount = Math.max(0, likeCount - 1);
      setLiked(false);
      setLikeCount(newCount);
      localStorage.setItem('portfolio_site_liked', 'false');
      localStorage.setItem('portfolio_site_like_count', newCount.toString());
    } else {
      const newCount = likeCount + 1;
      setLiked(true);
      setLikeCount(newCount);
      localStorage.setItem('portfolio_site_liked', 'true');
      localStorage.setItem('portfolio_site_like_count', newCount.toString());
    }
  };

  const isSmall = size === 'sm';

  return (
    <button
      onClick={handleLike}
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all duration-200 shadow-2xs select-none ${
        liked
          ? 'bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border-rose-300 dark:border-rose-800'
          : 'bg-white dark:bg-stone-900 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-800 hover:border-rose-300 hover:text-rose-500'
      } ${className}`}
      title={liked ? '取消点赞' : '点个赞吧'}
    >
      <Heart
        className={`${isSmall ? 'w-3.5 h-3.5' : 'w-4 h-4'} ${
          liked ? 'fill-rose-500 text-rose-500' : 'text-stone-400 group-hover:text-rose-500'
        } ${animating ? 'scale-125 transition-transform duration-200' : 'scale-100'}`}
      />
      <span>{liked ? '已点赞' : '点赞'}</span>
      <span className="px-1.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-[11px] font-mono text-stone-500 dark:text-stone-400">
        {likeCount}
      </span>
    </button>
  );
};

export default LikeButton;
