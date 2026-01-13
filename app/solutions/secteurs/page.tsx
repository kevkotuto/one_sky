import Link from 'next/link'
import { Building, Globe, Factory } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const secteurs = [
  { icon: <Building size={32} />, title: 'Gouvernements', description: 'États, ministères, collectivités' },
  { icon: <Globe size={32} />, title: 'Organisations Internationales', description: 'ONU, ONG, institutions multilatérales' },
  { icon: <Factory size={32} />, title: 'Industries Critiques', description: 'Énergie, transport, agriculture, défense' },
]

export default function SecteursPage() {
  return (
    <>
      <PageHeader subtitle="SOLUTIONS" title="Solutions par Secteur"
        description="Des solutions adaptées aux spécificités de chaque industrie." />
      <Section><div className="grid md:grid-cols-3 gap-8">
          {secteurs.map((s, i) => <Card key={i} {...s} />)}
        </div></Section>
    </>
  )
}
