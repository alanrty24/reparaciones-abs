import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

interface FloatingWhatsappButtonProps {
  phone: string; // e.g. "+521234567890"
  message?: string;
  label?: string;
  className?: string;
}

export default function FloatingWhatsappButton({
  phone,
  message = "Hola, quiero más información sobre reparación de módulos ABS.",
  label = "Chat con un especialista",
  className = "",
}: FloatingWhatsappButtonProps) {
  const url = `https://wa.me/${phone.replace(/[^\d]/g, "")}?text=${encodeURIComponent(message)}`;
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`fixed isolate right-4 bottom-5 z-100 flex items-center gap-3 rounded-xl bg-[#25d366] px-4 py-3 text-white shadow-2xl transition-all hover:bg-[#1ebe57] sm:right-6 sm:bottom-6 ${className}`}
      style={{ boxShadow: "0 8px 32px 0 rgba(0,0,0,0.25)" }}
    >
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-white/15 text-lg font-bold">
        <FaWhatsapp />
      </span>
      <div className="flex flex-col">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70">
          Online now
        </span>
        <span className="text-sm font-semibold leading-tight">{label}</span>
      </div>
    </Link>
  );
}
