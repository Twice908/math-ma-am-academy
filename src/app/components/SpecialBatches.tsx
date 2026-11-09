import { Trophy, Star, Check, Flame, Shield, BookMarked, Swords } from 'lucide-react';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/motion';
import { Eyebrow, h2Class } from './Section';

const RING_R = 88;
const RING_C = 2 * Math.PI * RING_R;

export function SpecialBatches() {
  const ringRef = useRef<SVGSVGElement>(null);

  const batches = [
    {
      icon: Trophy,
      title: 'Scholarship Exams',
      standards: '4th & 7th Standard',
      description: 'Focused coaching for the Maharashtra State Scholarship exam — covering the full syllabus with exam-pattern practice.',
      features: [
        'Full syllabus coverage',
        "Previous years' question papers",
        'Timed mock tests',
        'Exam strategy sessions',
      ],
    },
    {
      icon: Star,
      title: 'Olympiad Preparation',
      standards: 'Standards 1–12',
      description: 'Structured preparation for national and international olympiads across all major subjects.',
      features: [
        'Subject-wise olympiad coaching',
        'Advanced problem-solving practice',
        'International-level question sets',
        'Regular timed assessments',
      ],
    },
    {
      icon: Flame,
      title: 'Homi Bhabha Competition',
      standards: '6th & 9th Standard',
      description: "Maharashtra's prestigious young scientist competition — covering Science theory, practicals, and project work.",
      features: [
        'Written exam preparation',
        'Practical experiment training',
        'Project work guidance',
        'Science aptitude building',
      ],
    },
    {
      icon: Swords,
      title: 'MTS Olympiad',
      standards: 'Standards 5–10',
      description: "Maharashtra Talent Search Olympiad coaching, one of the state's most competitive merit-based exams.",
      features: [
        'State-level exam pattern',
        'Mental ability training',
        'Mathematics & Science focus',
        'Mock tests & analysis',
      ],
    },
    {
      icon: Shield,
      title: 'NDA Entrance',
      standards: '11th & 12th Standard',
      description: 'Foundation-level preparation for the National Defence Academy written exam — Maths, English, and General Knowledge.',
      features: [
        'Mathematics (up to Class 12)',
        'English language skills',
        'General knowledge & current affairs',
        'Previous year papers',
      ],
    },
  ];

  const olympiadSubjects = [
    'Mathematics Olympiad (IMO)',
    'Science Olympiad (ISO)',
    'English Olympiad (IEO)',
    'Computer Science Olympiad',
    'General Knowledge Olympiad',
    'Cyber Olympiad',
    'Social Science Olympiad',
    'Hindi Olympiad',
  ];
  useGSAP(
    () => {
      const arc = ringRef.current?.querySelector('[data-arc]');
      if (!arc) return;
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.fromTo(
          arc,
          { strokeDashoffset: RING_C },
          {
            strokeDashoffset: RING_C * 0.05,
            duration: 2,
            ease: 'power3.out',
            scrollTrigger: { trigger: ringRef.current, start: 'top 85%', once: true },
          },
        );
      });
    },
    { scope: ringRef },
  );

  return (
    <section id="special-batches" className="relative bg-ink text-white py-24 md:py-36 overflow-hidden grain">
      <div aria-hidden className="absolute inset-0 grid-dark opacity-60" />
      <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[30rem] rounded-full bg-violet/20 blur-[140px]" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <Eyebrow dark>Exclusive Programs</Eyebrow>
          <h2 data-split className={`${h2Class} mt-6`}>
            Special <span className="font-serif-i text-grad pr-1">exam</span> batches
          </h2>
          <p data-reveal className="mt-6 text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed">
            Dedicated coaching for the exams that open doors — run separately from regular coursework.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-5 mb-5">
          {batches.map((batch, index) => {
            const Icon = batch.icon;
            return (
              <article
                key={batch.title}
                data-reveal
                data-spotlight
                className="spotlight spotlight-dark lift grad-border group relative rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur-sm p-8 md:p-10"
              >
                <div className="flex items-start justify-between gap-4 mb-8">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-grad grid place-items-center shadow-[0_12px_30px_-10px_rgba(214,91,224,0.6)] transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-105">
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-[1.5rem] font-semibold tracking-[-0.025em]">
                        {batch.title}
                      </h3>
                      <p className="text-white/55">{batch.standards}</p>
                    </div>
                  </div>
                  <span className="text-xs text-white/35 tabular-nums pt-2">0{index + 1}</span>
                </div>

                <p className="text-white/70 mb-8 leading-relaxed text-[16.5px]">{batch.description}</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {batch.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-3 rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3"
                    >
                      <Check className="w-4 h-4 text-cyan flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span className="text-white/85 text-[14.5px]">{feature}</span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* Olympiad Subjects & Success Rate */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-5">
          <div
            data-reveal
            className="lg:col-span-7 rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-8 md:p-10"
          >
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-7 tracking-[-0.02em]">
              Olympiad subjects covered
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {olympiadSubjects.map((subject) => (
                <div
                  key={subject}
                  className="group flex items-center gap-3 rounded-xl border border-white/8 bg-white/[0.03] px-4 py-3.5 transition-colors duration-300 hover:bg-white/[0.08] hover:border-white/20"
                >
                  <Star
                    className="w-4 h-4 text-magenta transition-transform duration-500 group-hover:rotate-[72deg] group-hover:scale-110"
                    strokeWidth={1.75}
                  />
                  <span className="text-[14.5px] font-medium text-white/85">{subject}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            data-reveal
            className="lg:col-span-5 relative rounded-[1.75rem] bg-paper text-ink p-8 md:p-10 overflow-hidden flex flex-col sm:flex-row lg:flex-col xl:flex-row items-start sm:items-center lg:items-start xl:items-center gap-8"
          >
            <div className="relative w-40 h-40 md:w-44 md:h-44 shrink-0">
              <svg ref={ringRef} viewBox="0 0 200 200" className="w-full h-full -rotate-90">
                <defs>
                  <linearGradient id="ring-grad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#d65be0" />
                    <stop offset="50%" stopColor="#8e5be3" />
                    <stop offset="100%" stopColor="#5fd8f2" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r={RING_R} fill="none" stroke="rgba(12,10,29,0.08)" strokeWidth="12" />
                <circle
                  data-arc
                  cx="100"
                  cy="100"
                  r={RING_R}
                  fill="none"
                  stroke="url(#ring-grad)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeDasharray={RING_C}
                  strokeDashoffset={RING_C * 0.05}
                />
              </svg>
              <div className="absolute inset-0 grid place-items-center">
                <span
                  data-count="95%"
                  aria-label="95%"
                  className="font-display text-5xl font-semibold tracking-[-0.04em]"
                >
                  95%
                </span>
              </div>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 bg-ink text-white/90 px-4 py-1.5 rounded-full mb-4">
                <Trophy className="w-4 h-4" strokeWidth={1.75} />
                <span className="text-sm">Success Rate</span>
              </div>
              <p className="text-slate-ink leading-relaxed">
                Our scholarship and olympiad students consistently rank among
                the top performers in their exam cohorts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
