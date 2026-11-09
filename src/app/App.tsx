import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { ArrowRight } from 'lucide-react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Features } from './components/Features';
import { Classes } from './components/Classes';
import { SpecialBatches } from './components/SpecialBatches';
import { Languages } from './components/Languages';
import { TestPortal } from './components/TestPortal';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import {
  ScrollTrigger,
  initSmoothScroll,
  scrollToId,
  setupGlobalMotion,
} from './lib/motion';

export default function App() {
  const root = useRef<HTMLDivElement>(null);
  const [showMobileCta, setShowMobileCta] = useState(false);

  useEffect(() => initSmoothScroll(), []);

  // Route in-page anchor links (#section) through the smooth scroller.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
      const id = a?.getAttribute('href')?.slice(1);
      if (!id || !document.getElementById(id)) return;
      e.preventDefault();
      scrollToId(id);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Cursor-following glow on [data-spotlight] cards.
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>('[data-spotlight]');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    document.addEventListener('pointermove', onMove, { passive: true });
    return () => document.removeEventListener('pointermove', onMove);
  }, []);

  useGSAP(
    () => {
      setupGlobalMotion(root.current!);

      // Mobile "Enroll" bar: visible after the hero, hidden once the form is on screen.
      let pastHero = false;
      let atContact = false;
      const sync = () => setShowMobileCta(pastHero && !atContact);
      ScrollTrigger.create({
        trigger: '#top',
        start: 'bottom 30%',
        onEnter: () => ((pastHero = true), sync()),
        onLeaveBack: () => ((pastHero = false), sync()),
      });
      ScrollTrigger.create({
        trigger: '#contact',
        start: 'top 85%',
        end: 'bottom top',
        onToggle: (self) => ((atContact = self.isActive), sync()),
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
    },
    { scope: root },
  );

  return (
    <div ref={root} className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Classes />
        <SpecialBatches />
        <Languages />
        <TestPortal />
        <Stats />
        <Contact />
      </main>
      <Footer />

      {/* Mobile sticky enroll bar */}
      <div
        className={`md:hidden fixed inset-x-0 bottom-0 z-40 px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showMobileCta ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => scrollToId('contact')}
          className="btn-primary w-full rounded-full py-3.5 text-[16px]"
        >
          Enroll Now
          <ArrowRight className="btn-arrow w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
