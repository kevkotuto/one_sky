import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import { SITE_CONFIG } from '@/lib/constants'

export const metadata = {
  title: 'Mentions Légales - ONE SKY',
  description: 'Mentions légales et informations sur ONE SKY'
}

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader
        subtitle="INFORMATIONS LÉGALES"
        title="Mentions Légales"
        description="Informations légales relatives au site ONE SKY"
      />

      <Section>
        <div className="max-w-4xl mx-auto space-y-8">
          <div>
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4">1. Éditeur du Site</h2>
            <div className="space-y-2 text-lunar-white">
              <p><strong>Raison sociale :</strong> ONE SKY</p>
              <p><strong>Email :</strong> {SITE_CONFIG.email}</p>
              <p><strong>Téléphone :</strong> {SITE_CONFIG.phone}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4">2. Propriété Intellectuelle</h2>
            <div className="space-y-3 text-lunar-white">
              <p>
                L'ensemble du contenu de ce site est la propriété exclusive de ONE SKY.
                Toute reproduction sans autorisation est interdite.
              </p>
            </div>
          </div>

          <div className="bg-cosmic-blue/30 border border-stellar-blue/30 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-cyber-cyan mb-4">Contact</h2>
            <div className="space-y-2 text-lunar-white">
              <p><strong>Email :</strong> {SITE_CONFIG.email}</p>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
