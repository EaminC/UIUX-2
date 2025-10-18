import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";

interface HeaderProps {
  onNavigate: (page: "home" | "program") => void;
}

export function Header({ onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Programs", action: () => onNavigate("program") },
    { name: "Admissions", action: () => {} },
    { name: "Student Life", action: () => {} },
    { name: "Faculty", action: () => {} },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity group"
          >
            <div className="w-10 h-10 bg-maroon rounded-lg flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              UC
            </div>
            <div className="hidden md:flex flex-col items-start">
              <div className="text-sm font-bold text-maroon leading-tight">
                UNIVERSITY OF CHICAGO
              </div>
              <div className="text-xs text-muted-foreground leading-tight">
                Computer Science
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className="text-sm font-medium text-foreground hover:text-maroon transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-maroon group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" size="sm">
              Student Portal
            </Button>
            <Button size="sm" className="bg-maroon hover:bg-maroon-dark">
              Apply Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-6 border-t">
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
              <Button variant="outline" className="w-full">
                Student Portal
              </Button>
              <Button className="w-full bg-maroon hover:bg-maroon-dark">
                Apply Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
