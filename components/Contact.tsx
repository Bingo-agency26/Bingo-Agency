import React, { useState } from 'react';
import { Button } from './Button';
import { LINKS } from '../constants';
import { MapPin, Mail, Check, Loader } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    
    try {
      const response = await emailjs.sendForm(
        'service_6npek0d',
        'template_d3dbevc',
        form
      );
      
      console.log('✅ EmailJS Success:', response.status, response.text);
      setSubmitStatus('success');
      form.reset();
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error: any) {
      console.error('❌ EmailJS Error:', error);
      console.error('Error details:', error.text || error.message);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-brand-gray">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Contact</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-4 md:mb-6">Parlons de votre projet</h3>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed">
              Vous avez un projet en tête ? Une question sur nos services ? 
              Remplissez le formulaire ou contactez-nous directement.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <MapPin size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm md:text-base">Notre Agence</h4>
                  <p className="text-gray-600 text-sm">Toulouse, France</p>
                  <a href={LINKS.map} target="_blank" rel="noopener noreferrer" className="text-brand-orange text-xs md:text-sm hover:underline">Voir sur la carte</a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center text-brand-orange shadow-sm shrink-0">
                  <Mail size={20} className="md:w-6 md:h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm md:text-base">Email</h4>
                  <a href={`mailto:${LINKS.email}`} className="text-gray-600 text-sm hover:text-brand-orange transition-colors break-all">{LINKS.email}</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-brand-dark mb-3 md:mb-4 text-sm md:text-base">Pourquoi nous choisir ?</h4>
              <ul className="space-y-2 md:space-y-3">
                <li className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                  <Check size={16} className="text-brand-orange shrink-0" />
                  Réponse sous 24h garantie
                </li>
                <li className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                  <Check size={16} className="text-brand-orange shrink-0" />
                  Devis détaillé et transparent
                </li>
                <li className="flex items-center gap-2 text-xs md:text-sm text-gray-600">
                  <Check size={16} className="text-brand-orange shrink-0" />
                  Premier audit offert
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Nom complet</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Société</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Votre entreprise"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Email pro</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="jean@entreprise.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 outline-none transition-all resize-none text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="gdpr"
                  name="gdpr"
                  required
                  disabled={isSubmitting}
                  className="mt-1 w-4 h-4 shrink-0 disabled:cursor-not-allowed"
                />
                <label htmlFor="gdpr" className="text-[11px] md:text-xs text-gray-500 leading-relaxed">
                  J'accepte que mes données soient traitées pour répondre à ma demande. 
                  Consultez notre <a href="#" className="underline hover:text-brand-orange">Politique de Confidentialité</a>.
                </label>
              </div>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border border-green-200 rounded-lg animate-in fade-in duration-300">
                  <p className="text-green-800 text-sm font-medium flex items-center gap-2">
                    <Check size={18} />
                    Message envoyé avec succès ! Nous vous répondons sous 24h.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg animate-in fade-in duration-300">
                  <p className="text-red-800 text-sm font-medium">
                    Erreur lors de l'envoi. Contactez-nous directement à {LINKS.email}
                  </p>
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
