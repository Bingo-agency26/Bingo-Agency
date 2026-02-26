import React from 'react';
import { MousePointerClick, Share2, Printer, PenTool, Layout, BarChart, CheckCircle2 } from 'lucide-react';
import { Button } from './Button';
import { LINKS } from '../constants';

const services = [
  {
    icon: MousePointerClick,
    title: "Publicité Digitale",
    description: "Dominez les résultats de recherche et les réseaux display.",
    features: ["Google Ads & Bing Ads", "Campagnes Shopping & PMax", "Retargeting & Display", "Optimisation du ROAS"],
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Share2,
    title: "Réseaux Sociaux",
    description: "Engagez votre communauté là où elle se trouve.",
    features: ["Stratégie Social Media", "Création de Contenu (Reels/Stories)", "Community Management", "Facebook, Insta, TikTok, LinkedIn"],
    color: "bg-orange-100 text-orange-700"
  },
  {
    icon: Printer,
    title: "Print & Supports",
    description: "Matérialisez votre image de marque.",
    features: ["Flyers & Brochures", "Cartes de Visite", "PLV & Signalétique", "Distribution & Logistique"],
    color: "bg-amber-50 text-amber-600"
  },
  {
    icon: PenTool,
    title: "Identité Visuelle",
    description: "Une image forte pour une marque mémorable.",
    features: ["Création de Logo", "Charte Graphique", "Naming & Branding", "Guidelines"],
    color: "bg-amber-100 text-amber-700"
  },
  {
    icon: Layout,
    title: "Web & SEO",
    description: "Votre vitrine digitale, performante et visible.",
    features: ["Sites Vitrines & E-commerce", "Référencement Naturel (SEO)", "Maintenance & Sécurité", "UX/UI Design"],
    color: "bg-yellow-50 text-yellow-600"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Nos Expertises</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-3 md:mb-4">Une approche 360° pour votre croissance</h3>
          <p className="text-sm md:text-base text-gray-600">
            Nous combinons créativité et data pour déployer des stratégies omnicanales qui convertissent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-6 md:p-8 rounded-2xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center mb-5 md:mb-6 ${service.color}`}>
                <service.icon size={24} className="md:w-7 md:h-7" />
              </div>
              <h4 className="text-lg md:text-xl font-bold text-brand-dark mb-2 md:mb-3">{service.title}</h4>
              <p className="text-gray-600 mb-5 md:mb-6 text-xs md:text-sm leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs md:text-sm text-gray-500">
                    <CheckCircle2 size={16} className="text-brand-orange shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Call to Action Card */}
          <div className="p-6 md:p-8 rounded-2xl bg-brand-dark text-white flex flex-col justify-center items-center text-center">
            <BarChart size={40} className="md:w-12 md:h-12 text-brand-orange mb-5 md:mb-6" />
            <h4 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Besoin d'une stratégie sur-mesure ?</h4>
            <p className="text-gray-400 mb-6 md:mb-8 text-xs md:text-sm leading-relaxed">
              Discutons de vos objectifs et construisons ensemble votre plan d'action.
            </p>
            <Button href={LINKS.booking} variant="primary" className="w-full py-3.5">
              Réserver un Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
