import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BlogArticle } from '../components/BlogArticle';
import { BLOG_POSTS } from '../constants';
import { db } from '../firebase';
import { collection, getDocs, query } from 'firebase/firestore';

export const BlogPage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);
  const [articles, setArticles] = useState<any[]>(BLOG_POSTS);

  useEffect(() => {
    document.title = "Blog & Insights - Bingo Agency";
    window.scrollTo(0, 0);

    const fetchArticles = async () => {
      try {
        const q = query(collection(db, 'articles'));
        const querySnapshot = await getDocs(q);
        const fetchedArticles = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as any)
        }));
        
        fetchedArticles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        const fetchedTitles = fetchedArticles.map(a => a.title);
        const uniqueHardcodedPosts = BLOG_POSTS.filter(post => !fetchedTitles.includes(post.title));
        
        setArticles([...fetchedArticles, ...uniqueHardcodedPosts]);
      } catch (error) {
        console.error("Erreur de récupération :", error);
      }
    };
    fetchArticles();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F9F7F2] text-[#1A1A1A] min-h-screen pt-32 pb-24"
    >
      <div className="container mx-auto px-6 mb-12 flex justify-between items-center relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-[#FF4500] hover:text-[#1A1A1A] transition-colors">
          <ArrowLeft size={24} />
          <span className="font-bold uppercase tracking-widest text-sm">Retour</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-16">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-[10vw] md:text-[6vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF6B35] uppercase tracking-tighter mb-6"
          >
            Tous nos articles
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl font-medium text-gray-700"
          >
            Explorez notre bibliothèque de conseils, d'astuces et de stratégies<br className="hidden md:block" /> pour dominer votre marché local et national.
          </motion.p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {articles.map((post, index) => (
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group cursor-pointer flex flex-col"
                onClick={() => setSelectedArticle(post)}
              >
                <div className="relative h-56 overflow-hidden shrink-0">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#FF4500] text-white text-xs font-bold rounded-full shadow-md">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col grow">
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

                  <h4 className="text-xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#FF4500] transition-colors line-clamp-2">
                    {post.title}
                  </h4>

                  <p className="text-sm text-gray-600 mb-6 line-clamp-3 grow">
                    {post.excerpt}
                  </p>

                  <button className="text-[#FF4500] font-bold text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                    Lire l'article
                    <ArrowRight size={16} />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
      
      <BlogArticle article={selectedArticle} onClose={() => setSelectedArticle(null)} />
    </motion.div>
  );
};

