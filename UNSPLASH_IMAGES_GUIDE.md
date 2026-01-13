# Guide des Images Unsplash pour ONE SKY

## 🎨 Images Recommandées par Section

### 🛰️ Images Satellitaires & Espace

**Pour pages Technologie/Infrastructures:**
```
Satellites en orbite:
https://unsplash.com/photos/satellite-in-space-Q1p7bh3SHj8
https://unsplash.com/photos/satellite-in-space-dBWvUqBoOU8
https://unsplash.com/photos/space-station-in-orbit-pd4lo70LdbI

Terre depuis l'espace:
https://unsplash.com/photos/earth-from-space-yZygONrUBe8
https://unsplash.com/photos/earth-at-night-87-XgYC-7mg
https://unsplash.com/photos/earth-and-moon-from-space-Q1p7bh3SHj8
```

---

### 🏙️ SKY LOUPE - Images Urbaines

**Vues aériennes de villes:**
```
Construction/Urbanisme:
https://unsplash.com/photos/aerial-view-of-city-buildings-during-daytime-DuD5D3lWC3c
https://unsplash.com/photos/aerial-view-of-city-buildings-Nyvq2juw4_o
https://unsplash.com/photos/aerial-photography-of-city-buildings-RCAhiGJsUUE
https://unsplash.com/photos/aerial-view-of-houses-jzz_3jWMzHA

Chantiers construction:
https://unsplash.com/photos/aerial-view-of-construction-site-bWtd1ZyEy6w
https://unsplash.com/photos/construction-site-from-above-QLqNalPe0RA
```

---

### 🌳 SKY FOREST - Images Forestières

**Forêts vues du ciel:**
```
Forêts denses:
https://unsplash.com/photos/aerial-view-of-green-trees-during-daytime-sfL_QOnmy00
https://unsplash.com/photos/green-trees-aerial-photography-jp9VQ0OKJLg
https://unsplash.com/photos/aerial-photography-of-green-trees-W8RfAs1fY7Q

Déforestation/changement:
https://unsplash.com/photos/aerial-view-of-cut-trees-f-Yr5B6dv9w
https://unsplash.com/photos/logging-area-from-above-lf1l9L8cwMc
```

---

### 🌾 Agriculture - Domain Page

**Champs agricoles vus du ciel:**
```
Parcelles agricoles:
https://unsplash.com/photos/aerial-photography-of-green-fields-v9FQR4tbIq8
https://unsplash.com/photos/agricultural-fields-from-above-3V8xo5Gbusk
https://unsplash.com/photos/patchwork-of-fields-IcC9oWQS9ig
https://unsplash.com/photos/agriculture-pattern-from-sky-6Mu9A8ztmqE

Irrigation/techniques:
https://unsplash.com/photos/irrigation-circles-from-above-j52EwkWxWlQ
https://unsplash.com/photos/center-pivot-irrigation-0SY2u4eN4pk
```

---

### 🌊 SKY FISH - Images Maritimes

**Ocean & navires:**
```
Vue océanique:
https://unsplash.com/photos/aerial-view-of-ocean-waves-lRAWcT7uwhY
https://unsplash.com/photos/ocean-from-above-XoByiBymX20
https://unsplash.com/photos/boats-from-satellite-view-iVWqzZzPz08

Ports & pêche:
https://unsplash.com/photos/harbor-aerial-view-u88VFNBfgLI
https://unsplash.com/photos/fishing-boats-from-above-p-CquVLTfFg
```

---

### ⚡ Énergie - Domain Page

**Infrastructures énergétiques:**
```
Panneaux solaires:
https://unsplash.com/photos/solar-farm-aerial-view-VObWb5KaB8w
https://unsplash.com/photos/solar-panels-from-above-heLWtuAN3nk

Éoliennes:
https://unsplash.com/photos/wind-turbines-aerial-c9FQyqIECds
https://unsplash.com/photos/wind-farm-from-above-Wpnoqo2plFA

Lignes électriques:
https://unsplash.com/photos/power-lines-from-above-IHTNaOC3fG0
```

---

### 🏗️ Urbanisation - Domain Page

**Développement urbain:**
```
Villes & croissance:
https://unsplash.com/photos/city-growth-aerial-view-6iYb1BWWbV0
https://unsplash.com/photos/urban-sprawl-from-sky-btbjK2VPnD8
https://unsplash.com/photos/dense-urban-area-TrhLCn1abMU

Routes & infrastructure:
https://unsplash.com/photos/highway-interchange-aerial-9VDm-gBbAq8
https://unsplash.com/photos/roads-from-above-Ua-agENjmI4
```

---

### 🌍 Environnement - Domain Page

**Environnement & climat:**
```
Paysages naturels:
https://unsplash.com/photos/natural-landscape-from-satellite-rCbdp8VCYhQ
https://unsplash.com/photos/coastline-aerial-view-phIFdC6lA4E

Changement climatique:
https://unsplash.com/photos/drought-from-above-8EzNkvLQosk
https://unsplash.com/photos/glacier-melting-aerial-SYx3UCHZHog
```

---

## 📐 Comment Intégrer les Images

### Option 1: Next.js Image Component (Recommandé)

```tsx
import Image from 'next/image'

<div className="relative h-96 rounded-xl overflow-hidden">
  <Image
    src="https://images.unsplash.com/photo-XXXXX?w=1200&q=80"
    alt="Description"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  />
</div>
```

