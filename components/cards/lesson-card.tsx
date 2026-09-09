import React from "react";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

export interface LessonCardProps {
  title?: string;
  description?: string;
  moduleLabel?: string;
  onView?: () => void;
  className?: string;
}

export function LessonCard({
  title = "Data Fetching & Caching",
  description = "Explore different data fetching methods in Next.js and how to cache and revalidate data for optimal performance.",
  moduleLabel = "Module 5",
  onView,
  className = "",
}: LessonCardProps) {
  return (
    <div
      className={`bg-white border border-neutral-200 rounded-[16px] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between font-[family-name:var(--font-inter)] ${className}`}
    >
      <div>
        {/* Top Badge */}
        <div className="mb-3">
          <Badge variant="lesson">LESSON</Badge>
        </div>

        {/* Title & Description */}
        <h3 className="text-[17px] font-semibold text-neutral-900 leading-snug">
          {title}
        </h3>
        <p className="text-[13px] text-neutral-500 mt-1.5 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Meta & Action Footer */}
      <div className="flex items-center justify-between text-[13px] mt-5 pt-3 border-t border-neutral-100">
        <span className="text-neutral-500 text-[12px]">{moduleLabel}</span>
        <button
          onClick={onView}
          className="inline-flex items-center gap-1 text-[13px] font-medium text-primary-500 hover:text-[#EA580C] transition-colors"
        >
          <span>View lesson</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
