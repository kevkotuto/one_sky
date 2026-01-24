import Link from 'next/link'
import { Eye, BarChart, Bell, Layout, Code, Map, Building, ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const solutions = [
  {
    icon: <Eye size={32} />, title: 'Observation & Monitoring', href: '/solutions/observation',
    description: "Surveillance continue de zones d'intérêt critiques"
  },
  {
    icon: <BarChart size={32} />, title: 'Analyses & Indicateurs', href: '/solutions/analyses',
    description: 'KPIs et métriques décisionnelles personnalisées'
  },
  {
    icon: <Bell size={32} />, title: 'Alertes & Veille', href: '/solutions/alertes',
    description: 'Notifications instantanées sur événements critiques'
  },
  {
    icon: <Layout size={32} />, title: 'Tableaux de Bord', href: '/solutions/dashboards',
    description: 'Visualisation interactive de vos données'
  },
  {
    icon: <Code size={32} />, title: 'APIs & Intégration', href: '/solutions/apis',
    description: 'Intégration dans vos systèmes existants'
  },
  {
    icon: <Map size={32} />, title: 'Parcours Projet', href: '/solutions/parcours',
    description: "Méthodologie d'implémentation éprouvée"
  },
  {
    icon: <Building size={32} />, title: 'Par Secteur', href: '/solutions/secteurs',
    description: 'Solutions adaptées à votre industrie'
  },
]

export default function SolutionsPage() {
  return (
    <>
      <PageHeader subtitle="SOLUTIONS" title="Catalogue de Solutions"
        description="Des solutions géospatiales complètes pour répondre à tous vos besoins décisionnels."
        backgroundImage="/images/header-backgrounds/sky_ocean.png" />
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, i) => (
            <Link key={i} href={sol.href}>
              <Card {...sol} className="h-full group">
                <div className="mt-4 flex items-center text-cyber-cyan group-hover:translate-x-2 transition-transform">
                  Découvrir <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
