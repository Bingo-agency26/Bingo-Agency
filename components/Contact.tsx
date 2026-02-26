import React, { useState, FormEvent } from 'react';
import { Button } from './Button';
import { LINKS } from '../constants';
import { MapPin, Mail, Check, Loader, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        'service_6npek0d',
        'template_d3dbevc',
        form,
        'HrhrOWrVLj8Pk_4_X'
      );
      
      setSubmitStatus('success');
      form.reset();
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20" style={{backgroundColor: '#F9F7F2'}}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{color: '#FF4500'}}>Contact</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6" style={{color: '#1A1A1A'}}>Parlons de votre projet</h3>
            <p className="mb-6 md:mb-8 leading-relaxed" style={{color: '#4A4A4A'}}>
              Vous avez un projet en tête ? Remplissez le formulaire ou contactez-nous directement.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0" style={{color: '#FF4500'}}>
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base" style={{color: '#1A1A1A'}}>Notre Agence</h4>
                  <p className="text-sm" style={{color: '#4A4A4A'}}>Toulouse, France</p>
                  <a href={LINKS.map} target="_blank" rel="noopener noreferrer" className="text-xs md:text-sm hover:underline" style={{color: '#FF4500'}}>Voir sur la carte</a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0" style={{color: '#FF4500'}}>
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-sm md:text-base" style={{color: '#1A1A1A'}}>Email</h4>
                  <a href={`mailto:${LINKS.email}`} className="text-sm transition-colors break-all" style={{color: '#4A4A4A'}} onMouseEnter={(e) => e.currentTarget.style.color = '#FF4500'} onMouseLeave={(e) => e.currentTarget.style.color = '#4A4A4A'}>{LINKS.email}</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm" style={{borderWidth: '1px', borderColor: '#EFEEEE'}}>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base" style={{color: '#1A1A1A'}}>Pourquoi nous choisir ?</h4>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center gap-2 text-xs md:text-sm" style={{color: '#4A4A4A'}}>
                  <Check size={16} className="shrink-0" style={{color: '#FF4500'}} />
                  Réponse sous 24h garantie
                </li>
                <li className="flex items-center gap-2 text-xs md:text-sm" style={{color: '#4A4A4A'}}>
                  <Check size={16} className="shrink-0" style={{color: '#FF4500'}} />
                  Devis détaillé et transparent
                </li>
                <li className="flex items-center gap-2 text-xs md:text-sm" style={{color: '#4A4A4A'}}>
                  <Check size={16} className="shrink-0" style={{color: '#FF4500'}} />
                  Premier audit offert
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium mb-2" style={{color: '#1A1A1A'}}>Nom complet</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border outline-none transition-all text-sm md:text-base disabled:cursor-not-allowed"
                    style={{borderColor: '#EFEEEE', backgroundColor: isSubmitting ? '#F9F7F2' : 'white'}}
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm font-medium mb-2" style={{color: '#1A1A1A'}}>Société</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border outline-none transition-all text-sm md:text-base disabled:cursor-not-allowed"
                    style={{borderColor: '#EFEEEE', backgroundColor: isSubmitting ? '#F9F7F2' : 'white'}}
                    placeholder="Votre entreprise"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium mb-2" style={{color: '#1A1A1A'}}>Email pro</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border outline-none transition-all text-sm md:text-base disabled:cursor-not-allowed"
                    style={{borderColor: '#EFEEEE', backgroundColor: isSubmitting ? '#F9F7F2' : 'white'}}
                    placeholder="jean@entreprise.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium mb-2" style={{color: '#1A1A1A'}}>Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border outline-none transition-all text-sm md:text-base disabled:cursor-not-allowed"
                    style={{borderColor: '#EFEEEE', backgroundColor: isSubmitting ? '#F9F7F2' : 'white'}}
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium mb-2" style={{color: '#1A1A1A'}}>Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 rounded-lg border outline-none transition-all resize-none text-sm md:text-base disabled:cursor-not-allowed"
                  style={{borderColor: '#EFEEEE', backgroundColor: isSubmitting ? '#F9F7F2' : 'white'}}
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 border rounded-lg flex items-center justify-between" style={{backgroundColor: '#F0FDF4', borderColor: '#86EFAC'}}>
                  <div className="flex items-center gap-2">
                    <Check size={18} style={{color: '#16A34A'}} />
                    <p className="text-sm font-medium" style={{color: '#15803D'}}>Message envoyé ! Nous vous répondons sous 24h.</p>
                  </div>
                  <button onClick={() => setSubmitStatus('idle')} className="transition-colors" style={{color: '#16A34A'}} onMouseEnter={(e) => e.currentTarget.style.color = '#15803D'} onMouseLeave={(e) => e.currentTarget.style.color = '#16A34A'}>
                    <X size={18} />
                  </button>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 border rounded-lg flex items-center justify-between" style={{backgroundColor: '#FEF2F2', borderColor: '#FECACA'}}>
                  <div className="flex items-center gap-2">
                    <X size={18} style={{color: '#DC2626'}} />
                    <p className="text-sm font-medium" style={{color: '#991B1B'}}>Échec envoi. Contactez {LINKS.email}</p>
                  </div>
                  <button onClick={() => setSubmitStatus('idle')} className="transition-colors" style={{color: '#DC2626'}} onMouseEnter={(e) => e.currentTarget.style.color = '#991B1B'} onMouseLeave={(e) => e.currentTarget.style.color = '#DC2626'}>
                    <X size={18} />
                  </button>
                </div>
              )}

              <Button 
                variant="primary" 
                className="w-full justify-center py-4" 
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader size={18} className="animate-spin" />
                    Envoi en cours...
                  </span>
                ) : (
                  'Envoyer le message'
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
