import { spaceGrotesk } from "@/app/fonts";
import React from "react";

interface InfoCardProps {
  icon?: React.ElementType | string;
  title: React.ReactNode;
  subtitle?: string;
  description: string;
  highlight?: React.ReactNode;
  className?: string;
  color?: string;
}

export default function InfoCard({ icon, title, subtitle, description, highlight, color, className = "" }: InfoCardProps) {
  return (
    <div className={`bg-[#353535] rounded-md p-6 flex flex-col min-h-35 relative ${className}`}>
       <span className={`absolute left-0 top-0 h-full w-1 rounded-l-md ${color}`} />
      <div className="flex items-center gap-3 mb-2">
        {icon && typeof icon === "string"
          ? <span className="text-2xl text-primary" dangerouslySetInnerHTML={{ __html: icon }} />
          : icon && React.createElement(icon, { className: "text-2xl text-white" })}
        {highlight && <span className={`text-2xl font-extrabold leading-none text-primary ${spaceGrotesk.className}`}>{highlight}</span>}
      </div>
      <div>
        <div className="font-bold text-lg text-main uppercase leading-tight">{title}</div>
        {subtitle && <div className="font-bold text-sm text-main uppercase mb-1">{subtitle}</div>}
        <div className="text-muted text-sm mt-1">{description}</div>
      </div>
    </div>
  );
}
