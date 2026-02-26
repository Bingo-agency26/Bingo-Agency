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
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
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
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <div className="min-h-screen py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Header with close button */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex justify-between items-center z-10">
              <div className="flex items-center gap-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-brand-orange text-white rounded-full font-semibold text-xs">
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
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                aria-label="Fermer l'article"
              >
                <X size={24} />
              </button>
            </div>

            {/* Article image */}
            <div className="relative h-64 md:h-96 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article content */}
            <div className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-brand-dark mb-6 leading-tight">
                {article.title}
              </h1>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed border-l-4 border-brand-orange pl-6 italic">
                {article.excerpt}
              </p>

              <div
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              {/* CTA Footer */}
              <div className="mt-12 p-6 bg-gradient-to-r from-brand-orange to-yellow-500 rounded-xl text-white">
                <h3 className="text-xl font-bold mb-2">Besoin d'aide pour votre stratégie ?</h3>
                <p className="text-white/90 mb-4 text-sm">
                  Discutons de vos objectifs marketing et construisons ensemble un plan d'action sur-mesure.
                </p>
                <a
                  href="https://calendly.com/bingo-agency-fr/30min"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-brand-orange rounded-full font-bold hover:shadow-xl transition-all"
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
