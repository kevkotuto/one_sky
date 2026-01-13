# Guide d'Utilisation - Responsivité ONE SKY

## 🚀 Démarrage Rapide (5 minutes)

### Étape 1 : Installer les dépendances

```bash
npm install
# ou
pnpm install
```

### Étape 2 : Lancer le serveur de dev

```bash
npm run dev
```

### Étape 3 : Tester la responsivité

```bash
# Ouvrir un nouveau terminal
npm run test:responsive
```

---

## 📁 Fichiers Importants

### Nouveaux Composants
- **`/hooks/useFoldableDetection.ts`** - Hook de détection foldable
- **`/components/ui/FoldableContainer.tsx`** - Container adaptatif

### Composants Modifiés
- **`/components/layout/Header.tsx`** - Navigation responsive corrigée
- **`/components/sections/CTA.tsx`** - Padding responsive
- **`/components/sections/Hero.tsx`** - Typography responsive

### Documentation
- **`/RESUME_RESPONSIVITE.md`** - Résumé exécutif (LISEZ EN PREMIER)
- **`/RESPONSIVE_DESIGN_GUIDE.md`** - Guide complet
- **`/FOLDABLE_IMPLEMENTATION_EXAMPLE.md`** - Exemples de code

### Scripts
- **`/scripts/test-responsive.js`** - Tests automatisés

---

## 💻 Utilisation du Hook Foldable

### Import

```tsx
import { useFoldableDetection } from '@/hooks/useFoldableDetection';
```

### Dans votre composant

```tsx
export function MyComponent() {
  const { isFoldable, isUnfolded, screenType } = useFoldableDetection();

  return (
    <div>
      {isFoldable && isUnfolded ? (
        <div className="grid grid-cols-2 gap-8">
          {/* Layout pour foldable ouvert */}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3">
          {/* Layout standard */}
        </div>
      )}
    </div>
  );
}
```

### Valeurs retournées

```typescript
{
  isFoldable: boolean;        // true si appareil pliable
  isUnfolded: boolean;        // true si déplié
  foldPosition: {             // Position du pli (si détectable)
    left?: number;
    top?: number;
  } | null;
  screenType: 'phone' | 'tablet' | 'desktop' | 'foldable';
}
```

---

## 🎨 Utilisation du FoldableContainer

### Import

```tsx
import { FoldableContainer } from '@/components/ui/FoldableContainer';
```

### Mode 1 : Dual-Pane (Divise en 2 colonnes)

```tsx
<FoldableContainer foldableMode="dual-pane">
  {/* Votre contenu sera en 2 colonnes sur foldable ouvert */}
  <Features />
</FoldableContainer>
```

**Parfait pour :**
- Listes de features
- Grilles de cartes
- Comparaisons

### Mode 2 : Avoid-Fold (Évite le pli)

```tsx
<FoldableContainer foldableMode="avoid-fold">
  {/* Votre contenu aura du padding pour éviter le pli central */}
  <Stats />
</FoldableContainer>
```

**Parfait pour :**
- Contenu important
- Texte continu
- Images

### Mode 3 : Full-Width (Pleine largeur - défaut)

```tsx
<FoldableContainer foldableMode="full-width">
  {/* Utilise toute la largeur disponible */}
  <DataSATPreview />
</FoldableContainer>
```

**Parfait pour :**
- Images large
- Vidéos
- Diaporamas

---

## 🧪 Tests Automatisés

### Lancer les tests

```bash
npm run test:responsive
```

### Ce qui est testé

- ✅ Pas de défilement horizontal
- ✅ Navigation visible
- ✅ Pas d'éléments dépassant
- ✅ Images chargées
- ✅ Détection foldable (si applicable)

### Résultats

- **Console** : Résumé coloré avec statistiques
- **Screenshots** : Sauvegardés dans `/screenshots/` en cas d'échec
- **Rapport JSON** : Sauvegardé dans `/test-reports/`

### Configuration

Modifier la base URL :

```bash
BASE_URL=https://staging.onesky.com npm run test:responsive
```

---

## 📱 Test Manuel dans Chrome

### 1. Ouvrir DevTools

- **Windows/Linux** : F12
- **Mac** : Cmd + Option + I

### 2. Toggle Device Toolbar

- **Windows/Linux** : Ctrl + Shift + M
- **Mac** : Cmd + Shift + M

### 3. Ajouter des Appareils Custom

