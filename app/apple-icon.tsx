import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

export default function AppleIcon() {
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
        {/* Glow effect behind */}
        <div
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.6) 0%, rgba(0,212,255,0) 100%)',
            opacity: 0.7,
          }}
        />

        {/* Single orbit */}
        <div
          style={{
            position: 'absolute',
            width: '98px',
            height: '98px',
            borderRadius: '50%',
            border: '2px solid rgba(0,212,255,0.5)',
          }}
        />

        {/* Central sphere */}
        <div
          style={{
            position: 'absolute',
            width: '63px',
            height: '63px',
            borderRadius: '50%',
            background: '#1B263B',
            border: '4px solid #00D4FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Inner circle */}
          <div
            style={{
              width: '45px',
              height: '45px',
              borderRadius: '50%',
              border: '2px solid #415A77',
            }}
          />
        </div>

        {/* Orbiting satellite */}
        <div
          style={{
            position: 'absolute',
            width: '14px',
            height: '14px',
            borderRadius: '50%',
            background: '#00D4FF',
            top: '67px',
            left: '126px',
            boxShadow: '0 0 8px rgba(0,212,255,0.8)',
          }}
        />

        {/* Satellite outer glow */}
        <div
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: 'rgba(0,212,255,0.4)',
            top: '64px',
            left: '123px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
