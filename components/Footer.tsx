import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { UChicagoLogo } from './UChicagoLogo';

interface FooterProps {
  onNavigate: (page: 'home' | 'program') => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const footerLinks = {
    'Prospective Students': [
      { label: 'Why MPCS?', action: () => onNavigate('home') },
      { label: 'Program Options', action: () => onNavigate('program') },
      { label: 'Admissions Process', action: () => {} },
      { label: 'Tuition & Aid', action: () => {} },
      { label: 'Visit Campus', action: () => {} }
    ],
    'Current Students': [
      { label: 'Student Portal', action: () => {} },
      { label: 'Course Catalog', action: () => {} },
      { label: 'Academic Calendar', action: () => {} },
      { label: 'Career Services', action: () => {} },
      { label: 'Campus Resources', action: () => {} }
    ],
    'About': [
      { label: 'Faculty & Staff', action: () => {} },
      { label: 'Alumni Network', action: () => {} },
      { label: 'News & Events', action: () => {} },
      { label: 'Research', action: () => {} },
      { label: 'Contact Us', action: () => {} }
    ]
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo and Contact */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <UChicagoLogo variant="shield" className="h-14 w-14 text-white" />
              <div>
                <div className="font-bold">University of Chicago</div>
                <div className="text-sm text-gray-400">MPCS</div>
              </div>
            </div>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation of computer scientists and technology leaders through rigorous education and innovative research.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} className="flex-shrink-0" />
                <span>5730 S Ellis Ave, Chicago, IL 60637</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Phone size={16} className="flex-shrink-0" />
                <span>(773) 702-1234</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Mail size={16} className="flex-shrink-0" />
                <span>admissions@cs.uchicago.edu</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-bold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <button
                      onClick={link.action}
                      className="text-sm text-gray-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} University of Chicago. All rights reserved.
            </div>

            <div className="flex items-center gap-6">
              {[
                { icon: <Facebook size={20} />, label: 'Facebook' },
                { icon: <Twitter size={20} />, label: 'Twitter' },
                { icon: <Linkedin size={20} />, label: 'LinkedIn' },
                { icon: <Instagram size={20} />, label: 'Instagram' }
              ].map((social) => (
                <button
                  key={social.label}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  {social.icon}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-6 text-sm">
              <button className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                Accessibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
