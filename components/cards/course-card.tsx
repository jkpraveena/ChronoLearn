import React from "react";
import { BarChart2, Clock, BookOpen } from "lucide-react";

export interface CourseCardProps {
  title?: string;
  description?: string;
  level?: string;
  duration?: string;
  modulesCount?: number;
  icon?: React.ReactNode;
  className?: string;
}

export function CourseCard({
  title = "Next.js for Production",
  description = "Build scalable, high-performance web applications with Next.js.",
  level = "Intermediate",
  duration = "18h 24m",
  modulesCount = 12,
  icon,
  className = "",
}: CourseCardProps) {
  return (
    <div
      className={`bg-white border border-neutral-200 rounded-[16px] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between font-[family-name:var(--font-inter)] ${className}`}
    >
      <div>
        {/* Header Icon & Title */}
        <div className="flex items-start gap-4 mb-3">
          <div className="w-10 h-10 rounded-[10px] bg-neutral-900 text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-xs">
            {icon || "N"}
          </div>
          <div>
            <h3 className="text-[18px] font-semibold text-neutral-900 leading-snug">
              {title}
            </h3>
            <p className="text-[13px] text-neutral-500 mt-1 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Meta Footer */}
      <div className="flex items-center gap-4 text-[12px] text-neutral-500 mt-4 pt-4 border-t border-neutral-100">
        <div className="inline-flex items-center gap-1.5">
          <BarChart2 className="w-3.5 h-3.5 text-neutral-400" />
          <span>{level}</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-neutral-400" />
          <span>{duration}</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <BookOpen className="w-3.5 h-3.5 text-neutral-400" />
          <span>{modulesCount} modules</span>
        </div>
      </div>
    </div>
  );
}
