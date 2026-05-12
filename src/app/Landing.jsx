import { ArrowRight, CalendarCheck, Check, ExternalLink, MessageCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { demoInvitations } from "../data/demos/index.js";

const CONTACT_WHATSAPP = import.meta.env.VITE_CONTACT_WHATSAPP || "5491100000000";

const featuredDemos = ["quince-glam", "boda-clasica", "bautismo-cielo", "cumple-noche", "recibida-bold"]
  .map((template) => demoInvitations.find((demo) => demo.template === template))
  .filter(Boolean);

const plans = [
  {
    name: "Estandar",
    price: "U$D40",
    tone: "Para invitaciones simples y rapidas.",
    features: ["Plantilla personalizada", "Datos del evento", "Ubicacion con mapa", "Confirmacion por WhatsApp", "Link listo para compartir"],
  },
  {
    name: "Premium",
    price: "U$D70",
    tone: "Para eventos con mas detalle visual.",
    featured: true,
    features: ["Todo lo del plan estandar", "Galeria de fotos", "Cuenta regresiva", "Dress code y regalos", "Formulario RSVP opcional"],
  },
  {
    name: "Deluxe",
    price: "U$D100",
    tone: "Para una experiencia completa.",
    features: ["Todo lo del plan premium", "RSVP conectado a Google Sheets", "Mas secciones personalizadas", "Ajustes visuales avanzados", "Preparacion para dominio propio"],
  },
];

const eventTypes = ["Bodas", "15 anos", "Bautismos", "Cumpleanos", "Recibidas", "Baby showers"];

function whatsappUrl(message) {
  return `https://wa.me/${CONTACT_WHATSAPP}?text=${encodeURIComponent(message)}`;
}

function ReservationForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hola, quiero reservar una invitacion web.",
      `Nombre: ${formData.get("nombre") || ""}`,
      `Evento: ${formData.get("evento") || ""}`,
      `Fecha: ${formData.get("fecha") || ""}`,
      `Plan: ${formData.get("plan") || ""}`,
      `Mensaje: ${formData.get("mensaje") || ""}`,
    ].join("\n");
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 rounded-lg border border-[#D8E0EA] bg-white p-5 shadow-sm sm:p-6">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#263241]">
          Nombre
          <input name="nombre" required className="rounded-md border border-[#C9D4E2] px-4 py-3 font-normal outline-none focus:border-[#1F6FEB]" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#263241]">
          Tipo de evento
          <select name="evento" required className="rounded-md border border-[#C9D4E2] bg-white px-4 py-3 font-normal outline-none focus:border-[#1F6FEB]">
            <option value="">Elegir</option>
            {eventTypes.map((eventType) => <option key={eventType} value={eventType}>{eventType}</option>)}
          </select>
        </label>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-[#263241]">
          Fecha aproximada
          <input name="fecha" type="date" className="rounded-md border border-[#C9D4E2] px-4 py-3 font-normal outline-none focus:border-[#1F6FEB]" />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-[#263241]">
          Plan
          <select name="plan" required className="rounded-md border border-[#C9D4E2] bg-white px-4 py-3 font-normal outline-none focus:border-[#1F6FEB]">
            <option value="">Elegir</option>
            {plans.map((plan) => <option key={plan.name} value={plan.name}>{plan.name} - {plan.price}</option>)}
          </select>
        </label>
      </div>
      <label className="grid gap-2 text-sm font-semibold text-[#263241]">
        Mensaje
        <textarea name="mensaje" rows={4} className="rounded-md border border-[#C9D4E2] px-4 py-3 font-normal outline-none focus:border-[#1F6FEB]" placeholder="Contame si ya tenes fotos, colores, salon o una demo elegida." />
      </label>
      <button type="submit" className="inline-flex items-center justify-center gap-3 rounded-md bg-[#123B66] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-[#0B2A4A]">
        <MessageCircle size={18} /> Reservar por WhatsApp
      </button>
    </form>
  );
}

export function Landing() {
  return (
    <main className="min-h-screen bg-[#F6F8FB] text-[#182230]">
      <header className="sticky top-0 z-40 border-b border-[#E3E8EF] bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src="/brand/invitaciones-web-logo.svg" alt="" className="h-9 w-9" />
            <span className="font-serif text-2xl text-[#123B66]">Invitaciones Web</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold text-[#536173] md:flex">
            <a href="#ejemplos">Ejemplos</a>
            <a href="#planes">Planes</a>
            <a href="#reservar">Reservar</a>
          </div>
          <a href={whatsappUrl("Hola, quiero consultar por una invitacion web.")} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md bg-[#123B66] px-4 py-3 text-sm font-bold text-white">
            <MessageCircle size={17} /> Consultar
          </a>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-[1.02fr_0.98fr] md:py-20">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#CFE0F3] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#1F6FEB]">
            <Sparkles size={15} /> Invitacionesweb.ar
          </p>
          <h1 className="font-serif text-5xl leading-tight text-[#122033] sm:text-7xl">
            Invitaciones digitales lindas, claras y listas para compartir
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5F6C7B]">
            Armo tu invitacion web con fotos, datos del evento, mapa, cuenta regresiva y confirmacion de asistencia. Ideal para enviar por WhatsApp, Instagram o QR.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#reservar" className="inline-flex items-center gap-3 rounded-md bg-[#123B66] px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white shadow-lg transition hover:-translate-y-0.5">
              Reservar fecha <ArrowRight size={18} />
            </a>
            <a href="#ejemplos" className="inline-flex items-center gap-3 rounded-md border border-[#C9D4E2] bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.14em] text-[#123B66] shadow-sm">
              Ver ejemplos
            </a>
          </div>
          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3 text-sm text-[#536173]">
            <div className="rounded-md border border-[#E3E8EF] bg-white p-4"><strong className="block text-2xl text-[#123B66]">24/7</strong> link activo</div>
            <div className="rounded-md border border-[#E3E8EF] bg-white p-4"><strong className="block text-2xl text-[#123B66]">3</strong> planes</div>
            <div className="rounded-md border border-[#E3E8EF] bg-white p-4"><strong className="block text-2xl text-[#123B66]">RSVP</strong> incluido</div>
          </div>
        </div>

        <div className="relative">
          <img src={featuredDemos[0]?.images.hero} alt="Vista previa de invitacion digital" className="aspect-[4/5] w-full rounded-lg object-cover shadow-2xl" />
          <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/94 p-5 shadow-xl backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#1F6FEB]">Preview rapida</p>
            <h2 className="mt-2 font-serif text-3xl text-[#122033]">{featuredDemos[0]?.title}</h2>
            <p className="mt-2 text-sm leading-6 text-[#5F6C7B]">Tu invitacion puede verse romantica, moderna, infantil, minimalista o bien fiesta.</p>
          </div>
        </div>
      </section>

      <section id="ejemplos" className="border-y border-[#E3E8EF] bg-white py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1F6FEB]">Ejemplos</p>
              <h2 className="mt-3 font-serif text-4xl text-[#122033] sm:text-5xl">Previsualizaciones para elegir estilo</h2>
            </div>
            <Link to="/demo/quince-glam" className="inline-flex items-center gap-2 font-bold text-[#123B66]">Abrir una demo completa <ExternalLink size={17} /></Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {featuredDemos.map((demo) => (
              <Link key={demo.template} to={`/demo/${demo.template}`} className="group overflow-hidden rounded-lg border border-[#E3E8EF] bg-[#F8FAFC] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img src={demo.images.hero} alt={demo.title} className="h-52 w-full object-cover transition duration-500 group-hover:scale-105" />
                <span className="block p-4">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#6B7788]">{demo.eyebrow}</span>
                  <span className="mt-1 block font-serif text-2xl text-[#122033]">{demo.title}</span>
                  <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#1F6FEB]">Ver demo <ArrowRight size={15} /></span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#1F6FEB]">Planes</p>
          <h2 className="mt-3 font-serif text-4xl text-[#122033] sm:text-5xl">Opciones simples para cada tipo de evento</h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`rounded-lg border bg-white p-6 shadow-sm ${plan.featured ? "border-[#1F6FEB] ring-2 ring-[#D7E7FF]" : "border-[#E3E8EF]"}`}>
              {plan.featured && <p className="mb-4 w-fit rounded-full bg-[#E8F1FF] px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-[#1F6FEB]">Mas elegido</p>}
              <h3 className="font-serif text-4xl text-[#122033]">{plan.name}</h3>
              <p className="mt-3 text-5xl font-bold text-[#123B66]">{plan.price}</p>
              <p className="mt-3 leading-7 text-[#5F6C7B]">{plan.tone}</p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-[#334155]"><Check className="mt-0.5 shrink-0 text-[#1F6FEB]" size={18} /> {feature}</li>
                ))}
              </ul>
              <a href={whatsappUrl(`Hola, quiero reservar el plan ${plan.name} (${plan.price}) para una invitacion web.`)} target="_blank" rel="noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#123B66] px-5 py-4 text-sm font-bold uppercase tracking-[0.14em] text-white">
                Elegir plan
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#122033] py-16 text-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 md:grid-cols-4">
          {["Elegis plan y estilo", "Me pasas datos y fotos", "Revisas la invitacion", "Compartis el link"].map((step, index) => (
            <div key={step} className="rounded-lg border border-white/15 bg-white/7 p-5">
              <span className="text-sm font-bold text-[#9CC7FF]">0{index + 1}</span>
              <h3 className="mt-3 font-serif text-2xl">{step}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="reservar" className="mx-auto grid max-w-6xl gap-10 px-5 py-16 md:grid-cols-[0.82fr_1.18fr]">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-[#1F6FEB]"><CalendarCheck size={17} /> Reservas</p>
          <h2 className="mt-3 font-serif text-4xl text-[#122033] sm:text-5xl">Contame tu evento y armamos tu invitacion</h2>
          <p className="mt-5 leading-8 text-[#5F6C7B]">
            El formulario abre WhatsApp con el mensaje preparado para que la consulta sea rapida. Despues coordinamos fotos, textos, colores, demo elegida y fecha de entrega.
          </p>
        </div>
        <ReservationForm />
      </section>

      <footer className="border-t border-[#E3E8EF] bg-white px-5 py-8">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 text-sm text-[#5F6C7B] md:flex-row md:items-center">
          <p><strong className="text-[#123B66]">Invitaciones Web</strong> · invitacionesweb.ar</p>
          <a href={whatsappUrl("Hola, quiero consultar disponibilidad para una invitacion web.")} target="_blank" rel="noreferrer" className="font-bold text-[#123B66]">Consultar disponibilidad</a>
        </div>
      </footer>
    </main>
  );
}
