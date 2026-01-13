import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const dynamic = 'force-static'
export const size = {
  width: 256,
  height: 256,
}
export const contentType = 'image/png'

export default function Icon() {
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
            width: '170px',
            height: '170px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0,212,255,0.6) 0%, rgba(0,212,255,0) 100%)',
            opacity: 0.7,
          }}
        />

        {/* Single orbit */}
        <div
          style={{
            position: 'absolute',
            width: '140px',
            height: '140px',
            borderRadius: '50%',
            border: '3px solid rgba(0,212,255,0.5)',
          }}
        />

        {/* Central sphere */}
        <div
          style={{
            position: 'absolute',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: '#1B263B',
            border: '5px solid #00D4FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Inner circle */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              border: '2px solid #415A77',
            }}
          />
        </div>

        {/* Orbiting satellite */}
        <div
          style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: '#00D4FF',
            top: '95px',
            left: '180px',
            boxShadow: '0 0 10px rgba(0,212,255,0.8)',
          }}
        />

        {/* Satellite outer glow */}
        <div
          style={{
            position: 'absolute',
            width: '28px',
            height: '28px',
            borderRadius: '50%',
            background: 'rgba(0,212,255,0.4)',
            top: '91px',
            left: '176px',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  )
}
