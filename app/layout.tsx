import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../sections/navbar";
import { montserrat } from "./fonts";
import { ReactNode } from "react";
import FloatingWhatsappButton from "@/components/FloatingWhatsappButton";
import { whatsappData } from "@/lib/data";
import Footer from "@/sections/Footer";


export const metadata: Metadata = {
  title: "Reparaciones ABS | Reparación de Módulos ABS en Venezuela",
  description: "Servicio profesional de reparación, diagnóstico y logística de módulos de frenos ABS en Venezuela. Garantía, cobertura nacional y atención personalizada.",
  keywords: [
    "ABS",
    "reparación ABS",
    "diagnóstico ABS",
    "módulos ABS",
    "servicio ABS",
    "frenos ABS",
    "frenos",
    "módulos de frenos",
    "logística ABS",
    "garantía ABS",
    "Venezuela",
    "Caracas",
    "servicio automotriz",
    "ingeniería electrónica",
    "envíos nacionales ABS"
  ],
  authors: [{ name: "Reparaciones ABS", url: "https://reparacionesabs.com" }],
  creator: "Reparaciones ABS",
  publisher: "Reparaciones ABS",
  metadataBase: new URL("https://reparacionesabs.com"),
  alternates: {
    canonical: "/",
    languages: {
      es: "/es",
      en: "/en"
    }
  },
  openGraph: {
    title: "Reparaciones ABS | Reparación de Módulos ABS en Venezuela",
    description: "Servicio profesional de reparación, diagnóstico y logística de módulos de frenos ABS en Venezuela. Garantía, cobertura nacional y atención personalizada.",
    url: "https://reparacionesabs.com",
    siteName: "Reparaciones ABS",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reparaciones ABS - Diagnóstico y reparación de módulos ABS en Venezuela"
      }
    ],
    locale: "es_VE",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Reparaciones ABS | Reparación de Módulos ABS en Venezuela",
    description: "Servicio profesional de reparación, diagnóstico y logística de módulos de frenos ABS en Venezuela. Garantía, cobertura nacional y atención personalizada.",
    site: "@reparacionesabsve",
    creator: "@reparacionesabsve",
    images: ["/images/og-image.jpg"]
  },
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
