/** The four operator diamonds from the logo, as a reusable brand motif. */
export const OPERATORS = [
  { sym: '+', label: 'plus', bg: 'bg-[#d65be0]' },
  { sym: '×', label: 'times', bg: 'bg-[#8e5be3]' },
  { sym: '−', label: 'minus', bg: 'bg-[linear-gradient(135deg,#5fd8f2,#a77de9)]' },
  { sym: '÷', label: 'divide', bg: 'bg-[#5fd8f2]' },
] as const;

export function DiamondRow({ size = 14, className = '' }: { size?: number; className?: string }) {
  return (
    <span aria-hidden className={`inline-flex items-center ${className}`} style={{ gap: size * 0.18 }}>
      {OPERATORS.map((op) => (
        <span
          key={op.label}
          className={`${op.bg} rotate-45 rounded-[22%] grid place-items-center`}
          style={{ width: size, height: size }}
        />
      ))}
    </span>
  );
}
