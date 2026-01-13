import { CheckCircle, Zap, Activity, Anchor, FileText, Map, AlertCircle } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

const useCases = [
  {
    title: 'Détection & Classification Navires',
    description: 'Identification automatique de tous les navires présents en mer avec classification par type (cargo, pêche, militaire, plaisance)',
    metrics: [
      { label: 'Détection', value: '93% précision' },
      { label: 'Taille min.', value: '15 mètres' },
      { label: 'Classification', value: '8 types' }
    ]
  },
  {
    title: 'Surveillance Pêche Illégale',
    description: 'Monitoring des zones de pêche protégées, détection des navires sans autorisation et recoupement avec registres AIS',
    metrics: [
      { label: 'Zones MPAs', value: '100% couvertes' },
      { label: 'Croisement', value: 'AIS + Radar' },
      { label: 'Alertes', value: 'Temps réel' }
    ]
  },
  {
    title: 'Analyse Activité Portuaire',
    description: 'Suivi du trafic maritime, temps de stationnement, rotation des navires et optimisation des capacités portuaires',
    metrics: [
      { label: 'Comptage', value: 'Automatique' },
      { label: 'Historique', value: '3+ années' },
      { label: 'Statistiques', value: 'Hebdomadaires' }
    ]
  }
]

const benefits = [
  {
    icon: <CheckCircle size={32} />,
    title: 'Couverture Maritime',
    description: 'Surveillance 24/7 de zones maritimes étendues (&gt;100 000 km²) inaccessibles par patrouilles'
  },
  {
    icon: <Zap size={32} />,
    title: 'Détection Dark Vessels',
    description: 'Identification de navires sans signal AIS (pêche illégale, contrebande) invisibles aux systèmes traditionnels'
  },
  {
    icon: <Activity size={32} />,
    title: 'Preuves Géolocalisées',
    description: 'Images satellites datées et géoréférencées utilisables comme preuves juridiques'
  },
  {
    icon: <Anchor size={32} />,
    title: 'Réduction Coûts',
    description: '60% de réduction des coûts de surveillance vs patrouilles navales et aériennes'
  }
]

export default function SkyFishPage() {
  return (
    <>
      <PageHeader
        badge="DataSAT Platform"
        subtitle="PLATEFORME"
        title="SKY FISH"
        description="Surveillance maritime automatisée par satellite et IA pour la détection de navires, surveillance des zones de pêche et monitoring de l'activité portuaire."
      />

      <Section>
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge variant="info">Opérationnel</Badge>
          <Badge variant="success">IA Embarquée</Badge>
          <Badge>Détection 93%</Badge>
          <Badge>Navires &gt;15m</Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-lunar-white mb-4">
              Surveillance Maritime Automatisée
            </h2>
            <p className="text-nebula-gray text-lg leading-relaxed mb-6">
              SKY FISH combine imagerie radar (SAR) et optique haute résolution pour détecter et suivre tous les navires en mer,
              même sans signal AIS. Intelligence artificielle pour classification automatique et détection d'activités suspectes.
            </p>
            <ul className="space-y-3">
              {[
                'Détection automatique navires &gt;15m (radar SAR)',
                'Classification par type (cargo, pêche, militaire)',
                'Croisement AIS / Satellite (dark vessels)',
                'Surveillance zones de pêche protégées (MPAs)',
                'Monitoring activité portuaire et trafic',
                'Détection pollution marine (marées noires)',
                'Historique trajectoires sur 3+ années'
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
                src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80&fit=crop"
                alt="Vue aérienne maritime - Détection de navires"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
              <div className="absolute top-4 left-4 bg-midnight-blue/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-cyber-cyan/30">
                <div className="text-xs text-lunar-white font-medium mb-1">Détections IA</div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
                  <span className="text-nebula-gray">5 navires détectés</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-nebula-gray mt-4 text-center">
              Vue aérienne maritime - Détection automatique de navires par radar SAR avec classification
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <BeforeAfterSlider
          title="Détection de Pêche Illégale"
          description="Comparez la zone maritime sans surveillance (avant) avec la détection automatique des navires, dont certains sans signal AIS (après). L'IA identifie les navires suspects dans les zones protégées."
          beforeLabel="Sans surveillance"
          afterLabel="Avec détection IA"
          beforeImage="https://images.unsplash.com/photo-1505142468610-359e7d316be0?w=1200&q=80&fit=crop"
          afterImage="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80&fit=crop"
          stats={{ detected: 5, precision: 93, changes: 2 }}
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
          Bénéfices pour la Gestion Maritime
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, i) => (
            <Card key={i} {...benefit} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-lunar-white mb-4">Impact Opérationnel</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">60%</div>
              <div className="text-sm text-nebula-gray">Réduction des coûts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">24/7</div>
              <div className="text-sm text-nebula-gray">Surveillance continue</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">100K+</div>
              <div className="text-sm text-nebula-gray">km² couverts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">93%</div>
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
            <h3 className="text-xl font-bold text-lunar-white mb-3">Rapport Hebdomadaire Maritime</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Liste exhaustive navires détectés</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Cartographie activité maritime par zone</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Dark vessels sans AIS identifiés</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Statistiques trafic et évolution</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <Map className="w-10 h-10 text-cyber-cyan mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Dashboard Maritime Interactif</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Carte temps réel avec tous les navires</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Filtres par type, taille, zone, AIS</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Trajectoires historiques (3+ ans)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Export maritime (KML, GeoJSON, CSV)</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <AlertCircle className="w-10 h-10 text-alert-orange mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Alertes Automatiques</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Navire dans zone protégée (MPA)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Dark vessel sans signal AIS détecté</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Pollution marine ou marée noire</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Email + SMS + API webhook</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">
            Démarrez avec SKY FISH
          </h2>
          <p className="text-xl text-nebula-gray mb-8">
            Testez SKY FISH gratuitement sur votre zone maritime pendant 30 jours.
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
