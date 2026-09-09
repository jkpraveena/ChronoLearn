import React from "react";
import { ChevronDown } from "lucide-react";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options?: Option[];
}

export function Select({
  options = [],
  className = "",
  defaultValue,
  children,
  ...props
}: SelectProps) {
  return (
    <div className="relative inline-flex items-center w-full">
      <select
        defaultValue={defaultValue}
        className={`appearance-none w-full h-[44px] rounded-[12px] border border-neutral-200 bg-white px-4 pr-10 text-[14px] text-neutral-900 font-medium cursor-pointer transition-colors focus:outline-none focus:border-primary-400 focus:ring-2 focus:ring-primary-400/20 disabled:bg-neutral-50 disabled:text-neutral-400 ${className}`}
        {...props}
      >
        {children
          ? children
          : options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
      </select>
      <div className="absolute right-3.5 text-neutral-500 pointer-events-none flex items-center justify-center">
        <ChevronDown className="w-4 h-4" />
      </div>
    </div>
  );
}
