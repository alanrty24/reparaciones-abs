import Image from "next/image";
import Button from "@/components/button";
import SectionTitle from "@/components/SectionTitle";
import { bebasNeue } from "@/app/fonts";
import { FaMessage } from "react-icons/fa6";
import { LuBookOpen } from "react-icons/lu";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden bg-hero text-main"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/font-hero.png"
          alt="Banco de trabajo con modulos y sistema de diagnostico ABS"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--hero-overlay)_0%,rgba(15,10,10,0.82)_36%,rgba(33,10,10,0.52)_68%,rgba(70,8,8,0.3)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_40%,rgba(255,28,28,0.24),transparent_30%),radial-gradient(circle_at_20%_35%,rgba(255,255,255,0.06),transparent_28%)]" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100svh-73px)] w-full max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.95fr)] lg:gap-12">
          <div className="max-w-2xl">
            <SectionTitle className="mb-6">INGENIERÍA DE PRECISIÓN</SectionTitle>

            <h1 
            className={`max-w-[12ch] ${bebasNeue.className} text-5xl leading-[0.9] font-bold tracking-tight text-main sm:text-6xl md:text-7xl xl:text-[6.75rem]`}>
              Presión y <span className="text-primary">precisión</span> en tu
              seguridad
            </h1>

            <p className="mt-6 max-w-xl text-sm leading-7 text-muted sm:text-base">
              Especialistas certificados en la restauración de sistemas de
              frenado inteligente. Recuperamos la integridad de su módulo ABS
              con tecnología de diagnóstico aeroespacial.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                href="#contacto"
                className="flex items-center min-w-48 gap-2 px-6 py-4 text-sm hover:bg-red-500"
              >
                <span aria-hidden="true">
                    <FaMessage className="w-4 h-4"/>
                </span>
                WHATSAPP SPECIALIST
              </Button>

              <Button
                href="#catalogo"
                className="flex items-center gap-2 min-w-48 border border-red-200 bg-transparent px-6 py-4 text-sm text-main hover:bg-[#191A1F]"
              >
                <span aria-hidden="true">
                  <LuBookOpen className="w-4 h-4"/>
                </span>
                VER CATALOGO
              </Button>
            </div>
          </div>

          <div className="hidden lg:flex lg:justify-end">
            <div className="relative aspect-square w-full max-w-lg overflow-hidden border border-white/5 bg-black/70 shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_55%)]" />
              <Image
                src="/images/font-card-hero.png"
                alt="Modulo ABS reparado sobre fondo oscuro"
                sizes="600px"
                fill
                className="object-contain p-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
