'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Globe3DProps {
  size?: number
  showSatellites?: boolean
  showCoverage?: boolean
}

export default function Globe3D({
  size = 500,
  showSatellites = true,
  showCoverage = true
}: Globe3DProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Prevent double rendering in development mode
    if (containerRef.current.children.length > 0) {
      return
    }

    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1000)
    camera.position.z = 3.2

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true
    })
    renderer.setSize(size, size)
    renderer.setPixelRatio(window.devicePixelRatio)
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0)
    directionalLight.position.set(5, 3, 5)
    scene.add(directionalLight)

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(1, 128, 128)

    // Texture loader
    const textureLoader = new THREE.TextureLoader()

    // Load realistic Earth texture
    textureLoader.load(
      '/earth-texture.jpg',
      (texture) => {
        // Texture loaded successfully - create material
        const earthMaterial = new THREE.MeshPhongMaterial({
          map: texture,
          specular: new THREE.Color(0x222222),
          shininess: 15,
        })

        const earth = new THREE.Mesh(earthGeometry, earthMaterial)
        scene.add(earth)

        // Atmosphere glow
        const atmosphereGeometry = new THREE.SphereGeometry(1.08, 64, 64)
        const atmosphereMaterial = new THREE.ShaderMaterial({
          transparent: true,
          side: THREE.BackSide,
          vertexShader: `
            varying vec3 vNormal;
            void main() {
              vNormal = normalize(normalMatrix * normal);
              gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
          `,
          fragmentShader: `
            varying vec3 vNormal;
            void main() {
              float intensity = pow(0.65 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
              gl_FragColor = vec4(0.0, 0.83, 1.0, 1.0) * intensity;
            }
          `
        })
        const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
        scene.add(atmosphere)

        // Satellites
        const satellites: THREE.Mesh[] = []
        const satelliteColors = [0x00D4FF, 0x00FF96, 0xB94FFF]

        if (showSatellites) {
          satelliteColors.forEach((color) => {
            // Satellites beaucoup plus gros
            const satGeometry = new THREE.SphereGeometry(0.06, 16, 16)
            const satMaterial = new THREE.MeshBasicMaterial({ color })
            const satellite = new THREE.Mesh(satGeometry, satMaterial)

            // Add bigger glow
            const glowGeometry = new THREE.SphereGeometry(0.10, 16, 16)
            const glowMaterial = new THREE.MeshBasicMaterial({
              color,
              transparent: true,
              opacity: 0.5
            })
            const glow = new THREE.Mesh(glowGeometry, glowMaterial)
            satellite.add(glow)

            satellites.push(satellite)
            scene.add(satellite)
          })
        }

        // Coverage zones (rings around continents) - plus visibles
        const coverageRings: THREE.Mesh[] = []
        if (showCoverage) {
          const createCoverageRing = (color: number, lat: number, lng: number) => {
            const ringGeometry = new THREE.TorusGeometry(0.30, 0.015, 16, 100)
            const ringMaterial = new THREE.MeshBasicMaterial({
              color,
              transparent: true,
              opacity: 0.6
            })
            const ring = new THREE.Mesh(ringGeometry, ringMaterial)

            // Position on sphere surface
            const phi = (90 - lat) * (Math.PI / 180)
            const theta = (lng + 180) * (Math.PI / 180)
            const radius = 1.03

            ring.position.x = -(radius * Math.sin(phi) * Math.cos(theta))
            ring.position.y = radius * Math.cos(phi)
            ring.position.z = radius * Math.sin(phi) * Math.sin(theta)

            ring.lookAt(0, 0, 0)
            scene.add(ring)
            coverageRings.push(ring)
            return ring
          }

          // Africa coverage (green)
          createCoverageRing(0x00FF96, 0, 20)
          // Europe coverage (cyan)
          createCoverageRing(0x00D4FF, 50, 10)
          // Americas coverage (purple)
          createCoverageRing(0xB94FFF, 10, -80)
        }

        // Animation
        let rotationSpeed = 0.002
        const animate = () => {
          requestAnimationFrame(animate)

          // Rotate Earth slowly
          earth.rotation.y += rotationSpeed
          atmosphere.rotation.y += rotationSpeed * 0.95

          // Animate satellites in different orbits - plus visibles
          satellites.forEach((satellite, index) => {
            const time = Date.now() * 0.0004 + index * (Math.PI * 2 / 3)
            const orbitRadius = 1.45 + index * 0.12
            const orbitTilt = 0.35 + index * 0.12

            satellite.position.x = Math.cos(time) * orbitRadius
            satellite.position.y = Math.sin(time) * orbitRadius * orbitTilt
            satellite.position.z = Math.sin(time * 1.2) * orbitRadius * 0.6
          })

          renderer.render(scene, camera)
        }
        animate()

        // Mouse interaction
        let isDragging = false
        let previousMousePosition = { x: 0, y: 0 }

        const onMouseDown = (e: MouseEvent) => {
          isDragging = true
          previousMousePosition = { x: e.clientX, y: e.clientY }
        }

        const onMouseUp = () => {
          isDragging = false
        }

        const onMouseMove = (e: MouseEvent) => {
          if (!isDragging) return

          const deltaX = e.clientX - previousMousePosition.x
          const deltaY = e.clientY - previousMousePosition.y

          earth.rotation.y += deltaX * 0.005
          earth.rotation.x += deltaY * 0.005
          atmosphere.rotation.y += deltaX * 0.005
          atmosphere.rotation.x += deltaY * 0.005

          // Limit vertical rotation
          earth.rotation.x = Math.max(-Math.PI / 4, Math.min(Math.PI / 4, earth.rotation.x))
          atmosphere.rotation.x = earth.rotation.x

          previousMousePosition = { x: e.clientX, y: e.clientY }
        }

        renderer.domElement.addEventListener('mousedown', onMouseDown)
        renderer.domElement.addEventListener('mouseup', onMouseUp)
        renderer.domElement.addEventListener('mousemove', onMouseMove)
        renderer.domElement.addEventListener('mouseleave', onMouseUp)

        // Cleanup
        return () => {
          renderer.domElement.removeEventListener('mousedown', onMouseDown)
          renderer.domElement.removeEventListener('mouseup', onMouseUp)
          renderer.domElement.removeEventListener('mousemove', onMouseMove)
          renderer.domElement.removeEventListener('mouseleave', onMouseUp)
        }
      },
      undefined,
      (error) => {
        console.error('Error loading Earth texture:', error)

        // Fallback: create simple blue sphere
        const fallbackMaterial = new THREE.MeshPhongMaterial({
          color: 0x1a4d6e,
          specular: new THREE.Color(0x333333),
          shininess: 10,
        })
        const earth = new THREE.Mesh(earthGeometry, fallbackMaterial)
        scene.add(earth)

        // Simple animation for fallback
        const animate = () => {
          requestAnimationFrame(animate)
          earth.rotation.y += 0.002
          renderer.render(scene, camera)
        }
        animate()
      }
    )

    // Cleanup
    return () => {
      if (containerRef.current && renderer.domElement) {
        try {
          containerRef.current.removeChild(renderer.domElement)
        } catch (e) {
          // Element already removed
        }
      }
      renderer.dispose()
      earthGeometry.dispose()
    }
  }, [size, showSatellites, showCoverage])

  return (
    <div className="relative inline-block">
      <div ref={containerRef} className="drop-shadow-2xl" />

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
        </div>
      )}

      {/* Hint */}
      <div className="absolute top-4 right-4 text-xs text-nebula-gray/60 bg-midnight-blue/50 backdrop-blur-sm px-3 py-1.5 rounded-full">
        🖱️ Glisser pour explorer
      </div>
    </div>
  )
}
