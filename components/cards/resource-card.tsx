import React from "react";
import { FileText, ExternalLink } from "lucide-react";

export interface ResourceCardProps {
  title?: string;
  description?: string;
  fileMeta?: string;
  onOpen?: () => void;
  className?: string;
}

export function ResourceCard({
  title = "Caching and Revalidation Guide",
  description = "Deep dive into Next.js caching strategies.",
  fileMeta = "PDF • 1.2 MB",
  onOpen,
  className = "",
}: ResourceCardProps) {
  return (
    <div
      className={`bg-white border border-neutral-200 rounded-[16px] p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between font-[family-name:var(--font-inter)] ${className}`}
    >
      <div>
        {/* Header with File Icon & Title */}
        <div className="flex items-start gap-3.5 mb-2">
          <div className="w-8 h-8 rounded-[8px] bg-neutral-100 flex items-center justify-center text-neutral-700 shrink-0">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-[16px] font-semibold text-neutral-900 leading-snug">
              {title}
            </h3>
            <p className="text-[13px] text-neutral-500 mt-1 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>

      {/* Meta & Download Action Footer */}
      <div className="flex items-center justify-between text-[13px] mt-4 pt-3 border-t border-neutral-100">
        <span className="text-neutral-500 text-[12px]">{fileMeta}</span>
        <button
          onClick={onOpen}
          aria-label="Open resource"
          className="text-primary-500 hover:text-[#EA580C] transition-colors p-1"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
