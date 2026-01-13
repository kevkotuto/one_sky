'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import Container from './Container'

interface PageHeaderProps {
  title: string
  subtitle?: string
  description?: string
  badge?: string
  children?: ReactNode
}

export default function PageHeader({ title, subtitle, description, badge, children }: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-blue via-deep-space to-deep-space" />
      
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-cyan/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-aurora-violet/5 rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl"
        >
          {badge && (
            <div className="inline-flex items-center bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-full px-4 py-2 mb-6">
              <span className="text-cyber-cyan text-sm font-medium">{badge}</span>
            </div>
          )}
          
          {subtitle && (
            <p className="text-cyber-cyan font-semibold text-sm uppercase tracking-wider mb-4">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-5xl md:text-6xl font-bold text-lunar-white mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-xl text-nebula-gray leading-relaxed">
              {description}
            </p>
          )}
          
          {children}
        </motion.div>
      </Container>
    </section>
  )
}
