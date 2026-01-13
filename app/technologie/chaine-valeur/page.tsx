import PageHeader from '@/components/ui/PageHeader'
import Section from '@/components/ui/Section'
import AnimatedPipeline from '@/components/ui/AnimatedPipeline'
import { Shield, Clock, CheckCircle } from 'lucide-react'

export default function ChaineValeurPage() {
  return (
    <>
      <PageHeader
        subtitle="TECHNOLOGIE"
        title="Chaîne de Valeur de la Donnée"
        description="Du capteur satellitaire à l'insight décisionnel : notre pipeline industrialisé garantit qualité, traçabilité et rapidité."
      />

      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-lunar-white mb-4">
            Pipeline de Traitement Bout en Bout
          </h2>
          <p className="text-nebula-gray text-lg max-w-3xl mx-auto">
            Chaque étape de notre chaîne de valeur est optimisée pour transformer la donnée brute satellitaire
            en intelligence exploitable, avec des garanties de qualité et de traçabilité à chaque niveau.
          </p>
        </div>

        <AnimatedPipeline />
      </Section>

      <Section className="bg-midnight-blue/30">
        <h2 className="text-3xl font-bold text-lunar-white mb-12 text-center">
          Garanties de notre Pipeline
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-8 text-center hover:border-cyber-cyan/50 transition-all">
            <div className="inline-flex p-4 bg-cyber-cyan/10 rounded-full mb-4">
              <CheckCircle className="w-8 h-8 text-cyber-cyan" />
            </div>
            <h3 className="text-xl font-bold text-lunar-white mb-3">Qualité Garantie</h3>
            <p className="text-nebula-gray leading-relaxed mb-4">
              Contrôles qualité automatiques à chaque étape avec métriques de validation
              et rejection des données non conformes.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-between px-3 py-2 bg-midnight-blue/50 rounded">
                <span className="text-nebula-gray">Précision radiométrique</span>
                <span className="text-cyber-cyan font-semibold">&gt;95%</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-midnight-blue/50 rounded">
                <span className="text-nebula-gray">Précision géométrique</span>
                <span className="text-cyber-cyan font-semibold">&lt;1m</span>
              </div>
            </div>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-8 text-center hover:border-cyber-cyan/50 transition-all">
            <div className="inline-flex p-4 bg-cyber-cyan/10 rounded-full mb-4">
              <Shield className="w-8 h-8 text-cyber-cyan" />
            </div>
            <h3 className="text-xl font-bold text-lunar-white mb-3">Traçabilité Complète</h3>
            <p className="text-nebula-gray leading-relaxed mb-4">
              Chaque donnée est tracée depuis sa capture jusqu'à sa livraison avec
              métadonnées complètes et versioning.
            </p>
            <ul className="text-sm text-nebula-gray space-y-2 text-left">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Identifiant unique par acquisition</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Historique des transformations</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mt-1.5 flex-shrink-0" />
                <span>Lignage complet des données</span>
              </li>
            </ul>
          </div>

          <div className="bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-8 text-center hover:border-cyber-cyan/50 transition-all">
            <div className="inline-flex p-4 bg-cyber-cyan/10 rounded-full mb-4">
              <Clock className="w-8 h-8 text-cyber-cyan" />
            </div>
            <h3 className="text-xl font-bold text-lunar-white mb-3">Rapidité d'Exécution</h3>
            <p className="text-nebula-gray leading-relaxed mb-4">
              Pipeline optimisé pour minimiser le temps entre la capture satellitaire
              et la livraison des insights.
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <div className="flex items-center justify-between px-3 py-2 bg-midnight-blue/50 rounded">
                <span className="text-nebula-gray">Traitement L1</span>
                <span className="text-cyber-cyan font-semibold">&lt;1h</span>
              </div>
              <div className="flex items-center justify-between px-3 py-2 bg-midnight-blue/50 rounded">
                <span className="text-nebula-gray">Analyse IA complète</span>
                <span className="text-cyber-cyan font-semibold">&lt;4h</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-lunar-white mb-6">Pipeline Industrialisé</h2>
          <p className="text-xl text-nebula-gray mb-8 max-w-2xl mx-auto">
            Notre infrastructure traite des millions d'images par an avec une disponibilité
            supérieure à 99.9% et des SLAs garantis pour les clients critiques.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">2M+</div>
              <div className="text-sm text-nebula-gray">Images traitées/an</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">99.9%</div>
              <div className="text-sm text-nebula-gray">Disponibilité</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">&lt;4h</div>
              <div className="text-sm text-nebula-gray">Latence moyenne</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-cyber-cyan mb-2">24/7</div>
              <div className="text-sm text-nebula-gray">Support technique</div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}
