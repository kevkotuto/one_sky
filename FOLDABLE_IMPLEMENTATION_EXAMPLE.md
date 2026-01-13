# Exemple d'Implémentation - Support Foldables

Ce document montre comment implémenter le support des écrans pliables dans les pages existantes.

---

## 🎯 Exemple 1 : Page d'Accueil

### Avant (Sans support foldable)

```tsx
// app/page.tsx
export default function Home() {
  return (
    <main>
      <Hero />
      <Stats />
      <Features />
      <DataSATPreview />
      <CTA />
    </main>
  );
}
```

### Après (Avec support foldable)

```tsx
// app/page.tsx
import { FoldableContainer } from '@/components/ui/FoldableContainer';

export default function Home() {
  return (
    <main>
      <Hero />

      <FoldableContainer foldableMode="avoid-fold">
        <Stats />
      </FoldableContainer>

      <FoldableContainer foldableMode="dual-pane">
        <Features />
      </FoldableContainer>

      <FoldableContainer foldableMode="full-width">
        <DataSATPreview />
      </FoldableContainer>

      <CTA />
    </main>
  );
}
```

**Résultat :**
- ✅ Stats évite le pli central sur Z Fold ouvert
- ✅ Features se divise en 2 panneaux sur écran déplié
- ✅ DataSAT utilise toute la largeur disponible

---

## 🎯 Exemple 2 : Page avec Grid Complexe

### Avant

```tsx
// app/solutions/page.tsx
export default function Solutions() {
  return (
    <Container>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map(solution => (
          <SolutionCard key={solution.id} {...solution} />
        ))}
      </div>
    </Container>
  );
}
```

### Après (Optimisé pour foldables)

```tsx
// app/solutions/page.tsx
import { FoldableContainer } from '@/components/ui/FoldableContainer';
import { useFoldableDetection } from '@/hooks/useFoldableDetection';

export default function Solutions() {
  const { isFoldable, isUnfolded } = useFoldableDetection();

  // Ajuster le nombre de colonnes selon le type d'écran
  const gridCols = isFoldable && isUnfolded
    ? 'grid-cols-2' // 2 colonnes sur foldable ouvert (aspect carré)
    : 'md:grid-cols-2 lg:grid-cols-3'; // Standard pour autres écrans

  return (
    <Container>
      <FoldableContainer foldableMode="avoid-fold">
        <div className={`grid ${gridCols} gap-6`}>
          {solutions.map(solution => (
            <SolutionCard key={solution.id} {...solution} />
          ))}
        </div>
      </FoldableContainer>
    </Container>
  );
}
```

**Résultat :**
- ✅ Grid s'adapte intelligemment à l'écran carré du Z Fold
- ✅ Padding évite le pli central
- ✅ Garde le comportement normal sur autres appareils

---

## 🎯 Exemple 3 : Navigation avec Détection Foldable

### Component Custom avec Hook

```tsx
// components/sections/ResponsiveFeatures.tsx
'use client';

import { useFoldableDetection } from '@/hooks/useFoldableDetection';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { FoldableContainer } from '@/components/ui/FoldableContainer';

interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ResponsiveFeaturesProps {
  features: Feature[];
}

export function ResponsiveFeatures({ features }: ResponsiveFeaturesProps) {
  const { isFoldable, isUnfolded, screenType } = useFoldableDetection();

  // Layout différent selon le type d'écran
  const getLayout = () => {
    if (isFoldable && isUnfolded) {
      return {
        mode: 'dual-pane' as const,
        gridClass: 'grid-cols-2 gap-8',
        cardSize: 'large',
      };
    }

    if (screenType === 'tablet') {
      return {
        mode: 'avoid-fold' as const,
        gridClass: 'md:grid-cols-2 gap-6',
        cardSize: 'medium',
      };
    }

    return {
      mode: 'full-width' as const,
      gridClass: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
      cardSize: 'medium',
    };
  };

  const layout = getLayout();

  return (
    <FoldableContainer foldableMode={layout.mode}>
      <div className={`grid ${layout.gridClass}`}>
        {features.map((feature) => (
          <FeatureCard
            key={feature.id}
            size={layout.cardSize}
            {...feature}
          />
        ))}
      </div>

      {/* Indicateur de debug (à retirer en prod) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 bg-black/80 text-white p-2 rounded text-xs">
          Screen: {screenType} | Foldable: {isFoldable ? 'Yes' : 'No'} |
          Unfolded: {isUnfolded ? 'Yes' : 'No'}
        </div>
      )}
    </FoldableContainer>
  );
}
```

