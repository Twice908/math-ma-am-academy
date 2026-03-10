import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import logoHB  from '../components/images/logoHB.png';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 overflow-x-hidden">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}

          <div>
            <span>
              <img src={logoHB} alt="Logo" className="h-14 w-auto" />
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 flex-shrink-0">
            <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Features
            </button>
            <button onClick={() => scrollToSection('classes')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Classes
            </button>
            <button onClick={() => scrollToSection('special-batches')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Special Batches
            </button>
            <button onClick={() => scrollToSection('languages')} className="text-gray-700 hover:text-blue-600 transition-colors">
              Languages
            </button>
            <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow">
              Enroll Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-700 flex-shrink-0"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('features')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Features
              </button>
              <button onClick={() => scrollToSection('classes')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Classes
              </button>
              <button onClick={() => scrollToSection('special-batches')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Special Batches
              </button>
              <button onClick={() => scrollToSection('languages')} className="text-gray-700 hover:text-blue-600 transition-colors text-left">
                Languages
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-shadow">
                Enroll Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}