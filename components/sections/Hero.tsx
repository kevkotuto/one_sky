'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Satellite } from 'lucide-react'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import SpaceBackground from '@/components/ui/SpaceBackground'
import OrbitalRings from '@/components/ui/OrbitalRings'
import GeoGrid from '@/components/ui/GeoGrid'
import AnimatedLogo from '@/components/ui/AnimatedLogo'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-space via-midnight-blue to-deep-space" />

      {/* Animated starfield */}
      <SpaceBackground />

      {/* Orbital rings */}
      <OrbitalRings />

      {/* Geo grid overlay */}
      <GeoGrid />

      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyber-cyan/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-aurora-violet/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <Container className="relative z-10">
        <div className="text-center space-y-8">
          {/* Animated Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center mb-8"
          >
            <AnimatedLogo size={300} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex items-center space-x-2 bg-cosmic-blue/50 backdrop-blur-sm border border-cyber-cyan/30 rounded-full px-6 py-3"
          >
            <Satellite className="w-5 h-5 text-cyber-cyan" />
            <span className="text-lunar-white text-sm font-medium">
              Constellation SKY 1, 2, 3 opérationnelle
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-lunar-white leading-tight"
          >
            Intelligence Géospatiale
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-aurora-violet">
              Décisionnelle
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl md:text-2xl text-nebula-gray max-w-3xl mx-auto"
          >
            Observer la planète pour permettre au monde de décider mieux, plus vite et durablement
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/datasat/poc">
              <Button size="lg" className="group">
                Démarrer un POC
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link href="/solutions">
              <Button size="lg" variant="outline">
                Découvrir nos solutions
              </Button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="pt-12"
          >
            <div className="inline-flex flex-col items-center">
              <span className="text-nebula-gray text-sm mb-2">Faire défiler</span>
              <div className="w-6 h-10 border-2 border-cyber-cyan/30 rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-3 bg-cyber-cyan rounded-full animate-bounce" />
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
