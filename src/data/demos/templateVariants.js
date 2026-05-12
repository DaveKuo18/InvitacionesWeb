import { bautismoDelicadoDemo } from "./bautismo-delicado.js";
import { bodaEleganteDemo } from "./boda-elegante.js";
import { cumpleInfantilDemo } from "./cumple-infantil.js";
import { quinceGlamDemo } from "./quince-glam.js";
import { recibidaModernaDemo } from "./recibida-moderna.js";

function makeVariant(base, overrides) {
  return {
    ...base,
    ...overrides,
    brand: { ...base.brand, ...overrides.brand },
    modules: { ...base.modules, ...overrides.modules },
    theme: { ...base.theme, ...overrides.theme },
    images: { ...base.images, ...overrides.images },
    location: { ...base.location, ...overrides.location },
    story: { ...base.story, ...overrides.story },
    details: { ...base.details, ...overrides.details },
    dressCode: { ...base.dressCode, ...overrides.dressCode },
    gift: { ...base.gift, ...overrides.gift },
    rsvp: {
      ...base.rsvp,
      ...overrides.rsvp,
      form: { ...base.rsvp?.form, ...overrides.rsvp?.form },
    },
  };
}

export const bodaClasicaDemo = makeVariant(bodaEleganteDemo, {
  slug: "demo-boda-clasica",
  template: "boda-clasica",
  title: "Martina & Julian",
  eyebrow: "Boda clasica",
  intro: "Una celebracion elegante, atemporal y romantica para compartir el comienzo de nuestra vida juntos.",
  theme: { background: "#FFFCF7", primary: "#9B7E46", primaryDark: "#4E3924", secondary: "#D8C7A3", accent: "#F5E9C8", soft: "#F7EEDB", text: "#322A22", muted: "#74695D" },
  story: { eyebrow: "Nuestra historia", title: "Un amor para toda la vida", text: "Queremos celebrar con una noche sobria, calida y llena de detalles pensados para nuestra familia y amigos.", quote: "El amor se celebra mejor cuando se comparte." },
  dressCode: { title: "Etiqueta elegante", note: "Sugerimos traje, vestido largo o cocktail. Reservamos blanco y marfil para la novia." },
  rsvp: { whatsappMessage: "Hola, confirmo mi asistencia a la boda de Martina y Julian. Mi nombre es:" },
});

