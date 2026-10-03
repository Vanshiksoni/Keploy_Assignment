import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Badge({ children, variant = "primary" }: BadgeProps) {
  return (
    <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-[#646f79] dark:bg-[#8e99a4] text-white dark:text-[#0d0e10] text-xs font-medium tracking-wide leading-none shadow-xs select-none whitespace-nowrap">
      {children}
    </span>
  );
}
