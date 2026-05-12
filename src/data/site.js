export const brand = {
  name: "Invitaciones Web AR",
  shortName: "Invitaciones Web",
  instagram: "@invitacionesweb.ar",
  instagramUrl: "https://www.instagram.com/invitacionesweb.ar/",
  logo: "/brand/invitaciones-web-logo.svg",
  whatsapp: {
    number: import.meta.env.VITE_CONTACT_WHATSAPP || "5491100000000",
    message: "Hola, quiero consultar por una invitación web para mi evento.",
  },
};

export function whatsappUrl(message = brand.whatsapp.message) {
  return `https://wa.me/${brand.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const includes = [
  { title: "Cuenta regresiva", text: "Tus invitados ven cuánto falta para el gran día." },
  { title: "Google Maps", text: "Ubicación, horario y botón directo para llegar sin vueltas." },
  { title: "Confirmación por WhatsApp", text: "RSVP simple con un mensaje listo para enviar." },
  { title: "Galería de fotos", text: "Imágenes del evento, de la pareja o del homenajeado." },
  { title: "Regalos / alias / CBU", text: "Datos ordenados para regalos, transferencias o lista." },
  { title: "Dress code", text: "Indicaciones claras para el estilo de la celebración." },
  { title: "QR para compartir", text: "Ideal para tarjetas, souvenirs, mesas o stories." },
  { title: "RSVP avanzado", text: "Formularios con campos personalizados y planilla." },
];

export const eventTypes = [
  {
    title: "Bodas",
    text: "Una invitación elegante para compartir ceremonia, fiesta, regalos y confirmación de asistencia.",
  },
  {
    title: "15 años",
    text: "Una experiencia visual para presentar la noche, la galería, el dress code y todos los detalles.",
  },
  {
    title: "Bautismos y comuniones",
    text: "Diseños delicados para celebraciones familiares y religiosas.",
  },
  {
    title: "Cumpleaños",
    text: "Invitaciones temáticas para compartir ubicación, horario y confirmación de asistencia.",
  },
  {
    title: "Recibidas",
    text: "Una web moderna para celebrar el logro y organizar la fiesta.",
  },
  {
    title: "Eventos especiales",
    text: "Aniversarios, cenas, eventos institucionales y celebraciones a medida.",
  },
];

export const demoCards = [
  {
    name: "Boda elegante",
    type: "Boda",
    template: "boda-elegante",
    description: "Estética romántica, cuenta regresiva, mapa, regalos y RSVP.",
  },
  {
    name: "15 años glam",
    type: "15 años",
    template: "quince-glam",
    description: "Una invitación visual, brillante y lista para compartir.",
  },
  {
    name: "Bautismo delicado",
    type: "Bautismo",
    template: "bautismo-delicado",
    description: "Tonos suaves para ceremonias familiares y religiosas.",
  },
  {
    name: "Cumple infantil",
    type: "Cumpleaños",
    template: "cumple-infantil",
    description: "Color, alegría, ubicación y confirmación en un link.",
  },
  {
    name: "Recibida moderna",
    type: "Recibida",
    template: "recibida-moderna",
    description: "Una propuesta fresca para celebrar logros y fiestas.",
  },
];

export const plans = [
  {
    name: "Esencial",
    price: "$45.000",
    subtitle: "Para eventos simples y elegantes",
    features: [
      "Invitación web personalizada",
      "Diseño basado en plantilla",
      "Fecha y cuenta regresiva",
      "Lugar, horario y ubicación",
      "Botón de Google Maps",
      "Confirmación por WhatsApp",
      "Hasta 3 fotos",
      "Link personalizado",
      "1 ronda de cambios",
    ],
    idealFor: "Cumpleaños, bautismos, comuniones, recibidas y eventos familiares.",
    cta: "Consultar por este plan",
  },
  {
    name: "Premium",
    price: "$90.000",
    subtitle: "La opción más completa para eventos especiales",
    recommended: true,
    features: [
      "Todo lo del plan Esencial",
      "Diseño personalizado según el evento",
      "Galería de fotos",
      "Dress code",
      "Sección de regalos / alias / CBU",
      "Itinerario o cronograma",
      "QR personalizado",
      "Imagen para compartir por WhatsApp",
      "Hasta 3 rondas de cambios",
    ],
    idealFor: "Bodas, 15 años, aniversarios, bautismos con fiesta y celebraciones importantes.",
    cta: "Quiero este plan",
  },
  {
    name: "Deluxe",
    price: "Desde $180.000",
    subtitle: "Una experiencia web más exclusiva y a medida",
    features: [
      "Todo lo del plan Premium",
      "Diseño más exclusivo",
      "Formulario RSVP avanzado",
      "Confirmaciones en Google Sheets",
      "Campos personalizados para invitados",
      "Música o video",
      "Galería extendida",
      "Secciones especiales",
      "Soporte hasta el evento",
      "Opción de dominio propio",
    ],
    idealFor: "Bodas, 15 años, eventos grandes, fiestas premium y eventos corporativos.",
    cta: "Consultar Deluxe",
  },
];

export const extras = [
  "Dominio propio .com.ar",
  "Formulario RSVP con Google Sheets",
  "Imagen para WhatsApp",
  "QR personalizado",
  "Música de fondo",
  "Galería extendida",
  "Entrega express 24 hs",
  "Cambios extra",
  "Versión bilingüe",
];

export const steps = [
  "Elegís una demo o estilo",
  "Completás el formulario con los datos del evento",
  "Diseñamos tu invitación web",
  "Revisás y pedís ajustes",
  "Recibís tu link y QR para compartir",
];

export const faqs = [
  {
    question: "¿Cuánto tarda la entrega?",
    answer: "Depende del plan y la personalización, pero normalmente una invitación puede estar lista entre 48 y 72 hs una vez recibida toda la información.",
  },
  {
    question: "¿Puedo pedir cambios?",
    answer: "Sí. Cada plan incluye una cantidad de rondas de cambios. También se pueden solicitar cambios adicionales.",
  },
  {
    question: "¿El link queda activo hasta cuándo?",
    answer: "El link permanece activo hasta el evento. También podemos acordar mantenerlo disponible por más tiempo como recuerdo.",
  },
  {
    question: "¿Puedo usar mi propio dominio?",
    answer: "Sí. Podés usar un dominio propio, por ejemplo tuevento.com.ar, con costo adicional de dominio y configuración.",
  },
  {
    question: "¿Puedo cambiar datos después de publicada?",
    answer: "Sí. Podemos actualizar horarios, ubicación, textos o información importante según el plan contratado.",
  },
  {
    question: "¿Cómo confirmo asistencia?",
    answer: "Puede ser por WhatsApp o mediante un formulario RSVP avanzado que guarde las respuestas en una planilla.",
  },
  {
    question: "¿Necesito pagar hosting?",
    answer: "No necesariamente. Los planes incluyen una opción de link personalizado de Invitaciones Web AR. El dominio propio es opcional.",
  },
  {
    question: "¿Qué pasa si no tengo fotos profesionales?",
    answer: "Podemos usar fotos personales, imágenes de estilo o una estética más gráfica según el tipo de evento.",
  },
];
