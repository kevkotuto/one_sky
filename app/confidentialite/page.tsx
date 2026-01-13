import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'

export default function ConfidentialitePage() {
  return (
    <>
      <PageHeader subtitle="LÉGAL" title="Politique de Confidentialité"
        description="Comment ONE SKY collecte et protège vos données personnelles." />
      
      <Section>
        <div className="max-w-4xl mx-auto space-y-8 text-nebula-gray">
          <div>
            <h2 className="text-2xl font-bold text-lunar-white mb-4">Collecte des données</h2>
            <p>
              Nous collectons uniquement les données nécessaires au traitement de vos demandes : 
              nom, email, organisation, téléphone (optionnel), et le contenu de vos messages.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-lunar-white mb-4">Utilisation des données</h2>
            <p className="mb-4">Vos données sont utilisées pour :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Répondre à vos demandes d'information</li>
              <li>Vous contacter concernant nos services</li>
              <li>Améliorer notre site et nos services</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-lunar-white mb-4">Protection des données</h2>
            <p>
              Vos données sont stockées de manière sécurisée et ne sont jamais partagées avec des tiers 
              sans votre consentement explicite. Conformité RGPD garantie.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-lunar-white mb-4">Vos droits</h2>
            <p className="mb-4">Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit d'opposition</li>
              <li>Droit à la portabilité</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à : privacy@onesky.space
            </p>
          </div>
        </div>
      </Section>
    </>
  )
}
