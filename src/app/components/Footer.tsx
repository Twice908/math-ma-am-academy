import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logoVW from '../components/images/LogoVW.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logoVW} alt="Math ma'am Academy" className="h-24 w-auto" />
            </div>
            <p className="text-white/50 mb-5 text-[15px] leading-relaxed">
              AI-assisted learning and modern teaching methods for Standards 1–12.
            </p>
            <div className="flex gap-3">
              <a href="#" aria-label="Facebook" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a href="#" aria-label="Twitter" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a href="#" aria-label="Instagram" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a href="#" aria-label="LinkedIn" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Linkedin className="w-4 h-4" strokeWidth={1.75} />
              </a>
              <a href="#" aria-label="YouTube" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Youtube className="w-4 h-4" strokeWidth={1.75} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-[15px] mb-4">Quick Links</h3>
            <ul className="space-y-2.5">
              <li>
                <a href="#features" className="text-white/50 hover:text-white transition-colors text-[15px]">Why Us</a>
              </li>
              <li>
                <a href="#classes" className="text-white/50 hover:text-white transition-colors text-[15px]">Classes</a>
              </li>
              <li>
                <a href="#special-batches" className="text-white/50 hover:text-white transition-colors text-[15px]">Special Batches</a>
              </li>
              <li>
                <a href="#languages" className="text-white/50 hover:text-white transition-colors text-[15px]">Languages</a>
              </li>
              <li>
                <a href="#contact" className="text-white/50 hover:text-white transition-colors text-[15px]">Contact</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-[15px] mb-4">Programs</h3>
            <ul className="space-y-2.5">
              <li className="text-white/50 text-[15px]">Primary Classes (1–5)</li>
              <li className="text-white/50 text-[15px]">Middle School (6–8)</li>
              <li className="text-white/50 text-[15px]">High School (9–10)</li>
              <li className="text-white/50 text-[15px]">Senior Secondary (11–12)</li>
              <li className="text-white/50 text-[15px]">Scholarship Exams</li>
              <li className="text-white/50 text-[15px]">Olympiad Preparation</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-semibold text-[15px] mb-4">Languages Offered</h3>
            <ul className="space-y-2.5">
              <li className="text-white/50 text-[15px]">🇩🇪 German (A1–C2)</li>
              <li className="text-white/50 text-[15px]">🇯🇵 Japanese (N5–N1)</li>
              <li className="text-white/50 text-[15px]">🇫🇷 French (A1–C2)</li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2 text-[15px]">Contact</h4>
              <p className="text-white/50 text-sm">+91 90110 12814</p>
              <p className="text-white/50 text-sm">mathmaamacademy@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              © {currentYear} Math ma'am Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
