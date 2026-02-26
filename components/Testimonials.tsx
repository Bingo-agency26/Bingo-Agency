import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 text-white overflow-hidden relative" style={{backgroundColor: '#1A1A1A'}}>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-[rgba(255,69,0,0.1)] via-transparent to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-wider mb-2" style={{color: '#FF4500'}}>Témoignages</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ils nous font confiance</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className="backdrop-blur-sm p-8 rounded-2xl relative" style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', borderWidth: '1px', borderColor: 'rgba(255, 255, 255, 0.1)'}}>
              <Quote className="absolute top-6 right-6" size={48} style={{color: 'rgba(255, 69, 0, 0.2)'}} />
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="mb-6 leading-relaxed italic" style={{color: '#D0D0D0'}}>
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-bold text-white">{testimonial.author}</p>
                <p className="text-sm" style={{color: '#FF4500'}}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
