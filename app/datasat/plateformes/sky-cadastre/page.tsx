import { CheckCircle, Zap, TrendingUp, Grid, FileText, Map, AlertCircle, MapPin } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Badge from '@/components/ui/Badge'
import BeforeAfterSlider from '@/components/ui/BeforeAfterSlider'

const useCases = [
  {
    title: 'Cartographie Cadastrale Automatisée',
    description: 'Création et mise à jour automatique du plan cadastral par imagerie satellite très haute résolution (25cm) avec IA de segmentation',
    metrics: [
      { label: 'Résolution', value: '25 cm' },
      { label: 'Précision', value: '98%' },
      { label: 'Délai', value: '4-6 semaines' }
    ]
  },
  {
    title: 'Détection Changements Parcellaires',
    description: 'Monitoring automatique des modifications parcellaires : divisions, fusions, constructions, extensions, changements d\'usage',
    metrics: [
      { label: 'Changement min.', value: '10m²' },
      { label: 'Couverture', value: '100%' },
      { label: 'Revisite', value: 'Mensuelle' }
    ]
  },
  {
    title: 'Optimisation Fiscale Foncière',
    description: 'Identification automatique des biens bâtis non déclarés ou sous-évalués pour optimiser les recettes fiscales locales',
    metrics: [
      { label: 'Non-déclarés', value: '5-15%' },
      { label: 'ROI fiscal', value: '+20-40%' },
      { label: 'Preuves', value: 'Juridiques' }
    ]
  }
]

const benefits = [
  {
    icon: <CheckCircle size={32} />,
    title: 'Exhaustivité Garantie',
    description: '100% du territoire cartographié vs 60-80% en cadastre classique (zones rurales incomplètes)'
  },
  {
    icon: <Zap size={32} />,
    title: 'Actualisation Rapide',
    description: 'Mise à jour complète en 4-6 semaines vs 5-10 ans en méthode traditionnelle'
  },
  {
    icon: <TrendingUp size={32} />,
    title: 'ROI Fiscal Prouvé',
    description: '+20-40% de recettes fiscales via détection constructions non déclarées'
  },
  {
    icon: <Grid size={32} />,
    title: 'Conformité Internationale',
    description: 'Conformité standards LADM, INSPIRE avec interopérabilité SIG complète'
  }
]

export default function SkyCadastrePage() {
  return (
    <>
      <PageHeader
        badge="DataSAT Platform"
        subtitle="PLATEFORME"
        title="SKY CADASTRE"
        description="Système cadastral satellitaire pour la cartographie automatisée des parcelles, gestion foncière, optimisation fiscale et aménagement du territoire."
        backgroundImage="/images/header-backgrounds/sky_urban.png"
      />

      <Section>
        <div className="flex flex-wrap gap-3 mb-8">
          <Badge variant="info">Opérationnel</Badge>
          <Badge variant="success">IA Embarquée</Badge>
          <Badge>Précision 98%</Badge>
          <Badge>Résolution 25cm</Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-lunar-white mb-4">
              Cadastre Satellitaire Automatisé
            </h2>
            <p className="text-nebula-gray text-lg leading-relaxed mb-6">
              SKY CADASTRE révolutionne la gestion foncière en combinant imagerie satellite très haute résolution (25cm)
              et intelligence artificielle pour cartographier automatiquement les parcelles, détecter les changements et optimiser les recettes fiscales.
            </p>
            <ul className="space-y-3">
              {[
                'Cartographie automatique parcelles (limites, bâti)',
                'Détection changements parcellaires (divisions, fusions)',
                'Identification constructions non déclarées',
                'Mise à jour cadastre en 4-6 semaines',
                'Conformité standards LADM & INSPIRE',
                'Intégration SIG existants (GeoJSON, SHP)',
                'Optimisation fiscale foncière (+20-40%)'
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
                src="/images/features/sky_cadastre_feature.png"
                alt="Vue aérienne cadastrale - Segmentation parcellaire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-space/80 to-transparent" />
              <div className="absolute top-4 left-4 bg-midnight-blue/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-cyber-cyan/30">
                <div className="text-xs text-lunar-white font-medium mb-1">Détections IA</div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan" />
                  <span className="text-nebula-gray">8 parcelles identifiées</span>
                </div>
              </div>
            </div>
            <p className="text-xs text-nebula-gray mt-4 text-center">
              Vue aérienne cadastrale - Segmentation automatique des parcelles et bâtiments par IA
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <BeforeAfterSlider
          title="Détection de Construction Non Déclarée"
          description="Comparez l'état initial de la parcelle (avant) avec la nouvelle construction détectée automatiquement (après). L'IA identifie précisément l'emprise au sol, la surface bâtie et la date d'apparition pour régularisation fiscale."
          beforeLabel="Cadastre 2023"
          afterLabel="Satellite 2024"
          beforeImage="/images/before-after/cadastre_before.png"
          afterImage="/chatgpt/after Sky Cadastre.png"
          stats={{ detected: 12, precision: 98, changes: 4 }}
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
          Bénéfices pour la Gestion Foncière
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {benefits.map((benefit, i) => (
            <Card key={i} {...benefit} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold text-lunar-white mb-4">Impact Territorial</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">100%</div>
              <div className="text-sm text-nebula-gray">Territoire couvert</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">4-6</div>
              <div className="text-sm text-nebula-gray">Semaines livraison</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">+30%</div>
              <div className="text-sm text-nebula-gray">Recettes fiscales</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">98%</div>
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
            <h3 className="text-xl font-bold text-lunar-white mb-3">Base Cadastrale Complète</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Plan cadastral vectoriel (limites parcelles)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Couche bâti avec emprise au sol</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Attributs parcelles (surface, usage)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Export SIG (SHP, GeoJSON, DXF)</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <MapPin className="w-10 h-10 text-cyber-cyan mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Plateforme Cadastrale Web</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Visualisation interactive cadastre</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Recherche parcelle (identifiant, adresse)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Timeline multi-temporelle (changements)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>API d'intégration SIG municipal</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
            <AlertCircle className="w-10 h-10 text-alert-orange mb-4" />
            <h3 className="text-xl font-bold text-lunar-white mb-3">Rapports Fiscaux</h3>
            <ul className="space-y-2 text-sm text-nebula-gray">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Liste constructions non déclarées</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Surfaces bâties avec preuves satellites</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Estimation recettes fiscales potentielles</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-alert-orange mt-1.5 flex-shrink-0" />
                <span>Fiche parcelle avec historique</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">
            Démarrez avec SKY CADASTRE
          </h2>
          <p className="text-xl text-nebula-gray mb-8">
            Testez SKY CADASTRE gratuitement sur votre commune ou département.
            POC pilote avec livraison cadastre complet sous 6 semaines.
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