1. Cliquer sur "Edit..." dans le menu déroulant d'appareils
2. Cliquer "Add custom device..."
3. Ajouter ces configurations :

#### Samsung Galaxy Z Fold 6 (Ouvert)
- **Device name** : Galaxy Z Fold 6 Unfolded
- **Width** : 1768
- **Height** : 2208
- **Device pixel ratio** : 2.5
- **User agent string** : (laisser défaut)

#### Samsung Galaxy Z Fold 6 (Fermé)
- **Device name** : Galaxy Z Fold 6 Folded
- **Width** : 534
- **Height** : 2208
- **Device pixel ratio** : 2.5

#### Samsung Galaxy Z Flip 6 (Ouvert)
- **Device name** : Galaxy Z Flip 6 Unfolded
- **Width** : 1080
- **Height** : 2640
- **Device pixel ratio** : 2.5

### 4. Tester

- Sélectionner l'appareil
- Naviguer sur le site
- Vérifier que :
  - Pas de débordement horizontal
  - Contenu bien centré
  - Pas de contenu coupé

---

## 🎯 Checklist d'Implémentation

### Pour Chaque Nouvelle Page

- [ ] Identifier les sections qui bénéficieraient du FoldableContainer
- [ ] Envelopper ces sections avec le container approprié
- [ ] Tester sur émulateur foldable
- [ ] Vérifier les breakpoints standards (mobile, tablet, desktop)
- [ ] Lancer `npm run test:responsive`
- [ ] Corriger les éventuels problèmes

### Pour Modifier une Page Existante

- [ ] Lire le code actuel
- [ ] Identifier les problèmes de responsive
- [ ] Ajouter le support foldable si nécessaire
- [ ] Tester manuellement
- [ ] Lancer les tests automatisés
- [ ] Commit avec message descriptif

---

## 🔧 Patterns Responsifs Recommandés

### Typography

```tsx
// Heading principal
className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl"

// Heading secondaire
className="text-3xl sm:text-4xl md:text-5xl"

// Body text
className="text-base md:text-lg lg:text-xl"
```

### Spacing

```tsx
// Padding section
className="py-12 md:py-16 lg:py-24"

// Padding container
className="p-6 sm:p-8 md:p-10 lg:p-12"

// Gap entre éléments
className="gap-4 md:gap-6 lg:gap-8"
```

### Layout Grid

```tsx
// 1 col mobile → 2 cols tablet → 3 cols desktop
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"

// 2 cols mobile → 4 cols desktop
className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
```

### Flex Direction

```tsx
// Vertical mobile → horizontal desktop
className="flex flex-col sm:flex-row gap-4"

// Avec alignement
className="flex flex-col md:flex-row items-center md:items-start gap-6"
```

### Conditional Visibility

```tsx
// Caché sur mobile, visible sur desktop
className="hidden lg:block"

// Visible sur mobile, caché sur desktop
className="lg:hidden"

// Caché sur tablet uniquement
className="hidden md:block lg:hidden"
```

---

## 🐛 Debugging

### Afficher les Infos d'Écran

```tsx
import { useFoldableDetection } from '@/hooks/useFoldableDetection';

export function DebugScreen() {
  const detection = useFoldableDetection();

  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 rounded text-xs z-50">
      <div>Type: {detection.screenType}</div>
      <div>Foldable: {detection.isFoldable ? 'Yes' : 'No'}</div>
      <div>Unfolded: {detection.isUnfolded ? 'Yes' : 'No'}</div>
      <div>Size: {window.innerWidth}x{window.innerHeight}</div>
    </div>
  );
}
```

Ajouter dans `app/layout.tsx` :

```tsx
import { DebugScreen } from '@/components/debug/DebugScreen';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <DebugScreen />
      </body>
    </html>
  );
}
```

### Vérifier les Attributs Data

Les FoldableContainer ajoutent des attributs data :

```tsx
data-foldable="true|false"
data-unfolded="true|false"
data-screen-type="phone|tablet|desktop|foldable"
```

Chercher dans l'inspecteur Chrome :
```
div[data-foldable="true"]
```

---

## 📊 Métriques de Performance

### Lighthouse

```bash
# Installer Lighthouse CLI
npm install -g lighthouse

# Tester mobile
lighthouse http://localhost:3000 --preset=mobile --view

# Tester desktop
lighthouse http://localhost:3000 --preset=desktop --view
```

