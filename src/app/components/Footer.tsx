import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';
import logoVW from '../components/images/LogoVW.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img src={logoVW} alt="Math ma'am Academy" className="h-28 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              Empowering students with AI-powered education and modern teaching methods for a brighter future.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-white/20 p-2 rounded-lg transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#classes" className="text-gray-400 hover:text-white transition-colors">Classes</a>
              </li>
              <li>
                <a href="#special-batches" className="text-gray-400 hover:text-white transition-colors">Special Batches</a>
              </li>
              <li>
                <a href="#languages" className="text-gray-400 hover:text-white transition-colors">Languages</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Primary Classes (1-5)</li>
              <li className="text-gray-400">Middle School (6-8)</li>
              <li className="text-gray-400">High School (9-10)</li>
              <li className="text-gray-400">Senior Secondary (11-12)</li>
              <li className="text-gray-400">Scholarship Exams</li>
              <li className="text-gray-400">Olympiad Preparation</li>
            </ul>
          </div>

          {/* Languages */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Languages Offered</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">🇩🇪 German (A1-C2)</li>
              <li className="text-gray-400">🇯🇵 Japanese (N5-N1)</li>
              <li className="text-gray-400">🇫🇷 French (A1-C2)</li>
            </ul>
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="text-gray-400 text-sm">+91 90110 12814 </p>
              <p className="text-gray-400 text-sm">mathmaam@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Math ma'am Academy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Refund Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
