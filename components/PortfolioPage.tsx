import React, { useState } from 'react';
import { X, Filter } from 'lucide-react';
import { PORTFOLIO_CATEGORIES } from '../constants';

interface PortfolioPageProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  if (!isOpen) return null;

  const filteredCategories = selectedCategory === 'all'
    ? PORTFOLIO_CATEGORIES
    : PORTFOLIO_CATEGORIES.filter(cat => cat.id === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-xl mb-8 p-6 md:p-8 sticky top-8 z-10">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-2">Nos Réalisations</h2>
                <p className="text-gray-600 text-sm md:text-base">Découvrez nos projets par catégorie</p>
              </div>
              <button
                onClick={onClose}
                className="p-3 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fermer"
              >
                <X size={24} />
              </button>
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              <Filter size={20} className="text-gray-400 shrink-0" />
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === 'all'
                    ? 'bg-brand-orange text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Tous les projets
              </button>
              {PORTFOLIO_CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === category.id
                      ? 'bg-brand-orange text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Categories Grid */}
          <div className="space-y-12">
            {filteredCategories.map((category) => (
              <div key={category.id} className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-brand-dark mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{category.description}</p>
                </div>

                {/* Projects Grid */}
                {category.projects.length === 0 ? (
                  <div className="border-2 border-dashed border-gray-200 rounded-xl p-12 text-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500 font-medium mb-2">Projets à venir</p>
                    <p className="text-gray-400 text-sm">Cette catégorie sera bientôt remplie avec nos réalisations</p>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.projects.map((project, index) => (
                      <div
                        key={index}
                        className="group relative aspect-square rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                          <h4 className="text-white font-bold text-lg mb-1">{project.title}</h4>
                          <p className="text-gray-200 text-sm">{project.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer CTA */}
          <div className="bg-gradient-to-r from-brand-orange to-yellow-500 rounded-2xl p-8 md:p-12 text-center text-white mt-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Votre projet est unique</h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Chaque réalisation est conçue sur-mesure. Discutons de vos objectifs et créons ensemble quelque chose d'exceptionnel.
            </p>
            <a
              href="https://calendly.com/bingo-agency-fr/30min"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-orange rounded-full font-bold hover:shadow-xl transition-all"
            >
              Démarrer un projet
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
