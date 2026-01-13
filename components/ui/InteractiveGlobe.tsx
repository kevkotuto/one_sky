'use client'

import { useEffect, useRef } from 'react'

interface InteractiveGlobeProps {
  size?: number
  showSatellites?: boolean
  showCoverage?: boolean
}

export default function InteractiveGlobe({
  size = 400,
  showSatellites = true,
  showCoverage = true
}: InteractiveGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let rotation = 0

    const drawGlobe = () => {
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2
      const radius = size / 2 - 20

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw globe shadow/glow
      const glow = ctx.createRadialGradient(centerX, centerY, radius * 0.5, centerX, centerY, radius * 1.2)
      glow.addColorStop(0, 'rgba(0, 212, 255, 0.1)')
      glow.addColorStop(1, 'rgba(0, 212, 255, 0)')
      ctx.fillStyle = glow
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius * 1.2, 0, Math.PI * 2)
      ctx.fill()

      // Draw main globe - Ocean (Earth's blue)
      const oceanGradient = ctx.createRadialGradient(
        centerX - radius * 0.4,
        centerY - radius * 0.4,
        0,
        centerX,
        centerY,
        radius
      )
      oceanGradient.addColorStop(0, '#2B5F8F')  // Lighter blue in light
      oceanGradient.addColorStop(0.5, '#1A4D6E') // Mid ocean blue
      oceanGradient.addColorStop(1, '#0D2840')   // Darker blue in shadow

      ctx.fillStyle = oceanGradient
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.fill()

      // Draw simplified continents (Africa, Europe visible)
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation * 0.5) // Continents rotate with globe

      // Africa
      ctx.fillStyle = '#2D5A3D' // Dark green for land
      ctx.beginPath()
      ctx.ellipse(radius * 0.1, radius * 0.1, radius * 0.35, radius * 0.5, 0.3, 0, Math.PI * 2)
      ctx.fill()

      // Europe
      ctx.beginPath()
      ctx.ellipse(-radius * 0.3, -radius * 0.45, radius * 0.25, radius * 0.2, -0.3, 0, Math.PI * 2)
      ctx.fill()

      // North Africa / Sahara (lighter brown)
      ctx.fillStyle = '#5C4D3C'
      ctx.beginPath()
      ctx.ellipse(radius * 0.05, -radius * 0.15, radius * 0.3, radius * 0.25, 0.2, 0, Math.PI * 2)
      ctx.fill()

      // Add some terrain variation (mountain ranges, etc.)
      ctx.fillStyle = '#3D6A4D' // Slightly lighter green
      ctx.globalAlpha = 0.6
      ctx.beginPath()
      ctx.ellipse(radius * 0.15, radius * 0.3, radius * 0.15, radius * 0.2, 0, 0, Math.PI * 2)
      ctx.fill()
      ctx.globalAlpha = 1.0

      ctx.restore()

      // Draw clouds for realism
      ctx.fillStyle = 'rgba(255, 255, 255, 0.15)'
      ctx.save()
      ctx.translate(centerX, centerY)
      ctx.rotate(rotation * 0.8) // Clouds rotate faster

      // Cloud patches
      ctx.beginPath()
      ctx.ellipse(radius * 0.4, -radius * 0.3, radius * 0.2, radius * 0.15, 0.5, 0, Math.PI * 2)
      ctx.fill()

      ctx.beginPath()
      ctx.ellipse(-radius * 0.5, radius * 0.2, radius * 0.25, radius * 0.18, -0.3, 0, Math.PI * 2)
      ctx.fill()

      ctx.restore()

      // Draw globe outline with cyan glow
      ctx.strokeStyle = '#00D4FF'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
      ctx.stroke()

      // Draw latitude lines (more subtle)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)'
      ctx.lineWidth = 0.5
      for (let i = -2; i <= 2; i++) {
        const y = centerY + (i * radius) / 3
        const width = Math.sqrt(radius * radius - ((i * radius) / 3) ** 2)
        ctx.beginPath()
        ctx.ellipse(centerX, y, width, width * 0.15, 0, 0, Math.PI * 2)
        ctx.stroke()
      }

      // Draw longitude lines (rotating, more subtle)
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 + rotation
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(angle)
        ctx.beginPath()
        ctx.ellipse(0, 0, radius * 0.3, radius, 0, 0, Math.PI * 2)
        ctx.stroke()
        ctx.restore()
      }

      // Draw coverage zones if enabled
      if (showCoverage) {
        ctx.save()
        ctx.translate(centerX, centerY)
        ctx.rotate(rotation * 0.5) // Rotate with continents

        // Africa coverage
        ctx.fillStyle = 'rgba(0, 255, 150, 0.2)'
        ctx.strokeStyle = 'rgba(0, 255, 150, 0.4)'
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.ellipse(radius * 0.1, radius * 0.15, radius * 0.45, radius * 0.55, 0.3, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        // Europe coverage
        ctx.fillStyle = 'rgba(0, 212, 255, 0.2)'
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.4)'
        ctx.beginPath()
        ctx.ellipse(-radius * 0.3, -radius * 0.45, radius * 0.3, radius * 0.25, -0.3, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()

        ctx.restore()
      }

      // Draw satellites if enabled
      if (showSatellites) {
        // SKY 1 - Cyan
        const sat1X = centerX + Math.cos(rotation) * (radius + 50)
        const sat1Y = centerY + Math.sin(rotation) * (radius + 50) * 0.3

        // Glow
        ctx.shadowBlur = 20
        ctx.shadowColor = '#00D4FF'
        ctx.fillStyle = '#00D4FF'
        ctx.beginPath()
        ctx.arc(sat1X, sat1Y, 8, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        // Core
        ctx.fillStyle = '#FFFFFF'
        ctx.beginPath()
        ctx.arc(sat1X, sat1Y, 4, 0, Math.PI * 2)
        ctx.fill()

        // SKY 2 - Green
        const sat2X = centerX + Math.cos(rotation + Math.PI * 0.66) * (radius + 60)
        const sat2Y = centerY + Math.sin(rotation + Math.PI * 0.66) * (radius + 60) * 0.4

        ctx.shadowBlur = 20
        ctx.shadowColor = '#00FF96'
        ctx.fillStyle = '#00FF96'
        ctx.beginPath()
        ctx.arc(sat2X, sat2Y, 8, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.fillStyle = '#FFFFFF'
        ctx.beginPath()
        ctx.arc(sat2X, sat2Y, 4, 0, Math.PI * 2)
        ctx.fill()

        // SKY 3 - Purple
        const sat3X = centerX + Math.cos(rotation + Math.PI * 1.33) * (radius + 70)
        const sat3Y = centerY + Math.sin(rotation + Math.PI * 1.33) * (radius + 70) * 0.35

        ctx.shadowBlur = 20
        ctx.shadowColor = '#B94FFF'
        ctx.fillStyle = '#B94FFF'
        ctx.beginPath()
        ctx.arc(sat3X, sat3Y, 8, 0, Math.PI * 2)
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.fillStyle = '#FFFFFF'
        ctx.beginPath()
        ctx.arc(sat3X, sat3Y, 4, 0, Math.PI * 2)
        ctx.fill()

        // Draw satellite orbits with different colors
        ctx.lineWidth = 1.5
        ctx.setLineDash([5, 5])

        // SKY 1 orbit - Cyan
        ctx.strokeStyle = 'rgba(0, 212, 255, 0.3)'
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, radius + 50, (radius + 50) * 0.3, 0, 0, Math.PI * 2)
        ctx.stroke()

        // SKY 2 orbit - Green
        ctx.strokeStyle = 'rgba(0, 255, 150, 0.3)'
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, radius + 60, (radius + 60) * 0.4, Math.PI * 0.2, 0, Math.PI * 2)
        ctx.stroke()

        // SKY 3 orbit - Purple
        ctx.strokeStyle = 'rgba(185, 79, 255, 0.3)'
        ctx.beginPath()
        ctx.ellipse(centerX, centerY, radius + 70, (radius + 70) * 0.35, -Math.PI * 0.15, 0, Math.PI * 2)
        ctx.stroke()

        ctx.setLineDash([])
      }

      rotation += 0.003
      animationId = requestAnimationFrame(drawGlobe)
    }

    drawGlobe()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [size, showSatellites, showCoverage])

  return (
    <div className="relative inline-block">
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        className="drop-shadow-2xl"
      />

      {/* Legend */}
      {showSatellites && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-3 text-xs text-nebula-gray bg-midnight-blue/80 backdrop-blur-sm px-4 py-2 rounded-full">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
            <span>SKY 1</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#00FF96] shadow-[0_0_8px_rgba(0,255,150,0.8)]" />
            <span>SKY 2</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#B94FFF] shadow-[0_0_8px_rgba(185,79,255,0.8)]" />
            <span>SKY 3</span>
          </div>
          {showCoverage && (
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-[#00FF96]/40 border border-[#00FF96]" />
              <span>Couverture</span>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
