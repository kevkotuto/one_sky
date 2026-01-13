import { Cloud, Code, Database, Shield, Zap, Globe } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const platform = [
  { icon: <Cloud size={32} />, title: 'Cloud Souverain', 
    description: 'Infrastructure hébergée en Europe avec certifications SecNumCloud' },
  { icon: <Code size={32} />, title: 'APIs RESTful', 
    description: 'Intégration facile dans vos systèmes existants' },
  { icon: <Database size={32} />, title: 'Data Lake', 
    description: 'Stockage et indexation de pétaoctets de données géospatiales' },
  { icon: <Shield size={32} />, title: 'Sécurité', 
    description: 'Chiffrement bout-en-bout et contrôle d\'accès granulaire' },
  { icon: <Zap size={32} />, title: 'Temps Réel', 
    description: 'Streaming de données et alertes instantanées' },
  { icon: <Globe size={32} />, title: 'Multi-Tenancy', 
    description: 'Architecture SaaS pour servir États et entreprises' },
]

export default function PlateformePage() {
  return (
    <>
      <PageHeader subtitle="TECHNOLOGIE" title="Plateforme Technologique"
        description="Une infrastructure cloud moderne, sécurisée et scalable pour l'intelligence géospatiale." />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platform.map((tech, i) => <Card key={i} {...tech} />)}
        </div>
      </Section>
    </>
  )
}
