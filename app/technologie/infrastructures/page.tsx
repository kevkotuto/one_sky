import { Radio, Database, Shield } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import SatelliteCard from '@/components/ui/SatelliteCard'
import Globe3D from '@/components/ui/Globe3D'

const satellites = [
  {
    name: 'SKY 1',
    purpose: 'Satellite de communication et transmission de données en orbite basse, assurant la connectivité continue entre les satellites d'observation et les stations sol.',
    status: 'operational' as const,
    icon: 'communication' as const,
    specs: [
      { label: 'Lancement', value: '2024' },
      { label: 'Altitude', value: '550 km' },
      { label: 'Bande de fréquence', value: 'X-Band' },
      { label: 'Capacité', value: '10 Gbps' }
    ]
  },
  {
    name: 'SKY 2',
    purpose: 'Satellite de communication avancé avec capacité de relais intersatellite, permettant une couverture globale et une latence réduite pour les transmissions de données.',
    status: 'operational' as const,
    icon: 'communication' as const,
    specs: [
      { label: 'Lancement', value: '2025' },
      { label: 'Altitude', value: '575 km' },
      { label: 'Bande de fréquence', value: 'Ka-Band' },
      { label: 'Capacité', value: '15 Gbps' }
    ]
  },
  {
    name: 'SKY 3',
    purpose: 'Satellite d'observation de la Terre haute résolution, équipé de capteurs optiques et radar pour une surveillance continue, jour et nuit, dans toutes conditions météo.',
    status: 'operational' as const,
    icon: 'observation' as const,
    specs: [
      { label: 'Lancement', value: '2026' },
      { label: 'Résolution optique', value: '25 cm' },
      { label: 'Résolution radar', value: '1 m' },
      { label: 'Revisite', value: '12 heures' }
    ]
  }
]

const infrastructure = [
  { icon: <Radio size={32} />, title: 'Stations Sol Distribuées',
    description: 'Réseau mondial de stations de réception permettant un téléchargement quasi temps réel des données satellitaires avec redondance complète.' },
  { icon: <Database size={32} />, title: 'Data Centers Souverains',
    description: 'Infrastructure cloud souveraine certifiée SecNumCloud pour le stockage et le traitement des données sensibles avec garantie de localisation.' },
  { icon: <Shield size={32} />, title: 'Sécurité de Bout en Bout',
    description: 'Chiffrement des transmissions satellite-sol, contrôles d'accès stricts, traçabilité complète et conformité aux standards internationaux.' },
]

export default function InfrastructuresPage() {
  return (
    <>
      <PageHeader subtitle="TECHNOLOGIE" title="Infrastructures Spatiales"
        description="Une constellation de satellites nouvelle génération pour une observation continue de la Terre." />

      <Section>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
          <div className="flex-1 max-w-2xl">
            <h2 className="text-3xl font-bold text-lunar-white mb-4">Constellation en Orbite LEO</h2>
            <p className="text-nebula-gray text-lg leading-relaxed mb-6">
              Notre constellation de 3 satellites opère en orbite basse (LEO) entre 550 et 600 km d'altitude,
              offrant une revisite fréquente et une résolution spatiale exceptionnelle pour répondre aux besoins
              critiques de surveillance, d'analyse et de décision.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="bg-cosmic-blue/30 rounded-lg p-4">
                <div className="text-cyber-cyan text-2xl font-bold mb-1">3</div>
                <div className="text-nebula-gray">Satellites actifs</div>
              </div>
              <div className="bg-cosmic-blue/30 rounded-lg p-4">
                <div className="text-cyber-cyan text-2xl font-bold mb-1">12h</div>
                <div className="text-nebula-gray">Revisite minimale</div>
              </div>
              <div className="bg-cosmic-blue/30 rounded-lg p-4">
                <div className="text-cyber-cyan text-2xl font-bold mb-1">25cm</div>
                <div className="text-nebula-gray">Résolution optique</div>
              </div>
              <div className="bg-cosmic-blue/30 rounded-lg p-4">
                <div className="text-cyber-cyan text-2xl font-bold mb-1">24/7</div>
                <div className="text-nebula-gray">Disponibilité</div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 lg:ml-8">
            <Globe3D size={500} showSatellites showCoverage={false} />
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <h2 className="text-3xl font-bold text-lunar-white mb-8 text-center">Nos Satellites</h2>
        <div className="grid lg:grid-cols-3 gap-8">
          {satellites.map((sat, i) => (
            <SatelliteCard key={i} {...sat} delay={i * 0.1} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-lunar-white mb-8 text-center">Infrastructure au Sol</h2>
        <p className="text-nebula-gray text-center text-lg mb-12 max-w-3xl mx-auto">
          Une infrastructure terrestre robuste et sécurisée pour assurer la continuité opérationnelle,
          le traitement des données et la protection des informations sensibles.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {infrastructure.map((infra, i) => <Card key={i} {...infra} />)}
        </div>
      </Section>
    </>
  )
}
