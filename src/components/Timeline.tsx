import type { TimelineItem } from "@/lib/profile";

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative pl-6 sm:pl-8">
      <div className="absolute left-0 top-2 bottom-2 w-px bg-stone-200" />

      <ul className="space-y-10">
        {items.map((item, index) => (
          <li key={index} className="relative">
            <span className="absolute -left-6 sm:-left-8 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-paper" />

            <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-sm font-semibold text-accent w-12 shrink-0">
                {item.year}
              </span>
              <div>
                <h4 className="font-serif text-base font-semibold text-ink">
                  {item.title}
                </h4>
                <p className="mt-1 text-sm text-stone-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
