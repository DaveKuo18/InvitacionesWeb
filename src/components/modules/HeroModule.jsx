import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { hexToRgba } from "../../lib/colors.js";

export function HeroModule({ config, theme }) {
  return (
    <section data-capture="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 py-10 text-center">
      <motion.div aria-hidden="true" initial={{ scale: 1.08 }} animate={{ scale: 1 }} transition={{ duration: 2.1, ease: "easeOut" }} className="absolute inset-0">
        <img src={config.images.hero} alt={config.images.heroAlt || config.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(180deg, ${hexToRgba(theme.primaryDark, 0.2)}, ${hexToRgba(theme.primaryDark, 0.74)})` }} />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="relative z-10 mx-auto max-w-4xl text-white">
        <div className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.22em] backdrop-blur">
          <Sparkles size={15} />
          {config.eyebrow}
        </div>
        <h1 className="font-serif text-6xl leading-none sm:text-8xl md:text-9xl">{config.title}</h1>
        <div className="mx-auto mt-7 h-px w-32 bg-white/60" />
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">{config.intro}</p>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {config.modules?.rsvp && (
            <a href="#confirmar" className="rounded-full px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] shadow-xl transition hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${theme.accent}, #fff)`, color: theme.primaryDark }}>
              Confirmar asistencia
            </a>
          )}
          <a href="#detalles" className="rounded-full border border-white/35 bg-white/10 px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] text-white backdrop-blur transition hover:bg-white/20">
            Ver detalles
          </a>
        </div>
      </motion.div>

      <motion.a href="#historia" data-capture-hide initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }} className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/80" aria-label="Bajar">
        <ChevronDown className="animate-bounce" size={34} />
      </motion.a>
    </section>
  );
}
