'use client'

import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

interface BeforeAfterSliderProps {
  title: string
  description: string
  beforeLabel?: string
  afterLabel?: string
  beforeImage?: string
  afterImage?: string
  stats?: {
    detected?: number
    precision?: number
    changes?: number
  }
}

export default function BeforeAfterSlider({
  title,
  description,
  beforeLabel = 'Avant',
  afterLabel = 'Après',
  beforeImage,
  afterImage,
  stats = { detected: 127, precision: 94, changes: 12 }
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percent = (x / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, percent)))
  }

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX)
    }
  }

  const handleTouchMove = (e: TouchEvent) => {
    if (isDragging && e.touches[0]) {
      handleMove(e.touches[0].clientX)
    }
  }

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove)
      document.addEventListener('mouseup', () => setIsDragging(false))
      document.addEventListener('touchmove', handleTouchMove)
      document.addEventListener('touchend', () => setIsDragging(false))

      return () => {
        document.removeEventListener('mousemove', handleMouseMove)
        document.removeEventListener('mouseup', () => setIsDragging(false))
        document.removeEventListener('touchmove', handleTouchMove)
        document.removeEventListener('touchend', () => setIsDragging(false))
      }
    }
  }, [isDragging])

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

      <div
        ref={containerRef}
        className="relative w-full aspect-video bg-cosmic-blue rounded-xl overflow-hidden cursor-ew-resize select-none border border-stellar-blue/30"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Before Image */}
        <div className="absolute inset-0 bg-midnight-blue">
          {beforeImage ? (
            <img
              src={beforeImage}
              alt="État initial"
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0" style={{
                backgroundImage: `
                  linear-gradient(to right, #1B263B 1px, transparent 1px),
                  linear-gradient(to bottom, #1B263B 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                opacity: 0.3
              }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🛰️</div>
                  <div className="text-nebula-gray font-medium">Image Satellite - État Initial</div>
                  <div className="text-sm text-nebula-gray/60 mt-2">Zone observée sans traitement</div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* After Image */}
        <div
          className="absolute inset-0 bg-cosmic-blue"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          {afterImage ? (
            <>
              <img
                src={afterImage}
                alt="Avec analyse IA"
                className="w-full h-full object-cover"
              />
              {/* Overlay de détection */}
              <div className="absolute inset-0 bg-cyber-cyan/10" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-cosmic-blue to-midnight-blue">
              {/* Detection boxes simulation */}
              <div className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-cyber-cyan rounded" />
              <div className="absolute top-1/3 right-1/3 w-16 h-16 border-2 border-success-green rounded" />
              <div className="absolute bottom-1/3 left-1/2 w-24 h-24 border-2 border-alert-orange rounded" />

              {/* Heatmap effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/20 via-transparent to-aurora-violet/20" />

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <div className="text-lunar-white font-medium">Analyse IA Appliquée</div>
                  <div className="text-sm text-cyber-cyan mt-2">Détections et classifications</div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-cyber-cyan cursor-ew-resize z-20"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-cyber-cyan rounded-full shadow-lg shadow-cyber-cyan/50 flex items-center justify-center border-4 border-deep-space">
            <div className="flex gap-1">
              <div className="w-0.5 h-4 bg-deep-space" />
              <div className="w-0.5 h-4 bg-deep-space" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-3 py-1.5 bg-deep-space/80 backdrop-blur-sm rounded-full text-sm font-medium text-lunar-white border border-stellar-blue/30">
          {beforeLabel}
        </div>
        <div
          className="absolute top-4 right-4 px-3 py-1.5 bg-cyber-cyan/20 backdrop-blur-sm rounded-full text-sm font-medium text-cyber-cyan border border-cyber-cyan/50"
          style={{ opacity: sliderPosition > 70 ? 1 : 0.3, transition: 'opacity 0.2s' }}
        >
          {afterLabel}
        </div>

        {/* Instruction hint */}
        {!isDragging && sliderPosition === 50 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-deep-space/80 backdrop-blur-sm rounded-full text-xs text-nebula-gray border border-stellar-blue/30"
          >
            ← Glissez pour comparer →
          </motion.div>
        )}
      </div>

      {/* Stats */}
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="text-center p-3 bg-cosmic-blue/30 rounded-lg">
          <div className="text-cyber-cyan font-bold text-lg">{stats.detected}</div>
          <div className="text-xs text-nebula-gray">Objets détectés</div>
        </div>
        <div className="text-center p-3 bg-cosmic-blue/30 rounded-lg">
          <div className="text-success-green font-bold text-lg">{stats.precision}%</div>
          <div className="text-xs text-nebula-gray">Précision</div>
        </div>
        <div className="text-center p-3 bg-cosmic-blue/30 rounded-lg">
          <div className="text-aurora-violet font-bold text-lg">{stats.changes}</div>
          <div className="text-xs text-nebula-gray">Changements</div>
        </div>
      </div>
    </motion.div>
  )
}
