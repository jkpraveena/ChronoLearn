import React from "react";
import { BarChart2, Clock, FileText } from "lucide-react";
import Link from "next/link";

export interface CourseCardProps {
  id?: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  modulesCount: number;
  iconType?: "nextjs" | "docker" | "typescript" | "custom";
  customIcon?: React.ReactNode;
  href?: string;
  className?: string;
}

/** Renders a linked course summary with its icon, description, and metadata. */
export function CourseCard({
  title,
  description,
  level,
  duration,
  modulesCount,
  iconType = "custom",
  customIcon,
  href = "#",
  className = "",
}: CourseCardProps) {
  const renderIcon = () => {
    if (customIcon) return customIcon;

    switch (iconType) {
      case "nextjs":
        return (
          <div className="w-14 h-14 rounded-[14px] bg-black text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-xs">
            <span>N</span>
          </div>
        );
      case "docker":
        return (
          <div className="w-14 h-14 rounded-[14px] bg-[#EBF5FB] text-[#2496ED] flex items-center justify-center shrink-0 shadow-xs">
            {/* Docker Whale Icon SVG */}
            <svg
              className="w-10 h-10"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Container grid */}
              <rect x="18" y="16" width="4" height="4" rx="0.5" fill="#0D47A1" />
              <rect x="23" y="16" width="4" height="4" rx="0.5" fill="#0D47A1" />
              <rect x="28" y="16" width="4" height="4" rx="0.5" fill="#0D47A1" />
              <rect x="13" y="21" width="4" height="4" rx="0.5" fill="#0D47A1" />
              <rect x="18" y="21" width="4" height="4" rx="0.5" fill="#0D47A1" />
              <rect x="23" y="21" width="4" height="4" rx="0.5" fill="#0D47A1" />
              <rect x="28" y="21" width="4" height="4" rx="0.5" fill="#0D47A1" />
              <rect x="33" y="21" width="4" height="4" rx="0.5" fill="#0D47A1" />
              {/* Whale Body */}
              <path
                d="M41 26C39.8 24.2 37.8 23.5 35 24C34.2 21.8 32.5 20.8 30 21C29.5 21 11 21 10 26C8 28 8 31 10 33C14 36.5 24 37 34 35C38 34.2 41 31.5 42 28C42 27.2 41.5 26.5 41 26Z"
                fill="#2496ED"
              />
              <circle cx="16" cy="28" r="1.2" fill="#0D47A1" />
            </svg>
          </div>
        );
      case "typescript":
        return (
          <div className="w-14 h-14 rounded-[14px] bg-[#3178C6] text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-xs">
            <span>TS</span>
          </div>
        );
      default:
        return (
          <div className="w-14 h-14 rounded-[14px] bg-neutral-900 text-white flex items-center justify-center font-bold text-2xl shrink-0 shadow-xs">
            <span>{title.charAt(0)}</span>
          </div>
        );
    }
  };

  return (
    <Link
      href={href}
      className={`group block bg-white border border-neutral-200/90 rounded-[20px] p-7 shadow-[0_2px_8px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:border-neutral-300 transition-all duration-200 flex flex-col justify-between ${className}`}
    >
      <div>
        {/* Course Logo / Graphic */}
        <div className="mb-6">{renderIcon()}</div>

        {/* Title */}
        <h3 className="text-[20px] md:text-[21px] font-bold text-neutral-900 font-[family-name:var(--font-playfair)] group-hover:text-primary-500 transition-colors leading-snug">
          {title}
        </h3>

        {/* Description */}
        <p className="text-[13px] md:text-[14px] text-neutral-500 mt-2.5 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Meta Footer */}
      <div className="flex items-center gap-4 text-[11px] md:text-[12px] text-neutral-500 mt-8 pt-5 border-t border-neutral-100 font-[family-name:var(--font-inter)]">
        <div className="inline-flex items-center gap-1.5">
          <BarChart2 className="w-3.5 h-3.5 text-neutral-400 stroke-[1.8]" />
          <span>{level}</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-neutral-400 stroke-[1.8]" />
          <span>{duration}</span>
        </div>
        <div className="inline-flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-neutral-400 stroke-[1.8]" />
          <span>{modulesCount} modules</span>
        </div>
      </div>
    </Link>
  );
}
