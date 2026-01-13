'use client';

import { useEffect, useState } from 'react';

interface FoldableState {
  isFoldable: boolean;
  isUnfolded: boolean;
  foldPosition: { left?: number; top?: number } | null;
  screenType: 'phone' | 'tablet' | 'desktop' | 'foldable';
}

export function useFoldableDetection(): FoldableState {
  const [state, setState] = useState<FoldableState>({
    isFoldable: false,
    isUnfolded: false,
    foldPosition: null,
    screenType: 'phone',
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const detectFoldable = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const aspectRatio = width / height;

      // Détecter les foldables basé sur les dimensions typiques
      const isFoldable =
        // Samsung Z Fold ouvert (large, aspect ratio carré/large)
        (width > 700 && width < 900 && aspectRatio > 0.8 && aspectRatio < 1.2) ||
        // Samsung Z Fold fermé (étroit)
        (width > 250 && width < 600 && height > 800);

      // Détecter si déplié (écran large et carré)
      const isUnfolded = width > 700 && aspectRatio > 0.8 && aspectRatio < 1.3;

      // Déterminer le type d'écran
      let screenType: FoldableState['screenType'] = 'phone';
      if (isFoldable) {
        screenType = 'foldable';
      } else if (width >= 1024) {
        screenType = 'desktop';
      } else if (width >= 768) {
        screenType = 'tablet';
      }

      // Tenter de détecter la position du pli (API expérimentale)
      let foldPosition = null;
      if ('getWindowSegments' in window && typeof (window as any).getWindowSegments === 'function') {
        const segments = (window as any).getWindowSegments();
        if (segments && segments.length > 1) {
          // Calculer la position approximative du pli
          foldPosition = {
            left: segments[0].width,
            top: segments[0].height,
          };
        }
      }

      setState({
        isFoldable,
        isUnfolded,
        foldPosition,
        screenType,
      });
    };

    detectFoldable();

    // Écouter les changements de taille d'écran
    window.addEventListener('resize', detectFoldable);
    window.addEventListener('orientationchange', detectFoldable);

    return () => {
      window.removeEventListener('resize', detectFoldable);
      window.removeEventListener('orientationchange', detectFoldable);
    };
  }, []);

  return state;
}
