import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import logo from '../assets/logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Angel Multimedia Logo" className="h-12 w-auto object-contain" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('courses')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection('special-courses')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Special Courses
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* CTA Button - SUMMER OFFER highlighted */}
          <div className="hidden lg:block">
            <div className="relative">
              <Button
                onClick={() => scrollToSection('SummerOffer')}
                className="relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-black shadow-lg hover:shadow-yellow-400/50 hover:shadow-xl transition-all duration-300 border-1 border-yellow-300 animate-zoom-in-out"
              >
                🌞 SUMMER OFFER
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-3">
            <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">
              About Us
            </button>
            <button onClick={() => scrollToSection('courses')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Courses
            </button>
            <button onClick={() => scrollToSection('special-courses')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Special Courses
            </button>
            <button onClick={() => scrollToSection('reviews')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Reviews
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-left py-2 text-gray-700 hover:text-purple-600 transition-colors">
              Contact
            </button>
            <Button
              onClick={() => scrollToSection('SummerOffer')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-black animate-zoom-in-out"
            >
              🌞 SUMMER OFFER
            </Button>
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
            >
              Enroll Now
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
