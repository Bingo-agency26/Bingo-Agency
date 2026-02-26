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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-md shadow-sm ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
      style={{backgroundColor: 'rgba(255, 255, 255, 0.95)'}}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="relative z-50 flex-shrink-0">
          <img 
            src={IMAGES.logoHeader} 
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
              className="font-medium text-sm uppercase tracking-wide transition-colors"
              style={{color: '#1A1A1A'}}
              onMouseEnter={(e) => e.currentTarget.style.color = '#FF4500'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#1A1A1A'}
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
              className="!py-3 !px-6 !text-base"
            >
              Audit Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{color: '#1A1A1A'}}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`} style={{backgroundColor: '#FFFFFF'}}>
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-2xl font-bold"
              style={{color: '#1A1A1A'}}
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
