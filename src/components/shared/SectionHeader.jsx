export function SectionHeader({ eyebrow, title, text, theme }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em]" style={{ color: theme.primary }}>
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-4xl leading-tight sm:text-5xl" style={{ color: theme.text }}>
        {title}
      </h2>
      {text && (
        <p className="mt-5 text-base leading-8 sm:text-lg" style={{ color: theme.muted }}>
          {text}
        </p>
      )}
    </div>
  );
}
