import { Satellite, Globe, Radio } from 'lucide-react'
import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

export default function OnesSkyPage() {
  return (
    <>
      <PageHeader
        badge="À Propos"
        subtitle="LA SOCIÉTÉ"
        title="OnesSKY"
        description="Un acteur clé de la nouvelle économie spatiale africaine"
        backgroundImage="/images/header-backgrounds/sky_tech.png"
      />

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-invert max-w-none">
            <h2 className="text-3xl font-bold text-lunar-white mb-6">
              OnesSKY, pionnier spatial africain
            </h2>
            <p className="text-lg text-nebula-gray leading-relaxed mb-6">
              OnesSKY est une société de haute technologie dans le domaine des satellites en orbite basse (LEO)
              disposant de deux satellites de communication et de connectivité (SKY 1 et 2) et d'un satellite
              d'observation terrestre pour la télédétection (SKY 3).
            </p>
            <p className="text-lg text-nebula-gray leading-relaxed mb-6">
              Fondée en 2024, nous nous positionnons comme un acteur clé de la nouvelle économie spatiale.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <h2 className="text-3xl font-bold text-lunar-white mb-12 text-center">
          Nos Domaines d'Expertise
        </h2>
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card
            icon={<Satellite size={40} />}
            title="Imagerie Satellite & Télédétection"
            description="Nous intervenons dans le domaine de l'imagerie satellite, spécialisée dans la fourniture de données géospatiales. Grace à son satellite SKY3, OnesSKY capture des images quotidiennes de l'ensemble de la surface terrestre africaine, permettant un suivi précis et en temps réel."
          />
          <Card
            icon={<Radio size={40} />}
            title="Connectivité Haut Débit par Satellite"
            description="OnesSKY se spécialise également dans la fourniture d'accès à Internet haut débit par satellite via une constellation en orbite basse (LEO). Notre objectif est de connecter les régions les plus reculées d'Afrique en offrant des services de connectivité fiable et à faible latence."
          />
        </div>

        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <Globe className="w-16 h-16 text-cyber-cyan mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-lunar-white mb-4">
            Ones-Sky et ses filiales au cœur des données et services par satellites
          </h3>
          <p className="text-lg text-nebula-gray">
            À l'écoute de l'Afrique
          </p>
        </div>
      </Section>

      <Section>
        <h2 className="text-3xl font-bold text-lunar-white mb-12 text-center">
          Notre Constellation Satellitaire
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-cyber-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Satellite className="w-8 h-8 text-cyber-cyan" />
            </div>
            <h3 className="text-xl font-bold text-lunar-white mb-2">SKY 1</h3>
            <p className="text-nebula-gray mb-4">Satellite de communication</p>
            <div className="inline-block px-4 py-2 bg-cyber-cyan/20 rounded-lg">
              <span className="text-cyber-cyan font-semibold">Opérationnel</span>
            </div>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-cyber-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Satellite className="w-8 h-8 text-cyber-cyan" />
            </div>
            <h3 className="text-xl font-bold text-lunar-white mb-2">SKY 2</h3>
            <p className="text-nebula-gray mb-4">Satellite de connectivité</p>
            <div className="inline-block px-4 py-2 bg-cyber-cyan/20 rounded-lg">
              <span className="text-cyber-cyan font-semibold">Opérationnel</span>
            </div>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 text-center">
            <div className="w-16 h-16 bg-cyber-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Satellite className="w-8 h-8 text-cyber-cyan" />
            </div>
            <h3 className="text-xl font-bold text-lunar-white mb-2">SKY 3</h3>
            <p className="text-nebula-gray mb-4">Satellite d'observation terrestre</p>
            <div className="inline-block px-4 py-2 bg-cyber-cyan/20 rounded-lg">
              <span className="text-cyber-cyan font-semibold">Opérationnel</span>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-midnight-blue/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">
            Rejoignez l'Aventure Spatiale Africaine
          </h2>
          <p className="text-xl text-nebula-gray mb-8">
            Découvrez nos filiales et leurs solutions innovantes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/datasat" className="px-8 py-4 bg-cyber-cyan text-deep-space rounded-lg font-semibold hover:bg-cyber-cyan/90 transition-all shadow-lg shadow-cyber-cyan/20">
              Découvrir DataSAT
            </a>
            <a href="/a-propos/upconnect" className="px-8 py-4 bg-cosmic-blue border-2 border-cyber-cyan text-lunar-white rounded-lg font-semibold hover:bg-cosmic-blue/50 transition-all">
              Découvrir UpConnect
            </a>
          </div>
        </div>
      </Section>
    </>
  )
}
