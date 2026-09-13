import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Blog } from '../components/Blog';

export const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = "Blog & Insights - Bingo Agency";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="bg-[#F9F7F2] text-[#1A1A1A] min-h-screen pt-32 pb-24"
    >
      <div className="container mx-auto px-6 mb-16 flex justify-between items-center relative z-10">
        <Link to="/" className="inline-flex items-center gap-2 text-[#FF4500] hover:text-[#1A1A1A] transition-colors">
          <ArrowLeft size={24} />
          <span className="font-bold uppercase tracking-widest text-sm">Retour</span>
        </Link>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
            className="text-[10vw] md:text-[8vw] leading-none font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF6B35] uppercase tracking-tighter mb-8"
          >
            Insights
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-3xl font-medium"
          >
            Découvrez nos dernières stratégies et analyses <br className="hidden md:block" /> pour propulser votre croissance.
          </motion.p>
        </div>

        {/* We reuse the Blog component but you can pass a prop or wrap it nicely */}
        <div className="max-w-7xl mx-auto">
          <Blog onOpenArticle={() => {}} />
        </div>
      </div>
    </motion.div>
  );
};
