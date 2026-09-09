import React from "react";
import { Search } from "lucide-react";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode;
  rightElement?: React.ReactNode;
}

export function Input({
  className = "",
  leftIcon,
  rightElement,
  ...props
}: InputProps) {
  return (
    <div className="relative flex items-center w-full">
      {leftIcon && (
        <div className="absolute left-3.5 text-neutral-400 pointer-events-none flex items-center justify-center">
          {leftIcon}
        </div>
      )}
      <input
        className={`w-full h-[44px] rounded-[12px] border border-neutral-200 bg-white text-[14px] text-neutral-900 placeholder:text-neutral-400 transition-colors focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 disabled:bg-neutral-50 disabled:text-neutral-400 ${
          leftIcon ? "pl-10" : "pl-4"
        } ${rightElement ? "pr-14" : "pr-4"} ${className}`}
        {...props}
      />
      {rightElement && (
        <div className="absolute right-3 flex items-center pointer-events-none">
          {rightElement}
        </div>
      )}
    </div>
  );
}

export interface SearchInputProps
  extends Omit<InputProps, "leftIcon" | "rightElement"> {
  shortcut?: string;
}

export function SearchInput({
  shortcut = "⌘ K",
  placeholder = "Search anything ...",
  className = "",
  ...props
}: SearchInputProps) {
  return (
    <Input
      placeholder={placeholder}
      leftIcon={<Search className="w-4 h-4 text-neutral-400" />}
      rightElement={
        shortcut ? (
          <kbd className="inline-flex items-center px-1.5 py-0.5 text-[11px] font-medium font-mono text-neutral-500 bg-neutral-100 border border-neutral-200 rounded-[4px]">
            {shortcut}
          </kbd>
        ) : null
      }
      className={className}
      {...props}
    />
  );
}
