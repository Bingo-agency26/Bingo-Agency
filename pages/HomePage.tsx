import React, { useState } from 'react';
import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Portfolio } from '../components/Portfolio';
import { Pricing } from '../components/Pricing';
import { Testimonials } from '../components/Testimonials';
import { Blog } from '../components/Blog';
import { SEODiagnostic } from '../components/SEODiagnostic';
import { Contact } from '../components/Contact';
import { BlogArticle } from '../components/BlogArticle';
import { motion } from 'framer-motion';

export const HomePage: React.FC = () => {
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  const handleOpenArticle = (articleId: number) => {
    setSelectedArticleId(articleId);
  };

  const handleCloseArticle = () => {
    setSelectedArticleId(null);
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
      <Blog onOpenArticle={handleOpenArticle} />
      <SEODiagnostic />
      <Contact />
      <BlogArticle articleId={selectedArticleId} onClose={handleCloseArticle} />
    </motion.div>
  );
};

