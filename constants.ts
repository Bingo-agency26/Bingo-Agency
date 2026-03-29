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
  heroBg: "./assets/images/hero-bg.jpg",
  logoHeader: "https://img.mailinblue.com/10048989/images/content_library/original/698decc3f03c89654a2a2d01.png",
  logoAlt: "./assets/images/logo-black.png",
  logoFooter: "./assets/images/logo-footer.png",
  adsDashboard: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  socialMedia: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=800",
  print: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=800",
  branding: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
  team: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
  ecommerce: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
  blogSEO: "https://images.unsplash.com/photo-1432888622747-4eb9a8f2c293?auto=format&fit=crop&q=80&w=800",
  blogSEOLocal: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
  blogMarketing: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  blogDesign: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
  blogAI: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/9286a175-58e3-49b0-b2b7-14f48f6fd7fc.png"
};

export const STATS = [
  { label: "Clics/CTR Ads", value: "+40%", suffix: "" },
  { label: "Croissance Followers", value: "+25%", suffix: "" },
  { label: "Impressions Print", value: "50k", suffix: "/mois" },
  { label: "Projets R\u00e9alis\u00e9s", value: "200", suffix: "+" }
];

export const PRICING = [
  {
    title: "Pub Digitale Starter",
    price: "\u00c0 partir de 250",
    period: "\u20ac/mois",
    features: [
      "Budget pub optimis\u00e9",
      "Gestion Google/Bing Ads",
      "Mots-cl\u00e9s Search & Display",
      "Rapports Dashboard Anonymis\u00e9s",
      "Optimisation ROI continue"
    ]
  },
  {
    title: "R\u00e9seaux Sociaux",
    price: "\u00c0 partir de 150",
    period: "\u20ac/mois",
    features: [
      "Strat\u00e9gie & Conseil",
      "Cr\u00e9ation de contenus (Reels, Posts)",
      "Community Management",
      "Facebook, Insta, LinkedIn, TikTok",
      "Engagement garanti"
    ]
  },
  {
    title: "Print & Charte",
    price: "\u00c0 partir de 70",
    period: "\u20ac",
    features: [
      "Identit\u00e9 Visuelle Compl\u00e8te",
      "Logo & Charte Graphique",
      "Flyers, Affiches, PLV",
      "Impression Qualit\u00e9 Offset",
      "Livraison & Distribution"
    ]
  },
  {
    title: "Full Com 360\u00b0",
    price: "Sur devis",
    period: "",
    features: [
      "Gestion Compl\u00e8te Digitale + Print",
      "Site Web & SEO inclus",
      "Campagnes Ads & Social illimit\u00e9es",
      "Support Prioritaire 24/7",
      "R\u00e9unions mensuelles de strat\u00e9gie"
    ],
    highlight: true
  }
];

export const TESTIMONIALS = [
  {
    text: "Depuis que Bingo g\u00e8re nos campagnes Ads, notre ROI a \u00e9t\u00e9 multipli\u00e9 par 4. Une \u00e9quipe r\u00e9active et transparente.",
    author: "Client E-commerce",
    role: "Secteur Mode"
  },
  {
    text: "Une refonte totale de notre identit\u00e9 visuelle qui nous a permis de toucher une client\u00e8le beaucoup plus premium.",
    author: "Client B2B",
    role: "Cabinet de Conseil"
  },
  {
    text: "Leurs strat\u00e9gies sur TikTok et Instagram ont fait exploser notre visibilit\u00e9 locale. +10k followers en 3 mois.",
    author: "Client Restauration",
    role: "Franchise"
  }
];

