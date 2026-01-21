import Link from 'next/link'
import { Brain, Leaf, Building, ArrowRight } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { DATASAT_PLATFORMS, DATASAT_DOMAINS } from '@/lib/constants'

export default function DataSATPage() {
  return (
    <>
      <PageHeader subtitle="DATASAT" title="Plateformes Décisionnelles"
        description="Solutions verticales clés en main combinant données satellitaires, IA et expertise métier pour des décisions éclairées." />
      
      <Section className="bg-midnight-blue/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lunar-white mb-4">Intelligence & IA</h2>
          <p className="text-xl text-nebula-gray max-w-3xl mx-auto">
            Nos algorithmes d'IA analysent automatiquement les images satellitaires pour détecter objets, 
            changements et anomalies en temps réel.
          </p>
        </div>
        <Link href="/datasat/intelligence-ia">
          <Button variant="outline" className="mx-auto block">En savoir plus sur notre IA</Button>
        </Link>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-lunar-white mb-8 text-center">Plateformes Verticales</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {DATASAT_PLATFORMS.map((platform, i) => (
            <Link key={i} href={platform.href}>
              <Card title={platform.name} description={platform.description} className="h-full group">
                <div className="mt-4 flex items-center text-cyber-cyan group-hover:translate-x-2 transition-transform">
                  Découvrir <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/datasat/plateformes"><Button variant="outline">Voir toutes les plateformes</Button></Link>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <h2 className="text-3xl font-bold text-lunar-white mb-8 text-center">Domaines d'Application</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATASAT_DOMAINS.map((domain, i) => (
            <Link key={i} href={domain.href}>
              <Card title={domain.name} className="h-full" />
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">Prêt à tester ?</h2>
          <p className="text-xl text-nebula-gray mb-8 max-w-2xl mx-auto">
            Lancez un Proof of Concept gratuit sur votre cas d'usage
          </p>
          <Link href="/datasat/poc"><Button size="lg">Démarrer un POC gratuit</Button></Link>
        </div>
      </Section>
    </>
  )
}
