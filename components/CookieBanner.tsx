import React, { useState, useEffect } from 'react';
import { Button } from './Button';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('bingo-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('bingo-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('bingo-cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] z-50 p-4 md:p-6 animate-slide-up">
      <div className="container mx-auto max-w-6xl">
        {!showDetails ? (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-600 flex-1">
              <p className="font-semibold text-brand-dark mb-1">Nous respectons votre vie privée</p>
              <p>
                Nous utilisons des cookies pour analyser notre trafic, personnaliser le contenu et vous proposer des publicités ciblées. 
                Vos données sont anonymisées et conservées pour une durée maximale de 13 mois.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <button 
                onClick={() => setShowDetails(true)}
                className="text-sm text-gray-500 hover:text-brand-blue underline"
              >
                Personnaliser
              </button>
              <Button variant="outline" onClick={handleDecline} className="text-sm py-2 px-4">
                Refuser
              </Button>
              <Button variant="primary" onClick={handleAccept} className="text-sm py-2 px-4">
                Tout accepter
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="flex justify-between items-center border-b border-gray-100 pb-2">
              <h3 className="font-bold text-brand-dark">Paramètres des cookies</h3>
              <button onClick={() => setShowDetails(false)} className="text-gray-400 hover:text-brand-dark">✕</button>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <input type="checkbox" checked disabled className="mt-1" />
                <div>
                  <p className="font-semibold text-sm">Nécessaires</p>
                  <p className="text-xs text-gray-500">Indispensables au fonctionnement du site.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" defaultChecked className="mt-1" />
                <div>
                  <p className="font-semibold text-sm">Analytiques (GA4)</p>
                  <p className="text-xs text-gray-500">Mesure d'audience anonymisée.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <input type="checkbox" defaultChecked className="mt-1" />
                <div>
                  <p className="font-semibold text-sm">Marketing</p>
                  <p className="text-xs text-gray-500">Publicités personnalisées.</p>
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="primary" onClick={handleAccept} className="text-sm py-2 px-6">
                Enregistrer mes choix
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
