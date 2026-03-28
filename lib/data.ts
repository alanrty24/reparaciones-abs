// Data para el footer
export const footerServices = [
  "Diagnóstico Computarizado",
  "Módulos ABS",
  "Sistemas de Frenado",
];

export const footerCompany = [
  { label: "Términos de Garantía", href: "#garantia" },
  { label: "Soporte Técnico", href: "#soporte" },
  { label: "Contacto Directo", href: "#contacto" },
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
    name: "Osciloscopio Automotriz",
    description: "Diagnóstico avanzado de señales eléctricas y sensores en tiempo real.",
    icon: "FaWaveSquare",
  },
  {
    id: "02",
    name: "Scanner OBD-II",
    description: "Lectura y borrado de códigos de falla, datos en vivo y pruebas de actuadores.",
    icon: "FaCarCrash",
  },
  {
    id: "03",
    name: "Banco de Pruebas ABS",
    description: "Simulación y verificación de módulos ABS fuera del vehículo.",
    icon: "FaFlask",
  },
];

export const technologyDetails: Record<string, TechnologyDetailData> = {
  "Osciloscopio Automotriz": {
    points: [
      "Permite visualizar señales eléctricas en tiempo real",
      "Diagnóstico de sensores y actuadores",
      "Detección de fallas intermitentes",
    ],
    details:
      "El osciloscopio automotriz es esencial para el diagnóstico avanzado de sistemas electrónicos modernos, permitiendo identificar problemas que no se detectan con herramientas convencionales.",
    image: "/images/font-tech-1.webp",
  },
  "Scanner OBD-II": {
    points: [
      "Lectura y borrado de códigos de falla",
      "Datos en vivo de sensores",
      "Pruebas de actuadores y funciones avanzadas",
    ],
    details:
      "El scanner OBD-II permite acceder a la computadora del vehículo para obtener información detallada sobre el estado de los sistemas y realizar pruebas específicas.",
    image: "https://www.autonumen.com/blog/wp-content/uploads/2016/07/obd2-scanner.jpg",
  },
  "Banco de Pruebas ABS": {
    points: [
      "Simulación de condiciones reales de frenado",
      "Verificación de módulos fuera del vehículo",
      "Pruebas seguras y controladas",
    ],
    details:
      "El banco de pruebas ABS permite validar el funcionamiento de los módulos en un entorno controlado, asegurando su correcto desempeño antes de la instalación.",
    image: "https://www.hella.com/techworld/assets/media_global/ABS_test_bench.jpg",
  },
};
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
    "Inicie el proceso de restauración con un escaneo computarizado de grado industrial. Protocolos de seguridad certificados.",
  submitLabel: "ENVIAR REQUERIMIENTO TECH",
  secureLabel: "SECURE TECH PROTOCOL 256-BIT ENCRYPTED",
  successMessage:
    "Solicitud enviada correctamente. Nuestro equipo te contactará en menos de 2 horas.",
};

export const diagnosticFeatures: DiagnosticFeature[] = [
  {
    id: "hardware",
    icon: "hardware",
    title: "HARDWARE OEM",
    description:
      "Uso exclusivo de componentes originales y software de diagnóstico propietario.",
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
      "Atención técnica especializada en menos de 12 horas hábiles.",
  },
];
