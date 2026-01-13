# ONE SKY - Site Web Officiel

Site web vitrine de ONE SKY, opérateur stratégique de données géospatiales décisionnelles.

## 🚀 Technologies

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Formulaires**: React Hook Form + Zod
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Export**: Static site generation (SSG)

## 🎨 Palette de Couleurs

```css
- Deep Space: #0A0E1A (Background principal)
- Midnight Blue: #0D1B2A
- Cosmic Blue: #1B263B
- Stellar Blue: #415A77
- Nebula Gray: #778DA9
- Lunar White: #E0E1DD (Text principal)
- Cyber Cyan: #00D4FF (Accent principal)
- Aurora Violet: #7B2CBF (Accent secondaire)
- Alert Orange: #FF6B35
- Success Green: #2ECC71
```

## 📦 Installation

```bash
npm install
```

## 🛠️ Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 🏗️ Build Production

```bash
npm run build
```

Le site statique sera généré dans le dossier `out/`

## 📁 Structure du Projet

```
one_sky/
├── app/                          # Pages Next.js (App Router)
│   ├── (routes)/
│   │   ├── page.tsx             # Accueil
│   │   ├── a-propos/            # Section À Propos
│   │   ├── technologie/         # Section Technologie
│   │   ├── solutions/           # Section Solutions
│   │   ├── datasat/             # Section DataSAT
│   │   └── contact/             # Page Contact
│   ├── layout.tsx               # Layout principal
│   ├── globals.css              # Styles globaux
│   └── not-found.tsx            # Page 404
├── components/
│   ├── layout/                  # Header, Footer
│   ├── sections/                # Sections réutilisables
│   ├── ui/                      # Composants UI de base
│   └── datasat/                 # Composants DataSAT
├── lib/
│   ├── constants.ts             # Configuration du site
│   └── utils.ts                 # Utilitaires
├── public/                      # Assets statiques
└── next.config.ts               # Configuration Next.js
```

## 🌟 Fonctionnalités

### Pages Principales
- ✅ Page d'accueil avec Hero animé
- ✅ Section À Propos (Vision, Gouvernance, Engagements, Partenariats, Carrières)
- ✅ Section Technologie (Infrastructures, Chaîne de valeur, Plateforme)
- ✅ Section Solutions (Observation, Analyses, Alertes, Dashboards, APIs, Parcours, Secteurs)
- ✅ Section DataSAT (Plateformes verticales, Domaines, Livrables, POC)
- ✅ Page Contact avec formulaire fonctionnel
- ✅ Pages légales (Mentions, CGU, Confidentialité, Cookies)
- ✅ Page 404 personnalisée

### Composants
- ✅ Header avec navigation responsive
- ✅ Footer avec liens organisés
- ✅ Composants UI réutilisables (Button, Card, Badge, Section, Container)
- ✅ PageHeader pour toutes les pages internes
- ✅ Formulaires avec validation (React Hook Form + Zod)
- ✅ Animations Framer Motion

### Optimisations
- ✅ Export statique (SSG)
- ✅ Images non optimisées (compatibilité hébergement statique)
- ✅ Trailing slash activé
- ✅ TypeScript strict
- ✅ SEO-friendly (metadata, OpenGraph)

## 🚢 Déploiement

Le site peut être déployé sur :
- **Vercel**: `vercel --prod`
- **Netlify**: Glisser-déposer le dossier `out/`
- **GitHub Pages**: Configurer avec GitHub Actions
- **Serveur statique**: Tout serveur HTTP (Nginx, Apache, etc.)

## 📝 Configuration

Les constantes du site (nom, email, navigation, etc.) sont centralisées dans `lib/constants.ts`.

Pour modifier:
1. Ouvrir `lib/constants.ts`
2. Éditer les valeurs dans `SITE_CONFIG`, `NAVIGATION`, etc.
3. Rebuild le site

## 🎯 Prochaines Étapes

- [ ] Ajouter images/photos réelles
- [ ] Connecter les formulaires à une API backend
- [ ] Ajouter Google Analytics
- [ ] Implémenter le système de cookies
- [ ] Ajouter plus d'animations
- [ ] Créer une version multilingue (EN/FR)

## 📄 License

© 2026 ONE SKY. Tous droits réservés.
