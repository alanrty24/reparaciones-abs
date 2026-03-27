'use client';
import Image from "next/image";
import React from "react";

interface TechnologyDetailProps {
  open: boolean;
  onClose: () => void;
  title: string;
  points: string[];
  details: string;
  image: string;
}

export default function TechnologyDetail({
  open,
  onClose,
  title,
  points,
  details,
  image,
}: TechnologyDetailProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl rounded-lg bg-surface p-6 shadow-xl text-main">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl text-muted hover:text-primary focus:outline-none"
          aria-label="Cerrar detalle"
        >
          ×
        </button>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="mb-2 text-2xl font-bold text-primary">{title}</h2>
            <ul className="mb-4 list-disc pl-5 text-sm">
              {points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <p className="text-base text-main">{details}</p>
          </div>
          <div className="shrink-0 flex items-center justify-center md:items-center">
            <Image
              src={image}
              alt={title}
              width={136}
              height={136}
              className="h-34 w-34 rounded-xl object-cover shadow-md "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
