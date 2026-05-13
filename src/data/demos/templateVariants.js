import { bautismoDelicadoDemo } from "./bautismo-delicado.js";
import { bodaEleganteDemo } from "./boda-elegante.js";
import { CumpleDemo } from "./cumple.js";
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
  eyebrow: "Boda clásica",
  dateISO: "2026-05-16T18:00:00-03:00",
  displayDate: "Sábado 16 de mayo de 2026",
  intro: "Una celebración elegante, atemporal y romántica para compartir el comienzo de nuestra vida juntos.",
  location: { time: "18:00 hs" },
  theme: { background: "#FFFCF7", primary: "#9B7E46", primaryDark: "#4E3924", secondary: "#D8C7A3", accent: "#F5E9C8", soft: "#F7EEDB", text: "#322A22", muted: "#74695D" },
  story: { eyebrow: "Nuestra historia", title: "Un amor para toda la vida", text: "Queremos celebrar con una noche sobria, cálida y llena de detalles pensados para nuestra familia y amigos.", quote: "El amor se celebra mejor cuando se comparte." },
  dressCode: { title: "Etiqueta elegante", note: "Sugerimos traje, vestido largo o cocktail. Reservamos blanco y marfil para la novia." },
  gift: { alias: "martu.juli.boda" },
  rsvp: { deadline: "2 de mayo de 2026", whatsappMessage: "Hola, confirmo mi asistencia a la boda de Martina y Julian. Mi nombre es:" },
});

