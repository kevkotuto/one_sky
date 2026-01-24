import Link from 'next/link'
import { ArrowRight, Target, Users, Heart, Handshake, Briefcase } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const sections = [
  {
    icon: <Target size={32} />,
    title: 'Vision & Mission',
    description: "Notre raison d'être et notre vision pour l'avenir de l'intelligence géospatiale",
    href: '/a-propos/vision-mission',
  },
  {
    icon: <Users size={32} />,
    title: 'Gouvernance & Équipe',
    description: 'Les experts et les leaders qui portent le projet ONE SKY',
    href: '/a-propos/gouvernance',
  },
  {
    icon: <Heart size={32} />,
    title: 'Nos Engagements',
    description: 'Responsabilité, durabilité et éthique au cœur de nos opérations',
    href: '/a-propos/engagements',
  },
  {
    icon: <Handshake size={32} />,
    title: 'Partenariats',
    description: 'Un écosystème de partenaires stratégiques et technologiques',
    href: '/a-propos/partenariats',
  },
  {
    icon: <Briefcase size={32} />,
    title: 'Carrières',
    description: "Rejoignez une équipe qui façonne l'avenir de l'observation spatiale",
    href: '/a-propos/carrieres',
  },
]

export default function AProposPage() {
  return (
    <>
      <PageHeader
        subtitle="À PROPOS"
        title="Qui sommes-nous ?"
        description="ONE SKY est l'opérateur stratégique de données géospatiales décisionnelles au service des États, institutions et industries critiques. Notre mission : transformer l'observation spatiale en intelligence actionnable."
      />

      <Section>
        <div className="grid md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <Link key={index} href={section.href}>
              <Card
                icon={section.icon}
                title={section.title}
                description={section.description}
                className="h-full group"
              >
                <div className="mt-4 flex items-center text-cyber-cyan group-hover:translate-x-2 transition-transform">
                  En savoir plus
                  <ArrowRight className="ml-2 w-4 h-4" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-lunar-white mb-6">
            Intéressé par ONE SKY ?
          </h2>
          <p className="text-xl text-nebula-gray mb-8">
            Découvrez comment nous pouvons accompagner votre transformation digitale
          </p>
          <Link href="/contact">
            <Button size="lg">Nous contacter</Button>
          </Link>
        </div>
      </Section>
    </>
  )
}
