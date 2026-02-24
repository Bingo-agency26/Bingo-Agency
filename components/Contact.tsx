import React, { useState } from 'react';
import { Button } from './Button';
import { LINKS } from '../constants';
import { MapPin, Mail, Phone, Check } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    gdpr: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Construct mailto link
    const subject = `Demande de contact - ${formData.company || formData.name}`;
    const body = `Nom: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0ATéléphone: ${formData.phone}%0D%0ASociété: ${formData.company}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    
    window.location.href = `mailto:${LINKS.email}?subject=${subject}&body=${body}`;
    
    // Optional: Reset form or show success message
    alert('Votre client de messagerie va s\'ouvrir pour envoyer le mail.');
  };

  return (
    <section id="contact" className="py-20 bg-brand-gray">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Contact</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6">Parlons de votre projet</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Vous avez un projet en tête ? Une question sur nos services ? 
              Remplissez le formulaire ou contactez-nous directement.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Notre Agence</h4>
                  <p className="text-gray-600">Toulouse, France</p>
                  <a href={LINKS.map} target="_blank" rel="noopener noreferrer" className="text-brand-blue text-sm hover:underline">Voir sur la carte</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark">Email</h4>
                  <a href={`mailto:${LINKS.email}`} className="text-gray-600 hover:text-brand-blue transition-colors">{LINKS.email}</a>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h4 className="font-bold text-brand-dark mb-4">Pourquoi nous choisir ?</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-brand-blue" />
                  Réponse sous 24h garantie
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-brand-blue" />
                  Devis détaillé et transparent
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <Check size={16} className="text-brand-blue" />
                  Premier audit offert
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nom complet</label>
                  <input 
                    type="text" 
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Société</label>
                  <input 
                    type="text" 
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="Votre entreprise"
                    value={formData.company}
                    onChange={(e) => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email pro</label>
                  <input 
                    type="email" 
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="jean@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                  <input 
                    type="tel" 
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all"
                    placeholder="06 12 34 56 78"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea 
                  id="message"
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all resize-none"
                  placeholder="Décrivez votre projet..."
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>

              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="gdpr"
                  required
                  className="mt-1"
                  checked={formData.gdpr}
                  onChange={(e) => setFormData({...formData, gdpr: e.target.checked})}
                />
                <label htmlFor="gdpr" className="text-xs text-gray-500">
                  J'accepte que mes données soient traitées pour répondre à ma demande. 
                  Consultez notre <a href="#" className="underline hover:text-brand-blue">Politique de Confidentialité</a>.
                </label>
              </div>

              <Button variant="primary" className="w-full justify-center">
                Envoyer le message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
