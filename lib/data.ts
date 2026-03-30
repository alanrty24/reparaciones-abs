// Data para el footer
export const footerServices = [
  "Reparaciones de Módulos ABS",
  "Módulos ABS",
  "Sistemas de Frenado",
];

export const footerCompany = [
  { id: 1, label: "Términos de Garantía", href: "#garantia" },
  { id: 2, label: "Soporte Técnico", href: "mailto:reparacionesabsve@gmail.com" },
  { id: 3, label: "Contacto Directo", href: "tel:+584241727312" },
];
import { FaTruck } from "react-icons/fa";

// Data para la sección de logística
export const logisticsData = {
  title: "COBERTURA Y CONFIANZA TOTAL",
  subtitle: "Nuestra logística está diseñada para que la distancia no sea un obstáculo para su seguridad.",
  cards: [
    {
      highlight: 12,
      title: "MESES DE GARANTÍA",
      description: "Respaldo total en mano de obra y componentes electrónicos.",
    },
    {
      icon: FaTruck,
      title: "ENVÍOS NACIONALES",
      description: "Logística optimizada a todo el territorio nacional vía Zoom/TEALCA.",
    },
  ],
  quote: `" Ingeniería venezolana con estándares internacionales de calidad. "`,
  map: {
    src: "/images/mapa-venezuela.png",
    alt: "Mapa de Venezuela con rutas de cobertura",
    hq: "Caracas"
  }
};
// Data para la sección de tecnologías
export type Technology = {
  id: number | string;
  name: string;
  description: string;
  icon: string; // nombre del icono de react-icons o url
};

export type TechnologyDetailData = {
  points: string[];
  details: string;
  image: string;
};

export const technologies: Technology[] = [
  {
    id: "01",
    name: "Pedal de freno a fondo.",
    description: "El pedal de freno se sienta esponjoso o se hunda más de lo normal al pisarlo.",
    icon: "FaWaveSquare",
  },
  {
    id: "02",
    name: "Fuga de líquido de frenos.",
    description: "La fuga de líquido de frenos, lo que puede afectar la presión y el rendimiento del sistema de frenado.",
    icon: "FaCarCrash",
  },
  {
    id: "03",
    name: "Pérdida de presión (módulo tapado)",
    description: "Impide que el sistema mantenga la presión adecuada en las líneas de freno.",
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
  { href: "#señales", label: "SEÑALES" },
  { href: "#garantia", label: "GARANTIA" },
  { href: "#garantia", label: "UBICACION" },
];

// Datos para el botón flotante de WhatsApp
export const whatsappData = {
  phone: "+58 4241727312",
  message: "Hola, quiero más información sobre reparación de módulos ABS.",
  label: "Chat con un especialista",
};

export type DiagnosticFeature = {
  id: string;
  icon: "hardware" | "shield" | "priority";
  title: string;
  description: string;
};

export const diagnosticSectionData = {
  id: "contacto",
  eyebrow: "AGENDE SU TURNO",
  titleLine1: "SOLICITA TU",
  titleLine2: "DIAGNÓSTICO",
  description:
    "Inicie el proceso de diagnóstico de su módulo ABS con nuestro formulario seguro. Nuestro equipo especializado se pondrá en contacto con usted en menos de 1 hora hábil para coordinar la recogida y evaluación de su módulo.",
  submitLabel: "ENVIAR REQUERIMIENTO TECH",
  secureLabel: "SECURE TECH PROTOCOL 256-BIT ENCRYPTED",
  successMessage:
    "Solicitud enviada correctamente. Nuestro equipo te contactará en menos de 2 horas.",
};

export const diagnosticFeatures: DiagnosticFeature[] = [
  {
    id: "hardware",
    icon: "hardware",
    title: "ESPECIALISTAS EN REPARACIÓN",
    description:
      "Técnicos con experiencia en módulos ABS de todas las marcas y modelos.",
  },
  {
    id: "shield",
    icon: "shield",
    title: "BLINDAJE DE DATOS",
    description:
      "Su información técnica y personal está protegida bajo protocolos de encriptación.",
  },
  {
    id: "priority",
    icon: "priority",
    title: "RESPUESTA PRIORITY",
    description:
      "Atención técnica especializada en menos de 1 hora hábil.",
  },
];
