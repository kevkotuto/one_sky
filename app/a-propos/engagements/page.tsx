import { Leaf, Shield, Heart, Award } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const engagements = [
  { icon: <Leaf size={32} />, title: 'Environnement', 
    description: 'Contribution active au monitoring environnemental et à la lutte contre le changement climatique' },
  { icon: <Shield size={32} />, title: 'Sécurité & Confidentialité', 
    description: 'Protection maximale des données sensibles avec infrastructure souveraine et certifiée' },
  { icon: <Heart size={32} />, title: 'Responsabilité Sociale', 
    description: 'Support aux ONG et organisations humanitaires pour leurs missions critiques' },
  { icon: <Award size={32} />, title: 'Éthique', 
    description: 'Utilisation responsable de l\'IA et respect des réglementations internationales' },
]

export default function EngagementsPage() {
  return (
    <>
      <PageHeader subtitle="À PROPOS" title="Nos Engagements"
        description="ONE SKY s'engage pour une utilisation responsable, éthique et durable de la technologie spatiale." />
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {engagements.map((e, i) => <Card key={i} {...e} />)}
        </div>
      </Section>
    </>
  )
}
