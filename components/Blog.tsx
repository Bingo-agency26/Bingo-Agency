import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import { BlogPost } from './BlogPost';

export const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<typeof BLOG_POSTS[0] | null>(null);

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-2">Blog & Actualités</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">Conseils d'experts</h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <article 
              key={index} 
              className="group cursor-pointer flex flex-col h-full"
              onClick={() => setSelectedPost(post)}
            >
              <div className="overflow-hidden rounded-xl mb-4 aspect-video relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-brand-blue uppercase tracking-wide">{post.category}</span>
                <span className="text-xs text-gray-400">• 5 min de lecture</span>
              </div>
              <h4 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-blue transition-colors leading-tight">
                {post.title}
              </h4>
              <p className="text-sm text-gray-500 mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="mt-auto pt-2">
                <span className="inline-flex items-center text-sm font-medium text-brand-dark group-hover:text-brand-blue transition-colors">
                  Lire l'article <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>

      <BlogPost 
        post={selectedPost} 
        isOpen={!!selectedPost} 
        onClose={() => setSelectedPost(null)} 
      />
    </section>
  );
};
