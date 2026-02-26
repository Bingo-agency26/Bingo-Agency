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
  ecommerce: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800"
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
    price: "À partir de 250",
    period: "€/mois",
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
    price: "À partir de 150",
    period: "€/mois",
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
    price: "À partir de 70",
    period: "€",
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

export const PORTFOLIO_CATEGORIES = [
  {
    id: 'branding',
    name: 'Branding & Identité Visuelle',
    description: 'Logos, chartes graphiques, refontes complètes',
    projects: []
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
    name: 'Publicité Digitale',
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
    name: 'Vidéo & Motion Design',
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
    image: IMAGES.socialMedia,
    excerpt: "Comment positionner votre entreprise toulousaine en #1 sur Google Maps et les recherches locales. Guide complet avec checklist.",
    date: "2026-02-26",
    readTime: "8 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">1. Optimisez votre Fiche Google Business Profile</h3>
      <p class="mb-6">Votre fiche GBP est votre vitrine digitale locale. 70% des recherches locales se transforment en visite physique sous 24h. Complétez 100% des champs : horaires, catégories, services, photos (minimum 10), description optimisée avec mots-clés locaux.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">2. Collectez des Avis Clients Régulièrement</h3>
      <p class="mb-6">Les avis Google sont le facteur #1 du classement local. Objectif : 20+ avis avec 4.5+ étoiles. Envoyez un lien direct post-prestation, répondez à TOUS les avis (positifs et négatifs) sous 48h.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">3. Créez du Contenu Hyper-Localisé</h3>
      <p class="mb-6">Article "Meilleur [service] à Toulouse", "Top 10 [secteur] Haute-Garonne", "Événements [industrie] Occitanie 2026". Intégrez les quartiers : Capitole, Saint-Cyprien, Purpan, Ramonville...</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">4. Backlinks Locaux de Qualité</h3>
      <p class="mb-6">Partenariats avec : CCI Toulouse, La Dépêche, Actu Toulouse, blogs locaux, associations de commerçants. 10 backlinks .fr locaux > 100 backlinks génériques.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">5. NAP Consistency (Name, Address, Phone)</h3>
      <p class="mb-6">Votre adresse doit être IDENTIQUE partout : site, Google, Facebook, Pages Jaunes, annuaires. Une variation = confusion pour Google = perte de ranking.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">✅ Checklist SEO Local Bingo Agency</h4>
        <ul class="text-sm space-y-1">
          <li>• Fiche GBP 100% complète</li>
          <li>• 20+ avis Google</li>
          <li>• 10+ photos récentes</li>
          <li>• 3 articles blog locaux/mois</li>
          <li>• 5 backlinks locaux acquis</li>
          <li>• Temps de chargement < 3s</li>
        </ul>
      </div>
    `
  },
  {
    id: 2,
    title: "Instagram Reels 2026 : L'Algorithme Décodé pour les Entreprises",
    slug: "instagram-reels-algorithme-2026",
    category: "Social Media",
    image: IMAGES.socialMedia,
    excerpt: "Les nouvelles règles d'Instagram Reels pour maximiser votre portée organique. Stratégies prouvées par nos 50+ clients.",
    date: "2026-02-25",
    readTime: "6 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">L'Algorithme 2026 Privilégie la Durée de Visionnage</h3>
      <p class="mb-6">Fini les vues comptées à 3 secondes. Instagram mesure maintenant le "watch time" complet. Un Reel de 15s regardé en entier bat un Reel de 60s abandonné à 10s.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Le Hook des 0,5 Premières Secondes</h3>
      <p class="mb-6">Vous avez 0,5 seconde pour capter l'attention. Techniques : mouvement brusque, texte choc, question directe, pattern interrupt. Évitez les intros longues.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Format Vertical 9:16 OBLIGATOIRE</h3>
      <p class="mb-6">Les Reels cropés depuis du 16:9 perdent 70% de portée. Filmez directement en vertical, cadrez pour mobile, sous-titres en bas (zone de sécurité).</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Posting Time : 18h-21h en Semaine</h3>
      <p class="mb-6">Pic d'engagement pour B2C. B2B : 12h-14h. Testez 3 créneaux puis doublez sur le meilleur. Instagram favorise les posts publiés quand votre audience est active.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">📊 Résultats Clients Bingo Agency</h4>
        <p class="text-sm">Restaurant Toulouse : 2,3M vues en 30 jours avec 15 Reels optimisés. +180% trafic site.</p>
      </div>
    `
  },
  {
    id: 3,
    title: "Google Ads 2026 : Budget Minimum pour un ROI Rentable",
    slug: "google-ads-budget-minimum-2026",
    category: "Publicité",
    image: IMAGES.adsDashboard,
    excerpt: "Combien investir en Google Ads pour être rentable ? Analyse par secteur et zone géographique (Toulouse/France).",
    date: "2026-02-24",
    readTime: "7 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Budget Minimum par Secteur (Toulouse)</h3>
      <p class="mb-6"><strong>Services locaux</strong> (plombier, avocat, comptable) : 300-500€/mois. CPC moyen 2-5€.<br/>
      <strong>E-commerce</strong> (mode, déco) : 500-1000€/mois. Shopping Ads prioritaire.<br/>
      <strong>B2B/SaaS</strong> : 1000-3000€/mois. Long cycle de vente.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">La Règle des 7 Conversions Minimum</h3>
      <p class="mb-6">Google Ads nécessite 7 conversions/semaine pour optimiser l'algo. Budget insuffisant = apprentissage lent = argent brûlé. Si CPC 3€ et taux conversion 5%, il faut 140 clics/semaine = 420€ minimum.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Erreur Fréquente : Trop de Campagnes</h3>
      <p class="mb-6">Avec 500€/mois, lancez 1 seule campagne Search avec 5-10 mots-clés ciblés. Éviter de disperser sur Display + Shopping + Vidéo. Concentrez pour générer le volume nécessaire.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">💰 Calculateur ROI Rapide</h4>
        <p class="text-sm">Panier moyen 100€, marge 40€, objectif ROI 3x : CPA max = 13€. Avec 5% taux conversion, CPC max = 0,65€.</p>
      </div>
    `
  },
  {
    id: 4,
    title: "TikTok Business 2026 : Faut-il Vraiment y Être ?",
    slug: "tiktok-business-2026",
    category: "Social Media",
    image: IMAGES.socialMedia,
    excerpt: "TikTok pour entreprises : opportunité ou perte de temps ? Analyse coût/bénéfice par secteur d'activité.",
    date: "2026-02-23",
    readTime: "5 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">TikTok = 18-34 ans, Mais Pas Que</h3>
      <p class="mb-6">35-50 ans représentent maintenant 28% des utilisateurs TikTok France. Si votre cible a -45 ans et aime le contenu vidéo, vous DEVEZ tester TikTok.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Secteurs Gagnants sur TikTok</h3>
      <p class="mb-6"><strong>✅ Food & Boissons</strong> : Restaurants, cafés, food trucks. Contenus BTS (before/after).<br/>
      <strong>✅ Fitness & Bien-être</strong> : Salles de sport, coachs, nutrition.<br/>
      <strong>✅ Mode & Beauté</strong> : Try-on, tutorials, challenges.<br/>
      <strong>✅ Immobilier/Rénovation</strong> : Avant/Après spectaculaires.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Secteurs à Éviter (Pour l'Instant)</h3>
      <p class="mb-6"><strong>❌ B2B Industriel</strong>, Assurances, Banques (sauf si approche décalée). Audience trop jeune, intentions d'achat faibles.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">📊 Test TikTok en 30 Jours</h4>
        <p class="text-sm">Publiez 1 vidéo/jour pendant 30 jours. < 10k vues totales = arrêtez. > 50k vues = doublez la cadence.</p>
      </div>
    `
  },
  {
    id: 5,
    title: "Charte Graphique 2026 : Tendances Design pour TPE/PME",
    slug: "charte-graphique-tendances-2026",
    category: "Design",
    image: IMAGES.branding,
    excerpt: "Les tendances design accessibles aux petites entreprises. Du minimalisme au néo-brutalisme, comment choisir ?",
    date: "2026-02-22",
    readTime: "6 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">1. Le Néo-Brutalisme : Retour au Brut</h3>
      <p class="mb-6">Grosses typos noires, aplats de couleurs vives, bordures épaisses, ombres portées exagérées. Anti-minimalisme assumé. Idéal pour : startups tech, agences créatives, marques jeunes.</p>
      
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">2. Le Minimalisme Chaleureux</h3>
      <p class="mb-6">Toujours épuré mais avec des textures, dégradés subtils, illustrations organiques. Évite la froideur du flat design 2010. Parfait pour : bien-être, coaching, produits naturels.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">3. Les Dégradés Holographiques</h3>
      <p class="mb-6">Couleurs iridescentes, effets métalliques, reflets arc-en-ciel. Attention au sur-usage. Bon pour : tech, gaming, luxe moderne.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Erreur #1 : Suivre Toutes les Tendances</h3>
      <p class="mb-6">Votre identité doit durer 3-5 ans minimum. Une charte "tendance" en 2026 sera datée en 2027. Privilégiez l'intemporel avec une touche moderne.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">🎨 Checklist Charte Graphique Efficace</h4>
        <ul class="text-sm space-y-1">
          <li>• Logo déclinable (couleur, noir, blanc)</li>
          <li>• 2 typos max (titres + texte)</li>
          <li>• Palette 3-5 couleurs</li>
          <li>• Iconographie cohérente</li>
          <li>• Guidelines PDF 10 pages</li>
        </ul>
      </div>
    `
  },
  {
    id: 6,
    title: "Email Marketing 2026 : Taux d'Ouverture Post-iOS 18",
    slug: "email-marketing-ios18-2026",
    category: "Marketing Digital",
    image: IMAGES.adsDashboard,
    excerpt: "Apple Mail Privacy impacte vos stats emailing. Comment mesurer la vraie performance de vos campagnes ?",
    date: "2026-02-21",
    readTime: "7 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">iOS 18 = Fin du Taux d'Ouverture Fiable</h3>
      <p class="mb-6">Apple Mail Privacy précharge les emails, gonflant artificiellement les taux d'ouverture (80-90% vs 20% réels). 45% des utilisateurs français sont sur iOS.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Nouvelles Métriques à Suivre</h3>
      <p class="mb-6"><strong>1. Taux de clic (CTR)</strong> : Seule métrique non biaisée.<br/>
      <strong>2. Taux de conversion</strong> : Achats, inscriptions, téléchargements.<br/>
      <strong>3. Revenus générés</strong> : L'ultime KPI.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Stratégies d'Adaptation</h3>
      <p class="mb-6"><strong>A/B Test sur le contenu</strong> : Puisque l'objet est moins fiable, testez formats de contenu, CTA, offres.<br/>
      <strong>Segmentation poussée</strong> : Ciblez par comportement (cliqueurs actifs) plutôt que par engagement passif.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">📧 Benchmark 2026</h4>
        <p class="text-sm">Taux de clic moyen : 2,5% (e-commerce), 1,8% (B2B). Taux conversion : 0,5-2%. ROAS email : 36€ pour 1€ investi.</p>
      </div>
    `
  },
  {
    id: 7,
    title: "LinkedIn B2B 2026 : Stratégie de Croissance Organique",
    slug: "linkedin-b2b-croissance-2026",
    category: "Social Media",
    image: IMAGES.team,
    excerpt: "Comment passer de 500 à 5000 abonnés LinkedIn en 6 mois sans budget pub. Méthode testée sur 30+ comptes clients.",
    date: "2026-02-20",
    readTime: "8 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Personal Branding > Company Page</h3>
      <p class="mb-6">Les posts de profils personnels ont 5x plus de portée que les pages entreprises. Stratégie : CEO/fondateur devient le visage de la marque.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Le Framework du Post Viral LinkedIn</h3>
      <p class="mb-6"><strong>Hook</strong> : 1 phrase choc ("J'ai perdu 50k€ en...", "Personne ne parle de...")<br/>
      <strong>Story</strong> : Anecdote personnelle, vulnérabilité<br/>
      <strong>Insight</strong> : Leçon à retenir, conseil actionnable<br/>
      <strong>CTA</strong> : Question ouverte pour engagement</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Calendrier de Publication</h3>
      <p class="mb-6"><strong>Fréquence</strong> : 3-5 posts/semaine minimum<br/>
      <strong>Horaires</strong> : 8h-9h (avant bureau), 12h-13h (pause déj), 17h-18h (fin journée)<br/>
      <strong>Jours</strong> : Mardi-Jeudi meilleurs, éviter weekend</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">🚀 Résultat Client Bingo</h4>
        <p class="text-sm">Expert-comptable : 680 → 4200 abonnés en 4 mois. 15 leads qualifiés/mois. 3 clients signés (valeur 120k€).</p>
      </div>
    `
  },
  {
    id: 8,
    title: "Site Web 2026 : Vitesse de Chargement = Facteur SEO #1",
    slug: "vitesse-site-web-seo-2026",
    category: "Web & SEO",
    image: IMAGES.ecommerce,
    excerpt: "Google Core Web Vitals 2026 : les nouveaux seuils qui impactent votre classement. Guide d'optimisation technique.",
    date: "2026-02-19",
    readTime: "9 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Core Web Vitals 2026 : Nouveaux Seuils</h3>
      <p class="mb-6"><strong>LCP (Largest Contentful Paint)</strong> : < 1,8s (vs 2,5s avant)<br/>
      <strong>INP (Interaction to Next Paint)</strong> : < 150ms (remplace FID)<br/>
      <strong>CLS (Cumulative Layout Shift)</strong> : < 0,05 (vs 0,1 avant)</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Impact Business Réel</h3>
      <p class="mb-6">100ms de latence = -1% conversions. 3s de chargement = 40% de rebond. Amazon : +100ms = -1% CA. Votre site lent vous coûte de l'argent.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">5 Quick Wins Performance</h3>
      <p class="mb-6"><strong>1. Images Next-Gen</strong> : WebP/AVIF au lieu de JPG<br/>
      <strong>2. Lazy Loading</strong> : Charger images au scroll<br/>
      <strong>3. CDN</strong> : Cloudflare gratuit = -40% temps charge<br/>
      <strong>4. Minify CSS/JS</strong> : -30% poids fichiers<br/>
      <strong>5. Cache navigateur</strong> : 1 an pour assets statiques</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">⚡ Test Gratuit</h4>
        <p class="text-sm">PageSpeed Insights + GTmetrix + WebPageTest. Objectif mobile : score > 85/100.</p>
      </div>
    `
  },
  {
    id: 9,
    title: "Print 2026 : Le Papier Reste Rentable (Si Bien Utilisé)",
    slug: "print-marketing-rentabilite-2026",
    category: "Print",
    image: IMAGES.print,
    excerpt: "Distribution flyers, PLV, brochures : quand le print bat le digital en ROI. Études de cas Toulouse.",
    date: "2026-02-18",
    readTime: "6 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Le Print Hyper-Ciblé > Pub Facebook Large</h3>
      <p class="mb-6">5000 flyers distribués dans 3 quartiers cibles (Capitole, Saint-Cyprien, Carmes) = 2-3% taux retour. Coût : 300€ (impression + distribution). Vs Facebook Ads large : 1500€ pour même volume leads.</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Secteurs où le Print Domine</h3>
      <p class="mb-6"><strong>✅ Restauration locale</strong> : Flyers boîtes aux lettres<br/>
      <strong>✅ Services à domicile</strong> : Plomberie, ménage, jardinage<br/>
      <strong>✅ Immobilier</strong> : Brochures programmes neufs<br/>
      <strong>✅ Événementiel</strong> : Affiches, PLV magasins</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">L'Erreur du "Print = Vieux"</h3>
      <p class="mb-6">Les -35 ans sont saturés de pub digitale (10 000 ads/jour). Un flyer original, bien designé, se démarque. Taux de mémorisation print : 70% vs 45% digital.</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">📊 ROI Print Restaurant Client</h4>
        <p class="text-sm">3000 flyers distribués (250€) = 85 nouveaux clients (ticket moyen 35€) = 2975€ CA. ROI : 11x.</p>
      </div>
    `
  },
  {
    id: 10,
    title: "IA & Marketing 2026 : ChatGPT, Midjourney, Outils Indispensables",
    slug: "ia-marketing-outils-2026",
    category: "Marketing Digital",
    image: IMAGES.branding,
    excerpt: "Comment intégrer l'IA dans votre stratégie marketing sans perdre l'humain. Guide pratique TPE/PME.",
    date: "2026-02-17",
    readTime: "10 min",
    content: `
      <h3 class="text-2xl font-bold mb-4 text-brand-dark">IA = Assistant, Pas Remplaçant</h3>
      <p class="mb-6">L'IA génère 70% du travail (brouillon, recherche, idées). L'humain apporte les 30% critiques (ton, contexte, émotion, stratégie).</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Stack IA Marketing 2026</h3>
      <p class="mb-6"><strong>Rédaction</strong> : ChatGPT 4, Claude 3, Jasper<br/>
      <strong>Visuel</strong> : Midjourney, DALL-E 3, Canva AI<br/>
      <strong>Vidéo</strong> : Runway, Synthesia, CapCut AI<br/>
      <strong>Analyse</strong> : Google Analytics AI, ChatGPT Data Analyst</p>

      <h3 class="text-2xl font-bold mb-4 text-brand-dark">Use Cases Concrets</h3>
      <p class="mb-6"><strong>1. Génération idées posts</strong> : ChatGPT + contexte marque = 50 idées en 2 min<br/>
      <strong>2. Visuels réseaux sociaux</strong> : Midjourney = illustrations uniques sans designer<br/>
      <strong>3. Scripts vidéos</strong> : IA rédige structure, humain ajoute personnalité<br/>
      <strong>4. Emails personnalisés</strong> : IA adapte ton selon segment client</p>

      <div class="bg-orange-50 p-6 rounded-xl border border-orange-100 my-8">
        <h4 class="font-bold text-brand-orange mb-2">⚠️ Attention Risques IA</h4>
        <p class="text-sm">Hallucinations, contenu générique, pénalités Google (contenu 100% IA). Toujours relire, personnaliser, fact-checker.</p>
      </div>
    `
  }
];
