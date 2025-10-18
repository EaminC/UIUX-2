import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { UChicagoLogo } from './UChicagoLogo';

interface HeaderProps {
  onNavigate: (page: 'home' | 'program') => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Programs', action: () => onNavigate('program') },
    { name: 'Admissions', action: () => {} },
    { name: 'Student Life', action: () => {} },
    { name: 'Faculty', action: () => {} },
    { name: 'Contact', action: () => {} }
  ];

  return (
    <header 
      className={`bg-card/95 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center gap-4 hover:opacity-80 transition-all duration-300 group"
          >
            <UChicagoLogo variant="image" className="h-12 w-auto text-maroon transform group-hover:scale-105 transition-transform" />
            <div className="text-left hidden md:block">
              <div className="font-bold text-maroon tracking-tight">University of Chicago</div>
              <div className="text-sm text-muted-foreground">Masters in Computer Science</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-foreground hover:text-maroon transition-all duration-300 font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline" 
              className="border-maroon/30 text-maroon hover:bg-maroon hover:text-white hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Student Portal
            </Button>
            <Button className="bg-maroon hover:bg-maroon-dark text-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-maroon transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200">
            <nav className="flex flex-col gap-4 mb-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-foreground hover:text-maroon transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
            </nav>
            <div className="flex flex-col gap-3">
              <Button variant="outline" className="w-full border-maroon/30 text-maroon hover:bg-maroon hover:text-white">
                Student Portal
              </Button>
              <Button className="w-full bg-maroon hover:bg-maroon-dark text-white">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
