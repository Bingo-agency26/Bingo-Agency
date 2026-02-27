import React, { useEffect } from 'react';
import { X, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../constants';

interface BlogArticleProps {
  articleId: number | null;
  onClose: () => void;
}

export const BlogArticle: React.FC<BlogArticleProps> = ({ articleId, onClose }) => {
  const article = articleId ? BLOG_POSTS.find(post => post.id === articleId) : null;

  useEffect(() => {
    if (articleId) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [articleId]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!article) return null;

  return (
    <div className="fixed inset-0 z-[120] overflow-y-auto" style={{backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
      {/* Fixed Close Button - Always visible */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[130] p-3 rounded-full transition-all duration-200"
        style={{
          backgroundColor: '#FF4500',
          color: 'white',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = '#E63E00';
          e.currentTarget.style.transform = 'scale(1.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = '#FF4500';
          e.currentTarget.style.transform = 'scale(1)';
        }}
        aria-label="Fermer l'article"
      >
        <X size={24} strokeWidth={2.5} />
      </button>

      <div className="min-h-screen py-20 md:py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header with metadata */}
            <div className="bg-white border-b px-4 md:px-6 py-4" style={{borderColor: '#EFEEEE'}}>
              <div className="flex flex-wrap items-center gap-3 text-xs md:text-sm" style={{color: '#6B6B6B'}}>
                <span className="px-3 py-1 rounded-full font-semibold text-xs" style={{backgroundColor: '#FF4500', color: 'white'}}>
                  {article.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {new Date(article.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {article.readTime}
                </span>
              </div>
            </div>

            {/* Article image */}
            <div className="relative h-48 md:h-96 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article content */}
            <div className="p-6 md:p-12">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight" style={{color: '#1A1A1A'}}>
                {article.title}
              </h1>

              <p className="text-base md:text-lg mb-6 md:mb-8 leading-relaxed pl-4 md:pl-6 italic" style={{color: '#4A4A4A', borderLeft: '4px solid #FF4500'}}>
                {article.excerpt}
              </p>

              <div
                className="prose prose-sm md:prose-lg max-w-none"
                style={{color: '#1A1A1A'}}
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* CTA Footer */}
              <div className="mt-8 md:mt-12 p-6 rounded-xl" style={{background: 'linear-gradient(135deg, #FF4500 0%, #FF6B35 100%)', color: 'white'}}>
                <h3 className="text-lg md:text-xl font-bold mb-2">Besoin d'aide pour votre stratégie ?</h3>
                <p className="mb-4 text-sm" style={{color: 'rgba(255,255,255,0.9)'}}>
                  Discutons de vos objectifs marketing et construisons ensemble un plan d'action sur-mesure.
                </p>
                <a
                  href="https://calendly.com/bingo-agency-fr/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full font-bold transition-all"
                  style={{color: '#FF4500'}}
                  onMouseEnter={(e) => e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.15)'}
                  onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'none'}
                >
                  Réserver un Audit Gratuit
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
