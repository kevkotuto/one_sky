import { ReactNode } from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'bg-cosmic-blue/80 text-lunar-white',
        success: 'bg-success-green/20 text-success-green border border-success-green/50',
        warning: 'bg-alert-orange/20 text-alert-orange border border-alert-orange/50',
        info: 'bg-cyber-cyan/20 text-cyber-cyan border border-cyber-cyan/50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

interface BadgeProps extends VariantProps<typeof badgeVariants> {
  children: ReactNode
  className?: string
}

export default function Badge({ variant, children, className }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant, className }))}>
      {children}
    </span>
  )
}
