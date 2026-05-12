import { Section } from "../shared/Section.jsx";
import { SectionHeader } from "../shared/SectionHeader.jsx";
import { hexToRgba } from "../../lib/colors.js";

export function ItineraryModule({ config, theme }) {
  if (!config.itinerary?.length) return null;
  return (
    <Section>
      <SectionHeader eyebrow="Cronograma" title={config.timelineTitle || "Momentos del evento"} theme={theme} />
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-4">
        {config.itinerary.map((item) => (
          <div key={`${item.time}-${item.title}`} className="rounded-[2rem] border bg-white/80 p-6 shadow-lg backdrop-blur" style={{ borderColor: hexToRgba(theme.primary, 0.16) }}>
            <p className="text-sm font-bold uppercase tracking-[0.18em]" style={{ color: theme.primary }}>{item.time}</p>
            <h3 className="mt-3 font-serif text-2xl" style={{ color: theme.primaryDark }}>{item.title}</h3>
            <p className="mt-3 leading-7" style={{ color: theme.muted }}>{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
