import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'CGU - ONE SKY',
  description: "Conditions générales d'utilisation"
}

export default function CGUPage() {
  return (
    <>
      <PageHeader
        subtitle="CONDITIONS"
        title="Conditions Générales d'Utilisation"
        description="Conditions d'utilisation du site ONE SKY"
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-6 text-lunar-white">
          <p>L'utilisation du site ONE SKY implique l'acceptation pleine et entière des présentes CGU.</p>
          
          <div>
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4">1. Accès au Site</h2>
            <p>Le site est accessible gratuitement à tout utilisateur disposant d'un accès Internet.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4">2. Utilisation</h2>
            <p>L'utilisateur s'engage à utiliser le site conformément aux lois en vigueur.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
