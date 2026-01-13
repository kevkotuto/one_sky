Cahier des Charges Technique - Site Web ONE SKY
📋 Document de Spécifications Complètes
Version: 1.0
Date: 13 janvier 2026
Client: ONE SKY
Type de projet: Site web institutionnel statique
Périmètre: ONE SKY uniquement (UPCONNECT exclu)

1. CONTEXTE ET OBJECTIFS
1.1 Contexte du Projet
ONE SKY est une entreprise internationale de haute technologie spécialisée dans les technologies spatiales et la valorisation de données géospatiales. Le site actuel (https://ones-sky.net/) présente conjointement ONE SKY et UPCONNECT, deux entités distinctes qui nécessitent une séparation digitale complète.
Problèmes identifiés sur le site actuel:

Mélange de deux identités distinctes (ONE SKY et UPCONNECT)
Problèmes de CSS affectant la présentation
Manque de clarté dans le positionnement stratégique
Identité visuelle non optimale

1.2 Objectifs du Nouveau Site
Objectifs principaux:

Créer un site web indépendant 100% dédié à ONE SKY
Établir une identité digitale forte, moderne et institutionnelle
Refléter le positionnement spatial, data et souveraineté
Inspirer confiance auprès des États, institutions et industries critiques
Valoriser l'expertise technologique et l'impact décisionnel

Cibles prioritaires:

États & Gouvernements
Institutions internationales
Organisations multilatérales
Grandes entreprises et industries critiques
Assureurs & réassureurs
Investisseurs et partenaires technologiques


2. POSITIONNEMENT ET IDENTITÉ
2.1 Message Clé

"Observer la planète pour permettre au monde de décider mieux, plus vite et durablement."

2.2 Univers de Marque
Mots-clés identitaires:

Spatial & Satellitaire
Data & Intelligence Géospatiale
Souveraineté & Fiabilité
Innovation & Excellence Technologique
Impact Décisionnel & Stratégique

Références inspirantes:

NASA (spatial & science)
Starlink (infrastructure satellitaire)
Acteurs de la New Space Economy

2.3 Ton & Style Éditorial
Caractéristiques:

Institutionnel mais accessible
Factuel et crédible
Orienté impact et résultats
Sans jargon technique excessif
Professionnel et international

À éviter:

Ton commercial agressif
Promesses excessives
Science-fiction ou futurisme générique
Langage trop technique sans contexte


3. ARCHITECTURE DU SITE
3.1 Arborescence Détaillée
ACCUEIL
│
├── À PROPOS
│   ├── Vision & Mission
│   ├── Positionnement & Proposition de valeur
│   ├── Gouvernance & Équipe
│   ├── Engagements (Qualité, Sécurité, Durabilité)
│   ├── Partenariats
│   └── Carrières
│
├── TECHNOLOGIE
│   ├── Infrastructures Spatiales
│   │   ├── Constellation ONE SKY
│   │   │   ├── SKY 1 & SKY 2 — Communication & Transmission
│   │   │   └── SKY 3 — Observation de la Terre
│   │   └── Orbite LEO & Capacités Opérationnelles
│   │
│   ├── Chaîne de Valeur de la Donnée
│   │   ├── Acquisition → Traitement → Analyse → Diffusion
│   │   ├── Qualité & Traçabilité
│   │   └── Sécurité & Intégration (API / SI)
│   │
│   └── Plateforme & Interopérabilité
│       ├── Standards & Formats
│       └── Intégrations (SIG / SI / Portails)
│
├── SOLUTIONS
│   ├── Vue d'Ensemble (Catalogue)
│   ├── Observation & Monitoring
│   ├── Analyses & Indicateurs
│   ├── Alertes & Veille Opérationnelle
│   ├── Tableaux de Bord & Reporting
│   ├── APIs & Intégration SI
│   ├── Parcours Projet
│   │   ├── Étude & Cadrage
│   │   ├── POC / Démonstration
│   │   ├── Industrialisation
│   │   └── Exploitation / Monitoring
│   │
│   └── Secteurs & Cas d'Usage
│       ├── Gouvernements & Institutions
│       ├── Organisations Internationales
│       └── Industries & Infrastructures Critiques
│
├── DATASAT
│   ├── Présentation de DataSAT
│   ├── Intelligence Géospatiale & IA
│   ├── Domaines d'Application
│   │   ├── Environnement & Climat
│   │   ├── Agriculture & Sécurité Alimentaire
│   │   ├── Urbanisation & Infrastructures
│   │   ├── Énergie & Ressources Naturelles
│   │   ├── Sécurité & Surveillance
│   │   └── Assurance & Gestion des Risques
│   │
│   ├── Plateformes & Produits
│   │   ├── SKY LOUPE
│   │   ├── SKY SENTINEL
│   │   ├── SKY FOREST
│   │   ├── SKY FISH
│   │   ├── SKY CADASTRE
│   │   └── SKY TRANSPORT
│   │
│   ├── Livrables DataSAT
│   │   ├── Indicateurs / KPI
│   │   ├── Alertes & Détection d'Événements
│   │   ├── Tableaux de Bord
│   │   ├── Rapports & Cartographies
│   │   └── APIs DataSAT
│   │
│   └── Lancer un POC DataSAT
│
└── CONTACT
    ├── Nous Contacter
    ├── Demande Institutionnelle
    ├── Demander une Démonstration
    └── Devenir Partenaire
3.2 Navigation Principale
Header (Fixed):
[LOGO ONE SKY]    À Propos | Technologie | Solutions | DataSAT | Contact    [FR/EN]
Footer:
[LOGO ONE SKY]

À PROPOS          SOLUTIONS         DATASAT           LÉGAL
Vision & Mission  Catalogue         Plateformes       Mentions Légales
Équipe            Secteurs          POC DataSAT       Confidentialité
Partenariats      APIs              Livrables         Cookies
Carrières                                             CGU

SUIVEZ-NOUS       CONTACT
[LinkedIn]        contact@onesky.space
[Twitter/X]       +33 X XX XX XX XX

© 2026 ONE SKY. Tous droits réservés.

4. SPÉCIFICATIONS TECHNIQUES
4.1 Technologies Recommandées
Frontend:

Framework: Next.js 14+ (App Router)
Styling: Tailwind CSS 3.4+
Animations: Framer Motion
Icons: Lucide React
Fonts: Inter (via Google Fonts ou next/font)

Justifications:

Next.js offre SSG parfait pour un site statique institutionnel
Excellent SEO et performance out-of-the-box
Tailwind CSS pour un développement rapide et maintenable
Framer Motion pour animations fluides et professionnelles

4.2 Structure du Projet
one-sky-website/
├── app/
│   ├── (routes)/
│   │   ├── page.tsx                 # Accueil
│   │   ├── a-propos/
│   │   │   ├── page.tsx
│   │   │   ├── vision-mission/page.tsx
│   │   │   ├── gouvernance/page.tsx
│   │   │   ├── engagements/page.tsx
│   │   │   ├── partenariats/page.tsx
│   │   │   └── carrieres/page.tsx
│   │   ├── technologie/
│   │   │   ├── page.tsx
│   │   │   ├── infrastructures/page.tsx
│   │   │   ├── chaine-valeur/page.tsx
│   │   │   └── plateforme/page.tsx
│   │   ├── solutions/
│   │   │   ├── page.tsx
│   │   │   ├── observation/page.tsx
│   │   │   ├── analyses/page.tsx
│   │   │   ├── alertes/page.tsx
│   │   │   ├── dashboards/page.tsx
│   │   │   ├── apis/page.tsx
│   │   │   ├── parcours/page.tsx
│   │   │   └── secteurs/
│   │   │       ├── gouvernements/page.tsx
│   │   │       ├── organisations/page.tsx
│   │   │       └── industries/page.tsx
│   │   ├── datasat/
│   │   │   ├── page.tsx
│   │   │   ├── intelligence-ia/page.tsx
│   │   │   ├── domaines/
│   │   │   │   ├── environnement/page.tsx
│   │   │   │   ├── agriculture/page.tsx
│   │   │   │   ├── urbanisation/page.tsx
│   │   │   │   ├── energie/page.tsx
│   │   │   │   ├── securite/page.tsx
│   │   │   │   └── assurance/page.tsx
│   │   │   ├── plateformes/
│   │   │   │   ├── sky-loupe/page.tsx
│   │   │   │   ├── sky-sentinel/page.tsx
│   │   │   │   ├── sky-forest/page.tsx
│   │   │   │   ├── sky-fish/page.tsx
│   │   │   │   ├── sky-cadastre/page.tsx
│   │   │   │   └── sky-transport/page.tsx
│   │   │   ├── livrables/page.tsx
│   │   │   └── poc/page.tsx
│   │   └── contact/
│   │       └── page.tsx
│   ├── layout.tsx
│   ├── globals.css
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   ├── Satellites.tsx
│   │   ├── DataPipeline.tsx
│   │   ├── Statistics.tsx
│   │   └── CTA.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Section.tsx
│   │   └── Container.tsx
│   └── datasat/
│       ├── PlatformCard.tsx
│       └── DomainCard.tsx
├── public/
│   ├── images/
│   │   ├── satellites/
│   │   ├── earth/
│   │   ├── data-viz/
│   │   └── logo/
│   ├── icons/
│   └── documents/
├── lib/
│   ├── constants.ts
│   └── utils.ts
├── styles/
│   └── animations.css
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
4.3 Configuration Next.js
typescript// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Static export
  images: {
    unoptimized: true, // For static export
  },
  trailingSlash: true, // Better for static hosting
}

