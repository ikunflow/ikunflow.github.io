import { Eye } from "lucide-react";
import { useViewCount, type ContentType } from "@/hooks/useViewCount";

interface ViewCounterProps {
  contentType: ContentType;
  contentId: string;
}

export default function ViewCounter({ contentType, contentId }: ViewCounterProps) {
  const { views, loading } = useViewCount(contentType, contentId);

  return (
    <span className="inline-flex items-center gap-1 text-xs text-stone-500">
      <Eye className="h-3.5 w-3.5" />
      {loading ? "--" : views}
    </span>
  );
}
