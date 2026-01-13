'use client'

import { motion } from 'framer-motion'
import { Eye, Brain, Zap, Shield, Globe, BarChart3 } from 'lucide-react'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'

const features = [
  {
    icon: <Eye size={32} />,
    title: 'Observation Continue',
    description: 'Surveillance 24/7 de la planète avec notre constellation de 3 satellites en orbite basse (LEO).',
  },
  {
    icon: <Brain size={32} />,
    title: 'Intelligence Artificielle',
    description: 'Analyses automatisées et détection d\'anomalies par IA pour des insights en temps réel.',
  },
  {
    icon: <Zap size={32} />,
    title: 'Réactivité',
    description: 'Alertes instantanées et tableaux de bord en temps réel pour une prise de décision rapide.',
  },
  {
    icon: <Shield size={32} />,
    title: 'Sécurité Souveraine',
    description: 'Infrastructure souveraine et sécurisée pour les données sensibles des États et institutions.',
  },
  {
    icon: <Globe size={32} />,
    title: 'Couverture Globale',
    description: 'Suivi mondial avec capacité de revisite optimisée sur les zones critiques.',
  },
  {
    icon: <BarChart3 size={32} />,
    title: 'Indicateurs Décisionnels',
    description: 'Transformation des données brutes en KPIs actionnables pour vos équipes.',
  },
]

export default function Features() {
  return (
    <Section>
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-lunar-white mb-4"
        >
          Pourquoi choisir ONE SKY
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-xl text-nebula-gray max-w-3xl mx-auto"
        >
          Une plateforme complète pour transformer les données satellitaires en décisions stratégiques
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