module.exports = nextConfig
4.4 Configuration Tailwind
typescript// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette ONE SKY
        'deep-space': '#0A0E1A',
        'midnight-blue': '#0D1B2A',
        'cosmic-blue': '#1B263B',
        'stellar-blue': '#415A77',
        'nebula-gray': '#778DA9',
        'lunar-white': '#E0E1DD',
        'quantum-silver': '#C0C5CE',
        'cyber-cyan': '#00D4FF',
        'aurora-violet': '#7B2CBF',
        'alert-orange': '#FF6B35',
        'success-green': '#2ECC71',
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      animation: {
        'orbit': 'orbit 20s linear infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        orbit: {
          '0%': { transform: 'rotate(0deg) translateX(100px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(100px) rotate(-360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config

5. DESIGN SYSTÈME & IDENTITÉ VISUELLE
5.1 Palette de Couleurs
Couleurs Principales:

Deep Space: #0A0E1A - Fond principal sombre
Midnight Blue: #0D1B2A - Fond secondaire
Cosmic Blue: #1B263B - Éléments de structure
Stellar Blue: #415A77 - Textes secondaires

Couleurs Secondaires:

Nebula Gray: #778DA9 - Textes tertiaires
Lunar White: #E0E1DD - Texte principal sur fond sombre
Pure White: #FFFFFF - Accents clairs
Quantum Silver: #C0C5CE - Bordures et séparateurs

Couleurs d'Accent:

Cyber Cyan: #00D4FF - Couleur signature (CTA, liens, accents)
Aurora Violet: #7B2CBF - Accents secondaires
Alert Orange: #FF6B35 - Alertes et notifications
Success Green: #2ECC71 - Validations et succès

Proportions Recommandées:

50% Fonds (Deep Space, Midnight Blue)
25% Textes (Lunar White, Nebula Gray)
15% Accents (Cyber Cyan)
10% Autres éléments

5.2 Typographie
Police Principale: Inter / SF Pro Display
Hiérarchie:
css/* H1 - Titre Principal */
font-size: 48px;
font-weight: 700;
line-height: 1.1;
color: #E0E1DD (Lunar White);
letter-spacing: -0.02em;

/* H2 - Titre Section */
font-size: 36px;
font-weight: 700;
line-height: 1.2;
color: #E0E1DD (Lunar White);

/* H3 - Sous-titre */
font-size: 24px;
font-weight: 600;
line-height: 1.3;
color: #00D4FF (Cyber Cyan);

/* Body - Corps de texte */
font-size: 16px;
font-weight: 400;
line-height: 1.6;
color: #E0E1DD (Lunar White);

/* Caption - Légende */
font-size: 14px;
font-weight: 400;
line-height: 1.4;
color: #778DA9 (Nebula Gray);
5.3 Composants UI
Boutons:
typescript// components/ui/Button.tsx
type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
  className?: string
}

// Styles Tailwind
const variants = {
  primary: 'bg-cyber-cyan text-deep-space hover:bg-cyber-cyan/90',
  secondary: 'bg-cosmic-blue text-lunar-white hover:bg-stellar-blue',
  outline: 'border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10',
  ghost: 'text-lunar-white hover:bg-cosmic-blue',
}
Cards:
typescript// components/ui/Card.tsx
interface CardProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  children?: React.ReactNode
  hover?: boolean
}

