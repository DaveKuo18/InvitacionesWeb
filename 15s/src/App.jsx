import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  CalendarDays,
  Camera,
  ChevronDown,
  Clock,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  Pause,
  Play,
  Shirt,
  Sparkles,
} from "lucide-react";
import { INVITATION_CONFIG as cfg } from "./invitationConfig.js";

function hexToRgba(hex, alpha) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function useCountdown(dateISO) {
  const target = useMemo(() => new Date(dateISO).getTime(), [dateISO]);
  const [diff, setDiff] = useState(Math.max(target - Date.now(), 0));

  useEffect(() => {
    const timer = window.setInterval(() => {
      setDiff(Math.max(target - Date.now(), 0));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [target]);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function Section({ children, className = "", ...props }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      className={`relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-24 ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
}

function SectionHeader({ eyebrow, title, text }) {
  const c = cfg.style;
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: c.primary }}>
        {eyebrow}
      </p>
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl" style={{ color: c.text }}>
        {title}
      </h2>
      {text && (
        <p className="mt-5 text-base leading-8 sm:text-lg" style={{ color: c.muted }}>
          {text}
        </p>
      )}
    </div>
  );
}

function CountdownItem({ value, label }) {
  const c = cfg.style;
  return (
    <div className="rounded-2xl border bg-white/75 px-4 py-5 text-center shadow-sm backdrop-blur" style={{ borderColor: hexToRgba(c.primary, 0.18) }}>
      <div className="text-3xl font-semibold tabular-nums sm:text-4xl" style={{ color: c.primaryDark }}>
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: c.muted }}>
        {label}
      </div>
    </div>
  );
}

function FloatingMusicButton() {
  const [audio, setAudio] = useState(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!cfg.music.enabled || !cfg.music.url) return undefined;
    const element = new Audio(cfg.music.url);
    element.loop = true;
    setAudio(element);
    return () => element.pause();
  }, []);

  if (!cfg.music.enabled || !cfg.music.url) return null;

  const toggle = async () => {
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
      return;
    }
    await audio.play();
    setPlaying(true);
  };

  return (
    <button
      onClick={toggle}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-2xl transition hover:scale-105"
      style={{ background: cfg.style.primary, color: "white" }}
      aria-label={playing ? "Pausar musica" : "Reproducir musica"}
    >
      {playing ? <Pause size={22} /> : <Play size={22} />}
    </button>
  );
}

export default function InvitationLanding() {
  const c = cfg.style;
  const countdown = useCountdown(cfg.event.dateISO);
  const whatsappUrl = `https://wa.me/${cfg.rsvp.whatsappNumber}?text=${encodeURIComponent(cfg.rsvp.whatsappMessage)}`;
  const galleryImages = cfg.images.gallery.filter((image) => image?.src);

  return (
    <main
      className="min-h-screen overflow-hidden antialiased"
      style={{
        background: `radial-gradient(circle at 8% 4%, ${hexToRgba(c.primary, 0.24)}, transparent 30rem), radial-gradient(circle at 90% 16%, ${hexToRgba(c.secondary, 0.18)}, transparent 26rem), linear-gradient(180deg, ${c.background}, #fff 38%, ${c.background})`,
        color: c.text,
      }}
    >
      <FloatingMusicButton />

      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10 text-center">
        <motion.div aria-hidden="true" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.1, ease: "easeOut" }} className="absolute inset-0">
          <img src={cfg.images.hero} alt={cfg.images.heroAlt} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${hexToRgba(c.primaryDark, 0.2)}, ${hexToRgba(c.primaryDark, 0.74)})` }} />
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative z-10 mx-auto max-w-4xl text-white">
          <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur">
            <Sparkles size={15} />
            {cfg.hero.kicker}
          </div>
          <h1 className="font-serif text-6xl leading-none sm:text-8xl md:text-9xl">{cfg.hero.title}</h1>
          <div className="mx-auto mt-7 h-px w-32 bg-white/60" />
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">{cfg.hero.intro}</p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#confirmar" className="rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] shadow-xl transition hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${c.accent}, #fff)`, color: c.primaryDark }}>
              Confirmar asistencia
            </a>
            <a href="#detalles" className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white/20">
              Ver detalles
            </a>
          </div>
        </motion.div>

        <motion.a href="#historia" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80" aria-label="Bajar">
          <ChevronDown className="animate-bounce" size={34} />
        </motion.a>
      </section>

      <Section className="-mt-20 pb-10">
        <div className="relative z-20 mx-auto grid max-w-4xl grid-cols-2 gap-3 rounded-[2rem] border bg-white/85 p-4 shadow-2xl backdrop-blur sm:grid-cols-4 sm:p-5" style={{ borderColor: hexToRgba(c.primary, 0.14) }}>
          <CountdownItem value={countdown.days} label="Dias" />
          <CountdownItem value={countdown.hours} label="Horas" />
          <CountdownItem value={countdown.minutes} label="Min" />
          <CountdownItem value={countdown.seconds} label="Seg" />
        </div>
      </Section>

      <Section id="historia" className="grid items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
          <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem]" style={{ background: `linear-gradient(135deg, ${c.soft}, ${hexToRgba(c.secondary, 0.26)})` }} />
          <img src={cfg.images.portrait} alt={cfg.images.portraitAlt} className="relative h-[520px] w-full rounded-[2rem] object-cover shadow-2xl" style={{ objectPosition: cfg.images.portraitPosition }} />
        </motion.div>

        <div>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em]" style={{ color: c.primary }}>
            {cfg.story.eyebrow}
          </p>
          <h2 className="font-serif text-4xl leading-tight sm:text-6xl" style={{ color: c.text }}>{cfg.story.title}</h2>
          <p className="mt-7 text-lg leading-9" style={{ color: c.muted }}>{cfg.story.text}</p>
          <div className="mt-9 rounded-[2rem] border bg-white/75 p-7 shadow-sm" style={{ borderColor: hexToRgba(c.primary, 0.18) }}>
            <div className="flex items-start gap-3">
              <Heart className="mt-1 shrink-0" style={{ color: c.primary }} />
              <p className="font-serif text-2xl leading-snug" style={{ color: c.primaryDark }}>{cfg.story.quote}</p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="detalles">
        <SectionHeader eyebrow={cfg.details.eyebrow} title={cfg.event.displayDate} text={cfg.details.intro} />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border p-8 shadow-xl" style={{ background: c.card, borderColor: hexToRgba(c.primary, 0.14) }}>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: c.soft, color: c.primaryDark }}>
              <CalendarDays size={27} />
            </div>
            <h3 className="font-serif text-3xl">{cfg.event.mainTitle}</h3>
            <p className="mt-4 flex items-start gap-3 text-lg" style={{ color: c.muted }}><Clock className="mt-1 shrink-0" size={20} /> {cfg.event.time}</p>
            <p className="mt-3 flex items-start gap-3 text-lg" style={{ color: c.muted }}>
              <MapPin className="mt-1 shrink-0" size={20} />
              <span><strong style={{ color: c.text }}>{cfg.event.place}</strong><br />{cfg.event.address}</span>
            </p>
          </div>
          <div className="rounded-[2rem] border p-8 shadow-xl" style={{ background: c.card, borderColor: hexToRgba(c.primary, 0.14) }}>
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: hexToRgba(c.secondary, 0.22), color: c.primaryDark }}>
              <Sparkles size={27} />
            </div>
            <h3 className="font-serif text-3xl">{cfg.details.cardTitle}</h3>
            <p className="mt-4 leading-8" style={{ color: c.muted }}>{cfg.details.cardText}</p>
            <a href={cfg.event.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] shadow-lg transition hover:-translate-y-0.5" style={{ background: c.primaryDark, color: "white" }}>
              <MapPin size={18} /> Abrir ubicacion
            </a>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Cronograma" title={cfg.timelineTitle} />
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
          {cfg.itinerary.map((item) => (
            <div key={`${item.time}-${item.title}`} className="rounded-[2rem] border bg-white/80 p-6 shadow-lg backdrop-blur" style={{ borderColor: hexToRgba(c.primary, 0.16) }}>
              <p className="text-sm font-bold uppercase tracking-[0.18em]" style={{ color: c.primary }}>{item.time}</p>
              <h3 className="mt-3 font-serif text-2xl" style={{ color: c.primaryDark }}>{item.title}</h3>
              <p className="mt-3 leading-7" style={{ color: c.muted }}>{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader eyebrow="Recuerdos" title={cfg.galleryTitle} text={cfg.galleryText} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image, index) => (
            <motion.div key={image.src} initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: index * 0.07, duration: 0.55 }} className={`group relative h-80 overflow-hidden rounded-[2rem] bg-transparent shadow-2xl shadow-black/20 ${index === 1 ? "lg:mt-10" : ""} ${index === 2 ? "lg:-mt-6" : ""}`}>
              <img src={image.src} alt={image.alt || `Foto ${index + 1}`} className="absolute inset-0 block h-full w-full object-cover transition duration-700 group-hover:scale-105" style={{ objectPosition: image.position || "center" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent opacity-70" />
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="grid gap-5 md:grid-cols-2">
        <div className="rounded-[2rem] border p-8 shadow-xl" style={{ background: c.card, borderColor: hexToRgba(c.primary, 0.14) }}>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: c.soft, color: c.primaryDark }}><Shirt size={27} /></div>
          <h3 className="font-serif text-3xl">{cfg.sections.dressTitle}</h3>
          <p className="mt-4 text-xl font-semibold" style={{ color: c.primaryDark }}>{cfg.sections.dressCode}</p>
          <p className="mt-3 leading-7" style={{ color: c.muted }}>{cfg.sections.dressNote}</p>
        </div>
        <div className="rounded-[2rem] border p-8 shadow-xl" style={{ background: c.card, borderColor: hexToRgba(c.primary, 0.14) }}>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: hexToRgba(c.secondary, 0.22), color: c.primaryDark }}><Gift size={27} /></div>
          <h3 className="font-serif text-3xl">{cfg.sections.giftsTitle}</h3>
          <p className="mt-4 leading-7" style={{ color: c.muted }}>{cfg.sections.giftsText}</p>
          {cfg.sections.bankAlias && (
            <div className="mt-5 rounded-2xl border p-5" style={{ background: c.background, borderColor: hexToRgba(c.accent, 0.55) }}>
              <p className="text-sm uppercase tracking-[0.18em]" style={{ color: c.muted }}>Alias</p>
              <p className="mt-1 font-mono text-lg font-semibold">{cfg.sections.bankAlias}</p>
            </div>
          )}
        </div>
      </Section>

      <Section id="confirmar">
        <div className="relative overflow-hidden rounded-[2.5rem] p-8 text-center shadow-2xl sm:p-14" style={{ background: `linear-gradient(135deg, ${c.primaryDark}, ${c.primary} 62%, ${c.secondary})`, color: "white" }}>
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="relative z-10 mx-auto max-w-2xl">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15"><MessageCircle size={30} /></div>
            <h2 className="font-serif text-4xl sm:text-6xl">{cfg.rsvp.title}</h2>
            <p className="mt-6 text-lg leading-8 text-white/85">{cfg.rsvp.text} <strong>{cfg.rsvp.deadline}</strong>.</p>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] shadow-xl transition hover:-translate-y-0.5" style={{ color: c.primaryDark }}>
              <MessageCircle size={18} /> Confirmar por WhatsApp
            </a>
          </div>
        </div>
      </Section>

      <footer className="px-5 pb-14 text-center">
        <img src={cfg.brand.logo} alt={cfg.brand.name} className="mx-auto mb-5 h-16 w-16 object-contain" />
        <p className="font-serif text-3xl" style={{ color: c.primaryDark }}>{cfg.hero.title}</p>
        <p className="mt-3 text-sm uppercase tracking-[0.2em]" style={{ color: c.muted }}>{cfg.event.displayDate}</p>
        <p className="mt-6 text-sm" style={{ color: c.muted }}>
          Invitacion creada por <strong>{cfg.brand.name}</strong> · {cfg.brand.instagram}
        </p>
      </footer>
    </main>
  );
}
