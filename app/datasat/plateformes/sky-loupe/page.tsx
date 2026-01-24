import { CheckCircle, Zap, BarChart, Map, FileText, AlertCircle } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

const useCases = [
  {
    title: 'Contrôle Urbanistique Automatisé',
    description: "Détection automatique des nouvelles constructions sur l'ensemble du territoire municipal",
    metrics: [
      { label: 'Détection', value: '97% précision' },
      { label: 'Couverture', value: '100% territoire' },
      { label: 'Fréquence', value: 'Mensuelle' }
    ]
  },
  {
    title: 'Vérification de Conformité',
    description: 'Comparaison automatique entre permis délivrés et constructions effectivement réalisées',
    metrics: [
      { label: 'Conformité', value: '94% détectée' },
      { label: 'Alertes', value: 'Temps réel' },
      { label: 'Rapports', value: 'Automatiques' }
    ]
  },
  {
    title: 'Suivi Évolution Urbaine',
    description: "Analyse multi-temporelle pour comprendre la dynamique d'urbanisation",
    metrics: [
      { label: 'Historique', value: '5+ années' },
      { label: 'Tendances', value: 'Prédictives' },
      { label: 'Cartographie', value: 'Interactive' }
    ]
  }
]

const benefits = [
  {
    icon: <CheckCircle size={32} />,
    title: 'Gain de Temps',
    description: '80% de réduction du temps de vérification terrain vs satellite'
  },
  {
    icon: <Zap size={32} />,
    title: 'Réactivité',
    description: 'Détection en moins de 48h après construction vs 6 mois en moyenne'
  },
  {
    icon: <BarChart size={32} />,
    title: 'Exhaustivité',
    description: '100% du territoire couvert vs 20% en contrôle terrain classique'
  },
  {
    icon: <Map size={32} />,
    title: 'Traçabilité',
    description: 'Historique complet avec preuves géolocalisées et datées'
  }
]

export default function SkyLoupePage() {
  return (
    <>
      <PageHeader
        badge="DataSAT Platform"
        subtitle="PLATEFORME"
        title="SKY LOUPE"
        description="Surveillance automatisée des constructions et vérification de conformité urbanistique par imagerie satellitaire et intelligence artificielle."
        backgroundImage="/images/header-backgrounds/sky_urban.png"
      />

      <Section>
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge variant="info">Opérationnel</Badge>
          <Badge variant="success">IA Embarquée</Badge>
          <Badge>Détection 97%</Badge>
          <Badge>Couverture 100%</Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-lunar-white mb-4">
              Contrôle Urbanistique Automatisé
            </h2>
            <p className="text-nebula-gray text-lg leading-relaxed mb-6">
              SKY LOUPE révolutionne le contrôle urbanistique en combinant imagerie satellitaire haute résolution
              et intelligence artificielle pour détecter automatiquement toute nouvelle construction sur votre territoire.
            </p>
            <ul className="space-y-3">
              {[
                'Détection automatique des constructions neuves',
                'Comparaison avec base permis de construire',
                'Alertes en cas de non-conformité',
                'Rapports mensuels automatisés',
                'Cartographie interactive des infractions',
                'Historique complet géolocalisé'
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
                src="/images/features/sky_loupe_feature.png"
                alt="Vue aérienne urbaine - Détection de constructions"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
              <div className="absolute top-4 left-4 bg-midnight-blue/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-cyber-cyan/30">
                <div className="text-xs text-lunar-white font-medium mb-1">Détections IA</div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
                  <span className="text-nebula-gray">8 bâtiments identifiés</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-nebula-gray mt-4 text-center">
              Vue aérienne urbaine - Détection automatique de constructions par IA avec précision 92-97%
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <BeforeAfterSlider
          title="Détection de Nouvelle Construction"
          description="Comparez l'état initial du terrain (avant) avec la détection automatique de la nouvelle construction (après). L'IA identifie précisément l'emprise au sol, la géolocalisation et les caractéristiques du bâtiment."
          beforeLabel="2024-01"
          afterLabel="2024-12"
          beforeImage="/chatgpt/befor Sky Loupe .png"
          afterImage="/chatgpt/after Sky Loupe .png"
          stats={{ detected: 8, precision: 97, changes: 3 }}
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
          Bénéfices pour les Collectivités
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, i) => (
            <Card key={i} {...benefit} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-lunar-white mb-4">ROI Démontré</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">80%</div>
              <div className="text-sm text-nebula-gray">Réduction des coûts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">12x</div>
              <div className="text-sm text-nebula-gray">Plus rapide</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">100%</div>
              <div className="text-sm text-nebula-gray">Couverture</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">97%</div>
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
            <h3 className="text-xl font-bold text-lunar-white mb-3">Rapport Mensuel</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Liste exhaustive des constructions détectées</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Cartographie des infractions potentielles</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Statistiques d'évolution urbaine</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Preuves satellites géolocalisées</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <Map className="w-10 h-10 text-cyber-cyan mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Dashboard Interactif</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Carte interactive avec toutes les détections</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Filtres par date, secteur, conformité</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Visualisation avant/après pour chaque site</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Export cartographique (SHP, GeoJSON)</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <AlertCircle className="w-10 h-10 text-alert-orange mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Alertes Temps Réel</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Notification immédiate des détections</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Niveau de priorité selon surface/zone</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Email + SMS pour infractions majeures</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Intégration avec logiciel urbanisme</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">
            Démarrez avec SKY LOUPE
          </h2>
          <p className="text-xl text-nebula-gray mb-8">
            Testez SKY LOUPE gratuitement sur votre territoire pendant 30 jours.
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