**Utilisation :**

```tsx
// app/features/page.tsx
import { ResponsiveFeatures } from '@/components/sections/ResponsiveFeatures';

export default function FeaturesPage() {
  const features = [...]; // Vos features

  return (
    <main>
      <PageHeader title="Nos Fonctionnalités" />
      <ResponsiveFeatures features={features} />
    </main>
  );
}
```

---

## 🎯 Exemple 4 : Dashboard avec Sidebar

### Layout Adaptatif pour Foldables

```tsx
// app/dashboard/layout.tsx
'use client';

import { useFoldableDetection } from '@/hooks/useFoldableDetection';
import { Sidebar } from '@/components/dashboard/Sidebar';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isFoldable, isUnfolded } = useFoldableDetection();

  // Sur foldable ouvert, afficher sidebar à gauche et contenu à droite
  const layoutClass = isFoldable && isUnfolded
    ? 'grid grid-cols-[300px_1fr]' // Sidebar fixe + contenu flexible
    : 'lg:grid lg:grid-cols-[250px_1fr]'; // Layout standard

  return (
    <div className={layoutClass}>
      {/* Sidebar */}
      <aside className={
        isFoldable && isUnfolded
          ? 'border-r border-stellar-blue/20' // Toujours visible sur foldable
          : 'hidden lg:block border-r border-stellar-blue/20' // Standard
      }>
        <Sidebar />
      </aside>

      {/* Main content */}
      <main className="min-h-screen">
        {children}
      </main>

      {/* Mobile menu (caché sur foldable déplié) */}
      {!(isFoldable && isUnfolded) && (
        <MobileMenuButton />
      )}
    </div>
  );
}
```

