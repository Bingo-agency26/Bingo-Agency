import React from 'react';
import { Facebook, Linkedin, Instagram, Youtube, Mail, MapPin, ExternalLink } from 'lucide-react';
import { LINKS, IMAGES } from '../constants';

interface FooterProps {
  onOpenLegal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const socialLinks = [
    { icon: Facebook, href: LINKS.facebook, label: 'Facebook' },
    { icon: Linkedin, href: LINKS.linkedin, label: 'LinkedIn' },
    { icon: Instagram, href: LINKS.instagram, label: 'Instagram' },
    { icon: Youtube, href: LINKS.tiktok, label: 'TikTok' }
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-12">
          <div>
            <img 
              src={IMAGES.logoFooter} 
              alt="Bingo Agency" 
              className="h-12 mb-6 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Agence marketing digital à Toulouse. Pub digitale, réseaux sociaux, print & web.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 hover:bg-brand-orange rounded-full flex items-center justify-center transition-all hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors">Publicité Digitale</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors">Réseaux Sociaux</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors">Print & PLV</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-brand-orange transition-colors">Branding & Design</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Liens Rapides</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#portfolio" className="text-gray-400 hover:text-brand-orange transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-brand-orange transition-colors">Tarifs</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-brand-orange transition-colors">Blog</a></li>
              <li><button onClick={onOpenLegal} className="text-gray-400 hover:text-brand-orange transition-colors text-left">Mentions Légales</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-brand-orange shrink-0 mt-1" />
                <span className="text-gray-400">Toulouse, France</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-brand-orange shrink-0 mt-1" />
                <a href={`mailto:${LINKS.email}`} className="text-gray-400 hover:text-brand-orange transition-colors break-all">
                  {LINKS.email}
                </a>
              </li>
              <li>
                <a 
                  href={LINKS.booking} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-brand-orange hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-all hover:scale-105 font-semibold"
                >
                  Réserver un appel
                  <ExternalLink size={16} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© {new Date().getFullYear()} Bingo Agency. Tous droits réservés.</p>
            <div className="flex gap-6">
              <button onClick={onOpenLegal} className="hover:text-brand-orange transition-colors">Mentions Légales</button>
              <button onClick={onOpenLegal} className="hover:text-brand-orange transition-colors">Politique de Confidentialité</button>
              <button onClick={onOpenLegal} className="hover:text-brand-orange transition-colors">CGV</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
