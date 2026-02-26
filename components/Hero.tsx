import React from 'react';
import { ArrowRight, TrendingUp, Users, Award, Zap } from 'lucide-react';
import { Button } from './Button';
import { LINKS, STATS } from '../constants';

export const Hero: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-orange-50/30 to-white pt-20 md:pt-24 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>
      <div className="absolute top-20 right-10 w-72 h-72 bg-brand-orange/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-orange-200 rounded-full px-4 py-2 mb-6 shadow-sm hover:shadow-md transition-shadow">
            <Zap size={16} className="text-brand-orange" />
            <span className="text-sm font-semibold text-gray-700">Agence Marketing Digital • Toulouse</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-dark mb-6 leading-tight">
            Boostez votre business avec une{' '}
            <span className="text-brand-orange">stratégie marketing gagnante</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Pub digitale, réseaux sociaux, print & web. Bingo Agency transforme vos idées en résultats mesurables.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              variant="primary"
              className="px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl hover:scale-105"
              onClick={scrollToContact}
            >
              Démarrer mon projet
              <ArrowRight size={18} className="ml-2" />
            </Button>
            <Button
              href={LINKS.booking}
              variant="outline"
              className="px-8 py-4 text-base font-semibold bg-white hover:bg-gray-50 shadow-md hover:shadow-lg"
            >
              🎁 Audit Gratuit
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, label: 'Clics/CTR Ads', value: '+40%', color: 'text-green-600' },
              { icon: Users, label: 'Croissance Followers', value: '+25%', color: 'text-blue-600' },
              { icon: Award, label: 'Impressions Print', value: '50k/mois', color: 'text-purple-600' },
              { icon: Zap, label: 'Projets Réalisés', value: '200+', color: 'text-orange-600' }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${stat.color.replace('text-', 'from-')} to-${stat.color.replace('text-', '')}0/20 mb-3`}>
                    <Icon size={24} className={stat.color} />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-brand-dark mb-1">{stat.value}</div>
                  <div className="text-xs md:text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
