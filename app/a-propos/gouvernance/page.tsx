import { Users, Award, Briefcase } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function GouvernancePage() {
  return (
    <>
      <PageHeader
        subtitle="À PROPOS"
        title="Gouvernance & Équipe"
        description="Une équipe pluridisciplinaire d'experts en spatial, IA, data science et géopolitique au service de notre mission."
      />

      <Section>
        <Card icon={<Users size={32} />} title="Conseil d'Administration" 
          description="Composé d'experts en technologie spatiale, finance et relations internationales" />
        <div className="mt-8">
          <Card icon={<Award size={32} />} title="Direction Exécutive" 
            description="Leaders expérimentés dans le spatial, l'IA et les solutions SaaS B2B/B2G" />
        </div>
        <div className="mt-8">
          <Card icon={<Briefcase size={32} />} title="Équipes Techniques" 
            description="Data scientists, ingénieurs spatiaux, développeurs et analystes géospatiaux" />
        </div>
      </Section>
    </>
  )
}
