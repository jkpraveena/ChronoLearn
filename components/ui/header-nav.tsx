import React from "react";
import Link from "next/link";
import { VertexLogo } from "@/components/ui/logo";
import { Bell } from "lucide-react";
import { SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";

export interface HeaderNavProps {
  activePath?: string;
  className?: string;
  showUserActions?: boolean;
}

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

      {/* Right: Auth Controls & Profile */}
      {showUserActions && (
        <div className="flex items-center gap-3 md:gap-4">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <button className="text-[14px] font-medium text-neutral-700 hover:text-neutral-900 px-3 py-1.5 transition-colors cursor-pointer">
                Sign In
              </button>
            </SignInButton>

            <SignUpButton mode="modal">
              <button className="inline-flex items-center justify-center text-[13px] font-medium bg-primary-500 hover:bg-[#EA580C] text-white px-4 py-2 rounded-[10px] shadow-xs hover:shadow transition-all cursor-pointer">
                Sign Up
              </button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <button
              type="button"
              aria-label="Notifications"
              className="w-9 h-9 flex items-center justify-center rounded-full text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100/80 transition-colors"
            >
              <Bell className="w-5 h-5 stroke-[1.8]" />
            </button>

            <UserButton
              appearance={{
                elements: {
                  avatarBox: "w-9 h-9 border border-neutral-200/90 shadow-xs",
                },
              }}
            />
          </Show>
        </div>
      )}
    </header>
  );
}
