import { Shirt } from "lucide-react";
import { hexToRgba } from "../../lib/colors.js";

export function DressCodeModule({ config, theme }) {
  const dressCode = config.dressCode || {};
  if (dressCode.enabled === false) return null;
  return (
    <div className="rounded-[2rem] border p-8 shadow-xl" style={{ background: theme.card, borderColor: hexToRgba(theme.primary, 0.14) }}>
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: theme.soft, color: theme.primaryDark }}><Shirt size={27} /></div>
      <h3 className="font-serif text-3xl">Vestimenta</h3>
      <p className="mt-4 text-xl font-semibold" style={{ color: theme.primaryDark }}>{dressCode.title}</p>
      <p className="mt-3 leading-7" style={{ color: theme.muted }}>{dressCode.note}</p>
    </div>
  );
}
