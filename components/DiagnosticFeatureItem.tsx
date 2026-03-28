import React from "react";
import { LuCpu, LuShield, LuZap } from "react-icons/lu";
import { DiagnosticFeature } from "@/lib/data";

type DiagnosticFeatureItemProps = {
  feature: DiagnosticFeature;
};

const iconMap = {
  hardware: LuCpu,
  shield: LuShield,
  priority: LuZap,
};

export default function DiagnosticFeatureItem({
  feature,
}: DiagnosticFeatureItemProps) {
  const Icon = iconMap[feature.icon];

  return (
    <li className="flex items-start gap-4 rounded-sm border border-white/10 bg-white/5 px-4 py-3">
      <span className="grid h-11 w-11 shrink-0 place-items-center bg-white/5 text-red-500">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <div>
        <h3 className="text-sm font-extrabold tracking-wide text-main">
          {feature.title}
        </h3>
        <p className="mt-1 text-sm text-muted">{feature.description}</p>
      </div>
    </li>
  );
}
