"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../components/button";
import { navItems } from "../lib/data";
import { spaceGrotesk } from "@/app/fonts";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 border-b border-navbar bg-navbar/95 backdrop-blur">
      {/* Menu de Mobile */}
      <nav
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Navegacion principal"
      >
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label="Ir al inicio"
        >
          <div className="relative h-9 w-9 overflow-hidden rounded-sm bg-surface ring-1 border-navbar">
            <Image
              src="/images/logo.png"
              alt="Logo Reparaciones ABS"
              fill
              className="object-contain p-0.5"
              sizes="36px"
              priority
            />
          </div>
          <span className="text-sm font-extrabold tracking-tight text-main sm:text-base">
            REPARACIONES ABS
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex items-center rounded-md border border-navbar px-3 py-2 text-xs font-bold tracking-wide text-main transition hover:bg-surface hover:cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary lg:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        >
          MENU
        </button>

        {/* Menu de escritorio */}
        <div className="hidden items-center gap-8 lg:flex">
          <ul className="flex items-center gap-7">
            {navItems.map((item, index) => (
              <li key={item.label} className="relative">
                <Link
                  href={item.href}
                  className={`text-xs font-extrabold tracking-wide transition ${spaceGrotesk.className} ${
                    index === 0
                      ? "text-primary"
                      : "text-main hover:text-red-600"
                  }`}
                >
                  {item.label}
                </Link>
                {index === 0 ? (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-primary" />
                ) : null}
              </li>
            ))}
          </ul>
          <Button href="#contacto">
            CONSULTAR
          </Button>
        </div>
      </nav>
      
      {/* Menu mobile */}
      {isOpen ? (
        <div
          id="mobile-menu"
          className="border-t border-navbar bg-navbar lg:hidden"
        >
          <ul className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navItems.map((item, index) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block rounded px-2 py-2 text-xs font-extrabold tracking-wide ${spaceGrotesk.className} ${
                    index === 0
                      ? "bg-primary/10 text-primary"
                      : "text-main hover:bg-surface"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="pt-1">
              <Button
                href="#contacto"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                CONSULTAR
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
