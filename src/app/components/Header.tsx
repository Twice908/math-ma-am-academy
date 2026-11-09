import { ArrowUpRight, FlaskConical, Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useGSAP } from '@gsap/react';
import { gsap, ScrollTrigger, getLenis, scrollToId } from '../lib/motion';
import logoHW from '../components/images/logoHW.png';

const navItems = [
  { id: 'features', label: 'Why Us' },
  { id: 'classes', label: 'Classes' },
  { id: 'special-batches', label: 'Special Batches' },
  { id: 'languages', label: 'Languages' },
  { id: 'tests', label: 'Test Portal' },
];

const TESTS_URL = 'https://twice908.github.io/Math-ma-am-test-portal/';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [vrModalOpen, setVrModalOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const openRef = useRef(false);
  openRef.current = mobileMenuOpen;

  useGSAP(() => {
    gsap.from(pillRef.current, { y: -40, autoAlpha: 0, duration: 1.1, ease: 'expo.out', delay: 0.1 });

    gsap.to(progressRef.current, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: { start: 0, end: 'max', scrub: 0.3 },
    });

    // Tuck the header away while reading down, bring it back on any upward scroll.
    const setY = gsap.quickTo(headerRef.current, 'yPercent', { duration: 0.5, ease: 'power3.out' });
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate: (self) => {
        if (openRef.current || self.scroll() < 200) return setY(0);
        setY(self.direction === 1 ? -150 : 0);
      },
    });
  });

  useEffect(() => {
    const lenis = getLenis();
    if (mobileMenuOpen) {
      lenis?.stop();
      document.body.style.overflow = 'hidden';
    } else {
      lenis?.start();
      document.body.style.overflow = '';
    }
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    requestAnimationFrame(() => scrollToId(id));
  };

  const goToTests = () => {
    window.open(TESTS_URL, '_blank', 'noopener,noreferrer');
    setMobileMenuOpen(false);
  };

  return (
    <>
      <div className="fixed top-0 inset-x-0 h-[2px] z-[70] pointer-events-none">
        <div ref={progressRef} className="h-full bg-grad origin-left scale-x-0" />
      </div>

      <header ref={headerRef} className="fixed top-0 inset-x-0 z-[60] px-3 sm:px-5 pt-3 sm:pt-4">
        <nav
          ref={pillRef}
          className="max-w-7xl mx-auto flex items-center justify-between gap-4 h-[60px] pl-4 pr-2 sm:pl-5 rounded-full bg-ink/75 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_-12px_rgba(12,10,29,0.55)]"
        >
          <a href="#top" className="shrink-0" aria-label="Math ma'am Academy, back to top">
            <img src={logoHW} alt="Math ma'am Academy" className="h-8 sm:h-9 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="nav-link px-4 py-2 text-[14.5px] text-white/70 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={goToTests}
              className="nav-link px-4 py-2 text-[14.5px] text-white/70 hover:text-white transition-colors inline-flex items-center gap-1"
            >
              Tests
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </button>
            <button
              onClick={() => setVrModalOpen(true)}
              className="nav-link px-4 py-2 text-[14.5px] text-cyan/80 hover:text-cyan transition-colors inline-flex items-center gap-1.5"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              VR Lab
            </button>
          </div>

          <button
            data-magnetic
            onClick={() => scrollToSection('contact')}
            className="hidden md:inline-flex btn-primary rounded-full px-5 py-2.5 text-[14.5px]"
          >
            Enroll Now
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-11 h-11 rounded-full grid place-items-center text-white bg-white/10 active:scale-95 transition-transform"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </header>


      {/* VR Lab Coming Soon Modal */}
      <AnimatePresence>
        {vrModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-6"
            onClick={() => setVrModalOpen(false)}
          >
            <div className="absolute inset-0 bg-ink/80 backdrop-blur-xl" />
            <motion.div
              initial={{ scale: 0.88, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.88, y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="relative max-w-md w-full rounded-[2rem] bg-ink border border-white/15 overflow-hidden grain p-10 text-center shadow-[0_40px_120px_-30px_rgba(142,91,227,0.6)]"
              onClick={(e) => e.stopPropagation()}
            >
              <div aria-hidden className="absolute inset-0 grid-dark opacity-60" />
              <div aria-hidden className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-violet/40 blur-[80px]" />
              <div className="relative">
                <div className="w-20 h-20 rounded-3xl bg-grad mx-auto mb-6 grid place-items-center shadow-[0_20px_50px_-15px_rgba(214,91,224,0.7)]">
                  <FlaskConical className="w-9 h-9 text-white" strokeWidth={1.5} />
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-4 py-1.5 mb-6">
                  <span className="relative flex w-2 h-2">
                    <span className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-60" />
                    <span className="relative w-2 h-2 rounded-full bg-cyan" />
                  </span>
                  <span className="text-sm text-cyan font-medium">Coming Soon</span>
                </div>
                <h2 className="font-display text-4xl font-semibold tracking-[-0.04em] text-white mb-4">
                  VR Lab
                </h2>
                <p className="text-white/60 leading-relaxed mb-8">
                  An immersive virtual reality learning experience is on its way. Students will be able to explore concepts in 3D — from science experiments to language environments.
                </p>
                <button
                  onClick={() => setVrModalOpen(false)}
                  className="btn-ghost rounded-full px-8 py-3 text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 44px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 44px)' }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
            className="md:hidden fixed inset-0 z-50 bg-ink text-white grain overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-violet/40 blur-[100px]" />
            <div className="absolute bottom-0 -left-24 w-72 h-72 rounded-full bg-magenta/25 blur-[100px]" />
            <div className="relative h-full flex flex-col justify-between px-6 pt-28 pb-10">
              <div className="flex flex-col">
                {[...navItems, { id: '__tests', label: 'Tests' }, { id: '__vr', label: 'VR Lab' }].map((item, i) => (
                  <motion.button
                    key={item.id}
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0, transition: { duration: 0.2 } }}
                    transition={{ delay: 0.15 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    onClick={() => {
                      if (item.id === '__tests') goToTests();
                      else if (item.id === '__vr') { setMobileMenuOpen(false); setVrModalOpen(true); }
                      else scrollToSection(item.id);
                    }}
                    className={`flex items-baseline gap-4 text-left py-3 border-b border-white/10 ${item.id === '__vr' ? 'text-cyan' : ''}`}
                  >
                    <span className="text-xs text-white/40 tabular-nums">0{i + 1}</span>
                    <span className="font-display text-4xl font-semibold tracking-[-0.03em]">
                      {item.label}
                    </span>
                    {item.id === '__tests' && <ArrowUpRight className="w-5 h-5 text-white/50" />}
                    {item.id === '__vr' && <FlaskConical className="w-5 h-5 text-cyan/70 self-center" />}
                  </motion.button>
                ))}
              </div>
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => scrollToSection('contact')}
                className="btn-primary rounded-full py-4 text-[17px]"
              >
                Enroll Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
