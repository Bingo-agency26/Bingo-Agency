import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';
import { LINKS, IMAGES, STATS } from '../constants';
import { motion, Variants } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-28 md:pt-32 pb-20 overflow-hidden" style={{backgroundColor: '#F9F7F2'}}>
      {/* Background Image with Overlay */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src={IMAGES.heroBg} 
          alt="Office Background" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#F9F7F2] via-[#F9F7F2]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6" style={{backgroundColor: '#FFEBE5', borderColor: '#FF4500', color: '#FF4500'}}>
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{backgroundColor: '#FF4500'}}></span>
              <span className="relative inline-flex rounded-full h-3 w-3" style={{backgroundColor: '#FF4500'}}></span>
            </span>
            <span className="font-semibold text-xs md:text-sm">Social Media Marketing Agency à Toulouse</span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight mb-6" style={{color: '#1A1A1A'}}>
            Propulsez votre <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4500] to-[#FF6B35]">
              Business
            </span> vers de nouveaux sommets.
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl mb-8 leading-relaxed max-w-xl" style={{color: '#4A4A4A'}}>
            De la stratégie digitale à l'identité visuelle, nous transformons votre communication en levier de croissance. Publicité, Social Media, Print & Branding.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 md:gap-5">
            <Button href={LINKS.booking} variant="primary" icon={ArrowRight}>
              Audit Gratuit de votre Com'
            </Button>
            <Button href="#services" variant="outline">
              Découvrir nos services
            </Button>
          </motion.div>

          {/* Stats - Responsive Grid */}
          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {STATS.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="bg-white p-3 md:p-4 rounded-xl shadow-sm" 
                style={{borderWidth: '1px', borderColor: '#EFEEEE'}}
              >
                <p className="text-2xl md:text-3xl font-bold" style={{color: '#FF4500'}}>{stat.value}</p>
                <p className="text-[10px] md:text-xs font-medium uppercase tracking-wide mt-1 leading-tight" style={{color: '#6B6B6B'}}>{stat.label} <span style={{color: '#9B9B9B'}} className="normal-case">{stat.suffix}</span></p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 50 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 grid grid-cols-2 gap-4">
            <motion.img 
              whileHover={{ scale: 1.05, rotate: -2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              src={IMAGES.adsDashboard} 
              alt="Dashboard Ads" 
              className="rounded-2xl shadow-2xl translate-y-8 border-4 border-white cursor-pointer"
            />
            <motion.img 
              whileHover={{ scale: 1.05, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              src={IMAGES.branding} 
              alt="Branding" 
              className="rounded-2xl shadow-2xl translate-y-12 border-4 border-white cursor-pointer"
            />
          </div>
          {/* Decorative Elements */}
          <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-64 h-64 rounded-full blur-3xl" 
            style={{backgroundColor: 'rgba(255, 69, 0, 0.1)'}}
          ></motion.div>
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full blur-3xl" 
            style={{backgroundColor: 'rgba(255, 107, 53, 0.1)'}}
          ></motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 rounded-full flex justify-center p-1" style={{borderColor: 'rgba(255, 69, 0, 0.3)'}}>
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full" 
            style={{backgroundColor: '#FF4500'}}
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};