// Style de base
className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 
           rounded-lg p-6 transition-all duration-300
           hover:border-cyber-cyan/50 hover:shadow-lg hover:shadow-cyber-cyan/20"
Badges:
typescript// components/ui/Badge.tsx
type BadgeVariant = 'default' | 'success' | 'warning' | 'info'

const variants = {
  default: 'bg-cosmic-blue/80 text-lunar-white',
  success: 'bg-success-green/20 text-success-green border border-success-green/50',
  warning: 'bg-alert-orange/20 text-alert-orange border border-alert-orange/50',
  info: 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/50',
}
5.4 Éléments Graphiques
Motifs Orbitaux:

Ellipses en arrière-plan évoquant les orbites satellitaires
Utilisation de SVG animés
Opacité réduite (10-20%) pour ne pas surcharger

Grilles Géospatiales:

Grilles cartographiques en overlay subtil
Lignes fines en Stellar Blue (#415A77)
Animation de scanning progressive

Dégradés Autorisés:
css/* Deep Space → Midnight */
background: linear-gradient(135deg, #0A0E1A 0%, #0D1B2A 100%);

/* Midnight → Cosmic */
background: linear-gradient(135deg, #0D1B2A 0%, #1B263B 100%);

/* Cosmic → Cyan (accent) */
background: linear-gradient(135deg, #1B263B 0%, #00D4FF 20%);
```

### 5.5 Iconographie

**Style:**
- Outline (contour) avec épaisseur 1.5-2px
- Coins arrondis (border-radius: 2px)
- Couleurs: Lunar White ou Cyber Cyan
- Tailles: 24px, 32px, 48px

**Bibliothèque:** Lucide React

**Icônes Thématiques:**
- Satellite
- Globe
- Database
- Activity (Analytics)
- Shield (Sécurité)
- Zap (Énergie)
- Map (Cartographie)
- TrendingUp (Analyses)

---

## 6. CONTENU DES PAGES

### 6.1 Page d'Accueil

**Structure:**

1. **Hero Section**
   - Titre principal: "Observer la planète pour permettre au monde de décider mieux, plus vite et durablement"
   - Sous-titre: "Opérateur stratégique de données géospatiales décisionnelles au service des États, institutions et industries critiques"
   - CTA: "Découvrir nos solutions" + "Demander une démonstration"
   - Visuel: Animation de la Terre vue de l'espace avec overlay de grille géospatiale

2. **Chiffres Clés**
```
   3 Satellites   |   Couverture Globale   |   Intelligence IA   |   24/7 Monitoring
   SKY 1, 2, 3    |   Orbite LEO          |   Analyses Temps Réel | Support Continu

Proposition de Valeur

4 cartes:

"Observation Continue" - Suivi multi-temporel, couverture étendue
"Donnée Qualifiée" - Traitement industrialisé, contrôle qualité
"Intelligence Exploitable" - KPI, analyses, alertes
"Intégration SI" - APIs, dashboards, exports




Constellation ONE SKY

Visualisation des 3 satellites
SKY 1 & 2: Communication & Transmission
SKY 3: Observation de la Terre


Secteurs & Applications

Gouvernements & Institutions
Environnement & Climat
Agriculture & Sécurité Alimentaire
Urbanisation & Infrastructures
Énergie & Ressources
Sécurité & Surveillance


DataSAT Highlight

Présentation du pôle intelligence géospatiale
Lien vers section DataSAT


CTA Final

"Prêt à transformer vos données en décisions stratégiques ?"
Boutons: "Contacter un expert" + "Explorer nos solutions"



6.2 Page À Propos
Vision & Mission:
markdown# Vision

Observer la planète pour permettre au monde de décider mieux, plus vite et durablement.

ONE SKY ambitionne de devenir une référence internationale dans l'exploitation 
stratégique des données spatiales, au service de :
- La gouvernance et de la planification publique
- La sécurité et de la gestion des risques
- Le développement durable et de la protection des ressources
- La résilience économique et de la continuité des activités
- La planification à long terme et du pilotage par les preuves

# Mission

La mission de ONE SKY est de :
- Déployer et opérer des capacités spatiales performantes et évolutives
- Fournir une observation globale, continue et fiable de la Terre
- Transformer la donnée satellitaire en informations exploitables
- Soutenir la décision stratégique, tactique et opérationnelle
```

**Positionnement & Proposition de Valeur:**
- Diagramme illustrant l'intersection: Espace + Data + IA + Décision
- 4 piliers de valeur détaillés
- Différenciation vs "simple fournisseur d'images"

**Gouvernance & Équipe:**
- Organisation orientée performance et sécurité
- Compétences clés: Opérations spatiales, Data engineering, IA, Cybersécurité
- Mode de fonctionnement structuré

**Engagements:**
- Qualité: Processus industrialisés, contrôles systématiques
- Sécurité: Gestion des accès, traçabilité, "security by design"
- Durabilité: Solutions orientées résilience et planification long terme

**Partenariats:**
- Types: Institutionnels, Technologiques, Déploiement
- Processus: Soumission → Évaluation → Pilote → Accord

**Carrières:**
- "Rejoignez une équipe au croisement du spatial, de la data et de l'impact"
- Valeurs recherchées: Rigueur, sens de la mission, esprit d'équipe
- Lien vers opportunités

### 6.3 Page Technologie

**Infrastructures Spatiales:**

Contenu détaillé sur:
- Constellation ONE SKY (SKY 1, 2, 3)
- Orbite LEO & capacités opérationnelles
- Planification d'acquisition
- Continuité de service

**Chaîne de Valeur:**

Timeline visuelle:
```
Acquisition → Traitement → Analyse → Diffusion
     ↓            ↓           ↓          ↓
  Planning   Normalisation  Extraction  Dashboard
  Collecte   Harmonisation    KPI       API
  Flux       Structure     Détection   Exports
```

**Qualité & Traçabilité:**
- Contrôle qualité à chaque étape
- Documentation des indicateurs
- Gestion des versions
- Cohérence temporelle

**Plateforme & Interopérabilité:**
- Standards: GeoJSON, Shapefile, GeoTIFF
- Services web: WMS/WFS
- APIs: JSON, REST, documentation OpenAPI

### 6.4 Page Solutions

**Vue d'Ensemble:**
- Catalogue modulaire de services
- Tableau comparatif des offres
- CTA: "Télécharger le catalogue"

**Services Détaillés:**

Chaque service avec:
- Objectif
- Fonctionnalités clés
- Cas d'usage
- Livrables types
- CTA: "En savoir plus" + "Demander un POC"

**Parcours Projet:**

Visualisation en 4 étapes:
```
1. Étude & Cadrage
   → Besoins, indicateurs, gouvernance

2. POC / Démonstration
   → Zone pilote, validation résultats

3. Industrialisation
   → Automatisation, qualité, intégration

4. Exploitation
   → Monitoring, alertes, amélioration continue
Secteurs:
3 pages dédiées avec:

Enjeux spécifiques
Apports ONE SKY
Cas d'usage détaillés
Témoignages (si disponibles)
CTA secteur

6.5 Section DataSAT
Page Principale DataSAT:
markdown# DataSAT
## L'intelligence géospatiale au service de la décision

DataSAT est le pôle Data & Intelligence géospatiale de ONE SKY.
Il transforme la donnée satellitaire en informations immédiatement 
exploitables pour piloter des programmes, sécuriser des actifs, 
anticiper des risques et mesurer des impacts.
```

**Les 4 Piliers:**
1. Analytics & IA Géospatiale
2. Data Engineering
3. Gouvernance
4. Delivery

**Ce que DataSAT Apporte:**
- Réduction du temps "donnée → décision"
- Automatisation & industrialisation
- Cohérence, comparabilité, traçabilité
- Passage à l'échelle

**Domaines d'Application:**

7 domaines avec pages dédiées:
- Environnement & Climat
- Agriculture & Sécurité Alimentaire
- Urbanisation & Infrastructures
- Énergie & Ressources Naturelles
- Sécurité & Surveillance
- Assurance & Gestion des Risques

Chaque page domaine:
- Objectif
- Ce que DataSAT permet
- Cas d'usage typiques
- Indicateurs & livrables
- Exemples concrets
- CTA: "Lancer un POC"

**Plateformes & Produits:**

6 plateformes avec pages dédiées:

1. **SKY LOUPE** - Suivi constructions & permis
2. **SKY SENTINEL** - Observation frontières & veille territoriale
3. **SKY FOREST** - Surveillance forestière
4. **SKY FISH** - Observation maritime
5. **SKY CADASTRE** - Système cadastral satellitaire
6. **SKY TRANSPORT** - Gestion transport urbain

Chaque page plateforme:
- Description
- Cas d'usage
- Livrables
- Captures d'écran (mockups)
- CTA: "Explorer" + "Demander une démo"

**Livrables DataSAT:**

Page dédiée avec 5 types:
1. Indicateurs / KPI
2. Alertes & Détection
3. Tableaux de Bord
4. Rapports & Cartographies
5. APIs DataSAT

Chaque type détaillé avec exemples visuels

**Lancer un POC:**
- Pourquoi un POC
- Parcours en 5 étapes
- Pack POC recommandé
- Formulaire de demande

### 6.6 Page Contact

**Structure:**

1. **Section Hero**
   - "Transformons ensemble les données spatiales en décisions stratégiques"

2. **Formulaire Principal**
```
   Champs:
   - Type de demande (select)
     • Demande institutionnelle
     • Démonstration technique
     • Partenariat
     • Information générale
   - Organisation
   - Nom & Prénom
   - Email
   - Téléphone
   - Pays
   - Secteur d'activité
   - Message
   - [Captcha]
   - Bouton: "Envoyer la demande"
```

3. **Informations de Contact**
```
   Email: contact@onesky.space
   Téléphone: +33 X XX XX XX XX
   
   Siège Social:
   [Adresse complète si disponible]

CTA Rapides

"Télécharger la présentation ONE SKY"
"Télécharger le catalogue de solutions"
"Planifier un appel avec un expert"




7. FONCTIONNALITÉS TECHNIQUES
7.1 Navigation & UX
Header:

Fixed/Sticky avec backdrop blur
Logo cliquable → Accueil
Menu responsive (hamburger sur mobile)
Sélecteur de langue FR/EN (si multilingue)
Effet de scroll: background opacity increase

typescript// components/layout/Header.tsx
'use client'

import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-deep-space/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Navigation content */}
    </header>
  )
}
Footer:

4 colonnes de liens
Réseaux sociaux
Newsletter signup (si activé)
Copyright & mentions légales
Design sobre avec séparateurs

Breadcrumbs:

Sur toutes les pages sauf Accueil
Format: Accueil > Section > Page
Couleur: Nebula Gray avec hover Cyber Cyan

7.2 Animations & Interactions
Animations d'Entrée:
typescript// Utilisation de Framer Motion
import { motion } from 'framer-motion'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// Dans composant
<motion.div {...fadeInUp}>
  {/* Content */}
</motion.div>
```

**Scroll Animations:**
- Elements fade in au scroll
- Parallax subtil sur certaines sections
- Counter animation pour statistiques

**Hover Effects:**
- Cards: Border glow Cyber Cyan + slight elevation
- Buttons: Scale 1.02 + brightness increase
- Links: Underline animation from center
- Images: Zoom 1.05 smooth

**Page Transitions:**
- Fade entre pages (Next.js App Router)
- Loading state élégant

### 7.3 Responsive Design

**Breakpoints Tailwind:**
```
sm: 640px   (Mobile large)
md: 768px   (Tablet)
lg: 1024px  (Desktop)
xl: 1280px  (Desktop large)
2xl: 1536px (Desktop XL)
Stratégie:

Mobile-first approach
Navigation hamburger < md
Grid adaptatif: 1 col (mobile) → 2 cols (tablet) → 3-4 cols (desktop)
Typography scale down sur mobile
Images responsive avec Next/Image

Exemples:
typescript// Grille responsive
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// Typography responsive
className="text-3xl md:text-4xl lg:text-5xl"

// Padding responsive
className="px-4 md:px-8 lg:px-16"
7.4 Performance
Optimisations:

Static Site Generation (SSG)
Image optimization avec next/image
Lazy loading pour images below fold
Code splitting automatique (Next.js)
Minification CSS/JS
Font optimization (next/font)

Objectifs:

Lighthouse Performance: > 90
First Contentful Paint: < 1.5s
Time to Interactive: < 3s
Cumulative Layout Shift: < 0.1

7.5 SEO
Meta Tags:
typescript// app/layout.tsx ou page.tsx
export const metadata = {
  title: 'ONE SKY - Intelligence Géospatiale Décisionnelle',
  description: 'Opérateur stratégique de données géospatiales au service des États...',
  keywords: ['satellite', 'géospatial', 'data', 'intelligence', 'observation terre'],
  openGraph: {
    title: 'ONE SKY',
    description: '...',
    images: ['/images/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ONE SKY',
    description: '...',
    images: ['/images/twitter-image.jpg'],
  },
}
Structure:

Semantic HTML5
Headings hierarchy (H1 unique par page)
Alt text sur toutes les images
Schema.org markup (Organization, Service)
Sitemap.xml généré automatiquement
Robots.txt

7.6 Accessibilité (WCAG 2.1 AA)
Checklist:

Contrastes respectés (minimum 4.5:1)
Navigation au clavier complète
Focus indicators visibles
ARIA labels où nécessaire
Skip to content link
Alt text descriptifs
Formulaires avec labels associés
Erreurs de validation claires

Test:
bash# Audit accessibilité
npm run lighthouse -- --only-categories=accessibility

8. FORMULAIRES & INTERACTIONS
8.1 Formulaire de Contact
Technologies:

React Hook Form pour gestion
Zod pour validation
Service email: à définir (Resend, SendGrid, ou API custom)

Structure:
typescript// app/contact/ContactForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const contactSchema = z.object({
  type: z.enum(['institutional', 'demo', 'partnership', 'info']),
  organization: z.string().min(2, 'Organisation requise'),
  firstName: z.string().min(2, 'Prénom requis'),
  lastName: z.string().min(2, 'Nom requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  country: z.string().min(2, 'Pays requis'),
  sector: z.string().min(2, 'Secteur requis'),
  message: z.string().min(20, 'Message trop court (min 20 caractères)'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })
  
  const onSubmit = async (data: ContactFormData) => {
    // API call
    console.log(data)
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Form fields */}
    </form>
  )
}
Validation:

