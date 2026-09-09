import React from "react";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "text";
export type ButtonSize = "default" | "sm" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export function Button({
  children,
  variant = "primary",
  size = "default",
  className = "",
  disabled = false,
  leftIcon,
  rightIcon,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium font-[family-name:var(--font-inter)] transition-all select-none focus:outline-none focus:ring-2 focus:ring-primary-400/40";

  const sizeStyles = {
    default: "h-[44px] px-4 rounded-[12px] text-[14px]",
    sm: "h-[36px] px-3 rounded-[8px] text-[13px]",
    lg: "h-[48px] px-6 rounded-[12px] text-[16px]",
  };

  const variantStyles = {
    primary: disabled
      ? "bg-primary-100 text-primary-300 cursor-not-allowed shadow-none"
      : "bg-primary-500 text-white hover:bg-[#EA580C] active:bg-[#C2410C] shadow-sm hover:shadow",
    secondary: disabled
      ? "bg-neutral-50 border border-neutral-200 text-neutral-300 cursor-not-allowed shadow-none"
      : "bg-white border border-primary-400 text-primary-500 hover:bg-primary-100/50 hover:border-primary-500 active:bg-primary-100",
    tertiary: disabled
      ? "bg-neutral-50 border border-neutral-200 text-neutral-300 cursor-not-allowed shadow-none"
      : "bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-100 hover:border-neutral-300 active:bg-neutral-200/60",
    text: disabled
      ? "bg-transparent text-neutral-300 cursor-not-allowed"
      : "bg-transparent text-primary-500 hover:text-[#EA580C] active:text-[#C2410C] p-0 h-auto",
  };

  return (
    <button
      disabled={disabled}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
    </button>
  );
}
