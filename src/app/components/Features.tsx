import { Brain, Users, Sparkles, Target, BookOpen, Award } from 'lucide-react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap, SplitText } from '../lib/motion';
import { Eyebrow, h2Class } from './Section';
import { DiamondRow } from './Operators';

export function Features() {
  const bannerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: Brain,
      title: 'AI-Informed Teaching',
      description: "Teachers use AI insights to identify gaps and tailor instruction — keeping every student's growth on track without replacing the human touch.",
    },
    {
      icon: Users,
      title: 'Young, Dynamic Teachers',
      description: 'Energetic educators who connect with students and keep every session engaging.',
    },
    {
      icon: Sparkles,
      title: 'Modern Teaching Methods',
      description: 'Interactive lessons and technology-driven approaches replace rote repetition.',
    },
    {
      icon: Target,
      title: 'Exam-Focused Batches',
      description: 'Dedicated preparation for scholarship exams and olympiads, run alongside regular coursework.',
    },
    {
      icon: BookOpen,
      title: 'Every Subject, Every Standard',
      description: 'A complete curriculum from Class 1 through 12, across all major boards.',
    },
    {
      icon: Award,
      title: 'A Track Record That Holds Up',
      description: '500+ students taught, with a 95% success rate in scholarship and olympiad exams.',
    },
  ];

  // The AI statement lights up word by word as it scrolls through the viewport.
  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const split = SplitText.create('[data-scrub-text]', { type: 'words' });
        gsap.fromTo(
          split.words,
          { opacity: 0.16 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: 'none',
            scrollTrigger: {
              trigger: '[data-scrub-text]',
              start: 'top 85%',
              end: 'bottom 50%',
              scrub: true,
            },
          },
        );
        return () => split.revert();
      });
    },
    { scope: bannerRef },
  );

  return (
    <section id="features" className="relative bg-paper py-24 md:py-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Sticky intro */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <Eyebrow>Why Us</Eyebrow>
              <h2 data-split className={`${h2Class} mt-6 text-ink`}>
                Why families choose{' '}
                <span className="font-serif-i text-grad">Math ma'am</span> Academy
              </h2>
              <p data-reveal className="mt-6 text-lg md:text-xl text-slate-ink max-w-md leading-relaxed">
                The blend of attentive teaching and smart tools that gets results.
              </p>
              <DiamondRow size={14} className="mt-10 hidden lg:inline-flex" />
            </div>
          </div>

          {/* Feature list */}
          <div className="lg:col-span-7">
            <ol className="border-t border-ink/12">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <li
                    key={feature.title}
                    data-reveal
                    className="group relative border-b border-ink/12 py-7 md:py-9 grid grid-cols-[auto_1fr] gap-5 md:gap-8"
                  >
                    <span
                      aria-hidden
                      className="absolute left-0 bottom-[-1px] h-px w-full bg-grad origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    />
                    <div className="flex flex-col items-center gap-4 pt-1">
                      <span className="text-xs tabular-nums text-ink/40 font-medium">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-white border border-ink/10 grid place-items-center shadow-[0_8px_24px_-12px_rgba(12,10,29,0.25)] transition-all duration-500 group-hover:bg-ink group-hover:border-ink group-hover:-rotate-6">
                        <Icon
                          className="w-5 h-5 md:w-6 md:h-6 text-violet transition-colors duration-500 group-hover:text-cyan"
                          strokeWidth={1.75}
                        />
                      </div>
                    </div>
                    <div className="md:pt-6">
                      <h3 className="font-display text-2xl md:text-[1.9rem] font-semibold tracking-[-0.025em] text-ink transition-transform duration-500 group-hover:translate-x-1">
                        {feature.title}
                      </h3>
                      <p className="mt-2.5 text-slate-ink leading-relaxed text-[15.5px] md:text-base max-w-lg">
                        {feature.description}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>

        {/* AI statement */}
        <div
          ref={bannerRef}
          data-reveal
          className="relative mt-24 md:mt-32 rounded-[2rem] md:rounded-[2.5rem] bg-ink text-white overflow-hidden grain"
        >
          <div aria-hidden className="absolute inset-0 grid-dark opacity-70" />
          <div
            aria-hidden
            data-parallax="0.4"
            className="absolute -right-32 -top-32 w-[30rem] h-[30rem] rounded-full bg-violet/35 blur-[120px]"
          />
          <div
            aria-hidden
            className="absolute -left-24 -bottom-40 w-[26rem] h-[26rem] rounded-full bg-magenta/20 blur-[120px]"
          />
          <div className="relative px-7 py-14 sm:px-12 md:px-20 md:py-24 max-w-5xl">
            <DiamondRow size={12} className="mb-8" />
            <h3 className="font-display font-semibold text-[clamp(2rem,4.6vw,4rem)] leading-[1] tracking-[-0.04em]">
              Teaching, guided by <span className="font-serif-i text-grad pr-1">insight</span> — driven
              by dedication.
            </h3>
            <p
              data-scrub-text
              className="mt-8 text-xl md:text-[1.75rem] leading-[1.45] text-white max-w-3xl tracking-[-0.01em]"
            >
              Our teachers use modern AI tools to understand each student's learning gaps and
              tailor their approach accordingly — because real growth happens person to person,
              not through an app.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
