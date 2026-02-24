import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { LINKS, IMAGES, STATS } from '../constants';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden bg-brand-gray">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={IMAGES.heroBg} 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-white via-white/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="max-w-4xl animate-fade-in">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-orange-50 border border-orange-100 text-brand-orange font-semibold text-base md:text-lg mb-8">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-brand-orange"></span>
            </span>
            Agence de Communication 360° à Toulouse
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-brand-dark leading-tight mb-8">
            Propulsez votre <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-500">
              Business
            </span> vers de nouveaux sommets.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
            De la stratégie digitale à l'identité visuelle, nous transformons votre communication en levier de croissance. Publicité, Social Media, Print & Branding.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5">
            <Button href={LINKS.booking} variant="primary" icon={ArrowRight} className="!px-8 !py-4 !text-xl">
              Audit Gratuit de votre Com'
            </Button>
            <Button href="#portfolio" variant="outline" className="!px-8 !py-4 !text-xl">
              Voir nos réalisations
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="text-4xl md:text-5xl font-bold text-brand-orange">{stat.value}</p>
                <p className="text-sm md:text-base text-gray-500 font-medium uppercase tracking-wide mt-2">{stat.label} <span className="text-gray-400 normal-case">{stat.suffix}</span></p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block animate-slide-up">
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <img 
              src={IMAGES.adsDashboard} 
              alt="Dashboard Ads" 
              className="rounded-2xl shadow-2xl translate-y-8 hover:-translate-y-2 transition-transform duration-500"
            />
            <img 
              src={IMAGES.branding} 
              alt="Branding" 
              className="rounded-2xl shadow-2xl translate-y-12 hover:-translate-y-2 transition-transform duration-500 delay-100"
            />
          </div>
          {/* Decorative Elements */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};
