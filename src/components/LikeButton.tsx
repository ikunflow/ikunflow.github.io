import { Heart } from "lucide-react";
import { useLikes, type ContentType } from "@/hooks/useLikes";

interface LikeButtonProps {
  contentType: ContentType;
  contentId: string;
}

export default function LikeButton({ contentType, contentId }: LikeButtonProps) {
  const { likes, liked, loading, toggleLike } = useLikes(contentType, contentId);

  return (
    <button
      type="button"
      onClick={toggleLike}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
        liked
          ? "bg-accent text-white border-accent"
          : "bg-white/60 text-stone-600 border-stone-200 hover:border-accent/40 hover:text-accent"
      }`}
      aria-label={liked ? "取消点赞" : "点赞"}
      aria-pressed={liked}
    >
      <Heart
        className={`h-3.5 w-3.5 transition-transform ${
          liked ? "fill-current scale-110" : ""
        }`}
      />
      {loading ? "--" : likes}
    </button>
  );
}
