import React from 'react';
import { X } from 'lucide-react';

interface LegalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Legal: React.FC<LegalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose}></div>
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fade-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold text-brand-dark mb-8">Mentions Légales & Politique de Confidentialité</h2>
          
          <div className="space-y-8 text-gray-600">
            <section>
              <h3 className="text-xl font-bold text-brand-dark mb-4">1. Éditeur du site</h3>
              <p>
                Le site Bingo Agency est édité par la société BINGO AGENCY, SAS au capital de 10 000 €, immatriculée au RCS de Toulouse sous le numéro 123 456 789.
                <br />
                Siège social : Toulouse, France.
                <br />
                Email : contact@bingo-agency.fr
                <br />
                Directeur de la publication : [Nom du Directeur]
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-brand-dark mb-4">2. Hébergement</h3>
              <p>
                Le site est hébergé par [Nom de l'hébergeur], [Adresse de l'hébergeur].
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-brand-dark mb-4">3. Propriété Intellectuelle</h3>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-brand-dark mb-4">4. Protection des Données Personnelles (RGPD)</h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de portabilité et d'effacement de vos données personnelles.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Responsable du traitement :</strong> Bingo Agency</li>
                <li><strong>Finalité :</strong> Gestion de la relation client, prospection commerciale, statistiques.</li>
                <li><strong>Base légale :</strong> Consentement (formulaire de contact, cookies).</li>
                <li><strong>Durée de conservation :</strong> 3 ans pour les prospects, 13 mois pour les cookies.</li>
              </ul>
              <p className="mt-2">
                Pour exercer ces droits, contactez-nous à : contact@bingo-agency.fr
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-brand-dark mb-4">5. Cookies</h3>
              <p>
                Ce site utilise des cookies pour améliorer l'expérience utilisateur et réaliser des statistiques de visites. Vous pouvez gérer vos préférences via le bandeau de cookies ou les paramètres de votre navigateur.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
