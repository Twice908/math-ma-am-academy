import type { ReactNode } from 'react';

export function Eyebrow({
  children,
  dark = false,
  className = '',
}: {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      data-reveal
      className={`inline-flex items-center gap-2.5 text-[12px] font-medium uppercase tracking-[0.2em] ${
        dark ? 'text-white/60' : 'text-ink/55'
      } ${className}`}
    >
      <span className="w-2 h-2 rotate-45 rounded-[2px] bg-grad" />
      {children}
    </div>
  );
}

export const h2Class =
  'font-display font-semibold text-[clamp(2.4rem,5.6vw,4.9rem)] leading-[0.96] tracking-[-0.04em]';
