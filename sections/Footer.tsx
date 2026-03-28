import React from "react";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { footerServices, footerCompany } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#131313]  border-surface pt-14 pb-6 px-4 text-main">
      <div className="max-w-6xl px-4 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-8">
        {/* Marca */}
        <div>
          <h3 className="text-2xl font-extrabold mb-3 text-main">REPARACIONES ABS</h3>
          <p className="text-muted max-w-xs">
            Líderes en ingeniería de frenado de alta precisión en Venezuela. Tecnología alemana al servicio de su seguridad.
          </p>
        </div>
        {/* Servicios */}
        <div>
          <h4 className="font-bold uppercase text-sm mb-3 tracking-widest text-main">Servicios</h4>
          <ul className="space-y-2">
            {footerServices.map((s) => (
              <li key={s} className="text-muted hover:text-primary transition-colors cursor-pointer">{s}</li>
            ))}
          </ul>
        </div>
        {/* Compañía */}
        <div>
          <h4 className="font-bold uppercase text-sm mb-3 tracking-widest text-main">Compañía</h4>
          <ul className="space-y-2">
            {footerCompany.map((c) => (
              <li key={c.label}>
                <a href={c.href} className="text-muted hover:text-primary transition-colors cursor-pointer">{c.label}</a>
              </li>
            ))}
          </ul>
        </div>
        {/* Contacto */}
        <div>
          <h4 className="font-bold uppercase text-sm mb-3 tracking-widest text-main">Contacto</h4>
          <address className="not-italic text-muted mb-4">
            Av. Principal, Edif. Tech Center<br />Caracas, Venezuela
          </address>
          <div className="flex gap-4 mt-2">
            <a href="mailto:reparacionesabsve@gmail.com" className="text-primary hover:text-white text-xl" aria-label="Enviar correo">
              <FaEnvelope />
            </a>
            <a href="tel:+584241727312" className="text-primary hover:text-white text-xl" aria-label="Llamar">
              <FaPhoneAlt />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-muted text-xs pt-6 border-t border-surface">
        © {new Date().getFullYear()} REPARACIONES ABS VENEZUELA. HIGH-PRECISION ENGINEERING.
      </div>
    </footer>
  );
}
