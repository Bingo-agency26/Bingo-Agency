import React, { useState, useEffect } from 'react';
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

interface PortfolioProps {
  onViewAll: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ onViewAll }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % projects.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="py-16 md:py-20 lg:py-24 relative overflow-hidden" style={{backgroundColor: '#F9F7F2'}}>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/50 to-transparent pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16">
          <div className="max-w-2xl">
            <h2 className="text-xs md:text-sm font-bold uppercase tracking-wider mb-2" style={{color: '#FF4500'}}>Portfolio</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{color: '#1A1A1A'}}>Nos dernières réalisations</h3>
          </div>
          <button
            onClick={onViewAll}
            className="hidden md:block font-semibold hover:underline mt-4 md:mt-0 transition-colors"
            style={{color: '#FF4500'}}
          >
            Voir tous les projets →
          </button>
        </div>

        {/* Slideshow */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden rounded-2xl aspect-[4/5] transition-all duration-700 ${
                  index === currentSlide
                    ? 'scale-105 z-10'
                    : 'opacity-70 hover:opacity-100'
                }`}
                style={index === currentSlide ? {boxShadow: `0 0 0 4px #FF4500`} : {}}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 flex flex-col justify-end p-6 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}>
                  <span className="text-xs font-bold uppercase tracking-wider mb-1" style={{color: '#FF4500'}}>{project.category}</span>
                  <h4 className="text-white text-xl font-bold mb-2">{project.title}</h4>
                  <div className="inline-block backdrop-blur-sm px-3 py-1 rounded-full text-white text-sm font-medium" style={{backgroundColor: 'rgba(255, 255, 255, 0.2)'}}>
                    {project.stats}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Slideshow Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all`}
                style={{
                  width: index === currentSlide ? '32px' : '8px',
                  backgroundColor: index === currentSlide ? '#FF4500' : '#D0D0D0'
                }}
                onMouseEnter={(e) => { if (index !== currentSlide) e.currentTarget.style.backgroundColor = '#9B9B9B'; }}
                onMouseLeave={(e) => { if (index !== currentSlide) e.currentTarget.style.backgroundColor = '#D0D0D0'; }}
                aria-label={`Voir projet ${index + 1}`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button
            onClick={onViewAll}
            className="font-semibold hover:underline transition-colors"
            style={{color: '#FF4500'}}
          >
            Voir tous les projets →
          </button>
        </div>
      </div>
    </section>
  );
};
