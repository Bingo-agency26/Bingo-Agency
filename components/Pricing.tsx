import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { PRICING, LINKS } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Tarifs</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-3 md:mb-4">
            Des offres adaptées à votre ambition
          </h3>
          <p className="text-base md:text-lg text-gray-600">
            Chaque projet est unique. Contactez-nous pour une proposition sur-mesure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-7xl mx-auto">
          {PRICING.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border-2 ${
                plan.highlight 
                  ? 'border-brand-orange bg-white lg:scale-105 lg:-translate-y-2' 
                  : 'border-transparent bg-white hover:border-gray-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-6 py-1.5 rounded-full text-sm font-bold shadow-lg uppercase tracking-wide">
                  RECOMMANDÉ
                </div>
              )}
              
              <div className="mb-6">
                <h4 className="text-lg md:text-xl font-bold text-brand-dark mb-3 min-h-[3rem] leading-tight">
                  {plan.title}
                </h4>
                <div className="flex items-end gap-1 mb-2">
                  <span className="text-3xl md:text-4xl font-bold text-brand-dark">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-base md:text-lg text-gray-600 font-medium mb-1">
                      {plan.period}
                    </span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check 
                      size={18} 
                      className={`shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-brand-orange' : 'text-green-500'
                      }`} 
                    />
                    <span className="text-sm text-gray-700 leading-snug font-medium">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button 
                href={LINKS.booking} 
                variant={plan.highlight ? 'primary' : 'outline'} 
                className="w-full justify-center py-3.5 font-semibold text-base shadow-md hover:shadow-lg"
              >
                Demander un devis
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <p className="text-gray-600 text-sm md:text-base mb-4">
            🎁 <span className="font-semibold text-brand-dark">Premier audit offert</span> pour tout nouveau client
          </p>
          <p className="text-xs md:text-sm text-gray-500">
            Prix indicatifs · Devis personnalisé selon vos besoins · Engagement sans frais cachés
          </p>
        </div>
      </div>
    </section>
  );
};
