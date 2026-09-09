import React from "react";

export function BottomGlow({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden pointer-events-none ${className}`}
    >
      {/* Stepped vertical bar gradient backdrop */}
      <div className="relative w-full max-w-[1300px] mx-auto h-48 md:h-64 flex items-end justify-center gap-2 sm:gap-4 md:gap-6 px-4">
        {[
          { h: "h-28 md:h-36", opacity: "opacity-40" },
          { h: "h-36 md:h-48", opacity: "opacity-55" },
          { h: "h-44 md:h-56", opacity: "opacity-70" },
          { h: "h-32 md:h-44", opacity: "opacity-50" },
          { h: "h-20 md:h-28", opacity: "opacity-35" },
          { h: "h-40 md:h-52", opacity: "opacity-60" },
          { h: "h-48 md:h-60", opacity: "opacity-75" },
          { h: "h-36 md:h-48", opacity: "opacity-55" },
          { h: "h-24 md:h-32", opacity: "opacity-40" },
        ].map((bar, i) => (
          <div
            key={i}
            className={`w-full max-w-[90px] ${bar.h} rounded-t-[14px] bg-gradient-to-t from-[#FB923C]/50 via-[#FDBA74]/30 to-transparent blur-[2px] ${bar.opacity} transition-all`}
          />
        ))}
      </div>

      {/* Ambient bottom warm glow overlay */}
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F97316]/20 via-[#FB923C]/10 to-transparent blur-xl" />
    </div>
  );
}
