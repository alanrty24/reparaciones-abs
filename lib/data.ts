// Data para la sección de tecnologías
export type Technology = {
  name: string;
  description: string;
  icon: string; // nombre del icono de react-icons o url
};

export const technologies: Technology[] = [
  {
    name: "Osciloscopio Automotriz",
    description: "Diagnóstico avanzado de señales eléctricas y sensores en tiempo real.",
    icon: "FaWaveSquare",
  },
  {
    name: "Scanner OBD-II",
    description: "Lectura y borrado de códigos de falla, datos en vivo y pruebas de actuadores.",
    icon: "FaCarCrash",
  },
  {
    name: "Banco de Pruebas ABS",
    description: "Simulación y verificación de módulos ABS fuera del vehículo.",
    icon: "FaFlask",
  },
];
// Marcas de vehículos y sus logos (URLs de internet)
 
export const vehicleBrands: string[] = [
  "AUDI",
  "BMW",
  "CHEVROLET",
  "FORD",
  "HONDA",
  "HYUNDAI",
  "AUDI",
  "BMW",
  "CHEVROLET",
  "FORD",
  "HONDA",
  "HYUNDAI",
] 

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
