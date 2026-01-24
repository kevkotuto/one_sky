import { Target, Eye, Rocket, Globe } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const missions = [
  {
    icon: <Eye size={32} />,
    title: 'Observer',
    description: "Déployer une infrastructure satellitaire souveraine pour l'observation continue de la Terre",
  },
  {
    icon: <Target size={32} />,
    title: 'Analyser',
    description: "Transformer les données brutes en indicateurs décisionnels grâce à l'IA",
  },
  {
    icon: <Rocket size={32} />,
    title: 'Accélérer',
    description: "Permettre aux décideurs d'agir plus vite avec des insights en temps réel",
  },
  {
    icon: <Globe size={32} />,
    title: 'Pérenniser',
    description: 'Contribuer à un développement durable et responsable de notre planète',
  },
]

const values = [
  {
    title: 'Souveraineté',
    description: 'Infrastructure et données hébergées de manière souveraine pour garantir la sécurité des États',
  },
  {
    title: 'Excellence Technologique',
    description: "Innovation constante dans le spatial, l'IA et l'analyse de données",
  },
  {
    title: 'Orientation Client',
    description: 'Solutions adaptées aux besoins spécifiques de chaque secteur et organisation',
  },
  {
    title: 'Impact Positif',
    description: 'Contribution aux enjeux environnementaux, sociaux et de gouvernance (ESG)',
  },
]

export default function VisionMissionPage() {
  return (
    <>
      <PageHeader
        subtitle="À PROPOS"
        title="Vision & Mission"
        description="Notre ambition : devenir le partenaire de référence en intelligence géospatiale décisionnelle pour les acteurs publics et privés qui façonnent l'avenir de notre planète."
      />

      <Section>
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-lunar-white mb-6">Notre Vision</h2>
          <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-xl p-8">
            <p className="text-xl text-nebula-gray leading-relaxed mb-4">
              Dans un monde en mutation rapide, où les défis climatiques, sécuritaires et économiques s'intensifient, 
              les décideurs ont besoin d'informations précises, objectives et en temps réel pour anticiper et agir efficacement.
            </p>
            <p className="text-xl text-nebula-gray leading-relaxed">
              ONE SKY ambitionne de démocratiser l'accès à l'intelligence géospatiale en transformant les données satellitaires 
              en solutions décisionnelles accessibles, fiables et actionnables.
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-lunar-white mb-6">Nos Missions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {missions.map((mission, index) => (
              <Card
                key={index}
                icon={mission.icon}
                title={mission.title}
                description={mission.description}
                hover={false}
              />
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <h2 className="text-3xl font-bold text-lunar-white mb-12 text-center">Nos Valeurs</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-cyber-cyan mb-3">
                  {value.title}
                </h3>
                <p className="text-nebula-gray">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
