import { BookOpen, Microscope, Calculator, Beaker, Check } from 'lucide-react';
import { Eyebrow, h2Class } from './Section';
import { OPERATORS } from './Operators';

export function Classes() {
  const classCategories = [
    {
      title: 'Primary Classes',
      standards: 'Standards 1–5',
      icon: BookOpen,
      subjects: ['English', 'Mathematics', 'Science', 'Social Studies', 'Hindi', 'EVS'],
    },
    {
      title: 'Middle School',
      standards: 'Standards 6–8',
      icon: Microscope,
      subjects: ['Mathematics', 'Science', 'English', 'Social Science', 'Hindi', 'Sanskrit'],
    },
    {
      title: 'High School',
      standards: 'Standards 9–10',
      icon: Calculator,
      subjects: ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 'Social Science'],
    },
    {
      title: 'Senior Secondary',
      standards: 'Standards 11–12',
      icon: Beaker,
      subjects: ['PCM', 'PCB', 'Commerce', 'Arts', 'Computer Science', 'Economics'],
    },
  ];

  const commitments = [
    'Individual attention to every student',
    'Regular assessments and progress tracking',
    'Ongoing parent-teacher communication',
    'Dedicated doubt-clearing sessions',
  ];

  return (
    <section id="classes" className="relative bg-white py-24 md:py-36 overflow-hidden">
      <div aria-hidden className="absolute inset-0 grid-light" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-3xl">
            <Eyebrow>Classes</Eyebrow>
            <h2 data-split className={`${h2Class} mt-6 text-ink`}>
              Classes for <span className="font-serif-i text-grad pr-1">every</span> standard
            </h2>
          </div>
          <p data-reveal className="text-lg md:text-xl text-slate-ink max-w-md leading-relaxed lg:pb-2">
            Complete coverage from Class 1 to Class 12, across State Board, CBSE, and ICSE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-5 mb-5">
          {classCategories.map((category, index) => {
            const Icon = category.icon;
            const range = category.standards.replace('Standards ', '');
            const op = OPERATORS[index];
            return (
              <article
                key={category.title}
                data-reveal
                data-spotlight
                className="spotlight lift grad-border group relative rounded-[1.75rem] bg-paper border border-ink/8 p-7 md:p-9 overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(76,45,140,0.35)]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-ink grid place-items-center transition-transform duration-500 group-hover:rotate-[-8deg]">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-[-0.02em] text-ink">
                        {category.title}
                      </h3>
                      <p className="text-slate-ink text-sm">{category.standards}</p>
                    </div>
                  </div>
                  <span
                    aria-hidden
                    className={`${op.bg} w-9 h-9 shrink-0 rotate-45 rounded-[22%] grid place-items-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rotate-[225deg]`}
                  >
                    <span className="-rotate-45 text-white font-display font-bold text-lg leading-none">
                      {op.sym}
                    </span>
                  </span>
                </div>

                <div
                  aria-hidden
                  className="font-display font-bold text-[clamp(4.5rem,10vw,8rem)] leading-[0.85] tracking-[-0.06em] outline-text my-8 md:my-10 transition-colors duration-700 group-hover:text-ink/[0.06]"
                >
                  {range}
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="bg-white border border-ink/8 px-3.5 py-1.5 rounded-full text-sm text-ink/80"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        {/* All Subjects Banner */}
        <div
          data-reveal
          className="relative rounded-[1.75rem] md:rounded-[2.5rem] bg-ink text-white overflow-hidden grain"
        >
          <div aria-hidden className="absolute -right-20 -bottom-24 w-[28rem] h-[28rem] rounded-full bg-cyan/20 blur-[110px]" />
          <div aria-hidden className="absolute right-[8%] top-1/2 -translate-y-1/2 hidden lg:grid grid-cols-2 gap-3 rotate-45 opacity-90">
            {OPERATORS.map((op) => (
              <span key={op.label} data-parallax="0.25" className={`${op.bg} w-20 h-20 rounded-[22%] grid place-items-center`}>
                <span className="-rotate-45 font-display font-bold text-3xl">{op.sym}</span>
              </span>
            ))}
          </div>
          <div className="relative p-8 sm:p-12 md:p-16 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full mb-6">
              <span className="text-sm">Complete Coverage</span>
            </div>
            <h3 className="font-display text-[clamp(2rem,4vw,3.25rem)] font-semibold mb-5 tracking-[-0.035em] leading-[1]">
              No student left behind
            </h3>
            <p className="text-white/65 leading-relaxed mb-10 text-lg max-w-2xl">
              From foundational learning in the primary years to advanced
              stream subjects in senior secondary, we provide expert
              instruction across every subject we teach.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90 text-[15.5px]">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-grad grid place-items-center shrink-0">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
