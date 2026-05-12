import { useCountdown } from "../shared/useCountdown.js";
import { Section } from "../shared/Section.jsx";
import { hexToRgba } from "../../lib/colors.js";

function CountdownItem({ value, label, theme }) {
  return (
    <div className="rounded-2xl border bg-white/75 px-4 py-5 text-center shadow-sm backdrop-blur" style={{ borderColor: hexToRgba(theme.primary, 0.18) }}>
      <div className="text-3xl font-semibold tabular-nums sm:text-4xl" style={{ color: theme.primaryDark }}>
        {String(value).padStart(2, "0")}
      </div>
      <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.22em]" style={{ color: theme.muted }}>
        {label}
      </div>
    </div>
  );
}

export function CountdownModule({ config, theme }) {
  const countdown = useCountdown(config.dateISO);
  return (
    <Section className="-mt-20 pb-10">
      <div className="relative z-20 mx-auto grid max-w-4xl grid-cols-2 gap-3 rounded-[2rem] border bg-white/85 p-4 shadow-2xl backdrop-blur sm:grid-cols-4 sm:p-5" style={{ borderColor: hexToRgba(theme.primary, 0.14) }}>
        <CountdownItem value={countdown.days} label="Dias" theme={theme} />
        <CountdownItem value={countdown.hours} label="Horas" theme={theme} />
        <CountdownItem value={countdown.minutes} label="Min" theme={theme} />
        <CountdownItem value={countdown.seconds} label="Seg" theme={theme} />
      </div>
    </Section>
  );
}
