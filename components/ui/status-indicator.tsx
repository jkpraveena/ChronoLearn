import React from "react";
import { CheckCircle2, Play, Lock } from "lucide-react";

export type StatusType = "in-progress" | "completed" | "now-playing" | "locked";

export interface StatusIndicatorProps {
  status: StatusType;
  label?: string;
  className?: string;
}

export function StatusIndicator({
  status,
  label,
  className = "",
}: StatusIndicatorProps) {
  const configs = {
    "in-progress": {
      icon: (
        <span className="relative flex h-3.5 w-3.5 items-center justify-center">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500" />
        </span>
      ),
      defaultLabel: "In Progress",
      textColor: "text-neutral-700",
    },
    completed: {
      icon: <CheckCircle2 className="w-4 h-4 text-[#10B981]" />,
      defaultLabel: "Completed",
      textColor: "text-neutral-700",
    },
    "now-playing": {
      icon: (
        <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-primary-500 text-white">
          <Play className="w-2.5 h-2.5 fill-white translate-x-[0.5px]" />
        </span>
      ),
      defaultLabel: "Now Playing",
      textColor: "text-neutral-700",
    },
    locked: {
      icon: <Lock className="w-4 h-4 text-neutral-500" />,
      defaultLabel: "Locked",
      textColor: "text-neutral-500",
    },
  };

  const current = configs[status];

  return (
    <div
      className={`inline-flex items-center gap-1.5 text-[13px] font-medium font-[family-name:var(--font-inter)] ${current.textColor} ${className}`}
    >
      {current.icon}
      <span>{label || current.defaultLabel}</span>
    </div>
  );
}
