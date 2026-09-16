import React, { useState, Suspense, lazy } from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Pricing } from '../components/Pricing';
import { SEODiagnostic } from '../components/SEODiagnostic';
import { BlogArticle } from '../components/BlogArticle';
import { motion } from 'framer-motion';

const Blog = lazy(() => import('../components/Blog').then(m => ({ default: m.Blog })));
const Contact = lazy(() => import('../components/Contact').then(m => ({ default: m.Contact })));

export const HomePage: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<any | null>(null);

  const handleOpenArticle = (article: any) => {
    setSelectedArticle(article);
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      <Hero />
      <Services />
      <Pricing />
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Chargement...</div>}>
        <Blog onOpenArticle={handleOpenArticle} />
      </Suspense>
      <SEODiagnostic />
      <Suspense fallback={<div className="h-64 flex items-center justify-center">Chargement...</div>}>
        <Contact />
      </Suspense>
      <BlogArticle article={selectedArticle} onClose={handleCloseArticle} />
    </motion.div>
  );
};

