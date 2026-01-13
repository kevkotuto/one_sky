import { CheckCircle, Zap, Activity, TrendingUp, FileText, Map, AlertCircle } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

const useCases = [
  {
    title: 'Analyse Trafic & Flux Urbains',
    description: 'Comptage automatique de véhicules, analyse des flux de circulation et identification des points de congestion sur l\'ensemble du réseau routier',
    metrics: [
      { label: 'Précision', value: '94% comptage' },
      { label: 'Couverture', value: '100% réseau' },
      { label: 'Fréquence', value: 'Hebdomadaire' }
    ]
  },
  {
    title: 'Monitoring Parkings & Stationnement',
    description: 'Surveillance automatique des taux d\'occupation des parkings publics et zones de stationnement pour optimiser la gestion et les tarifs',
    metrics: [
      { label: 'Places', value: '&gt;10 000' },
      { label: 'Taux occupation', value: 'Temps réel' },
      { label: 'Historique', value: '2+ années' }
    ]
  },
  {
    title: 'Planification Infrastructures',
    description: 'Aide à la décision pour la création de nouvelles voies, ronds-points, lignes de transport ou zones de stationnement basée sur données réelles',
    metrics: [
      { label: 'ROI', value: '+15-25%' },
      { label: 'Simulations', value: 'Multiples' },
      { label: 'Prédictions', value: 'IA' }
    ]
  }
]

const benefits = [
  {
    icon: <CheckCircle size={32} />,
    title: 'Vision Exhaustive',
    description: 'Analyse de 100% du réseau routier urbain vs 10-20% avec capteurs au sol traditionnels'
  },
  {
    icon: <Activity size={32} />,
    title: 'Données Continues',
    description: 'Monitoring régulier (hebdomadaire/mensuel) vs comptages ponctuels espacés de plusieurs années'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'ROI Infrastructure',
    description: '+15-25% d\'efficacité sur investissements grâce à planification data-driven'
  },
  {
    icon: <Zap size={32} />,
    title: 'Déploiement Rapide',
    description: 'Mise en place immédiate vs installation coûteuse de capteurs (mois/années)'
  }
]

export default function SkyTransportPage() {
  return (
    <>
      <PageHeader
        badge="DataSAT Platform"
        subtitle="PLATEFORME"
        title="SKY TRANSPORT"
        description="Analyse intelligente du trafic urbain par satellite pour l'optimisation des transports, la gestion du stationnement et la planification des infrastructures."
      />

      <Section>
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge variant="info">Opérationnel</Badge>
          <Badge variant="success">IA Embarquée</Badge>
          <Badge>Comptage 94%</Badge>
          <Badge>100% réseau</Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-lunar-white mb-4">
              Mobilité Urbaine Intelligente
            </h2>
            <p className="text-nebula-gray text-lg leading-relaxed mb-6">
              SKY TRANSPORT révolutionne l'analyse des transports urbains en combinant imagerie satellitaire très haute résolution
              et intelligence artificielle pour compter les véhicules, analyser les flux et optimiser les infrastructures de mobilité.
            </p>
            <ul className="space-y-3">
              {[
                'Comptage automatique véhicules sur tout le réseau',
                'Analyse flux de circulation et points de congestion',
                'Monitoring occupation parkings et stationnement',
                'Détection changements infrastructures routières',
                'Aide décision pour nouvelles infrastructures',
                'Comparaison multi-temporelle (évolution trafic)',
                'Rapports mobilité urbaine mensuels'
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
                src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&fit=crop"
                alt="Vue aérienne autoroute - Analyse de trafic"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
              <div className="absolute top-4 left-4 bg-midnight-blue/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-cyber-cyan/30">
                <div className="text-xs text-lunar-white font-medium mb-1">Détections IA</div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
                  <span className="text-nebula-gray">127 véhicules comptés</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-nebula-gray mt-4 text-center">
              Vue aérienne autoroute - Détection automatique de véhicules et analyse des flux de circulation
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <BeforeAfterSlider
          title="Analyse Trafic Avant/Après Aménagement"
          description="Comparez les flux de circulation avant (gauche) et après (droite) la création d'un nouvel aménagement routier. L'IA quantifie précisément l'impact sur le trafic, les temps de parcours et la congestion."
          beforeLabel="Avant travaux"
          afterLabel="Après aménagement"
          beforeImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=1200&q=80&fit=crop"
          afterImage="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1200&q=80&fit=crop"
          stats={{ detected: 127, precision: 94, changes: 18 }}
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
          Bénéfices pour la Mobilité Urbaine
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, i) => (
            <Card key={i} {...benefit} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-lunar-white mb-4">Impact Mobilité</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">100%</div>
              <div className="text-sm text-nebula-gray">Réseau couvert</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">-60%</div>
              <div className="text-sm text-nebula-gray">Coûts capteurs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">+20%</div>
              <div className="text-sm text-nebula-gray">ROI infra</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">94%</div>
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
            <h3 className="text-xl font-bold text-lunar-white mb-3">Rapport Mobilité Mensuel</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Comptages véhicules par axe routier</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Cartographie flux et points de congestion</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Taux occupation parkings et évolution</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Recommandations optimisation trafic</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <Map className="w-10 h-10 text-cyber-cyan mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Dashboard Mobilité</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Carte interactive réseau routier</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Visualisation flux de circulation</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Timeline historique (2+ années)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Export SIG et API intégration</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <AlertCircle className="w-10 h-10 text-alert-orange mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Études d'Impact</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Analyse avant/après travaux routiers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Simulations nouvelles infrastructures</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Prédictions évolution trafic (IA)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Recommandations d'optimisation</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">
            Démarrez avec SKY TRANSPORT
          </h2>
          <p className="text-xl text-nebula-gray mb-8">
            Testez SKY TRANSPORT gratuitement sur votre agglomération pendant 30 jours.
            POC clés en main avec analyse complète du trafic sous 3 semaines.
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
