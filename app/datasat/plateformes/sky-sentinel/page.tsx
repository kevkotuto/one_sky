import { CheckCircle, Zap, Eye, Lock, FileText, Map, AlertCircle } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

const useCases = [
  {
    title: 'Surveillance Frontières Terrestres',
    description: 'Monitoring continu des zones frontalières pour détecter passages illégaux, trafics et activités suspectes sur plusieurs milliers de kilomètres',
    metrics: [
      { label: 'Détection', value: '96% précision' },
      { label: 'Couverture', value: '1000+ km' },
      { label: 'Revisite', value: '6-12 heures' }
    ]
  },
  {
    title: 'Protection Infrastructures Critiques',
    description: 'Surveillance périmétrique de sites sensibles (centrales, barrages, bases militaires) avec détection automatique d\'intrusions',
    metrics: [
      { label: 'Sites', value: 'Multi-sites' },
      { label: 'Périmètre', value: '500m-5km' },
      { label: 'Alertes', value: 'Temps réel' }
    ]
  },
  {
    title: 'Détection Changements Suspects',
    description: 'Identification automatique de nouvelles constructions, excavations, mouvements de véhicules ou activités inhabituelles en zones surveillées',
    metrics: [
      { label: 'Changement', value: '&gt;10m²' },
      { label: 'Historique', value: '5+ années' },
      { label: 'IA', value: 'Deep Learning' }
    ]
  }
]

const benefits = [
  {
    icon: <CheckCircle size={32} />,
    title: 'Couverture Étendue',
    description: 'Surveillance de milliers de km² impossibles à couvrir par moyens traditionnels (drones, patrouilles)'
  },
  {
    icon: <Eye size={32} />,
    title: 'Vision Continue',
    description: 'Monitoring 24/7 indépendant des conditions météo grâce au radar SAR (jour/nuit, nuages)'
  },
  {
    icon: <Lock size={32} />,
    title: 'Données Souveraines',
    description: 'Infrastructure cloud SecNumCloud avec garantie de localisation en France/UE pour données sensibles'
  },
  {
    icon: <Zap size={32} />,
    title: 'Réactivité Renforcée',
    description: 'Alertes automatiques en <24h vs plusieurs jours/semaines en surveillance classique'
  }
]

export default function SkySentinelPage() {
  return (
    <>
      <PageHeader
        badge="DataSAT Platform"
        subtitle="PLATEFORME"
        title="SKY SENTINEL"
        description="Surveillance stratégique par satellite pour la sécurité des frontières, la protection des infrastructures critiques et la détection d'activités suspectes."
      />

      <Section>
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge variant="info">Opérationnel</Badge>
          <Badge variant="success">IA Embarquée</Badge>
          <Badge>Détection 96%</Badge>
          <Badge>SecNumCloud</Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-lunar-white mb-4">
              Surveillance Stratégique Automatisée
            </h2>
            <p className="text-nebula-gray text-lg leading-relaxed mb-6">
              SKY SENTINEL combine imagerie satellitaire multi-capteurs (optique + radar SAR) et intelligence artificielle
              pour surveiller en continu vos zones sensibles et détecter automatiquement intrusions, changements et activités suspectes.
            </p>
            <ul className="space-y-3">
              {[
                'Surveillance frontières terrestres 24/7',
                'Protection périmétrique infrastructures critiques',
                'Détection automatique changements suspects',
                'Monitoring multi-temporel (5+ ans historique)',
                'Alertes intrusion et activités anormales',
                'Données souveraines (SecNumCloud)',
                'Rapports sécurité automatisés avec preuves'
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
                src="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=1200&q=80&fit=crop"
                alt="Vue aérienne infrastructure - Surveillance sécuritaire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
              <div className="absolute top-4 left-4 bg-midnight-blue/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-cyber-cyan/30">
                <div className="text-xs text-lunar-white font-medium mb-1">Détections IA</div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
                  <span className="text-nebula-gray">8 zones surveillées</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-nebula-gray mt-4 text-center">
              Vue aérienne infrastructure - Détection automatique d'activités et changements par IA
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <BeforeAfterSlider
          title="Détection de Changements Suspects"
          description="Comparez l'état initial de la zone surveillée (avant) avec la détection automatique de nouveaux éléments ou activités (après). L'IA identifie précisément les changements, leur nature et leur date d'apparition."
          beforeLabel="État initial"
          afterLabel="Changements détectés"
          beforeImage="https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=1200&q=80&fit=crop"
          afterImage="https://images.unsplash.com/photo-1473163928189-364b2c4e1135?w=1200&q=80&fit=crop"
          stats={{ detected: 8, precision: 96, changes: 5 }}
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
          Bénéfices pour la Sécurité
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, i) => (
            <Card key={i} {...benefit} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-lunar-white mb-4">Performance Opérationnelle</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">1000+</div>
              <div className="text-sm text-nebula-gray">km frontières</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">24/7</div>
              <div className="text-sm text-nebula-gray">Surveillance continue</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">&lt;24h</div>
              <div className="text-sm text-nebula-gray">Délai alerte</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">96%</div>
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
            <h3 className="text-xl font-bold text-lunar-white mb-3">Rapport de Surveillance</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Bilan exhaustif changements détectés</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Cartographie des zones sensibles</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Analyse activités suspectes</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Preuves satellites datées et localisées</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <Map className="w-10 h-10 text-cyber-cyan mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Dashboard Sécurisé</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Carte sécurisée avec zones surveillées</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Timeline multi-temporelle (5+ ans)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Visualisation avant/après changements</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Hébergement SecNumCloud (souverain)</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <AlertCircle className="w-10 h-10 text-alert-orange mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Alertes Sécurité</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Intrusion périmètre sécurisé détectée</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Changement suspect zone frontière</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Activité anormale infrastructure critique</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Notification sécurisée (Email + API)</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">
            Démarrez avec SKY SENTINEL
          </h2>
          <p className="text-xl text-nebula-gray mb-8">
            Testez SKY SENTINEL gratuitement sur votre zone sensible pendant 30 jours.
            POC clés en main avec résultats sous 15 jours sur infrastructure souveraine.
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
