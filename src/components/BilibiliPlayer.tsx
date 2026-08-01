import React, { useState } from 'react';
import { ExternalLink, Play } from 'lucide-react';

interface BilibiliPlayerProps {
  bvid: string;
  title?: string;
  autoplay?: boolean;
}

export const BilibiliPlayer: React.FC<BilibiliPlayerProps> = ({ bvid, title, autoplay = false }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const iframeSrc = `https://player.bilibili.com/player.html?bvid=${bvid}&page=1&high_quality=1&danmaku=0&autoplay=${autoplay ? 1 : 0}`;
  const bilibiliUrl = `https://www.bilibili.com/video/${bvid}`;

  return (
    <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-stone-900 border border-stone-800 shadow-md group">
      {!isLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-stone-900 text-stone-400 z-10 p-4 transition-opacity duration-300">
          <div className="w-12 h-12 rounded-full bg-stone-800 border border-stone-700 flex items-center justify-center mb-3 text-amber-500 animate-pulse">
            <Play className="w-6 h-6 fill-amber-500 ml-0.5" />
          </div>
          <span className="text-sm font-medium text-stone-300">哔哩哔哩视频加载中...</span>
          <span className="text-xs text-stone-500 mt-1">BV号: {bvid}</span>
        </div>
      )}

      <iframe
        src={iframeSrc}
        title={title || `Bilibili video ${bvid}`}
        scrolling="no"
        frameBorder="0"
        allowFullScreen={true}
        onLoad={() => setIsLoaded(true)}
        className="w-full h-full border-0 relative z-0"
      />

      <a
        href={bilibiliUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-black/70 hover:bg-black/90 text-stone-200 text-xs rounded-md backdrop-blur-md border border-stone-700/50 flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-all duration-200 shadow-sm"
        title="在哔哩哔哩打开原视频"
      >
        <span>在 B 站观看</span>
        <ExternalLink className="w-3 h-3 text-amber-400" />
      </a>
    </div>
  );
};

export default BilibiliPlayer;
