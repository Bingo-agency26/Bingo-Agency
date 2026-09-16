import React, { useState, useEffect, Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Legal } from './components/Legal';
import { AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const HomePage = lazy(() => import('./pages/HomePage').then(module => ({ default: module.HomePage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(module => ({ default: module.ServicesPage })));
const PricingPage = lazy(() => import('./pages/PricingPage').then(module => ({ default: module.PricingPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then(module => ({ default: module.BlogPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));
const AdminPage = lazy(() => import('./pages/AdminPage').then(module => ({ default: module.AdminPage })));

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div className="h-screen flex items-center justify-center text-[#FF4500] font-bold">Chargement...</div>}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  useEffect(() => {
    emailjs.init('HrhrOWrVLj8Pk_4_X');
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-orange selection:text-white">
        <Header />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer onOpenLegal={() => setIsLegalOpen(true)} />
        <CookieBanner />
        <Legal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
      </div>
    </Router>
  );
}

export default App;
