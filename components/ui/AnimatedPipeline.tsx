'use client'

import { motion } from 'framer-motion'
import { Satellite, Download, Cpu, TrendingUp, Database, ArrowRight } from 'lucide-react'

const steps = [
  {
    icon: Satellite,
    title: 'Acquisition',
    subtitle: 'Capture satellitaire',
    description: 'Images haute résolution depuis l'orbite LEO',
    details: ['Planning des prises de vue', 'Collecte des données', 'Transmission sol']
  },
  {
    icon: Download,
    title: 'Réception',
    subtitle: 'Station au sol',
    description: 'Téléchargement et validation des données',
    details: ['Réception multi-bande', 'Contrôle qualité', 'Stockage sécurisé']
  },
  {
    icon: Cpu,
    title: 'Traitement',
    subtitle: 'Pipeline industrialisé',
    description: 'Normalisation et harmonisation',
    details: ['Corrections radiométriques', 'Orthorectification', 'Calibration']
  },
  {
    icon: TrendingUp,
    title: 'Analyse',
    subtitle: 'Intelligence IA',
    description: 'Extraction automatique d'informations',
    details: ['Détection d'objets', 'Classification', 'Détection de changements']
  },
  {
    icon: Database,
    title: 'Structuration',
    subtitle: 'Data engineering',
    description: 'Organisation et indexation',
    details: ['Métadonnées géospatiales', 'Gestion temporelle', 'Traçabilité complète']
  },
  {
    icon: ArrowRight,
    title: 'Diffusion',
    subtitle: 'Livraison',
    description: 'APIs, dashboards et exports',
    details: ['Intégration SI', 'Portails web', 'Formats standards']
  }
]

export default function AnimatedPipeline() {
  return (
    <div className="relative py-12">
      {/* Connection line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent hidden lg:block" />

      {/* Animated flow particles */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 overflow-hidden hidden lg:block">
        <motion.div
          className="w-full h-full"
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'linear'
          }}
        >
          <div className="h-full bg-gradient-to-r from-transparent via-cyber-cyan to-transparent" style={{ width: '20%' }} />
        </motion.div>
      </div>

      {/* Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 lg:gap-4 relative">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Connection arrow (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden xl:block absolute top-1/2 -right-4 z-10 -translate-y-1/2">
                <ArrowRight className="w-6 h-6 text-cyber-cyan/50 group-hover:text-cyber-cyan transition-colors" />
              </div>
            )}

            <div className="relative bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 h-full transition-all duration-300 hover:border-cyber-cyan/50 hover:shadow-lg hover:shadow-cyber-cyan/20 hover:-translate-y-1">
              {/* Step number */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan text-sm font-bold">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-4 p-3 bg-cyber-cyan/10 rounded-lg w-fit group-hover:bg-cyber-cyan/20 transition-colors">
                <step.icon className="w-6 h-6 text-cyber-cyan" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-lunar-white mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-cyber-cyan mb-3 font-medium">
                {step.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-nebula-gray mb-4 leading-relaxed">
                {step.description}
              </p>

              {/* Details */}
              <ul className="space-y-2">
                {step.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-nebula-gray/80">
                    <div className="w-1 h-1 rounded-full bg-cyber-cyan/50 mt-1.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Pulse effect on hover */}
              <div className="absolute inset-0 rounded-xl bg-cyber-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom summary */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <p className="text-nebula-gray text-sm max-w-3xl mx-auto">
          De la capture satellitaire à la livraison d'intelligence exploitable, chaque étape est optimisée pour garantir
          <span className="text-cyber-cyan font-semibold"> qualité, traçabilité et rapidité</span>.
        </p>
      </motion.div>
    </div>
  )
}
