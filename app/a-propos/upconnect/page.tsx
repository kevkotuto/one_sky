import { Wifi, Globe, Zap, Users, Building2, Shield } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const features = [
  {
    icon: <Zap size={32} />,
    title: 'Faible Latence',
    description: 'Constellation LEO offrant des latences comparables à la fibre optique pour une expérience utilisateur optimale'
  },
  {
    icon: <Globe size={32} />,
    title: 'Couverture Totale',
    description: 'Connexion haut débit dans les zones les plus reculées d\'Afrique, là où les infrastructures terrestres font défaut'
  },
  {
    icon: <Shield size={32} />,
    title: 'Fiabilité',
    description: 'Service continu et stable grâce à notre constellation de satellites en orbite basse (LEO)'
  },
  {
    icon: <Zap size={32} />,
    title: 'Haut Débit',
    description: 'Vitesses de connexion élevées permettant le streaming, la visioconférence et les applications cloud'
  }
]

const clients = [
  {
    icon: <Building2 size={32} />,
    title: 'Entreprises',
    description: 'Solutions de connectivité pour bureaux distants, sites industriels et opérations décentralisées'
  },
  {
    icon: <Users size={32} />,
    title: 'Gouvernements',
    description: 'Infrastructure de communication sécurisée pour les services publics et administrations'
  },
  {
    icon: <Globe size={32} />,
    title: 'Communautés Rurales',
    description: 'Accès à Internet pour l\'éducation, la santé et le développement économique local'
  }
]

export default function UpConnectPage() {
  return (
    <>
      <PageHeader
        badge="Filiale OnesSKY"
        subtitle="CONNECTIVITÉ"
        title="UpConnect"
        description="Connectivité haut débit par satellite pour l'Afrique"
        backgroundImage="/images/header-backgrounds/sky_tech.png"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-lunar-white mb-6">
              UpConnect, connecter l'Afrique par satellite
            </h2>
            <p className="text-lg text-nebula-gray leading-relaxed mb-6">
              Upconnect est une filiale de la société Ones-SKY spécialisée dans la distribution de la connectivité
              et des services de communication par satellite.
            </p>
            <p className="text-lg text-nebula-gray leading-relaxed mb-6">
              Elle fournit en Afrique, des diffusions et de connectivité à large bande par satellite pour des clients
              allant des entreprises aux gouvernements.
            </p>
            <p className="text-lg text-nebula-gray leading-relaxed">
              OnesSKY se spécialise dans la fourniture d'accès à Internet haut débit par satellite via une
              constellation en orbite basse (LEO). Notre objectif est de connecter les régions les plus reculées
              d'Afrique en offrant des services de connectivité fiable et à faible latence.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <h2 className="text-3xl font-bold text-lunar-white mb-12 text-center">
          Nos Avantages Technologiques
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <Card key={i} {...feature} />
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-lunar-white mb-12 text-center">
          Nos Clients
        </h2>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {clients.map((client, i) => (
            <Card key={i} {...client} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <Wifi className="w-16 h-16 text-cyber-cyan mx-auto mb-6" />
          <h3 className="text-3xl font-bold text-lunar-white mb-4">
            Constellation LEO Haute Performance
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-8">
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">2</div>
              <div className="text-sm text-nebula-gray">Satellites actifs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">LEO</div>
              <div className="text-sm text-nebula-gray">Orbite basse</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">&lt;50ms</div>
              <div className="text-sm text-nebula-gray">Latence</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">24/7</div>
              <div className="text-sm text-nebula-gray">Disponibilité</div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-lunar-white mb-6 text-center">
            Notre Mission
          </h2>
          <p className="text-xl text-nebula-gray text-center mb-12">
            Réduire la fracture numérique en Afrique en offrant une connectivité satellite accessible,
            fiable et performante pour tous.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-lunar-white mb-4">Services de Diffusion</h3>
              <ul className="space-y-3 text-nebula-gray">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan mt-2 flex-shrink-0" />
                  <span>Diffusion TV et radio par satellite</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan mt-2 flex-shrink-0" />
                  <span>Distribution de contenu multimédia</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan mt-2 flex-shrink-0" />
                  <span>Services de streaming professionnel</span>
                </li>
              </ul>
            </div>

            <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-lunar-white mb-4">Connectivité Large Bande</h3>
              <ul className="space-y-3 text-nebula-gray">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan mt-2 flex-shrink-0" />
                  <span>Internet haut débit par satellite</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan mt-2 flex-shrink-0" />
                  <span>Réseaux privés d'entreprise (VPN)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyber-cyan mt-2 flex-shrink-0" />
                  <span>Solutions de backup et redondance</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">
            Abonnez-vous à Notre Newsletter
          </h2>
          <p className="text-xl text-nebula-gray mb-8">
            Recevez les meilleures actualités sur nos services de connectivité
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-6 py-4 bg-cosmic-blue border border-stellar-blue/30 text-lunar-white rounded-lg focus:outline-none focus:border-cyber-cyan transition-colors"
            />
            <button className="px-8 py-4 bg-cyber-cyan text-deep-space rounded-lg font-semibold hover:bg-cyber-cyan/90 transition-all shadow-lg shadow-cyber-cyan/20">
              S'abonner
            </button>
          </div>
          <p className="text-sm text-nebula-gray mt-4">
            En vous abonnant, vous acceptez de recevoir nos communications. Vous pouvez vous désabonner à tout moment.
          </p>
        </div>
      </Section>
    </>
  )
}
