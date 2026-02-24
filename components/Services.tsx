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
    <section id="services" className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Nos Expertises</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Une approche 360° pour votre croissance</h3>
          <p className="text-gray-600">
            Nous combinons créativité et data pour déployer des stratégies omnicanales qui convertissent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-3xl border border-gray-100 bg-white hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${service.color}`}>
                <service.icon size={40} />
              </div>
              <h4 className="text-2xl font-bold text-brand-dark mb-4">{service.title}</h4>
              <p className="text-gray-600 mb-8 text-base leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-base text-gray-500">
                    <CheckCircle2 size={20} className="text-brand-orange shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          
          {/* Call to Action Card */}
          <div className="p-8 rounded-2xl bg-brand-dark text-white flex flex-col justify-center items-center text-center">
            <BarChart size={48} className="text-brand-orange mb-6" />
            <h4 className="text-xl font-bold mb-3">Besoin d'une stratégie sur-mesure ?</h4>
            <p className="text-gray-400 mb-8 text-sm">
              Discutons de vos objectifs et construisons ensemble votre plan d'action.
            </p>
            <Button href={LINKS.booking} variant="primary" className="w-full">
              Réserver un Audit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
