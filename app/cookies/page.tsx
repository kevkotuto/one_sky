import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'

export const metadata = {
  title: 'Cookies - ONE SKY',
  description: 'Politique de cookies'
}

export default function CookiesPage() {
  return (
    <>
      <PageHeader
        subtitle="COOKIES"
        title="Politique de Cookies"
        description="Comment nous utilisons les cookies"
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-6 text-lunar-white">
          <div>
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4">Qu'est-ce qu'un Cookie ?</h2>
            <p>Un cookie est un petit fichier texte déposé sur votre terminal lors de la visite du site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4">Types de Cookies</h2>
            <p>Nous utilisons des cookies essentiels au fonctionnement du site et des cookies analytiques.</p>
          </div>
        </div>
      </Section>
    </>
  )
}
