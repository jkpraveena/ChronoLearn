import React from "react";
import Link from "next/link";
import { VertexLogo } from "@/components/ui/logo";
import { Bell } from "lucide-react";

export interface HeaderNavProps {
  activePath?: string;
  className?: string;
  showUserActions?: boolean;
}

/** Renders the primary navigation header and optional user actions. */
export function HeaderNav({
  activePath = "",
  className = "",
  showUserActions = true,
}: HeaderNavProps) {
  return (
    <header
      className={`w-full bg-transparent px-6 sm:px-10 lg:px-16 py-5 flex items-center justify-between font-[family-name:var(--font-inter)] ${className}`}
    >
      {/* Left: Brand + Navigation */}
      <div className="flex items-center gap-8 md:gap-12">
        <Link href="/" className="hover:opacity-90 transition-opacity">
          <VertexLogo size={28} />
        </Link>

        <nav className="flex items-center gap-6 md:gap-8 text-[14px]">
          <Link
            href="/courses"
            className={`font-medium transition-colors ${
              activePath === "courses"
                ? "text-primary-500"
                : "text-neutral-700 hover:text-neutral-900"
            }`}
          >
            Courses
          </Link>
          <Link
            href="/my-learning"
            className={`font-medium transition-colors ${
              activePath === "my-learning"
                ? "text-primary-500"
                : "text-neutral-700 hover:text-neutral-900"
            }`}
          >
            My Learning
          </Link>
        </nav>
      </div>

      {/* Right: Notifications & User Avatar */}
      {showUserActions && (
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Notifications"
            className="w-9 h-9 flex items-center justify-center rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors"
          >
            <Bell className="w-5 h-5 stroke-[1.8]" />
          </button>

          {/* User Profile Avatar */}
          <div
            className="relative w-9 h-9 rounded-full overflow-hidden border border-neutral-200/90 shadow-xs bg-cover bg-center bg-no-org"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80')",
            }}
          >
            <span className="sr-only">User Profile</span>
          </div>
        </div>
      )}
    </header>
  );
}
