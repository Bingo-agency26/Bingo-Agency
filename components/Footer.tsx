import React from 'react';
import { LINKS, IMAGES } from '../constants';
import { Facebook, Linkedin, Instagram } from 'lucide-react';

interface FooterProps {
  onOpenLegal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegal }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-white pt-16 pb-8" style={{backgroundColor: '#000000'}}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12 border-b pb-12" style={{borderColor: 'rgba(255, 255, 255, 0.1)'}}>
          {/* Brand */}
          <div className="max-w-sm">
            <img 
              src={IMAGES.logoFooter}
              alt="Bingo Agency" 
              className="w-40 mb-4 object-contain"
            />
            <p className="text-sm leading-relaxed" style={{color: '#B0B0B0'}}>
              Social Media Marketing Agency à Toulouse.
              <br/>
              Nous propulsons votre marque vers de nouveaux sommets.
            </p>
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            <a href={LINKS.facebook} target="_blank" rel="noreferrer" className="p-3 rounded-full transition-all" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#FF4500'; e.currentTarget.style.color = 'white';}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.color = 'white';}}>
              <Facebook size={20} />
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full transition-all" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#FF4500'; e.currentTarget.style.color = 'white';}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.color = 'white';}}>
              <Linkedin size={20} />
            </a>
            <a href={LINKS.instagram} target="_blank" rel="noreferrer" className="p-3 rounded-full transition-all" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)'}} onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = '#FF4500'; e.currentTarget.style.color = 'white';}} onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)'; e.currentTarget.style.color = 'white';}}>
              <Instagram size={20} />
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
             <h4 className="font-bold mb-4 text-white">Contact</h4>
             <ul className="space-y-2 text-sm" style={{color: '#B0B0B0'}}>
               <li><a href={`mailto:${LINKS.email}`} className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#FF4500'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>{LINKS.email}</a></li>
               <li>Toulouse, France</li>
             </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-white">Navigation</h4>
            <ul className="space-y-2 text-sm" style={{color: '#B0B0B0'}}>
              <li><a href="#services" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#FF4500'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Services</a></li>
              <li><a href="#portfolio" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#FF4500'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Réalisations</a></li>
              <li><a href="#pricing" className="transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#FF4500'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Tarifs</a></li>
            </ul>
          </div>
          <div>
             <h4 className="font-bold mb-4 text-white">Légal</h4>
             <ul className="space-y-2 text-sm" style={{color: '#B0B0B0'}}>
                <li><button onClick={onOpenLegal} className="transition-colors text-left" onMouseEnter={(e) => e.currentTarget.style.color = '#FF4500'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Mentions Légales</button></li>
                <li><button onClick={onOpenLegal} className="transition-colors text-left" onMouseEnter={(e) => e.currentTarget.style.color = '#FF4500'} onMouseLeave={(e) => e.currentTarget.style.color = '#B0B0B0'}>Politique de Confidentialité</button></li>
             </ul>
          </div>
        </div>

        <div className="text-center text-xs pt-8" style={{color: '#6B6B6B'}}>
          <p>© {currentYear} Bingo Agency. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};
