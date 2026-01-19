import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { Leaf, Droplet, Wind } from 'lucide-react'

export default function EnvironnementPage() {
  return (
    <>
      <PageHeader badge="DataSAT" subtitle="DOMAINE" title="Environnement & Climat"
        description="Solutions pour le monitoring environnemental et la lutte contre le changement climatique."
        backgroundImage="/images/header-backgrounds/sky_forest.png" />
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          <Card icon={<Leaf size={32} />} title="Déforestation" description="Surveillance des forêts" />
          <Card icon={<Droplet size={32} />} title="Ressources en Eau" description="Monitoring lacs et rivières" />
          <Card icon={<Wind size={32} />} title="Qualité de l'Air" description="Indices de pollution" />
        </div>
      </Section>
    </>
  )
}
