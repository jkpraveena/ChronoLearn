import React from "react";

export interface ProgressBarProps {
  value: number; // 0 to 100
  showLabel?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function ProgressBar({
  value,
  showLabel = true,
  className = "",
  size = "md",
}: ProgressBarProps) {
  const clampedValue = Math.min(100, Math.max(0, value));

  const heightStyles = {
    sm: "h-1.5",
    md: "h-2",
    lg: "h-2.5",
  };

  return (
    <div className={`flex items-center gap-3 w-full ${className}`}>
      <div
        className={`flex-1 bg-neutral-200 rounded-full overflow-hidden ${heightStyles[size]}`}
      >
        <div
          className="bg-primary-500 h-full rounded-full transition-all duration-300 ease-out"
          style={{ width: `${clampedValue}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-[13px] font-medium text-neutral-900 shrink-0 font-[family-name:var(--font-inter)]">
          <strong className="font-semibold">{clampedValue}%</strong>{" "}
          <span className="text-neutral-500 font-normal">complete</span>
        </span>
      )}
    </div>
  );
}
