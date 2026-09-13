import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PRICING, LINKS } from '../constants';

const Card = ({ plan, index }: { plan: any, index: number }) => {
  const topOffset = `calc(15vh + ${index * 30}px)`;
  
  return (
    <div 
      className="sticky w-full mb-32"
      style={{ top: topOffset }}
    >
      <motion.div 
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        className={`p-8 md:p-16 rounded-[2.5rem] shadow-2xl border border-white/10 flex flex-col md:flex-row gap-12 justify-between items-center`}
        style={{ 
          backgroundColor: plan.highlight ? '#FF4500' : '#111111',
          transformOrigin: 'top center',
        }}
      >
        <div className="flex-1">
          {plan.highlight && (
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-bold uppercase tracking-widest mb-6">
              Recommandé
            </div>
          )}
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">{plan.title}</h2>
          <ul className="space-y-4 mb-8">
            {plan.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-center gap-4 text-base md:text-lg">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <Check size={18} className="text-white" />
                </div>
                <span className="text-white/90">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-auto shrink-0 flex flex-col items-center gap-4">
          <a 
            href={LINKS.booking} 
            target="_blank" 
            rel="noopener noreferrer"
            className={`inline-flex justify-center items-center px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 w-full md:w-auto ${
              plan.highlight ? 'bg-white text-[#FF4500]' : 'bg-[#FF4500] text-white'
            }`}
          >
            Obtenir un devis
          </a>
          <p className="text-sm text-white/50">Consultation gratuite de 30 min</p>
        </div>
      </motion.div>
    </div>
  );
};

export const PricingPage: React.FC = () => {
  useEffect(() => {
    document.title = "Tarifs Détaillés - Bingo Agency";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="bg-[#050505] text-white min-h-[300vh] pt-32 pb-24"
    >
      <div className="container mx-auto px-6 mb-24 flex justify-between items-center">
        <Link to="/" className="inline-flex items-center gap-2 text-[#FF4500] hover:text-white transition-colors">
          <ArrowLeft size={24} />
          <span className="font-bold uppercase tracking-widest text-sm">Retour</span>
        </Link>
      </div>

      <div className="text-center mb-32 px-4">
        <motion.h1 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-700 uppercase tracking-tighter mb-6"
        >
          Investissez<br/>Intelligemment
        </motion.h1>
        <motion.p 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-xl md:text-3xl text-neutral-400 font-light max-w-3xl mx-auto"
        >
          Des stratégies d'acquisition conçues pour maximiser votre retour sur investissement.
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto relative px-4">
        {PRICING.map((plan, index) => (
          <Card key={index} plan={plan} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

