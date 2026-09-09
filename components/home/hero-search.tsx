"use client";

import React, { useRef, useEffect } from "react";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

export interface HeroSearchProps {
  className?: string;
  placeholder?: string;
}

export function HeroSearch({
  className = "",
  placeholder = "Ask anything about your learning...",
}: HeroSearchProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Listen for Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = inputRef.current?.value.trim();
    if (query) {
      router.push(`/search?q=${encodeURIComponent(query)}`);
    } else {
      inputRef.current?.focus();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`relative w-full max-w-[700px] mx-auto ${className}`}
    >
      <div className="relative flex items-center w-full bg-white border border-neutral-200/90 rounded-[18px] px-5 py-4 shadow-[0_4px_20px_rgba(15,23,42,0.04)] focus-within:shadow-[0_8px_30px_rgba(249,115,22,0.12)] focus-within:border-primary-400 transition-all duration-200">
        {/* Left Search Icon */}
        <Search className="w-5 h-5 text-neutral-400 shrink-0 mr-3.5 stroke-[1.8]" />

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          className="w-full bg-transparent text-[15px] md:text-[16px] text-neutral-900 placeholder:text-neutral-400 focus:outline-none font-[family-name:var(--font-inter)]"
        />

        {/* Right ⌘ K Shortcut Badge */}
        <div className="hidden sm:flex items-center shrink-0 ml-3">
          <kbd className="inline-flex items-center px-2 py-1 text-[12px] font-medium font-mono text-neutral-500 bg-neutral-100/90 border border-neutral-200/80 rounded-[6px]">
            ⌘ K
          </kbd>
        </div>
      </div>
    </form>
  );
}
