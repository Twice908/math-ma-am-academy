import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';

export function Stats() {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Students' },
    { icon: Award, number: '95%', label: 'Success Rate' },
    { icon: BookOpen, number: '10+', label: 'Expert Teachers' },
    { icon: TrendingUp, number: '1–12', label: 'Standards Covered' },
  ];

  return (
    <section className="bg-paper pb-24 md:pb-36">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          data-reveal
          className="relative rounded-[1.75rem] md:rounded-[2.5rem] bg-ink text-white overflow-hidden grain"
        >
          <div aria-hidden className="absolute inset-0 grid-dark opacity-60" />
          <div aria-hidden className="absolute -left-20 top-0 w-[30rem] h-[20rem] rounded-full bg-magenta/20 blur-[120px]" />
          <div aria-hidden className="absolute -right-20 bottom-0 w-[30rem] h-[20rem] rounded-full bg-cyan/15 blur-[120px]" />

          <div className="relative px-7 py-14 sm:px-12 md:px-16 md:py-20">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12 md:mb-16">
              <h2 data-split className="font-display text-[clamp(2rem,4.2vw,3.5rem)] font-semibold tracking-[-0.04em] leading-[1] max-w-xl">
                Our track record, in numbers
              </h2>
              <p data-reveal className="text-lg text-white/55 max-w-sm">
                What we've built with students and families since day one
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-white/10">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={stat.label}
                    data-reveal
                    className={`group pt-8 pb-2 ${i % 2 === 1 ? 'pl-5 sm:pl-8 border-l border-white/10' : 'lg:pl-0'} ${
                      i === 2 ? 'lg:pl-8 lg:border-l lg:border-white/10' : ''
                    } ${i > 1 ? 'mt-6 lg:mt-0 pt-8 border-t lg:border-t-0 border-white/10' : ''}`}
                  >
                    <Icon className="w-5 h-5 text-white/40 mb-6 transition-colors duration-500 group-hover:text-cyan" strokeWidth={1.75} />
                    <div
                      data-count={stat.number}
                      aria-label={stat.number}
                      className="font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold tracking-[-0.05em] leading-none text-grad pb-1"
                    >
                      {stat.number}
                    </div>
                    <div className="text-white/55 text-sm md:text-base mt-3">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
