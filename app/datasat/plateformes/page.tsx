import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { DATASAT_PLATFORMS } from '@/lib/constants'

export default function PlateformesPage() {
  return (
    <>
      <PageHeader badge="DataSAT" subtitle="PLATEFORMES" 
        title="Toutes nos Plateformes"
        description="Solutions verticales clés en main pour tous vos besoins géospatiaux." />
      
      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATASAT_PLATFORMS.map((platform, i) => (
            <Link key={i} href={platform.href}>
              <Card 
                title={platform.name} 
                description={platform.description}
                className="h-full group"
              >
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
