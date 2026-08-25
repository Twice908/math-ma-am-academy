import { Users, Award, BookOpen, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Stats() {
  const stats = [
    { icon: Users, number: '500+', label: 'Happy Students' },
    { icon: Award, number: '95%', label: 'Success Rate' },
    { icon: BookOpen, number: '10+', label: 'Expert Teachers' },
    { icon: TrendingUp, number: '1–12', label: 'Standards Covered' },
  ];

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1d1d1f] rounded-3xl p-10 md:p-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em] mb-3">
              Our track record, in numbers
            </h2>
            <p className="text-lg text-white/60">
              What we've built with students and families since day one
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ type: 'spring', bounce: 0, duration: 0.5, delay: index * 0.06 }}
                  className="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                >
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <div className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.02em] mb-1">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
