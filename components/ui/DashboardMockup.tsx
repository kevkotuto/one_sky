'use client'

import { motion } from 'framer-motion'
import { TrendingUp, AlertTriangle, CheckCircle, Map } from 'lucide-react'

interface DashboardMockupProps {
  title: string
  description: string
  variant?: 'monitoring' | 'analytics' | 'alerts'
}

export default function DashboardMockup({
  title,
  description,
  variant = 'monitoring'
}: DashboardMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-full"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-lunar-white mb-2">{title}</h3>
        <p className="text-nebula-gray">{description}</p>
      </div>

      <div className="relative bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-xl overflow-hidden shadow-2xl">
        {/* Browser chrome */}
        <div className="bg-midnight-blue/80 border-b border-stellar-blue/30 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-alert-orange/50" />
            <div className="w-3 h-3 rounded-full bg-success-green/50" />
            <div className="w-3 h-3 rounded-full bg-cyber-cyan/50" />
          </div>
          <div className="flex-1 bg-deep-space/50 rounded px-3 py-1 text-xs text-nebula-gray/60">
            https://platform.onesky.space/dashboard
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6 space-y-6">
          {/* Header bar */}
          <div className="flex items-center justify-between pb-4 border-b border-stellar-blue/30">
            <div>
              <h4 className="text-lg font-bold text-lunar-white mb-1">Tableau de Bord Principal</h4>
              <p className="text-sm text-nebula-gray">Dernière mise à jour: Il y a 2 minutes</p>
            </div>
            <div className="flex gap-2">
              <div className="px-3 py-1.5 bg-cyber-cyan/20 rounded-lg text-xs text-cyber-cyan font-medium border border-cyber-cyan/30">
                Temps réel
              </div>
            </div>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-midnight-blue/50 rounded-lg p-4 border border-stellar-blue/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-nebula-gray">Zones surveillées</span>
                <Map className="w-4 h-4 text-cyber-cyan" />
              </div>
              <div className="text-2xl font-bold text-lunar-white mb-1">247</div>
              <div className="flex items-center gap-1 text-xs text-success-green">
                <TrendingUp className="w-3 h-3" />
                +12% ce mois
              </div>
            </div>

            <div className="bg-midnight-blue/50 rounded-lg p-4 border border-stellar-blue/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-nebula-gray">Alertes actives</span>
                <AlertTriangle className="w-4 h-4 text-alert-orange" />
              </div>
              <div className="text-2xl font-bold text-lunar-white mb-1">18</div>
              <div className="flex items-center gap-1 text-xs text-alert-orange">
                3 critiques
              </div>
            </div>

            <div className="bg-midnight-blue/50 rounded-lg p-4 border border-stellar-blue/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-nebula-gray">Analyses terminées</span>
                <CheckCircle className="w-4 h-4 text-success-green" />
              </div>
              <div className="text-2xl font-bold text-lunar-white mb-1">1,429</div>
              <div className="flex items-center gap-1 text-xs text-nebula-gray">
                Aujourd'hui
              </div>
            </div>

            <div className="bg-midnight-blue/50 rounded-lg p-4 border border-stellar-blue/20">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-nebula-gray">Couverture</span>
                <TrendingUp className="w-4 h-4 text-cyber-cyan" />
              </div>
              <div className="text-2xl font-bold text-lunar-white mb-1">98.4%</div>
              <div className="flex items-center gap-1 text-xs text-success-green">
                Optimal
              </div>
            </div>
          </div>

          {/* Main content area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map preview */}
            <div className="lg:col-span-2 bg-midnight-blue/30 rounded-lg p-4 border border-stellar-blue/20 relative overflow-hidden min-h-[300px]">
              <h5 className="text-sm font-semibold text-lunar-white mb-4">Vue Géographique</h5>

              {/* Simulated map with pins */}
              <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue/50 to-midnight-blue/50">
                <div className="absolute inset-0" style={{
                  backgroundImage: `
                    linear-gradient(to right, #1B263B 1px, transparent 1px),
                    linear-gradient(to bottom, #1B263B 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
                  opacity: 0.2
                }} />

                {/* Simulated markers */}
                <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-success-green shadow-lg shadow-success-green/50 animate-pulse" />
                <div className="absolute top-1/2 right-1/4 w-3 h-3 rounded-full bg-cyber-cyan shadow-lg shadow-cyber-cyan/50 animate-pulse" />
                <div className="absolute bottom-1/3 left-1/2 w-3 h-3 rounded-full bg-alert-orange shadow-lg shadow-alert-orange/50 animate-pulse" />

                {/* Coverage overlay */}
                <div className="absolute top-1/3 left-1/4 w-32 h-32 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/30" />
              </div>
            </div>

            {/* Recent alerts */}
            <div className="bg-midnight-blue/30 rounded-lg p-4 border border-stellar-blue/20">
              <h5 className="text-sm font-semibold text-lunar-white mb-4">Alertes Récentes</h5>
              <div className="space-y-3">
                <div className="flex gap-3 p-2 bg-alert-orange/10 rounded border-l-2 border-alert-orange">
                  <AlertTriangle className="w-4 h-4 text-alert-orange flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-lunar-white font-medium truncate">Changement détecté</p>
                    <p className="text-xs text-nebula-gray truncate">Zone #A47 - Il y a 5 min</p>
                  </div>
                </div>

                <div className="flex gap-3 p-2 bg-success-green/10 rounded border-l-2 border-success-green">
                  <CheckCircle className="w-4 h-4 text-success-green flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-lunar-white font-medium truncate">Analyse complétée</p>
                    <p className="text-xs text-nebula-gray truncate">Zone #B12 - Il y a 12 min</p>
                  </div>
                </div>

                <div className="flex gap-3 p-2 bg-cyber-cyan/10 rounded border-l-2 border-cyber-cyan">
                  <TrendingUp className="w-4 h-4 text-cyber-cyan flex-shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-lunar-white font-medium truncate">Nouvelle donnée</p>
                    <p className="text-xs text-nebula-gray truncate">SKY-3 - Il y a 18 min</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart area */}
          <div className="bg-midnight-blue/30 rounded-lg p-4 border border-stellar-blue/20">
            <h5 className="text-sm font-semibold text-lunar-white mb-4">Activité sur 7 jours</h5>
            <div className="h-32 flex items-end justify-between gap-2">
              {[65, 78, 52, 89, 95, 73, 85].map((height, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-cyber-cyan to-cyber-cyan/50 rounded-t transition-all hover:from-cyber-cyan/80"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-xs text-nebula-gray">J+{i}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
