'use client'

export default function OrbitalRings() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {/* Outer orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[800px] h-[300px] border border-cyber-cyan/30 rounded-full animate-[spin_40s_linear_infinite]" />
      </div>

      {/* Middle orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[220px] border border-cyber-cyan/40 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
      </div>

      {/* Inner orbit */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[400px] h-[150px] border border-cyber-cyan/50 rounded-full animate-[spin_20s_linear_infinite]" />
      </div>

      {/* Satellite dots */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[220px] animate-[spin_30s_linear_infinite_reverse]">
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-cyber-cyan rounded-full shadow-lg shadow-cyber-cyan/50" />
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[400px] h-[150px] animate-[spin_20s_linear_infinite]">
          <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-aurora-violet rounded-full shadow-lg shadow-aurora-violet/50" />
        </div>
      </div>
    </div>
  )
}
