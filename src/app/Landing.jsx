import {
  ArrowRight,
  CalendarClock,
  Check,
  ChevronRight,
  Gift,
  Heart,
  HelpCircle,
  MapPin,
  MessageCircle,
  QrCode,
  Shirt,
  Sparkles,
  Star,
  Timer,
  Users,
  X,
} from "lucide-react";
import { Link } from "react-router-dom";
import { demoInvitations } from "../data/demos/index.js";
import { brand, demoCards, eventTypes, extras, faqs, includes, plans, steps, whatsappUrl } from "../data/site.js";

const includeIcons = [Timer, MapPin, MessageCircle, Heart, Gift, Shirt, QrCode, Users];

const demoContent = demoCards.map((card) => {
  const demo = demoInvitations.find((item) => item.template === card.template);
  return {
    ...card,
    href: `/demo/${card.template}`,
    image: demo?.images?.hero,
    imageAlt: demo?.images?.heroAlt || card.name,
  };
});

const availableDemos = demoContent.filter((demo) => demo.image);
const heroDemo = availableDemos[0];

function SectionHeading({ eyebrow, title, text, align = "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">{eyebrow}</p>
      <h2 className="mt-3 font-serif text-4xl leading-tight text-[var(--color-text)] sm:text-5xl">{title}</h2>
      {text && <p className="mt-4 text-base leading-8 text-[var(--color-muted)] sm:text-lg">{text}</p>}
    </div>
  );
}

function PrimaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-[var(--color-gold)] px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-white shadow-[0_16px_34px_rgba(173,128,60,0.28)] transition hover:-translate-y-0.5 hover:bg-[var(--color-gold-dark)] ${className}`}
    >
      {children}
    </a>
  );
}

function SecondaryButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-3 rounded-full border border-[var(--color-border)] bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-text)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--color-gold-light)] ${className}`}
    >
      {children}
    </a>
  );
}

function LightButton({ href, children, className = "" }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={`inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-bold uppercase tracking-[0.12em] text-[var(--color-text)] shadow-[0_16px_34px_rgba(255,255,255,0.16)] transition hover:-translate-y-0.5 hover:bg-[var(--color-bg-soft)] ${className}`}
    >
      {children}
    </a>
  );
}

function DemoMockup() {
  return (
    <div className="relative mx-auto max-w-[430px]">
      <div className="absolute -inset-8 rounded-full bg-[radial-gradient(circle,rgba(197,155,87,0.22),rgba(248,243,236,0)_68%)]" />
      <div className="relative rounded-[2.4rem] border border-[var(--color-border)] bg-[linear-gradient(145deg,#fff,#f4e9d8)] p-3 shadow-[0_28px_80px_rgba(63,59,56,0.18)]">
        <div className="overflow-hidden rounded-[1.9rem] bg-white">
          <div className="relative h-[500px]">
            <img src={heroDemo?.image} alt={heroDemo?.imageAlt} className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(63,59,56,0.08),rgba(63,59,56,0.62))]" />
            <div className="absolute left-5 right-5 top-5 flex items-center justify-between rounded-full border border-white/35 bg-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur">
              <span>Demo web</span>
              <Sparkles size={15} />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#F4DFC0]">{heroDemo?.type}</p>
              <h3 className="mt-2 font-serif text-4xl">{heroDemo?.name}</h3>
              <p className="mt-3 leading-7 text-white/86">Cuenta regresiva, ubicación, fotos, regalos y RSVP en una experiencia lista para compartir.</p>
              <Link to={heroDemo?.href || "/demo/quince-glam"} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-4 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-gold-dark)]">
                Ver demo <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -bottom-5 -left-5 hidden rounded-3xl border border-[var(--color-border)] bg-white p-5 shadow-xl sm:block">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold-dark)]">Listo para enviar</p>
        <p className="mt-1 font-serif text-2xl text-[var(--color-text)]">Link + QR + WhatsApp</p>
      </div>
    </div>
  );
}

