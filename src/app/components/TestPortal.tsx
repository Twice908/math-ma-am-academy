import { Clock, RotateCcw, Trophy, ChevronRight, ArrowUpRight, BookOpen, FlaskConical, GraduationCap } from 'lucide-react';
import { Eyebrow, h2Class } from './Section';
import { DiamondRow } from './Operators';

const TESTS_URL = 'https://twice908.github.io/Math-ma-am-test-portal/';

const features = [
  {
    icon: Clock,
    title: 'Timed Tests',
    description: 'Every test runs on a live countdown — just like the real exam — from 30 to 100 minutes depending on the paper.',
  },
  {
    icon: Trophy,
    title: 'Instant Self-Scoring',
    description: 'Submit and see your result immediately. No waiting — scores, correct answers, and subject breakdowns appear on the spot.',
  },
  {
    icon: RotateCcw,
    title: 'Free to Retake',
    description: 'Students can attempt each test as many times as they need. Practice makes perfect, so there\'s no limit on retakes.',
  },
  {
    icon: BookOpen,
    title: 'All Boards & Standards',
    description: 'Maharashtra State Board, CBSE, ICSE — from LKG through Std 12, with stream splits (Science / Commerce / Arts) for 11th and 12th.',
  },
  {
    icon: FlaskConical,
    title: 'Scholarship & Olympiad Papers',
    description: 'Scholarship (Std 4 & 7), Homi Bhabha (Std 6 & 9), IMO, ISO, IEO and more — full papers built around the actual exam pattern.',
  },
  {
    icon: GraduationCap,
    title: 'Topic-wise Practice',
    description: 'Short, focused tests by chapter or topic so students can zero in on exactly what they need to revise.',
  },
];

const examCategories = [
  { label: 'Scholarship Exam', sub: 'Std 4 & 7', color: 'from-magenta/20' },
  { label: 'Homi Bhabha', sub: 'Std 6 & 9', color: 'from-violet/20' },
  { label: 'IMO / ISO / IEO', sub: 'Olympiads', color: 'from-cyan/15' },
  { label: 'Maharashtra Board', sub: 'Std 1–12', color: 'from-magenta/15' },
  { label: 'CBSE', sub: 'Std 1–12', color: 'from-violet/15' },
  { label: 'ICSE / ISC', sub: 'Std 1–12', color: 'from-cyan/10' },
];

export function TestPortal() {
  return (
    <section id="tests" className="relative bg-paper py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-light" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-3xl">
            <Eyebrow>Practice Portal</Eyebrow>
            <h2 data-split className={`${h2Class} mt-6 text-ink`}>
              A test portal built for <span className="font-serif-i text-grad pr-1">real</span> results
            </h2>
          </div>
          <p data-reveal className="text-lg md:text-xl text-slate-ink max-w-md leading-relaxed lg:pb-2">
            Timed, self-scoring practice tests — available 24/7, free to retake, and built around Maharashtra's actual exam patterns.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 mb-5">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                data-reveal
                data-spotlight
                className="spotlight lift grad-border group relative rounded-[1.75rem] bg-white border border-ink/8 p-7 md:p-8 hover:shadow-[0_30px_60px_-30px_rgba(76,45,140,0.25)]"
              >
                <div className="w-12 h-12 rounded-2xl bg-paper border border-ink/10 grid place-items-center mb-5 transition-all duration-500 group-hover:bg-ink group-hover:border-ink group-hover:-rotate-6">
                  <Icon className="w-5 h-5 text-violet transition-colors duration-500 group-hover:text-cyan" strokeWidth={1.75} />
                </div>
                <h3 className="font-display text-xl font-semibold tracking-[-0.02em] text-ink mb-2.5">
                  {feature.title}
                </h3>
                <p className="text-slate-ink text-[15px] leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Exam categories + CTA */}
        <div className="grid lg:grid-cols-12 gap-4 md:gap-5">
          {/* Categories */}
          <div data-reveal className="lg:col-span-7 rounded-[1.75rem] bg-white border border-ink/8 p-8 md:p-10">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-7 tracking-[-0.02em] text-ink">
              Exams covered in the portal
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {examCategories.map((cat) => (
                <div
                  key={cat.label}
                  className={`relative rounded-2xl bg-gradient-to-br ${cat.color} to-transparent border border-ink/8 px-5 py-4 overflow-hidden`}
                >
                  <p className="font-display font-semibold text-[15px] text-ink tracking-[-0.01em]">{cat.label}</p>
                  <p className="text-xs text-slate-ink mt-0.5">{cat.sub}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-slate-ink border-t border-ink/8 pt-5">
              More boards, subjects and standards are added regularly. Topic-wise tests and downloadable notes for select subjects are available too.
            </p>
          </div>

          {/* CTA card */}
          <div
            data-reveal
            className="lg:col-span-5 relative rounded-[1.75rem] bg-ink text-white p-8 md:p-10 overflow-hidden grain flex flex-col justify-between gap-8"
          >
            <div aria-hidden className="absolute inset-0 grid-dark opacity-60" />
            <div aria-hidden className="absolute -top-20 -right-20 w-60 h-60 rounded-full bg-violet/40 blur-[80px]" />

            <div className="relative">
              <DiamondRow size={12} className="mb-6" />
              <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-[-0.035em] mb-3">
                Try it now — it's free
              </h3>
              <p className="text-white/60 leading-relaxed">
                Access code: <span className="font-mono text-cyan font-semibold">Tree@bamboo</span>
                <br />
                Any username works. No sign-up required.
              </p>
            </div>

            <div className="relative flex flex-col gap-3">
              <a
                href={TESTS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary rounded-2xl px-7 py-4 text-[16px] justify-center"
              >
                Open Test Portal
                <ArrowUpRight className="btn-arrow w-4 h-4" />
              </a>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <ChevronRight className="w-4 h-4 text-white/30" />
                <span>Timed · Self-scoring · Free to retake</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
