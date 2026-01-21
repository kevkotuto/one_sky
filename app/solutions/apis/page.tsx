import { Code, Database, Lock, Zap } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const apis = [
  { icon: <Code size={32} />, title: 'REST & GraphQL', description: 'APIs modernes et documentées' },
  { icon: <Database size={32} />, title: 'Données Structurées', description: 'GeoJSON, WMS, WFS' },
  { icon: <Lock size={32} />, title: 'Authentification OAuth2', description: 'Sécurité et contrôle d'accès' },
  { icon: <Zap size={32} />, title: 'Temps Réel', description: 'WebSockets et webhooks' },
]

export default function APIsPage() {
  return (
    <>
      <PageHeader subtitle="SOLUTIONS" title="APIs & Intégration"
        description="Intégrez nos données et analyses dans vos systèmes existants via nos APIs robustes." />
      <Section><div className="grid md:grid-cols-2 gap-8">
          {apis.map((api, i) => <Card key={i} {...api} />)}
        </div></Section>
    </>
  )
}
