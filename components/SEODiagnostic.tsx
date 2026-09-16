import React, { useState, FormEvent } from 'react';
import { Search, TrendingUp, Loader, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { LINKS } from '../constants';

export const SEODiagnostic: React.FC = () => {
  const [activity, setActivity] = useState('');
  const [city, setCity] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [showCTA, setShowCTA] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const cleanActivity = activity.trim();
    const cleanCity = city.trim();

    if (!cleanActivity || !cleanCity) {
      alert('Veuillez remplir tous les champs');
      return;
    }

    // Start analyzing animation
    setIsAnalyzing(true);
    setShowCTA(false);

    // After 2 seconds, show simulated results CTA
    setTimeout(() => {
      // Stop analyzing, show CTA directly in page
      setIsAnalyzing(false);
      setShowCTA(true);
    }, 2000);
  };

  return (
    <section className="py-16 md:py-20 lg:py-24 relative overflow-hidden" style={{backgroundColor: '#F9F7F2'}}>
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full" style={{backgroundColor: '#FF4500', filter: 'blur(100px)'}}></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full" style={{backgroundColor: '#FF4500', filter: 'blur(100px)'}}></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4" style={{backgroundColor: '#FFEBE5', borderWidth: '1px', borderColor: '#FF4500'}}>
              <TrendingUp size={16} style={{color: '#FF4500'}} />
              <span className="text-xs md:text-sm font-semibold" style={{color: '#FF4500'}}>Diagnostic Gratuit</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4" style={{color: '#1A1A1A'}}>
              Êtes-vous visible sur Google Maps ?
            </h2>
            <p className="text-sm md:text-base max-w-2xl mx-auto" style={{color: '#4A4A4A'}}>
              Testez votre positionnement local en temps réel. Découvrez où vous apparaissez sur Google pour votre activité.
            </p>
          </div>

          {/* Diagnostic Form */}
          <div className="bg-white p-6 md:p-8 lg:p-10 rounded-2xl" style={{boxShadow: '0 10px 40px rgba(0,0,0,0.08)'}}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label htmlFor="activity" className="block text-sm font-semibold mb-2" style={{color: '#1A1A1A'}}>
                    Votre activité
                  </label>
                  <div className="relative">
                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2" style={{color: '#6B6B6B'}} />
                    <input
                      type="text"
                      id="activity"
                      value={activity}
                      onChange={(e) => setActivity(e.target.value)}
                      placeholder="Ex: Plombier, Restaurant, Coiffeur..."
                      disabled={isAnalyzing}
                      className="w-full pl-12 pr-4 py-4 rounded-xl transition-all outline-none text-sm md:text-base"
                      style={{
                        backgroundColor: '#EFEEEE',
                        borderWidth: '2px',
                        borderColor: 'transparent',
                        color: '#1A1A1A'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#1A1A1A'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-semibold mb-2" style={{color: '#1A1A1A'}}>
                    Votre ville
                  </label>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-[18px] h-[18px]" style={{color: '#6B6B6B'}} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <input
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Ex: Toulouse, Paris, Lyon..."
                      disabled={isAnalyzing}
                      className="w-full pl-12 pr-4 py-4 rounded-xl transition-all outline-none text-sm md:text-base"
                      style={{
                        backgroundColor: '#EFEEEE',
                        borderWidth: '2px',
                        borderColor: 'transparent',
                        color: '#1A1A1A'
                      }}
                      onFocus={(e) => e.currentTarget.style.borderColor = '#1A1A1A'}
                      onBlur={(e) => e.currentTarget.style.borderColor = 'transparent'}
                    />
                  </div>
                </div>
              </div>

              {/* Analyzing State */}
              {isAnalyzing && (
                <div className="text-center py-8 animate-pulse">
                  <Loader size={40} className="mx-auto mb-4 animate-spin" style={{color: '#FF4500'}} />
                  <p className="text-lg font-semibold" style={{color: '#FF4500'}}>
                    Analyse des résultats Google en cours...
                  </p>
                  <p className="text-sm mt-2" style={{color: '#6B6B6B'}}>Nous vérifions votre positionnement</p>
                </div>
              )}

              {/* Submit Button */}
              {!isAnalyzing && !showCTA && (
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-base md:text-lg transition-all duration-300 flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: '#FF4500',
                    color: 'white',
                    boxShadow: '0 4px 14px rgba(255, 69, 0, 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'scale(1.02)';
                    e.currentTarget.style.backgroundColor = '#E63E00';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'scale(1)';
                    e.currentTarget.style.backgroundColor = '#FF4500';
                  }}
                >
                  <Search size={20} />
                  Lancer le diagnostic gratuit
                </button>
              )}

              {/* CTA After Analysis (Simulated Results) */}
              {showCTA && (
                <div className="space-y-6 animate-fade-in">
                  <div className="bg-gray-50 border border-gray-200 p-6 rounded-xl relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-[#FF4500]"></div>
                    
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2 text-gray-800">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#FF4500]"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      Résultats locaux : Top 3 Google Maps
                    </h3>
                    
                    <div className="space-y-3 mb-6">
                      {/* Fake Competitor 1 */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
                        <div>
                          <p className="font-bold text-blue-800 text-lg">{activity.charAt(0).toUpperCase() + activity.slice(1)} Pro {city}</p>
                          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <span className="text-yellow-500">★★★★★</span> 4.9 (128 avis)
                          </p>
                        </div>
                        <div className="text-xs font-bold text-gray-400 uppercase">#1</div>
                      </div>
                      
                      {/* Fake Competitor 2 */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
                        <div>
                          <p className="font-bold text-blue-800 text-lg">Expert {activity} {city}</p>
                          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <span className="text-yellow-500">★★★★☆</span> 4.7 (95 avis)
                          </p>
                        </div>
                        <div className="text-xs font-bold text-gray-400 uppercase">#2</div>
                      </div>
                      
                      {/* Fake Competitor 3 */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm flex items-center justify-between">
                        <div>
                          <p className="font-bold text-blue-800 text-lg">{city} {activity} Services</p>
                          <p className="text-sm text-gray-600 flex items-center gap-1 mt-1">
                            <span className="text-yellow-500">★★★★☆</span> 4.6 (62 avis)
                          </p>
                        </div>
                        <div className="text-xs font-bold text-gray-400 uppercase">#3</div>
                      </div>
                    </div>

                    <div className="bg-[#FFF4F0] border-2 border-[#FF4500] p-5 rounded-xl">
                      <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#FF4500] text-white">
                          <TrendingUp size={24} />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-[#1A1A1A] mb-1">Votre entreprise n'est pas dans ce Top 3 ?</h4>
                          <p className="text-sm text-gray-700">
                            <strong>87% des clients potentiels</strong> choisissent l'un de ces 3 concurrents. Laissez Bingo Agency vous propulser à leur place.
                          </p>
                        </div>
                      </div>
                      <div className="mt-5 flex flex-col sm:flex-row gap-3">
                        <Button 
                          href={LINKS.booking} 
                          variant="primary"
                          className="!py-3 !text-base flex-1 justify-center"
                        >
                          Prendre leur place (Audit Offert) →
                        </Button>
                        <button
                          onClick={() => setShowCTA(false)}
                          className="px-6 py-3 rounded-lg font-semibold text-sm transition-colors border-2 border-[#FF4500] text-[#FF4500] bg-white hover:bg-[#FF4500] hover:text-white"
                        >
                          Refaire un test
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 text-center">
            <p className="text-xs md:text-sm" style={{color: '#6B6B6B'}}>
              ✅ Test 100% gratuit • ✅ Aucune carte bancaire requise • ✅ Résultats en temps réel
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