Client-side avec Zod
Messages d'erreur en français
Feedback visuel (red border + message)
Success state après soumission

8.2 Newsletter Signup (Optionnel)
Si activé:
typescript// components/NewsletterForm.tsx
<form className="flex gap-2 max-w-md">
  <input 
    type="email" 
    placeholder="votre@email.com"
    className="flex-1 px-4 py-2 bg-cosmic-blue border border-stellar-blue 
               rounded-lg text-lunar-white focus:border-cyber-cyan"
  />
  <button className="px-6 py-2 bg-cyber-cyan text-deep-space rounded-lg 
                     hover:bg-cyber-cyan/90 transition-colors">
    S'abonner
  </button>
</form>
```

### 8.3 Demande de POC

Formulaire dédié avec champs supplémentaires:
- Zone géographique d'intérêt
- Domaine d'application (select)
- Indicateurs recherchés (textarea)
- Budget estimé (optionnel)
- Timeline souhaitée

---

## 9. CONTENU MULTIMÉDIA

### 9.1 Images Requises

**Catégories:**

1. **Spatial & Satellites** (15-20 images)
   - Vue de la Terre depuis l'espace (multiple angles)
   - Satellites en orbite (renders 3D)
   - Constellation ONE SKY (SKY 1, 2, 3)
   - Orbites LEO visualization
   - Station sol et antennes

2. **Data Visualization** (10-15 images)
   - Grilles géospatiales
   - Heatmaps
   - Cartographies thématiques
   - Graphiques analytiques
   - Dashboards mockups
   - Flow diagrams

3. **Secteurs d'Application** (20-25 images)
   - Agriculture: Champs, cultures, irrigation
   - Environnement: Forêts, zones humides, côtes
   - Urbanisation: Villes, infrastructures, transport
   - Énergie: Installations, pipelines, corridors
   - Sécurité: Frontières, surveillance, monitoring

4. **Plateformes DataSAT** (6 mockups)
   - SKY LOUPE: Interface monitoring constructions
   - SKY SENTINEL: Dashboard veille territoriale
   - SKY FOREST: Carte surveillance forestière
   - SKY FISH: Interface observation maritime
   - SKY CADASTRE: Système cadastral
   - SKY TRANSPORT: Dashboard transport urbain

5. **Illustrations & Icons** (30-40)
   - Icons techniques (satellite, data, globe, analytics)
   - Diagrammes de processus
   - Infographies

**Spécifications Techniques:**
```
Format: WebP (avec fallback PNG)
Résolutions:
  - Hero images: 1920x1080px
  - Cards: 800x600px
  - Icons: SVG ou 256x256px
  - Thumbnails: 400x300px
