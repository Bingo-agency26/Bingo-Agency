import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ServicesPage: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  useEffect(() => {
    document.title = "Nos Services - Bingo Agency";
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
      className="bg-[#1A1A1A] text-white min-h-screen pt-32"
    >
      <div className="container mx-auto px-6 mb-12 flex justify-between items-center">
        <Link to="/" className="inline-flex items-center gap-2 text-[#FF4500] hover:text-white transition-colors" data-cursor="hover">
          <ArrowLeft size={24} />
          <span className="font-bold uppercase tracking-widest text-sm">Retour</span>
        </Link>
        <h1 className="text-5xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 uppercase tracking-tighter">
          Expertises
        </h1>
      </div>

      {/* Horizontal Scroll Section */}
      <div ref={containerRef} className="h-[400vh] relative">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-12 px-12 md:px-32 w-[400vw]">
            
            {/* Service 1 */}
            <div className="w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center">
              <span className="text-[#FF4500] text-2xl font-bold mb-4 block">01 /</span>
              <h2 className="text-6xl md:text-9xl font-black leading-none mb-8 tracking-tighter">
                PUBLICITÉ<br/>DIGITALE
              </h2>
              <p className="text-xl md:text-3xl text-gray-400 max-w-2xl font-light leading-relaxed">
                Dominez votre marché avec des campagnes ultra-ciblées sur Google et les réseaux sociaux. Nous transformons chaque clic en opportunité de croissance.
              </p>
            </div>

            {/* Service 2 */}
            <div className="w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center">
              <span className="text-[#FF4500] text-2xl font-bold mb-4 block">02 /</span>
              <h2 className="text-6xl md:text-9xl font-black leading-none mb-8 tracking-tighter">
                SOCIAL<br/>MEDIA
              </h2>
              <p className="text-xl md:text-3xl text-gray-400 max-w-2xl font-light leading-relaxed">
                Création de contenu viral, stratégie d'engagement, et community management pour bâtir une audience fidèle et engagée.
              </p>
            </div>

            {/* Service 3 */}
            <div className="w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center">
              <span className="text-[#FF4500] text-2xl font-bold mb-4 block">03 /</span>
              <h2 className="text-6xl md:text-9xl font-black leading-none mb-8 tracking-tighter">
                BRANDING<br/>& DESIGN
              </h2>
              <p className="text-xl md:text-3xl text-gray-400 max-w-2xl font-light leading-relaxed">
                De la création de logo à l'identité visuelle complète, nous concevons des marques mémorables qui marquent les esprits.
              </p>
            </div>
            
            {/* Service 4 */}
            <div className="w-[80vw] md:w-[60vw] flex-shrink-0 flex flex-col justify-center">
              <span className="text-[#FF4500] text-2xl font-bold mb-4 block">04 /</span>
              <h2 className="text-6xl md:text-9xl font-black leading-none mb-8 tracking-tighter">
                DÉV.<br/>WEB
              </h2>
              <p className="text-xl md:text-3xl text-gray-400 max-w-2xl font-light leading-relaxed">
                Des sites vitrines et e-commerce ultra performants, optimisés pour la conversion et le référencement naturel.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

