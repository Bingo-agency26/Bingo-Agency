import React, { useState, FormEvent } from 'react';
import { Button } from './Button';
import { LINKS } from '../constants';
import { MapPin, Mail, Check, Loader, X, Clock } from 'lucide-react';
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
    <section id="contact" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          
          <div>
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Contact</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-4 md:mb-6">Parlons de votre projet</h3>
            <p className="text-gray-600 mb-6 md:mb-8 leading-relaxed text-base md:text-lg">
              Vous avez un projet en tête ? Remplissez le formulaire ou contactez-nous directement.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
              <div className="flex items-start gap-3 md:gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center text-white shadow-md shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-base mb-1">Notre Agence</h4>
                  <p className="text-gray-600 text-sm">Toulouse, France</p>
                  <a href={LINKS.map} target="_blank" rel="noopener noreferrer" className="text-brand-orange text-sm hover:underline font-medium">Voir sur la carte →</a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center text-white shadow-md shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-base mb-1">Email</h4>
                  <a href={`mailto:${LINKS.email}`} className="text-gray-600 text-sm hover:text-brand-orange transition-colors break-all font-medium">{LINKS.email}</a>
                </div>
              </div>

              <div className="flex items-start gap-3 md:gap-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center text-white shadow-md shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-base mb-1">Réponse Rapide</h4>
                  <p className="text-gray-600 text-sm">Sous 24h garanti</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl shadow-md border border-orange-100">
              <h4 className="font-bold text-brand-dark mb-4 text-base">Pourquoi nous choisir ?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="font-medium">Réponse sous 24h garantie</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="font-medium">Devis détaillé et transparent</span>
                </li>
                <li className="flex items-center gap-3 text-sm text-gray-700">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                    <Check size={14} className="text-green-600" />
                  </div>
                  <span className="font-medium">Premier audit offert</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-2xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nom complet *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20 outline-none transition-all text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">Société</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20 outline-none transition-all text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="Votre entreprise"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email pro *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20 outline-none transition-all text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="jean@entreprise.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    disabled={isSubmitting}
                    className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20 outline-none transition-all text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={isSubmitting}
                  className="w-full px-4 py-3.5 rounded-lg border-2 border-gray-200 focus:border-brand-orange focus:ring-4 focus:ring-brand-orange/20 outline-none transition-all resize-none text-sm md:text-base disabled:bg-gray-50 disabled:cursor-not-allowed"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-center justify-between animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Check size={18} className="text-white" />
                    </div>
                    <p className="text-green-800 text-sm font-semibold">Message envoyé ! Nous vous répondons sous 24h.</p>
                  </div>
                  <button onClick={() => setSubmitStatus('idle')} className="text-green-600 hover:text-green-800 transition-colors">
                    <X size={18} />
                  </button>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-center justify-between animate-fade-in">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <X size={18} className="text-white" />
                    </div>
                    <p className="text-red-800 text-sm font-semibold">Échec envoi. Contactez {LINKS.email}</p>
                  </div>
                  <button onClick={() => setSubmitStatus('idle')} className="text-red-600 hover:text-red-800 transition-colors">
                    <X size={18} />
                  </button>
                </div>
              )}

              <Button 
                variant="primary" 
                className="w-full justify-center py-4 text-base font-semibold shadow-lg hover:shadow-xl" 
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
