import React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  className?: string;
  color?: string; // tailwind color e.g. text-red-500
}

export default function SectionTitle({ children, className = "", color = "text-red-500" }: SectionTitleProps) {
  return (
    <span
      className={`inline-flex bg-slate-100/15 border-l-2 px-3 py-1 text-[10px] font-bold tracking-[0.45em] uppercase ring-1 ring-white/10 sm:text-xs ${color} ${className}`}
    >
      {children}
    </span>
  );
}