**Objectifs :**
- Performance : > 90
- Accessibility : > 95
- Best Practices : > 90
- SEO : > 90

---

## 🚨 Problèmes Courants

### 1. Hook retourne toujours les mêmes valeurs

**Solution :** Vérifier que le composant est client-side
```tsx
'use client';  // Ajouter en haut du fichier
```

### 2. FoldableContainer n'applique pas les styles

**Solution :** Vérifier l'import et le mode
```tsx
import { FoldableContainer } from '@/components/ui/FoldableContainer';
// et non '@/components/FoldableContainer'
```

### 3. Tests échouent en local

**Solution :** Vérifier que le serveur dev tourne
```bash
npm run dev  # Terminal 1
npm run test:responsive  # Terminal 2
```

### 4. Screenshots vides

**Solution :** Augmenter le timeout dans le script
```javascript
// Dans scripts/test-responsive.js
await browserPage.waitForTimeout(2000); // Au lieu de 1000
```

---

## 📚 Ressources Supplémentaires

### Documentation
- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)
- [MDN Viewport Meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag)

### Outils
- [Responsive Viewer Extension](https://chromewebstore.google.com/detail/responsive-viewer)
- [BrowserStack](https://www.browserstack.com/) - Tests réels
- [Responsively App](https://responsively.app/) - Outil desktop

### Standards
- [WCAG 2.2 Guidelines](https://www.w3.org/WAI/WCAG22/quickref/)
- [Touch Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html) - Min 44x44px

---

## 🎓 Bonnes Pratiques

### ✅ À FAIRE

- Tester sur vrais appareils quand possible
- Utiliser le FoldableContainer pour les sections importantes
- Toujours utiliser mobile-first approach
- Définir des max-width pour le contenu texte
- Utiliser des images responsive (next/image)
- Tester en mode paysage ET portrait

### ❌ À ÉVITER

- Largeurs fixes en pixels
- Supposer une taille d'écran spécifique
- Trop de breakpoints custom (utiliser ceux de Tailwind)
- Font-size trop petite sur mobile (min 16px pour body)
- Touch targets < 44x44px
- Débordement horizontal

---

## 💡 Questions Fréquentes

### Q : Dois-je utiliser FoldableContainer partout ?

**R :** Non, seulement pour les sections où l'adaptation foldable apporte une vraie valeur. Les sections simples (texte, images) n'en ont pas besoin.

### Q : Les foldables sont-ils détectés automatiquement ?

**R :** Oui, le hook détecte automatiquement basé sur les dimensions d'écran. Pas besoin de configuration.

### Q : Ça marche sur iPhone Fold ?

**R :** Apple n'a pas encore sorti de pliable, mais le système s'adaptera automatiquement quand ils le feront.

### Q : Puis-je désactiver la détection foldable ?

**R :** Oui, ne pas utiliser FoldableContainer ou le hook dans vos composants.

### Q : Les tests automatisés sont-ils obligatoires ?

**R :** Non, mais fortement recommandés avant chaque déploiement.

---

## 🆘 Support

### En cas de problème

1. Vérifier ce guide
2. Consulter `RESPONSIVE_DESIGN_GUIDE.md`
3. Lire les exemples dans `FOLDABLE_IMPLEMENTATION_EXAMPLE.md`
4. Vérifier la console pour erreurs
5. Tester dans Chrome DevTools

### Documentation

- **Résumé** : `RESUME_RESPONSIVITE.md`
- **Guide complet** : `RESPONSIVE_DESIGN_GUIDE.md`
- **Exemples** : `FOLDABLE_IMPLEMENTATION_EXAMPLE.md`
- **Ce guide** : `GUIDE_UTILISATION_RESPONSIVITE.md`

---

## ✅ Checklist Finale Avant Déploiement

- [ ] Toutes les pages principales testées manuellement
- [ ] Tests automatisés passent à 100%
- [ ] Screenshots vérifiés (pas de problèmes visuels)
- [ ] Navigation fonctionne sur tous appareils
- [ ] Forms utilisables sur mobile
- [ ] Images chargent correctement
- [ ] Pas d'erreurs console
- [ ] Lighthouse score > 90 (mobile + desktop)
- [ ] FoldableContainer implémenté sur pages principales
- [ ] Documentation mise à jour

---

**Tout est prêt ! 🚀 Vous pouvez maintenant implémenter le support foldable sur votre site ONE SKY.**
