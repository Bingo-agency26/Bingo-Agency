import React, { useEffect } from 'react';
import { X, Calendar, User, ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { LINKS } from '../constants';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    category: string;
    image: string;
    content: string;
    excerpt: string;
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export const BlogPost: React.FC<BlogPostProps> = ({ post, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-0 md:p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white w-full h-full md:h-auto md:max-h-[90vh] md:max-w-4xl md:rounded-2xl shadow-2xl overflow-y-auto animate-fade-in flex flex-col">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="fixed md:absolute top-4 right-4 z-50 p-2 bg-white/90 backdrop-blur rounded-full shadow-lg hover:bg-gray-100 transition-colors text-brand-dark"
        >
          <X size={24} />
        </button>

        {/* Hero Image */}
        <div className="relative h-64 md:h-80 shrink-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6 md:p-10 text-white">
            <span className="inline-block px-3 py-1 bg-brand-blue rounded-full text-xs font-bold uppercase tracking-wide mb-3">
              {post.category}
            </span>
            <h2 className="text-2xl md:text-4xl font-bold leading-tight">
              {post.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 flex-1">
          <div className="flex items-center gap-6 text-sm text-gray-500 mb-8 border-b border-gray-100 pb-6">
            <div className="flex items-center gap-2">
              <User size={16} />
              <span>Par L'Équipe Bingo</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>Octobre 2025</span>
            </div>
          </div>

          <div 
            className="prose prose-lg max-w-none text-gray-600 prose-headings:text-brand-dark prose-a:text-brand-blue"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>

          {/* CTA Footer */}
          <div className="mt-12 pt-8 border-t border-gray-100 bg-orange-50/50 -mx-6 -mb-6 md:-mx-10 md:-mb-10 p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Ce sujet vous inspire ?</h3>
            <p className="text-gray-600 mb-6 max-w-xl mx-auto">
              Discutons de la manière dont nous pouvons appliquer ces stratégies à votre entreprise.
            </p>
            <Button href={LINKS.booking} variant="primary" icon={ArrowRight}>
              Réserver mon audit gratuit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
