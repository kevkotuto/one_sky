import { Rocket, Code, Globe, Building } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const partners = [
  { icon: <Rocket size={32} />, title: 'Partenaires Spatiaux', 
    description: 'Lanceurs, constructeurs de satellites et opérateurs de stations sol' },
  { icon: <Code size={32} />, title: 'Partenaires Technologiques', 
    description: 'Leaders en IA, cloud computing et cybersécurité' },
  { icon: <Globe size={32} />, title: 'Partenaires Institutionnels', 
    description: 'Agences spatiales, ministères et organisations internationales' },
  { icon: <Building size={32} />, title: 'Partenaires Commerciaux', 
    description: 'Intégrateurs, revendeurs et consultants sectoriels' },
]

export default function PartenariatsPage() {
  return (
    <>
      <PageHeader subtitle="À PROPOS" title="Partenariats"
        description="Un écosystème de partenaires stratégiques pour délivrer les meilleures solutions géospatiales." />
      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {partners.map((p, i) => <Card key={i} {...p} />)}
        </div>
      </Section>
    </>
  )
}
