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
      <Blog onOpenArticle={handleOpenArticle} />
      <SEODiagnostic />
      <Contact />
      <BlogArticle article={selectedArticle} onClose={handleCloseArticle} />
    </motion.div>
  );
};

