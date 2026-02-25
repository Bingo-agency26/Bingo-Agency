import React from 'react';
import { IMAGES } from '../constants';

const projects = [
  {
    title: "Campagne E-commerce Mode",
    category: "Google Ads & Social",
    image: IMAGES.ecommerce,
    stats: "ROAS x5"
  },
  {
    title: "Refonte Identité Visuelle",
    category: "Branding",
    image: IMAGES.branding,
    stats: "Nouveau Logo"
  },
  {
    title: "Stratégie Immobilière",
    category: "Lead Gen",
    image: IMAGES.adsDashboard,
    stats: "+45 Leads/mois"
  },
  {
    title: "Brochures & PLV Luxe",
    category: "Print",
    image: IMAGES.print,
    stats: "Impression Offset"
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-brand-gray relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Portfolio</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">Nos dernières réalisations</h3>
          </div>
          <a href="#" className="hidden md:block text-brand-blue font-semibold hover:underline mt-4 md:mt-0">
            Voir tous les projets →
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-brand-blue text-xs font-bold uppercase tracking-wider mb-1">{project.category}</span>
                <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
                <div className="inline-block bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium">
                  {project.stats}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <a href="#" className="text-brand-blue font-semibold hover:underline">
            Voir tous les projets →
          </a>
        </div>
      </div>
    </section>
  );
};
