'use client'

import { motion } from 'framer-motion'
import { STATISTICS } from '@/lib/constants'
import Section from '@/components/ui/Section'

export default function Stats() {
  return (
    <Section className="bg-midnight-blue/50">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATISTICS.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl md:text-5xl font-bold text-cyber-cyan mb-2">
              {stat.value}
            </div>
            <div className="text-lg font-semibold text-lunar-white mb-1">
              {stat.label}
            </div>
            <div className="text-sm text-nebula-gray">
              {stat.sublabel}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
