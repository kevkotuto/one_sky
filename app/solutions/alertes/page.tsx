import { Bell, Zap, Mail, Smartphone } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const alertes = [
  { icon: <Bell size={32} />, title: 'Alertes Temps Réel', description: 'Notifications instantanées sur événements' },
  { icon: <Zap size={32} />, title: 'Seuils Personnalisables', description: 'Configurez vos propres critères' },
  { icon: <Mail size={32} />, title: 'Multi-Canal', description: 'Email, SMS, webhook, API' },
  { icon: <Smartphone size={32} />, title: 'Application Mobile', description: 'Recevez les alertes où que vous soyez' },
]

export default function AlertesPage() {
  return (
    <>
      <PageHeader subtitle="SOLUTIONS" title="Alertes & Veille"
        description="Restez informé en temps réel des changements critiques détectés par nos satellites." />
      <Section><div className="grid md:grid-cols-2 gap-8">
          {alertes.map((a, i) => <Card key={i} {...a} />)}
        </div></Section>
    </>
  )
}
