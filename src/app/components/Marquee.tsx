import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger } from '../lib/motion';

const WORDS = [
  'Mathematics',
  'Science',
  'English',
  'Physics',
  'Chemistry',
  'Biology',
  'Computer Science',
  'German',
  'Japanese',
  'French',
];
const SYMBOLS = ['+', '×', '−', '÷'];
const SYMBOL_COLORS = ['text-magenta', 'text-violet', 'text-[#a77de9]', 'text-cyan'];

function Row() {
  return (
    <div className="flex items-center shrink-0">
      {WORDS.map((w, i) => (
        <span key={w} className="flex items-center">
          <span className="font-display font-semibold text-[clamp(2.2rem,5vw,4.5rem)] tracking-[-0.04em] text-ink px-6 md:px-10 whitespace-nowrap">
            {w}
          </span>
          <span className={`font-display font-bold text-[clamp(1.6rem,3vw,2.6rem)] ${SYMBOL_COLORS[i % 4]}`}>
            {SYMBOLS[i % 4]}
          </span>
        </span>
      ))}
    </div>
  );
}

/** Subject ticker that speeds up with scroll velocity. */
export function Marquee() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const loop = gsap.to('.marquee-track', { xPercent: -50, duration: 40, ease: 'none', repeat: -1 });
        const st = ScrollTrigger.create({
          trigger: root.current,
          start: 'top bottom',
          end: 'bottom top',
          onUpdate: (self) => {
            const boost = Math.min(Math.abs(self.getVelocity()) / 250, 6);
            gsap.to(loop, { timeScale: 1 + boost, duration: 0.2, overwrite: true });
            gsap.to(loop, { timeScale: 1, duration: 1.2, delay: 0.2, ease: 'power2.out' });
          },
        });
        return () => st.kill();
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden
      className="relative bg-paper py-8 md:py-12 overflow-hidden border-b border-ink/10"
    >
      <div className="marquee-track">
        <Row />
        <Row />
      </div>
    </div>
  );
}