Optimisation:
  - Compression: 80-85% quality
  - Next/Image automatic optimization
  - Lazy loading: active
Sources Recommandées:

NASA Image Library (domaine public)
ESA Media Library
Unsplash / Pexels (satellite, earth, data)
Créations custom (satellites ONE SKY)
Stock photos premium (si budget)

9.2 Vidéos (Optionnel)
Si incluses:

Hero Video (Accueil)

Timelapse Terre vue de l'espace
15-30 secondes, loop
Optimized pour web (H.264, 1080p)


Explainers

Présentation ONE SKY (2-3 min)
Fonctionnement constellation (1-2 min)
DataSAT overview (2 min)



Hébergement:

Self-hosted (optimized files)
ou YouTube embed (avec player custom)

9.3 Animations
Lottie Animations:

Satellite orbiting
Data flow
Globe rotation
Loading states

CSS/Framer Motion:

Scroll-triggered reveals
Counter animations
Parallax effects
Hover interactions


10. DÉVELOPPEMENT
10.1 Setup Initial
bash# Créer projet Next.js
npx create-next-app@latest one-sky-website --typescript --tailwind --app

# Installer dépendances
cd one-sky-website
npm install framer-motion lucide-react react-hook-form @hookform/resolvers zod

# Créer structure
mkdir -p components/{layout,sections,ui,datasat}
mkdir -p public/{images,icons,documents}
mkdir -p lib
mkdir -p styles
10.2 Configuration
package.json scripts:
json{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "export": "next build && next export",
    "lint": "next lint",
    "format": "prettier --write .",
    "lighthouse": "lighthouse"
  }
}
ESLint & Prettier:
json// .eslintrc.json
{
  "extends": ["next/core-web-vitals", "prettier"],
  "rules": {
    "react/no-unescaped-entities": "off"
  }
}

