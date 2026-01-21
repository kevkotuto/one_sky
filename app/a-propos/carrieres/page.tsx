import Link from 'next/link'
import { Rocket, Code, Brain, Users } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const roles = [
  { icon: <Rocket size={32} />, title: 'Ingénieurs Spatiaux', 
    description: 'Conception, opération et maintenance de notre constellation' },
  { icon: <Code size={32} />, title: 'Développeurs Full Stack', 
    description: 'Développement de nos plateformes SaaS et APIs' },
  { icon: <Brain size={32} />, title: 'Data Scientists', 
    description: 'Modèles IA et algorithmes d'analyse géospatiale' },
  { icon: <Users size={32} />, title: 'Business & Sales', 
    description: 'Développement commercial et relation client' },
]

export default function CarrieresPage() {
  return (
    <>
      <PageHeader subtitle="À PROPOS" title="Carrières"
        description="Rejoignez une équipe passionnée qui façonne l'avenir de l'intelligence géospatiale." />
      <Section>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {roles.map((r, i) => <Card key={i} {...r} />)}
        </div>
        <div className="text-center">
          <Link href="/contact"><Button size="lg">Postuler maintenant</Button></Link>
        </div>
      </Section>
    </>
  )
}