export const PORTFOLIO_CATEGORIES = [
  {
    id: 'branding',
    name: 'Branding & Identit\u00e9 Visuelle',
    description: 'Logos, chartes graphiques, refontes compl\u00e8tes',
    projects: [
      {
        id: 1,
        title: "DiagnoTest",
        description: "Identit\u00e9 visuelle compl\u00e8te \u2014 Logo, charte graphique, site web & supports print",
        image: "https://drive.google.com/uc?export=view&id=1OykYcooiWLca-n7tSxWSFS1CwZBgcBbd",
        tags: ["Logo", "Charte Graphique", "Site Web", "Print"]
      }
    ]
  },
  {
    id: 'web',
    name: 'Sites Web & Applications',
    description: 'E-commerce, vitrines, landing pages, apps',
    projects: []
  },
  {
    id: 'social',
    name: 'Social Media & Contenus',
    description: 'Campagnes Instagram, TikTok, LinkedIn, Facebook',
    projects: []
  },
  {
    id: 'ads',
    name: 'Publicit\u00e9 Digitale',
    description: 'Google Ads, Facebook Ads, campagnes performance',
    projects: []
  },
  {
    id: 'print',
    name: 'Print & Supports Physiques',
    description: 'Flyers, brochures, PLV, packaging',
    projects: []
  },
  {
    id: 'video',
    name: 'Vid\u00e9o & Motion Design',
    description: 'Spots pub, reels, animations, montage',
    projects: []
  }
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "SEO Local Toulouse 2026 : 10 Techniques pour Dominer Google Maps",
    slug: "seo-local-toulouse-2026",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
    excerpt: "Comment positionner votre entreprise toulousaine en #1 sur Google Maps et les recherches locales. Guide complet avec checklist.",
    date: "2026-02-26",
    readTime: "8 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">1. Optimisez votre Fiche Google Business Profile</h3>
      <p class="mb-6">Votre fiche GBP est votre vitrine digitale locale. 70% des recherches locales se transforment en visite physique sous 24h. Compl\u00e9tez 100% des champs : horaires, cat\u00e9gories, services, photos (minimum 10), description optimis\u00e9e avec mots-cl\u00e9s locaux.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">2. Collectez des Avis Clients R\u00e9guli\u00e8rement</h3>
      <p class="mb-6">Les avis Google sont le facteur #1 du classement local. Objectif : 20+ avis avec 4.5+ \u00e9toiles. Envoyez un lien direct post-prestation, r\u00e9pondez \u00e0 TOUS les avis (positifs et n\u00e9gatifs) sous 48h.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">3. Cr\u00e9ez du Contenu Hyper-Localis\u00e9</h3>
      <p class="mb-6">Article "Meilleur [service] \u00e0 Toulouse", "Top 10 [secteur] Haute-Garonne", "\u00c9v\u00e9nements [industrie] Occitanie 2026". Int\u00e9grez les quartiers : Capitole, Saint-Cyprien, Purpan, Ramonville...</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">4. Backlinks Locaux de Qualit\u00e9</h3>
      <p class="mb-6">Partenariats avec : CCI Toulouse, La D\u00eapache, Actu Toulouse, blogs locaux, associations de commer\u00e7ants. 10 backlinks .fr locaux > 100 backlinks g\u00e9n\u00e9riques.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">5. NAP Consistency (Name, Address, Phone)</h3>
      <p class="mb-6">Votre adresse doit \u00eatre IDENTIQUE partout : site, Google, Facebook, Pages Jaunes, annuaires. Une variation = confusion pour Google = perte de ranking.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">\u2705 Checklist SEO Local Bingo Agency</h4>
        <ul class="text-sm space-y-1">
          <li>\u2022 Fiche GBP 100% compl\u00e8te</li>
          <li>\u2022 20+ avis Google</li>
          <li>\u2022 10+ photos r\u00e9centes</li>
          <li>\u2022 3 articles blog locaux/mois</li>
          <li>\u2022 5 backlinks locaux acquis</li>
          <li>\u2022 Temps de chargement < 3s</li>
        </ul>
      </div>
    `
  },
  {
    id: 2,
    title: "Instagram Reels 2026 : L'Algorithme D\u00e9cod\u00e9 pour les Entreprises",
    slug: "instagram-reels-algorithme-2026",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=800",
    excerpt: "Les nouvelles r\u00e8gles d'Instagram Reels pour maximiser votre port\u00e9e organique. Strat\u00e9gies prouv\u00e9es par nos 50+ clients.",
    date: "2026-02-25",
    readTime: "6 min",
    content: `<p class="mb-6">Contenu Instagram Reels optimis\u00e9 pour 2026...</p>`
  },
  {
    id: 3,
    title: "Google Ads 2026 : Budget Minimum pour un ROI Rentable",
    slug: "google-ads-budget-minimum-2026",
    category: "Publicit\u00e9",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    excerpt: "Combien investir en Google Ads pour \u00eatre rentable ? Analyse par secteur et zone g\u00e9ographique (Toulouse/France).",
    date: "2026-02-24",
    readTime: "7 min",
    content: `<p class="mb-6">Guide Google Ads budget 2026...</p>`
  },
  {
    id: 4,
    title: "TikTok Business 2026 : Faut-il Vraiment y \u00catre ?",
    slug: "tiktok-business-2026",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?auto=format&fit=crop&q=80&w=800",
    excerpt: "TikTok pour entreprises : opportunit\u00e9 ou perte de temps ? Analyse co\u00fbt/b\u00e9n\u00e9fice par secteur d'activit\u00e9.",
    date: "2026-02-23",
    readTime: "5 min",
    content: `<p class="mb-6">Analyse TikTok Business...</p>`
  },
  {
    id: 5,
    title: "Charte Graphique 2026 : Tendances Design pour TPE/PME",
    slug: "charte-graphique-tendances-2026",
    category: "Design",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    excerpt: "Les tendances design accessibles aux petites entreprises. Du minimalisme au n\u00e9o-brutalisme, comment choisir ?",
    date: "2026-02-22",
    readTime: "6 min",
    content: `<p class="mb-6">Tendances design 2026...</p>`
  },
  {
    id: 6,
    title: "Email Marketing 2026 : Taux d'Ouverture Post-iOS 18",
    slug: "email-marketing-ios18-2026",
    category: "Marketing Digital",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    excerpt: "Apple Mail Privacy impacte vos stats emailing. Comment mesurer la vraie performance de vos campagnes ?",
    date: "2026-02-21",
    readTime: "7 min",
    content: `<p class="mb-6">Email marketing iOS 18...</p>`
  },
  {
    id: 7,
    title: "LinkedIn B2B 2026 : Strat\u00e9gie de Croissance Organique",
    slug: "linkedin-b2b-croissance-2026",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
    excerpt: "Comment passer de 500 \u00e0 5000 abonn\u00e9s LinkedIn en 6 mois sans budget pub. M\u00e9thode test\u00e9e sur 30+ comptes clients.",
    date: "2026-02-20",
    readTime: "8 min",
    content: `<p class="mb-6">LinkedIn B2B strat\u00e9gie...</p>`
  },
  {
    id: 8,
    title: "Site Web 2026 : Vitesse de Chargement = Facteur SEO #1",
    slug: "vitesse-site-web-seo-2026",
    category: "Web & SEO",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800",
    excerpt: "Google Core Web Vitals 2026 : les nouveaux seuils qui impactent votre classement. Guide d'optimisation technique.",
    date: "2026-02-19",
    readTime: "9 min",
    content: `<p class="mb-6">Core Web Vitals 2026...</p>`
  },
  {
    id: 9,
    title: "Print 2026 : Le Papier Reste Rentable (Si Bien Utilis\u00e9)",
    slug: "print-marketing-rentabilite-2026",
    category: "Print",
    image: "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&q=80&w=800",
    excerpt: "Distribution flyers, PLV, brochures : quand le print bat le digital en ROI. \u00c9tudes de cas Toulouse.",
    date: "2026-02-18",
    readTime: "6 min",
    content: `<p class="mb-6">Print marketing ROI...</p>`
  },
  {
    id: 10,
    title: "IA & Marketing 2026 : ChatGPT, Midjourney, Outils Indispensables",
    slug: "ia-marketing-outils-2026",
    category: "Marketing Digital",
    image: "https://user-gen-media-assets.s3.amazonaws.com/seedream_images/9286a175-58e3-49b0-b2b7-14f48f6fd7fc.png",
    excerpt: "Comment int\u00e9grer l'IA dans votre strat\u00e9gie marketing sans perdre l'humain. Guide pratique TPE/PME.",
    date: "2026-02-17",
    readTime: "10 min",
    content: `<p class="mb-6">IA marketing 2026...</p>`
  },
  {
    id: 11,
    title: "SEO Local Toulouse 2026 : Checklist Express pour Amener plus de Clients en 30 Jours",
    slug: "seo-local-toulouse-checklist-30-jours",
    category: "SEO",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800",
    excerpt: "TPE, artisans, restaurants \u00e0 Toulouse : suivez cette checklist SEO local en 30 jours pour remonter dans le Top 3 Google Maps et g\u00e9n\u00e9rer plus d'appels.",
    date: "2026-02-27",
    readTime: "9 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Pourquoi le SEO local est vital \u00e0 Toulouse en 2026</h3>
      <p class="mb-6">
        \u00c0 Toulouse, plus de 40% des recherches Google ont une intention locale ("pr\u00e8s de moi", "\u00e0 Toulouse", "ouvert maintenant").
        Si votre entreprise n'appara\u00eet pas dans le Top 3 du pack Google Maps, vous laissez vos concurrents capter la majorit\u00e9 des appels et des visites.
      </p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Jour 1-3 : Fiche Google Business Profile 100% compl\u00e9t\u00e9e</h3>
      <ul class="mb-6 list-disc list-inside space-y-1">
        <li>V\u00e9rifiez que votre fiche est bien revendiqu\u00e9e et valid\u00e9e.</li>
        <li>Choisissez une cat\u00e9gorie principale ultra pr\u00e9cise (ex : "Plombier" plut\u00f4t que "Services").</li>
        <li>Ajoutez toutes les cat\u00e9gories secondaires pertinentes.</li>
        <li>Remplissez les horaires, services, description et lien vers votre site web.</li>
        <li>Ajoutez au minimum 10 photos r\u00e9centes et de bonne qualit\u00e9.</li>
      </ul>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Jour 4-10 : Booster vos avis Google \u00e0 Toulouse</h3>
      <p class="mb-4">
        Les avis sont le premier signal de confiance pour vos futurs clients, et un crit\u00e8re cl\u00e9 de classement pour Google.
        Visez au moins 20 avis avec une note sup\u00e9rieure \u00e0 4,5\u2605.
      </p>
      <ul class="mb-6 list-disc list-inside space-y-1">
        <li>Cr\u00e9ez un lien direct vers votre page d'avis Google.</li>
        <li>Envoyez ce lien apr\u00e8s chaque prestation (SMS, email, WhatsApp).</li>
        <li>R\u00e9pondez \u00e0 100% des avis, positifs comme n\u00e9gatifs, en moins de 48h.</li>
        <li>Affichez un QR code avis dans vos locaux ou sur vos factures.</li>
      </ul>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Jour 11-20 : Contenu hyperlocal sur votre site</h3>
      <p class="mb-4">
        Votre site doit prouver \u00e0 Google que vous \u00eates une r\u00e9f\u00e9rence locale sur votre secteur \u00e0 Toulouse et en Haute-Garonne.
      </p>
      <ul class="mb-6 list-disc list-inside space-y-1">
        <li>Cr\u00e9ez une page d\u00e9di\u00e9e "Votre activit\u00e9 + Toulouse" (ex : "Plombier d'urgence \u00e0 Toulouse").</li>
        <li>Ajoutez des sections par quartier : Capitole, Saint-Cyprien, Rangueil, Blagnac, Lab\u00e8ge\u2026</li>
        <li>Publiez 2 \u00e0 3 articles de blog ciblant des questions locales ("prix", "urgence", "meilleur").</li>
        <li>Int\u00e9grez des t\u00e9moignages clients situ\u00e9s \u00e0 Toulouse et alentours.</li>
      </ul>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Jour 21-27 : Coh\u00e9rence NAP & citations locales</h3>
      <p class="mb-4">
        NAP = Name, Address, Phone. Ces informations doivent \u00eatre identiques partout en ligne.
        La moindre diff\u00e9rence peut faire douter Google de votre fiabilit\u00e9.
      </p>
      <ul class="mb-6 list-disc list-inside space-y-1">
        <li>V\u00e9rifiez votre nom, adresse et t\u00e9l\u00e9phone sur : votre site, Google, Facebook, PagesJaunes, annuaires locaux.</li>
        <li>Corrigez toutes les anciennes adresses ou num\u00e9ros de t\u00e9l\u00e9phone.</li>
        <li>Inscrivez votre entreprise sur 5 \u00e0 10 annuaires locaux de qualit\u00e9 (CCI, pages pros, portails m\u00e9tiers).</li>
      </ul>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Jour 28-30 : Vitesse mobile & derni\u00e8re v\u00e9rification</h3>
      <p class="mb-4">
        La majorit\u00e9 des recherches locales se font sur mobile. Un site lent ou mal adapt\u00e9 fera fuir vos futurs clients d\u00e8s la premi\u00e8re seconde.
      </p>
      <ul class="mb-6 list-disc list-inside space-y-1">
        <li>Testez votre site sur Google PageSpeed Insights (version mobile).</li>
        <li>Optimisez vos images, votre h\u00e9bergement et supprimez les scripts inutiles.</li>
        <li>V\u00e9rifiez que votre num\u00e9ro de t\u00e9l\u00e9phone est cliquable sur mobile.</li>
        <li>Testez votre parcours utilisateur : recherche Google \u2192 fiche \u2192 site \u2192 contact.</li>
      </ul>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">\u2705 Checklist SEO Local Toulouse - Bingo Agency</h4>
        <ul class="text-sm space-y-1">
          <li>\u2022 Fiche Google Business Profile compl\u00e9t\u00e9e \u00e0 100%</li>
          <li>\u2022 20+ avis Google avec r\u00e9ponse syst\u00e9matique</li>
          <li>\u2022 3 pages ou articles ciblant "activit\u00e9 + Toulouse"</li>
          <li>\u2022 NAP identique sur 10 plateformes minimum</li>
          <li>\u2022 Site rapide et lisible sur mobile</li>
        </ul>
      </div>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Besoin d'aller plus vite ?</h3>
      <p class="mb-6">
        La plupart des TPE/PME savent qu'elles doivent travailler leur SEO local, mais manquent de temps, de m\u00e9thode ou de suivi.
        C'est pr\u00e9cis\u00e9ment ce que nous faisons pour nos clients \u00e0 Toulouse : des actions concr\u00e8tes, mesurables, orient\u00e9es r\u00e9sultats.
      </p>
      <p class="mb-2 font-semibold">
        Si vous voulez passer devant vos concurrents sur Google Maps en 2026, le meilleur moment pour lancer votre plan d'action, c'est maintenant.
      </p>
      <a
        href="https://calendly.com/bingo-agency-fr/30min"
        target="_blank"
        rel="noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3 bg-brand-orange text-white rounded-full font-bold hover:shadow-xl transition-all"
      >
        R\u00e9server un Audit SEO Local Gratuit
      </a>
    `
  }
];
