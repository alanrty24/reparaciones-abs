'use client'
import React, { useState } from "react";

interface VehicleBrandProps {
  id ?: string | number;
  name: string;
}

export default function VehicleBrand({ id, name }: VehicleBrandProps) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="flex flex-col items-center cursor-pointer transition-colors duration-200 mx-4"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      key={id}
    >
      <span
        className={`font-bold text-lg md:text-2xl transition-colors duration-200 ${
          hovered ? "text-white" : "text-gray-700"
        }`}
      >
        {name}
      </span>
    </div>
  );
}
