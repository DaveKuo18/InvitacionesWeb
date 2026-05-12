import { Gift } from "lucide-react";
import { hexToRgba } from "../../lib/colors.js";

export function GiftModule({ config, theme }) {
  const gift = config.gift || {};
  if (gift.enabled === false) return null;
  return (
    <div className="rounded-[2rem] border p-8 shadow-xl" style={{ background: theme.card, borderColor: hexToRgba(theme.primary, 0.14) }}>
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full" style={{ background: hexToRgba(theme.secondary, 0.22), color: theme.primaryDark }}><Gift size={27} /></div>
      <h3 className="font-serif text-3xl">Regalo</h3>
      <p className="mt-4 leading-7" style={{ color: theme.muted }}>{gift.text}</p>
      {(gift.alias || gift.cbu) && (
        <div className="mt-5 rounded-2xl border p-5" style={{ background: theme.background, borderColor: hexToRgba(theme.accent, 0.55) }}>
          {gift.alias && <><p className="text-sm uppercase tracking-[0.18em]" style={{ color: theme.muted }}>Alias</p><p className="mt-1 font-mono text-lg font-semibold">{gift.alias}</p></>}
          {gift.cbu && <><p className="mt-4 text-sm uppercase tracking-[0.18em]" style={{ color: theme.muted }}>CBU</p><p className="mt-1 break-all font-mono text-lg font-semibold">{gift.cbu}</p></>}
        </div>
      )}
    </div>
  );
}