export const bodaBohoDemo = makeVariant(bodaEleganteDemo, {
  slug: "demo-boda-boho",
  template: "boda-boho",
  title: "Lola & Nico",
  eyebrow: "Boda boho",
  dateISO: "2026-10-10T16:30:00-03:00",
  displayDate: "Sábado 10 de octubre de 2026",
  intro: "Nos casamos al aire libre y queremos una tarde relajada, con naturaleza, música suave y mucho amor.",
  location: { title: "Ceremonia al aire libre", name: "Finca Las Acácias", address: "Camino del Sol 1450, Buenos Aires", time: "16:30 hs" },
  theme: { background: "#F9F5EF", primary: "#A66A43", primaryDark: "#5C3524", secondary: "#78946A", accent: "#E7CDA7", soft: "#EFE2D2", text: "#332820", muted: "#756A5F" },
  images: {
    hero: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Simple y nuestro", title: "Una celebración con alma", text: "Elegimos una propuesta descontracturada, natural y cercana para disfrutar sin apuro.", quote: "Que sea lindo, real y con los pies en la tierra." },
  dressCode: { title: "Boho chic", note: "Tonos tierra, lino, flores, vestidos fluidos y calzado cómodo para jardín." },
  gift: { alias: "lola.nico.boho" },
  rsvp: { deadline: "26 de septiembre de 2026", whatsappMessage: "Hola, confirmo mi asistencia a la boda de Lola y Nico. Mi nombre es:" },
});

export const quinceDreamDemo = makeVariant(quinceGlamDemo, {
  slug: "demo-quince-dream",
  template: "quince-dream",
  title: "Sofía",
  eyebrow: "Sweet 15",
  intro: "Una noche de cuento, con luces suaves, flores y toda la magia de mis quince.",
  theme: { background: "#FFF9FC", primary: "#C77DA6", primaryDark: "#7A3B62", secondary: "#EFD5E7", accent: "#F7E7B4", soft: "#FBE5F0", text: "#3A2632", muted: "#7B6A73" },
  images: {
    hero: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Noche soñada", title: "Mi momento especial", text: "Quiero vivir una fiesta delicada, luminosa y llena de recuerdos con las personas que más quiero.", quote: "La magia empieza cuando llegan ustedes." },
  dressCode: { title: "Elegante en tonos claros", note: "Sugerimos rosa, nude, champagne, plateado o tonos pastel." },
});

export const quinceNeonDemo = makeVariant(quinceGlamDemo, {
  slug: "demo-quince-neon",
  template: "quince-neon",
  title: "Emma",
  eyebrow: "Mis 15 neon",
  intro: "Una fiesta con energía, luces, glitter y pista llena para bailar hasta el final.",
  theme: { background: "#0E1020", card: "#FFFFFF", primary: "#E83E8C", primaryDark: "#431034", secondary: "#39E6D3", accent: "#F9F871", soft: "#FFE3F1", text: "#201626", muted: "#665A64" },
  images: {
    hero: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=90",
  },
  modules: { music: true },
  music: { enabled: true, url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  story: { eyebrow: "A brillar", title: "Una noche con mucha actitud", text: "La idea es celebrar fuerte: música, luces, fotos, amigas y una pista que no pare.", quote: "Que nadie se quede sin bailar." },
  dressCode: { title: "Fiesta glow", note: "Negro, plateado, fucsia, accesorios brillantes o detalles neon." },
});

export const bautismoCieloDemo = makeVariant(bautismoDelicadoDemo, {
  slug: "demo-bautismo-cielo",
  template: "bautismo-cielo",
  title: "Isabella",
  eyebrow: "Bautismo celestial",
  intro: "Celebramos su bautismo con una mañana serena, familiar y llena de ternura.",
  theme: { background: "#F7FCFF", primary: "#6BAED6", primaryDark: "#2D5E7A", secondary: "#DDEFF8", accent: "#F6E6B8", soft: "#E4F4FB", text: "#22323D", muted: "#667883" },
  story: { eyebrow: "Con amor", title: "Un día de luz", text: "Queremos compartir este momento de fe y alegría con quienes acompañan nuestra familia.", quote: "Que su camino este siempre rodeado de amor." },
  dressCode: { title: "Blanco y celeste", note: "Sugerimos tonos claros para acompañar una estética suave." },
});

export const bautismoNaturalDemo = makeVariant(bautismoDelicadoDemo, {
  slug: "demo-bautismo-natural",
  template: "bautismo-natural",
  title: "Mateo",
  eyebrow: "Bautismo natural",
  intro: "Una celebración familiar con verdes, fibras naturales y una mesa simple para compartir.",
  theme: { background: "#FAFBF5", primary: "#7D9A62", primaryDark: "#415233", secondary: "#D6C6A8", accent: "#EFE0B6", soft: "#EAF0DF", text: "#263024", muted: "#6A7465" },
  story: { eyebrow: "Familia", title: "Celebramos juntos", text: "Un encuentro tranquilo, calido y cercaño para recordar este día con mucho amor.", quote: "Los momentos simples también son inolvidables." },
  dressCode: { title: "Natural y claro", note: "Tonos verdes, beige, blanco, lino o colores suaves." },
});

export const cumpleKidsDemo = makeVariant(CumpleDemo, {
  slug: "demo-cumple-kids",
  template: "cumple-kids",
  title: "Luca cumple 5",
  eyebrow: "Cumple infantil",
  intro: "Una tarde de juegos, torta, sorpresas y mucha energía para festejar con amigos.",
  theme: { background: "#FFFDF5", primary: "#FF6B35", primaryDark: "#8C2F16", secondary: "#2EC4B6", accent: "#FFD166", soft: "#FFE6D8", text: "#2C2530", muted: "#716A73" },
  story: { eyebrow: "A jugar", title: "Una aventura de cumple", text: "Preparamos una tarde divertida para correr, reír, cantar el feliz cumple y soplar las velitas.", quote: "Trae ganas de jugar." },
  dressCode: { title: "Cómodo para jugar", note: "Ropa comoda, zapatillas y muchas ganas de divertirse." },
});

export const cumpleNocheDemo = makeVariant(CumpleDemo, {
  slug: "demo-cumple-noche",
  template: "cumple-noche",
  title: "Mora cumple 40",
  eyebrow: "Birthday party",
  intro: "Una cena con tragos, música y amigos para brindar por una nueva vuelta al sol.",
  theme: { background: "#111827", card: "#FFFFFF", primary: "#C084FC", primaryDark: "#4C1D95", secondary: "#F59E0B", accent: "#FDE68A", soft: "#F3E8FF", text: "#201A2A", muted: "#6B6272" },
  story: { eyebrow: "A brindar", title: "Una noche bien arriba", text: "La excusa perfecta para reunir a mi gente, comer rico y bailar hasta tarde.", quote: "Cuarenta se festejan con todo." },
  dressCode: { title: "Noche cocktail", note: "Negro, dorado, brillo o el look que te haga sentir fiesta." },
});

export const recibidaMinimalDemo = makeVariant(recibidaModernaDemo, {
  slug: "demo-recibida-minimal",
  template: "recibida-minimal",
  title: "Tomás se recibe",
  eyebrow: "Recibida minimal",
  intro: "Una celebración simple, moderna y elegante para brindar por el cierre de una gran etapa.",
  theme: { background: "#F8FAFC", primary: "#334155", primaryDark: "#0F172A", secondary: "#94A3B8", accent: "#CBD5E1", soft: "#E2E8F0", text: "#111827", muted: "#64748B" },
  story: { eyebrow: "Meta cumplida", title: "El esfuerzo dio fruto", text: "Despues de años de estudio, quiero compartir un brindis sobrio y especial con quienes estuvieron cerca.", quote: "El logro también es de quienes acompañaron." },
  dressCode: { title: "Smart casual", note: "Sobrio, moderno y cómodo para brindar." },
});

export const recibidaBoldDemo = makeVariant(recibidaModernaDemo, {
  slug: "demo-recibida-bold",
  template: "recibida-bold",
  title: "Cata abogada",
  eyebrow: "Fiesta de recibida",
  intro: "Se termina una etapa enorme y empieza otra. Lo festejamos con color, baile y brindis.",
  theme: { background: "#FFF7ED", primary: "#EA580C", primaryDark: "#7C2D12", secondary: "#2563EB", accent: "#FACC15", soft: "#FFEDD5", text: "#2B2118", muted: "#76685D" },
  story: { eyebrow: "Lo logré", title: "Ahora sí, a celebrar", text: "Despues de parciales, finales y noches largas, toca una fiesta con toda la gente que bancó el proceso.", quote: "Sin ustedes no hubiese sido igual." },
  dressCode: { title: "Fiesta elegante", note: "Color, brillo o algo que diga: hoy se celebra." },
});

export const bodaMinimalDemo = makeVariant(bodaEleganteDemo, {
  slug: "demo-boda-minimal",
  template: "boda-minimal",
  title: "Ana & Leo",
  eyebrow: "Boda minimal",
  dateISO: "2026-11-07T18:30:00-03:00",
  displayDate: "Sábado 7 de noviembre de 2026",
  intro: "Una celebración serena, moderna y sin excesos, donde cada detalle respira elegancia.",
  location: { title: "Ceremonia y cena", name: "Casa Noma", address: "Av. del Libertador 3900, Buenos Aires", time: "18:30 hs" },
  theme: { background: "#F8F8F5", primary: "#5E675A", primaryDark: "#232820", secondary: "#B7B0A3", accent: "#D8D0C0", soft: "#ECEAE3", text: "#24231F", muted: "#69675F" },
  images: {
    hero: "https://images.unsplash.com/photo-1529634597503-139d3726fed5?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Menos, mejor", title: "Una boda simple y profunda", text: "Elegimos una estética limpia para que lo importante se vea: el encuentro, la familia y la emoción.", quote: "La elegancia también puede ser calma." },
  dressCode: { title: "Formal minimal", note: "Negro, blanco, gris, oliva, arena o tonos neutros. Reservamos blanco pleno para la novia." },
  gift: { alias: "ana.leo.minimal" },
  rsvp: { deadline: "24 de octubre de 2026", whatsappMessage: "Hola, confirmo mi asistencia a la boda de Ana y Leo. Mi nombre es:" },
});

export const bodaTropicalDemo = makeVariant(bodaEleganteDemo, {
  slug: "demo-boda-tropical",
  template: "boda-tropical",
  title: "Mili & Fran",
  eyebrow: "Boda tropical",
  dateISO: "2027-02-13T19:00:00-03:00",
  displayDate: "Sábado 13 de febrero de 2027",
  intro: "Una fiesta con verde, flores intensas, cocktails y una noche pensada para bailar.",
  location: { title: "Ceremonia y fiesta", name: "Jardín Botánico Eventos", address: "Costa Verde 220, Tigre", time: "19:00 hs" },
  theme: { background: "#FFFDF2", primary: "#0F8B6F", primaryDark: "#06483A", secondary: "#F97316", accent: "#F8D66D", soft: "#DFF4E8", text: "#17322D", muted: "#63736D" },
  images: {
    hero: "https://images.unsplash.com/photo-1519225421980-715cb0215aedíauto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Fiesta viva", title: "Celebrar a todo color", text: "Queremos una boda alegre, luminosa y relajada, con una ambientacion que invite a disfrutar.", quote: "Amor, música y mesa larga." },
  dressCode: { title: "Tropical elegante", note: "Verdes, coral, lino, estampas suaves o accesorios con color." },
  gift: { alias: "mili.fran.tropical" },
  rsvp: { deadline: "30 de enero de 2027", whatsappMessage: "Hola, confirmo mi asistencia a la boda de Mili y Fran. Mi nombre es:" },
});

export const quinceEditorialDemo = makeVariant(quinceGlamDemo, {
  slug: "demo-quince-editorial",
  template: "quince-editorial",
  title: "Renata",
  eyebrow: "Mis 15 editorial",
  intro: "Una propuesta moderna, con contraste, fotos protagonistas y una estética de revista.",
  theme: { background: "#F6F3EF", primary: "#111111", primaryDark: "#000000", secondary: "#B08968", accent: "#EDE0D4", soft: "#E7D8C9", text: "#1F1E1C", muted: "#706B66" },
  images: {
    hero: "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Mi estilo", title: "Una noche con identidad", text: "Cada sección puede sentirse como una producción: fotos grandes, textos breves y una paleta sofisticada.", quote: "Que se vea diferente desde el primer scroll." },
  dressCode: { title: "Black & nude", note: "Negro, nude, cobre, dorado suave o un look monocromo." },
});

export const quincePastelDemo = makeVariant(quinceGlamDemo, {
  slug: "demo-quince-pastel",
  template: "quince-pastel",
  title: "Jazmín",
  eyebrow: "Mis 15 pastel",
  intro: "Una fiesta dulce, colorida y delicada, con flores, luces y detalles suaves.",
  theme: { background: "#FFF9F6", primary: "#F48FB1", primaryDark: "#8E3B61", secondary: "#8BD3E6", accent: "#FDE68A", soft: "#FCE7F3", text: "#362B34", muted: "#7C6D76" },
  images: {
    hero: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Dulce y luminosa", title: "Una noche para recordar", text: "Pensada para una celebración romántica, fresca y muy fotografiable.", quote: "Todo empieza con un color que enamora." },
  dressCode: { title: "Pasteles", note: "Rosa, lila, celeste, manteca, lavanda o champagne." },
});

export const bautismoVintageDemo = makeVariant(bautismoDelicadoDemo, {
  slug: "demo-bautismo-vintage",
  template: "bautismo-vintage",
  title: "Amparo",
  eyebrow: "Bautismo vintage",
  intro: "Una celebración familiar con detalles clasicos, tonos crema y una calidez muy de hogar.",
  theme: { background: "#FFFBF2", primary: "#B08A5B", primaryDark: "#5D432C", secondary: "#D8BFAA", accent: "#E9D8A6", soft: "#F4E9D8", text: "#35291E", muted: "#776A5E" },
  images: {
    hero: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Tradición", title: "Un día con historia familiar", text: "Ideal para una invitación sobria, delicada y con aire clasico.", quote: "Los detalles simples guardan los recuerdos más lindos." },
  dressCode: { title: "Crema y claros", note: "Tonos crema, blanco, beige, celeste suave o rosa viejo." },
});

export const bautismoJardínDemo = makeVariant(bautismoDelicadoDemo, {
  slug: "demo-bautismo-jardín",
  template: "bautismo-jardín",
  title: "Benicio",
  eyebrow: "Bautismo jardín",
  intro: "Una celebración al aire libre, con verde suave, mesa familiar y tarde luminosa.",
  theme: { background: "#FBFFF7", primary: "#77A464", primaryDark: "#3D5A32", secondary: "#A8DADC", accent: "#F6E7B7", soft: "#EAF5DF", text: "#243222", muted: "#687664" },
  images: {
    hero: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Aire libre", title: "Una tarde de familia", text: "Un estilo natural para bautismos, comuniones o primeras celebraciones importantes.", quote: "Que el día sea tan claro como este momento." },
  dressCode: { title: "Jardín claro", note: "Verde seco, blanco, lino, beige o tonos pastel." },
});

export const cumplePoolDemo = makeVariant(CumpleDemo, {
  slug: "demo-cumple-pool",
  template: "cumple-pool",
  title: "Paz cumple 8",
  eyebrow: "Pool party",
  intro: "Una tarde de pileta, juegos, helados y música para festejar con amigos.",
  theme: { background: "#F0FDFA", primary: "#0891B2", primaryDark: "#164E63", secondary: "#FB7185", accent: "#FDE047", soft: "#CCFBF1", text: "#17313A", muted: "#5E7278" },
  images: {
    hero: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Sol y juegos", title: "Cumple con energía de verano", text: "La invitación puede adaptarse para pileta, plaza, pelotero, camping o una tarde temática.", quote: "Trae malla, toalla y ganas de jugar." },
  dressCode: { title: "Pileta", note: "Malla, ojotas, protector solar y ropa comoda." },
});

export const cumpleBlackGoldDemo = makeVariant(CumpleDemo, {
  slug: "demo-cumple-black-gold",
  template: "cumple-black-gold",
  title: "Dani cumple 30",
  eyebrow: "Black & gold",
  intro: "Una noche elegante para brindar, cenar y celebrar con amigos.",
  theme: { background: "#11100E", card: "#FFFFFF", primary: "#D6A94A", primaryDark: "#7B5A1E", secondary: "#2DD4BF", accent: "#F9E4A5", soft: "#F7ECD0", text: "#241E16", muted: "#72685C" },
  images: {
    hero: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2díauto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "A brindar", title: "Una celebración con estilo", text: "Una opción sobria para cumpleaños adultos, cenas, aniversarios o fiestas privadas.", quote: "La noche merece un brindis dorado." },
  dressCode: { title: "Elegante noche", note: "Negro, dorado, blanco o un detalle con brillo." },
});

export const recibidaTechDemo = makeVariant(recibidaModernaDemo, {
  slug: "demo-recibida-tech",
  template: "recibida-tech",
  title: "Nico ingeniero",
  eyebrow: "Recibida tech",
  intro: "Una fiesta moderna, con paleta eléctrica y energía de logro grande.",
  theme: { background: "#F7FBFF", primary: "#2563EB", primaryDark: "#1E3A8A", secondary: "#06B6D4", accent: "#A7F3D0", soft: "#DBEAFE", text: "#111827", muted: "#64748B" },
  images: {
    hero: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Misión cumplida", title: "Del final al brindis", text: "Un look fresco para carreras tech, ingenierías, diseño, economía o recibidas con onda urbana.", quote: "El código compiló: ahora se festeja." },
  dressCode: { title: "Urbano", note: "Azul, negro, blanco, plateado o zapatillas con estilo." },
});

export const recibidaBrunchDemo = makeVariant(recibidaModernaDemo, {
  slug: "demo-recibida-brunch",
  template: "recibida-brunch",
  title: "Magui licenciada",
  eyebrow: "Brunch de recibida",
  intro: "Una celebración de día, luminosa, relajada y perfecta para familia y amigos.",
  theme: { background: "#FFFDF7", primary: "#D97706", primaryDark: "#7C2D12", secondary: "#84CC16", accent: "#FDE68A", soft: "#FEF3C7", text: "#2E261C", muted: "#74695F" },
  images: {
    hero: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Celebrar de día", title: "Un logro con mesa compartida", text: "Ideal para recibidas familiares, almuerzos, brindis de mediodía o celebraciones más tranquilas.", quote: "También se brinda con café y sol." },
  dressCode: { title: "Casual elegante", note: "Claros, lino, vestidos, camisa o tonos cálidos." },
});

export const aniversarioClasicoDemo = makeVariant(bodaEleganteDemo, {
  slug: "demo-aniversario-clasico",
  eventType: "aniversario",
  template: "aniversario-clasico",
  title: "25 años juntos",
  eyebrow: "Aniversario",
  intro: "Celebramos una historia compartida con una cena íntima, elegante y llena de recuerdos.",
  theme: { background: "#FFFDF8", primary: "#9F7AEA", primaryDark: "#553C9A", secondary: "#D69E2E", accent: "#F6E7B7", soft: "#EEE7FF", text: "#2D2438", muted: "#72687B" },
  story: { eyebrow: "Nuestra historia", title: "Un camino para celebrar", text: "Una opción ideal para aniversarios de pareja, bodas de plata, bodas de oro o cenas familiares.", quote: "El amor también se celebra mirando hacia atrás." },
  dressCode: { title: "Cena elegante", note: "Violeta, dorado, negro, champagne o tonos de noche." },
  rsvp: { whatsappMessage: "Hola, confirmo mi asistencia al aniversario. Mi nombre es:" },
});

export const babyShowerBotánicoDemo = makeVariant(bautismoDelicadoDemo, {
  slug: "demo-baby-shower-botánico",
  eventType: "baby-shower",
  template: "baby-shower-botánico",
  title: "Baby shower de Caro",
  eyebrow: "Baby shower",
  intro: "Nos juntamos a celebrar la llegada de Caro con una tarde dulce, natural y llena de amor.",
  theme: { background: "#FAFFF7", primary: "#6B8F71", primaryDark: "#2F4F37", secondary: "#F4B8A8", accent: "#F6E7B7", soft: "#E7F3E6", text: "#243025", muted: "#697568" },
  images: {
    hero: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1546015720-b8b30df5aa27?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Llega una nueva vida", title: "Una tarde para esperar a Caro", text: "Paleta botónica, rosa suave y verdes para baby showers, gender reveal o bienvenida de beba.", quote: "Ya te estamos esperando." },
  dressCode: { title: "Botánico suave", note: "Verdes, blanco, rosa viejo, beige o lino." },
  gift: { alias: "caro.babyshower" },
  rsvp: { whatsappMessage: "Hola, confirmo mi asistencia al baby shower de Caro. Mi nombre es:" },
});

export const eventoCorporativoDemo = makeVariant(recibidaModernaDemo, {
  slug: "demo-evento-corporativo",
  eventType: "evento",
  template: "evento-corporativo",
  title: "Lanzamiento 2026",
  eyebrow: "Evento corporativo",
  intro: "Una invitación sobria para presentar agenda, sede, acreditación y confirmaciones.",
  theme: { background: "#F8FAFC", primary: "#0F766E", primaryDark: "#134E4A", secondary: "#64748B", accent: "#99F6E4", soft: "#CCFBF1", text: "#0F172A", muted: "#64748B" },
  images: {
    hero: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=90",
    portrait: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=90",
  },
  story: { eyebrow: "Agenda clara", title: "Una experiencia profesional", text: "Pensada para eventos institucionales, lanzamientos, jornadas, cenas empresariales o capacitaciones.", quote: "Toda la información importante, ordenada en un link." },
  dressCode: { title: "Business casual", note: "Vestimenta profesional o según el tipo de encuentro." },
  rsvp: { mode: "form", whatsappMessage: "Hola, confirmo mi asistencia al evento corporativo. Mi nombre es:" },
});

export const templateVariantDemos = [
  bodaClasicaDemo,
  bodaBohoDemo,
  bodaMinimalDemo,
  bodaTropicalDemo,
  quinceDreamDemo,
  quinceNeonDemo,
  quinceEditorialDemo,
  quincePastelDemo,
  bautismoCieloDemo,
  bautismoNaturalDemo,
  bautismoVintageDemo,
  bautismoJardínDemo,
  cumpleKidsDemo,
  cumpleNocheDemo,
  cumplePoolDemo,
  cumpleBlackGoldDemo,
  recibidaMinimalDemo,
  recibidaBoldDemo,
  recibidaTechDemo,
  recibidaBrunchDemo,
  aniversarioClasicoDemo,
  babyShowerBotánicoDemo,
  eventoCorporativoDemo,
];