// .prettierrc
{
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
10.3 Phases de Développement
Phase 1: Foundation (Semaine 1)

Setup projet
Configuration Tailwind + thème
Composants UI de base (Button, Card, Badge)
Layout (Header, Footer)
Page Accueil structure

Phase 2: Core Pages (Semaine 2-3)

Page À Propos complète
Page Technologie
Page Solutions (structure + 3 secteurs)
Navigation fonctionnelle

Phase 3: DataSAT (Semaine 4)

Section DataSAT principale
7 pages domaines
6 pages plateformes
Page livrables

Phase 4: Contact & Finitions (Semaine 5)

Page Contact + formulaire
Intégration images/médias
Animations finales
Responsive testing

Phase 5: Testing & Deploy (Semaine 6)

Tests multi-navigateurs
Audit performance
Audit accessibilité
SEO final check
Déploiement

10.4 Testing
Checklist:

 Tous les liens fonctionnels
 Formulaires validés
 Images optimized & alt texts
 Responsive mobile/tablet/desktop
 Navigateurs: Chrome, Firefox, Safari, Edge
 Performance Lighthouse > 90
 Accessibilité WCAG AA
 SEO meta tags complets
 404 page custom
 Loading states

Outils:
bash# Performance
npm run lighthouse -- --view

# Accessibilité
npm install -g pa11y
pa11y http://localhost:3000

# Broken links
npm install -g broken-link-checker
blc http://localhost:3000 -ro

11. DÉPLOIEMENT
11.1 Options d'Hébergement
Recommandé: Vercel

Optimisé pour Next.js
Deploy automatique via Git
CDN global inclus
SSL automatique
Analytics intégrés

Alternative: Netlify

Excellent pour sites statiques
CI/CD intégré
Formulaires natives
Functions serverless

Alternative: GitHub Pages

Gratuit
Simple pour static export
Workflow GitHub Actions

Alternative: Self-hosted

VPS Ubuntu + Nginx
Docker container
Contrôle total

11.2 Configuration Vercel
json// vercel.json
{
  "buildCommand": "npm run build",
  "outputDirectory": "out",
  "framework": "nextjs",
  "regions": ["cdg1"], // Paris
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
Déploiement:
bash# Installer Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel --prod
```

### 11.3 Domaine Custom

**Configuration DNS:**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

**SSL:**
- Automatique avec Vercel
- Let's Encrypt certificate
- Renouvellement auto

### 11.4 Monitoring

**Analytics:**
- Vercel Analytics (intégré)
- ou Google Analytics 4
- ou Plausible (privacy-focused)

**Error Tracking:**
- Sentry (optionnel)
- Vercel Error Reporting

**Performance:**
- Vercel Speed Insights
- PageSpeed Insights monitoring

---

## 12. MAINTENANCE & ÉVOLUTION

### 12.1 Maintenance Courante

**Mensuel:**
- Update dépendances (npm update)
- Vérifier liens cassés
- Audit performance
- Backup complet

**Trimestriel:**
- Revue contenu (actualité)
- Audit SEO
- Analyse analytics
- Tests cross-browser

### 12.2 Évolutions Futures

**Phase 2 - Court terme:**
- Version anglaise (i18n)
- Blog/Actualités section
- Espace client sécurisé
- Témoignages clients

**Phase 3 - Moyen terme:**
- Démos interactives DataSAT
- Calculateur ROI
- Webinars & événements
- Documentation technique

**Phase 4 - Long terme:**
- Portail partenaires
- API publique (documentation)
- Ressources téléchargeables (whitepapers)
- Cas d'usage interactifs

---

## 13. BUDGET & TIMELINE

### 13.1 Estimation Développement

**Développement Frontend:**
- Setup & configuration: 8h
- Composants UI: 16h
- Pages core (Accueil, À Propos, Techno): 24h
- Solutions & Secteurs: 20h
- DataSAT (7 domaines + 6 plateformes): 40h
- Contact & formulaires: 12h
- Responsive & animations: 16h
- Testing & fixes: 16h

**Total développement: ~150h**

À un tarif de 50-80€/h (freelance):
**7,500€ - 12,000€**

### 13.2 Estimation Design

Si design custom supplémentaire:
- Mockups Figma: 24h
- Illustrations custom: 16h
- Animations: 12h

**Total design: ~50h**
**2,500€ - 4,000€**

### 13.3 Contenus & Médias

- Rédaction/adaptation textes: 16h (800€ - 1,200€)
- Recherche/acquisition images: 12h (600€ - 1,000€)
- Vidéos (si créées): Sur devis
- Traduction EN (si nécessaire): 2,000€ - 3,000€

### 13.4 Timeline

**6 semaines** pour MVP complet:
```
Semaine 1: Setup + Foundation + Accueil
Semaine 2: À Propos + Technologie
Semaine 3: Solutions + Secteurs
Semaine 4: DataSAT complet
Semaine 5: Contact + Médias + Responsive
Semaine 6: Testing + Déploiement
```

**Version anglaise:** +2 semaines
**Blog/Actualités:** +1 semaine
**Espace client:** +3-4 semaines

---

## 14. LIVRABLES

### 14.1 Code Source

**Repository Git:**
```
one-sky-website/
├── Code source complet
├── Documentation technique (README.md)
├── Guide de contribution (CONTRIBUTING.md)
├── Changelog (CHANGELOG.md)
└── License
14.2 Documentation

Guide d'utilisation

Comment mettre à jour les contenus
Ajouter une page
Modifier navigation
Uploader images


Documentation technique

Architecture
Composants réutilisables
APIs utilisées
Configuration


Guide de déploiement

Procédure step-by-step
Configuration DNS
Variables d'environnement


Guide de maintenance

Updates régulières
Monitoring
Troubleshooting



14.3 Assets
Fichiers design:

Charte graphique PDF (fournie)
Logo (SVG + PNG variantes)
Palette de couleurs (CSS/JSON)
Typographies

Médias:

Images optimisées (WebP + fallbacks)
Icons SVG
Vidéos (si applicable)
Animations Lottie (si applicable)

14.4 Accès & Comptes

Repository GitHub
Compte Vercel (ou hosting choisi)
Analytics access
Domain management


15. CRITÈRES DE VALIDATION
15.1 Fonctionnels

 Toutes les pages de l'arborescence sont créées
 Navigation principale et secondaire fonctionnelles
 Breadcrumbs sur pages internes
 Formulaire de contact opérationnel
 Liens internes et externes valides
 Footer complet avec liens
 404 page custom

15.2 Design

 Respect charte graphique ONE SKY
 Palette de couleurs appliquée
 Typographie conforme (Inter)
 Logo correctement intégré
 Spacing cohérent (Tailwind)
 Composants UI réutilisables
 Animations fluides et pertinentes

15.3 Responsive

 Mobile (320px - 767px)
 Tablet (768px - 1023px)
 Desktop (1024px+)
 Navigation hamburger fonctionnelle
 Images adaptatives
 Typography scales

15.4 Performance

 Lighthouse Performance > 90
 First Contentful Paint < 1.5s
 Time to Interactive < 3s
 Cumulative Layout Shift < 0.1
 Images optimisées (WebP)
 Code minifié
 Lazy loading actif

15.5 SEO

 Meta titles uniques (50-60 car)
 Meta descriptions uniques (150-160 car)
 Open Graph tags
 Twitter Cards
 Schema.org markup
 Sitemap.xml généré
 Robots.txt configuré
 Alt texts sur images
 Headings hierarchy (H1-H6)

15.6 Accessibilité

 Contrastes WCAG AA (4.5:1)
 Navigation clavier complète
 Focus indicators visibles
 ARIA labels appropriés
 Skip to content
 Formulaires accessibles
 Messages d'erreur clairs

15.7 Sécurité

 HTTPS actif (SSL)
 Headers sécurité (X-Frame-Options, CSP)
 Validation formulaires (client + server)
 Protection CSRF
 Sanitization inputs
 Rate limiting (si APIs)

15.8 Cross-Browser

 Chrome (latest)
 Firefox (latest)
 Safari (latest)
 Edge (latest)
 Mobile Safari (iOS)
 Chrome Mobile (Android)


16. POINTS D'ATTENTION SPÉCIFIQUES
16.1 Séparation ONE SKY / UPCONNECT
CRITIQUE:

AUCUNE mention d'UPCONNECT sur le site ONE SKY
Aucun lien vers UPCONNECT
Identités visuelles totalement distinctes
Vérifier que l'ancien contenu mixte est bien séparé

16.2 Ton Institutionnel

Éviter le langage marketing agressif
Privilégier factuel, crédible, mesuré
Citations et chiffres sourcés si possible
Pas de claims excessifs ("révolutionnaire", "unique au monde")
Professional mais accessible

16.3 Positionnement Premium

Design haut de gamme
Attention aux détails (spacing, alignments)
Animations subtiles et élégantes
Pas de visuels low-quality
Typographie soignée

16.4 Audience Internationale

Anglais correct si version EN
Unités métriques
Format dates européen
Références globales (pas seulement France)
Exemples multi-pays

16.5 Évolutivité

Architecture modulaire
Composants réutilisables
Code commenté et documenté
Facile d'ajouter pages/sections
Git workflow propre


17. RESSOURCES & RÉFÉRENCES
17.1 Inspiration Design
Sites spatiaux:

https://www.nasa.gov
https://www.esa.int
https://www.spacex.com
https://www.starlink.com
https://www.maxar.com

Sites data/tech:

https://www.palantir.com
https://www.databricks.com
https://www.confluent.io

Sites institutionnels:

https://www.worldbank.org
https://www.undp.org

17.2 Outils de Développement
Design:

Figma (mockups)
Photoshop/Illustrator (assets)
Blender (renders 3D satellites)

Code:

VS Code + Extensions (ESLint, Prettier, Tailwind)
GitHub (version control)
Chrome DevTools

Testing:

Lighthouse
WAVE (accessibilité)
BrowserStack (cross-browser)

Assets:

TinyPNG (compression images)
SVGOMG (optimisation SVG)
Font Squirrel (fonts)

17.3 Documentation Technique

Next.js Docs: https://nextjs.org/docs
Tailwind CSS: https://tailwindcss.com/docs
Framer Motion: https://www.framer.com/motion/
React Hook Form: https://react-hook-form.com/


18. ANNEXES
18.1 Exemple Component Button
typescript// components/ui/Button.tsx
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyber-cyan focus:ring-offset-2 focus:ring-offset-deep-space disabled:opacity-50 disabled:cursor-not-allowed',
  {
    variants: {
      variant: {
        primary: 'bg-cyber-cyan text-deep-space hover:bg-cyber-cyan/90 shadow-lg shadow-cyber-cyan/20',
        secondary: 'bg-cosmic-blue text-lunar-white hover:bg-stellar-blue border border-stellar-blue/50',
        outline: 'border-2 border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan/10',
        ghost: 'text-lunar-white hover:bg-cosmic-blue',
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

export default Button
18.2 Exemple Component Card
typescript// components/ui/Card.tsx
import { ReactNode } from 'react'

interface CardProps {
  title?: string
  description?: string
  icon?: ReactNode
  children?: ReactNode
  hover?: boolean
  className?: string
}

export default function Card({
  title,
  description,
  icon,
  children,
  hover = true,
  className = '',
}: CardProps) {
  return (
    <div
      className={`
        bg-cosmic-blue/50 backdrop-blur-sm 
        border border-stellar-blue/30 
        rounded-lg p-6 
        transition-all duration-300
        ${hover ? 'hover:border-cyber-cyan/50 hover:shadow-lg hover:shadow-cyber-cyan/20 hover:-translate-y-1' : ''}
        ${className}
      `}
    >
      {icon && (
        <div className="mb-4 text-cyber-cyan">
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className="text-xl font-semibold text-lunar-white mb-2">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-nebula-gray mb-4">
          {description}
        </p>
      )}
      
      {children}
    </div>
  )
}
18.3 Exemple Section Hero
typescript// components/sections/Hero.tsx
'use client'

import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRight, Satellite } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-deep-space">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue/50 to-deep-space" />
      
      {/* Orbital animation background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-cyber-cyan rounded-full animate-orbit" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 border border-stellar-blue rounded-full animate-orbit" style={{ animationDuration: '30s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex justify-center mb-6">
            <Satellite className="w-16 h-16 text-cyber-cyan" />
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-lunar-white mb-6 leading-tight">
            Observer la planète pour permettre au monde de{' '}
            <span className="text-cyber-cyan">décider mieux</span>, plus vite et durablement
          </h1>
          
          <p className="text-xl md:text-2xl text-nebula-gray mb-8 max-w-3xl mx-auto">
            Opérateur stratégique de données géospatiales décisionnelles 
            au service des États, institutions et industries critiques
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="primary">
              Découvrir nos solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline">
              Demander une démonstration
            </Button>
          </div>
        </motion.div>
        
        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: '3', label: 'Satellites', sublabel: 'SKY 1, 2, 3' },
            { value: 'LEO', label: 'Orbite Basse', sublabel: 'Couverture Globale' },
            { value: 'IA', label: 'Intelligence', sublabel: 'Analyses Temps Réel' },
            { value: '24/7', label: 'Monitoring', sublabel: 'Support Continu' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyber-cyan mb-2">
                {stat.value}
              </div>
              <div className="text-lunar-white font-semibold mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-nebula-gray">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

19. CONCLUSION
Ce cahier des charges détaille l'ensemble des spécifications pour créer un site web institutionnel moderne, performant et évolutif pour ONE SKY.
Objectifs atteints:
✅ Séparation complète d'avec UPCONNECT
✅ Identité visuelle forte et cohérente
✅ Architecture claire et évolutive
✅ Technologies modernes et performantes
✅ Design responsive et accessible
✅ SEO et performance optimisés
✅ Contenu structuré et complet
Prochaines étapes:

Validation de ce cahier des charges
Setup du projet de développement
Début Phase 1 (Foundation)
Reviews régulières (fin de chaque phase)
Tests utilisateurs
Déploiement en production

Contact projet:

Email: [email du chef de projet]
Repository: [URL GitHub]
Figma: [URL maquettes]


Document préparé par: Claude (Anthropic)
Date: 13 janvier 2026
Version: 1.0
Statut: Draft pour validation

Ce document est confidentiel et destiné uniquement à l'équipe ONE SKY et aux prestataires autorisés.