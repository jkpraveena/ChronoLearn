import React from "react";
import Link from "next/link";
import { VertexLogo } from "@/components/ui/logo";

export interface HeaderNavProps {
  activePath?: string;
  className?: string;
}

export function HeaderNav({ activePath = "courses", className = "" }: HeaderNavProps) {
  return (
    <header
      className={`w-full bg-white/80 backdrop-blur-md border-b border-neutral-200 px-6 py-4 flex items-center justify-between font-[family-name:var(--font-inter)] ${className}`}
    >
      <div className="flex items-center gap-10">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <VertexLogo size={28} />
        </Link>

        <nav className="flex items-center gap-6 text-[14px]">
          <Link
            href="/courses"
            className={`font-medium transition-colors ${
              activePath === "courses"
                ? "text-primary-500"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/my-learning"
            className={`font-medium transition-colors ${
              activePath === "my-learning"
                ? "text-primary-500"
                : "text-neutral-600 hover:text-neutral-900"
            }`}
          >
            My Learning
          </Link>
        </nav>
      </div>
    </header>
  );
}
