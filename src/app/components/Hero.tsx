import { ArrowRight, ArrowDown, Sparkles } from 'lucide-react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, scrollToId } from '../lib/motion';
import { OPERATORS, DiamondRow } from './Operators';

// Diamond lattice: four tiles meeting edge-to-edge, like the logo folded into a square.
const CLUSTER = [
  { pos: 'left-0 top-1/4', depth: 28 },
  { pos: 'left-1/4 top-0', depth: 56 },
  { pos: 'left-1/4 top-1/2', depth: 40 },
  { pos: 'left-1/2 top-1/4', depth: 72 },
];

export function Hero() {
  const root = useRef<HTMLElement>(null);

  const stats = [
    { value: '1st–12th', label: 'Every standard' },
    { value: '3', label: 'Foreign languages' },
    { value: '95%', label: 'Exam success rate' },
  ];

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 1.2 }, delay: 0.2 });
        tl.from('[data-hero-line]', { yPercent: 115, duration: 1.4, stagger: 0.12 })
          .from('[data-hero-fade]', { y: 28, autoAlpha: 0, stagger: 0.08 }, '-=1.05')
          .from(
            '[data-diamond]',
            { scale: 0, rotation: -135, autoAlpha: 0, stagger: 0.09, duration: 1.3, ease: 'back.out(1.5)' },
            '-=1.2',
          )
          .from('[data-chip]', { y: 20, autoAlpha: 0, stagger: 0.1 }, '-=0.8')
          .from('[data-hero-stat]', { y: 30, autoAlpha: 0, stagger: 0.08 }, '-=1');

        gsap.utils.toArray<HTMLElement>('[data-float]').forEach((el, i) => {
          gsap.to(el, {
            y: i % 2 ? 10 : -10,
            duration: 2.8 + i * 0.35,
            yoyo: true,
            repeat: -1,
            ease: 'sine.inOut',
          });
        });

        gsap.to('[data-orb]', {
          xPercent: 12,
          yPercent: -10,
          scale: 1.1,
          duration: 9,
          yoyo: true,
          repeat: -1,
          ease: 'sine.inOut',
          stagger: 3,
        });

        // On scroll the cluster slowly turns and sinks, the copy drifts up.
        const scrub = { trigger: root.current, start: 'top top', end: 'bottom top', scrub: true };
        gsap.to('[data-cluster]', { rotation: 18, yPercent: 22, ease: 'none', scrollTrigger: scrub });
        gsap.to('[data-hero-copy]', { yPercent: -10, autoAlpha: 0.2, ease: 'none', scrollTrigger: scrub });
      });

      mm.add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
        const items = gsap.utils.toArray<HTMLElement>('[data-depth]').map((el) => ({
          x: gsap.quickTo(el, 'x', { duration: 1.2, ease: 'power3' }),
          y: gsap.quickTo(el, 'y', { duration: 1.2, ease: 'power3' }),
          d: Number(el.dataset.depth),
        }));
        const onMove = (e: PointerEvent) => {
          const nx = e.clientX / window.innerWidth - 0.5;
          const ny = e.clientY / window.innerHeight - 0.5;
          items.forEach((it) => {
            it.x(nx * it.d);
            it.y(ny * it.d);
          });
        };
        window.addEventListener('pointermove', onMove);
        return () => window.removeEventListener('pointermove', onMove);
      });
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="relative min-h-[100svh] bg-ink text-white overflow-hidden flex flex-col grain"
    >
      {/* Atmosphere */}
      <div aria-hidden className="absolute inset-0 grid-dark" />
      <div
        aria-hidden
        data-orb
        className="absolute -top-40 -left-40 w-[42rem] h-[42rem] rounded-full bg-magenta/25 blur-[140px]"
      />
      <div
        aria-hidden
        data-orb
        className="absolute top-1/3 -right-40 w-[38rem] h-[38rem] rounded-full bg-cyan/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-b from-transparent to-ink"
      />

      <div className="relative flex-1 max-w-7xl w-full mx-auto px-5 sm:px-8 pt-32 md:pt-40 pb-10 grid lg:grid-cols-12 gap-12 items-center">
        {/* Copy */}
        <div data-hero-copy className="lg:col-span-7">
          <div
            data-hero-fade
            className="inline-flex items-center gap-2.5 rounded-full border border-white/12 bg-white/[0.06] backdrop-blur px-4 py-1.5 mb-8"
          >
            <span className="relative flex w-2 h-2">
              <span className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-60" />
              <span className="relative w-2 h-2 rounded-full bg-cyan" />
            </span>
            <span className="text-sm text-white/80">Now enrolling for Standards 1–12</span>
          </div>

          <h1 className="font-display font-semibold text-[clamp(3.1rem,8.4vw,7.6rem)] leading-[0.92] tracking-[-0.038em]">
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-hero-line className="block">
                Where students
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.2em] -mb-[0.1em]">
              <span data-hero-line className="block font-serif-i text-grad pr-2 text-[1.08em]">
                truly excel.
              </span>
            </span>
          </h1>

          <p
            data-hero-fade
            className="mt-7 text-lg md:text-xl text-white/65 max-w-xl leading-relaxed"
          >
            Math ma'am Academy's young, dynamic teachers bring every concept to
            life — covering every subject, Class 1 through 12, with the energy and attention each student deserves.
          </p>

          <div data-hero-fade className="mt-10 flex flex-col sm:flex-row gap-3">
            <button
              data-magnetic
              onClick={() => scrollToId('contact')}
              className="btn-primary rounded-full px-8 py-4 text-[16.5px]"
            >
              Start Your Journey
              <ArrowRight className="btn-arrow w-4 h-4" />
            </button>
            <button
              onClick={() => scrollToId('classes')}
              className="btn-ghost rounded-full px-8 py-4 text-[16.5px]"
            >
              Explore Classes
              <ArrowDown className="w-4 h-4 opacity-70" />
            </button>
          </div>
        </div>

        {/* Operator cluster */}
        <div className="lg:col-span-5 hidden lg:flex justify-center">
          <div className="relative w-full max-w-[460px] aspect-square">
            <div
              aria-hidden
              className="absolute inset-[18%] rounded-full bg-violet/40 blur-[90px]"
            />
            <div data-cluster className="absolute inset-0">
              {OPERATORS.map((op, i) => (
                <div
                  key={op.label}
                  data-depth={CLUSTER[i].depth}
                  className={`absolute w-1/2 h-1/2 ${CLUSTER[i].pos}`}
                >
                  <div data-float className="w-full h-full grid place-items-center">
                    <div
                      data-diamond
                      className={`${op.bg} w-[66%] h-[66%] rotate-45 rounded-[20%] grid place-items-center shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.35)]`}
                    >
                      <span className="-rotate-45 font-display font-bold text-white text-[clamp(3rem,5vw,4.5rem)] leading-none select-none">
                        {op.sym}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              data-chip
              data-depth="-30"
              className="absolute -left-6 bottom-[14%] flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-xl px-4 py-3 shadow-2xl"
            >
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-sm text-white/85">Modern Teaching Methods</span>
            </div>
            <div
              data-chip
              data-depth="-45"
              className="absolute -right-2 top-[10%] flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.07] backdrop-blur-xl px-4 py-3 shadow-2xl"
            >
              <DiamondRow size={8} />
              <span className="text-sm text-white/85">Every Subject, Every Standard</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative max-w-7xl w-full mx-auto px-5 sm:px-8 pb-8 md:pb-10">
        <div className="grid grid-cols-3 border-t border-white/10">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-hero-stat
              className={`pt-6 md:pt-7 ${i > 0 ? 'pl-4 md:pl-8 border-l border-white/10' : ''}`}
            >
              <div
                data-count={stat.value}
                aria-label={stat.value}
                className="font-display text-[clamp(1.6rem,4vw,3rem)] font-semibold tracking-[-0.03em] leading-none"
              >
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-white/50 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
