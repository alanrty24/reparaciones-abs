export type NavItem = {
  href: string;
  label: string;
};

export const navItems: NavItem[] = [
  { href: "#servicios", label: "SERVICIOS" },
  { href: "#tecnologia", label: "TECNOLOGIA" },
  { href: "#garantia", label: "GARANTIA" },
  { href: "#ubicacion", label: "UBICACION" },
];

// Datos para el botón flotante de WhatsApp
export const whatsappData = {
  phone: "+58 4241727312",
  message: "Hola, quiero más información sobre reparación de módulos ABS.",
  label: "Chat con un especialista",
};
