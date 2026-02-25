export const LINKS = {
  booking: "https://calendly.com/bingo-agency-fr/30min",
  facebook: "https://www.facebook.com/profile.php?id=61587929317052",
  linkedin: "https://www.linkedin.com/company/bingo-agencyy",
  instagram: "https://www.instagram.com/bingoagencytoulouse/",
  tiktok: "https://www.tiktok.com/@bingoagency",
  email: "contact@bingo-agency.fr",
  map: "https://maps.google.com/?q=Toulouse,France"
};

export const IMAGES = {
  logoHeader: "/assets/images/logo.png",
  logoFooter: "/assets/images/logo-black.png",
  heroBg: "/assets/images/hero-bg.jpg",
  adsDashboard: "/assets/images/ads-dashboard.jpg",
  socialMedia: "/assets/images/social-media.jpg",
  print: "/assets/images/print.jpg",
  branding: "/assets/images/branding.jpg",
  team: "/assets/images/team.jpg",
  ecommerce: "/assets/images/ecommerce.jpg"
};

export const STATS = [
  { label: "Clics/CTR Ads", value: "+40%", suffix: "" },
  { label: "Croissance Followers", value: "+25%", suffix: "" },
  { label: "Impressions Print", value: "50k", suffix: "/mois" },
  { label: "Projets Réalisés", value: "200", suffix: "+" }
];

export const PRICING = [
  {
    title: "Pub Digitale Starter",
    price: "Sur devis",
    period: "",
    features: [
      "Budget pub optimisé",
      "Gestion Google/Bing Ads",
      "Mots-clés Search & Display",
      "Rapports Dashboard Anonymisés",
      "Optimisation ROI continue"
    ]
  },
  {
    title: "Réseaux Sociaux",
    price: "Sur devis",
    period: "",
    features: [
      "Stratégie & Conseil",
      "Création de contenus (Reels, Posts)",
      "Community Management",
      "Facebook, Insta, LinkedIn, TikTok",
      "Engagement garanti"
    ]
  },
  {
    title: "Print & Charte",
    price: "Sur devis",
    period: "",
    features: [
      "Identité Visuelle Complète",
      "Logo & Charte Graphique",
      "Flyers, Affiches, PLV",
      "Impression Qualité Offset",
      "Livraison & Distribution"
    ]
  },
  {
    title: "Full Com 360°",
    price: "Sur devis",
    period: "",
    features: [
      "Gestion Complète Digitale + Print",
      "Site Web & SEO inclus",
      "Campagnes Ads & Social illimitées",
      "Support Prioritaire 24/7",
      "Réunions mensuelles de stratégie"
    ],
    highlight: true
  }
];

