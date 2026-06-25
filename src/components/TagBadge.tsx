import { cn } from "@/lib/utils";

interface TagBadgeProps {
  tag: string;
  active?: boolean;
  onClick?: () => void;
}

export default function TagBadge({ tag, active, onClick }: TagBadgeProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-full border transition-all",
        active
          ? "bg-accent text-white border-accent"
          : "bg-transparent text-stone-600 border-stone-200 hover:border-accent/40 hover:text-accent hover:bg-warm-50"
      )}
    >
      {tag}
    </button>
  );
}