### Option 2: Background Image

```tsx
<div
  className="h-96 rounded-xl bg-cover bg-center"
  style={{
    backgroundImage: `url('https://images.unsplash.com/photo-XXXXX?w=1200&q=80')`
  }}
/>
```

### Option 3: Remplacer SatelliteImagePlaceholder

Dans les pages où j'ai utilisé `<SatelliteImagePlaceholder>`, vous pouvez remplacer par :

```tsx
// Avant
<SatelliteImagePlaceholder type="urban" showDetections width={550} height={400} />

// Après
<div className="relative h-[400px] w-full rounded-lg overflow-hidden border border-stellar-blue/30">
  <Image
    src="https://images.unsplash.com/photo-DuD5D3lWC3c?w=1200&q=80"
    alt="Vue aérienne urbaine"
    fill
    className="object-cover"
  />
  {/* Overlay avec détections si besoin */}
  <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
</div>
```

---

## 🎯 URLs Spécifiques par Page

### Page SKY LOUPE
```
Hero image: https://unsplash.com/photos/DuD5D3lWC3c
Before/After 1: https://unsplash.com/photos/jzz_3jWMzHA
Before/After 2: https://unsplash.com/photos/bWtd1ZyEy6w
```

### Page SKY FOREST
```
Hero image: https://unsplash.com/photos/sfL_QOnmy00
Detection: https://unsplash.com/photos/f-Yr5B6dv9w
Monitoring: https://unsplash.com/photos/jp9VQ0OKJLg
```

### Page SKY FISH
```
Hero image: https://unsplash.com/photos/lRAWcT7uwhY
Boats: https://unsplash.com/photos/iVWqzZzPz08
Harbor: https://unsplash.com/photos/u88VFNBfgLI
```

### Page Agriculture
```
Hero: https://unsplash.com/photos/v9FQR4tbIq8
Fields: https://unsplash.com/photos/3V8xo5Gbusk
Irrigation: https://unsplash.com/photos/j52EwkWxWlQ
```

### Page Environnement
```
Hero: https://unsplash.com/photos/rCbdp8VCYhQ
Coastline: https://unsplash.com/photos/phIFdC6lA4E
Climate: https://unsplash.com/photos/8EzNkvLQosk
```

---

## ⚙️ Configuration next.config.ts

Pour utiliser Unsplash avec Next.js Image, ajoutez dans `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/photo-**',
      },
      {
        protocol: 'https',
        hostname: 'unsplash.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
}
```

---

## 📝 Paramètres d'URL Unsplash

Optimisez les images avec ces paramètres:

```
?w=1200          // Largeur 1200px
&h=800           // Hauteur 800px
&q=80            // Qualité 80%
&fit=crop        // Crop au format
&auto=format     // Format automatique (WebP si supporté)
```

Exemple complet:
```
https://images.unsplash.com/photo-DuD5D3lWC3c?w=1200&h=800&q=80&fit=crop&auto=format
```

---

## 🚀 Script d'Intégration Rapide

Créez `/scripts/integrate-unsplash-images.sh`:

```bash
#!/bin/bash

# Télécharge et optimise les images Unsplash

mkdir -p public/images/platforms
mkdir -p public/images/domains

# SKY LOUPE
curl "https://images.unsplash.com/photo-DuD5D3lWC3c?w=1200&q=80" \
  -o public/images/platforms/sky-loupe-hero.jpg

# SKY FOREST
curl "https://images.unsplash.com/photo-sfL_QOnmy00?w=1200&q=80" \
  -o public/images/platforms/sky-forest-hero.jpg

# Agriculture
curl "https://images.unsplash.com/photo-v9FQR4tbIq8?w=1200&q=80" \
  -o public/images/domains/agriculture-hero.jpg

echo "✅ Images téléchargées dans /public/images/"
```

Puis:
```bash
chmod +x scripts/integrate-unsplash-images.sh
./scripts/integrate-unsplash-images.sh
```

---

## 📊 Résumé des Besoins par Section

| Section | Type d'image | Nombre | Priorité |
|---------|--------------|--------|----------|
| SKY LOUPE | Urbain/Construction | 3-5 | HAUTE |
| SKY FOREST | Forêts/Déforestation | 3-5 | HAUTE |
| SKY FISH | Maritime/Océan | 2-3 | MOYENNE |
| SKY SENTINEL | Frontières/Sécurité | 2-3 | MOYENNE |
| Agriculture | Champs/Parcelles | 3-4 | HAUTE |
| Environnement | Nature/Climat | 3-4 | HAUTE |
| Énergie | Solar/Wind/Grid | 2-3 | MOYENNE |
| Urbanisation | Villes/Routes | 3-4 | HAUTE |

**TOTAL ESTIMÉ: 25-35 images**

---

## 💡 Alternative: NASA Images

Pour des images satellitaires réelles et libres de droits:

```
NASA Earth Observatory:
https://earthobservatory.nasa.gov/images

Landsat Images:
https://landsat.visibleearth.nasa.gov/

ESA Copernicus:
https://www.copernicus.eu/en/media/image-day-gallery
```

---

**Créé le:** 13 janvier 2026
**Projet:** ONE SKY - Intelligence Géospatiale
