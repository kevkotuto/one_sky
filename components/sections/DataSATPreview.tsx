'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import Section from '@/components/ui/Section'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'
import { DATASAT_PLATFORMS } from '@/lib/constants'

export default function DataSATPreview() {
  return (
    <Section className="bg-midnight-blue/30">
      <div className="text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-cyber-cyan font-semibold text-sm uppercase tracking-wider">
            DataSAT
          </span>
          <h2 className="text-4xl font-bold text-lunar-white mt-4 mb-4">
            Plateformes Décisionnelles Clés en Main
          </h2>
          <p className="text-xl text-nebula-gray max-w-3xl mx-auto">
            Solutions verticales prêtes à déployer pour répondre à vos enjeux métiers spécifiques
          </p>
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {DATASAT_PLATFORMS.slice(0, 6).map((platform, index) => (
          <motion.div
            key={platform.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link href={platform.href}>
              <Card
                title={platform.name}
                description={platform.description}
                className="h-full"
                icon={
                  <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={platform.image}
                      alt={platform.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                }
              />
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link href="/datasat">
          <Button size="lg" variant="outline" className="group">
            Explorer toutes les plateformes
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </motion.div>
    </Section>
  )
}
