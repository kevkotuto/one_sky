import { BarChart, TrendingUp, PieChart, Activity } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const analytics = [
  { icon: <BarChart size={32} />, title: 'KPIs Personnalisés', description: 'Indicateurs adaptés à vos objectifs' },
  { icon: <TrendingUp size={32} />, title: 'Analyses Temporelles', description: 'Évolution et tendances sur le temps' },
  { icon: <PieChart size={32} />, title: 'Statistiques Avancées', description: 'Agrégations et distributions spatiales' },
  { icon: <Activity size={32} />, title: 'Détection d\'Anomalies', description: 'IA pour identifier les changements' },
]

export default function AnalysesPage() {
  return (
    <>
      <PageHeader subtitle="SOLUTIONS" title="Analyses & Indicateurs"
        description="Transformez vos données géospatiales en insights actionnables et KPIs stratégiques." />
      <Section><div className="grid md:grid-cols-2 gap-8">
          {analytics.map((a, i) => <Card key={i} {...a} />)}
        </div></Section>
    </>
  )
}
