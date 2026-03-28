'use client';
import React from "react";
import { technologies } from "@/lib/data";
import TechnologyCard from "@/components/TechnologyCard";
import { FaWaveSquare, FaCarCrash, FaTools, FaFlask } from "react-icons/fa";
import { IconType } from "react-icons";
import { spaceGrotesk } from "@/app/fonts";

const iconMap: Record<string, IconType> = {
  FaWaveSquare,
  FaCarCrash,
  FaTools,
  FaFlask,
};

export default function Technologies() {

  return (
    <section id="tecnologia" className="py-16 bg-[#131313]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between mb-10 gap-6">
          <div>
            <h2 className={`${spaceGrotesk.className} text-3xl md:text-4xl font-bold uppercase text-white mb-2`}>
              Ingeniería <span className="text-red-500">Aplicada</span>
            </h2>
            <p className="text-gray-300 max-w-2xl">
              Utilizamos equipos y herramientas de última generación para garantizar diagnósticos precisos y reparaciones seguras en módulos ABS y sistemas electrónicos automotrices.
            </p>
          </div>
          <span
            className="hidden md:block absolute bottom-0 right-0 w-1/2 border-b-2 border-white/10 transform -translate-y-1/2 pointer-events-none"
          />
          <div className="flex flex-col items-end md:items-center min-w-28">
            <span className={`${spaceGrotesk.className} text-4xl md:text-5xl font-bold text-red-600 leading-none`}>03</span>
            <span className="uppercase text-xs tracking-widest text-gray-400 mt-1">Áreas Core</span>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech) => {
            const Icon: IconType = iconMap[tech.icon] || FaTools;
            return (
              <TechnologyCard
                key={tech.name}
                nroItem={tech.id}
                name={tech.name}
                description={tech.description}
                Icon={Icon}
                onDetailClick={() => {
                  // Aquí puedes manejar la lógica para mostrar el detalle de la tecnología
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
} 
      
