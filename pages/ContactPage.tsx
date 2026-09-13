import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LINKS } from '../constants';
import { Contact } from '../components/Contact';

export const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = "Contact - Bingo Agency";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="bg-[#FF4500] text-white min-h-screen pt-32 pb-24 overflow-hidden relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] md:w-[100vw] md:h-[100vw] opacity-10 pointer-events-none">
        <div className="w-full h-full border-[100px] border-white rounded-full animate-[spin_20s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto px-6 mb-16 flex justify-between items-center relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-black transition-colors">
          <ArrowLeft size={24} />
          <span className="font-bold uppercase tracking-widest text-sm">Retour</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <motion.h1 
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="text-[12vw] leading-none font-black text-white uppercase tracking-tighter mix-blend-overlay mb-8"
          >
            Say Hello
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-4xl font-medium"
          >
            Prêt à dominer votre marché ? <br/> Discutons de votre stratégie.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white text-black p-8 md:p-12 rounded-[3rem] shadow-2xl"
          >
            <Contact />
          </motion.div>

          <motion.div 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="space-y-12 px-4"
          >
            <div>
              <h3 className="text-3xl font-black mb-6">Contact Direct</h3>
              <div className="space-y-6">
                <a href={`mailto:${LINKS.email}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF4500] transition-colors">
                    <Mail size={28} />
                  </div>
                  <span className="text-2xl font-bold">{LINKS.email}</span>
                </a>
                <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#FF4500] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                  </div>
                  <span className="text-2xl font-bold">@bingo.agency</span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-black mb-6">Localisation</h3>
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                  <MapPin size={28} />
                </div>
                <span className="text-2xl font-bold">Toulouse, France</span>
              </div>
            </div>
            
            <div className="pt-8">
               <a href={LINKS.booking} target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center px-12 py-6 rounded-full font-black text-xl transition-transform hover:scale-105 bg-black text-white uppercase tracking-wider w-full text-center hover:bg-neutral-900 shadow-2xl">
                Réserver un appel vidéo
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
