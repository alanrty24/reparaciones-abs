import React from "react";
import InfoCard from "@/components/InfoCard";
import InfoQuote from "@/components/InfoQuote";
import Image from "next/image";
import { logisticsData } from "@/lib/data";
import { FaTruck } from "react-icons/fa";
import { spaceGrotesk } from "@/app/fonts";

export default function Logistics() {
  return (
    <section id="garantia" className="py-20 bg-[#1B1B1B]">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-4 px-4 items-center justify-between">
        {/* Columna izquierda */}
        <div className="flex-1 w-full max-w-xl">
          <h2 className={`text-4xl font-extrabold text-main mb-2 leading-tight ${spaceGrotesk.className}`}>
            {logisticsData.title}
          </h2>
          <p className="text-muted text-lg mb-8">
            {logisticsData.subtitle}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {logisticsData.cards.map((card, idx) => (
              <InfoCard
                key={idx}
                highlight={card.highlight}
                icon={card.icon === FaTruck ? FaTruck : undefined}
                title={<span className={spaceGrotesk.className}>{card.title}</span>}
                description={card.description}
                color={idx === 0 ? "bg-primary" : "bg-white"}
              />
            ))}
          </div>
          <InfoQuote>
            <span className="italic text-main text-sm">
              {logisticsData.quote}
            </span>
          </InfoQuote>
        </div>
        {/* Columna derecha: Mapa */}
        <div className="relative min-h-1/2 flex items-center justify-center max-w-md w-full">
          <div className="relative z-10 ">
            <Image
              className="object-cover grayscale brightness-75 contrast-125"
              alt={logisticsData.map.alt}
              src={logisticsData.map.src}
              width={1000}
              height={1000}
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="w-4 h-4 bg-primary rounded-full animate-ping"></div>
              <div className="w-2 h-2 bg-primary rounded-full -mt-3.5"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest mt-2 bg-surface px-2 py-1">
                {logisticsData.map.hq}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
