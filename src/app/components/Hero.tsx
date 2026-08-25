import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToClasses = () => {
    const element = document.getElementById('classes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '1st–12th', label: 'Every standard' },
    { value: '3', label: 'Foreign languages' },
    { value: '95%', label: 'Exam success rate' },
  ];

  return (
    <section className="pt-32 pb-20 md:pt-44 md:pb-28 bg-[#fbfbfd]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-black/5 shadow-sm mb-6"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#0071e3]" />
          <span className="text-sm text-[#1d1d1f]/70">Now enrolling for Standards 1–12</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6, delay: 0.05 }}
          className="text-5xl md:text-7xl font-semibold tracking-[-0.03em] leading-[1.03] text-[#1d1d1f]"
        >
          Learning that
          <br />
          <span className="text-[#0071e3]">actually clicks.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6, delay: 0.1 }}
          className="mt-6 text-xl md:text-2xl text-[#6e6e73] max-w-2xl mx-auto leading-relaxed"
        >
          Math ma'am Academy pairs young, dynamic teachers with AI-assisted
          learning tools — for every subject, Class 1 through 12.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            onClick={scrollToContact}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="bg-[#0071e3] text-white px-7 py-3.5 rounded-full hover:bg-[#0077ed] transition-colors flex items-center justify-center gap-2 group text-[17px]"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
          <motion.button
            onClick={scrollToClasses}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="text-[#0071e3] px-7 py-3.5 rounded-full hover:bg-black/5 transition-colors text-[17px]"
          >
            Explore Classes →
          </motion.button>
        </motion.div>

        {/* Stat strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', bounce: 0, duration: 0.6, delay: 0.25 }}
          className="mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-3xl mx-auto"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-black/5 py-6 px-3 shadow-sm"
            >
              <div className="text-2xl md:text-3xl font-semibold tracking-tight text-[#1d1d1f]">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-[#6e6e73] mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
