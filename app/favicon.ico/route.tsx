import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'

export async function GET() {
  const size = { width: 32, height: 32 }

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0A0E1A',
          position: 'relative',
        }}
      >
        {/* Central sphere - simplified */}
        <div
          style={{
            position: 'absolute',
            width: '18px',
            height: '18px',
            borderRadius: '50%',
            background: '#1B263B',
            border: '2px solid #00D4FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Inner circle */}
          <div
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: '1px solid #415A77',
            }}
          />
        </div>

        {/* Orbiting satellite */}
        <div
          style={{
            position: 'absolute',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#00D4FF',
            top: '8px',
            left: '22px',
          }}
        />
      </div>
    ),
    {
      ...size,
      headers: {
        'Content-Type': 'image/x-icon',
      },
    }
  )
}
