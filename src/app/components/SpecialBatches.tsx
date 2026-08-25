import { Trophy, Star, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function SpecialBatches() {
  const batches = [
    {
      icon: Trophy,
      title: 'Scholarship Exams',
      standards: '4th & 7th Standard',
      description: 'Focused coaching for scholarship examinations, built around the actual exam pattern.',
      features: [
        'Full syllabus coverage',
        'Previous years\' question papers',
        'Timed mock tests',
        'Exam strategy sessions',
      ],
    },
    {
      icon: Star,
      title: 'Olympiad Preparation',
      standards: 'Standards 1–10',
      description: 'Structured preparation for Mathematics, Science, English, and more.',
      features: [
        'Subject-wise olympiad coaching',
        'Advanced problem-solving practice',
        'International-level question sets',
        'Regular timed assessments',
      ],
    },
  ];

  const olympiadSubjects = [
    'Mathematics Olympiad',
    'Science Olympiad',
    'English Olympiad',
    'Computer Olympiad',
    'General Knowledge Olympiad',
    'Cyber Olympiad',
  ];

  return (
    <section id="special-batches" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-[#f5f5f7] px-4 py-1.5 rounded-full mb-5">
            <span className="text-sm text-[#1d1d1f]/70">Exclusive Programs</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-4 text-[#1d1d1f]">
            Special exam batches
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73]">
            Dedicated coaching for the exams that open doors — run separately from regular coursework.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-5 mb-6">
          {batches.map((batch, index) => {
            const Icon = batch.icon;
            return (
              <motion.div
                key={batch.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-[#f5f5f7] rounded-3xl p-8 md:p-9"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-white p-3.5 rounded-2xl shadow-sm">
                    <Icon className="w-7 h-7 text-[#0071e3]" strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-[#1d1d1f]">{batch.title}</h3>
                    <p className="text-[#6e6e73]">{batch.standards}</p>
                  </div>
                </div>

                <p className="text-[#6e6e73] mb-6 leading-relaxed">{batch.description}</p>

                <div className="space-y-3">
                  {batch.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                      <span className="text-[#1d1d1f]/80 text-[15px]">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Olympiad Subjects & Success Rate */}
        <div className="grid lg:grid-cols-2 gap-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.5 }}
            className="bg-[#f5f5f7] rounded-3xl p-8"
          >
            <h3 className="text-xl font-semibold mb-6 text-[#1d1d1f]">Olympiad subjects covered</h3>
            <div className="grid grid-cols-2 gap-3">
              {olympiadSubjects.map((subject) => (
                <div
                  key={subject}
                  className="bg-white p-4 rounded-xl shadow-sm"
                >
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-[#0071e3]" strokeWidth={1.75} />
                    <span className="text-sm font-medium text-[#1d1d1f]/80">{subject}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: 0.08 }}
            className="bg-[#1d1d1f] rounded-3xl p-8 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 px-4 py-1.5 rounded-full mb-5 w-fit">
              <Trophy className="w-4 h-4" strokeWidth={1.75} />
              <span className="text-sm">Success Rate</span>
            </div>
            <div className="text-5xl md:text-6xl font-semibold text-white tracking-[-0.02em] mb-3">95%</div>
            <p className="text-white/70 leading-relaxed">
              Our scholarship and olympiad students consistently rank among
              the top performers in their exam cohorts.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
