import { BookOpen, Microscope, Calculator, Beaker, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section id="classes" className="py-20 md:py-28 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-4 text-[#1d1d1f]">
            Classes for every standard
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73]">
            Complete coverage from Class 1 to Class 12, across State Board, CBSE, and ICSE.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-6">
          {classCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: (index % 2) * 0.08 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-3xl overflow-hidden border border-black/5 shadow-sm"
              >
                <div className="p-7">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="bg-[#f5f5f7] p-3 rounded-xl">
                      <Icon className="w-6 h-6 text-[#0071e3]" strokeWidth={1.75} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1d1d1f]">{category.title}</h3>
                      <p className="text-[#6e6e73] text-sm">{category.standards}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="bg-[#f5f5f7] px-3.5 py-1.5 rounded-full text-sm text-[#1d1d1f]/80"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All Subjects Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          className="bg-[#1d1d1f] rounded-3xl p-10 md:p-14"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 text-white px-4 py-1.5 rounded-full mb-5">
              <span className="text-sm">Complete Coverage</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white tracking-[-0.02em]">
              No student left behind
            </h3>
            <p className="text-white/70 leading-relaxed mb-8">
              From foundational learning in the primary years to advanced
              stream subjects in senior secondary, we provide expert
              instruction across every subject we teach.
            </p>
            <ul className="grid sm:grid-cols-2 gap-4">
              {commitments.map((item) => (
                <li key={item} className="flex items-start gap-3 text-white/90 text-[15px]">
                  <CheckCircle2 className="w-5 h-5 text-[#0071e3] flex-shrink-0 mt-0.5" strokeWidth={1.75} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
