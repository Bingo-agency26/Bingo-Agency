import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { IMAGES, LINKS } from '../constants';
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Services', href: '/services' },
    { name: 'Tarifs', href: '/pricing' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 shadow-sm bg-white ${
          isScrolled ? 'py-4' : 'py-6'
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link 
            to="/" 
            className="relative z-[110] flex-shrink-0"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <img 
              src={IMAGES.logoHeader} 
              alt="Bingo Agency" 
              width="190"
              height="70"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.href}
                className="font-medium text-sm uppercase tracking-wide transition-colors"
                style={{color: '#1A1A1A'}}
                onMouseEnter={(e) => e.currentTarget.style.color = '#FF4500'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#1A1A1A'}
              >
                {link.name}
              </Link>
            ))}
          </nav>

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

            <button 
              className="md:hidden relative z-[110] p-2 -mr-2"
              aria-label="Menu principal"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{color: isMobileMenuOpen ? '#FF4500' : '#1A1A1A'}}
            >
              {isMobileMenuOpen ? <X size={28} strokeWidth={2.5} /> : <Menu size={28} strokeWidth={2.5} />}
            </button>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[90] md:hidden"
          style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div 
        className={`fixed top-0 right-0 bottom-0 w-full max-w-sm z-[95] md:hidden transition-transform duration-300 ease-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{backgroundColor: '#FFFFFF', boxShadow: '-4px 0 24px rgba(0,0,0,0.1)'}}
      >
        <div className="h-full flex flex-col pt-24 pb-8 px-6">
          <nav className="flex-1 flex flex-col gap-1">
            {navLinks.map((link, index) => (
              <Link 
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-4 px-4 text-xl font-bold rounded-xl transition-all duration-200"
                style={{
                  color: '#1A1A1A',
                  animationDelay: `${index * 50}ms`
                }}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="pt-6 border-t" style={{borderColor: '#EFEEEE'}}>
            <Button 
              href={LINKS.booking} 
              variant="primary" 
              className="w-full justify-center !py-4 !text-base"
            >
              Réserver un Audit Gratuit
            </Button>
            
            <div className="mt-6 text-center">
              <p className="text-xs font-medium mb-2" style={{color: '#6B6B6B'}}>Besoin d'aide ?</p>
              <a 
                href={`mailto:${LINKS.email}`}
                className="text-sm font-semibold transition-colors"
                style={{color: '#FF4500'}}
              >
                {LINKS.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
