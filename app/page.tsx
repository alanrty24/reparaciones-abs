import BrandsCarousel from "@/sections/BrandsCarousel";
import ContactRequest from "@/sections/ContactRequest";
import Hero from "@/sections/Hero";
import Logistics from "@/sections/Logistics";
import Technologies from "@/sections/Technologies";


export default function Home() {
  return (
    <main
    className="pt-8"
    >
      <Hero />
      <BrandsCarousel />
      <Technologies />
      <Logistics />
      <ContactRequest />
    </main>
    
  );
}
