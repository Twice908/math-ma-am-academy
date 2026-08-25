import { Brain, Users, Sparkles, Target, BookOpen, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function Features() {
  const features = [
    {
      icon: Brain,
      title: 'AI-Assisted Learning',
      description: 'Practice sets and progress tracking adapt to each student, so revision time goes where it matters most.',
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

  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-[-0.02em] mb-4 text-[#1d1d1f]">
            Why families choose Math ma'am Academy
          </h2>
          <p className="text-lg md:text-xl text-[#6e6e73]">
            The blend of attentive teaching and smart tools that gets results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: (index % 3) * 0.06 }}
                whileHover={{ y: -4 }}
                className="bg-[#f5f5f7] rounded-2xl p-7 hover:bg-[#eef0f3] transition-colors"
              >
                <div className="inline-flex p-3 rounded-xl bg-white shadow-sm mb-5">
                  <Icon className="w-5 h-5 text-[#0071e3]" strokeWidth={1.75} />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-[#1d1d1f]">{feature.title}</h3>
                <p className="text-[#6e6e73] leading-relaxed text-[15px]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          className="mt-6 bg-[#1d1d1f] rounded-3xl p-10 md:p-14 text-white text-center"
        >
          <h3 className="text-2xl md:text-4xl font-semibold tracking-[-0.02em] mb-4">
            Teaching, sharpened by AI — never replaced by it.
          </h3>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Our platform flags each student's weak areas and adjusts practice
            accordingly, so teachers spend their time where it counts: with the student.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
