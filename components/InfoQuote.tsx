import React from "react";
import { MdVerified } from "react-icons/md";

interface InfoQuoteProps {
  children: React.ReactNode;
  className?: string;
}

export default function InfoQuote({ children, className = "" }: InfoQuoteProps) {
  return (
    <div className={`flex items-center gap-3 border border-[#353535] p-4 mt-8 ${className}`}>
      <MdVerified  className="text-primary text-xl" />
      {children}
    </div>
  );
}
