import React from 'react';
import { Check } from 'lucide-react';
import { Button } from './Button';
import { PRICING, LINKS } from '../constants';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 md:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="absolute -left-20 top-40 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{backgroundColor: 'rgba(255, 69, 0, 0.05)'}}></div>
      <div className="absolute -right-20 bottom-40 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{backgroundColor: 'rgba(255, 69, 0, 0.05)'}}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider mb-2" style={{color: '#FF4500'}}>Tarifs</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" style={{color: '#1A1A1A'}}>Des offres adaptées à votre ambition</h3>
          <p className="text-sm md:text-base" style={{color: '#4A4A4A'}}>
            Chaque projet est unique. Contactez-nous pour une proposition sur-mesure.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRICING.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-6 md:p-8 rounded-2xl flex flex-col ${
                plan.highlight 
                  ? 'text-white shadow-xl lg:scale-105 z-10' 
                  : 'bg-white transition-colors'
              }`}
              style={plan.highlight 
                ? {backgroundColor: '#1A1A1A', borderWidth: '2px', borderColor: '#FF4500'}
                : {borderWidth: '1px', borderColor: '#EFEEEE'}
              }
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-lg" style={{backgroundColor: '#FF4500'}}>
                  Recommandé
                </div>
              )}
              
              <div className="mb-6 md:mb-8">
                <h4 className={`text-base md:text-lg font-bold mb-2`} style={{color: plan.highlight ? 'white' : '#1A1A1A'}}>{plan.title}</h4>
                <div className="flex items-baseline gap-1">
                  <span className={`text-xl md:text-2xl font-bold`} style={{color: plan.highlight ? 'white' : '#1A1A1A'}}>{plan.price}</span>
                  <span className={`text-sm`} style={{color: plan.highlight ? '#B0B0B0' : '#6B6B6B'}}>{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-3 md:space-y-4 mb-6 md:mb-8 flex-1">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 md:gap-3 text-xs md:text-sm">
                    <Check size={16} className={`shrink-0 mt-0.5 md:w-[18px] md:h-[18px]`} style={{color: plan.highlight ? '#FF4500' : '#22C55E'}} />
                    <span style={{color: plan.highlight ? '#D0D0D0' : '#4A4A4A'}}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                href={LINKS.booking} 
                variant={plan.highlight ? 'primary' : 'outline'} 
                className="w-full justify-center py-3"
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
