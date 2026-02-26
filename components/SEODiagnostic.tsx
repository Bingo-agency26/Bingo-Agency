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

    // After 2 seconds, open Google search and show CTA
    setTimeout(() => {
      const searchQuery = `${cleanActivity}+${cleanCity}`;
      const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;
      
      // Open Google search in new tab
      window.open(googleUrl, '_blank');
      
      // Stop analyzing, show CTA
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

              {/* CTA After Analysis */}
              {showCTA && (
                <div className="space-y-4 animate-fade-in">
                  <div className="p-6 rounded-xl" style={{backgroundColor: '#FFF4F0', borderWidth: '2px', borderColor: '#FF4500'}}>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{backgroundColor: '#FF4500'}}>
                        <ExternalLink size={24} style={{color: 'white'}} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-bold mb-2" style={{color: '#1A1A1A'}}>
                          Vous n'êtes pas dans le Top 3 ?
                        </h3>
                        <p className="text-sm mb-4" style={{color: '#4A4A4A'}}>
                          <strong>87% des clics</strong> vont aux 3 premiers résultats Google Maps. Si vous n'y êtes pas, vous perdez des clients chaque jour.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3">
                          <Button 
                            href={LINKS.booking} 
                            variant="primary"
                            className="!py-3 !text-base flex-1 justify-center"
                          >
                            Booster mon classement →
                          </Button>
                          <button
                            onClick={() => setShowCTA(false)}
                            className="px-6 py-3 rounded-lg font-semibold text-sm transition-colors"
                            style={{color: '#FF4500', borderWidth: '2px', borderColor: '#FF4500', backgroundColor: 'white'}}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundColor = '#FF4500';
                              e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundColor = 'white';
                              e.currentTarget.style.color = '#FF4500';
                            }}
                          >
                            Nouveau test
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4 text-center">
                    <div className="p-4 rounded-lg" style={{backgroundColor: '#EFEEEE'}}>
                      <p className="text-2xl font-bold mb-1" style={{color: '#FF4500'}}>+40%</p>
                      <p className="text-xs" style={{color: '#6B6B6B'}}>Visibilité locale moyenne</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{backgroundColor: '#EFEEEE'}}>
                      <p className="text-2xl font-bold mb-1" style={{color: '#FF4500'}}>30 jours</p>
                      <p className="text-xs" style={{color: '#6B6B6B'}}>Premiers résultats SEO</p>
                    </div>
                    <div className="p-4 rounded-lg" style={{backgroundColor: '#EFEEEE'}}>
                      <p className="text-2xl font-bold mb-1" style={{color: '#FF4500'}}>Top 3</p>
                      <p className="text-xs" style={{color: '#6B6B6B'}}>Objectif garanti</p>
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