**Résultat :**
- ✅ Sidebar permanente sur Z Fold ouvert (utilise l'espace)
- ✅ Layout dual-pane naturel
- ✅ Pas de menu mobile inutile sur écran large

---

## 🎯 Exemple 5 : BeforeAfterSlider Optimisé

### Component avec Aspect Ratio Adaptatif

```tsx
// components/ui/BeforeAfterSlider.tsx (extrait modifié)
'use client';

import { useFoldableDetection } from '@/hooks/useFoldableDetection';

export default function BeforeAfterSlider() {
  const { isFoldable, isUnfolded } = useFoldableDetection();
  const [sliderPosition, setSliderPosition] = useState(50);

  // Aspect ratio adaptatif
  const aspectRatioClass = isFoldable && isUnfolded
    ? 'aspect-square' // Carré sur foldable ouvert
    : 'aspect-video'; // 16:9 standard

  return (
    <div className={`relative ${aspectRatioClass} w-full overflow-hidden rounded-lg`}>
      {/* Images et slider... */}
    </div>
  );
}
```

---

## 🎯 Exemple 6 : Form Responsive

### Formulaire Optimisé Foldables

```tsx
// components/forms/ContactForm.tsx
'use client';

import { useFoldableDetection } from '@/hooks/useFoldableDetection';
import { FoldableContainer } from '@/components/ui/FoldableContainer';

export function ContactForm() {
  const { isFoldable, isUnfolded } = useFoldableDetection();

  // Layout du form selon l'écran
  const formLayout = isFoldable && isUnfolded
    ? 'grid grid-cols-2 gap-x-8 gap-y-4' // 2 colonnes sur foldable
    : 'flex flex-col gap-4'; // Stack vertical standard

  return (
    <FoldableContainer foldableMode="avoid-fold">
      <form className={formLayout}>
        {/* Nom et Prénom côte à côte sur foldable */}
        <div>
          <label>Nom</label>
          <input type="text" />
        </div>

        <div>
          <label>Prénom</label>
          <input type="text" />
        </div>

        {/* Email et Téléphone */}
        <div className={isFoldable && isUnfolded ? '' : 'col-span-1'}>
          <label>Email</label>
          <input type="email" />
        </div>

        <div className={isFoldable && isUnfolded ? '' : 'col-span-1'}>
          <label>Téléphone</label>
          <input type="tel" />
        </div>

        {/* Message prend toute la largeur */}
        <div className={isFoldable && isUnfolded ? 'col-span-2' : ''}>
          <label>Message</label>
          <textarea rows={6} />
        </div>

        {/* Bouton submit */}
        <div className={isFoldable && isUnfolded ? 'col-span-2' : ''}>
          <button type="submit">Envoyer</button>
        </div>
      </form>
    </FoldableContainer>
  );
}
```

**Résultat :**
- ✅ Form utilise l'espace horizontal sur foldable
- ✅ Évite le pli central
- ✅ Reste ergonomique sur mobile

---

## 🧪 Comment Tester

### 1. Dans Chrome DevTools

1. Ouvrir DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Sélectionner "Edit..." dans les appareils
4. Ajouter un appareil custom :
   - **Name:** Samsung Galaxy Z Fold 6 (Unfolded)
   - **Width:** 1768
   - **Height:** 2208
   - **Device pixel ratio:** 2.5

### 2. Avec le Debug Indicator

```tsx
// Ajouter temporairement dans votre layout
'use client';

import { useFoldableDetection } from '@/hooks/useFoldableDetection';

export function DebugFoldable() {
  const detection = useFoldableDetection();

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black/90 text-white p-4 rounded-lg text-xs font-mono z-50">
      <div>Screen Type: <strong>{detection.screenType}</strong></div>
      <div>Is Foldable: <strong>{detection.isFoldable ? 'Yes' : 'No'}</strong></div>
      <div>Is Unfolded: <strong>{detection.isUnfolded ? 'Yes' : 'No'}</strong></div>
      <div>Window: <strong>{typeof window !== 'undefined' ? `${window.innerWidth}x${window.innerHeight}` : 'N/A'}</strong></div>
      {detection.foldPosition && (
        <div>Fold Position: <strong>L:{detection.foldPosition.left} T:{detection.foldPosition.top}</strong></div>
      )}
    </div>
  );
}
```

Ajouter dans `app/layout.tsx` :

```tsx
import { DebugFoldable } from '@/components/debug/DebugFoldable';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <DebugFoldable />
      </body>
    </html>
  );
}
```

### 3. Test Réel

Si vous avez accès à un Samsung Galaxy Z Fold :

```bash
# Via ADB
adb devices
adb shell input keyevent KEYCODE_WAKEUP
# Ouvrir Chrome et naviguer vers localhost
```

---

## 📊 Métriques de Succès

Vérifier que :

- [ ] **Aucun contenu coupé** au niveau du pli
- [ ] **Layout s'adapte** immédiatement au dépliage
- [ ] **Pas de débordement** horizontal
- [ ] **Touch targets** restent accessibles (min 44x44px)
- [ ] **Performance** : pas de lag lors du dépliage
- [ ] **Transitions** fluides entre états

---

## 🚀 Déploiement Progressif

### Phase 1 : Pages Principales (Semaine 1)
- [ ] Home page (`/app/page.tsx`)
- [ ] DataSAT (`/app/datasat/page.tsx`)
- [ ] Solutions (`/app/solutions/page.tsx`)

### Phase 2 : Pages Secondaires (Semaine 2)
- [ ] Toutes les plateformes DataSAT
- [ ] Pages technologie
- [ ] Page contact

### Phase 3 : Optimisations (Semaine 3)
- [ ] A/B testing layouts
- [ ] Collecte feedback utilisateurs foldables
- [ ] Fine-tuning selon retours

---

## 💡 Tips Avancés

### Détecter l'Orientation Fold

```tsx
const { isFoldable } = useFoldableDetection();
const [foldOrientation, setFoldOrientation] = useState<'vertical' | 'horizontal'>('vertical');

useEffect(() => {
  if (!isFoldable) return;

  const width = window.innerWidth;
  const height = window.innerHeight;

  // Si plus large que haut = pli horizontal (mode livre)
  // Si plus haut que large = pli vertical (mode normal)
  setFoldOrientation(width > height ? 'horizontal' : 'vertical');
}, [isFoldable]);
```

### Animation au Dépliage

```tsx
'use client';

import { motion } from 'framer-motion';
import { useFoldableDetection } from '@/hooks/useFoldableDetection';

export function AnimatedContent() {
  const { isUnfolded } = useFoldableDetection();

  return (
    <motion.div
      animate={{
        gridTemplateColumns: isUnfolded ? '1fr 1fr' : '1fr',
      }}
      transition={{ duration: 0.3 }}
      className="grid gap-6"
    >
      {/* Contenu */}
    </motion.div>
  );
}
```

---

## 📚 Ressources Complémentaires

- [Samsung Foldable Guidelines](https://developer.samsung.com/galaxy-foldable)
- [CSS Fold API Draft](https://www.w3.org/TR/device-posture/)
- [React Hook Examples](https://usehooks.com/)

---

Cette implémentation assure que votre site ONE SKY offre une expérience optimale sur tous les types d'écrans, y compris les appareils pliables de nouvelle génération.
