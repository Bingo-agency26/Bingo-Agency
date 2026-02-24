import React from 'react';
import { IMAGES, LINKS } from '../constants';
import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react';

interface FooterProps {
  onOpenLegal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b border-white/10 pb-12">
          {/* Brand */}
          <div className="max-w-sm">
            <img 
              src={IMAGES.logoFooter} 
              alt="Bingo Agency" 
              className="h-10 mb-4 object-contain"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Agence de communication 360° à Toulouse.
              <br/>
              Nous propulsons votre marque vers de nouveaux sommets.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href={LINKS.facebook} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-blue hover:text-white transition-all">
              <Facebook size={20} />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-blue hover:text-white transition-all">
              <Linkedin size={20} />
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-blue hover:text-white transition-all">
              <Instagram size={20} />
            </a>
            <a href={LINKS.tiktok} target="_blank" rel="noreferrer" className="p-3 bg-white/5 rounded-full hover:bg-brand-blue hover:text-white transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
             <h4 className="font-bold mb-4 text-white">Contact</h4>
             <ul className="space-y-2 text-sm text-gray-400">
               <li><a href={`mailto:${LINKS.email}`} className="hover:text-brand-blue transition-colors">{LINKS.email}</a></li>
               <li>Toulouse, France</li>
             </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#services" className="hover:text-brand-blue transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-brand-blue transition-colors">Réalisations</a></li>
              <li><a href="#pricing" className="hover:text-brand-blue transition-colors">Tarifs</a></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold mb-4 text-white">Légal</h4>
             <ul className="space-y-2 text-sm text-gray-400">
                <li><button onClick={onOpenLegal} className="hover:text-brand-blue transition-colors text-left">Mentions Légales</button></li>
                <li><button onClick={onOpenLegal} className="hover:text-brand-blue transition-colors text-left">Politique de Confidentialité</button></li>
             </ul>
          </div>
        </div>

        <div className="text-center text-xs text-gray-600 pt-8">
          <p>© {currentYear} Bingo Agency. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
