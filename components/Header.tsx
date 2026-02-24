import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES, LINKS } from '../constants';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Tarifs', href: '#pricing' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative z-50 flex-shrink-0">
          <img 
            src={IMAGES.logo} 
            alt="Bingo Agency" 
            className="h-10 md:h-12 object-contain" 
          />
        </a>

        {/* Desktop Nav - Centered */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-medium text-sm uppercase tracking-wide text-brand-dark hover:text-brand-blue transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button 
              href={LINKS.booking} 
              variant="primary" 
              className="!py-2 !px-5 !text-sm"
            >
              Audit Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 text-brand-dark"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold text-brand-dark hover:text-brand-blue"
            >
              {link.name}
            </a>
          ))}
          <Button 
            href={LINKS.booking} 
            variant="primary" 
            className="mt-4"
          >
            Réserver un Audit
          </Button>
        </div>
      </div>
    </header>
  );
};
