import BrandsCarousel from "@/sections/BrandsCarousel";
import Hero from "@/sections/Hero";
import Logistics from "@/sections/Logistics";
import Technologies from "@/sections/Technologies";


export default function Home() {
  return (
    <main>
      <Hero />
      <BrandsCarousel />
      <Technologies />
      <Logistics />
    </main>
    
  );
}
