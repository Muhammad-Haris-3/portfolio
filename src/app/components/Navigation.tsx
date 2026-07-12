"use client";

import { useState, useEffect } from 'react';
import { Menu, X, BarChart3 } from 'lucide-react';
import { navigation } from '@/content/portfolio';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-lg shadow-lg shadow-yellow-500/10 border-b border-yellow-500/20 py-3' : 'bg-black/80 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#home')}>
            <BarChart3 className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.5)]" />
            <span className="text-xl font-bold tracking-tight text-white uppercase">Muhammad Haris</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-300 hover:text-yellow-500 transition-colors text-sm font-medium relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <a
              href="mailto:hariskhokhar975@gmail.com"
              className="px-5 py-2 text-xs font-semibold text-black bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full hover:shadow-lg hover:shadow-yellow-500/30 transition-all hover:scale-[1.02] active:scale-95"
            >
              Contact Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-yellow-500/10 rounded-lg transition-colors border border-yellow-500/30"
          >
            {isOpen ? <X className="w-6 h-6 text-yellow-500" /> : <Menu className="w-6 h-6 text-yellow-500" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 border-t border-yellow-500/10 pt-4">
            {navigation.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-4 py-2.5 text-gray-300 hover:bg-yellow-500/10 hover:text-yellow-500 rounded-lg transition-colors border border-transparent hover:border-yellow-500/30 font-medium"
              >
                {link.label}
              </button>
            ))}
            <div className="px-4 pt-2">
              <a
                href="mailto:hariskhokhar975@gmail.com"
                className="block w-full text-center py-3 text-sm font-semibold text-black bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-lg hover:shadow-lg hover:shadow-yellow-500/30 transition-all"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
