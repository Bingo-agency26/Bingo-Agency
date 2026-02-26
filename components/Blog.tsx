import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

interface BlogProps {
  onOpenArticle: (articleId: number) => void;
}

export const Blog: React.FC<BlogProps> = ({ onOpenArticle }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const articlesPerSlide = 3;
  const totalSlides = Math.ceil(BLOG_POSTS.length / articlesPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleArticles = BLOG_POSTS.slice(
    currentSlide * articlesPerSlide,
    (currentSlide + 1) * articlesPerSlide
  );

  return (
    <section id="blog" className="py-16 md:py-20 lg:py-24 bg-brand-gray relative overflow-hidden">
      <div className="absolute -right-20 top-20 w-96 h-96 bg-brand-orange/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 md:mb-16 gap-4">
          <div>
            <h2 className="text-xs md:text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Blog & Actualités</h2>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark">Conseils Marketing & Com'</h3>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              aria-label="Article précédent"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white border border-gray-200 hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all"
              aria-label="Article suivant"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleArticles.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                onClick={() => onOpenArticle(post.id)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-brand-orange text-white text-xs font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <button className="text-brand-orange font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                    Lire l'article
                    <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide
                    ? 'w-8 bg-brand-orange'
                    : 'w-2 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Aller à la page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
