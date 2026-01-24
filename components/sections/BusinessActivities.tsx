'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Satellite, Globe, Wifi } from 'lucide-react'
import Section from '@/components/ui/Section'

const activities = [
  {
    id: 'onesky',
    title: 'OnesSKY',
    subtitle: 'Acteur clé de la nouvelle économie spatiale',
    description: "Nous intervenons dans le domaine de l'imagerie satellite, spécialisée dans la fourniture de données géospatiales. Grace à son satellite SKY3, OnesSKY capture des images quotidiennes de l'ensemble de la surface terrestre africaine, permettant un suivi précis et en temps réel.",
    icon: <Satellite className="w-12 h-12" />,
    href: '/a-propos/onesky',
    color: 'from-cyber-cyan to-aurora-violet'
  },
  {
    id: 'datasat',
    title: 'DataSAT',
    subtitle: 'Intelligence Artificielle & Imagerie Satellite',
    description: "DataSAT est une filiale de la société Ones-SKY spécialisée dans la mise en place de solutions basées sur l'Intelligence Artificielle et l'imagerie par satellite. Elle intervient en Afrique dans la distribution des produits d'imagerie satellitaires.",
    icon: <Globe className="w-12 h-12" />,
    href: '/datasat',
    color: 'from-aurora-violet to-cyber-cyan'
  },
  {
    id: 'upconnect',
    title: 'UpConnect',
    subtitle: 'Connectivité Haut Débit par Satellite',
    description: "OnesSKY se spécialise également dans la fourniture d'accès à Internet haut débit par satellite via une constellation en orbite basse (LEO). Notre objectif est de connecter les régions les plus reculées d'Afrique en offrant des services de connectivité fiable et à faible latence.",
    icon: <Wifi className="w-12 h-12" />,
    href: '/a-propos/upconnect',
    color: 'from-cyber-cyan to-stellar-blue'
  }
]

export default function BusinessActivities() {
  return (
    <Section className="bg-gradient-to-b from-deep-space via-midnight-blue/50 to-deep-space">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-lunar-white mb-4">
            Nos Domaines d'Activité
          </h2>
          <p className="text-xl text-nebula-gray max-w-3xl mx-auto">
            OnesSKY et ses filiales au cœur des données et services par satellites, à l'écoute de l'Afrique
          </p>
        </motion.div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {activities.map((activity, index) => (
          <motion.div
            key={activity.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={activity.href}>
              <div className="group relative bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-2xl p-8 h-full hover:border-cyber-cyan/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyber-cyan/10 hover:-translate-y-2">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${activity.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`} />

                {/* Icon */}
                <div className="relative mb-6 text-cyber-cyan">
                  {activity.icon}
                </div>

                {/* Content */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-lunar-white mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-cyber-cyan font-semibold mb-4 uppercase tracking-wider">
                    {activity.subtitle}
                  </p>
                  <p className="text-nebula-gray leading-relaxed mb-6">
                    {activity.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center text-cyber-cyan font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    <span>En savoir plus</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
