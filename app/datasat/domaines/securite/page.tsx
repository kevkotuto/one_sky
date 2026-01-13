import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { CheckCircle } from 'lucide-react'

export default function DomainPage() {
  return (
    <>
      <PageHeader badge="DataSAT" subtitle="DOMAINE" title="securite"
        description="Solutions géospatiales pour le secteur securite." />
      <Section>
        <Card icon={<CheckCircle size={32} />} title="Cas d'usage" 
          description="Applications spécifiques au domaine" />
      </Section>
    </>
  )
}
