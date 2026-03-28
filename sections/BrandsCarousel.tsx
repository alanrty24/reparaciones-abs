'use client';
import { useRef } from "react";
import VehicleBrand from "@/components/VehicleBrand";
import { vehicleBrands } from "@/lib/data";
import "@/styles/brandscarousel.css"; 

export default function BrandsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "paused";
    }
  };
  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = "running";
    }
  };

  return (
    <section className="relative bg-black py-8 w-full overflow-hidden">
      <div className="relative flex items-center justify-center gap-8 max-w-6xl mx-auto">
        <div className="flex-1">
          <h3 className="w-full text-center text-xs tracking-widest text-gray-300 mb-8 uppercase">
            Certificados para marcas elite
          </h3>
          <div
            ref={carouselRef}
            className="flex gap-16 whitespace-nowrap animate-scroll-x"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {vehicleBrands.map((brand, index) => (
              <VehicleBrand key={index} name={brand} />
            ))}
            {/* Duplicar para efecto infinito */}
            {vehicleBrands.map((brand, index) => (
              <VehicleBrand key={index + "-2"} name={brand} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
