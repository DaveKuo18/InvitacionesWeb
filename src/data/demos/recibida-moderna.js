import { quinceGlamDemo } from "./quince-glam.js";

export const recibidaModernaDemo = {
  ...quinceGlamDemo,
  slug: "demo-recibida-moderna",
  eventType: "recibida",
  template: "recibida-moderna",
  title: "Magui se recibe",
  eyebrow: "Recibida",
  dateISO: "2026-12-05T20:00:00-03:00",
  displayDate: "Sábado 5 de diciembre de 2026",
  intro: "Despues de tanto esfuerzo llega el momento de brindar. Te espero para celebrar este logro con una noche moderna y bien nuestra.",
  theme: { background: "#F7FAFC", card: "#FFFFFF", primary: "#2F80ED", primaryDark: "#173B72", secondary: "#22C55E", accent: "#FACC15", soft: "#E8F1FF", text: "#172033", muted: "#667085" },
  images: {
    hero: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1800&q=90",
    heroAlt: "Celebración de graduación",
    portrait: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=90",
    portraitAlt: "Graduada celebrando",
    portraitPosition: "center",
    gallery: [
      { src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85", alt: "Graduación" },
      { src: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=900&q=85", alt: "Birretes" },
      { src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=900&q=85", alt: "Brindis" },
      { src: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=900&q=85", alt: "Fiesta" },
    ],
  },
  location: { title: "Fiesta de recibida", name: "Distrito Eventos", address: "Av. Universidad 2026, Buenos Aires", time: "20:00 hs", mapsUrl: "https://maps.google.com/" },
  story: { eyebrow: "Lo logramos", title: "Un cierre y un comienzo", text: "Esta celebración resume años de estudio, apoyo y ganas. Magui quiere compartirla con quienes estuvieron cerca en el camino.", quote: "Todo esfuerzo merece un brindis a la altura." },
  details: { eyebrow: "La fiesta", intro: "Estos son los datos para venir a celebrar.", cardTitle: "Brindis, cena y baile", cardText: "Ideal para recibidas universitarias, egresos, actos y celebraciones profesionales." },
  timelineTitle: "Plan de la noche",
  dressCode: { enabled: true, title: "Urbano elegante", note: "Veni cómodo, con ganas de brindar y bailar." },
  gift: { enabled: true, text: "Tu compañía es el mejor regalo. Si querés sumar a la celebración, podés usar este alias.", alias: "magui.recibida", cbu: "" },
  rsvp: { ...quinceGlamDemo.rsvp, mode: "form", deadline: "28 de noviembre de 2026", whatsappMessage: "Hola, confirmo mi asistencia a la recibida de Magui. Mi nombre es:" },
};
