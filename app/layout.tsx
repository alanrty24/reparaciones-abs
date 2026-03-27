import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../sections/navbar";
import { montserrat } from "./fonts";
import { ReactNode } from "react";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";
import { whatsappData } from "@/lib/data";
import Footer from "@/sections/Footer";

export const metadata: Metadata = {
  title: "Reparaciones ABS",
  description: "Servicio profesional de reparacion de modulos de frenos ABS",
  icons: {
    icon: "/images/logo.ico",
    shortcut: "/images/logo.ico",
    apple: "/images/logo.ico",
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${montserrat.variable} h-full antialiased`}
    >
      {/* El head es gestionado automáticamente por Next.js con el objeto metadata */}
      <body className="min-h-full flex flex-col">
        <Navbar />
        <FloatingWhatsappButton
          phone={whatsappData.phone}
          message={whatsappData.message}
          label={whatsappData.label}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
