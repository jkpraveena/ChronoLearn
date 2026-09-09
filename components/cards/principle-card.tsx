import React from "react";
import { Eye, LayoutGrid, Target, Accessibility } from "lucide-react";

export type PrincipleKey = "clarity" | "consistency" | "focus" | "accessible";

export interface PrincipleCardProps {
  principle: PrincipleKey;
  className?: string;
}

export function PrincipleCard({ principle, className = "" }: PrincipleCardProps) {
  const configs = {
    clarity: {
      title: "Clarity First",
      description: "Every element should communicate clearly.",
      icon: <Eye className="w-5 h-5 text-neutral-700" />,
    },
    consistency: {
      title: "Consistency",
      description: "Use components and patterns consistently across the platform.",
      icon: <LayoutGrid className="w-5 h-5 text-neutral-700" />,
    },
    focus: {
      title: "Focus & Calm",
      description: "Remove noise and help learners focus on what matters.",
      icon: <Target className="w-5 h-5 text-neutral-700" />,
    },
    accessible: {
      title: "Accessible",
      description: "Design with accessibility and inclusivity in mind.",
      icon: <Accessibility className="w-5 h-5 text-neutral-700" />,
    },
  };

  const item = configs[principle];

  return (
    <div
      className={`flex items-start gap-3.5 font-[family-name:var(--font-inter)] ${className}`}
    >
      <div className="w-9 h-9 rounded-[8px] bg-white border border-neutral-200 flex items-center justify-center shrink-0 shadow-xs">
        {item.icon}
      </div>
      <div>
        <h4 className="text-[14px] font-semibold text-neutral-900 leading-snug">
          {item.title}
        </h4>
        <p className="text-[12px] text-neutral-500 mt-0.5 leading-relaxed">
          {item.description}
        </p>
      </div>
    </div>
  );
}
