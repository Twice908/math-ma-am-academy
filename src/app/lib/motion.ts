import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { useGSAP } from '@gsap/react';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);

export { gsap, ScrollTrigger, SplitText };

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lenis: Lenis | null = null;

export const getLenis = () => lenis;

/** Smooth scrolling, driven by GSAP's ticker so ScrollTrigger stays in sync. */
export function initSmoothScroll() {
  if (prefersReducedMotion()) return () => {};

  lenis = new Lenis({
    duration: 1.15,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  lenis.on('scroll', ScrollTrigger.update);
  const tick = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  return () => {
    gsap.ticker.remove(tick);
    lenis?.destroy();
    lenis = null;
  };
}

const HEADER_OFFSET = 88;

export function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: id === 'top' ? 0 : -HEADER_OFFSET, duration: 1.4, force: true });
  } else {
    const y = el.getBoundingClientRect().top + window.scrollY - (id === 'top' ? 0 : HEADER_OFFSET);
    window.scrollTo({ top: y, behavior: prefersReducedMotion() ? 'auto' : 'smooth' });
  }
}

/**
 * Site-wide, attribute-driven motion so sections stay declarative:
 *  data-split      → heading lines rise out of a mask
 *  data-reveal     → fade + rise, batched as they enter
 *  data-count      → number counts up (e.g. "500+", "95%")
 *  data-parallax   → gentle scroll parallax (value = strength)
 *  data-magnetic   → button drifts toward the cursor
 */
export function setupGlobalMotion(root: HTMLElement) {
  const mm = gsap.matchMedia();

  mm.add('(prefers-reduced-motion: no-preference)', () => {
    root.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
      SplitText.create(el, {
        type: 'lines',
        mask: 'lines',
        linesClass: 'split-line',
        autoSplit: true,
        onSplit: (self) =>
          gsap.from(self.lines, {
            yPercent: 115,
            duration: 1.25,
            ease: 'expo.out',
            stagger: 0.09,
            scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          }),
      });
    });

    const reveals = gsap.utils.toArray<HTMLElement>('[data-reveal]', root);
    gsap.set(reveals, { autoAlpha: 0, y: 40 });
    ScrollTrigger.batch(reveals, {
      start: 'top 92%',
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: 1.1,
          ease: 'expo.out',
          stagger: 0.08,
          overwrite: true,
        }),
    });

    root.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
      const m = (el.dataset.count || '').match(/^(\d+)(.*)$/);
      if (!m || /[–-]/.test(m[2])) return;
      const target = Number(m[1]);
      const suffix = m[2];
      const state = { v: 0 };
      el.textContent = `0${suffix}`;
      gsap.to(state, {
        v: target,
        duration: 2,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        onUpdate: () => {
          el.textContent = `${Math.round(state.v)}${suffix}`;
        },
      });
    });

    root.querySelectorAll<HTMLElement>('[data-parallax]').forEach((el) => {
      const strength = Number(el.dataset.parallax || 0.15);
      gsap.fromTo(
        el,
        { yPercent: strength * 50 },
        {
          yPercent: -strength * 50,
          ease: 'none',
          scrollTrigger: {
            trigger: el.closest('section') || el,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    });
  });

  mm.add('(prefers-reduced-motion: no-preference) and (pointer: fine)', () => {
    const cleanups = gsap.utils.toArray<HTMLElement>('[data-magnetic]', root).map((el) => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3' });
      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - r.left - r.width / 2) * 0.25);
        yTo((e.clientY - r.top - r.height / 2) * 0.35);
      };
      const leave = () => {
        xTo(0);
        yTo(0);
      };
      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      return () => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      };
    });
    return () => cleanups.forEach((c) => c());
  });

  return mm;
}
