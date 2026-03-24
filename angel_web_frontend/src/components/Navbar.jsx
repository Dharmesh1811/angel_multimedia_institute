import { useState } from 'react';
import { ChevronDown, LogOut, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import logo from '../assets/logo.png';
import { Avatar, AvatarFallback } from './ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  getAdminEmail,
  getAdminInitials,
  isAdminAuthenticated,
  logoutAdmin,
} from '../admin/adminAuth';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    } else {
      // If we're on a different page (like admin dashboard), go to home first
      navigate('/');
      // Small timeout to allow navigation to complete before scrolling
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      setIsMenuOpen(false);
    }
  };

  const loggedIn = isAdminAuthenticated();
  const adminEmail = loggedIn ? getAdminEmail() : null;
  const adminInitials = loggedIn ? getAdminInitials() : 'AU';

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
          <div className="hidden lg:flex items-center gap-3">
            <div className="relative">
              <Button
                onClick={() => scrollToSection('SummerOffer')}
                className="relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-black shadow-lg hover:shadow-yellow-400/50 hover:shadow-xl transition-all duration-300 border-1 border-yellow-300 animate-zoom-in-out"
              >
                🌞 SUMMER OFFER
              </Button>
            </div>
            {loggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex items-center gap-3 rounded-md px-3 py-2 hover:bg-purple-50 transition-colors"
                    aria-label="Admin User menu"
                  >
                    <Avatar className="bg-purple-700 text-white border border-purple-200/70">
                      <AvatarFallback className="bg-purple-700 text-white">
                        {adminInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="leading-tight text-left">
                      <div className="text-sm font-semibold text-purple-700">Admin User</div>
                      <div className="text-xs text-muted-foreground">{adminEmail ?? ''}</div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-purple-700" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-52 border-purple-200/70"
                >
                  <DropdownMenuLabel className="text-purple-800">Admin User</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault();
                      navigate('/admin/dashboard');
                    }}
                  >
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600 data-[highlighted]:bg-red-50"
                    onSelect={(e) => {
                      e.preventDefault();
                      logoutAdmin();
                      navigate('/', { replace: true });
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => navigate('/admin/login')}
                className="bg-purple-700 hover:bg-purple-800 text-white"
              >
                Login
              </Button>
            )}
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
              onClick={() => {
                if (window.fbq) {
                  window.fbq('trackCustom', 'SummerOfferClick');
                }
                scrollToSection('SummerOffer'); 
              }}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-black animate-zoom-in-out"
            >
              🌞 SUMMER OFFER
            </Button>
            {loggedIn ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button
                    type="button"
                    className="flex w-full items-center gap-3 rounded-md bg-white/95 px-3 py-2 hover:bg-purple-50 transition-colors border border-purple-200/70"
                    aria-label="Admin User menu"
                  >
                    <Avatar className="bg-purple-700 text-white border border-purple-200/70">
                      <AvatarFallback className="bg-purple-700 text-white">
                        {adminInitials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 leading-tight text-left">
                      <div className="text-sm font-semibold text-purple-700">Admin User</div>
                      <div className="text-xs text-muted-foreground">{adminEmail ?? ''}</div>
                    </div>
                    <ChevronDown className="h-4 w-4 text-purple-700" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 border-purple-200/70"
                >
                  <DropdownMenuLabel className="text-purple-800">Admin User</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onSelect={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      navigate('/admin/dashboard');
                    }}
                  >
                    Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="text-red-600 focus:text-red-600 data-[highlighted]:bg-red-50"
                    onSelect={(e) => {
                      e.preventDefault();
                      logoutAdmin();
                      setIsMenuOpen(false);
                      navigate('/', { replace: true });
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <LogOut className="h-4 w-4" />
                      Logout
                    </div>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button
                onClick={() => {
                  setIsMenuOpen(false);
                  navigate('/admin/login');
                }}
                className="bg-purple-700 hover:bg-purple-800 text-white"
              >
                Login
              </Button>
            )}
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
