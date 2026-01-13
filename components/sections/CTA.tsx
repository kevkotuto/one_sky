'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, MessageSquare } from 'lucide-react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

export default function CTA() {
  return (
    <Section className="bg-gradient-to-r from-cosmic-blue via-midnight-blue to-cosmic-blue">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-br from-cyber-cyan/10 to-aurora-violet/10 border border-cyber-cyan/30 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center"
      >
        <h2 className="text-4xl font-bold text-lunar-white mb-6">
          Prêt à transformer vos données en décisions ?
        </h2>
        <p className="text-xl text-nebula-gray mb-8 max-w-2xl mx-auto">
          Discutons de vos enjeux et découvrez comment ONE SKY peut accélérer votre transformation digitale
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/datasat/poc">
            <Button size="lg" className="group">
              Lancer un POC gratuit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="group">
              <MessageSquare className="mr-2 w-5 h-5" />
              Contacter un expert
            </Button>
          </Link>
        </div>
      </motion.div>
    </Section>
  )
}
