import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../sections/navbar";
import { montserrat } from "./fonts";


export const metadata: Metadata = {
  title: "Reparaciones ABS",
  description: "Servicio profesional de reparacion de modulos de frenos ABS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