export const TESTIMONIALS = [
  {
    text: "Depuis que Bingo gère nos campagnes Ads, notre ROI a été multiplié par 4. Une équipe réactive et transparente.",
    author: "Client E-commerce",
    role: "Secteur Mode"
  },
  {
    text: "Une refonte totale de notre identité visuelle qui nous a permis de toucher une clientèle beaucoup plus premium.",
    author: "Client B2B",
    role: "Cabinet de Conseil"
  },
  {
    text: "Leurs stratégies sur TikTok et Instagram ont fait exploser notre visibilité locale. +10k followers en 3 mois.",
    author: "Client Restauration",
    role: "Franchise"
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "Charte graphique 2026 : Les tendances à ne pas manquer",
    category: "Design",
    image: "/assets/images/blog-design.jpg",
    excerpt: "Minimalisme, 3D, typographies audacieuses... Découvrez ce qui fera vibrer les marques l'année prochaine.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">1. Le retour du maximalisme maîtrisé</h3>
      <p class="mb-6">Après des années de "blanding" (l'uniformisation des logos), 2026 marque le retour de la personnalité. Les marques n'hésitent plus à utiliser des couleurs saturées, des typographies expressives et des mises en page asymétriques. L'objectif ? Capter l'attention en moins de 0,3 seconde.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">2. La 3D et le "Claymorphism"</h3>
      <p class="mb-6">Les illustrations plates laissent place à la profondeur. Le style "pâte à modeler" (Claymorphism) apporte un côté humain, tactile et ludique aux interfaces digitales, parfait pour humaniser la tech.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">3. L'éco-conception visuelle</h3>
      <p class="mb-6">Le design durable n'est plus une option. En 2026, les chartes graphiques intègrent l'économie d'énergie : mode sombre par défaut, images compressées, vecteurs légers. Un beau design est désormais un design qui charge vite et consomme peu.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">Le conseil de Bingo Agency</h4>
        <p>Ne suivez pas toutes les tendances. Choisissez celles qui servent votre histoire. Une identité forte est avant tout une identité cohérente.</p>
      </div>
    `
  },
  {
    id: 2,
    title: "Google Ads vs Réseaux Sociaux : Le match du ROI",
    category: "Stratégie",
    image: "/assets/images/blog-strategy.jpg",
    excerpt: "Où investir votre budget publicitaire ? Comparatif détaillé pour maximiser vos conversions.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Google Ads : La réponse au besoin</h3>
      <p class="mb-6">Google Ads (Search) cible l'intention. L'utilisateur cherche activement votre produit ("plombier Toulouse", "agence web"). Le taux de conversion est généralement plus élevé car le besoin est immédiat.</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Avantage :</strong> Trafic qualifié et "chaud".</li>
        <li><strong>Inconvénient :</strong> Coût par clic (CPC) souvent élevé sur les secteurs concurrentiels.</li>
      </ul>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Social Ads : La création du besoin</h3>
      <p class="mb-6">Facebook, Instagram et TikTok ciblent des profils (intérêts, démographie). Vous interrompez leur navigation pour leur proposer une offre. C'est idéal pour la notoriété, le branding et les produits "coup de cœur".</p>
      <ul class="list-disc pl-6 mb-6 space-y-2">
        <li><strong>Avantage :</strong> Ciblage précis et visuel fort. Coût souvent moindre.</li>
        <li><strong>Inconvénient :</strong> Taux de conversion direct plus faible (nécessite du retargeting).</li>
      </ul>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Le verdict ? L'hybridation.</h3>
      <p class="mb-6">La meilleure stratégie n'est pas de choisir, mais de combiner. Utilisez Google pour capter la demande existante, et les réseaux sociaux pour faire du retargeting sur ceux qui ont visité votre site sans acheter.</p>
    `
  },
  {
    id: 3,
    title: "Le Print à l'ère du digital : Pourquoi le papier résiste",
    category: "Print",
    image: "/assets/images/blog-print.jpg",
    excerpt: "Dans un monde tout écran, le support physique devient un objet de luxe et de différenciation.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">La saturation numérique</h3>
      <p class="mb-6">Nous voyons entre 4 000 et 10 000 pubs digitales par jour. Notre cerveau a développé une "cécité aux bannières". À l'inverse, recevoir un bel objet physique, une brochure texturée ou une carte de visite haut de gamme crée une émotion rare.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Le Print comme vecteur de confiance</h3>
      <p class="mb-6">Le digital est éphémère et modifiable. Le papier est permanent. Imprimer un catalogue ou un magazine d'entreprise envoie un signal de solidité et de pérennité financière. C'est un outil de réassurance puissant pour le B2B.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">L'alliance QR Code & Papier</h3>
      <p class="mb-6">Le print moderne n'est pas déconnecté. Il est la porte d'entrée vers le digital. Un flyer avec un QR code vers une landing page, une carte de visite avec une puce NFC... Le "Phygital" permet de tracker les performances du papier avec la précision du web.</p>
    `
  },
  {
    id: 4,
    title: "Optimiser son SEO local en Occitanie",
    category: "SEO",
    image: "/assets/images/blog-seo.jpg",
    excerpt: "Comment apparaître en premier sur Google Maps et dans les recherches locales à Toulouse et environs.",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">1. La fiche Google Business Profile (ex-GMB)</h3>
      <p class="mb-6">C'est votre vitrine n°1. Elle doit être complète : horaires, photos récentes, services détaillés. Surtout, récoltez des avis ! Répondez à tous les commentaires, positifs ou négatifs, pour montrer à Google que vous êtes actif.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">2. Le contenu localisé</h3>
      <p class="mb-6">Ne parlez pas juste de "rénovation". Parlez de "rénovation de maison à Toulouse" ou "rénovation d'appartement à Balma". Créez des pages dédiées à vos zones d'intervention principales en Occitanie.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">3. Les backlinks locaux</h3>
      <p class="mb-6">Google aime quand d'autres sites locaux parlent de vous. Partenariats avec des associations, articles dans la presse régionale (La Dépêche, Actu Toulouse), annuaires locaux de qualité... Ces liens renforcent votre ancrage territorial aux yeux de l'algorithme.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">L'astuce Bingo</h4>
        <p>Intégrez une carte Google Maps sur votre page contact et mentionnez des points de repère locaux ("à côté du Capitole", "proche de la Cité de l'Espace") pour aider Google à vous situer.</p>
      </div>
    `
  }
];