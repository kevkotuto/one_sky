export const SITE_CONFIG = {
  name: 'ONE SKY',
  title: 'ONE SKY - Intelligence Géospatiale Décisionnelle',
  description: 'Opérateur stratégique de données géospatiales décisionnelles au service des États, institutions et industries critiques',
  url: 'https://ones-sky.net',
  email: 'contact@onesky.space',
  phone: '+33 X XX XX XX XX',
  tagline: 'Observer la planète pour permettre au monde de décider mieux, plus vite et durablement',
}

export const NAVIGATION = {
  main: [
    {
      name: 'À Propos',
      href: '/a-propos',
      children: [
        { name: 'Vision & Mission', href: '/a-propos/vision-mission', description: 'Notre vision stratégique et nos missions' },
        { name: 'Gouvernance & Équipe', href: '/a-propos/gouvernance', description: 'Structure et équipe dirigeante' },
        { name: 'Engagements', href: '/a-propos/engagements', description: 'Nos engagements souverains et stratégiques' },
        { name: 'Partenariats', href: '/a-propos/partenariats', description: 'Collaborations institutionnelles' },
        { name: 'Carrières', href: '/a-propos/carrieres', description: 'Rejoignez nos équipes' },
      ],
    },
    {
      name: 'Technologie',
      href: '/technologie',
      children: [
        { name: 'Infrastructures Spatiales', href: '/technologie/infrastructures', description: 'Constellation de satellites LEO' },
        { name: 'Chaîne de Valeur', href: '/technologie/chaine-valeur', description: 'Du satellite à la décision' },
        { name: 'Plateforme', href: '/technologie/plateforme', description: 'Architecture technique' },
      ],
    },
    {
      name: 'Solutions',
      href: '/solutions',
      children: [
        { name: 'Observation & Monitoring', href: '/solutions/observation', description: 'Surveillance en temps réel' },
        { name: 'Analyses & Indicateurs', href: '/solutions/analyses', description: 'Intelligence géospatiale' },
        { name: 'Alertes & Veille', href: '/solutions/alertes', description: 'Détection automatique' },
        { name: 'Tableaux de Bord', href: '/solutions/dashboards', description: 'Visualisation décisionnelle' },
        { name: 'APIs & Intégration', href: '/solutions/apis', description: 'Intégration système' },
        { name: 'Parcours Projet', href: '/solutions/parcours', description: 'De POC au déploiement' },
        { name: 'Secteurs', href: '/solutions/secteurs', description: 'Applications métiers' },
      ],
    },
    {
      name: 'DataSAT',
      href: '/datasat',
      children: [
        { name: 'Intelligence & IA', href: '/datasat/intelligence-ia', description: 'Analyses par IA embarquée' },
        { name: 'Domaines', href: '/datasat/domaines', description: "Domaines d'application" },
        { name: 'SKY LOUPE', href: '/datasat/plateformes/sky-loupe', description: 'Contrôle urbanistique' },
        { name: 'SKY FOREST', href: '/datasat/plateformes/sky-forest', description: 'Surveillance forestière' },
        { name: 'SKY FISH', href: '/datasat/plateformes/sky-fish', description: 'Surveillance maritime' },
        { name: 'SKY SENTINEL', href: '/datasat/plateformes/sky-sentinel', description: 'Sécurité & frontières' },
        { name: 'SKY CADASTRE', href: '/datasat/plateformes/sky-cadastre', description: 'Cadastre satellitaire' },
        { name: 'SKY TRANSPORT', href: '/datasat/plateformes/sky-transport', description: 'Mobilité urbaine' },
        { name: 'Livrables', href: '/datasat/livrables', description: 'Produits et services' },
        { name: 'Lancer un POC', href: '/datasat/poc', description: 'Démarrez votre projet pilote' },
      ],
    },
    {
      name: 'Contact',
      href: '/contact',
    },
  ],
  footer: {
    apropos: [
      { name: 'Vision & Mission', href: '/a-propos/vision-mission' },
      { name: 'Équipe', href: '/a-propos/gouvernance' },
      { name: 'Partenariats', href: '/a-propos/partenariats' },
      { name: 'Carrières', href: '/a-propos/carrieres' },
    ],
    solutions: [
      { name: 'Catalogue', href: '/solutions' },
      { name: 'Secteurs', href: '/solutions/secteurs' },
      { name: 'APIs', href: '/solutions/apis' },
    ],
    datasat: [
      { name: 'Plateformes', href: '/datasat/plateformes' },
      { name: 'POC DataSAT', href: '/datasat/poc' },
      { name: 'Livrables', href: '/datasat/livrables' },
    ],
    legal: [
      { name: 'Mentions Légales', href: '/mentions-legales' },
      { name: 'Confidentialité', href: '/confidentialite' },
      { name: 'Cookies', href: '/cookies' },
      { name: 'CGU', href: '/cgu' },
    ],
  },
}

