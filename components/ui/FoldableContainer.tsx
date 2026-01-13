import { ReactNode } from 'react';
import { useFoldableDetection } from '@/hooks/useFoldableDetection';
import { cn } from '@/lib/utils';

interface FoldableContainerProps {
  children: ReactNode;
  className?: string;
  /**
   * Mode d'adaptation pour les foldables :
   * - 'dual-pane': Divise le contenu en deux panneaux
   * - 'avoid-fold': Évite de placer du contenu sur le pli
   * - 'full-width': Utilise toute la largeur
   */
  foldableMode?: 'dual-pane' | 'avoid-fold' | 'full-width';
}

export function FoldableContainer({
  children,
  className,
  foldableMode = 'full-width',
}: FoldableContainerProps) {
  const { isFoldable, isUnfolded, screenType } = useFoldableDetection();

  // Classes de base
  const baseClasses = 'w-full';

  // Classes spécifiques aux foldables dépliés
  const foldableClasses = isFoldable && isUnfolded ? {
    'dual-pane': 'grid grid-cols-1 md:grid-cols-2 gap-8',
    'avoid-fold': 'px-8 md:px-16', // Ajouter du padding pour éviter le pli central
    'full-width': 'w-full',
  }[foldableMode] : '';

  // Classes de responsive standard
  const responsiveClasses = !isFoldable ? 'px-4 sm:px-6 lg:px-8' : '';

  return (
    <div
      className={cn(baseClasses, foldableClasses, responsiveClasses, className)}
      data-foldable={isFoldable}
      data-unfolded={isUnfolded}
      data-screen-type={screenType}
    >
      {children}
    </div>
  );
}
