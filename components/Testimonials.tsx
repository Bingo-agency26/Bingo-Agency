import React, { useState, useEffect } from 'react';
import { Quote, Star } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Témoignages</h2>
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-dark mb-4">
            Ils nous font confiance
          </h3>
          <p className="text-base md:text-lg text-gray-600">
            Plus de 200 entreprises accompagnées depuis 2020.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative border-2 border-gray-100">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-brand-orange to-orange-600 rounded-full flex items-center justify-center shadow-lg">
              <Quote size={24} className="text-white" />
            </div>

            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center font-medium">
              "{TESTIMONIALS[currentIndex].text}"
            </p>

            <div className="text-center">
              <p className="font-bold text-brand-dark text-lg">{TESTIMONIALS[currentIndex].author}</p>
              <p className="text-sm text-gray-500">{TESTIMONIALS[currentIndex].role}</p>
            </div>

            <div className="flex justify-center gap-2 mt-8">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'w-8 bg-brand-orange' 
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