export const STATISTICS = [
  { value: '3', label: 'Satellites', sublabel: 'SKY 1, 2, 3' },
  { value: 'LEO', label: 'Orbite Basse', sublabel: 'Couverture Globale' },
  { value: 'IA', label: 'Intelligence', sublabel: 'Analyses Temps Réel' },
  { value: '24/7', label: 'Monitoring', sublabel: 'Support Continu' },
]

export const SOCIAL_LINKS = {
  linkedin: 'https://linkedin.com',
  twitter: 'https://twitter.com',
}

export const DATASAT_PLATFORMS = [
  {
    id: 'sky-loupe',
    name: 'SKY LOUPE',
    description: 'Suivi des constructions et vérification des permis',
    href: '/datasat/plateformes/sky-loupe',
    image: '/features/Sky Loupe.png',
  },
  {
    id: 'sky-sentinel',
    name: 'SKY SENTINEL',
    description: 'Observation des frontières et veille territoriale',
    href: '/datasat/plateformes/sky-sentinel',
    image: '/features/Sky Sentinel.png',
  },
  {
    id: 'sky-forest',
    name: 'SKY FOREST',
    description: 'Surveillance forestière et détection de déforestation',
    href: '/datasat/plateformes/sky-forest',
    image: '/features/Sky Forest.png',
  },
  {
    id: 'sky-fish',
    name: 'SKY FISH',
    description: 'Observation maritime et surveillance des zones de pêche',
    href: '/datasat/plateformes/sky-fish',
    image: '/features/Sky Fish.png',
  },
  {
    id: 'sky-cadastre',
    name: 'SKY CADASTRE',
    description: 'Système cadastral satellitaire',
    href: '/datasat/plateformes/sky-cadastre',
    image: '/features/Sky Cadastre.png',
  },
  {
    id: 'sky-transport',
    name: 'SKY TRANSPORT',
    description: 'Gestion du transport urbain',
    href: '/datasat/plateformes/sky-transport',
    image: '/features/Sky Transport.png',
  },
]

export const DATASAT_DOMAINS = [
  {
    id: 'environnement',
    name: 'Environnement & Climat',
    icon: 'leaf',
    href: '/datasat/domaines/environnement',
  },
  {
    id: 'agriculture',
    name: 'Agriculture & Sécurité Alimentaire',
    icon: 'wheat',
    href: '/datasat/domaines/agriculture',
  },
  {
    id: 'urbanisation',
    name: 'Urbanisation & Infrastructures',
    icon: 'building',
    href: '/datasat/domaines/urbanisation',
  },
  {
    id: 'energie',
    name: 'Énergie & Ressources Naturelles',
    icon: 'zap',
    href: '/datasat/domaines/energie',
  },
  {
    id: 'securite',
    name: 'Sécurité & Surveillance',
    icon: 'shield',
    href: '/datasat/domaines/securite',
  },
  {
    id: 'assurance',
    name: 'Assurance & Gestion des Risques',
    icon: 'umbrella',
    href: '/datasat/domaines/assurance',
  },
]
