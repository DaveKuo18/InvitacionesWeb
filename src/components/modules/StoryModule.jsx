import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { Section } from "../shared/Section.jsx";
import { hexToRgba } from "../../lib/colors.js";

export function StoryModule({ config, theme }) {
  const story = config.story || {};
  return (
    <Section id="historia" className="grid items-center gap-12 md:grid-cols-[0.95fr_1.05fr]">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
        <div className="absolute -left-4 -top-4 h-full w-full rounded-[2rem]" style={{ background: `linear-gradient(135deg, ${theme.soft}, ${hexToRgba(theme.secondary, 0.26)})` }} />
        <img src={config.images.portrait || config.images.hero} alt={config.images.portraitAlt || config.title} className="relative h-[520px] w-full rounded-[2rem] object-cover shadow-2xl" style={{ objectPosition: config.images.portraitPosition || "center" }} />
      </motion.div>

      <div>
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em]" style={{ color: theme.primary }}>
          {story.eyebrow || config.eyebrow}
        </p>
        <h2 className="font-serif text-4xl leading-tight sm:text-6xl" style={{ color: theme.text }}>{story.title || "Una historia para celebrar"}</h2>
        <p className="mt-7 text-lg leading-9" style={{ color: theme.muted }}>{story.text || config.intro}</p>
        {story.quote && (
          <div className="mt-9 rounded-[2rem] border bg-white/75 p-7 shadow-sm" style={{ borderColor: hexToRgba(theme.primary, 0.18) }}>
            <div className="flex items-start gap-3">
              <Heart className="mt-1 shrink-0" style={{ color: theme.primary }} />
              <p className="font-serif text-2xl leading-snug" style={{ color: theme.primaryDark }}>{story.quote}</p>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
}
