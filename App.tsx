import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Legal } from './components/Legal';
import { PortfolioPage } from './components/PortfolioPage';
import { BlogArticle } from './components/BlogArticle';
import emailjs from '@emailjs/browser';

function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState<number | null>(null);

  // Initialize EmailJS on app load
  useEffect(() => {
    emailjs.init('HrhrOWrVLj8Pk_4_X');
    console.log('EmailJS initialized');
  }, []);

  const handleOpenArticle = (articleId: number) => {
    setSelectedArticleId(articleId);
  };

  const handleCloseArticle = () => {
    setSelectedArticleId(null);
  };

  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-orange selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio onViewAll={() => setIsPortfolioOpen(true)} />
        <Pricing />
        <Testimonials />
        <Blog onOpenArticle={handleOpenArticle} />
        <Contact />
      </main>
      <Footer onOpenLegal={() => setIsLegalOpen(true)} />
      <CookieBanner />
      <Legal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
      <PortfolioPage isOpen={isPortfolioOpen} onClose={() => setIsPortfolioOpen(false)} />
      <BlogArticle articleId={selectedArticleId} onClose={handleCloseArticle} />
    </div>
  );
}

export default App;
