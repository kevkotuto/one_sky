import Link from 'next/link'
import { ArrowRight, Leaf, Wheat, Building2, Zap, Shield, Umbrella } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import { DATASAT_DOMAINS } from '@/lib/constants'

const iconMap: Record<string, any> = {
  leaf: Leaf,
  wheat: Wheat,
  building: Building2,
  zap: Zap,
  shield: Shield,
  umbrella: Umbrella,
}

export default function DomainesPage() {
  return (
    <>
      <PageHeader
        badge="DataSAT"
        subtitle="DOMAINES D'APPLICATION"
        title="Nos Domaines d'Expertise"
        description="Solutions géospatiales décisionnelles adaptées à chaque secteur critique."
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATASAT_DOMAINS.map((domain) => {
            const Icon = iconMap[domain.icon]
            return (
              <Link key={domain.id} href={domain.href}>
                <Card
                  title={domain.name}
                  className="h-full group hover:border-cyber-cyan/50 transition-all"
                >
                  <div className="flex items-start gap-4">
                    {Icon && (
                      <div className="p-3 bg-cyber-cyan/10 rounded-lg group-hover:bg-cyber-cyan/20 transition-colors">
                        <Icon className="w-6 h-6 text-cyber-cyan" />
                      </div>
                    )}
                    <div className="flex-1">
                      <div className="mt-4 flex items-center text-cyber-cyan group-hover:translate-x-2 transition-transform">
                        Découvrir <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            )
          })}
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">Un domaine spécifique ?</h2>
          <p className="text-xl text-nebula-gray mb-8 max-w-2xl mx-auto">
            Contactez-nous pour discuter de votre cas d'usage et lancer un POC adapté
          </p>
          <Link href="/contact">
            <button className="bg-cyber-cyan text-deep-space px-8 py-3 rounded-lg font-semibold hover:bg-cyber-cyan/90 transition-all">
              Nous contacter
            </button>
          </Link>
        </div>
      </Section>
    </>
  )
}
