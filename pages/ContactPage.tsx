import React, { useEffect, useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Mail, MapPin, Check, Loader, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LINKS } from '../constants';
import emailjs from '@emailjs/browser';
import { Button } from '../components/Button';

export const ContactPage: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    document.title = "Contact - Bingo Agency";
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    const form = e.currentTarget;
    try {
      emailjs.init('HrhrOWrVLj8Pk_4_X');
      await emailjs.sendForm('service_6npek0d', 'template_d3dbevc', form, 'HrhrOWrVLj8Pk_4_X');
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="bg-[#FF4500] text-white min-h-screen pt-24 md:pt-32 pb-16 md:pb-24 overflow-hidden relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vw] md:w-[100vw] md:h-[100vw] opacity-10 pointer-events-none">
        <div className="w-full h-full border-[40px] md:border-[100px] border-white rounded-full animate-[spin_20s_linear_infinite]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 mb-8 md:mb-16 flex justify-between items-center relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-black transition-colors">
          <ArrowLeft size={24} />
          <span className="font-bold uppercase tracking-widest text-xs md:text-sm">Retour</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-12 md:mb-20">
          <motion.h1 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="text-[15vw] md:text-[12vw] leading-none font-black text-white uppercase tracking-tighter mix-blend-overlay mb-4 md:mb-8"
          >
            Say Hello
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-lg md:text-2xl lg:text-4xl font-medium px-4"
          >
            Prêt à dominer votre marché ? <br className="hidden md:block"/> Discutons de votre stratégie.
          </motion.p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-start">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white text-black p-6 md:p-10 lg:p-12 rounded-[2rem] lg:rounded-[3rem] shadow-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-black mb-6 md:mb-8" style={{color: '#1A1A1A'}}>Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-bold mb-2">Nom complet</label>
                  <input type="text" id="name" name="name" required disabled={isSubmitting} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all bg-gray-50/50" placeholder="Jean Dupont" />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm font-bold mb-2">Société</label>
                  <input type="text" id="company" name="company" disabled={isSubmitting} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all bg-gray-50/50" placeholder="Votre entreprise" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-bold mb-2">Email pro</label>
                  <input type="email" id="email" name="email" required disabled={isSubmitting} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all bg-gray-50/50" placeholder="jean@entreprise.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-bold mb-2">Téléphone</label>
                  <input type="tel" id="phone" name="phone" disabled={isSubmitting} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all bg-gray-50/50" placeholder="06 12 34 56 78" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-bold mb-2">Message</label>
                <textarea id="message" name="message" required rows={4} disabled={isSubmitting} className="w-full px-4 py-3 md:py-3.5 rounded-xl border border-gray-200 outline-none focus:border-[#FF4500] focus:ring-1 focus:ring-[#FF4500] transition-all resize-none bg-gray-50/50" placeholder="Décrivez votre projet..."></textarea>
              </div>
              
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2 text-green-700">
                    <Check size={18} /> <p className="text-sm font-bold">Message envoyé !</p>
                  </div>
                </div>
              )}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-center justify-between">
                  <div className="flex items-center gap-2 text-red-700">
                    <X size={18} /> <p className="text-sm font-bold">Erreur d'envoi.</p>
                  </div>
                </div>
              )}

              <Button variant="primary" className="w-full justify-center py-4" type="submit" disabled={isSubmitting}>
                {isSubmitting ? <span className="flex items-center gap-2"><Loader size={18} className="animate-spin" /> Envoi...</span> : 'Envoyer le message'}
              </Button>
            </form>
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

