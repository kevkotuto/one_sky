import { Layout, Map, BarChart, Filter, Download, Smartphone } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import DashboardMockup from '@/components/ui/DashboardMockup'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

const features = [
  { icon: <Layout size={32} />, title: 'Interfaces Intuitives',
    description: 'Design moderne pensé pour les décideurs avec UX optimisée et ergonomie étudiée' },
  { icon: <Map size={32} />, title: 'Cartographie Interactive',
    description: 'Exploration géographique fluide avec zoom, pan, et sélection de zones d\'intérêt' },
  { icon: <BarChart size={32} />, title: 'Visualisations Avancées',
    description: 'Graphiques dynamiques, heatmaps, timelines et indicateurs en temps réel' },
  { icon: <Filter size={32} />, title: 'Filtres Dynamiques',
    description: 'Exploration multicritères par date, zone géographique, type d\'événement et statut' },
  { icon: <Download size={32} />, title: 'Export Multi-formats',
    description: 'Téléchargement des données en PDF, Excel, CSV, GeoJSON et formats d\'images' },
  { icon: <Smartphone size={32} />, title: 'Responsive Design',
    description: 'Interface adaptative fonctionnant sur desktop, tablette et smartphone' },
]

export default function DashboardsPage() {
  return (
    <>
      <PageHeader
        subtitle="SOLUTIONS"
        title="Tableaux de Bord Décisionnels"
        description="Visualisez et explorez vos données géospatiales avec des interfaces modernes, intuitives et puissantes."
      />

      <Section>
        <DashboardMockup
          title="Dashboard Opérationnel"
          description="Exemple d'interface de monitoring temps réel avec KPIs, carte interactive, alertes et graphiques d'activité."
          variant="monitoring"
        />
      </Section>

      <Section className="bg-midnight-blue/30">
        <h2 className="text-3xl font-bold text-lunar-white mb-8 text-center">
          Fonctionnalités Clés
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <Card key={i} {...feature} />
          ))}
        </div>
      </Section>

      <Section>
        <BeforeAfterSlider
          title="Visualisation Avant/Après Analyse"
          description="Comparez les images satellitaires brutes avec les résultats d'analyse IA pour comprendre la valeur ajoutée de nos traitements."
          beforeLabel="Donnée brute"
          afterLabel="Analyse IA"
        />
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-lunar-white mb-6 text-center">
            Types de Tableaux de Bord
          </h2>
          <p className="text-nebula-gray text-center mb-12 text-lg">
            Nos dashboards sont adaptés à différents cas d'usage et profils utilisateurs
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all">
              <h3 className="text-xl font-bold text-lunar-white mb-3">Dashboard Opérationnel</h3>
              <p className="text-nebula-gray mb-4">
                Monitoring temps réel des zones surveillées avec alertes instantanées et KPIs de performance
              </p>
              <ul className="space-y-2 text-sm text-nebula-gray">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Suivi en temps réel</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Alertes configurables</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Métriques de performance</span>
                </li>
              </ul>
            </div>

            <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all">
              <h3 className="text-xl font-bold text-lunar-white mb-3">Dashboard Analytique</h3>
              <p className="text-nebula-gray mb-4">
                Analyse approfondie avec comparaisons temporelles, tendances et prévisions
              </p>
              <ul className="space-y-2 text-sm text-nebula-gray">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Analyses multi-temporelles</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Détection de tendances</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Rapports personnalisés</span>
                </li>
              </ul>
            </div>

            <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all">
              <h3 className="text-xl font-bold text-lunar-white mb-3">Dashboard Exécutif</h3>
              <p className="text-nebula-gray mb-4">
                Vue synthétique pour dirigeants avec indicateurs clés et insights stratégiques
              </p>
              <ul className="space-y-2 text-sm text-nebula-gray">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>KPIs stratégiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Synthèse visuelle</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Export PDF automatique</span>
                </li>
              </ul>
            </div>

            <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 hover:border-cyber-cyan/50 transition-all">
              <h3 className="text-xl font-bold text-lunar-white mb-3">Dashboard Terrain</h3>
              <p className="text-nebula-gray mb-4">
                Interface mobile optimisée pour les équipes sur le terrain avec mode hors-ligne
              </p>
              <ul className="space-y-2 text-sm text-nebula-gray">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Mode hors-ligne</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Géolocalisation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                  <span>Saisie terrain</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">Personnalisation Complète</h2>
          <p className="text-xl text-nebula-gray mb-8 max-w-2xl mx-auto">
            Chaque dashboard peut être personnalisé selon vos besoins spécifiques : widgets,
            indicateurs, seuils d'alerte, zones d'intérêt et niveaux d'accès.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-6 py-3 bg-cosmic-blue/50 rounded-lg border border-stellar-blue/30">
              <span className="text-lunar-white font-semibold">Widgets personnalisables</span>
            </div>
            <div className="px-6 py-3 bg-cosmic-blue/50 rounded-lg border border-stellar-blue/30">
              <span className="text-lunar-white font-semibold">Thèmes adaptatifs</span>
            </div>
            <div className="px-6 py-3 bg-cosmic-blue/50 rounded-lg border border-stellar-blue/30">
              <span className="text-lunar-white font-semibold">Multi-utilisateurs</span>
            </div>
            <div className="px-6 py-3 bg-cosmic-blue/50 rounded-lg border border-stellar-blue/30">
              <span className="text-lunar-white font-semibold">SSO / SAML</span>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
