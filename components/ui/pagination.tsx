import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage = 1,
  totalPages = 8,
  onPageChange,
  className = "",
}: PaginationProps) {
  return (
    <nav
      aria-label="Pagination"
      className={`inline-flex items-center gap-1.5 font-[family-name:var(--font-inter)] select-none ${className}`}
    >
      {/* Previous Button */}
      <button
        disabled={currentPage <= 1}
        onClick={() => onPageChange?.(currentPage - 1)}
        className="w-8 h-8 flex items-center justify-center rounded-[8px] text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 disabled:text-neutral-300 disabled:hover:bg-transparent transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Page 1 */}
      <button
        onClick={() => onPageChange?.(1)}
        className={`min-w-[32px] h-8 px-2 flex items-center justify-center text-[13px] font-medium rounded-[8px] transition-all ${
          currentPage === 1
            ? "border border-primary-400 text-primary-500 bg-white shadow-xs"
            : "text-neutral-700 hover:bg-neutral-100"
        }`}
      >
        1
      </button>

      {/* Page 2 */}
      <button
        onClick={() => onPageChange?.(2)}
        className={`min-w-[32px] h-8 px-2 flex items-center justify-center text-[13px] font-medium rounded-[8px] transition-all ${
          currentPage === 2
            ? "border border-primary-400 text-primary-500 bg-white shadow-xs"
            : "text-neutral-700 hover:bg-neutral-100"
        }`}
      >
        2
      </button>

      {/* Page 3 */}
      <button
        onClick={() => onPageChange?.(3)}
        className={`min-w-[32px] h-8 px-2 flex items-center justify-center text-[13px] font-medium rounded-[8px] transition-all ${
          currentPage === 3
            ? "border border-primary-400 text-primary-500 bg-white shadow-xs"
            : "text-neutral-700 hover:bg-neutral-100"
        }`}
      >
        3
      </button>

      {/* Ellipsis */}
      <span className="w-6 text-center text-neutral-400 text-[13px]">...</span>

      {/* Last Page */}
      <button
        onClick={() => onPageChange?.(totalPages)}
        className={`min-w-[32px] h-8 px-2 flex items-center justify-center text-[13px] font-medium rounded-[8px] transition-all ${
          currentPage === totalPages
            ? "border border-primary-400 text-primary-500 bg-white shadow-xs"
            : "text-neutral-700 hover:bg-neutral-100"
        }`}
      >
        {totalPages}
      </button>

      {/* Next Button */}
      <button
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange?.(currentPage + 1)}
        className="w-8 h-8 flex items-center justify-center rounded-[8px] text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 disabled:text-neutral-300 disabled:hover:bg-transparent transition-colors"
        aria-label="Next page"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
