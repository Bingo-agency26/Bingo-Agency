import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieBanner } from './components/CookieBanner';
import { Legal } from './components/Legal';
import { CustomCursor } from './components/CustomCursor';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
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
        <CustomCursor />
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
