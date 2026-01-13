import { ImageResponse } from 'next/og'
import { SITE_CONFIG } from '@/lib/constants'

export const runtime = 'edge'
export const alt = SITE_CONFIG.title
export const size = {
  width: 1200,
  height: 600,
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

        {/* Orbits */}
        <div
          style={{
            position: 'absolute',
            width: '700px',
            height: '350px',
            border: '2px solid #00D4FF',
            borderRadius: '50%',
            opacity: 0.2,
            top: '125px',
            left: '250px',
          }}
        />

        {/* Logo - Simplified */}
        <div
          style={{
            display: 'flex',
            position: 'relative',
            marginBottom: '30px',
          }}
        >
          <div
            style={{
              width: '100px',
              height: '100px',
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
                width: '65px',
                height: '65px',
                borderRadius: '50%',
                border: '2px solid #415A77',
              }}
            />
          </div>
          <div
            style={{
              position: 'absolute',
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: '#00D4FF',
              top: '10px',
              right: '-35px',
              boxShadow: '0 0 20px rgba(0, 212, 255, 0.8)',
            }}
          />
        </div>

        {/* Text */}
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
              fontSize: '64px',
              fontWeight: 'bold',
              color: '#E0E1DD',
              marginBottom: '15px',
            }}
          >
            ONE SKY
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#00D4FF',
              marginBottom: '25px',
              fontWeight: '600',
            }}
          >
            Intelligence Géospatiale Décisionnelle
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#778DA9',
              maxWidth: '800px',
              lineHeight: 1.3,
            }}
          >
            Observer la planète pour permettre au monde de décider mieux
          </div>
        </div>

        {/* Footer stats */}
        <div
          style={{
            position: 'absolute',
            bottom: '35px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            color: '#415A77',
            fontSize: '18px',
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
