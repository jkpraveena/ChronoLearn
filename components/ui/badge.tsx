import React from "react";

export type BadgeVariant = "video" | "lesson" | "popular";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  children?: React.ReactNode;
}

export function Badge({
  variant = "video",
  children,
  className = "",
  ...props
}: BadgeProps) {
  const variantStyles = {
    video: "bg-[#FFEEE5] text-primary-500",
    lesson: "bg-[#F1F5F9] text-[#6366F1]",
    popular: "bg-[#FFEEE5] text-[#EA580C]",
  };

  const defaultText = {
    video: "VIDEO",
    lesson: "LESSON",
    popular: "POPULAR",
  };

  return (
    <span
      className={`inline-flex items-center justify-center font-bold text-[11px] tracking-wider uppercase px-2 py-0.5 rounded-[4px] font-[family-name:var(--font-inter)] ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children || defaultText[variant]}
    </span>
  );
}
