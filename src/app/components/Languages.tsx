import { Globe, MessageCircle, BookOpen, Users } from 'lucide-react';
import { Eyebrow, h2Class } from './Section';

export function Languages() {
  const languages = [
    {
      name: 'German',
      flag: '🇩🇪',
      levels: 'A1 to C2',
      description: 'The language of engineering and innovation — valuable for academic and career opportunities in Europe.',
      features: ['Native-level instructors', 'Certification prep', 'Interactive sessions'],
      tint: 'from-[#d65be0]/15',
    },
    {
      name: 'Japanese',
      flag: '🇯🇵',
      levels: 'N5 to N1',
      description: 'The language of technology and culture, opening doors to Japan and global corporations.',
      features: ['JLPT preparation', 'Cultural context', 'Conversation practice'],
      tint: 'from-[#8e5be3]/15',
    },
    {
      name: 'French',
      flag: '🇫🇷',
      levels: 'A1 to C2',
      description: 'A language of diplomacy and international business, useful across careers and universities.',
      features: ['DELF/DALF prep', 'Grammar mastery', 'Fluency-focused practice'],
      tint: 'from-[#5fd8f2]/20',
    },
  ];

  const benefits = [
    { icon: MessageCircle, title: 'Communication', description: 'Connect with people worldwide' },
    { icon: Globe, title: 'Career Growth', description: 'Stand out in the global job market' },
    { icon: BookOpen, title: 'Academic Edge', description: 'Unlock study-abroad opportunities' },
    { icon: Users, title: 'Cultural Understanding', description: 'Broaden your perspective' },
  ];

  return (
    <section id="languages" className="relative bg-paper py-24 md:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14 md:mb-20">
          <div className="max-w-3xl">
            <Eyebrow>Go Global</Eyebrow>
            <h2 data-split className={`${h2Class} mt-6 text-ink`}>
              International <span className="font-serif-i text-grad pr-1">language</span> courses
            </h2>
          </div>
          <p data-reveal className="text-lg md:text-xl text-slate-ink max-w-md leading-relaxed lg:pb-2">
            German, Japanese, and French — taught by expert instructors, from first words to fluency.
          </p>
        </div>

        {/* Languages Grid */}
        <div className="grid md:grid-cols-3 gap-4 md:gap-5 mb-5">
          {languages.map((language) => (
            <article
              key={language.name}
              data-reveal
              data-spotlight
              className="spotlight lift grad-border group relative rounded-[1.75rem] bg-white border border-ink/8 overflow-hidden hover:shadow-[0_30px_60px_-30px_rgba(76,45,140,0.35)]"
            >
              <div className={`relative p-7 md:p-8 pb-6 bg-gradient-to-br ${language.tint} to-transparent`}>
                <div className="flex items-start justify-between">
                  <div className="text-5xl md:text-6xl transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:-rotate-6 origin-bottom-left">
                    {language.flag}
                  </div>
                  <span className="text-xs font-medium tracking-wide text-ink/70 bg-white/80 border border-ink/8 rounded-full px-3 py-1">
                    {language.levels}
                  </span>
                </div>
                <h3 className="mt-8 font-display text-[clamp(2.25rem,4vw,3rem)] font-semibold tracking-[-0.045em] leading-none text-ink">
                  {language.name}
                </h3>
              </div>

              <div className="p-7 md:p-8 pt-5">
                <p className="text-slate-ink mb-6 leading-relaxed text-[15.5px]">{language.description}</p>
                <div className="space-y-2.5 pt-5 border-t border-ink/8">
                  {language.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-[14.5px] text-ink/80">
                      <span className="w-1.5 h-1.5 rotate-45 bg-grad" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Benefits Section */}
        <div data-reveal className="rounded-[1.75rem] bg-white border border-ink/8 p-8 md:p-12">
          <h3 className="font-display text-2xl md:text-3xl font-semibold mb-10 text-ink tracking-[-0.03em]">
            Why learn a foreign language?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-ink/10">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="group lg:px-8 first:lg:pl-0 last:lg:pr-0">
                  <div className="w-12 h-12 rounded-2xl bg-paper grid place-items-center mb-5 transition-colors duration-500 group-hover:bg-ink">
                    <Icon className="w-5 h-5 text-violet transition-colors duration-500 group-hover:text-cyan" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-display text-lg font-semibold mb-1.5 text-ink tracking-[-0.01em]">{benefit.title}</h4>
                  <p className="text-[15px] text-slate-ink">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
