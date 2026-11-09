import { Facebook, Twitter, Instagram, Linkedin, Youtube, ArrowUp } from 'lucide-react';
import logoVW from '../components/images/LogoVW.png';

const socials = [
  { icon: Facebook, label: 'Facebook' },
  { icon: Twitter, label: 'Twitter' },
  { icon: Instagram, label: 'Instagram' },
  { icon: Linkedin, label: 'LinkedIn' },
  { icon: Youtube, label: 'YouTube' },
];

const linkClass =
  'text-white/50 hover:text-white transition-colors text-[15px] inline-block hover:translate-x-1 duration-300';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#08071a] text-white overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px bg-white/10" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-16 md:pt-20 pb-8 md:pb-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-12 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="mb-4">
              <img src={logoVW} alt="Math ma'am Academy" className="h-24 w-auto -ml-2" />
            </div>
            <p className="text-white/50 mb-6 text-[15px] leading-relaxed max-w-xs">
              Young, dynamic teachers with modern methods — for every subject and standard, 1–12.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-10 h-10 grid place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white hover:text-ink hover:border-white transition-colors duration-300"
                >
                  <Icon className="w-4 h-4" strokeWidth={1.75} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-[12px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#features" className={linkClass}>Why Us</a></li>
              <li><a href="#classes" className={linkClass}>Classes</a></li>
              <li><a href="#special-batches" className={linkClass}>Special Batches</a></li>
              <li><a href="#languages" className={linkClass}>Languages</a></li>
              <li><a href="#tests" className={linkClass}>Test Portal</a></li>
              <li><a href="#contact" className={linkClass}>Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <h3 className="text-[12px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5">Programs</h3>
            <ul className="space-y-3">
              <li className="text-white/50 text-[15px]">Primary Classes (1–5)</li>
              <li className="text-white/50 text-[15px]">Middle School (6–8)</li>
              <li className="text-white/50 text-[15px]">High School (9–10)</li>
              <li className="text-white/50 text-[15px]">Senior Secondary (11–12)</li>
              <li className="text-white/50 text-[15px]">Scholarship Exams</li>
              <li className="text-white/50 text-[15px]">Olympiad Preparation</li>
            </ul>
          </div>

          {/* Languages */}
          <div className="lg:col-span-3">
            <h3 className="text-[12px] uppercase tracking-[0.2em] text-white/40 font-medium mb-5">Languages Offered</h3>
            <ul className="space-y-3">
              <li className="text-white/50 text-[15px]">🇩🇪 German (A1–C2)</li>
              <li className="text-white/50 text-[15px]">🇯🇵 Japanese (N5–N1)</li>
              <li className="text-white/50 text-[15px]">🇫🇷 French (A1–C2)</li>
            </ul>
            <div className="mt-8">
              <h4 className="text-[12px] uppercase tracking-[0.2em] text-white/40 font-medium mb-3">Contact</h4>
              <a href="tel:+919011012814" className="block text-white/60 hover:text-white text-sm transition-colors">+91 90110 12814</a>
              <a href="mailto:mathmaamacademy@gmail.com" className="block text-white/60 hover:text-white text-sm transition-colors mt-1">mathmaamacademy@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Wordmark */}
        <div aria-hidden className="relative select-none pointer-events-none -mx-1">
          <div
            data-reveal
            className="font-display font-bold text-[clamp(4rem,17.5vw,16rem)] leading-[0.8] tracking-[-0.06em] text-grad opacity-90 whitespace-nowrap"
          >
            Math ma'am
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5">
            <p className="text-white/40 text-sm">
              © {currentYear} Math ma'am Academy. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">Refund Policy</a>
              <a
                href="#top"
                aria-label="Back to top"
                className="w-10 h-10 grid place-items-center rounded-full border border-white/15 text-white/70 hover:bg-white hover:text-ink transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
