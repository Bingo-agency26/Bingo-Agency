import React, { useState } from 'react';
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

function App() {
  const [isLegalOpen, setIsLegalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-brand-dark selection:bg-brand-blue selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer onOpenLegal={() => setIsLegalOpen(true)} />
      <CookieBanner />
      <Legal isOpen={isLegalOpen} onClose={() => setIsLegalOpen(false)} />
    </div>
  );
}

export default App;
