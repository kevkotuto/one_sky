import { ImageResponse } from 'next/og'
import { SITE_CONFIG } from '@/lib/constants'

export const runtime = 'edge'
export const alt = SITE_CONFIG.title
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0A0E1A',
          backgroundImage: 'linear-gradient(135deg, #0A0E1A 0%, #0D1B2A 100%)',
          position: 'relative',
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, #1B263B 1px, transparent 1px),
              linear-gradient(to bottom, #1B263B 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            opacity: 0.3,
          }}
        />

        {/* Orbits - decorative circles */}
        <div
          style={{
            position: 'absolute',
            width: '800px',
            height: '400px',
            border: '2px solid #00D4FF',
            borderRadius: '50%',
            opacity: 0.2,
            top: '115px',
            left: '200px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '300px',
            border: '2px solid #00D4FF',
            borderRadius: '50%',
            opacity: 0.3,
            top: '165px',
            left: '300px',
          }}
        />

        {/* Logo - Simplified version */}
        <div
          style={{
            display: 'flex',
            position: 'relative',
            marginBottom: '40px',
          }}
        >
          {/* Central sphere */}
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: '#1B263B',
              border: '4px solid #00D4FF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 40px rgba(0, 212, 255, 0.5)',
            }}
          >
            <div
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '2px solid #415A77',
              }}
            />
          </div>
          {/* Satellite dot */}
          <div
            style={{
              position: 'absolute',
              width: '20px',
              height: '20px',
              borderRadius: '50%',
              background: '#00D4FF',
              top: '10px',
              right: '-40px',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
            }}
          />
        </div>

        {/* Text content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            zIndex: 1,
          }}
        >
          <div
            style={{
              fontSize: '72px',
              fontWeight: 'bold',
              color: '#E0E1DD',
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            ONE SKY
          </div>
          <div
            style={{
              fontSize: '32px',
              color: '#00D4FF',
              marginBottom: '30px',
              fontWeight: '600',
            }}
          >
            Intelligence Géospatiale Décisionnelle
          </div>
          <div
            style={{
              fontSize: '24px',
              color: '#778DA9',
              maxWidth: '900px',
              lineHeight: 1.4,
            }}
          >
            Observer la planète pour permettre au monde de décider mieux, plus vite et durablement
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            color: '#415A77',
            fontSize: '20px',
          }}
        >
          <div>🛰️ 3 Satellites</div>
          <div>•</div>
          <div>🤖 IA Embarquée</div>
          <div>•</div>
          <div>🌍 Couverture Globale</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
