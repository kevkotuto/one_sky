'use client'

export default function GeoGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {/* Vertical lines */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-stellar-blue"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      {/* Horizontal lines */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 h-px bg-stellar-blue"
            style={{ top: `${(i + 1) * 8.33}%` }}
          />
        ))}
      </div>

      {/* Scanning line effect */}
      <div className="absolute inset-0">
        <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyber-cyan to-transparent animate-[scan_8s_ease-in-out_infinite]" />
      </div>
    </div>
  )
}
