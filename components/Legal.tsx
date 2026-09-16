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
          <h2 className="text-3xl font-bold text-[#1A1A1A] mb-8">Mentions Légales & Politique de Confidentialité</h2>
          
          <div className="space-y-8 text-gray-700">
            <section>
              <h3 className="text-xl font-bold text-[#FF4500] mb-4">1. Éditeur du site</h3>
              <p>
                Le site bingo-agency.fr est édité par :
                <br /><br />
                <strong>Hamza Abdelhaq</strong> agissant sous le nom commercial <strong>BINGO AGENCY</strong><br />
                Statut : Auto-entrepreneur (Entreprise Individuelle)<br />
                SIRET : En cours d'immatriculation<br />
                Siège social : Toulouse, France<br />
                Email : contact@bingo-agency.fr<br />
                Directeur de la publication : Hamza Abdelhaq
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#FF4500] mb-4">2. Hébergement</h3>
              <p>
                Le site est hébergé par :<br /><br />
                <strong>GitHub Inc. (GitHub Pages)</strong><br />
                88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis<br />
                Site : <a href="https://pages.github.com/" target="_blank" rel="noopener noreferrer" className="text-[#FF4500] font-semibold hover:underline">pages.github.com</a>
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#FF4500] mb-4">3. Propriété Intellectuelle</h3>
              <p>
                L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés (textes, design, architecture), y compris pour les représentations iconographiques et photographiques. Toute reproduction totale ou partielle sans l'autorisation expresse de Hamza Abdelhaq est formellement interdite.
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#FF4500] mb-4">4. Protection des Données Personnelles (RGPD)</h3>
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de portabilité, d'effacement et d'opposition concernant vos données personnelles recueillies via le formulaire de contact.
              </p>
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li><strong>Responsable du traitement :</strong> Hamza Abdelhaq (Bingo Agency)</li>
                <li><strong>Données collectées :</strong> Nom, Email, Téléphone, Message.</li>
                <li><strong>Finalité :</strong> Répondre aux demandes de contact, gestion de la relation commerciale et proposition d'audits.</li>
                <li><strong>Base légale :</strong> Votre consentement explicite lors de la soumission du formulaire.</li>
                <li><strong>Durée de conservation :</strong> 3 ans maximum pour les données de prospection, à compter du dernier contact.</li>
              </ul>
              <p className="mt-4">
                Pour exercer vos droits, vous pouvez nous contacter directement à : <strong>contact@bingo-agency.fr</strong><br />
                Si vous estimez que vos droits "Informatique et Libertés" ne sont pas respectés, vous pouvez adresser une réclamation à la CNIL (<a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-[#FF4500] font-semibold hover:underline">www.cnil.fr</a>).
              </p>
            </section>

            <section>
              <h3 className="text-xl font-bold text-[#FF4500] mb-4">5. Cookies & Traceurs</h3>
              <p>
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement, ainsi que des traceurs d'analyse d'audience pour mesurer notre trafic. Un bandeau de consentement vous permet d'accepter ou de refuser les cookies non essentiels lors de votre première visite. Vos préférences sont conservées pour une durée maximale de 13 mois.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};