export const bodaBohoDemo = makeVariant(bodaEleganteDemo, {
  slug: "demo-boda-boho",
  template: "boda-boho",
  title: "Lola & Nico",
  eyebrow: "Boda boho",
  intro: "Nos casamos al aire libre y queremos una tarde relajada, con naturaleza, musica suave y mucho amor.",
  theme: { background: "#F9F5EF", primary: "#A66A43", primaryDark: "#5C3524", secondary: "#78946A", accent: "#E7CDA7", soft: "#EFE2D2", text: "#332820", muted: "#756A5F" },
  images: {
    hero: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Simple y nuestro", title: "Una celebracion con alma", text: "Elegimos una propuesta descontracturada, natural y cercana para disfrutar sin apuro.", quote: "Que sea lindo, real y con los pies en la tierra." },
  dressCode: { title: "Boho chic", note: "Tonos tierra, lino, flores, vestidos fluidos y calzado comodo para jardin." },
});

export const quinceDreamDemo = makeVariant(quinceGlamDemo, {
  slug: "demo-quince-dream",
  template: "quince-dream",
  title: "Sofia",
  eyebrow: "Sweet 15",
  intro: "Una noche de cuento, con luces suaves, flores y toda la magia de mis quince.",
  theme: { background: "#FFF9FC", primary: "#C77DA6", primaryDark: "#7A3B62", secondary: "#EFD5E7", accent: "#F7E7B4", soft: "#FBE5F0", text: "#3A2632", muted: "#7B6A73" },
  images: {
    hero: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Noche sonada", title: "Mi momento especial", text: "Quiero vivir una fiesta delicada, luminosa y llena de recuerdos con las personas que mas quiero.", quote: "La magia empieza cuando llegan ustedes." },
  dressCode: { title: "Elegante en tonos claros", note: "Sugerimos rosa, nude, champagne, plateado o tonos pastel." },
});

export const quinceNeonDemo = makeVariant(quinceGlamDemo, {
  slug: "demo-quince-neon",
  template: "quince-neon",
  title: "Emma",
  eyebrow: "Mis 15 neon",
  intro: "Una fiesta con energia, luces, glitter y pista llena para bailar hasta el final.",
  theme: { background: "#0E1020", card: "#FFFFFF", primary: "#E83E8C", primaryDark: "#431034", secondary: "#39E6D3", accent: "#F9F871", soft: "#FFE3F1", text: "#201626", muted: "#665A64" },
  images: {
    hero: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "A brillar", title: "Una noche con mucha actitud", text: "La idea es celebrar fuerte: musica, luces, fotos, amigas y una pista que no pare.", quote: "Que nadie se quede sin bailar." },
  dressCode: { title: "Fiesta glow", note: "Negro, plateado, fucsia, accesorios brillantes o detalles neon." },
});

export const bautismoCieloDemo = makeVariant(bautismoDelicadoDemo, {
  slug: "demo-bautismo-cielo",
  template: "bautismo-cielo",
  title: "Isabella",
  eyebrow: "Bautismo celestial",
  intro: "Celebramos su bautismo con una manana serena, familiar y llena de ternura.",
  theme: { background: "#F7FCFF", primary: "#6BAED6", primaryDark: "#2D5E7A", secondary: "#DDEFF8", accent: "#F6E6B8", soft: "#E4F4FB", text: "#22323D", muted: "#667883" },
  story: { eyebrow: "Con amor", title: "Un dia de luz", text: "Queremos compartir este momento de fe y alegria con quienes acompanhan nuestra familia.", quote: "Que su camino este siempre rodeado de amor." },
  dressCode: { title: "Blanco y celeste", note: "Sugerimos tonos claros para acompanar una estetica suave." },
});

export const bautismoNaturalDemo = makeVariant(bautismoDelicadoDemo, {
  slug: "demo-bautismo-natural",
  template: "bautismo-natural",
  title: "Mateo",
  eyebrow: "Bautismo natural",
  intro: "Una celebracion familiar con verdes, fibras naturales y una mesa simple para compartir.",
  theme: { background: "#FAFBF5", primary: "#7D9A62", primaryDark: "#415233", secondary: "#D6C6A8", accent: "#EFE0B6", soft: "#EAF0DF", text: "#263024", muted: "#6A7465" },
  story: { eyebrow: "Familia", title: "Celebramos juntos", text: "Un encuentro tranquilo, calido y cercano para recordar este dia con mucho amor.", quote: "Los momentos simples tambien son inolvidables." },
  dressCode: { title: "Natural y claro", note: "Tonos verdes, beige, blanco, lino o colores suaves." },
});

export const cumpleKidsDemo = makeVariant(cumpleInfantilDemo, {
  slug: "demo-cumple-kids",
  template: "cumple-kids",
  title: "Luca cumple 5",
  eyebrow: "Cumple infantil",
  intro: "Una tarde de juegos, torta, sorpresas y mucha energia para festejar con amigos.",
  theme: { background: "#FFFDF5", primary: "#FF6B35", primaryDark: "#8C2F16", secondary: "#2EC4B6", accent: "#FFD166", soft: "#FFE6D8", text: "#2C2530", muted: "#716A73" },
  story: { eyebrow: "A jugar", title: "Una aventura de cumple", text: "Preparamos una tarde divertida para correr, reir, cantar el feliz cumple y soplar las velitas.", quote: "Trae ganas de jugar." },
  dressCode: { title: "Comodo para jugar", note: "Ropa comoda, zapatillas y muchas ganas de divertirse." },
});

export const cumpleNocheDemo = makeVariant(cumpleInfantilDemo, {
  slug: "demo-cumple-noche",
  template: "cumple-noche",
  title: "Mora cumple 40",
  eyebrow: "Birthday party",
  intro: "Una cena con tragos, musica y amigos para brindar por una nueva vuelta al sol.",
  theme: { background: "#111827", card: "#FFFFFF", primary: "#C084FC", primaryDark: "#4C1D95", secondary: "#F59E0B", accent: "#FDE68A", soft: "#F3E8FF", text: "#201A2A", muted: "#6B6272" },
  story: { eyebrow: "A brindar", title: "Una noche bien arriba", text: "La excusa perfecta para reunir a mi gente, comer rico y bailar hasta tarde.", quote: "Cuarenta se festejan con todo." },
  dressCode: { title: "Noche cocktail", note: "Negro, dorado, brillo o el look que te haga sentir fiesta." },
});

export const recibidaMinimalDemo = makeVariant(recibidaModernaDemo, {
  slug: "demo-recibida-minimal",
  template: "recibida-minimal",
  title: "Tomas se recibe",
  eyebrow: "Recibida minimal",
  intro: "Una celebracion simple, moderna y elegante para brindar por el cierre de una gran etapa.",
  theme: { background: "#F8FAFC", primary: "#334155", primaryDark: "#0F172A", secondary: "#94A3B8", accent: "#CBD5E1", soft: "#E2E8F0", text: "#111827", muted: "#64748B" },
  story: { eyebrow: "Meta cumplida", title: "El esfuerzo dio fruto", text: "Despues de anos de estudio, quiero compartir un brindis sobrio y especial con quienes estuvieron cerca.", quote: "El logro tambien es de quienes acompanaron." },
  dressCode: { title: "Smart casual", note: "Sobrio, moderno y comodo para brindar." },
});

export const recibidaBoldDemo = makeVariant(recibidaModernaDemo, {
  slug: "demo-recibida-bold",
  template: "recibida-bold",
  title: "Cata abogada",
  eyebrow: "Fiesta de recibida",
  intro: "Se termina una etapa enorme y empieza otra. Lo festejamos con color, baile y brindis.",
  theme: { background: "#FFF7ED", primary: "#EA580C", primaryDark: "#7C2D12", secondary: "#2563EB", accent: "#FACC15", soft: "#FFEDD5", text: "#2B2118", muted: "#76685D" },
  story: { eyebrow: "Lo logre", title: "Ahora si, a celebrar", text: "Despues de parciales, finales y noches largas, toca una fiesta con toda la gente que banco el proceso.", quote: "Sin ustedes no hubiese sido igual." },
  dressCode: { title: "Fiesta elegante", note: "Color, brillo o algo que diga: hoy se celebra." },
});

export const templateVariantDemos = [
  bodaClasicaDemo,
  bodaBohoDemo,
  quinceDreamDemo,
  quinceNeonDemo,
  bautismoCieloDemo,
  bautismoNaturalDemo,
  cumpleKidsDemo,
  cumpleNocheDemo,
  recibidaMinimalDemo,
  recibidaBoldDemo,
];