export function Landing() {
  const consultUrl = whatsappUrl();

  return (
    <main className="min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <header className="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[rgba(248,243,236,0.88)] backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={brand.logo} alt={brand.name} className="h-10 w-10 rounded-xl" />
            <span className="font-serif text-xl text-[var(--color-text)] sm:text-2xl">{brand.name}</span>
          </Link>
          <div className="hidden items-center gap-6 text-sm font-semibold text-[var(--color-muted)] lg:flex">
            <a href="#incluye">Incluye</a>
            <a href="#demos">Demos</a>
            <a href="#planes">Planes</a>
            <a href="#faq">FAQ</a>
          </div>
          <a href={consultUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-text)] px-4 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-gold-dark)]">
            <MessageCircle size={17} /> <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </nav>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(217,196,161,0.42),rgba(248,243,236,0)_70%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-14 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-gold-dark)] shadow-sm">
              <Sparkles size={15} /> {brand.instagram}
            </p>
            <h1 className="max-w-4xl font-serif text-5xl leading-tight text-[var(--color-text)] sm:text-6xl lg:text-7xl">
              Invitaciones web para eventos inolvidables
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Creamos la página de tu evento con cuenta regresiva, ubicación, fotos, regalos y confirmación de asistencia en un solo link.
            </p>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-[var(--color-text)]">
              Bodas, 15 años, bautismos, cumpleaños, recibidas y eventos especiales.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SecondaryButton href="#demos" className="w-full sm:w-auto">
                Ver demos <ArrowRight size={18} />
              </SecondaryButton>
              <PrimaryButton href={consultUrl} className="w-full sm:w-auto">
                <MessageCircle size={18} /> Consultar por WhatsApp
              </PrimaryButton>
            </div>
            <div className="mt-9 grid max-w-2xl grid-cols-3 gap-3">
              {["Un solo link", "QR incluido", "Mobile first"].map((item) => (
                <div key={item} className="rounded-3xl border border-[var(--color-border)] bg-white/70 p-4 text-center text-sm font-bold text-[var(--color-text)] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>
          <DemoMockup />
        </div>
      </section>

      <section id="incluye" className="bg-[var(--color-surface-warm)] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading
            eyebrow="Qué incluye"
            title="Todo lo que tus invitados necesitan"
            text="Todo lo que tus invitados necesitan, reunido en una experiencia digital simple, elegante y fácil de compartir."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {includes.map((item, index) => {
              const Icon = includeIcons[index] || Star;
              return (
                <article key={item.title} className="rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--color-bg-soft)] text-[var(--color-gold-dark)]">
                    <Icon size={22} />
                  </span>
                  <h3 className="mt-5 font-serif text-2xl text-[var(--color-text)]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">{item.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <SectionHeading eyebrow="Tipos de eventos" title="Una web para cada celebración" text="Adaptamos tono, imágenes, secciones y recorrido según el tipo de evento que estás organizando." />
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {eventTypes.map((event) => (
            <article key={event.title} className="group rounded-3xl border border-[var(--color-border)] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-3xl text-[var(--color-text)]">{event.title}</h3>
                <Heart className="mt-1 shrink-0 text-[var(--color-gold)]" size={22} />
              </div>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">{event.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="demos" className="border-y border-[var(--color-border)] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <SectionHeading eyebrow="Demos" title="Explorá estilos reales antes de elegir" text="Cada demo muestra cómo puede verse una invitación completa, con secciones listas para adaptar a tu evento." />
            <PrimaryButton href={consultUrl}>
              <MessageCircle size={18} /> Consultar por WhatsApp
            </PrimaryButton>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {demoContent.map((demo) => (
              <article key={demo.template} className="overflow-hidden rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-warm)] shadow-sm">
                <div className="bg-[linear-gradient(145deg,#f8f3ec,#ffffff)] p-3">
                  <img src={demo.image} alt={demo.imageAlt} className="h-64 w-full rounded-2xl object-cover shadow-md md:h-72 xl:h-56" />
                </div>
                <div className="p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold-dark)]">{demo.type}</p>
                  <h3 className="mt-2 font-serif text-2xl text-[var(--color-text)]">{demo.name}</h3>
                  <p className="mt-3 min-h-20 leading-7 text-[var(--color-muted)]">{demo.description}</p>
                  <Link to={demo.href} target="_blank" rel="noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-gold)] px-4 py-3 text-sm font-bold text-white transition hover:border-[var(--color-gold-dark)] hover:bg-[var(--color-gold-dark)]">
                    Ver demo <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planes" className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <SectionHeading eyebrow="Planes" title="Elegí el nivel de detalle que necesita tu evento" text="Propuestas claras para resolver desde una invitación simple hasta una experiencia web a medida." align="center" />
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`relative rounded-[2rem] border bg-white p-6 shadow-sm ${plan.recommended ? "border-[var(--color-gold)] shadow-[0_24px_70px_rgba(197,155,87,0.22)] lg:-mt-4" : "border-[var(--color-border)]"}`}>
              {plan.recommended && (
                <p className="mb-5 inline-flex rounded-full bg-[var(--color-gold)] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white">Recomendado</p>
              )}
              <h3 className="font-serif text-4xl text-[var(--color-text)]">{plan.name}</h3>
              <p className="mt-3 text-4xl font-bold text-[var(--color-gold-dark)]">{plan.price}</p>
              <p className="mt-3 leading-7 text-[var(--color-muted)]">{plan.subtitle}</p>
              <ul className="mt-6 grid gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 leading-6 text-[var(--color-text)]">
                    <Check className="mt-0.5 shrink-0 text-[var(--color-success)]" size={18} /> {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl bg-[var(--color-surface-warm)] p-4">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--color-gold-dark)]">Ideal para</p>
                <p className="mt-2 leading-7 text-[var(--color-muted)]">{plan.idealFor}</p>
              </div>
              <PrimaryButton href={whatsappUrl(`Hola, quiero consultar por el plan ${plan.name} para una invitación web.`)} className="mt-6 w-full">
                {plan.cta}
              </PrimaryButton>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-7 max-w-3xl text-center leading-7 text-[var(--color-muted)]">
          Los precios pueden variar según el nivel de personalización, urgencia y funcionalidades adicionales.
        </p>
        <div className="mt-10 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-gold-dark)]">Extras</p>
              <h3 className="mt-2 font-serif text-3xl text-[var(--color-text)]">Funcionalidades adicionales</h3>
            </div>
            <PrimaryButton href={whatsappUrl("Hola, quiero consultar extras para una invitación web.")}>
              Consultar extras
            </PrimaryButton>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {extras.map((extra) => (
              <span key={extra} className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-semibold text-[var(--color-text)]">
                {extra} · consultar
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-text)] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-champagne)]">Cómo funciona</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-white sm:text-5xl">Un proceso simple de punta a punta</h2>
            <p className="mt-4 text-base leading-8 text-white/76 sm:text-lg">Un proceso simple para que tengas tu invitación lista sin complicaciones.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-5">
            {steps.map((step, index) => (
              <article key={step} className="rounded-3xl border border-white/15 bg-white/8 p-5">
                <span className="text-sm font-bold text-[var(--color-champagne)]">0{index + 1}</span>
                <h3 className="mt-4 font-serif text-2xl leading-tight">{step}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <SectionHeading eyebrow="Comparación" title="¿Por qué elegir una invitación web?" text="Una web permite ordenar la información, actualizarla y hacer que tus invitados encuentren todo en segundos." align="center" />
        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          <article className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6E9E3] text-[#A96754]"><X size={22} /></span>
              <h3 className="font-serif text-3xl">Una imagen común</h3>
            </div>
            <ul className="mt-6 grid gap-4 text-[var(--color-muted)]">
              {["Se pierde en WhatsApp", "No tiene confirmación integrada", "No permite actualizar datos fácilmente", "No reúne mapa, fotos, regalos y detalles en un solo lugar"].map((item) => (
                <li key={item} className="flex gap-3"><X className="mt-0.5 shrink-0 text-[#A96754]" size={18} /> {item}</li>
              ))}
            </ul>
          </article>
          <article className="rounded-[2rem] border border-[var(--color-gold-light)] bg-[var(--color-surface-warm)] p-6 shadow-[0_20px_60px_rgba(197,155,87,0.18)]">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[var(--color-success)]"><Check size={22} /></span>
              <h3 className="font-serif text-3xl">Una invitación web</h3>
            </div>
            <ul className="mt-6 grid gap-4 text-[var(--color-text)]">
              {["Todo está en un solo link", "Se puede compartir por WhatsApp, Instagram o QR", "Incluye ubicación, fotos y confirmación", "Se puede actualizar", "Se ve más profesional"].map((item) => (
                <li key={item} className="flex gap-3"><Check className="mt-0.5 shrink-0 text-[var(--color-success)]" size={18} /> {item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section id="faq" className="border-y border-[var(--color-border)] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Preguntas frecuentes" title="Dudas habituales antes de reservar" align="center" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface-warm)] p-6">
                <div className="flex gap-3">
                  <HelpCircle className="mt-1 shrink-0 text-[var(--color-gold-dark)]" size={22} />
                  <div>
                    <h3 className="font-serif text-2xl text-[var(--color-text)]">{faq.question}</h3>
                    <p className="mt-3 leading-7 text-[var(--color-muted)]">{faq.answer}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#3F3B38,#7A623F)] p-8 text-white shadow-[0_26px_80px_rgba(63,59,56,0.22)] sm:p-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--color-champagne)]">Consulta inicial</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight sm:text-5xl">¿Listo para crear la web de tu evento?</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/82">Contanos qué estás organizando y te recomendamos el plan ideal.</p>
            </div>
            <LightButton href={consultUrl}>
              <MessageCircle size={18} /> Consultar por WhatsApp
            </LightButton>
          </div>
        </div>
      </section>

      <a
        href={consultUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Consultar por WhatsApp"
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-whatsapp)] text-white shadow-[0_14px_34px_rgba(37,211,102,0.36)] transition hover:-translate-y-1"
      >
        <MessageCircle size={25} />
      </a>

      <footer className="border-t border-[var(--color-border)] bg-white px-5 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-center gap-4">
            <img src={brand.logo} alt={brand.name} className="h-12 w-12 rounded-2xl" />
            <div>
              <p className="font-serif text-2xl text-[var(--color-text)]">{brand.name}</p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">Invitaciones digitales en formato web para eventos especiales.</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm font-bold">
            <a href={brand.instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-3 text-[var(--color-text)]">
              <Heart size={17} /> {brand.instagram}
            </a>
            <a href={consultUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[var(--color-text)] px-4 py-3 text-white">
              <MessageCircle size={17} /> WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
