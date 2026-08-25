import { Globe, MessageCircle, BookOpen, Users } from 'lucide-react';
import { motion } from 'motion/react';

export function Languages() {
  const languages = [
    {
      name: 'German',
      flag: '🇩🇪',
      levels: 'A1 to C2',
      description: 'The language of engineering and innovation — valuable for academic and career opportunities in Europe.',
      features: ['Native-level instructors', 'Certification prep', 'Interactive sessions'],
    },
    {
      name: 'Japanese',
      flag: '🇯🇵',
      levels: 'N5 to N1',
      description: 'The language of technology and culture, opening doors to Japan and global corporations.',
      features: ['JLPT preparation', 'Cultural context', 'Conversation practice'],
    },
    {
      name: 'French',
      flag: '🇫🇷',
      levels: 'A1 to C2',
      description: 'A language of diplomacy and international business, useful across careers and universities.',
      features: ['DELF/DALF prep', 'Grammar mastery', 'Fluency-focused practice'],
    },
  ];

  const benefits = [
    { icon: MessageCircle, title: 'Communication', description: 'Connect with people worldwide' },
    { icon: Globe, title: 'Career Growth', description: 'Stand out in the global job market' },
    { icon: BookOpen, title: 'Academic Edge', description: 'Unlock study-abroad opportunities' },
    { icon: Users, title: 'Cultural Understanding', description: 'Broaden your perspective' },
  ];

  return (
    <section id="languages" className="py-20 md:py-28 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm mb-5">
            <Globe className="w-4 h-4 text-[#0071e3]" strokeWidth={1.75} />
            <span className="text-sm text-[#1d1d1f]/70">Go Global</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-4 text-[#1d1d1f]">
            International language courses
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73]">
            German, Japanese, and French — taught by expert instructors, from first words to fluency.
          </p>
        </div>

        {/* Languages Grid */}
        <div className="grid md:grid-cols-3 gap-5 mb-6">
          {languages.map((language, index) => (
            <motion.div
              key={language.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="bg-white rounded-3xl overflow-hidden shadow-sm border border-black/5"
            >
              <div className="p-7 text-center border-b border-black/5">
                <div className="text-5xl mb-3">{language.flag}</div>
                <h3 className="text-xl font-semibold text-[#1d1d1f]">{language.name}</h3>
                <p className="text-[#6e6e73] text-sm">{language.levels}</p>
              </div>

              <div className="p-7">
                <p className="text-[#6e6e73] mb-5 leading-relaxed text-[15px]">{language.description}</p>
                <div className="space-y-2">
                  {language.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm text-[#1d1d1f]/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-black/5"
        >
          <h3 className="text-2xl font-semibold text-center mb-12 text-[#1d1d1f] tracking-[-0.01em]">
            Why learn a foreign language?
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div key={benefit.title} className="text-center">
                  <div className="bg-[#f5f5f7] w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-[#0071e3]" strokeWidth={1.75} />
                  </div>
                  <h4 className="font-semibold mb-1.5 text-[#1d1d1f]">{benefit.title}</h4>
                  <p className="text-sm text-[#6e6e73]">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
