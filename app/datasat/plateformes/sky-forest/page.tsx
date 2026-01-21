import { CheckCircle, Zap, Shield, TrendingDown, FileText, Map, AlertCircle } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

const useCases = [
  {
    title: 'Détection de Déforestation',
    description: 'Identification automatique des zones de coupe forestière, légale ou illégale, sur l'ensemble du territoire',
    metrics: [
      { label: 'Détection', value: '95% précision' },
      { label: 'Surface min.', value: '0.5 hectare' },
      { label: 'Délai alerte', value: '<48 heures' }
    ]
  },
  {
    title: 'Surveillance Feux de Forêt',
    description: 'Détection précoce des départs de feu et suivi en temps quasi-réel de la progression des incendies',
    metrics: [
      { label: 'Détection', value: 'Infrarouge' },
      { label: 'Revisite', value: '12 heures' },
      { label: 'Cartographie', value: 'Temps réel' }
    ]
  },
  {
    title: 'Suivi Santé Forestière',
    description: 'Analyse multi-temporelle des indices de végétation (NDVI, LAI) pour détecter stress hydrique, maladies et dépérissements',
    metrics: [
      { label: 'Indices', value: 'NDVI, LAI, EVI' },
      { label: 'Historique', value: '10+ années' },
      { label: 'Résolution', value: '10-30 mètres' }
    ]
  }
]

const benefits = [
  {
    icon: <CheckCircle size={32} />,
    title: 'Couverture Exhaustive',
    description: '100% du territoire forestier surveillé vs 5-10% en patrouilles terrain'
  },
  {
    icon: <Zap size={32} />,
    title: 'Détection Rapide',
    description: 'Alertes en moins de 48h vs plusieurs semaines en contrôle classique'
  },
  {
    icon: <Shield size={32} />,
    title: 'Preuves Juridiques',
    description: 'Images satellites géolocalisées et datées utilisables en procédure'
  },
  {
    icon: <TrendingDown size={32} />,
    title: 'Réduction Coûts',
    description: '70% de réduction des coûts de surveillance vs patrouilles aériennes'
  }
]

export default function SkyForestPage() {
  return (
    <>
      <PageHeader
        badge="DataSAT Platform"
        subtitle="PLATEFORME"
        title="SKY FOREST"
        description="Surveillance forestière automatisée par satellite et IA pour la détection de déforestation, feux de forêt et suivi de la santé des écosystèmes."
        backgroundImage="/images/header-backgrounds/sky_forest.png"
      />

      <Section>
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge variant="info">Opérationnel</Badge>
          <Badge variant="success">IA Embarquée</Badge>
          <Badge>Détection 95%</Badge>
          <Badge>Revisite 12h</Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-lunar-white mb-4">
              Surveillance Forestière Automatisée
            </h2>
            <p className="text-nebula-gray text-lg leading-relaxed mb-6">
              SKY FOREST combine imagerie satellitaire multi-spectrale (optique + infrarouge) et intelligence artificielle
              pour surveiller en continu vos zones forestières et détecter automatiquement déforestation, feux et dégradations.
            </p>
            <ul className="space-y-3">
              {[
                'Détection automatique de déforestation &gt;0.5ha',
                'Alertes précoces feux de forêt (infrarouge)',
                'Suivi santé forestière (NDVI, LAI, EVI)',
                'Cartographie dynamique changements forestiers',
                'Comparaison multi-temporelle sur 10+ ans',
                'Estimation biomasse et stock carbone',
                'Rapports mensuels automatisés avec preuves'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-cyber-cyan/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-cyber-cyan" />
                  </div>
                  <span className="text-nebula-gray">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-cosmic-blue/30 rounded-xl p-6 border border-stellar-blue/30">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <img
                src="/images/features/sky_forest_feature.png"
                alt="Vue aérienne de forêt - Détection de déforestation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
              <div className="absolute top-4 left-4 bg-midnight-blue/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-cyber-cyan/30">
                <div className="text-xs text-lunar-white font-medium mb-1">Détections IA</div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
                  <span className="text-nebula-gray">6 zones déboisées</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-nebula-gray mt-4 text-center">
              Vue aérienne forestière - Détection automatique de zones déboisées par IA avec précision 91-96%
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <BeforeAfterSlider
          title="Détection de Déforestation"
          description="Comparez l'état initial de la forêt (avant) avec la détection automatique des zones déboisées (après). L'IA identifie précisément l'emprise des coupes, leur superficie et leur date estimée."
          beforeLabel="2024-01"
          afterLabel="2024-12"
          beforeImage="/chatgpt/befor Sky Forest.png"
          afterImage="/chatgpt/after Sky Forest.png"
          stats={{ detected: 6, precision: 95, changes: 14 }}
        />
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-lunar-white mb-12 text-center">
          Cas d'Usage & Applications
        </h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, i) => (
            <div key={i} className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all">
              <h3 className="text-xl font-bold text-lunar-white mb-3">{useCase.title}</h3>
              <p className="text-nebula-gray mb-6 leading-relaxed">{useCase.description}</p>
              <div className="space-y-3">
                {useCase.metrics.map((metric, j) => (
                  <div key={j} className="flex items-center justify-between p-3 bg-midnight-blue/50 rounded-lg">
                    <span className="text-sm text-nebula-gray">{metric.label}</span>
                    <span className="text-sm font-semibold text-cyber-cyan">{metric.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <h2 className="text-3xl font-bold text-lunar-white mb-12 text-center">
          Bénéfices pour la Gestion Forestière
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, i) => (
            <Card key={i} {...benefit} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-lunar-white mb-4">Impact Mesuré</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">70%</div>
              <div className="text-sm text-nebula-gray">Réduction des coûts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">20x</div>
              <div className="text-sm text-nebula-gray">Plus rapide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">100%</div>
              <div className="text-sm text-nebula-gray">Couverture</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">95%</div>
              <div className="text-sm text-nebula-gray">Précision</div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-lunar-white mb-12 text-center">
          Livrables & Rapports
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <FileText className="w-10 h-10 text-cyber-cyan mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Rapport Mensuel Forestier</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Bilan des changements forestiers détectés</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Cartographie déforestation avec surfaces</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Évolution indices de végétation (NDVI)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Estimation biomasse et carbone perdu</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <Map className="w-10 h-10 text-cyber-cyan mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Plateforme Web Interactive</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Carte dynamique avec toutes les détections</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Timeline multi-temporelle sur 10+ ans</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Visualisation avant/après pour chaque zone</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Export SIG (Shapefile, GeoJSON, KML)</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <AlertCircle className="w-10 h-10 text-alert-orange mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Alertes Critiques</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Notification immédiate déforestation &gt;5ha</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Alerte précoce départ de feu (infrarouge)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Email + SMS pour zones à haute priorité</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>API webhooks pour intégration SI forestier</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">
            Démarrez avec SKY FOREST
          </h2>
          <p className="text-xl text-nebula-gray mb-8">
            Testez SKY FOREST gratuitement sur votre domaine forestier pendant 30 jours.
            POC clés en main avec résultats sous 15 jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/datasat/poc" className="px-8 py-4 bg-cyber-cyan text-deep-space rounded-lg font-semibold hover:bg-cyber-cyan/90 transition-all shadow-lg shadow-cyber-cyan/20">
              Lancer un POC Gratuit
            </a>
            <a href="/contact" className="px-8 py-4 bg-cosmic-blue border-2 border-cyber-cyan text-lunar-white rounded-lg font-semibold hover:bg-cosmic-blue/50 transition-all">
              Demander une Démo
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
