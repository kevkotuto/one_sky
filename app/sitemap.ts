import { MetadataRoute } from 'next'
import { SITE_CONFIG } from '@/lib/constants'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_CONFIG.url

  // Static routes
  const routes = [
    '',
    '/a-propos',
    '/a-propos/vision-mission',
    '/a-propos/gouvernance',
    '/a-propos/engagements',
    '/a-propos/partenariats',
    '/a-propos/carrieres',
    '/technologie',
    '/technologie/infrastructures',
    '/technologie/chaine-valeur',
    '/technologie/plateforme',
    '/solutions',
    '/solutions/observation',
    '/solutions/analyses',
    '/solutions/alertes',
    '/solutions/dashboards',
    '/solutions/apis',
    '/solutions/parcours',
    '/solutions/secteurs',
    '/datasat',
    '/datasat/intelligence-ia',
    '/datasat/domaines',
    '/datasat/domaines/environnement',
    '/datasat/domaines/agriculture',
    '/datasat/domaines/urbanisation',
    '/datasat/domaines/energie',
    '/datasat/domaines/securite',
    '/datasat/domaines/assurance',
    '/datasat/plateformes',
    '/datasat/plateformes/sky-loupe',
    '/datasat/plateformes/sky-sentinel',
    '/datasat/plateformes/sky-forest',
    '/datasat/plateformes/sky-fish',
    '/datasat/plateformes/sky-cadastre',
    '/datasat/plateformes/sky-transport',
    '/datasat/livrables',
    '/datasat/poc',
    '/contact',
    '/mentions-legales',
    '/confidentialite',
    '/cookies',
    '/cgu',
  ]

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : route.split('/').length === 2 ? 0.8 : 0.6,
  }))
}
