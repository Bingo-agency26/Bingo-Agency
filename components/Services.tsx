import React from 'react';
import { Megaphone, Share2, Printer, Palette } from 'lucide-react';

const services = [
  {
    icon: Megaphone,
    title: 'Publicité Digitale',
    description: 'Google Ads, Bing Ads, Meta Ads. Campagnes optimisées pour maximiser votre ROI.',
    features: ['Search & Display', 'Remarketing', 'Shopping Ads', 'Analytics']
  },
  {
    icon: Share2,
    title: 'Réseaux Sociaux',
    description: 'Community management, création de contenu, stratégie Instagram, TikTok, LinkedIn.',
    features: ['Content création', 'Community management', 'Influenceurs', 'Ads social']
  },
  {
    icon: Printer,
    title: 'Print & PLV',
    description: 'Impression offset, flyers, affiches, PLV, packaging. Qualité professionnelle garantie.',
    features: ['Flyers & brochures', 'Affiches grand format', 'PLV & signalétique', 'Packaging']
  },
  {
    icon: Palette,
    title: 'Branding & Design',
    description: 'Identité visuelle, charte graphique, logo, refonte complète de votre image de marque.',
    features: ['Logo & charte', 'Identité visuelle', 'Brand guidelines', 'Supports print/web']
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Services</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
            Une expertise 360° au service de votre croissance
          </h3>
          <p className="text-base md:text-lg text-gray-600">
            De la stratégie à l'exécution, nous gérons tous vos besoins marketing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-brand-orange hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-brand-orange to-orange-600 text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <Icon size={28} />
                  </div>
                  
                  <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">
                    {service.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
