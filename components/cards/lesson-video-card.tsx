import React from "react";
import { Badge } from "@/components/ui/badge";
import { Play } from "lucide-react";

export interface LessonVideoCardProps {
  title?: string;
  description?: string;
  lessonLabel?: string;
  duration?: string;
  timestamp?: string;
  onWatch?: () => void;
  className?: string;
}

export function LessonVideoCard({
  title = "Data Fetching in Server Components",
  description = "Learn how to fetch data on the server using async/await and Next.js best practices.",
  lessonLabel = "Lesson 5.1",
  duration = "12:45",
  timestamp = "12:45",
  onWatch,
  className = "",
}: LessonVideoCardProps) {
  return (
    <div
      className={`bg-white border border-neutral-200 rounded-[16px] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between font-[family-name:var(--font-inter)] ${className}`}
    >
      <div>
        {/* Top Badge */}
        <div className="mb-3">
          <Badge variant="video">VIDEO</Badge>
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
        <span className="text-neutral-500 text-[12px]">
          {lessonLabel} • {duration}
        </span>
        <button
          onClick={onWatch}
          className="inline-flex items-center gap-1 text-[13px] font-medium text-primary-500 hover:text-[#EA580C] transition-colors"
        >
          <Play className="w-3.5 h-3.5 fill-primary-500" />
          <span>Watch from {timestamp}</span>
        </button>
      </div>
    </div>
  );
}
