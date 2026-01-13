'use client'

import { motion } from 'framer-motion'
import { Satellite, Radio, Camera, Zap } from 'lucide-react'

interface SatelliteCardProps {
  name: string
  purpose: string
  specs: {
    label: string
    value: string
  }[]
  status: 'operational' | 'planned'
  icon?: 'communication' | 'observation'
  delay?: number
}

export default function SatelliteCard({
  name,
  purpose,
  specs,
  status,
  icon = 'communication',
  delay = 0
}: SatelliteCardProps) {
  const IconComponent = icon === 'observation' ? Camera : Radio

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative group"
    >
      <div className="relative bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl p-6 transition-all duration-300 hover:border-cyber-cyan/50 hover:shadow-lg hover:shadow-cyber-cyan/20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 to-aurora-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Orbital ring animation */}
        <div className="absolute top-4 right-4 w-16 h-16 opacity-30 group-hover:opacity-60 transition-opacity">
          <div className="absolute inset-0 border-2 border-cyber-cyan rounded-full animate-ping" style={{ animationDuration: '3s' }} />
          <div className="absolute inset-2 border border-cyber-cyan/50 rounded-full" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Satellite className="w-5 h-5 text-cyber-cyan" />
                <h3 className="text-2xl font-bold text-lunar-white">{name}</h3>
              </div>
              <div className="flex items-center gap-2">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  status === 'operational'
                    ? 'bg-success-green/20 text-success-green border border-success-green/50'
                    : 'bg-aurora-violet/20 text-aurora-violet border border-aurora-violet/50'
                }`}>
                  {status === 'operational' ? 'Opérationnel' : 'Planifié'}
                </div>
              </div>
            </div>

            <div className="p-3 bg-cyber-cyan/10 rounded-lg group-hover:bg-cyber-cyan/20 transition-colors">
              <IconComponent className="w-6 h-6 text-cyber-cyan" />
            </div>
          </div>

          {/* Purpose */}
          <p className="text-nebula-gray mb-6 leading-relaxed">
            {purpose}
          </p>

          {/* Specifications */}
          <div className="space-y-3">
            {specs.map((spec, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-midnight-blue/50 rounded-lg group-hover:bg-midnight-blue/70 transition-colors"
              >
                <span className="text-sm text-nebula-gray">{spec.label}</span>
                <span className="text-sm font-semibold text-lunar-white">{spec.value}</span>
              </div>
            ))}
          </div>

          {/* Visual indicator */}
          <div className="mt-6 pt-4 border-t border-stellar-blue/30">
            <div className="flex items-center gap-2 text-xs text-cyber-cyan">
              <Zap className="w-4 h-4" />
              <span>Orbite LEO - Couverture globale</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
