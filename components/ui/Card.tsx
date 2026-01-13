import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  title?: string
  description?: string
  icon?: ReactNode
  children?: ReactNode
  hover?: boolean
  className?: string
}

export default function Card({
  title,
  description,
  icon,
  children,
  hover = true,
  className = '',
}: CardProps) {
  return (
    <div
      className={cn(
        'bg-cosmic-blue/50 backdrop-blur-sm border border-stellar-blue/30 rounded-lg p-6 transition-all duration-300',
        hover && 'hover:border-cyber-cyan/50 hover:shadow-lg hover:shadow-cyber-cyan/20 hover:-translate-y-1',
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-cyber-cyan">
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className="text-xl font-semibold text-lunar-white mb-2">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-nebula-gray mb-4">
          {description}
        </p>
      )}
      
      {children}
    </div>
  )
}
