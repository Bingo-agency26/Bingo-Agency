import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { PRICING, LINKS } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Tarifs</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark mb-4">Des offres adaptées à votre ambition</h3>
          <p className="text-gray-600">
            Chaque projet est unique. Contactez-nous pour une proposition sur-mesure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRICING.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-2xl border flex flex-col ${
                plan.highlight 
                  ? 'border-brand-blue bg-brand-dark text-white shadow-xl scale-105 z-10' 
                  : 'border-gray-100 bg-white text-brand-dark hover:border-brand-blue/30 transition-colors'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-blue text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  Recommandé
                </div>
              )}
              
              <div className="mb-8">
                <h4 className={`text-lg font-bold mb-2 ${plan.highlight ? 'text-white' : 'text-brand-dark'}`}>{plan.title}</h4>
                <div className="flex items-baseline gap-1">
                  <span className={`text-2xl font-bold ${plan.highlight ? 'text-white' : 'text-brand-dark'}`}>{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <Check size={18} className={`shrink-0 mt-0.5 ${plan.highlight ? 'text-brand-blue' : 'text-green-500'}`} />
                    <span className={plan.highlight ? 'text-gray-300' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                href={LINKS.booking} 
                variant={plan.highlight ? 'primary' : 'outline'} 
                className="w-full justify-center"
              >
                Demander un devis
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
