import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { LINKS, IMAGES, STATS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden bg-brand-gray">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBg} 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/90 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 text-brand-orange font-semibold text-sm mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
            </span>
            Social Media Marketing Agency à Toulouse
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-brand-dark leading-tight mb-6">
            Propulsez votre <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
              Business
            </span> vers de nouveaux sommets.
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
            De la stratégie digitale à l'identité visuelle, nous transformons votre communication en levier de croissance. Publicité, Social Media, Print & Branding.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href={LINKS.booking} variant="primary" icon={ArrowRight}>
              Audit Gratuit de votre Com'
            </Button>
            <Button href={LINKS.booking} variant="outline">
              Voir nos réalisations
            </Button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {STATS.map((stat, index) => (
              <div key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                <p className="text-3xl font-bold text-brand-orange">{stat.value}</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">{stat.label} <span className="text-gray-400 normal-case">{stat.suffix}</span></p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block animate-slide-up">
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <img 
              src={IMAGES.adsDashboard} 
              alt="Dashboard Ads" 
              className="rounded-2xl shadow-2xl translate-y-8 hover:-translate-y-2 transition-transform duration-500 border-4 border-white"
            />
            <img 
              src={IMAGES.branding} 
              alt="Branding" 
              className="rounded-2xl shadow-2xl translate-y-12 hover:-translate-y-2 transition-transform duration-500 delay-100 border-4 border-white"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-brand-orange/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-brand-orange rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};
