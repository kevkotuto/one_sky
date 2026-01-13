import { Lightbulb, Target, Rocket, CheckCircle } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const steps = [
  { icon: <Lightbulb size={32} />, title: '1. Découverte', description: 'Atelier pour comprendre vos besoins' },
  { icon: <Target size={32} />, title: '2. POC', description: 'Proof of Concept en 2-4 semaines' },
  { icon: <Rocket size={32} />, title: '3. Déploiement', description: 'Mise en production et formation' },
  { icon: <CheckCircle size={32} />, title: '4. Optimisation', description: 'Support continu et évolutions' },
]

export default function ParcoursPage() {
  return (
    <>
      <PageHeader subtitle="SOLUTIONS" title="Parcours Projet"
        description="Une méthodologie éprouvée pour garantir le succès de votre projet géospatial." />
      <Section><div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => <Card key={i} {...s} hover={false} />)}
        </div></Section>
    </>
  )
}
