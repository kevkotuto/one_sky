import Link from 'next/link'
import { Satellite, Workflow, Server, ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const techSections = [
  {
    icon: <Satellite size={32} />, title: 'Infrastructures Spatiales',
    description: 'Constellation SKY 1, 2, 3 en orbite basse (LEO) pour une couverture globale',
    href: '/technologie/infrastructures'
  },
  {
    icon: <Workflow size={32} />, title: 'Chaîne de Valeur',
    description: 'Du capteur satellitaire à l\'insight décisionnel, notre pipeline de bout en bout',
    href: '/technologie/chaine-valeur'
  },
  {
    icon: <Server size={32} />, title: 'Plateforme Technologique',
    description: 'Architecture cloud, APIs, IA et infrastructure de données souveraine',
    href: '/technologie/plateforme'
  },
]

export default function TechnologiePage() {
  return (
    <>
      <PageHeader subtitle="TECHNOLOGIE" title="Notre Infrastructure"
        description="Une stack technologique de bout en bout pour transformer les données satellitaires en intelligence décisionnelle."
        backgroundImage="/images/header-backgrounds/sky_tech.png" />
      <Section>
        <div className="grid md:grid-cols-3 gap-8">
          {techSections.map((s, i) => (
            <Link key={i} href={s.href}>
              <Card {...s} className="h-full group">
                <div className="mt-4 flex items-center text-cyber-cyan group-hover:translate-x-2 transition-transform">
                  En savoir plus <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>
    </>
  )
}
