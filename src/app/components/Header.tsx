import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoHB from '../components/images/logoHB.png';

const navItems = [
  { id: 'features', label: 'Why Us' },
  { id: 'classes', label: 'Classes' },
  { id: 'special-batches', label: 'Special Batches' },
  { id: 'languages', label: 'Languages' },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const goToTests = () => {
    window.open('https://twice908.github.io/Math-ma-am-test-portal/', '_blank', 'noopener,noreferrer');
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-50 overflow-x-hidden bg-white/80 backdrop-blur-xl border-b border-black/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          <div>
            <img src={logoHB} alt="Math ma'am Academy" className="h-11 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-shrink-0">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={goToTests}
              className="text-[15px] text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors"
            >
              Tests
            </button>
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileTap={{ scale: 0.96 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              className="bg-[#0071e3] text-white text-[15px] px-5 py-2 rounded-full hover:bg-[#0077ed] transition-colors"
            >
              Enroll Now
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
            className="md:hidden p-2 text-[#1d1d1f] flex-shrink-0"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ type: 'spring', bounce: 0, duration: 0.35 }}
              className="md:hidden overflow-hidden border-t border-black/5"
            >
              <div className="flex flex-col gap-1 py-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors text-left px-1 py-2"
                  >
                    {item.label}
                  </button>
                ))}
                <button
                  onClick={goToTests}
                  className="text-[#1d1d1f]/80 hover:text-[#1d1d1f] transition-colors text-left px-1 py-2"
                >
                  Tests
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="mt-2 bg-[#0071e3] text-white px-5 py-2.5 rounded-full hover:bg-[#0077ed] transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
