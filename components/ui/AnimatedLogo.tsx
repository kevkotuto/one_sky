'use client'

export default function AnimatedLogo({ size = 320 }: { size?: number }) {
  const height = size / 2

  return (
    <div className="relative" style={{ width: size, height: height }}>
      <svg
        viewBox="0 0 320 160"
        width={size}
        height={height}
        className="drop-shadow-2xl overflow-visible"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Outer orbit - rotating slowly */}
        <ellipse
          cx="160"
          cy="80"
          rx="140"
          ry="45"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="0.5"
          opacity="0.3"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 160 80"
            to="360 160 80"
            dur="30s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Middle orbit - rotating opposite direction */}
        <ellipse
          cx="160"
          cy="80"
          rx="110"
          ry="35"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1"
          opacity="0.5"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 160 80"
            to="-360 160 80"
            dur="20s"
            repeatCount="indefinite"
          />
        </ellipse>

        {/* Inner orbit - static */}
        <ellipse
          cx="160"
          cy="80"
          rx="80"
          ry="25"
          fill="none"
          stroke="#00D4FF"
          strokeWidth="1.5"
          opacity="0.7"
        />

        {/* Central sphere - main body */}
        <circle
          cx="160"
          cy="80"
          r="30"
          fill="#1B263B"
          stroke="#00D4FF"
          strokeWidth="3"
          className="drop-shadow-lg"
        />

        {/* Inner circle detail */}
        <circle
          cx="160"
          cy="80"
          r="20"
          fill="none"
          stroke="#415A77"
          strokeWidth="1"
        />

        {/* Orbiting satellite - moves along ellipse */}
        <circle
          cx="230"
          cy="60"
          r="6"
          fill="#00D4FF"
          className="drop-shadow-xl"
          style={{
            filter: 'drop-shadow(0 0 8px #00D4FF)'
          }}
        >
          <animate
            attributeName="cx"
            values="230;90;230"
            dur="8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="cy"
            values="60;100;60"
            dur="8s"
            repeatCount="indefinite"
          />
        </circle>

        {/* Glow effect */}
        <defs>
          <radialGradient id="logo-glow">
            <stop offset="0%" stopColor="#00D4FF" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D4FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle
          cx="160"
          cy="80"
          r="40"
          fill="url(#logo-glow)"
          opacity="0.6"
          className="animate-pulse-slow"
        />
      </svg>
    </div>
  )
}
