export const brand = {
  name: "Invitaciones Web AR",
  shortName: "Invitaciones Web",
  instagram: "@invitacionesweb.ar",
  instagramUrl: "https://www.instagram.com/invitacionesweb.ar/",
  logo: "/brand/invitaciones-web-logo.svg",
  whatsapp: {
    number: import.meta.env.VITE_CONTACT_WHATSAPP || "5491100000000",
    message: "Hola, quiero consultar por una invitacion web para mi evento.",
  },
};

export function whatsappUrl(message = brand.whatsapp.message) {
  return `https://wa.me/${brand.whatsapp.number}?text=${encodeURIComponent(message)}`;
}

export const includes = [
  { title: "Cuenta regresiva", text: "Tus invitados ven cuanto falta para el gran dia." },
  { title: "Google Maps", text: "Ubicacion, horario y boton directo para llegar sin vueltas." },
  { title: "Confirmacion por WhatsApp", text: "RSVP simple con un mensaje listo para enviar." },
  { title: "Galeria de fotos", text: "Imagenes del evento, de la pareja o del homenajeado." },
  { title: "Regalos / alias / CBU", text: "Datos ordenados para regalos, transferencias o lista." },
  { title: "Dress code", text: "Indicaciones claras para el estilo de la celebracion." },
  { title: "QR para compartir", text: "Ideal para tarjetas, souvenirs, mesas o stories." },
  { title: "RSVP avanzado", text: "Formularios con campos personalizados y planilla." },
];

export const eventTypes = [
  {
    title: "Bodas",
    text: "Una invitacion elegante para compartir ceremonia, fiesta, regalos y confirmacion de asistencia.",
  },
  {
    title: "15 anos",
    text: "Una experiencia visual para presentar la noche, la galeria, el dress code y todos los detalles.",
  },
  {
    title: "Bautismos y comuniones",
    text: "Disenos delicados para celebraciones familiares y religiosas.",
  },
  {
    title: "Cumpleanos",
    text: "Invitaciones tematicas para compartir ubicacion, horario y confirmacion de asistencia.",
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
    description: "Estetica romantica, cuenta regresiva, mapa, regalos y RSVP.",
  },
  {
    name: "15 anos glam",
    type: "15 anos",
    template: "quince-glam",
    description: "Una invitacion visual, brillante y lista para compartir.",
  },
  {
    name: "Bautismo delicado",
    type: "Bautismo",
    template: "bautismo-delicado",
    description: "Tonos suaves para ceremonias familiares y religiosas.",
  },
  {
    name: "Cumple infantil",
    type: "Cumpleanos",
    template: "cumple-infantil",
    description: "Color, alegria, ubicacion y confirmacion en un link.",
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
      "Invitacion web personalizada",
      "Diseno basado en plantilla",
      "Fecha y cuenta regresiva",
      "Lugar, horario y ubicacion",
      "Boton de Google Maps",
      "Confirmacion por WhatsApp",
      "Hasta 3 fotos",
      "Link personalizado",
      "1 ronda de cambios",
    ],
    idealFor: "Cumpleanos, bautismos, comuniones, recibidas y eventos familiares.",
    cta: "Consultar por este plan",
  },
  {
    name: "Premium",
    price: "$90.000",
    subtitle: "La opcion mas completa para eventos especiales",
    recommended: true,
    features: [
      "Todo lo del plan Esencial",
      "Diseno personalizado segun el evento",
      "Galeria de fotos",
      "Dress code",
      "Seccion de regalos / alias / CBU",
      "Itinerario o cronograma",
      "QR personalizado",
      "Imagen para compartir por WhatsApp",
      "Hasta 3 rondas de cambios",
    ],
    idealFor: "Bodas, 15 anos, aniversarios, bautismos con fiesta y celebraciones importantes.",
    cta: "Quiero este plan",
  },
  {
    name: "Deluxe",
    price: "Desde $180.000",
    subtitle: "Una experiencia web mas exclusiva y a medida",
    features: [
      "Todo lo del plan Premium",
      "Diseno mas exclusivo",
      "Formulario RSVP avanzado",
      "Confirmaciones en Google Sheets",
      "Campos personalizados para invitados",
      "Musica o video",
      "Galeria extendida",
      "Secciones especiales",
      "Soporte hasta el evento",
      "Opcion de dominio propio",
    ],
    idealFor: "Bodas, 15 anos, eventos grandes, fiestas premium y eventos corporativos.",
    cta: "Consultar Deluxe",
  },
];

export const extras = [
  "Dominio propio .com.ar",
  "Formulario RSVP con Google Sheets",
  "Imagen para WhatsApp",
  "QR personalizado",
  "Musica de fondo",
  "Galeria extendida",
  "Entrega express 24 hs",
  "Cambios extra",
  "Version bilingue",
];

export const steps = [
  "Elegis una demo o estilo",
  "Completas el formulario con los datos del evento",
  "Disenamos tu invitacion web",
  "Revisas y pedis ajustes",
  "Recibis tu link y QR para compartir",
];

export const faqs = [
  {
    question: "Cuanto tarda la entrega?",
    answer: "Depende del plan y la personalizacion, pero normalmente una invitacion puede estar lista entre 48 y 72 hs una vez recibida toda la informacion.",
  },
  {
    question: "Puedo pedir cambios?",
    answer: "Si. Cada plan incluye una cantidad de rondas de cambios. Tambien se pueden solicitar cambios adicionales.",
  },
  {
    question: "El link queda activo hasta cuando?",
    answer: "El link permanece activo hasta el evento. Tambien podemos acordar mantenerlo disponible por mas tiempo como recuerdo.",
  },
  {
    question: "Puedo usar mi propio dominio?",
    answer: "Si. Podes usar un dominio propio, por ejemplo tuevento.com.ar, con costo adicional de dominio y configuracion.",
  },
  {
    question: "Puedo cambiar datos despues de publicada?",
    answer: "Si. Podemos actualizar horarios, ubicacion, textos o informacion importante segun el plan contratado.",
  },
  {
    question: "Como confirmo asistencia?",
    answer: "Puede ser por WhatsApp o mediante un formulario RSVP avanzado que guarde las respuestas en una planilla.",
  },
  {
    question: "Necesito pagar hosting?",
    answer: "No necesariamente. Los planes incluyen una opcion de link personalizado de Invitaciones Web AR. El dominio propio es opcional.",
  },
  {
    question: "Que pasa si no tengo fotos profesionales?",
    answer: "Podemos usar fotos personales, imagenes de estilo o una estetica mas grafica segun el tipo de evento.",
  },
];
