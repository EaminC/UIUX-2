import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onNavigate: (page: "home" | "program") => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const links = {
    Programs: [
      "Full-Time MS",
      "Part-Time MS",
      "Pre-Program",
      "Course Catalog",
    ],
    Admissions: [
      "Apply Now",
      "Requirements",
      "Tuition & Aid",
      "Visit Campus",
    ],
    Students: [
      "Student Portal",
      "Career Services",
      "Academic Calendar",
      "Campus Resources",
    ],
    About: [
      "Faculty",
      "Alumni Network",
      "Contact Us",
      "News & Events",
    ],
  };

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-maroon rounded-lg flex items-center justify-center text-white font-bold text-xl">
                UC
              </div>
              <div className="text-white font-bold text-sm">
                UNIVERSITY OF
                <br />
                CHICAGO
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Master's Program in Computer Science
            </p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-white font-semibold mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <button className="text-sm hover:text-white transition-colors">
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div className="border-t border-gray-800 pt-8 pb-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-maroon flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Address</div>
                <div className="text-sm">
                  5730 S Ellis Ave
                  <br />
                  Chicago, IL 60637
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-maroon flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Phone</div>
                <div className="text-sm">(773) 702-1234</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-maroon flex-shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-medium text-white mb-1">Email</div>
                <div className="text-sm">admissions@cs.uchicago.edu</div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 The University of Chicago. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <button className="hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="hover:text-white transition-colors">
                Terms of Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
