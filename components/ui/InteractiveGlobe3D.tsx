'use client'

import { useEffect, useRef, useState } from 'react'
import dynamic from 'next/dynamic'

// Dynamically import Globe to avoid SSR issues
const Globe = dynamic(() => import('react-globe.gl'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center" style={{ width: 400, height: 400 }}>
      <div className="text-cyber-cyan animate-pulse">Chargement du globe 3D...</div>
    </div>
  )
})

interface InteractiveGlobe3DProps {
  size?: number
  showSatellites?: boolean
  showCoverage?: boolean
}

interface SatelliteData {
  lat: number
  lng: number
  alt: number
  label: string
  color: string
}

export default function InteractiveGlobe3D({
  size = 400,
  showSatellites = true,
  showCoverage = true
}: InteractiveGlobe3DProps) {
  const globeEl = useRef<any>()
  const [satellites, setSatellites] = useState<SatelliteData[]>([])
  const [arcsData, setArcsData] = useState<any[]>([])

  useEffect(() => {
    // Auto-rotate
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 0.5
    }

    // Generate satellite orbits
    const generateSatelliteOrbit = (
      startLat: number,
      startLng: number,
      color: string,
      label: string
    ) => {
      const altitude = 0.15 // LEO orbit height (normalized)
      const points: SatelliteData[] = []
      const steps = 100

      for (let i = 0; i < steps; i++) {
        const angle = (i / steps) * Math.PI * 2
        const lat = startLat + Math.sin(angle) * 40
        const lng = startLng + Math.cos(angle) * 60
        points.push({
          lat,
          lng,
          alt: altitude,
          label: i === 0 ? label : '',
          color
        })
      }
      return points
    }

    if (showSatellites) {
      const sky1 = generateSatelliteOrbit(20, 0, '#00D4FF', 'SKY 1')
      const sky2 = generateSatelliteOrbit(-10, 60, '#00FF96', 'SKY 2')
      const sky3 = generateSatelliteOrbit(30, -50, '#B94FFF', 'SKY 3')

      // Animate satellites
      let angle = 0
      const animateSats = () => {
        const step = Math.floor((angle / (Math.PI * 2)) * 100)
        setSatellites([
          sky1[step % 100],
          sky2[step % 100],
          sky3[step % 100]
        ])
        angle += 0.01
        requestAnimationFrame(animateSats)
      }
      animateSats()
    }

    // Coverage arcs (from satellites to ground stations)
    if (showCoverage) {
      setArcsData([
        {
          startLat: 20,
          startLng: 0,
          endLat: 6.5,
          endLng: 3.4,
          color: ['#00D4FF', '#00FF96'],
          label: 'Afrique'
        },
        {
          startLat: -10,
          startLng: 60,
          endLat: 48.8,
          endLng: 2.3,
          color: ['#00FF96', '#00D4FF'],
          label: 'Europe'
        },
        {
          startLat: 30,
          startLng: -50,
          endLat: 40.7,
          endLng: -74.0,
          color: ['#B94FFF', '#00D4FF'],
          label: 'Amérique'
        }
      ])
    }
  }, [showSatellites, showCoverage])

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <Globe
        ref={globeEl}
        width={size}
        height={size}
        backgroundColor="rgba(0,0,0,0)"
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
        bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"

        // Atmosphere
        atmosphereColor="#00D4FF"
        atmosphereAltitude={0.15}

        // Satellites
        objectsData={showSatellites ? satellites : []}
        objectLat="lat"
        objectLng="lng"
        objectAltitude="alt"
        objectLabel="label"
        objectColor="color"
        objectRadius={1.5}

        // Coverage arcs
        arcsData={showCoverage ? arcsData : []}
        arcColor="color"
        arcDashLength={0.4}
        arcDashGap={0.2}
        arcDashAnimateTime={3000}
        arcStroke={0.5}
        arcAltitude={0.1}

        // Points (ground stations)
        pointsData={
          showCoverage
            ? [
                { lat: 6.5, lng: 3.4, color: '#00FF96', size: 0.5, label: 'Lagos' },
                { lat: 48.8, lng: 2.3, color: '#00D4FF', size: 0.5, label: 'Paris' },
                { lat: 40.7, lng: -74.0, color: '#B94FFF', size: 0.5, label: 'New York' }
              ]
            : []
        }
        pointLat="lat"
        pointLng="lng"
        pointColor="color"
        pointAltitude={0}
        pointRadius="size"
        pointLabel="label"
      />

      {/* Legend */}
      {showSatellites && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-3 text-xs text-nebula-gray bg-midnight-blue/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#00D4FF] shadow-[0_0_8px_rgba(0,212,255,0.8)]" />
            <span className="font-medium">SKY 1</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#00FF96] shadow-[0_0_8px_rgba(0,255,150,0.8)]" />
            <span className="font-medium">SKY 2</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-[#B94FFF] shadow-[0_0_8px_rgba(185,79,255,0.8)]" />
            <span className="font-medium">SKY 3</span>
          </div>
          {showCoverage && (
            <>
              <div className="w-px h-4 bg-nebula-gray/30" />
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#00FF96]/40 border border-[#00FF96]" />
                <span>Couverture</span>
              </div>
            </>
          )}
        </div>
      )}

      {/* Hint */}
      <div className="absolute top-4 right-4 text-xs text-nebula-gray/60 bg-midnight-blue/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
        🖱️ Glisser pour explorer
      </div>
    </div>
  )
}
