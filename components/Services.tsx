import React from 'react';
import { MousePointerClick, Share2, Printer, PenTool, Layout, BarChart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { LINKS } from '../constants';
import { motion, Variants } from 'framer-motion';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: MousePointerClick,
    title: "Publicité Digitale",
    description: "Dominez les résultats de recherche et les réseaux display.",
    features: ["Google Ads & Bing Ads", "Campagnes Shopping & PMax", "Retargeting & Display", "Optimisation du ROAS"],
    color: "#FFEBE5",
    iconColor: "#FF4500"
  },
  {
    icon: Share2,
    title: "Réseaux Sociaux",
    description: "Engagez votre communauté là où elle se trouve.",
    features: ["Stratégie Social Media", "Création de Contenu (Reels/Stories)", "Community Management", "Facebook, Insta, TikTok, LinkedIn"],
    color: "#FFD6CC",
    iconColor: "#E63E00"
  },
  {
    icon: Printer,
    title: "Print & Supports",
    description: "Matérialisez votre image de marque.",
    features: ["Flyers & Brochures", "Cartes de Visite", "PLV & Signalétique", "Distribution & Logistique"],
    color: "#FFEBE5",
    iconColor: "#FF5722"
  },
  {
    icon: PenTool,
    title: "Identité Visuelle",
    description: "Une image forte pour une marque mémorable.",
    features: ["Création de Logo", "Charte Graphique", "Naming & Branding", "Guidelines"],
    color: "#FFD6CC",
    iconColor: "#E63E00"
  },
  {
    icon: Layout,
    title: "Web & SEO",
    description: "Votre vitrine digitale, performante et visible.",
    features: ["Sites Vitrines & E-commerce", "Référencement Naturel (SEO)", "Maintenance & Sécurité", "UX/UI Design"],
    color: "#FFEBE5",
    iconColor: "#FF4500"
  }
];

export const Services: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section id="services" className="py-24" style={{backgroundColor: '#FFFFFF'}}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{backgroundColor: '#FFF4F0', borderColor: '#FFD6CC', color: '#FF4500'}}>
            <span className="font-semibold text-sm tracking-wide uppercase">Nos Expertises</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6" style={{color: '#1A1A1A'}}>
            Une approche <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF6B35]">360°</span> pour votre croissance
          </h2>
          <p className="text-xl leading-relaxed" style={{color: '#6B6B6B'}}>
            Nous combinons créativité et data pour déployer des stratégies d'acquisition performantes.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="rounded-2xl p-8 relative overflow-hidden group shadow-lg shadow-gray-100 hover:shadow-xl transition-shadow"
              style={{backgroundColor: '#FFFFFF', borderWidth: '1px', borderColor: '#EFEEEE'}}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                style={{backgroundColor: service.color, color: service.iconColor}}
              >
                <service.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-bold mb-4" style={{color: '#1A1A1A'}}>{service.title}</h3>
              <p className="mb-6" style={{color: '#6B6B6B'}}>{service.description}</p>
              
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm font-medium" style={{color: '#4A4A4A'}}>
                    <CheckCircle2 size={16} style={{color: '#FF4500'}} className="flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="absolute top-0 right-0 p-8 opacity-5">
                <service.icon size={120} strokeWidth={1} />
              </div>
            </motion.div>
          ))}
          
          <motion.div 
            variants={itemVariants}
            className="rounded-2xl p-8 relative overflow-hidden group shadow-lg shadow-gray-100 transition-shadow flex flex-col items-center justify-center text-center"
            style={{backgroundColor: '#FF4500', color: '#FFFFFF'}}
          >
            <h3 className="text-2xl font-bold mb-4">Voir l'expérience complète</h3>
            <p className="mb-8 opacity-90">Découvrez comment nous travaillons en détail et l'impact de nos stratégies.</p>
            <Link to="/services" className="inline-flex items-center gap-2 bg-white text-[#FF4500] px-6 py-3 rounded-xl font-bold hover:bg-[#FFF4F0] transition-colors" data-cursor="hover">
              Explorer nos services <ArrowRight size={20} />
            </Link>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};
