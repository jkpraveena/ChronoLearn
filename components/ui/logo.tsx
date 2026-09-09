import React from "react";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export function VertexLogo({ className = "", showText = true, size = 28 }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2.5 font-bold ${className}`}>
      {/* Vertex Orange Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        <path
          d="M16 28L4 8H28L16 28Z"
          fill="#F97316"
        />
        <path
          d="M16 22L9 11H23L16 22Z"
          fill="#FAF8F6"
        />
      </svg>

      {showText && (
        <span className="text-[20px] tracking-tight text-neutral-900 font-semibold font-[family-name:var(--font-inter)]">
          Vertex
        </span>
      )}
    </div>
  );
}
