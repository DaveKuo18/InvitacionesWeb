import { MessageCircle } from "lucide-react";
import { Section } from "../shared/Section.jsx";
import { buildWhatsAppUrl } from "../../lib/whatsapp.js";
import { RsvpForm } from "../rsvp/RsvpForm.jsx";

export function RsvpModule({ config, theme }) {
  const rsvp = config.rsvp || {};
  if (!rsvp.enabled) return null;

  const mode = rsvp.mode || "whatsapp";
  const showWhatsApp = mode === "whatsapp" || mode === "both";
  const showForm = mode === "form" || mode === "both";
  const whatsappUrl = buildWhatsAppUrl({
    number: rsvp.whatsappNumber,
    message: rsvp.whatsappMessage,
  });

  return (
    <Section id="confirmar">
      <div className="relative overflow-hidden rounded-[2.5rem] p-8 text-center shadow-2xl sm:p-14" style={{ background: `linear-gradient(135deg, ${theme.primaryDark}, ${theme.primary} 62%, ${theme.secondary})`, color: "white" }}>
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
        <div className="relative z-10 mx-auto max-w-2xl">
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/15"><MessageCircle size={30} /></div>
          <h2 className="font-serif text-4xl sm:text-6xl">{rsvp.title || "Confirma tu asistencia"}</h2>
          <p className="mt-6 text-lg leading-8 text-white/85">
            {rsvp.text || "Te esperamos. Confirmar antes del"} {rsvp.deadline && <strong>{rsvp.deadline}</strong>}.
          </p>
          {mode === "both" && <p className="mt-4 text-sm uppercase tracking-[0.18em] text-white/75">Elegí la opción que prefieras</p>}
          {showWhatsApp && whatsappUrl && (
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.18em] shadow-xl transition hover:-translate-y-0.5" style={{ color: theme.primaryDark }}>
              <MessageCircle size={18} /> Confirmar por WhatsApp
            </a>
          )}
          {showForm && <RsvpForm config={config} theme={theme} />}
        </div>
      </div>
    </Section>
  );
}
