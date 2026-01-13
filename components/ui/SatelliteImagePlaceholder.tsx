'use client'

import { useEffect, useRef } from 'react'

interface SatelliteImagePlaceholderProps {
  type: 'urban' | 'forest' | 'agriculture' | 'maritime' | 'energy' | 'infrastructure'
  showDetections?: boolean
  width?: number
  height?: number
}

export default function SatelliteImagePlaceholder({
  type,
  showDetections = false,
  width = 600,
  height = 400
}: SatelliteImagePlaceholderProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Base colors by type
    const colorSchemes = {
      urban: {
        base: ['#4A5568', '#2D3748', '#1A202C', '#718096'],
        accent: '#CBD5E0',
        roads: '#E2E8F0'
      },
      forest: {
        base: ['#2F855A', '#276749', '#22543D', '#38A169'],
        accent: '#9AE6B4',
        roads: '#C6F6D5'
      },
      agriculture: {
        base: ['#D69E2E', '#B7791F', '#975A16', '#ECC94B'],
        accent: '#F6E05E',
        roads: '#FBD38D'
      },
      maritime: {
        base: ['#2C5282', '#2A4365', '#1A365D', '#3182CE'],
        accent: '#63B3ED',
        roads: '#90CDF4'
      },
      energy: {
        base: ['#4C1D95', '#5B21B6', '#6B21A8', '#7C3AED'],
        accent: '#A78BFA',
        roads: '#C4B5FD'
      },
      infrastructure: {
        base: ['#744210', '#8B5CF6', '#92400E', '#A16207'],
        accent: '#FCD34D',
        roads: '#FDE68A'
      }
    }

    const colors = colorSchemes[type]

    // Draw base terrain
    ctx.fillStyle = colors.base[0]
    ctx.fillRect(0, 0, width, height)

    // Add noise/texture
    for (let i = 0; i < 2000; i++) {
      const x = Math.random() * width
      const y = Math.random() * height
      const size = Math.random() * 3
      const colorIndex = Math.floor(Math.random() * colors.base.length)
      ctx.fillStyle = colors.base[colorIndex]
      ctx.globalAlpha = 0.3
      ctx.fillRect(x, y, size, size)
    }
    ctx.globalAlpha = 1.0

    // Draw terrain features based on type
    if (type === 'urban' || type === 'infrastructure') {
      // Buildings/blocks
      for (let i = 0; i < 40; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const w = 20 + Math.random() * 60
        const h = 20 + Math.random() * 60
        ctx.fillStyle = colors.base[Math.floor(Math.random() * 2) + 1]
        ctx.fillRect(x, y, w, h)

        // Building outline
        ctx.strokeStyle = colors.accent
        ctx.lineWidth = 1
        ctx.strokeRect(x, y, w, h)
      }

      // Roads
      ctx.strokeStyle = colors.roads
      ctx.lineWidth = 3
      for (let i = 0; i < 8; i++) {
        ctx.beginPath()
        if (Math.random() > 0.5) {
          // Vertical
          const x = Math.random() * width
          ctx.moveTo(x, 0)
          ctx.lineTo(x, height)
        } else {
          // Horizontal
          const y = Math.random() * height
          ctx.moveTo(0, y)
          ctx.lineTo(width, y)
        }
        ctx.stroke()
      }
    } else if (type === 'forest') {
      // Tree clusters
      for (let i = 0; i < 60; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        const radius = 15 + Math.random() * 30
        const colorIndex = Math.floor(Math.random() * colors.base.length)
        ctx.fillStyle = colors.base[colorIndex]
        ctx.beginPath()
        ctx.arc(x, y, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Clearings/paths
      ctx.strokeStyle = colors.roads
      ctx.lineWidth = 8
      ctx.globalAlpha = 0.6
      for (let i = 0; i < 3; i++) {
        ctx.beginPath()
        const startX = Math.random() * width
        const startY = Math.random() * height
        ctx.moveTo(startX, startY)
        for (let j = 0; j < 5; j++) {
          ctx.lineTo(
            startX + (Math.random() - 0.5) * 200,
            startY + (Math.random() - 0.5) * 200
          )
        }
        ctx.stroke()
      }
      ctx.globalAlpha = 1.0
    } else if (type === 'agriculture') {
      // Agricultural parcels
      const rows = 6
      const cols = 8
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          const x = (col * width) / cols
          const y = (row * height) / rows
          const w = width / cols - 4
          const h = height / rows - 4
          const colorIndex = Math.floor(Math.random() * colors.base.length)
          ctx.fillStyle = colors.base[colorIndex]
          ctx.fillRect(x + 2, y + 2, w, h)

          // Parcel lines
          ctx.strokeStyle = colors.roads
          ctx.lineWidth = 2
          ctx.strokeRect(x + 2, y + 2, w, h)
        }
      }
    } else if (type === 'maritime') {
      // Water with wave pattern
      ctx.fillStyle = colors.base[0]
      ctx.fillRect(0, 0, width, height)

      // Waves
      ctx.strokeStyle = colors.base[2]
      ctx.lineWidth = 2
      ctx.globalAlpha = 0.4
      for (let i = 0; i < 20; i++) {
        ctx.beginPath()
        const y = (i * height) / 20
        ctx.moveTo(0, y)
        for (let x = 0; x < width; x += 20) {
          ctx.lineTo(x + 10, y + Math.sin(x * 0.1) * 5)
          ctx.lineTo(x + 20, y)
        }
        ctx.stroke()
      }
      ctx.globalAlpha = 1.0

      // Boats/vessels
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        ctx.fillStyle = colors.accent
        ctx.fillRect(x, y, 8, 4)
      }
    } else if (type === 'energy') {
      // Energy infrastructure (solar panels, wind turbines)
      // Solar panel arrays
      for (let i = 0; i < 30; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        ctx.fillStyle = colors.base[2]
        ctx.fillRect(x, y, 15, 10)
        ctx.strokeStyle = colors.accent
        ctx.lineWidth = 1
        ctx.strokeRect(x, y, 15, 10)
      }

      // Pylons/towers
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * width
        const y = Math.random() * height
        ctx.fillStyle = colors.roads
        ctx.fillRect(x - 2, y - 2, 4, 4)
      }
    }

    // Add detection boxes if enabled
    if (showDetections) {
      const detectionCount = type === 'urban' ? 8 : type === 'forest' ? 6 : 5
      const detectionColors = ['#00D4FF', '#00FF96', '#FF6B35']

      for (let i = 0; i < detectionCount; i++) {
        const x = 50 + Math.random() * (width - 150)
        const y = 50 + Math.random() * (height - 150)
        const w = 60 + Math.random() * 80
        const h = 60 + Math.random() * 80
        const color = detectionColors[i % detectionColors.length]

        // Detection box
        ctx.strokeStyle = color
        ctx.lineWidth = 3
        ctx.strokeRect(x, y, w, h)

        // Corner markers
        const markerSize = 10
        ctx.fillStyle = color
        // Top-left
        ctx.fillRect(x - 2, y - 2, markerSize, 4)
        ctx.fillRect(x - 2, y - 2, 4, markerSize)
        // Top-right
        ctx.fillRect(x + w - markerSize + 2, y - 2, markerSize, 4)
        ctx.fillRect(x + w - 2, y - 2, 4, markerSize)
        // Bottom-left
        ctx.fillRect(x - 2, y + h - 2, markerSize, 4)
        ctx.fillRect(x - 2, y + h - markerSize + 2, 4, markerSize)
        // Bottom-right
        ctx.fillRect(x + w - markerSize + 2, y + h - 2, markerSize, 4)
        ctx.fillRect(x + w - 2, y + h - markerSize + 2, 4, markerSize)

        // Label
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
        ctx.fillRect(x + 4, y + 4, 60, 20)
        ctx.fillStyle = color
        ctx.font = '12px monospace'
        ctx.fillText(`#${i + 1} 92%`, x + 8, y + 17)
      }
    }

    // Add metadata overlay
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)'
    ctx.fillRect(10, 10, 180, 60)
    ctx.fillStyle = '#00D4FF'
    ctx.font = 'bold 11px monospace'
    ctx.fillText('ONE SKY', 20, 28)
    ctx.fillStyle = '#E0E1DD'
    ctx.font = '10px monospace'
    const date = new Date().toISOString().split('T')[0]
    ctx.fillText(`Date: ${date}`, 20, 43)
    ctx.fillText(`Resolution: 25cm`, 20, 58)

  }, [type, showDetections, width, height])

  return (
    <div className="relative inline-block">
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="rounded-lg border border-stellar-blue/30 shadow-xl"
      />
      {showDetections && (
        <div className="absolute bottom-4 right-4 bg-midnight-blue/90 backdrop-blur-sm px-3 py-2 rounded-lg border border-cyber-cyan/30">
          <div className="text-xs text-lunar-white font-medium mb-1">Détections IA</div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 rounded-full bg-[#00D4FF]" />
            <span className="text-nebula-gray">Objets identifiés</span>
          </div>
        </div>
      )}
    </div>
  )
}
