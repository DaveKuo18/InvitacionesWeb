import { CalendarDays, Clock, MapPin, Sparkles } from "lucide-react";
import { Section } from "../shared/Section.jsx";
import { SectionHeader } from "../shared/SectionHeader.jsx";
import { hexToRgba } from "../../lib/colors.js";

export function DetailsModule({ config, theme }) {
  const details = config.details || {};
  const location = config.location || {};
  return (
    <Section id="detalles">
      <SectionHeader eyebrow={details.eyebrow || "Detalles"} title={config.displayDate} text={details.intro} theme={theme} />
      <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
        <div className="rounded-[2rem] border p-8 shadow-xl" style={{ background: theme.card, borderColor: hexToRgba(theme.primary, 0.14) }}>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: theme.soft, color: theme.primaryDark }}>
            <CalendarDays size={27} />
          </div>
          <h3 className="font-serif text-3xl">{location.title || "Celebracion"}</h3>
          <p className="mt-4 flex items-start gap-3 text-lg" style={{ color: theme.muted }}><Clock className="mt-1 shrink-0" size={20} /> {location.time}</p>
          <p className="mt-3 flex items-start gap-3 text-lg" style={{ color: theme.muted }}>
            <MapPin className="mt-1 shrink-0" size={20} />
            <span><strong style={{ color: theme.text }}>{location.name}</strong><br />{location.address}</span>
          </p>
        </div>
        <div className="rounded-[2rem] border p-8 shadow-xl" style={{ background: theme.card, borderColor: hexToRgba(theme.primary, 0.14) }}>
          <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: hexToRgba(theme.secondary, 0.22), color: theme.primaryDark }}>
            <Sparkles size={27} />
          </div>
          <h3 className="font-serif text-3xl">{details.cardTitle || "Todo listo para celebrar"}</h3>
          <p className="mt-4 leading-8" style={{ color: theme.muted }}>{details.cardText}</p>
          {location.mapsUrl && (
            <a href={location.mapsUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-bold uppercase tracking-[0.16em] shadow-lg transition hover:-translate-y-0.5" style={{ background: theme.primaryDark, color: "white" }}>
              <MapPin size={18} /> Abrir ubicacion
            </a>
          )}
        </div>
      </div>
    </Section>
  );
}
